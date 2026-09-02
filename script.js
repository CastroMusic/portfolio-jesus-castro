const modal=document.getElementById('videoModal');
const frame=document.getElementById('modalFrame');
const title=document.getElementById('modalTitle');
function openVideo(url,name){
  frame.src=url + (url.includes('?')?'&':'?') + 'autoplay=1';
  title.textContent=name || '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeVideo(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  frame.src='';
  document.body.style.overflow='';
}
document.querySelectorAll('.project-poster').forEach(card=>card.addEventListener('click',()=>openVideo(card.dataset.video,card.dataset.title)));
document.querySelectorAll('.project-open').forEach(btn=>btn.addEventListener('click',()=>openVideo(btn.dataset.video,btn.dataset.title)));
document.querySelector('.modal-close').addEventListener('click',closeVideo);
document.querySelector('.modal-backdrop').addEventListener('click',closeVideo);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeVideo()});
document.querySelectorAll('.art-play').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const id=btn.dataset.target;
    let el=document.getElementById(id);
    if(!el){el=[...document.querySelectorAll('audio')].find(a=>a.id===id)}
    if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.play().catch(()=>{});}
  });
});
const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent('Contacto desde el portfolio · '+data.get('motivo'));
  const body=encodeURIComponent(`Nombre: ${data.get('nombre')}\nCorreo: ${data.get('correo')}\n\nMotivo: ${data.get('motivo')}\n\nProyecto:\n${data.get('mensaje')}`);
  window.location.href=`mailto:castromusic.1198@gmail.com?subject=${subject}&body=${body}`;
});
