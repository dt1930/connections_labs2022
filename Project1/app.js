let emojiColl,userInput;
let mistakes=0;
let startingTime=2;
let time=startingTime*60;
let emojiGotWrong=[];
let gotRight=0;
window.addEventListener("load",function(){
    fetch("dataset.json").then(response=>response.json()).then(function(data){
        let introBlock=document.getElementById("display-box");
        let item=document.getElementById("container__card");
        let input= document.getElementById("input-box");
        let hint=document.getElementById("hint");
        let countdownTimer=document.getElementById("countdown");
        let counter=getRandomInt(0,150);
        let field=document.getElementById("field");
        let button=document.getElementById("reset-btn");
        document.addEventListener("dblclick",()=>{
            introBlock.style.display="none";
        }); 
        emojiColl=data.Smileys;
        console.log(counter);
        function sleep(ms){
            return new Promise((accept)=>{
                setTimeout(()=>{
                    accept();
                },ms);
            });
        }
        setInterval(updateCounter,1000);
        async function changeEmoji(counter){
            if (mistakes==0){
                await sleep(300);
            }
            else{
                await sleep(1500);
            }
            item.innerHTML=emojiColl[counter].emoji;
            mistakes=0;
            hint.innerHTML="";
            field.innerHTML="";
        }
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); 
        }
        button.addEventListener("click",reset);
        function reset(){
            mistakes=0;
            gotRight=0;
            counter=getRandomInt(0,150);
            for (let i=0; i<emojiGotWrong.length; i++){
                emojiGotWrong.pop();
            }
            item.style.fontSize="15em";
            item.style.width="60%";
            item.innerHTML="";
            button.style.display="none";
            changeEmoji(counter);
            time=startingTime*60;
            updateCounter();
        }
        function updateCounter(){
            if (introBlock.style.display=="none"){
                let minutes=Math.floor(time/60);
                let seconds=time%60;
                seconds=seconds<10 ? "0"+seconds : seconds;
                if (time==0){
                    item.style.fontFamily="Caveat";
                    item.style.fontSize="25px";
                    item.innerHTML="Score:"+gotRight*5+"</br>"+"Incorrect:"+emojiGotWrong.length;
                    item.style.width="50%";
                    for (let i=0; i<emojiGotWrong.length; i++){
                        item.innerHTML+="<br/>"+emojiColl[emojiGotWrong[i]].emoji+" > "+"Code:"+emojiColl[emojiGotWrong[i]].code+"<br/>Description: "+emojiColl[emojiGotWrong[i]].description+"<br/>Word:"+emojiColl[emojiGotWrong[i]].keywords[0];
                    }
                    button.style.display="block";
                    hint.innerHTML="";
                    field.innerHTML="";
                }
                else{time--;}
                countdownTimer.innerHTML=minutes+":"+seconds;
            }
        }
        changeEmoji(counter);
        input.addEventListener('change',function(e){
            userInput=e.target.value;
            if (userInput==emojiColl[counter].keywords[0]){
                field.innerHTML="✅";
                gotRight++;
                counter=getRandomInt(0,150);
                console.log(counter);
                changeEmoji(counter);
            }
            else{
                field.innerHTML="❌";
                mistakes++;
                console.log(mistakes);
                if (mistakes==1){
                    hint.innerHTML="It's a "+emojiColl[counter].keywords[0].length+" letter word.";
                }
                else if (mistakes==2){
                    hint.innerHTML+="<br/>The word starts with "+ emojiColl[counter].keywords[0].substring(0,1)+".";
                }
                else if (mistakes==3){
                    hint.innerHTML+="<br/>The word starts with "+ emojiColl[counter].keywords[0].substring(0,2)+".";
                }
                else if (mistakes==4){
                    hint.innerHTML+="<br/>Sorry, the word was "+emojiColl[counter].keywords[0]+".";
                    emojiGotWrong.push(counter);
                    counter=getRandomInt(0,150);
                    changeEmoji(counter);
                }
            }
        });
    });
    














})