
function foo() {
    // "this" is the function context
    console.log('foo this: ', this);

    const bar1 = function() { // has its own context
        console.log('bar1 this: ', this);
    }

    bar1();

    const bar2 = () => { // inherited context
        console.log('bar2 this: ', this);
    }

    bar2();
}

foo.call('hello');