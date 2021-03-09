def pause():pause=input("Press enter to continue...")
class root:
    def __init__(self):
        self.main_boot=True
        self.Questions=[]
        self.To_ask=["type","Question_Number","content","Correct_Answer","Points"]
        self.Counter_Quiz_page_Title=0
        self.Counter_Sub_title=0
        self.Counter_Question=0
        self.Counter_QMC=0
        self.Correct_Answer=""
        self.Type=-2
        self.Question_n_x=""
        self.answers=[]
        self.justification=[]
        self.answer2=[]
        self.QuEsTion=""

    def CNumber(question):
        """Checks if input != float"""
        given=False
        while given==False:
            a=input(question)
            try:
                a=int(a)
                given=True
                return a
            except:
                print("Please only enter a whole number.\nYou have entered: '{}'".format(a))
                pause()
    def CNNZero():
        """Check Number Not Zero"""
        given=False
        while given==False:
            a=root.CNumber("Enter the amount of players")
            if a>0:
                given=True
                return a
            else:
                print("Please only enter a whole positive number above Zero.\nYou have entered: '{}'".format(a))
                pause()
    def YNo(question):
        """Yes No Checks if answer is either yes or no"""
        given=False
        while given==False:
            a=input(question).lower()
            if a=="y" or a=="n":
                given=True
                return a
            else:
                print("Please only enter y for yes or n for no.\nYou have entered: '{}'".format(a))
                pause()
    def ToBool(answ):
        """converts YNo function to booleen (True/False)"""
        if answ=="y":
            answ=True
        else:
            answ=False
        return answ
    def CText(question):
        """Check Text (checks if input is text)"""
        given=False
        while given==False:
            a=input(question)
            try:
                a=int(a)
                print("Please only enter a name, not numbers.\nPS:You're name can contain numbers.\nYou have entered: '{}'".format(a))
                pause()
            except:
                if len(a)>0:
                    given=True
                    return a
                else:
                    print("Please only enter a name.\nPS:You're name can contain numbers.\nYou have entered: '{}'".format(a))
                    pause()
class Getter(root):
    def Initialise(self):
        #To_ask=[
        #    "type":0/1/2,
        #    "Question_Number":"(Title_of_page).(Title_of_sub_part).(Question_number)",
        #    "content":{"Question":"blablabla","Answer_Options":["Answ1","Answ2","Answ3"]},
        #    "Given_Answer":"blabblabbla",
        #    "Correct_Answer":"blipblop",
        #    "Points":0/1]
        c=True
        while c==True:
            self.Type=root.CNumber("Enter -1 to exit\nQuestion type: (0 = title,1 = sub title, 2 = question):")
            print("Type={}".format(self.Type))
            if self.Type==0:
                self.Counter_Quiz_page_Title+=1
                self.Counter_Sub_title=0
                self.Counter_Question=0
                self.Counter_QMC=0
                self.Quiz_Page_Title=root.CText("Please enter the title of the page:")
                self.Quiz_Sub_Title=""
                self.Question_n_x=""
                update.ATQ(self,self.Quiz_Page_Title,self.Quiz_Page_Title)
            elif self.Type==1:
                self.Counter_Sub_title+=1
                self.Counter_Question=0
                self.Quiz_Sub_Title=root.CText("Please enter the subtitle of the page (the title in the white block):")
                update.ATQ(self,self.Quiz_Sub_Title,self.Quiz_Page_Title)
            elif self.Type==2:
                self.Counter_Question+=1
                self.Question_n_x=Getter.GQ(self,"Please enter The content of the question n°{}:".format(self.Counter_Question))
                update.ATQ(self,self.Question_n_x,self.QuEsTion)
            elif self.Type==-1:
                c=False
            else:
                print("Please only enter 0, 1 or 2\nYou have entered {}".format(self.Type))
                pause()
        print("self.Questions=".format(self.Questions))
        print("Update self")
        update.Show_List(self.Questions)
    # def GQpT(question):"""Get Quiz page Title"""
    # def GST(question):"""Get Sub Title"""
    def GQ(self,question):
        """Get Question"""
        self.QuEsTion=root.CText(question)
        self.answers=Getter.GA(self)
        e=""
        for i in range(len(self.answers)):
            e+="{}\\n".format(self.answers[i]["Question"])
        Question="{} {}\\n{}".format(self.Counter_Question,self.QuEsTion,e)
        return Question
    def GA(self):
        """Get Answers"""
        n_options=root.CNumber("Please enter the number of possible answers (right and wrong): ")
        answers=[]
        self.justification=[]
        self.answer2=[]
        for i in range(n_options):
            a="{} {}".format(i+1,root.CText("Please enter the content of answer n°{}:".format(i+1)))
            b=root.ToBool(root.YNo("Is this answer a correct answer?  [(y)es/(n)o]"))
            answers.append({"index":i+1,"Question":a,"Correct":b})
            if b==False:
                Getter.GJ(self,i+1)
            self.answer2.append({"index":i+1,"Question":a,"Correct":False})
        return answers
    def GJ(self,i):
        """Get Justifications"""
        a=root.CText("Enter the reason why the answer {} was false:".format(i))
        self.justification.append({"index":i,"justification":a})
