import pdfkit

# Configure PDF options
options = {
    'page-size': 'A4',
    'margin-top': '0mm',
    'margin-right': '0mm',
    'margin-bottom': '0mm',
    'margin-left': '0mm',
}

# Get the path to the wkhtmltopdf executable installed via Homebrew
wkhtmltopdf_path = "/usr/local/bin/wkhtmltopdf"  # Replace with the actual path

# Create a directory to save the PDF files
import os
output_directory = "output_pdfs"
os.makedirs(output_directory, exist_ok=True)

# Define the base URL and filename format
base_url = "https://storage.libmanuels.fr/Magnard/specimen/9782210107175/1/OEBPS/page"
filename_format = f"{output_directory}/page{{:03d}}.pdf"

# Iterate through pages 1 to 263 and generate PDFs
for page_number in range(1, 264):  # Pages from 001 to 263
    # Construct the full URL for the current page
    url = f"{base_url}{page_number:03d}.xhtml?interface=postMessage"

    # Provide the path to the wkhtmltopdf executable
    config = pdfkit.configuration(wkhtmltopdf=wkhtmltopdf_path)

    # Generate the PDF for the current page
    try:
        pdfkit.from_url(url, filename_format.format(page_number), configuration=config, options=options)
    except Exception as e:
        print(e)
        print(url)

print("PDFs created successfully.")
