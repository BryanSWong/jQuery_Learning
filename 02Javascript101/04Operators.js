// Concatenation
var foo = "hello";
var bar = "world";

console.log( foo + " " + bar ); // "hello world"



// Incrementing and decrementing
// The pre-increment operator increments the operand before any further processing.
var i = 1;
console.log( ++i ); // 2 - because i was incremented before evaluation
console.log( i );   // 2

// The post-increment operator increments the operand after processing it.
var i = 1;
console.log( i++ ); // 1 - because i was evaluated to 1 and _then_ incremented
console.log( i );   // 2 - incremented after using it

// Addition vs. Concatenation
var foo = 1;
var bar = "2";

console.log( foo + bar ); // 12


// Coercing a string to act as a number.
var foo = 1;
var bar = "2";

console.log( foo + Number(bar) ); // 3



