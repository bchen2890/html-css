console.log("-----Functions-----")

//Function factory
function makeExponentiation(e) {
    return function f(x) {
        return x ** e;
    }
}
var square = makeExponentiation(2);
console.log("3 squared:", square(3));

var cube = makeExponentiation(3);
console.log("2 cubed: ", cube(2));

//Passing functions as arguments
function doOperationOn(x, op) {
    return op(x);
}
console.log("5 squared:", doOperationOn(5, square));

//Passing arguments by value (primitives)
console.log("--Passing by value")
function changePrimitive(primVal) {
    primVal = primVal+11;
    console.log("Inside function2", primVal)
}

var value = 0;
console.log("Before function", value);
changePrimitive(value);
console.log("After function", value);

//Passing arguments by reference (object)
console.log("--Passing by reference");
function changeObject(obj) {
    obj.x = 123;
    console.log("Inside function", obj);
}

var object = { x: 0 };
console.log("Before function", object);
changeObject(object);
console.log("After function", object);

//Function constructor
function Animal(type, name) {
    this.type = type;
    this.name = name;
}

Animal.prototype.getType = function () {
    return this.name + " is a " + this.type;
};

var kitty = new Animal('cat', 'Kitty');
console.log(kitty.getType());

var buddy = new Animal('dog', 'Buddy');
console.log(buddy.getType());