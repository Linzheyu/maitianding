
jQuery("html").addClass('bonfire-html-onload');
/* disable browser scroll on touch devices */
jQuery(document.body).on("touchmove", function(e) {
    e.preventDefault();
});

/* disable browser scroll on desktop */
var scrollPosition = [
self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];

var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-hide');
jQuery(".bonfire-pageloader-icon").addClass('bonfire-pageloader-icon-hide');

function resizenow() {
	var browserwidth = jQuery(window).width();
	var browserheight = jQuery(window).height();
	jQuery('.bonfire-pageloader-icon').css('right', ((browserwidth - jQuery(".bonfire-pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".bonfire-pageloader-icon").height())/2));
};
resizenow();