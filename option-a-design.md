# Option A — Ask at recall · Design Spec

**Người chịu trách nhiệm chính:** Đỗ Quý Đức — 2A202601628
**Prototype:** `prototype/index.html` → chọn *Phiên bản A*

---

## 1. Vì sao Option A tồn tại

Option A đánh thẳng vào chuỗi evidence mạnh nhất của Day 17:

> F7 → F8 → F9: *"Dần dần, nội dung ngày càng nhiều lên. Khi cần ôn lại, mình phải tìm lại nội dung cần học nên rất mất thời gian. **Có lúc mình cũng không tìm được**."* → đã có lần định ôn lại nhưng bỏ qua.

A không cố sắp xếp lại đống note. A chấp nhận rằng note vẫn lộn xộn, và **làm cho việc tìm rẻ đi**: user hỏi bằng lời của mình, AI đi tìm hộ.

**Nợ Day 17 mà A trả:** trong buổi phỏng vấn, khi user nói *"có lúc mình cũng không tìm được"*, interviewer đã dừng lại và cảm ơn thay vì hỏi tiếp *"lúc đó bạn làm gì?"* — probe quan trọng nhất bị bỏ lỡ. Option A dựng sẵn nhánh **escalation** cho đúng tình huống đó, để buổi test Day 18 quan sát được điều Day 17 chưa hỏi ra.

---

## 2. Critical interaction

**Giây AI trả về câu trả lời tổng hợp — user quyết định tin thẳng hay bấm nguồn kiểm chứng.**

Mọi thứ khác trong A chỉ tồn tại để phục vụ khoảnh khắc này.

---

## 3. Ba trạng thái

| | Màn hình | Chi tiết |
|---|---|---|
| **A1** | Ô hỏi | Dòng phạm vi: *"Mình tìm trong 12 note của bạn, không tìm trên internet. Chỉ tìm được thứ bạn đã ghi."* + 2 câu gợi ý |
| **A2** | Câu trả lời | Mỗi ý gắn **chip nguồn** (`Note 04/08 · Notepad`) + dòng uncertainty + nút *"xem note thô thay vì câu trả lời"* |
| **A3** | Note gốc | Nguyên văn note, mở từ chip nguồn |
| **A4** | *(nhánh)* Không tìm được | **Don't Act** → mở slide V-Learn gốc / gợi ý hỏi bạn cùng lớp |

A4 không phải trạng thái thứ tư của flow chính — nó là **empty state**, chỉ xuất hiện khi AI không đủ dữ liệu.

---

## 4. Quy tắc canned output

Prototype không gọi model. Toàn bộ output tuân theo bốn quy tắc cố định:

| # | Quy tắc | Vì sao |
|---|---|---|
| 1 | **Mọi ý phải gắn chip nguồn.** Không có ý nào trôi nổi không nguồn | Nếu AI được phép nói mà không dẫn nguồn, user mất khả năng kiểm chứng — và toàn bộ agency "Act" của A không còn cơ sở |
| 2 | **Không nói quá note gốc.** AI không thêm kiến thức ngoài những gì user đã ghi | Đây là app ôn lại note của chính user, không phải gia sư. Thêm kiến thức đúng nhưng thầy không dạy vẫn là hại |
| 3 | **Không chắc thì hạ cấp, không đoán bừa.** Nói rõ chắc mấy ý, hoặc bỏ tổng hợp và trả về note thô | Uncertainty phải hiện ra trước khi user ra quyết định, không phải sau |
| 4 | **Không tìm ra thì Don't Act.** Chuyển sang escalation, tuyệt đối không bịa | Bịa một ví dụ BCNF nghe hợp lý là dạng lỗi tệ nhất: user không có cách nào phát hiện |

---

## 5. Định tuyến câu hỏi *(tester gõ tự do được)*

Tester không bị ép bấm câu gợi ý. Gõ có dấu hay không dấu đều nhận.

| Ý định | Nhận diện | Trả về |
|---|---|---|
| `miss` | `bcnf`, `slide 12`, `tách bảng` | **A4 — Don't Act**: chỉ ra chính user đã ghi *"CHƯA CHÉP"*, không bịa ví dụ |
| `main` | `chuẩn hoá`, `1NF/2NF/3NF`, `bắc cầu`, `đa trị` | **A2 — câu trả lời tổng hợp 3 ý**, có cài lỗi kiểm chứng được ở ý 3 |
| `search` | mọi câu khác | Tìm thật trong 12 note theo từ khoá, ghép lại **nguyên văn** tối đa 3 note, mỗi note một chip nguồn |
| không khớp | không note nào chứa từ khoá | **A4 — không tìm thấy**, kèm câu nói rõ giới hạn |

