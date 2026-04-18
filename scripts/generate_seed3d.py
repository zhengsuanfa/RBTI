#!/usr/bin/env python3
"""Create a Volcengine Ark Seed3D task, poll it, then download the result zip."""

from __future__ import annotations

import argparse
import base64
import json
import mimetypes
import os
import sys
import time
import urllib.error
import urllib.request
import zipfile
from pathlib import Path


API_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3"
MODEL_ID = "doubao-seed3d-2-0-260328"


def request_json(method: str, url: str, api_key: str, body: dict | None = None) -> dict:
    data = json.dumps(body).encode("utf-8") if body is not None else None
    request = urllib.request.Request(
        url,
        data=data,
        method=method,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {exc.code}: {detail}") from exc


def create_task(api_key: str, image_url: str, model: str, params: str) -> str:
    payload = {
        "model": model,
        "content": [
            {
                "type": "text",
                "text": params,
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": image_url,
                },
            },
        ],
    }
    result = request_json("POST", f"{API_BASE_URL}/contents/generations/tasks", api_key, payload)
    task_id = result.get("id")
    if not task_id:
        raise RuntimeError(f"Create task response has no id: {json.dumps(result, ensure_ascii=False)}")
    return task_id


def poll_task(api_key: str, task_id: str, interval: int, max_minutes: int) -> dict:
    deadline = time.time() + max_minutes * 60
    while time.time() < deadline:
        result = request_json("GET", f"{API_BASE_URL}/contents/generations/tasks/{task_id}", api_key)
        status = result.get("status")
        print(f"[seed3d] task={task_id} status={status}", flush=True)
        if status == "succeeded":
            return result
        if status == "failed":
            raise RuntimeError(f"Seed3D task failed: {json.dumps(result.get('error'), ensure_ascii=False)}")
        time.sleep(interval)
    raise TimeoutError(f"Seed3D task did not finish within {max_minutes} minutes: {task_id}")


def extract_file_url(result: dict) -> str:
    content = result.get("content") or {}
    file_url = content.get("file_url")
    if not file_url:
        raise RuntimeError(f"Task succeeded but no content.file_url found: {json.dumps(result, ensure_ascii=False)}")
    return file_url


def download_result(file_url: str, output_dir: Path, task_id: str) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    zip_path = output_dir / f"{task_id}.zip"
    print(f"[seed3d] downloading {zip_path}", flush=True)
    urllib.request.urlretrieve(file_url, zip_path)

    extract_dir = output_dir / task_id
    extract_dir.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(zip_path) as archive:
        archive.extractall(extract_dir)
    return extract_dir


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate a 3D asset with Volcengine Ark Seed3D.")
    image_group = parser.add_mutually_exclusive_group(required=True)
    image_group.add_argument("--image-url", help="Public HTTPS URL of the source mascot image.")
    image_group.add_argument("--image-file", help="Local image file. The script sends it as a data URL.")
    parser.add_argument("--output-dir", default="generated/seed3d", help="Directory for the downloaded zip and extracted files.")
    parser.add_argument("--model", default=MODEL_ID, help="Ark Model ID.")
    parser.add_argument("--file-format", default="glb", choices=["glb", "obj", "usd", "usdz"])
    parser.add_argument("--subdivisionlevel", default="medium", choices=["low", "medium", "high"])
    parser.add_argument("--poll-interval", type=int, default=30)
    parser.add_argument("--max-minutes", type=int, default=20)
    args = parser.parse_args()

    api_key = os.getenv("ARK_API_KEY")
    if not api_key:
        print("Missing ARK_API_KEY. Export it first, then rerun this script.", file=sys.stderr)
        return 2

    image_url = args.image_url
    if args.image_file:
        image_path = Path(args.image_file)
        mime_type = mimetypes.guess_type(image_path.name)[0] or "image/png"
        image_data = base64.b64encode(image_path.read_bytes()).decode("ascii")
        image_url = f"data:{mime_type};base64,{image_data}"

    params = f"--subdivisionlevel {args.subdivisionlevel} --fileformat {args.file_format}"
    task_id = create_task(api_key, image_url, args.model, params)
    print(f"[seed3d] created task: {task_id}", flush=True)

    result = poll_task(api_key, task_id, args.poll_interval, args.max_minutes)
    file_url = extract_file_url(result)
    extract_dir = download_result(file_url, Path(args.output_dir), task_id)
    print(f"[seed3d] done: {extract_dir.resolve()}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
