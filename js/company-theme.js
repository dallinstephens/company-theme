// BEGIN JQUERY DOCUMENT READY FUNCTION

$(document).ready(function(){

  // BEGIN ANIMATION: SLIDE IN ELEMENTS

    $(window).scroll(function() {
      $(".slide-animation").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
        // resets when moved above slide animation - allows for repeated slide animation
        else if (pos > winTop + 1000) {
          $(this).removeClass("slide");
        }
        else if (pos < 1000){
          $(this).removeClass("slide");
        }
      });
    });

  // END ANIMATION: SLIDE IN ELEMENTS

});

// END JQUERY DOCUMENT READY FUNCTION

// BEGIN JQUERY DOCUMENT READY FUNCTION

$(document).ready(function(){

  // BEGIN NAVBAR LINKS (ABOUT, SERVICES, PORTFOLIO, PRICING, CONTACT, SIGN UP, & LOGIN) & WEBSITE FOOTER LINK

    // close myNavbar when link (about, services, portfolio, pricing, contact, sign up, or login) clicked on smaller screen
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
    });

    // BEGIN ADD SMOOTH SCROLLING TO ALL LINKS IN NAVBAR + FOOTER LINK: The page scrolls gradually upon click of link rather than jumping straight to section.

      $(".navbar a, footer a[href='#top-of-page']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== ""){
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

    // END ADD SMOOTH SCROLLING TO ALL LINKS IN NAVBAR + FOOTER LINK: The page scrolls gradually upon click of link rather than jumping straight to section.

  // BEGIN NAVBAR LINKS (ABOUT, SERVICES, PORTFOLIO, PRICING, CONTACT, SIGN UP, & LOGIN) & WEBSITE FOOTER LINK

});

// END JQUERY DOCUMENT READY FUNCTION

