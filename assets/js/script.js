$(document).ready(function () {
  $(".section-intro").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".content-left").addClass("animated");
        $(".content-right").addClass("animated");
      } else {
        $(".content-left").removeClass("animated");
        $(".content-right").removeClass("animated");
      }
    },
    {
      offset: "80%",
    }
  );
  $(".section-social").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".social-ctn").addClass("animated");
      } else {
        $(".social-ctn").removeClass("animated");
      }
    },
    {
      offset: "80%",
    }
  );
  $(".section-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".feature-ctn").addClass("animated");
        $("#react").addClass("animated");
      } else {
        $(".feature-ctn").removeClass("animated fadeInUp");
        $("#react").removeClass("animated fadeInUp");
      }
    },
    {
      offset: "80%",
    }
  );
  $(".section-form").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".form-left").addClass("animated");
        $(".form-right").addClass("animated");
      } else {
        $(".form-left").removeClass("animated");
        $(".form-right").removeClass("animated");
      }
    },
    {
      offset: "80%",
    }
  );
  $(".section-contact").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".maps-left").addClass("animated");
        $(".contact-right").addClass("animated");
      } else {
        $(".maps-left").removeClass("animated");
        $(".contact-right").removeClass("animated");
      }
    },
    {
      offset: "80%",
    }
  );
});

new WOW().init();
function initMap() {}
