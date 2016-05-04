$(document).ready(function() {
    var left_scroll = $('.scroll_left');
    var right_scroll = $('.scroll_right');
    var elements_ul = $('.slide_list');

    var one_slide = 600;
    var initial_position = 0;
    var count = elements_ul.find('li').length;
    var min = - ((count - 1 ) * one_slide);
    var max = 0;


    left_scroll.click(function() {
    if (initial_position != max){
        initial_position  +=600;
        elements_ul.animate({ left : initial_position + "px"}, 600);
    }
    });
    right_scroll.click(function() {
        if (initial_position != min) {
            initial_position -= 600;
            elements_ul.animate({left: initial_position + "px"}, 600);
            }
    });



});