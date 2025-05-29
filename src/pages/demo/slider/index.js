
import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import ImpressSlider from '@site/src/components/ImpressSlider/ImpressSlider';

const App = () => {
  // Bắt đầu thiết lập menu
  const headerMenuItems = [
      { label: "Tài liệu", link: "/docs/intro" },
      { label: "Blog", link: "/blog" },
      { label: "Demo", link: "/demo/cards"},
  ];

  const handleMenuClick = () => {
      console.log("Đã nhấn vào menu trên di động!");
  };

  const handleSearchClick = () => {
      alert("Đã nhấn vào nút tìm kiếm!");
  };

  // Kết thúc thiết lập menu


// KHAI BÁO DỮ LIỆU CHO SLIDER - TRÌNH CHIẾU ẢNH
  const slides = [
{
    title: "Lập trình đơn giản là Quan sát & mô tả.",
    description: "Quan sát quy luật, mô tả mong muốn để AI & máy hiểu đúng điều bạn cần.",
    buttonText: "Khám phá",
    link: "#",
    image: "https://images.unsplash.com/photo-1519229875649-6b8da16368fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
},
{
    title: "Phát hiện quy luật, học từ thực tế.",
    description: "Quan sát các mẫu có sẵn, ghi nhớ quy luật và lặp lại mẫu thành công.",
    buttonText: "Khám phá",
    link: "#",
    image: "https://images.unsplash.com/photo-1520982184827-6950930eaf2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
},
{
    title: "Thành công lớn bắt đầu từ bước đi nhỏ.",
    description: "Không ai sinh ra đã biết tuốt, ai cũng bắt đầu từ con số 0. Dám khao khát, dám thành công.",
    buttonText: "Learn More",
    link: "#",
    image: "https://images.unsplash.com/photo-1663042297704-4c9051364f44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
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

    {/* add text to describe the slider */}
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Trình chiếu ảnh ấn tượng</h2>
      <p>Khám phá những hình ảnh và thông điệp truyền cảm hứng thông qua trình chiếu ảnh dưới đây.</p>
    </div>

    {/* Thêm khoảng trống trước phần slider, cách 20 pixel */}
    <div style={{ margin: '20px 0' }}></div> 

    <ImpressSlider 
      slides={slides} 
      width="80%" 
      height="600px" 
      borderRadius="20px" 
      textPosition="center" // Control text alignment (left, right, center)
      contentWidth="800px" // Set a custom width for the text area
    />

    {/* Thêm khoảng trống sau phần slider, cách 20 pixel */}
    <div style={{ margin: '20px 0' }}></div> 

    </div>
  );
};

export default App;
