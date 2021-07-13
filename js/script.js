debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

$(window).on('scroll', debounce(function() {

    var $nav = $('nav'),
        navHeight = $nav.outerHeight(),
        windowTop = $(this).scrollTop();

    if (windowTop > navHeight) {
        $nav.addClass('small');
        $('nav > a').text('TC');
    } else {
        $nav.removeClass('small');
        $('nav > a').text('The Company');
    }
}, 200));