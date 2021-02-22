function get_Url(){
    var c=document.URL;
    return c
}
function search_Q(url){
    var orders=[];
    for (var i=0;i<url.length;i++){
        if (url[i]==="?"){
            var v="";
            for (var b=i;b<url.length;b++){v+=url[b];};
            orders.push(v);
        }
    }
    return orders;
}
function SoRt(q){
    var c=q[0],
    word="",
    orders_i=[];
    c+=","
    for (var i=0;i<c.length;i++){
        // console.log('c[i]='+c[i]);
        if (c[i]===","){
            // console.log("in c[i]===\",\"");
            orders_i.push(word);
            word="";
        } else {
            // console.log("in else");
            word+=c[i];
        }
    }
    return orders_i;
}
function extract_letter(orders){
    var orders_i=[];
    for (var i=0;i<orders.length;i++){
        var d=orders[i];
        for (var s=0;s<d.length;s++){
            if (d[s]+d[s+1]==="?="){
                console.log("D="+d);
                d=d.slice(2,d.length);
                console.log("D="+d);
                var q="";
                for (var m=0;m<d.length;m++){
                    q+=d[m];
                };
                console.log("Q="+q);
                orders_i.push(q);
            };
        };
    };
    // var c=orders_i[0],
    // word="",
    // orders_i=[];
    // c+=","
    // for (var i=0;i<c.length;i++){
    //     console.log('c[i]='+c[i]);
    //     if (c[i]===","){
    //         console.log("in c[i]===\",\"");
    //         orders_i.push(word);
    //         word="";
    //     } else {
    //         console.log("in else");
    //         word+=c[i];
    //     }
    // }
    orders_i=SoRt(orders_i);
    return orders_i;
}
function initialise_tracking(){
    var c=search_Q(get_Url());
    console.log("c="+c);
    var o=extract_letter(c);
    console.log("o="+o);
    return o
}