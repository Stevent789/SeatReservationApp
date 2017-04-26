$(document).ready(function() {

    var name = $('#firstName' + '#lastName'),
        email = $('email'),
        phone = $('#phoneNum'),
        seat = $('numSeat');



    var userInfo = {
        name: 'Name',
        seat: '',
        phone: 5555555555,
        email: 'email@site.com'

    };



//------------------------------------------------


$('.row div').on('click', function(){
  $(this).toggleClass('red');
  if()

  $(this).css('background-color', 'red');
  var seatNumber = this.innerHTML;
  userInfo.seat += seatNumber;
  console.log(userInfo.seat);
});


$(document).ready(function(){
    $("button").click(function(){
        $("p").toggleClass("main");
    });
});
</script>
<style>
.main {
    font-size: 120%;
    color: red;
}


//$('.row div').off('click');

// $('.row div').on('click',function() {
//   $(this).toggle(
//   function(){
//     $('.row div').css('background-color', 'red');
//     var seatNumber = this.innerHTML;
//     userInfo.seat += seatNumber;
//     console.log(userInfo.seat);
//   }, function() {
//     $(this).css('background-color', 'green');
//     var seatNumber = this.innerHTML;
//     userInfo.seat -= seatNumber;
//     console.log(userInfo.seat);
// });
// });




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
