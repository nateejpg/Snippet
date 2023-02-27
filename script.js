let flag = false;
let = start = document.getElementById("start");
let time_in_minutes = 20;
let check = document.getElementById("checkvalue");

check.onclick = function change () { 

  let value = document.getElementById("myinput");
  time_in_minutes = value.value;

  if(value.value >= 10 && value.value <= 60){
    clock.innerHTML = value.value + ":" + "00";

  }else if(value.value < 10 && value.value >= 1){
    clock.innerHTML = "0" + value.value + ":" + "00";

  }else if(value.value < 1){
    alert("Please, select a timer greater than 1 minute!");
    flag = false;
    time_in_minutes = 20;
    toggle_settings();
    clock.innerHTML = "20" + ":" + "00";

  }else if(value.value > 60){
    alert("Please, select a timer less than an hour.")
    toggle_settings();
    flag = false;
    time_in_minutes = 20;
    clock.innerHTML = "20" + ":" + "00";
  }

  sound_button();
  toggle_settings();
}

start.onclick = function start_clock(){

  sound_button();
  flag = true;
  let clock = document.getElementById("clock");

  if(flag == true){
    check.onclick = null;
  }


  let current_time = Date.parse(new Date());
  let deadline = new Date(current_time + time_in_minutes*60*1000);

  function time_remaining(endtime){
  let t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor ( (t/1000) % 60);
  var minutes = Math.floor ( (t/1000/60) % 60);
  var hours = Math.floor ( (t/(1000*60*60)% 24));
  var days = Math.floor (t/(1000*60*60*24) );


  return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds': seconds};

  }

   function run_clock(id, endtime){

    function update_clock(){
      let t = time_remaining(endtime);

      clock.innerHTML = +t.minutes+':'+t.seconds;
      
      if(t.minutes < 10 && t.seconds < 10){

        clock.innerHTML = "0" + t.minutes + ":" + "0" + t.seconds;

      }else if(t.minutes < 10){

        clock.innerHTML = "0" + t.minutes + ":" + t.seconds;

      }else if(t.seconds < 10){

        clock.innerHTML = t.minutes + ":" + "0" + t.seconds;

      }

      if(flag = true){
        start.onclick = null;
      }

      if(t.total<=0){ 
          sound_over();
          clearInterval(timeinterval);
          clock.innerHTML = "00" + ":" + "00"
      }
    }

    update_clock();
    timeinterval = setInterval(update_clock, 1000);

  }

  run_clock("clock", deadline);

  var timeinterval;
  var paused = false;
  var timer_left;

  document.getElementById("stop").onclick = function pause_clock(){

    sound_button();
  
    if(!paused){
      paused = true;
      clearInterval(timeinterval);
      timer_left = time_remaining(deadline).total;
    }

  document.getElementById("resume").onclick = function resume_clock(){

    sound_button();

      if(paused){
        paused = false;
    
        deadline = new Date(Date.parse(new Date())+timer_left);
    
       run_clock('clock', deadline);
      }
    
    }
  }
}

document.getElementById("reset").onclick = function reset_clock(){

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

function toggle_settings(){

  const settings = document.querySelector(".settings-container");

  settings.classList.toggle("active");
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

function sign(){

  alert("You've signed in successfully, now enter your credentials on the login form");
}

function toggle_menu(){

  const toggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".mobile-navigation");
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");

}