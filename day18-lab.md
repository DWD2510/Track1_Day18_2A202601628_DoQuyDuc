# Track 1 — Day 18: Three Solution Options & A/B/C Prototype Test

**Case:** Case B — AI Notes: Personal Learning Notes (V-Learn) — *giữ nguyên case Day 17*
**Thành viên:** Đỗ Quý Đức (2A202601628) · Nguyễn Thanh Hùng (2A202601808) · Lê Nguyễn Minh Quang (2A202601248)
**Người viết repo này:** Đỗ Quý Đức — 2A202601628
**Option tôi chịu trách nhiệm chính:** **Option C — Resurface without search** *(nhóm đã chốt đi tiếp)* · spec: `option-c-design.md`
**Hình thức C đã chốt:** thẻ ôn nhanh tự đến → bộ flashcard ngắn (4 thẻ · ~2 phút)

---

## Chặng 1 — Tổng hợp evidence

### 1.1 Evidence huddle

> Nguyên tắc: cột giữa chỉ chép lại điều user **thực sự làm hoặc nói**. Mọi thứ nhóm suy ra nằm ở cột phải.

| Practice Note | User đã thực sự làm/nói gì? | Điều nhóm đang diễn giải |
|---|---|---|
| **1 — Đỗ Quý Đức**<br>P1: MHV 2A202601870<br>17/08/2026, ~2'06" | • Ghi note khó của slide V-Learn vào **Notepad** *và* **app ghi chú trên điện thoại** (F1)<br>• Mỗi lần ghi ~**1–2 phút** (F2)<br>• Phần tốn công nhất: **"tóm gọn lại ý chính của slide"** (F3)<br>• *"Bình thường mình sẽ quên mất."* (F4)<br>• Workaround: **"Mình đưa nội dung cho AI làm"** — vì *"AI vừa nhanh, vừa tiện, và mình cũng không cần xem lại nhiều"* (F5, F6)<br>• *"Dần dần, nội dung ngày càng nhiều lên. Khi cần ôn lại, mình phải tìm lại nội dung cần học nên rất mất thời gian. Có lúc mình cũng không tìm được."* (F7, F8)<br>• Đã có lần **định ôn lại nhưng bỏ qua** (F9) | • Nhóm suy ra note nằm rải rác **gây ra** việc tìm lâu — user không nói nhân quả này, chỉ kể hai việc cạnh nhau<br>• Nhóm suy ra "quên mất" là do thiếu cơ chế nhắc, chứ user không giải thích vì sao quên<br>• Nhóm suy ra F9 (bỏ ôn) là hậu quả của F8 (không tìm được) — user kể liền mạch nhưng không nói thẳng "vì không tìm được nên tôi bỏ"<br>• **Chưa hỏi được:** tìm không thấy thì làm gì tiếp |
| **2 — Nguyễn Thanh Hùng** *(chờ điền)* | _Chép nguyên văn hành vi/quote từ Practice Note của thành viên thứ hai._ | _Phần nhóm suy ra._ |
| **3 — Lê Nguyễn Minh Quang** *(chờ điền)* | _Chép nguyên văn hành vi/quote từ Practice Note của thành viên thứ ba._ | _Phần nhóm suy ra._ |

> ⚠️ Repo cá nhân này hiện chỉ có Note 1. Note 2 và 3 cần lấy từ repo của thành viên khác trước khi nộp bản nhóm. **Không được** suy đoán nội dung hai note đó.

### 1.2 Thảo luận nhanh

**Situation / behavior / workaround nào lặp lại hơn một lần?**
Trong phạm vi Note 1 đã có hai lần user tự nhắc lại cùng một chuỗi: *note tích lũy → phải đi tìm → mất thời gian*. Workaround **giao việc tóm tắt cho AI** cũng xuất hiện tự phát, không do interviewer gợi ý. Cần đối chiếu với Note 2–3 xem chuỗi này có lặp ở user khác không — đây là điều kiện để coi nó là pattern chứ không phải một ca lẻ.

**Evidence nào mâu thuẫn hoặc gây bất ngờ?**
F6 vs F8–F9 mâu thuẫn: user nói dùng AI vì *"không cần xem lại nhiều"*, nhưng lại kể có lúc **muốn** ôn mà không tìm được và bỏ luôn. Hoặc user đang mô tả hai thời điểm khác nhau, hoặc AI đang che một nhu cầu ôn tập mà user không tự nhận ra. Bất ngờ thứ hai: user **tự đưa AI vào câu chuyện** trước khi nhóm nhắc gì đến solution.

**Điều gì vẫn chỉ là suy đoán của nhóm?**
Rằng việc note rải rác ở 2 nơi là nguyên nhân chính khiến tìm lâu; rằng thời gian tìm đủ lớn để đáng giải quyết; rằng bỏ ôn là hậu quả trực tiếp của tìm không thấy. Cả ba đều hợp lý nhưng **chưa có user nào nói ra**.

**Hypothesis Problem nào đủ cụ thể để xuất phát?**
Pain Hypothesis A — Retrieval. Đây là nhánh duy nhất có đủ situation → barrier → consequence do chính user kể (F7→F8→F9). Pain B (hiểu/kết nối context) mới có tín hiệu phụ ở F3/F5 và xảy ra ở **thời điểm ghi**, không phải thời điểm ôn — chưa đủ để làm điểm xuất phát hôm nay.

### 1.3 Chốt Hypothesis Problem

**Hypothesis Problem nhóm tiếp tục:**

> Khi **cần ôn lại một chủ đề đã học sau vài tuần**, **học viên V-Learn có thói quen ghi chú sau mỗi buổi học** gặp khó khăn trong việc **lấy lại đúng những gì mình đã ghi về chủ đề đó** vì **note tích lũy dần và nằm rải rác ở ít nhất hai nơi, không có đường dẫn nào từ chủ đề đang cần tới note đã ghi**, dẫn đến **mất nhiều thời gian tìm, có lúc không tìm được, và có lần bỏ luôn ý định ôn**.

| Thành phần | Nội dung |
|---|---|
| Situation | Cần ôn lại một chủ đề đã học sau vài tuần |
| User | Học viên V-Learn ghi chú sau mỗi buổi học |
| Job | Lấy lại đúng note mình đã ghi về chủ đề đó |
| Barrier | Note tích lũy + rải rác ≥2 nơi, không có đường dẫn từ chủ đề → note |
| Consequence | Mất thời gian, có lúc không tìm được, có lần bỏ ôn |

**Evidence ban đầu hỗ trợ giả thuyết:**

