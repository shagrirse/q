jQuery(document).ready(function(){
    jQuery('#navbar').on('click', function(event) {        
        jQuery('#navhidden').fadeToggle('fast');
    });

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    });

    $("#redir-abt").click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
        jQuery('#navhidden').fadeToggle('slow');
        $hamburger.toggleClass("is-active");
    });

    $("#redir-dev").click(function() {
        $('html, body').animate({
            scrollTop: $("#dev").offset().top
        }, 1000);
        jQuery('#navhidden').fadeToggle('slow');
        $hamburger.toggleClass("is-active");
    });

    $("#redir-img").click(function() {
        $('html, body').animate({
            scrollTop: $("#img").offset().top
        }, 1000);
        jQuery('#navhidden').fadeToggle('slow');
        $hamburger.toggleClass("is-active");
    });

    }).resize(); // This will simulate a resize to trigger the initial run.

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 0.1) {
            $('#container1').fadeOut('fast');
            $('#navbar').css('display', 'block');
        }
        else {
            $('#whole').css('display', 'block');
        }
   });
