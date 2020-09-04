$(document).ready(function () {
  /*=== Isotope filter ===*/
  let tabButton = $(".site-projects .tab-button");

  tabButton.click(function (e) {
    // console.log("Click test");
    $(".site-projects .tab-button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".site-projects .grid").isotope({
      filter: selector,
    });

    return false;
  });

  $("#btn-all").trigger("click");

  /*=== Owl carousel ===*/
  $(".site-main .site-about .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
    },
  });
});
