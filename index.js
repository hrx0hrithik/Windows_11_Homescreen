const startbox = document.querySelector("#startmenu-box");
const startbtn = document.querySelector("#start-btn");

startbtn.addEventListener("click", function () {
  startbox.classList.toggle("active-start");
});

// all apps

function showAllApps() {
  const allAppsBtn = document.querySelector("#all-apps-btn");
  const allApps = document.querySelector("#all-apps");
  const startFrame = document.querySelector("#start-frame");

  startFrame.style.transform = "translateX(-100%)";
  allApps.style.transform = "translateX(0%)";
}

// all apps back

function backAllApps() {
  const allApps = document.querySelector("#all-apps");
  const startFrame = document.querySelector("#start-frame");
  startFrame.style.transform = "translateX(0%)";
  allApps.style.transform = "translateX(100%)";
}

const settingBtn = document.querySelector("#sett-btn");
const settingPanel = document.querySelector("#sett-nav");
const settImg = document.getElementsByClassName("tools-icon");

// console.log(settImg[1]);

// settingBtn.addEventListener("click", function (event) {
//   if (
//     event.target === settingBtn ||
//     event.target === settImg[1] ||
//     event.target === settImg[2] ||
//     event.target === settImg[3]
//   ) {
//     settingPanel.classList.toggle("active-nav");
//   }
// });
// Learning new things
settingBtn.addEventListener("click", function (event) {
  if (
    event.target === settingBtn || event.target.closest("#sett-btn")
  ) {
    settingPanel.classList.toggle("active-nav");
  }
});


window.onclick = (e) => {
  if (!e.target.matches(".start-btn")) {
    if (startbox.classList.contains("active-start")) {
      startbox.classList.remove("active-start");
    }
  }
  if (!e.target.matches("#sett-btn") && !e.target.matches(".tools-icon")) {
    if (settingPanel.classList.contains("active-nav")) {
      settingPanel.classList.remove("active-nav");
    }
  }
  if (!e.target.closest('#dnt') && !e.target.closest('#right-notification-panel')) {
    if(rightPanel.classList.contains('active-noti-panel')){
      rightPanel.classList.remove('active-noti-panel')
    }
  }
};
settingPanel.addEventListener("click", (e) => e.stopPropagation());
startbox.addEventListener("click", (e) => e.stopPropagation());

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  let time = hh + ":" + mm + " " + session;

  document.getElementById("time").textContent = time;
  // console.log(time);
  let t = setTimeout(function () {
    currentTime();
  }, 15000);
}
currentTime();

// var time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
// document.getElementById("time").textContent = time;

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// var date = new Date().toLocaleDateString();
let objectDate = new Date();
let day = objectDate.getDate();
let month1 = objectDate.getMonth();
let month = month1 + 1;
let monthName = monthArr[objectDate.getMonth()];

let year = objectDate.getFullYear();
// console.log(year);
if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = `0${month}`;
}

let formatDate = `${day}-${month}-${year}`;
// console.log(formatDate);
document.getElementById("date").textContent = formatDate;
document.querySelector(".time").title = `${day} ${monthName} ${year}`;

// button color change

const wifiBtn = document.querySelector("#wifi-click");
const btBtn = document.querySelector("#bt-click");
const wifi1 = document.querySelector(".wifi-btn");
const wifi2 = document.querySelector("#wifi-mor");
const bt1 = document.querySelector(".bt-btn");
const bt2 = document.querySelector("#bt-mor");

wifiBtn.addEventListener("click", function () {
  // console.log("clicked");
  wifi1.classList.toggle("active-btn");
  wifi2.classList.toggle("active-btn");
});

btBtn.addEventListener("click", function () {
  bt1.classList.toggle("active-btn");
  bt2.classList.toggle("active-btn");
});

const airBtn = document.querySelector("#air-btn");
const battBtn = document.querySelector("#batt-save");
const nightBtn = document.querySelector("#night");
const accessBtn = document.querySelector("#access");
const body = document.querySelector("#body");

const startSearch = document.getElementById("search-btn");
const searchBtn = document.querySelector("#searchbar");
const msIcon1 = document.getElementById("microsoft-store1");
const msIcon2 = document.getElementById("microsoft-store2");

const liveBg = document.querySelector(".video");

airBtn.addEventListener("click", function () {
  airBtn.classList.toggle("active-btn");
});
battBtn.addEventListener("click", function () {
  battBtn.classList.toggle("active-btn");
});
accessBtn.addEventListener("click", function () {
  accessBtn.classList.toggle("active-btn");
});

// Themes Change (light & dark mode)

const theme = localStorage.getItem("theme");
if (theme) {
  body.classList.add(theme);
}
const nightBtnState = localStorage.getItem("nightBtnState");

