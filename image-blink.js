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
for(var i=900; i < 6500; i=i+900)
{
  setTimeout("show()",i+450);
  setTimeout("hide()",i);
}
