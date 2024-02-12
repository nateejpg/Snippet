let flag = false;

function valueF(){

  let value = document.getElementById("myinput");

  if(!value.value){
    return value.value = "20"
   
    }else{
    return value.value = window.localStorage.getItem("valueInput");
  }

}

valueF();
htmlTag();

console.log(window.localStorage.getItem("valueInput"));

function htmlTag(){

  valueF()

  let getValue = window.localStorage.getItem("valueInput")

  let value = parseInt(getValue);

  if(value >= 10 && value <= 60){
    clock.innerHTML = value + ":" + "00";

  }else if(value < 10 && value >= 1){
    clock.innerHTML = "0" + value + ":" + "00";

  }else if(value <= 1 && value != null){
    alert("Please, select a timer greater than 1 minute!");
    flag = false;
    value = 20;
    toggle_settings();
    window.localStorage.setItem("valueInput", value)
    clock.innerHTML = "20" + ":" + "00";

  }else if(value > 60){
    alert("Please, select a timer less than an hour.")
    toggle_settings();
    flag = false;
    value = getValue;
    clock.innerHTML = "20" + ":" + "00";
  }else if( value !== NaN ){
    value = 20;
    clock.innerHTML = value + ":" + "00";
    window.localStorage.setItem("valueInput", value)
  }

  console.log("this value",value)
}

function checkValue(){ 

  let value = document.getElementById("myinput");

  let time_in_minutes = value.value

    window.localStorage.setItem("valueInput", time_in_minutes)



}

document.getElementById("checkvalue").onclick = () => {

    sound_button();
    checkValue();
    toggle_settings();
    htmlTag();
}

 document.getElementById("start").onclick = () => {

  sound_button();
  flag = true;
  let clock = document.getElementById("clock");

  if(flag == true){
    document.getElementById("checkvalue").onclick = null;
  }

  let time_in_minutes;

     time_in_minutes = parseInt(valueF());


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

  console.log("test",parseInt(valueF()));

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

  var snd = new Audio("sound.wav");

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

function darkTheme(){
  document.body.classList.add("dark-theme");
  window.localStorage.setItem("theme", "dark-theme");

}

function vanillaTheme(){

  document.body.classList.remove("dark-theme");
  window.localStorage.setItem("theme", "vanilla-theme");

}

const darkBtn = document.getElementById("dark");

darkBtn.addEventListener("click", () => {

  darkTheme();

})

const pomoBtn = document.getElementById("pomo"); 

pomoBtn.addEventListener("click",() => {

  vanillaTheme()

})

// Function to call itself after Reload GetItem
function selectTheme() {

  const savedTheme = window.localStorage.getItem("theme");

  if(savedTheme === "dark-theme"){
    darkTheme()
  }else{
    vanillaTheme()
  }
  
}

selectTheme();

function toggle_menu(){

  const toggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".mobile-navigation");
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");

}