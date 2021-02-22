function Get_time(){
    x=document.getElementById("range").value;
    console.log("Get_time: x=",x);
    Sleep(x)
}

function Sleep(x){
    var a=0;
    x*=1000;
    x++;
    Launch(x,a);
}
function Launch(x,a){
    if (a<x){
        a++;
        document.getElementById('progress').innerHTML=a;
        // console.log("a=",a);
        // console.log("x=",x);
        return Launch(x,a);
    } else {
        // console.log("a=",a);
        // console.log("x=",x);
        document.getElementById('progress').innerHTML=a;
        // alert("Time's up!");
    }
}
