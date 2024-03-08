"use strict";
function creatCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = creatCar("toyota", "corolla", { color: "white", year: "2024" });
console.log(myCar);
