window.addEventListener("load",function(){
    fetch("dataset.json").then(response=>response.json()).then(function(data){
        let emojiColl,userInput;
        let counter=0;
        let item=document.getElementById("container__card");
        let input= document.getElementById("input-box");
        emojiColl=data.Smileys;
        function changeEmoji(counter){
            wait(500);
            item.innerHTML=emojiColl[counter].emoji;
        }
        function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }
        changeEmoji(0);
        input.addEventListener('change',function(e){
            userInput=e.target.value;
            if ((userInput==emojiColl[counter].keywords[0])||(userInput==emojiColl[counter].keywords[1])||(userInput==emojiColl[counter].keywords[2])||(userInput==emojiColl[counter].keywords[3])){
                document.getElementById("field").innerHTML="Correct!"
                counter++;
                changeEmoji(counter);
            }
            else{
                document.getElementById("field").innerHTML="Incorrect!"
            }
        });
    });























})