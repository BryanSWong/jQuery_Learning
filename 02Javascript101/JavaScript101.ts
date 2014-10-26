/*
    JQuery chapter 2 JavaScript 101
 */


//syntax Basics

// single and multi-line comments, this is an example of a single-line comment

/*
* this is an example
* of a
* multi line
 * comment
 */


//white space is ingnored in javascriipt

var hello = "Hello";
var world     =     "World";

//semantic whitespace promotes readability
//example

var foo = function(){
    for(var i = 0; i<10; i++){

        alert(i);
    }
};

foo();

//this is hard to read without the semantic whitespace

var foo=function(){for(var i=0;i<10;i++){alert(i);}};foo();

//identifiers, here are some examples of valid identifier names:

var myAwesomeVariable = "a";
var myAwesomeVariable2 = "b";
var my_awesome_variable = "c";
var $my_AwesomeVariable = "d";
var _my_awesome_variable_$ = "e";

//Variable defintion

//this works
var test =1;
var test2 = function(){};
var test3 = test2(test);

//so does this:

var test4 = 1,
    test5 = function(){},
    test6 = test2(test);

//Variables can be declared without assigning them a value.
// The value of a variable declared without a value is undefined.

var x;

x === undefined;


//String

//Strings can be created with double or single quotes.

var a = "I am a String";
var b = 'so am I';
alert(a);
alert(b);

//// Sometimes a string may contain quotation marks.

var statement1 = 'He said "JavaScript is awesome!"';
var statement2 = "He said \"JavaScript is awesome!\"";

//number

// Numbers are any whole or floating point integer.
var num1 = 100;
var num2 = 100.10;
var num3 = 0.10


//Boolean

var okay = true;
var fail = false;


//null and undefined

// Define a null value.
var foo= null;

// Two ways to achieve an undefined value.
var bar1 = undefined;
var bar2;



//objects

// Creating an object with the constructor:
var person1 = new Object;

person1.firstName = "John";
person1.lastName = "Doe";

alert( person1.firstName + " "+ person1.lastName );


// Creating an object with the object literal syntax:
var person2 = {
    firstName="Jane",
    lastName="Doe";

};

alert( person2.firstName + " " + person2.lastName);

// objects can also have objects as a property.

var people = {};

people [ "person1"] = person1;
people [ "person2"] = person2;

alert( people["person1"].firstName);
alert(people["person2"].firstName);

// Properties that have not been created are undefined.
var person = {name: "John Doe"};
alert(person.email); //undefined


//array

// Creating an array with the constructor:
var foo = new Array;

// Creating an array with the array literal syntax:

var bar = [];

// The array literal returns a foo.length value of 1:
var foo = [100];
alert(foo[0]);//100
alert(foo.length); //1


// The array constructor returns a bar.length value of 100:
var bar = new Array(100);
alert(bar[0]);//undefinded
alert(bar.length)//100


// Using the push(), pop(), unshift() and shift() methods on an array.
var foo =[]

foo.push("a");
foo.push("b");

alert(foo[0]); //a
alert(foo[1]); //b

alert(foo.length); //2

foo.pop();

alert(foo[0]); //a
alert(foo[1]); //undefinded

alert(foo.length); // 1

foo.unshift("z");

alert(foo[0]); //z
alert(foo[1]); //a

alert(foo.length); //2

foo.shift();

alert(foo[0]); //a
alert(foo[1]); //undefined

alert(foo.length); //1

//Type Checking with jQuery
// Checking the type of an arbitrary value.

var myValue = [1,2,3];

// Using JavaScript's typeof operator to test for primitive types:
typeof myValue === "string"; //false
typeof myValue === "number"; //false
typeof myValue === "undefined"; //false
typeof myValue === "boolean"; // false


// Using strict equality operator to check for null:

myValue === null; //false

// Using jQuery's methods to check for non-primitive types:
jQuery.isFunction(myValue); //false
jQuery.isPlainObject(myValue); //false
jQuery.isArray(myValue); //true

//Operators

//Basic operators allow you to manipulate values.


// Concatenation
var foo= "hello";
var bar = "world";

console.log(foo + " " + bar); //"hello world"

// Multiplication and division
2 * 3;
2 / 3;


// Incrementing and decrementing
// The pre-increment operator increments the operand before any further processing.

