# Option C — Resurface without search · Design Spec

**Người chịu trách nhiệm chính:** Đỗ Quý Đức — 2A202601628
**Hình thức đã chốt:** thẻ ôn nhanh tự đến → mở thành **bộ flashcard ngắn**
**Prototype:** `prototype/index.html` → *Phiên bản C* · bản chạy riêng: `prototype/option-c-flashcard.html`
**Logic dùng chung:** `prototype/option-c.js` — một nguồn duy nhất cho cả hai file

---

## 1. Vì sao Option C tồn tại

A và B đều giả định **user sẽ quay lại**. A làm việc tìm rẻ đi, B làm cho không còn gì phải tìm — nhưng cả hai chỉ chạy khi user tự mở app ra ôn.

Evidence Day 17 nói rằng chính giả định đó là chỗ gãy:

> **F4** — *"Bình thường mình sẽ quên mất."*
> **F9** — đã có lần định ôn lại nhưng **bỏ qua**.

Nếu user không bao giờ khởi xướng, thì một công cụ tìm kiếm tốt đến mấy cũng không được dùng tới. C tấn công đúng chỗ đó: **bỏ hẳn bước khởi xướng**. Hệ thống tự chọn thời điểm và nội dung, đẩy lại phần user đã ghi dưới dạng thẻ ôn nhanh.

### Nợ Day 17 mà C phải trả — và một điểm yếu phải nói thẳng

Chuỗi evidence của C **yếu hơn** chuỗi của A, vì hai lý do, và cả hai đều phải nằm trong bài chứ không được giấu:

| Vấn đề | Chi tiết |
|---|---|
| **F4 đến từ một câu hỏi dẫn dắt** | Interviewer hỏi *"Nghĩa là sau đó bạn sẽ không quay lại xem hoặc ôn lại, **đúng không**?"* — câu yes/no. User trả lời *"Đúng vậy"*. Đây **không** phải user tự kể như F7–F9. Nên "user không quay lại" mới là **giả định**, chưa phải fact vững |
| **F6 là bằng chứng chống lại C** | User nói lý do dùng AI là *"nhanh, tiện, và mình cũng **không cần xem lại nhiều**"*. Một người tự nhận không cần xem lại nhiều chính là người dễ thấy phiền nhất khi bị đẩy thẻ |

**Kết luận thiết kế rút ra:** C là option có **counter-evidence trực tiếp** trong chính buổi phỏng vấn. Vì vậy C không được thiết kế theo hướng "đẩy càng nhiều càng tốt", mà theo hướng **đẩy ít, giải trình rõ, và tắt cực rẻ**. Buổi test Day 18 tồn tại chính là để đo xem F6 hay F9 mới đúng với người thật.

---

## 2. Critical interaction

**Giây thẻ tự nhảy ra khi user không yêu cầu gì cả — user quyết định đây là tiện hay là bị làm phiền.**

Đây là điều duy nhất phân biệt C với A và B. Mọi thứ khác trong C chỉ tồn tại để phục vụ giây đó, và để giây đó có thể **hoàn tác được**.

**Critical beat thứ hai, nằm bên trong bộ thẻ:** mặt sau của thẻ số 4 — thẻ **không có đáp án**. Xem mục 6.

---

## 3. Ba trạng thái

| | Màn hình | Chi tiết |
|---|---|---|
| **C1** | Màn hình chính | User không bấm gì. Sau **~2,6 giây** thẻ ôn nhanh tự trượt vào, kèm lý do đẩy và câu limit *"mình không biết bạn đã thuộc hay chưa"* |
| **C2** | **Bộ 4 flashcard** *(critical)* | Lật thẻ → mặt sau + chip nguồn về note gốc → tự chấm *Nhớ rồi / Mơ hồ / Chưa nhớ* |
| **C3** | Quyết định + recovery | Kết quả, lịch nhắc lại do AI đặt, đường rút quyền, **danh sách thẻ đã bỏ qua** |

