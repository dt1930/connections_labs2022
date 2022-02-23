/* Declaring variables*/
let emojiColl,userInput; 
let mistakes=0; // counts the number of mistakes done per emoji
let startingTime=2; //number of minutes for the game
let time=startingTime*60; //number of seconds for the game
let emojiGotWrong=[]; //array storing the emojis the user got incorrect
let gotRight=0; //number of emojis the user got correct
/* Creating HTMLAudioElements */
let mainAudio= new Audio ("https://dt1930.github.io/connections_labs2022/Project1/sounds/homePageAudio.mp3"); //interface audio
let correctAudio= new Audio ("https://dt1930.github.io/connections_labs2022/Project1/sounds/correctAudio.mp3"); //audio for correct guess
let wrongAudio= new Audio ("https://dt1930.github.io/connections_labs2022/Project1/sounds/wrongAudio.mp3"); //audio for wrong guess
let gameOverAudio= new Audio ("https://dt1930.github.io/connections_labs2022/Project1/sounds/gameOverAudio.mp3"); //audio for time over
window.addEventListener("load",function(){
    fetch("dataset.json").then(response=>response.json()).then(function(data){
        let introBlock=document.getElementById("display-box"); //declaring a variable for the instruction box
        let emojiContainer=document.getElementById("container__card"); //declaring a variable for emoji container
        let input= document.getElementById("input-box"); //declaring a variable for input box
        let hint=document.getElementById("hint"); //declaring a varible for hint box
        let countdownTimer=document.getElementById("countdown"); //declaring a varible for timer
        let randomNumber=getRandomInt(0,150); //declaring a variable to store a random number for accessing random emoji
        let rightWrongSymbol=document.getElementById("rightWrongSymbol"); //declaring a variable for right or wrong symbol
        let restartButton=document.getElementById("reset-btn"); //button for restarting game
        /* Event listener for double clicking the homepage document*/
        document.addEventListener("dblclick",()=>{
            introBlock.style.display="none"; // instruction box disappears
            mainAudio.play(); //interface music starts
            mainAudio.loop=true; //interface music in loop
        }); 
        emojiColl=data.Smileys; //storing all the smileys emojis from json file to emojiColl
        /* function that creates a promise object which resolves after given ms*/
        function sleep(ms){
            return new Promise((accept)=>{
                setTimeout(()=>{
                    accept();
                },ms);
            });
        }
        /* function to change the displayed emoji */
        async function changeEmoji(randomNumber){
            if (mistakes==0){ 
                await sleep(300); //immediately display the first emoji
            }
            else{
                await sleep(1500); //wait for 1500ms before another emoji is loaded
            }
            emojiContainer.innerHTML=emojiColl[randomNumber].emoji; //loads emoji on the page
            mistakes=0; //mistakes set to 0 for a new emoji
            hint.innerHTML="";
            rightWrongSymbol.innerHTML="";
        }
        /* Function to return a random number between min and max (min included)*/
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); 
        }
        /* Function called after the restart button is clicked*/
        function reset(){
            gameOverAudio.pause(); //pausing the game over audio
            mainAudio.play(); //playing the interface audio
            mistakes=0; //resetting number of mistakes to 0
            gotRight=0; //resetting number of correct emojis to 0
            randomNumber=getRandomInt(0,150);
            /* removing all the elements from emojiGotWrong array */
            for (let i=0; i<emojiGotWrong.length; i++){
                emojiGotWrong.pop();
            }
            emojiContainer.style.fontSize="15em"; 
            emojiContainer.style.width="60%"; 
            emojiContainer.innerHTML="";
            restartButton.style.display="none"; //making the restart button invisible
            changeEmoji(randomNumber); //calling the changeEmoji to load emoji
            time=startingTime*60; //setting time back to normal seconds
            updateRandomNumber(); //calling updateRandomNumber to generate a number and change emoji
        }
        /* Function to update the random number that accesses the emoji*/
        function updateRandomNumber(){
            if (introBlock.style.display=="none"){ //only start timer when the instruction box disappears
                let minutes=Math.floor(time/60);
                let seconds=time%60;
                seconds=seconds<10 ? "0"+seconds : seconds;
                if (time==0){ //when time is up
                    mainAudio.pause(); //pause the interface audio
                    gameOverAudio.play(); //play the game over audio
                    emojiContainer.style.fontFamily="Caveat";
                    emojiContainer.style.fontSize="25px"; //changing the font size for score report
                    /*score calculated by multiplying 5 and number of correct answers*/
                    /*number of incorrect answers is the length of emojiGotWrong array */
                    emojiContainer.innerHTML="Score:"+gotRight*5+"</br>"+"Incorrect:"+emojiGotWrong.length; 
                    emojiContainer.style.width="50%";
                    /*Displaying all the emojis with descriptions that user got wrong*/
                    for (let i=0; i<emojiGotWrong.length; i++){
                        emojiContainer.innerHTML+="<br/>"+emojiColl[emojiGotWrong[i]].emoji+
                        " Word: "+emojiColl[emojiGotWrong[i]].keywords[0]+"<br/>Description: "+
                        emojiColl[emojiGotWrong[i]].description.toLowerCase();
                    }
                    restartButton.style.display="block"; //changing the display of restart button from none to block
                    hint.innerHTML="";
                    rightWrongSymbol.innerHTML="";
                }
                else{time--;} //if time not over, decrement it
                countdownTimer.innerHTML=minutes+":"+seconds; //displaying timer
            }
        }
        setInterval(updateRandomNumber,1000); //calling updateRandomNumber every second
        restartButton.addEventListener("click",reset); //Event listener for the button to restart the game
        changeEmoji(randomNumber); //loading the emoji for the first time
        /* Event listener for the user input from text box*/
        input.addEventListener('change',function(e){
            userInput=e.target.value; //storing the user input in a variable
            if (userInput==emojiColl[randomNumber].keywords[0]){ //if the userinput matches the first keyword
                //if user enters the correct word
                rightWrongSymbol.innerHTML="✅";
                correctAudio.play(); //play the correct audio
                e.target.value=""; //empty the input box
                gotRight++; //incrementing the number of right answers
                randomNumber=getRandomInt(0,150); //generating a new random number
                changeEmoji(randomNumber); //changing the emoji to new one
            }
            else{
                //if user enters the incorrect word
                rightWrongSymbol.innerHTML="❌";
                wrongAudio.play(); //play the wrong audio
                mistakes++; //incrementing the number of mistakes for a particular emoji
                e.target.value=""; //empty the input box
                if (mistakes==1){ //first hint is number of letters
                    hint.innerHTML="It's a "+emojiColl[randomNumber].keywords[0].length+" letter word.";
                }
                else if (mistakes==2){ //second hint is first letter
                    hint.innerHTML+="<br/>The word starts with "+emojiColl[randomNumber].keywords[0].substring(0,1)+".";
                }
                else if (mistakes==3){ //third hint is first two letters
                    hint.innerHTML+="<br/>The word starts with "+ emojiColl[randomNumber].keywords[0].substring(0,2)+".";
                }
                else if (mistakes==4){ //show the answer
                    hint.innerHTML+="<br/>Sorry, the word was </br>"+emojiColl[randomNumber].keywords[0].toUpperCase();
                    emojiGotWrong.push(randomNumber); //append the emoji number to the array
                    randomNumber=getRandomInt(0,150); //generate new random number
                    changeEmoji(randomNumber); //change the emoji
                }
            }
        });
    });
    
})
