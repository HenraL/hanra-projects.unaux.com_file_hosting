var sadFace=[];
sadFace=[" "," "," "," "," "," "," "," "," ","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","<br>"," "," "," "," "," "," "," "," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","\\","<br>"," "," "," "," "," "," "," ","/"," "," "," "," ","_","_","_"," "," "," "," "," "," "," "," "," ","_","_","_"," "," "," "," ","\\","<br>"," "," "," "," "," "," ","/"," "," "," "," ","|"," "," "," ","|"," "," "," "," "," "," "," ","|"," "," "," ","|"," "," "," "," ","\\","<br>"," "," "," "," "," ","/"," "," "," "," "," ","|"," ","."," ","|"," "," "," "," "," "," "," ","|"," ","."," ","|"," "," "," "," "," ","\\","<br>"," "," "," "," ","/"," "," "," "," "," "," ","|","_","_","_","|"," "," "," "," "," "," "," ","|","_","_","_","|"," "," "," "," "," "," ","\\","<br>"," "," "," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","."," "," "," "," "," "," "," "," "," ","\\","<br>"," "," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/"," ","\\"," "," "," "," "," "," "," "," "," ","\\","<br>"," ","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/"," "," "," ","\\"," "," "," "," "," "," "," "," "," ","\\","<br>","/"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","\\"," "," "," ","/"," "," "," "," "," "," "," "," "," "," ","\\","<br>","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","\\","_","/"," "," "," "," "," "," "," "," "," "," "," ","|","<br>","\\"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/","<br>"," ","\\"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/","<br>"," "," ","\\"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/","<br>"," "," "," ","\\"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","/","<br>"," "," "," "," ","\\"," "," "," "," "," "," ","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"," "," "," "," "," "," ","/","<br>"," "," "," "," "," ","\\"," "," "," "," ","|"," "," ","_","_","_","_","_","_","_","_","_","_","_","_","_"," "," ","|"," "," "," "," ","/","<br>"," "," "," "," "," "," ","\\"," "," "," ","|"," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," ","|"," ","|"," "," "," ","/","<br>"," "," "," "," "," "," "," ","\\"," "," ","|","_","|"," "," "," "," "," "," "," "," "," "," "," "," "," ","|","_","|"," "," ","/","<br>"," "," "," "," "," "," "," "," ","\\","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","/"];

function Sleep2(dureeAnimationS,elem, i){
    if(!i){
        var i = 0;
    }
    var tempsAnimation = dureeAnimationS * 1000;
    var tempsParOpacite = tempsAnimation/100;
    console.log("i=",i)
    i++;
    // to_write(elem)
    if(i <= 100){
        setTimeout(function(){
            // to_write(elem)
            ouvertureEstomper(dureeAnimationS,elem, i);
        }, tempsParOpacite);
    }
}

function to_write(elem){
    document.write(elem);
}

function wFace(){
    document.write("<pre class=\"sad_face\">");
    for (var b=0;b<sadFace.length;b++){
        // Sleep2(1,sadFace[b]);
        to_write(sadFace[b])
    }
    document.write("</pre>");
    // document.getElementsByClassName("sad_face").style.fontfamily="Consolas.ttf";
    // document.getElementsByClassName("sad_face").style.fontweight="normal";
    // document.getElementsByClassName("sad_face").style.fontsize="12px";
}
// wFace()
function WriteFace(c){
    document.getElementById("Sad_Face").innerHTML=c;
}
var TIM=0;
function between(c,TIM){
    if (TIM==100){
        c+=sadFace[i];
        document.getElementById("Sad_Face").innerHTML=c;
        return c
    } else {
        TIM++;
        setTimeout(function(){
            between(c,TIM);
        },10)
    }
}
function loop(c){
    var bef=inner;
    if (inner===sadFace.length){
        end(c);
    }
    if (bef>inner){
        c=between(c);
        inner++;
    } else {
        continue;
    }
}
function end(c){
    c+="</pre>";
    document.getElementById("Sad_Face").innerHTML=c;
}
function wFace_non_cleaner(){
    var c="";
    // var temp=[]
    c+="<pre class=\"sad_face\">"
    // document.getElementById('Sad_Face').innerHTML=c;
    // for (var i=0;i<sadFace.length;i++){
    //     c+=sadFace[i];
    //     WriteFace(c);
    //     // document.getElementById("Sad_Face").innerHTML=sadFace[i];
    //     ouvertureEstomper("texte", 1);
    // }
    loop(c);
    // c+="</pre>";
    // WriteFace(c);
    // document.getElementById("Sad_Face").innerHTML=c;
    // document.getElementsByClassName("sad_face").style.fontfamily="Consolas.ttf";
    // document.getElementsByClassName("sad_face").style.fontweight="normal";
    // document.getElementsByClassName("sad_face").style.fontsize="12px";
}
