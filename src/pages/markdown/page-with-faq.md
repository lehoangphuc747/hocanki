---
title: Trang nội dung markdown chèn FAQ
---
import { faqData } from '@site/static/files/docusaurusFAQ';
import FAQSection from '@site/src/components/FAQSection/FAQSection';
import PrimaryCTA from '@site/src/components/PrimaryCTA/PrimaryCTA'; // nút kêu gọi hành động

## Cài đặt FAQ component vào trang markdown

1. Dữ liệu phần FAQ cần được lưu thành file `.js`, trong minh hoạ này file `static/files/docusaurusFAQ.js` chứa dữ liệu câu hỏi và trả lời.
2. Nạp component vào trang bằng câu lệnh import ở đầu trang, lưu ý câu lệnh phải sau phần yaml frontmatter được bao quanh bởi cặp dấu `---` ở đầu trang nếu có.
3. Đặt thẻ FAQ ở cuối trang

```
<FAQSection faqs={faqData} />
```

<FAQSection faqs={faqData} />

<PrimaryCTA 
    title="Tham gia khoá học"
    subtitle="Trở thành một phần của cộng đồng đam mê học hỏi với khoá học tại Learn Anything ngay hôm nay!"
    ctaText="Bắt đầu"
    ctaLink="/"
    enableBackground={true}
    button2Text="Tìm hiểu thêm"
    button2Link="/demo/about"
    fitInDocument={true} 
/>
<!-- Tràn viền (false) trong trang js hoặc vừa vặn trong trang tài liệu (true) -->