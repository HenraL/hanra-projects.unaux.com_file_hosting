var headList=[];

//<title></title>
headList.push("        <meta charset=\"UTF-8\"/>");
headList.push("        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
headList.push("        <meta name=\"Index\" content=\"This is a sub page of the server http://hanra-projects.unaux.com/.\" />");
headList.push("        <meta name=\"Language\" CONTENT=\"en,fr\" />");
//headList.push("        <link rel=\"canonical\" href=\"http://hanra-projects.unaux.com/Irina/sad_face\" />");
headList.push("        <meta name=\"robots\" content=\"index,follow,max-image-preview:standard\" />");
headList.push("        <meta name=\"copyright\" content=\"&copy; Henry Letellier 2021\"/>");
headList.push("        <meta name=\"publisher\" content=\"Henry Letellier\" />");
headList.push("        <meta name=\"googlebot\" content=\"index,follow,nosnippet\" />");
headList.push("        <meta name=\"google\" content=\"translate,sitelinkssearchbox\" />");
headList.push("        <meta name=\"google-site-verification\" content=\"LoWnBYKGqfx79IqYViE-Pqkd4dRmGa_lNqUDvjZxv0s\" />");
headList.push("        <meta http-equiv=\"pragma\" content=\"cache\" />");
headList.push("        <meta http-equiv=\"Cache-control\" content=\"public\" />");
headList.push("        <link rel=\"stylesheet\" href=\"http://hanra-projects.unaux.com/side_add_ons/bootstrap_style/bootstrap_dark.css\"/>");
headList.push("        <script type=\"text/javascript\" src=\"http://hanra-projects.unaux.com/side_add_ons/js/links/sorter.js\"></script>");
//<link rel="canonical" href="http://hanra-projects.unaux.com/Irina/sad_face" />
//<link rel="stylesheet" href="css/stylesheet.css"/>
//<script src="js/script.js"></script>

function head(){
 for (var i=0;i<headList.length;i++){
  document.write(headList[i]);
 }
};
head()