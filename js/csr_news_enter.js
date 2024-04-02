let url = location.href;
let targetId = url.split('?id=')[1];
let targetBody = 
console.log(targetId);
let targetUl = $('.container');
let listHtml = '';


fetch('./data/csr_news.json'+`?id=` + targetId)
.then(res => res.json())
.then(result => makeList(result));


function makeList(result){
let list = $(result.products);
list.each(function(idx, item){  
  listHtml+=`<div class="container">
<div class="article">
  <div class="article_date">
    <div class="date">${list[idx].date}</div>
    <div class="source">${list[idx].source}</div>
  </div>
  <div class="article_title"> ${list[idx].title}</div>
  <div class="article_contents">${list[idx].contents}
  </div>
  <div class="cta"><a href="">원문보러가기</a></div>
</div>
<div class="article">
  <div class="list">
    <div class="article_date">
      <div class="date">${list[idx -1].date}</div>
      <div class="article_title">${list[idx -1].title}</div>
      <div class="source">${list[idx -1].source}</div>
    </div>
  </div>
  <div class="article_contents">
  </div>
</div>
<div class="article">
  <div class="list"></div>
  <div class="article_date">
    <div class="date">${list[idx +1].date}</div>
    <div class="article_title">${list[idx +1].title}</div>
    <div class="source">${list[idx +1].source}</div>
  </div>
</div>
</div>
`})
targetUl.html(listHtml);}