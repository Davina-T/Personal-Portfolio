// Contact Link Hover Effects

// email
$('.social-icon--email')
	.mouseenter(function() {
		$('.fa-envelope').addClass('colour')
		$('.tooltip').css('visibility: visible; opacity: 1; transform: translate(-50%, -150%)')
	})
	.mouseleave(function() {
		$('.fa-envelope').removeClass('colour')
	})

// github
$('.social-icon--github')
	.mouseenter(function() {
		$('.fa-github').addClass('colour')
	})
	.mouseleave(function() {
		$('.fa-github').removeClass('colour')
	})

// linkedin
$('.social-icon--linkedin')
	.mouseenter(function() {
		$('.fa-linkedin-in').addClass('colour')
	})
	.mouseleave(function() {
		$('.fa-linkedin-in').removeClass('colour')
	})

// dribbble
$('.social-icon--dribbble')
	.mouseenter(function() {
		$('.fa-dribbble').addClass('colour')
	})
	.mouseleave(function() {
		$('.fa-dribbble').removeClass('colour')
	})

// instagram
$('.social-icon--instagram')
	.mouseenter(function() {
		$('.fa-instagram').addClass('colour')
	})
	.mouseleave(function() {
		$('.fa-instagram').removeClass('colour')
	})

// Tooltip

$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip()
})
