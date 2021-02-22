var choice=1;
var sadFace=[];
var message=[];
var Face="";

sadFace=[" "," "," "," "," "," "," "," "," ","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","\n"," "," "," "," "," "," "," "," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/"," "," "," "," ","_","_","_"," "," "," "," "," "," "," "," "," ","_","_","_"," "," "," "," "," "," "," "," "," "," ","/"," "," "," "," ","|"," "," "," ","|"," "," "," "," "," "," "," ","|"," "," "," ","|"," "," "," "," "," "," "," "," "," ","/"," "," "," "," "," ","|"," ","."," ","|"," "," "," "," "," "," "," ","|"," ","."," ","|"," "," "," "," "," "," "," "," "," ","/"," "," "," "," "," "," ","|","_","_","_","|"," "," "," "," "," "," "," ","|","_","_","_","|"," "," "," "," "," "," "," "," "," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","."," "," "," "," "," "," "," "," "," "," "," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/"," ","\\"," "," "," "," "," "," "," "," "," "," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/"," "," "," ","\\"," "," "," "," "," "," "," "," "," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","\\"," "," "," ","/"," "," "," "," "," "," "," "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","\\","_","/"," "," "," "," "," "," "," "," "," "," "," ","|","\n","\\"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/","\n"," ","\\"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/","_n"," "," ","\\"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/","\n"," "," "," ","\\"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/","\n"," "," "," "," ","\\"," "," "," "," "," "," ","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"," "," "," "," "," "," ","/","\n"," "," "," "," "," ","\\"," "," "," "," ","|"," "," ","_","_","_","_","_","_","_","_","_","_","_","_","_"," "," ","|"," "," "," "," ","/","\n"," "," "," "," "," "," ","\\"," "," "," ","|"," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," ","|"," ","|"," "," "," ","/","\n"," "," "," "," "," "," "," ","\\"," "," ","|","_","|"," "," "," "," "," "," "," "," "," "," "," "," "," ","|","_","|"," "," ","/","\n"," "," "," "," "," "," "," "," ","\\","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","/"];

message.push("Pourquoi as-tu décidé de mettre en pause notre relation.\nJe me sens tellement seul maintenant. :-(\nJe sais que tu arrive facilement à vivre avec la solitude.\nMais ceci n'est pas le cas de tous.\nJ'ai tellement envie que l'on recommence à parler.\nMême si c'est juste un bonjour et bonsoir, c'est mieux que rien.\n🥺\n😭")

// console.log(sadFace);
// document.getElementById("textsadface").innerHTML=sadFace;



function Choice() {
    choice=document.getElementById("selectionchoice").value;
    // console.log(choice);
    if (choice==="1"){
        console.log("number:1");
        text()
    } 
    if (choice==="2") {
        console.log("number:2");
        circles()
    }
    if (choice==="0") {
        console.log("number:0");
        document.querySelector('div#shsf').style.display="none";
        document.querySelector('div#center').style.display="inline";
        document.getElementById("textsadface").innerHTML="";
        document.getElementById("message").innerHTML="";
        document.querySelector('div#ms').style.display="none";
    }

}
function YMM(){
    console.log("YMM()")
    document.getElementById("message").innerHTML="";
    document.querySelector('div#ms').style.display="inline";
    var missage="";
    for (var i=0;i<message.length;i++){
        if (
            message[i]==="\n"){missage+="<br>";
        } else {
            missage+=message[i];
        };
        document.getElementById("message").innerHTML=missage;
        sleep(1)
    }
}
function sleep(x){
    console.log("sleep()")
    x=x*1000
    var e=0;
    for (var i=0;i<x+1;i++){
        e++
    }
}
function text(){
    console.log("text()")
    var Face="";
    // console.log("1");
    document.querySelector('div#shsf').style.display="inline";
    document.querySelector('div#center').style.display="inline";
    document.getElementById("textsadface").innerHTML="";
    for (var d=0;d<sadFace.length;d++){
        if (sadFace==="\n"){
            Face+="<br>";
        } else {
            Face+=sadFace[d];
        }
        document.getElementById("textsadface").innerHTML=Face;
        // sleep(1);
    }
    YMM();
    // sadFace.forEach()
    // document.getEmementById("textsadface").innerHTML=Face;
}

function circles(){
    console.log("circles()")
    // console.log("2");
    document.getElementById("shsf").style.display.display="none";
    document.getElementById("center").style.display="inline";   
    YMM();
}