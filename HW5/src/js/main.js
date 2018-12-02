// _________________header background ____________________
$(document).ready(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 10) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });
});

// Toggle sandwich button
$("#sandwich, .top-nav_item").click(function() {
    $("#sandwich").toggleClass("active");
});

//fade out/in menu list
$(".toggle-mnu-btn").click(function () {
    if($("#sandwich").hasClass("active")) {
        $(".top-mnu").fadeIn(600).css("display", "inline-block");
    }
    else {
        $(".top-mnu").fadeOut(600);
    }
});
//close menu on click
$(".top-mnu li a").click(function () {
    if($(".toggle-mnu-btn").is(':visible')) {
        $(".top-mnu").fadeOut(600);
    }
});