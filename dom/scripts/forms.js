/**
 * Created by zencoder on 4/4/16.
 */

var form = document.forms.example;
var word = form.elements.word;
var submitBtn = document.querySelector('#submit');


function click() {
  console.log(form);
  console.log(form.length);
  console.log(form.action);
  console.log(form.method);
  console.log(form.className);
  console.log(form.target);
  console.log(form.elements);
  console.log(form.elements.word);
  console.log(form.elements.word.defaultValue);
}

function reset() {
  form.reset();
}

function submit() {
  form.submit();
}

function empty() {
  form.elements.word.defaultValue = 'raven';
  word.form.reset(); // вызов метода формы reset из input
}

function focus() {
  word.focus();
  word.value = '';
  word.style.borderColor = 'firebrick';
  word.style.borderWidth = '1px';
  word.style.borderStyle = 'solid';
}

function blur() {
  word.blur();
  word.value = 'sparrow';
  word.style.borderColor = '';
  word.style.borderWidth = '';
  word.style.borderStyle = '';
}

function select() {
  word.select();
}

function trigger() {
  submitBtn.click();
}

// ==================================================

var isEmpty = false;
var checkForm = document.forms.lab;
var checkFormEls = checkForm.elements;
var sbmBtn = document.querySelector('#submitData');
var rstBtn = document.querySelector('#resetData');

sbmBtn.addEventListener('click', function () {
  for ( var i = 0; i < checkFormEls.length; i++ ) {
    if ( checkFormEls[i].type === 'text' ) {
      if ( checkFormEls[i].value === '' ) {
        isEmpty = true;
        checkFormEls[i].style.borderColor = 'red';
      } else {
        checkFormEls[i].style.borderColor = '';
      }
    }
  } // end cycle
  if ( isEmpty ) {
    isEmpty = false;
    alert('Заполните все поля формы!');
  } else {
    checkForm.submit();
  }
});

rstBtn.addEventListener('click', function () {
  checkForm.reset();
});

// ===================================================

var resetBtn = document.querySelector('#resetForm');

var checkboxForm = document.querySelector('#check');
var checkboxFormEls = checkboxForm.elements;

console.log(checkboxFormEls[0].checked);
checkboxFormEls[2].checked = true;

checkboxFormEls[1].defaultChecked = true;

resetBtn.addEventListener('click', function () {
  checkboxForm.reset();
})