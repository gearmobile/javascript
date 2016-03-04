$(function () {

  // BUTTON FUNCTION
  // ---------------------------------------------------

  var $button = $('.showmore');
  var $buttonClass = 'is-open';
  var $buttonMore = 'show more';
  var $buttonLess = 'show less';

  jQuery.fn.toggleText = function ( $more, $less ) {
    $(this).text( ( $(this).text() === $more ) ? $less : $more );
  };

  // FIRST EXAMPLE
  // -------------------------------------------

  var flag = 'short';
  var $col = $('.collection > li');

  $button.text($buttonMore);

  $col.each( function ( index ) {
    if ( index < $col.length / 2 ) {
      $(this).css('display','block');
    } else {
      $(this).css('display','none');
    }
  });

  $button.on('click', function () {
    $(this).toggleClass($buttonClass).toggleText( $buttonMore, $buttonLess );
    flag = ( flag === 'short' ) ? 'full' : 'short';
    if ( flag === 'short' ) {
      $col.each( function ( index ) {
        if ( index < $col.length / 2 ) {
          $(this).css('display','block');
        } else {
          $(this).css('display','none');
        }
      })
    } else if ( flag === 'full' ) {
      $col.each( function ( index ) {
        $(this).css('display','block');
      })
    }
  });


  // SECOND EXAMPLE
  // -------------------------------------------

  var $list = $('.list');
  var $listButton = $('.list__button');

  $listButton.on('click', function () {
    $list.toggleClass('list-short');
  });


  // THIRD EXAMPLE
  // ------------------------------------------

  $('.main .readmore').on('click', function (event) {
    var info = $('.content--more').is(':visible') ? 'show me more (+)' : 'show me less (-)';
    $(this).html(info).parent().prev('.header').children('.content').children('.content--more').toggleClass('is-visible');
    event.preventDefault();
  });

  $('.show .gallery__button').on('click', function (event) {
    var message = $('.gallery__more').is(':visible') ? 'show me more ( + )' : 'show me less ( - )';
    $(this).html(message).prev('.gallery').children('.gallery__more').toggleClass('is-visible');
    event.preventDefault();
  });


});
