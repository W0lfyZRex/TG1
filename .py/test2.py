# import os
# import sys
# import shutil

# for i in range (0,2):
#     try:
#         shutil.rmtree("C:/Users/Noham/Downloads/Manuel/Code/gen/")
#     except OSError as e:
#         print("Error: %s - %s." % (e.filename, e.strerror))

#     directory = "gen"
#     parent_dir = "C:/Users/Noham/Downloads/Manuel/Code/"
#     path = os.path.join(parent_dir, directory)
#     try: 
#         os.mkdir(path)
#     except OSError as e:
#         print("Error: %s - %s." % (e.filename, e.strerror))
for i in range (1,5):
    url = ("https://exobank.hachette-livre.fr/contents/final/")
    url2 = ("-fxl/OEBPS/page{}.xhtml?interface=postMessage")
    newurl = url + str(i) + url2
    print(newurl)


