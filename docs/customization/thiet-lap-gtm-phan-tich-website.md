---
title: Thiết lập phân tích website với Google Tag Manager
---

## Google Tag Manager

Truy cập website Google Tag Manager sau khi đã đăng nhập tài khoản Google để thiết lập. 

- Tạo tài khoản theo dõi mới [tại đây](https://tagmanager.google.com/#/admin/accounts/create)
- Nhập thông tin cơ bản mô tả website
![](../../static/images/gtm_step-1_mo_ta_website.png)
- Chấp nhận điều khoản và chọn Yes (góc phải)
![](../../static/images/Pasted%20image%2020241127002940.png)
- Copy đoạn mã theo dõi
![](../../static/images/Pasted%20image%2020241127003230.png)

## Cài plugin Google Tag Manager

Chạy lệnh trong terminal

```
npm install --save @docusaurus/plugin-google-tag-manager
```

## Thiết lập cấu hình docusaurus.config.js

```js docusaurus.config.js
presets: [

[

'classic',

/** @type {import('@docusaurus/preset-classic').Options} */

({

// highlight-start
googleTagManager: {

containerId: 'GTM-PSDJMMPL',

},
// highlight-end
```

## Google Analytics

![](../../static/images/Pasted%20image%2020241127003700.png)

Điền tên domain vào phần Account details và bấm Next ở cuối trang để tiếp tục

![](../../static/images/Pasted%20image%2020241127003852.png)

![](../../static/images/Pasted%20image%2020241127003953.png)

![](../../static/images/Pasted%20image%2020241127004021.png)

![](../../static/images/Pasted%20image%2020241127004047.png)

![](../../static/images/Pasted%20image%2020241127004119.png)

![](../../static/images/Pasted%20image%2020241127004139.png)

![](../../static/images/Pasted%20image%2020241127004205.png)

Copy đoạn mã theo dõi Google Analytics

![](../../static/images/Pasted%20image%2020241127004323.png)

Quay lại Google Tag Manager để thiết lập

![](../../static/images/Pasted%20image%2020241127004609.png)

![](../../static/images/Pasted%20image%2020241127004527.png)

![](../../static/images/Pasted%20image%2020241127004637.png)

![](../../static/images/Pasted%20image%2020241127004811.png)

![](../../static/images/Pasted%20image%2020241127004839.png)

![](../../static/images/Pasted%20image%2020241127004919.png)

![](../../static/images/Pasted%20image%2020241127005121.png)

![](../../static/images/Pasted%20image%2020241127005034.png)

![](../../static/images/Pasted%20image%2020241127005203.png)

![](../../static/images/Pasted%20image%2020241127005242.png)

![](../../static/images/Pasted%20image%2020241127005440.png)

Hoàn thành, dữ liệu sẽ cập nhật trong 48h (khi có người truy cập)

![](../../static/images/Pasted%20image%2020241127005511.png)