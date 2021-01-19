var x=1188;
var y=66;
var constx=1188;
var consty=66;
document.getElementById('x').value=x;
document.getElementById('y').value=y;
document.getElementById('lenx').innerHTML="";
document.getElementById('leny').innerHTML="";
function sizex(){
  x=document.getElementById('x').value;
  document.querySelector('div#boite_principale_4').style.width=x+'px';
  document.getElementById('lenx').innerHTML="L="+x+" px";
}
function sizey(){
  y=document.getElementById('y').value;
  document.querySelector('div#boite_principale_4').style.height=y+'px';
  document.getElementById('leny').innerHTML="H="+y+" px";
}
function resetxy(){
  document.getElementById('x').value=constx;
  document.querySelector('div#boite_principale_4').style.width=constx+'px';
  document.getElementById('lenx').innerHTML="L="+constx+"px";
  document.getElementById('y').value=consty;
  document.querySelector('div#boite_principale_4').style.height=consty+'px';
  document.getElementById('leny').innerHTML="H="+consty+" px";
}
function zero(){
  document.getElementById('x').value=0;
  document.querySelector('div#boite_principale_4').style.width=0+'px';
  document.getElementById('lenx').innerHTML="L="+0+" px";
  document.getElementById('y').value=0;
  document.querySelector('div#boite_principale_4').style.height=0+'px';
  document.getElementById('leny').innerHTML="H="+0+" px";
}