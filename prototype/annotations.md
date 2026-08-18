# Prototype Annotation — KHÔNG hiển thị cho tester

> Facilitator đọc trước khi test. Không đọc to, không giải thích giao diện hộ tester.

---

## OPTION A — Ask at recall

**We expect the tester to:** gõ hoặc bấm một câu hỏi, đọc câu trả lời tổng hợp, và **bấm ít nhất một chip nguồn** để đối chiếu với note gốc.

**Watch for:**
- Tester có bấm chip nguồn không, hay đọc xong là coi như đủ và chuyển sang việc khác?
- Có ai đọc dòng cảnh báo *"ý 3 mình chỉ đọc được tiêu đề"* rồi mới bấm nguồn không, hay bỏ qua?
- Khi mở note 06/08 và thấy **"CHƯA CHÉP"** — phản ứng ra sao? Nhận ra câu trả lời không thể đầy đủ hơn note gốc, hay bực vì AI "thiếu"?
- Có ai bấm *"xem note thô thay vì câu trả lời"* không? Bấm trước hay sau khi đọc câu trả lời?
- Ở màn hình không tìm được: tester chọn slide gốc, hỏi bạn, hay bỏ?

**Do not explain:** chip nguồn là gì và bấm được; rằng note 06/08 bị thiếu; rằng có nút xem note thô; vì sao AI không tự nghĩ ra ví dụ BCNF.

---

## OPTION B — File at capture

**We expect the tester to:** đọc hai nhãn AI đề xuất kèm lý do, **chọn một nhãn**, rồi mở trang chủ đề.

**Watch for:**
- Tester có đọc dòng lý do (*"vì note nhắc tới…"*) trước khi chọn không, hay bấm cái đầu tiên?
- Chọn **Phụ thuộc hàm** (nhãn AI xếp trước, nối 1 note) hay **Chuẩn hoá CSDL** (nối 3 note)? Hỏi lý do chọn.
- Sau khi vào trang chủ đề với **1 note** thay vì 3 — tester có nhận ra mình đang thiếu note không? Đây là quan sát quan trọng nhất của cả buổi.
- Có ai dùng khối *"Tìm không theo nhãn"* không? Tự tìm đến, hay chỉ dùng khi đã bí?
- Tester nghĩ gì về việc phải làm thêm một bước mỗi lần ghi, khi ghi note chỉ mất 1–2 phút?

**Do not explain:** nhãn nào "đúng"; rằng chọn khác sẽ nối được nhiều note hơn; rằng có đường tìm không theo nhãn; ý nghĩa của chữ CHƯA LƯU.

---

## OPTION C — Resurface without search

**We expect the tester to:** ngồi yên ~3 giây, thấy thẻ tự hiện, mở ra xem, rồi chọn một trong ba quyết định.

**Watch for:**
- Phản ứng đầu tiên khi thẻ tự nhảy ra: hữu ích hay bị làm phiền? Ghi **nguyên văn** câu đầu tiên tester nói.
- Có đọc dòng lý do đẩy (*"vì tuần sau kiểm tra và bạn chưa mở lại"*) không?
- Chọn gì: Xem / Để sau / Mình thuộc rồi / Đừng nhắc nữa? Hỏi vì sao.
- Có ai thấy khó chịu vì **không tự quyết được lúc nào nội dung xuất hiện** không?
- Có ai để ý danh sách *"thẻ đã bỏ qua"* không?
- Đối chiếu với F6 Day 17 (*"không cần xem lại nhiều"*): tester có nói gì tương tự không?

**Do not explain:** rằng thẻ sẽ tự hiện sau vài giây (để tester tự gặp); rằng có danh sách thẻ đã bỏ qua; rằng AI không biết tester đã thuộc hay chưa.

---

## Nhắc chung cho cả ba

- **Không narrate giao diện.** Tester hỏi "cái này bấm được không?" → trả lời *"bạn thử xem"*.
- **Không bào chữa cho prototype.** Tester chê thì ghi nguyên văn.
- Nói thẳng một lần ở đầu buổi: **đây là bản mô phỏng, không có AI thật chạy phía sau, hệ thống không học gì từ bạn.**
- Sau mỗi option, hỏi trước khi chuyển: *"Vừa rồi bạn làm gì? Vì sao?"* — ghi hành vi trước, diễn giải sau.
- Nút **↺ Về màn hình bắt đầu** luôn ở góc trên, dùng để reset giữa các option.

## Thứ tự trình bày — chống order effect

| Tester | Thứ tự |
|---|---|
| Tester 1 | A → B → C |
| Tester 2 | B → C → A |
| Tester 3 | C → A → B |
