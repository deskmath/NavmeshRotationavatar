function onSceneLoad() {
  //console.log("mobil  "+AFRAME.utils.device.isMobile());
  //var username = "Feriante " + makeId(5).toLowerCase();
  //username = prompt('Bienvenido a la Feria de Sevilla 2020 - Nombre:', username);
 /* document.body.setAttribute("style", "background-color:#efefef");
  document.body.style.fontFamily = "serif";
  var player = document.getElementById("player");
  var myNametag = player.querySelector(".feria");
  var name = localStorage.getItem("nombre");
  console.log("nombre "+ name)
  myNametag.setAttribute("text", "value", name);*/
  document.querySelector("a-scene").components["networked-scene"].connect();
  
  /*
  var conta = setInterval(function() {
    // Get today's date and time
  var time = new Date();
  time.setHours(20, 0, 0, 0);
  //console.log(time);
  var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = time - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var reloj = document.getElementById("fecha");
    var contador = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    reloj.setAttribute("text", "value", contador);
    // Display the result in the element with id="demo"
    // If the count down is finished, write some text
    if (distance < 0) {
      var time = new Date();
    time.setDate(time.getDate() + 1);
    time.setHours(20, 0, 0, 0);
      clearInterval(conta);
    //console.log(time);
    relojContador(time);
    }else{
      clearInterval(conta);
      relojContador(time);
    }
  }, 1000);
}

function makeId(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;*/
}

function relojContador(fechaAplaude) {
  // Set the date we're counting down to
  var countDownDate = fechaAplaude;

  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var reloj = document.getElementById("fecha");
    var d = new Date();
    var t = d.toLocaleTimeString();
    reloj.setAttribute("text", "value", t);
    // Display the result in the element with id="demo"

    // If the count down is finished, write some text
    if (distance < 0) {
      Aplausos();
      clearInterval(x);
      reloj.setAttribute(
        "text",
        "value",
        "Aplausos para los heroes del COVID-19"
      );
    }
  }, 1000);
  
  
}

function Aplausos() {
  document.querySelector('a-scene').components.screenshot.capture('perspective');
  var entity = document.querySelector(".aplaude");
  entity.components.sound.playSound();
  var time = new Date();
  time.setDate(time.getDate() + 1);
  time.setHours(20, 0, 0, 0);
  console.log(time);
  relojContador(time);
}
