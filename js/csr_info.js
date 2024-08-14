setHeaderFooter(() => {
  headerBlack();
});

const panel = document.querySelectorAll(".panel"),
  subtitle = document.querySelector(".subtitle"),
  cta = document.getElementById("cta");
let panelContents = document.querySelectorAll(".panel-contents");

for (let p of panel) {
  p.addEventListener("click", () => {
    // let panelactive = document.querySelectorAll(".panel.active")[0];
    // panelsibling = panelactive.nextElementSibling;
    let panelsibling = p.sil;
    console.log(p);
    console.log(panelsibling);

    hideAll();
    p.classList.add("active");

    subtitle.style.display = "none";
    cta.style.display = "none";
    panelsibling.style.height = "10vh";
    panelContents.style.top = "124px";
  });
}

function hideAll() {
  for (let p of panel) {
    p.classList.remove("active");
  }
}
