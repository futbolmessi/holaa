var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start(){
 Textbox.innerHTML = ""; 
recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="Take me a picture.")
      {
        console.log("Take me a picture. --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "The 5 pictures are in  20 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 5000);
}





camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
    Webcam.snap(function(data_u3ri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_u3ri+'"/>';
    });
    
    Webcam.snap(function(data_uri) {
        document.getElementById("re").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function take_selfie()
{

}

function take_selfie()
{
    Webcam.snap(function(data_urri) {
        document.getElementById("res").innerHTML = '<img id="selfie_image" src="'+data_urri+'"/>';
    });
}

function take_selfie()
{
    Webcam.snap(function(data_ursi) {
        document.getElementById("resul").innerHTML = '<img id="selfie_image" src="'+data_ursi+'"/>';
    });
}

function take_selfie()
{
    Webcam.snap(function(data_urwi) {
        document.getElementById("resulta").innerHTML = '<img id="selfie_image" src="'+data_urwi+'"/>';
    });
}

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}