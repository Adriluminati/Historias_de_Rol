/*
$(document).ready(function(){
	$('.goup').hide();
	$('.goup').click(function(){
		$('body,html').animate({
			scrollTop:0
		},1000)
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() &gt; 200) {
			$('.goup').fadeIn();
		}
		else {
			$('.goup').fadeOut();
		}
	});
});
*/



mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}