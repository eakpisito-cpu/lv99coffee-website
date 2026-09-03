# LV99coffee — Project Handoff

## Current state

Modern editorial single-page website on branch `redesign-v1`. Production target: `https://coffee.lv99th.com/` on RUK-COM DirectAdmin.

## Confirmed business data

- Address: ปากซอยเจริญกรุง 9 ถนนเจริญกรุง แขวงบ้านบาตร เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100
- Near MRT Sam Yot: approximately 140 m
- Hours: Monday–Saturday 07:30–16:30; closed Sunday
- Maps: `https://maps.app.goo.gl/upwLs7Lys3qoL3d98`
- Facebook: `https://www.facebook.com/lv99coffee`

## Design direction

- Modern Bangkok Old Town editorial style
- Espresso, charcoal, caramel and warm ivory palette
- DM Serif Display with Noto Sans Thai
- Image-led full-screen hero and responsive mobile layout
- Reduced-motion support, keyboard focus styles and semantic navigation

## Content constraints

- Do not invent menu names or prices. The visible menu is transcribed from `assets/images/lv99-menu-board.webp`.
- Menu data lives in the `menuData` array in `js/main.js`; edit it there rather than duplicating menu HTML.
- The far-right panel of the source photograph is cropped and is intentionally excluded.
- Current hero and featured food photography are AI-generated brand imagery. The Strawberry Matcha Latte + Banana Croffle feature is based on the owner's real menu references; source menu boards remain available below the menu.
- Seven clearly readable, currently available Croffle items are included. Items covered by “Out of stock” labels or unreadable in the source are intentionally excluded.
- Do not change business information without owner confirmation.

## Deployment

Upload the complete web payload to `/domains/coffee.lv99th.com/public_html/`. SSL has already been issued. Never store hosting or FTP passwords in this repository.

## Next work

1. Owner reviews the redesign.
2. Replace generated imagery with real shop photography when supplied.
3. Verify permission to display the customer review.
4. Add the full verified menu and prices.
5. Deploy after approval and test the live HTTPS URL.
