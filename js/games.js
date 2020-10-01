$(function () {
  /* ---------------------------------------------------------------------------------------------- */
  /*                              Show Hidden Games On Show More Click                              */
  /* ---------------------------------------------------------------------------------------------- */
  // Hidden Games
  let hidden = $("#hidden");
  $("#show-more").on("click", function () {
    // Toggle Class For Check
    hidden.toggleClass("block");
    // Slide Hidden Games Up / Down
    hidden.slideToggle();
    // Change Button Text
    if (hidden.hasClass("block")) {
      $(this).html("Load Less");
    } else {
      $(this).html("Load More");
    }
  });
  /* ---------------------------------------------------------------------------------------------- */
  /*                                    Counterup Plugin Trigger                                    */
  /* ---------------------------------------------------------------------------------------------- */
  $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 15e2 });
});
