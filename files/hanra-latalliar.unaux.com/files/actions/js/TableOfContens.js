function TableOfContents(ID,page="") {
    var home = "https://hanralatalliardwork.github.io/wolf_escape_home/",
        content = [],
        e = document.getElementById(ID).innerHTML,
        ad="files/level_creators/available_decorations";
    content.push("  <nav>");
    content.push("      <ul>");
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "\">Home</a></li>");
    if (page==="home"){
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#About\">About wolf Escape</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#supported\">Supported systems</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Download\">Download wolf Escape</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Discord\">The wolf Escape Discord server</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Controls\">How to play Wolf Escape</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#licence\">Wolf Escape's licence</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Hosts\">Hosted by</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#ToCome\">To come</a></ol>");
    }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "\">Create Levels</a></li>");
    if (page===""){}
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "files/level_creators/available_decorations/\">All the sprites of the game</a></li>");
    if (page==="available_decorations"){
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'ends-content\',\'endsButtonToggle\')\"  href=\"#ends\">Ends</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'social-content\',\'socialButtonToggle\')\"  href=\"#social\">Social</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'start-content\',\'startButtonToggle\')\"  href=\"#start\">Start</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'walls-content\',\'wallsButtonToggle\')\"  href=\"#walls\">Walls</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'backgrounds-content\',\'backgroundsButtonToggle\')\"  href=\"#backgrounds\">Backgrounds</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'gameicon-content\',\'gameiconButtonToggle\')\"  href=\"#gameicon\">GameIcon</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'wolf-content\',\'wolfButtonToggle\')\"  href=\"#wolf\">Wolf</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'guard-content\',\'guardButtonToggle\')\"  href=\"#guard\">Guard</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'caps-content\',\'capsButtonToggle\')\"  href=\"#caps\">Caps</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'lowercases-content\',\'lowercasesButtonToggle\')\"  href=\"#lowercases\">Lowercases</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'accents-content\',\'accentsButtonToggle\')\"  href=\"#accents\">Accents</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'digits-content\',\'digitsButtonToggle\')\"  href=\"#digits\">Digits</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'temperature-content\',\'temperatureButtonToggle\')\"  href=\"#temperature\">Temperature</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'arrows-content\',\'arrowsButtonToggle\')\"  href=\"#arrows\">Arrows</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'currency-content\',\'currencyButtonToggle\')\"  href=\"#currency\">Currency</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'hearts-content\',\'heartsButtonToggle\')\"  href=\"#hearts\">Hearts</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'common symbols-content\',\'common symbolsButtonToggle\')\"  href=\"#common symbols\">Common symbols</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'maths-content\',\'mathsButtonToggle\')\"  href=\"#maths\">Maths</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" href=\"#micelanicious_(not_places)\">Micelanicious (not placed)</a><span onclick=\"showContent(\'micelanicious_(not_places)-content\',\'micelanicious_(not_places)ButtonToggle\')\"></span></ol>")
    }
    content.push("      </ul>");
    content.push("  <nav>");
    for (var i = 0; i < content.length; i++) {
        e += content[i] + "\n";
    }
    // console.log("e=" + e);
    document.getElementById(ID).innerHTML = e;
}