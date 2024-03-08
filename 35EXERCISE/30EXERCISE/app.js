"use strict";
let users = ["admin", "Eric", "Moazam", "Samand", "Shafi"];
for (let user of users) {
    if (user === "admin") {
        console.log("hello admin, would you like to see a status report?");
    }
    else {
        console.log(`hellow ${user},   thank you for logging again`);
    }
}
