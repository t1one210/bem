/*window.onload = function(){
    document.getElementById("b-menu_phone_image").onclick = function() {
    open()
  };
  
  function open() {
    document.getElementById("b-menu-line-one b-menu-line-t").classList.toggle("show");
  }
}*/

(function($){
    $(function() {
      $('.b-page_hamb-menu').on('click', function() {
        $(this).closest('.b-page_menu')
          .toggleClass('menu_state_open');
      });
      
      $('.b-page__head-line_button-header-1').on('click', function() {
        // do something
  
        $(this).closest('.b-page_menu')
          .removeClass('menu_state_open');
      });
    });
  })(jQuery);