$(function () {

  // BUTTON FUNCTION
  // ---------------------------------------------------

  var $button = $('.showmore');
  var $buttonClass = 'is-open';
  var $buttonMore = 'show more';
  var $buttonLess = 'show less';

  jQuery.fn.toggleText = function ( $more, $less, $class ) {
    $(this).on('click', function () {
      $(this).text( ( $(this).text() === $more ) ? $less : $more ).toggleClass($class);
    })
  };

  $button.text($buttonMore);
  $button.toggleText( $buttonMore, $buttonLess, $buttonClass );


  // FIRST EXAMPLE
  // -------------------------------------------

  var flag = 'short';
  var $col = $('.collection > li');

  $col.each( function ( index ) {
    if ( index < $col.length / 2 ) {
      $(this).css('display','block');
    } else {
      $(this).css('display','none');
    }
  });

  $button.on('click', function () {
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


});
