
function sound_button(){
  const snd = new Audio("sound.wav");

  snd.play();
}

function sound_over(){
  const snd_2 = new Audio("newaudio.mp3");
  snd_2.play();
}

function timer(duration, display){

  var timer = duration, minutes, seconds;

  interval = setInterval( () => {

    minutes = parseInt(timer/ 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if(--timer < 0){
      timer = duration;
      sound_over();
    }

  }, 1000);
}

function start(){

  var duration = 20*60;
  var display1 = document.querySelector(".timer-numbers");

  timer(duration, display1);

}

function display(){

  var duration = 25*60;
  var display = document.querySelector(".timer-numbers");

}

function stop(){

  clearInterval(interval);

}

function reset(){

  clearInterval(interval);

  start();   
}

function toggle_about(){

  const about = document.querySelector(".about-container");

  about.classList.toggle('active');

}

function toggle_login(){

  const login = document.querySelector(".login-container");

  login.classList.toggle("active");


}

function toggle_settings(){

  const settings = document.querySelector(".settings-container");

  settings.classList.toggle("active");
}

function toggle_reports(){

  const reports = document.querySelector(".reports-container");

  reports.classList.toggle("active");
}

function validate(){

  const email = "nathan11.abreu@gmail.com";
  const password = "abc123";
  const enteremail = document.getElementById("email").value;
  const enterpassword = document.getElementById("password").value;

  if(enteremail == email && enterpassword == password){

    alert("You've logged in succesfully");
    return false;

  }else{

    alert("Something went wrong, try again");

  }


}