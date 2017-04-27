alert(userInfo);

$(document).ready(function() {

    var name = $('#firstName' + '#lastName'),
        email = $('email'),
        phone = $('#phoneNum'),
        seat = $('numSeat');



    var userInfo = {
        name: '',
        seat: [],
        phone: 5555555555,
        email: ''
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


//------------------------------------------------


    $('#ready-button').on('click',function() {

        alert("Test!");
//    $('form').addClass('w3-animate-top')
//        .css('visibility', 'visible');
            });
