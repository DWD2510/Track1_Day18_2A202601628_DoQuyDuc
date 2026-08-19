/* ============================================================
   OPTION C — Resurface without search (thẻ ôn nhanh + flashcard)
   NGUỒN DUY NHẤT cho Option C. Hai file cùng nạp file này:
     · index.html              — bản A/B/C dùng để test
     · option-c-flashcard.html — bản C chạy riêng, dùng khi trình bày
   Sửa ở đây là cả hai cùng đổi. Không sao chép logic sang chỗ khác.

   Phụ thuộc: fixture.js  (NOTES, CONTEXT, TODAY)
   Không gọi model. Toàn bộ output canned, tái lập được y hệt mọi lần chạy.
   ============================================================ */
(function (global) {
  'use strict';

  /* ---------- BỘ THẺ — mỗi thẻ sinh từ đúng một note trong fixture ---------- */
  const C_DECK = [
    { noteId: 'n6', kind: 'ok',
      q: '1NF yêu cầu điều gì?',
      a: 'Loại bỏ thuộc tính đa trị.',
      extra: 'Trong note này bạn còn để lại một câu hỏi chưa trả lời: vì sao 2NF đòi phụ thuộc <b>đầy đủ</b> vào khoá chính.' },

    { noteId: 'n7', kind: 'ok',
      q: '3NF bỏ loại phụ thuộc nào? Ví dụ trong note của bạn là gì?',
      a: 'Bỏ phụ thuộc bắc cầu. Ví dụ: MaSV → MaLop → TenLop.' },

    /* CÀI CÓ CHỦ Ý #1 — AI kéo một note ngoài chủ đề vào bộ, có ghi rõ lý do */
    { noteId: 'n5', kind: 'stretch',
      q: 'Phụ thuộc hàm X → Y nghĩa là gì?',
      a: 'Note của bạn chỉ ghi ký hiệu X → Y và một câu của thầy: đây là nền của phần chuẩn hoá học sau.',
      why: 'Mình thêm thẻ này vì note 28/07 nói phụ thuộc hàm là nền của chuẩn hoá. Note đó <b>không</b> nằm trong 3 note bạn ghi về chuẩn hoá.' },

    /* CÀI CÓ CHỦ Ý #2 — thẻ không có đáp án; Don't Act nằm trong flashcard */
    { noteId: 'n8', kind: 'gap',
      q: 'Ví dụ tách bảng BCNF ở slide 12 là gì?',
      a: null }
  ];

  /* ---------- CSS riêng của C (component chung lấy từ trang chủ) ---------- */
  const CSS = `
@keyframes c-slide{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.push{animation:c-slide .34s ease-out;border-color:#ddd0f7}
.deckbar{display:flex;align-items:center;gap:12px;margin:18px 0 10px}
.deckbar .count{font-size:13px;font-weight:600;color:var(--muted);white-space:nowrap}
.track{flex:1;height:6px;background:var(--line);border-radius:99px;overflow:hidden}
.fill{height:100%;background:var(--ai);border-radius:99px;transition:width .25s ease}
@keyframes c-flip{0%{transform:rotateY(0)}50%{transform:rotateY(90deg)}100%{transform:rotateY(0)}}
.flash{perspective:1000px;margin-top:6px}
.face{background:var(--card);border:1.5px solid var(--line);border-radius:var(--r);
  box-shadow:var(--shadow);padding:26px 22px;min-height:200px;
  display:flex;flex-direction:column;justify-content:center;cursor:pointer;transform-style:preserve-3d;
  transition:border-color .15s ease, box-shadow .15s ease}
.face:hover{border-color:var(--accent);box-shadow:var(--shadow-md)}
.face.flipping{animation:c-flip .34s ease}
.face.back{cursor:default;justify-content:flex-start;background:#fcfbff;border-color:#ddd0f7}
.face.back:hover{border-color:#ddd0f7;box-shadow:var(--shadow)}
.side{font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.q{font-size:19px;font-weight:600;line-height:1.45;letter-spacing:-.2px;color:var(--ink)}
.a{font-size:17px;font-weight:600;line-height:1.45;margin:0 0 4px;color:var(--ink)}
.tap{margin-top:auto;padding-top:16px;font-size:12.5px;color:var(--muted)}
.gap-face{background:var(--warn-soft)!important;border-color:#f3ddb4!important}
.rate{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
.rate button{flex:1;min-width:96px;font:inherit;font-size:13.5px;font-weight:600;
  border:1.5px solid var(--line);background:var(--card);border-radius:var(--r-sm);padding:11px 8px;
  min-height:44px;cursor:pointer;box-shadow:var(--shadow-sm);transition:all .15s ease}
.rate button:hover{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}
.rate button:active{transform:scale(0.98)}
.tally{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 0}
.pill{font-size:12.5px;font-weight:500;border:1px solid var(--line);border-radius:99px;padding:5px 12px;background:var(--card)}
`;

  /* ---------- Markup ba trạng thái ---------- */
  const MARKUP = `
<!-- C1 — màn hình chính, thẻ TỰ hiện -->
<div id="cx1">
  <h1>Màn hình chính</h1>
  <p class="sub">Bạn không cần tìm gì cả. Cứ ở đây một lát.</p>
  <div class="card">
    <div class="label">Môn đang học</div>
    <p><b>Nhập môn Cơ sở dữ liệu</b><br>
      <span class="small">Buổi tiếp theo: 20/08 · Kiểm tra: tuần sau</span></p>
  </div>
  <div class="card">
    <div class="label">Note gần đây</div>
    <div id="cx-recent"></div>
  </div>
  <div id="cx-slot"></div>
</div>

<!-- C2 — bộ flashcard (CRITICAL) -->
<div id="cx2" class="hidden">
  <h1>Thẻ ôn nhanh · Chuẩn hoá CSDL</h1>
  <p class="sub" id="cx-why"></p>
  <div class="deckbar">
    <span class="count" id="cx-count"></span>
    <div class="track"><div class="fill" id="cx-fill"></div></div>
  </div>
  <div class="flash"><div class="face" id="cx-face"></div></div>
  <div id="cx-after"></div>
  <div class="row"><button class="btn ghost" id="cx-quit">Dừng, để sau</button></div>
</div>

<!-- C3 — kết quả + recovery -->
<div id="cx3" class="hidden">
  <h1 id="cx3-title">Xong</h1>
  <div class="card">
    <div class="ok" id="cx3-result"></div>
    <div class="tally" id="cx3-tally"></div>
    <div id="cx3-plan"></div>
    <hr class="divider">
    <div class="label">Bạn giữ quyền gì</div>
    <div class="row">
      <button class="btn ghost" id="cx-resched">Đổi lịch nhắc</button>
      <button class="btn ghost" id="cx-topicoff">Đừng nhắc chủ đề này nữa</button>
      <button class="btn ghost" id="cx-alloff">Tắt hẳn thẻ ôn nhanh</button>
    </div>
    <hr class="divider">
    <div class="label">Thẻ đã bỏ qua</div>
    <p class="small">Mọi thẻ bạn dẹp, hoãn hoặc gỡ đều nằm đây. Không có gì mất đi.</p>
    <div id="cx3-skipped"></div>
    <div class="row"><button class="btn" id="cx-home">← Về màn hình chính</button></div>
  </div>
</div>`;

  /* ---------- helper nội bộ ---------- */
  const h = id => document.getElementById(id);
  const byId = id => NOTES.find(n => n.id === id);

  function noteHTML(n) {
    return `<div class="note"><div class="meta"><span>${n.date}</span>
      <span class="src">${n.src}</span>${n.topic ? `<span>· ${n.topic}</span>` : ''}</div>
      <div class="body">${n.text}</div></div>`;
  }
  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), 2200);
  }

  /* ============================================================
     mountC(rootId) → { start, stop }
     ============================================================ */
  function mountC(rootId) {
    if (!h('c-style')) {
      const st = document.createElement('style');
      st.id = 'c-style'; st.textContent = CSS;
      document.head.appendChild(st);
    }
    h(rootId).innerHTML = MARKUP;

    let idx = 0, flipped = false, rated = {}, removed = [], skipped = [], timer = null;

    const SUB = ['cx1', 'cx2', 'cx3'];
    function sub(id) {
      SUB.forEach(s => h(s).classList.add('hidden'));
      h(id).classList.remove('hidden');
      window.scrollTo(0, 0);
    }
    const live = () => C_DECK.filter(c => !removed.includes(c.noteId));

    /* ---------- C1 ---------- */
    function start() {
      idx = 0; flipped = false; rated = {}; removed = []; skipped = [];
      h('cx-slot').innerHTML = '';
      h('cx-recent').innerHTML = NOTES.slice(-3).reverse().map(noteHTML).join('');
      sub('cx1');
      arm();
    }
    function arm() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        h('cx-slot').innerHTML = `
          <div class="card push">
            <div class="ai-tag">AI ĐƯA LẠI CHO BẠN · KHÔNG DO BẠN YÊU CẦU</div>
            <h2 style="margin:4px 0 6px">4 thẻ ôn nhanh về <b>Chuẩn hoá CSDL</b> · khoảng 2 phút</h2>
            <p class="reason">Mình dựng thẻ từ 3 note bạn ghi 04/08–06/08, cộng 1 note liên quan ngày 28/07 ·
              đẩy bây giờ vì tuần sau kiểm tra và bạn chưa mở lại chủ đề này lần nào.</p>
            <p class="small" style="margin-top:8px">Câu hỏi trên thẻ do mình đặt ra từ chữ trong note của bạn.
              <b>Mình chọn theo ngày ghi và lịch môn — mình không biết bạn đã thuộc hay chưa.</b></p>
            <div class="row">
              <button class="btn" id="cx-open">Ôn ngay</button>
              <button class="btn ghost" id="cx-later">Để sau</button>
              <button class="btn ghost" id="cx-off1">Đừng nhắc chủ đề này</button>
            </div>
          </div>`;
        h('cx-open').onclick = openDeck;
        h('cx-later').onclick = pushLater;
        h('cx-off1').onclick = topicOff;
        window.scrollTo(0, document.body.scrollHeight);
      }, 2600);
    }

    /* ---------- C2 ---------- */
    function openDeck() {
      if (timer) clearTimeout(timer);
      h('cx-why').textContent = 'Vì tuần sau kiểm tra và bạn chưa mở lại chủ đề này lần nào.';
      idx = 0; flipped = false;
      renderCard();
      sub('cx2');
    }

    function renderCard() {
      const deck = live();
      if (idx >= deck.length) { finish(false); return; }
      const c = deck[idx];
      flipped = false;
      h('cx-after').innerHTML = '';
      h('cx-count').textContent = `Thẻ ${idx + 1}/${deck.length}`;
      h('cx-fill').style.width = (idx / deck.length * 100) + '%';

      const face = h('cx-face');
      face.className = 'face';
      face.onclick = flipCard;
      face.innerHTML = `
        <div class="side">Mặt trước · câu hỏi</div>
        <div class="q">${c.q}</div>
        <div class="tap">Bấm vào thẻ để lật</div>`;
    }

    function flipCard() {
      if (flipped) return;
      flipped = true;
      const c = live()[idx];
      const face = h('cx-face');
      face.classList.add('flipping');

      setTimeout(() => {
        face.className = 'face back' + (c.kind === 'gap' ? ' gap-face' : '');
        face.onclick = null;
        const n = byId(c.noteId);

        if (c.kind === 'gap') {
          /* Don't Act ngay bên trong flashcard — không bịa đáp án */
          face.innerHTML = `
            <div class="side">Mặt sau</div>
            <p class="a">Bạn chưa ghi câu trả lời cho thẻ này.</p>
            <p class="small">Note gốc của bạn dừng ở đây:</p>
            ${noteHTML(n)}
            <p class="small"><b>Mình không tự viết ví dụ BCNF ra</b> — nếu mình bịa, bạn sẽ ôn theo
              thứ mà thầy không dạy, và bạn không có cách nào phát hiện.</p>`;
          h('cx-after').innerHTML = `
            <div class="uncert">Thẻ này mình vẫn dựng lên dù không có đáp án, để bạn biết mình đang thiếu
              phần nào <b>trước</b> hôm kiểm tra chứ không phải trong lúc làm bài.</div>
            <div class="row">
              <button class="btn" id="cx-slide">Mở slide 12 gốc</button>
              <button class="btn ghost" id="cx-ask">Hỏi bạn cùng lớp</button>
              <button class="btn ghost" id="cx-mark">Đánh dấu để chép lại →</button>
            </div>`;
          h('cx-slide').onclick = () => toast('(mô phỏng) Mở slide 12 buổi 06/08 trên V-Learn');
          h('cx-ask').onclick = () => toast('(mô phỏng) Soạn tin nhắn hỏi bạn cùng lớp');
          h('cx-mark').onclick = () => rate('gap');
          return;
        }

        face.innerHTML = `
          <div class="side">Mặt sau · từ note của bạn</div>
          <p class="a">${c.a}</p>
          ${c.extra ? `<p class="small">${c.extra}</p>` : ''}
          <p style="margin:10px 0 0"><span class="chip" id="cx-chip">Note ${n.date} · ${n.src}</span></p>
          ${c.why ? `<p class="reason">${c.why}</p>` : ''}`;
        h('cx-chip').onclick = () => openNote(c.noteId);

        h('cx-after').innerHTML = `
          <p class="small" style="margin:14px 0 0">Bạn nhớ phần này chứ?</p>
          <div class="rate">
            <button data-r="known">Nhớ rồi</button>
            <button data-r="fuzzy">Mơ hồ</button>
            <button data-r="no">Chưa nhớ</button>
          </div>
          ${c.kind === 'stretch' ? `<div class="row">
            <button class="btn ghost" id="cx-drop">Thẻ này lạc đề — gỡ khỏi bộ</button></div>` : ''}`;
        h('cx-after').querySelectorAll('.rate button')
          .forEach(b => b.onclick = () => rate(b.dataset.r));
        if (c.kind === 'stretch') h('cx-drop').onclick = () => removeCard(c.noteId);
      }, 170);
    }

    function openNote(id) {
      if (h('cx-after').querySelector('.raw-note')) return;
      const n = byId(id);
      toast('Note gốc ' + n.date + ' · ' + n.src);
      h('cx-after').insertAdjacentHTML('afterbegin',
        `<div class="card raw-note" style="margin-top:12px">
           <div class="label">Note gốc — nguyên văn</div>${noteHTML(n)}</div>`);
    }

    function rate(kind) {
      rated[live()[idx].noteId] = kind;
      idx++;
      renderCard();
    }

    function removeCard(noteId) {
      removed.push(noteId);
      skipped.push('Thẻ “Phụ thuộc hàm X → Y” · bạn gỡ khỏi bộ ' + TODAY);
      toast('Đã gỡ thẻ. Note gốc vẫn còn nguyên.');
      renderCard();
    }

    function quitDeck() {
      const left = live().length - idx;
      if (left > 0) skipped.push(`${left} thẻ Chuẩn hoá CSDL · bạn dừng giữa chừng ${TODAY}`);
      finish(true);
    }

    /* ---------- C3 ---------- */
    function renderSkipped() {
      h('cx3-skipped').innerHTML = skipped.length
        ? skipped.map(s => `<div class="note"><div class="body">${s}</div></div>`).join('')
        : '<p class="small">Chưa có thẻ nào.</p>';
    }

    function finish(quit) {
      const vals = Object.values(rated);
      const nk = vals.filter(v => v === 'known').length;
      const nf = vals.filter(v => v === 'fuzzy').length;
      const nn = vals.filter(v => v === 'no').length;
      const ng = vals.filter(v => v === 'gap').length;
      const back = nf + nn;

      h('cx3-title').textContent = quit ? 'Đã dừng' : 'Xong bộ thẻ';
      h('cx3-result').innerHTML = quit
        ? `Bạn đã dừng sau <b>${vals.length} thẻ</b>. Phần còn lại nằm ở danh sách bên dưới.`
        : `Bạn đã đi hết bộ thẻ về <b>Chuẩn hoá CSDL</b>.`;

      h('cx3-tally').innerHTML = [
        nk ? `<span class="pill">Nhớ rồi · ${nk}</span>` : '',
        nf ? `<span class="pill">Mơ hồ · ${nf}</span>` : '',
        nn ? `<span class="pill">Chưa nhớ · ${nn}</span>` : '',
        ng ? `<span class="pill">Chưa ghi trong note · ${ng}</span>` : ''
      ].join('');

      h('cx3-plan').innerHTML = `
        <div class="ai-block" style="margin-top:14px">
          <div class="ai-tag">MÌNH SẼ LÀM GÌ TIẾP</div>
          <p>${back
            ? `Mình sẽ đưa lại <b>${back} thẻ</b> bạn chưa chắc vào <b>20/08</b>, trước buổi học.`
            : (vals.length
              ? `Mình sẽ không đưa lại chủ đề này trong 30 ngày tới.`
              : `Bạn chưa chấm thẻ nào, nên mình chưa đổi gì cả — bộ thẻ giữ nguyên và mình sẽ hỏi lại trước buổi 20/08.`)}
            ${ng ? `<br>Thẻ chưa có đáp án mình để riêng, kèm link slide 12 — mình không tự điền vào.` : ''}</p>
          <div class="uncert">Mình chỉ biết bạn đã <b>bấm</b> gì trên thẻ.
            Mình không biết bạn có thật sự nhớ hay không, và mình cũng không biết
            đây có phải lúc bạn muốn ôn hay không.</div>
        </div>`;

      renderSkipped();
      sub('cx3');
    }

    function pushLater() {
      skipped.push('4 thẻ Chuẩn hoá CSDL · bạn hoãn ' + TODAY);
      h('cx3-title').textContent = 'Đã hoãn';
      h('cx3-result').innerHTML = 'Được. Mình sẽ nhắc lại <b>trước buổi 20/08</b>.';
      h('cx3-tally').innerHTML = ''; h('cx3-plan').innerHTML = '';
      renderSkipped(); sub('cx3');
    }

    function topicOff() {
      skipped.push('Chủ đề Chuẩn hoá CSDL · đã tắt nhắc ' + TODAY);
      h('cx3-title').textContent = 'Đã tắt';
      h('cx3-result').innerHTML = 'Đã tắt thẻ ôn nhanh cho chủ đề <b>Chuẩn hoá CSDL</b>. Bạn bật lại được trong cài đặt.';
      h('cx3-tally').innerHTML = ''; h('cx3-plan').innerHTML = '';
      renderSkipped(); sub('cx3');
    }

    /* nút cố định */
    h('cx-quit').onclick = quitDeck;
    h('cx-resched').onclick = () => toast('(mô phỏng) Đổi sang: chỉ nhắc vào tối thứ 7');
    h('cx-topicoff').onclick = topicOff;
    h('cx-alloff').onclick = () => toast('(mô phỏng) Đã tắt toàn bộ thẻ ôn nhanh');
    h('cx-home').onclick = () => { sub('cx1'); h('cx-slot').innerHTML = ''; arm(); };

    function stop() { if (timer) clearTimeout(timer); }

    return { start, stop };
  }

  global.mountC = mountC;
  global.C_DECK = C_DECK;
})(window);
