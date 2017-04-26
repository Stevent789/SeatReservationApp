alert(userInfo);

$(document).ready(function() {

    var name = $('#firstName' + '#lastName'),
        email = $('email'),
        phone = $('#phoneNum'),
        seat = $('numSeat');



    var userInfo = {
        name: 'Name',
        seat: 'B2',
        phone: 5555555555,
        email: 'email@site.com'
    };


    $('#ready-button').on('click',function() {


    $('form').addClass('w3-animate-top')
        .css('visibility', 'visible');
            });
    
