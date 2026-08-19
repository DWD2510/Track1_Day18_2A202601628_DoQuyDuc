# Track 1 — Day 18: Three Solution Options & A/B/C Prototype Test

## 1. Thông tin cá nhân và nhóm

|            |                                                                                 |
| ---------- | ------------------------------------------------------------------------------- |
| **Họ tên** | Đỗ Quý Đức                                                                      |
| **MHV**    | 2A202601628                                                                     |
| **Case**   | Case B — AI Notes: Personal Learning Notes (V-Learn) — _giữ nguyên case Day 17_ |

**Thành viên nhóm**

- Đỗ Quý Đức — 2A202601628
- Nguyễn Thanh Hùng - 2A202601808
- Lê Nguyễn Minh Quang - 2A202601248

**Tài liệu trong repo**

| File                           | Nội dung                                                           |
| ------------------------------ | ------------------------------------------------------------------ |
| `three-option-design-sheet.md` | Design Sheet A/B/C + Human–AI Decision Table                       |
| `option-c-design.md`           | **Spec Option C — phần tôi chịu trách nhiệm chính**                |
| `option-a-design.md`           | Spec Option A — viết ở giai đoạn khám phá ba option                |
| `prototype-link.md`            | Link và cách mở prototype A/B/C                                    |
| `prototype/`                   | Prototype chạy được — `index.html`, `option-c.js`, `option-c-flashcard.html`, `fixture.js`, `annotations.md` |
| `prototype-feedback-note.md`   | Feedback Note phiên do chính tôi facilitate                        |
| `group-feedback-synthesis.md`  | Tổng hợp ba feedback của nhóm                                      |
| `ai-support-log.md`            | AI Support Log cá nhân                                             |
| `day18-lab.md`                 | Bài làm đầy đủ theo từng chặng, kèm 5 gate                         |
| `day17-evidence/`              | Evidence Day 17 làm đầu vào                                        |

---

## 2. Hypothesis Problem

Bản nhóm dùng trong Day 18 — **giữ nguyên từ Day 17**, không đổi problem để chọn solution dễ build hơn:

> Khi **cần ôn lại một chủ đề đã học sau vài tuần**, **học viên V-Learn có thói quen ghi chú sau mỗi buổi học** gặp khó khăn trong việc **lấy lại đúng những gì mình đã ghi về chủ đề đó** vì **note tích lũy dần và nằm rải rác ở ít nhất hai nơi, không có đường dẫn nào từ chủ đề đang cần tới note đã ghi**, dẫn đến **mất nhiều thời gian tìm, có lúc không tìm được, và có lần bỏ luôn ý định ôn**.

| Thành phần  | Nội dung                                                            |
| ----------- | ------------------------------------------------------------------- |
| Situation   | Cần ôn lại một chủ đề đã học sau vài tuần                           |
| User        | Học viên V-Learn ghi chú sau mỗi buổi học                           |
| Job         | Lấy lại đúng note đã ghi về chủ đề đó                               |
| Barrier     | Note tích lũy + rải rác ≥2 nơi, không có đường dẫn từ chủ đề → note |
| Consequence | Mất thời gian, có lúc không tìm được, có lần bỏ ôn                  |

**Observation Day 17 nối vào giả thuyết** (`day17-evidence/interview-notes.md`):

> _"Dần dần, nội dung ngày càng nhiều lên. Khi cần ôn lại, mình phải tìm lại nội dung cần học nên rất mất thời gian. Có lúc mình cũng không tìm được."_ — F7, F8
> Kèm F9: đã có lần định ôn lại nhưng bỏ qua. Chuỗi này do user tự kể, không phải trả lời câu hỏi leading.

**Điều vẫn chưa được chứng minh:** tần suất và thời lượng thực tế mỗi lần tìm · chuyện gì xảy ra sau khi tìm không thấy (probe bị bỏ lỡ ở Day 17) · rải rác ≥2 nơi có phải barrier chính không · mâu thuẫn giữa F6 (_"không cần xem lại nhiều"_) và F8–F9 · pattern mới có ở 1 user.
**Pain chưa được validated** — Day 17 mới là practice interview.