(++i); // 2 - because i was incremented before evaluation
(i); //2

//increment operator increments the operand after processing it.

(i++); // 1 - because i was evaluated to 1 and _then_ incremented
(i); // 2 - incremented after using it

//Operations on Numbers & Strings

// Addition vs. Concatenation
var foo = 1;
var bar = "2";

console.log(foo + bar); //12

// Coercing a string to act as a number.

var foo = 1;
var bar = "2";

console.log(foo + Number(bar)); // 3

// Forcing a string to act as a number (using the unary plus operator).

console.log(foo + +bar); // 3


//Logical operators allow evaluation of a series of operands
// using AND (&&) and OR (||) operations.

// Logical AND and OR operators
var foo = 1;
var bar = 0;
var baz = 2;

// returns 1, which is true
foo || bar;

// returns 1, which is true
bar || foo;

// returns 0, which is false
foo && bar;

// returns 2, which is true
foo && baz;

// returns 1, which is true
baz && foo;



// Do something with foo if foo is truthy.
foo && doSomething(foo);


// Set bar to baz if baz is truthy;
// otherwise, set it to the return value of createBar()
var bar = baz || createBar();


//Comparison operators allow you to test whether values are
// equivalent or whether values are identical.

var foo = 1;
var bar = 0;
var baz = "1";
var bim = 2;

foo == bar; //false
foo != bar; //true
foo == baz; //true; but note the types are different

foo === baz; //false
foo !== baz; //true
foo === parseInt(baz); //true

foo > bim; //false
bim > baz; //true
foo < baz; //true



//Sometimes a block of code should only be run under certain conditions.
// Flow control – via if and else blocks – lets you run code if certain
// conditions have been met.

var foo = true;
var bar = false;

if(bar){
    console.log("hello");
}

if(bar){
    //this code won't run.

}

else{
    if(foo){
        //this code will run
    }

    else{
        //this code would run if foo and bar were both false.

    }

}



//In order to use flow control successfully, it's important to
// understand which kinds of values are "truthy" and which kinds
// of values are "falsy." Sometimes, values that seem like they
// should evaluate one way actually evaluate another.

// Values that evaluate to false:
false
""    // An empty string.
NaN  // JavaScript's "not-a-number" variable.
null
undefined  // Be careful -- undefined can be redefined!
0 // The number zero.


// Everything else evaluates to true, some examples:
"0"
"any String"
[] // an empty array.
{} // an empty object.
1 // any non zero number.


//Sometimes a variable should be set depending on some condition.
// An if/else statement works, but in many cases the ternary operator
// is more convenient. The ternary operator tests a condition; if the
// condition is true, it returns a certain value, otherwise it returns
// a different value.

//The ternary operator:


// Set foo to 1 if bar is true; otherwise, set foo to 0:
var foo == bar ? 1:0;

//switch statements


switch(foo) {

    case "bar":
        alert("the value was bar -- yay");
        break;

    case "baz":
        alert("boo baz : (");
        break;

    default:
        alert("everything else is jsut okay");


}



//Switch statements have somewhat fallen out of favor in JavaScript,
// because often the same behavior can be accomplished by creating an
// object that has more potential for reuse or testing. For example:

var stuffToDo = {
    "bar" : function(){
        alert("the value was bar -- yay!");
    },

    "baz" : function(){
        alert("boo baz: (");

    },

    "defualt" : function(){
        alert("everything else is just okay");
    }
};


// Check if the property exists in the object.

if(stuffToDo[foo]){
    //this code won't run
    stuffToDo[foo]();
}


else {
    //this cod ewill run
    stuffToDo["defualt"]();

}




//loops

for(var i = 0; i <5; i++){
    //logs "try 0", " try 1", ... , "try 4".
    console.log("try " + i);
}

//The for Loop


for([initialization]; [conditional]; [iteration]){
    [loopBody]
}

//Here's a typical for loop:

for(var i=0; limit = 100; i < limit; i++){
    //this block will be executed 100 times.
    console.log("currently at " + i);
    //note: the last log will be "currently 99"
}



//The while loop


while([conditional]){
    [loopbody]
}


//Here's a typical while loop:

var i= -1;
while(++i < 100){
    //this block will be executed 100 times.
    console.log("currently at " +  i);
}

