"use strict";
// megician make a array of megician`s names. pass the array to a function 
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician: string[] = ["Moazam","umaiz","afreen"];
// show_magicians(magician)
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
const magicians2 = ["Moazam", "Ali", "umaiz"];
// make_great(magicians2)
// show_magicians(magicians2)
function make_great2(magician) {
    const greatMagicians = [];
    for (let i = 0; i < magician.length; i++) {
        greatMagicians.push(magician[i] + " the Great");
    }
    return greatMagicians;
}
const Magicians3 = ["Moazam", "ALI", "umaiz"];
const greatMagicians2 = make_great2(Magicians3);
show_magicians(Magicians3);
show_magicians(greatMagicians2);
