import os
domain="http://www.hanra-latalliar.unaux.com"
in_between="/files"
initialise_header="/actions/initialiseHeader.js"
Main=["<!DOCTYPE html>","<html lang=\"fr\">"]
header=["\t<head>"]
add_annalystic_js=input("Do you wish to add annalistic.js ? [(y)es/(n)o]: ")
if add_annalystic_js=="y":
    annalystic_code_full="""\t\t<script>\n\t\t\t(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
\n\t\t\tga('create', 'UA-XXXXX-Y', 'auto');ga('send', 'pageview');\n\t\t</script>"""
    header.append(annalystic_code_full)
Title="\t\t<title>"
Title+=input("Entrez le titre de la page:")
Title+="</title>"
header.append(Title)
add_initialise_head=input("Add Initialise head? [(y)es/(n)o]")
if add_initialise_head=="y":
    header.append(f"""\t\t<meta id="headPrepping">
\t\t<meta id="bootstrap_theme">
\t\t<script type="text/JavaScript" src="{domain}{in_between}{initialise_header}"></script>
\t\t<script type="text/JavaScript">head("headPrepping");</script>""")
add_more_code_to_header=input("Do you wish to add more code to the header? [(y)es/(n)o]: ")
if add_more_code_to_header=="y":
    header.append(input("Enter the code to put into the header:"))
header.append("\t</head>")
body=[]
add_onload=input("Add an onload function to the body? [(y)es/(n)o]")
if add_onload=="y":
    onload="onload=\""
    onload+=input("Enter the function(s) to load (with parameters if required): ")
    onload+="\""
    body.append(f"\t<body {onload}>")
else:
    body.append("\t<body>")
body.append("\t\t<header>")
add_body_head=input("Do you wish to add the saved header into the body section? [(y)es/(n)o]")
if add_body_head=="y":
    a=os.listdir()
    for i in range(len(a)):
        print(f"{i} {a[i]}")
    file_to_load=int(input("Enter the index of the file to load: "))
    f=open(a[file_to_load],"r")
    d=f.read()
    f.close()
    body.append(d)
body.append("\t\t</header>")
body.append("\t\t<main>")
add_code_for_body=input("Do you wish to add custom code to the body section? [(y)es/(n)o]")
if add_code_for_body=="y":
    body.append(str(input("Enter the code for the body section: ")))
body.append("\t\t</main>")
body.append("\t\t<footer>")
add_body_footer=input("Do you wish to add the saved footer into the body section? [(y)es/(n)o]")
if add_body_footer=="y":
    a=os.listdir()
    for i in range(len(a)):
        print(f"{i} {a[i]}")
    file_to_load=int(input("Enter the index of the file to load: "))
    f=open(a[file_to_load],"r")
    d=f.read()
    f.close()
    body.append(d)
body.append("\t\t</footer>")
print("Finalizing",end="")
body.append("\t</body>")
print(".",end="")
for i in range(len(header)):
    Main.append(header[i])
    print(".",end="")
for i in range(len(body)):
    Main.append(body[i])
    print(".",end="")
Main.append("</html>")
print("[DONE]")
To=input("Enter the name of the file to which the code will be written (all data in file will be erased), extension and path (optionnal) must be specified: ")
f=open(To,"w")
print("Writing content",end="")
for i in range(len(Main)):
    f.write(f"{Main[i]}\n")
    print(".",end="")
print("[DONE]")
f.close()
pause=input("Press enter to continue...")
