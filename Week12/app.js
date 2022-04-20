

let mobilenetExtractor;
let myVideo;
let result=document.getElementById("result");
let classifier;
let maskButton;
let badluckButton;
let trainButton;
function modelReady(){
    console.log("My model is ready");
}
function customModelReady(){
    console.log("Custom model is ready");
    classifier.classify(gotResults);
}
function videoReady(){
    console.log("My video is ready");
    classifier.load('model.json',customModelReady);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        result.innerHTML=results[0].label;
        classifier.classify(gotResults);
    }
    
}

//uncomment the function for training your own dataset

// function trainingPeriod(loss){
//     if (loss==null){
//         console.log("Training completed");
//         classifier.classify(gotResults);
//     }else{
//         console.log(loss);
//     }
// }
function setup(){
    let cnv=createCanvas(700,650);
    cnv.position(50,100);
    background(0);
    myVideo=createCapture(VIDEO);
    myVideo.hide();
    mobilenetExtractor=ml5.featureExtractor('MobileNet',modelReady);
    classifier=mobilenetExtractor.classification(myVideo,videoReady)

    // uncomment the following code in order to train the model with new dataset

    // maskButton=createButton("Mask");
    // maskButton.position(50+70*2,height+120);
    // maskButton.mousePressed(function(){
    //     classifier.addImage("Wearing Mask!")
    // });
    // withoutMaskButton=createButton("No Mask");
    // withoutMaskButton.position(50+70*5,height+120);
    // withoutMaskButton.mousePressed(function(){
    //     classifier.addImage("Not Wearing Mask!")
    // });
    // trainButton=createButton("Train");
    // trainButton.position(50+70*8,height+120);
    // trainButton.mousePressed(function(){
    //     classifier.train(trainingPeriod);
    // });
    // saveButton=createButton("Save");
    // saveButton.position(50+70*9,height+120);
    // saveButton.mousePressed(function(){
    //     classifier.save();
    // });
}

function draw(){
    image(myVideo,0,0,width,height);
}