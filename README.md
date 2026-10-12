# Telegram Vlog Website

Telefon, planshet va kompyuterga mos, qoramtir premium dizayndagi ochiq vlog sayti.

## 1. Kanal ma'lumotlarini sozlash
`config.js` faylini ochib quyidagilarni almashtiring:

- `channelName`: Telegram kanalingiz nomi
- `channelUrl`: `https://t.me/kanal_username` ko‘rinishidagi haqiqiy kanal havolasi

## 2. Vlog kartalarini sozlash
`index.html` ichidagi `vlog-grid` bo‘limida uchta namuna karta bor. Har birining:
- sarlavhasini;
- qisqa tavsifini;
- havolasini haqiqiy Telegram post havolasiga almashtiring.

Hozircha kartalar umumiy kanal havolasini ochadi. Saytda login talab qilinmaydi.

## 3. Saytni bepul internetga joylash (GitHub Pages)
1. GitHub'da yangi repository yarating, masalan `vlog-site`.
2. Ushbu papkadagi `index.html`, `style.css`, `config.js`, `script.js` fayllarini repository'ning asosiy (`root`) qismiga yuklang.
3. Repository → **Settings** → **Pages** bo‘limiga kiring.
4. **Deploy from a branch** tanlang, `main` va `/(root)` ni tanlab **Save** bosing.
5. GitHub bir necha daqiqada ommaviy sayt havolasini beradi. Havolani Telegram kanalingizga yuborsangiz, obunachilaringiz saytingizga kira oladi.

## Muhim
Bu statik sayt: hostingga joylangach, havolasi bor hamma ko‘ra oladi. Sayt o‘zidan-o‘zi Telegram postlarini avtomatik yuklamaydi; haqiqiy postlarni kartalarga qo‘lda bog‘lash kerak. Telegram kanalingiz username'ini bersangiz, moslab berish mumkin.
