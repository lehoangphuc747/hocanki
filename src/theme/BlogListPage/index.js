import React, { useState } from 'react';
import Layout from '@theme/Layout';
import BlogCard from '../BlogCard';
import BlogHeader from '../BlogHeader';
import styles from './styles.module.css';

function BlogListPage({ items }) {
  // ===== PHẦN 1: QUẢN LÝ TRẠNG THÁI CỦA TRANG =====
  // Các bộ lọc hiện tại được chọn
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  // Quản lý phân trang
  const [postsPerPage, setPostsPerPage] = useState(6); // Số bài viết trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại

  // ===== PHẦN 2: XỬ LÝ DỮ LIỆU VÀ TẠO DANH SÁCH BỘ LỌC =====
  // Chuẩn hóa dữ liệu danh mục từ các bài viết
  const standardizedCategories = items.map(({ content: { frontMatter } }) =>
    (frontMatter.category || "Chưa phân loại").toLowerCase()
  );

  // Tạo danh sách duy nhất cho các bộ lọc (loại bỏ trùng lặp)
  const categories = [
    "Tất cả",
    ...new Set(
      standardizedCategories.map(
        (category) => category.charAt(0).toUpperCase() + category.slice(1)
      )
    ),
  ];

  // ===== PHẦN 3: LỌC DỮ LIỆU THEO BỘ LỌC ĐƯỢC CHỌN =====
  const filteredItems = items.filter(({ content: { frontMatter } }) => {
    // Chỉ hiển thị bài viết đã được xuất bản
    const publish = frontMatter.publish;
    if (publish === false) return false;

    // Lấy thông tin danh mục của bài viết
    const itemCategory = (
      frontMatter.category || "Chưa phân loại"
    ).toLowerCase();

    // Kiểm tra xem bài viết có khớp với bộ lọc không
    const matchesCategory =
      activeCategory === "Tất cả" ||
      itemCategory === activeCategory.toLowerCase();

    return matchesCategory;
  });

  // ===== PHẦN 4: XỬ LÝ PHÂN TRANG =====
  // Tính toán số trang và cắt dữ liệu theo trang hiện tại
  const totalPages = Math.ceil(filteredItems.length / postsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  };

  // ===== PHẦN 5: GIAO DIỆN NGƯỜI DÙNG =====
  return (
    <Layout title="Blog" description="Các bài viết mới nhất">
      {/* HEADER TRANG BLOG */}
      <BlogHeader />

      {/* BỘ LỌC CƠ BẢN - DANH MỤC */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <h4 className={styles.filterTitle}>Danh mục</h4>
          <div className={styles.filterOptions}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${
                  activeCategory === category ? styles.activeButton : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HIỂN THỊ DANH SÁCH BÀI VIẾT */}
      <div className={styles.blogGrid}>
        {paginatedItems.map(({ content: BlogPostContent }) => {
          const { frontMatter = {}, metadata = {} } = BlogPostContent;
          return (
            <BlogCard
              key={metadata.permalink}
              image={frontMatter.image || "/default-image.jpg"}
              title={frontMatter.title || "No Title"}
              description={
                frontMatter.description || "No description available."
              }
              date={new Date(metadata.date || Date.now()).toLocaleDateString(
                "vi-VN"
              )}
              category={frontMatter.category || "Uncategorized"}
              readingTime={metadata.readingTime}
              link={metadata.permalink}
            />
          );
        })}
      </div>

      {/* ĐIỀU KHIỂN PHÂN TRANG */}
      <div className={styles.pagination}>
        {/* Chọn số bài viết hiển thị trên mỗi trang */}
        <div className={styles.paginationOptions}>
          <label htmlFor="postsPerPage">Hiển thị: </label>
          <select
            id="postsPerPage"
            value={postsPerPage}
            onChange={(e) => {
              setPostsPerPage(Number(e.target.value));
              setCurrentPage(1); // Về trang đầu khi thay đổi số bài viết
            }}
          >
            {[6, 12, 24, 36, 48].map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>

        {/* Các nút chuyển trang */}
        <div className={styles.paginationLinks}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`${styles.pageLink} ${
                currentPage === i + 1 ? styles.activePage : ""
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className={styles.pageLink}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Trang tiếp theo
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
