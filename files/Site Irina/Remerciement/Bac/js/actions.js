function Activate(orders){
    var ids=["Code","Nothing","CYOMessage","message_for_Irina","sleep","side_info_cd","cesar"],
    status={};
    for (var i=0;i<ids.length;i++){
        status[ids[i]]=document.getElementById(ids[i]).style.display;
    }
    // var block="block",
    var block="inline",
    nothing="none";
    console.log("orders.length="+orders.length+" content: orders= "+orders+" Typeof orders= "+typeof(orders)+" typeof(oders[0])= "+typeof(orders[0])+" orders[0]= "+orders[0]);
    if (orders.length>0){
        console.log("in if (orders.length>0)");
        for (var i=0;i<orders.length;i++){
            console.log("in for (var i=0;i<orders.length;i++)");
            if (orders[i]==="ALL"){
                console.log("in ALL");
                document.getElementById("message_for_Irina").style.display=block;
                console.log("initialized Irina");
                document.getElementById("CYOMessage").style.display=block;
                document.getElementById("sleep").style.display=block;
                document.getElementById("cesar").style.display=block;
            };
            if (orders[i]==="mi"){
                document.getElementById("message_for_Irina").style.display=block;
            };
            if (orders[i]==="cm"){
                document.getElementById("CYOMessage").style.display=block;
            };
            if (orders[i]==="w"){
                document.getElementById("sleep").style.display=block;
            };
            if (orders[i]==="ces"){
                document.getElementById("cesar").style.display=block;
            };
            if (orders[i]==="CYO"){
                document.getElementById("CYOMessage").style.display=block;
            };
            // if (orders[i]===""){
            //     document.getElementById("Nothing").style.display=block;
            // }
            // if (orders[i]===""){
            //     document.getElementById("").style.display=block;
            // } 
        }
    } else{
        document.getElementById("Nothing").style.display=block;
        // document.querySelector("div#message_for_Irina").style.display=nothing;
        // document.querySelector("div#CYOMessage").style.display=nothing;
        // document.querySelector("div#div#sleep").style.display=nothing;
        // document.querySelector("div#div#cesar").style.display=nothing;
        // document.getElementById("message_for_Irina").style.display=nothing;
        // document.getElementById("CYOMessage").style.display=nothing;
        // document.getElementById("sleep").style.display=nothing;
        // document.getElementById("cesar").style.display=nothing;
    };
}
