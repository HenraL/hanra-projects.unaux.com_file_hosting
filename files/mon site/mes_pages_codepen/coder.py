f=open("pages/dirb_progs.txt","r")
c=f.read()
f.close()
file=""
files=[]
count=0
number=[]
for i in c:
    if i=="\n":
        files.append(str(file))
        file=""
    else:
        file+=str(i)
print("files=",files)
for i in range(len(files)):
    count=0
    f=""
    for e in files[i]:
        # print("count=",count,"e=",e,"f=",f)
        if count<2:
            f+=str(e)
            print(f)
        elif count==2:
            f+=str(e)
            number.append(str(f))
            print(number)
            f=""
        # else:print(e)
        count+=1
print("number=",number)
f=open("processed_html.txt","w")
f.close()
for i in range(len(files)):
    f=open("processed_html.txt","a")
    f.write("        <div class=\"container\">\n")
    f.write("            <a class=\"container_link\" href=\"pages/{}/index.html\">\n".format(files[i]))
    f.write("                <iframe title=\"page: {}\" class=\"Iframe\" src=\"pages/{}/index.html\"/></iframe>\n".format(files[i],files[i]))
    f.write("                <p class=\"name\">{}</p>\n".format(files[i]))
    f.write("            </a>\n")
    f.write("        </div>\n")
    # f.write("        <a class=\"container_link\" href=\"pages/{}/index.html\">\n".format(files[i]))
    # f.write("            <iframe title=\"page: {}\" class=\"Iframe\" src=\"pages/{}/index.html\"></iframe>\n".format(files[i],files[i]))
    # f.write("            <p class=\"name\">{}</p>\n".format(files[i]))
    # f.write("        </a>\n")
    f.close()