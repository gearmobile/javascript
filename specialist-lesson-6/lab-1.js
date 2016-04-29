/**
 * Created by zencoder on 4/29/16.
 */

window.addEventListener('DOMContentLoaded', function () {

    // ROWS AND CELLS
    var cell = 100;
    var row = 100;

    // CREATE WRAPPER
    var block = document.createElement('div');
    document.body.insertBefore(block, document.body.firstChild);

    // CREATE BUTTON
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.appendChild(document.createTextNode('create table'));
    button.style.textTransform = 'capitalize';
    button.style.cursor = 'pointer';
    button.style.fontWeight = '500';
    document.body.insertBefore(button, document.body.firstChild);


    // CREATE TABLE
    function calcTable() {

        var start = new Date();

        if ( block ) {

            block.innerHTML = '';
            var table = document.createElement('table');
            var tBody = document.createElement('tbody');

            table.appendChild(tBody);
            block.appendChild(table);

            for ( var i = 1; i <= row; i++ ) {
                var tr = tBody.appendChild(document.createElement('tr'));
                for ( var j = 1; j <= cell; j++ ) {
                    var td = tr.appendChild(document.createElement('td'));
                    td.appendChild(document.createTextNode(i*j));
                }
            }
        }

        var end = new Date();

        console.log((end-start) + 'ms');
    }

    // ADD BUTTON LISTENER
    button.addEventListener('click', calcTable, false);

}, false);