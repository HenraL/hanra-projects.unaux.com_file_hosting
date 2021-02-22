/*Lists*/
thankYou=["M","e","r","c","i"," ","d","'","a","v","o","i","r"," ","m","i","s"," ","e","n"," ","p","a","u","s","e ","n","o","t","r","e"," ","r","e","l","a","t","i","o","n","."," ","C","e","l","a"," ","m","e"," ","p","e","r","m","e","t","t","r","a"," ","d","'","a","v","o","i","r"," ","p","l","u","s"," ","d","e"," ","t","e","m","p","s"," ","p","o","u","r"," ","t","r","a","v","a","i","l","l","e","r"," ","s","u","r"," ","m","o","n"," ","b","a","c","."," ","🙂","\n","P","S",":"," ","J","e"," ","s","u","i","s"," ","m","o","i","n","s"," ","t","r","i","s","t","e"," ","e","n"," ","c","e"," ","m","o","m","e","n","t",".",];
tYW1=["M","e","r","c","i"," "];
tYW2=["d","'","a","v","o","i","r"," "];
tYW3=["m","i","s"," "];
tYW4=["e","n"," "];
tYW5=["p","a","u","s","e"," "];
tYW6=["n","o","t","r","e"," "];
tYW7=["r","e","l","a","t","i","o","n","."," "];
tYW8=["C","e","l","a"," "];
tYW9=["m","e"," "];
tYW10=["p","e","r","m","e","t","t","r","a"," "];
tYW11=["d","'","a","v","o","i","r"," "];
tYW12=["p","l","u","s"," "];
tYW13=["d","e"," "];
tYW14=["t","e","m","p","s"," "];
tYW15=["p","o","u","r"," "];
tYW16=["t","r","a","v","a","i","l","l","e","r"," "];
tYW17=["s","u","r"," "];
tYW18=["m","o","n"," "];
tYW19=["b","a","c","."," "];
tYW20=["🙂","\n","\n","P","S",":"," "];
tYW21=["J","e"," "];
tYW22=["s","u","i","s"," "];
tYW23=["m","o","i","n","s"," "];
tYW24=["t","r","i","s","t","e"," "];
tYW25=["e","n"," "];
tYW26=["c","e"," "];
tYW27=["m","o","m","e","n","t",".",];
tYW28=["\n","\n","H","e","n","r","y"," "];
tYW29=["L","e","t","e","l","l","i","e","r","."];
tYW=[tYW1,tYW2,tYW3,tYW4,tYW5,tYW6,tYW7,tYW8,tYW9,tYW10,tYW11,tYW12,tYW13,tYW14,tYW15,tYW16,tYW17,tYW18,tYW19,tYW20,tYW21,tYW22,tYW23,tYW24,tYW25,tYW26,tYW27,tYW28,tYW29];
async function playMessageI(time1,time2){
    var c="";
    for (var i=0;i<tYW.length;i++){
        for (var b=0;b<tYW[i].length;b++){
            if (tYW[i][b]==="\n"){
                c+='<br>';
            } else {
                c+=tYW[i][b];
            };
            document.getElementById("MCI").innerHTML=c;
            await sleep(time1);
        }
        await sleep(time2);
    }
}
/*Alphabet*/
function init_crypto(){
    document.getElementById("start").value=4;
    document.getElementById("message").value="abc";
}
// init_crypto()
var Alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
begin="",
follow=0,
c="";
function show_letter(ID1,ID2){
    document.getElementById(ID2).innerHTML="Lettre choisie: '"+Alphabet[document.getElementById(ID1).value]+"' ";
}
function cut_message(toCode){
    return toCode.split('');
}
function create_def(Alphabet,letters,alphabet){
    for (var i=0;i<=Alphabet.length;i++){
        // console.log("i="+i);
        if (letters===Alphabet.length){
            letters=0;
            alphabet[Alphabet[i]]=Alphabet[letters];
        }
        else {// (letters<=Alphabet.length){
            alphabet[Alphabet[i]]=Alphabet[letters];
        }
        console.log("alphabet[Alphabet[i]]="+alphabet[Alphabet[i]]);
        letters++;
    }
    return alphabet;
}
// function to_push(main,TO_def,TO_term){
//     for (var i=0;i<TO_def.length;i++){
//         main[TO_def[i]]=TO_term[i];
//     }
//     return main
// }
function generate(code,ID1,ID2,ID3){
    var d="",
    To_push_def=[" ","@","é","è","ê"],
    To_push_term=[" ","@","é","è","ê"],
    side=[],
    alphabet={};
    // console.log("alphabet");
    document.getElementById("list_alphabet").innerHTML=alphabet;
    if (code==='code'){letters=startIndex=document.getElementById(ID1).value;} else {letters=startIndex=26-(document.getElementById(ID1).value);}
    document.getElementById("var_startIndex").innerHTML=startIndex;
    // console.log("startIndex");
    toCode=document.getElementById(ID2).value;
    // console.log("tocode="+toCode);
    document.getElementById("var_toCode").innerHTML=toCode;
    // console.log("toCode");
    // console.log("in: var i=0;i<=Alphabet.length;i++");
    alphabet=create_def(Alphabet,letters,alphabet);
    // to_push(alphabet,To_push_def,To_push_term);
    for (var i=0;i<To_push_def.length;i++){
        alphabet[To_push_def[i]]=To_push_term[i];
    }
    toCode=cut_message(toCode);
    // console.log("toCode=cut_message(toCode);="+toCode);
    // console.log("var i=0;i<toCode.length;i++");
    for (var i=0;i<toCode.length;i++){
        // console.log(i);
        // console.log("toCode["+i+"]="+toCode[i]);
        toCode[i]=alphabet[toCode[i]];
        // console.log("toCode["+i+"]="+toCode[i]);
        d+=toCode[i];
        // console.log("d="+d);
    }
    document.getElementById(ID3).innerHTML=d;
    for (var i=0;i<Alphabet.length;i++){
        side.push(Alphabet[i]);
    };
    for (var i=0;i<To_push_def.length;i++){
        side.push(To_push_def[i]);
    };
    for (var i=0;i<side.length;i++){
        console.log("Alphabet[i]=alphabet[Alphabet[i]] : '"+side[i]+"' = '"+alphabet[side[i]]+"'");
    }
};
// init_crypto()
/*time*/
time={}
time["1ms"]=1
time["1s"]=1000
time["1min"]=60*time["1s"]
time["1h"]=60*time["1min"]
time["1j"]=24*time["1h"]
time["1sem"]=7*time["1j"]
time["1mois"]=4*time["1sem"]
time["1an"]=365*time["1j"]