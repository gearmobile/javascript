var user = require('./user');

var john = new user.User('John');
var peter = new user.User('Peter');

john.hello(peter);