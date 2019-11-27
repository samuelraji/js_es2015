function sum(x, y, cb) {
    setTimeout(function() {
        // return x+y;
        cb(x+y);
    }, 2000);
    console.log('after settimeout');
}

/* console.log( sum( 10, 12, function( result ) {
    console.log('result is : '+ result);
} ) ); */

console.log( sum( 12, 13, function( result ) {
    console.log('result is : '+ result);

    sum( result, 14, function( result ) {
        console.log('result is : '+ result);
        sum( result, 15, function( result ) {
            console.log('result is : '+ result);
            sum( result, 16, function( result ) {
                console.log('result is : '+ result);
            } )
        } );
    } );
} ) );