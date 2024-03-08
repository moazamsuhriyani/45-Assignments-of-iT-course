"use strict";
// megician make a array of megician`s names. pass the array to a function 
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Moazam", "umaiz", "afreen"];
show_magicians(magician);
