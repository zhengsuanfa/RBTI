const STORAGE_KEY = "satiUnlockedAnimals";
const data = window.SATI_DATA;
const animalMap = Object.fromEntries(data.animals.map((animal) => [animal.id, animal]));
const animalOrder = data.animals.map((animal) => animal.id);

let quizIndex = 0;
let answers = [];
let latestResult = null;
let deepUnlocked = false;
let locked = false;

const $ = (id) => document.getElementById(id);
const screens = Array.from(document.querySelectorAll(".screen"));

const startButton = $("startButton");
const collectionStartButton = $("collectionStartButton");
const quizProgressText = $("quizProgressText");
const quizProgressPercent = $("quizProgressPercent");
const quizProgressBar = $("quizProgressBar");
const questionCode = $("questionCode");
const questionTitle = $("questionTitle");
const optionList = $("optionList");
const answerHint = $("answerHint");
const resultHeading = $("resultHeading");
const resultSubline = $("resultSubline");
const resultCards = $("resultCards");
const answerPath = $("answerPath");
const scoreList = $("scoreList");
const partOne = $("partOne");
const partTwo = $("partTwo");
const unlockDeepButton = $("unlockDeepButton");
const openCollectionButton = $("openCollectionButton");
const retryButton = $("retryButton");
const shareButton = $("shareButton");
const collectionGrid = $("collectionGrid");
const collectionProgress = $("collectionProgress");
const homeUnlockedCount = $("homeUnlockedCount");
const homeQuestionCount = $("homeQuestionCount");
const homePreview = $("homePreview");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showScreen(screenId) {
  screens.forEach((screen) => {
    const isActive = screen.id === screenId;
    screen.classList.toggle("is-active", isActive);
    if (isActive) screen.scrollTop = 0;
  });
  window.scrollTo({ top: 0, behavior: "auto" });
  renderHomeStats();
  if (screenId === "collectionScreen") renderCollection();
}

function readUnlocked() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return new Set(parsed.filter((id) => animalMap[id]));
  } catch {
    return new Set();
  }
}

function writeUnlocked(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
}

function unlockAnimals(ids) {
  const unlocked = readUnlocked();
  ids.forEach((id) => unlocked.add(id));
  writeUnlocked(unlocked);
}

function renderHomeStats() {
  const unlocked = readUnlocked();
  homeQuestionCount.textContent = data.questions.length;
  homeUnlockedCount.textContent = unlocked.size;
  const preview = animalOrder
    .filter((id) => unlocked.has(id))
    .slice(0, 6)
    .map((id) => animalMap[id]);

  homePreview.innerHTML = preview.length
    ? preview
        .map(
          (animal) => `
            <button class="preview-chip" type="button" data-preview-animal="${animal.id}" style="--tone:${animal.tone};--accent:${animal.accent}">
              <span>${animal.emoji}</span>
              <strong>${escapeHTML(animal.name)}</strong>
            </button>
          `
        )
        .join("")
    : `<p>还没有解锁卡片。第一局抽出来的动物，会自动进入图鉴。</p>`;
}

function resetQuiz() {
  quizIndex = 0;
  answers = [];
  latestResult = null;
  deepUnlocked = false;
  locked = false;
  renderQuiz();
}

function renderQuiz() {
  const question = data.questions[quizIndex];
  const percent = Math.round(((quizIndex + 1) / data.questions.length) * 100);
  locked = false;
  quizProgressText.textContent = `${quizIndex + 1} / ${data.questions.length}`;
  quizProgressPercent.textContent = `${percent}%`;
  quizProgressBar.style.width = `${percent}%`;
  questionCode.textContent = question.id;
  questionTitle.textContent = question.title;
  answerHint.classList.remove("is-visible");
  answerHint.textContent = "";
  optionList.classList.remove("is-locked");
  optionList.innerHTML = question.options
    .map(
      (option) => `
        <button class="option-button" type="button" data-option="${option.label}">
          <span>${option.label}</span>
          <strong>${escapeHTML(option.text)}</strong>
        </button>
      `
    )
    .join("");
}