Ví dụ đã kiểm: `khoá ngoại có null được không` → n2, n3, n6 · `deadlock` → n11 · `index b-tree` → n9 · `món phở bò` → không thấy.

> Nhánh `search` cố ý **chỉ ghép nguyên văn, không giải thích** — đúng quy tắc 2. Nó cũng cho tester thấy AI thật sự đọc được cả 12 note, chứ không phải chỉ có một câu trả lời dựng sẵn.

---

## 6. Lỗi cố ý cài vào — và nó đo cái gì

Note ngày **06/08** ghi: *"BCNF chặt hơn 3NF. Slide 12 có ví dụ tách bảng, để chép lại sau — **CHƯA CHÉP**."*

Câu trả lời ở A2 nói ý thứ ba là: *"BCNF chặt hơn 3NF, có một ví dụ tách bảng ở slide 12"* — nghe như đã đủ. Dòng uncertainty có cảnh báo *"ý 3 mình chỉ đọc được tiêu đề"*, nhưng **không** nói note bị thiếu.

Chỉ khi bấm chip nguồn của ý 3, tester mới thấy chữ CHƯA CHÉP và cảnh báo *"câu trả lời phía trên không thể đầy đủ hơn note gốc"*.

**Phép đo:** citation có thật sự bảo vệ user, hay chỉ là trang trí?

| Tester làm gì | Đọc ra điều gì | Next Change kéo theo |
|---|---|---|
| Bấm chip nguồn, phát hiện CHƯA CHÉP | Citation hoạt động. Agency "Act" của A là an toàn | Giữ A, tinh chỉnh cách hiển thị nguồn |
| Không bấm, coi câu trả lời là đủ | **Citation chỉ là trang trí.** A đang chuyển rủi ro sang user mà user không biết | Phải làm evidence **khó bỏ qua hơn** — không phải làm câu trả lời hay hơn |

---

## 7. Control & recovery

| Đường | Ở đâu | Dùng khi |
|---|---|---|
| Bấm chip nguồn → note gốc | A2 → A3 | Muốn kiểm chứng một ý cụ thể |
| *"Xem note thô thay vì câu trả lời"* | A2 | Không tin bản tổng hợp, muốn tự đọc |
| Hỏi lại bằng câu khác | A2, A4 | Câu trả lời lệch hướng |
| Mở slide V-Learn gốc / hỏi bạn cùng lớp | A4 | AI không có dữ liệu |

**Task hoàn thành được kể cả khi AI sai hoàn toàn** — user vẫn đọc được 3 note thô về chuẩn hoá. Đây là điều kiện để A được phép dùng agency "Act".

---

## 8. Giới hạn đã biết của Option A

- **Không sửa được gốc lộn xộn.** Mỗi lần hỏi là tính lại từ đầu; note vẫn nằm rải rác ở 2 nơi. Hỏi 20 lần thì AI làm lại 20 lần.
- **Đẩy chi phí kiểm chứng sang user.** Citation chỉ có giá trị với người chịu bấm. Nếu buổi test cho thấy không ai bấm, đây là lỗ hổng cơ chế chứ không phải lỗi giao diện.
- **Phụ thuộc vào chất lượng note gốc.** Note ghi tắt quá thì A không cứu được — đúng như trường hợp CHƯA CHÉP.
- **Chưa test với số note lớn.** Fixture chỉ có 12 note; pain thật của user xảy ra khi note tích lũy nhiều hơn thế (F7).

---

## 9. Ghi chú về scope

Option A **không** được thêm màn hình nào so với B và C. Gate 4 ghi rõ *"một option hoàn thiện hơn hẳn hai option còn lại"* là dấu hiệu **chưa đạt**.

Phần làm sâu ở đây nằm ở **độ chặt của thiết kế** (quy tắc canned output, định tuyến câu hỏi, nhánh Don't Act), không nằm ở số lượng giao diện. Cả ba option vẫn dùng chung ~70%: màn hình context, fixture 12 note, component, task, desired outcome.
