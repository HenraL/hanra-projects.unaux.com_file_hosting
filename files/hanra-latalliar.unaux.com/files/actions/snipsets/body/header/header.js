var background_color = "#000000",
    foreground_color = "#FFFFFF",
    theme_cont = readCookie("theme"),
    ID = "bootstrap_theme",
    home = "http://www.hanra-latalliar.unaux.com";

// function init_header(ID_to) { //1
//     var theme_cont=readCookie("theme"),
//         home = "http://www.hanra-latalliar.unaux.com";
//     if (theme_cont == "") {
//         theme_cont = "l"
//         applyTheme(theme_type=theme_cont, ID=ID_to, home=home)
//     }
// }
// if (theme_cont == "") {
//     theme_cont = "l"
//     applyTheme(theme_cont, ID, home)
// }

function updateTheme(ID_from, ID_to) {
    alert("clicked")
    e = document.getElementById(ID_from).checked
    alert(e)
}