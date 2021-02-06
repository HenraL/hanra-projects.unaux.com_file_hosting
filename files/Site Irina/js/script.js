var bgpage;
var coll;
function col(){
  vaal=document.getElementById('baliseColor').value;
  if (vaal=="dark"){
    bgpage="background-color: black;";
    coll="color: aliceblue;"
  }
  if (vaal=="ligth"){
    bgpage="background-color: aliceblue;";
    coll="color: black;"
  }
  console.log(bgpage);
  console.log(coll);

  document.getElementById("background_page")=bgpage;
  document.getElementsByName('p')=coll;
  document.getElementsByName('h1')=coll;
  document.getElementsByName('h2')=coll;
  document.getElementsByName('h3')=coll;
  document.getElementsByName('h4')=coll;
  document.getElementsByName('h5')=coll;
  document.getElementsByName('h6')=coll;
  document.getElementsByName('h7')=coll;
  document.getElementsByName('h8')=coll;
}