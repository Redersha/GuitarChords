const chords = [
  {
    name: "Cmaj",
    description: "C大三和弦，适用于许多流行歌曲，位置舒适，适合初学者。",
    shape: ["x", 3, 2, 0, 1, 0],
    fingers: ["x", 3, 2, 0, 1, 0]
  },
  {
    name: "Gmaj",
    description: "G大三和弦，充满明亮感，是常见的节奏和弦。",
    shape: [3, 2, 0, 0, 0, 3],
    fingers: [2, 1, 0, 0, 0, 3]
  },
  {
    name: "Dmaj",
    description: "D大三和弦，适合民谣和抒情风格。",
    shape: ["x", "x", 0, 2, 3, 2],
    fingers: ["x", "x", 0, 1, 3, 2]
  },
  {
    name: "Emaj",
    description: "E大三和弦，音色饱满，是许多摇滚与流行歌曲的基础。",
    shape: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0]
  },
  {
    name: "Amaj",
    description: "A大三和弦，音色明亮，在摇滚和民谣中非常常见。",
    shape: ["x", 0, 2, 2, 2, 0],
    fingers: ["x", 0, 1, 3, 4, 0]
  },
  {
    name: "Fmaj",
    description: "F大三和弦，经典横按和弦，适合进阶练习。",
    shape: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1]
  },
  {
    name: "Bmaj",
    description: "B大三和弦，标准横按和弦，适合转换到 C#m 和 F#。",
    shape: ["x", 2, 4, 4, 4, 2],
    fingers: ["x", 1, 3, 4, 2, 1]
  },
  {
    name: "Am",
    description: "A小三和弦，常用于民谣、抒情和缓慢节奏。",
    shape: ["x", 0, 2, 2, 1, 0],
    fingers: ["x", 0, 2, 3, 1, 0]
  },
  {
    name: "Em",
    description: "E小三和弦，手指布局简单，适合快速过渡。",
    shape: [0, 2, 2, 0, 0, 0],
    fingers: [0, 2, 3, 0, 0, 0]
  },
  {
    name: "Dm",
    description: "D小三和弦，适合抒情与民谣。",
    shape: ["x", "x", 0, 2, 3, 1],
    fingers: ["x", "x", 0, 1, 3, 2]
  },
  {
    name: "Bm",
    description: "B小三和弦，典型横按小和弦，适合流行和弦进程。",
    shape: ["x", 2, 4, 4, 3, 2],
    fingers: ["x", 1, 4, 2, 3, 1]
  },
  {
    name: "F#m",
    description: "F#小三和弦，常用于摇滚与现代流行。",
    shape: ["x", 2, 4, 4, 2, 2],
    fingers: ["x", 1, 4, 2, 3, 1]
  },
  {
    name: "Gm",
    description: "G小三和弦，温暖深沉的音色，用于蓝调与灵魂乐。",
    shape: [3, 5, 5, 3, 3, 3],
    fingers: [1, 3, 4, 1, 1, 1]
  },
  {
    name: "Cm",
    description: "C小三和弦，常见于摇滚与流行音乐。",
    shape: ["x", 3, 3, 5, 5, 4],
    fingers: ["x", 1, 4, 2, 3, 1]
  },
  {
    name: "Am7",
    description: "A小七和弦，柔和优美，常用于爵士与蓝调。",
    shape: ["x", 0, 2, 0, 1, 0],
    fingers: ["x", 0, 2, 0, 1, 0]
  },
  {
    name: "Em7",
    description: "E小七和弦，开放和弦，具有宁静感。",
    shape: [0, 2, 2, 0, 3, 0],
    fingers: [0, 2, 3, 0, 4, 0]
  },
  {
    name: "Dm7",
    description: "D小七和弦，柔和的七度色彩，适合蓝调与爵士。",
    shape: ["x", "x", 0, 2, 1, 1],
    fingers: ["x", "x", 0, 2, 1, 1]
  },
  {
    name: "G7",
    description: "G属七和弦，蓝调性质，常用于节奏与布鲁斯。",
    shape: [3, 2, 0, 0, 0, 1],
    fingers: [2, 1, 0, 0, 0, 1]
  },
  {
    name: "A7",
    description: "A属七和弦，布鲁斯风格，充满力量感。",
    shape: ["x", 0, 2, 0, 2, 0],
    fingers: ["x", 0, 2, 0, 3, 0]
  },
  {
    name: "D7",
    description: "D属七和弦，布鲁斯性质，适合节奏伴奏。",
    shape: ["x", "x", 0, 2, 1, 2],
    fingers: ["x", "x", 0, 2, 1, 3]
  },
  {
    name: "E7",
    description: "E属七和弦，布鲁斯和摇滚标配，音色锐利。",
    shape: [0, 2, 1, 1, 0, 0],
    fingers: [0, 2, 1, 1, 0, 0]
  },
  {
    name: "Gsus4",
    description: "G sus 4 和弦，挂留感，常用于过渡。",
    shape: [3, 3, 0, 0, 0, 3],
    fingers: [1, 3, 0, 0, 0, 1]
  },
  {
    name: "Dsus4",
    description: "D sus 4 和弦，开放而富有张力。",
    shape: ["x", "x", 0, 2, 3, 3],
    fingers: ["x", "x", 0, 1, 4, 3]
  },
  {
    name: "Cadd9",
    description: "C加九和弦，现代音色，用于流行与独立音乐。",
    shape: ["x", 3, 2, 3, 3, 0],
    fingers: ["x", 2, 1, 3, 4, 0]
  },
  {
    name: "Gadd9",
    description: "G加九和弦，明亮开放，常见于现代流行。",
    shape: [3, 2, 0, 2, 0, 3],
    fingers: [2, 1, 0, 3, 0, 4]
  },
  {
    name: "Cmaj7",
    description: "C大七和弦，优雅的大七度，适合爵士与软摇滚。",
    shape: ["x", 3, 2, 0, 0, 0],
    fingers: ["x", 3, 2, 0, 0, 0]
  },
  {
    name: "Gmaj7",
    description: "G大七和弦，明亮而优雅，流行于现代音乐。",
    shape: [3, 2, 0, 0, 0, 2],
    fingers: [3, 2, 0, 0, 0, 1]
  },
  {
    name: "Fmaj7",
    description: "F大七和弦，温暖深邃，适合爵士与融合音乐。",
    shape: ["x", 3, 3, 2, 1, 0],
    fingers: ["x", 3, 4, 2, 1, 0]
  },
  {
    name: "Fm",
    description: "F小三和弦，深沉的音色，常见于各类音乐风格。",
    shape: [1, 3, 3, 1, 1, 1],
    fingers: [1, 3, 4, 1, 1, 1]
  }
];