nightBtn.addEventListener("click", function () {
  nightBtn.classList.toggle("active-btn");
  if (body.classList != "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    searchBtn.style.backgroundImage = "url(image/search-dark.png)";
    startSearch.src = "image/start-search-dark.png";
    liveBg.style.display = "block";
  } else if (body.classList != "light") {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    searchBtn.style.backgroundImage = "url(image/search-light.png)";
    startSearch.src = "image/start-search-light.png";
    liveBg.classList.remove("show");
    liveBg.style.display = "none";
  }
});
if (body.classList.contains("dark")) {
  body.classList.remove("light");
  nightBtn.classList.add("active-btn");
  liveBg.style.display = "block";
  msIcon1.src = "image/microsoft-store-dark.png";
  msIcon2.src = "image/microsoft-store-dark.png";
  startSearch.src = "image/start-search-dark.png";
  searchBtn.style.backgroundImage = "url(image/search-dark.png)";
} else {
  liveBg.style.display = "none";
  msIcon1.src = "image/microsoft-store-light.png";
  msIcon2.src = "image/microsoft-store-light.png";
  startSearch.src = "image/start-search-light.png";
  searchBtn.style.backgroundImage = "url(image/search-light.png)";
}

for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

function updateVolume() {
  let volume = document.querySelector("#volume");
  let volIcon = document.querySelector("#volume-icon");
  let taskVolIcon = document.querySelector("#task-volume-icon");
  let volValue = volume.style.getPropertyValue("--value");

  volume.title = volValue;

  if (volValue <= 55 && volValue > 0) {
    volIcon.classList.remove("bi-volume-up");
    taskVolIcon.classList.remove("bi-volume-up");
    volIcon.classList.remove("bi-volume-mute");
    taskVolIcon.classList.add("bi-volume-down");
    volIcon.classList.add("bi-volume-down");
  } else if (volValue == 0) {
    taskVolIcon.classList.remove("bi-volume-down");
    volIcon.classList.remove("bi-volume-down");
    taskVolIcon.classList.add("bi-volume-mute");
    volIcon.classList.add("bi-volume-mute");
  }
  if (volValue > 55) {
    taskVolIcon.classList.remove("bi-volume-down");
    volIcon.classList.remove("bi-volume-down");
    taskVolIcon.classList.remove("bi-volume-mute");
    volIcon.classList.remove("bi-volume-mute");
    taskVolIcon.classList.add("bi-volume-up");
    volIcon.classList.add("bi-volume-up");
  }

  taskVolIcon.title = `Speaker: ${volValue}%`;
  // console.log(volValue)

  let t = setTimeout(function () {
    updateVolume();
  }, 300);
}
updateVolume();

const battIndicator = document.querySelector(".battery-level");
const taskBattIcon = document.querySelector("#task-battery-icon");
const battIcon = document.querySelector("#battery-icon");
navigator.getBattery && navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
    if (battery.charging) {
      battIcon.classList.remove("bi-battery-half");
      taskBattIcon.classList.remove("bi-battery-half");
      battIcon.classList.add("bi-battery-charging");
      taskBattIcon.classList.add("bi-battery-charging");
    }
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    // console.log(`Battery level: ${battery.level * 100}%`);
    let batteryLevel = battery.level * 100;
    battIndicator.innerHTML = batteryLevel;
    taskBattIcon.title = `Battery status: ${batteryLevel}% remaining`;
    console.log(batteryLevel);
  }
});

// Right Notification Panel
const rightPanel = document.getElementById("right-notification-panel");
const rightPanelBtn = document.getElementById("dnt");
rightPanelBtn.addEventListener("click", (e) => {
  if (e.target === rightPanelBtn || e.target.closest("#dnt") === rightPanelBtn) {
    rightPanel.classList.toggle("active-noti-panel");
  }
});


const calenderShowBtn = document.getElementById("calender-show-btn")
const calenderBody = document.getElementById("calender-body")
const calenderTab = document.querySelector('.calendar-tab')

calenderShowBtn.addEventListener("click", () => {
  calenderBody.classList.toggle("active-calender")
  if(calenderBody.classList.contains('active-calender')){
    calenderShowBtn.classList.replace('bi-chevron-down','bi-chevron-up')
    calenderTab.style.backgroundColor = 'var(--navbott)'
  }else{
    calenderShowBtn.classList.replace('bi-chevron-up','bi-chevron-down')
    calenderTab.style.backgroundColor = 'var(--navbg)'
  }
  console.log(calenderTab)
})

