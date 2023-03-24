const startbox = document.querySelector('#startmenu-box');
const startbtn = document.querySelector('#start-btn');

startbtn.addEventListener('click',function(){
//     // if(startbox.style.bottom =="50px"){
//     //     startbox.style.bottom = "-700px";
//     // }
//     // else{
//     //  startbox.style.bottom = '50px';
//     // }
    startbox.classList.toggle('active-start');
});
const settingBtn = document.querySelector('#sett-btn');
const settingPanel = document.querySelector('#sett-nav');

settingBtn.addEventListener('click', function(){
    // if(settingPanel.style.bottom =="55px"){
    //     settingPanel.style.bottom = "-400px";
    // }
    // else{
    //     settingPanel.style.bottom = '55px';
    // }
    settingPanel.classList.toggle('active-nav');
    // console.log('pn1');
});

window.onclick = (e) => {
    if (!e.target.matches('.start-btn')){
        if(startbox.classList.contains('active-start')){
            startbox.classList.remove('active-start');
        }
    }
    if (!e.target.matches('#sett-btn')){
        if(settingPanel.classList.contains('active-nav')){
            settingPanel.classList.remove('active-nav');
        }
    }
}
startbox.addEventListener('click', e => e.stopPropagation());
settingPanel.addEventListener('click', e => e.stopPropagation());

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
    }
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
     let time = hh + ":" + mm + " " + session;
  
    document.getElementById("time").textContent = time; 
    // console.log(time);
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();

// var time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
// document.getElementById("time").textContent = time;


const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date().toLocaleDateString();
let objectDate = new Date();
let day = objectDate.getDate();
// console.log(day);

let month1 = objectDate.getMonth();
let month = month1+1;
let monthName = monthArr[objectDate.getMonth()];
console.log(month + 1); 

let year = objectDate.getFullYear();
// console.log(year);
if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = `0${month}`;
}

let formatDate = `${day}-${month}-${year}`;
// console.log(formatDate);
document.getElementById("date").textContent = formatDate;
document.querySelector(".time").title = `${day} ${monthName} ${year}`;

const wifiBtn = document.querySelector('#wifi-click');
const btBtn = document.querySelector('#bt-click');
const wifi1 = document.querySelector('.wifi-btn');
const wifi2 = document.querySelector('#wifi-mor')
const bt1 = document.querySelector('.bt-btn');
const bt2 = document.querySelector('#bt-mor');

wifiBtn.addEventListener('click', function(){
    // console.log("clicked");
    wifi1.classList.toggle('active-btn');
    wifi2.classList.toggle('active-btn');
})

btBtn.addEventListener('click', function(){
    bt1.classList.toggle('active-btn');
    bt2.classList.toggle('active-btn');
})

const airBtn = document.querySelector('#air-btn');
const battBtn = document.querySelector('#batt-save');
const nightBtn = document.querySelector('#night');
const accessBtn = document.querySelector('#access');
const body = document.querySelector('#body');

const startSearch = document.getElementById('search-btn');
const searchBtn = document.querySelector('#searchbar');
const msIcon1 = document.getElementById('microsoft-store1');
const msIcon2 = document.getElementById('microsoft-store2');

const liveBg = document.querySelector('#video');

airBtn.addEventListener('click', function(){
    airBtn.classList.toggle('active-btn');
})
battBtn.addEventListener('click', function(){
    battBtn.classList.toggle('active-btn');
})
accessBtn.addEventListener('click', function(){
    accessBtn.classList.toggle('active-btn');
})

// Themes Change (light & dark mode)

const theme = localStorage.getItem('theme');
if(theme){
    body.classList.add(theme);
}

nightBtn.addEventListener('click', function(){
    nightBtn.classList.toggle('active-btn');
    body.classList.toggle('light');
    body.classList.toggle('dark');
    // console.log('toggle');
    if(body.classList.contains('dark')){
        msIcon1.src = "image/microsoft-store-dark.png";
        msIcon2.src = "image/microsoft-store-dark.png";
        startSearch.src = "image/start-search-dark.png";
        searchBtn.style.backgroundImage = "url(image/search-dark.png)";
        localStorage.setItem('theme','dark');
        liveBg.innerHTML = `<video class="video" autoplay muted loop>
        <source src="image/wallpaper-live-dark.mp4" type="video/webm">
        </video>`;
    }
    else{
        msIcon1.src = "image/microsoft-store-light.png";
        msIcon2.src = "image/microsoft-store-light.png";
        startSearch.src = "image/start-search-light.png";
        searchBtn.style.backgroundImage = "url(image/search-light.png)";
        localStorage.setItem('theme','light');
        liveBg.innerHTML = " ";
    }
});
