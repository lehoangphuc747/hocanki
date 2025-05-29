
import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import TestimonialSlider from '@site/src/components/TestimonialSlider/TestimonialSlider';

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


// KHAI BÁO DỮ LIỆU CHO PHẦN CHỨNG THỰC TESTIMONIALS -----------------
const testimonials = [
  {
    text: "Salient has enhanced our user experience and allowed us to move faster than ever...",
    author: "Jack Graham",
    role: "Project Manager, Coffee Inc",
    image: "https://themenectar.com/salient/saas/wp-content/uploads/sites/40/2022/08/face.jpg",
  },
  {
    text: "We checked out Salient to see what all the hype was about and here we are a year later...",
    author: "Aura Brooks",
    role: "Marketing Director, Owl Eyes",
    image: "https://themenectar.com/salient/saas/wp-content/uploads/sites/40/2022/08/saas-face-2.jpeg",
  },
  {
    text: "Simply put, Salient is an excellent tool to accelerate growth and save time...",
    author: "Zak Reid",
    role: "CTO, Envato",
    image: "https://themenectar.com/salient/saas/wp-content/uploads/sites/40/2022/08/face-2-1.jpg",
  },
  {
    text: "The platform has transformed our workflow, boosting productivity beyond expectations!",
    author: "Emma Lee",
    role: "Product Owner, TechCorp",
    image: "https://themenectar.com/salient/saas/wp-content/uploads/sites/40/2022/08/saas-face-2.jpeg",
  },
  {
    text: "I’m thrilled with the way this tool works—it's a game-changer for our team.",
    author: "Liam Wilson",
    role: "Head of Operations, Innovate LLC",
    image: "https://themenectar.com/salient/saas/wp-content/uploads/sites/40/2022/08/face.jpg",
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
      title="Minh hoạ Testimonial Component" 
      subtitle="Hiển thị đánh giá từ khách hàng" 
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

    <TestimonialSlider
      title="Trusted by over 4,000 clients worldwide"
      testimonials={testimonials}
      textColor="#ffffff"
      activeBackgroundColor="#ff7043"
      inactiveBackgroundColor="#e0e0e0"
      arrowColor="#ff7043"
    />

    </div>
  );
};

export default App;
