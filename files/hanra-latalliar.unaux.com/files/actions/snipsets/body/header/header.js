var background_color = "#000000",
    foreground_color = "#FFFFFF",
    theme_cont = cookie.read("theme"),
    ID = "bootstrap_theme",
    home = "http://www.hanra-latalliar.unaux.com";

function init_header(ID_to) {}
if (theme_cont == "") {
    theme_cont = "l"
    apply(theme_cont, ID, home)
}

function updateTheme(ID_from, ID_to) {
    alert("clicked")
    e = document.getElementById(ID_from).checked
    alert(e)
}