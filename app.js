class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep.';
    }
    
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from the year ${this.year}.`
    }
}


class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!';
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!'
        }

        else if (this.vehicles.length + 1 > this.capacity) {
            return 'Sorry, we\'re full!';
        }

        else {
            this.vehicles.push(vehicle);
            return 'Vehicle added!'
        }
    }
}

let honda = new Vehicle('honda', 'accord', '2000');
let ford = new Car('ford', 'taurus', '1994');
let kawasaki = new Motorcycle('kawasaki', 'ninja', '2005');
let garage = new Garage(2);