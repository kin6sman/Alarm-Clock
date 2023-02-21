const selectMenu = document.querySelectorAll("select");

const list = document.querySelector("#alarmList");
const addAlarm = document.querySelector(".setAlarm");

const audio = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
);


audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;
let itemsList = [];



// Plays the alarm audio at correct time
function ringing(now) {
  audio.play();
  alert(`Hey! it is ${now}`);
  clearAlarm();
}



//stops the alarm 
function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm cleared");
  }
}

//Live Clock showing current time
function currTime() {
  //storing time from date function
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = " AM";

  //formatting time in 12-hr clock
  if (hh == 0) {
    hh = 12;
  }

  if (hh > 12) {
    hh = hh - 12;
    session = " PM";
  }

  
  const now = `${formatTime(hh)} : ${formatTime(mm)}${session}`;

  //checking if thier is any alarm to ring on current time
  for (const i of itemsList) {
  
    if (i.name.includes(now)) {
      //alarm triggered
      ringing(now);

      //removing the alarm after it triggered
      removeItem(i.id);
    }
  }

  // Displaying Time
  let time =
    formatTime(hh) + " : " + formatTime(mm) + " : " + formatTime(ss) + session;

  document.getElementById("clock").innerText = time;

  //updating time in every one sec
  let t = setTimeout(function () {
    currTime();
  }, 1000);
}

currTime();




//formatting time and adding 0 if time is less then 10
function formatTime(time) {
  time = time < 10 ? "0" + time : time;

  return time;
}



//function after set Alarm Button clicked
function addItem() {

  let new_h = addAlarm.a_hour.value;

  //checking if user input is correct or not
  if (new_h == "Hour") {
    alert("Select Hour Time");
    return;
  }

  let new_m = addAlarm.a_min.value;

  //checking if user input is correct or not
  if (new_m == "Minute") {
    alert("Select Minute Time");
    return;
  }

  let session = addAlarm.a_amPM.value;

  //checking if user input is correct or not
  if (session == "AM/PM") {
    alert("Select AM or PM");
    return;
  }

  //object to store Alarm time set by user
  const newAlarm = `${new_h} : ${new_m} ${session}`;

  for (const i of itemsList) {
  
    if (i.name.includes(newAlarm)) {
      
      alert('This Alarm is already set')
      return;
    }
  }

  const item = {
    id: Date.now(), //used to create a unique id to store and remove the added item
    name: newAlarm,
  };

  //Array list to store all added alarms
  itemsList.push(item);
  displayList();
}

//displaying the list of all alarms
function displayList() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  itemsList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<div class="new"><label>${item.name}</label><button onclick="removeItem(${item.id})">Delete</button></div>`;
    list.appendChild(listItem);
  });
}

//function to remove alarm from list 
function removeItem(id) {
  itemsList = itemsList.filter((item) => item.id !== id);
  displayList();
}


//loop for selection Menu
for (let i = 12; i > 0; i--) {
  i = formatTime(i);
  let option = `<option value = "${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = formatTime(i);
  let option = `<option value = "${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
