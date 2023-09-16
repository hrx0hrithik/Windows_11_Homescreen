const startbox = document.querySelector("#startmenu-box");
const startbtn = document.querySelector("#start-btn");
let startIsOpen = false

startbtn.addEventListener("click", function () {
  startbox.classList.toggle("active-start");
  if (startbox.classList.contains('active-start')) {
    startIsOpen = true
  } else {
    startIsOpen = false;
  }
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

// Navigation panel

const settingBtn = document.querySelector("#sett-btn");
const settingPanel = document.querySelector("#sett-nav");
const settImg = document.getElementsByClassName("tools-icon");
let settingPanelIsOpen = false

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
    if (settingPanel.classList.contains("active-nav")) {
      settingPanelIsOpen = true
    } else {
      settingPanelIsOpen = false
    }
  }
});


window.onclick = (e) => {
  if (!e.target.matches(".start-btn")) {
    if (startbox.classList.contains("active-start")) {
      startbox.classList.remove("active-start");
    }
    if (startIsOpen) {
      backAllApps()
    }
  }
  if (!e.target.matches("#sett-btn") && !e.target.matches(".tools-icon")) {
    if (settingPanel.classList.contains("active-nav")) {
      settingPanel.classList.remove("active-nav");
    }
  }
  if (!e.target.closest('#dnt') && !e.target.closest('#right-notification-panel')) {
    if (rightPanel.classList.contains('active-noti-panel')) {
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
  let t = setTimeout(function () {
    currentTime();
  }, 15000);
}
currentTime();

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
let objectDate = new Date();
let day = objectDate.getDate();
let day0 = objectDate.getDate();
let month1 = objectDate.getMonth();
let month = month1 + 1;
let monthName = monthArr[objectDate.getMonth()];

let year = objectDate.getFullYear();
if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = `0${month}`;
}

let formatDate = `${day}-${month}-${year}`;
document.getElementById("date").textContent = formatDate;
document.querySelector(".time").title = `${day} ${monthName} ${year}`;

// button color change

const wifi1 = document.querySelector("#wifi-click");
const wifi2 = document.querySelector("#wifi-mor");
const wifiBack = document.getElementById('back-wifi')
const wifiMenu = document.getElementById('wifi-menu')
const wifiToggleBtn = document.getElementById("wifi-toggle-btn")
const wifiList = document.querySelector(".wifi-list")
const wifiOffDisp = document.querySelector(".wifi-off-disp")
let wifiState = false

const btToggleBtn = document.getElementById("bt-toggle-btn")
const bt1 = document.querySelector("#bt-click");
const bt2 = document.querySelector("#bt-mor");
const btBack = document.getElementById('back-bt')
const btMenu = document.getElementById('bt-menu')
const btList = document.querySelector(".bt-list")
const btOffDisp = document.querySelector(".bt-off-disp")
let btState = false
const navGrid = document.getElementById("nav-grid")
const navSlid = document.getElementById("nav-slider")

function wifiToggle () {
  if (!wifiState){
    wifi1.classList.add("active-btn");
    wifi2.classList.add("active-btn");
    wifiList.style.display = 'block'
    wifiOffDisp.style.display = 'none'
    wifiState = true
    wifiToggleBtn.checked = true
  }else{
    wifi1.classList.remove("active-btn");
    wifi2.classList.remove("active-btn");
    wifiList.style.display = 'none'
    wifiOffDisp.style.display = 'flex'
    wifiState = false
    wifiToggleBtn.checked = false
  }
}

wifi1.addEventListener("click", wifiToggle );
wifiToggleBtn.addEventListener("click", () => {
  wifiToggle()
} );

function btToggle () {
  if (!btState){
    bt1.classList.add("active-btn");
    bt2.classList.add("active-btn");
    btList.style.display = 'block'
    btOffDisp.style.display = 'none'
    btState = true
    btToggleBtn.checked = true
  }else{
    bt1.classList.remove("active-btn");
    bt2.classList.remove("active-btn");
    btList.style.display = 'none'
    btOffDisp.style.display = 'flex'
    btState = false
    btToggleBtn.checked = false
  }
}

bt1.addEventListener("click", btToggle);
btToggleBtn.addEventListener("click", () => {
  btToggle()
})

wifi2.addEventListener("click", () => {
  // console.log("wifi mor")
  navGrid.classList.add("hide-nav-grid")
  navSlid.classList.add("hide-nav-grid")
  wifiMenu.classList.remove("hide-wifi-menu")
})
bt2.addEventListener("click", () => {
  // console.log("bt mor")
  navGrid.classList.add("hide-nav-grid")
  navSlid.classList.add("hide-nav-grid")
  btMenu.classList.remove("hide-bt-menu")
})

wifiBack.addEventListener("click", () => {
  navGrid.classList.remove("hide-nav-grid")
  navSlid.classList.remove("hide-nav-grid")
  wifiMenu.classList.add("hide-wifi-menu")
})

btBack.addEventListener("click", () => {
  navGrid.classList.remove("hide-nav-grid")
  navSlid.classList.remove("hide-nav-grid")
  btMenu.classList.add("hide-bt-menu")
})

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
  if (airBtn.classList.contains("active-btn")){
    bt1.disabled = true
    bt2.disabled = true
    wifi1.disabled = true
    wifi2.disabled = true
    if (wifiState || btState ){
      bt1.classList.remove("active-btn");
      bt2.classList.remove("active-btn");
      // btList.style.display = 'none'
      // btOffDisp.style.display = 'flex'
      // btState = false
      // btToggleBtn.checked = false
      wifi1.classList.remove("active-btn");
      wifi2.classList.remove("active-btn");
      // wifiList.style.display = 'none'
      // wifiOffDisp.style.display = 'flex'
      // wifiState = false
      // wifiToggleBtn.checked = false
    }
  }else{
    bt1.disabled = false
    bt2.disabled = false
    wifi1.disabled = false
    wifi2.disabled = false
    if (wifiState){
      wifi1.classList.add("active-btn");
      wifi2.classList.add("active-btn");
    }
    if (btState){
      bt1.classList.add("active-btn");
      bt2.classList.add("active-btn");
    }
  }
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
    }else if(battery.level >= 0.8) {
      battIcon.classList.remove("bi-battery-half");
      taskBattIcon.classList.remove("bi-battery-half");
      battIcon.classList.add("bi-battery-full");
      taskBattIcon.classList.add("bi-battery-full");
    }
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    let batteryLevel = battery.level * 100;
    battIndicator.innerHTML = batteryLevel;
    taskBattIcon.title = `Battery status: ${batteryLevel}% remaining`;
    console.log(batteryLevel);
  }
});

