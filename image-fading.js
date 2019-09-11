$next = 1;			// fixed, please do not modfy;
$current = 0;		// fixed, please do not modfy;
$interval = 4000;	// You can set single picture show time;
$fadeTime = 2000;	// You can set fadeing-transition time;

$(document).ready(function(){
	//NOTE : Div Wrapper should with css: relative;
	//NOTE : img should with css: absolute;
	//NOTE : img Width & Height can change by you;
	$('#opacity').css('position','absolute');

	nextFadeIn();
});

function nextFadeIn(){
	//make image fade in and fade out at one time, without splash visual;
	$('#opacity').eq($next).delay($interval).fadeOut($fadeTime)
	.end().eq($current).delay($interval).hide().fadeIn($fadeTime).fadeOut($fadeTime).end();
};
