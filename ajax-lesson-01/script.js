// XmlHttpRequest

function getHttpRequest () {
    if ( window.XMLHttpRequest ) {
        try { return new XMLHttpRequest(); }
        catch(e){}
    } else if ( window.ActiveXObject ) {
        try { new ActiveXObject('Msxml2.XMLHTTP'); }
        catch (e){}
        try { new ActiveXObject('Microsoft.XMLHTTP'); }
        catch (e){}
    }
    return null;
}

window.addEventListener('DOMContentLoaded', function () {
    //
}, false);