const moodProgressions = {
  pop: {
    title: "明亮流行",
    description: "适合轻快节奏的流行、歌曲伴奏和清新旋律。",
    progressions: [
      { name: "经典流行", chords: ["Cmaj", "Gmaj", "Am", "Fmaj"] },
      { name: "现代氛围", chords: ["Cmaj7", "Gadd9", "Am7", "Fmaj7"] },
      { name: "开放明亮", chords: ["Gmaj", "Dmaj", "Em", "Cmaj"] }
    ]
  },
  ballad: {
    title: "抒情柔和",
    description: "适合慢速民谣、情歌与温柔的指弹伴奏。",
    progressions: [
      { name: "温柔情感", chords: ["Am", "Fmaj", "Cmaj", "Gmaj"] },
      { name: "宁静氛围", chords: ["Em", "Cmaj", "Gmaj", "Dmaj"] },
      { name: "淡淡忧伤", chords: ["Dm", "Am", "Gmaj", "Cmaj"] }
    ]
  },
  rock: {
    title: "摇滚有力",
    description: "适合激烈、能量十足的电吉他与编配。",
    progressions: [
      { name: "摇滚经典", chords: ["Emaj", "Amaj", "Bmaj", "Amaj"] },
      { name: "动力节奏", chords: ["Gmaj", "Dmaj", "Em", "Cmaj"] },
      { name: "强力推进", chords: ["F#m", "Dmaj", "Amaj", "Emaj"] }
    ]
  },
  blues: {
    title: "布鲁斯怀旧",
    description: "适合布鲁斯八小节、蓝调与复古节奏。",
    progressions: [
      { name: "布鲁斯十二小节", chords: ["E7", "A7", "E7", "D7"] },
      { name: "怀旧感觉", chords: ["E7", "A7", "D7", "G7"] },
      { name: "经典布鲁斯", chords: ["A7", "D7", "E7", "A7"] }
    ]
  },
  jazz: {
    title: "爵士慵懒",
    description: "适合酒吧氛围、慢节奏爵士与临场演奏。",
    progressions: [
      { name: "经典四和弦", chords: ["Cmaj7", "Dm7", "G7", "Cmaj7"] },
      { name: "爵士走向", chords: ["Fmaj7", "Gmaj7", "Em7", "A7"] },
      { name: "柔和循环", chords: ["Am7", "Dm7", "G7", "Cmaj7"] }
    ]
  },
  dream: {
    title: "梦幻空灵",
    description: "适合梦幻电子、独立曲风和氛围音乐。",
    progressions: [
      { name: "空灵流动", chords: ["Cadd9", "Gadd9", "Em7", "Dmaj"] },
      { name: "柔和律动", chords: ["Fmaj7", "Cmaj7", "Gmaj7", "Em7"] },
      { name: "氛围展开", chords: ["Am", "Fmaj7", "Cmaj7", "Gadd9"] }
    ]
  },
  sad: {
    title: "悲伤深沉",
    description: "适合忧郁、内省和影视配乐式的情绪。",
    progressions: [
      { name: "深沉悲伤", chords: ["Em", "Gmaj", "Dmaj", "Cmaj"] },
      { name: "低吟诉说", chords: ["Am", "Fmaj", "Cmaj", "Gmaj"] },
      { name: "淡淡离愁", chords: ["Dm", "Am", "Em", "Gmaj"] }
    ]
  },
  summer: {
    title: "夏日欢快",
    description: "适合户外、节日与轻松派对场景。",
    progressions: [
      { name: "阳光律动", chords: ["Cmaj", "Gmaj", "Am", "Fmaj"] },
      { name: "海滩节奏", chords: ["Gmaj", "Cmaj", "Dmaj", "Em"] },
      { name: "轻快行走", chords: ["Dmaj", "Amaj", "Bm", "Gmaj"] }
    ]
  }
};


