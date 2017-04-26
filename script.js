$(document).ready(function() {

    var name = $('#firstName' + '#lastName'),
        email = $('email'),
        phone = $('#phoneNum'),
        seat = $('numSeat');



    var userInfo = {
        name: 'Name',
        seat: [],
        phone: 5555555555,
        email: 'email@site.com'

    };



//------------------------------------------------


$('.row div').on('click', function(){
  $(this).toggleClass('red');


  if( $(this).hasClass('red')){
    $(this).css('background-color', 'red');
    var seatNumber = this.innerHTML;
    userInfo.seat.push(seatNumber);
    console.log(userInfo.seat);
  }else{
    $(this).css('background-color', 'green');
    var seatNumber = this.innerHTML;
    var ind = userInfo.seat.indexOf(seatNumber);
    userInfo.seat.splice(ind, 1);
    console.log(userInfo.seat);
 }
});


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
