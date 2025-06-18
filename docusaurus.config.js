// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Awesome Docusaurus',
  tagline: 'Dinosaurs thật tuyệt vời!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lehoangphuc747.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hocanki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lehoangphuc747', // Tên người dùng GitHub của bạn
  projectName: 'hocanki',          // Tên repository của bạn
  deploymentBranch: 'gh-pages',    // Nhánh mà Docusaurus sẽ deploy lên
  trailingSlash: false,            // Nên thêm để tránh lỗi và vấn đề SEO

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [require.resolve('docusaurus-lunr-search')],

  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lehoangphuc747/hocanki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lehoangphuc747/hocanki/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // announcementBar: {
      //   id: 'announcementBar-v3.2', // Increment on change
      //   content: `🎉️ <b>Khai giảng khoá học Python chứng khoán K9 từ 8/12/2024 <a target="_blank" href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan/"></a></b>. Đăng ký ngay! 🥳️`,
      // },

      // If you want to remove the banner completely, just comment out or remove this section
      // announcementBar: {
      //   id: 'image_banner',
      //   content:
      //     '<a href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan"><img src="https://vnstocks.com/img/python_chung_khoan_banner.png" alt="Banner" class="announcement-bar-image" /></a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },


      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Awesome Docusaurus',
        logo: {
          alt: 'Awesome Docusaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/workshop/basic-anki-workshop',
            position: 'left',
            label: 'Basic Anki Workshop',
            activeBaseRegex: `/workshop/basic-anki-workshop`,
          },
          // { // Ẩn mục Hướng dẫn
          //   to: '/docs/intro',
          //   position: 'left',
          //   label: 'Hướng dẫn',
          //   activeBaseRegex: `/docs/intro`,
          // },
          // { // Ẩn mục Blog
          //   to: '/blog', 
          //   label: 'Blog', 
          //   position: 'left',
          //   activeBaseRegex: `/blog`,
          // },
          // { // Ẩn mục Thư viện mẫu
          //   label: 'Thư viện mẫu',
          //   position: 'left',
          //   activeBaseRegex: `/thu-vien-mau`,
          //   items: [
          //     {
          //       to: '/demo/cards', 
          //       label: 'Demo - Tất cả', 
          //     },
          //     {
          //       to: '/demo/about', 
          //       label: 'Demo - Về chúng tôi', 
          //     },
          //     {
          //       to: '/demo/featured-products', 
          //       label: 'Demo - Sản phẩm nổi bật + CTA', 
          //     },
          //     {
          //       to: '/demo/faq', 
          //       label: 'Demo - CTA & FAQ', 
          //     },
          //     {
          //       to: '/markdown/page-with-subscribe-box', 
          //       label: 'Demo - Đăng ký bản tin', 
          //     },
          //     {
          //       to: '/markdown/image-popup', 
          //       label: 'Demo - Popup ảnh', 
          //     },
          //     {
          //       to: '/markdown/media-embeded', 
          //       label: 'Demo - Nhúng Video, PDF, Notebook', 
          //     },
          //     {
          //       to: '/demo/slider', 
          //       label: 'Demo - Slider trình chiếu', 
          //     },
          //     {
          //       to: '/demo/image-gallery', 
          //       label: 'Demo - Thư viện ảnh', 
          //     },
          //     {
          //     to: '/demo/testimonial', 
          //     label: 'Demo - Testimonial - Chứng thực', 
          //     },
          //     {
          //       to: '/markdown/page-with-subscribe-box', 
          //       label: 'Trang Markdown & Subscribe', 
          //     },
          //     {
          //       to: '/markdown/page-with-faq', 
          //       label: 'Trang Markdown & FAQ', 
          //     },
          //     {
          //       to: '/demo/text-reveal', 
          //       label: 'Demo - Cuộn chữ', 
          //     },
          //     {
          //       to: '/demo/cards', 
          //       label: 'Nguồn cảm hứng', 
          //     },
          //   ],
          // },
          {
            href: 'https://www.facebook.com/tui.la.phuc747/',
            position: 'right',
            className: 'header-facebook-link navbar-icon',
            'aria-label': 'Facebook',
          },
          {
            href: 'https://m.me/tui.la.phuc747',
            position: 'right',
            className: 'header-messenger-link navbar-icon',
            'aria-label': 'Messenger',
          },
          {
            href: 'https://www.youtube.com/@ankivn',
            position: 'right',
            className: 'header-youtube-link navbar-icon',
            'aria-label': 'YouTube',
          },
        ],
      },
      footer: {
        style: 'light', // Đổi từ 'dark' sang 'light' để có nền sáng
        copyright: `From Anki Việt Nam with love ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
