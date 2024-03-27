let url = location.href;
let targetId = url.split('?id=')[1];
let targetBody = 
console.log(targetId);

fetch('../data/csr_news.json'+targetId)

.then(res => res.json())
.then(result => {
  $('.title').text(result.title);
  $('.pimg').attr('src',result.images[0]);
  $('.desc').text('src',result.description);
})
