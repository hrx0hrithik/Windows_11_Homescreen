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