// Right Notification Panel

const rightPanel = document.getElementById("right-notification-panel");
const rightPanelBtn = document.getElementById("dnt");
let rightPanelIsOpen = false
rightPanelBtn.addEventListener("click", (e) => {
  if (e.target === rightPanelBtn || e.target.closest("#dnt") === rightPanelBtn) {
    rightPanel.classList.toggle("active-noti-panel");
    if (rightPanel.classList.contains('active-noti-panel')) {
      rightPanelIsOpen = true
    } else {
      rightPanelIsOpen = false
    }
  }
});

const weekArr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const calenderShowBtn = document.getElementById("calender-show-btn")
const calenderBody = document.getElementById("calender-body")
const calenderTab = document.querySelector('.calendar-tab')
const calenderHeadDate = document.getElementById('calender-head-date')

const weekDay = objectDate.getDay()
calenderHeadDate.innerText = `${weekArr[weekDay]}, ${day} ${monthName}`

calenderShowBtn.addEventListener("click", () => {
  calenderBody.classList.toggle("active-calender")
  if (calenderBody.classList.contains('active-calender')) {
    calenderShowBtn.classList.replace('bi-chevron-down', 'bi-chevron-up')
    calenderTab.style.backgroundColor = 'var(--navbott)'
  } else {
    calenderShowBtn.classList.replace('bi-chevron-up', 'bi-chevron-down')
    calenderTab.style.backgroundColor = 'var(--navbg)'
  }
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

    if (year2 === year && month2 === month1 && day2 === day0) {
      dateCell.classList.add("today");
    }

    calendarContainer.appendChild(dateCell);
  }

}
let calenderShowYear = year
let calenderShowMonth = month1
generateCalendar(calenderShowYear, calenderShowMonth);


