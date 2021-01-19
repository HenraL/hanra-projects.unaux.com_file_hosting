var xx
var yy
function x(){
  xx=document.getElementById('X').value;
  document.getElementById('x').innerHTML=xx;
}
function y(){
  yy=document.getElementById('Y').value;
  document.getElementById('y').innerHTML=yy;
}
function resetx(){
  document.getElementById('X').value=0;
  xx=0;
  document.getElementById('x').innerHTML=xx;
}
function resety(){
  document.getElementById('X').value=0;
  yy=0;
  document.getElementById('y').innerHTML=yy;
}

// var value = $(this).prev().attr('value');