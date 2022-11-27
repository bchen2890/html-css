class Vehicle {
    constructor(mass){
        this.mass = mass;
    }
    getMass(){
        return this.mass;
    }
}

class Car extends Vehicle {
    constructor(mass, nSeat){
        super(mass);
        this.nSeat = nSeat;
    }

    getNSeat(){
        return this.nSeat;
    }
}

let myCar = new Car(1000, 4);

console.log("My car weighs " + myCar.getMass() + " kg and has " + myCar.getNSeat() + " seats." )