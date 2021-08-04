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
        $('.section-contact').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('.maps-left').addClass('animated fadeInUp');
                    $('.contact-right').addClass('animated fadeInRight');
                } else {
                    $('.maps-left').removeClass('animated fadeInUp');
                    $('.contact-right').removeClass('animated fadeInRight');
                }
            }, {
                offset: '80%'
            }
        )
    })

var loading = false; //to prevent duplicate

function loadNewContent() {
    $.ajax({
        type: 'GET',
        url: url_to_new_content,
        success: function (data) {
            if (data != "") {
                loading = false;
                $("#div-to-update").html(data);
            }
        }
    });
}

//scroll DIV's Bottom 
$('#div-to-update').on('scroll', function () {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        if (!loading) {
            loading = true;
            loadNewContent(); //call function to load content when scroll reachs DIV bottom                
        }
    }
})

//scroll to PAGE's bottom
var winTop = $(window).scrollTop();
var docHeight = $(document).height();
var winHeight = $(window).height();
if ((winTop / (docHeight - winHeight)) > 0.95) {
    if (!loading) {
        loading = true;
        loadNewContent(); //call function to load content when scroll reachs PAGE bottom                
    }
}

