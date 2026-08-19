# Prototype A/B/C — link và cách mở

## Bản chạy được

Prototype nằm ngay trong repo này, **không cần cài đặt, không cần internet**:

```
prototype/index.html               ← bản A/B/C — mở file này để test ba option
prototype/option-c.js              ← Option C: NGUỒN DUY NHẤT, cả hai file dưới cùng nạp
prototype/option-c-flashcard.html  ← bản C chạy riêng, dùng khi trình bày Option C
prototype/fixture.js               ← fixture dùng chung cho MỌI bản
prototype/annotations.md           ← annotation của facilitator (KHÔNG cho tester xem)
```

**Cách mở:**
```bash
open prototype/index.html               # bản A/B/C
open prototype/option-c-flashcard.html  # bản C flashcard
# hoặc kéo thả file vào trình duyệt
```

> Cả hai file đều **không cần cài đặt, không cần internet, không cần API key**.
> Không có model nào chạy phía sau — toàn bộ output là canned và tái lập được y hệt ở mọi lần chạy.
> Đây là điều kiện để ba tester nhìn thấy **cùng một prototype**, và để ba lỗi cố ý luôn xuất hiện.

**Link chung của nhóm:** _(điền sau khi nhóm đẩy lên GitHub Pages / Netlify)_
> ....................................................................................

## Nội dung

| | Option | Cơ chế | Trạng thái |
|---|---|---|---|
| **A** | Ask at recall | User hỏi lúc ôn → AI tổng hợp kèm trích dẫn note gốc | A1 ô hỏi → A2 câu trả lời + chip nguồn → A3 note gốc *(+ A4 escalation)* |
| **B** | File at capture | AI đề xuất nhãn ngay lúc ghi → user xác nhận → topic hub | B1 note vừa ghi + 2 nhãn → B2 đã lưu → B3 hub + tìm-không-nhãn |
| **C** *(Đỗ Quý Đức — option nhóm đã chốt)* | Resurface without search | AI tự chọn thời điểm và nội dung đưa lại, dưới dạng thẻ ôn nhanh → flashcard | C1 thẻ tự hiện → C2 bộ 4 flashcard → C3 kết quả + rút quyền + thẻ đã bỏ qua |

### Option C — `option-c.js` *(option nhóm đã chốt)*

Cơ chế *Resurface without search*, nội dung đẩy lại có hình thức **flashcard**. Logic nằm ở `option-c.js` và được **cả `index.html` lẫn `option-c-flashcard.html` cùng nạp** — sửa một chỗ, hai file cùng đổi, nên ba tester không thể nhìn thấy hai phiên bản C khác nhau:

| | Trạng thái | Nội dung |
|---|---|---|
| **C1** | Màn hình chính | Thẻ ôn nhanh **tự hiện sau ~2,6 giây** — kèm lý do đẩy và câu limit *"mình không biết bạn đã thuộc hay chưa"* |
| **C2** | Bộ 4 flashcard *(critical)* | Lật thẻ → mặt sau + chip nguồn note gốc → tự chấm *Nhớ / Mơ hồ / Chưa nhớ* |
| **C3** | Kết quả + recovery | Lịch nhắc lại do AI đặt · đổi lịch / tắt chủ đề / tắt hẳn · danh sách thẻ đã bỏ qua |

Ba chỗ cài có chủ ý ở bản này:

1. **Thẻ 3 lạc đề** — AI kéo note *Phụ thuộc hàm* (28/07) vào bộ *Chuẩn hoá CSDL*, có ghi rõ lý do. Đo: tester có nhận ra không, có dùng nút *gỡ khỏi bộ* không.
2. **Thẻ 4 không có đáp án** — sinh từ note 06/08 mà chính user ghi *"CHƯA CHÉP"*. AI **không bịa** ví dụ BCNF, chỉ đưa đường thoát sang slide 12 / hỏi bạn. Đây là **Don't Act nằm ngay bên trong flashcard**.
3. **Tự chấm** *Nhớ rồi* — màn hình cuối nói thẳng: *"Mình chỉ biết bạn đã bấm gì trên thẻ. Mình không biết bạn có thật sự nhớ hay không."*

---

Cả ba xuất phát từ **một màn hình context chung** và dùng **một fixture duy nhất** (12 note · 4 tuần · 7 Notepad + 5 app điện thoại · 3 note thuộc chủ đề *Chuẩn hoá CSDL* · 2 note gây nhiễu gần).

Nút **↺ Về màn hình bắt đầu** có ở mọi trạng thái — dùng để reset giữa các option.

## Lưu ý khi test

- Không có AI thật chạy phía sau. Toàn bộ output là canned.
- Không narrate giao diện. Tester hỏi "bấm được không?" → *"bạn thử xem"*.
- Thứ tự chống order effect: Tester 1 A→B→C · Tester 2 B→C→A · Tester 3 C→A→B.
- Đọc `prototype/annotations.md` trước buổi test.