---

## 3. Three Solution Options

Ba option cùng giải một problem, cho cùng user và situation, khác nhau ở **thời điểm công việc xảy ra** và **ai khởi xướng** — không phải ba phiên bản giao diện.

|       | Option                       | Cơ chế                                                                                                                                                                    | AI Act/Ask/Don't Act                    |
| ----- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **A** | **Ask at recall**            | User hỏi bằng ngôn ngữ tự nhiên lúc ôn; AI quét toàn bộ note, tổng hợp câu trả lời **kèm trích dẫn note gốc**. Không tìm ra thì escalation sang slide V-Learn, không bịa. | **Act** + Don't Act khi không đủ tự tin |
| **B** | **File at capture**          | AI đề xuất chủ đề ngay khi user vừa ghi note; user xác nhận 1 chạm; về sau ôn theo topic hub.                                                                             | **Ask** — agency thấp nhất              |
| **C** | **Resurface without search**<br>_(option nhóm đã chốt)_ | Hệ thống tự chọn thời điểm và nội dung, đẩy note cũ quay lại dưới dạng **thẻ ôn nhanh → bộ flashcard ngắn**. User không đi tìm gì. | **Act** — user phủ quyết sau |

```
USER CREATES / INITIATES ──────── USER + AI CO-CREATE ──────── AI CREATES / INITIATES, USER REVIEWS
     [A] Ask at recall            [B] File at capture           [C] Resurface without search
```

**Nguyên tắc Human–AI của nhóm:** AI được phép chủ động **tỉ lệ nghịch với độ khó phát hiện lỗi**. B phải là **Ask** vì lỗi của nó là _silent failure_ — note gắn sai nhãn thì biến mất khỏi hub và user không biết mình đang thiếu gì.

> **Nhóm đã chốt đi tiếp với Option C.** Ba option vẫn được giữ đủ trong bài — Day 18 yêu cầu **thử ba cách giải**, không phải chọn sẵn một cách. Việc chốt C là quyết định về **hướng đi tiếp**, và nó vẫn phải chịu kiểm chứng ở buổi test: nếu tester phản ứng như F6 thì C là option sai.

**Prototype:** `prototype/index.html` — xem `prototype-link.md`. Cả ba xuất phát từ một màn hình context chung và dùng một fixture duy nhất: 12 note · 4 tuần · 7 Notepad + 5 app điện thoại · 3 note thuộc chủ đề _Chuẩn hoá CSDL_ · 2 note gây nhiễu gần.

Chi tiết đầy đủ: `three-option-design-sheet.md`.

---

## 4. Đóng góp của tôi trong nhóm

**Option chịu trách nhiệm chính: Option C — Resurface without search** — spec đầy đủ: `option-c-design.md`

Hình thức đã chốt: **thẻ ôn nhanh tự đến → mở thành bộ flashcard ngắn (4 thẻ · ~2 phút)**.

- Thiết kế cơ chế **bỏ hẳn bước khởi xướng**: AI tự quyết định *cái gì* đáng đưa lại và *khi nào*; user không đi tìm gì.
- Chốt **ràng buộc bắt buộc của C**: _không có lối vào nào để user tự mở bộ thẻ_. Không có màn hình "Bộ thẻ của tôi", không có nút "Ôn tập". Thiếu ràng buộc này, C biến thành app flashcard do user khởi xướng và **distance check với A/B sụp đổ**.
- Viết 4 quy tắc canned output cho C (mọi thẻ truy được về một note gốc · không hỏi thứ user chưa ghi · luôn nói lý do đẩy · không suy ra "đã thuộc" từ hành vi bấm).
- Thiết kế **Don't Act nằm bên trong một cơ chế Act**: thẻ số 4 sinh từ note 06/08 mà chính user ghi _"CHƯA CHÉP"_ → mặt sau **không có đáp án**, nói thẳng user chưa ghi và mở đường sang slide 12 / hỏi bạn. AI được quyền tự đẩy nội dung, **không** được quyền tự viết nội dung.
- Cài **thẻ lạc đề có chủ ý** (thẻ 3 sinh từ note nhiễu _Phụ thuộc hàm_, có ghi rõ lý do) để đo **silent scope creep** — dạng lỗi cùng họ với silent failure của B.
- Đặt ba đường thoát **ngay tại C1, trước nội dung**: Ôn ngay · Để sau · Đừng nhắc chủ đề này. Điều kiện để C được dùng agency "Act" là tắt phải rẻ hơn chi phí bị làm phiền.
- Nêu thẳng **counter-evidence của chính C** trong spec: F4 đến từ một câu hỏi dẫn dắt (_"đúng không?"_), và F6 (_"không cần xem lại nhiều"_) là bằng chứng chống lại C. C là option duy nhất có bằng chứng phản đối ngay trong buổi phỏng vấn.

