import csv
cars = []
with open('listedeliens.csv', newline='', encoding="utf8") as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
       cars.append(row)


# On suppose une matrice non vide composée de tableaux.
def afficherMatrice(matrice) :
    maxi = [max([len(str(tab[i])) for tab in matrice if len(tab) > i]) for i in range(0, max([len(tab) for tab in matrice]))]
    for line in matrice :
        print("".join([("{:<" + str(maxi[i] + 2) + "."+ str(maxi[i]) + "}") for i in range(len(line))]).format(*[str(e) for e in line]))


# def clé(element) :
#     return (-1*float(element[3]))
# matrice = [[cars[i][0],cars[i][1],cars[i][2],cars[i][3], cars[i][4]] for i in range(2,len(cars))]
# tab = sorted(matrice, key=clé)
# afficherMatrice(tab[0:10])

# def clé(element) :
#     return (-1*float(element[1]))
# matrice = [[cars[i][0],cars[i][3]] for i in range(2,len(cars))]
# tab = sorted(matrice, key=clé)
# nb=0
# for i in range(1,len(tab)):
#     nb = nb + float(cars[i][3])
# print(nb)

import re

# Définir une expression régulière pour extraire les chiffres du lien


# Rechercher les correspondances dans le lien en utilisant l'expression régulière

# Imprimer les correspondances trouvées

for i in range(0,126):
    url = (cars[i][0])
    if "Magnard" in url:
        # Extraire les chiffres après "demo/" ou "specimen/"
        if "demo/" in url:
            id = url.split("demo/")[1].split("/")[0]
        elif "specimen/" in url:
            id = url.split("specimen/")[1].split("/")[0]
        else:
            id = ""
        print(id)

    # Imprimer l'ID extrait

# afficherMatrice(sorted([[cars[i][0],cars[i][1],cars[i][2],cars[i][3], cars[i][4]] for i in range(2,len(cars)) if ((cars[i][2]).lower().__contains__("the")) and ((cars[i][2]).lower().__contains__("rookie")) and ((cars[i][2]).lower().__contains__("s05"))]))
# afficherMatrice([cars[i][0]] for i in range(2,len(cars)) )

# if ((cars[i][0]).lower().__contains__("delagrave")))