/* ============================================================
   FIXTURE DÙNG CHUNG CHO CẢ A/B/C — không option nào được sửa
   12 note · 4 tuần · môn Nhập môn Cơ sở dữ liệu (V-Learn)
   7 Notepad + 5 App ghi chú điện thoại
   3 note thuộc chủ đề X (Chuẩn hoá CSDL) · 2 note gây nhiễu gần
   ============================================================ */
const TODAY = "18/08/2026";

const NOTES = [
  { id:"n1",  date:"14/07", src:"Notepad", topic:"Mô hình quan hệ",
    text:"Bảng = quan hệ. Hàng = bộ. Cột = thuộc tính. Thầy vẽ ví dụ bảng SinhVien.", role:"noise" },
  { id:"n2",  date:"16/07", src:"App ĐT", topic:"Khoá",
    text:"Khoá chính vs khoá ngoại. Chưa hiểu khoá ngoại có được để null không??", role:"noise" },
  { id:"n3",  date:"21/07", src:"Notepad", topic:"Ràng buộc toàn vẹn",
    text:"Ràng buộc toàn vẹn: entity integrity (khoá chính không null), referential integrity (khoá ngoại phải tồn tại ở bảng cha).", role:"confusable" },
  { id:"n4",  date:"23/07", src:"App ĐT", topic:"SQL JOIN",
    text:"INNER JOIN chỉ lấy phần giao. LEFT JOIN giữ hết bảng trái. Hay nhầm chỗ này.", role:"noise" },
  { id:"n5",  date:"28/07", src:"Notepad", topic:"Phụ thuộc hàm",
    text:"Phụ thuộc hàm X → Y. Thầy nói đây là nền của phần chuẩn hoá học sau.", role:"confusable" },
  { id:"n6",  date:"04/08", src:"Notepad", topic:"Chuẩn hoá CSDL",
    text:"Chuẩn hoá: 1NF là loại bỏ thuộc tính đa trị. Chưa hiểu tại sao 2NF lại đòi phụ thuộc ĐẦY ĐỦ vào khoá chính.", role:"target" },
  { id:"n7",  date:"04/08", src:"App ĐT", topic:"Chuẩn hoá CSDL",
    text:"3NF = bỏ phụ thuộc bắc cầu. Ví dụ thầy cho: MaSV → MaLop → TenLop.", role:"target" },
  { id:"n8",  date:"06/08", src:"Notepad", topic:"Chuẩn hoá CSDL",
    text:"BCNF chặt hơn 3NF. Slide 12 có ví dụ tách bảng, để chép lại sau — CHƯA CHÉP.", role:"target" },
  { id:"n9",  date:"11/08", src:"App ĐT", topic:"Chỉ mục",
    text:"Index B-tree: SELECT nhanh hơn nhưng INSERT chậm đi.", role:"noise" },
  { id:"n10", date:"13/08", src:"Notepad", topic:"Transaction",
    text:"ACID: Atomicity, Consistency, Isolation, Durability.", role:"noise" },
  { id:"n11", date:"13/08", src:"App ĐT", topic:"Transaction",
    text:"Deadlock — thầy nói phần này chắc chắn có trong bài kiểm tra.", role:"noise" },
  { id:"n12", date:"15/08", src:"Notepad", topic:"Ôn tập",
    text:"Đề kiểm tra: 60% bài tập, 40% lý thuyết.", role:"noise" }
];

/* Note thứ 13 — user vừa ghi xong, chỉ dùng ở Option B */
const NEW_NOTE = {
  id:"n13", date:"18/08", src:"Notepad", topic:null,
  text:"Buổi hôm nay thầy nhắc lại X → Y rồi bảo cái này là nền để tách bảng ở dạng chuẩn 3. Chỗ bắc cầu vẫn chưa hiểu."
};

/* Context + task dùng chung — hiển thị y hệt nhau ở cả ba option */
const CONTEXT = {
  who:"Bạn là học viên đang học môn Nhập môn Cơ sở dữ liệu trên V-Learn.",
  habit:"Sau mỗi buổi học bạn ghi vài dòng vào Notepad hoặc app ghi chú trên điện thoại. Đến giờ đã có 12 note trải 4 tuần.",
  when:"Hôm nay là " + TODAY + ". Tuần sau kiểm tra.",
  task:"Lấy lại những gì bạn đã ghi về CHUẨN HOÁ CSDL — chủ đề học cách đây khoảng 2 tuần.",
  outcome:"Xong khi bạn nắm được mình đã ghi những gì về chủ đề đó và dùng được ngay để ôn."
};