//The do-while Loop


do{
    [loopBody]

}

while([conditional])


//example of do while loop

do{
    // Even though the condition evaluates to false
    // this loop's body will still execute once.
    alert("hi There");
}
while(false);

//Breaking and Continuing
// Stopping a loop

for(var i=0; i <10; i++){
    if(something){
        break;
    }
}

// Skipping to the next iteration of a loop
for(var i=0; i<10; i++) {
    if(something){
        continue;
    }
    console.log("i have been reached");

}



//arrays

// A simple array with constructor.
var myArray1 = new Array("hello", "world");

// Literal declaration, the preferred way.
var myArray = ["hello", "world"];


// Creating empty arrays and adding values
var myArray = [];


// Adds "hello" on index 0
myArray.push("hello");

// Adds "world" on index 1
myArray.push("world");

// Adds "!" on index 2
myArray[2] = "!";

// Leaving indices
var myArray = [];

myArray[0] = "hello";
myArray[1] = "world";
myArray[3] ="!";


console.log(myArray); //["hello", "world, undefined, "!"];

// Accessing array items by index
var myArray = ["hello", "world", "!"];

console.log(myArray[2]); // "!"

//Array Methods and Properties

//Length of an array

var myArray = ["hello", "world", "!"];
console.log(myArray.length); // 3

//You will need the .length property for looping through an array:

var myArray = ["hello", "world", "!"];
for(var 1=0; i< myArray.length; i = i + 1){
    console.log(myArray[i]);
}



//.concat()

var myArray = [1,2,3,4];
var myotherArray = [5,6,7];

var wholeArray = myArray.concat( myOtherArray); //[1,2,3,4,5,6,7]


//.join()

var myArray = ["hello", "world", "!"];

//the default separator is a comma.
console.log(myArray.join()); // "hello, world, !"

//Any string can be used as separator...
console.log(myArray.join( " ")); // "hello world !";
console.log(myArray.join("!!")); // "hello!!world!!!";

// ...including an empty one.
console.log(myArray.join("")); // "helloworld!"


//.pop() removes the last element of an array. It is the opposite method of .push():

var myArray = [];

myArray.push(0);  // [0]
myArray.push(2); // [0,2]
myArray.push(7); //[0,2,7]
myArray.pop(); //[0,2]


//.reverse As the name suggests, the elements of the array are
// in reverse order after calling this method:


var myArray = ["world", "hello"];
myArray.reverse(); //["hello", "world"]


//.shift() Removes the first element of an array. With .push() and .shift(),
// you can recreate the method of a queue:

// Queue with shift() and push()

var myArray =[];

myArray.push(0); //[0]
myArray.push(2); //[0,2]
myArray.push(7); //[0,2,7]
myArray.shift(); //[2,7]

//slice() Extracts a part of the array and returns that part in a new array.
// This method takes one parameter, which is the starting index:


myArray.splice(index, length, values, ...);

    //Index – The starting index.
    //Length – The number of elements to remove.
    //Values – The values to be inserted at the index position.

//example

var myArray = [0,7,8,5];

myArray.splice(1,2,1,2,3,4);

console.log(myArray); //[0,1,2,3,4,5]


//.sort Sorts an array. It takes one parameter, which is a comparing function.
// If this function is not given, the array is sorted ascending:

var myArray = [3,4,6,1];

myArray.sort();  // 1,3,4,6

// Sorting with comparing function.

function descending(a,b){
    return b - a;
}


var myArray = [3,4,6,1];

myArray.sort(decending); // [6,4,3,1]


// .unshift() Inserts an element at the first position of the array:

var myArray = [];

myArray.unshift(0); // [0]
myArray.unshift(2); // [2,0]
myArray.unshift(7); // [7,2,0]

/*.forEach() In modern browsers it is possible to traverse through arrays with a .forEach()
 method, where you pass a function that is called for each element in the array.

The function takes up to three arguments:

  Element – The element itself.
  Index – The index of this element in the array.
  Array – The array itself.

All of these are optional, but you will need at least the Element parameter
in most cases.

 */


// Native .forEach()

function printElement(elem) {
    console.log(elem);
}

function printElementAndIndex(elem, index){
    console.log("Index " + index + ": " + elem);
}


