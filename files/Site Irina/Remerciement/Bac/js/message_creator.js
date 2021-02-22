//16px font-size
function init_creator_vals(){
    var FSize=16,
    betweenLetters=100,
    betweenWords=200;
    document.getElementById("inWord").value=betweenLetters;
    document.getElementById("inSentence").value=betweenWords;
    document.getElementById("fontSizeM").value=FSize;
    document.getElementById("fontSizeT").value=FSize;
    document.getElementById("fontSizeB").value=FSize;
    document.getElementById("GivenMessage").value="ee mp<br>bb nn<br>mm pp<br>ddd de<br>kdodaze<br>lezapeaz)e<br>aozeae";
    document.getElementById("TitleText").value="rr rr";
    document.getElementById("ButtonText").value="mm mm";
}

function ShowHideA(){
    state=document.getElementById("SHADVS").checked;
    if (state===true){document.getElementById("advanced_settings").style.display="block";} else {document.getElementById("advanced_settings").style.display="none";};
};
function Preview(ID1,ID2,ID3,ID4,ID5){
    Bold=document.getElementById(ID1).checked;
    Italic=document.getElementById(ID2).checked;
    Underline=document.getElementById(ID3).checked;
    FontSize=document.getElementById(ID4).value;
    console.log("Bold="+Bold+" Italic="+Italic+" Underline="+Underline+" Size="+FontSize);
    if (Bold===true){document.getElementById(ID5).style.fontWeight="Bold";} else {document.getElementById(ID5).style.fontWeight="normal";};
    if (Italic===true) {document.getElementById(ID5).style.fontStyle="Italic";} else {document.getElementById(ID5).style.fontStyle="normal";};
    if (Underline===true) {document.getElementById(ID5).style.textDecoration="underline";} else {document.getElementById(ID5).style.textDecoration="none";};
    // document.getElementById(ID5).style.textDecoration="underline";
    document.getElementById(ID5).style.fontSize=FontSize+"px";
};

function GenCode(ID1,ID2,ID3,ID4,ID5,ID6,ID7,ID8,ID9,ID10,ID11,ID12,ID13,ID14,ID15,ID16,ID17,ID18,ID19,ID20,ID21,ID22,ID23,ID24,IDToWrite){
    console.log("Innitializing vars");
    var Message=document.getElementById(ID1).value,
    DelayLetter=document.getElementById(ID2).value,
    DelayWord=document.getElementById(ID3).value,
    TitleText=document.getElementById(ID4).value,
    ButtonText=document.getElementById(ID5).value,
    BGColor=document.getElementById(ID6).value,
    BGButtonColor=document.getElementById(ID7).value,
    ButtonTextColor=document.getElementById(ID8).value,
    BGMessageColor=document.getElementById(ID9).value,
    MessageTextColor=document.getElementById(ID10).value,
    BGTitleColor=document.getElementById(ID11).value,
    TitleTextColor=document.getElementById(ID12).value,
    MessageBold=document.getElementById(ID13).checked,
    MessageItalic=document.getElementById(ID14).checked,
    MessageDecoration=document.getElementById(ID15).checked,
    MessageFontSize=document.getElementById(ID16).value,
    TitleBold=document.getElementById(ID17).checked,
    TitleItalic=document.getElementById(ID18).checked,
    TitleDecoration=document.getElementById(ID19).checked,
    TitleFontSize=document.getElementById(ID20).value,
    ButtonBold=document.getElementById(ID21).checked,
    ButtonItalic=document.getElementById(ID22).checked,
    ButtonDecoration=document.getElementById(ID23).checked,
    ButtonFontSize=document.getElementById(ID24).value;
    console.log("Vars Innitalized")
    console.log(`Message=${Message} DelayLetter=${DelayLetter} DelayWord=${DelayWord} TitleText=${TitleText} ButtonText=${ButtonText} BGColor=${BGColor} BGButtonColor=${BGButtonColor} ButtonTextColor=${ButtonTextColor} BGMessageColor=${BGMessageColor} MessageTextColor=${MessageTextColor}  BGTitleColor=${BGTitleColor} TitleTextColor=${TitleTextColor} MessageBold=${MessageBold} MessageItalic=${MessageItalic}  MessageDecoration=${MessageDecoration} MessageFontSize=${MessageFontSize} TitleBold=${TitleBold} TitleItalic=${TitleItalic}  TitleDecoration=${TitleDecoration} TitleFontSize=${TitleFontSize} ButtonBold=${ButtonBold} ButtonItalic=${ButtonItalic} ButtonDecoration=${ButtonDecoration} ButtonFontSize=${ButtonFontSize}`);
    var word=[],
    tYW=[];
    Message+=" ";
    for (var i=0;i<Message.length;i++){
        if (Message[i]===" "){
            word.push(" ");
            tYW.push(word);
            console.log(`word=${word},tYW=${tYW}`);
            word=[];
        }else if ((Message[i]+Message[i+1]+Message[i+2]+Message[i+3])==="<br>"){
            word.push("<br>");
            i+=4;
        } else {
            word.push(Message[i]);
            console.log(`word=${word},Message[i]=${Message[i]}`);
        };
    };
    Apply_styles(MessageBold,MessageItalic,MessageDecoration,TitleBold,TitleItalic,TitleDecoration,ButtonBold,ButtonItalic,ButtonDecoration);
    playMessage(DelayLetter,DelayWord,tYW,IDToWrite)
    
    function sleep(time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }
    async function playMessage(time1,time2,tYW,IDToWrite){
        var c="";
        for (var i=0;i<tYW.length;i++){
            for (var b=0;b<tYW[i].length;b++){
                if (tYW[i][b]==="\n"){
                    c+='<br>';
                } else {
                    c+=tYW[i][b];
                };
                document.getElementById(IDToWrite).innerHTML=c;
                await sleep(time1);
            }
            await sleep(time2);
        }
    }
    // `<script></script>
    // <div id="${StyleMainBix}">
    //     <p id="${Title}">: <button id="${LaunchTextStyle}" onclick="playMessage(${DelayLetter},${DelayWord})">${ButtonText}</button></p>
    //     <br>
    //     <div id="${messageBox}">
    //         <span id="${IDToWrite}">...</span>
    //     </div>
    //     <br>
    //     <br>
    // </div>
    // <script>playMessage(${DelayLetter},${DelayWord},${Message},${IDToWrite})</script>`
    function Apply_styles(MessageBold,MessageItalic,MessageDecoration,TitleBold,TitleItalic,TitleDecoration,ButtonBold,ButtonItalic,ButtonDecoration){
        if (MessageBold===true){MessageBold="Bold";} else {MessageBold="normal";};
        if (MessageItalic===true) {MessageItalic="Italic";} else {MessageItalic="normal";};
        if (MessageDecoration===true) {MessageDecoration="underline";} else {MessageDecoration="none";};
        
        if (TitleBold===true){TitleBold="Bold";} else {TitleBold="normal";};
        if (TitleItalic===true) {TitleItalic="Italic";} else {TitleItalic="normal";};
        if (TitleDecoration===true) {TitleDecoration="underline";} else {TitleDecoration="none";};
        
        if (ButtonBold===true){ButtonBold="Bold";} else {ButtonBold="normal";};
        if (ButtonItalic===true) {ButtonItalic="Italic";} else {ButtonItalic="normal";};
        if (ButtonDecoration===true) {ButtonDecoration="underline";} else {ButtonDecoration="none";};
    }
}
// function GenPreview(){
//     .
// }