import requests,os
csv=os.listdir()
found=""
print("csv=",csv)
def pause():pause=input("Press enter to continue...")
def check_for_csv(csv):
    for i in range(len(csv)):
        temp=""
        print("i=",i)
        word_temp=csv[i]
        word_temp+=" "
        for b in word_temp:
            if b=="c":
                temp+="{}".format(b)
            elif b=="s" and temp==".c":
                temp+="{}".format(b)
            elif b=="v" and temp==".cs":
                temp+="{}".format(b)
            elif temp==".csv":
                found="{}".format(csv[i])
            else:
                temp=""
                temp+="{}".format(b)
    return found
def check_for_names(csv):
    for i in range(len(csv)):
        temp=""
        print("i=",i)
        word_temp=csv[i]
        word_temp+=" "
        for b in word_temp:
            if b=="t":
                temp+="{}".format(b)
            elif b=="x" and temp==".t":
                temp+="{}".format(b)
            elif b=="t" and temp==".tx":
                temp+="{}".format(b)
            elif b=="s" and temp==".txt":
                temp+="{}".format(b)
            elif temp==".txts":
                found="{}".format(csv[i])
            else:
                temp=""
                temp+="{}".format(b)
    return found
def read_csv(found):
    f=open(found,"r")
    c=f.read()
    f.close()
    links=[]
    link=""
    #print(c)
    for i in c:
        if i=='\n':
            links.append(link)
            link=""
        else:
            link+=str(i)
    #print(links)
    return links
def downloader(links,folder,extension,names):
        url = '{}'.format(links)
        dest="{}".format(folder)
        name="{}.{}".format(names,extension)
        filefetch(url,dest,name)
def filefetch(url,dest,name):
    myfile = requests.get(url)
    open("{}/{}".format(dest,name), 'wb').write(myfile.content)
found=check_for_csv(csv)
#print("found=",found)
content=read_csv(found)
names=check_for_names(csv)
names=read_csv(names)
extension="GIF"#"mp3"
folder_s="./img/"
#print("names=",names)
Cont=1
while Cont==1:
    ask=input("show file progress? [(y)es/(n)o]:")
    if ask.lower()=="y":
        ask=True
        Cont=0
    elif ask.lower()=="n":
        ask=False
        Cont=0
    else:
        print("please only enter y for yes or n for no.")
for i in range(len(names)):
    downloader(content[i],folder_s,extension,names[i])
    if ask==True:
        print("names[{}]={}".format(i,names[i]))
        print("content[{}]={}".format(i,content[i]))

print("Finished")
print("The files have been processed and placed in their respective folders")
print("Created by Henry Letellier")
pause()
pause()
pause()
pause()
