window.onscroll = function(){
   scrollFunction()
}

var i = 0;
i = 1;
var width = 1;

window.onscroll = function(width){
  scrollFunction(width);
}

function scrollFunction(width){
  window.addEventListener('wheel', function(event,width){
    if (event.deltaY < 0){
      console.log('scrolling up');
      scrollAdd();
    }
    else if (event.deltaY > 0){
      scrollRemove();
      console.log('scrolling down');
    }
    document.getElementById("myBar").style.width = width + "%"
  });
}
function scrollAdd(width){
  if (width > 100) {
   width=0;
   document.getElementById("myBar").style.width = width + "%"
  } else {
    console.log(width)
    width+=1;
    console.log(width)
  }
}

function scrollRemove(width){
  if (width === 0) {
    width=0;
    document.getElementById("myBar").style.width = width + "%";
  } else {
    console.log(width)
    width+=-1;
    console.log(width)
  }
}



var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}