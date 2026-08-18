# Track 1 — Day 18: Three Solution Options & A/B/C Prototype Test

## 1. Thông tin cá nhân và nhóm

| | |
|---|---|
| **Họ tên** | Đỗ Quý Đức |
| **MHV** | 2A202601628 |
| **Case** | Case B — AI Notes: Personal Learning Notes (V-Learn) — *giữ nguyên case Day 17* |

**Thành viên nhóm**

- Trần Thanh Huyền — 2A202601578
- Thiều Thị Ngọc Ánh — 2A22601864
- Đỗ Quý Đức — 2A202601628
- Nguyễn Thanh Hùng

**Tài liệu trong repo**

| File | Nội dung |
|---|---|
| `three-option-design-sheet.md` | Design Sheet A/B/C + Human–AI Decision Table |
| `option-a-design.md` | Spec Option A — phần tôi chịu trách nhiệm chính |
| `prototype-link.md` | Link và cách mở prototype A/B/C |
| `prototype/` | Prototype chạy được — `index.html`, `fixture.js`, `annotations.md` |
| `prototype-feedback-note.md` | Feedback Note phiên do chính tôi facilitate |
| `group-feedback-synthesis.md` | Tổng hợp ba feedback của nhóm |
| `ai-support-log.md` | AI Support Log cá nhân |
| `day18-lab.md` | Bài làm đầy đủ theo từng chặng, kèm 5 gate |
| `day17-evidence/` | Evidence Day 17 làm đầu vào |

---

## 2. Hypothesis Problem

Bản nhóm dùng trong Day 18 — **giữ nguyên từ Day 17**, không đổi problem để chọn solution dễ build hơn:

> Khi **cần ôn lại một chủ đề đã học sau vài tuần**, **học viên V-Learn có thói quen ghi chú sau mỗi buổi học** gặp khó khăn trong việc **lấy lại đúng những gì mình đã ghi về chủ đề đó** vì **note tích lũy dần và nằm rải rác ở ít nhất hai nơi, không có đường dẫn nào từ chủ đề đang cần tới note đã ghi**, dẫn đến **mất nhiều thời gian tìm, có lúc không tìm được, và có lần bỏ luôn ý định ôn**.

| Thành phần | Nội dung |
|---|---|
| Situation | Cần ôn lại một chủ đề đã học sau vài tuần |
| User | Học viên V-Learn ghi chú sau mỗi buổi học |
| Job | Lấy lại đúng note đã ghi về chủ đề đó |
| Barrier | Note tích lũy + rải rác ≥2 nơi, không có đường dẫn từ chủ đề → note |
| Consequence | Mất thời gian, có lúc không tìm được, có lần bỏ ôn |

**Observation Day 17 nối vào giả thuyết** (`day17-evidence/interview-notes.md`):

> *"Dần dần, nội dung ngày càng nhiều lên. Khi cần ôn lại, mình phải tìm lại nội dung cần học nên rất mất thời gian. Có lúc mình cũng không tìm được."* — F7, F8
> Kèm F9: đã có lần định ôn lại nhưng bỏ qua. Chuỗi này do user tự kể, không phải trả lời câu hỏi leading.

**Điều vẫn chưa được chứng minh:** tần suất và thời lượng thực tế mỗi lần tìm · chuyện gì xảy ra sau khi tìm không thấy (probe bị bỏ lỡ ở Day 17) · rải rác ≥2 nơi có phải barrier chính không · mâu thuẫn giữa F6 (*"không cần xem lại nhiều"*) và F8–F9 · pattern mới có ở 1 user.
**Pain chưa được validated** — Day 17 mới là practice interview.

---

## 3. Three Solution Options

Ba option cùng giải một problem, cho cùng user và situation, khác nhau ở **thời điểm công việc xảy ra** và **ai khởi xướng** — không phải ba phiên bản giao diện.

| | Option | Cơ chế | AI Act/Ask/Don't Act |
|---|---|---|---|
| **A** | **Ask at recall** | User hỏi bằng ngôn ngữ tự nhiên lúc ôn; AI quét toàn bộ note, tổng hợp câu trả lời **kèm trích dẫn note gốc**. Không tìm ra thì escalation sang slide V-Learn, không bịa. | **Act** + Don't Act khi không đủ tự tin |
| **B** | **File at capture** | AI đề xuất chủ đề ngay khi user vừa ghi note; user xác nhận 1 chạm; về sau ôn theo topic hub. | **Ask** — agency thấp nhất |
| **C** | **Resurface without search** | Hệ thống tự chọn thời điểm và nội dung, đẩy note cũ quay lại dưới dạng thẻ ôn nhanh. User không đi tìm gì. | **Act** — user phủ quyết sau |

