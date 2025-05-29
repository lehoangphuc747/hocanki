---
title: Thiết lập thư viện Apache Echarts biểu diễn dữ liệu
---

import BarAnnotation from '@site/src/components/Echarts/BarAnnotation';

:::success
[Echarts](https://echarts.apache.org/examples/en/index.html#chart-type-bar) là một thư viện JavaScript cho phép biểu diễn các loại đồ thị trên web trực quan, chuyên nghiệp và hoàn toàn miễn phí, nguồn mở.
:::

## Cài đặt

Cài đặt thư viện echarts

```
npm install echarts
```

## Tạo components

Xây dựng các component tái sử dụng tại địa chỉ `src/components/Echarts` trong đó mỗi file `.js` đại diện cho 1 mẫu đồ thị.

## Sử dụng

1. Nạp thư viện vào trang hoặc file markdown

```
import BarAnnotation from '@site/src/components/Echarts/BarAnnotation';
```
2. Chèn component vào landing page: Xem mẫu `src/pages/charts/bar-annotation.js`

3. Chèn component vào trang markdown

```
<BarAnnotation
  title="Thống kê lượt Download thư viện Vnstock"
  sectionTitle="Lượt tải về của Vnstock qua thời gian"
  xAxisData={[
    '3/1/2022', '4/1/2022', '5/1/2022', '6/1/2022', '7/1/2022',
    '8/1/2022', '9/1/2022', '10/1/2022', '11/1/2022', '12/1/2022',
    '1/1/2023', '2/1/2023', '3/1/2023', '4/1/2023', '5/1/2023',
    '6/1/2023', '7/1/2023', '8/1/2023', '9/1/2023', '10/1/2023',
    '11/1/2023', '12/1/2023', '1/1/2024', '2/1/2024', '3/31/2024', '4/30/2024', '5/31/2024', '6/30/2024', '7/31/2024', '8/31/2024', '9/30/2024', '10/31/2024', '11/27/2024'
  ]}
  seriesData={[
    821, 2786, 1139, 657, 451, 419, 563, 894, 1130, 1319, 1150, 
    1951, 4332, 3990, 1613, 1762, 3036, 2885, 2816, 5266, 5587, 
    11354, 15419, 11202, 20946, 19989, 23244, 16275, 18772, 18502, 19460, 29119, 19607  
  ]}
  annotations={[
    { name: 'Phát hành qua PyPI', coord: ['3/1/2022', 5100], value: 'Phát hành', label: { position: 'top' } },
    { name: 'Giới thiệu Vnstock qua blog thinhvu.com', coord: ['9/1/2022', 3100], value: 'Blog', label: { position: 'top' } },
    { name: 'Sửa lỗi API từ SSI không thể hoạt động', coord: ['3/1/2023', 7300], value: 'Nâng cấp', label: { position: 'top' } },
    { name: 'Thiết lập cộng đồng Facebook & Discord', coord: ['4/1/2023', 6100], value: 'Cộng đồng', label: { position: 'top' } },
    { name: 'Cung cấp tài liệu bản tiếng Việt', coord: ['6/1/2023', 5100], value: 'Tài liệu', label: { position: 'top' } },
    { name: 'Ra mắt website Vnstock', coord: ['10/1/2023', 7800], value: 'Website', label: { position: 'top' } },
    { name: 'Phát hành Vnstock3', coord: ['5/29/2024', 23700], value: 'Phiên bản mới', label: { position: 'top' } },
    { name: '+Gemini AI', coord: ['10/31/2024', 31500], value: 'Tích hợp Gemini AI vào Vnstock3', label: { position: 'top' } },
  ]}
  annotSymbol="triangle"
  annotSymbolSize={15}
  annotSymbolColor="blue"
  annotSymbolRot={180}
  showYAxis={false}
  showDataLabels={true}
  figsize={{ width: '100%', height: '700px' }}
  barWidth={21}
  centerChart={true}
  fontFamily="Lexend"
  titleSpacing={30}
/>
```

## Minh hoạ

<BarAnnotation
  title="Thống kê lượt Download thư viện Vnstock"
  sectionTitle="Lượt tải về của Vnstock qua thời gian"
  xAxisData={[
    '3/1/2022', '4/1/2022', '5/1/2022', '6/1/2022', '7/1/2022',
    '8/1/2022', '9/1/2022', '10/1/2022', '11/1/2022', '12/1/2022',
    '1/1/2023', '2/1/2023', '3/1/2023', '4/1/2023', '5/1/2023',
    '6/1/2023', '7/1/2023', '8/1/2023', '9/1/2023', '10/1/2023',
    '11/1/2023', '12/1/2023', '1/1/2024', '2/1/2024', '3/31/2024', '4/30/2024', '5/31/2024', '6/30/2024', '7/31/2024', '8/31/2024', '9/30/2024', '10/31/2024', '11/27/2024'
  ]}
  seriesData={[
    821, 2786, 1139, 657, 451, 419, 563, 894, 1130, 1319, 1150, 
    1951, 4332, 3990, 1613, 1762, 3036, 2885, 2816, 5266, 5587, 
    11354, 15419, 11202, 20946, 19989, 23244, 16275, 18772, 18502, 19460, 29119, 19607  
  ]}
  annotations={[
    { name: 'Phát hành qua PyPI', coord: ['3/1/2022', 5100], value: 'Phát hành', label: { position: 'top' } },
    { name: 'Giới thiệu Vnstock qua blog thinhvu.com', coord: ['9/1/2022', 3100], value: 'Blog', label: { position: 'top' } },
    { name: 'Sửa lỗi API từ SSI không thể hoạt động', coord: ['3/1/2023', 7300], value: 'Nâng cấp', label: { position: 'top' } },
    { name: 'Thiết lập cộng đồng Facebook & Discord', coord: ['4/1/2023', 6100], value: 'Cộng đồng', label: { position: 'top' } },
    { name: 'Cung cấp tài liệu bản tiếng Việt', coord: ['6/1/2023', 5100], value: 'Tài liệu', label: { position: 'top' } },
    { name: 'Ra mắt website Vnstock', coord: ['10/1/2023', 7800], value: 'Website', label: { position: 'top' } },
    { name: 'Phát hành Vnstock3', coord: ['5/29/2024', 23700], value: 'Phiên bản mới', label: { position: 'top' } },
    { name: '+Gemini AI', coord: ['10/31/2024', 31500], value: 'Tích hợp Gemini AI vào Vnstock3', label: { position: 'top' } },
  ]}
  annotSymbol="triangle"
  annotSymbolSize={15}
  annotSymbolColor="blue"
  annotSymbolRot={180}
  showYAxis={false}
  showDataLabels={true}
  figsize={{ width: '100%', height: '700px' }}
  barWidth={21}
  centerChart={true}
  fontFamily="Lexend"
  titleSpacing={30}
/>

