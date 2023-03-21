const startbox = document.querySelector('#startmenu-box');
const startbtn = document.querySelector('#start-btn');

startbtn.addEventListener('click',function(){
    if(startbox.style.bottom =="50px"){
        startbox.style.bottom = "-700px";
    }
    else{
     startbox.style.bottom = '50px';

    }
});

const settingBtn = document.querySelector('#sett-btn');
const settingPanel = document.querySelector('#sett-nav');

settingBtn.addEventListener('click', function(){
    if(settingPanel.style.bottom =="55px"){
        settingPanel.style.bottom = "-400px";
    }
    else{
        settingPanel.style.bottom = '55px';
    }
})
var time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
console.log(time);
document.getElementById("time").textContent = time;

const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date().toLocaleDateString();
let objectDate = new Date();
let day = objectDate.getDate();
// console.log(day);

let month = objectDate.getMonth();
let monthName = monthArr[objectDate.getMonth()];
// console.log(month + 1); 

let year = objectDate.getFullYear();
// console.log(year);
if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = `0${month}`;
}

let formatDate = `${day}-${month}-${year}`;
console.log(formatDate);
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

airBtn.addEventListener('click', function(){
    airBtn.classList.toggle('active-btn');

})
battBtn.addEventListener('click', function(){
    battBtn.classList.toggle('active-btn');

})
nightBtn.addEventListener('click', function(){
    nightBtn.classList.toggle('active-btn');
    body.classList.remove('dark');
    body.classList.add('light');

})
accessBtn.addEventListener('click', function(){
    accessBtn.classList.toggle('active-btn');

})