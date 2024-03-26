const panel = document.querySelectorAll('.panel'),
  subtitle= document.querySelector('.subtitle'),
  panelContents = document.querySelectorAll('.panel-contents');
 cta = document.getElementById('cta');
 panelactive = document.querySelectorAll('.panel.active');
 panelsibling = panelactive.nextElementSibling ;
for (let p of panel) {
  p.addEventListener('click', ()=>{
    hideAll();
    p.classList.add('active');
    subtitle.style.display= "none";
    cta.style.display= "none";
    panelsibling.style.height = "10vh";
    panelContents.style.top = "124px";
  });
}
  
// for(p2 of panel){
// p2.addEventListener('click',(event)=>{
// var accordion = event.currentTarget;
// var accordions = accordion.parentNode;
// accordions.insertBefore(accordion, accordions.firstChild);
// })
// }
function hideAll() {
  for (let p of panel) {
    p.classList.remove('active');
  }
}
