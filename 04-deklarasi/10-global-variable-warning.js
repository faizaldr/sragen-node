// file .js, maka berlaku sloppy mode

function test(){
    x = 100
}

test();
console.log(x);
console.log(global.x);

function test2(){
    var y = 100
}

test()
console.log(y); // ReferenceError: y is not defined
console.log(global.y); // y is not define in global