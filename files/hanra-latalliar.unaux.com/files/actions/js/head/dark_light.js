console.log("My_styling/js/dark_light initialising");
// Second file
function theme(ID = "darkOrLight", ID2 = "theme",home="https://hanralatalliardwork.github.io/wolf_escape_home/",themeD="files/customisation/css/boostrap_dark.css",themeL="files/customisation/css/bootstrap.css") {
    var WasChecked = document.getElementById(ID).checked;
    if (WasChecked === false) {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL+"\">";
        createCookie('theme',"L","","/");
    } else {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeD+"\">";
        createCookie('theme',"D","","/");
    }
    
}

function initialiseTheme(ID,IDRead,home="https://hanralatalliardwork.github.io/wolf_escape_home/",themeD="files/customisation/css/boostrap_dark.css",themeL="files/customisation/css/bootstrap.css") {
    var url=document.location.href;
    try {
        e=readCookie("theme");
        if (e==="L"){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL +"\">";
            document.getElementById(IDRead).checked=false;
            createCookie("theme","L","","/");
        } else {
            console.log("The theme is not light.")
        }
        if (e==="D"){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeD+ "\">";
            document.getElementById(IDRead).checked=true;
            createCookie("theme","D","","/");
        } else {
            console.log("The theme is not dark.")
        }
        if (e===""){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL+"\">";
            document.getElementById(IDRead).checked=false;
            createCookie("theme","L","","/");
        } else {
            console.log("There is a theme.")
        }
    } catch(err) {
        document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL+"\">";
        // document.cookie="theme=L";
        createCookie("theme","L","","/");
    }
    // if (url===home){
    //     try{
    //         console.log("running checkTheme");
    //         checkTheme("theme","DownloadLogo","DownloadButtonCredits","DiscordLogo");
    //         console.log("checkTheme has been run successfully");
    //     } catch(err) {
    //         console.log("failed to run checkTheme");
    //         console.log("Theme Check= "+err);
    //     }
    // } else {
    //     console.log("We are not in the home page.")
    // }
}
// First file
// function theme(ID = "darkOrLight", ID2 = "theme") {
//     var WasChecked = document.getElementById(ID).checked,
//         home = "https://hanralatalliardwork.github.io/wolf_escape_home/";
//     if (WasChecked === false) {
//         document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
//         createCookie('theme',"L","","/");
//     } else {
//         document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/boostrap_dark.css\">";
//         createCookie('theme',"D","","/");
//     }
// }

// function initialiseTheme(ID,IDRead) {
//     var home = "https://hanralatalliardwork.github.io/wolf_escape_home/";
//     // var home="./";
//     try {
//         e=readCookie("theme")
//         if (e==="L"){
//             document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
//             document.getElementById(IDRead).checked=false;
//             createCookie("theme","L","","/")
//         }
//         if (e==="D"){
//             document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/boostrap_dark.css\">";
//             document.getElementById(IDRead).checked=true;
//             createCookie("theme","D","","/")
//         }
//         if (e===""){
//             document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
//             document.getElementById(IDRead).checked=false;
//             createCookie("theme","L","","/")
//         }
//     } catch(err) {
//         document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
//         // document.cookie="theme=L";
//         createCookie("theme","L","","/");
//         alert("err="+err)
//     }
// }
console.log("My_styling/js/dark_light initialised");