class update(root):
    def ATQ(self,T_Question_Choices,T_question):
        """Add to Questions"""
        print("in ATQ")
        # answer2=update.clean_dict(self.answers)
        self.Questions.append({
            "type":self.Type, #Type page Title, sub_title, question
            "Question_Number":"{}.{}.{}".format(self.Counter_Quiz_page_Title,self.Counter_Sub_title,self.Counter_Question), #number (0 n°1 title page, 0 n°2 sub_title, 0 n°3 question)
            "content":{ #content (question, answers to the questions)
                "Question_and_choices":T_Question_Choices, #The question
                "Question Only":T_question, #Get the question only
                "User_Answers":self.answer2, #The answers processed
                "Correct_answers":self.answers}, #The default answers (the ones given by the creator)
            "Given_Answer":"", #user answer (given number as string, then transformed as list)
            "Why_wrong":self.justification, #justifications for the wrong answers
            #"correction":[], #
            "Points":0, #amount of points earned by correct answers, 0 none, 1 one answer, 2 two answers, ..., 10 ten answers.
            "Points_out_of":len(self.answer2)})
    # def clean_dict(dicti):
    #     print("\n\n\n\n dicti=\n{}\n\n\n\n".format(dicti))
    #     answer2=[]
    #     for i in range(len(dicti)):
    #         answer2.append(dicti[i])
    #     for i in range(len(answer2)):
    #         answer2[i]["Correct"]=False
    #     print("\n\n\n\n dicti=\n{}\n\n\n\n".format(dicti))
    #     return answer2
    def Show_List(li):
     for i in range(len(li)):
        for b in li[i]:
            print("li[{}][{}]={}".format(i,b,li[i][b]))
            try:
                update.Show_elements_of_list(li,i,b)
            except:
                print("error")

    def Show_elements_of_list(A,i,b):
        print("in Show_element")
        print("i={},b={}".format(i,b))
        # for i in range(len(A)):
            # print("A[{}][\"content\"][\"User_Answers\"]={}".format(i,A[i]["content"]["User_Answers"]))
            # print()
            # print("A[{}][\"content\"][\"Correct_answers\"]={}".format(i,A[i]["content"]["Correct_answers"]))
            # print()
            # print("A[{}][\"content\"][\"Correct_answers\"][0]={}".format(i,A[i]["content"]["Correct_answers"][0]))
            # print()
            # for k in range(len(A[i]["content"]["Correct_answers"])):
            #     print("A[{}][\"content\"][\"Correct_answers\"][{}]={}".format(i,k,A[i]["content"]["Correct_answers"][k]))
            # print()
            # for k in range(len(A[i]["content"]["User_Answers"])):
            #     print("A[{}][\"content\"][\"User_Answers\"][{}]={}".format(i,k,A[i]["content"]["User_Answers"][k]))
        for l in A[i][b]:
            print("Content of content:\nA[{}][\"{}\"][\"{}\"]={}".format(i,b,l,A[i][b][l]))
            # print("A[{}][\"{}\"][\"User_Answer\"]".format(i,b,k,A[i][b]["Correct_answers"][k]))
            if l=="User_Answers":
                for k in range(len(A[i][b][l])):
                    print("A[{}][\"{}\"][\"{}\"][{}]={}".format(i,b,l,k,A[i][b][l][k]))
            elif l=="Correct_answers":
                for k in range(len(A[i][b][l])):
                    print("A[{}][\"{}\"][\"{}\"][{}]={}".format(i,b,l,k,A[i][b][l][k]))
        print("Out of Show_element")
        print()
        



RI=root()

Getter.Initialise(RI)