Ba đường thoát ngay tại C1, trước khi user đọc bất cứ nội dung nào: **Ôn ngay · Để sau · Đừng nhắc chủ đề này**.

---

## 4. Vì sao là flashcard, chứ không phải một danh sách note

Đây là quyết định hình thức, và nó phải phục vụ cơ chế chứ không được làm loãng cơ chế.

| Nếu đẩy lại bằng… | Vấn đề |
|---|---|
| Một **danh sách 3 note** | User vẫn phải tự đọc, tự quyết định ôn cái nào. Việc tìm chưa biến mất hẳn — nó chỉ bị thu nhỏ. C tụt lại gần A |
| Một **bản tóm tắt** | User đọc lướt và tưởng mình đã nhớ. Không có tín hiệu nào cho biết thật sự nhớ hay không |
| **Flashcard** | Có điểm bắt đầu và điểm kết thúc rõ ràng (4 thẻ · ~2 phút). Buộc phải **nhớ ra trước khi lật** — đó là ôn tập, không phải đọc lại. Và tạo ra tín hiệu để AI xếp lịch đẩy lần sau |

**Ràng buộc bắt buộc để flashcard không phá vỡ Option C:**

> **Không có lối vào nào để user tự mở bộ thẻ.** Không có màn hình "Bộ thẻ của tôi", không có nút "Ôn tập". Bộ thẻ **chỉ** mở ra từ một thẻ do AI tự đẩy.

Nếu vi phạm ràng buộc này, C biến thành một app flashcard do user khởi xướng — tức là tụt về đúng chỗ của A và B, và distance check giữa ba option sụp đổ.

---

## 5. Quy tắc canned output

Prototype không gọi model. Không có API, không có internet. Toàn bộ output tuân theo bốn quy tắc cố định:

| # | Quy tắc | Vì sao |
|---|---|---|
| 1 | **Mọi thẻ phải truy được về đúng một note gốc.** Mặt sau luôn có chip nguồn | AI đang tự quyết định user ôn cái gì. Nếu không truy được về note nào, user mất cách kiểm tra AI có bịa hay không |
| 2 | **Không hỏi thứ user chưa ghi.** Nếu note thiếu, mặt sau nói thẳng *"bạn chưa ghi câu trả lời cho thẻ này"* và mở đường sang slide gốc — tuyệt đối không bịa đáp án | Đây là **Don't Act** đặt bên trong flashcard. Một đáp án BCNF bịa mà nghe hợp lý là dạng lỗi tệ nhất: user học thuộc thứ thầy không dạy và không có cách nào phát hiện |
| 3 | **Luôn nói lý do đẩy và lý do chọn thẻ.** *"vì tuần sau kiểm tra và bạn chưa mở lại chủ đề này lần nào"* | AI đã tự ý ngắt quãng user. Cái giá tối thiểu của quyền đó là phải giải trình được |
| 4 | **Không suy ra "đã thuộc" từ hành vi bấm.** Màn hình cuối nói: *"Mình chỉ biết bạn đã **bấm** gì trên thẻ. Mình không biết bạn có thật sự nhớ hay không"* | Đây là giới hạn thật của cơ chế. Giấu nó đi thì lịch đẩy sẽ tỏ ra chính xác hơn thực tế, và user sẽ tin vào một thứ không có cơ sở |

---

## 6. Ba chỗ cố ý cài vào — và mỗi chỗ đo cái gì

Prototype luôn đúng thì buổi test chỉ thu về lời khen. Ba chỗ dưới đây được cài để buổi test đo được thật.

### 6.1 Thẻ tự hiện — không do tester bấm

Sau ~2,6 giây, thẻ trượt vào màn hình. Facilitator **không** báo trước.

**Phép đo:** câu nói **đầu tiên** của tester, ghi nguyên văn. Đây là mốc bắt buộc của cả buổi.

