console.log("show_hide_id initialising");
function showHide(IDFrom,IDTo,IDText){
    e=document.getElementById(IDFrom).checked;
    if (e===true){
        document.getElementById(IDTo).style.display="block";
        document.getElementById(IDText).innerHTML="Hide";
    } else {
        document.getElementById(IDTo).style.display="none";
        document.getElementById(IDText).innerHTML="Show";
    }
}
console.log("show_hide_id initialised");
