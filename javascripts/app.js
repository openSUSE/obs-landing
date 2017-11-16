$(document)
  .ready(function() {

    // fix menu when passed
    $('.masthead').visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    });

    $('#MainMenu a[href="' + window.location.pathname + '"]').addClass('active');
    $('#FollowingMenu a[href="' + window.location.pathname + '"]').addClass('active');
    $('#SideMenu a[href="' + window.location.pathname + '"]').addClass('active');

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');

    // show dropdown on hover
    $('.masthead  .ui.dropdown').dropdown({
      on: 'hover'
    });

    var carousel = $("#Glide");
    if (carousel.is('div')) {
      carousel.glide({
        type: "slider",
        autoplay: 10000,
        animationDuration: 1500
      });
      carousel.transition({
        animation: 'fade in',
        duration: 2000
      });
    }

    $(".video_play").click(function () {
      var video = $(this).data('video');
      $('#' + video).modal('show');
    });

    // lazy load images
    $('.lazy_show').visibility({
      onTopVisible: function (){
          $(this).transition({
            type : 'fade in',
            duration: 3000
          });
      }
    });

    // lazy load images
    $('.diagram').visibility({
      onTopVisible: function (){
          $('.diagram .circle').transition({
            animation : 'fade',
            duration  : 1200,
            interval  : 600
          });
          setTimeout( function () {
            $('.diagram .image').transition({
                animation : 'scale',
                duration  : 1200,
                interval  : 600
              });
            }, 300);
      }
    });

    $('span.popup').popup();

    $('#ManualsTabs .item').tab();

    $('.special.cards .image').dimmer({
      on: 'hover'
    });

    $('.card .extra.content .comments.outline').popup({
      on: 'click'
    });
  });
