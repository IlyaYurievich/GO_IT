/*CHECKBOX(JQUERY)*/
$(function () {
    var l = $('.js-checkbox-wrap input');
    for (var i = l.length - 1; i >= 0; i--) {
        $(l[i]).prettyCheckable();
    }
    /*Menu*/

    $(document).ready(function () {
        $('.dropdown').hover(
            function () {
                $(this).children('.sub-menu').slideDown(200);
            },
            function () {
                $(this).children('.sub-menu').slideUp(200);
            }
        );
    });

    /*SELECT*/
    $(document).ready(function () {
        $('select').selecter();
    });

});