const pinnedGrid = document.getElementById("pinnedGrid");
const pinnedSection = document.getElementById("pinnedSection");
const clearPinnedBtn = document.getElementById("clearPinnedBtn");
const searchInput = document.getElementById("searchInput");
const moodSelect = document.getElementById("moodSelect");
const progressionResults = document.getElementById("progressionResults");

let pinnedChords = [];

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : "";
}

function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function loadPinnedChords() {
  const saved = getCookie("pinnedChords");
  if (saved) {
    try {
      pinnedChords = JSON.parse(saved);
    } catch {
      pinnedChords = [];
    }
  }
}

function savePinnedChords() {
  setCookie("pinnedChords", JSON.stringify(pinnedChords));
}

function togglePin(chordName) {
  const index = pinnedChords.indexOf(chordName);
  if (index > -1) {
    pinnedChords.splice(index, 1);
  } else {
    pinnedChords.push(chordName);
  }
  savePinnedChords();
  refreshDisplay();
}

function clearAllPinned() {
  pinnedChords = [];
  savePinnedChords();
  refreshDisplay();
}

function isPinned(chordName) {
  return pinnedChords.includes(chordName);
}

function getChordByName(name) {
  return chords.find((chord) => chord.name === name);
}

function renderProgressionCard(progression) {
  const card = document.createElement("div");
  card.className = "prog-card";

  const title = document.createElement("h3");
  title.textContent = progression.name;
  card.appendChild(title);

  const description = document.createElement("p");
  description.textContent = `和弦组合：${progression.chords.join(" → ")}`;
  card.appendChild(description);

  const chordContainer = document.createElement("div");
  chordContainer.className = "chord-container";
  progression.chords.forEach((name) => {
    const chord = getChordByName(name);
    const chordItem = document.createElement("div");
    chordItem.className = "chord-item";
    const nameSpan = document.createElement("strong");
    nameSpan.textContent = chord.name;
    chordItem.appendChild(nameSpan);
    if (chord) {
      const diagram = renderDiagram(chord.shape, chord.fingers);
      chordItem.appendChild(diagram);
    }
    chordContainer.appendChild(chordItem);
  });
  card.appendChild(chordContainer);

  return card;
}

function showMoodHint() {
  progressionResults.innerHTML = "";
  const hint = document.createElement("p");
  hint.className = "hint-text";
  hint.textContent = "选择一个风格，即可看到推荐和弦进程。";
  progressionResults.appendChild(hint);
}

