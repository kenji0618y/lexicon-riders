// Story / Dojo / Objective layer for LEXICON RIDERS
(function () {
  const D = window.STORY_DATA;
  const KEY = 'lexiconRidersStory2';
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const S = window.Story = {
    st: { started: false, ch: 0, introDone: {}, boxes: {}, hist: [], bondOK: 0, grammarOK: 0, raceDone: false, bossDone: {}, ended: false },
    busy: false, lastN: 0,

    load() { try { const v = JSON.parse(localStorage.getItem(KEY) || 'null'); if (v) Object.assign(S.st, v); } catch (e) {} },
    save() { try { localStorage.setItem(KEY, JSON.stringify(S.st)); } catch (e) {} },

    // ---------- Predicted score (honest model) ----------
    mastered() { return D.vocab.filter((v) => (S.st.boxes[v[0]] || 0) >= 3).length; },
    seen() { return D.vocab.filter((v) => (S.st.boxes[v[0]] || 0) > 0).length; },
    accuracy() { const h = S.st.hist.slice(-50); return h.length ? h.reduce((a, b) => a + b, 0) / h.length : 0.5; },
    score() {
      const mastery = 0.5 * (S.mastered() / D.vocab.length) + 0.5 * S.accuracy();
      const s = 450 + 375 * Math.min(1, mastery / 0.8);
      return Math.max(450, Math.min(750, Math.round(s / 5) * 5));
    },
    record(ok) {
      const w = ok ? (window.App.jpAssist ? 0.6 : 1) : 0;
      S.st.hist.push(w); if (S.st.hist.length > 80) S.st.hist.shift();
      S.lastN++; S.lastOK = ok; S.syncScore(); S.save();
    },
    syncScore() {
      const A = window.App; const before = A.totalScore; const sc = S.score();
      const l = Math.min(495, Math.round(sc * 0.5 / 5) * 5); const r = Math.min(495, Math.round((sc - l) / 5) * 5);
      A.lScore = l; A.rScore = r;
      S._orig(0, 0);
      const d = A.totalScore - before; const el = $('hud-delta');
      if (el && !S._first) { S._first = true; el.classList.add('hidden'); } else if (el) { el.classList.remove('hidden'); el.textContent = d >= 0 ? '▲+' + d : '▼' + d; }
      S.renderGoal();
    },

    // ---------- Dialogue (visual novel) ----------
    say(lines, done) {
      if (!lines || !lines.length) { done && done(); return; }
      S.busy = true; let i = 0; let showJp = false;
      const box = $('st-vn'); box.classList.remove('hidden');
      const step = () => {
        if (i >= lines.length) { box.classList.add('hidden'); S.busy = false; done && done(); return; }
        const L = lines[i];
        const img = (window.PORTRAITS && PORTRAITS[L.who]) || '';
        const jpShow = showJp || window.App.jpAssist;
        if (L.q) {
          box.innerHTML = `<div class="vn-card"><img class="vn-face" src="${img}"><div class="vn-body"><div class="vn-name">${esc(L.name)}</div>
            <div class="vn-en">${esc(L.q.q)}</div><div class="vn-opts">${L.q.opts.map((o, k) => `<button class="vn-opt" data-k="${k}">${'ABC'[k]}: ${esc(o)}</button>`).join('')}</div><div class="vn-fb"></div></div></div>`;
          if (window.AudioEngine) AudioEngine.speak(L.q.q);
          box.querySelectorAll('.vn-opt').forEach((b) => b.onclick = () => {
            const ok = +b.dataset.k === L.q.a; S.record(ok);
            box.querySelector('.vn-fb').innerHTML = (ok ? '⭕ 正解！ ' : '❌ ざんねん。 ') + esc(L.q.exp) + '<br><button class="vn-next">▶ NEXT</button>';
            box.querySelectorAll('.vn-opt').forEach((x) => x.disabled = true);
            box.querySelector('.vn-next').onclick = () => { i++; showJp = false; step(); };
          });
          return;
        }
        box.innerHTML = `<div class="vn-card"><img class="vn-face" src="${img}"><div class="vn-body"><div class="vn-name">${esc(L.name)}</div>
          <div class="vn-en">${esc(L.en)}</div><div class="vn-jp ${jpShow ? '' : 'hidden'}">${esc(L.jp)}</div>
          <div class="vn-btns"><button class="vn-jpbtn">🇯🇵 日本語</button><button class="vn-voice">🔊</button><button class="vn-next">▶ NEXT</button></div></div></div>`;
        if (window.AudioEngine) AudioEngine.speak(L.en);
        box.querySelector('.vn-jpbtn').onclick = () => { showJp = true; box.querySelector('.vn-jp').classList.remove('hidden'); };
        box.querySelector('.vn-voice').onclick = () => AudioEngine.speak(L.en);
        box.querySelector('.vn-next').onclick = () => { i++; showJp = false; step(); };
      };
      step();
    },

    // ---------- Goal bar & chapter flow ----------
    chap() { return D.chapters[Math.min(S.st.ch, D.chapters.length - 1)]; },
    renderGoal() {
      const el = $('st-goal'); if (!el) return;
      if (S.st.ended) { el.innerHTML = '🏆 クリア！ Resonance ' + S.score() + ' ／ 好きなだけ道場で復習できます'; return; }
      const c = S.chap(); const A = window.App; const sc = S.score();
      let extra = '';
      if (S.st.ch === 0) extra = `（${S.mastered()}/6）`;
      else if (S.st.ch === 1) extra = `（${Math.min(2, S.st.bondOK)}/2）`;
      else if (c.needGrammar) extra = `（文法 ${Math.min(c.needGrammar, S.st.grammarOK)}/${c.needGrammar} ・ Resonance ${sc}/${c.needScore}）`;
      else if (c.needScore) extra = `（Resonance ${sc}/${c.needScore}）`;
      el.innerHTML = `<b>🎯 ${esc(c.jp)}</b> ${esc(c.goal)} ${extra}<span class="st-sub"> ／ 目標 750 まであと ${Math.max(0, 750 - sc)}</span>`;
    },
    startChapter() {
      const c = S.chap(); S.renderGoal(); S.applyLocks();
      if (!S.st.introDone[S.st.ch]) {
        S.st.introDone[S.st.ch] = true; S.save();
        S.say(c.intro, () => { if (S.st.ch === 0) S.openDojo(); });
      }
    },
    applyLocks() {
      const ch = S.st.ch;
      const lock = (id, locked) => { const b = $(id); if (b) { b.style.opacity = locked ? '0.4' : ''; b.dataset.locked = locked ? '1' : ''; } };
      lock('tab-RACE', ch < 2); lock('tab-HUNT', ch < 3);
    },
    complete() {
      const c = S.chap(); S.busy = true;
      const next = () => {
        S.st.ch++; S.save();
        if (S.st.ch >= D.chapters.length) { S.st.ended = true; S.save(); S.say(D.ending, () => { S.renderGoal(); S.busy = false; S.showEnd(); }); return; }
        S.busy = false; S.startChapter();
      };
      window.App.triggerCutIn('char_kael', '✅ ' + c.jp + ' クリア！', 'Resonance ' + S.score());
      setTimeout(() => { if (window.App.scene !== 'WORLD') window.App.switchScene('WORLD'); S.busy = false; S.say(c.outro, next); }, 1400);
    },
    showEnd() {
      const m = $('st-end'); m.classList.remove('hidden');
      m.querySelector('.end-score').textContent = S.score();
      m.querySelector('.end-learn').textContent = `覚えた単語 ${S.mastered()}/${D.vocab.length}　正答率 ${Math.round(S.accuracy() * 100)}%`;
    },
    ready() {
      const A = window.App;
      if (S.busy || !$('st-dojo').classList.contains('hidden')) return false;
      return !document.querySelector('.modal-backdrop:not(.hidden)');
    },
    tick() {
      const A = window.App; if (!S.st.started || S.st.ended || S.busy) return;
      const c = S.chap(); const ch = S.st.ch;
      if (A.race && A.race.bossDist <= 0) S.st.raceDone = true;
      if (A.scene === 'HUNT' && A.hunt.parts.every((p) => p.broken)) {
        const idx = A.questIdx % 3;
        if (!S.st.bossDone[idx]) { S.st.bossDone[idx] = true; S.save(); }
        A.hunt.parts.forEach((p) => { p.hp = p.maxHp; p.broken = false; });
        A.hunt.bossHp = 1800;
        S.renderGoal();
      }
      let ok = false;
      if (ch === 0) ok = S.mastered() >= 6;
      else if (ch === 1) ok = S.st.bondOK >= 2;
      else if (ch === 2) ok = S.st.raceDone;
      else {
        const bossOK = S.st.bossDone[c.boss];
        ok = bossOK && (!c.needScore || S.score() >= c.needScore) && (!c.needGrammar || S.st.grammarOK >= c.needGrammar);
        if (bossOK && !ok && !S._warned) { S._warned = true; S.say([{ who: 'emma', name: 'Emma', en: 'The monster is down, but your Resonance is not high enough yet. Keep studying at the Dojo!', jp: '魔物は倒したけど、共鳴値がまだ足りないわ。道場でもっと勉強しましょう！' }], () => { S._warned = false; S.st.bossDone[c.boss] = false; }); }
      }
      if (ok && S.ready()) S.complete();
    },

    // ---------- Word Dojo ----------
    openDojo() {
      const m = $('st-dojo'); m.classList.remove('hidden'); S.dojoHome();
    },
    closeDojo() { $('st-dojo').classList.add('hidden'); S.renderGoal(); },
    dojoHome() {
      const sc = S.score(); const pct = Math.round(((sc - 450) / 300) * 100);
      $('st-dojo-body').innerHTML = `
        <div class="dj-head"><div>予測スコア <b class="dj-score">${sc}</b> / 750 <span class="dj-sub">（推測）</span></div>
        <div class="dj-bar"><div style="width:${pct}%"></div></div>
        <div class="dj-sub">覚えた単語 ⭐${S.mastered()} / ${D.vocab.length} ・ 学習中 ${S.seen()} ・ 直近の正答率 ${Math.round(S.accuracy() * 100)}%</div></div>
        <button class="dj-big" onclick="Story.startWords()">📚 単語トレーニング（8問・新しい単語は先にカードで紹介）</button>
        <button class="dj-big alt" onclick="Story.startGrammar()">✏️ 文法トライアル（TOEIC Part 5 形式・8問）</button>
        <div class="dj-sub" style="margin-top:8px">単語は「正解を重ねるほど」⭐に近づきます。間違えると最初からやり直し。毎日少しずつ続けるのが一番の近道です。</div>`;
    },
    pickWords() {
      const boxes = S.st.boxes; const all = D.vocab;
      const learning = shuffle(all.filter((v) => (boxes[v[0]] || 0) > 0 && (boxes[v[0]] || 0) < 4)).sort((a, b) => (boxes[a[0]] || 0) - (boxes[b[0]] || 0));
      const fresh = all.filter((v) => !boxes[v[0]]).slice(0, 3);
      let list = fresh.concat(learning).slice(0, 8);
      if (list.length < 8) list = list.concat(shuffle(all.filter((v) => !list.includes(v) && (boxes[v[0]] || 0) >= 4))).slice(0, 8);
      return list;
    },
    startWords() {
      const list = S.pickWords(); const fresh = list.filter((v) => !S.st.boxes[v[0]]);
      S.q = { list: shuffle(list), i: 0, right: 0 };
      const cards = fresh.slice(); let ci = 0;
      const showCard = () => {
        if (ci >= cards.length) { S.nextWordQ(); return; }
        const v = cards[ci++];
        S.st.boxes[v[0]] = 0.001; // mark as introduced but unmastered
        $('st-dojo-body').innerHTML = `<div class="dj-card"><div class="dj-tag">NEW WORD ${ci}/${cards.length}</div>
          <div class="dj-word">${esc(v[0])} <span class="dj-pos">${esc(v[1])}</span></div><div class="dj-jp">${esc(v[2])}</div>
          <div class="dj-ex">${esc(v[3])}</div><div class="dj-exjp">${esc(v[4])}</div>
          <button class="dj-voice" onclick="AudioEngine.speak('${esc(v[0]).replace(/'/g, "\\'")}. ${esc(v[3]).replace(/'/g, "\\'")}')">🔊 聞く</button>
          <button class="dj-big" id="dj-got">覚えた！次へ ▶</button></div>`;
        if (window.AudioEngine) AudioEngine.speak(v[0] + '. ' + v[3]);
        $('dj-got').onclick = showCard;
      };
      showCard();
    },
    nextWordQ() {
      const q = S.q;
      if (q.i >= q.list.length) { S.dojoResult('単語トレーニング', q.right, q.list.length); return; }
      const v = q.list[q.i]; const box = Math.floor(S.st.boxes[v[0]] || 0);
      const re = new RegExp(v[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      const useBlank = box >= 1 && re.test(v[3]);
      let stem, opts, correct;
      const others = shuffle(D.vocab.filter((x) => x !== v));
      if (useBlank) {
        const samePos = others.filter((x) => x[1] === v[1]).slice(0, 3);
        const pool = samePos.concat(others.filter((x) => !samePos.includes(x))).slice(0, 3);
        opts = shuffle([v].concat(pool)).map((x) => x[0]); correct = opts.indexOf(v[0]);
        stem = `<div class="dj-q">空所に入る語は？</div><div class="dj-sent">${esc(v[3]).replace(re, '_____')}</div>`;
      } else {
        const pool = others.slice(0, 3);
        const arr = shuffle([v].concat(pool)); opts = arr.map((x) => x[2]); correct = arr.indexOf(v);
        stem = `<div class="dj-q">意味は？</div><div class="dj-word">${esc(v[0])}</div>`;
      }
      $('st-dojo-body').innerHTML = `<div class="dj-tag">${q.i + 1} / ${q.list.length}</div>${stem}
        <div class="dj-opts">${opts.map((o, k) => `<button class="dj-opt" data-k="${k}">${esc(o)}</button>`).join('')}</div><div class="dj-fb"></div>`;
      document.querySelectorAll('.dj-opt').forEach((b) => b.onclick = () => {
        const ok = +b.dataset.k === correct; S.record(ok);
        const cur = S.st.boxes[v[0]] || 0;
        S.st.boxes[v[0]] = ok ? Math.floor(cur) + 1 : 0.001; if (ok) q.right++;
        document.querySelectorAll('.dj-opt').forEach((x, k) => { x.disabled = true; if (k === correct) x.classList.add('good'); else if (x === b) x.classList.add('bad'); });
        const star = ok && S.st.boxes[v[0]] >= 3 ? ' ⭐マスター！' : '';
        $('st-dojo-body').querySelector('.dj-fb').innerHTML = `${ok ? '⭕ 正解！' + star : '❌ 正解は「' + esc(opts[correct]) + '」'}<div class="dj-ex">${esc(v[0])}: ${esc(v[2])}<br>${esc(v[3])}<br>${esc(v[4])}</div><button class="dj-big" id="dj-nx">次へ ▶</button>`;
        $('dj-nx').onclick = () => { q.i++; S.nextWordQ(); };
        S.save();
      });
    },
    startGrammar() {
      S.q = { list: shuffle(D.grammar).slice(0, 8), i: 0, right: 0 }; S.nextGrammarQ();
    },
    nextGrammarQ() {
      const q = S.q;
      if (q.i >= q.list.length) { S.dojoResult('文法トライアル', q.right, q.list.length); return; }
      const g = q.list[q.i]; const idx = shuffle([0, 1, 2, 3]); const opts = idx.map((k) => g.o[k]); const correct = idx.indexOf(g.a);
      $('st-dojo-body').innerHTML = `<div class="dj-tag">Part 5 ・ ${q.i + 1} / ${q.list.length}</div><div class="dj-sent">${esc(g.q)}</div>
        <div class="dj-opts">${opts.map((o, k) => `<button class="dj-opt" data-k="${k}">(${'ABCD'[k]}) ${esc(o)}</button>`).join('')}</div><div class="dj-fb"></div>`;
      document.querySelectorAll('.dj-opt').forEach((b) => b.onclick = () => {
        const ok = +b.dataset.k === correct; S.record(ok); if (ok) { q.right++; S.st.grammarOK++; }
        document.querySelectorAll('.dj-opt').forEach((x, k) => { x.disabled = true; if (k === correct) x.classList.add('good'); else if (x === b) x.classList.add('bad'); });
        $('st-dojo-body').querySelector('.dj-fb').innerHTML = `${ok ? '⭕ 正解！' : '❌ 正解は ' + 'ABCD'[correct]}<div class="dj-ex">${esc(g.exp)}</div><button class="dj-big" id="dj-nx">次へ ▶</button>`;
        $('dj-nx').onclick = () => { q.i++; S.nextGrammarQ(); }; S.save();
      });
    },
    dojoResult(name, right, total) {
      S.save();
      $('st-dojo-body').innerHTML = `<div class="dj-card"><div class="dj-tag">${name} 結果</div><div class="dj-word">${right} / ${total} 正解</div>
        <div class="dj-jp">予測スコア ${S.score()} / 750</div><div class="dj-sub">覚えた単語 ⭐${S.mastered()} / ${D.vocab.length}</div>
        <button class="dj-big" onclick="Story.dojoHome()">もう一度・メニューへ</button>
        <button class="dj-big alt" onclick="Story.closeDojo()">冒険に戻る</button></div>`;
    },

    // ---------- Setup ----------
    init() {
      const A = window.App; S.load();
      document.body.insertAdjacentHTML('beforeend', `
        <div id="st-goal" onclick="Story.showHint()"></div>
        <div id="st-vn" class="hidden"></div>
        <div id="st-dojo" class="hidden"><div class="dj-panel"><div class="dj-top"><b>🎓 Word Dojo（単語道場）</b><button class="util-btn" onclick="Story.closeDojo()">✕ 閉じる</button></div><div id="st-dojo-body"></div></div></div>
        <div id="st-end" class="hidden"><div class="end-panel"><div class="end-title">🏆 GAME CLEAR 🏆</div><div>Resonance</div><div class="end-score">750</div><div class="end-learn"></div>
          <div class="dj-sub">エリュシオンの門が開いた。でも勉強の冒険はここからが本番。毎日の復習で、本物のTOEICも伸ばそう。</div>
          <button class="dj-big" onclick="document.getElementById('st-end').classList.add('hidden');Story.openDojo()">道場で復習する</button>
          <button class="dj-big alt" onclick="document.getElementById('st-end').classList.add('hidden')">閉じる</button></div></div>`);
      const tabs = document.querySelector('.scene-tabs');
      if (tabs) { const b = document.createElement('button'); b.className = 'tab-btn'; b.style.cssText = 'color:#34d399;border:1px solid rgba(52,211,153,.5)'; b.textContent = '🎓 Dojo'; b.onclick = () => S.openDojo(); tabs.insertBefore(b, tabs.children[1]); }

      S._orig = A.updateScore.bind(A);
      A.updateScore = function (l, r) { const sum = l + r; if (sum !== 0) S.record(sum > 0); };
      const oSwitch = A.switchScene.bind(A);
      A.switchScene = function (s) {
        if (S.st.started && !S.st.ended) {
          if (s === 'HUNT' && A.scene === 'RACE' && S.st.ch < 3) { if (A.race.bossDist <= 0) S.st.raceDone = true; S.save(); return oSwitch('WORLD'); }
          if ((s === 'RACE' && S.st.ch < 2) || (s === 'HUNT' && S.st.ch < 3)) {
            S.busy || S.say([{ who: 'emma', name: 'Emma', en: 'Not yet, Kael. Finish your current mission first.', jp: 'まだよ、ケイル。まず今の任務を終わらせて。' }]);
            return;
          }
        }
        return oSwitch(s);
      };
      const oBond = A.answerBond.bind(A);
      A.answerBond = function (i) { const n = S.lastN; oBond(i); if (S.lastN > n && S.lastOK) { S.st.bondOK++; S.save(); S.renderGoal(); } };
      const oHunt = A.selectBoss.bind(A);
      A.selectBoss = function (i) { if (S.st.started && !S.st.ended && S.st.ch >= 3) { const c = S.chap(); if (c.boss !== undefined && i !== c.boss && !S.st.bossDone[i]) i = c.boss; } return oHunt(i); };

      // start state: only story-bound boss on HUNT entry
      const oSwitch2 = A.switchScene;
      A.switchScene = function (s) {
        if (s === 'HUNT' && S.st.started && !S.st.ended) { const c = S.chap(); if (c.boss !== undefined && A.questIdx % 3 !== c.boss) { A.questIdx = c.boss; A.hunt.parts.forEach((p) => { p.hp = p.maxHp; p.broken = false; }); A.hunt.bossHp = 1800; A.syncPortraitsUI && A.syncPortraitsUI(); } }
        return oSwitch2.call(A, s);
      };

      S.syncScore(); S.applyLocks();
      setInterval(() => S.tick(), 500);
      setTimeout(() => {
        if (!S.st.started) { S.st.started = true; S.save(); S.say(D.prologue, () => S.startChapter()); }
        else S.startChapter();
      }, 600);
    },
    showHint() {
      if (S.busy) return; const c = S.chap();
      S.say([{ who: 'emma', name: 'Emma', en: 'Your mission: ' + c.goalEn, jp: '任務：' + c.goal }]);
    }
  };

  const css = document.createElement('style');
  css.textContent = `
  #st-goal{position:fixed;left:50%;transform:translateX(-50%);top:62px;z-index:60;max-width:92vw;background:rgba(8,13,26,.92);border:1.5px solid #fbbf24;color:#fff;padding:5px 12px;border-radius:12px;font-size:12px;line-height:1.35;text-align:center;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.6)}
  #st-goal b{color:#fbbf24}.st-sub{color:#67e8f9}
  #st-vn{position:fixed;left:0;right:0;bottom:0;top:0;z-index:200;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,.35);padding:8px}
  .vn-card{display:flex;gap:10px;align-items:flex-end;width:min(900px,100%);background:rgba(8,13,26,.96);border:2px solid #38bdf8;border-radius:16px;padding:10px 12px}
  .vn-face{width:96px;height:96px;object-fit:cover;border-radius:14px;border:2px solid #fbbf24;flex:none}
  .vn-body{flex:1;min-width:0}.vn-name{color:#fbbf24;font-weight:900;font-size:13px}
  .vn-en{font-size:16px;font-weight:800;line-height:1.4;margin:3px 0}.vn-jp{font-size:13px;color:#fde047;margin:2px 0}
  .vn-btns{display:flex;gap:6px;justify-content:flex-end;margin-top:4px}
  .vn-btns button,.vn-next{background:#1e293b;color:#fff;border:1px solid #475569;border-radius:10px;padding:6px 12px;font-weight:800;font-size:13px}
  .vn-next{background:#f59e0b;color:#111;border-color:#fde047}
  .vn-opts{display:flex;flex-direction:column;gap:5px;margin:6px 0}.vn-opt{text-align:left;background:#0f172a;color:#fff;border:1.5px solid #38bdf8;border-radius:10px;padding:7px 10px;font-weight:700;font-size:13px}
  .vn-fb{font-size:12px;color:#fde047}
  #st-dojo,#st-end{position:fixed;inset:0;z-index:150;background:rgba(2,6,14,.82);display:flex;align-items:center;justify-content:center;padding:8px}
  .dj-panel,.end-panel{width:min(680px,100%);max-height:96vh;overflow:auto;background:#0b1224;border:2px solid #34d399;border-radius:16px;padding:12px 14px;color:#fff}
  .dj-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-size:15px}
  .dj-big{display:block;width:100%;margin:8px 0;padding:11px;border-radius:12px;border:2px solid #fde047;background:linear-gradient(180deg,#fbbf24,#ea580c);color:#111;font-weight:900;font-size:14px}
  .dj-big.alt{background:linear-gradient(180deg,#38bdf8,#1d4ed8);border-color:#a5f3fc;color:#fff}
  .dj-score{font-size:28px;color:#fde047}.dj-sub{font-size:11px;color:#94a3b8}
  .dj-bar{height:9px;background:#020617;border-radius:9px;overflow:hidden;margin:4px 0;border:1px solid #334155}.dj-bar div{height:100%;background:linear-gradient(90deg,#34d399,#fde047)}
  .dj-card,.dj-fb{text-align:center}.dj-tag{color:#67e8f9;font-size:12px;font-weight:800;margin-bottom:4px}
  .dj-word{font-size:30px;font-weight:900;color:#fde047;margin:4px 0}.dj-pos{font-size:13px;color:#94a3b8}
  .dj-jp{font-size:19px;font-weight:800;margin:4px 0}.dj-ex{font-size:13px;color:#e2e8f0;margin:6px 0;line-height:1.5}.dj-exjp{font-size:12px;color:#fde047}
  .dj-q{font-size:13px;color:#94a3b8}.dj-sent{font-size:18px;font-weight:800;line-height:1.45;margin:6px 0}
  .dj-opts{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:8px 0}
  .dj-opt{background:#0f172a;color:#fff;border:2px solid #38bdf8;border-radius:11px;padding:10px 6px;font-weight:800;font-size:14px}
  .dj-opt.good{background:#065f46;border-color:#34d399}.dj-opt.bad{background:#7f1d1d;border-color:#f43f5e}
  .dj-voice{background:#1e293b;color:#67e8f9;border:1px solid #475569;border-radius:10px;padding:6px 12px;font-weight:800;margin:4px}
  .end-panel{text-align:center}.end-title{font-size:26px;font-weight:900;color:#fde047;margin-bottom:6px}.end-score{font-size:64px;font-weight:900;color:#34d399}
  @media (max-height:480px){.st-sub{display:none}#st-goal{top:42px;font-size:10px;padding:2px 8px}.vn-face{width:60px;height:60px}.vn-en{font-size:13px}.vn-card{padding:6px 8px}.dj-word{font-size:22px}.dj-sent{font-size:15px}.dj-opt{padding:7px 4px;font-size:12px}.dj-big{padding:8px;font-size:12px}}
  `;
  document.head.appendChild(css);
  window.addEventListener('load', () => setTimeout(() => S.init(), 300));
})();
