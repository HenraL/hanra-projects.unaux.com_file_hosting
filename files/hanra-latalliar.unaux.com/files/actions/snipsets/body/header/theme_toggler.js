//get the ?=t=l or d
//l = light
//d = dark
//depending on the theme, link appropriate bootstrap
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
function theme(){
    function get_cookie_theme(theme){
        try{
            return cookie.read("theme");     
        } catch(err) {
            try{
                for (var i=0;i<theme.length;i++){
                    if (theme[i]==="t"){
                        a=theme[i+2];
                        cookie.create(key="theme",value=a)
                    }
                }
            } catch(err) {
                cookie.create(key="theme",value="l")
                return "l"
            }
        }
    }
    function add_dark_or_light(theme,ID,home){
        if (theme==="l"){
            document.getElementById(ID).innerHTML=content+"\n        <link rel=\"stylesheet\" href=\""+home+"/files/styling/bootstrap/bootstrap.css\"/>"
        } else if (theme==="d") {
            document.getElementById(ID).innerHTML=content+"\n        <link rel=\"stylesheet\" href=\""+home+"/files/styling/bootstrap/bootstrap_dark.css\"/>"
        }
        return theme
    }
    function get(url){
        var c=search_Q(get_Url());
        console.log("c="+c);
        theme_type=theme.add_dark_or_light(theme.get_cookie_theme(c),ID,home)
    }
    function apply(theme_type,ID,home){
        // true=l, false=dark
        if (theme_type==true){
            theme_type=theme.add_dark_or_light("l",ID,home);
        } else {
            theme_type=theme.add_dark_or_light("d",ID,home);
        }
        cookie.create(key="theme",value=theme_type);
    }
}


function initialise_tracking(ID,home){
    var c=search_Q(get_Url());
    console.log("c="+c);
    // theme=add_dark_or_light(get_theme(c),ID,home)
    //var o=extract_letter(c);
    // console.log("o="+o);
    // return o
}