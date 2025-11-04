// Letters
let letters = "abcdefghijklmnopqrstuvwxyz"
//Get Array from letters
let lettersArray = Array.from(letters);

// select letters container
let letterscontainer = document.querySelector(".letters")

//Get Letters 
lettersArray.forEach(letter => {

    //creat span
    let span = document.createElement("span");

    //Create letters text Node
    let theletter = document.createTextNode(letter);

    // apppend the the letter to span 
    span.appendChild(theletter);
    //Add class to span
    span.className = 'letter-box'

    //append span to letters container 
    letterscontainer.appendChild(span);
});
//object of words + categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

//Get random property 
let Allkeys = Object.keys(words)
//Random number depend on key length
let randompropNumber = Math.floor(Math.random() *Allkeys.length);
//category
let randompropName = Allkeys[randompropNumber];
//category Words 
let randpropvalue = words[randompropName];
//random numbers depend on words 
let randomValueNumber = Math.floor(Math.random() *randpropvalue.length);

//the chossen word 
let randomValueValue = randpropvalue[randomValueNumber];

//set categorey ifo
document.querySelector(".game-info .categoery span").innerHTML = randompropName

//select letters guess element

let lettersGuesscontainer = document.querySelector(".letters-guess")

//convert choosen word to array
let lettersAndSpace = Array.from(randomValueValue);

//create spans depends on word
lettersAndSpace.forEach(letter => {

    //Create empty span
    let emptyspan = document.createElement("span")

    //If letter has space
    if(letter === ' '){

        emptyspan.className ="with-space"
    }

    //Append spans to the letters Guess container 
    lettersGuesscontainer.appendChild(emptyspan)



})

//select Guess spans 

let guessspans = document.querySelectorAll(".letters-guess span")


//Set the wrong attempts 
let wrongAttempts = 0

//select the draw

let thedraw = document.querySelector(".Hangman-draw")

//Set the status 




//handel clicking on letters

document.addEventListener("click", (e) => {
    
    if (e.target.className === 'letter-box'){
        
        e.target.classList.add("clicked");
        
        let thestatus = false;
        //Get clicked letter 
        let theclickedletter = e.target.innerHTML.toLowerCase();

        //the chosen word
        let thechosenword = Array.from(randomValueValue.toLowerCase());

        //console.log(lettersAndSpace) chossen word

        thechosenword.forEach((wordletter, wordindex) => {

            //If the clicked letter equal one of the choosen word letters 
            if (theclickedletter == wordletter) {

                //Set the status to true
                thestatus = true;

                // let a1 = a1.push([theclickedletter])
                // console.log(a1);
            //loop on all guess spans 
            guessspans.forEach((span, spanindex) => {

                if(wordindex === spanindex){

                    span.innerHTML = theclickedletter;
                }
            });

            }
        });
        //Outside loop
        
        //If the letter 
        if (thestatus !== true){
            
            //increase wronge Attempts
            wrongAttempts++;

            //Add class wrong on the draw elements 
            thedraw.classList.add(`wrong-${wrongAttempts}`);

            // play fail sound
            document.getElementById("fail").play();

            if (wrongAttempts === 8){


                endgame();
                letterscontainer.classList.add("finished")
            }
        } else {

            //play success sound
            document.getElementById("success").play();
        }


        let span = document.querySelectorAll(".letters-guess span");
        let span1 = []

        for (let i = 0; i < span.length; i++){

            span1.push(span[i].textContent);

            if (span1.join(',') === thechosenword.join(',')){
    
                win();
                letterscontainer.classList.add("finished")
    
            }
        }


        }
})

// End game function
function endgame(){

    //create popup div
    let div = document.createElement('div');

    //create text
    let divtext = document.createTextNode(`Game overm The word is  ${randomValueValue}`);

    //divtext to div
    div.appendChild(divtext);

    //add class on div
    div.className = "popup";

    //append popup to page

    document.body.appendChild(div)
    // css styling 
    //div.style = "width: 100px; height: 40px; background-color: red; text-align: center; color: white; width: 600px; height: 198px; background-color: rgb(139, 8, 8); text-align: center; color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex;align-items: center; justify-content: center; font-size: 28px;"
}

function win(){
    //create popup div
    let div = document.createElement('div');

    //create text
    let divtext = document.createTextNode(`You Win the Game The word is  ${randomValueValue}`);

    //divtext to div
    div.appendChild(divtext);

    //add class on div
    div.className = "popup-win";

    //append popup to page

    document.body.appendChild(div)
}