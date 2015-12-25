## [Создание элемента](http://learn.javascript.ru/modifying-document)

Для **создания элементов** используются следующие *методы*:

### Создает новый **элемент** с указанным тегом:

* `document.createElement(tag)`

```javascript
var div = document.createElement('div');
```

### Создает новый **текстовый узел** с данным текстом:

`document.createTextNode(text)`

```javascript
var textElem = document.createTextNode('Тут был я');
```

## Добавление элемента - `appendChild` и `insertBefore`

Чтобы DOM-узел был показан на странице, его необходимо **вставить** в `document`.

Для этого первым делом нужно решить, **куда мы будем его вставлять**. Предположим, что мы решили, что вставлять будем в некий элемент `parentElem` (`var parentElem = document.body`).

Для вставки внутрь `parentElem` есть следующие *методы*:

### Добавляет `elem` **в конец** дочерних элементов `parentElem`:

`parentElem.appendChild(elem)`

Следующий пример добавляет новый элемент `element` **в конец** `<ol>`:

```javascript
<ul class="list">
	<li></li>
	<li></li>
	<li></li>
</ul>

var list = document.querySelector('.list');
var element = document.createElement = 'li';
list.appendChild(element);
```

### Вставляет `elem` в коллекцию детей `parentElem`, перед элементом `nextSibling`:

`parentElem.insertBefore(elem, nextSibling)`

Следующий код вставляет новый элемент перед вторым `<li>`:

```javascript
<ul class="list">
	<li>list item</li>
	<li>list item</li>
	<li>list item</li>
	<li>list item</li>
</ul>
var list = document.querySelector('.list');
var el = document.createElement('li');
el.innerHTML = 'first list item';
list.insertBefore(el, list.children[1]);
// list.insertBefore(el, list.firstChild);
```

## Клонирование узлов - cloneNode

А как бы вставить **второе похожее сообщение**?

Конечно, можно сделать **функцию для генерации сообщений** и поместить туда этот код, но в ряде случаев гораздо эффективнее — **клонировать** существующий `div`, а потом изменить текст внутри. В частности, если элемент большой, то клонировать его будет гораздо быстрее, чем пересоздавать.

Вызов `elem.cloneNode(true)` создаст *глубокую копию элемента* — вместе с *атрибутами*, включая *подэлементы*. Если же вызвать с аргументом `false`, то копия будет сделана *без дочерних элементов*. Это нужно *гораздо реже*.

Пример со вставкой копии сообщения:

```javascript
	<style>
	.alert {
	  padding: 15px;
	  border: 1px solid #d6e9c6;
	  border-radius: 4px;
	  color: #3c763d;
	  background-color: #dff0d8;
	}
	</style>

	<body>
	  <h3>Моя страница</h3>
	</body>

	<script>
	  var div = document.createElement('div');
	  div.className = "alert alert-success";
	  div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";

	  document.body.insertBefore(div, document.body.firstChild);

	  // создать копию узла
	  var div2 = div.cloneNode(true);
	  // копию можно подправить
	  div2.querySelector('strong').innerHTML = 'Супер!';
	  // вставим её после текущего сообщения
	  div.parentNode.insertBefore(div2, div.nextSibling);
	</script>
```

Обратите внимание на *последнюю строку*, которая вставляет `div2` **после** `div`:

`div.parentNode.insertBefore(div2, div.nextSibling);`

* Для вставки нам нужен **будущий родитель**. Мы, возможно, *не знаем, где точно находится* `div` (или *не хотим зависеть от того, где он*), но если нужно *вставить рядом* с `div`, то **родителем определённо будет** `div.parentNode`;
* Мы хотели бы *вставить после* `div`, но метода `insertAfter` **нет**, есть только `insertBefore`, поэтому вставляем **перед его правым соседом** `div.nextSibling`;


## Удаление узлов - removeChild

Для **удаления** узла есть *два метода*:

Удаляет `elem` из **списка детей** `parentElem`:

`parentElem.removeChild(elem)`

Среди детей `parentElem` **удаляет** `elem` и **вставляет** на его место `newElem`:

`parentElem.replaceChild(newElem, elem)`

Оба этих метода **возвращают удаленный узел**, то есть `elem`. Если нужно, его можно вставить в другое место DOM тут же или *в будущем*.


***

`element.children[]` - метод `children` создает массив объектов - потомков родителя;
`element.children[2]` - вызов третьего потомка блока-родителя;
`element.firstChild` - метод `firstChild` возвращает первого потомка блока-родителя;
`element.lastChild` - метод `lastChild` возвращает последнего потомка блока-родителя;

`element.nextSibling` - метод `nextSibling` - находит правого (следующего) соседа текущего элемента;


## Итого

Методы для **создания** узлов:

* `document.createElement(tag)` — создает элемент
* `document.createTextNode(value)` — создает текстовый узел
* `elem.cloneNode(deep)` — клонирует элемент, если `deep == true`, то со всеми потомками, если `false` — без потомков.

**Вставка** и **удаление** узлов:

* `parent.appendChild(elem)` - добавить элемент в конец
* `parent.insertBefore(elem, nextSibling)` - вставить после `parent`
* `parent.removeChild(elem)` - удалить элемент
* `parent.replaceChild(newElem, elem)` - заменить одни элемент другим элементом

Все эти методы возвращают elem.
