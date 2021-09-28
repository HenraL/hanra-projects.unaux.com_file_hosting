function UserBody(ID) {
    var bodyList = [],
        author = "Henry Letellier",
        home = "http://www.hanra-latalliar.unaux.com",
        home = ".",
        bb = "";

    // bb+="        <script type='text/JavaScript' src='" + home + "/files/actions/snipsets/body/header/header.js'></script>\n";
    // bb+="        <script type='text/JavaScript' src='" + home + "/files/actions/snipsets/body/main/main.js'></script>\n";
    // bb+="        <script type='text/JavaScript' src='" + home + "/files/actions/snipsets/body/footer/footer.js'></script>\n";
    bb+="        <script type='text/JavaScript' id='main'></script>\n";
    bb+="        <script type='text/JavaScript' id='insertIntoFooter'></script>\n";
    bb+="        <script type='text/JavaScript'>\ninitialise_tracking('" + ID + "','" + home + "');\ninit_header('The_page_header');\nchildrenMain.insertInMain('main');\n</script>\n";

    console.log("bb=" + bb);
    document.getElementById(ID).innerHTML = bb;
};