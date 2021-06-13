function UserBody(ID) {
    var bodyList = [],
        author = "Henry Letellier",
        home = "http://www.hanra-latalliar.unaux.com",
        home = ".",
        bb = "";

    bodyList.push("        <script type='text/JavaScript' src='" + home + "/files/actions/snipsets/body/header/header.js'></script>");
    bodyList.push("        <script type='text/JavaScript' src='" + home + "/files/actions/snipsets/body/main/main.js'></script>");
    bodyList.push("        <script type='text/JavaScript' src='" + home + "/files/actions/snipsets/body/footer/footer.js'></script>");
    bodyList.push("        <script type='text/JavaScript' id='main'></script>");
    bodyList.push("        <script type='text/JavaScript' id='insertIntoFooter'></script>");
    bodyList.push("        <script type='text/JavaScript'>\ninitialise_tracking('" + ID + "," + home + "');\ninit_header('The_page_header');\nchildrenMain.insertInMain('main');\n</script>");

    for (var i = 0; i < bodyList.length; i++) {
        bb += bodyList[i] + "\n";
    }
    console.log("bb=" + bb);
    document.getElementById(ID).innerHTML = bb;
};