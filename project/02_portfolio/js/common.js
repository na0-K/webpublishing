$(".btn_menu_open").on("click", function () {
  $(".gnb").addClass("opened");
  $(".btn_menu_close").addClass("opened");
});
$(".btn_menu_close").on("click", function () {
  $(".gnb").removeClass("opened");
  $(".btn_menu_close").removeClass("opened");
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides:true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
});
