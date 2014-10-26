// Strings can be created with double or single quotes.
var a = "I am a string";
var b = 'So am I!';
alert( a );
alert( b );

// Sometimes a string may contain quotation marks.
var statement1 = 'He said "JavaScript is awesome!"';
var statement2 = "He said \"JavaScript is awesome!\"";


// Numbers are any whole or floating point integer.
var num1 = 100;
var num2 = 100.10;
var num3 = 0.10;


// Boolean values.
var okay = true;
var fail = false;

// Define a null value.
var foo = null;

// Two ways to achieve an undefined value.
var bar1 = undefined;
var bar2;


// Using an empty object literal
var person1 = {};

// Assign properties using "dot notation"
person1.firstName = "John";
person1.lastName = "Doe";

// Access properties using "dot notation"
alert( person1.firstName + " " + person1.lastName );

// Creating an object with the object literal syntax:
var person2 = {
    firstName: "Jane",
    lastName: "Doe"
};

alert( person2.firstName + " " + person2.lastName );

var people = {};

// Assign properties using "bracket notation"
// As mentioned, objects can also have objects as a property value
people[ "person1" ] = person1;
people[ "person2" ] = person2;

// Access properties using a mix of both bracket and dot notation
alert( people[ "person1" ].firstName );
alert( people[ "person2" ].firstName );



// Properties that have not been created are undefined.
var person = { name: "John Doe" };
alert( person.email ); // undefined


// The array literal returns a foo.length value of 1:
var foo = [ 100 ];
alert( foo[ 0 ] ); // 100
alert( foo.length ); // 1

// The array constructor returns a bar.length value of 100:
var bar = new Array( 100 );
alert( bar[ 0 ] ); // undefined
alert( bar.length ); // 100




