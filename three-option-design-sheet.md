# Three-option Design Sheet — Day 18

**Case B — AI Notes: Personal Learning Notes (V-Learn)** · giữ nguyên case Day 17
Nhóm: Trần Thanh Huyền · Thiều Thị Ngọc Ánh · Đỗ Quý Đức · Nguyễn Thanh Hùng

> Bản đầy đủ kèm quá trình làm từng chặng: `day18-lab.md`

---

## 1. Hypothesis Problem — một, dùng chung cho A/B/C

> Khi **cần ôn lại một chủ đề đã học sau vài tuần**, **học viên V-Learn có thói quen ghi chú sau mỗi buổi học** gặp khó khăn trong việc **lấy lại đúng những gì mình đã ghi về chủ đề đó** vì **note tích lũy dần và nằm rải rác ở ít nhất hai nơi, không có đường dẫn nào từ chủ đề đang cần tới note đã ghi**, dẫn đến **mất nhiều thời gian tìm, có lúc không tìm được, và có lần bỏ luôn ý định ôn**.

**Evidence Day 17 (`day17-evidence/interview-notes.md`):** F1 note ở Notepad + app điện thoại · F7 *"nội dung ngày càng nhiều lên"* · F8 *"phải tìm lại nội dung cần học nên rất mất thời gian. Có lúc mình cũng không tìm được"* · F9 định ôn lại nhưng bỏ qua.

**Chưa được chứng minh:** tần suất và thời lượng thực tế mỗi lần tìm · chuyện gì xảy ra sau khi tìm không thấy · rải rác ≥2 nơi có phải barrier chính không · mâu thuẫn F6 (*"không cần xem lại nhiều"*) vs F8–F9 · pattern mới có ở 1 user.

---

## 2. Những thứ phải giữ nguyên

| Thành phần | Quyết định chung cho A/B/C |
|---|---|
| **Target user** | Học viên V-Learn ghi chú ngắn sau mỗi buổi, note ở ≥2 nơi |
| **Situation** | Đã học chủ đề *Chuẩn hoá CSDL* cách đây ~2 tuần, nay cần quay lại |
| **Task** | Lấy lại đúng những gì đã ghi về chủ đề đó và dùng được ngay |
| **Desired outcome** | Trong một lượt tương tác, có trong tay nội dung đã ghi và không bỏ dở ý định ôn |
| **Content fixture** | `prototype/fixture.js` — 12 note · 4 tuần · **7 Notepad + 5 App ĐT** · **3 note thuộc chủ đề X** · **2 note gây nhiễu gần** (Phụ thuộc hàm, Ràng buộc toàn vẹn) · cùng wording, cùng ngày tháng ở cả ba option |

---

## 3. Ba solution options

| | **A — Ask at recall** | **B — File at capture** | **C — Resurface without search** |
|---|---|---|---|
| **Solution mechanism** | User hỏi bằng ngôn ngữ tự nhiên lúc ôn; AI quét toàn bộ note, tổng hợp câu trả lời **kèm trích dẫn note gốc** | AI đề xuất môn/chủ đề ngay khi user vừa ghi; user xác nhận 1 chạm; về sau ôn theo topic hub | Hệ thống tự chọn thời điểm và nội dung, đẩy note cũ quay lại dưới dạng thẻ ôn nhanh |
| **Giải pain ở đâu** | Làm việc tìm kiếm rẻ đi | Làm cho không còn gì phải tìm | Xoá bỏ hành vi đi tìm |
| **User làm gì** | Đặt câu hỏi · đọc câu trả lời · bấm chip nguồn kiểm chứng | Ghi note như thường · đọc nhãn đề xuất · xác nhận hoặc sửa | Không đi tìm · nhận thẻ · mở / hoãn / đánh dấu đã thuộc |
| **AI làm gì** | Tìm across nguồn, chọn lọc, tổng hợp, **luôn dẫn nguồn**; không tìm ra thì escalation, không bịa | Đọc note, đoán chủ đề, tìm note cũ cùng chủ đề, **đề xuất** — không tự ghi | Quyết định **cái gì** đáng đưa lại và **khi nào**; tóm tắt thành thẻ |
| **Trigger** | User khởi xướng, **lúc ôn** | Hệ thống khởi xướng, **lúc ghi** | Hệ thống khởi xướng, **lúc AI chọn** |
| **Trade-off chính** | Không sửa được gốc lộn xộn — mỗi lần hỏi tính lại từ đầu; user phải bỏ công kiểm chứng thì mới an toàn | Đánh thuế lên **mọi** lần ghi (ghi chỉ mất 1–2 phút); xác nhận cho xong → nhãn sai → hub hỏng; lợi ích chỉ đến sau vài tuần | User nhường quyền chọn thời điểm; đẩy sai → làm phiền → tắt thông báo là mất hết. F6 là tín hiệu rủi ro trực tiếp |