> F1 (note ở Notepad + app điện thoại) · F7 (*"nội dung ngày càng nhiều lên"*) · F8 (*"phải tìm lại nội dung cần học nên rất mất thời gian. Có lúc mình cũng không tìm được"*) · F9 (định ôn lại nhưng bỏ qua). Chuỗi F7→F8→F9 do user tự kể liền mạch, không phải trả lời câu hỏi leading.

**Điều vẫn chưa được chứng minh:**

> • Tần suất và thời lượng thực tế mỗi lần đi tìm — user chỉ nói "rất mất thời gian", chưa có con số.<br>• Chuyện gì xảy ra **sau khi tìm không thấy** (mở lại slide gốc? hỏi bạn? bỏ hẳn?) — probe bị bỏ lỡ ở Day 17.<br>• Việc rải rác ≥2 nơi có thật sự là barrier chính không, hay chỉ là một chi tiết đi kèm.<br>• Mâu thuẫn F6 vs F8–F9 chưa được gỡ.<br>• Pattern này mới có ở 1 user; chưa đối chiếu Note 2–3.<br>• **Pain chưa được validated** — Day 17 mới là practice interview.

### 1.4 Solution Parking Lot _(dựng lại — cần nhóm rà lại)_

> Day 17 README chưa lưu Parking Lot. Đây là bản dựng lại từ evidence để đủ 5 hướng làm đầu vào cho Chặng 2; nhóm cần xác nhận hoặc thay bằng bản gốc.

| # | Hướng giải | Đánh vào |
|---|---|---|
| 1 | Hỏi bằng ngôn ngữ tự nhiên, AI tìm across nguồn và trả lời kèm trích dẫn note gốc | Tìm lâu (F8) |
| 2 | AI gợi ý môn/chủ đề ngay lúc ghi, user xác nhận 1 chạm, note tự gom về topic hub | Rải rác (F1), tích lũy (F7) |
| 3 | Chủ động đẩy lại note cũ đúng thời điểm, user không phải đi tìm | Quên (F4), bỏ ôn (F9) |
| 4 | Một inbox duy nhất gom note từ Notepad + app điện thoại về một chỗ | Rải rác (F1) |
| 5 | AI tóm tắt slide V-Learn ngay tại chỗ, note sinh ra đã gắn sẵn nguồn slide | Tóm ý tốn công (F3), workaround AI (F5) |
| 6 | Neo note vào dòng thời gian buổi học ("tuần 3, môn X") thay vì vào thư mục | Không có đường dẫn chủ đề → note |

---

### ✅ GATE 1 — Evidence continuity

| Yêu cầu | Trạng thái |
|---|---|
| Hypothesis Problem có đủ user, situation, job, barrier, consequence | ✅ đủ 5 thành phần (bảng 1.3) |
| Chỉ ra ≥1 observation từ Day 17 | ✅ F8 — *"phải tìm lại nội dung cần học nên rất mất thời gian. Có lúc mình cũng không tìm được"* |
| Chỉ ra ≥1 điều vẫn chưa biết | ✅ Tìm không thấy thì user làm gì tiếp — chưa hỏi được ở Day 17 |
| Ba Practice Notes đặt cạnh nhau | ⚠️ mới có 1/3 trong repo cá nhân — cần bổ sung ở bản nhóm |

---

## Chặng 2 — Chọn ba Solution Options

### 2.1 Mở lại Solution Parking Lot

Rà pool 6 hướng ở mục 1.4 theo bốn điều kiện được phép bổ sung:

| Điều kiện phải bổ sung hướng mới | Pool hiện tại | Kết luận |
|---|---|---|
| Toàn bộ cùng một cơ chế? | Không — có cơ chế hỏi-đáp (1), phân loại lúc ghi (2), đẩy chủ động (3), gom nguồn (4), tóm tắt tại nguồn (5), neo theo dòng thời gian (6) | Không cần bổ sung |
| Chỉ thay UI/wording? | Không — mỗi hướng thay đổi *thời điểm* và *tác nhân* làm việc | Không cần bổ sung |
| Thiếu hướng user-led / no-inference? | Có sẵn — hướng 4 (một inbox gom note, AI không suy diễn gì) và hướng 6 (user tự neo theo buổi học) | Không cần bổ sung |
| Thiếu human escalation khi context cần? | **Thiếu** — pool chưa có đường thoát khi AI không tìm ra | **Bổ sung hướng 7** |

**Hướng 7 (bổ sung) — Escalation path:** khi hệ thống không tìm được note liên quan, thay vì trả về rỗng thì đưa user sang nguồn người/nguồn gốc: mở thẳng slide V-Learn của buổi học đó, hoặc gợi ý hỏi bạn cùng lớp. Lý do bổ sung: Day 17 F8 có ca *"có lúc mình cũng không tìm được"* mà nhóm **chưa biết user làm gì tiếp** — nếu không có nhánh này, cả ba prototype đều ngầm giả định AI luôn tìm ra.

> Hướng 7 không được nâng thành Option riêng vì nó là **fallback**, không phải một cách giải độc lập cho task. Nó được nhúng làm empty-state của Option A để test xem user có dùng đường thoát không.

**Day 16 dùng như prompt (không phải deliverable):**
Nguyên lý nhóm đang **adapt** — không copy feature: *"cấu trúc nên được sinh ra như sản phẩm phụ của việc dùng bình thường, chứ không phải là một việc user phải ngồi làm riêng"*. Nguyên lý này đẻ ra Option B (nhãn sinh ra ngay lúc ghi) và gián tiếp loại bỏ mọi hướng kiểu "bắt user tự tạo thư mục/tag trước".
> ⚠️ Repo này không có teardown Day 16; nguyên lý trên là do nhóm phát biểu lại, cần đối chiếu với bản Day 16 gốc trước khi nộp.

### 2.2 Ba cách giải

#### Những thứ phải giữ nguyên — quyết định chung cho A/B/C

| Thành phần | Quyết định chung cho A/B/C |
|---|---|
| **Target user** | Học viên V-Learn có thói quen ghi chú ngắn sau mỗi buổi học, note nằm ở ≥2 nơi (F1) |
| **Situation** | Đã học chủ đề X cách đây ~2 tuần, nay cần quay lại chủ đề đó để ôn |
| **Task** | Lấy lại đúng những gì mình đã ghi về chủ đề X và dùng được ngay |
| **Desired outcome** | Trong vòng một lượt tương tác, user có trong tay nội dung mình từng ghi về X và không bỏ dở ý định ôn |
| **Content/data fixture** | **Dùng chung một bộ dữ liệu duy nhất cho cả A/B/C:** 12 note ngắn của cùng một học viên, trải 4 tuần, một môn có slide V-Learn; nguồn hỗn hợp (7 note Notepad + 5 note app điện thoại); trong đó **3 note thuộc chủ đề X**, 2 note dễ gây nhầm (chủ đề gần giống), phần còn lại là nhiễu. Cùng wording, cùng ngày tháng, cùng độ dài ở cả ba prototype. |

