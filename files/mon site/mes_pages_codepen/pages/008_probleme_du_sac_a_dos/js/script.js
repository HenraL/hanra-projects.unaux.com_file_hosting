const To1=1000000000000;
const Go1=1000000000;
const Mo1=1000000;
const Ko1=1000;
const o1=1;
// var roomOnKey;
// var spaceTaken;
// var spaceLeft;
var SKxx=1;
var Skxx=1;
var SKbb=1;
var SLxx=0;
var Slxx=1;
var FTCxx=0;
var fTCxx=1;
var TCSxx=0;
var Tcsxx=1;
// var diff=1;
var SkLxx=document.getElementById('SK').value;
document.getElementById('SK').value=SKxx;
// document.getElementById('sk').innerHTML=SKxx;
document.getElementById('Sk').value=Skxx;
// document.getElementById('sK').innerHTML=Skxx;
document.getElementById('SL').value=SLxx;
// document.getElementById('sl').innerHTML=Slxx;
document.getElementById('Sl').value=Slxx;
// document.getElementById('sL').innerHTML=Slxx;
document.getElementById('FTC').value=FTCxx;
// document.getElementById('ftc').innerHTML=FTCxx;
document.getElementById('fTC').value=fTCxx;
// document.getElementById('Ftc').innerHTML=fTCxx;
document.getElementById('TCS').value=TCSxx;
// document.getElementById('tcs').innerHTML=TCSxx;
document.getElementById('Tcs').value=Tcsxx;
// document.getElementById('tCS').innerHTML=Tcsxx;
console.log("© Created by Henry Letellier");
// Innitialising the sizeKey function
function sizeKey(){
  SKxx=document.getElementById('SK').value;
  SLxx=document.getElementById('SL').value;
//   document.getElementById('sk').innerHTML=SKxx;
  if (SKxx>=999999999999999){SKxx=999999999999999;}
  if (SLxx>=999999999999998){SLxx=999999999999998;document.getElementById('SL').value=SLxx;}
  /*if (SLxx>=(Skxx-1)){
    console.log("diff+=Skxx="+diff)
    document.getElementById('SL').value=SLxx;
    document.getElementById('SK').value=SLxx+1;
  }*/
  console.log("SKxx="+SKxx);
  console.log("© Created by Henry Letellier");
}
//  Innitialising the reset function for the sizeKey function
function resetSizeKey(){
  document.getElementById('SK').value=1;
  SKxx=0;
  // document.getElementById('sk').innerHTML=SKxx;
console.log("© Created by Henry Letellier");
}
// initialising function addmax
function addMaxfc(){
  document.getElementById('SK').value=999999999999999;
}

//  Innitialising the sapceLeft function
function spaceLeft(){
  SLxx=document.getElementById('SL').value;
  Skxx=document.getElementById('SK').value;
//   document.getElementById('sk').innerHTML=SKxx;
  if (SKxx>=999999999999999){SKxx=999999999999999;document.getElementById('SK').value=SKxx;}
  if (SLxx>=999999999999998){SLxx=999999999999998;}
  /*if (SLxx>=(Skxx-1)){
    SKxx=SLxx+1;
    document.getElementById('SK').value=SKxx;
    console.log(Skxx);
  }*/
  document.getElementById('SL').value=SLxx;
  console.log("SLxx="+SLxx);
  console.log("© Created by Henry Letellier");
}
//  Innitialising the reset function for the spaceLeft function
function resetspaceLeft(){
  document.getElementById('SL').value=0;
  SKxx=0;
//   document.getElementById('sl').innerHTML=SLxx;
console.log("© Created by Henry Letellier");
}
/*
//  Innitialising the fileToCopy function
function fileToCopy(){
  SKxx=document.getElementById('SK').value;
//   document.getElementById('sk').innerHTML=SKxx;
  if (SKxx>=999999999999999){SKxx=999999999999999;}
  console.log("SKxx="+SKxx);
  console.log("© Created by Henry Letellier");
}
//  Innitialising the reset function for the fileToCopy function
function resetfileToCopy(){
  document.getElementById('SK').value=0;
  SKxx=0;
//   document.getElementById('sk').innerHTML=SKxx;
console.log("© Created by Henry Letellier");
}
// TCS
function totalCopySize(){
  SKxx=document.getElementById('SK').value;
//   document.getElementById('sk').innerHTML=SKxx;
  if (SKxx>=999999999999999){SKxx=999999999999999;}
  console.log("SKxx="+SKxx);
  console.log("© Created by Henry Letellier");
}
//  Innitialising the reset function for the sizeKey function
function resetSizeKey(){
  document.getElementById('SK').value=0;
  SKxx=0;
//   document.getElementById('sk').innerHTML=SKxx;
console.log("© Created by Henry Letellier");
}*/

