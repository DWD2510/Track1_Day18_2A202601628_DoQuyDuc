# AI Support Log — Đỗ Quý Đức (2A202601628)

### Đối chiếu với quy tắc

| Được dùng AI để | Đã dùng? | Ở đâu |
|---|---|---|
| Gợi ý một cơ chế còn thiếu trong Parking Lot | ✅ | Hướng 7 — escalation path (mục 2.1) |
| Tạo content fixture và canned AI output | ✅ | `prototype/fixture.js` (12 note) + câu trả lời dựng sẵn của A và thẻ tóm tắt của C |
| Viết code/component cho prototype | ✅ | `prototype/index.html` |
| Rà ba option có thật sự khác về mechanism / role split không | ✅ | Distance check (2.3) và spectrum (2.4) |
| Tìm câu hỏi dẫn dắt trong test prompt | ✅ | Rà lại task và ba câu chốt ở 5.2 |

| Không được dùng AI để | Đã tránh thế nào |
|---|---|
| Tạo quote, observation hoặc user feedback không tồn tại | Chặng 6 để trống hoàn toàn. Gate 5 ghi rõ **chưa qua**. Practice Note 2 và 3 để khung trống thay vì suy đoán nội dung |
| Viết lại evidence làm mất ranh giới lời user / diễn giải | Bảng 1.1 tách hai cột; mọi câu của user trong bài đều để trong ngoặc kép và giữ nguyên văn từ `notes.md` |
| Chọn option thay tester hoặc thay nhóm | Không có option nào được tuyên bố thắng. Mục 6.7 viết cả trường hợp nhóm **sai** |
| Làm đẹp feedback tiêu cực | Chưa có feedback nào để làm đẹp. Biểu mẫu bắt buộc ô "trade-off" và ô "chỗ chưa thoải mái" |

### AI đã giúp tôi ở đâu?

> Nhanh nhất là ở phần dựng: fixture 12 note có nhiễu và có note thiếu, toàn bộ code prototype A/B/C dùng chung component, và biểu mẫu Feedback Note. Hữu ích hơn cả code là lúc rà distance check — nó ép tôi viết ba câu "A khác B vì…" mà không được nhắc màu, layout hay wording, và nhờ đó tôi phát hiện bản nháp đầu của mình vẫn đang mô tả ba giao diện chứ chưa phải ba cơ chế.

### AI sai, hời hợt hoặc làm các options giống nhau ở đâu?

> **1. Ba option đầu tiên AI đưa ra đều là "AI làm hộ".** Cả A, B và C đều để AI suy diễn; không có hướng user-led/no-inference nào, cũng không có đường thoát khi AI không tìm ra. Chỉ khi rà đúng bốn điều kiện của đề ở Chặng 2 mới lộ ra thiếu **human escalation** — và đó chính là nhánh Day 17 chưa hỏi được (*"có lúc mình cũng không tìm được"*).
>
> **2. Human–AI design ban đầu bị "đều".** AI viết cả ba option đều theo kiểu "user giữ quyền quyết định", nghe hợp lý nhưng làm ba option mất khác biệt. Phải áp một tiêu chí cứng — **độ khó phát hiện lỗi** — thì mới ra được kết luận không hiển nhiên là **B mới là option nguy hiểm nhất, không phải C**.
>
> **3. AI dựng lại Solution Parking Lot dù Day 17 không lưu mục này.** Đây là chỗ rủi ro nhất: sáu hướng đó rất dễ là hợp lý hoá ngược từ ba option đã chọn sẵn, chứ không phải pool có trước. Tôi đánh dấu ⚠️ và mang ra nhóm xác nhận.
>
> **4. AI phát biểu một "nguyên lý Day 16"** trong khi repo không có teardown Day 16 nào. Đó là suy luận ngược từ Option B, không phải trích từ deliverable thật. Đã đánh dấu ⚠️.

### Tôi đã tự sửa hoặc quyết định lại điều gì?

> **Không để AI điền Chặng 6.** Đây là quyết định rõ ràng nhất: prototype có thể để AI viết, feedback của người thật thì không. Gate 5 để trống cho tới khi test xong.
>
> **Cố ý cài lỗi vào prototype.** Note 06/08 mang chữ *"CHƯA CHÉP"* trong khi câu trả lời của A nghe như đã đủ; hai nhãn ở B xếp *Phụ thuộc hàm* trước *Chuẩn hoá CSDL*. Bản AI dựng lúc đầu trơn tru và luôn đúng — mà prototype luôn đúng thì buổi test chỉ thu về lời khen, không đo được gì.
>
> **Cố định fixture bằng số cụ thể** (12 note, 7 Notepad + 5 app, 3 note đúng chủ đề, 2 note nhiễu gần) và bắt cả ba option dùng chung một file. Nếu mỗi option tự có dữ liệu riêng, tester sẽ so nhầm chất lượng nội dung thay vì so cơ chế.
>
> **Giữ hướng 7 làm fallback, không nâng thành option thứ tư** — nó là đường thoát, không phải một cách giải độc lập cho task.
>
> **Thêm một ràng buộc bắt buộc cho Option B:** phải giữ đường tìm note không phụ thuộc nhãn. Thiếu nó thì B tự tạo lại đúng cái pain F8 mà nó định giải.
>
> **Bỏ 2 trong 7 mục observation focus** (hesitation, help needed) vì ở phiên 15 phút chúng đo "chưa quen giao diện" nhiều hơn đo cơ chế.

> 📌 *Log này viết theo đúng những gì đã diễn ra trong phiên làm bài. Trước khi nộp, tự đọc lại và sửa cho khớp với phần bạn thực sự quyết định — đây là mục về cách bạn dùng AI, không phải mục để AI tự chấm điểm.*
