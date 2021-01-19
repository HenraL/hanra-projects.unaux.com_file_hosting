var ODB='OpenDyslexic-Bold',
    ODI='OpenDyslexic-Italic',
    ODR='OpenDyslexic-Regular',
    ODABI='OpenDyslexic-Alt-a-Bold-Italic',
    ODAI='OpenDyslexic-Alt-a-Italic',
    ODAR='OpenDyslexic-Alt-a-Regular',
    ODMR='OpenDyslexic-Mono-Regular',
    BODB='Beta-OpenDyslexic-Bold',
    BODBI='Beta-OpenDyslexic-Bold-Italic',
    BODR='Beta-OpenDyslexic-Regular',
    OD2B='OpenDyslexic2-Bold',
    OD2I='OpenDyslexic2-Italic',
    OD2R='OpenDyslexic2-Regular',
    OD2AB='OpenDyslexic2-Alt-a-Bold',
    OD2ABI='OpenDyslexic2-Alt-a-Bold-Italic',
    OD2AI='OpenDyslexic2-Alt-a-Italic',
    OD2AR='OpenDyslexic2-Alt-a-Regular',
    OD3B='OpenDyslexic3-Bold',
    OD3R='OpenDyslexic3-Regular',
    ODM='OpenDyslexic-Mono';
var val;
var vall;
var colChoice;
var semiiChoice;
var disp="inherit";
document.querySelector('table#variableBoxx').style.display=disp;
document.querySelector('table#variableBoxy').style.display=disp;
var disp="none";
document.getElementById("showHide2").innerHTML=tt;
document.querySelector('tr#allFonts1').style.display=disp;
document.querySelector('tr#allFonts2').style.display=disp;
document.querySelector('tr#allFonts3').style.display=disp;
document.querySelector('tr#allFonts4').style.display=disp;
document.querySelector('tr#allFonts5').style.display=disp;
document.querySelector('tr#allFonts6').style.display=disp;
document.querySelector('table#wtester').style.display=disp;
function variableBox(){
    //id="test"
    //span id= showHide1
    //div id=variableBoxx
    //tr id=variableBoxy
    var isChecked = document.getElementById("test").checked;
    var tt="";
    var disp="inline"
    if(isChecked){
        tt="Hide";
        disp="inherit"
        console.log(tt, disp);
    } else {
        tt="Show";
        disp="none"
        console.log(tt, disp);
    }
    document.getElementById("showHide1").innerHTML=tt;
    document.querySelector('table#variableBoxx').style.display=disp;
    document.querySelector('table#variableBoxy').style.display=disp;
    document.querySelector("table.choice").style.width=100+"%";
    // document.querySelector("caption.choice").style.color="white";
    document.querySelector('tr#choice').style.width=100+"%";
    document.querySelector("caption.unNorm").style.margin.left=0+"%";
    document.querySelector('tr#choice').style.border="blue"+3+"px"+"groove";
}

