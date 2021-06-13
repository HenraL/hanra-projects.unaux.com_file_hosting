function show_Contents(ID, IDText) {
    var e = document.getElementById(ID).style.display;
    if (e == "normal") {
        document.getElementById(ID).style.display = "none";
        document.getElementById(IDText).innerHTML = "Show";
    } else {
        document.getElementById(ID).style.display = "normal";
        document.getElementById(IDText).innerHTML = "Hide";
    }

}

function WriteContents(ID) {
    var Content = [],
        e = "";
    Content.push("                <nav>")
    Content.push("                  <ul class=\"has-background has-small-font-size\">")
    Content.push("                      <li><a href=\"files/sub/about_me/\">About me</a>")
    Content.push("                            <ol>")
    Content.push("                                <li><a href=\"files/sub/about_me/who_i_am/\">Who I am</a></li>")
    Content.push("                                <li><a href=\"files/sub/about_me/what_i_do/\">What I do</a></li>")
    Content.push("                                <li><a href=\"files/sub/about_me/my_studies/\">My Studies</a></li>")
    Content.push("                                <li>Other</li>")
    Content.push("                            </ol>")
    Content.push("                        </li>")
    Content.push("                        <li>My Creations")
    Content.push("                            <ol>")
    Content.push("                                <li><a href=\"https://hanralatalliar.wordpress.com/my_programs/\">My Programs</a></li>")
    Content.push("                                <li><a href=\"https://hanralatalliar.wordpress.com/my_music/\">My Music</a></li>")
    Content.push("                                <li>My texts")
    Content.push("                                    <ol>")
    Content.push("                                        <li><a href=\"files/sub/my_texts/my_poems/\">My Poems</a></li>")
    Content.push("                                        <li><a href=\"files/sub/my_texts/my_prose/\">My Prose</a></li>")
    Content.push("                                    </ol>")
    Content.push("                                </li>")
    Content.push("                            </ol>")
    Content.push("                        </li>")
    Content.push("                        <li><a href=\"files/sub/follow_me/\">Follow-me</a></li>")
    Content.push("                        <li>Other")
    Content.push("                            <ol>")
    Content.push("                                <li><a href=\"https://hanralatalliar.wordpress.com/Blogs\">Blogs</a></li>")
    Content.push("                            </ol>")
    Content.push("                            <ol>")
    Content.push("                                <li><a href=\"https://hanralatalliar.wordpress.com/feedbacks\">Feedback</a></li>")
    Content.push("                            </ol>")
    Content.push("                        </li>")
    Content.push("                        <li><a href=\"files/sub/my_other_sites_and_servers/\">My Other sites and servers</a></li>")
    Content.push("                        <li><a href=\"https://hanralatalliar.wordpress.com/other_interesting_links\">Other Interesting links</a></li>")
    Content.push("                    </ul>")
    Content.push("                </nav>")
    for (var i = 0; i < Content.length; i++) {
        e += Content[i] + "\n"
    }
    document.getElementById(ID).innerHTML = e;
}