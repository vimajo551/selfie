var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function starting(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.onresult = function(event){
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    speak();
}
function speak(){
    sint = window.speechSynthesis;
    speakdata = document.getElementById("textbox").value;
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    sint.speak(utterthis)
    Webcam.attach(getcamera);
}
var getcamera = document.getElementById("camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
