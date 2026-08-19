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

## OPTION C — Resurface without search *(option nhóm đã chốt)*

> Hình thức: **thẻ ôn nhanh tự đến → mở thành bộ 4 flashcard**. Chi tiết đầy đủ ở mục cuối file.
> Cơ chế không đổi so với design sheet: AI vẫn tự chọn **cái gì** và **khi nào**.

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

---

# OPTION C — chi tiết bộ flashcard

> Chạy ở `index.html` → *Phiên bản C*, hoặc `option-c-flashcard.html` khi trình bày riêng.
> Cả hai nạp cùng `option-c.js` nên **ba tester chắc chắn nhìn thấy đúng một phiên bản**.
>
> Thẻ ôn nhanh tự đến **rồi mở thành 4 flashcard**. Cơ chế không đổi — AI vẫn chọn **cái gì** và **khi nào**. Flashcard chỉ là **hình thức** của nội dung được đẩy lại. Nếu tester tự đi tìm bộ thẻ thì C đã tụt về A/B, nên **thẻ vẫn phải tự hiện**.

**We expect the tester to:** ngồi yên ~3 giây · thấy thẻ ôn nhanh tự hiện · bấm *Ôn ngay* · lật thẻ · tự chấm *Nhớ / Mơ hồ / Chưa nhớ* · đi hết 4 thẻ.

**Bốn thẻ và mỗi thẻ đo cái gì**

| Thẻ | Sinh từ note | Cài gì vào | Đo điều gì |
|---|---|---|---|
| 1 | n6 · 04/08 · 1NF | thẻ "sạch" | Baseline — tester có lật, có đọc chip nguồn không |
| 2 | n7 · 04/08 · 3NF | thẻ "sạch" | Nhịp đã quen, tester bắt đầu bấm nhanh chưa |
| 3 | n5 · 28/07 · Phụ thuộc hàm | **AI kéo một note ngoài chủ đề vào bộ**, có ghi rõ lý do | Tester có nhận ra thẻ lạc đề không? Có dùng nút *gỡ khỏi bộ* không? Hay chấm luôn cho xong? |
| 4 | n8 · 06/08 · BCNF | **Thẻ không có đáp án** — chính user ghi "CHƯA CHÉP" | Một thẻ trống là hữu ích (biết mình thiếu gì trước kiểm tra) hay bực mình? Có bấm *Mở slide 12* không? |

**Watch for:**
- **Nguyên văn câu nói đầu tiên** khi thẻ tự nhảy ra — ghi y hệt, không diễn giải.
- Có đọc dòng lý do đẩy (*"vì tuần sau kiểm tra và bạn chưa mở lại"*) trước khi bấm không?
- Có bấm **chip nguồn** để đối chiếu note gốc, hay tin thẳng mặt sau thẻ?
- Đến thẻ 3: nói gì? Nếu tester nhận ra lạc đề — hỏi *"bạn biết bằng cách nào?"*
- Đến thẻ 4: phản ứng với thẻ **không có đáp án**. Đây là quan sát quan trọng nhất của bản này.
- Tự chấm *Nhớ rồi* — hỏi lại *"bạn nhớ thật hay bấm cho xong?"* để đối chiếu với dòng limit ở màn hình cuối.
- Có ai để ý danh sách **thẻ đã bỏ qua** không?
- Đối chiếu F6 Day 17 (*"không cần xem lại nhiều"*): tester có nói gì tương tự không?

**Do not explain:** thẻ sẽ tự hiện · thẻ 3 lạc đề · thẻ 4 không có đáp án · có nút gỡ thẻ · có danh sách thẻ đã bỏ qua · vì sao AI không tự viết ví dụ BCNF.

**Câu hỏi chốt sau khi xong bộ thẻ:**
1. *"Vừa rồi bạn làm gì? Vì sao?"*
2. *"Nếu cái này tự hiện mỗi ngày thì sao?"*
3. *"Trade-off bạn chấp nhận là gì — được nhắc mà không phải đi tìm, đổi lại không tự chọn được lúc nào?"*
