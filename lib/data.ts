import type { EmergencyCategory, EmergencyDetail } from "./types";

export type { EmergencyCategory, EmergencyDetail, EmergencySection, StepItem } from "./types";

// Category icons use the most representative extracted image from each topic
export const CATEGORIES: EmergencyCategory[] = [
  { id: 1, slug: "di-vat-duong-tho", title: "Dị vật đường thở", iconPath: "/images/aid/di-vat-duong-tho/img-2.png", bgColor: "bg-blue-50", textColor: "text-blue-500", severity: "critical" },
  { id: 2, slug: "chay-mau", title: "Chảy máu", iconPath: "/images/aid/chay-mau/img-5.jpeg", bgColor: "bg-red-50", textColor: "text-red-500", severity: "critical" },
  { id: 3, slug: "soc-giam-the-tich", title: "Sốc giảm thể tích", iconPath: "/images/aid/soc-giam-the-tich/img-3.png", bgColor: "bg-rose-50", textColor: "text-rose-500", severity: "critical" },
  { id: 4, slug: "gay-xuong", title: "Gãy xương", iconPath: "/images/aid/gay-xuong/img-1.png", bgColor: "bg-slate-50", textColor: "text-slate-500", severity: "high" },
  { id: 5, slug: "bong-gan", title: "Bong gân", iconPath: "/images/aid/bong-gan/img-1.png", bgColor: "bg-amber-50", textColor: "text-amber-500", severity: "medium" },
  { id: 6, slug: "trat-khop", title: "Trật khớp", iconPath: "/images/aid/trat-khop/img-1.png", bgColor: "bg-purple-50", textColor: "text-purple-500", severity: "medium" },
  { id: 7, slug: "di-ung", title: "Dị ứng / Sốc phản vệ", iconPath: "/images/aid/di-ung/img-3.png", bgColor: "bg-pink-50", textColor: "text-pink-500", severity: "critical" },
  { id: 8, slug: "cho-can", title: "Chó cắn", iconPath: "/images/aid/cho-can/img-2.jpeg", bgColor: "bg-yellow-50", textColor: "text-yellow-600", severity: "high" },
  { id: 9, slug: "ran-can", title: "Rắn cắn", iconPath: "/images/aid/ran-can/img-3.jpeg", bgColor: "bg-green-50", textColor: "text-green-600", severity: "critical" },
  { id: 10, slug: "ong-dot", title: "Ong đốt", iconPath: "/images/aid/ong-dot/img-1.png", bgColor: "bg-orange-50", textColor: "text-orange-500", severity: "high" },
  { id: 11, slug: "dot-quy", title: "Đột quỵ", iconPath: "/images/aid/dot-quy/img-1.png", bgColor: "bg-indigo-50", textColor: "text-indigo-500", severity: "critical" },
  { id: 12, slug: "duoi-nuoc", title: "Đuối nước", iconPath: "/images/aid/duoi-nuoc/img-1.png", bgColor: "bg-cyan-50", textColor: "text-cyan-500", severity: "critical" },
  { id: 13, slug: "bong-phong", title: "Bỏng / Phỏng", iconPath: "/images/aid/bong-phong/img-2.png", bgColor: "bg-orange-50", textColor: "text-orange-600", severity: "high" },
  { id: 14, slug: "dien-giat", title: "Điện giật", iconPath: "/images/aid/dien-giat/img-1.png", bgColor: "bg-yellow-50", textColor: "text-yellow-500", severity: "critical" },
  { id: 15, slug: "hoi-sinh-tim-phoi", title: "CPR - Hồi sinh tim phổi", iconPath: "/images/aid/hoi-sinh-tim-phoi/img-1.jpeg", bgColor: "bg-red-50", textColor: "text-red-600", severity: "critical" },
];

