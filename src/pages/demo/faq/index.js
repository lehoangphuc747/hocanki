
import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import PrimaryCTA from '@site/src/components/PrimaryCTA/PrimaryCTA'; // nút kêu gọi hành động
import FAQSection from '@site/src/components/FAQSection/FAQSection'; // nạp component các câu hỏi thường gặp

const App = () => {
  // Bắt đầu thiết lập menu
  const headerMenuItems = [
      { label: "Tài liệu", link: "/docs/intro" },
      { label: "Blog", link: "/blog" },
      { label: "Demo", link: "/demo/cards" },
  ];

  const handleMenuClick = () => {
      console.log("Đã nhấn vào menu trên di động!");
  };

  const handleSearchClick = () => {
      alert("Đã nhấn vào nút tìm kiếm!");
  };

  // Kết thúc thiết lập menu

  // Khai báo dữ liệu cho các câu hỏi và trả lời
  const faqData = [
    {
      "question": "Docusaurus là gì? Sử dụng Docusaurus như thế nào?",
      "answer": "Docusaurus là một sản phẩm mã nguồn mở do Facebook phát triển, được thiết kế đặc biệt để xây dựng trang tài liệu và blog dễ dàng với tính tuỳ biến cao. Trong khóa học này, bạn sẽ học cách cài đặt, cấu hình, và tuỳ biến các thành phần trong Docusaurus với framework React để tạo website chuyên nghiệp, hấp dẫn. Bạn không phải bắt đầu từ con số 0 vì mình sẽ chia sẻ các mẫu giao diện mình đã phát triển giúp bạn dễ dàng làm quen."
    },
    {
      "question": "Vì sao chọn Docusaurus để tạo Website?",
      "answer": "Docusaurus là một công cụ mã nguồn mở mạnh mẽ và miễn phí giúp tạo website nhanh chóng mà không lo tốn kém. Định dạng website này do Facebook phát triển nên được hỗ trợ tốt và cập nhật liên tục. Docusaurus phù hợp cho trang tài liệu và blog với khả năng hỗ trợ SEO rất tốt, đa ngôn ngữ, và các cấu trúc dễ tùy biến, giúp bạn có thể xây dựng một website chuyên nghiệp mà không cần nhiều kiến thức về lập trình."
    },
    {
      "question": "Có tạo được website chuyên nghiệp nếu chưa biết lập trình hay thiết kế?",
      "answer": "Đúng. Bạn có thể làm được vì mình sẽ chia sẻ với bạn các mẫu giao diện do mình phát triển để bắt đầu làm quen và tuỳ biến. Bạn được hướng dẫn và hỗ trợ từng bước để tạo ra bất kỳ giao diện website nào bạn có thể hình dung. Cách dễ nhất cho người chưa có nhiều kinh nghiệm chính là lấy cảm hứng hay thậm chị copy nguyên mẫu các thiết kế chuyên nghiệp được bán trên themeforest hoặc 1 trang web bất kỳ mà bạn ấn tượng. Việc này là khả thi vì công cụ AI như ChatGPT có thể nhận đầu vào hình ảnh, phân tích và tạo ra bộ giao diện theo hình ảnh bạn cung cấp. Mình làm được việc này và mình sẽ giúp bạn. Việc sao chép và tích luỹ dần các khái niệm về thiết kế, lập trình giúp bạn bồi dưỡng thêm năng lực sáng tạo để tự mình tạo ra giao diện độc đáo cho thương hiệu khi đủ khả năng."
    },
  ];

// PHẦN CHÈN CÁC THẺ HIỂN THỊ NỘI DUNG -----------------

  return (
    <div>

    <CustomHeader 
      logo="https://docusaurus.io/img/docusaurus_keytar.svg" 
      menuItems={headerMenuItems} 
      textColor="#ffffff"
      onMenuClick={handleMenuClick}
      onSearchClick={handleSearchClick}
    />

    <PureHero 
      title="Minh hoạ FAQ Component" 
      subtitle="Trả lời câu hỏi thường gặp" 
      backgroundImage="https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      buttonText="Khám phá"
      buttonLink="#" /* Thay link vào đây */
      contentWidth="60%"
      contentPosition="center"
      titleColor="#ffffff"
      subtitleColor="#f0f0f0"
      buttonColor="#ffffff"
      navColor="#ffffff"
    />

    {/* Lời kêu gọi hành động */}
    <PrimaryCTA 
      title="Tham gia khoá học"
      subtitle="Trở thành một phần của cộng đồng đam mê học hỏi với khoá học tại Learn Anything ngay hôm nay!"
      ctaText="Bắt đầu"
      ctaLink="/"
      enableBackground={true}
      button2Text="Tìm hiểu thêm"
      button2Link="/demo/about"
      fitInDocument={false} // Tràn viền (false) trong trang js hoặc vừa vặn trong trang tài liệu (true)
    />

    {/* FAQ Component - Câu hỏi thường gặp */}
    <FAQSection faqs={faqData} />

    </div>
  );
};

export default App;
