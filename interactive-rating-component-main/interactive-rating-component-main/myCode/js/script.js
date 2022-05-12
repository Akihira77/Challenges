let rate = 0;
$(document).ready(function () {
  $("ul li").click(function () {
    $("*").removeClass("active");
    $(this).addClass("active");
    // let tulisan = $(this).text();
    // console.log(tulisan);
    $(".choose").text($(this).text());
  });
  $(".submit").click(function (e) {
    $("body").css("opacity", ".7");
    setTimeout(function () {
      $("body").css("opacity", "1");
      $(".inactive").css("display", "block");
      $(".first").css("display", "none");
    }, 1000);
  });
});