export const EMERGENCY_DATA: EmergencyDetail[] = [
  {
    slug: "di-vat-duong-tho",
    title: "Dị vật đường thở",
    severity: "critical",
    sections: [
      {
        type: "definition",
        title: "Dị vật đường thở là gì?",
        content: "Dị vật đường thở là trường hợp các loại dị vật xâm nhập vào đường hô hấp qua mũi, qua miệng rơi xuống từ thanh quản đến phế quản. Dị vật có thể là chất rắn hay chất lỏng. Mọi lứa tuổi đều có thể bị, việc xử lí phải được bắt đầu ngay trong phút đầu tiên.",
        imageUrl: "/images/aid/di-vat-duong-tho/img-2.png",
      },
      {
        type: "info",
        title: "Hóc dị vật không hoàn toàn",
        content: "Dị vật rơi vào đường thở che lấp một phần đường thở.\nBiểu hiện: Ho, khóc, hoảng hốt, cố khạc dị vật ra ngoài.",
      },
      {
        type: "warning",
        title: "Hóc dị vật hoàn toàn",
        content: "Dị vật rơi vào đường thở che lấp toàn bộ đường thở.\nBiểu hiện: Không nói, không ho, không khóc, không thở được, tay ôm cổ, mặt tím tái.\n→ Gọi ngay cấp cứu 115!",
      },
      {
        type: "steps",
        title: "Xử lý hóc dị vật không hoàn toàn",
        stepItems: [
          { text: "Khuyến khích nạn nhân ho, khạc để tống dị vật ra, theo dõi sát tình trạng nạn nhân và nhanh chóng di chuyển đến cơ sở y tế gần nhất.", imageUrl: "/images/aid/di-vat-duong-tho/img-5.png" },
        ],
      },
      {
        type: "warning",
        content: "TUYỆT ĐỐI KHÔNG VỖ LƯNG NẠN NHÂN khi hóc dị vật không hoàn toàn.",
        imageUrl: "/images/aid/di-vat-duong-tho/img-4.png",
      },
      {
        type: "steps",
        title: "Xử lý hóc dị vật hoàn toàn — Phương pháp Heimlich",
        stepItems: [
          { text: "Bước 1: Ôm nạn nhân từ phía sau, tay thuận tạo thành hình nắm đấm đặt lên vùng trên rốn cách rốn 5-7cm, tay còn lại ôm lấy nắm đấm và thúc mạnh 5 cái, theo hướng từ trước ra sau, từ dưới lên trên.", imageUrl: "/images/aid/di-vat-duong-tho/img-3.png" },
          { text: "Bước 2: Kiểm tra miệng nạn nhân xem dị vật đã ra chưa, nếu chưa lặp lại thao tác cho đến khi dị vật được tống ra ngoài." },
        ],
      },
      {
        type: "warning",
        content: "Nếu không tống được dị vật ra ngoài, nạn nhân mất ý thức, ngưng tim, ngưng thở → lập tức thực hiện ép tim ngoài lồng ngực cho tới khi xe cấp cứu đến (xem phần CPR).",
      },
    ],
  },
  {
    slug: "chay-mau",
    title: "Chảy máu / Mất máu",
    severity: "critical",
    sections: [
      {
        type: "definition",
        content: "Chảy máu nặng là một tình huống khẩn cấp cần được xử lí nhanh chóng để duy trì lượng máu tuần hoàn trong cơ thể, tránh gây mất máu nhiều dẫn đến tụt huyết áp, sốc mất máu hay thậm chí là tử vong.",
      },
      {
        type: "steps",
        title: "Trình tự cầm máu",
        stepItems: [
          { text: "Bước 1: Bảo vệ bản thân — đeo găng tay hoặc sử dụng khăn sạch, áo sạch để tiếp xúc gián tiếp vết thương.", imageUrl: "/images/aid/chay-mau/img-1.png" },
          { text: "Bước 2: Dùng nhiều miếng gạc (hoặc vật liệu sạch, dễ thấm hút) đặt trực tiếp lên vết thương và tạo lực ép để cầm máu." },
          { text: "Bước 3: Băng ép cố định các miếng gạc.", imageUrl: "/images/aid/chay-mau/img-4.png" },
          { text: "Bước 4: Gọi tổng đài cấp cứu 115." },
        ],
      },
      {
        type: "warning",
        content: "Đối với vết thương có dị vật, KHÔNG được rút dị vật ra!",
      },
      {
        type: "steps",
        title: "Xử lý chảy máu mũi đúng cách",
        stepItems: [
          { text: "Bước 1: Đầu cúi nhẹ về phía trước.", imageUrl: "/images/aid/chay-mau/img-3.png" },
          { text: "Bước 2: Dùng ngón tay trỏ và ngón cái bóp phần mềm của mũi và thở bằng miệng." },
          { text: "Bước 3: Kiểm tra tình trạng chảy máu sau 10-15 phút, nếu máu vẫn chảy nhiều, liên tục thành dòng, hãy đến cơ sở y tế." },
        ],
      },
    ],
  },
  {
    slug: "soc-giam-the-tich",
    title: "Sốc giảm thể tích",
    severity: "critical",
    sections: [
      {
        type: "definition",
        content: "Sốc giảm thể tích là một tình trạng y tế khẩn cấp, xảy ra khi lượng máu lưu thông trong cơ thể giảm đột ngột, gây giảm tưới máu dẫn đến suy giảm nghiêm trọng các chức năng của cơ quan.",
      },
      {
        type: "warning",
        content: "ĐÂY LÀ MỘT TÌNH TRẠNG KHẨN CẤP ĐE DOẠ MẠNG SỐNG!",
      },
      {
        type: "signs",
        title: "Biểu hiện",
        items: [
          "Nhịp tim đập nhanh, thở nhanh.",
          "Da xanh xao, tái nhợt, nổi vân tím.",
          "Lạnh đầu chi, có thể có vã mồ hôi lạnh.",
          "Lơ mơ, mất ý thức và bất tỉnh.",
        ],
        imageUrl: "/images/aid/soc-giam-the-tich/img-1.png",
      },
      {
        type: "steps",
        title: "Cách xử trí",
        stepItems: [
          { text: "Bước 1: Gọi cấp cứu 115." },
          { text: "Bước 2: Cầm máu (nếu có chảy máu)." },
          { text: "Bước 3: Đỡ nạn nhân nằm xuống, nâng chân cao hơn đầu.", imageUrl: "/images/aid/soc-giam-the-tich/img-3.png" },
          { text: "Bước 4: Đắp chăn giữ ấm." },
          { text: "Bước 5: Nếu nạn nhân ngưng tim ngưng thở → Thực hiện CPR." },
        ],
      },
    ],
  },
  {
    slug: "gay-xuong",
    title: "Gãy xương",
    severity: "high",
    sections: [
      {
        type: "definition",
        content: "Một thanh xương bị gãy-nứt-rạn khi có lực mạnh tác động quá sức chịu đựng của xương. Nguyên nhân thường gặp: té ngã, tai nạn giao thông, tai nạn lao động hoặc chơi thể thao.",
        imageUrl: "/images/aid/gay-xuong/img-1.png",
      },
      {
        type: "signs",
        title: "Dấu hiệu chắc chắn gãy xương",
        items: ["Biến dạng chi.", "Nghe tiếng lạo xạo.", "Cử động bất thường."],
      },
      {
        type: "warning",
        items: [
          "Không di chuyển nạn nhân khi chưa cố định xương gãy.",
          "Không cố kéo chỗ xương gãy cho thẳng trục.",
          "Không cố nhét phần xương hở trở lại vào trong da.",
        ],
      },
      {
        type: "steps",
        title: "Xử trí gãy xương",
        stepItems: [
          { text: "Bước 1: Gọi hỗ trợ y tế, kiểm tra nhanh ABC (đường thở, hô hấp, tuần hoàn).", imageUrl: "/images/aid/gay-xuong/img-3.jpeg" },
          { text: "Bước 2: Đặt nạn nhân ở tư thế thỏa mái, ít đau nhất. Hỗ trợ bất động vùng xương gãy. Tiến hành cầm máu (nếu có).", imageUrl: "/images/aid/gay-xuong/img-4.png" },
          { text: "Bước 3: Giữ nguyên tư thế bất động đến khi xe cứu thương đến.", imageUrl: "/images/aid/gay-xuong/img-5.png" },
        ],
      },
    ],
  },
  {
    slug: "bong-gan",
    title: "Bong gân",
    severity: "medium",
    sections: [
      {
        type: "definition",
        content: "Bong gân là tổn thương dây chằng quanh khớp do kéo giãn quá mức, có thể bị rách hoặc đứt lìa hoàn toàn. Thường gặp nhất là khớp cổ chân, cổ tay, các ngón và đầu gối.",
        imageUrl: "/images/aid/bong-gan/img-1.png",
      },
      {
        type: "signs",
        title: "Nhận biết bong gân",
        items: [
          "Đau nhói đột ngột tại một điểm, một vùng, một bên khớp.",
          "Không cử động, vận động được vùng khớp.",
          "Sưng nề nhanh chóng và đỏ ngoài da.",
        ],
      },
      {
        type: "steps",
        title: "Xử trí bong gân — Công thức R-I-C-E",
        stepItems: [
          { text: "R — REST — Nghỉ ngơi: Hạn chế vận động, tạm dừng các hoạt động thể chất.", imageUrl: "/images/aid/bong-gan/img-5.png" },
          { text: "I — ICE — Chườm lạnh: Dùng nước đá chườm lạnh 5-10 phút. Không dùng đá lạnh trực tiếp mà bọc qua lớp vải.", imageUrl: "/images/aid/bong-gan/img-6.png" },
          { text: "C — COMPRESS — Băng ép: Dùng băng thun quấn quanh khớp để hạn chế vận động và sưng nề. Không quấn quá chặt.", imageUrl: "/images/aid/bong-gan/img-7.png" },
          { text: "E — ELEVATE — Kê cao chi: Nâng cao chi bị chấn thương bằng gối, nệm để giảm phù nề.", imageUrl: "/images/aid/bong-gan/img-8.png" },
        ],
      },
    ],
  },
  {
    slug: "trat-khop",
    title: "Trật khớp",
    severity: "medium",
    sections: [
      {
        type: "definition",
        content: "Trật khớp là một thương tích nặng do chịu tác động bên ngoài làm đầu xương bị lệch ra khỏi ổ khớp. Thường xảy ra từ va chạm mạnh khi chơi thể thao hoặc té ngã.",
        imageUrl: "/images/aid/trat-khop/img-1.png",
      },
      {
        type: "signs",
        title: "Nhận biết trật khớp",
        items: [
          "Biến dạng tại khớp.",
          "Dấu ổ khớp rỗng: Sờ vào ổ khớp cảm giác rỗng.",
          "Dấu hiệu lò xo: Khi cố điều chỉnh khớp, khớp tự bật lại tư thế biến dạng ban đầu.",
        ],
        imageUrl: "/images/aid/trat-khop/img-2.png",
      },
      {
        type: "steps",
        title: "Xử trí trật khớp",
        stepItems: [
          { text: "Bước 1: Trấn an nạn nhân, hạn chế vận động vùng khớp bị trật." },
          { text: "Bước 2: Gọi cấp cứu 115." },
          { text: "Bước 3: Bất động vùng khớp bị trật.", imageUrl: "/images/aid/trat-khop/img-4.png" },
          { text: "Bước 4: Giữ nguyên tư thế bất động đến khi xe cứu thương đến." },
        ],
      },
      {
        type: "warning",
        items: [
          "Không tự nắn khớp theo kinh nghiệm — có thể gây tổn thương kèm theo.",
          "Tỷ lệ tái phát trật khớp cao nhất tại khớp vai, cần tái khám thường xuyên.",
        ],
      },
    ],
  },
  {
    slug: "di-ung",
    title: "Dị ứng / Sốc phản vệ",
    severity: "critical",
    sections: [
      {
        type: "definition",
        content: "Phản vệ là phản ứng dị ứng cấp tính khi cơ thể tiếp xúc với chất lạ như phấn hoa, lông thú, côn trùng cắn, thực phẩm hay thuốc. Sốc phản vệ là mức độ nặng nhất, có thể gây ngừng tuần hoàn trong vài phút.",
        imageUrl: "/images/aid/di-ung/img-1.png",
      },
      {
        type: "signs",
        title: "Biểu hiện sốc phản vệ",
        items: [
          "Da, niêm mạc: Nổi mày đay, ngứa, phù môi, phù lưỡi, phù mắt.",
          "Tim mạch: Tim đập nhanh, đau tức ngực, tụt huyết áp, mất ý thức.",
          "Tiêu hóa: Đau bụng quặn, buồn nôn, nôn, đi ngoài phân lỏng.",
          "Hô hấp: Nói khàn, khó thở, thở rít, chẹn ngực.",
        ],
        imageUrl: "/images/aid/di-ung/img-3.png",
      },
      {
        type: "steps",
        title: "Xử trí",
        stepItems: [
          { text: "Ngưng ngay việc tiếp xúc với \"Dị nguyên\"." },
          { text: "Gọi điện nhờ hỗ trợ y tế 115 và nhanh chóng đưa nạn nhân đến cơ sở y tế." },
          { text: "Nếu nạn nhân ngưng tim ngưng thở → thực hiện CPR." },
        ],
      },
      {
        type: "warning",
        items: [
          "Không được tự ý sử dụng thuốc khi không có chỉ định của nhân viên y tế.",
          "Khi có cơ địa dị ứng, ghi nhớ và tuyệt đối tránh các tác nhân gây dị ứng.",
        ],
      },
    ],
  },
  {
    slug: "cho-can",
    title: "Chó cắn",
    severity: "high",
    sections: [
      {
        type: "definition",
        content: "Chó có thể cắn người khi bị stress, đe dọa hoặc kích động. Chó có xu hướng tấn công vùng cổ và mặt. Trẻ em thường bị cắn ở vùng mặt, người lớn ở chân và cánh tay.",
        imageUrl: "/images/aid/cho-can/img-2.jpeg",
      },
      {
        type: "steps",
        title: "Các bước xử lí chó cắn",
        stepItems: [
          { text: "Bước 1: Vệ sinh vết thương — Rửa vết thương ngay dưới vòi nước chảy kết hợp xà phòng liên tục trong 15 phút.", imageUrl: "/images/aid/cho-can/img-1.jpeg" },
          { text: "Bước 2: Sát khuẩn bằng cồn 70° hoặc cồn Iode." },
          { text: "Bước 3: Đến ngay cơ sở y tế để được tư vấn tiêm phòng vaccine phòng dại và uốn ván.", imageUrl: "/images/aid/cho-can/img-3.png" },
        ],
      },
      {
        type: "warning",
        items: [
          "KHÔNG nặn vết thương cho máu chảy ra.",
          "KHÔNG băng kín vết thương.",
          "KHÔNG bôi hoặc đắp vật lạ lên vết thương.",
          "KHÔNG làm vết thương rộng thêm.",
        ],
      },
      {
        type: "info",
        title: "Bệnh dại do chó cắn",
        content: "Bệnh dại là bệnh do virus dại (Rhabdovirus) gây ra. Thời gian ủ bệnh ở người thường là 1-3 tháng, phụ thuộc vào vết cắn và vị trí vết cắn. Vết cắn càng gần thần kinh trung ương thì thời gian ủ bệnh càng ngắn.",
        imageUrl: "/images/aid/cho-can/img-4.jpeg",
      },
    ],
  },
  {
    slug: "ran-can",
    title: "Rắn cắn",
    severity: "critical",
    sections: [
      {
        type: "definition",
        content: "Mỗi loại rắn khác nhau có đặc trưng về độc tính của nọc khác nhau.",
      },
      {
        type: "info",
        title: "Phân loại rắn độc",
        items: [
          "Họ rắn hổ: rắn hổ mang, hổ chúa, hổ đất, cạp nong, cạp nia — Gây hoại tử, liệt cơ, suy hô hấp.",
          "Họ rắn lục: lục xanh, lục đuôi đỏ, chàm quạp — Gây phù nề, bọng nước, chảy máu.",
        ],
        imageUrl: "/images/aid/ran-can/img-3.jpeg",
      },
      {
        type: "steps",
        title: "Xử lý rắn cắn",
        stepItems: [
          { text: "Bước 1: Di chuyển đến vùng an toàn, gọi trợ giúp y tế sớm nhất." },
          { text: "Bước 2: Động viên bình tĩnh. Cởi bỏ trang sức đề phòng sưng nề. Để vết cắn thấp hơn tim.", imageUrl: "/images/aid/ran-can/img-7.jpeg" },
          { text: "Bước 3: Đối với họ rắn hổ — băng ép + nẹp bất động chi. Đối với họ rắn lục — KHÔNG băng ép.", imageUrl: "/images/aid/ran-can/img-14.png" },
          { text: "Bước 4: Đánh giá và xử trí theo ABC (đường thở, hô hấp, tuần hoàn)." },
        ],
      },
      {
        type: "warning",
        items: [
          "Không garo.",
          "Không trích rạch và hút nọc độc.",
          "Không bôi mỡ hay đắp thuốc lên vết thương.",
          "Không cố bắt rắn, đảm bảo an toàn bản thân.",
        ],
      },
    ],
  },
  {
    slug: "ong-dot",
    title: "Ong đốt",
    severity: "high",
    sections: [
      {
        type: "definition",
        content: "Ong thuộc họ cánh màng gồm 2 họ chính: Họ ong vò vẽ và Họ ong mật. Thông thường ong đốt hiếm khi gây phản ứng nghiêm trọng. Hầu hết đau chói, ngứa và sưng nề tại chỗ, tự hết sau vài ngày.",
        imageUrl: "/images/aid/ong-dot/img-1.png",
      },
      {
        type: "warning",
        title: "Cần đến viện ngay nếu có MỘT trong các dấu hiệu",
        items: [
          "Có nhiều vết đốt.",
          "Có vết đốt vùng đầu mặt cổ kèm phù nề lan nhanh.",
          "Sốt, mệt mỏi, khó thở, nước tiểu ít dần, nước tiểu đỏ.",
          "Mẩn ngứa, đỏ da toàn thân, choáng váng chóng mặt.",
        ],
      },
      {
        type: "steps",
        title: "Cách xử trí",
        stepItems: [
          { text: "Bước 1: Di chuyển nạn nhân đến khu vực an toàn." },
          { text: "Bước 2: Loại bỏ ngòi — dùng nhíp hoặc gạt nhẹ.", imageUrl: "/images/aid/ong-dot/img-3.png" },
          { text: "Bước 3: Rửa vùng đốt bằng xà phòng và nước lạnh. Sát khuẩn bằng cồn y tế." },
          { text: "Bước 4: Chườm lạnh khoảng 20 phút.", imageUrl: "/images/aid/ong-dot/img-5.png" },
          { text: "Bước 5: Nâng vùng có vết đốt lên cao hơn tim → giảm sưng nề." },
        ],
      },
      {
        type: "notes",
        title: "KHÔNG nên làm",
        items: [
          "Tuyệt đối không bôi vôi, mật ong hoặc kem đánh răng lên vết đốt.",
          "Không xoa bóp vết đốt, hạn chế gãi.",
        ],
      },
    ],
  },
  {
    slug: "dot-quy",
    title: "Đột quỵ",
    severity: "critical",
    sections: [
      {
        type: "definition",
        title: "Đột quỵ là gì?",
        content: "Đột quỵ là các dấu hiệu rối loạn chức năng não cục bộ, kéo dài hơn 24 giờ, có thể dẫn đến tử vong, do nguyên nhân mạch máu.",
        imageUrl: "/images/aid/dot-quy/img-1.png",
      },
      {
        type: "warning",
        title: "\"Giờ vàng\" cấp cứu đột quỵ",
        content: "3 - 4,5 GIỜ ĐẦU TIÊN khi có biểu hiện. Đưa nạn nhân đến CSYT càng sớm → khả năng phục hồi càng cao.",
        imageUrl: "/images/aid/dot-quy/img-4.png",
      },
      {
        type: "signs",
        title: "Nhận biết sớm: BE FAST",
        items: [
          "B — Balance: Mất thăng bằng, đau đầu, chóng mặt.",
          "E — Eyesight: Mất thị lực 1 phần/toàn bộ.",
          "F — Face: Gương mặt bị méo, nụ cười méo 1 bên.",
          "A — Arm: Một bên tay/chân bị yếu, cầm nắm không chắc.",
          "S — Speech: Nói khó, nói ngọng.",
          "T — Time: Đưa bệnh nhân đi cấp cứu ở cơ sở y tế gần nhất.",
        ],
        imageUrl: "/images/aid/dot-quy/img-6.png",
      },
      {
        type: "steps",
        title: "Cách xử trí",
        stepItems: [
          { text: "Bước 1: Gọi xe cấp cứu 115." },
          { text: "Bước 2: Trấn an nạn nhân." },
          { text: "Bước 3: Đảm bảo đường thở thông thoáng và sạch sẽ." },
          { text: "Bước 4: Nếu nạn nhân nôn, nghiêng đầu sang một bên để chất nôn chảy ra ngoài.", imageUrl: "/images/aid/dot-quy/img-11.png" },
          { text: "Bước 5: Đặt nạn nhân ở vị trí an toàn và thoải mái nhất.", imageUrl: "/images/aid/dot-quy/img-10.png" },
          { text: "Bước 6: Nếu ngưng tim ngưng thở → lập tức CPR." },
        ],
      },
    ],
  },
  {
    slug: "duoi-nuoc",
    title: "Đuối nước",
    severity: "critical",
    sections: [
      {
        type: "definition",
        content: "Đuối nước là hiện tượng khí quản bị nước xâm nhập dẫn tới khó thở. Hậu quả lâu có thể là tử vong hoặc suy hô hấp gây tổn hại nghiêm trọng cho hệ thần kinh.",
        imageUrl: "/images/aid/duoi-nuoc/img-1.png",
      },
      {
        type: "warning",
        content: "Tuyệt đối không mạo hiểm cứu nạn nhân khi chưa đủ kỹ năng. Đảm bảo an toàn bản thân trước tiên.",
      },
      {
        type: "steps",
        title: "Nguyên tắc tiếp cận (DRs.ABC)",
        stepItems: [
          { text: "D — Đảm bảo hiện trường an toàn." },
          { text: "R — Kiểm tra nạn nhân còn tỉnh hay bất tỉnh." },
          { text: "S — Gọi hỗ trợ y tế 115." },
          { text: "A — Kiểm tra đường thở.", imageUrl: "/images/aid/duoi-nuoc/img-2.png" },
          { text: "B — Kiểm tra hô hấp: Nếu không thở → Hà hơi thổi ngạt.", imageUrl: "/images/aid/duoi-nuoc/img-3.png" },
          { text: "C — Kiểm tra tuần hoàn: Nếu ngưng tim → Ép tim CPR." },
        ],
      },
    ],
  },
  {
    slug: "bong-phong",
    title: "Bỏng / Phỏng",
    severity: "high",
    sections: [
      {
        type: "definition",
        content: "Bỏng là chấn thương trên da hay mô khác khi tế bào bị tiêu diệt bởi sức nóng, lạnh, điện, phóng xạ hay hóa chất.",
        imageUrl: "/images/aid/bong-phong/img-2.png",
      },
      {
        type: "info",
        title: "Tác nhân gây bỏng",
        items: [
          "Bỏng do nhiệt: đám cháy, nước sôi, hơi nóng từ nồi áp suất...",
          "Bỏng do điện: chạm nguồn điện, tia lửa điện...",
          "Bỏng do hoá chất: acid, chất kiềm mạnh, chất ăn mòn...",
          "Bỏng do bức xạ: tia hồng ngoại, lazer...",
        ],
      },
      {
        type: "steps",
        title: "Cách xử trí",
        stepItems: [
          { text: "Bước 1: Loại trừ tiếp xúc với tác nhân gây bỏng → Gọi cấp cứu 115.", imageUrl: "/images/aid/bong-phong/img-1.png" },
          { text: "Bước 2: Đánh giá ban đầu, bảo đảm ABC (đường thở, hô hấp, tuần hoàn)." },
          { text: "Bước 3: Nhanh chóng làm mát vùng bị bỏng với nước sạch mát ít nhất 20 phút.", imageUrl: "/images/aid/bong-phong/img-4.png" },
          { text: "Bước 4: Phủ gạc ẩm (nước muối sinh lí) lên bảo vệ vùng bỏng.", imageUrl: "/images/aid/bong-phong/img-5.png" },
          { text: "Bước 5: Bù nước và điện giải (ORESOL, trà đường ấm, nước cháo loãng)." },
          { text: "Bước 6: Nhanh chóng chuyển nạn nhân tới cơ sở y tế.", imageUrl: "/images/aid/bong-phong/img-6.png" },
        ],
      },
      {
        type: "warning",
        title: "KHÔNG nên làm",
        items: [
          "Không đắp thảo dược hay bất kỳ chất lạ gì vào vùng bỏng.",
          "Không chọc vỡ vòm nốt bỏng.",
          "Không để hở hoàn toàn vết bỏng.",
          "Không dùng cồn hoặc oxy già rửa vết bỏng.",
        ],
      },
    ],
  },
  {
    slug: "dien-giat",
    title: "Điện giật",
    severity: "critical",
    sections: [
      {
        type: "definition",
        content: "Điện giật xảy ra khi có dòng điện đi qua cơ thể, để lại hậu quả tổn thương các cơ quan, thậm chí ngưng tim ngưng thở và tử vong. Nguy hiểm nhất là khi chạy qua tim và não.",
        imageUrl: "/images/aid/dien-giat/img-1.png",
      },
      {
        type: "signs",
        title: "Tổn thương do điện giật",
        items: [
          "Ngừng tim, ngừng thở.",
          "Sốc điện, mất ý thức tạm thời.",
          "Bỏng, thường rất sâu tới gân, cơ xương khớp.",
          "Chấn thương kèm theo: sọ não, cột sống, gãy xương.",
        ],
        imageUrl: "/images/aid/dien-giat/img-3.png",
      },
      {
        type: "steps",
        title: "Cách xử trí",
        stepItems: [
          { text: "Bước 1: Ngắt nguồn điện.", imageUrl: "/images/aid/dien-giat/img-2.png" },
          { text: "Bước 2: Tách nạn nhân ra khỏi nguồn điện bằng vật dụng cách điện (thanh gỗ, nhựa).", imageUrl: "/images/aid/dien-giat/img-4.png" },
          { text: "Bước 3: Gọi 115." },
          { text: "Bước 4: Kiểm tra toàn thân theo ABCDE.", imageUrl: "/images/aid/dien-giat/img-5.png" },
          { text: "Bước 5: Xử trí vết bỏng.", imageUrl: "/images/aid/dien-giat/img-7.png" },
          { text: "Bước 6: Theo dõi sát dấu hiệu sinh tồn trong lúc đợi cấp cứu." },
        ],
      },
      {
        type: "warning",
        items: [
          "Nếu ngưng tim ngưng thở → CPR ngay.",
          "Tuyệt đối không cho ăn/uống khi chưa có đánh giá của nhân viên y tế.",
        ],
      },
    ],
  },
  {
    slug: "hoi-sinh-tim-phoi",
    title: "CPR — Hồi sinh tim phổi",
    severity: "critical",
    sections: [
      {
        type: "definition",
        title: "Ngừng tuần hoàn - hô hấp là gì?",
        content: "Ngừng tuần hoàn là hiện tượng tim đột ngột dừng hoạt động, kéo theo ngừng thở và mất ý thức. Tử vong xảy ra trong 8-10 phút. CPR cần triển khai trong 4 phút đầu!",
        imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-1.jpeg",
      },
      {
        type: "signs",
        title: "Khi nào ngưng tim - ngưng thở?",
        items: [
          "Gọi hỏi không trả lời, kích thích đau không đáp ứng.",
          "Lồng ngực và bụng không di động lên xuống.",
          "Mất mạch bẹn, mạch cảnh; da nhợt nhạt, tím tái.",
        ],
        imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-2.jpeg",
      },
      {
        type: "steps",
        title: "Tiếp cận DRs.ABC",
        stepItems: [
          { text: "D (Danger) — Đánh giá sự an toàn hiện trường, bảo vệ bản thân." },
          { text: "R (Response) — Nạn nhân còn tỉnh không?" },
          { text: "S (Send for help) — Gọi 115, hô hoán sự giúp đỡ." },
          { text: "Xác định nhanh trong 10 giây: ngưng tim ngưng thở? → Bắt đầu CPR!", imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-3.png" },
        ],
      },
      {
        type: "steps",
        title: "Thao tác ép tim",
        stepItems: [
          { text: "Tư thế: Nạn nhân nằm ngửa trên mặt phẳng cứng. Người cấp cứu quỳ bên cạnh ngực.", imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-4.png" },
          { text: "Vị trí ép: 1/3 dưới xương ức — dùng 2 tay miết theo bờ sườn đến khi chạm nhau ở mũi kiếm xương ức, đo lên 2 ngón tay, đặt gót bàn tay ở vị trí đó.", imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-8.png" },
          { text: "Đan 2 bàn tay lại, khuỷu tay thẳng. Ép sâu 5-6 cm, tần số 100-120 lần/phút.", imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-9.png" },
        ],
      },
      {
        type: "steps",
        title: "Hà hơi thổi ngạt",
        stepItems: [
          { text: "Bước 1: Ngửa đầu nâng cằm — một tay đặt trên trán ép xuống, tay kia nâng cằm lên.", imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-11.png" },
          { text: "Bước 2: Bịt mũi nạn nhân, áp kín miệng rồi thổi liên tiếp 2 cái.", imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-12.png" },
          { text: "Tỉ lệ: 30 lần ép tim : 2 lần thổi ngạt.", imageUrl: "/images/aid/hoi-sinh-tim-phoi/img-13.png" },
        ],
      },
      {
        type: "notes",
        title: "Lưu ý quan trọng",
        items: [
          "Đổi người ép tim - thổi ngạt mỗi 2 phút hoặc khi mệt.",
          "Kiên trì CPR cho tới khi xe cấp cứu tới hoặc nạn nhân tỉnh lại.",
        ],
      },
    ],
  },
];

export const getCaseBySlug = (slug: string): EmergencyDetail | undefined => {
  return EMERGENCY_DATA.find((item) => item.slug === slug);
};

export const getCategoryBySlug = (slug: string): EmergencyCategory | undefined => {
  return CATEGORIES.find((item) => item.slug === slug);
};
