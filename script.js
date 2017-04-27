$(document).ready(function() {

    var name = $('#firstName' + '#lastName'),
        email = $('email'),
        phone = $('#phoneNum'),
        seat = $('numSeat');

seatInfo = [];




// FUNCTION FOR CAROUSEL
$("#left").on("click", function() {
  plusDivs(-1);
});

var slideIndex = 1;
showDivs(slideIndex);

var plusDivs = function(n) {
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

$("#right").on("click", function(){
  plusDivs(1);
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
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
var A1, A2, A3, A4, A5, A6, B1, B2, B3, B4, B5, B6, C1, C2, C3, C4, C5, C6, D1, D2, D3, D4, D5, D6;
var seatNumber;
var seatsTotal = [];
$('.row div').on('click', function(){
    $(this).toggleClass('red');
    if( $(this).hasClass('red')){
      $(this).css('background-color', 'red');
      seatNumber = $(this).html();
      seatsTotal.push(seatNumber);
      console.log(seatsTotal);
    }else{
      $(this).css('background-color', 'green');
      var seatNumber = $(this).html();
      var ind = seatsTotal.indexOf(seatNumber);
      seatsTotal.splice(ind, 1);
      console.log(seatsTotal);
    }
  });

    //    this makes the form appear when the sready button is clicked
    $('#ready-button').on('click', function(){
          $('form').css('visibility', 'visible');
          //$('#marquee').css('visibility', 'hidden');
        //  $('form').addClass('w3-animate-right');
    });

    // this links the text fields to create values for our variables
    $('#form-submit').on('click', function(){
        console.log('submit complete');
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var mail = $('#email').val();
        var phoneNum = $('#phoneNum').val();
        var names = firstName + ' ' + lastName;
        var userInfo = {
            name: names,
            seat: seatsTotal,
            phone: phoneNum,
            email: mail
          };
        console.log(userInfo.seat);
        seatInfo.push(userInfo);
        $('form').css('visibility', 'hidden');
        seatsTotal = [];
        seatNumber = '';
        console.log(userInfo.name)


    });

    // $('.row div').mouseenter(function() {
    //      $(this).text($(this).attr('id')+ )//+ </br> + email + </br> + phone + </br> + seat);
    //    });
    //
    //    $('.row div').mouseleave(function(){
    //      $( this ).text( $(this).attr('id') );
    //    });





$('#ready-button').on('click', function(){
      $('form').css('visibility', 'visible')
      //$('#marquee').css('visibility', 'hidden');
    //  $('form').addClass('w3-animate-right');

});
});
