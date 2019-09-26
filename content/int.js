jQuery(document).ready(function(){
    jQuery('#navbar').on('click', function(event) {        
        jQuery('#navhidden').toggle('show');
    });
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    });
    $("#redir-abt").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
        jQuery('#navhidden').toggle('hide');
        $hamburger.toggleClass("is-active");
    });
    $("#redir-dev").click(function() {
        $('html, body').animate({
            scrollTop: $("#dev").offset().top
        }, 2000);
        jQuery('#navhidden').toggle('hide');
        $hamburger.toggleClass("is-active");
    });
    $("#redir-img").click(function() {
        $('html, body').animate({
            scrollTop: $("#img").offset().top
        }, 2000);
        jQuery('#navhidden').toggle('hide');
        $hamburger.toggleClass("is-active");
    });
});
