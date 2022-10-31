// sdg modal open
export function sdgModal() {
  const windowTop = window.top || window;
  const $modalOpen = jQuery('.sdg-card:not(.sdg-card-link)');

  // Remove hash in url on modal close
  function removeHash() {
    windowTop.history.pushState('', document.title, windowTop.location.pathname + windowTop.location.search);
  }

  // Modal open on sdgcard click
  jQuery($modalOpen).on('click', function (event) {
    event.preventDefault();
    jQuery('.modal-sdg-content').animate({ scrollTop: 0 }, 'slow');

    // Get href in sdgcard
    var url = jQuery(this).attr('href');
    var currentcolor = jQuery(this).attr('class').split(' ')[1];
    var currentgoal = jQuery(this).find('h4').text();
    var currentheading = jQuery(this).find('strong').text();

    var nextcolor = jQuery(this).next(".sdg-card").attr('class').split(' ')[1];
    var nextgoal = jQuery(this).next(".sdg-card").find('h4').text();
    var nextheading = jQuery(this).next(".sdg-card").find('strong').text();
    var nexturl = jQuery(this).next(".sdg-card").attr('href');

    windowTop.location.hash = url;
    jQuery(this).addClass('last-active').siblings().removeClass('last-active');;
    jQuery('.modal-sdg').addClass('sdg-open').find('.sdg-container').addClass(currentcolor);
    jQuery('.modal-sdg').find('.heading').find('h3').text('Goal '+ currentheading);
    jQuery('.modal-sdg').find('.heading').find('h2').text(currentgoal);
    jQuery('.modal-sdg').find('.ndg-container .sdg-card').attr("href",nexturl).addClass(nextcolor);
    jQuery('.modal-sdg').find('.ndg-container strong').text(nextheading);
    jQuery('.modal-sdg').find('.ndg-container h4').text(nextgoal);

    jQuery('body').addClass('sdgmodal-open');
    jQuery($modalOpen).attr('tabindex', '-1');
  });

  jQuery(document).on('click', '.ndg-container .sdg-card', function(event){
    event.preventDefault();
    event.stopPropagation();
    var url = jQuery(this).attr('href');
    var lastactive = jQuery(".last-active").next(".sdg-card");
    var bottomcolor = lastactive.attr('class').split(' ')[1];
    var bottomgoal = lastactive.find('h4').text();
    var bottomheading = lastactive.find('strong').text();
    var nextcolor = lastactive.next(".sdg-card").attr('class').split(' ')[1];
    var nextgoal = lastactive.next(".sdg-card").find('h4').text();
    var nextheading = lastactive.next(".sdg-card").find('strong').text();
    var nexturl = lastactive.next(".sdg-card").attr('href');

    jQuery('.sdg-container').addClass(bottomcolor);
    jQuery('.modal-sdg').find('.heading').find('h3').text('Goal '+ bottomheading);
    jQuery('.modal-sdg').find('.heading').find('h2').text(bottomgoal);
    jQuery('.modal-sdg').find('.ndg-container .sdg-card').attr("href",nexturl).addClass(nextcolor);
    jQuery('.modal-sdg').find('.ndg-container strong').text(nextheading);
    jQuery('.modal-sdg').find('.ndg-container h4').text(nextgoal);
    jQuery(".last-active").next(".sdg-card").addClass('last-active').siblings().removeClass('last-active');
    windowTop.location.hash = url;
  });


  jQuery($modalOpen).on('click', function (event) {
    event.preventDefault();
    jQuery('.modal-sdg-content').animate({ scrollTop: 0 }, 'slow');

    // Get href in sdgcard
    var url = jQuery(this).attr('href');
    var currentcolor = jQuery(this).attr('class').split(' ')[1];
    var currentgoal = jQuery(this).find('h4').text();
    var currentheading = jQuery(this).find('strong').text();

    var nextcolor = jQuery(this).next(".sdg-card").attr('class').split(' ')[1];
    var nextgoal = jQuery(this).next(".sdg-card").find('h4').text();
    var nextheading = jQuery(this).next(".sdg-card").find('strong').text();

    windowTop.location.hash = url;
    jQuery(this).addClass('last-active');
    jQuery('.modal-sdg').addClass('sdg-open').find('.sdg-container').addClass(currentcolor);
    jQuery('.modal-sdg').find('.heading').find('h3').text('Goal '+ currentheading);
    jQuery('.modal-sdg').find('.heading').find('h2').text(currentgoal);

    jQuery('.modal-sdg').find('.ndg-container .sdg-card').addClass(nextcolor);
    jQuery('.modal-sdg').find('.ndg-container strong').text(nextheading);
    jQuery('.modal-sdg').find('.ndg-container h4').text(nextgoal);

    jQuery('body').addClass('sdgmodal-open');
    jQuery($modalOpen).attr('tabindex', '-1');
  });

  // Modal close someone hits the escape key
  jQuery(document).keydown((event) => {
    if (event.keyCode == 27 && jQuery('.modal-sdg').hasClass('sdg-open')) {
      removeHash();
      jQuery('.sdg-container').attr("class","sdg-container");
      jQuery('.ndg-container .sdg-card').attr("class","sdg-card");
      jQuery('.modal-sdg').addClass('animation-out');
      setTimeout(function () {
        jQuery('.modal-sdg').removeClass('sdg-open animation-out');
      }, 200);
      jQuery('body').removeClass('sdgmodal-open');
      jQuery('.last-active').focus().removeClass('last-active');
      jQuery($modalOpen).attr('tabindex', '0');
    }
  });

  // Modal close on close button
  jQuery('.modal-sdg .close, .modal-sdg .modal-header').on('click', () => {
    jQuery('.sdg-container').attr("class","sdg-container");
    jQuery('.ndg-container .sdg-card').attr("class","sdg-card");
    jQuery('.modal-sdg').addClass('animation-out');
    setTimeout(function () {
      jQuery('.modal-sdg').removeClass('sdg-open animation-out');
    }, 200);
    jQuery('body').removeClass('sdgmodal-open');
    jQuery($modalOpen).removeAttr('tabindex');
    // Call removeHash funtion for remove hash in url on close button
    removeHash();
  });
}
