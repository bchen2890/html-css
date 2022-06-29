
//variable can hold different type during the execution
var x = "hello";
console.log(x);
x = 23;
console.log(x);
x = { key: "value" }
console.log(x);

//functions declaration
function f1(x) {
    console.log(x);
}

var f2 = function (x,y) {
    return x + y;
}

//arguments are optional. These are all legal syntax
f1();
f2();
f1(1);
f1("hello");
var sum = f2(2, 3);
console.log(sum);
sum = f2(4, "hello");
console.log(sum);
sum = f2("hello", "world");
console.log(sum);

//primitive types
var type;
    //undefined, lack definition
    // don't set explicitly to undefined: type = undefined;
if (type == undefined) console.log('x is undefined');
    //boolean
type = true;
type = false;
    //null, lack of value
type = null
    //number
type = 2324;
    //string
type = "string";
type = 'string';
    //symbol, unique identifiers
type = Symbol('description');
    //bigint, whole numbers > 2^53 – 1
type = 6987009211850991n;
    //object
type = {}
type = { key: "value" }
console.log(type);
console.log(type.key);

