function initialiseHeader(IDTo,top=2){
    var headList=[],
    tip=2,
    temp="",
    author = "Henry Letellier",
    verification = "",
    TheDate=new Date(),
    TheYear=TheDate.getFullYear(),
    favicon_ie = "files/requirements/img/ingame/wolf_icon_16x16.ico", //size 16x16 (for IE), format:.ico
    favicon_all = "files/requirements/img/ingame/wolf_icon.png"; //size 32x32 (for all), format:.png
    favicon_svg="files/requirements/img/ingame/wolf_icon.svg"
    if (tip==1){var home = "./";}else{var home = "https://hanralatalliardwork.github.io/wolf_escape_home/";};
    if (top == 1) { tip = "the main" } else { tip = "a sub" };
    if (top != 1) { headList.push("        <meta name=\"google-site-verification\" content=\"" + verification + "\" />"); }
    headList.push("        <meta charset=\"UTF-8\"/>");
    headList.push("        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
    headList.push("        <meta name=\"Index\" content=\"This is "+tip+" of the server "+home+".\" />");
    headList.push("        <meta name=\"Language\" CONTENT=\"en,fr\" />");
    headList.push("        <meta name=\"robots\" content=\"index,follow,max-image-preview:standard\" />");
    headList.push("        <meta name=\"copyright\" content=\"&copy; "+author+" "+TheYear+"\"/>");
    headList.push("        <meta name=\"publisher\" content=\""+author+"\" />");
    headList.push("        <meta name=\"googlebot\" content=\"index,follow,snippet\" />");
    headList.push("        <meta name=\"google\" content=\"translate,sitelinkssearchbox\" />");
    headList.push("        <meta name=\"google-site-verification\" content=\""+verification+"\" />");
    headList.push("        <meta http-equiv=\"pragma\" content=\"cache\" />");
    headList.push("        <meta http-equiv=\"Cache-control\" content=\"public\" />");
    headList.push("        <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"" +home+ favicon_ie + "\" />"); //IE
    headList.push("        <link rel=\"icon\" type=\"image/svg+xml\" href=\""+home+favicon_svg+"\"/>");//Chrome extra requirements
    headList.push("        <link rel=\"icon\" type=\"image/png\" href=\"" +home+ favicon_all + "\" />"); //all
    headList.push("        <link rel=\"alternate icon\" sizes=\"16x16\" href=\""+home+favicon_ie+"\"/>");
    
    
    for (var i=0;i<headList.length;i++){
        temp+=headList[i]+"\n";
    }
    document.getElementById(IDTo).innerHTML=temp;
}