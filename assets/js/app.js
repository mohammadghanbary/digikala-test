const swiper = new Swiper(".swiper-slider-banner", {
    pagination: {
      el: ".swiper-pagination-banner",
    },
  });

  const swiperProducts = new Swiper(".swiper-slider-products", {
  width:190,
  spaceBetween:3,
  });
  /**
   * Menu andicator line
  */
 window.addEventListener("load",function() {
  var navLineDiv = document.querySelector(".shp-main-nav-line")
  var navListItems = document.querySelectorAll("header nav ul li")

  function indicator(e) {
      navLineDiv.style.left = e.offsetLeft + "px";
      navLineDiv.style.width = e.offsetWidth + "px";
      navLineDiv.style.transform = "scaleX(100%)";
  }

  navListItems.forEach(item => {
      item.addEventListener("mouseenter", (e) => {
          indicator(e.target);
      });
      item.addEventListener("mouseleave", (e) => {
          navLineDiv.style.transform = "scaleX(0%)";
      })
  })
})