// Defining the buttons Action rapide n°1
// Defining incrementor sk()
function skIncr(){
  SKbb=document.getElementById('Sk').value;
  document.getElementById('sko').innerHTML=SKbb;
  document.getElementById('skKo').innerHTML=SKbb;
  document.getElementById('skMo').innerHTML=SKbb;
  document.getElementById('skGo').innerHTML=SKbb;
  document.getElementById('skTo').innerHTML=SKbb;
  //document.getElementById('aa').innerHTML=SKbb; //side data
  console.log("SKbb="+SKbb);
  console.log("© Created by Henry Letellier");
}
// Defining button +1o
function add1osk(){
  SKxx+=(SKbb*o1);
  document.getElementById('SK').value=SKxx;
  // document.getElementById('e').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Ko
function add1kosk(){
  SKxx+=(SKbb*Ko1);
  document.getElementById('SK').value=SKxx;
  // document.getElementById('e').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Mo
function add1Mosk(){
  SKxx+=(SKbb*Mo1);
  document.getElementById('SK').value=SKxx;
  // document.getElementById('e').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Go
function add1Gosk(){
  SKxx+=(SKbb*Go1);
  document.getElementById('SK').value=SKxx;
  // document.getElementById('c').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1To
function add1Tosk(){
  SKxx+=(SKbb*To1);
  document.getElementById('SK').value=SKxx;
  // document.getElementById('c').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining the buttons Action rapide n°2
// Defining incrementor sl()
function sl(){
  SKbb=document.getElementById('SL').value;
  document.getElementById('add1osl').innerHTML=SLbb;
  document.getElementById('add1Kosl').innerHTML=SLbb;
  document.getElementById('add1Mosl').innerHTML=SLbb;
  document.getElementById('add1Gosl').innerHTML=SLbb;
  document.getElementById('add1Tosl').innerHTML=SLbb;
  document.getElementById('aa').innerHTML=SLbb; //side data
  console.log("SLbb="+SLbb);
  console.log("© Created by Henry Letellier");
}
// Defining button +1o
function add1osk(){
  SLxx+=(SLbb*o1);
  document.getElementById('E').value=SLxx;
  document.getElementById('e').innerHTML=SLxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Ko
function add1kosk(){
  SLxx+=(SLbb*Ko1);
  document.getElementById('E').value=SLxx;
  document.getElementById('e').innerHTML=SLxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Mo
function add1Mosk(){
  SLxx+=(SLbb*Mo1);
  document.getElementById('E').value=SLxx;
  document.getElementById('e').innerHTML=SLxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Go
function add1Gosk(){
  SLxx+=(SLbb*Go1);
  document.getElementById('C').value=SLxx;
  document.getElementById('c').innerHTML=SLxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1To
function add1Tosk(){
  SLxx+=(SLbb*To1);
  document.getElementById('C').value=SLxx;
  document.getElementById('c').innerHTML=SLxx;
  console.log("© Created by Henry Letellier");
}
/*
// Defining the buttons Action rapide n°3
// Defining incrementor ac()
function sk(){
  SKbb=document.getElementById('SK').value;
  document.getElementById('sko').innerHTML=SKbb;
  document.getElementById('skKo').innerHTML=SKbb;
  document.getElementById('skMo').innerHTML=SKbb;
  document.getElementById('skGo').innerHTML=SKbb;
  document.getElementById('skTo').innerHTML=SKbb;
  document.getElementById('aa').innerHTML=SKbb; //side data
  console.log("SKbb="+SKbb);
  console.log("© Created by Henry Letellier");
};
// Defining button +1o
function add1osk(){
  SKxx+=(SKbb*o1);
  document.getElementById('E').value=SKxx;
  document.getElementById('e').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Ko
function add1kosk(){
  SKxx+=(SKbb*Ko1);
  document.getElementById('E').value=SKxx;
  document.getElementById('e').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Mo
function add1Mosk(){
  SKxx+=(SKbb*Mo1);
  document.getElementById('E').value=SKxx;
  document.getElementById('e').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1Go
function add1Gosk(){
  SKxx+=(SKbb*Go1);
  document.getElementById('C').value=SKxx;
  document.getElementById('c').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}
// Defining button +1To
function add1Tosk(){
  SKxx+=(SKbb*To1);
  document.getElementById('C').value=SKxx;
  document.getElementById('c').innerHTML=SKxx;
  console.log("© Created by Henry Letellier");
}*/