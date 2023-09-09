---
{"dg-publish":true,"dg-hide":true,"member":"VIP","author":null,"language":null,"tags":null,"title":"Close-up Word List (A1+, A2, B1, B1+, B2, C1, C2)","permalink":"/vii-tong-hop-mot-so-bo-the/close-up-word-list-a1-a2-b1-b1-b2-c1-c2/","hide":true,"dgPassFrontmatter":true}
---

<div style="display: flex; flex-direction: column; align-items: center; cursor: pointer;">
  <a href="https://hocanki.com/tham-gia-nhom-huong-dan-anki/" target="_blank">
    <button style="height:45px;font-size: 24px; padding: 10px; margin: 10px 0; background: #D71313; font-weight: 600; color: white;">Đăng ký khóa học Anki</button>
  </a>
</div>

Nguồn bộ thẻ: [Triệu Minh](https://www.facebook.com/groups/ankivocabulary/posts/1322289601864027/)

---

Chào các bạn.

Tôi có remake bộ deck Close-up, Second Edition by National Geographic Learning của Bro Nickolay Nonard: [Close-up Word List (A1+, A2, B1, B1+, B2, C1, C2)](https://ankiweb.net/shared/info/2120146162)

- A1+ (1623 notes)
- A2 (1516 notes)
- B1 (1649 notes)
- B1+ (1801 notes)
- B2 (1752 notes)
- C1 (1741 notes)
- C2 (1611 notes)

Tổng cộng : **11,693 notes**

- Click on texts to play audio
- Tự điển Lạc Việt
- Nghĩa tiếng Việt : Google Translate
- Hint nguyên âm : popular => p _ p _ l _ r

Nếu các bạn thích hint kiểu : **popular => p _ _ _ _ _ r**

thì ở Front Template xóa dòng:

```
<div class = "sugg">{{Suggestion}}</div>
```

Thay vào đó là :

```
<div class='sent_hint'><hint>{{Word}}</hint></div>
```

Và đoạn script :

```
<script>
var clozes = document.querySelector('.sent_hint').querySelectorAll("hint")
for (const cloze of clozes) {
cloze.innerHTML = cloze.textContent.replace(/\[\[([^\]]*)\]\]/g, '$1');
cloze.innerHTML = cloze.textContent.replace(/\B\w(?=.*\s)/g, '_');
cloze.innerHTML = cloze.textContent.replace(/(?<=\s.*)\B\w/g, '_');
cloze.innerHTML = cloze.textContent.replace(/(?<=^[\w-]*)\B\w\B(?=[\w-]*$)/g, ' _ ');
cloze.innerHTML = cloze.textContent.replace(/([_ ]*)/g, '<span style="color:gray">$1</span>');
}
</script>
```

## Tải xuống:

[Link gốc - Mediafire](https://www.mediafire.com/folder/3qho7e3qq7lt1/Close-up_Word_List?fbclid=IwAR3dy-wdWqJVYlu-3bW1v2FoNSsnfQDkR-kDfm5YZHowN-VnLikKjBOumlQ)
[Link mình reup lên OneDrive](https://1drv.ms/f/s!AnGRjCvbms2Vir0WowX62SDm9-S0wQ?e=Wzcsgd)

## Preview

![](https://i.imgur.com/tTMl9zL.png)

![](https://i.imgur.com/oy9CCg5.png)

![](https://i.imgur.com/cbwefUm.png)