function negateElement(elem, index, array){
    array[index] = -elem;
}


myArray = [1,2,3,4,5];


// Prints all elements to the console
myArray.forEach(printElement);

// Prints "Index 0: 1", "Index 1: 2", "Index 2: 3", ...
myArray.forEach(printElementAndIndex);

// myArray is now [ -1, -2, -3, -4, -5 ]
myArray.forEach(negateElement)





/* Objects contain one or more key-value pairs. The key portion can be any string.
 The value portion can be any type of value: a number, a string, an array, a function,
  or even another object. When one of these values is a function, it’s called a method
  of the object. Otherwise, they are called properties.

  */


// Creating an object literal.
var myObject = {
    sayHello: function() {
        console.log("hello");
    },
    myName: "Rebecca"
};


myObject.sayHello(); //"hello"

console.log(myObject.myName); //"Rebecca"


/* When creating object literals, note that the key portion of each key-value
pair can be written as any valid JavaScript identifier, a string (wrapped in quotes),
 or a number:
 */


var myObject = {
    validIdentifier: 123,
    "Some string": 456,
    99999 : 789
};

/* Functions contain blocks of code that need to be executed repeatedly.
Functions can take zero or more arguments, and can optionally return a value.
 */

// Function declaration.

function foo(){
    //do something
}

// Named function expression.

var foo = function(){
    // do something
};


// Using Functions


var greet = function(person,greeting){
    var text = greeting + ", " + person;
    console.log(text);
};

greet("Rebecca", "Hello");  // "Hello, Rebecca"


// A function that returns a value.

var greet = function(person,greeting){
    var text = greeting + ", " + person;
    return text;
};

console.log(greet("Rebecca", "Hello")); // "Hello, Rebecca"


// A function that returns another function.


var greet = function(person, greeting){
    var text = greeting + ", " + person;
    return function(){
        console.log(text);
    };
};

var greeting = greet("Rebecca", "Hello");

greeting(); // "Hello, Rebecca"


/*A common pattern in JavaScript is the immediately-invoked function expression.
This pattern creates a function expression and then immediately executes the function.
 This pattern is extremely useful for cases where you want to avoid polluting the global
  namespace with code – no variables declared inside of the function are visible outside
  of it.
 */

// An immediately-invoked function expression.

(function(){
    var foo = "hello World";
})();

console.log(foo); //undefined

/* In JavaScript, functions are "first-class citizens" – they can be assigned to
variables or passed to other functions as arguments. Passing functions as arguments
is an extremely common idiom in jQuery.
 */

// Passing an anonymous function as an argument.

var myFn = function(fn){
    var result = fn();
    console.log(result);
};

//logs "Hello World"

myFn(function(){
    return "hello world";
});


// Passing a named function as an argument

var myFn = function(fn){
    var result = fn();
    console.log(result);
};

var myOtherFn = function(){
    return "hello world";
};

myFn( myOtherFn); // "hello world"


/*JavaScript offers a way to test the type of a variable. However, the result can
be confusing – for example, the type of an array is "Object."


 It's common practice to use the typeof operator when trying to determining the type of
 a specific value.

 */


// Testing the type of various variables.

var myFunction = function(){
    console.log("hello");
};

var myObject = {
    foo: "bar";
};

var myArray = ["a", "b", "c"];
var myString = "hello";
var myNumber = 3;
var myRegExp = /(\w+)\s(\w+)/;


typeof myFunction; //"function"
typeof myObject;   //"object"
typeof myArray;    //"object"  -- careful!
typeof myString;   // "string"
typeof myNumber;   //"number"
typeof null;       //"object"  -- careful!
typeof undefined;  //"undefined"
typeof meh;        //"undefined" -- undefined variable
typeof myRegExp;   //"function" or "object" depending on environment

if(myArray.push && myArray.slice && myArray.join){
    // probably an array (this is called "duck typing")
}


if(Object.prototype.toString.call(myArray) === "[object Array]"){
    // Definitely an array!
    // This is widely considered as the most robust way
    // to determine if a specific value is an Array.
}


