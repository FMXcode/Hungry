$(document).ready(function(){

     $('[href^="#"]').on('click', function(event){
          if ($(this).attr('hash') !== "") {
          event.preventDefault();
          let hash = $(this).prop('hash');
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 200, function(){
          });
        }
      });
     new WOW().init();

      let switchMode = document.getElementById("switchMode");

      switchMode.onclick = function() {
      let theme = document.getElementById("theme");

      if (theme.getAttribute("href") == "css/blocks/style.css") {
          theme.href = "css/blocks/_darkmod.css";
      }else{
        theme.href = "css/blocks/style.css";
      }
   }
});
	