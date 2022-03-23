Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri) {
        document.getElementById("picture").innerHTML= '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version', ml5.version);
classifier=  ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qwFfMhDXz/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded!");
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data_1= "The First Prediction is " + prediction_1;
    speak_data_2= "The Second Prediction is " + prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
//The Names for the gestures are Three Fingers, Thumbs Up, Thumbs Down, Two fingers, and Fingers Down//
function identify(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("prediction_1").innerHTML= results[0].label;
        document.getElementById("prediction_2").innerHTML= results[1].label;
        prediction_1= results[0].label;
        prediction_2= results[1].label;
        speak();
        if (results[0].label == "Three Fingers"){
            document.getElementById("meaning").innerHTML= 'Three fingers means "This is looking amazing".';
            document.getElementById("hand_gesture_emoji_1").innerHTML= "&#128076"; 
        }
        if (results[0].label == "Thumbs Up"){
            document.getElementById("meaning").innerHTML= 'Thumbs up means "Good job, all the best, and okay".';
            document.getElementById("hand_gesture_emoji_1").innerHTML= "&#128077;"; 
        }
        if (results[0].label == "Thumbs Down"){
            document.getElementById("meaning").innerHTML= 'Thumbs down means "No, disapproval, or rejection".';
            document.getElementById("hand_gesture_emoji_1").innerHTML= "&#128078;"; 
        }
        if (results[0].label == "Two Fingers"){
            document.getElementById("meaning").innerHTML= 'Two fingers means "That was a great victory".';
            document.getElementById("hand_gesture_emoji_1").innerHTML= "&#9996;"; 
        }
        if (results[0].label == "Fingers Down"){
            document.getElementById("meaning").innerHTML= 'Fingers down or fist represents "resistance or a fist bumb".';
            document.getElementById("hand_gesture_emoji_1").innerHTML= "&#9994;"; 
        }
//meanings 2 here and bellow//
        if (results[1].label == "Three Fingers"){
            document.getElementById("meaning_2").innerHTML= 'Three fingers means "This is looking amazing".';
            document.getElementById("hand_gesture_emoji_2").innerHTML= "&#128076"; 
        }
        if (results[1].label == "Thumbs Up"){
            document.getElementById("meaning_2").innerHTML= 'Thumbs up means "Good job, all the best, and okay".';
            document.getElementById("hand_gesture_emoji_2").innerHTML= "&#128077;"; 
        }
        if (results[1].label == "Thumbs Down"){
            document.getElementById("meaning_2").innerHTML= 'Thumbs down means "No, disapproval, or rejection".';
            document.getElementById("hand_gesture_emoji_2").innerHTML= "&#128078;"; 
        }
        if (results[1].label == "Two Fingers"){
            document.getElementById("meaning_2").innerHTML= 'Two fingers means "That was a great victory".';
            document.getElementById("hand_gesture_emoji_2").innerHTML= "&#9996;"; 
        }
        if (results[1].label == "Fingers Down"){
            document.getElementById("meaning_2").innerHTML= 'Fingers down or fist represents "resistance or a fist bumb".';
            document.getElementById("hand_gesture_emoji_2").innerHTML= "&#9994;"; 
        }
    }
}