// LOADER

jQuery(document).ready(function() {
  /* Show the HTML page only after the js and css are completely loaded */
  delayShow();
});

function delayShow() {
  var secs = 1000;
  setTimeout('jQuery("body").css("visibility","visible");', secs);
}
