$(function(){

    $('button').on('click', function(){
        $('.overlay').addClass('open')
    })

    $('.ok').on('click', function(){
        $('.overlay').removeClass('open')
    })

})