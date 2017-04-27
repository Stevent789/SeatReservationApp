$(document).ready(function() {

    var name = $('#firstName' + '#lastName'),
        email = $('email'),
        phone = $('#phoneNum'),
        seat = $('numSeat');



    var userInfo = {
        name: '',
        seat: [],
        phone:'' ,
        email: ''

    };

    var slideIndex = 1;
showDivs(slideIndex);

var plusDivs function(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}



//-------FUNCTION FOR ADDING SEAT NUMBERS TO ARRAY OF SEATS--------------

//------when a seat is clicked the backgrround color changes to red and the
//id of the seat gets added to an array of seatsSelected. if the seat is clicked again
//the color will change back to green and the id of that seat number will be removed from that
var seatsSelected = [];

$('.row div').on('click', function(){
    $(this).toggleClass('red');
    if( $(this).hasClass('red')){
      $(this).css('background-color', 'red');
      var seatNumber = $(this).html();
      seatsSelected.push(seatNumber);
      console.log(seatsSelected);
    }else{
      $(this).css('background-color', 'green');
      var seatNumber = $(this).html();
      var ind = seatsSelected.indexOf(seatNumber);
      seatsSelected.splice(ind, 1);
      console.log(seatsSelected);
    }
});


//-----------this toggles in the form----- the toggle shrinks the form :(

$('#ready-button').on('click', function(){
      $('form').css('visibility', 'visible');
      //$('#marquee').css('visibility', 'hidden');
    //  $('form').addClass('w3-animate-right');
});


// //---------END OF SEAT FUNCTION------------------
//
// //on form submit function...........
// $('form-submit').on('click', function(){
//     var firstName = $('#firstName').html();
//     var lastName = $('#lastName').html();
//     var email = $('#email').html();
//     var phoneNum = $('#phoneNum').html();
//     var name = firstName + ' ' + lastName;
//
//     var seatpush = $(this).attr('id');
//     seatpush.push(name, email, phoneNum, userInfo.seat);
//     console.log(seatPush);
// });
//
// //this should work to display the name on the seat when hovered over and change back when mouse leaves
//
// $('.row div').on('click', function(){
//   $(this).toggleClass('red');
//
//   $('.row div').mouseenter(function() {
//     $( this ).text( $(this).attr('id')+[] )//+ </br> + email + </br> + phone + </br> + seat);
//   });
//
//   $('.row div').mouseleave(function(){
//     $( this ).text( $(this).attr('id') );
//   });
//
// var A1 = [], A2 = [], A3 = [], A4 = [], A5 = [], A6 = [];
//
// var B1 = [], B2 = [], B3 = [], B4 = [], B5 = [], B6 = [];
//
// var C1 = [], C2 = [], C3 = [], C4 = [], C5 = [], C6 = [];
//
// var D1 = [], D2 = [], D3 = [], D4 = [], D5 = [], D6 = [];

});




//------------------------------------------------
