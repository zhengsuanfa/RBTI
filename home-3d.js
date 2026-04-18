import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const container = document.getElementById("homeModel");
const canvas = document.getElementById("homeModelCanvas");
const statusLabel = document.getElementById("homeModelStatus");

if (container && canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(0, 0.9, 5.9);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.15;
  controls.minPolarAngle = Math.PI * 0.42;
  controls.maxPolarAngle = Math.PI * 0.6;
  controls.target.set(0, -0.03, 0);

  const ambient = new THREE.HemisphereLight(0xffffff, 0xe7eedf, 2.2);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
  keyLight.position.set(3, 4, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xf3d029, 1.1);
  fillLight.position.set(-3, 2, 2);
  scene.add(fillLight);

  const modelRoot = new THREE.Group();
  scene.add(modelRoot);

  function resize() {
    const { width, height } = container.getBoundingClientRect();
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function fitModel(model) {
    const bounds = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);

    model.position.sub(center);
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    model.scale.multiplyScalar(2.52 / maxAxis);
    model.rotation.set(0, -0.22, 0);

    const fittedBounds = new THREE.Box3().setFromObject(model);
    const fittedSize = new THREE.Vector3();
    fittedBounds.getSize(fittedSize);
    model.position.y += fittedSize.y * 0.045;
  }

  const loader = new GLTFLoader();
  loader.load(
    "./assets/mascot-web.glb",
    (gltf) => {
      const model = gltf.scene;
      model.traverse((node) => {
        if (node.isMesh) {
          node.frustumCulled = false;
        }
      });
      fitModel(model);
      modelRoot.add(model);
      container.classList.add("is-loaded");
      container.dataset.loaded = "true";
      if (statusLabel) statusLabel.textContent = "转一下面对今天的你";
    },
    (event) => {
      if (!statusLabel || !event.total) return;
      const progress = Math.min(99, Math.round((event.loaded / event.total) * 100));
      statusLabel.textContent = `吉祥物正在登场 ${progress}%`;
    },
    () => {
      if (statusLabel) statusLabel.textContent = "吉祥物加载失败";
      container.dataset.loaded = "false";
    }
  );

  const observer = new ResizeObserver(resize);
  observer.observe(container);
  resize();

  function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}
