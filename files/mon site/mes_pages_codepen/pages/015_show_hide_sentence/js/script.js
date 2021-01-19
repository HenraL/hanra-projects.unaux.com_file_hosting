function text() {
  var isChecked = document.getElementById("test").checked;
  var tt="";
    
   if(isChecked){
     tt="Input 1 is checked";
     console.log(tt);
     
   } else {
     tt="Input 1 is NOT checked";
     console.log(tt);
     
   }
  document.getElementById("text").innerHTML=tt;
}

function text2() {
  var isChecked = document.getElementById("test2").checked;
  
  var tt="";
    
   if(isChecked){
     tt="Input 2 is checked";
     console.log(tt);
     
   } else {
     tt="Input 2 is NOT checked";
     console.log(tt);
     
   }
  document.getElementById("text2").innerHTML=tt;
}
function text3() {
  var isChecked = document.getElementById("test3").checked;
  var tt="";
  if(isChecked){
    document.querySelector('span#display').style.display="inline";
     tt="Input 3 is checked";
     console.log(tt);
     
   } else {
     document.querySelector('span#display').style.display="none";
     tt="Input 3 is NOT checked";
     console.log(tt);
     
   }
  document.getElementById("text3").innerHTML=tt;
}

// document.addEventListener('DOMContentLoaded', function () {
//   var checkbox = document.querySelector('input[type="checkbox"]');

//   checkbox.addEventListener('change', function () {
//     if (checkbox.checked) {
//       // do this
//       console.log('Checked');
//     } else {
//       // do that
//       console.log('Not checked');
//     }
//   });
// });