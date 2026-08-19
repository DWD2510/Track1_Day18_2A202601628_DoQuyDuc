# Option B — File at capture · Design Spec

**Người chịu trách nhiệm chính:** Nguyễn Thanh Hùng / Nhóm Track 1
**Prototype:** `prototype/index.html` → chọn *Phiên bản B*

---

## 1. Vì sao Option B tồn tại

Option B đánh vào việc tạo cấu trúc ngay tại thời điểm ghi chú:

> F1: Ghi note rải rác ở Notepad và app điện thoại.
> F7: Dần dần nội dung ngày càng nhiều lên, không có liên kết giữa các note cùng chủ đề.

Thay vì để note tích lũy lộn xộn rồi lúc ôn mới đi tìm (như Option A), Option B giúp tổ chức note ngay lúc vừa ghi: AI đọc note, gợi ý nhãn và nối với các note cũ cùng chủ đề để tạo thành Topic Hub.

---

## 2. Critical interaction

**Giây user đọc 2 nhãn AI đề xuất và quyết định chọn nhãn nào (hoặc bỏ qua).**

Mức độ agency của B là **Ask** — AI chỉ đề xuất kèm lý do, không tự tiện lưu nhãn khi chưa có sự xác nhận của người dùng.

---

## 3. Ba trạng thái

| | Màn hình | Chi tiết |
|---|---|---|
| **B1** | Vừa ghi xong note | Hiện note mới (18/08) + khối AI đề xuất 2 nhãn kèm lý do (nhãn gắn tag `CHƯA LƯU`) + lựa chọn "Để mình tự đặt sau" |
| **B2** | Đã lưu | Thông báo đã gắn nhãn + danh sách các note cũ đã được liên kết + nút "Mở trang chủ đề" & "Hoàn tác / sửa nhãn" |
| **B3** | Trang chủ đề (Topic Hub) | Hiển thị toàn bộ note trong cùng chủ đề theo dòng thời gian + **Khối tìm không theo nhãn** (theo ngày, theo Notepad, theo App ĐT) |

---

## 4. Quy tắc canned output & Agency

1. **AI Ask (Không tự ý lưu):** Nhãn luôn ở trạng thái `CHƯA LƯU` cho đến khi user bấm chọn.
2. **Luôn giải trình lý do đề xuất:** Mỗi nhãn đi kèm lý do trích xuất từ từ khóa trong note.
3. **Phải có đường thoát không phụ thuộc AI:** Khối "Tìm không theo nhãn" ở B3 cho phép duyệt theo thời gian hoặc nguồn ghi chú để cứu vãn trường hợp note bị gán nhãn sai.

---

## 5. Lỗi cố ý cài vào và điều cần đo

AI xếp nhãn **Phụ thuộc hàm** lên trước nhãn **Chuẩn hoá CSDL** (mặc dù note thuộc chủ đề Chuẩn hoá CSDL và nối được 3 note cũ, còn Phụ thuộc hàm chỉ nối 1 note cũ).

**Phép đo:**
- Tester có đọc kỹ lý do và số lượng note liên kết trước khi chọn không?
- Khi chọn nhầm vào Topic Hub chỉ thấy 1 note, tester có nhận ra mình bị thiếu note không? (Silent failure test).
- Tester có sử dụng khối "Tìm không theo nhãn" để tìm lại note bị thiếu không?

---

## 6. Control & Recovery

- Nút **Hoàn tác / sửa nhãn** ngay tại B2.
- Lựa chọn **"Để mình tự đặt sau"** tại B1.
- Duyệt note theo **Ngày** hoặc theo **Nguồn** tại B3 độc lập với phân loại của AI.
