function body(ID){
    var bodyList=[],
        author="Henry Letellier",
        home="http://www.hanra-latalliar.unaux.com";
    
    bodyList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/snipsets/body/header/header.js\"></script>");
    bodyList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/snipsets/body/main/main.js\"></script>");
    bodyList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/snipsets/body/footer/footer.js\"></script>");
    bodyList.push("        <script type=\"text/JavaScript\">initialise_tracking(\""+ID+","+home+"\");</script>");
    //<script src="js/script.js"></script>

    var bb="";
    for (var i=0;i<bodyList.length;i++){
        bb+=bodyList[i];
    }
  document.getElementById(ID).innerHTML=bb;
};
