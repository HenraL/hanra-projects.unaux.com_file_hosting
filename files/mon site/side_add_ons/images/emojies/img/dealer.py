import os
f=open("to_take.txt","r")
a="""{}""".format(f.read())
c=[]
for i in a:c.append(i)

def pause():pause=input("Appuyez sur entré pour continuer...")

i=0
A=0
link=""
definition=""
links=[]
descriptions=[]
maximum=len(c)
while i<maximum:
 if ((c[i]=="d" and c[i+1]=="a" and c[i+2]=="t" and c[i+3]=="a" and c[i+4]=="-" and c[i+5]=="e" and c[i+6]=="z" and c[i+7]=="s" and c[i+8]=="r" and c[i+9]=="c" and c[i+10]=="=" and c[i+11]=="\"") or ( c[i-2]=="e" and c[i-1]=="z" and c[i]=="s" and c[i+1]=="r" and c[i+2]=="c" and c[i+3]=="=" and c[i+4]=="\"")) and not(c[i]=="s" and c[i+1]=="r" and c[i+2]=="c" and c[i+3]=="=" and c[i+4]=="\"") :
  A=1
  i+=11
 elif (c[i]=="\"" and c[i+1]==">" and c[i+2]=="\n") or (c[i]=="\"" and c[i+1]==" " and c[i+2]=="e"):# and c[i+1]==" " and c[i+2]=="w":
  A=0
  print("link={}".format(link))
  if len(link)>0:
      links.append(link)
      link=""
  i+=2
 elif A==1:
  print("link={} c[{}]={}".format(link,i,c[i]))
  link+=c[i]
 elif c[i]=="<" and c[i+1]=="b" and c[i+2]==">":
  A=2
  i+=2
 elif c[i]=="<" and c[i+1]=="/" and c[i+2]=="b" and c[i+3]==">":
  A=0
  print("definition={}".format(definition))
  descriptions.append(definition)
  definition=""
  i+=3
 elif A==2:
  print("definition={} c[{}]={}".format(definition,i,c[i]))
  definition+=c[i]
 i+=1

f=open("links.csv","w")
for i in range(len(links)):
 f.write("{}\n".format(links[i]))

f.close()
f=open("names.txts","w")
for i in range(len(descriptions)):
 f.write("{}\n".format(descriptions[i]))

f.close()

print(descriptions)
pause()

print(links)
pause()
print("len(links)={}, len(descriptions)={}".format(len(links),len(descriptions)))
pause()
print("starting downloader.py")
os.system("start downloader.py")
pause()
