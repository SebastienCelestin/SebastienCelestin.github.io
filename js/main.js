document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Publications filter (only present on Publications.html)
  var filterRow = document.querySelector(".filter-row");
  if (filterRow) {
    var buttons = filterRow.querySelectorAll("button");
    var groups = document.querySelectorAll("[data-category]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = btn.getAttribute("data-filter");
        groups.forEach(function (g) {
          if (cat === "all" || g.getAttribute("data-category") === cat) {
            g.style.display = "";
          } else {
            g.style.display = "none";
          }
        });
      });
    });
  }
});
