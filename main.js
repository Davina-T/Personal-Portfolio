// Contact Link Hover Effects

$(".social-icon--email").mouseenter(function() {
    $(".fa-envelope").addClass("colour");
    $(".tooltip").css('visibility: visible; opacity: 1; transform: translate(-50%, -150%)');
}).mouseleave(function() {
    $(".fa-envelope").removeClass("colour");
});

$(".social-icon--github").mouseenter(function() {
    $(".fa-github").addClass("colour");
}).mouseleave(function() {
    $(".fa-github").removeClass("colour");
});

$(".social-icon--linkedin").mouseenter(function() {
    $(".fa-linkedin-in").addClass("colour");
}).mouseleave(function() {
    $(".fa-linkedin-in").removeClass("colour");
});

// Tooltip

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