#### Những thứ được phép khác

| Thành phần | **Option A — Ask at recall** | **Option B — File at capture** | **Option C — Resurface without search** |
|---|---|---|---|
| **Solution mechanism** | Truy xuất theo yêu cầu: AI quét toàn bộ note, chọn đoạn liên quan, tổng hợp thành câu trả lời **kèm trích dẫn note gốc** | Tạo cấu trúc tại thời điểm ghi: AI đề xuất môn/chủ đề + nối vào note cũ cùng chủ đề, user xác nhận → sau này ôn theo topic hub | Đưa nội dung quay lại mà không cần tìm: hệ thống chọn thời điểm và nội dung, đẩy ra dưới dạng thẻ ôn nhanh |
| **User làm gì?** | Gõ câu hỏi bằng lời của mình; đọc câu trả lời; bấm chip nguồn để kiểm chứng hoặc mở note gốc | Ghi note như hiện tại; liếc nhãn AI đề xuất; xác nhận hoặc sửa (1 chạm); sau này mở trang chủ đề | Không đi tìm gì; nhận thẻ; quyết định mở / hoãn / đánh dấu đã thuộc |
| **AI làm gì?** | Tìm across nguồn, chọn lọc, tổng hợp, **bắt buộc gắn nguồn**; nếu không tìm ra thì đưa escalation path (hướng 7) | Đọc note vừa ghi, đoán môn/chủ đề, tìm note cũ cùng chủ đề, **đề xuất** liên kết — không tự ghi khi chưa xác nhận | Quyết định **cái gì** đáng đưa lại và **khi nào**; tóm tắt lại thành thẻ ngắn |
| **Trigger** | **User khởi xướng, tại thời điểm ôn** — chỉ chạy khi có câu hỏi | **Hệ thống khởi xướng, tại thời điểm ghi** — chạy mỗi lần user lưu note; lợi ích thu về ở thời điểm ôn | **Hệ thống khởi xướng, tại thời điểm AI chọn** — user không làm gì cả |
| **Trade-off chính** | Không sửa được gốc lộn xộn — mỗi lần hỏi là tính lại từ đầu; câu trả lời tổng hợp có thể sai hoặc thiếu, và user phải bỏ công kiểm chứng qua citation thì mới an toàn | Đánh thuế lên **mọi** lần ghi: F2 cho thấy ghi chỉ mất 1–2 phút, thêm một bước xác nhận là tăng chi phí đáng kể; nếu user bấm cho xong thì nhãn sai → topic hub sai → hỏng luôn giá trị; lợi ích chỉ xuất hiện sau vài tuần | User nhường quyền chọn thời điểm cho AI; đẩy sai lúc hoặc sai nội dung thì thành làm phiền, và user tắt thông báo là mất toàn bộ giá trị. F6 (*"không cần xem lại nhiều"*) là tín hiệu rủi ro trực tiếp cho option này |

### 2.3 Distance check

> **A khác B vì** toàn bộ công việc của A rơi vào **thời điểm ôn** và không để lại gì sau khi dùng — mỗi lần hỏi là tính lại từ đầu; còn B đặt công việc vào **thời điểm ghi** và để lại một cấu trúc bền vững được tái dùng ở mọi lần ôn sau. Hai option đánh thuế lên hai thời điểm khác nhau trong đời sống của một note.

> **B khác C vì** B vẫn đòi user **tự khởi xướng** việc quay lại (phải nhớ ra chủ đề X và mở topic hub), trong khi C loại bỏ hoàn toàn hành vi khởi xướng — quyền quyết định *khi nào nội dung xuất hiện* chuyển từ user sang AI. B chống lại F1/F7 (rải rác, tích lũy); C chống lại F4/F9 (quên, bỏ ôn).

> **A khác C vì** A chỉ chạy khi user chủ động hỏi và mọi câu chữ đều bị **neo vào note gốc bằng citation**, nên user luôn kiểm chứng được; còn C chạy khi user không hỏi gì, nội dung do AI chọn và trình bày lại, user chỉ có **quyền phủ quyết sau khi đã bị ngắt quãng**. Khác nhau ở cả tác nhân khởi xướng lẫn khả năng truy vết nguồn.

### 2.4 Vị trí trên spectrum

```
USER CREATES / INITIATES ──────── USER + AI CO-CREATE ──────── AI CREATES / INITIATES, USER REVIEWS
          │                              │                                      │
     [A] Ask at recall            [B] File at capture               [C] Resurface without search
   User đặt câu hỏi, AI trả       AI đề xuất nhãn, user xác        AI chọn thời điểm + nội dung,
   lời nhưng phải dẫn nguồn       nhận từng lần → cùng làm         user chỉ review / phủ quyết
```

Ba option chiếm ba dải khác nhau của cùng một trục **ai khởi xướng và ai giữ quyền quyết định** — đây chính là biến mà bộ test A/B/C sẽ đo.

---

### ✅ GATE 2 — Meaningful options

| Yêu cầu | Trạng thái |
|---|---|
| Cùng target user | ✅ học viên V-Learn ghi chú ngắn, note ở ≥2 nơi |
| Cùng situation | ✅ đã học chủ đề X ~2 tuần trước, nay cần ôn |
| Cùng task | ✅ lấy lại note đã ghi về X và dùng được ngay |
| Cùng desired outcome | ✅ có nội dung trong một lượt tương tác, không bỏ dở |
| Cùng content/data fixture | ✅ một bộ 12 note dùng chung, đã cố định số lượng, nguồn, nhiễu |
| Khác nhau có ý nghĩa ở mechanism / phân chia việc và quyền quyết định | ✅ khác ở thời điểm làm việc (ôn / ghi / AI chọn) và ở tác nhân khởi xướng (user / cùng làm / AI) — xem 2.3 và 2.4 |
| Không phải ba phiên bản giao diện | ✅ distance check viết xong mà không cần nhắc màu, layout hay wording |

---

## Chặng 3 — Human–AI Design pass

**Critical interaction được review (chỉ một cho mỗi option — không thiết kế cả product):**

| Option | Khoảnh khắc quyết định |
|---|---|
| **A** | Giây AI trả về câu trả lời tổng hợp — user quyết định **tin thẳng hay bấm nguồn kiểm chứng** |
| **B** | Giây AI đề xuất nhãn ngay sau khi user lưu note — user quyết định **xác nhận hay sửa** |
| **C** | Giây thẻ resurface tự hiện ra — user quyết định **mở, hoãn hay dẹp** |

