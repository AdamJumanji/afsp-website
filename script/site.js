
var smoothScrollingTargetElement = 'a[href*="#"]:not([href="#"])';
var headerHeight = 100;
var scrollSpeed = 300;
var mobileNavId = "#mobileNav";
var activeMobileMenuClassName = "movile-nav-change"
var navigationList = "nav";
var userAlerted = false;

// Smooth-scrolling that targets links with an anchor to the current page
function enableSmoothScolling() {
  $(smoothScrollingTargetElement).click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - headerHeight
        }, scrollSpeed, closeMobileNavbar);
                
        return false;
      }

    }
  });

};

// Toggles mobile navbar animation css
function toggleMobileNavbar() {
  $(mobileNavId)[0].classList.toggle(activeMobileMenuClassName);
  $(navigationList).toggle();
}

function closeMobileNavbar(){
  if($(mobileNavId).hasClass(activeMobileMenuClassName)){
      toggleMobileNavbar();
  }
}

function enableMottoScrollToggle(){

if ( ($(window).width() > 350) && $("#ribbon").offset()) {
  var targetOffset = $("#ribbon").offset().top;
  var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset) { 
        $('#motto').css({'display':'inline-block'});
    } else {
        $('#motto').css({'display':'none'});
    }
});
}
}


$(document).ready(function() {
  enableSmoothScolling();
  enableMottoScrollToggle();  

})

