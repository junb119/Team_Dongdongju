// import fetchData from "./fetchData";
setHeaderFooter(() => {
  headerWhite();
  headerTransparency(0.5);
});

// 뉴스데이터 로드
let filterArray = [];
const fetchData = () => {
  return fetch("data/news.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // 읽어온 JSON 데이터를 반환
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
// 배경 애니메이션
let prTitle = $(".pr_title_bg img");
setTimeout(() => {
  prTitle.addClass("active");
}, 500);

// 뉴스 전체 갯수
fetchData().then((datas) => {
  let total = $(".news_info > span");
  total.html(`total | ${datas.length}`);
});

let curruentNation = "전체";
let national = $(".search_news .national");
national.change(function () {
  curruentNation = national.val();
  //console.log(curruentNation);
  listChange();
});

function listChange() {
  let newsItems = $(".image-list .news_item");
  newsItems.addClass("d-none");
  let newNationalItems = [...newsItems].filter((item) => {
    // item.querySelector('.text_content .national').innerText() === curruentNation
    return $(item).find(".text_content .national").text() === curruentNation;
  });
  for (let nItem of newNationalItems) {
    // console.log(nItem);
  }
}

// 그리드 리스트
let showNews = $(".show_news > div");
let btns = $(".show_news button");
let imageList = $(".image-list");
for (let btn of btns) {
  btn.addEventListener("click", function () {
    showNews.removeClass("active");
    let parent = $(this).parent();
    parent.addClass("active");

    if (parent.hasClass("show-grid")) {
      imageList.removeClass("list-view");
      imageList.addClass("grid-view");
    } else {
      imageList.removeClass("grid-view");
      imageList.addClass("list-view");
    }
  });
}
// --그리드 리스트

$(".pagination").pagination({
  dataSource: function (done) {
    $.ajax({
      type: "GET",
      url: "data/news.json",
      success: function (response) {
        done(response);
      },
    });
  },
  pageSize: 12,
  showGoInput: true,
  showGoButton: true,
  callback: function (data, pagination) {
    var html = template(data);
    $(".image-list").html(html);
  },
});

function template(data) {
  var html = "";
  $.each(data, function (index, item) {
    const titleData = item.title;
    const publishData = item.publish;
    const nationData = item.nation;
    const dateData = item.date;
    const imgData = item.img;
    const linkData = item.link;

    html += `
    <li class="news_item">
      <a href="${linkData}" class="link" target="_blank">
        <img src="${imgData}" alt="" class="thumb" />
        <div class="text_content">
          <div class="tag df">
            <span class="date">${dateData}</span>
            <span class="media">${publishData}</span>
            <span class="national">${nationData}</span>
          </div>
          <p class="article_title">${titleData}</p>
        </div>
      </a>      
    </li>`;

    // <div class="kebab">
    //     <ul>
    //       <li>X</li>
    //       <li><a href="">kakaotalk</a></li>
    //       <li><a href="">facebook</a></li>
    //       <li><a href="">tweeter</a></li>
    //       <li><a href="">url</a></li>
    //     </ul>
    //   </div>
  });

  return html;
}

// for (let i = 0; i < showCountNews; i++) {
//   const titleData = data.title;
//   const publishData = data.publish;
//   const nationData = data.nation;
//   const dateData = data.date;
//   const imgData = data.img;
//   const linkData = data.link;
//   const newsItem = `
//     <li class="news_item">
//       <a href="${linkData}" class="link" target="_blank">
//         <img src="${imgData}" alt="" class="thumb" />
//         <div class="text_content">
//           <div class="tag df">
//             <span class="date">${dateData}</span>
//             <span class="media">${publishData}</span>
//             <span class="national">${nationData}</span>
//           </div>
//           <p class="article_title">${titleData}</p>
//         </div>
//       </a>
//       <div class="kebab">
//         <ul>
//           <li>X</li>
//           <li><a href="">kakaotalk</a></li>
//           <li><a href="">facebook</a></li>
//           <li><a href="">tweeter</a></li>
//           <li><a href="">url</a></li>
//         </ul>
//       </div>
//     </li>`;
//   $(".image-list").append(newsItem);
// }