### 6.2 Thẻ 3 — AI kéo một note ngoài chủ đề vào bộ

Bộ thẻ mang tên *Chuẩn hoá CSDL*, nhưng thẻ 3 sinh từ note **28/07 · Phụ thuộc hàm** — một trong hai note **gây nhiễu gần** của fixture. AI có ghi rõ lý do: *"vì note 28/07 nói phụ thuộc hàm là nền của chuẩn hoá. Note đó **không** nằm trong 3 note bạn ghi về chuẩn hoá."*

**Phép đo:** tester có nhận ra thẻ này lạc đề không, và có dùng nút *"Thẻ này lạc đề — gỡ khỏi bộ"* không?

| Tester làm gì | Đọc ra điều gì |
|---|---|
| Nhận ra và gỡ | Lý do đẩy đang có tác dụng — user kiểm soát được phạm vi AI tự chọn |
| Nhận ra nhưng vẫn chấm cho xong | Đường sửa có tồn tại nhưng **chi phí sửa cao hơn chi phí bỏ qua** → phải làm nút gỡ rẻ hơn |
| Không nhận ra | AI đang âm thầm mở rộng chủ đề mà user không biết. Đây là **silent scope creep** — cùng họ với silent failure của Option B |

### 6.3 Thẻ 4 — thẻ không có đáp án

Sinh từ note **06/08**, chính user đã ghi: *"BCNF chặt hơn 3NF. Slide 12 có ví dụ tách bảng, để chép lại sau — **CHƯA CHÉP**."*

Mặt trước hỏi *"Ví dụ tách bảng BCNF ở slide 12 là gì?"*. Mặt sau **không có đáp án** — nói thẳng user chưa ghi, đưa nguyên văn note, và mở ba đường: *Mở slide 12 gốc · Hỏi bạn cùng lớp · Đánh dấu để chép lại*.

**Phép đo:** một thẻ trống là **hữu ích** (biết mình thiếu gì trước hôm kiểm tra) hay **bực mình** (AI đưa thẻ mà không có câu trả lời)?

| Tester làm gì | Next Change kéo theo |
|---|---|
| Bấm *Mở slide 12* hoặc *Đánh dấu để chép lại* | Đường thoát hoạt động. Giữ nguyên, và đây cũng là câu trả lời cho probe Day 17 bỏ lỡ |
| Khó chịu vì thẻ không có đáp án | AI phải **báo trước** ở mặt trước rằng thẻ này là chỗ trống, thay vì để user lật ra mới biết |
| Bỏ qua, không phản ứng gì | Thẻ trống không có tác dụng nhắc → cân nhắc bỏ khỏi bộ và chuyển thành một mục "chỗ còn thiếu" riêng |

> Thẻ 4 là chỗ **Don't Act được đặt vào giữa một cơ chế Act**. Nó cho thấy AI được quyền tự đẩy nội dung, nhưng không được quyền tự viết nội dung.

---

## 7. Control & recovery

| Đường | Ở đâu | Dùng khi |
|---|---|---|
| **Để sau** | C1 — trước khi đọc bất cứ gì | Sai thời điểm |
| **Đừng nhắc chủ đề này** | C1 và C3 | Sai chủ đề |
| **Dừng, để sau** | C2, giữa bộ thẻ | Đổi ý giữa chừng; số thẻ còn lại được ghi vào danh sách |
| **Gỡ thẻ khỏi bộ** | C2, thẻ 3 | AI chọn nhầm nội dung. **Note gốc vẫn còn nguyên** — chỉ thẻ bị gỡ |
| **Chip nguồn → note gốc** | C2, mặt sau | Không tin mặt sau, muốn đọc nguyên văn |
| **Đổi lịch nhắc · Tắt hẳn thẻ ôn nhanh** | C3 | Rút quyền ở mức chủ đề hoặc mức toàn hệ thống |
| **Danh sách "thẻ đã bỏ qua"** | C3 | Mọi thứ bị dẹp, hoãn, gỡ đều nằm đây — **không có gì mất vĩnh viễn** |

