// See more button	
$(document).ready(function() {
	$(".btn-primary").on('click touch', function() {
		$(this).toggleClass('active');
		$(this).parent().parent().parent().parent().nextAll('.container-fluid').first().slideToggle('300');
	});
});

// Progress bar
$(document).ready(function(){

	var getMax = function(){
		return $(document).height() - $(window).height();
	}
	var getValue = function(){
		return $(window).scrollTop();
	}
	if('max' in document.createElement('progress')){
		// Browser supports progress element
		var progressBar = $('progress');

		// Set the Max attr for the first time
		progressBar.attr({ max: getMax() });

		$(document).on('scroll', function(){
			// On scroll only Value attr needs to be calculated
			progressBar.attr({ value: getValue() });
		});

		$(window).resize(function(){
			// On resize, both Max/Value attr needs to be calculated
			progressBar.attr({ max: getMax(), value: getValue() });
		});
	}
	else{
		var progressBar = $('.progress-bar'),
			max = getMax(),
			value, width;

		var getWidth = function(){
			// Calculate width in percentage
			value = getValue();
			width = (value/max) * 100;
			width = width + '%';
			return width;
		}

		var setWidth = function(){
			progressBar.css({ width: getWidth() });
		}

		$(document).on('scroll', setWidth);
		$(window).on('resize', function(){
			// Need to reset the Max attr
			max = getMax();
			setWidth();
		});
	}

	$('#flat').addClass("active");
	$('#progressBar').addClass('flat');

	$('#flat').on('click', function(){
		$('#progressBar').removeClass().addClass('flat');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
	});

});

// Share social
$(document).ready(function(){

	var triggered = false;
	var share_btns_class = '.twitter, .facebook, .linkedin';

	$(".trigger").click(function(){
		if(triggered == false){
			//Show
			$(share_btns_class).addClass("s_active");
			triggered = true;
		}else{
			//Hide
			$(share_btns_class).removeClass("s_active");
			triggered = false;
		}
	})
});

// Share social
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 40;
	var navbarHeight = $(".nav-header").outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();

	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $(".nav-header").removeClass("nav-down").addClass("nav-up");
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $(".nav-header").removeClass("nav-up").addClass("nav-down");
	        }
	    }

	    lastScrollTop = st;
	}
