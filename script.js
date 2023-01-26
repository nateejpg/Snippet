
var timer_left;
var timeinterval;
var paused;
let time_in_minutes = 20;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);
let click_count = 0;

function time_remaining(endtime){

  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor ( (t/1000) % 60);
  var minutes = Math.floor ( (t/1000/60) % 60);
  var hours = Math.floor ( (t/(1000*60*60)% 24));
  var days = Math.floor (t/(1000*60*60*24));

  return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds': seconds};

}

function run_clock(id, endtime){

  var clock = document.getElementById("clock");

    function update_clock(){
      var t = time_remaining(endtime);

      clock.innerHTML = +t.minutes+':'+t.seconds;
      
      if(t.minutes < 10 && t.seconds < 10){

        clock.innerHTML = "0" + t.minutes + ":" + "0" + t.seconds;

      }else if(t.minutes < 10){

        clock.innerHTML = "0" + t.minutes + ":" + t.seconds;

      }else if(t.seconds < 10){

        clock.innerHTML = t.minutes + ":" + "0" + t.seconds;

      }

      if(t.total<=0){ 
        sound_over();
        clearInterval(timeinterval);
      }
    }

    update_clock();
    timeinterval = setInterval(update_clock, 1000);

}

function pause_clock(){
  if(!paused){
    paused = true;
    clearInterval(timeinterval);
    timer_left = time_remaining(deadline).total;
  }
}

function resume_clock(){
  if(paused){
    paused = false;

    deadline = new Date(Date.parse(new Date())+timer_left);

    run_clock('clockdiv', deadline);
  }
}

function start_clock(){
  
  run_clock('clockdiv', deadline);

}

function reset_clock(){

  window.location.reload();

}

function sound_button(){
  const snd = new Audio("sound.wav");

  snd.play();
}

function sound_over(){
  const snd_2 = new Audio("beep-beep.mp3");
  snd_2.play();
}

function toggle_sign(){

  const sign = document.querySelector(".sign-container");

  sign.classList.toggle("active");
}

function toggle_tips(){

  const tips = document.querySelector(".tips-container");

  tips.classList.toggle("active");
}

function toggle_about(){

  const about = document.querySelector(".about-container");

  about.classList.toggle('active');

}

function toggle_login(){

  const login = document.querySelector(".login-container");

  login.classList.toggle("active");
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

function dark_theme(){

document.body.classList.add("dark-theme")

}

function vanilla_theme(){

  document.body.classList.remove("dark-theme");
  document.body.classList.add("vanilla-theme");
}