function generateCalendar(year2, month2) {
  const daysInMonth = new Date(year2, month2 + 1, 0).getDate();
  const calendarContainer = document.getElementById("calender-body-dates");
  const monthNyear = document.querySelector(".month-and-year");
  const firstDayOfWeek = new Date(year2, month2, 1).getDay();
  let monthName2 = monthArr[month2]
  
  monthNyear.innerHTML = `${monthName2},${calenderShowYear}`;
  calendarContainer.innerHTML = "";

  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("date-cell", "empty-cell");
    calendarContainer.appendChild(emptyCell);
  }

  for (let day2 = 1; day2 <= daysInMonth; day2++) {
    const dateCell = document.createElement("div");
    dateCell.classList.add("date-cell");
    dateCell.textContent = day2;
    
    if (year2 === year && month2 === month1 && day2 === day) {
      dateCell.classList.add("today");
    }

    calendarContainer.appendChild(dateCell);
  }
}
let calenderShowYear = year
let calenderShowMonth = month1
generateCalendar(calenderShowYear, calenderShowMonth); 
// console.log(day, year, month1)

const monthUpBtn = document.getElementById("calender-month-up")
const monthDownBtn = document.getElementById("calender-month-down")

monthUpBtn.addEventListener('click', ()=> {
  calenderShowMonth -= 1
  if (calenderShowMonth < 0){
    calenderShowMonth = 11
    calenderShowYear -= 1
  }
  generateCalendar(calenderShowYear, calenderShowMonth); 
})
monthDownBtn.addEventListener('click', ()=> {
  calenderShowMonth += 1
  if (calenderShowMonth >= 12){
    calenderShowYear += 1
    calenderShowMonth = 0
  }
  generateCalendar(calenderShowYear, calenderShowMonth);
})

// App Canvas Container (non scalable)
const canvasArea = document.getElementById('canvas-container')
const canvasHead = document.getElementById('canvas-head')
const canvasCloseBtn = canvasArea.querySelector('#canvas-close-btn')
const taskBarIcons = document.getElementById('task-icon')
const canvasTitle = canvasArea.querySelector('h3')

function openCanvas(title){
  canvasArea.style.display = 'block'
  const canvasHeading = document.createTextNode(title)
  canvasTitle.append(canvasHeading)
}

function closeCanvas(){
  canvasArea.style.display = 'none'
  canvasTitle.innerText = ''
  if( cameraRunning ){
    canvasArea.removeChild(vid)
    taskBarIcons.removeChild(cameraTaskIcon)
    cameraRunning = false
  }
  if ( notepadRunning ){
    canvasArea.removeChild(notepadTextArea)
    taskBarIcons.removeChild(notepadTaskIcon)
    notepadRunning = false;
  }
}


canvasCloseBtn.addEventListener('click', ()=>{
  if (cameraRunning === true){
    StopWebCam()
  }
  closeCanvas()
})


// Camera App testing

const cameraBtn = document.getElementById('camera')
let cameraRunning

const vid = document.createElement('video')
const cameraTaskIcon = document.createElement('img')

cameraBtn.addEventListener('dblclick', () => {

  if (notepadRunning){
    alert("Only one app will run at a time until it's in TESTING")
    return
  }
  cameraRunning = true
  openCanvas("Camera (testing)")
  canvasArea.appendChild(vid)
  vid.setAttribute('id','vid')
  vid.setAttribute('autoplay', '');
  vid.setAttribute('muted', '');
  vid.setAttribute('playsinline', '');

  taskBarIcons.appendChild(cameraTaskIcon)
  cameraTaskIcon.setAttribute('class',"task-icon-item")
  cameraTaskIcon.classList.add("task-icon-active")
  cameraTaskIcon.setAttribute('title',"Camera")
  cameraTaskIcon.setAttribute('src',"image/camera.png")

  const startWebCam = () =>{
    if (navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia({ video: true })
     .then(stream => (vid.srcObject = stream)).catch(error => console.log(error));
    }
   }
   startWebCam();
})

const StopWebCam = ()=>{
  let stream = vid.srcObject;
  let tracks =stream.getTracks();
  tracks.forEach(track => track.stop());
  vid.srcObject = null;
}
document.addEventListener('keydown', (e)=>{
  if ((e.keyCode === 27)){
    if (cameraRunning === true){
      StopWebCam()
    }
    closeCanvas()
  }
})


// Notepad App (testing)

const notepadIcon = document.getElementById('notepad')
let notepadRunning
const notepadTextArea = document.createElement('textarea')
const notepadTaskIcon = document.createElement('img')

notepadIcon.addEventListener('dblclick', () => {

  if (cameraRunning){
    alert("Only one app will run at a time until it's in testing")
    return
  }
  notepadRunning = true
  openCanvas("Notepad (testing)")
  canvasArea.appendChild(notepadTextArea);
  notepadTextArea.setAttribute('id','textArea')
  notepadTextArea.setAttribute('cols','70')
  notepadTextArea.setAttribute('rows','20')

  taskBarIcons.appendChild(notepadTaskIcon)
  notepadTaskIcon.setAttribute('class',"task-icon-item")
  notepadTaskIcon.classList.add("task-icon-active")
  notepadTaskIcon.setAttribute('title',"Notepad")
  notepadTaskIcon.setAttribute('src',"image/notepad.png")


})

