
var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSoFar=[];

document.onkeyup = function(event) {
    var userChoice = event.key;//setting up user choice of letter based on the keyboard typing//
    
    /*setting up the computer choices bases on the letter array and random selection base on math random*/
    var computerChoice = letters[Math.floor(Math.random()*letters.length)];
    
    var options =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    
    if(options.indexOf(userChoice)>-1){
        if(userChoice===computerChoice){
            wins++;
            guessesLeft=9;
            guessSoFar=[];
        }
        if(userChoice!=computerChoice){
            guessesLeft--;
            guessSoFar.push(userChoice);
        }
        if (guessesLeft===0){
            guessessLeft=9;
            losses++;
            guessSoFar=[];
        }
        var html =
            "<h1>The Psychic Game</h1>" + 
            "<p>Guess what letter I'm thinking Of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>losses: " +losses+"</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p> Your Guesses so far: "+ guessSoFar.join(", ") +"</p>" ;
        
           document.querySelector("#game").innerHTML = html;

    }
};

