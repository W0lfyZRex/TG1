import pdfkit
import re
from pdfkit.api import configuration
from pypdf import PdfMerger
import time
import os
import sys
import shutil
from tkinter import messagebox
import csv


# by using configuration you can add path value.
wkhtml_path = pdfkit.configuration(
    wkhtmltopdf="C:/Program Files/wkhtmltox/bin/wkhtmltopdf.exe")
# options = {
#     'page-size': 'Letter',
#     'margin-top': '0.75in',
#     'margin-right': '0.75in',
#     'margin-bottom': '0.75in',
#     'margin-left': '0.75in',
#     'custom-header': [
#         ('Accept-Encoding', 'gzip')
#     ],
#     'no-outline': None
# }

options = {}
nbpages = 68


url = "https://storage.libmanuels.fr/Belin/manuel/9791035824488/3/OEBPS/page0{}.xhtml"
# url = "https://exobank.hachette-livre.fr/contents/final/9782278093472-fxl/OEBPS/page{}.xhtml?interface=postMessage"
output = 'C:/Users/Noham/Documents/GitHub/Manuel/.py/gen/pdf{}.pdf'
for offset in range(1, nbpages + 1, 1):
    newurl = url.format(offset)
    print(newurl)
    newoutput = output.format(offset)
    print(str(offset) + "/" + str(nbpages))
    pdfkit.from_url(newurl,
                    newoutput,
                    configuration=wkhtml_path,
                    options=options,
                    verbose=False)

pdfs = 'C:/Users/Noham/Documents/GitHub/Manuel/.py/gen/pdf{}.pdf'
pdfsnewpdfs = []
for offset in range(1, nbpages + 1, 1):
    newpdfs = pdfs.format(offset)
    pdfsnewpdfs.append(str(newpdfs))
# print(pdfsnewpdfs)

finpage = time.perf_counter()

debutmerge = time.perf_counter()
merger = PdfMerger()

for pdf in pdfsnewpdfs:
    merger.append(pdf)

merger.write("result.pdf")
merger.close()
finmerge = time.perf_counter()

print(f"Gen pdfs en {finpage - toc:0.4f} secondes")
print(f"Gen pdf unique en {finmerge - debutmerge:0.4f} secondes")
print(f"Tout en {finmerge - toc:0.4f} secondes")
print('DONE')
