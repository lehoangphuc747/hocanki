import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './basic-anki-workshop.module.css';

// Data for statistics
const statsData = [
  { target: 7, suffix: '', label: 'Năm kinh nghiệm' },
  { target: 100, suffix: '+', label: 'Người dùng hỗ trợ' },
  { target: 10, suffix: '+', label: 'Quốc gia & Ngôn ngữ' }
];

// Data for experience cards
const experienceCards = [
  {
    icon: 'fa-solid fa-globe',
    title: 'Đa quốc gia',
    description: 'Làm việc với các bạn Việt Nam từ khắp nơi trên thế giới: Mỹ, Úc, Nhật, Hàn và cả những nơi đặc biệt như Mông Cổ & Czech.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Đa ngôn ngữ', 
    description: 'Đã kinh qua: Anh, Hàn, Trung, Nhật, Mông Cổ, Czech... Trong đó, hỗ trợ học tiếng Nhật là trải nghiệm "quái thai" nhất.'
  },
  {
    icon: 'fa-solid fa-user-check',
    title: 'Kèm Anki 1-1',
    description: 'Hỗ trợ chuyên biệt, giúp một anh tạo thẻ PTE từ con số 0 để đi Úc, và kèm cặp nhiều bạn trong các ngành đặc thù.'
  }
];

// Data for timeline/roadmap
const timelineData = [
  {
    stage: 'Giai đoạn 1 (0-20\')',
    title: 'Khởi Động & Tư Duy Đúng',
    description: 'Cài đặt "nhanh-gọn-lười" và nhận Đặc quyền Add-on độc quyền.',
    icon: 'fa-solid fa-coffee'
  },
  {
    stage: 'Giai đoạn 2 (20-50\')',
    title: 'Thực Chiến Tạo Thẻ',
    description: 'Học tư duy tạo thẻ 80/20, áp dụng cho mọi ngành học.',
    icon: 'fa-solid fa-pencil-alt'
  },
  {
    stage: 'Giai đoạn 3 (50-80\')',
    title: 'Tự Động & Tối Ưu Hóa',
    description: 'Thêm âm thanh miễn phí và áp dụng cấu hình "mì ăn liền".',
    icon: 'fa-solid fa-rocket'
  },
  {
    stage: 'Giai đoạn 4 (80-90\')',
    title: 'Hỏi Đáp & Con Đường Phía Trước',
    description: 'Giải đáp mọi vướng mắc và mở ra lộ trình trở thành "Anki Master".',
    icon: 'fa-solid fa-unlock'
  }
];

// Data for advanced features
const advancedFeatures = [
  {
    icon: 'fa-solid fa-robot',
    title: 'Tạo thẻ hàng loạt với AI',
    description: 'Tự động hóa việc tạo hàng trăm thẻ nhớ từ tài liệu của bạn với AI & Google Sheets.',
    isWide: true
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Thiết kế mẫu thẻ bằng AI',
    description: 'Tạo ra những mẫu thẻ đẹp mắt mà không cần biết một dòng code.',
    isWide: false
  },
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Anki Portable',
    description: 'Học mọi lúc mọi nơi trên bất kỳ máy tính nào, không cần cài đặt.',
    isWide: false
  },
  {
    icon: 'fa-solid fa-link',
    title: 'Hệ thống hóa kiến thức',
    description: 'Kết hợp Obsidian + Anki để xây dựng hệ thống học tập sâu và cá nhân hóa.',
    isWide: true
  },
  {
    icon: 'fa-solid fa-ellipsis',
    title: 'Và còn nhiều hơn nữa...',
    description: '...còn nữa nhưng mà chưa nghĩ ra :)))',
    isWide: true,
    isSpecial: true
  }
];

// Counter animation hook
function useCounterAnimation(target, suffix = '', isVisible = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const speed = 200;
    const increment = Math.max(target / speed, 1);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 15);
    
    return () => clearInterval(timer);
  }, [target, isVisible]);
  
  return count + suffix;
}

// Intersection Observer hook
function useIntersectionObserver(threshold = 0.5) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, isVisible];
}

