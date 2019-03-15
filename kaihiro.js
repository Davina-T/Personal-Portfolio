// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('colour');
    } else {
        $('nav').removeClass('colour');
    }
})

// Active Effect

$(document).ready(function() {
    $(".nav a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    })
})

// Scroll to top

function scrollToTop() {
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
}