### 3.1 Bốn quyết định thiết kế

#### Expectation — trước khi AI hoạt động

| | Nói rõ điều gì | Limit phải nói thẳng |
|---|---|---|
| **A** | "Mình tìm trong **12 note của bạn**, không tìm trên internet" | "Chỉ tìm được thứ bạn đã ghi — nếu bạn chưa ghi thì mình không có gì để trả lời" |
| **B** | "AI đọc note vừa ghi để **đoán** chủ đề. Nhãn chỉ được lưu khi bạn xác nhận" | "AI đoán từ chữ trong note; note ghi tắt quá thì đoán sai" |
| **C** | "Mình sẽ tự chọn vài note cũ đưa lại cho bạn theo lịch học" | "Mình chọn dựa vào ngày ghi và lịch môn, **không** biết bạn đã thuộc hay chưa" |

#### Role and Agency — ai làm gì, và điều gì xảy ra khi AI sai

| | AI làm | Hậu quả khi AI sai | **Sai có dễ phát hiện không?** |
|---|---|---|---|
| **A** | Tổng hợp câu trả lời | User ôn theo một bản tóm tắt sai lệch so với note gốc | **Trung bình** — phát hiện được, nhưng chỉ khi user chịu bấm chip nguồn. Không bấm thì lỗi đi thẳng vào đầu |
| **B** | Đoán nhãn chủ đề | Note bị gắn sai chủ đề → **biến mất khỏi topic hub** → tái lập đúng pain gốc F8 | **Khó nhất** — đây là *silent failure*: user không biết mình đang thiếu một note, vì không có gì hiện ra để mà nghi ngờ |
| **C** | Chọn nội dung + thời điểm đẩy | Đẩy sai lúc/sai chủ đề → bị coi là làm phiền → user tắt thông báo → mất toàn bộ giá trị | **Dễ nhất** — sai hiện ngay trên mặt thẻ, user thấy lập tức |

**Act / Ask / Don't Act — quyết định theo mức độ khó phát hiện của lỗi:**

| | Quyết định | Vì sao |
|---|---|---|
| **A** | **Act** — trả lời ngay khi được hỏi<br>**Don't Act** khi không đủ tự tin | User đã chủ động hỏi nên Act là hợp lý; nhưng bắt buộc kèm citation để lỗi luôn kiểm chứng được. Khi không tìm ra note liên quan, AI **không bịa** — chuyển sang escalation path (mở slide V-Learn gốc / gợi ý hỏi bạn) |
| **B** | **Ask** — đề xuất, không tự ghi | Lỗi ở B là loại khó phát hiện nhất và hậu quả tích lũy vĩnh viễn. Agency phải thấp nhất trong ba option: **AI không được tự gắn nhãn khi user chưa xác nhận** |
| **C** | **Act** — tự đẩy, user phủ quyết sau | Lỗi hiện ngay, chi phí một lần đẩy sai là thấp và hoàn tác được. Đây là option AI giữ nhiều quyền nhất, và đổi lại nó phải là option **dễ tắt nhất** |

> Nguyên tắc chung nhóm áp dụng: **AI được phép chủ động tỉ lệ nghịch với độ khó phát hiện lỗi.** B lỗi khó thấy nhất → Ask. C lỗi dễ thấy nhất → Act.

#### Evidence and Uncertainty

| | User biết AI dựa vào gì | Khi AI không chắc |
|---|---|---|
| **A** | Mỗi ý trong câu trả lời gắn **chip nguồn**: `Note 12/07 · Notepad` — bấm vào mở note gốc | Hạ cấp thay vì đoán bừa: nói *"mình chỉ chắc về 2 trong 3 ý"*, hoặc bỏ tổng hợp và **trả về danh sách note thô** để user tự đọc |
| **B** | Hiện **lý do đoán**: *"gợi ý chủ đề X vì note nhắc tới '…' và trùng buổi học 12/07"* | Đề xuất **2 nhãn để user chọn** thay vì tự chốt 1; nếu quá mơ hồ thì để trống và mời user tự đặt |
| **C** | Thẻ ghi rõ **nguồn + lý do đẩy**: *"3 note bạn ghi 30/07–02/08 · vì tuần sau học tiếp chủ đề này"* | Đẩy ít lại thay vì đẩy đại: khi không chắc thì gộp thành một thẻ nhẹ *"có vài note cũ về X"* thay vì tóm tắt sẵn nội dung |

#### Control and Recovery

| | Preview / edit / reject / stop / undo | **Đường quay lại task ban đầu sau khi AI sai** |
|---|---|---|
| **A** | Bấm chip nguồn để đối chiếu; nút *"xem note thô thay vì câu trả lời"*; hỏi lại bằng câu khác | Mở note gốc từ chip nguồn và tự đọc — task vẫn hoàn thành được **không cần AI đúng** |
| **B** | Sửa nhãn, gỡ nhãn, hoàn tác ngay sau khi xác nhận; xem lại nhãn trong danh sách "note gần đây" | **Bắt buộc giữ một đường tìm note không phụ thuộc nhãn** (tìm theo ngày / theo nguồn). Thiếu đường này thì lỗi của B **không thể phục hồi** — user mất note mà không biết |
| **C** | Hoãn, *"đã thuộc"*, tắt resurface cho từng chủ đề, tắt hẳn | Danh sách *"thẻ đã bỏ qua"* để nội dung bị dẹp nhầm **không mất vĩnh viễn**; và mọi thẻ đều mở được sang note gốc |

> Điểm thiết kế đắt nhất của Chặng 3: **Option B chỉ an toàn nếu vẫn còn đường tìm note khi nhãn sai.** Nếu topic hub là lối vào duy nhất, B tự tạo lại đúng cái pain F8 mà nó định giải.

### 3.2 Human–AI Decision Table

