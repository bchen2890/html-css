//If, else if and else
console.log("If, else if and else")
function getWeekDay(d) {
    if (d == 0)
        return "Sunday";
    else if (d == 1)
        return "Monday";
    else if (d == 2)
        return "Tuesday";
    else if (d == 3)
        return "Wednesday";
    else if (d == 4)
        return "Thursday";
    else if (d == 5)
        return "Friday";
    else if (d == 6)
        return "Saturday";
    else
        return "Unknown";
}

var day = 0;
console.log(day + ' is ' + getWeekDay(day));

day = 2;
console.log(day + ' is ' + getWeekDay(day));

day = 6;
console.log(day + ' is ' + getWeekDay(day));

day = 12;
console.log(day + ' is ' + getWeekDay(day));


//Operator (?)
console.log("Operator (?)")
var age = 17;

function reachMajority(a) {
    var verb = a >= 18 ? "reaches" : "doesn't reach";
    return a + " " + verb + " mayority";
}

console.log(reachMajority(age));
age = 20
console.log(reachMajority(age));


//While loop
console.log("While loop");
var num = 0;
while (num < 3) {
    console.log(num++);
}

//One line while
console.log("While with one line")
num = 0;
while (num < 3)
    console.log(num++);

//Do while loop
console.log("Do while loop")
num = 0
do {
    console.log(num);
    num++;
} while (num < 3);

//For loop
console.log("For loop");
for (var i = 0; i < 3; i++) {
    console.log(i)
}

num = 0;
console.log("For loop without initialization");
for (; num < 3; num++) {
    console.log(num);
}


num = 0;
console.log("For loop without increment");
for (; num < 3;) {
    console.log(num++);
}

//Break
console.log("Breaking a loop");

for (var i = 2; i < 20; i+=2) {
    console.log(i);
    if (i % 5 == 0) break;
}

//Continue
console.log("Skip an iteration");

for (var i = 0; i < 20; i ++) {
    if (i % 5 != 0) continue;
    console.log(i);
}

//Nested loop
console.log("Nested loop");
outer: for (var i = 0; i < 5; i++) {
    for (var j = 5; j < 10; j++) {
        if (i + j == 9) {
            console.log(i+"+"+j+"=", i + j);
            continue outer;
        }
    }
}
