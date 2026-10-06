const header=document.querySelector('[data-header]');
const menu=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>28),{passive:true});
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sizeCopy={S:'ESSENTIAL CONTROLS',M:'BALANCED CONTROL SURFACE',L:'EXPANDED SESSION VIEW',XL:'FULL AUDIO CONSOLE'};
document.querySelectorAll('[data-size]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-size]').forEach(item=>item.classList.toggle('active',item===button));document.querySelector('[data-size-readout]').textContent=button.dataset.size;document.querySelector('.size-readout').lastChild.textContent=` // ${sizeCopy[button.dataset.size]}`}));

const customizer=document.querySelector('[data-customizer]');
document.querySelectorAll('[data-accent]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-accent]').forEach(item=>item.classList.toggle('active',item===button));customizer.parentElement.style.setProperty('--preview-accent',button.dataset.accent)}));
const surface=document.querySelector('#surface');
const glow=document.querySelector('#glow');
function updateRange(input,property,output){customizer.parentElement.style.setProperty(property,input.value/100);document.querySelector(output).textContent=`${input.value}%`}
surface.addEventListener('input',()=>updateRange(surface,'--preview-surface','[data-surface-output]'));
glow.addEventListener('input',()=>updateRange(glow,'--preview-glow','[data-glow-output]'));
document.querySelector('[data-grid-toggle]').addEventListener('click',event=>{const button=event.currentTarget;const on=button.getAttribute('aria-pressed')==='true';button.setAttribute('aria-pressed',String(!on));button.classList.toggle('active',!on);document.querySelector('.customizer-preview').classList.toggle('grid-off',on)});
