var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function starting(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.onresult = function(event){
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if(content == "tire minha selfie"){
        speak();
    }
}
var cont = 0; 
function speak(){
    sint = window.speechSynthesis;
    Webcam.attach(getcamera);
    speakdata = "tirando sua selfie em 5 segundos";
    setTimeout(function(){
        speakdata = "tirando sua selfie em 10 segundos";
        imgId = "fototirada1";
        takeselfie();
         var utterthis = new SpeechSynthesisUtterance(speakdata);
         sint.speak(utterthis)
    },5000)
    setTimeout(function(){
        imgId = "fototirada2";
        speakdata = "tirando sua selfie em 15 segundos";
        takeselfie();
         var utterthis = new SpeechSynthesisUtterance(speakdata);
         sint.speak(utterthis)
    },10000)
    setTimeout(function(){
        imgId = "fototirada3";
        takeselfie();
         var utterthis = new SpeechSynthesisUtterance(speakdata);
         sint.speak(utterthis)
    },15000)
}
var getcamera = document.getElementById("camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
function takeselfie(){
    Webcam.snap(function(data_uri){
        if(imgId=="fototirada1"){
            document.getElementById("result1").innerHTML = '<img id="fototirada1" src="'+data_uri+'" />'
        }
        if(imgId=="fototirada2"){
            document.getElementById("result2").innerHTML = '<img id="fototirada2" src="'+data_uri+'" />'
        }
        if(imgId=="fototirada3"){
            document.getElementById("result3").innerHTML = '<img id="fototirada3" src="'+data_uri+'" />'
        }
    })
}