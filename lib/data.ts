export interface EmergencyStep {
  id: number;
  text: string;
  imageUrl: string;
}

export interface EmergencyCase {
  slug: string;
  title: string;
  color: string;
  severity: "critical" | "high" | "medium";
  warning: string;
  steps: EmergencyStep[];
}

export const EMERGENCY_DATA: EmergencyCase[] = [
  {
    slug: "burns",
    title: "Sơ cứu: Bỏng",
    color: "text-orange-500",
    severity: "high",
    warning:
      "KHÔNG bôi kem đánh răng, mỡ trăn, đá lạnh trực tiếp hay chọc vỡ bọng nước!",
    steps: [
      {
        id: 1,
        text: "Loại bỏ tác nhân gây bỏng ngay lập tức (dập lửa, ngắt điện, cởi bỏ quần áo dính hóa chất).",
        imageUrl: "/images/steps/burns/step-1.png",
      },
      {
        id: 2,
        text: "Xả nước mát (không phải nước đá) nhẹ nhàng lên vùng bỏng liên tục trong 20 phút để giảm nhiệt sâu.",
        imageUrl: "/images/steps/burns/step-2.png",
      },
      {
        id: 3,
        text: "Tháo bỏ trang sức, đồng hồ, quần áo chật quanh vùng bị bỏng trước khi vết thương sưng nề.",
        imageUrl: "/images/steps/burns/step-3.png",
      },
      {
        id: 4,
        text: "Che phủ vết bỏng bằng gạc vô khuẩn hoặc vải sạch (không có lông tơ) và băng nhẹ nhàng.",
        imageUrl: "/images/steps/burns/step-4.png",
      },
    ],
  },
  {
    slug: "cpr",
    title: "Sơ cứu: Ngừng tim (CPR)",
    color: "text-red-500",
    severity: "critical",
    warning:
      "Chỉ thực hiện ép tim khi nạn nhân BẤT TỈNH và KHÔNG THỞ (hoặc thở ngáp cá).",
    steps: [
      {
        id: 1,
        text: "Kiểm tra phản ứng (vỗ vai, gọi to). Nếu không phản ứng và không thở: Gọi 115 ngay lập tức.",
        imageUrl: "/images/steps/cpr/step-1.png",
      },
      {
        id: 2,
        text: "Đặt nạn nhân nằm ngửa trên mặt phẳng cứng. Quỳ cạnh vai nạn nhân.",
        imageUrl: "/images/steps/cpr/step-2.png",
      },
      {
        id: 3,
        text: "Đặt gót một bàn tay vào giữa ngực (xương ức, ngang núm vú), tay kia chồng lên, khóa các ngón tay.",
        imageUrl: "/images/steps/cpr/step-3.png",
      },
      {
        id: 4,
        text: "Ấn mạnh và nhanh (tốc độ 100-120 lần/phút, sâu 5-6cm). Để ngực nảy lên hoàn toàn sau mỗi lần ấn. Làm liên tục không nghỉ.",
        imageUrl: "/images/steps/cpr/step-4.png",
      },
    ],
  },
  {
    slug: "choking",
    title: "Sơ cứu: Hóc dị vật",
    color: "text-blue-500",
    severity: "high",
    warning:
      "KHÔNG dùng tay móc họng nếu không nhìn thấy dị vật (nguy cơ đẩy dị vật vào sâu hơn).",
    steps: [
      {
        id: 1,
        text: "Hỏi 'Bạn có bị hóc không?'. Nếu nạn nhân còn ho được, khuyến khích ho thật mạnh.",
        imageUrl: "/images/steps/choking/step-1.png",
      },
      {
        id: 2,
        text: "Nếu không ho được/khó thở: Đứng bên cạnh, một tay đỡ ngực, cho nạn nhân cúi thấp. Vỗ mạnh 5 cái vào giữa hai xương bả vai.",
        imageUrl: "/images/steps/choking/step-2.png",
      },
      {
        id: 3,
        text: "Nếu dị vật chưa ra: Thực hiện Heimlich. Đứng sau lưng, vòng tay ôm eo. Một tay nắm đấm đặt trên rốn, tay kia ôm lấy tay nắm đấm.",
        imageUrl: "/images/steps/choking/step-3.png",
      },
      {
        id: 4,
        text: "Giật mạnh tay hướng vào trong và lên trên 5 lần. Lặp lại xen kẽ 5 lần vỗ lưng - 5 lần ép bụng.",
        imageUrl: "/images/steps/choking/step-4.png",
      },
    ],
  },
  {
    slug: "fracture",
    title: "Sơ cứu: Gãy xương",
    color: "text-slate-500",
    severity: "medium",
    warning:
      "KHÔNG cố nắn chỉnh xương về vị trí cũ. KHÔNG di chuyển nạn nhân nếu nghi gãy cột sống/cổ.",
    steps: [
      {
        id: 1,
        text: "Giữ nguyên tư thế nạn nhân. Cầm máu nếu có vết thương hở (bằng cách ép mép vết thương, không ấn lên đầu xương).",
        imageUrl: "/images/steps/fracture/step-1.png",
      },
      {
        id: 2,
        text: "Cố định tạm thời: Dùng nẹp (gỗ, bìa cứng) dài hơn ổ gãy, cố định cả khớp trên và khớp dưới vùng gãy.",
        imageUrl: "/images/steps/fracture/step-2.png",
      },
      {
        id: 3,
        text: "Chườm lạnh lên vùng sưng đau để giảm phù nề (bọc đá trong khăn, không chườm trực tiếp).",
        imageUrl: "/images/steps/fracture/step-3.png",
      },
      {
        id: 4,
        text: "Nâng cao chi bị gãy (nếu có thể) và đưa đến cơ sở y tế.",
        imageUrl: "/images/steps/fracture/step-4.png",
      },
    ],
  },
  {
    slug: "snake-bite",
    title: "Sơ cứu: Rắn cắn",
    color: "text-green-600",
    severity: "critical",
    warning:
      "KHÔNG rạch vết thương, KHÔNG hút nọc bằng miệng, KHÔNG đắp lá thuốc, KHÔNG garo chặt làm hoại tử.",
    steps: [
      {
        id: 1,
        text: "Trấn an nạn nhân. Yêu cầu nằm bất động tuyệt đối. Vận động sẽ làm nọc độc lan nhanh hơn.",
        imageUrl: "/images/steps/snake-bite/step-1.png",
      },
      {
        id: 2,
        text: "Rửa sạch vết cắn bằng nhiều nước và xà phòng. Tháo bỏ trang sức chật quanh vùng bị cắn.",
        imageUrl: "/images/steps/snake-bite/step-2.png",
      },
      {
        id: 3,
        text: "Băng ép bất động: Dùng băng thun băng từ ngọn chi lên gốc chi (đủ chặt để luồn 1 ngón tay). Nẹp cố định chân/tay bị cắn.",
        imageUrl: "/images/steps/snake-bite/step-3.png",
      },
      {
        id: 4,
        text: "Để vùng bị cắn thấp hơn tim. Gọi 115 hoặc vận chuyển bằng cáng (không để nạn nhân tự đi bộ).",
        imageUrl: "/images/steps/snake-bite/step-4.png",
      },
    ],
  },
  {
    slug: "drowning",
    title: "Sơ cứu: Đuối nước",
    color: "text-cyan-500",
    severity: "critical",
    warning:
      "KHÔNG dốc ngược nạn nhân chạy vòng vòng (phương pháp sai). Thời gian vàng là cấp cứu não.",
    steps: [
      {
        id: 1,
        text: "Đưa nạn nhân lên bờ an toàn. Đặt nằm ngửa trên mặt phẳng cứng.",
        imageUrl: "/images/steps/drowning/step-1.png",
      },
      {
        id: 2,
        text: "Kiểm tra thở: Ghé sát tai vào mũi miệng nạn nhân, mắt nhìn lồng ngực (trong 10 giây).",
        imageUrl: "/images/steps/drowning/step-2.png",
      },
      {
        id: 3,
        text: "Nếu ngừng thở: Hà hơi thổi ngạt 5 lần liên tiếp (quan trọng nhất để cấp oxy).",
        imageUrl: "/images/steps/drowning/step-3.png",
      },
      {
        id: 4,
        text: "Nếu vẫn không tỉnh: Thực hiện ép tim CPR (30 lần ép - 2 lần thổi) liên tục đến khi nạn nhân tỉnh hoặc y tế đến.",
        imageUrl: "/images/steps/drowning/step-4.png",
      },
    ],
  },
];

export const getCaseBySlug = (slug: string) => {
  return EMERGENCY_DATA.find((item) => item.slug === slug);
};
