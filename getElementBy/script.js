var table = document.getElementById('#age-table');
var ages = document.getElementsByTagName('input');


for (var i = ages.length - 1; i >= 0; i--) {
	ages[i]
};

for ( var i = 0; i < ages.length; i++ ) {
	var input = ages.[i];
	alert( input.value + ':' + input.checked );
}
