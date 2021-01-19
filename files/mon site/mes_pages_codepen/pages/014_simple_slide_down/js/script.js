var up=1;
function down(){
  var sc = document.getElementById("child");
  var dw = document.getElementById("down");
  // dw.style.color='blue';
  // console.log(sc);
  if(up === 1){
    sc.style.top = "0";
    // console.log(sc);
    up=0;
  }
  else{
    sc.style.top = "-45px";
    up=1;
    // console.log(sc);
  }
}