(function($) {
    $.support.placeholder = ('placeholder' in document.createElement('input'));
})(jQuery);


//fix for IE7 and IE8
$(function() {
    if (!$.support.placeholder) {
        $("[placeholder]").focus(function() {
            if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
        }).blur(function() {
            if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
        }).blur();

        $("[placeholder]").parents("form").submit(function() {
            $(this).find('[placeholder]').each(function() {
                if ($(this).val() == $(this).attr("placeholder")) {
                    $(this).val("");
                }
            });
        });
    }
});

$(function() {
    if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
        $('.menu li:last-child, .news:last-child, .slider-branch .row img:last-child').addClass('last-child');
        $('.slider-branch .row:first-child, .menu-footer li:first-child').addClass('first-child');
    }
});
