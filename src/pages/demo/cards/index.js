
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import DynamicCards from '@site/src/components/DynamicCards/DynamicCards';

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


// KHAI BÁO DỮ LIỆU CHO CÁC THẺ - DYNAMIC CARS
// Tìm các tên icon thay thế vào mục fontAwesomeIcon từ tập hợp icon miễn phí: https://fontawesome.com/search?q=chart-line&o=r
const cardsData = [
    {
      title: 'Về chúng tôi',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Trang giới thiệu cá nhân, công ty.',
      icon: '/img/alert.png', // Fallback image
      fontAwesomeIcon: 'microphone', // Font Awesome icon name (without 'fa-')
      linkText: 'Xem thêm',
      linkUrl: '/demo/about',
    },
    {
      title: 'Sản phẩm nổi bật',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Minh hoạ FeaturedProduct component cho các sản phẩm nổi bật.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'boxes-stacked',
      linkText: 'Xem thêm',
      linkUrl: '/demo/featured-products',
    },
    {
      title: 'Trình chiếu ảnh',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Slider component cho phép hiển thị ảnh và tự động chuyển trang.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'sliders',
      linkText: 'Xem thêm',
      linkUrl: '/demo/slider',
    },
    {
      title: 'Thư viện ảnh',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Chia sẻ những câu chuyện thú vị qua ảnh kèm bố cục đẹp mắt.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'image',
      linkText: 'Xem thêm',
      linkUrl: '/demo/image-gallery',
    },
    {
      title: 'Bảng giá',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Pricing Table - Trình bày bảng giá sản phẩm/dịch vụ. Lấy cảm hứng từ Salient SaaS theme.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'dollar-sign',
      linkText: 'Xem thêm',
      linkUrl: '/demo/pricing',
    },
    {
      title: 'Chứng thực',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Testimonial - Chia sẻ đánh giá từ khách hàng. Lấy cảm hứng từ Salient SaaS theme.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'quote-left',
      linkText: 'Xem thêm',
      linkUrl: '/demo/testimonial',
    },
    {
      title: 'FAQ & CTA',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Giải đáp các câu hỏi thường gặp về sản phẩm/dịch vụ của bạn cùng lời kêu gọi hành động.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'question',
      linkText: 'Xem thêm',
      linkUrl: '/demo/faq',
    },
    {
      title: 'Đăng ký bản tin',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Hộp kêu gọi đăng ký bản tin Substack chèn trong trang markdown.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'envelope',
      linkText: 'Xem thêm',
      linkUrl: '/markdown/page-with-subscribe-box',
    },
    {
      title: 'Component trong Markdown',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Chèn component FAQ vào một trang markdown kể cả tài liệu hay blog.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'location-pin',
      linkText: 'Xem thêm',
      linkUrl: '/markdown/page-with-faq',
    },
    {
        title: 'Popup ảnh trong Markdown',
        tag: '',
        tagStyle: 'primaryTag',
        body: 'Hiển thị ảnh trong cửa sổ popup kèm caption minh hoạ trong file markdown phù hợp cho tài liệu, blog.',
        icon: '/img/bear.png',
        fontAwesomeIcon: 'magnifying-glass-plus',
        linkText: 'Xem thêm',
        linkUrl: '/markdown/image-popup',
    },
    {
        title: 'Nhúng Video, PDF, Notebook trong Markdown',
        tag: '',
        tagStyle: 'primaryTag',
        body: 'Hiển thị video youtube, file PDF, Jupyter Notebook python trong trang markdown.',
        icon: '/img/bear.png',
        fontAwesomeIcon: 'video',
        linkText: 'Xem thêm',
        linkUrl: '/markdown/media-embeded',
    },
    {
      title: 'Biểu diễn đồ thị với Echarts',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Minh hoạ component vẽ đồ thị chuyên nghiệp với thư viện Echarts miễn phí.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'chart-simple',
      linkText: 'Xem thêm',
      linkUrl: '/charts/bar-annotation',
    },
    {
      title: 'Cuộn chữ & đổi màu',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Đổi màu chữ khi cuộn lăn chuột trong màn hình.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'piggy-bank',
      linkText: 'Xem thêm',
      linkUrl: '/demo/text-reveal',
    },
    {
      title: 'Nguồn cảm hứng',
      tag: '',
      tagStyle: 'primaryTag',
      body: 'Một số nguồn truyền cảm hứng để tham khảo giao diện.',
      icon: '/img/bear.png',
      fontAwesomeIcon: 'gem',
      linkText: 'Xem thêm',
      linkUrl: '/docs/demo/',
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
      title="Thư viện minh hoạ các component mẫu" 
      subtitle="Bắt đầu với mẫu sẵn để có cảm hứng sáng tạo" 
      backgroundImage="https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      buttonText="Khám phá"
      contentWidth="60%"
      contentPosition="center"
      titleColor="#ffffff"
      subtitleColor="#f0f0f0"
      buttonColor="#ffffff"
      navColor="#ffffff"
      />

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Truy cập thư mục src/components/ để xem mã nguồn từng component. Xem ví dụ các trang minh họa tại src/pages.</p>
      </div>

      <DynamicCards
        title="Xem nhanh các mẫu component có sẵn" 
        cards={cardsData} 
        columns={3}  // Number of columns for larger screens
        heightPercentage={80}  // Dynamic height percentage
        titleColor=""
        cardTitleColor=""
        cardTextColor=""
        cardTagColor="#ffffff"
        cardTagBgColor="#FF5722"
        backgroundColor=""
        useFontAwesome={true}
    />

    </div>
  );
};

export default App;
