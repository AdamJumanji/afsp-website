
var smoothScrollingTargetElement = 'a[href*="#"]:not([href="#"])';

function enableSmoothScolling() {
  $(smoothScrollingTargetElement).click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
};

function loadTemplateById(contentToLoadTo, sourceTemplate){
  var link = document.querySelector(sourceTemplate);
    // Clone the <template> in the import.
    var template = link.import.querySelector('template');
    var clone = document.importNode(template.content, true);

    document.querySelector(contentToLoadTo).appendChild(clone);
}

$(document).ready(function() {
  enableSmoothScolling();
  loadTemplateById("#nav", "#nav-template");

})

