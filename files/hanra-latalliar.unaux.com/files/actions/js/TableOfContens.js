console.log("TableOfContens initialising");

function TableOfContents(ID, page = "", sub_page = "", sub_sub_page = "") {
    var home = "http://hanra-latalliar.unaux.com/",
        sub_home_pages = home + "files/sub/",
        content = [],
        e = document.getElementById(ID).innerHTML,
        ad = "files/level_creators/available_decorations";
    content.push("  <nav>");
    content.push("      <ul>");
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "\">Home</a></li>");
    // if (page === "home") {
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#About\">About wolf Escape</a></ol>");
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#supported\">Supported systems</a></ol>");
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Download\">Download wolf Escape</a></ol>");
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Discord\">The wolf Escape Discord server</a></ol>");
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Controls\">How to play Wolf Escape</a></ol>");
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#licence\">Wolf Escape's licence</a></ol>");
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Hosts\">Hosted by</a></ol>");
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#ToCome\">To come</a></ol>");
    // }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + sub_home_pages + "about_me/\">About me</a></li>");
    if (page === "about_me") {
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "about_me/#my_stuides\">My Studies</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "about_me/#what_i_do\">What I Do</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "about_me/#who_i_am\">Who I Am</a></ol>");
    }
    // content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + sub_home_pages + "credits/\">All the sprites of the game</a></li>");
    // if (page === "credits") {
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'ends-content\',\'endsButtonToggle\')\"  href=\"#ends\">Ends</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'social-content\',\'socialButtonToggle\')\"  href=\"#social\">Social</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'start-content\',\'startButtonToggle\')\"  href=\"#start\">Start</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'walls-content\',\'wallsButtonToggle\')\"  href=\"#walls\">Walls</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'backgrounds-content\',\'backgroundsButtonToggle\')\"  href=\"#backgrounds\">Backgrounds</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'gameicon-content\',\'gameiconButtonToggle\')\"  href=\"#gameicon\">GameIcon</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'wolf-content\',\'wolfButtonToggle\')\"  href=\"#wolf\">Wolf</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'guard-content\',\'guardButtonToggle\')\"  href=\"#guard\">Guard</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'caps-content\',\'capsButtonToggle\')\"  href=\"#caps\">Caps</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'lowercases-content\',\'lowercasesButtonToggle\')\"  href=\"#lowercases\">Lowercases</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'accents-content\',\'accentsButtonToggle\')\"  href=\"#accents\">Accents</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'digits-content\',\'digitsButtonToggle\')\"  href=\"#digits\">Digits</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'temperature-content\',\'temperatureButtonToggle\')\"  href=\"#temperature\">Temperature</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'arrows-content\',\'arrowsButtonToggle\')\"  href=\"#arrows\">Arrows</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'currency-content\',\'currencyButtonToggle\')\"  href=\"#currency\">Currency</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'hearts-content\',\'heartsButtonToggle\')\"  href=\"#hearts\">Hearts</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'common symbols-content\',\'common symbolsButtonToggle\')\"  href=\"#common symbols\">Common symbols</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'maths-content\',\'mathsButtonToggle\')\"  href=\"#maths\">Maths</a></ol>")
    //     content.push("          <ol class=\"ContentsListol\"><a class=\"link\" href=\"#micelanicious_(not_places)\">Micelanicious (not placed)</a><span onclick=\"showContent(\'micelanicious_(not_places)-content\',\'micelanicious_(not_places)ButtonToggle\')\"></span></ol>")
    // }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/\">follow_me</a></li>");
    if (page === "follow_me") {
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#facebook\">Facebook</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#instagram\">Instagram</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#youtube\">Youtube</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#codepen\">Codepen</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#itch_io\">Itch.io</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#gumroad\">Gumroad</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#linkedin\">Linkedin</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#github\">Github</a></ol>")
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "follow_me/#\">...</a></ol>");
    }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/\">My Music</a></li>");
    if (page === "my_music") {
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/#popular\">Popular</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/#1_10\">1 to 10</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/#11_20\">11 to 20</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/#21_30\">21 to 30</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/#31_40\">31 to 40</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/#41_50\">41 to 50</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/#51_60\">51 to 60</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_music/#61_70\">61 to 70</a></ol>");
    }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/\">My Other Sites And Servers</a></li>");
    if (page === "my_other_sites_and_servers") {
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/#\"></a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/#\"></a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/#\"></a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/#\"></a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/#\"></a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/#\"></a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/#\"></a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_other_sites_and_servers/#\"></a></ol>");
    }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/\">My Programs</a></li>");
    if (page === "my_programs") {
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/games\">Games</a></ol>");
        if (sub_page === "Games") {
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/games/wolf_escape\"></a></ol>");
            if (sub_sub_page === "wolf_escape") {
                content.push("          <ol class=\"SubSubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "https://hanralatalliardwork.github.io/wolf_escape_home/\">Official website</a></ol>");
                content.push("          <ol class=\"SubSubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "https://hanralatalliardwork.github.io/wolf_escape_home/#About\">About</a> (redirection to the wolf escape website)</ol>");
                content.push("          <ol class=\"SubSubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "https://hanralatalliar.wordpress.com/feedback-wolf-escape/\">Feedback</a></ol>");
                content.push("          <ol class=\"SubSubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "https://hanralatalliardwork.github.io/wolf_escape_home/#ToCome\">To Come</a>< (redirection to the wolf escape website)/ol>");
            }
            // content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            // content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            // content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            // content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            // content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            // content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            // content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
        }
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning\">Learning</a></ol>");
        if (sub_page === "learning") {
            content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/german_verbs\">German Verbs</a></ol>");
            if (sub_sub_page === "german_verbs") {
                content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/german_verbs/#about\">About</a></ol>");
                content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/german_verbs/#updates\">Updates</a></ol>");
                content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "https://hanralatalliar.wordpress.com/feedback-irregular-verbs/\">Feedback</a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/german_verbs/#\"></a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/german_verbs/#\"></a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/german_verbs/#\"></a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/german_verbs/#\"></a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/german_verbs/#\"></a></ol>");
            }
            content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat\"></a></ol>");
            if (sub_sub_page === "auto_stat") {
                content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat/#about\">About</a></ol>");
                content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat/#updates\">Updates</a></ol>");
                content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat/#feedback\">Feedback</a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat/#\"></a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat/#\"></a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat/#\"></a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat/#\"></a></ol>");
                // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/auto_stat/#\"></a></ol>");
            }
            // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/#\"></a></ol>");
            // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/#\"></a></ol>");
            // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/#\"></a></ol>");
            // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/#\"></a></ol>");
            // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/#\"></a></ol>");
            // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/learning/#\"></a></ol>");
        }
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/#\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/#\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/#\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/#\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/#\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_programs/#\"></a></ol>");
    }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts\">My texts</a></li>");
    if (page === "my_texts") {
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems\"></a></ol>");
        if (sub_page === "my_poems") {
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems/\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems/\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems/\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems/\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems/\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems/\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems/\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_poems/\"></a></ol>");
        }
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/my_prose\"></a></ol>");
        if (sub_page === "my_prose") {
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
            content.push("          <ol class=\"SubContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "/#\"></a></ol>");
        }
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/\"></a></ol>");
        // content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + sub_home_pages + "my_texts/\"></a></ol>");
    }

    content.push("      </ul>");
    content.push("  <nav>");
    for (var i = 0; i < content.length; i++) {
        e += content[i] + "\n";
    }
    // console.log("e=" + e);
    document.getElementById(ID).innerHTML = e;
}
console.log("TableOfContens initialised");