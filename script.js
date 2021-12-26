$(document).ready(function () {
  //animation on scroll: our mission
  $(window).scroll(function () {
    let scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 900) {
      $('.who-img').addClass('onscroll-from-left-anim');
      $('.who-text').addClass('onscroll-from-right-anim');
    } else {
      $('.who-img').removeClass('onscroll-from-left-anim');
      $('.who-text').removeClass('onscroll-from-right-anim');
    }

    if (scrollPosition >= 4100) {
      $('.pricing-card-1').addClass('card-to-right');
      $('.pricing-card-3').addClass('card-to-left');
      $('.pricing-card-2').addClass('card-to-top');
    } else {
      $('.pricing-card-1').removeClass('card-to-right');
      $('.pricing-card-3').removeClass('card-to-left');
      $('.pricing-card-2').removeClass('card-to-top');
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
