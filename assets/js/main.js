$(document).ready(function() {
  $(".header_list-item").each(function() {
    $(this).on("click", function() {
      $(".header_list-item").removeClass("header_list-item-active");
      $(this).addClass("header_list-item-active");
      const $main = $(".main");
      const $sector = $(this).data("sector");
      $main.css("transform", "translateX(" + -($sector * 50) + "%)");
      if (isOdd($sector)) {
        $(".header_nav-logo-black").show();
        $(".header_nav-logo-white").hide();
        $(".header_list-item").addClass("white");
      } else {
        $(".header_nav-logo-black").hide();
        $(".header_nav-logo-white").show();
        $(".header_list-item").removeClass("white");
      }
    });
  });

  $(".header_mobile-button").on("click", function() {
    $(".header_mobile-background").toggleClass(
      "header_mobile-background--scale"
    );
    $(this).toggleClass("header_mobile-button--checked");
    $(".header_mobile-nav").fadeToggle("slow", "linear");
  });

  function isOdd(num) {
    return num % 2;
  }
});