```
USER CREATES / INITIATES ──────── USER + AI CO-CREATE ──────── AI CREATES / INITIATES, USER REVIEWS
     [A] Ask at recall            [B] File at capture           [C] Resurface without search
```

**Nguyên tắc Human–AI của nhóm:** AI được phép chủ động **tỉ lệ nghịch với độ khó phát hiện lỗi**. B phải là **Ask** vì lỗi của nó là *silent failure* — note gắn sai nhãn thì biến mất khỏi hub và user không biết mình đang thiếu gì.

**Prototype:** `prototype/index.html` — xem `prototype-link.md`. Cả ba xuất phát từ một màn hình context chung và dùng một fixture duy nhất: 12 note · 4 tuần · 7 Notepad + 5 app điện thoại · 3 note thuộc chủ đề *Chuẩn hoá CSDL* · 2 note gây nhiễu gần.

Chi tiết đầy đủ: `three-option-design-sheet.md`.

---

## 4. Đóng góp của tôi trong nhóm

**Option chịu trách nhiệm chính: Option A — Ask at recall** — spec đầy đủ: `option-a-design.md`
- Thiết kế cơ chế truy xuất theo câu hỏi, quy tắc **mọi ý phải gắn chip nguồn**.
- Thiết kế nhánh **Don't Act**: khi không tìm được, AI không bịa mà đưa escalation sang slide V-Learn gốc hoặc gợi ý hỏi bạn cùng lớp.
- Cài chủ ý lỗi kiểm chứng được: note 06/08 chứa *"CHƯA CHÉP"* trong khi câu trả lời tổng hợp nghe như đã đủ — để đo **citation có bảo vệ user thật hay chỉ là trang trí**.
- Viết 4 quy tắc canned output (mọi ý phải gắn nguồn · không nói quá note gốc · không chắc thì hạ cấp · không tìm ra thì Don't Act).
- Làm **định tuyến câu hỏi tự do**: tester gõ bằng lời của mình, có dấu hay không dấu đều nhận; câu ngoài chủ đề chính được tìm thật trong 12 note và ghép lại nguyên văn kèm nguồn.

**Shared context / content**
- Dựng **fixture dùng chung** `prototype/fixture.js` cho cả A/B/C: 12 note, 4 tuần, 7 Notepad + 5 app điện thoại, 3 note đúng chủ đề, 2 note gây nhiễu gần. Cố định bằng số để tester so **cơ chế**, không so chất lượng nội dung.
- Dựng màn hình context chung và bộ component dùng chung (`.note`, `.chip`, `.ai-block`, `.uncert`), nút reset ↺ ở mọi trạng thái.

**Human–AI decisions**
- Đề xuất tiêu chí chốt agency: **độ khó phát hiện lỗi**, từ đó kết luận B (không phải C) là option nguy hiểm nhất và phải dùng **Ask**.
- Đề xuất **ràng buộc bắt buộc cho Option B**: phải giữ đường tìm note không phụ thuộc nhãn, nếu không B tự tạo lại đúng pain F8.
- Rà Parking Lot theo 4 điều kiện của đề, phát hiện pool thiếu **human escalation** → bổ sung hướng 7.

**Prototype**
- Code toàn bộ `prototype/index.html` (ba option + màn hình chung, một file tự chạy).
- Viết `prototype/annotations.md`: khung *expect / watch for / do not explain* cho từng option + bảng thứ tự chống order effect.

**Facilitation & observation**
- Facilitate Tester 1 (thứ tự A → B → C), ghi `prototype-feedback-note.md`.
- Soạn biểu mẫu Feedback Note dùng chung (`feedback/TEMPLATE.md`) với hai ô bắt buộc: **trade-off tester chấp nhận** và **câu nói đầu tiên khi thẻ C tự hiện**.
- ⬜ *Chưa thực hiện — chờ buổi test.*

**Tổng hợp**
- ⬜ *Chờ đủ ba Feedback Note.*

---

## 5. Prototype Feedback

> ⚠️ **Chưa chạy test.** Mục này để trống cho tới khi có tester thật. Không điền suy đoán.

**Observation từ phiên tôi facilitate:** `prototype-feedback-note.md` — ⬜ chưa có dữ liệu
**Three-feedback synthesis:** `group-feedback-synthesis.md` — ⬜ chưa có dữ liệu

**Next Change:** ⬜ chưa chốt
**Still Unproven:** những điều ở mục 2 vẫn chưa được gỡ; và ba feedback (khi có) **không** đủ để tuyên bố solution đã validated.

Ba mốc bắt buộc phải ghi được trong buổi test, vì cả bộ prototype được thiết kế quanh chúng:

| Mốc | Câu hỏi nó trả lời |
|---|---|
| **A** — tester có bấm chip nguồn và phát hiện note *"CHƯA CHÉP"* không? | Citation có thật sự bảo vệ user, hay chỉ là trang trí? |
| **B** — chọn nhãn nào, và có nhận ra topic hub thiếu note không? | Silent failure có bị phát hiện không? |
| **C** — câu nói **đầu tiên** khi thẻ tự nhảy ra (nguyên văn) | AI chủ động là tiện hay làm phiền? |

Câu được phép kết luận cuối bài:
> *"Với Hypothesis Problem này, chúng tôi đã thử ba cách giải. Tester đã …, vì vậy iteration tiếp theo chúng tôi sẽ …"*

Câu **không** được kết luận: *"User đã xác nhận solution này đúng."*

---

## 6. AI Support Log

Bản đầy đủ: `ai-support-log.md`. Tóm tắt:

**AI đã giúp gì?** Dựng fixture 12 note có nhiễu và có note thiếu, code toàn bộ prototype A/B/C dùng chung component, soạn biểu mẫu Feedback Note. Hữu ích nhất là lúc rà **distance check** — bị ép viết ba câu *"A khác B vì…"* mà không được nhắc màu, layout hay wording, nhờ đó phát hiện bản nháp đầu vẫn đang mô tả ba giao diện chứ chưa phải ba cơ chế.

**AI sai / hời hợt ở đâu?**
1. Ba option đầu AI đưa ra **đều là "AI làm hộ"** — không có hướng user-led/no-inference, không có đường thoát khi AI không tìm ra. Chỉ khi rà đúng 4 điều kiện của đề mới lộ ra thiếu **human escalation**.
2. Human–AI design ban đầu bị **"đều"** — cả ba option đều viết "user giữ quyền quyết định", nghe hợp lý nhưng làm mất khác biệt giữa các option.
3. AI **dựng lại Solution Parking Lot** dù Day 17 không lưu mục này → rủi ro hợp lý hoá ngược từ ba option đã chọn sẵn. Đã đánh dấu ⚠️.
4. AI phát biểu một **"nguyên lý Day 16"** trong khi repo không có teardown Day 16 nào — suy luận ngược, đã đánh dấu ⚠️.

**Tôi đã tự sửa / quyết định lại gì?**
- **Không để AI điền Chặng 6.** Prototype có thể để AI viết, feedback của người thật thì không. Gate 5 để trống cho tới khi test xong.
- **Cố ý cài lỗi vào prototype** — bản AI dựng lúc đầu trơn tru và luôn đúng, mà prototype luôn đúng thì buổi test chỉ thu về lời khen.
- **Cố định fixture bằng số cụ thể** và bắt cả ba option dùng chung một file.
- **Giữ hướng 7 làm fallback**, không nâng thành option thứ tư.
- **Thêm ràng buộc bắt buộc cho Option B** (đường tìm độc lập với nhãn).
- **Bỏ 2 trong 7 mục observation focus** (hesitation, help needed) vì ở phiên 15 phút chúng đo "chưa quen giao diện" nhiều hơn đo cơ chế.

---

## Trạng thái 5 gate

| Gate | Trạng thái |
|---|---|
| **1. Evidence Continuity** | ✅ Hypothesis Problem đủ 5 thành phần, nối vào F7–F9 Day 17, nêu rõ điều chưa biết<br>⚠️ repo cá nhân mới có 1/3 Practice Note — cần bổ sung ở bản nhóm |
| **2. Meaningful Options** | ✅ Cùng user/situation/task/outcome/fixture; khác ở mechanism và role split; distance check viết được mà không nhắc màu/layout/wording |
| **3. Human Control** | ✅ Mỗi option có expectation, agency, evidence/uncertainty và đường recovery<br>⚠️ Option B kèm ràng buộc bắt buộc: phải giữ đường tìm độc lập với nhãn |
| **4. Test-ready** | ✅ 6/7 tiêu chí — mở 1 file, cùng context và task, không cần narrate, có reset path<br>⬜ chưa có người ngoài nhóm thử (việc phút 65–75 tại lớp) |
| **5. Learning** | ⬜ **Chưa qua** — cần ba Feedback Note từ ba tester ngoài nhóm |

## Còn thiếu trước khi nộp

- [ ] Practice Note 2 và 3 từ đồng đội (Chặng 1)
- [ ] Nhóm xác nhận Solution Parking Lot và nguyên lý Day 16 (hai chỗ ⚠️)
- [ ] Nhóm chốt phân công option cho Huyền / Ngọc Ánh / Hùng (Đức: Option A ✅)
- [ ] Người ngoài nhóm thử prototype trước khi test chính thức
- [ ] Test với 3 tester ngoài nhóm → 3 Feedback Note
- [ ] Group Feedback Synthesis + một Next Change + Still Unproven
