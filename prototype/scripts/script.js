function User (name, age) {
  this.name = name;
  this.age = age;
  this.gender = false;
}

var user1 = new User('Peter', 25);
var user2 = new User('Mary', 30);

user1.gender = 'male';

console.log(user1);
console.log(user2);

var image = new Image();

image.alt='Image';

console.log(image.alt);


function Book (title, year, value) {
  this.title = title;
  this.pubYear = year;
  this.price = value;
}

var book = new Book('Kon-Tiki', 2010, 30);

console.log(book);

Book.prototype.show = function () {
  console.log(this.title);
  console.log(this.price);
};

console.log(book.show);
