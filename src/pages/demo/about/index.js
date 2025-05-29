import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader';
import PureHero from '@site/src/components/PureHero/PureHero';
import TwoColumnSection from '@site/src/components/TwoColumnSection/TwoColumnSection'

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
                title="Học Hỏi Không Giới Hạn" 
                subtitle="Khơi dậy sự tò mò trong bạn, đắm chìm trong chân trời kiến thức mới thú vị." 
                backgroundImage="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                buttonText="Khám phá"
                buttonLink="#" /* Thay link vào đây */
                contentWidth="60%"
                contentPosition="center"
                titleColor="#ffffff"
                subtitleColor="#f0f0f0"
                buttonColor="#ffffff"
                navColor="#ffffff"
                />

            {/* Bố cục 2 cột | Ảnh và nội dung với tỉ lệ bằng nhau */}
            <TwoColumnSection
              title = "Câu Chuyện Của Chúng Tôi"
              description = "Learn Anything luôn khuyến khích bạn giống như nước – không ngừng tìm kiếm, thay đổi và thích nghi với những thử thách mới. Đối với chúng tôi, học tập là con đường rộng mở và mang tính cá nhân cao, nơi bạn không ngừng hoàn thiện bản thân mỗi ngày. Bạn có thể phá bỏ những giới hạn của chính mình trong một cộng đồng đầy cảm hứng và năng động. Đây là nơi bạn không chỉ học để biết, mà còn học để tìm thấy phiên bản linh hoạt, mạnh mẽ và không ngừng thay đổi của chính mình."
              buttonText = "Kết nối"
              buttonLink = "#" // Thay link thực tế vào đây
              titleColor = "#000000"
              descriptionColor = "#333333"
              buttonColor = "#000000"
              imageSrc = "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imageAlt = "Placeholder Image"
              imagePosition = "right"
              columnRatio = '1.5' // Tỉ lệ bề rộng phần chữ so với hình ảnh
            />

            <TwoColumnSection
              title = "Khơi Nguồn Cảm Hứng"
              description = "Tại Learn Anything, chúng tôi không chỉ tạo ra một nền tảng học tập – mà còn mở ra một hành trình để bạn khám phá, trải nghiệm và không ngừng biến đổi. Hành trình đó dành cho những ai đam mê học hỏi, muốn thử nghiệm, và sẵn sàng thích nghi với những thay đổi trong cuộc sống. Giống như nước, mỗi người đều có khả năng linh hoạt và tiềm năng vô hạn để phát triển theo nhiều hình thái khác nhau. Đây là nơi bạn có thể nuôi dưỡng trí tò mò và khám phá sức mạnh tiềm ẩn của chính mình."
              buttonText = "Tìm hiểu"
              buttonLink = "#" // Thay link thực tế vào đây
              titleColor = "#000000"
              descriptionColor = "#333333"
              buttonColor = "#000000"
              imageSrc = "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imageAlt = "Placeholder Image"
              imagePosition = "left"
              columnRatio = '1.5' // Tỉ lệ bề rộng phần chữ so với hình ảnh
            />
            
        </div>
    );
};

export default App;