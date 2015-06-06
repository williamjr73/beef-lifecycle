(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

jQuery(document).ready(function($) {
	// Show elements when visible
	var win = $(window);

	// Partial view before animation
	var allMods = $(".module");

	allMods.each(function(i, el) {
	  var el = $(el);
	  if (el.visible(true)) {
	    el.addClass("already-visible"); 
	  } 
	});

	win.scroll(function(event) {
	  
	  allMods.each(function(i, el) {
	    var el = $(el);
	    if (el.visible(true)) {
	      el.addClass("come-in"); 
	    } 
	  });
	  
	});

	// Full view before animation
	var allModsFull = $(".module-full");

	allModsFull.each(function(i, el) {
	  var el = $(el);
	  if (el.visible(false)) {
	    el.addClass("already-visible"); 
	  } 
	});

	win.scroll(function(event) {
	  
	  allModsFull.each(function(i, el) {
	    var el = $(el);
	    if (el.visible(false)) {
	      el.addClass("come-in"); 
	    } 
	  });
	  
	});

	// Logo Animation
	$('.logo').addClass('rise');

	//
	$('.video-overlay').click(function () {
	  $(this).hide();
	  // use the parameters to play the video now..
	  $(this).prev('video').get(0).play();
	});

	$('body').on('hidden.bs.modal', '.modal', function () {
		$('video').get(0).pause();
	});

jQuery('.modal').on('hidden.bs.modal', function (e) {
  // do something...
  jQuery('.modal video').attr("src", jQuery(".modal video").attr("src"));
	$('video').get(0).pause();
});

	/*$('.popup-cow-calf').on('hide', function () {
	    $('.popup-cow-calf video').addClass('WORKING');
	});*/

$('.popup-cow-calf').on('remove', function(e) {
	console.log(e);
	$('video').get(0).pause();
});

$(".popup-cow-calf").bind("hide", function() {
    alert("hide triggered");
});

});