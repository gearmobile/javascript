var user = {};

user.name = 'Marry';
user.surname = 'Johanson';
user.age = 23;
user.gender = 'female';



var foo = user;
foo.country = 'Norway';
delete foo.gender;



for ( var i in user ) {
	console.log( i + ' : ' + user[i] );
}
