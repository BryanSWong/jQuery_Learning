// Leaving indices

var myArray = [];

myArray[ 0 ] = "hello";
myArray[ 1 ] = "world";
myArray[ 3 ] = "!";

console.log( myArray );
//  [ "hello", "world", undefined, "!" ];


var myArray = [ "hello", "world", "!" ];

console.log( myArray[ 2 ] );
// "!"


// Length of an array

var myArray = [ "hello", "world", "!" ];

console.log( myArray.length );
// 3


// For loops and arrays - a classic

var myArray = [ "hello", "world", "!" ];

for ( var i = 0; i < myArray.length; i = i + 1 ) {

    console.log( myArray[ i ] );

}

// Joining elements

var myArray = [ "hello", "world", "!" ];

// The default separator is a comma.
console.log( myArray.join() );
// "hello,world,!"

// Any string can be used as separator...
console.log( myArray.join( " " ) );
// "hello world !";
console.log( myArray.join( "!!" ) );
// "hello!!world!!!";

// ...including an empty one.
console.log( myArray.join( "" ) );
// "helloworld!"


// Slicing

var myArray = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
var newArray = myArray.slice( 3 );

console.log( myArray );
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log( newArray );
// [ 4, 5, 6, 7, 8 ]


var myArray = [ 0, 7, 8, 5 ];
myArray.splice( 1, 2, 1, 2, 3, 4 );

console.log( myArray );
 // [ 0, 1, 2, 3, 4, 5 ]

