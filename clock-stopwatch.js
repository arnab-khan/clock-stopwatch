// switch srart 
function clockon(){
    document.getElementsByClassName("stopwatchon")[0].style.backgroundColor="transparent";
    document.getElementsByClassName("clockon")[0].style.backgroundColor="blueviolet";
    document.getElementsByClassName("bothon")[0].style.backgroundColor="transparent";
    document.getElementsByClassName("stopwatch")[0].style.display="none";
    document.getElementsByClassName("clock")[0].style.display="block";
    document.getElementsByClassName("clock")[0].style.width="100vw";
}
function stopwatchon(){
    document.getElementsByClassName("stopwatchon")[0].style.backgroundColor="blueviolet";
    document.getElementsByClassName("clockon")[0].style.backgroundColor="transparent";
    document.getElementsByClassName("bothon")[0].style.backgroundColor="transparent";
    document.getElementsByClassName("stopwatch")[0].style.display="block";
    document.getElementsByClassName("clock")[0].style.display="none";
    document.getElementsByClassName("stopwatch")[0].style.width="100vw";
    document.getElementsByClassName("stopwatch")[0].style.left="0vw";
}
function bothon(){
    document.getElementsByClassName("stopwatchon")[0].style.backgroundColor="transparent";
    document.getElementsByClassName("clockon")[0].style.backgroundColor="transparent";
    document.getElementsByClassName("bothon")[0].style.backgroundColor="blueviolet";
    document.getElementsByClassName("stopwatch")[0].style.display="block";
    document.getElementsByClassName("clock")[0].style.display="block";
    document.getElementsByClassName("clock")[0].style.width="50vw";
    document.getElementsByClassName("stopwatch")[0].style.width="50vw";
    document.getElementsByClassName("stopwatch")[0].style.left="50vw";
}
// end switch 


// start stopwatch 
var stopwatch=0;
var settime;
var split="";
var splitcount=0;
function startandstop(){
    if (stopwatch==0) {
        document.getElementsByClassName("startandstop")[0].innerHTML="STOP";
        document.getElementsByClassName("startandstop")[0].style.backgroundColor="red";
        document.getElementsByClassName("continueandsplit")[0].innerHTML="SPLIT";
        document.getElementsByClassName("continueandsplit")[0].style.opacity="1";
        document.getElementsByClassName("continueandsplit")[0].style.backgroundColor="yellow";
        settime=setInterval(timestart,10);
        stopwatch=1;
    }
    else  if (stopwatch==1) {
        document.getElementsByClassName("startandstop")[0].innerHTML="CLEAR";
        document.getElementsByClassName("startandstop")[0].style.backgroundColor="orange";
        document.getElementsByClassName("continueandsplit")[0].innerHTML="CONTINUE";
        document.getElementsByClassName("continueandsplit")[0].style.backgroundColor="blue";
        clearInterval(settime);
        stopwatch=2;
    }
   else if (stopwatch==2) {
        document.getElementsByClassName("startandstop")[0].innerHTML="START";
        document.getElementsByClassName("startandstop")[0].style.backgroundColor="green";
        document.getElementsByClassName("continueandsplit")[0].innerHTML="SPLIT";
        document.getElementsByClassName("continueandsplit")[0].style.opacity=".2";
        document.getElementsByClassName("continueandsplit")[0].style.backgroundColor="yellow";
        clearInterval(settime);
        stopwatch=0;
        t=0;
        document.getElementsByClassName("maindisplay")[0].innerHTML="0 : 00 : 00";
        split="";
        splitcount=0;
        document.getElementsByClassName("display")[0].innerHTML=""
   }
   
    // console.log(stopwatch)
}

function continueandsplit(){   
    if (stopwatch==0) {
        
    }
    else  if (stopwatch==1) {
       splitcount=splitcount+1;
       split= document.getElementsByClassName("display")[0].innerHTML=splitcount.toString()+". &nbsp &nbsp " + display.toString() +"<br>"+ split;
    }
   else if (stopwatch==2) {
    document.getElementsByClassName("startandstop")[0].innerHTML="STOP";
    document.getElementsByClassName("startandstop")[0].style.backgroundColor="red";
    document.getElementsByClassName("continueandsplit")[0].innerHTML="SPLIT";
    document.getElementsByClassName("continueandsplit")[0].style.opacity="1";
    document.getElementsByClassName("continueandsplit")[0].style.backgroundColor="yellow";
    settime=setInterval(timestart,10);
    stopwatch=1
   }
   
    // console.log(stopwatch)
}
// end stopwatch

// start time 
var t=0;
var tsubsec;
var tsec;
var tmin;
var display;

function timestart(){
    t=t+1;
    tsubsec=("0"+((t%100).toString())).slice(-2);
    tsec=("0"+((((t-(t%100))/100)%60).toString())).slice(-2);
    tmin=Math.floor(t/6000);
    // console.log(t);
    display=document.getElementsByClassName("maindisplay")[0].innerHTML=+tmin+" : "+tsec+" : "+tsubsec;    
}
// time end 


// start clock 

var c=document.getElementsByClassName("clock")[0];
var ch=window.getComputedStyle(c).getPropertyValue("height");
// console.log(ch);
var cw=window.getComputedStyle(c).getPropertyValue("width");
// console.log(cw);
var cmin;
if (ch>=cw) {
    cmin=cw;
} else {
    cmin=ch;
}
// console.log(cmin);
document.getElementsByClassName("clocksquare")[0].style.height=cmin;
document.getElementsByClassName("clocksquare")[0].style.width=cmin;
document.getElementsByClassName("clocksquare")[0].style.transform="scale(.8,.8)";

document.getElementsByClassName("clockcircle")[0].style.height=cmin;
document.getElementsByClassName("clockcircle")[0].style.width=cmin;
document.getElementsByClassName("clockcircle")[0].style.transform="scale(.8,.8)";

var cld=0;
var clp=0;
var cldp=0;
for (let clnum = 0; clnum <=11; clnum++) {
    cld=cld+30;
    cldeg="rotate("+cld+"deg)";
    document.getElementsByClassName("clnum")[clnum].style.transform=cldeg;
    document.getElementsByClassName("clnum")[clnum].style.transformOrigin="50% 745%";
    clp=clp-30;
    cldp="rotate("+clp+"deg)";
    document.getElementsByClassName("clp")[clnum].style.transform=cldp;
}

setInterval(timeloop,1000);
function timeloop() {
    var date= new Date();
var hr=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
var secr="rotate("+6*sec+"deg)";
document.getElementsByClassName("sec")[0].style.transform=secr;
document.getElementsByClassName("sec")[0].style.transformOrigin="49% 100%";

var minr="rotate("+6*(min+sec/60)+"deg)";
document.getElementsByClassName("min")[0].style.transform=minr;
document.getElementsByClassName("min")[0].style.transformOrigin="48% 100%";

var hrr="rotate("+30*(hr+min/60)+"deg)";
document.getElementsByClassName("hr")[0].style.transform=hrr;
document.getElementsByClassName("hr")[0].style.transformOrigin="48.5% 100%";
// console.log(date);
// console.log(hr);
// console.log(min);
// console.log(sec);
}













