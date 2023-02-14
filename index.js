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

var date = new Date().toLocaleDateString();
console.log(date);
document.getElementById("date").textContent = date;