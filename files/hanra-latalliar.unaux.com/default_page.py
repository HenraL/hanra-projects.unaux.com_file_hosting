import os
domain="http://www.hanra-latalliar.unaux.com"
in_between="/files"
initialise_header="/actions/__initialise_heder.js"
Main=["<!DOCTYPE html>","<html lang=\"fr\">"]
header=["<head>"]
Title="\t\t<title>"
Title+=input("Entrez le titre:")
Title+="</title>"
header.append(Title)
add_initialise_head=input("Add Initialise head? [(y)es/(n)o]")
if add_initialise_head=="y":
    header.append(f"""\t\t<script type="text/JavaScript" src="{domain}{in_between}{initialise_header}"></script>
\t\t<meta id="head">
\t\t<script type="text/JavaScript">head("head");</script>""")
header.append("</head>")
body=[]
add_onload=input("Add an onload function to the body? [(y)es/(n)o]")
if add_onload=="y":
    onload="onload=\""
    onload+=input("Enter the function(s) to load (with parameters if required): ")
    onload+="\""
    body.append(f"\t<body {onload}>")
else:
    body.append("\t<body>")
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
add_code_for_body=input("Do you wish to add custom code to the body section? [(y)es/(n)o]")
if add_code_for_body=="y":
    body.append(str(input("Enter the code for the body section: ")))
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
To=input("Enter the name of the file to which the code will be written (all data in file will be erased), extension and path (optionnal) must be specified")
f=open(To,"w")
print("Writing content",end="")
for i in range(len(Main)):
    f.write(f"{Main[i]}\n")
    print(".",end="")
print("[DONE]")
f.close()
