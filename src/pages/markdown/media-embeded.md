---
title: Nhúng video, pdf, jupyter notebook vào trang
---

import YouTubeEmbed from '@site/src/components/MediaEmbed/YouTubeEmbed';
import NbviewerEmbed from '@site/src/components/MediaEmbed/NbviewerEmbed'
import PdfEmbed from '@site/src/components/MediaEmbed/PdfEmbed'

## Nhúng Video Youtube bằng ID

:::info "Hướng dẫn"
Nhấp chuột vào nút Chia sẻ (Share) bên dưới video Youtube, cửa sổ bật lên với các tuỳ chọn, chọn Embed và lấy phần thông tin id của Video chèn vào component.
:::

Ví dụ đoạn mã từ Youtube cho phép nhúng video vào website như sau:

```
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/sUtWmXYb7Zk?si=w-wB9Iicp3Dw6uJx" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

Bạn cần trích xuất đoạn mã sau chữ `youtube.com/embed/` tức `sUtWmXYb7Zk?si=w-wB9Iicp3Dw6uJx` và điền vào component. 

```
<YouTubeEmbed videoId="sUtWmXYb7Zk?si=OxAyS5kbsmJSz6tg" />
```

Kết quả:

<YouTubeEmbed videoId="sUtWmXYb7Zk?si=OxAyS5kbsmJSz6tg" />

<!-- import YouTubeEmbed from '@site/src/components/MediaEmbed/YouTubeEmbed';
import NbviewerEmbed from '@site/src/components/MediaEmbed/NbviewerEmbed';
import PdfEmbeded from '@site/src/components/MediaEmbed/PdfEmbeded'; -->

<br></br>

---

## Nhúng file PDF

<PdfEmbed pdfUrl="/files/docusaurus_getting_started.pdf" />

---

## Nhúng Python Jupyter Notebook

:::success "Gợi ý"
Nếu bạn sử dụng Jupyter Notebook trong Python, có thể chia sẻ các nội dung phân tích hoặc bài học được soạn thảo từ Google Colab, lưu dưới dạng Gist trong Github lên website như dưới đây.
:::

![](/images/gist_embed_guide.png)

Thông tin gistId và notebookName được lấy như trong hình mô tả trên để điền vào câu lệnh:

```
<NbviewerEmbed gistId="d736cedbd00aa8b8a21d152f8a410dab" notebookName="gemini-ai-in-action-vnstock-x-google-gemini.ipynb" />
```

Và kết quả dưới đây

<br></br>

<NbviewerEmbed gistId="d736cedbd00aa8b8a21d152f8a410dab" notebookName="gemini-ai-in-action-vnstock-x-google-gemini.ipynb" />