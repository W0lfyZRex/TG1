import pdfkit
import re

from pushover import Pushover
from pdfkit.api import configuration
from pypdf import PdfMerger
import time
import os
import sys
import shutil
from tkinter import messagebox

wkhtml_path = pdfkit.configuration(wkhtmltopdf="C:/Program Files/wkhtmltox/bin/wkhtmltopdf.exe")

nbpages = 68
url = "https://storage.libmanuels.fr/Belin/manuel/9782210113183/3/OEBPS/page0{}.xhtml"

output = 'C:/Users/Noham/Documents/GitHub/Manuel/.py/gen/prof{}.pdf'
# for offset in range(10, nbpages + 1, 1):
#     newurl = url.format(offset)
#     print(newurl)
#     newoutput = output.format(offset)
#     print(str(offset) + "/" + str(nbpages))

#     pdfkit.from_url(newurl,
#                         newoutput,
#                         configuration=wkhtml_path,
#                         verbose=True)

pdfs = 'C:/Users/Noham/Documents/GitHub/Manuel/.py/gen/prof{}.pdf'
pdfsnewpdfs = []

for offset in range(2, nbpages + 1, 1):
    newpdfs = pdfs.format(offset)
    pdfsnewpdfs.append(str(newpdfs))
# print(pdfsnewpdfs)

finpage = time.perf_counter()

debutmerge = time.perf_counter()
merger = PdfMerger()

for pdf in pdfsnewpdfs:
    merger.append(pdf)

merger.write("prof.pdf")
merger.close()
finmerge = time.perf_counter()



po = Pushover("a73uqu1px5w9aq84tnsbcgyf14c7zz")
po.user("ub91t4nporrc2nv374ed9kk9nwnd2p")
msg = po.msg("Les téléchargements sont terminés")
msg.set("title", "Finis")
po.send(msg)