| Human–AI decision | **Option A** | **Option B** | **Option C** |
|---|---|---|---|
| **User làm gì? AI làm gì?** | User: đặt câu hỏi bằng lời của mình, kiểm chứng qua nguồn, quyết định dùng hay mở note gốc.<br>AI: quét 12 note, chọn đoạn liên quan, tổng hợp, **luôn dẫn nguồn** | User: ghi note như thường lệ, đọc nhãn đề xuất, xác nhận hoặc sửa (1 chạm).<br>AI: đọc note, đoán môn/chủ đề, tìm note cũ cùng chủ đề, **đề xuất** — không tự ghi | User: không đi tìm; nhận thẻ, quyết định mở / hoãn / đã thuộc.<br>AI: chọn **cái gì** và **khi nào** đưa lại, tóm tắt thành thẻ ngắn |
| **AI Act / Ask / Don't Act? Vì sao?** | **Act** (user đã hỏi) + **Don't Act** khi không đủ tự tin → escalation thay vì bịa. Lỗi kiểm chứng được nhờ citation | **Ask** — agency thấp nhất, vì lỗi là silent failure và tích lũy vĩnh viễn vào cấu trúc | **Act** — lỗi hiện ngay và hoàn tác rẻ; đổi lại phải dễ tắt nhất |
| **User hiểu capability/limit bằng gì?** | Dòng phạm vi ngay ô hỏi: *"tìm trong 12 note của bạn, không tìm trên internet"* + *"chỉ tìm được thứ bạn đã ghi"* | Nhãn ghi rõ trạng thái **"đề xuất — chưa lưu"**, kèm câu *"AI đoán từ chữ trong note"* | Câu giới thiệu khi bật + dòng lý do trên mỗi thẻ; nói thẳng *"mình không biết bạn đã thuộc hay chưa"* |
| **Evidence/uncertainty được thể hiện thế nào?** | Chip nguồn từng ý (`Note 12/07 · Notepad`); khi yếu thì nói rõ chắc mấy ý, hoặc bỏ tổng hợp trả về note thô | Câu giải thích lý do đoán; khi mơ hồ thì đưa **2 lựa chọn** hoặc để trống mời user tự đặt | Nguồn + ngày ghi + lý do đẩy trên thẻ; khi không chắc thì đẩy thẻ nhẹ, không tóm tắt sẵn |
| **User kiểm soát và recovery thế nào?** | Bấm nguồn → note gốc; đổi sang xem note thô; hỏi lại; escalation mở slide V-Learn. **Task hoàn thành được kể cả khi AI sai** | Sửa/gỡ nhãn, hoàn tác; **bắt buộc có đường tìm note độc lập với nhãn** để lỗi không nuốt mất note | Hoãn / đã thuộc / tắt theo chủ đề / tắt hẳn; danh sách *"đã bỏ qua"* chống mất vĩnh viễn |

### 3.3 Feedback and data check

| Câu hỏi | Trả lời cho micro-prototype Day 18 |
|---|---|
| **Feedback ảnh hưởng phiên này, lần sau, hay không ghi nhớ?** | **A:** không ghi nhớ — mỗi câu hỏi độc lập, hỏi lại không làm AI "học".<br>**B:** ảnh hưởng **vĩnh viễn cho chính note đó** (nhãn đã sửa là nhãn được lưu), nhưng **không** suy rộng sang note khác.<br>**C:** ảnh hưởng **lần sau** — "đã thuộc" và "hoãn" đổi lịch đẩy về sau. |
| **Dữ liệu nào được dùng?** | Nội dung note học tập cá nhân + ngày ghi + nguồn (Notepad / app điện thoại). A và B đọc **toàn bộ** note; C đọc note + lịch môn học. Không dùng dữ liệu ngoài phạm vi note của chính user. |
| **User có cách rút quyền không?** | Có: tắt AI theo từng nguồn (ví dụ cho phép đọc Notepad nhưng không đọc app điện thoại), xoá nhãn đã tạo, xoá lịch sử câu hỏi, tắt hẳn resurface. |
| **Điều phải nói thẳng với tester** | Micro-prototype **không có backend học gì cả**. Mọi mô tả "AI sẽ nhớ / sẽ cải thiện" là *thiết kế dự kiến*, không phải hành vi thật của bản đang test. Không được để tester hiểu nhầm là hệ thống đang thật sự học từ họ. |

---

### ✅ GATE 3 — Human control

| Yêu cầu | A | B | C |
|---|---|---|---|
| Nói rõ user làm gì / AI làm gì | ✅ | ✅ | ✅ |
| Agency phù hợp hậu quả khi sai | ✅ Act + citation bắt buộc; Don't Act khi yếu | ✅ Ask — lỗi khó phát hiện nhất → agency thấp nhất | ✅ Act — lỗi dễ thấy, hoàn tác rẻ, phải dễ tắt nhất |
| Có ít nhất một đường kiểm soát / phục hồi | ✅ mở note gốc từ citation | ✅ sửa nhãn **+ đường tìm độc lập với nhãn** (điều kiện bắt buộc) | ✅ hoãn / tắt / danh sách "đã bỏ qua" |
| Task vẫn hoàn thành được khi AI sai | ✅ | ⚠️ chỉ khi giữ đường tìm độc lập với nhãn — **ràng buộc thiết kế bắt buộc, không phải tuỳ chọn** | ✅ |

---

## Chặng 4 — Build ba micro-prototype

**Công cụ:** HTML/CSS/JavaScript, một file tự chạy, không cần cài gì.
**Cách mở:** `open prototype/index.html` (hoặc kéo file vào trình duyệt).

| File | Vai trò |
|---|---|
| `prototype/index.html` | Cả ba option + common context, dùng chung component và CSS |
| `prototype/option-c.js` | **Option C — nguồn duy nhất.** `index.html` và `option-c-flashcard.html` cùng nạp file này |
| `prototype/option-c-flashcard.html` | Bản C chạy riêng, dùng khi trình bày Option C một mình |
| `prototype/fixture.js` | **Fixture dùng chung** — 12 note, context, task. Không option nào được sửa |
| `prototype/annotations.md` | Annotation của facilitator — **không hiển thị cho tester** |

### 4.1 Scope — 3 trạng thái mỗi option

```
                    COMMON CONTEXT (dùng chung)
     bạn là ai · 12 note · task: lấy lại note về Chuẩn hoá CSDL
                              ↓
   ┌──────────────────┬──────────────────┬──────────────────┐
   │   A1 ô hỏi       │  B1 note vừa ghi │  C1 màn hình chính│
   │   + phạm vi      │  + 2 nhãn đề xuất│  (thẻ tự hiện)    │
   │        ↓         │        ↓         │        ↓          │
   │   A2 câu trả lời │  B2 đã lưu +     │  C2 bộ 4 flashcard│  ← CRITICAL
   │   + chip nguồn   │  số note đã nối  │  lật + tự chấm    │
   │        ↓         │        ↓         │        ↓          │
   │   A3 note gốc    │  B3 topic hub    │  C3 kết quả +     │  ← RESULT
   │   (A4 escalation)│  + tìm-không-nhãn│  rút quyền +      │
   │                  │                  │  thẻ đã bỏ qua    │
   └──────────────────┴──────────────────┴──────────────────┘
                              ↓
                   ↺ Về màn hình bắt đầu (mọi lúc)
```

### 4.2 Phần dùng chung ~70%

