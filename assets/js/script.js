$(document).ready(
    function () {
        $('.section-home').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('.header__text-box').removeClass('animated zoomInDown');
                } else {
                    $('.header__text-box').addClass('animated zoomInDown');
                }
            }, {
                offset: '-5%'
            }
        )
        $('.section-about').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('.content-left').addClass('animated fadeInRight');
                    $('.content-right').addClass('animated fadeInRight');
                } else {
                    $('.content-left').removeClass('animated fadeInRight');
                    $('.content-right').removeClass('animated fadeInRight');
                }
            }, {
                offset: '90%'
            }
        )
        $('.section-social').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('.social-ctn').addClass('animated fadeIn');
                } else {
                    $('.social-ctn').removeClass('animated fadeIn');
                }
            }, {
                offset: '80%'
            }
        )
        $('.section-feature').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('.feature-ctn').addClass('animated fadeInUp');
                } else {
                    $('.feature-ctn').removeClass('animated fadeInUp');
                }
            }, {
                offset: '80%'
            }
        )
        $('.section-form').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('.form-left').addClass('animated fadeInUp');
                    $('.form-right').addClass('animated fadeInUp');
                } else {
                    $('.form-left').removeClass('animated fadeInUp');
                    $('.form-right').removeClass('animated fadeInUp');
                }
            }, {
                offset: '80%'
            }
        )
    })