function renderMoodProgressions(key) {
  progressionResults.innerHTML = "";
  if (!key || !moodProgressions[key]) {
    showMoodHint();
    return;
  }

  const mood = moodProgressions[key];
  const title = document.createElement("h3");
  title.textContent = mood.title;
  progressionResults.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = mood.description;
  progressionResults.appendChild(desc);

  mood.progressions.forEach((progression) => {
    progressionResults.appendChild(renderProgressionCard(progression));
  });
}

function renderDiagram(shape, fingers) {
  const diagram = document.createElement("div");
  diagram.className = "diagram";

  shape.forEach((value, index) => {
    const stringColumn = document.createElement("div");
    stringColumn.className = "string";

    if (value === "x") {
      const marker = document.createElement("div");
      marker.className = "string-marker muted-string";
      marker.textContent = "×";
      stringColumn.appendChild(marker);
    } else if (value === 0) {
      const marker = document.createElement("div");
      marker.className = "string-marker open-string";
      stringColumn.appendChild(marker);
    }

    const nut = document.createElement("div");
    nut.className = "nut";
    stringColumn.appendChild(nut);

    const fret = document.createElement("div");
    fret.className = "fret";
    for (let row = 0; row < 5; row += 1) {
      const fretLine = document.createElement("div");
      fretLine.className = "fret-line";
      fret.appendChild(fretLine);
    }
    stringColumn.appendChild(fret);

    if (value !== 0 && value !== "x") {
      const dot = document.createElement("div");
      dot.className = "dot";
      const rowPosition = (value - 1) * 20 + 10;
      dot.style.top = `${rowPosition}%`;
      dot.textContent = fingers[index] || "";
      stringColumn.appendChild(dot);
    }

    diagram.appendChild(stringColumn);
  });

  const labelRow = document.createElement("div");
  labelRow.className = "string-labels";
  ["E", "A", "D", "G", "B", "E"].forEach((label) => {
    const labelItem = document.createElement("span");
    labelItem.textContent = label;
    labelRow.appendChild(labelItem);
  });

  const wrapper = document.createElement("div");
  wrapper.appendChild(diagram);
  wrapper.appendChild(labelRow);
  return wrapper;
}

function renderChordCard(chord) {
  const card = document.createElement("article");
  card.className = "card";
  if (isPinned(chord.name)) {
    card.classList.add("pinned");
  }

  const pinButton = document.createElement("button");
  pinButton.className = "pin-button";
  pinButton.textContent = isPinned(chord.name) ? "✕" : "📌";
  pinButton.setAttribute("title", isPinned(chord.name) ? "取消置顶" : "置顶");
  pinButton.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePin(chord.name);
  });
  card.appendChild(pinButton);

  const title = document.createElement("h3");
  title.textContent = chord.name;
  card.appendChild(title);

  const diagram = renderDiagram(chord.shape, chord.fingers);
  card.appendChild(diagram);

  const description = document.createElement("p");
  description.textContent = chord.description;
  card.appendChild(description);

  return card;
}

function displayChords(list) {
  chordGrid.innerHTML = "";
  const unpinnedChords = list.filter((chord) => !isPinned(chord.name));
  if (unpinnedChords.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "没有找到匹配的和弦，试试其他关键字。";
    empty.style.color = "var(--muted)";
    chordGrid.appendChild(empty);
    return;
  }
  unpinnedChords.forEach((chord) => chordGrid.appendChild(renderChordCard(chord)));
}

function displayPinnedChords(list) {
  pinnedGrid.innerHTML = "";
  const pins = list.filter((chord) => isPinned(chord.name));
  if (pins.length === 0) {
    pinnedSection.hidden = true;
    return;
  }
  pinnedSection.hidden = false;
  pins.forEach((chord) => pinnedGrid.appendChild(renderChordCard(chord)));
}

function refreshDisplay() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = chords.filter((chord) => chord.name.toLowerCase().includes(query));
  displayPinnedChords(filtered);
  displayChords(filtered);
}

searchInput.addEventListener("input", () => {
  refreshDisplay();
});

moodSelect.addEventListener("change", () => {
  renderMoodProgressions(moodSelect.value);
});

clearPinnedBtn.addEventListener("click", () => {
  if (confirm("确定要清除所有置顶和弦吗？")) {
    clearAllPinned();
  }
});

loadPinnedChords();
refreshDisplay();
renderMoodProgressions("");
