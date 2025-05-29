
import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import PrimaryCTA from '@site/src/components/PrimaryCTA/PrimaryCTA'; // nút kêu gọi hành động
import FeaturedProducts from '@site/src/components/FeaturedProducts/FeaturedProducts'; // Sản phẩm nổi bật

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


  const products = [
  {
    image: "https://images.unsplash.com/photo-1519289455504-3510c41b7cc3?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    title: "Docusaurus: Đơn giản hóa tài liệu",
    description: "Tối ưu hóa quy trình tạo tài liệu với Docusaurus, một trình tạo trang tĩnh mạnh mẽ được xây dựng trên nền tảng React.",
    buttonText: 'Thông tin & Đăng ký',
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1504519560822-bed2d817f87f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    title: "React: Framework UI cho trang web động",
    description: "Tận dụng kiến trúc dựa trên thành phần của React để tạo các yếu tố giao diện tương tác và có thể tái sử dụng một cách dễ dàng.",
  buttonText: 'Thông tin & Đăng ký',
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1605762566242-bd1c73c885b0?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    title: "Tùy chỉnh trang web bằng AI",
    description: "Khám phá cách tích hợp AI để cá nhân hóa trang Docusaurus của bạn dựa trên sở thích và hành vi của người dùng.",
    buttonText: 'Thông tin & Đăng ký',
  link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1643903096045-07741be1f245?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    title: "Từ con số 0 đến làm chủ kỹ năng tạo web với Docusaurus + AI",
    description: "Bắt đầu từ những minh hoạ dễ hiểu và chi tiết để khơi nguồn cảm hứng. Tự tạo component bạn muốn khi đủ khả năng.",
    buttonText: 'Thông tin & Đăng ký',
    link: "#"
  },
  // Thêm sản phẩm khác nếu cần
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
      title="Minh hoạ Featured Products Component" 
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

     <FeaturedProducts 
        products={products}
        title="Những điều tuyệt vời từ khoá học"
        subtitle="Chỉn chu. Chú trọng kết quả."
        titleFontSize="2rem"
        subtitleFontSize="1rem"
        titleColor="#000000"
        subtitleColor="#333333"
        productFontSize="1rem"
        productTextColor="#333333"
        imageBorderRadius="10px"
        imageOrientation="landscape" // 'portrait' or 'landscape'
        itemsInView={3} // Number of items visible at once
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
    />

    </div>
  );
};

export default App;
