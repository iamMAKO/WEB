(function($){

    // scroll
    $('menu a').on('click', function( event ){
	    event.preventDefault()
	    var hash = this.hash
	    $('html, body').animate({ scrollTop: hash.offset().top }, 3000, function(){
	        window.location.hash = hash
	    });
	})

    // popups
    var hidePopups = function(){
        $('.career-box-popup').hide();
        $('.our-work-item-popup').hide();
        $("#bg-grey").hide();
    }

    $('.career-box-popup-open').on('click', function(event){
        event.preventDefault();
        hidePopups();
        $(this).parent().next().show().addClass('active');
        $("#bg-grey").show();
    });

    $('.our-work-item').on('click', function(event){
        event.preventDefault();
        hidePopups();
        $(this).parent().find('.our-work-item-popup').show().addClass('active');
    })

    $('.career-box-popup-close').on('click', function(event){
        event.preventDefault();
        hidePopups();
    });

    $('.our-work-item-popup-close').on('click', function(event){
        event.preventDefault();
        hidePopups();
    })


    // mobile menu
    $('.menu-toggle').on('click', function(event){
        event.preventDefault();
        $('.menus').toggleClass('visible');
    })


    // banners
    var bannerImages = $('.banner img');
    bannerImages.eq(1).addClass('active');

    if( bannerImages.length > 1 ) {
        setInterval(function(){

            var activeImage = $('.banner .active');

            activeImage.removeClass('active');

            if( activeImage.index() >= bannerImages.length-1 ){
                $(bannerImages[0]).addClass('active');
            } else {
                activeImage.next().addClass('active');
            }

            activeImage.fadeIn(1200);
            bannerImages.not( activeImage ).fadeOut(1200);


        }, 7000);
    } else {
        // console.log(bannerImages.eq(1))
        bannerImages.eq(0).addClass("single");
    }


    // our work - slide
    var wrapper = $('.our-work .wrapper');

    function moveBoxToEnd(wrapper, box){
        var width = $(box).width() + parseInt($(box).css('marginRight'));
        wrapper.animate({'left': -width}, 3000, function(){
            $(box).remove();
            wrapper.css('left', 0);
            wrapper.append(box);
        });
    }
    
    setInterval(function(){
        var boxes = wrapper.find('.our-work-item');
        moveBoxToEnd(wrapper, boxes[0]);
    }, 3200);
    


    // career popup list
    var popup = $('.career-box-popup');
    
    function hideUls(){
        console.log($(window).width());
        if ($(window).width() <= 770 ){
            popup.find('ul').hide();
        } else {
            popup.find('ul').show();
        }
    }

    hideUls();

    $(window).on('resize', hideUls);

    
    popup.find('h2').on('click', function(){
        if ($(window).width() <= 770 ){
            $(this).toggleClass('opened');
            $(this).next().toggle();
        }
    });



})(jQuery);