const monthUpBtn = document.getElementById("calender-month-up")
const monthDownBtn = document.getElementById("calender-month-down")

monthUpBtn.addEventListener('click', () => {
  calenderShowMonth -= 1
  if (calenderShowMonth < 0) {
    calenderShowMonth = 11
    calenderShowYear -= 1
  }
  generateCalendar(calenderShowYear, calenderShowMonth);
})
monthDownBtn.addEventListener('click', () => {
  calenderShowMonth += 1
  if (calenderShowMonth >= 12) {
    calenderShowYear += 1
    calenderShowMonth = 0
  }
  generateCalendar(calenderShowYear, calenderShowMonth);
})



// Weather Widget

let weatherData = null
    let weatherWidget = document.getElementById("weather-widget")
    let weatherImg = document.getElementById("weather-icon")
    let tempDisp = document.getElementById("temp-display")
    let weatherText = document.getElementById("weather-txt")

// async function fetchWeather(location1) {
//   let weatherURL = `http://api.weatherapi.com/v1/current.json?key=3f5419ad369d48bfb2a173447233006&q=${location1}&aqi=no`;
//   const res = await fetch(weatherURL);
//   const data = await res.json();
//   weatherData = data; // Store the data in weatherData variable
//   console.log(data);
//   return data;
// }

// let longitude = 0;
// let latitude = 0;

// function getLocation() {
//   return new Promise((resolve, reject) => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           longitude = position.coords.longitude;
//           latitude = position.coords.latitude;
//           console.log(latitude + "," + longitude);
//           locat = latitude + "," + longitude;
//           console.log(locat);
//           resolve(locat);
//         },
//         (error) => {
//           reject(error);
//         }
//       );
//     } else {
//       reject("Geolocation is not supported by this browser.");
//     }
//   });
// }

// // // Now, you can use the promises like this:
// getLocation()
//   .then((location) => {
//     return fetchWeather(location); // Use the fetched location to call fetchWeather
//   })
//   .then((data) => {
//     // Use the weatherData variable to access the fetched weather data
//     console.log("Weather Data:", weatherData);

//     tempDisp.innerText = weatherData ? Math.floor(weatherData.current.temp_c) : " "
//     weatherText.innerText = weatherData ? weatherData.current.condition.text : "Feels Good"
//     weatherImg.setAttribute("src",weatherData.current.condition.icon)
//     weatherWidget.setAttribute("title",`${Math.floor(weatherData.current.temp_c)}°C ${weatherData.current.condition.text}`)


//   })
//   .catch((error) => {
//     console.error(error);
//   });


// App Canvas Container (non scalable)
const canvasArea = document.getElementById('canvas-container')
const canvasHead = document.getElementById('canvas-head')
const canvasCloseBtn = canvasArea.querySelector('#canvas-close-btn')
const taskBarIcons = document.getElementById('task-icon')
const canvasTitle = canvasArea.querySelector('h3')

let notepadRunning
let cameraRunning

function openCanvas(title) {
  canvasArea.style.display = 'block'
  const canvasHeading = document.createTextNode(title)
  canvasTitle.append(canvasHeading)
}

