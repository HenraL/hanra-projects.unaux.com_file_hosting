import os
def pause():pause=input("Press enter to continue...")
emojys=["w(ﾟДﾟ)w","┗|｀O′|┛","(⊙ｏ⊙)","(＃°Д°)","(*゜ー゜*)","(。_。)","...(*￣０￣)ノ","＼（〇_ｏ）／","o((⊙﹏⊙))o.","(⊙ˍ⊙)","(⊙_⊙)?","(⊙_⊙;)","(⊙_(⊙_⊙)_⊙)","(⊙o⊙)","⊙.☉","¯\(°_o)/¯","(´･ω･`)?","(￣┰￣*)","o(><；)oo","Σ(っ °Д °;)っ","∑( 口 ||","┌(。Д。)┐","(°ー°〃)","ε=ε=ε=(~￣▽￣)~","(￣m￣）","(ノω<。)ノ))☆.。","(ﾉ*･ω･)ﾉ","(#`O′)","щ(ʘ╻ʘ)щ","(o´・ェ・｀o)","(*Φ皿Φ*)","(・∀・(・∀・(・∀・*)","(○´･д･)ﾉ","┬┴┬┴┤(･_├┬┴┬┴","(o_ _)ﾉ","(＠_＠;)","ㄟ( ▔, ▔ )ㄏ","(￣_,￣ )","(+_+)?","(。>︿<)_θ","<(￣ c￣)y▂ξ","(๐॔˃̶ᗜ˂̶๐॓)","","o_o",".______.","━┳━　━┳━","━━(￣ー￣*|||━━","……]((o_ _)'彡☆","(。﹏。)","(⊙﹏⊙)","...( ＿ ＿)ノ|",",,ԾㅂԾ,,","m( _ _ )m","(lll￢ω￢)","╮(╯-╰)╭","(￣▽￣)\"","(￣_￣|||)","_〆(´Д｀ )","(x_x)","( ╯□╰ )","⊙﹏⊙∥","┌( ´_ゝ` )┐","－_－b","(ˉ﹃ˉ)","╮（╯＿╰）╭","(￣_,￣ )","○|￣|_","(ˉ▽￣～)","(´ｰ∀ｰ`)","(。・・)ノ","_(:з)∠)_","┑(￣Д ￣)┍","ε=ε=ε=┏(゜ロ゜;)┛","(*￣rǒ￣)","つ﹏⊂","(￣、￣)","╮(╯▽╰)╭","(☆-ｖ-)","(ˉ▽ˉ；)...","(◎﹏◎)","(((φ(◎ロ◎;)φ)))","<@_@>","→_→","←_←","♨_♨","◉_◉","(●__●)","(⊙_◎)","⚆_⚆","(•ˋ _ ˊ•)"]
website_name="http://hanra-projects.unaux.com"
error_folder_location="errors"
google_site_ver="LoWnBYKGqfx79IqYViE-Pqkd4dRmGa_lNqUDvjZxv0s"
bootstrap_location="side_add_ons"
bootstrap_name="bootstrap_style/bootstrap_dark.css"
footer_page="object/footer/footer.js"
links_page="object/links/links.js"
error_message="hmmm......<br>Your Browser may not support this element<br>"
error_message2="Click here to access the content"
a="""400
401
403
404
503
"""
"""402
407
405
406
408
409
410
411
412
413
414
415
416
417
418
421
422
423
424
425
426
428
429
431
449
450
451
456
"""
b="""Bad Request
Unauthorized
Forbidden
Not Found
Service Unavailable
"""
"""Proxy Authentication Required
Payment Required
Method Not Allowed
Not Acceptable
Request Time-out
Conflict
Gone
Length Required
Precondition Failed
Request Entity Too Large
Request-URI Too Long
Unsupported Media Type
Requested range unsatisfiable
Expectation failed
I’m a teapot
Bad mapping / Misdirected Request
Unprocessable entity
Locked
Method failure
Too Early
Upgrade Required
Precondition Required
Too Many Requests
Request Header Fields Too Large
Retry With
Blocked by Windows Parental Controls
Unavailable For Legal Reasons
Unrecoverable Error
"""
class before:
    def html_maker(i):
        line1="<!Doctype html>"
        line2="<html>"
        line3="\t<head>"
        line4="\t\t<title>{}-{}</title>".format(errors[i],defs[i])
        line5="\t\t<meta charset=\"UTF-8\">"
        line6="\t\t<meta name=\"{}-{}\" content=\"This is the {} page of the server http://hanra-projects.unaux.com/.\" />".format(errors[i],defs[i],errors[i])
        line7="\t\t<meta name=\"Language\" CONTENT=\"en,fr\" />"
        line8="\t\t<link rel=\"canonical\" href=\"{}/{}/{}\" />".format(website_name,error_folder_location,errors[i])
        line9="\t\t<meta name=\"robots\" content=\"noindex,follow,max-image-preview:standard\" />"
        line10="\t\t<meta name=\"copyright\" content=\"&copy; Henry Letellier 2021\"/>"
        line11="\t\t<meta name=\"publisher\" content=\"Henry Letellier\" />"
        line12="\t\t<meta name=\"googlebot\" content=\"noindex,follow,nosnippet\" />"
        line13="\t\t<meta name=\"google\" content=\"notranslate,nositelinkssearchbox\" />"
        line14="\t\t<meta name=\"google-site-verification\" content=\"{}\" />".format(google_site_ver)
        line15="\t\t<meta http-equiv=\"pragma\" content=\"no-cache\" />"
        line16="\t\t<meta http-equiv=\"Cache-control\" content=\"public\" />"
        line17="\t\t<link rel=\"stylesheet\" href=\"{}/{}/{}\"/>".format(website_name,bootstrap_location,bootstrap_name)
        line18="\t</head>"
        line19="\t<body>"
        line20="\t\t<style>"
        line21="\t\t\tbody{background-color:black;font-family:Helvetica;}"
        line22="\t\t\tp,h1,h2,h3,h4,h5,h6,h7,h8{color: aliceblue;}"
        line23="\t\t\ta{color:gold;text-decoration: underline;}"
        line24="\t\t\ta:clicked{color:aqua;text-decoration: underline;}"
        line25="\t\t\ta:active{font-style:italic;}"
        line26="\t\t\ta:hover{color:springgreen;text-decoration: underline;}"
        line27="\t\t</style>"
        line28="\t\t<h1>{}{}{}{}{}{}{}{}{}{} {}</h1>".format(chr(96),chr(40),chr(42),chr(62),chr(65103),chr(60),chr(42),chr(41),chr(8242),errors[i],defs[i])
        line28="\t\t<h1>(>_<) {} {}</h1>".format(errors[i],defs[i])
        line29="\t\t<a href=\"{}\" class=\"link\">Bring Me back home</a>".format(website_name)
        lineLink="\t\t<script type=\"text/JavaScript\" src=\"{}/{}/{}\" id=\"LiNks\">links(\"#LiNks\")</script>".format(website_name,bootstrap_location,links_page)
        line30="\t\t<footer>"
        lineFooter="<script type=\"text/JavaScript\" src=\"{}/{}/{}\" id=\"FoOtEr\">footer(\"#FoOtEr\")</script>".format(website_name,bootstrap_location,footer_page)
        line31="\t\t\t<object data=\"{}/{}/{}\" type=\"text/html\" class=\"fooject\">".format(website_name,bootstrap_location,footer_page)
        line32="\t\t\t\talt : <p>{}<a href=\"{}/{}/{}\">{}</a></p>".format(error_message,website_name,bootstrap_location,footer_page,error_message2)
        line33="\t\t\t</object>"
        line34="\t\t</footer>"
        line35="\t</body>"
        line36="</html>"
        page=[line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17,line18,line19,
        # line20,line21,line22,line23,line24,line25,line26,line27,
        line28,line29,line30,lineLink,
        # line31,line32,line33,
        lineFooter,line34,line35,line36]
        return page
    def list_maker(a):
        c=[]
        word=""
        for i in a:
            if i=="\n":
                c.append(word)
                word=""
            else:
                word+=str(i)
        return c
    def fold_checker(c,):
        for i in range(len(c)):
            before.write_to_htaccess(y_n,i)
            if os.path.exists("{}".format(c[i]))==False:
                os.mkdir("{}".format(c[i]))
                print("Created {}".format(c[i]))
                os.chdir("{}".format(c[i]))
                before.file_write(before.html_maker(i))
                os.chdir("..")
                print("Created file index.html in folder {}".format(c[i]))
            else:
                print("{} exists".format(c[i]))
                os.chdir("{}".format(c[i]))
                try:
                    f=open("index.html","r")
                    # print(f.read())
                    f.close()
                    print("file index.html exist in folder {}".format(c[i]))
                except:
                    before.file_write(before.html_maker(i))
                    print("Created file index.html in folder {}".format(c[i]))
                os.chdir("..")
    def file_write(list):
        f=open("index.html","w")
        for j in range(len(list)):
            print("{}\n".format(list[j]),end="")
            f.write("{}\n".format(list[j]))
        f.close()
    def get_update_htaccess():
        get_update=True
        y_n=False
        while get_update==True:
            get_y_n=input("Voulez-vous mettre à jour le fichier htacces? [(o)ui/(n)on]").lower()
            if get_y_n=="o":
                y_n=True
                get_update=False
            elif get_y_n=="n":
                y_n=False
                get_update=False
            else:
                print("Merci de bien vouloir entrez soit o pour oui ou n pour non")
        return y_n
    def clean_htaccess(bool):
        if bool==True:
            f=open(".htaccess","w")
            f.close()
    def write_to_htaccess(boole,i):
        if boole==True:
            f=open(".htaccess","a")
            f.write("#{}-{}\n".format(errors[i],defs[i]))
            f.write("ErrorDocument {} http://hanra-projects.unaux.com/errors/{}\n".format(errors[i],errors[i]))
            f.close()
            print("Wrote '#{}-{}\nErrorDocument {} http://hanra-projects.unaux.com/errors/{}' to .htaccess".format(errors[i],defs[i],errors[i],errors[i]))

errors=before.list_maker(a)
defs=before.list_maker(b)
y_n=before.get_update_htaccess()
before.clean_htaccess(y_n)
print(before.html_maker(0))
print(errors)
# before.file_write(before.html_maker(0))
before.fold_checker(errors)

pause()
pause()
