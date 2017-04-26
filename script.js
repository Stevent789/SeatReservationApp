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

//------------------------------------------------

    $('.row div').on("click", function(){
      $(this).css('background-color', 'red');
      userInfo.seat = 

    })


//  $("#A1").mouseenter(function() {
//    $("#A1").css("opacity", "0.25")
//    $(this).fadeOut(30)
//  });
//
//   $("#A1").mouseout(function() {
//     $(this).fadeIn(30);
//     $("#A1").css("opacity", "1.0")
// });
});

//------------------------------------------------
