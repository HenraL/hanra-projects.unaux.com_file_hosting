function variableBox(lesson, idToHide, showHide) {
  var isChecked = document.getElementById(lesson).checked;
  var tt = "";
  var disp = "inline";
  if (isChecked) {
    tt = "Hide";
    disp = "inherit";
    console.log(tt, disp);
  } else {
    tt = "Show";
    disp = "none";
    console.log(tt, disp);
  }
  document.getElementById(showHide).innerHTML = tt;
  document.getElementById(idToHide).style.display = disp;
}