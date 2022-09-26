$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

$(document).ready(function(){
    
  $(window).scroll(function(){
      if($(this).scrollTop() >= 500) {
          $("#gotop").fadeIn();
    
          $("#top-btn").click(function(){
              $(window).scrollTop(0);
          });
       }
       else {
           $("#gotop").fadeOut();
       }    
  });
});

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
  $(".mainMenu").toggleClass("active");
  $(".mainMenu a").toggleClass("active");
}

window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}