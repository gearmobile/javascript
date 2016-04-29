
window.addEventListener('DOMContentLoaded', function () {

    function showDOM () {

        var newWindow = window.open();
        newWindow.document.write('<html>');
        newWindow.document.write('<body>');
        showChildNodes( document.body, newWindow.document);
        newWindow.document.write('</body>');
        newWindow.document.write('</html>');
    }

    function showChildNodes (node, doc) {
        if ( node.nodeType == Node.TEXT_NODE  ) {
            doc.write('<i>' + node.nodeValue + '</i>');
        }
        if ( node.nodeType == Node.ELEMENT_NODE ) {
            doc.write('<strong>' + node.nodeName + '</strong><br>');
            for ( var i = 0; i < node.childNodes.length; i++ ) {
                showChildNodes (node.childNodes[i], doc);
                doc.write('<br>');
            }
        }
    }

    document.querySelector('#start').addEventListener('click', showDOM, false);

}, false);