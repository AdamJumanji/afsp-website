
var smoothScrollingTargetElement = 'a[href*="#"]:not([href="#"])';
var headerHeight = 100;
var mobileNavClassChangeName = "movile-nav-change"
var navigationListClassDisplayName = "display";
var navigationList = "nav";


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


function toggleMobileNavbar(x) {
    x.classList.toggle(mobileNavClassChangeName);
    toggleNavigationList();

}

function toggleNavigationList(){
$(navigationList).toggle(navigationListClassDisplayName);
}

$(document).ready(function() {
  enableSmoothScolling();
})

