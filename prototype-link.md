# Prototype A/B/C — link và cách mở

## Bản chạy được

Prototype nằm ngay trong repo này, **không cần cài đặt, không cần internet**:

```
prototype/index.html      ← mở file này bằng trình duyệt
prototype/fixture.js      ← fixture dùng chung cho cả A/B/C
prototype/annotations.md  ← annotation của facilitator (KHÔNG cho tester xem)
```

**Cách mở:**
```bash
open prototype/index.html      # macOS
# hoặc kéo thả file vào trình duyệt
```

**Link chung của nhóm:** _(điền sau khi nhóm đẩy lên GitHub Pages / Netlify)_
> ....................................................................................

## Nội dung

| | Option | Cơ chế | Trạng thái |
|---|---|---|---|
| **A** *(Đỗ Quý Đức)* | Ask at recall | User hỏi lúc ôn → AI tổng hợp kèm trích dẫn note gốc | A1 ô hỏi → A2 câu trả lời + chip nguồn → A3 note gốc *(+ A4 escalation)* |
| **B** *(Nguyễn Thanh Hùng)* | File at capture | AI đề xuất nhãn ngay lúc ghi → user xác nhận → topic hub | B1 note vừa ghi + 2 nhãn → B2 đã lưu → B3 hub + tìm-không-nhãn |
| **C** *(Lê Nguyễn Minh Quang)* | Resurface without search | AI tự chọn thời điểm và nội dung đưa lại | C1 thẻ tự hiện → C2 thẻ mở rộng → C3 quyết định + thẻ đã bỏ qua |

Cả ba xuất phát từ **một màn hình context chung** và dùng **một fixture duy nhất** (12 note · 4 tuần · 7 Notepad + 5 app điện thoại · 3 note thuộc chủ đề *Chuẩn hoá CSDL* · 2 note gây nhiễu gần).

Nút **↺ Về màn hình bắt đầu** có ở mọi trạng thái — dùng để reset giữa các option.

## Lưu ý khi test

- Không có AI thật chạy phía sau. Toàn bộ output là canned.
- Không narrate giao diện. Tester hỏi "bấm được không?" → *"bạn thử xem"*.
- Thứ tự chống order effect: Tester 1 A→B→C · Tester 2 B→C→A · Tester 3 C→A→B.
- Đọc `prototype/annotations.md` trước buổi test.
