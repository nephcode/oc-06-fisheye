import os
import sys
from PIL import Image

def optimize_and_resize_image(image_path, output_path, quality=85, scale_percent=100):
    """Optimize and resize the image, then save it to the output path."""
    with Image.open(image_path) as img:
        if scale_percent != 100:
            width = int(img.width * scale_percent / 100)
            height = int(img.height * scale_percent / 100)
            img = img.resize((width, height), Image.Resampling.LANCZOS)
        img.save(output_path, optimize=True, quality=quality)

def optimize_images_in_directory(directory, output_directory, quality=85, scale_percent=100):
    """Recursively optimize and resize images in the given directory and save them to the output directory."""
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
        
    for root, _, files in os.walk(directory):
        relative_path = os.path.relpath(root, directory)
        output_root = os.path.join(output_directory, relative_path)
        
        if not os.path.exists(output_root):
            os.makedirs(output_root)
        
        for file in files:
            if file.lower().endswith(('png', 'jpg', 'jpeg')):
                image_path = os.path.join(root, file)
                output_path = os.path.join(output_root, file)
                optimize_and_resize_image(image_path, output_path, quality, scale_percent)
                print(f"Optimized and resized {image_path} and saved to {output_path}")

# Vérifiez que les arguments de la ligne de commande sont passés correctement
if len(sys.argv) != 5:
    print("Usage: python3 imageSize.py <input_directory> <output_directory> <quality> <scale_percent>")
    sys.exit(1)

# Récupérer les arguments de la ligne de commande
input_directory = sys.argv[1]
output_directory = sys.argv[2]
quality = int(sys.argv[3])
scale_percent = int(sys.argv[4])

# Appeler la fonction principale avec les arguments de la ligne de commande
optimize_images_in_directory(input_directory, output_directory, quality, scale_percent)