// BEGIN COLOR MODAL: Modal opens upon click of navbar group link (fire glyphicon, logo, & dropdown arrow).

  // BEGIN COLOR MODAL BODY

    // BEGIN TAB BODY CONTENT

      // when the page loads, css variable --theme-primary-color will remain the default theme primary color while localStorage.themePrimaryColor is undefined; when the user selects a color in the color modal, localStorage.themePrimaryColor becomes defined and when the page loads again, css variable --theme-primary-color becomes the stored color in localStorage.themePrimaryColor.
      if (localStorage.themePrimaryColor !== undefined) {
        document.documentElement.style.setProperty('--theme-primary-color', localStorage.themePrimaryColor);
      }

      // when the page loads, css variable --theme-secondary-color will remain the default theme secondary color while localStorage.themeSecondaryColor is undefined; when the user selects a color in the color modal, localStorage.themeSecondaryColor becomes defined and when the page loads again, css variable --theme-secondary-color becomes the stored color in localStorage.themeSecondaryColor.
      if (localStorage.themeSecondaryColor !== undefined) {
        document.documentElement.style.setProperty('--theme-secondary-color', localStorage.themeSecondaryColor);
      }

      // BEGIN QUICK THEME COLOR PICKER TAB BODY CONTENT

        // when the user clicks a color block in the quick theme color picker tab body content, the css variables --theme-primary-color & --theme-secondary-color change according to the selected color block and the variables localStorage.themePrimaryColor & localStorage.themeSecondaryColor are given defined color values.
        function changeThemeColors(themePrimaryColor, themeSecondaryColor) {
          localStorage.themePrimaryColor = themePrimaryColor;
          localStorage.themeSecondaryColor = themeSecondaryColor;
          document.documentElement.style.setProperty('--theme-primary-color', localStorage.themePrimaryColor);
          document.documentElement.style.setProperty('--theme-secondary-color', localStorage.themeSecondaryColor);
        }

      // END QUICK THEME COLOR PICKER TAB BODY CONTENT

      // BEGIN JQUERY DOCUMENT READY FUNCTION

      $(document).ready(function(){

        // BEGIN SPECTRUM THEME PRIMARY COLOR PICKER

          $("#spectrum-theme-primary-color-picker").spectrum({
              flat: true,
              preferredFormat: "hsl",
              showInput: true,
              showInitial: true,
              showButtons: false,
              containerClassName: 'spectrum-color-picker',
              move: function(color) {
                localStorage.themePrimaryColor = color.toHexString();
                document.documentElement.style.setProperty('--theme-primary-color', localStorage.themePrimaryColor);
              },
              showPalette: true,
              showSelectionPalette: true,
              color: localStorage.themePrimaryColor,
              palette: [
                  ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f","#a52a2a","#fff"],
                  ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc","#faebeb","#f3f3f3"],
                  ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd","#e59a9a","#ccc"],
                  ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0","#d04949","#999"],
                  ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79","#8e2525","#666"],
                  ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47","#651a1a","#444"],
                  ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130","#3d1010","#000"]
              ],
              maxSelectionSize: 0
          });

        // END SPECTRUM THEME PRIMARY COLOR PICKER

        // BEGIN SPECTRUM THEME SECONDARY COLOR PICKER

          $("#spectrum-theme-secondary-color-picker").spectrum({
              flat: true,
              preferredFormat: "hsl",
              showInput: true,
              showInitial: true,
              showButtons: false,
              containerClassName: 'spectrum-color-picker',
              move: function(color) {
                localStorage.themeSecondaryColor = color.toHexString();
                document.documentElement.style.setProperty('--theme-secondary-color', localStorage.themeSecondaryColor);
              },
              showPalette: true,
              color: localStorage.themeSecondaryColor,
              palette: [
                  ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f","#a52a2a","#fff"],
                  ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc","#faebeb","#f3f3f3"],
                  ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd","#e59a9a","#ccc"],
                  ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0","#d04949","#999"],
                  ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79","#8e2525","#666"],
                  ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47","#651a1a","#444"],
                  ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130","#3d1010","#000"]
              ],
              maxSelectionSize: 0
          });

        // END SPECTRUM THEME SECONDARY COLOR PICKER

      });

      // END JQUERY DOCUMENT READY FUNCTION

    // END TAB BODY CONTENT

  // END COLOR MODAL BODY

// END COLOR MODAL: Modal opens upon click of group link (fire glyphicon, logo, & dropdown arrow).

// BEGIN JQUERY DOCUMENT READY FUNCTION

$(document).ready(function(){

  // BEGIN SIGN UP MODAL

    // sign up modal: open sign up modal upon click of sign up link located in login modal
    $("#open-sign-up").click(function(){
      $("#login").modal("hide");
      setTimeout(function(){
        $("#sign-up").modal("show");
      }, 1000);
    });

  // END SIGN UP MODAL

  // BEGIN LOGIN MODAL

    // login modal: open login modal upon click of login link located in sign up modal
    $("#open-login").click(function(){
      $("#sign-up").modal("hide");
      setTimeout(function(){
        $("#login").modal("show");
      }, 1000);
    });

  // END LOGIN MODAL

  // BEGIN FORGOT PASSWORD MODAL

    // forgot password modal: open forgot password modal upon click of forgot password link located in login modal
    $("#open-forgot-password").click(function(){
      $("#login").modal("hide");
      setTimeout(function(){
        $("#forgot-password").modal("show");
      }, 1000);
    });

  // END FORGOT PASSWORD MODAL

});

// END JQUERY DOCUMENT READY FUNCTION

// BEGIN IMAGE MODAL: opens upon click of polaroid image card in portfolio section

  // Get the image and insert it inside the modal upon click of polaroid image card
  function openImageModal(clicked_img_src, clicked_img_alt) {
    document.getElementById('image-modal').style.display = "block";
    document.getElementById("img-clicked").src = clicked_img_src;
    // use its "alt" text as a caption
    document.getElementById("image-modal-caption").innerHTML = clicked_img_alt;
  }

// END IMAGE MODAL: opens upon click of polaroid image card in portfolio section
