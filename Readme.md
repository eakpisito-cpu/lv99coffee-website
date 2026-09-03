# LV99coffee Website

เว็บไซต์ทางการของ LV99coffee สำหรับ `https://coffee.lv99th.com/` สร้างด้วย HTML, CSS และ Vanilla JavaScript โดยไม่ต้องใช้ระบบ build

## โครงสร้าง

- `index.html` — เนื้อหา, SEO และ Structured Data
- `css/styles.css` — Design system และ Responsive layout
- `js/main.js` — ข้อมูลเมนูจริง, ตัวกรองหมวด, Mobile navigation และ reveal animation
- `assets/images/` — ภาพเว็บไซต์และป้ายเมนูจริงที่บีบอัดเป็น WebP
- `robots.txt` / `sitemap.xml` — ข้อมูลสำหรับ Search Engine

## การเผยแพร่

อัปโหลดไฟล์ทั้งหมดเข้า `/domains/coffee.lv99th.com/public_html/` บน RUK-COM DirectAdmin โดยรักษาโครงสร้างโฟลเดอร์เดิม

## ข้อกำหนดสำคัญ

- ห้ามเดาชื่อเมนูหรือราคา
- เรื่องราวร้านและมาตรฐานวัตถุดิบที่ยืนยันแล้วอยู่ในส่วน `#story` และ `.standards` ของ `index.html`
- เมนูและราคาที่อ่านได้ชัดถูกถอดจากป้ายจริงแล้ว โดยไม่ใช้ส่วนขวาของภาพที่ถูกตัด
- ภาพปัจจุบันเป็นภาพบรรยากาศที่สร้างขึ้นสำหรับงานออกแบบ และควรเปลี่ยนเป็นภาพร้านจริงเมื่อพร้อม
- Production URL คือ `https://coffee.lv99th.com/`
