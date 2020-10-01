$(function () {
  /* ---------------------------------------------------------------------------------------------- */
  /*                                         Explore Button                                         */
  /* ---------------------------------------------------------------------------------------------- */
  $("#explore").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".recent-games").offset().top,
      },
      800
    );
  });

  /* ---------------------------------------------------------------------------------------------- */
  /*                                    Counterup Plugin Trigger                                    */
  /* ---------------------------------------------------------------------------------------------- */
  $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 15e2 });
  /* ---------------------------------------------------------------------------------------------- */
  /*                   Change Heart On Click And Increase / Decrease Likes Number                   */
  /* ---------------------------------------------------------------------------------------------- */
  // On Icon Click
  $(".like i").on("click", function () {
    // Check Class Attribute Value
    if ($(this).attr("class") === "far fa-heart") {
      // Change Class Attribute Value
      $(this).attr("class", "fas fa-heart");
      // Change Icon Color
      $(this).attr("style", "color: #ff20ae;");
    } else {
      // Change Class Attribute Value
      $(this).attr("class", "far fa-heart");
      // Change Icon Color
      $(this).attr("style", "color: #000;");
    }
  });
});
