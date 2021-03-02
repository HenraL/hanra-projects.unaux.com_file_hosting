var Links=[],
ll="";
Links.push("<div class=\"men_links\">")
Links.push("    <p>My first page (Guide to html): <a href=\"http://hanra-projects.unaux.com/files/tuto_html\">html tutorial</a> (Th&egrave;me claire uniquement)</p>")
Links.push("    <p>How to install Open Dyslexia (Guide offering you open dyselxia fonts and how to install theme): <a href=\"http://hanra-projects.unaux.com/files/open_dyslexia/index.html\">How to install Open Dyslexia</a></p>")
Links.push("    <p>Le tuto pour installer python (ici dans le cadre d'une application): <a href=\"http://hanra-projects.unaux.com/files/2x800\">html tutorial</a></p>")
Links.push("</div>")

function links(ID){
	for (var i=0;i<Links.length;i++){
		ll+=Links[i];
	};
	document.getElementById(ID).innerHTML=ll;
};

// <script type="text/JavaScript" src="http://hanra-projects.unaux.com/side_add_ons/object/links/links.js" id="LiNks">links("#LiNks")</script>