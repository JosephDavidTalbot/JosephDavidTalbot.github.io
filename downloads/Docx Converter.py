#!Python 3.8
#Written by Joe Talbot

import docx, os, time, string, unicodedata

def convertDoc(docPath):
    try:
        docFile = docx.Document(docPath)
    except:
        print("Error: invalid filepath. "+docPath+" cannot be opened.")
        return
    docName = (docPath.split('.'))[0]
    htmlFile = open(docName+".html", 'w', encoding='utf-8')
    htmlFile.write('');
    htmlFile.close()
    htmlFile = open(docName+".html", 'a', encoding='utf-8')

    para = docFile.paragraphs

    for p in para:
        temp = ""
        if p.style == 'normal':
            temp += "<p>\n"
        elif p.style == 'Heading 1':
            temp += "<h1>\n"
        elif p.style == 'Title':
            temp += "<h1>\n"
        elif p.style == 'Heading 2':
            temp += "<h2>\n"
        elif p.style == 'Heading 3':
            temp += "<h3>\n"
        elif p.style == 'Heading 4':
            temp += "<h4>\n"
        elif p.style == 'Heading 5':
            temp += "<h5>\n"
        elif p.style == 'Heading 6':
            temp += "<h6>\n"
        elif p.style == 'Heading 7':
            temp += "<h7>\n"
        elif p.style == 'Heading 8':
            temp += "<h8>\n"
        elif p.style == 'Heading 9':
            temp += "<h9>\n"
        else:
            temp += "<p>\n"

        for i, r in enumerate(p.runs):
            if(p.runs[i].bold):
                temp+=("<strong>")
            if(p.runs[i].italic):
                temp+=("<em>")

            '''temp2 = r.text
            if("\n" in temp2):
                temp2=temp2.replace("\n","<br/>\n")'''

            if r.text == '':
                temp+='<br/>'
            else:
                temp+=r.text.replace("\n","<br/>\n")

            #temp+=(temp2)

            if(p.runs[i].bold):
                temp+=("</strong>")
            if(p.runs[i].italic):
                temp+=("</em>")
        if p.style == 'normal':
            temp+= "\n</p>\n\n"
        elif p.style == 'Heading 1':
            temp+= "\n</h1>\n\n"
        elif p.style == 'Heading 2':
            temp+= "\n</h2>\n\n"
        elif p.style == 'Heading 3':
            temp+= "\n</h3>\n\n"
        elif p.style == 'Heading 4':
            temp+= "\n</h4>\n\n"
        elif p.style == 'Heading 5':
            temp+= "\n</h5>\n\n"
        elif p.style == 'Heading 6':
            temp+= "\n</h6>\n\n"
        elif p.style == 'Heading 7':
            temp+= "\n</h7>\n\n"
        elif p.style == 'Heading 8':
            temp+= "\n</h8>\n\n"
        elif p.style == 'Heading 9':
            temp+= "\n</h9>\n\n"
        else:
            temp+=("\n</p>\n\n")
        htmlFile.write(temp)

    htmlFile.close()



valid_filename_chars = "-_.() %s%s" % (string.ascii_letters, string.digits)
char_limit = 255

def clean_filename(filename, whitelist=valid_filename_chars, replace=' '):
    # replace spaces
    for r in replace:
        filename = filename.replace(r,'_')

    # keep only valid ascii chars
    cleaned_filename = unicodedata.normalize('NFKD', filename).encode('ASCII', 'ignore').decode()

    # keep only whitelisted chars
    cleaned_filename = ''.join(c for c in cleaned_filename if c in whitelist)
    if len(cleaned_filename)>char_limit:
        print("Warning, filename truncated because it was over {}. Filenames may no longer be unique".format(char_limit))
    return cleaned_filename[:char_limit]


#Main
print("Please enter the filename of the document you wish to convert.")
docPath=input()
start = time.time()
print('Starting...\n\n')
convertDoc(docPath)
print('All done!')
end = time.time()
print('Elapsed time: '+(str(end - start)))
