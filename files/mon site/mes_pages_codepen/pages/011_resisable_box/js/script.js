var X=0;
var Y=0;
var box=document.getElementById('ee');
console.log("1 x="+X+"; Y="+Y)
document.getElementById('x').value=X;
document.getElementById('y').value=Y;
document.getElementById('verx').innerHTML="";
document.getElementById('very').innerHTML="";
document.getElementById('lenx').innerHTML=X;
document.getElementById('leny').innerHTML=Y;
console.log("2 x="+X+"; Y="+Y)

function sizex(){
  X=document.getElementById('x').value;
  document.querySelector('div#ee').style.height=X+'px';
  document.getElementById('verx').innerHTML="L="+X+" px";
  document.getElementById('lenx').innerHTML="L="+X+" px";
  // console.log("3 x="+X+"; Y="+Y)
}

function sizey(){
  Y=document.getElementById('y').value;
  document.querySelector('div#ee').style.width=Y+'px';
  document.getElementById('very').innerHTML="H="+Y+" px";
  document.getElementById('leny').innerHTML="H="+Y+" px";
  // console.log("4 x="+X+"; Y="+Y)
}