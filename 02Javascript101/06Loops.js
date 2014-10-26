for ( var i = 0; i < 5; i++ ) {
    // Logs "try 0", "try 1", ..., "try 4".
    console.log( "try " + i );
}

for (var i = 0, limit = 100; i < limit; i++) {
    // This block will be executed 100 times.
    console.log( "Currently at " + i );
    // Note: The last log will be "Currently at 99".
}


var i = 0;
while ( i < 100 ) {
    // This block will be executed 100 times.
    console.log( "Currently at " + i );
    i++; // Increment i
}


var i = -1;
while ( ++i < 100 ) {
    // This block will be executed 100 times.
    console.log( "Currently at " + i );
}



// Skipping to the next iteration of a loop
for ( var i = 0; i < 10; i++ ) {
    if ( i <3 ) {
        continue;
    }

    // The following statement will only be executed
    // if the conditional "something" has not been met
    console.log( "I have been reached" );

}