/*The “this” Keyword
 In JavaScript, as in most object-oriented programming languages, this is a special
 keyword that is used in methods to refer to the object on which a method is being
 invoked. The value of this is determined using a simple series of steps:


 If the function is invoked using Function.call() or Function.apply(), this will be set
 to the first argument passed to .call()/.apply(). If the first argument passed to
 .call()/.apply() is null or undefined, this will refer to the global object
 (which is the window object in web browsers).

 If the function being invoked was created using Function.bind(), this will be the
first argument that was passed to .bind() at the time the function was created.

 If the function is being invoked as a method of an object, this will refer to that
 object.

Otherwise, the function is being invoked as a standalone function not attached to any
object, and this will refer to the global object.

*/


// A function invoked using Function.call()
var myObject = {
    sayHello: function(){
        console.log("Hi! My Name is " + this.myName);
    },
    myName: "Rebecca"
};

var secondObject = {
    myName: "Colin"
};


myObject.sayHello();  // "Hi! My name is Rebecca"
myObject.sayHello.call(secondObject); // "Hi! My name is Colin"


// A function created using Function.bind()

var myName = "the global object";
var sayHello = function(){
    console.log("hi! my name is " + this.myName);
};

var myObject = {
    myName: "Rebecca"
};

var myObjectHello = sayHello.bind(myObject);

sayHello();   // "hi! my name is the global object"
myObjectHello(); // " hi! my name is Rebecca"




// A function being attached to an object at runtime.

var myName = "the global object";
var sayHello = function(){
    console.log("hi! my name is "+ this.myName);
};

var myObject = {
    myName: "Rebecca"
};

var secondObject = {
    myName: "Colin"
};


myObject.sayHello = sayHello;
secondObject.sayHello = sayHello;

sayHello();  // "Hi! My name is the global object"
myObject.sayHello(); // "Hi! My name is Rebecca"
secondObject.sayHello(); // "Hi! My name is Colin"

/* When invoking a function deep within a long namespace, it is often
tempting to reduce the amount of code you need to type by storing a
reference to the actual function as a single, shorter variable. It is
important not to do this with instance methods as this will cause the
value of this within the function to change, leading to incorrect code
operation. For instance:
 */

var myNamespace = {
    myObject: {
        sayHello: function(){
            console.log("hi! my name is " + this.myName);

        },
        myName: "Rebecca"
    }
};

var hello = myNamespace.myObject.sayHello;

hello(); // "Hi! My name is undefined"


//You can, however, safely reduce everything up to the object on which
// the method is invoked:

var myNamespace = {
    myObject: {
        sayHello: function(){
            console.log("hi! my name is " + this.myName);
        },
        myName: "Rebecca"
    }
};

var obj = myNamespace.myObject;

obj.sayHello(); // "Hi! My name is Rebecca"


/* "Scope" refers to the variables that are available to a piece of code at
 a given time. A lack of understanding of scope can lead to frustrating
 debugging experiences. The idea of scope is that it's where certain functions
 or variables are accessible from in our code, and the context in which they
 exist and are executed in.
  */

//global scope

var x = 9;

// local scope

function myFunc(){
    var x = 5;
}

console.log(x); // ReferenceError: x is not defined


//If you declare a variable and forget to use the var keyword, that
// variable is automatically made global. So this code would work:

function myFunc(){
    x =5;
}

console.log(x);  // 5

//Secondly, Immediately-Invoked Function Expressions provide a way to
// avoid global variables. You'll see many libraries such as jQuery
// often use these:

(function(){
    var jQuery = {/* all my methods go here. */};
    window.jQuery = jQuery;
})();


//Because local scope works through functions, any functions defined
// within another have access to variables defined in the outer function:

function outer(){
    var x = 5;

    function inner(){
        console.log(x);
    }

    inner(); // 5
}

//But the .outer() function doesn't have access to any
// variables declared within .inner():

function outer(){
    var x = 5;

    function inner(){
        console.log(x);
        var y = 10;
    }
    inner(); //5

    console.log(y); //ReferenceError: y is not defined
}


// Functions have access to variables defined in the same scope.

var foo = "hello";

var sayHello = function(){
    console.log(foo);
};

sayHello(); //hello
console.log(foo); // hello

//Variables with the same name can exist in different scopes with different values:

var foo = "world";

var sayHello = function(){
    var foo = "hello";
    console.log(foo);
};

sayHello(): //hello
Console.log(foo); //world

