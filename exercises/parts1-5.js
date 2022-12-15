"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = "Determination";
var speedMph = 17500;
var kmToMars = 225000000;
var kmToMoon = 384400;
var milesPerKm = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kmToMars * milesPerKm;
var milesToMoon = kmToMoon * milesPerKm;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
var hoursToMoon = milesToMoon / speedMph;
var daysToMoon = hoursToMoon / 24;
// Code an output statement here (use a template literal):
// console.log(`It will take ${daysToMars} to get to the moon going ${speedMph} mph (over ${milesToMars} miles)`)
// console.log(`It will take ${daysToMoon} to get to the moon going ${speedMph} mph (over ${milesToMoon} miles)`)
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    return ((kilometersAway * milesPerKm) / speedMph) / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`It will take ${getDaysToLocation(kmToMars)} days to get to Mars`);
// console.log(`It will take ${getDaysToLocation(kmToMoon)} days to get to Moon`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersToLocation) {
        return Math.floor(((((kilometersToLocation * this.milesPerKilometer) / this.speedMph) / 24) * 100)) / 100;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft("Determination", 17500);
console.log("It will take ".concat(spaceShuttle.name, " ").concat(spaceShuttle.getDaysToLocation(kmToMars), " days to get to Mars"));
console.log("It will take ".concat(spaceShuttle.name, " ").concat(spaceShuttle.getDaysToLocation(kmToMoon), " days to get to the Moon"));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kmToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kmToMoon));
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
