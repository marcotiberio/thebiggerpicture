// LOADER

jQuery(document).ready(function() {
  /* Show the HTML page only after the js and css are completely loaded */
  delayShow();
});

function delayShow() {
  var secs = 1000;
  setTimeout('jQuery("body").css("visibility","visible");', secs);
}

// blink "on" state
function show()
{
  if (document.getElementById)
  document.getElementById("opacity").style.visibility = "hidden";
}
// blink "off" state
function hide()
{
  if (document.getElementById)
  document.getElementById("opacity").style.visibility = "visible";
}
// toggle "on" and "off" states every 450 ms to achieve a blink effect
// end after 4500 ms (less than five seconds)
for(var i=900; i < 7500; i=i+900)
{
  setTimeout("show()",i+450);
  setTimeout("hide()",i);
}
