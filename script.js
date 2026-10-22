'use strict';
const menu=document.querySelector('.menu-button'),nav=document.getElementById('site-nav');
function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();}});
nav?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu()});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
 let count=0;document.querySelectorAll('[data-category]').forEach(card=>{const visible=button.dataset.filter==='all'||card.dataset.category.split(' ').includes(button.dataset.filter);card.hidden=!visible;if(visible)count++});
 document.querySelector('[data-filter-status]').textContent='Showing '+count+' widget'+(count===1?'':'s');
}));
const viewButtons=[...document.querySelectorAll('[data-view]')];
function selectAudioView(button){viewButtons.forEach(item=>{const active=item===button;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;document.getElementById('view-'+item.dataset.view).hidden=!active})}
viewButtons.forEach(button=>{button.addEventListener('click',()=>selectAudioView(button));button.addEventListener('keydown',event=>{let index=viewButtons.indexOf(button);if(event.key==='ArrowRight')index=(index+1)%viewButtons.length;else if(event.key==='ArrowLeft')index=(index+viewButtons.length-1)%viewButtons.length;else if(event.key==='Home')index=0;else if(event.key==='End')index=viewButtons.length-1;else return;event.preventDefault();selectAudioView(viewButtons[index]);viewButtons[index].focus()})});
document.querySelectorAll('[data-vantage]').forEach(button=>button.addEventListener('click',()=>{
 const mono=button.dataset.vantage==='mono';const image=document.getElementById('vantage-preview');image.src='assets/vantage-'+(mono?'mono':'signal')+'.png';image.alt='Vantage '+(mono?'MONO':'Signal')+' style preview';
 document.querySelector('[data-vantage-caption]').textContent=mono?'MONO / clean dot-matrix styling with a clock or sensor':'Signal / expressive live readouts and animated detail';
 document.querySelectorAll('[data-vantage]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
}));
const preview=document.querySelector('[data-style-preview]');
if(preview){
 const canvas=document.getElementById('canvas-color'),card=document.getElementById('card-color'),surface=document.getElementById('surface');
 function setCard(){const rgb=card.value.slice(1).match(/.{2}/g).map(x=>parseInt(x,16)).join(',');preview.style.setProperty('--card',rgb)}
 canvas.addEventListener('input',()=>preview.style.setProperty('--canvas',canvas.value));card.addEventListener('input',setCard);
 surface.addEventListener('input',()=>{preview.style.setProperty('--opacity',surface.value/100);document.getElementById('surface-output').textContent=surface.value+'%'});
 const swatches=[...document.querySelectorAll('[data-accent]')];
 function accent(button){preview.style.setProperty('--preview-accent',button.dataset.accent);swatches.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button))})}
 swatches.forEach(button=>button.addEventListener('click',()=>accent(button)));
 document.querySelector('.reset-style').addEventListener('click',()=>{canvas.value='#142027';card.value='#0b1315';surface.value=78;preview.style.removeProperty('--canvas');preview.style.removeProperty('--card');preview.style.removeProperty('--opacity');document.getElementById('surface-output').textContent='78%';accent(swatches[0])});
 const play=document.querySelector('.demo-play');play.addEventListener('click',()=>{const paused=play.getAttribute('aria-pressed')!=='true';play.setAttribute('aria-pressed',String(paused));play.setAttribute('aria-label',paused?'Play demo':'Pause demo');play.textContent=paused?'▶':'Ⅱ';document.querySelector('.preview-transport h3').textContent='SESSION // '+(paused?'PAUSED':'PLAYING')});
 let progress=60;document.querySelectorAll('[data-demo-skip]').forEach((button,index)=>button.addEventListener('click',()=>{progress=index?15:0;document.querySelector('.demo-progress i').style.width=progress+'%'}));
}
const oldHashes={modules:'widgets.html',system:'widgets.html',ecosystem:'widgets.html',customize:'customize.html','theme-guides':'guides.html',roadmap:'roadmap.html'};
if(/(?:^|\/)index\.html$/.test(location.pathname)||location.pathname.endsWith('/')){const dest=oldHashes[location.hash.slice(1)];if(dest)location.replace(dest)}