### Distance check

- **A khác B vì** toàn bộ công việc của A rơi vào **thời điểm ôn** và không để lại gì sau khi dùng; B đặt công việc vào **thời điểm ghi** và để lại cấu trúc bền vững tái dùng ở mọi lần ôn sau.
- **B khác C vì** B vẫn đòi user **tự khởi xướng** việc quay lại; C loại bỏ hoàn toàn hành vi khởi xướng — quyền quyết định *khi nào nội dung xuất hiện* chuyển từ user sang AI.
- **A khác C vì** A chỉ chạy khi user hỏi và mọi câu chữ đều neo vào note gốc bằng citation; C chạy khi user không hỏi gì, nội dung do AI chọn, user chỉ có quyền phủ quyết **sau khi đã bị ngắt quãng**.

```
USER CREATES / INITIATES ──────── USER + AI CO-CREATE ──────── AI CREATES / INITIATES, USER REVIEWS
          │                              │                                      │
     [A] Ask at recall            [B] File at capture               [C] Resurface without search
```

---

## 4. Human–AI Decision Table

| Human–AI decision | **A** | **B** | **C** |
|---|---|---|---|
| **AI Act / Ask / Don't Act?** | **Act** khi được hỏi + **Don't Act** khi không đủ tự tin → escalation sang slide V-Learn / hỏi bạn, không bịa | **Ask** — agency thấp nhất; AI không được tự gắn nhãn | **Act** — tự đẩy, user phủ quyết sau |
| **Vì sao** | User đã chủ động hỏi; lỗi kiểm chứng được nhờ citation | **Lỗi khó phát hiện nhất** — note gắn sai nhãn thì biến mất khỏi hub, user không biết mình đang thiếu gì | Lỗi hiện ngay trên mặt thẻ, hoàn tác rẻ; đổi lại phải là option **dễ tắt nhất** |
| **Capability / limit nói bằng gì** | *"Mình tìm trong 12 note của bạn, không tìm trên internet"* + *"chỉ tìm được thứ bạn đã ghi"* | Nhãn ghi rõ **"CHƯA LƯU"** + *"AI đoán từ chữ trong note"* | *"Mình chọn theo ngày ghi và lịch môn — mình không biết bạn đã thuộc hay chưa"* |
| **Evidence / uncertainty** | Chip nguồn từng ý (`Note 04/08 · Notepad`); khi yếu thì nói rõ chắc mấy ý, hoặc bỏ tổng hợp trả về note thô | Hiện **lý do đoán**; khi mơ hồ đưa **2 nhãn để user chọn**, không tự chốt | Thẻ ghi nguồn + ngày + **lý do đẩy**; không chắc thì đẩy thẻ nhẹ, không tóm tắt sẵn |
| **Control & recovery** | Bấm nguồn → note gốc · xem note thô · hỏi lại · escalation. **Task hoàn thành được kể cả khi AI sai** | Sửa/gỡ nhãn, hoàn tác · **bắt buộc giữ đường tìm note độc lập với nhãn** (theo ngày / theo nguồn) | Hoãn · đã thuộc · tắt theo chủ đề · tắt hẳn · **danh sách "thẻ đã bỏ qua"** chống mất vĩnh viễn |