| Dùng chung | Chi tiết |
|---|---|
| Context screen | Một màn hình duy nhất, cả ba option đều xuất phát từ đây |
| Content fixture | `fixture.js` — 12 note, 4 tuần, **7 Notepad + 5 App ĐT**, 3 note thuộc chủ đề X (Chuẩn hoá CSDL), 2 note gây nhiễu gần (Phụ thuộc hàm, Ràng buộc toàn vẹn) |
| Component & visual | Cùng `.note`, `.chip`, `.btn`, `.ai-block`, `.uncert`, cùng bảng màu, cùng header |
| Task & desired outcome | "Lấy lại những gì bạn đã ghi về Chuẩn hoá CSDL" — hiện y hệt ở màn hình chung |
| **Chỉ khác ở** | Critical interaction: **hỏi** (A) / **gắn nhãn lúc ghi** (B) / **thẻ tự đến** (C) |

### 4.3 Những chỗ cố ý cài vào để test được Human–AI design

| # | Cài ở đâu | Để đo điều gì |
|---|---|---|
| 1 | **A:** note 06/08 chứa *"CHƯA CHÉP"*, nhưng câu trả lời tổng hợp nghe như đã đủ | Tester có bấm chip nguồn để phát hiện không — đo **khả năng phát hiện lỗi qua citation** |
| 2 | **A:** dòng uncertainty nói thẳng *"ý 3 mình chỉ đọc được tiêu đề"* | Uncertainty hiện ra có làm thay đổi hành vi không |
| 3 | **A:** câu hỏi về ví dụ BCNF → **Don't Act** + escalation sang slide V-Learn / hỏi bạn | Tester có dùng đường thoát không (nhánh F8 Day 17 chưa từng hỏi được) |
| 4 | **B:** AI đưa **2 nhãn**, xếp *Phụ thuộc hàm* trước *Chuẩn hoá CSDL* | Tester đọc lý do hay bấm cái đầu tiên — đo rủi ro xác nhận cho xong |
| 5 | **B:** chọn nhãn khác → topic hub chỉ có **1 note** thay vì 3, kèm cảnh báo | Dựng lại đúng **silent failure** đã phân tích ở Chặng 3 |
| 6 | **B:** khối *"Tìm không theo nhãn"* (theo ngày / theo nguồn) | Ràng buộc bắt buộc từ Gate 3 — có đường tìm độc lập với nhãn |
| 7 | **C:** thẻ ôn nhanh **tự hiện sau ~2,6 giây**, không do tester bấm | Tái tạo trải nghiệm bị AI khởi xướng, không phải mô tả bằng lời |
| 8 | **C:** thẻ ghi rõ lý do đẩy + *"mình không biết bạn đã thuộc hay chưa"* | Limit có được đọc không, và có làm giảm khó chịu không |
| 9 | **C:** danh sách *"thẻ đã bỏ qua"* | Recovery — nội dung bị dẹp nhầm không mất vĩnh viễn |
| 10 | **C:** thẻ 3 sinh từ note nhiễu *Phụ thuộc hàm* (28/07), AI ghi rõ lý do kéo vào bộ | **Silent scope creep** — AI âm thầm mở rộng chủ đề; tester có thấy và có gỡ không |
| 11 | **C:** thẻ 4 sinh từ note 06/08 *"CHƯA CHÉP"*, mặt sau **không có đáp án**, chỉ mở đường sang slide gốc | **Don't Act đặt bên trong một cơ chế Act** — AI được tự đẩy nội dung, không được tự viết nội dung |
| 12 | **C:** màn hình cuối nói *"mình chỉ biết bạn đã **bấm** gì trên thẻ"* | Tín hiệu tự chấm không đáng tin — limit có được thừa nhận không |

### 4.4 Prototype annotation

Đầy đủ trong `prototype/annotations.md`. Trích khung của mỗi option:

**OPTION A**
- *We expect the tester to:* hỏi, đọc câu trả lời, **bấm ít nhất một chip nguồn**.
- *Watch for:* có bấm nguồn không; phản ứng khi thấy note ghi "CHƯA CHÉP"; có dùng escalation không.
- *Do not explain:* chip nguồn bấm được; note 06/08 bị thiếu; có nút xem note thô.

**OPTION B**
- *We expect the tester to:* đọc hai nhãn kèm lý do, chọn một, mở trang chủ đề.
- *Watch for:* đọc lý do hay bấm cái đầu; **có nhận ra hub thiếu note không**; có dùng đường tìm không theo nhãn không.
- *Do not explain:* nhãn nào đúng; chọn khác sẽ nối được nhiều note hơn.

**OPTION C**
- *We expect the tester to:* thấy thẻ tự hiện, mở ra, chọn một quyết định.
- *Watch for:* **nguyên văn câu nói đầu tiên** khi thẻ nhảy ra; có thấy bị làm phiền không; có để ý danh sách đã bỏ qua không.
- *Do not explain:* thẻ sẽ tự hiện; có danh sách thẻ đã bỏ qua.

### 4.5 Build order thực tế

| Phút | Việc | Trạng thái |
|---|---|---|
| 0–10 | Common context + fixture 12 note | ✅ `fixture.js` |
| 10–55 | Ba option bằng shared component | ✅ ba section trong `index.html` |
| 55–65 | Thêm control/recovery + evidence/uncertainty | ✅ chip nguồn, dòng uncertainty, escalation, hoàn tác nhãn, tìm-không-nhãn, thẻ đã bỏ qua |
| 65–75 | Chéo: mỗi người test option người khác build | ⬜ **cần làm tại lớp** |
| 75–80 | Chuẩn hoá A/B/C, kiểm link và reset path | ✅ nút ↺ có ở mọi trạng thái; đã kiểm cú pháp JS |

---

### ✅ GATE 4 — Test-ready

| Tiêu chí Definition of testable | Trạng thái |
|---|---|
| Tester tự mở và thao tác được A/B/C | ✅ mở 1 file, không cài đặt, không đăng nhập |
| Cả ba bắt đầu từ cùng context và task | ✅ một màn hình chung, cùng 12 note |
| Không cần facilitator narrate | ✅ mọi nhãn, phạm vi và lý do đều nằm trên màn hình |
| Nội dung đủ thật để ra quyết định | ✅ note thật về Chuẩn hoá CSDL, có note nhiễu và note thiếu |
| Thấy được chỗ user lấy lại control | ✅ A: chip nguồn + note thô · B: sửa nhãn + tìm-không-nhãn · C: hoãn/tắt + thẻ đã bỏ qua |
| Có đường reset về common context | ✅ nút ↺ cố định trên header ở mọi trạng thái |
| ⚠️ Người không build đã thử chưa | ⬜ **chưa** — đây là mục duy nhất Gate 4 chưa tự xác nhận được, phải làm ở phút 65–75 tại lớp |

