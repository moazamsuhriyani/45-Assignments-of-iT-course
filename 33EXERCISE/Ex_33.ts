let current_users: string[] = ["Moazam", "Admin", "Ali", "Hassan", "Ayeza"]
let new_users : string[] = ["Moazam","Ayeza","momin","noor","Hasnain"] 

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
   if (current_users_lower.includes(new_user.toLowerCase())) {
   console.log(`sorry ${new_user}, that names is taken`)

 
}else{
           console.log(`yes ${new_user}, is still available in list`)

}


}