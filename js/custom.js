(function ($) {
	'use strict';

	// AOS ANIMATIONS
	AOS.init();

	// NAVBAR
	$('.navbar-nav .nav-link').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// NEWS IMAGE RESIZE
	function NewsImageResize() {
		$('.navbar').scrollspy({ offset: -76 });

		var LargeImage = $('.large-news-image').height();

		var MinusHeight = LargeImage - 6;

		$('.news-two-column').css({ height: MinusHeight - LargeImage / 2 + 'px' });
	}

	$(window).on('resize', NewsImageResize);
	$(document).on('ready', NewsImageResize);

	$('a[href*="#"]').click(function (event) {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate(
					{
						scrollTop: target.offset().top - 66,
					},
					1000
				);
			}
		}
	});
})(window.jQuery);

var siteCarousel = function () {
	$('.slide-one-item').owlCarousel({
		center: false,
		items: 1,
		loop: true,
		stagePadding: 0,
		margin: 0,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		nav: true,
		navText: [
			'<span class="icon-keyboard_arrow_left">',
			'<span class="icon-keyboard_arrow_right">',
		],
	});

	$('.slide-one-item-alt').owlCarousel({
		center: false,
		items: 1,
		loop: true,
		stagePadding: 0,
		margin: 0,
		smartSpeed: 1000,
		autoplay: true,
		pauseOnHover: true,
		onDragged: function (event) {
			console.log('event : ', event.relatedTarget['_drag']['direction']);
			if (event.relatedTarget['_drag']['direction'] == 'left') {
				$('.slide-one-item-alt-text').trigger('next.owl.carousel');
			} else {
				$('.slide-one-item-alt-text').trigger('prev.owl.carousel');
			}
		},
	});
	$('.slide-one-item-alt-text').owlCarousel({
		center: false,
		items: 1,
		loop: true,
		stagePadding: 0,
		margin: 0,
		smartSpeed: 1000,
		autoplay: true,
		pauseOnHover: true,
		onDragged: function (event) {
			console.log('event : ', event.relatedTarget['_drag']['direction']);
			if (event.relatedTarget['_drag']['direction'] == 'left') {
				$('.slide-one-item-alt').trigger('next.owl.carousel');
			} else {
				$('.slide-one-item-alt').trigger('prev.owl.carousel');
			}
		},
	});

	$('.custom-next').click(function (e) {
		e.preventDefault();
		$('.slide-one-item-alt').trigger('next.owl.carousel');
		$('.slide-one-item-alt-text').trigger('next.owl.carousel');
	});
	$('.custom-prev').click(function (e) {
		e.preventDefault();
		$('.slide-one-item-alt').trigger('prev.owl.carousel');
		$('.slide-one-item-alt-text').trigger('prev.owl.carousel');
	});
};
siteCarousel();
