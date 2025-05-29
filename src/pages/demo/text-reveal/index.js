// PHẦN KHAI NẠP CÁC COMPONENT MODULE -----------------
import React from 'react';
import RevealTextOnScroll from '@site/src/components/ModernDesign/RevealTextOnScroll/RevealTextOnScroll';
import PureHero from '@site/src/components/PureHero/PureHero';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader';


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
  
  // PHẦN KHAI BÁO DỮ LIỆU -----------------
  
  const lines = [
    "WEB DESIGN",
    "MOBILE APP DEVELOPMENT",
    "UI/UX DESIGN",
    "SEO OPTIMIZATION",
    "SOCIAL MEDIA MANAGEMENT",
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
      title="React Component đơn giản" 
      subtitle="Tùy biến website của bạn với hỗ trợ từ AI trong tầm tay" 
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

      <div style={{
        height: '300vh', // Extra scroll space to allow for smooth reveal
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20vh 0', // Center content with padding at the top and bottom
        background: '#1e1e1e', // Dark background for contrast
      }}>
        <RevealTextOnScroll
          lines={lines}
          fontSize="5rem" // Larger font size for emphasis
          fontWeight="900" // Bolder font weight
          fontFamily="Darker Grotesque"
          color="#00ffd4"
          lineSpacing="1.5em"
          letterSpacing="0.1em"
          textTransform="uppercase"
          textAlign="center"
          dimColor="#777777" // Dimmed color for non-visible lines
          shineColor="#00ffd4" // Bright color for visible lines
        />
      </div>
    </div>
  );
};

export default App;
