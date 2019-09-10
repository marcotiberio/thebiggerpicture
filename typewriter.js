var str = $('.loader-text')[0].innerHTML,
    i = 0,
    isTag;

console.log(str);

(function type() {
    text = str.slice(0, ++i);
    $('.loader-text')[0].innerHTML = text;
    if (text === str) { callback(); return; }

    var delay = Math.round(Math.random()*100) + 30
    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, delay);
}());

function callback() {
    setTimeout(function(e) {
        $('.highlight-1, .highlight-2').addClass('highlight');
    }, 300);
}
