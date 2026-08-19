# AI Support Log — Đỗ Quý Đức (2A202601628)

### Đối chiếu với quy tắc

| Được dùng AI để | Đã dùng? | Ở đâu |
|---|---|---|
| Gợi ý một cơ chế còn thiếu trong Parking Lot | ✅ | Hướng 7 — escalation path (mục 2.1) |
| Tạo content fixture và canned AI output | ✅ | `prototype/fixture.js` (12 note) + câu trả lời dựng sẵn của A và **bộ 4 flashcard của C** |
| Viết code/component cho prototype | ✅ | `prototype/index.html`, `prototype/option-c.js`, `prototype/option-c-flashcard.html` |
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

### Sau khi nhóm chốt Option C — AI sai thêm ở đâu?

> **5. AI đề xuất thêm một màn hình "Bộ thẻ của tôi" cho Option C.** Nghe rất hợp lý với một app flashcard, nhưng nó **phá đúng cơ chế của C**: nếu user tự mở được bộ thẻ thì C không còn là *resurface without search* nữa, nó tụt về đúng chỗ của A và B và distance check giữa ba option sụp đổ. Tôi bỏ màn hình đó và viết thành **ràng buộc bắt buộc** trong `option-c-design.md`: *không có lối vào nào để user tự mở bộ thẻ.*
>
> **6. Bản flashcard đầu AI dựng đều là thẻ "sạch"** — bốn thẻ đều có câu hỏi đẹp và đáp án đầy đủ. Lại đúng cái lỗi cũ: prototype luôn đúng thì buổi test chỉ thu về lời khen. Tôi cài lại hai chỗ: **thẻ 3 lạc đề** (kéo note nhiễu *Phụ thuộc hàm* vào bộ) và **thẻ 4 không có đáp án** (từ note *"CHƯA CHÉP"*).
>
> **7. AI định cho thẻ 4 một đáp án BCNF "chung chung nhưng đúng".** Đây là chỗ nguy hiểm nhất trong cả buổi làm bài: đáp án đó đúng về kiến thức nhưng **user chưa từng ghi nó**, và user không có cách nào biết. Tôi chặn lại và viết thành quy tắc canned output số 2 của C.
>
> **8. AI để tôi copy toàn bộ logic C sang file thứ hai.** Hai bản C rời nhau nghĩa là sửa một bên thì bên kia lệch, và ba tester có thể nhìn thấy hai phiên bản khác nhau — hỏng chính điều kiện so sánh của buổi test. Tôi tách ra `option-c.js` làm nguồn duy nhất cho cả `index.html` lẫn `option-c-flashcard.html`.

### Tôi đã tự sửa hoặc quyết định lại điều gì?

> **Không để AI điền Chặng 6.** Đây là quyết định rõ ràng nhất: prototype có thể để AI viết, feedback của người thật thì không. Gate 5 để trống cho tới khi test xong.
>
> **Cố ý cài lỗi vào prototype.** Note 06/08 mang chữ *"CHƯA CHÉP"* trong khi câu trả lời của A nghe như đã đủ; hai nhãn ở B xếp *Phụ thuộc hàm* trước *Chuẩn hoá CSDL*; ở C là thẻ 3 lạc đề và thẻ 4 không có đáp án. Bản AI dựng lúc đầu trơn tru và luôn đúng — mà prototype luôn đúng thì buổi test chỉ thu về lời khen, không đo được gì.
>
> **Cố định fixture bằng số cụ thể** (12 note, 7 Notepad + 5 app, 3 note đúng chủ đề, 2 note nhiễu gần) và bắt cả ba option dùng chung một file. Nếu mỗi option tự có dữ liệu riêng, tester sẽ so nhầm chất lượng nội dung thay vì so cơ chế.
>
> **Giữ hướng 7 làm fallback, không nâng thành option thứ tư** — nó là đường thoát, không phải một cách giải độc lập cho task.
>
> **Thêm một ràng buộc bắt buộc cho Option B:** phải giữ đường tìm note không phụ thuộc nhãn. Thiếu nó thì B tự tạo lại đúng cái pain F8 mà nó định giải.
>
> **Nêu thẳng counter-evidence của chính option mình phụ trách.** F4 (*"bình thường mình sẽ quên mất"*) — chỗ dựa chính của C — đến từ một **câu hỏi dẫn dắt** của interviewer (*"...đúng không?"*), không phải user tự kể như F7–F9. Và F6 (*"không cần xem lại nhiều"*) là bằng chứng **chống lại** C. Cả hai được viết vào mục 1 của `option-c-design.md` thay vì bỏ qua cho đẹp bài.
>
> **Chốt C không đồng nghĩa với bỏ A và B khỏi buổi test.** Đề Day 18 yêu cầu thử **ba** cách giải. Nếu chỉ cho tester xem C thì không còn gì để so và Gate 2 mất ý nghĩa. Ba option vẫn chạy đủ trong `index.html`.
>
> **Bỏ 2 trong 7 mục observation focus** (hesitation, help needed) vì ở phiên 15 phút chúng đo "chưa quen giao diện" nhiều hơn đo cơ chế.

> 📌 *Log này viết theo đúng những gì đã diễn ra trong phiên làm bài. Trước khi nộp, tự đọc lại và sửa cho khớp với phần bạn thực sự quyết định — đây là mục về cách bạn dùng AI, không phải mục để AI tự chấm điểm.*
