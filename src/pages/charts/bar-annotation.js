import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import BarAnnotation from '@site/src/components/Echarts/BarAnnotation';

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

  // Bắt đầu Chart Data

  const xAxisData = [
    '3/1/2022', '4/1/2022', '5/1/2022', '6/1/2022', '7/1/2022',
    '8/1/2022', '9/1/2022', '10/1/2022', '11/1/2022', '12/1/2022',
    '1/1/2023', '2/1/2023', '3/1/2023', '4/1/2023', '5/1/2023',
    '6/1/2023', '7/1/2023', '8/1/2023', '9/1/2023', '10/1/2023',
    '11/1/2023', '12/1/2023', '1/1/2024', '2/1/2024', '3/31/2024', '4/30/2024', '5/31/2024', '6/30/2024', '7/31/2024', '8/31/2024', '9/30/2024', '10/31/2024', '11/27/2024'
  ];

  const seriesData = [
    821, 2786, 1139, 657, 451, 419, 563, 894, 1130, 1319, 1150, 
    1951, 4332, 3990, 1613, 1762, 3036, 2885, 2816, 5266, 5587, 
    11354, 15419, 11202, 20946, 19989, 23244, 16275, 18772, 18502, 19460, 29119, 19607  
  ];

  const annotations = [
    { name: 'Phát hành qua PyPI', coord: ['3/1/2022', 5100], value: 'Phát hành', label: { position: 'top' } },
    { name: 'Giới thiệu Vnstock qua blog thinhvu.com', coord: ['9/1/2022', 3100], value: 'Blog', label: { position: 'top' } },
    { name: 'Sửa lỗi API từ SSI không thể hoạt động', coord: ['3/1/2023', 7300], value: 'Nâng cấp', label: { position: 'top' } },
    { name: 'Thiết lập cộng đồng Facebook & Discord', coord: ['4/1/2023', 6100], value: 'Cộng đồng', label: { position: 'top' } },
    { name: 'Cung cấp tài liệu bản tiếng Việt', coord: ['6/1/2023', 5100], value: 'Tài liệu', label: { position: 'top' } },
    { name: 'Ra mắt website Vnstock', coord: ['10/1/2023', 7800], value: 'Website', label: { position: 'top' } },
    { name: 'Phát hành Vnstock3', coord: ['5/29/2024', 23700], value: 'Phiên bản mới', label: { position: 'top' } },
    { name: '+Gemini AI', coord: ['10/31/2024', 31500], value: 'Tích hợp Gemini AI vào Vnstock3', label: { position: 'top' } },
  ];

  // Kết thúc Chart Data

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
      title="Minh hoạ Echarts" 
      subtitle="Biểu diễn dữ liệu trực quan trên Web" 
      backgroundImage="https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      buttonText="Khám phá"
      buttonLink="#" /* Thay link vào đây */
      contentWidth="60%"
      contentPosition="center"
      titleColor="#ffffff"
      subtitleColor="#f0f0f0"
      buttonColor="#ffffff"
      navColor="#ffffff"
    />

    <BarAnnotation
      title="Thống kê lượt Download thư viện Vnstock"
      sectionTitle="Lượt tải về của Vnstock qua thời gian"
      xAxisData={xAxisData}
      seriesData={seriesData}
      annotations={annotations}
      annotSymbol = 'triangle'
      annotSymbolSize={15}
      annotSymbolColor='blue'
      annotSymbolRot={180}
      showYAxis={false}
      showDataLabels={true}
      figsize={{ width: '80%', height: '700px' }} // Chart width less than 100%
      barWidth={20} // Fixed bar width
      centerChart={true} // Center the chart container
      fontFamily="Lexend" // Use Lexend font
      titleSpacing={30}
    />

    </div>
  );
};

export default App;
