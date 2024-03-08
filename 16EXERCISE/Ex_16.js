"use strict";
let guest_list = ['imran', 'nawaz', 'asif'];
// for(let i =0; i<guest_list.length;i++){
// console.log('dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.')
// }
let absent_guest = 'imran khan';
let new_guest = 'kamran tessori';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(` Mr' ${absent_guest} is not coming'`);
console.log('good news! We Find Big Table So We are inviting 3 more quests. ');
guest_list.unshift('sir zia khan');
guest_list.splice(2, 0, 'shabaz sharif');
guest_list.push('bilawal zardari');
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
