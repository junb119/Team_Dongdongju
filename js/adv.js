const fetchData = () => {
  return fetch('./data/adv.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // 읽어온 JSON 데이터를 반환
      return data;
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
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

function getVideo() {
  $('.pagination').pagination({
    dataSource: function (done) {
      $.ajax({
        type: 'GET',
        url: '/data/adv_video.json',
        success: function (response) {
          done(response);
        },
      });
    },
    pageSize: 5,
    showGoInput: true,
    showGoButton: true,
    callback: function (data, pagination) {
      var html = templateVideo(data);
      $('.list_adv').html(html);
    },
  });

  function templateVideo(data) {
    // $('.list_adv li').each(function (idx) {
    //   let thumb = $(this).find('figure img')
    //   let desc = $(this).find('figcaption')
    //   let targetData = videoDatas[idx]
    //   console.log(thumb)
    //   console.log(desc)
    //   thumb.attr('src', targetData.img_path)
    //   desc.text(targetData.title)})

    var html = '';
    // for (let i=0; i<6; i++ ){
    //   let item = data[i]
    //   const titleData = item.title;
    //   const imgData = item.img_path
    //   const videoData = item.video_path
    //   html += `
    //   <li>
    //     <figure>
    //       <img src="${imgData}" alt="${titleData}" />
    //     </figure>
    //     <figcaption>${titleData}</figcaption>
    //   </li>
    //   `;
    // }

    $.each(data, function (index, item) {
      console.log('index', index);
      const titleData = item.title;
      const imgData = item.img_path;
      const videoData = item.video_path;
      html += `
      <li>
        <figure>
          <img src="${imgData}" alt="${titleData}" />
        </figure>
        <figcaption>${titleData}</figcaption>
      </li>
      `;
    });

    return html;
  }
}

function getPrint() {
  $('.list_adv').html('');
  $('.pagination').html('');
  $('.pagination').pagination({
    dataSource: function (done) {
      $.ajax({
        type: 'GET',
        url: '/data/adv_print.json',
        success: function (response) {
          done(response);
        },
      });
    },
    pageSize: 5,
    showGoInput: true,
    showGoButton: true,
    callback: function (data, pagination) {
      var html = templatePrint(data);
      $('.list_adv').html(html);
    },
  });

  function templatePrint(data) {
    // $('.list_adv li').each(function (idx) {
    //   let thumb = $(this).find('figure img')
    //   let desc = $(this).find('figcaption')
    //   let targetData = videoDatas[idx]
    //   console.log(thumb)
    //   console.log(desc)
    //   thumb.attr('src', targetData.img_path)
    //   desc.text(targetData.title)})

    var html = '';
    // for (let i=0; i<6; i++ ){
    //   let item = data[i]
    //   const titleData = item.title;
    //   const imgData = item.img_path
    //   const videoData = item.video_path
    //   html += `
    //   <li>
    //     <figure>
    //       <img src="${imgData}" alt="${titleData}" />
    //     </figure>
    //     <figcaption>${titleData}</figcaption>
    //   </li>
    //   `;
    // }

    $.each(data, function (index, item) {
      console.log('index', index);
      const titleData = item.title;
      const imgData = item.thumb;
      const largeData = item.show_path;
      html += `
      <li>
        <figure>
          <img src="${imgData}" alt="${titleData}" />
        </figure>
        <figcaption>${titleData}</figcaption>
      </li>
      `;
    });

    return html;
  }
}
getVideo();
//   // --페이지네이션
// })
