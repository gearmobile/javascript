/**
 * Created by zencoder on 4/26/16.
 */

// parentNode - ссылка на родительский элемент
// previousSibling - ссылка на предыдущий соседний элемент
// nextSibling - ссылка на следующий соседний элемент
// childNodes - коллекция дочерних элементов
// firstChild - ссылка на первый дочерний элемент
// lastChild - ссылка на последний дочерний элемент

// nodeName - возвращает имя тега элемента
// nodeType - возвращает тип элемента
// nodeValue - свойство имеется только у текстовго узла и возвращает сам текст этого узла

// hasChildNodes()

// у NODE_ELEMENT есть два идентичных свойства - nodeName и tagName.
// у NODE_ELEMENT есть методы:

// hasAttribute(attribute)
// getAttribute(attribute)
// addAttribute(attribute, value)
// removeAttribute(attribute)



window.addEventListener('DOMContentLoaded', function () {
    var a = document.links[0];
    var linkParent = a.parentNode;
    var wrapper = linkParent.parentNode;
    var wrapperChilds = wrapper.childNodes;

    console.log(wrapperChilds[3].firstChild.firstChild.nodeValue+' '+wrapperChilds[3].firstChild.firstChild.nextSibling.firstChild.nodeValue+' '+wrapperChilds[3].firstChild.lastChild.nodeValue);
    console.log(wrapper.textContent);

    var second = wrapper.nextSibling;
    while ( second && second.nodeType != 1 ) {
        second = second.nextSibling;
    }
    console.log(second);
    var secondParagraphs = second.getElementsByTagName('p');
    console.log(secondParagraphs.length);
    console.log(document.body.getElementsByTagName('p').length);
});