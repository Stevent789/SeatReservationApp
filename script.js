$(document).ready(function() {

    var name = $('#firstName' + '#lastName'),
        email = $('email').innerHtML,
        phone = $('#phoneNum'),
        seat = $('numSeat');



    var userInfo = {
        name: 'Name',
        seat: [],
        phone: 5555555555,
        email: ''

    };



//-------FUNCTION FOR ADDING SEAT NUMBERS TO ARRAY OF SEATS--------------

//--------------for some reason this is no longer working ---------------
$('.row div').on('click', function(){
    $(this).toggleClass('red');
    if( $(this).hasClass('red')){
      console.log('??');
      // $(this).css('background-color', 'red');
      // var seatNumber = this.innerHTML;
      // userInfo.seat.push(seatNumber);
      // console.log(userInfo.seat);
    }else{
      console.log('working');
      // $(this).css('background-color', 'green');
      // var seatNumber = this.innerHTML;
      // var ind = userInfo.seat.indexOf(seatNumber);
      // userInfo.seat.splice(ind, 1);
      // console.log(userInfo.seat);
    }
});

//-----------this toggles in the form----- the toggle shrinks the form :(

$('#ready-button').on('click', function(){
  $('form').css('visibility', 'visible');
  //$('#marquee').css('visibility', 'hidden');
//  $('form').addClass('w3-animate-right');
});

//---------END OF SEAT FUNCTION------------------

//on form submit function...........
$('form-submit').on('click', function(){
    var firstName = $('#firstName').html();
    var lastName = $('#lastName').html();
    var email = $('#email').html();
    var phoneNum = $('#phoneNum').html();
    var name = firstName + ' ' + lastName;

    var seatpush = $(this).attr('id');
    seatpush.push(name, email, phoneNum, userInfo.seat);
    console.log(seatPush);
});

//this should work to display the name on the seat when hovered over and change back when mouse leaves

$('.row div').on('click', function(){
  $(this).toggleClass('red');

  $('.row div').mouseenter(function() {
    $( this ).text( $(this).attr('id')+[] )//+ </br> + email + </br> + phone + </br> + seat);
  });

  $('.row div').mouseleave(function(){
    $( this ).text( $(this).attr('id') );
  });

var A1 = [], A2 = [], A3 = [], A4 = [], A5 = [], A6 = [];

var B1 = [], B2 = [], B3 = [], B4 = [], B5 = [], B6 = [];

var C1 = [], C2 = [], C3 = [], C4 = [], C5 = [], C6 = [];

var D1 = [], D2 = [], D3 = [], D4 = [], D5 = [], D6 = [];

});
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


//------------------------------------------------