---

## Chặng 5 — Chuẩn bị test

### 5.1 Relevant context — hỏi một câu, tối đa 2 phút

> **“Gần đây bạn có từng cần tìm lại một ghi chú hoặc kiến thức cũ để ôn tập hoặc làm một bài cụ thể không?”**

Nếu có → hỏi thêm đúng một câu để neo: *"Lần gần nhất là khi nào, và bạn tìm ở đâu?"* rồi dừng, vào task ngay.

**Nếu tester chưa từng có context này:** vẫn test, nhưng ghi rõ lên đầu Feedback Note là **tester không có context liên quan**. Feedback của họ chỉ được dùng để tìm **interaction breakdown** (chỗ khó hiểu, chỗ bấm nhầm), **không** được dùng để nói option nào có giá trị hơn.

### 5.2 Outcome task — dùng y hệt cho A, B và C

> **“Trong tình huống này, hãy dùng từng phương án để lấy lại những gì bạn đã ghi về chuẩn hoá CSDL, đến mức bạn thấy đủ để ôn cho bài kiểm tra tuần sau.”**

Task nói **kết quả cần đạt**, không nói nút nào cần bấm. Không thêm, không diễn giải lại khi chuyển option.

Câu duy nhất được nói khi mở Option B, vì nó bắt đầu ở thời điểm khác: *“Coi như bạn vừa ghi xong một note ở buổi học hôm nay.”* Không giải thích gì thêm.

**Câu hỏi chốt sau khi làm xong cả ba:**
1. *"Vừa rồi ở từng phương án bạn đã làm gì?"* — để tester kể lại hành vi, không phải đánh giá.
2. *"Nếu tuần sau vẫn phải ôn kiểu này, bạn sẽ dùng cái nào?"*
3. *"Chọn cái đó thì bạn phải chấp nhận đánh đổi gì?"* ← câu quan trọng nhất; không có câu này thì lựa chọn vô nghĩa.

### 5.3 Observation focus — chọn 5

| # | Quan sát | Ghi cụ thể cái gì |
|---|---|---|
| 1 | **First action** | Việc đầu tiên tester làm ở mỗi option, tính từ lúc màn hình hiện ra. Ở C ghi cả **phản ứng khi thẻ tự nhảy ra** và câu nói đầu tiên (nguyên văn) |
| 2 | **Evidence read / ignored** | Có bấm chip nguồn ở A không? Có đọc lý do đoán nhãn ở B không? Có đọc lý do đẩy ở C không? Ghi **có/không + có dừng lại đọc hay lướt qua** |
| 3 | **Misunderstanding** | Tester hiểu sai AI đang làm gì hoặc ai đang quyết định. Ví dụ: tưởng A tìm trên internet; tưởng B đã tự lưu nhãn; tưởng C biết mình đã thuộc |
| 4 | **Correction / recovery** | Khi thấy sai hoặc thiếu, tester làm gì? Có tìm đường sửa không, hay chấp nhận luôn? Ghi rõ tester **có tự tìm ra** đường sửa hay chỉ thấy khi tình cờ |
| 5 | **Option được chọn + trade-off** | Chọn cái nào, **vì sao**, và **chấp nhận mất gì**. Không có phần "mất gì" thì coi như chưa ghi xong |

**Cố ý bỏ:** *hesitation* và *help needed* — hai thứ này ở phiên ~15 phút với prototype nhỏ thường phản ánh việc chưa quen giao diện hơn là phản ánh chất lượng của cơ chế. Giữ 5 mục trên để ghi được sâu thay vì ghi mỏng cả bảy.

**Ba mốc bắt buộc phải ghi được, vì cả bộ prototype được thiết kế quanh chúng:**

| Mốc | Ở đâu | Câu hỏi nó trả lời |
|---|---|---|
| Tester có bấm chip nguồn ở A không, và có phát hiện note *"CHƯA CHÉP"* không | A2 → A3 | Citation có thật sự bảo vệ user, hay chỉ là trang trí? |
| Tester chọn nhãn nào ở B, và **có nhận ra topic hub thiếu note không** | B1 → B3 | Silent failure có bị phát hiện không? |
| Câu nói đầu tiên khi thẻ ở C tự hiện | C1 | AI chủ động là tiện hay là làm phiền? |
| Đến thẻ 3 (lạc đề) tester có nhận ra và gỡ không | C2 | AI âm thầm mở rộng chủ đề — user có thấy không? |
| Phản ứng với thẻ 4 **không có đáp án** | C2 | Một chỗ trống được thừa nhận là hữu ích hay bực mình? |

### 5.4 Luật facilitation

**Phải làm**
- Tester tự cầm chuột, tự bấm. Facilitator không chạm vào máy.
- Cùng một task cho cả A/B/C, đọc nguyên văn.
- Để im lặng kéo dài. Đếm thầm 5 giây trước khi nói bất cứ điều gì.
- Ghi hành vi trước, diễn giải sau. Trong lúc test chỉ chép việc tester làm và nói.

**Không được làm**
- Không narrate giao diện, không giải thích icon, không chỉ chỗ bấm.
- Không hỏi *"Bạn có thích không?"*, *"Cái này có hữu ích không?"*, *"Có tiện không?"*.
- Không bào chữa cho prototype khi bị chê. Chê là dữ liệu.
- Không xác nhận đúng/sai khi tester chọn nhãn ở B — kể cả khi họ chọn nhãn làm mất note.

**Ba câu cứu hộ — chỉ dùng ba câu này**
> *"Bạn cứ nói to suy nghĩ của mình nhé."*
> *"Bạn sẽ làm gì tiếp theo?"*
> *"Theo bạn, nó nên hoạt động như thế nào?"*

Khi tester hỏi *"cái này bấm được không?"* hoặc *"nó lấy dữ liệu ở đâu?"* → dùng câu thứ ba. Không trả lời thẳng.

**Nói một lần ở đầu buổi, trước khi bắt đầu:**
> *"Đây là bản mô phỏng. Không có AI thật chạy phía sau và hệ thống không học gì từ bạn. Mình đang test ba cách làm, không test bạn — bạn thấy chỗ nào dở thì cứ nói."*

### 5.5 Kịch bản 15 phút

| Phút | Việc |
|---|---|
| 0–2 | Câu hỏi context + một câu neo |
| 2–3 | Đọc task + câu nói rõ đây là mô phỏng |
| 3–7 | Option thứ nhất → hỏi *"Vừa rồi bạn làm gì? Vì sao?"* → bấm ↺ |
| 7–11 | Option thứ hai → hỏi lại → bấm ↺ |
| 11–14 | Option thứ ba → hỏi lại |
| 14–15 | Ba câu chốt (chọn cái nào · vì sao · đánh đổi gì) |

