$(document).ready(function() {

    var name = $('#firstName' + '#lastName'),
        email = $('email'),
        phone = $('#phoneNum'),
        seat = $('numSeat');



    var userInfo = {
        name: 'Name',
        seat: 'B2', 'B3',
        phone: 5555555555,
        email: 'email@site.com'

    };

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

});

//------------------------------------------------

userInfo.name
