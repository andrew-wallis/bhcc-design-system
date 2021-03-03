$(document).ready(function (){
    // Mobile menu
    $('.responsive-menu--icon').click(function(){
      if( $( this ).hasClass('open') ) {
        $('.responsive-menu').fadeOut(300);
        $(this).removeClass('open');
      } else {
        $('.responsive-menu').fadeIn(300);
        $(this).addClass('open');
      }
    });
});