function childrenMain() {
    function boot() {
        WriteContents("WriteContentsHere");

    }

    function insertInMain(ID) {
        var mainContent = [],
            e = "",
            home = "http://www.hanra-latalliar.unaux.com",
            home = ".",
            sub = "/files/actions/snipsets/body/main/";
        mainContent.push("<script type=\"text/JavaScript\" src=\"" + home + sub + "Contents.js></script>");
        // mainContent.push("<script type=\"text/JavaScript\" src=\"" + home + sub+"Contents.js></script>");
        for (var i = 0; i < mainContent.length; i++) {
            e += mainContent + "\n";
        }
        document.getElementById(ID).innerHTML = e;
        childrenMain.boot()
    }
}