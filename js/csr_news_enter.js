setHeaderFooter(() => {
  headerBlack();
});

let url = location.href;
let targetId = url.split('?id=')[1];
// let targetBody = 
let targetUl = $('.container');
let listHtml = '';


fetch('./data/csr_news.json')
.then(res => res.json())
.then(result => {
  const news = result.filter(item => {
  
    return item.id == targetId;
  });
    makeContent(news[0]);
});


function makeContent(news){
  listHtml+=`<div class="container">
<div class="article">
  <div class="article_date">
    <div class="date">${news.date}</div>
    <div class="source">${news.source}</div>
  </div>
  <div class="article_title"> ${news.title}</div>
  <div class="article_contents">${news.contents}</div>
  <div class="cta"><a href="">원문보러가기</a></div>
  <div class="back"><a href="javascript:history.back()">뒤로가기</a></div>
</div>`;

targetUl.html(listHtml);
} 