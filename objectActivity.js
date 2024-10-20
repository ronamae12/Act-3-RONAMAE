let car = {
    type: "Sedan",
    model: "Corolla",
    color: "Red"
};

console.log("Type of car object:", typeof car);

car.type = "Toyota";
console.log("Updated car object:", car);

car.wheels = 4;
console.log("Updated car object with wheels:", car);