**Shared context / content**

- Dựng **fixture dùng chung** `prototype/fixture.js` cho cả A/B/C: 12 note, 4 tuần, 7 Notepad + 5 app điện thoại, 3 note đúng chủ đề, 2 note gây nhiễu gần. Cố định bằng số để tester so **cơ chế**, không so chất lượng nội dung.
- Dựng màn hình context chung và bộ component dùng chung (`.note`, `.chip`, `.ai-block`, `.uncert`), nút reset ↺ ở mọi trạng thái.
- Tách Option C ra `prototype/option-c.js` làm **một nguồn duy nhất**, `index.html` và `option-c-flashcard.html` cùng nạp — để ba tester không bao giờ nhìn thấy hai phiên bản C khác nhau.

**Human–AI decisions**

- Đề xuất tiêu chí chốt agency: **độ khó phát hiện lỗi**, từ đó kết luận B (không phải C) là option nguy hiểm nhất và phải dùng **Ask**.
- Từ chính tiêu chí đó, biện hộ cho việc C được dùng **Act**: lỗi của C hiện ngay trên mặt thẻ và hoàn tác chỉ mất một nút — đổi lại C phải là option **dễ tắt nhất**.
- Đề xuất **ràng buộc bắt buộc cho Option B**: phải giữ đường tìm note không phụ thuộc nhãn, nếu không B tự tạo lại đúng pain F8.
- Rà Parking Lot theo 4 điều kiện của đề, phát hiện pool thiếu **human escalation** → bổ sung hướng 7.

**Prototype**

- Code toàn bộ `prototype/index.html` (ba option + màn hình chung), `prototype/option-c.js` (Option C), `prototype/option-c-flashcard.html` (bản C chạy riêng khi trình bày).
- Viết `prototype/annotations.md`: khung _expect / watch for / do not explain_ cho từng option, bảng bốn thẻ của C kèm phép đo, và bảng thứ tự chống order effect.

**Option A**

- Trước khi nhóm chốt C, tôi làm spec đầy đủ cho Option A (`option-a-design.md`) và code nhánh A trong prototype. Giữ lại trong repo vì Day 18 yêu cầu **ba option đầy đủ**, không phải một option.

**Facilitation & observation**

- Facilitate Tester 1 (thứ tự A → B → C), ghi `prototype-feedback-note.md`.
- Soạn biểu mẫu Feedback Note dùng chung (`feedback/TEMPLATE.md`) với hai ô bắt buộc: **trade-off tester chấp nhận** và **câu nói đầu tiên khi thẻ C tự hiện**.
- ⬜ _Chưa thực hiện — chờ buổi test._

**Tổng hợp**

- ⬜ _Chờ đủ ba Feedback Note._

---

## 5. Prototype Feedback

> ⚠️ **Chưa chạy test.** Mục này để trống cho tới khi có tester thật. Không điền suy đoán.

**Observation từ phiên tôi facilitate:** `prototype-feedback-note.md` — ⬜ chưa có dữ liệu
**Three-feedback synthesis:** `group-feedback-synthesis.md` — ⬜ chưa có dữ liệu

