// 1sec=1000 ms
//working variables
var ms=0;
var sec=0;
var min=0;
var hour=0
// calling from html
var hourhtml=document.getElementById("hour");
var minhtml=document.getElementById("min");
var sechtml=document.getElementById("second");
var mshtml=document.getElementById("ms");



var interval;
//



function counter(){
    ms++
  mshtml.innerHTML=ms;
  if(ms >=100)
  { 
      sec++
      sechtml.innerHTML=sec;
      ms=0
  }
  else if(sec>=60)
  {
      min++
     minhtml.innerHTML=min;
     sec=0
     
  }
  else if(min>=60)
  {
      hour++
     hourhtml.innerHTML=hour;
    min=0;
     
  }
}

function start(){
    document.getElementById("pause").disabled = false;
        document.getElementById("start").disabled = true;
      
interval=setInterval(counter,10);
}

function pause(){
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;

  
clearInterval(interval)

}
function reset(){ 
    pause()
    document.getElementById("pause").disabled = false;
    mshtml.innerHTML=0;
    sechtml.innerHTML=0;
    hourhtml.innerHTML=0;
    sechtml.innerHTML=0;
    // document.getElementById('Reset').onclick = function () { 
    //     document.getElementById('theme_css').href = '../style1.css';
    // };
   

}



    














