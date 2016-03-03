$(function () {

  // FIRST EXAMPLE
  // -------------------------------------------

  var flag = 'short';
  var $col = $('.collection > li');
  var $button = $('.showmore');

  $col.each( function ( index ) {
    if ( index < $col.length / 2 ) {
      $(this).css('display','block');
    } else {
      $(this).css('display','none');
    }
  })

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
