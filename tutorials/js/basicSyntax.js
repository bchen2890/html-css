console.log("-----BasicSyntax-----")
//variable can hold different type during the execution
var x = "hello";
console.log("variable x=",x);
x = 23;
console.log("variable x=", x);
x = { key: "value" }
console.log("variable x=", x);

//functions declaration
function f1(x) {
    console.log("function1 -->", x);
}

var f2 = function (x,y) {
    return x + y;
}

//arguments are optional. These are all legal syntax
console.log("function1 without arguments");
f1();
console.log("function2 without arguments");
f2();
f1(1);
f1("hello");
var sum = f2(2, 3);
console.log("function2","(",2,",",3,")"," -->", sum);
sum = f2(4, "hello");
console.log("function2", "(", 4, ",", "hello", ")", " -->", sum);
sum = f2("hello", "world");
console.log("function2", "(hello, world)", " -->", sum);

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
type["another key"] = "hello world";
console.log("Object type:",type);
console.log("type.key:",type.key);
console.log("type['another key']",type["another key"]);


