$(document).ready(function () {
  //animation on scroll
  $(window).scroll(function () {
    let scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 900) {
      $('.who-img').addClass('onscroll-from-left-anim');
      $('.who-text').addClass('onscroll-from-right-anim');
    } else {
      $('.who-img').removeClass('onscroll-from-left-anim');
      $('.who-text').removeClass('onscroll-from-right-anim');
    }
  });

  //gallery control
  $('.gallery-li').click(function () {
    const clickedAttr = $(this).attr('data-filter');
    if (clickedAttr == 'all') {
      $('.all-imgs').show(300);
    } else {
      $('.all-imgs')
        .not('.' + clickedAttr)
        .hide(300);
      $('.all-imgs')
        .filter('.' + clickedAttr)
        .show(300);
    }
    $(this).addClass('active').siblings().removeClass('active');
  });
});
