# Cài đặt Social Icon link vào thanh điều hướng

## Cài thư viện

Cài đặt gói thư viện fontawesome với câu lệnh dưới đây.

```
npm install --save @fortawesome/fontawesome-free
```

## Sửa docusaurus.config.js

```js docusaurus.config.js

      navbar: {
        items: [
        // highlight-start
          {
            href: 'https://www.facebook.com/tui.la.phuc747/',
            position: 'right',
            className: 'navbar-icon fab fa-facebook',
            'aria-label': 'Facebook',
          },
          {
            href: 'https://m.me/tui.la.phuc747',
            position: 'right',
            className: 'navbar-icon fab fa-facebook-messenger',
            'aria-label': 'Messenger',
          },
          {
            href: 'https://www.youtube.com/@ankivn',
            position: 'right',
            className: 'navbar-icon fab fa-youtube',
            'aria-label': 'YouTube',
          },
          {
            href: 'https://github.com/learn-anything-az/awesome_docusaurus',
            position: 'right',
            className: 'navbar-icon fab fa-github',
            'aria-label': 'GitHub',
          },
          // highlight-end
        ],
      },

```

## Thêm style vào file custom.css

1. Nạp Fontawesome icon vào `custom.css` ở đầu file

```css
@import '@fortawesome/fontawesome-free/css/all.min.css';
```

Bổ sung thêm định dạng các icon này trên thanh điều hướng.

```css src/css/custom.css
/* SOCIAL ICON LINK STYLES START */
/* General styles for all social icons */
.navbar-icon {
  font-size: 1.5rem; /* Adjust size if needed */
  margin-left: 4px; /* Reduced spacing between icons */
  margin-right: 0; /* Ensures no extra space on the right */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease; /* Smooth hover effect */
}

/* Facebook icon color */
.navbar-icon.fab.fa-facebook {
  color: #1877F2;
}
.navbar-icon.fab.fa-facebook:hover {
  color: #145dbf;
}

/* Messenger icon color */
.navbar-icon.fab.fa-facebook-messenger {
  color: #0099FF;
}
.navbar-icon.fab.fa-facebook-messenger:hover {
  color: #0078cc;
}

/* Telegram icon color */
.navbar-icon.fab.fa-telegram-plane {
  color: #0088CC;
}
.navbar-icon.fab.fa-telegram-plane:hover {
  color: #006699;
}

/* YouTube icon color */
.navbar-icon.fab.fa-youtube {
  color: #FF0000;
}
.navbar-icon.fab.fa-youtube:hover {
  color: #cc0000;
}

/* GitHub icon color */
.navbar-icon.fab.fa-github {
  color: #333333;
}
.navbar-icon.fab.fa-github:hover {
  color: #6e5494; /* GitHub purple accent */
}

/* SOCIAL ICON LINK STYLES END */
```