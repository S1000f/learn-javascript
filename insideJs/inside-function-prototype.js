function Person(name) {
    this.name = name;
}
var foo = new Person('foo');
console.dir(Person);
console.dir(foo);

// a literal object's prototype chaining
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log(`my name is ${this.name}`);
    }
};
myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
// myObject.sayNickName(); // TypeError

// a constructed object's prototype chaining
function People(name, age, sports) {
    this.name = name;
    this.age = age;
    this.sports = sports;
}
var foo = new People('foo', '24', 'shot put');
console.log(foo.hasOwnProperty('sports'));
console.dir(foo);
console.log(Object.hasOwnProperty(People.prototype.hasOwnProperty) + '!!');

// built-in prototype object
String.prototype.testMethod = function () {
    console.log('this is the String.prototype.testMethod()');
};
var str = 'this is a test';
str.testMethod();

// add property dynamically to prototype object
function Power(name) {
    this.name = name;
}
var foo = new Power('foos');
Power.prototype.powerUp = function () {
    console.log('hey~ ' + this.name);
};
foo.powerUp(); // hey~ foos
Power.prototype.powerUp(); // undefined
Power.prototype.name = 'Power';
foo.powerUp(); // hey~ foos
Power.prototype.powerUp(); // hey~ Power

// default prototype object can be changed, 
// then it only affects an object created after the changes happen
function Change(name) {
    this.name = name;
}
console.log(Change.prototype.constructor);

var foo = new Change('foo');
console.log(foo.country); // undefined

Change.prototype = {
    country: 'korea',
};
console.log(Change.prototype.constructor);

var bar = new Change('bar');
console.log(foo.name, foo.country); // foo undefined
console.log(bar.name, bar.country); // bar korea

// prototype chaining runs only while either reading properties or exec methods is required
function Person(name) {
    this.name = name;
}
Person.prototype.nation = "Korea";
var foo = new Person("foo");
var bar = new Person("bar");
console.log(foo.nation); // Korea
console.log(bar.nation); // Korea
foo.nation = "USA";
console.log(foo.nation); // USA
console.log(bar.nation); // Korea
