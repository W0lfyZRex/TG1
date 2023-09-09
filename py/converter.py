import pyexcel as pe

# Chemin d'accès du fichier ODS
ods_file = "liste.ods"

# Lecture du fichier ODS
sheet = pe.get_sheet(file_name=ods_file)

# Chemin d'accès pour le fichier CSV de sortie
csv_file = "liste.csv"

# Écriture du fichier CSV
sheet.save_as(csv_file)