// StatCard component
function StatCard({ target, suffix, label }) {
  const [ref, isVisible] = useIntersectionObserver(0.5);
  const animatedCount = useCounterAnimation(target, suffix, isVisible);
  
  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.statNumber}>{animatedCount}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function BasicAnkiWorkshop() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title="Basic Anki Workshop"
      description="Workshop Anki cơ bản - Hướng dẫn dùng Anki hiệu quả nhất cho người mới bắt đầu">
      
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.hero}>
          <Heading as="h1" className={styles.heroTitle}>
            <i className={`fa-solid fa-brain ${styles.heroIcon}`}></i> <span className={styles.gradientText}>Workshop Anki</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            Hướng dẫn dùng Anki cơ bản và hiệu quả nhất cho người mới bắt đầu. 
            Làm quen nhanh, tiết kiệm thời gian.
          </p>
          <Link to="#dang-ky" className={styles.btnPrimary}>
            Đăng ký giữ chỗ ngay
          </Link>
        </header>

        {/* About Section */}
        <section id="ve-minh" className={styles.section}>
          <div className={styles.textCenter}>
            <Heading as="h2" className={styles.sectionTitle}>Về mình</Heading>
            <p className={styles.sectionDescription}>
              Một người có <strong className={styles.highlightText}>7 năm</strong> "ăn nằm" với Anki, 
              với một niềm tin rằng bất kỳ kiến thức nào cũng có thể được chinh phục nếu có phương pháp đúng.
            </p>
          </div>
          
          {/* Stats */}
          <div className={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Experience Cards */}
          <div className={styles.textCenter}>
            <Heading as="h3" className={styles.subsectionTitle}>
              Những câu chuyện và trải nghiệm nổi bật
            </Heading>
            <div className={styles.experienceGrid}>
              {experienceCards.map((card, index) => (
                <div key={index} className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}><i className={card.icon}></i></span>
                    <h4 className={styles.cardTitle}>{card.title}</h4>
                  </div>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="noi-dung" className={styles.section}>
          <div className={styles.textCenter}>
            <Heading as="h2" className={styles.sectionTitle}>
              🚀 Lộ trình Chinh phục Anki
            </Heading>
            <p className={styles.sectionDescription}>
              Hành trình 90 phút được thiết kế để bạn làm chủ Anki, 
              tiết kiệm hàng giờ mày mò và tập trung phát triển bản thân.
            </p>
          </div>
          
          <div className={styles.timelineWrapper}>
            {timelineData.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <span className={styles.timelineIcon}><i className={item.icon}></i></span>
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineStage}>{item.stage}</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>
                    {item.description}
                    {item.stage.includes('1') && (
                      <span className={styles.specialBadge}>Đặc quyền</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Section */}
        <section id="dang-ky" className={styles.section}>
          <div className={styles.registrationWrapper}>
            <div className={styles.registrationInfo}>
              <Heading as="h2" className={styles.sectionTitle}>
                ℹ️ Thông tin Workshop
              </Heading>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><i className="fa-solid fa-calendar-days"></i></span>
                  <span><strong>Thời gian:</strong> 19:30, Chủ Nhật hàng tuần</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><i className="fa-solid fa-clock"></i></span>
                  <span><strong>Thời lượng:</strong> ~90 phút</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><i className="fa-solid fa-laptop"></i></span>
                  <span><strong>Hình thức:</strong> Online (Link sẽ được gửi sau khi đăng ký)</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><i className="fa-solid fa-tag"></i></span>
                  <span><strong>Phí tham gia:</strong> <span className={styles.priceTag}>89.000 VNĐ</span></span>
                </div>
              </div>
            </div>
            
            <div className={styles.registrationCard}>
              <Heading as="h3" className={styles.cardTitle}>Cách đăng ký</Heading>
              <p className={styles.cardDescription}>
                Truy cập link đăng ký hoặc nhắn tin trực tiếp cho mình để được hỗ trợ nhanh nhất!
              </p>
              <Link to="#" className={styles.btnPrimary + ' ' + styles.fullWidth}>
                Lấy Link Đăng Ký
              </Link>
              <p className={styles.footnote}>
                (Nhấn vào đây để chuyển đến trang đăng ký)
              </p>
            </div>
          </div>
        </section>

        {/* Advanced Section */}
        <section id="nang-cao" className={styles.advancedSection}>
          <div className={styles.textCenter}>
            <Heading as="h2" className={styles.advancedTitle}>
              🔓 Mở khóa Siêu năng lực Anki
            </Heading>
            <p className={styles.advancedDescription}>
              Những chủ đề nâng cao sắp tới, giúp bạn biến Anki thành cỗ máy học tập tối thượng.
            </p>
          </div>
          
          <div className={styles.advancedGrid}>
            {advancedFeatures.map((feature, index) => (
              <div key={index} className={`${styles.advancedCard} ${feature.isWide ? styles.advancedCardWide : ''} ${feature.isSpecial ? styles.advancedCardSpecial : ''}`}>
                <div className={styles.advancedCardIcon}><i className={feature.icon}></i></div>
                <div className={styles.advancedCardContent}>
                  <h3 className={styles.advancedCardTitle}>{feature.title}</h3>
                  <p className={styles.advancedCardDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <Heading as="h3" className={styles.footerTitle}>
            <span className={styles.gradientText}>Hẹn gặp bạn vào tối Chủ Nhật!</span>
          </Heading>
          <p className={styles.footerText}>
            Có thắc mắc? Nhắn trực tiếp hoặc comment để mình hỗ trợ nhé!
          </p>
          <p className={styles.footerNote}>
            (Đăng ký sớm để giữ chỗ)
          </p>
        </footer>
      </div>
    </Layout>
  );
}
