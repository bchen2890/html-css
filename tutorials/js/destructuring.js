let a, b, c;
console.log("Destructuring");

let array = ["apple", "bee", "car", "dog"];
[a, b, c] = array;

console.log("[a, b, c] -> a=", a, ",b=", b, ",c=", c);
b = undefined;
[a, , c] = array
console.log("[a, ,c] -> a=", a, ",b=", b, ",c=", c);

[a, b, ...c] = array
console.log("[a, b, ...c] -> a=", a, ",b=", b, ",c=", c);

[a, b] = [b, a]
console.log("[a, b] = [b, a] -> a=", a, ",b=", b, ",c=", c);

const obj = {
    username: "userHelloWorld",
    age: 17
}

const {age, username} = obj;

console.log("{age, name} -> age=", age, ", username=", username);

const {age: thisAge, username: thisUsername} = obj;

console.log("{age: thisAge, name: thisUsername} -> thisAge=", thisAge, ", thisUsername=", thisUsername);

function printUserInfo({age, username}){
    console.log("function({age, username})=", age, ",", username)
}

printUserInfo(obj);
printUserInfo({username, age});
printUserInfo({username: thisUsername, age:thisAge});