Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("webcam");
Webcam.attach(camera);

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
/The Names for the gestures are Three Fingers, Thumbs Up, Thumbs Down, Two fingers, and Fingers Down/