// When, within a function, you reference a variable defined in an outer scope,
// that function can see changes to the variable's value after the function is
// defined.


var myFunction = function(){
    var foo = "hello";
    var myFn = function(){
        console.log(foo);
    };

    foo = "world";
    return myFn;

};

var f = myFunction();
f(); // world


//Here's a more complex example of scopes at play:

(function() {
    var baz =1;

    var bim = function() {
        console.log(baz);
    };
         bar = function() {
        console.log(baz);
    };
})();

console.log(baz) // baz is not defined outside of the function
//Gives us a ReferenceError. baz was only defined within the function,
// and was never exposed to the global scope.

bar(); //1

//.bar() may have been defined within the anonymous function, but it was
// defined without the var keyword, which means it wasn't bound to the local
// scope and was instead created globally.

bim(); // ReferenceError: bim is not defined
// .bim() was only defined within the function, so does not exist on the
// global object as it was defined locally.


//Closures are an extension of the concept of scope. With closures,
// functions have access to variables that were available in the scope where the
// function was created.


// Each function executed within the loop will reference
// the last value stored in i (5).
// This won't behave as we want it to - every 100 milliseconds, 5 will alert

for(var i = 0; i < 5; i++){
    setTimeout(function(){
        alert(i);
    },

    i * 100);
}

//Closures can be used to prevent this by creating a unique scope for
// each iteration – storing each unique value of the variable within its scope.

// Using a closure to create a new private scope
// fix: “close” the value of i inside createFunction, so it won't change

var createFunction = function(i){
    return function(){
        alert(i);
    };
};

for (var i = 0; i<5; i++){
    setTimeout(createFunction(i), 1 * 100);
}

//Closures can also be used to resolve issues with the this keyword,
// which is unique to each scope:

// Using a closure to access inner and outer object instances simultaneously.
var outerObj = {
    myName: "outer",
    outerFunction: function(){

        // Provide a reference to outerObj through innerFunction's closure
        var self = this;
        var innerObj = {
            myName: "inner",
            innerFunction: function(){
                console.log(self.myName, this.myName); //outer inner
            }
        };

        innerObj.innerFunction();

        console.log(this.myName); // outer

    }
};

outerObj.outerFunction();

/* Closures can be particularly useful when dealing with callbacks.
 However, it is often better to use Function.bind, which will avoid any
 overhead associated with scope traversal.

 Function.bind is used to create a new function. When called, the new function
 then calls itself in the context of the supplied this value, using a given set
 of arguments that will precede any arguments provided when the new function
 was initially called.

 As .bind() is a recent addition to ECMAScript 5, it may not be present
 in all browsers, which is something to be wary of when deciding whether
 to use it. However, it's possible to work around support by using this
 shim from MDN:

  */

// Shim from MDN

if(!Function.prototype.bind){

    function.prototype.bind = function(oThis){
        if(typeof this !== "function"){
            // closest thing possible to the ECMAScript 5 internal
            // IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

        }

        var fSlice = Array.prototype.slice,
            aArgs = fSlice.call(arguments, 1),
            fToBind = this,
            fNOP = function(){},
            fBound = function(){
                return fToBind.apply(this instanceof fNOP
                ?  this
                : oThis || window,
                aArgs.concat(fSlice.call(arguments)));
            };
        fNOP.prototype = this.prototype;

        fBound.prototype = new fNOP();

        return fBound;
    };
}

/* One of the simplest uses of .bind() is making a function that is called
with a particular value for this, regardless of how it's called. A common
mistake developers make is attempting to extract a method from an object,
then later calling that method and expecting it to the use the origin object
as its this. However, this can be solved by creating a bound function using
the original object as demonstrated below:
 */

// Let's manipulate "this" with a basic example.
var user = "johnsmith";
var module = {
    getUser: function(){
        return this.user;
    },
    user: "jandoe"
};

// module.getUser() is called where "module" is "this"
// and "module.user" is returned.

module.getUser(); // janedoe

// let's now store a reference in the global version of "this"
var getUser = module.getUser;

// getUser() called, "this" is global, "user" is returned

getUser(); // johnsmith

// store a ref with "module" bound as "this"
var boundGetUser = getUser.bind(module);

// boundGetUser() called, "module" is "this" again, "module.user" returned.

boundGetUser(); // janedoe