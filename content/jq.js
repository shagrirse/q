$(document).ready(function () {
    $('.redir-about').click(function() {
    $('html, body').animate({
      scrollTop: $("container.about").offset().top
    }, 1000)
}), 