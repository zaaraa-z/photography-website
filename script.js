$(document).ready(function () {
  //animation on scroll
  $(window).scroll(function () {
    let scrollPosition = $(this).scrollTop();
    // console.log(scrollPosition);
    if (scrollPosition >= 900) {
      $('.who-img').addClass('onscroll-from-left-anim');
      $('.who-text').addClass('onscroll-from-right-anim');
    } else {
      $('.who-img').removeClass('onscroll-from-left-anim');
      $('.who-text').removeClass('onscroll-from-right-anim');
    }
  });
});