function allFonts(){
    //id=test2
    //span id=showHide2
    //tr id=allFonts1
    //tr id=allFonts2
    //tr id=allFonts3
    //tr id=allFonts4
    //tr id=allFonts5
    //tr id=allFonts6
    var isChecked = document.getElementById("test2").checked;
    var tt="";
    var disp="none"
    if(isChecked){
        tt="Hide";
        disp="inherit"
        console.log(tt, disp);
    } else {
        tt="Show";
        disp="none"
        console.log(tt, disp);
    }
    document.getElementById("showHide2").innerHTML=tt;
    document.querySelector('tr#allFonts1').style.display=disp;
    document.querySelector('tr#allFonts2').style.display=disp;
    document.querySelector('tr#allFonts3').style.display=disp;
    document.querySelector('tr#allFonts4').style.display=disp;
    document.querySelector('tr#allFonts5').style.display=disp;
    document.querySelector('tr#allFonts6').style.display=disp;
    document.querySelectorAll('td#all').style.display=disp;
    // document.getElementById('all').style.display=disp;
}
function customText(){
    //id=test3
    //span id=showHide3
    //table id=wtester
    var isChecked = document.getElementById("test3").checked;
    var tt="";
    var disp="none"
    if(isChecked){
        tt="Hide";
        disp="inherit"
        console.log(tt, disp);
    } else {
        tt="Show";
        disp="none"
        console.log(tt, disp);
    }
    document.getElementById("showHide3").innerHTML=tt;
    document.querySelector('table#wtester').style.display=disp;
    document.querySelectorAll('td#all').style.display=disp;
    document.getElementById('all').style.display=disp;
}
function fSize(){
    vaal=document.getElementById('baliseColor').value;
    if (vaal==" "){
        colChoice=colChoice;
    }
    if (vaal=="nothing"){
      colChoice='Times New Roman';
    }
    if (vaal=="ODB"){
      colChoice=ODB;
    // ODB: Open Dyslexic Bold
    // ODI: Open Dyslexic Italic
    // ODR: Open Dyslexic Regular
    // ODABI: Open Dyslexic Alta Bold Italic
    // ODAI: Open Dyslexic OpenDyslexic Alta Italic
    // ODAR: Open Dyslexic Alta Regular
    // ODMR: Open Dyslexic Mono Regular
    // BODB: Beta Open Dyslexic Bold
    // BODBI: Beta Open Dyslexic Bold Italic
    // BODR: Beta Open Dyslexic Regular
    // OD2B: Open Dyslexic2 Bold
    // OD2I: Open Dyslexic2 Italic
    // OD2R: Open Dyslexic2 Regular
    // OD2AB: Open Dyslexic2 Alta Bold
    // OD2ABI: Open Dyslexic2 Alta Bold Italic
    // OD2AI: Open Dyslexic2 Alta Italic
    // OD2AR: Open Dyslexic2 Alta Regular
    // OD3B: Open Dyslexic3 Bold
    // OD3R: Open Dyslexic3 Regular
    // ODM: Open Dyslexic Mono
    }
    if (vaal=="ODI"){
      colChoice=ODI;
    }
    if (vaal=="ODR"){
      colChoice=ODR;
    }
    if (vaal=="ODABI"){
      colChoice=ODABI;
    }
    if (vaal=="ODAI"){
      colChoice=ODAI;
    }
    if (vaal=="ODAR"){
      colChoice=ODAR;
    }
    if (vaal=="ODMR"){
      colChoice=ODMR;
    }
    if (vaal=="BODB"){
      colChoice=BODB;
    }
    if (vaal=="BODBI"){
      colChoice=BODBI;
    }
    if (vaal=="BODR"){
      colChoice=BODR;
    }
    if (vaal=="OD2B"){
        colChoice=OD2B;
    }
    if (vaal=="OD2I"){
      colChoice=OD2I;
    }
    if (vaal=="OD2R"){
      colChoice=OD2R;
    }
    if (vaal=="OD2AB"){
      colChoice=OD2AB;
    }
    if (vaal=="OD2ABI"){
      colChoice=OD2ABI;
    }
    if (vaal=="OD2AI"){
      colChoice=OD2AI;
    }
    if (vaal=="OD2AR"){
      colChoice=OD2AR;
    }
    if (vaal=="OD3B"){
      colChoice=OD3B;
    }
    if (vaal=="OD3R"){
      colChoice=OD3R;
    }
    if (vaal=="ODM"){
        colChoice=ODM;
    }

    console.log(vaal);
    console.log(colChoice);
    
    document.querySelector("span.norm").style.fontFamily=colChoice;
    // document.getElementById("p1").style.fontFamily=colChoice;
    // document.querySelector("p").style.color="blue";
    // document.querySelector("span#ps").innerHTML=colChoice;
    // document.getElementsByClassName("link").style.fontFamily=colChoice;
    // document.querySelector("p.big").style.fontFamily=colChoice;
    // document.querySelector("p.big1").style.fontFamily=colChoice;
    // document.getElementById("p").style.fontFamily=colChoice;
    // document.getElementsByClassName("p").style.color="blue";
    // document.getElementById('ps').innerHTML=colchoice;         
}
function viewFont(){
    vaal=document.getElementById('baliseColor').value;
    if (vaal=="nothing"){
      colChoice='Times New Roman';
    }
    if (vaal=="a"){
      colChoice='Algerian';
    }
    if (vaal=="b"){
      colChoice='opendyslexic-bold';
    }
    if (vaal=="c"){
      colChoice='opendyslexic-bolditalic';
    }
    if (vaal=="d"){
      colChoice='opendyslexic-italic';
    }
    if (vaal=="e"){
      colChoice='opendyslexic-regular'
    }
    if (vaal=="f"){
      colChoice='opendyslexicalta-bold'
    }
    if (vaal=="g"){
      colChoice='opendyslexicalta-bolditalic'
    }
    if (vaal=="h"){
      colChoice='opendyslexicalta-italic'
    }
    if (vaal=="i"){
      colChoice='opendyslexicalta-regular'
    }
    if (vaal=="j"){
      colChoice='opendyslexicmono-regular'
    }
    console.log(vaal);
    console.log(colChoice);
    
    document.querySelector("p").style.fontFamily=colChoice;
    document.getElementById("p1").style.fontFamily=colChoice;
    // document.querySelector("p").style.color="blue";
    document.querySelector("span#ps").innerHTML=colChoice;
    // document.getElementsByClassName("link").style.fontFamily=colChoice;
    document.querySelector("p.big").style.fontFamily=colChoice;
    document.querySelector("p.big1").style.fontFamily=colChoice;
    document.getElementById("p").style.fontFamily=colChoice;
    // document.getElementsByClassName("p").style.color="blue";
    // document.getElementById('ps').innerHTML=colchoice;
}
function viewFontText(){
    vaal=document.getElementById('baliseColor').value;
    if (vaal=="nothing"){
      colChoice='Times New Roman';
    }
    if (vaal=="a"){
      colChoice='Algerian';
    }
    if (vaal=="b"){
      colChoice='opendyslexic-bold';
    }
    if (vaal=="c"){
      colChoice='opendyslexic-bolditalic';
    }
    if (vaal=="d"){
      colChoice='opendyslexic-italic';
    }
    if (vaal=="e"){
      colChoice='opendyslexic-regular'
    }
    if (vaal=="f"){
      colChoice='opendyslexicalta-bold'
    }
    if (vaal=="g"){
      colChoice='opendyslexicalta-bolditalic'
    }
    if (vaal=="h"){
      colChoice='opendyslexicalta-italic'
    }
    if (vaal=="i"){
      colChoice='opendyslexicalta-regular'
    }
    if (vaal=="j"){
      colChoice='opendyslexicmono-regular'
    }
    console.log(vaal);
    console.log(colChoice);
    
    document.querySelector("p").style.fontFamily=colChoice;
    document.getElementById("p1").style.fontFamily=colChoice;
    // document.querySelector("p").style.color="blue";
    document.querySelector("span#ps").innerHTML=colChoice;
    // document.getElementsByClassName("link").style.fontFamily=colChoice;
    document.querySelector("p.big").style.fontFamily=colChoice;
    document.querySelector("p.big1").style.fontFamily=colChoice;
    document.getElementById("p").style.fontFamily=colChoice;
    // document.getElementsByClassName("p").style.color="blue";
    // document.getElementById('ps').innerHTML=colchoice;
}