**Điều kiện để C được phép dùng agency "Act":** user phải tắt được **rẻ hơn** chi phí bị làm phiền. Ba đường tắt nằm ngay tại C1, trước nội dung, không phải giấu trong cài đặt.

---

## 8. Vì sao C là "Act" mà không phải "Ask"

Theo nguyên tắc nhóm — *AI được phép chủ động **tỉ lệ nghịch với độ khó phát hiện lỗi*** :

| | Lỗi của C | Lỗi của B (để đối chiếu) |
|---|---|---|
| Biểu hiện | Hiện **ngay trên mặt thẻ**: sai chủ đề, sai thời điểm, thẻ không liên quan | **Im lặng**: note gắn sai nhãn thì biến mất khỏi topic hub |
| User có biết mình đang bị lỗi không | Có — lỗi đập vào mắt | **Không** — user không biết mình đang thiếu gì |
| Chi phí hoàn tác | Rất rẻ: một nút | Phải phát hiện được đã, mà phát hiện mới là phần khó |

C được phép **Act** vì lỗi của nó **rẻ và lộ**. Đổi lại, C phải là option **dễ tắt nhất** trong ba option — và đó là lý do ba đường thoát nằm ngay ở C1.

Một chỗ C **không** được Act: **nội dung thẻ**. AI tự quyết *cái gì* và *khi nào* được đẩy lại, nhưng không được tự viết ra kiến thức user chưa ghi (quy tắc 2, thẻ 4).

---

## 9. Giới hạn đã biết của Option C

- **User nhường quyền chọn thời điểm.** Đây là cái giá gốc của cơ chế, không phải lỗi giao diện. Nếu tester nói *"tôi muốn tự chọn lúc ôn"* thì đó là phản hồi chống lại **cơ chế**, và phải ghi đúng như vậy.
- **F6 chống lại C.** Chính user Day 17 nói *"không cần xem lại nhiều"*. Nếu tester phản ứng giống F6, C có thể là option sai cho nhóm user này.
- **Đẩy sai một lần là mất hết.** Người dùng tắt thông báo thì toàn bộ cơ chế biến mất. Không có đường phục hồi mềm.
- **Tín hiệu "Nhớ rồi" không đáng tin.** User bấm cho xong thì lịch đẩy sai. Prototype nói thẳng giới hạn này, nhưng **nói ra không sửa được nó**.
- **Không sửa được gốc lộn xộn.** Giống A — note vẫn nằm rải rác ở 2 nơi. C chỉ che việc đi tìm, không tổ chức lại.
- **Chưa test với số note lớn.** Fixture chỉ có 12 note. Với 100 note, việc AI chọn đúng 4 thẻ khó hơn nhiều, và tỉ lệ thẻ lạc đề (mục 6.2) sẽ tăng.
- **Prototype không có backend học gì cả.** Mọi câu *"mình sẽ đưa lại vào 20/08"* là thiết kế dự kiến, phải nói rõ với tester ở đầu buổi.

---

## 10. Ghi chú về scope

Option C **không** được thêm màn hình nào so với A và B — vẫn đúng **3 trạng thái**. Gate 4 ghi rõ *"một option hoàn thiện hơn hẳn hai option còn lại"* là dấu hiệu **chưa đạt**.

Phần làm sâu nằm ở **độ chặt của thiết kế** — 4 quy tắc canned output, 3 chỗ cài có chủ ý, 7 đường recovery, và ràng buộc "không có lối vào tự mở bộ thẻ" — chứ không nằm ở số lượng giao diện.

Cả ba option vẫn dùng chung ~70%: màn hình context, fixture 12 note (`fixture.js`), bộ component, task và desired outcome.
