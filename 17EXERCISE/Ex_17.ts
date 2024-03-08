import { stripVTControlCharacters } from "util";

let guest_list :string[] = ['imran','nawaz','asif'];

// for(let i =0; i<guest_list.length;i++){

// console.log('dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.')

// }


let absent_guest :string = 'imran khan' ;
let new_guest :string ='kamran tessori' ;
guest_list[0] = new_guest ;

// for(let i=0; i<guest_list.length; i++){

        //   console.log('dear mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

// }

console.log(` Mr' ${absent_guest} is not coming'`);
console.log('good news! We Find Big Table So We are inviting 3 more quests. ')

guest_list.unshift('sir zia khan') ;
guest_list.splice(2 ,0 , 'shabaz sharif');
guest_list.push('bilawal zardari');

for(let i=0; i<guest_list.length; i++){
    console.log('dear mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log('\nsorry we can not arrange big table, only two peoples will be invited.');

while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
    
    console.log(`sorry Mr. ${remove_guest}, you are not invited for dinner.`)

}

for(let i=0; i<guest_list.length; i++){
    console.log('dear mr. ' + guest_list[i] + ',\n\nyou are still invited.\n\nThank you!\n\n')
}


guest_list.splice(0,2);

console.log(guest_list);
  