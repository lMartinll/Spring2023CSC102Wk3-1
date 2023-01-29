function blastoffTimer(){
    //logs the blast off timer within the console
    console.log("blastoffTimer() started");
    //variable to keep time
    var currTime = 50;
    //timer at 20
    setTimeout(function() {
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 0);

    //timer at 18
    setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 5000);

     //timer at 16
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 10000);

     //timer at 14
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 15000);

     //timer at 12
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 20000);

     //timer at 10
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 25000);

     //timer at 8
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 30000);

     //timer at 6
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 35000);

     //timer at 4
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 40000);

     //timer at 2
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 45000);

     //timer at blastoff
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = "Blastoff!!!";
    }, 50000);
}

//craps tracking variables
var wins = 0;
var loses = 0;
var draws = 0;

function playCraps(){
    console.log("playCraps() started");
    //create variable die 1 for the die 1 roll
    var die1 = 0;
    //create variable die 1 for the die 1 roll
    var die2 = 0;
    //create variable to store die1 + die2
    var sum = 0;
    
    //roll the dice for die 1
    //rolling the die
    die1 = 1 + Math.floor(6 * Math.random());
    //displaying the result on the console
    console.log(die1);

    //same for die 2
    //rolling the die
    die2 = 1 + Math.floor(6 * Math.random());
    //displaying the result on the console
    console.log(die2);

    //determine sum
    sum = die1 + die2;
    //displaying the result on the console
    console.log("The sum of the two dice is: " + sum);

    //display the die1 on the webpage
    document.getElementById("die1Res").innerHTML = die1;
    //display the die2 on the webpage
    document.getElementById("die2Res").innerHTML = die2;
    //display the sum on the webpage
    document.getElementById("diceSum").innerHTML = sum;

    //determine game result
    //describes the loss function, if the sum is 11 or 7 it is a loss
    if(sum == 11 || sum == 7){
        //displays loss log in console
        console.log("Game result : loss");
        //displays "You lose!!!!!!!" on the webpage
        document.getElementById("gameRes").innerHTML = "You lose!!!!!!!";
        //tracks loses by number
        loses++;
        //refers to losesRes element id from UATSpace.html
        document.getElementById("losesRes").innerHTML = loses;
    //describes the win function, if die 1 is equal to die 2 then it is a win
    } else if(die1 == die2 && die1 % 2 == 0) {
        //displays win log in console
        console.log("Game result : win");
        //displays "You win!!!!!" on the webpage
        document.getElementById("gameRes").innerHTML = "You win!!!!!";
        //tracks wins by number
        wins++;
        //refers to winsRes element id from UATSpace.html
        document.getElementById("winsRes").innerHTML = wins;
    //describes the push function, if the sum is not 11 or 7 and the dice are not eqaul, it is a push
    } else {
        //displays push log in console
        console.log("Game result : push");
        //displays "Push, you did not lose." on the webpage
        document.getElementById("gameRes").innerHTML = "Push, you did not lose.";
        //tracks draws by number
        draws++;
        //refers to drawRes element id from UATSpace.html
        document.getElementById("drawsRes").innerHTML = draws;
    }
}