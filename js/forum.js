$(function () {
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
      // Get Likes Number
      let likesNumber = $(this).siblings().html();
      let likesINT = parseInt(likesNumber);
      // Increase Then Return Likes Number
      $(this)
        .siblings()
        .html(++likesINT);
    } else {
      // Change Class Attribute Value
      $(this).attr("class", "far fa-heart");
      // Change Icon Color
      $(this).attr("style", "color: #fff;");
      // Get Likes Number
      let likesNumber = $(this).siblings().html();
      let likesINT = parseInt(likesNumber);
      // Decrease Then Return Likes Number
      $(this)
        .siblings()
        .html(--likesINT);
    }
  });
});
