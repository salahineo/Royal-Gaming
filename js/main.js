$(function () {
  /* ---------------------------------------------------------------------------------------------- */
  /*                                            Preloader                                           */
  /* ---------------------------------------------------------------------------------------------- */
  // Get Preloader Element
  let preloader = $("#preloader");
  // Check If Exist
  if (preloader.length) {
    // Fade It Out After 800 ms, Then Remove It
    preloader.delay(800).fadeOut("slow", function () {
      $(this).remove();
    });
  }

  /* ---------------------------------------------------------------------------------------------- */
  /*                                         Go To Top Arrow                                        */
  /* ---------------------------------------------------------------------------------------------- */
  // Get Arrow Element
  let arrow = $("#top");
  // Get Current Window
  let win = $(window);
  // Smooth Scrolling On Go To Top Arrow Click In 500ms
  arrow.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
  // Show Arrow If ScrollTop Value >= Newsbar ScrollTop value
  win.on("scroll", function () {
    if (win.scrollTop() >= $(".news").offset().top) {
      arrow.fadeIn("slow");
    } else {
      arrow.fadeOut("slow");
    }
  });

  /* ---------------------------------------------------------------------------------------------- */
  /*                                    Responsive Navbar Button                                    */
  /* ---------------------------------------------------------------------------------------------- */
  // Responsive Button
  $(".responsive-nav-icon button").on("click", function () {
    // Responsive Nav
    $(".responsive-nav").toggleClass("open");
  });

  /* ---------------------------------------------------------------------------------------------- */
  /*                                   Close Nav On Click Outside                                   */
  /* ---------------------------------------------------------------------------------------------- */
  // Get Nav And Icon
  let responsiveNav = document.querySelector(".responsive-nav");
  let responsiveNavIcon = document.querySelector(
    ".responsive-nav-icon button i"
  );
  // Add Event Listener To All Document To Close Nav
  document.addEventListener("click", function (e) {
    if (e.target !== responsiveNav && e.target !== responsiveNavIcon) {
      if (responsiveNav.classList.contains("open")) {
        responsiveNav.classList.remove("open");
      }
    }
  });
  // Stop Close Nav When Clicking On It
  $(".responsive-nav").on("click", function (e) {
    e.stopPropagation();
  });
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                                Animate On Scroll Plugin Trigger                                */
  /* ---------------------------------------------------------------------------------------------- */
  AOS.init({ duration: 1e3, once: !0 });

  // New date Object
  let currentDate = new Date();
  // Get Copyright Year Span
  document.getElementById("footer-copyright-year").innerHTML = String(currentDate.getFullYear());
});
