// sdg modal open
export function sdgModal() {
  const windowTop = window.top || window;
  const $modalOpen = $('.sdg-card:not(.sdg-card-link)');

  // Remove hash in url on modal close
  function removeHash() {
    windowTop.history.pushState('', document.title, windowTop.location.pathname + windowTop.location.search);
  }

  // Modal open on sdgcard click
  $($modalOpen).on('click', function (event) {
    event.preventDefault();
    $('.modal-sdg-content').animate({ scrollTop: 0 }, 'slow');

    // Get href in sdgcard
    var url = $(this).attr('href');
    var currentcolor = $(this).attr('class').split(' ')[1];
    var currentgoal = $(this).find('h4').text();
    var currentheading = $(this).find('strong').text();

    var nextcolor = $(this).next(".sdg-card").attr('class').split(' ')[1];
    var nextgoal = $(this).next(".sdg-card").find('h4').text();
    var nextheading = $(this).next(".sdg-card").find('strong').text();
    var nexturl = $(this).next(".sdg-card").attr('href');

    windowTop.location.hash = url;
    $(this).addClass('last-active').siblings().removeClass('last-active');;
    $('.modal-sdg').addClass('sdg-open').find('.sdg-container').addClass(currentcolor);
    $('.modal-sdg').find('.heading').find('h3').text('Goal '+ currentheading);
    $('.modal-sdg').find('.heading').find('h2').text(currentgoal);
    $('.modal-sdg').find('.ndg-container .sdg-card').attr("href",nexturl).addClass(nextcolor);
    $('.modal-sdg').find('.ndg-container strong').text(nextheading);
    $('.modal-sdg').find('.ndg-container h4').text(nextgoal);

    $('body').addClass('sdgmodal-open');
    $($modalOpen).attr('tabindex', '-1');
  });

  $(document).on('click', '.ndg-container .sdg-card', function(event){
    event.preventDefault();
    event.stopPropagation();
    var url = $(this).attr('href');
    var lastactive = $(".last-active").next(".sdg-card");
    var bottomcolor = lastactive.attr('class').split(' ')[1];
    var bottomgoal = lastactive.find('h4').text();
    var bottomheading = lastactive.find('strong').text();
    var nextcolor = lastactive.next(".sdg-card").attr('class').split(' ')[1];
    var nextgoal = lastactive.next(".sdg-card").find('h4').text();
    var nextheading = lastactive.next(".sdg-card").find('strong').text();
    var nexturl = lastactive.next(".sdg-card").attr('href');

    $('.sdg-container').addClass(bottomcolor);
    $('.modal-sdg').find('.heading').find('h3').text('Goal '+ bottomheading);
    $('.modal-sdg').find('.heading').find('h2').text(bottomgoal);
    $('.modal-sdg').find('.ndg-container .sdg-card').attr("href",nexturl).addClass(nextcolor);
    $('.modal-sdg').find('.ndg-container strong').text(nextheading);
    $('.modal-sdg').find('.ndg-container h4').text(nextgoal);
    $(".last-active").next(".sdg-card").addClass('last-active').siblings().removeClass('last-active');
    windowTop.location.hash = url;
  });
  

  $($modalOpen).on('click', function (event) {
    event.preventDefault();
    $('.modal-sdg-content').animate({ scrollTop: 0 }, 'slow');

    // Get href in sdgcard
    var url = $(this).attr('href');
    var currentcolor = $(this).attr('class').split(' ')[1];
    var currentgoal = $(this).find('h4').text();
    var currentheading = $(this).find('strong').text();

    var nextcolor = $(this).next(".sdg-card").attr('class').split(' ')[1];
    var nextgoal = $(this).next(".sdg-card").find('h4').text();
    var nextheading = $(this).next(".sdg-card").find('strong').text();

    windowTop.location.hash = url;
    $(this).addClass('last-active');
    $('.modal-sdg').addClass('sdg-open').find('.sdg-container').addClass(currentcolor);
    $('.modal-sdg').find('.heading').find('h3').text('Goal '+ currentheading);
    $('.modal-sdg').find('.heading').find('h2').text(currentgoal);

    $('.modal-sdg').find('.ndg-container .sdg-card').addClass(nextcolor);
    $('.modal-sdg').find('.ndg-container strong').text(nextheading);
    $('.modal-sdg').find('.ndg-container h4').text(nextgoal);

    $('body').addClass('sdgmodal-open');
    $($modalOpen).attr('tabindex', '-1');
  });

  // Modal close someone hits the escape key
  $(document).keydown((event) => {
    if (event.keyCode == 27 && $('.modal-sdg').hasClass('sdg-open')) {
      removeHash();
      var currentcolor = $('.sdg-container').attr('class').split(' ')[1];
      $('.sdg-container').removeClass(currentcolor);
      $('.ndg-container .sdg-card').attr("class","sdg-card");
      $('.modal-sdg').addClass('animation-out');
      setTimeout(function () {
        $('.modal-sdg').removeClass('sdg-open animation-out');
      }, 200);
      $('body').removeClass('sdgmodal-open');
      $('.last-active').focus().removeClass('last-active');
      $($modalOpen).attr('tabindex', '0');
    }
  });

  // Modal close on close button
  $('.modal-sdg .close, .modal-sdg .modal-header').on('click', () => {
    var currentcolor = $('.sdg-container').attr('class').split(' ')[1];
    $('.sdg-container').removeClass(currentcolor);
    $('.ndg-container .sdg-card').attr("class","sdg-card");
    $('.modal-sdg').addClass('animation-out');
    setTimeout(function () {
      $('.modal-sdg').removeClass('sdg-open animation-out');
    }, 200);
    $('body').removeClass('sdgmodal-open');
    $($modalOpen).removeAttr('tabindex');
    // Call removeHash funtion for remove hash in url on close button
    removeHash();
  });
}

