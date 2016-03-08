
var smoothScrollingTargetElement = 'a[href*="#"]:not([href="#"])';
var headerHeight = 100;
var mobileNavClassChangeName = "movile-nav-change"

function enableSmoothScolling() {
  $(smoothScrollingTargetElement).click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 300);
        return false;
      }
    }
  });
};


function openMobileNavbar(x) {
    x.classList.toggle(mobileNavClassChangeName);
}
$(document).ready(function() {
  enableSmoothScolling();
})

