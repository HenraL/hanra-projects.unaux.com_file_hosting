function Sleep(x){
    ID="texte";
    dureeAnimationS=x;
    i=0;
    ouvertureEstomper(ID, dureeAnimationS, i)
}

function ouvertureEstomper(ID, dureeAnimationS, i){
    if(!i)
        var i = 0;
    var tempsAnimation = dureeAnimationS * 1000;
    var tempsParOpacite = tempsAnimation/100;
    var photo = document.getElementById(ID);
    photo.style.opacity = i/100;
    console.log(i);
    // alert(i);
    i++;
    if(i <= 100){
        setTimeout(function(){
            ouvertureEstomper(ID, dureeAnimationS, i);
        }, tempsParOpacite);
    }
}


// function Get_Tiime(){
//     var x=document.getElementById("range2").value;
//     ouvertureEstomper(x)
// }

// function Sleep(x){
//     ouvertureEstomper_cleaned("texte",x,0);
// }

// function ouvertureEstomper(ID, dureeAnimationS, i){
//     if(!i){
//         var i = 0;
//     }
//     var tempsAnimation = dureeAnimationS * 1000;
//     var tempsParOpacite = tempsAnimation/100;
//     var photo = document.getElementById(ID);
//     photo.style.opacity = i/100;
//     // alert(i);
//     document.getElementById("range2").innerHTML=i;
//     console.log("i=",i)
//     i++;
//     if(i <= 100){
//         setTimeout(function(){
//             ouvertureEstomper(ID, dureeAnimationS, i);
//         }, tempsParOpacite);
//     }
// }

// function ouvertureEstomper_cleaned(dureeAnimationS, i){
//     if(!i){
//         var i = 0;
//     }
//     var tempsAnimation = dureeAnimationS * 1000;
//     var tempsParOpacite = tempsAnimation/100;
//     console.log("i=",i)
//     i++;
//     if(i <= 100){
//         setTimeout(function(){
//             ouvertureEstomper(dureeAnimationS, i);
//         }, tempsParOpacite);
//     }
// }