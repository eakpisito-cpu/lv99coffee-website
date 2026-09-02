const header=document.querySelector('#site-header');const toggle=document.querySelector('#menu-toggle');const nav=document.querySelector('#site-nav');
window.addEventListener('scroll',()=>header.classList.toggle('fixed',scrollY>80),{passive:true});
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'ปิดเมนู':'เปิดเมนู')});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const items=document.querySelectorAll('.reveal');if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver'in window)){items.forEach(el=>el.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(el=>observer.observe(el))}
document.querySelector('#year').textContent=new Date().getFullYear();
