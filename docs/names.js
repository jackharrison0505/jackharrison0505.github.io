// "What's your brand called in China?" — Phase 1 demo.
// Works from a curated set of well-documented brand names. Phase 2 replaces
// lookup() with a call to the AI naming function; everything else stays.

const NAMES = {
  "coca-cola": { zh: "可口可乐", py: "kě kǒu kě lè", meaning: "“Tasty, and fun.”", type: "Hybrid · sound + meaning", note: "The benchmark. Sounds like the original, and every character says something a drink should say. It took a public competition in 1927 to find it." },
  "cocacola": "coca-cola", "coke": "coca-cola", "coca cola": "coca-cola",
  "bmw": { zh: "宝马", py: "bǎo mǎ", meaning: "“Precious horse.”", type: "Semantic · meaning-led", note: "Ignores the sound entirely. Borrows the B and M, then reaches for what a car means in Chinese culture — a prized steed." },
  "mercedes": { zh: "奔驰", py: "bēn chí", meaning: "“To gallop; to speed.”", type: "Semantic · meaning-led", note: "A verb, not a name. It describes the car doing what the car does — and it's now the everyday Chinese word people use for the brand." },
  "mercedes-benz": "mercedes", "benz": "mercedes", "mercedes benz": "mercedes",
  "nike": { zh: "耐克", py: "nài kè", meaning: "“Endure and conquer.”", type: "Hybrid · sound + meaning", note: "Two syllables that echo the original and read as a sportswear brief — perseverance, then victory." },
  "starbucks": { zh: "星巴克", py: "xīng bā kè", meaning: "“Star” + the sound of “bucks”.", type: "Hybrid · sound + meaning", note: "Translates the half that has meaning (star) and transliterates the half that doesn't. A common, sensible pattern." },
  "ikea": { zh: "宜家", py: "yí jiā", meaning: "“Suitable for the home.”", type: "Hybrid · sound + meaning", note: "Close to the Swedish pronunciation, and 宜家 is also a phrase from a classical poem about a harmonious household. Deliberate, and it landed." },
  "carrefour": { zh: "家乐福", py: "jiā lè fú", meaning: "“Home, happiness, fortune.”", type: "Hybrid · sound + meaning", note: "Three of the most auspicious characters available, in an order that still sounds like the French. Very hard to do better." },
  "airbnb": { zh: "爱彼迎", py: "ài bǐ yíng", meaning: "“Welcome each other with love.”", type: "Phonetic · sound-led", bad: true, note: "The cautionary tale. Well-meant, but awkward to say and widely mocked online at launch. A reminder that meaning isn't enough — it has to sound natural." },
  "tide": { zh: "汰渍", py: "tài zì", meaning: "“Gets rid of stains.”", type: "Hybrid · sound + meaning", note: "Sounds like Tide, and literally describes the product benefit. About as efficient as a name gets." },
  "reebok": { zh: "锐步", py: "ruì bù", meaning: "“Quick steps.”", type: "Hybrid · sound + meaning", note: "Sharp, fast footsteps. Two characters that both fit a running shoe." },
  "linkedin": { zh: "领英", py: "lǐng yīng", meaning: "“Leading elite.”", type: "Hybrid · sound + meaning", note: "Echoes the first syllable and positions the network exactly where it wants to be — among leaders and talent." },
  "subway": { zh: "赛百味", py: "sài bǎi wèi", meaning: "“Beats a hundred flavours.”", type: "Hybrid · sound + meaning", note: "Abandons the transport reference (meaningless for a sandwich) and sells taste instead." },
  "heineken": { zh: "喜力", py: "xǐ lì", meaning: "“Happy power.”", type: "Phonetic · sound-led", note: "Short, upbeat, easy to say over a bar. Two characters do the work of three syllables." },
  "colgate": { zh: "高露洁", py: "gāo lù jié", meaning: "“Reveals superior cleanliness.”", type: "Hybrid · sound + meaning", note: "Sounds like Colgate; reads like a toothpaste claim." },
  "hermes": { zh: "爱马仕", py: "ài mǎ shì", meaning: "“Love, horse, gentleman.”", type: "Hybrid · sound + meaning", note: "Phonetically close, and the horse nods to the brand's equestrian roots. Luxury names often work this hard." },
  "hermès": "hermes",
  "pepsi": { zh: "百事可乐", py: "bǎi shì kě lè", meaning: "“Everything is fun.”", type: "Hybrid · sound + meaning", note: "Borrows Coca-Cola's 可乐 (which by then meant “cola”) and adds its own optimistic twist." },
  "sprite": { zh: "雪碧", py: "xuě bì", meaning: "“Snow, blue-green.”", type: "Semantic · meaning-led", note: "Nothing to do with the sound. Pure sensation — cold, clear, refreshing." },
  "lay's": { zh: "乐事", py: "lè shì", meaning: "“Happy things.”", type: "Hybrid · sound + meaning", note: "Close to “Lay's”, and it says what a snack is for." },
  "lays": "lay's",
  "marvel": { zh: "漫威", py: "màn wēi", meaning: "“Comics” + “power”.", type: "Hybrid · sound + meaning", note: "漫 is the character for comics; 威 is might. Sounds like Marvel and describes the product." },
  "bing": { zh: "必应", py: "bì yìng", meaning: "“Must respond.”", type: "Hybrid · sound + meaning", note: "A search engine that promises an answer. Also avoids 病 (bìng, “illness”), which the raw sound could suggest." },
};

