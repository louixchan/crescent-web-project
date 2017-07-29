onDomReady( function() {
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var header = document.getElementByClassName('header');
    var navbarHeight = header.outerHeight();

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
            header.removeClass('nav-down').addClass('nav-up');
            console.log("Test down");
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                header.removeClass('nav-up').addClass('nav-down');
            }
        }
    }

    var mq = window.matchMedia( "(max-width: 575px)" );
    if (mq.matches) {
        $('body').addClass('scrolling');
    }

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var header = $("#header");
    var navbarHeight = $(header).outerHeight();

    $(window).scroll(hasScrolled);

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        if( st > 107) {
            $('body').addClass('scrolling');
            // document.getElementById('testing').setAttr('testingVariable', 0);
            // document.getElementById('testing').getAttr('testingVariable'); // 0
        }

        if( st < 107) {
            $('body').removeClass('scrolling');
        }
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        // if (st > lastScrollTop && st > navbarHeight){
        //     // Scroll Down
        //     $(header).removeClass('nav-down').addClass('nav-up');
        //     console.log("Test down");
        // } else {
        //     // Scroll Up
        //     if(st + $(window).height() < $(document).height()) {
        //         $(header).removeClass('nav-up').addClass('nav-down');
        //     }
        // }
    }


    // $('.responsive').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    //     ]
    // });
});