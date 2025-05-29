---
title: Markdown page example
---
import SubscribeNewsletter from '@site/src/components/SubscribeNewsletter/SubscribeNewsletter';

# Ví dụ về trang Markdown

Bạn có thể tạo ra 1 trang đơn giản với Markdown mà hoàn toàn không cần đến cú pháp React.

# Sử dụng thư mục `/pages` như thế nào?

Bạn có thể tạo ra landing page (trang đích) bất kỳ bằng cách tạo 1 file Markdown có định dạng `*.md` hoặc tạo 1 thư mục mới bên trong thư mục `pages` sau đó bắt đầu tạo trang web với React.

Mỗi 1 trang/thành phần trên website sử dụng React gồm 2 thành phần:
- File `*.js` hoặc `*.jsx`: Thể hiện các thẻ bố cục nội dung trang web.
- File `.module.css` hoặc `.css`: Thể hiện các cài đặt về giao diện hiển thị của website hoặc component (thành phần)

Trong ví dụ vui dưới đây bạn có thể hiểu được vai trò của HTML hay trong trường hợp này là định dạng `*.js` hoặc `*.jsx` của React chính là phần khung xương. Thành phần `css` sẽ quyết định giao diện được hiển thị như thế nào.

![Mô tả vui cho HTML/CSS](/images/html-css-demonstration.png)

<SubscribeNewsletter
  backgroundColor="transparent"
  headingColor="#BC0000"
  descriptionColor="#224F75"
  buttonBackgroundColor="#A5C4BD"
  buttonTextColor="#224F75"
  heading="Nhận bản tin hàng tuần"
  description="Nhận bài viết mới từ kênh Substack của chúng tôi"
  buttonText="Đăng ký"
/>