const DISPLAY = { "bmw":"BMW", "coca-cola":"Coca-Cola", "ikea":"IKEA", "linkedin":"LinkedIn", "hermes":"Hermès", "mercedes":"Mercedes-Benz" };
const pretty = k => DISPLAY[k] || k.replace(/\b\w/g, c => c.toUpperCase());
const EXAMPLES = ["coca-cola","bmw","nike","airbnb","ikea","carrefour","mercedes","tide","starbucks","hermes","subway","reebok","linkedin","heineken","sprite","marvel"];

function lookup(raw) {
  const k = raw.trim().toLowerCase().replace(/\s+/g, " ");
  let v = NAMES[k];
  if (typeof v === "string") v = NAMES[v];
  return v ? { key: k, ...v } : null;
}

function render(box, q, hit) {
  if (hit) {
    box.innerHTML = `
      <span class="tag ${hit.bad ? "bad" : ""}">${hit.type}${hit.bad ? " · a misfire" : ""}</span>
      <div class="zh">${hit.zh}</div>
      <div class="py">${hit.py}</div>
      <div class="meaning">${hit.meaning}</div>
      <p class="note">${hit.note}</p>
      <div class="cta">That's a name someone chose on purpose. Yours deserves the same. <a href="how-we-work.html">See how we work →</a></div>`;
  } else {
    box.innerHTML = `
      <span class="tag">Not in our examples yet</span>
      <div class="zh" style="font-size:clamp(1.6rem,4vw,2.4rem)">“${q.replace(/</g,"&lt;")}” doesn't have a Chinese name yet.</div>
      <p class="note">That's exactly the point. Consumers, distributors and the press will give you one whether you choose it or not — and under China's first-to-file rules, whoever registers it first owns it.</p>
      <p class="note">There are three ways to build a good one — phonetic, semantic, or the hybrid that keeps your sound and loads it with meaning — and every one of them has to pass the three-second test and get to the trademark office first. Our AI naming tool for any brand is coming soon; try a famous brand above to see how the good ones work.</p>
      <div class="cta">Want a proper naming workshop now? <a href="mailto:hello@arconbrands.com?subject=Chinese%20naming">Talk to us →</a></div>`;
  }
  box.classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("namer"), input = form.querySelector("input"),
        box = document.getElementById("result"), tryBtn = document.getElementById("try");
  form.addEventListener("submit", e => { e.preventDefault(); const q = input.value; if (!q.trim()) return; render(box, q, lookup(q)); });
  let i = 0;
  tryBtn.addEventListener("click", () => { const k = EXAMPLES[i++ % EXAMPLES.length]; input.value = pretty(k); render(box, input.value, lookup(k)); });
  // ticker
  const track = document.getElementById("track");
  const items = EXAMPLES.map(k => { const n = lookup(k); return `<span>${pretty(k)}<b>${n.zh}</b></span>`; }).join("");
  track.innerHTML = items + items;
});
