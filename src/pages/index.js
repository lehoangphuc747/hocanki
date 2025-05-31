import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Dữ liệu cho lộ trình
const roadmapItemsData = [
  { title: "I. Dẫn nhập: Tại sao Anki?" },
  { title: "II. Anki cơ bản: Những bước đầu tiên" },
  { title: "III. Anki nâng cao: Khai phá tiềm năng" },
  { title: "IV. Tips & Tricks: Học Anki thông minh" },
  { title: "V. Xử lý lỗi thường gặp" },
  { title: "VI. Add-ons hữu ích nhất" },
  { title: "VII. Bộ thẻ mẫu tham khảo" },
];

// Dữ liệu cho cảm nhận học viên
const testimonialsData = [
  {
    quote: "Khóa học rất chi tiết và dễ hiểu. Trước đây mình khá loay hoay với Anki, giờ thì tự tin hơn nhiều rồi. Cảm ơn bạn!",
    author: "- Trần Minh Anh",
  },
  {
    quote: "Là sinh viên Y, Anki thực sự là cứu cánh. Khóa học này giúp mình hệ thống hóa cách dùng Anki hiệu quả hơn hẳn. Rất khuyến khích!",
    author: "- Lê Hoàng Bảo",
  },
  {
    quote: "Nội dung thực tế, hỗ trợ nhiệt tình. Mình đã áp dụng được ngay vào việc học ngoại ngữ và thấy tiến bộ rõ rệt.",
    author: "- Nguyễn Thu Hà",
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.container}>
        <Heading as="h1" className={styles.heroTitle}>
          THÔI HỌC VẸT VÀ LÀM CHỦ ANKI
        </Heading>
        <p className={styles.heroSubtitle}>
          Khám phá <strong className={styles.highlightPink}>Lộ trình</strong> được thiết kế riêng, <strong className={styles.highlightPink}>Quyền lợi</strong> đặc biệt, và <strong className={styles.highlightPink}>Chi phí</strong> hợp lý. Học Anki hiệu quả, không còn mơ hồ.
        </p>
        <div className={styles.heroButtonsContainer}>
          <Link to="/docs/intro" className={clsx('btn', styles.btnCtaTertiary)}>
            <span className={styles.emojiIcon} role="img" aria-label="Rocket">🚀</span>
            HỌC NGAY
          </Link>
          <div className={styles.heroButtonsBottomRow}>
            <Link to="#dang-ky-final" className={clsx('btn', styles.btnCtaPrimary)}>
              <span className={styles.emojiIcon} role="img" aria-label="Mouse Pointer">🖱️</span>
              ĐĂNG KÝ
            </Link>
            <Link to="#lo-trinh" className={clsx('btn', styles.btnCtaSecondary)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5.75A.75.75 0 013.75 5h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.75zm0 4A.75.75 0 013.75 9h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4A.75.75 0 013.75 13h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 13.75z" clipRule="evenodd" />
              </svg>
              LỘ TRÌNH
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className={styles.accordionItem}>
      <button
        className={clsx(styles.accordionButton, { [styles.active]: isOpen })}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg className={clsx(styles.iconIndicator, { [styles.rotated]: isOpen })} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div className={clsx(styles.accordionContent, { [styles.open]: isOpen })} style={{ maxHeight: isOpen ? '50px' : null }}>
        {/* Nội dung mô tả có thể thêm vào đây nếu cần */}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  // Dữ liệu slot ví dụ
  const registeredSlots = 2;
  const totalSlots = 10;
  let slotStatusText = `Đã đăng ký: ${registeredSlots}/${totalSlots} slot ưu đãi`;
  if (registeredSlots >= totalSlots) {
    slotStatusText = "Đã hết slot ưu đãi!";
  }

  return (
    <Layout
      title={`Trang chủ ${siteConfig.title}`}
      description="Khóa học Anki toàn diện giúp bạn ghi nhớ mọi thứ, từ cơ bản đến nâng cao, với phương pháp học tập hiệu quả và bền vững.">
      <HomepageHeader />
      <main>
        <section className={clsx('slide-section', styles.experienceImpactSlide)}>
          <div className={styles.container}>
            <h2 className={styles.textCenter}>Kinh Nghiệm và Uy Tín Đã Được Chứng Minh</h2>
            <div className={styles.experienceGrid}>
              <div className={styles.experienceItem}>
                <div className={styles.number}>7+</div>
                <div className={styles.label}>Năm sử dụng Anki</div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.number}>3+</div>
                <div className={styles.label}>Năm kinh nghiệm<br/>đào tạo Anki</div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.number}>100+</div>
                <div className={styles.label}>Học viên đã đào tạo</div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx('slide-section', styles.motivationCtaSection)}>
          <div className={styles.container}>
            <h2>SẴN SÀNG TỐI ƯU HÓA VIỆC HỌC?</h2>
            <p className={styles.subtitle}>Đừng để kiến thức trôi đi. Hãy đầu tư vào kỹ năng học tập hiệu quả với Anki ngay hôm nay!</p>
            <Link to="#dang-ky-final" className={clsx('btn', styles.motivationBtn)}>ĐĂNG KÝ NGAY</Link>
          </div>
        </section>

        <section id="thong-tin-vang" className={clsx('slide-section', styles.whyThisCourseSlide)}>
          <div className={styles.container}>
            <h2 className={styles.textCenter}>VÌ SAO NÊN CHỌN KHÓA HỌC NÀY?</h2>
            <p className={clsx(styles.textCenter, styles.introText)}>
              Khóa học này không chỉ dạy bạn cách dùng Anki, mà còn giúp bạn xây dựng một hệ thống học tập hiệu quả và bền vững.
            </p>
            <div className={styles.benefitGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.icon}>🎯</div>
                <h3>Tập Trung Thực Chiến</h3>
                <ul>
                  <li>Học từ cách sử dụng Anki chuyên nghiệp đến tự tạo thẻ chất lượng.</li>
                  <li>Quản lý kiến thức có hệ thống (kết hợp Obsidian để có cái nhìn tổng quan).</li>
                  <li>Khóa học tập trung vào việc bạn thực hành và LÀM ĐƯỢC.</li>
                </ul>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.icon}>💡</div>
                <h3>Tư Duy Hiện Đại</h3>
                <ul>
                  <li>Không chỉ là công cụ, mà là phương pháp học tập tiên tiến.</li>
                  <li>Hiểu rõ khoa học thần kinh đằng sau việc ghi nhớ hiệu quả.</li>
                  <li>Xây dựng thói quen học tập chủ động và bền vững.</li>
                </ul>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.icon}>🎨</div>
                <h3>THIẾT KẾ MẪU THẺ CHUYÊN SÂU</h3>
                <ul>
                  <li>Thiết kế mẫu thẻ (templates) đẹp mắt, tối ưu cho việc học, bao gồm cả tùy chỉnh giao diện bằng AI mà không cần biết code.</li>
                  <li>Thiết kế card type phù hợp cho từng loại kiến thức (vd: y khoa, ngoại ngữ).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className={clsx('slide-section', styles.supportSlide)}>
          <div className={styles.container}>
            <h2 className={styles.textCenter}>HỖ TRỢ TẬN TÌNH, ĐỒNG HÀNH CÙNG BẠN</h2>
            <div className={styles.supportItem}>
              <h3>Thiết Kế Mẫu Thẻ Cá Nhân Hóa</h3>
              <p>Hỗ trợ thiết kế Mẫu thẻ (Card Template) theo nhu cầu và môn học riêng của bạn.</p>
            </div>
            <div className={styles.supportItem}>
              <h3>Kèm 1-1 Không Giới Hạn</h3>
              <p>Mọi thắc mắc đều được giải đáp chi tiết. Không giới hạn số buổi hỗ trợ, học đến khi bạn tự tin.</p>
            </div>
            <div className={styles.supportItem}>
              <h3>Cập Nhật Trọn Đời</h3>
              <p>Nội dung khóa học được cập nhật thường xuyên và bạn được truy cập trọn đời mà không phát sinh chi phí.</p>
            </div>
            <div className={styles.supportItem}>
              <h3>Cộng Đồng Học Viên</h3>
              <p>Tham gia cộng đồng để trao đổi, học hỏi kinh nghiệm từ những người cùng mục tiêu.</p>
            </div>
          </div>
        </section>

        <section id="lo-trinh" className={clsx('slide-section', styles.roadmapSlide)}>
          <div className={styles.container}>
            <h2 className={styles.textCenter}>Lộ Trình Học Chi Tiết Từ A Đến Z</h2>
            <p className={clsx(styles.textCenter, styles.introText)}>Đây là các phần chính của khóa học, giúp bạn đi từ làm quen đến làm chủ Anki:</p>
            <div className={styles.accordionContainer}>
              {roadmapItemsData.map((item, index) => (
                <AccordionItem 
                  key={index}
                  title={item.title}
                  isOpen={openAccordionIndex === index}
                  onClick={() => handleAccordionClick(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={clsx('slide-section', styles.testimonialsSlide)}>
          <div className={styles.container}>
            <h2 className={styles.textCenter}>HƠN 100 HỌC VIÊN ĐÃ TIN TƯỞNG</h2>
            <p className={clsx(styles.textCenter, styles.sectionSubtitle)}>Và đây là một vài cảm nhận:</p>
            <div className={styles.testimonialGrid}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <p>"{testimonial.quote}"</p>
                  <p className={styles.author}>{testimonial.author}</p>
                </div>
              ))}
            </div>
            <div className={styles.moreReviewsLinkContainer}>
              <Link to="/reviews-chi-tiet" className={clsx('btn', styles.btnOutlinePrimary)}>Xem thêm các đánh giá khác</Link>
            </div>
          </div>
        </section>

        <section id="dang-ky-final" className={clsx('slide-section', styles.registrationSection)}>
          <div className={styles.container}>
            <div className={styles.registrationContentWrapper}>
              <h2 className={styles.sectionTitle}>💸 ĐẦU TƯ CHO TƯƠNG LAI CỦA BẠN 💸</h2>
              
              {/* Pricing Information */}
              <div className={styles.pricingInfo}>
                <div className={styles.originalPrice}>Giá gốc: <span className={styles.strikethrough}>1.299.000 VNĐ</span></div>
                <div className={styles.currentPrice}>769.000 <span className={styles.currency}>VNĐ</span></div>
                <div className={styles.savingsHighlight}>Tiết kiệm 530.000 VNĐ!</div>
                <div className={styles.specialOffer}>(Ưu đãi đặc biệt cho 10 slot đăng ký đầu tiên)</div>
              </div>

              {/* Slot Information */}
              <div className={styles.slotInfo}>
                <div className={styles.slotItem}>10 slot tiếp theo: <span className={styles.nextPrice}>869.000 VNĐ</span></div>
                <div className={styles.slotItem}>Giá sau đó: <span className={styles.finalPrice}>999.000 VNĐ</span></div>
              </div>
              
              <div className={styles.slotTracker}>
                <div className={styles.slotTrackerTitle}>Tình trạng slot ưu đãi:</div>
                <div className={styles.slotTrackerStatus}>{slotStatusText}</div>
              </div>
              
              <Link to="https://forms.gle/your-google-form-link" className={clsx('btn', styles.btnActionPink)}>
                <span className={styles.emojiIcon} role="img" aria-label="Money Bag">💰</span>
                ĐĂNG KÝ NGAY
              </Link>

              {/* Quote from instructor */}
              <div className={styles.instructorQuote}>
                <p>"Mình điều chỉnh giá vì muốn dành nhiều thời gian hơn để đảm bảo chất lượng kèm cặp tốt nhất cho mỗi học viên. Đây cũng là cách để bạn thực sự cân nhắc đầu tư cho việc tiết kiệm thời gian học tập lâu dài."</p>
              </div>

              {/* <p className={styles.registrationFootnote}>* Đảm bảo hoàn tiền 100% nếu bạn không hài lòng trong 30 ngày đầu tiên.</p> */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