function closeCanvas() {
  canvasArea.style.display = 'none'
  canvasTitle.innerText = ''
  if (cameraRunning) {
    StopWebCam()
    canvasArea.removeChild(vid)
    taskBarIcons.removeChild(cameraTaskIcon)
    cameraRunning = false
  }
  if (notepadRunning) {
    canvasArea.removeChild(notepadTextArea)
    taskBarIcons.removeChild(notepadTaskIcon)
    notepadRunning = false;
  }
  if (chromeRunning) {
    canvasArea.removeChild(chromeBody)
    taskBarIcons.removeChild(chromeTaskIcon)
    chromeRunning = false;
  }
  if (thisPCRunning) {
    canvasArea.removeChild(thisPCBody)
    fileExplorerTaskIcon.classList.remove("task-icon-active")
    thisPCRunning = false;
  }
}


canvasCloseBtn.addEventListener('click', () => {
  closeCanvas()
})


// Camera App testing

const cameraBtn = document.getElementById('camera')
const cameraBtn2 = document.getElementById('camera-start')
const cameraBtn3 = document.getElementById('camera-all-apps')

const vid = document.createElement('video')
const cameraTaskIcon = document.createElement('img')

const openCamera = () => {

  if (startIsOpen) {
    startbox.classList.remove('active-start')
  }
  if (notepadRunning || chromeRunning) {
    alert("Only one app will run at a time until it's in TESTING")
    return
  }
  cameraRunning = true
  openCanvas("Camera (testing)")
  canvasArea.appendChild(vid)
  vid.setAttribute('id', 'vid')
  vid.setAttribute('autoplay', '');
  vid.setAttribute('muted', '');
  vid.setAttribute('playsinline', '');

  taskBarIcons.appendChild(cameraTaskIcon)
  cameraTaskIcon.setAttribute('class', "task-icon-item")
  cameraTaskIcon.classList.add("task-icon-active")
  cameraTaskIcon.setAttribute('title', "Camera")
  cameraTaskIcon.setAttribute('src', "image/camera.png")

  const startWebCam = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => (vid.srcObject = stream)).catch(error => console.log(error));
    }
  }
  startWebCam();
}

cameraBtn.addEventListener('dblclick', openCamera)
cameraBtn2.addEventListener('click', openCamera)
cameraBtn3.addEventListener('click', openCamera)

const StopWebCam = () => {
  let stream = vid.srcObject;
  let tracks = stream.getTracks();
  tracks.forEach(track => track.stop());
  vid.srcObject = null;
}
document.addEventListener('keydown', (e) => {
  if ((e.keyCode === 27)) {
    closeCanvas()
  }
})


// Notepad App (testing)

const notepadIcon = document.getElementById('notepad')
const notepadIcon2 = document.getElementById('notepad-start')
const notepadIcon3 = document.getElementById('notepad-all-apps')
const notepadTextArea = document.createElement('textarea')
const notepadTaskIcon = document.createElement('img')

const openNotepad = () => {

  if (startIsOpen || settingPanelIsOpen || rightPanelIsOpen) {
    startbox.classList.remove('active-start')
    settingPanel.classList.remove('active-nav')
    rightPanel.classList.remove('active-noti-panel')
  }
  if (cameraRunning || chromeRunning || thisPCRunning) {
    alert("Only one app will run at a time until it's in testing")
    return
  }
  notepadRunning = true
  openCanvas("Notepad (testing)")
  canvasArea.appendChild(notepadTextArea);
  notepadTextArea.setAttribute('id', 'textArea')
  notepadTextArea.setAttribute('placeholder', 'Click here then start writing...')
  notepadTextArea.setAttribute('cols', '70')
  notepadTextArea.setAttribute('rows', '20')

  taskBarIcons.appendChild(notepadTaskIcon)
  notepadTaskIcon.setAttribute('class', "task-icon-item")
  notepadTaskIcon.classList.add("task-icon-active")
  notepadTaskIcon.setAttribute('title', "Notepad")
  notepadTaskIcon.setAttribute('src', "image/notepad.png")


}