function hashPath(path) {
  return path.split("").reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

function chooseStablePair(winners, path) {
  if (winners.length <= 2) return winners;
  const seed = Math.abs(hashPath(path));
  const first = seed % winners.length;
  const second = (first + 1 + (seed % (winners.length - 1))) % winners.length;
  return [winners[first], winners[second]];
}

function calculateResult() {
  const scores = Object.fromEntries(animalOrder.map((id) => [id, 0]));
  answers.forEach((answer) => {
    scores[answer.animal] += 1;
  });

  const maxScore = Math.max(...Object.values(scores));
  const winners = animalOrder.filter((id) => scores[id] === maxScore);
  const path = answers.map((answer) => answer.label).join("");
  const displayIds = chooseStablePair(winners, path);

  return {
    path,
    scores,
    maxScore,
    winners,
    displayIds,
    animals: displayIds.map((id) => animalMap[id])
  };
}

function answerQuestion(label) {
  if (locked) return;
  const question = data.questions[quizIndex];
  const option = question.options.find((item) => item.label === label);
  if (!option) return;

  locked = true;
  answers.push({
    questionId: question.id,
    label: option.label,
    animal: option.animal
  });

  optionList.classList.add("is-locked");
  optionList.querySelector(`[data-option="${label}"]`)?.classList.add("is-selected");
  answerHint.textContent = "已记录这次直觉选择";
  answerHint.classList.add("is-visible");

  window.setTimeout(() => {
    if (quizIndex < data.questions.length - 1) {
      quizIndex += 1;
      renderQuiz();
      return;
    }

    latestResult = calculateResult();
    unlockAnimals(latestResult.displayIds);
    renderResult();
    showScreen("resultScreen");
  }, 360);
}

function renderAnimalCard(animal, index, total) {
  const cardLabel = total > 1 ? `MIX ${index + 1}` : "SATI CARD";
  return `
    <article class="animal-card reveal-card" style="--tone:${animal.tone};--accent:${animal.accent}">
      <div class="card-topline">
        <span>${cardLabel}</span>
        <strong>${escapeHTML(animal.name)}</strong>
      </div>
      <div class="animal-art">${animal.emoji}</div>
      <h3>${escapeHTML(animal.name)} · ${escapeHTML(animal.title)}</h3>
      <blockquote>${escapeHTML(animal.quote)}</blockquote>
      <div class="tag-row">${animal.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
    </article>
  `;
}

function renderResult() {
  if (!latestResult) return;
  const isMixed = latestResult.displayIds.length > 1;
  const names = latestResult.animals.map((animal) => animal.name).join(" + ");
  resultHeading.textContent = isMixed ? `${names} 的混合灵魂` : `你是 ${latestResult.animals[0].name}`;
  resultSubline.textContent = isMixed
    ? `出现并列最高分，系统从 ${latestResult.winners.length} 个并列结果里稳定抽出 2 张展示。`
    : `最高分 ${latestResult.maxScore} 分，已解锁 1 张灵魂动物卡。`;
  resultCards.innerHTML = latestResult.animals.map((animal, index) => renderAnimalCard(animal, index, latestResult.animals.length)).join("");
  answerPath.textContent = latestResult.path;
  renderScores(latestResult);
  renderPartOne(latestResult.animals);
  renderPartTwo(latestResult.animals);
  unlockDeepButton.hidden = false;
  partTwo.classList.toggle("is-locked", !deepUnlocked);
  unlockDeepButton.textContent = deepUnlocked ? "灵魂暗码已解锁" : "点击解锁灵魂暗码";
  shareButton.textContent = "复制结果文案";
}

function renderScores(result) {
  const ranked = animalOrder
    .map((id) => ({ ...animalMap[id], score: result.scores[id] }))
    .sort((a, b) => b.score - a.score || animalOrder.indexOf(a.id) - animalOrder.indexOf(b.id));

  scoreList.innerHTML = ranked
    .map((animal) => {
      const width = `${Math.round((animal.score / data.questions.length) * 100)}%`;
      const active = result.displayIds.includes(animal.id) ? "is-winner" : "";
      return `
        <article class="score-item ${active}" style="--tone:${animal.tone};--accent:${animal.accent}">
          <span>${animal.emoji} ${escapeHTML(animal.name)}</span>
          <i><b style="width:${width}"></b></i>
          <strong>${animal.score}</strong>
        </article>
      `;
    })
    .join("");
}

function renderPartOne(animals) {
  partOne.innerHTML = animals
    .map(
      (animal) => `
        <article class="reading-item">
          <h3>${animal.emoji} ${escapeHTML(animal.name)} · ${escapeHTML(animal.title)}</h3>
          <p>${escapeHTML(animal.intro)}</p>
        </article>
      `
    )
    .join("");
}

function renderPartTwo(animals) {
  partTwo.innerHTML = animals
    .map(
      (animal) => `
        <article class="reading-item deep-item" style="--tone:${animal.tone};--accent:${animal.accent}">
          <h3>${animal.emoji} ${escapeHTML(animal.name)} 深度解析</h3>
          ${animal.deep
            .map(
              (section) => `
                <div>
                  <strong>${escapeHTML(section.title)}</strong>
                  <p>${escapeHTML(section.copy)}</p>
                </div>
              `
            )
            .join("")}
        </article>
      `
    )
    .join("");
}

function renderCollection() {
  const unlocked = readUnlocked();
  collectionProgress.textContent = `${unlocked.size} / ${animalOrder.length}`;
  collectionGrid.innerHTML = data.animals
    .map((animal) => {
      const isUnlocked = unlocked.has(animal.id);
      return `
        <button
          class="collection-card ${isUnlocked ? "is-unlocked" : "is-locked"}"
          type="button"
          data-collection-animal="${animal.id}"
          ${isUnlocked ? "" : "disabled"}
          style="--tone:${animal.tone};--accent:${animal.accent}"
        >
          <span>${isUnlocked ? animal.emoji : "?"}</span>
          <strong>${isUnlocked ? escapeHTML(animal.name) : "未解锁"}</strong>
          <em>${isUnlocked ? escapeHTML(animal.title) : "完成测试后出现"}</em>
        </button>
      `;
    })
    .join("");
}

function showAnimalFromCollection(id) {
  const animal = animalMap[id];
  if (!animal) return;
  latestResult = {
    path: "图鉴",
    scores: Object.fromEntries(animalOrder.map((animalId) => [animalId, animalId === id ? 1 : 0])),
    maxScore: 1,
    winners: [id],
    displayIds: [id],
    animals: [animal]
  };
  deepUnlocked = true;
  renderResult();
  showScreen("resultScreen");
}

async function copyShareText() {
  if (!latestResult) return;
  const names = latestResult.animals.map((animal) => `${animal.emoji}${animal.name}`).join(" + ");
  const title = latestResult.displayIds.length > 1 ? `${names} 的混合灵魂` : `${names} 灵魂动物卡`;
  const line = latestResult.animals.map((animal) => animal.quote).join(" ");
  const text = `我的 SATI 结果：${title}。${line}`;
  try {
    await navigator.clipboard.writeText(text);
    shareButton.textContent = "已复制";
  } catch {
    shareButton.textContent = "可截图分享";
  }
  window.setTimeout(() => {
    shareButton.textContent = "复制结果文案";
  }, 1400);
}

document.addEventListener("click", (event) => {
  const screenButton = event.target.closest("[data-screen]");
  if (screenButton) {
    showScreen(screenButton.dataset.screen);
    return;
  }

  const previewButton = event.target.closest("[data-preview-animal]");
  if (previewButton) {
    showAnimalFromCollection(previewButton.dataset.previewAnimal);
  }
});

optionList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (button) answerQuestion(button.dataset.option);
});

collectionGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-collection-animal]");
  if (button) showAnimalFromCollection(button.dataset.collectionAnimal);
});

startButton.addEventListener("click", () => {
  resetQuiz();
  showScreen("quizScreen");
});

collectionStartButton.addEventListener("click", () => {
  resetQuiz();
  showScreen("quizScreen");
});

openCollectionButton.addEventListener("click", () => showScreen("collectionScreen"));
retryButton.addEventListener("click", () => {
  resetQuiz();
  showScreen("quizScreen");
});

unlockDeepButton.addEventListener("click", () => {
  deepUnlocked = true;
  partTwo.classList.remove("is-locked");
  unlockDeepButton.textContent = "灵魂暗码已解锁";
});

shareButton.addEventListener("click", copyShareText);

renderHomeStats();
renderCollection();
resetQuiz();
showScreen("homeScreen");

window.__SATI_TEST__ = {
  calculate(labels) {
    const savedAnswers = answers;
    answers = labels.map((label, index) => {
      const question = data.questions[index];
      const option = question.options.find((item) => item.label === label);
      return { questionId: question.id, label, animal: option.animal };
    });
    const result = calculateResult();
    answers = savedAnswers;
    return result;
  }
};
