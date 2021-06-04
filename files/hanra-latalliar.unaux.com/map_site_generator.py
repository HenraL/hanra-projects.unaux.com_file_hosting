import os
class map_drive:
    def __init__(self):
        self.files={}
        self.using_path=""
        self.home="http://www.hanra-latalliar.unaux.com/"
        self.previous_path=[]
    def change(to):
        os.chdir(to)
    def tell(fold=""):
        if fold=="":
            return os.listdir()
        else:
            return os.listdir(fold)
    def add_file(using_path,filename):
        files[filename]=home+using_path
    def append_new_fold(self,fold):
        previous_path.append(fold)
    def remove_last_fold(self,fold):
        if fold in self.previous_path:
            for i in range(len(self.previous_path)):
                if i==self.previous_path[i]:
                    self.previous_path.pop(i)
                    return 1
            else:
                return 0
    def check(path):
        map_drive.tell(path)
        return map_drive
RI=map_drive()
f=map_drive.tell()
for i in range(len(f)):
    if os.path.isdir(f[i])==True:
        map_drive.check(f[i])

class list_files:
    #altered by Henry Letellier
    def __init__(self,unwanted_extensions):
        self.start=os.listdir(path='.')
        self.start=os.getcwd()
        self.start="."
        self.home="http://www.hanra-latalliar.unaux.com"
        self.unwanted_extensions=unwanted_extensions
        self.initial_caracter=self.start
    def getListOfFiles(self,dirName): #code taken from: https://thispointer.com/python-how-to-get-list-of-files-in-directory-and-sub-directories/
        # create a list of file and sub directories 
        # names in the given directory 
        listOfFile = os.listdir(dirName)
        allFiles = list()
        # Iterate over all the entries
        for entry in listOfFile:
            # Create full path
            #print(f"entry={entry},dirName={dirName},entry+dirName={dirName}/{entry}")
            fullPath = os.path.join(dirName, entry)
            # If entry is a directory then get the list of files in this directory 
            if os.path.isdir(fullPath):
                allFiles = allFiles + list_files.getListOfFiles(self,fullPath)
            else:
                allFiles.append(fullPath)
                    
        return allFiles
    def pop_unwanted(self,listOfFiles):
        to_pop=[]
        for i in range(len(listOfFiles)):
            print(f"in i, i={i},listOfFiles[{i}]={listOfFiles[i]}")
            for b in range(len(self.unwanted_extensions)):
                print("in b")
                if self.unwanted_extensions[b] in listOfFiles[i]:
                    to_pop.append(i)
        print(f"to_pop={to_pop}")
        to_substract_from=0
        for i in to_pop:
            print(f"popping= {i-to_substract_from},listOfFiles={listOfFiles[i-to_substract_from]}")
            listOfFiles.pop(i-to_substract_from)
            to_substract_from+=1
        return listOfFiles
    def add_domain_name(self,lst):
        lst_done=[]
        for i in range(len(lst)):
            initial_caracter=self.initial_caracter
            done_initial=0
            word=""
            for b in listOfFiles[i]:
                if b==initial_caracter and done_initial==0:
                    word=self.home
                    done_initial=1
                elif b=="\\":
                    word+="/"
                else:
                    word+=str(b)
            lst_done.append(word)
            print(f"word={word}")
            
        print(lst_done)
        return lst_done
    def write_content(self,content):
        name=input("Enter name of the file to write to (extension must be included in the name).\n If file has the same name as another one, content of the destination will be erased.: ")
        f=open(name,"w")
        print(f"Writing content to file {name}",end="")
        for i in range(len(content)):
            f.write(f"{content[i]}\n")
            print(".",end="")
        f.close()
        print("[DONE]")
        
unwanted_extensions=[".py","files for your website should be uploaded here!","googlec4db6a829abfb365.html"]
RI=list_files(unwanted_extensions)
dirName = '/home/varun/Downloads';
# Get the list of all files in directory tree at given path
listOfFiles = list_files.getListOfFiles(RI,RI.start)
print(listOfFiles)
listOfFiles=list_files.pop_unwanted(RI,listOfFiles)
listOfFiles=list_files.add_domain_name(RI,listOfFiles)
list_files.write_content(RI,listOfFiles)
pause=input("Press enter to continue...")