**Next Change:** ⬜ chưa chốt
**Still Unproven:** những điều ở mục 2 vẫn chưa được gỡ; và ba feedback (khi có) **không** đủ để tuyên bố solution đã validated.

Ba mốc bắt buộc phải ghi được trong buổi test, vì cả bộ prototype được thiết kế quanh chúng:

| Mốc                                                                     | Câu hỏi nó trả lời                                     |
| ----------------------------------------------------------------------- | ------------------------------------------------------ |
| **A** — tester có bấm chip nguồn và phát hiện note _"CHƯA CHÉP"_ không? | Citation có thật sự bảo vệ user, hay chỉ là trang trí? |
| **B** — chọn nhãn nào, và có nhận ra topic hub thiếu note không?        | Silent failure có bị phát hiện không?                  |
| **C** — câu nói **đầu tiên** khi thẻ tự nhảy ra (nguyên văn)            | AI chủ động là tiện hay làm phiền?                     |
| **C** — đến thẻ 3 (lạc đề) tester có nhận ra và gỡ không?               | AI âm thầm mở rộng chủ đề — user có thấy không?        |
| **C** — phản ứng với thẻ 4 **không có đáp án**                          | Một chỗ trống được thừa nhận là hữu ích hay bực mình?  |

Câu được phép kết luận cuối bài:

> _"Với Hypothesis Problem này, chúng tôi đã thử ba cách giải. Tester đã …, vì vậy iteration tiếp theo chúng tôi sẽ …"_

Câu **không** được kết luận: _"User đã xác nhận solution này đúng."_

---

## 6. AI Support Log

Bản đầy đủ: `ai-support-log.md`. Tóm tắt:

**AI đã giúp gì?** Dựng fixture 12 note có nhiễu và có note thiếu, code toàn bộ prototype A/B/C dùng chung component, soạn biểu mẫu Feedback Note. Hữu ích nhất là lúc rà **distance check** — bị ép viết ba câu _"A khác B vì…"_ mà không được nhắc màu, layout hay wording, nhờ đó phát hiện bản nháp đầu vẫn đang mô tả ba giao diện chứ chưa phải ba cơ chế.

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

| Gate                       | Trạng thái                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Evidence Continuity** | ✅ Hypothesis Problem đủ 5 thành phần, nối vào F7–F9 Day 17, nêu rõ điều chưa biết<br>⚠️ repo cá nhân mới có 1/3 Practice Note — cần bổ sung ở bản nhóm |
| **2. Meaningful Options**  | ✅ Cùng user/situation/task/outcome/fixture; khác ở mechanism và role split; distance check viết được mà không nhắc màu/layout/wording                  |
| **3. Human Control**       | ✅ Mỗi option có expectation, agency, evidence/uncertainty và đường recovery<br>⚠️ Option B kèm ràng buộc bắt buộc: phải giữ đường tìm độc lập với nhãn |
| **4. Test-ready**          | ✅ 6/7 tiêu chí — mở 1 file, cùng context và task, không cần narrate, có reset path<br>✅ Option C dùng chung `option-c.js` nên bản test và bản trình bày không thể lệch nhau<br>⬜ chưa có người ngoài nhóm thử (việc phút 65–75 tại lớp)        |
| **5. Learning**            | ⬜ **Chưa qua** — cần ba Feedback Note từ ba tester ngoài nhóm                                                                                          |

## Còn thiếu trước khi nộp

- [ ] Practice Note 2 và 3 từ đồng đội (Chặng 1)
- [ ] Nhóm xác nhận Solution Parking Lot và nguyên lý Day 16 (hai chỗ ⚠️)
- [x] Nhóm chốt đi tiếp với **Option C** ✅
- [x] Phân công: **Đức — Option C** (spec `option-c-design.md` + prototype) ✅
- [ ] ⚠️ Phân công lại Option A và B trong nhóm — chờ Hùng và Quang xác nhận
- [ ] Người ngoài nhóm thử prototype trước khi test chính thức
- [ ] Test với 3 tester ngoài nhóm → 3 Feedback Note
- [ ] Group Feedback Synthesis + một Next Change + Still Unproven
