$(document).ready(function(){
	$('#header nav').slicknav();
	
	$('#header .nav ul li a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
		$('#header .nav ul li a').removeClass('active');
		$(this).addClass('active');

        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top 
        } , 900, 'swing', function () {
            window.location.hash = target;
        });
    });
	
	
	$('#shop .row .col .box .btn-price').hover(
		function(){
		  	$(this).parent('.box').find('.price').addClass('active');
		},
		function(){
		  $(this).parent('.box').find('.price').removeClass('active');
		});
	
	$('.slder-about').slick();
	
	$('.reviews-slider').slick({
		dots: true,
		fade: true
	});
	
	$( ".reviews-slider .slick-slide").each(function() {
		$(this).next().find('figure').clone().prependTo($(this).find('.next-slide'));
		$(this).next().find('.desc strong').clone().appendTo($(this).find('.next-slide .next-desc'));
		$(this).next().find('.desc span').clone().appendTo($(this).find('.next-slide .next-desc'));
	});
	$('.reviews-slider .slick-slide').first().find('.holder-slide > figure').clone().prependTo($('.reviews-slider .slick-slide').last().find('.next-slide'));
	$('.reviews-slider .slick-slide').first().find('.desc strong').clone().appendTo($('.reviews-slider .slick-slide').last().find('.next-slide .next-desc'));
	$('.reviews-slider .slick-slide').first().find('.desc span').clone().appendTo($('.reviews-slider .slick-slide').last().find('.next-slide .next-desc'));
	
	
	
	function colHeight () {
		maxH=0;
		$('#elements .row h3').each(function(i){
			if ($(this).height() > maxH){ maxH = $(this).height(); }
		});
		$('#elements .row h3').height(maxH);
	}colHeight();
	
	$('.form-valid').submit(function(e) {
		var err = false,
			current=$(this);
		current.find('input[type=tel]').each(function() {
			var patternTel = /([0-9])/;
			if(!patternTel.test($(this).val()) || $(this).val().length<2){
				err = true;
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
		current.find('input.name').each(function() {
			var pattern = /([A-Za-z])/;
			if(!pattern.test($(this).val()) || $(this).val().length<2){
				err = true;
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
		
		current.find('select').each(function() {
			if ($(this).val()=='') {
				err=true;
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
		
		if (err) {
			e.preventDefault();
		}
	});
	
	

	
	$(window).resize(function() {		
		$('#elements .row h3').height('auto');
		colHeight ();
	});
});