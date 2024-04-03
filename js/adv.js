const fetchData = () => {
  return fetch("./data/adv.json")
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

// fetchData().then((datas) => {
// let videoDatas = datas.video
// let printDatas = datas.print

// $('.list_adv li').each(function (idx) {

//   let thumb = $(this).find('figure img')
//   let desc = $(this).find('figcaption')
//   let targetData = videoDatas[idx]
//   console.log(thumb)
//   console.log(desc)
//   thumb.attr('src', targetData.img_path)
//   desc.text(targetData.title)
//   })

//   $('.display_adv video').attr('src', videoDatas[0].video_path)

//   // 페이지네이션

let searchAdv = $(".search_adv");
let labels = searchAdv.find("label");
let listContainer = $(".list_adv");

labels.click(function () {
  showAdv($(this));
});
//console.log('w?',searchAdv.find(".active").get(0));
showAdv(searchAdv.find(".active"));

// getVideo();
//   // --페이지네이션
// })

function showAdv(target) {
  let path;
  let media;
  if (target.text() === "영상광고") {
    path = "/data/adv_video.json";
    media = '<video src="" controls></video>';
  } else {
    path = "/data/adv_print.json";
    media = '<img src="" alt="">';
  }

  $(".pagination").pagination({
    dataSource: function (done) {
      $.ajax({
        type: "GET",
        url: path,
        success: function (response) {
          done(response);
        },
      });
    },
    pageSize: 5,
    showGoInput: true,
    showGoButton: true,
    callback: function (data, pagination) {
      
      var html = template(data);
      listContainer.html(html);
    },
    afterPaging: function () {
      let list = listContainer.find("li")
      showMedia(list.eq(0))
      list.click(function (e) {
        e.preventDefault();
        showMedia($(this))
      });
    },
  });
  function showMedia(list) {
    let largePath = list.find("a").attr("data-src");
    let display = $(".display_adv");
    display.html(media);
    $(".display_adv *").attr("src", largePath);
  }
  function template(data) {
    var html = "";
    $('.adv_total span').text(`total | ${data.length}`)
    //console.log('data',data)
    $.each(data, function (index, item) {
      
      const titleData = item.title;
      const imgData = item.thumb;
      const largeData = item.show_path;
      html += `
      <li>
        <a href="#" data-src="${largeData}">
        <figure>
          <img src="${imgData}" alt="${titleData}" />
        </figure>
        <figcaption>${titleData}</figcaption>
        </a>
      </li>
      `;
    });

    return html;
  }
}
