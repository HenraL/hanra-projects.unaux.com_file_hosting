function head(ID, top = 2) {
    var headList = [],
        author = "Henry Letellier",
        home = "http://www.hanra-latalliar.unaux.com",
        home = ".",
        verification = "LoWnBYKGqfx79IqYViE-Pqkd4dRmGa_lNqUDvjZxv0s",
        favicon_ie = "files/img/icon/galaxy_cropped_big_16x16px.ico", //size 16x16 (for IE), format:.ico
        favicon_all = "files/img/icon/galaxy_cropped_big_32x32px.png"; //size 32x32 (for all), format:.png
    if (top == 1) { tip = "the main" } else { top = "a sub" }
    headList.push("        <meta charset=\"UTF-8\"/>");
    headList.push("        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
    headList.push("        <meta name=\"Index\" content=\"This is " + tip + " page of the server " + home + ".\" />");
    headList.push("        <meta name=\"Language\" CONTENT=\"en,fr\" />");
    headList.push("        <meta name=\"robots\" content=\"index,follow,max-image-preview:standard\" />");
    headList.push("        <meta name=\"copyright\" content=\"&copy; " + author + " 2021\"/>");
    headList.push("        <meta name=\"publisher\" content=\"" + author + "\" />");
    headList.push("        <meta name=\"googlebot\" content=\"index,follow,snippet\" />");
    headList.push("        <meta name=\"google\" content=\"translate,sitelinkssearchbox\" />");
    if (top != 1) { headList.push("        <meta name=\"google-site-verification\" content=\"" + verification + "\" />"); }
    headList.push("        <meta http-equiv=\"pragma\" content=\"cache\" />");
    headList.push("        <meta http-equiv=\"Cache-control\" content=\"public\" />");
    // headList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/redirect.js\"></script>");
    headList.push("        <script type=\"text/JavaScript\" src=\"" + home + "files/actions/snipsets/head/cookie_dealing.js\"></script>");
    // headList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/header.js\"></script>");
    // headList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/footer.js\"></script>");
    // headList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/snipsets/theme_toggler.js\"></script>");
    // headList.push("        <script type=\"text/JavaScript\">initialise_tracking(\""+ID+","+home+"\");</script>");
    headList.push("        <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"" + favicon_ie + "\" />"); //IE
    headList.push("        <link rel=\"icon\" type=\"image/png\" href=\"" + favicon_all + "\" />"); //all
    headList.push("        <link rel=\"stylesheet\" href=\"" + home + "/files/styling/css/toggle.css\"/>");
    headList.push("        <link rel=\"stylesheet\" href=\"" + home + "/files/styling/css/Contents.css\"/>");
    //<script src="js/script.js"></script>

    var bb = "";
    for (var i = 0; i < headList.length; i++) {
        bb += headList[i];
    }
    document.getElementById(ID).innerHTML = bb;
};