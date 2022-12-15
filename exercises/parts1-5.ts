// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import { SpaceLocation } from "./SpaceLocation";

// Part 1: Declare (5) Variables With Type
let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kmToMars: number = 225000000;
let kmToMoon: number = 384400;
const milesPerKm: number = 0.621;


// Part 2: Print Days to Mars
let milesToMars: number = kmToMars * milesPerKm;
let milesToMoon: number = kmToMoon * milesPerKm;
let hoursToMars: number = milesToMars/speedMph;
let daysToMars:number = hoursToMars/24;
let hoursToMoon: number = milesToMoon/speedMph;
let daysToMoon: number = hoursToMoon/24;

// Code an output statement here (use a template literal):

// console.log(`It will take ${daysToMars} to get to the moon going ${speedMph} mph (over ${milesToMars} miles)`)
// console.log(`It will take ${daysToMoon} to get to the moon going ${speedMph} mph (over ${milesToMoon} miles)`)

// Part 3: Create a Function ("getDaysToLocation")

function getDaysToLocation(kilometersAway: number): number {
    return ((kilometersAway * milesPerKm)/speedMph)/24;
}

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

// console.log(`It will take ${getDaysToLocation(kmToMars)} days to get to Mars`);
// console.log(`It will take ${getDaysToLocation(kmToMoon)} days to get to Moon`);


// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string; 
    speedMph: number;
    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersToLocation: number) : number {
        return Math.floor(((((kilometersToLocation*this.milesPerKilometer)/this.speedMph)/24)*100))/100
    }

    printDaysToLocation(location: SpaceLocation): void {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}

let spaceShuttle = new Spacecraft("Determination", 17500);

console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kmToMars)} days to get to Mars`);
console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kmToMoon)} days to get to the Moon`);
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kmToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kmToMoon));

// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
