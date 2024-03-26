const panel = document.querySelectorAll('.panel'),
  subtitle= document.querySelector('.subtitle'),
  panelContents = document.querySelectorAll('.panel-contents');

for (let p of panel) {
  p.addEventListener('click', (event)=>{
    hideAll();
    p.classList.add('active');
    subtitle.style.display= "none";
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