> **Nguyên tắc nhóm áp dụng:** AI được phép chủ động **tỉ lệ nghịch với độ khó phát hiện lỗi.**
> **Ràng buộc bắt buộc:** Option B chỉ an toàn nếu vẫn còn đường tìm note khi nhãn sai. Nếu topic hub là lối vào duy nhất, B tự tạo lại đúng pain F8 mà nó định giải.

### Feedback & data check

| | Trả lời |
|---|---|
| Feedback ảnh hưởng đến đâu | **A:** không ghi nhớ · **B:** lưu vĩnh viễn cho chính note đó, không suy rộng · **C:** đổi lịch đẩy về sau |
| Dữ liệu dùng | Nội dung note + ngày ghi + nguồn. A/B đọc toàn bộ note; C đọc note + lịch môn |
| Rút quyền | Tắt AI theo từng nguồn · xoá nhãn · xoá lịch sử hỏi · tắt hẳn resurface |
| Nói với tester | Prototype **không có backend học gì cả** — mọi mô tả "AI sẽ nhớ" là thiết kế dự kiến |

---

## 5. Micro-prototype — 3 trạng thái mỗi option

| Option | State 1 | State 2 (critical) | State 3 (result) |
|---|---|---|---|
| **A** | Ô hỏi + dòng phạm vi | Câu trả lời + chip nguồn + dòng uncertainty | Note gốc *(A4: escalation khi không tìm ra)* |
| **B** | Note vừa ghi + 2 nhãn đề xuất *(CHƯA LƯU)* | Đã lưu + số note đã nối | Topic hub + khối tìm-không-theo-nhãn |
| **C** | Màn hình chính — thẻ **tự hiện sau ~2,6 giây** | Thẻ mở rộng + tóm tắt + note gốc | Quyết định + danh sách thẻ đã bỏ qua |

**Lỗi cố ý cài vào để test đo được thật:**
1. **A** — note 06/08 chứa *"CHƯA CHÉP"* nhưng câu trả lời nghe như đã đủ → đo citation có bảo vệ user thật không.
2. **B** — hai nhãn xếp *Phụ thuộc hàm* **trước** *Chuẩn hoá CSDL*; chọn sai → hub chỉ có 1 note thay vì 3 → dựng lại silent failure.
3. **C** — thẻ tự nhảy ra, tester không bấm gì → đo phản ứng thật với AI chủ động.

---

## 6. Solution Parking Lot _(⚠️ dựng lại — Day 17 không lưu, cần nhóm xác nhận)_

| # | Hướng | Đánh vào | Thành option? |
|---|---|---|---|
| 1 | Hỏi ngôn ngữ tự nhiên, AI trả lời kèm trích dẫn | Tìm lâu (F8) | → **A** |
| 2 | AI gợi ý chủ đề lúc ghi, gom về topic hub | Rải rác (F1), tích lũy (F7) | → **B** |
| 3 | Chủ động đẩy lại note đúng thời điểm | Quên (F4), bỏ ôn (F9) | → **C** |
| 4 | Một inbox gom note từ mọi nguồn (**user-led, no inference**) | Rải rác (F1) | không |
| 5 | AI tóm tắt slide tại chỗ, note sinh ra đã gắn nguồn | Tóm ý tốn công (F3) | không |
| 6 | Neo note vào dòng thời gian buổi học | Thiếu đường dẫn chủ đề → note | không |
| 7 | **Escalation path** — không tìm ra thì mở slide gốc / gợi ý hỏi bạn | F8 *"có lúc mình cũng không tìm được"* | nhúng làm empty-state của **A** |
