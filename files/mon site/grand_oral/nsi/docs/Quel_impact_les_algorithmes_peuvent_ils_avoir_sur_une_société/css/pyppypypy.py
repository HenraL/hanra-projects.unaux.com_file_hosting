import os
def pause():pause=input("Press enter to continue...")
file_names=["con","prnt","prn","con"]
for i in range(len(file_names)):
    try:
        os.mkdir(file_names[i])
        print("os.mkdir(\"{}\")".format(file_names[i]))
    except:
        print("failed to create {}".format(file_names[i]))
    if file_names[i] in 
        for b in range(11):
            try:
                os.mkdir("{}{}".format(file_names[i],b))
                print("os.mkdir(\"{}{}\")".format(file_names[i],b))
            except:
                print("failed to create {}{}".format(file_names[i],b))