Thứ tự option theo bảng chống order effect trong `prototype/annotations.md`: Tester 1 A→B→C · Tester 2 B→C→A · Tester 3 C→A→B.

---

## Chặng 6 — Test với ba người

> ⚠️ **Chưa chạy.** Mục này chỉ chứa biểu mẫu và phân công. Không có dòng dữ liệu nào được điền trước khi test thật — mọi con số hoặc câu nói xuất hiện ở đây mà không đến từ một tester có thật đều làm hỏng toàn bộ bài.

### 6.1 Phân công

| Thành viên | Tester | Thứ tự option | Feedback Note |
|---|---|---|---|
| **Đỗ Quý Đức** *(phụ trách **Option C**)* | Tester 1 — ngoài nhóm | A → B → C | `prototype-feedback-note.md` |
| **Nguyễn Thanh Hùng** *(⚠️ phân công lại — chờ xác nhận)* | Tester 2 — ngoài nhóm | B → C → A | `feedback/feedback-note-hung.md` |
| **Lê Nguyễn Minh Quang** *(⚠️ phân công lại — chờ xác nhận)* | Tester 3 — ngoài nhóm | C → A → B | `feedback/feedback-note-quang.md` |

**Luật đã áp:**
- Ba tester là ba người **khác nhóm**, ưu tiên người có relevant context (đang đi học, có ghi chú bài).
- Mỗi facilitator chạy **cả A/B/C** — kể cả người build Option C cũng phải test cả ba. Chốt C **không** cho phép bỏ A và B ra khỏi buổi test: nếu chỉ cho tester xem C thì không còn gì để so, và Gate 2 mất ý nghĩa.
- Thứ tự xoay vòng để chống order effect.
- Copy `feedback/TEMPLATE.md` thành file riêng cho mỗi người; không ba người ghi chung một file.

### 6.2 Opening (đọc nguyên văn)

> *"Chúng mình đang thử ba cách thiết kế, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn."*

Nói thêm một lần, vì bản này là mô phỏng:
> *"Không có AI thật chạy phía sau và hệ thống không học gì từ bạn."*

### 6.3 Timeline 20 phút

| Thời gian | Hoạt động |
|---|---|
| 0–2 | Make comfortable + câu hỏi relevant context (5.1) |
| 2–14 | Tester dùng A/B/C, ~4 phút mỗi option, bấm ↺ giữa các option |
| 14–18 | Ba câu so sánh: chọn cái nào · tự làm phần nào / giao AI phần nào · chỗ nào chưa thoải mái |
| 18–20 | Hoàn thành Feedback Note ngay tại chỗ, **không để về nhà viết lại** |

### 6.4 Prototype Feedback Note

Biểu mẫu đầy đủ: **`feedback/TEMPLATE.md`**. Gồm bảng quan sát 4 dòng × 3 option, ba mốc bắt buộc, ba câu so sánh, bốn lớp OBSERVED / INTERPRETED / DECIDED / STILL UNPROVEN, và bảng *Evidence chống lại kỳ vọng của nhóm*.

Hai ô không được để trống, nếu trống thì Feedback Note coi như chưa xong:
- **Trade-off tester chấp nhận** — "chọn B" mà không có phần đánh đổi thì không dùng được.
- **Câu nói đầu tiên khi thẻ ở C tự hiện** — chép nguyên văn, đây là dữ liệu không tái tạo được sau buổi.

### 6.5 Group Feedback Synthesis _(điền sau khi có đủ ba bản)_

| Nội dung | Feedback 1 | Feedback 2 | Feedback 3 | Pattern hoặc khác biệt |
|---|---|---|---|---|
| First action | | | | |
| Breakdown chính | | | | |
| Cách lấy lại control | | | | |
| Option được chọn | | | | |
| Trade-off | | | | |

**Một Next Change nhóm chốt:**
> ....................................................................................

**Evidence nào dẫn tới quyết định này:**
> ....................................................................................

**Still Unproven sau ba feedback:**
> ....................................................................................

### 6.6 Bốn dạng Next Change được phép chốt

| Dạng | Khi nào chọn |
|---|---|
| Giữ một option, sửa interaction | Cơ chế đúng nhưng có một chỗ breakdown cụ thể |
| Kết hợp hai option, **giữ một cơ chế chính rõ ràng** | Hai option bù nhau — nhưng phải nói được cái nào là chính, cái nào là phụ |
| Bỏ một option | Tester không hiểu, hoặc nó không tạo ra khác biệt nào so với option khác |
| Sửa cả ba rồi test người tiếp theo | Breakdown nằm ở phần dùng chung (context, task, fixture), không nằm ở cơ chế |

### 6.7 Ba kịch bản đã lường trước — dùng để **đối chiếu**, không phải để điền vào chỗ trống

> Chép từ phân tích Chặng 3–4. Ghi ra trước để buổi test cho thấy nhóm **sai ở đâu**, thay vì chỉ xác nhận thứ nhóm đã tin.

| Nhóm kỳ vọng | Nếu tester làm ngược lại thì có nghĩa gì |
|---|---|
| Tester bấm chip nguồn ở A và phát hiện note *"CHƯA CHÉP"* | Nếu **không ai bấm**: citation chỉ là trang trí, và Option A đang chuyển rủi ro sang user mà user không biết → Next Change phải làm evidence khó bỏ qua hơn, không phải làm câu trả lời hay hơn |
| Tester đọc lý do rồi mới chọn nhãn ở B | Nếu **bấm ngay cái đầu tiên**: xác nhận-cho-xong là hành vi thật → agency "Ask" của B không cứu được gì, silent failure vẫn xảy ra → phải xét lại toàn bộ cơ chế B |
| Tester thấy phiền khi thẻ ở C tự hiện | Nếu **thấy tiện**: mâu thuẫn F6 Day 17 được gỡ một phần, và C đáng đầu tư hơn nhóm nghĩ |

---

### ⏳ GATE 5 — Learning, not praise

| Yêu cầu | Trạng thái |
|---|---|
| Ba Feedback Notes độc lập | ⬜ chưa — cần chạy test |
| Nêu được pattern hoặc khác biệt giữa ba người | ⬜ chưa |
| Chốt một Next Change | ⬜ chưa |
| Nêu một điều vẫn chưa được chứng minh | ⬜ chưa |
| Không kết luận kiểu "ba tester thích B" mà thiếu hành vi + trade-off | ✅ biểu mẫu đã chặn: ô trade-off là bắt buộc |

**Gate 5 chưa qua và không thể qua trước khi test thật.**

---

## AI Support Log — Đỗ Quý Đức (2A202601628)

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
