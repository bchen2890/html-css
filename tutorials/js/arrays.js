var array = new Array();

//Array can contain different types
array[0] = "hello";
array[1] = 123;
array[2] = { key: "value" };
array[3] = function (x) {
    console.log("  ",x);
};

console.log("array", array);
console.log("array[0]", array[0]);
console.log("array[1]", array[1]);
console.log("array[3](array[2].key):");
array[3](array[2].key);

//Iterate over an array of numbers
var numArray = [11, 22, 33, 44];
console.log("Iterate over an array of numbers")
for (var i = 0; i < numArray.length; i++) {
    console.log("Element " + i + ": " + numArray[i]);
}
console.log("Another way");
for (var element in numArray) {
    console.log(element)
}

//Iterate over an array of objects
var catObj = {
    type: 'cat',
    name: 'Kitty',
    age: 3
};

console.log("Iterate over an array of object");

for (var prop in catObj) {
    console.log(prop+": "+catObj[prop]);
}