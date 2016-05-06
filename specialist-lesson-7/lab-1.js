window.addEventListener('DOMContentLoaded', function () {

    var listItems = document.getElementsByTagName('li');
    var links = document.querySelectorAll('#list a');

    function aClick (event) {
        var li = event.target.parentNode;
        var ul = li.getElementsByTagName('ul');
        if ( ul.length == 0 ) {
            return true;
        }
        if ( ul[0].style.display == 'block' ) {
            ul[0].style.display = '';
            li.style.listStyleType = 'square';
        } else {
            ul[0].style.display = 'block'; 
            li.style.listStyleType = 'disc';
        }
        event.preventDefault();
    }

    for ( var i = 0; i < listItems.length; i++ ) {
        var currentItem = listItems[i];
        var currentItemULs = currentItem.getElementsByTagName('ul');
        if ( currentItemULs.length !== 0 ) {
            currentItem.style.listStyleType = 'square';
        } else {
            currentItem.style.listStyleType = 'circle';
        }
    }

    for ( var j = 0; j < links.length; j++ ) {
        links[j].addEventListener('click', aClick, false);
    }

}, false);