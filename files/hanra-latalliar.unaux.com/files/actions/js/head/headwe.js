console.log("headwe initialising");

function initialiseHeader(IDTo, top = 2) {
    var headList = [],
        tip = 2,
        temp = "", //Leave empty
        author = "Henry Letellier",
        verification = "LoWnBYKGqfx79IqYViE-Pqkd4dRmGa_lNqUDvjZxv0s", //<meta name="google-site-verification" content="LoWnBYKGqfx79IqYViE-Pqkd4dRmGa_lNqUDvjZxv0s" />
        TheDate = new Date(),
        TheYear = TheDate.getFullYear(),
        favicon_ie = "files/img/icon/home_icon_16x16px.ico", //size 16x16 (for IE), format:.ico
        favicon_all = "files/img/icon/home_icon_32x32px.ico", //size 32x32 (for all), format:.png
        favicon_svg = "files/img/icon/home_icon_280x280.svg";
    if (tip == 1) { var home = "./"; } else { var home = "http://hanra-latalliar.unaux.com/"; };
    if (top == 1) { tip = "the main" } else { tip = "a sub" };
    if (top != 1) { headList.push("        <meta name=\"google-site-verification\" content=\"" + verification + "\" />"); }
    headList.push("        <meta charset=\"UTF-8\"/>");
    headList.push("        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
    headList.push("        <meta name=\"Index\" content=\"This is " + tip + " of the server " + home + ".\" />");
    headList.push("        <meta name=\"Language\" CONTENT=\"en,fr\" />");
    headList.push("        <meta name=\"robots\" content=\"index,follow,max-image-preview:standard\" />");
    headList.push("        <meta name=\"copyright\" content=\"&copy; " + author + " " + TheYear + "\"/>");
    headList.push("        <meta name=\"publisher\" content=\"" + author + "\" />");
    headList.push("        <meta name=\"googlebot\" content=\"index,follow,snippet\" />");
    headList.push("        <meta name=\"google\" content=\"translate,sitelinkssearchbox\" />");
    headList.push("        <meta http-equiv=\"pragma\" content=\"cache\" />");
    headList.push("        <meta http-equiv=\"Cache-control\" content=\"public\" />");
    headList.push("        <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"" + home + favicon_ie + "\" />"); //IE
    headList.push("        <link rel=\"icon\" type=\"image/svg+xml\" href=\"" + home + favicon_svg + "\"/>"); //Chrome extra requirements
    headList.push("        <link rel=\"icon\" type=\"image/png\" href=\"" + home + favicon_all + "\" />"); //all
    headList.push("        <link rel=\"alternate icon\" sizes=\"16x16\" href=\"" + home + favicon_ie + "\"/>");


    for (var i = 0; i < headList.length; i++) {
        temp += headList[i] + "\n";
    }
    document.getElementById(IDTo).innerHTML = temp;
}
console.log("headwe initialised");