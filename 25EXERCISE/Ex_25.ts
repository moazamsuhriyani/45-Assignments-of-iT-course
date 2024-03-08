

// create a veriable called alien_Color
let alien_Color :string = "green"

// write an if statement to test whether the alien color is green . if it is , print a message that the player just earned 5 point
if (alien_Color === 'green'){
    console.log("player just earned 5 points !");
}


//  write one version of this program that passes the if   test and  another that fails
alien_Color = 'yellow';

// (the version that fails will have no output.)
if(alien_Color === 'green'){
     console.log("player just earned 5 points")
}
