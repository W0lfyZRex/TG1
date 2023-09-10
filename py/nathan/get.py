# https://biblio.nathan.fr/epubs/web/4ebeff9ce5eb568f8142771fdac580b8aeb12f675d75fa4c1ebb4620050d6c01842394910eeee327/NATHAN/bibliomanuels/distrib_gp/2/1/10300/online/OEBPS/TOC.xhtml

import requests
from bs4 import BeautifulSoup
import re


def getimg(url, nb):
    response = requests.get(url)
    if response.status_code == 200:
        save_path = f"9782091317113/{nb}.jpg"
        with open(save_path, 'wb') as file:
            file.write(response.content)
        print(f"The image has been saved as '{save_path}'")
    else:
        print(f"Failed to download the image. Status code: {response.status_code}")


url = 'https://biblio.nathan.fr/epubs/web/4ebeff9ce5eb568f8142771fdac580b8aeb12f675d75fa4c1ebb4620050d6c01842394910eeee327/NATHAN/bibliomanuels/distrib_gp/2/1/10366/online/OEBPS/TOC.xhtml'
debut = 'https://biblio.nathan.fr/epubs/web/4ebeff9ce5eb568f8142771fdac580b8aeb12f675d75fa4c1ebb4620050d6c01842394910eeee327/NATHAN/bibliomanuels/distrib_gp/2/1/10366/online/OEBPS/'
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
pagelist = soup.find('nav', {'epub:type': 'page-list'})
links = pagelist.find_all('a')

i = 1
for link in links:
    lien = link.get('href')
    texte = link.text

    r = requests.get(debut + lien)
    soup = BeautifulSoup(r.text, 'html.parser')
    div_element = soup.find('div', class_='page')
    style_attribute = div_element.get('style')

    background_image_url_match = re.search(r'background-image:url\(\'(.*?)\'\)', style_attribute)

    if background_image_url_match:
        background_image_url = background_image_url_match.group(1)
        parts = lien.split('/')[0]
        image_url = debut + parts + '/' + background_image_url

        print('image_url: ', image_url)

        getimg(image_url, i)
    else:
        print("Image d'arrière-plan non trouvée.")

    i += 1