notepadIcon.addEventListener('dblclick', openNotepad)
notepadIcon2.addEventListener('click', openNotepad)
notepadIcon3.addEventListener('click', openNotepad)


// Chrome App

const chromeBtn = document.getElementById('chrome')
const chromeBtn2 = document.getElementById('chrome-start')
const chromeBtn3 = document.getElementById('chrome-all-apps')
const chromeBody = document.createElement('div')
const chromeTaskIcon = document.createElement('img')
let chromeRunning = false

const openChrome = () => {
  if (startIsOpen) {
    startbox.classList.remove('active-start')
  }
  if (cameraRunning || notepadRunning || thisPCRunning) {
    alert("Only one app will run at a time until it's in testing")
    return
  }
  chromeRunning = true
  openCanvas("Google Chrome (testing)")
  canvasArea.appendChild(chromeBody);
  chromeBody.innerHTML = '<iframe src="https://google.com" title="Google" width=99% style="min-height: 350px; border-radius: 6px;" ></iframe>'

  taskBarIcons.appendChild(chromeTaskIcon)
  chromeTaskIcon.setAttribute('class', "task-icon-item")
  chromeTaskIcon.classList.add("task-icon-active")
  chromeTaskIcon.setAttribute('title', "Google Chrome")
  chromeTaskIcon.setAttribute('src', "image/chrome.png")

}

chromeBtn.addEventListener('dblclick', openChrome)
chromeBtn2.addEventListener('click', openChrome)
chromeBtn3.addEventListener('click', openChrome)

window.addEventListener('load', function () {
  setTimeout(() => {
    modal.style.opacity = 1;
  }, 500);
});

// This PC App

const thisPCBtn = document.getElementById("this-pc")
const fileExplorerTaskIcon = document.getElementById("file-explorer-task-icon")
const fileExplorerStartIcon = document.getElementById("file-explorer-start-icon")
const fileExplorerAllApps = document.getElementById("file-explorer-all-apps")
const thisPCBody = document.createElement('div')
let thisPCRunning = false

const openThisPC = () => {
  if (startIsOpen) {
    startbox.classList.remove('active-start')
  }
  if (cameraRunning || notepadRunning || chromeRunning) {
    alert("Only one app will run at a time until it's in testing")
    return
  }
  thisPCRunning = true
  openCanvas("This PC (testing)")
  canvasArea.appendChild(thisPCBody);
  thisPCBody.innerHTML = '<iframe src="/thisPC.html" title="This PC" width=99% style="min-height: 350px; border-radius: 6px;" ></iframe>'


  fileExplorerTaskIcon.classList.add("task-icon-active")

}

thisPCBtn.addEventListener('dblclick', openThisPC)
fileExplorerTaskIcon.addEventListener('click', openThisPC)
fileExplorerStartIcon.addEventListener('click', openThisPC)
fileExplorerAllApps.addEventListener('click', openThisPC)


// Modal for FullScreen Mode

const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");

document.addEventListener("DOMContentLoaded", function () {
  const fullscreenButton = document.getElementById("fullscreen-button");
  const closeButton = document.getElementById("close-modal-button");

  fullscreenButton.addEventListener("click", function () {
    enterFullscreen();
  });

  closeButton.addEventListener("click", function () {
    closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 && event.ctrlKey) {
      enterFullscreen();
    }
  });

  document.addEventListener("click", function (event) {
    if (!modalContent.contains(event.target)) {
      closeModal();
    }
  });

  function enterFullscreen() {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }

    closeModal();
  }

  function closeModal() {
    modal.style.opacity = 0;
    startUPSound()
    setTimeout(() => {
      modal.style.display = "none";
    }, 1000);
  }
});

let hasStartedUpSound = false;
const startUpSound = document.getElementById("startup-sound")

function startUPSound() {
  if (!hasStartedUpSound) {
    startUpSound.play();
    hasStartedUpSound = true; 
  }
}