/*Enter a time in ms and it will wait*/
/*Code copied from : sleep.js by Quan (https://codepen.io/quannt91/pen/OJNWMqY?editors=1112)*/
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}


/*my codes*/
/*recursive*/
function mysleep_r(time){
  var i=0;
}
/*iterative*/
function mysleep_i(time){
  var i=0;
}
/*initiators*/
async function start(){
    var modules=["sleep.js by Quand","mysleep_r by Henry Letellier","mysleep_i by Henry Letellier"];
    document.getElementById("w1").innerHTML="";
    document.getElementById("w2").innerHTML="";
    document.getElementById("w3").innerHTML="";
    var number=document.getElementById("function").value,
    time=document.getElementById("time").value;
    // document.getElementById("ctime").innerHTML=time;
    // document.getElementById("funcc").innerHTML=modules[number];
    console.log(number+"' '"+time)
    if (number==="0"){
        console.log(0);
        await sleep(time);
        document.getElementById("w1").innerHTML="Hello";
        console.log("Hello");
        await sleep(time);
        console.log("World");
        document.getElementById("w2").innerHTML="World";
        await sleep(time);
        console.log(".");
        document.getElementById("w3").innerHTML=".";
    } else if (number==="1") {
        console.log(1);
        await sleep(time);
        document.getElementById("w1").innerHTML="Hello";
        console.log("Hello");
        await sleep(time);
        console.log("World");
        document.getElementById("w2").innerHTML="World";
        await sleep(time);
        console.log(".");
        document.getElementById("w3").innerHTML=".";
    } else if (number==="2") {
        console.log(2);
        await sleep(time);
        document.getElementById("w1").innerHTML="Hello";
        console.log("Hello");
        await sleep(time);
        console.log("World");
        document.getElementById("w2").innerHTML="World";
        await sleep(time);
        console.log(".");
        document.getElementById("w3").innerHTML=".";
    }
}
  
function avaidable_modules(){
    var modules=["sleep.js by Quand","mysleep_r by Henry Letellier","mysleep_i by Henry Letellier"];
    var InMind=["The parent function calling the module has to be declared with async","You must call the child function with 'wait' in front of it","The child module doesn't need to be async",];
    var c="";
    if (modules.length>InMind.length){
        // var diff=modules.length-InMind.length;
        for (var i=0;i<(modules.length-InMind.length);i++){
            InMind.push(" ");
        };
    };
    if (InMind.length>modules.length){
        // var diff=InMind.length-modules.length;
        for (var i=0;i<(InMind.length-modules.length);i++){
            modules.push(" ");
        };
    };
    for (var i=0;i<modules.length;i++){
        c=c+"<tr><td>"+i+" "+modules[i]+"</td>";//<td colspan=2>    </td> <td>"+(i+1)+" "+InMind[i]+"</td> </tr>";
    }
    document.getElementById("AModules").innerHTML=c;
    document.getElementById("function").value=0;
    document.getElementById("time").value=5000;
};

function reseters(){
    // avaidable_modules();
    var idsVal=["function","time"];
    var idsInHtml=["funcc","ctime","w1","w2","w3"]
    for (var i=0;i<idsVal.length;i++){
        document.getElementById(idsVal[i]).value=0;
    }
    for (var i=0;i<idsInHtml.length;i++){
        document.getElementById(idsInHtml[i]).innerHTML="";
    }
};
  
// reseters();