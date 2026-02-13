from PIL import Image
import os

# Crear imagen 1200x630
width, height = 1200, 630
bg_color = (255, 255, 255)  # Fondo blanco
img = Image.new('RGB', (width, height), bg_color)

# Cargar logo centrado
logo_path = os.path.join(os.path.dirname(__file__), 'logo-pymepilot-perfil.png')
if os.path.exists(logo_path):
    logo = Image.open(logo_path)
    logo.thumbnail((400, 400))
    if logo.mode == 'RGBA':
        bg_patch = Image.new('RGB', logo.size, bg_color)
        bg_patch.paste(logo, mask=logo.split()[3])
        logo = bg_patch
    logo_x = (width - logo.width) // 2
    logo_y = (height - logo.height) // 2
    img.paste(logo, (logo_x, logo_y))
    print(f"Logo cargado: {logo.size}")

# Guardar
output_dir = os.path.join(os.path.dirname(__file__), 'public')
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, 'og-image.jpg')
img.save(output_path, 'JPEG', quality=90)
print(f"Imagen creada: {output_path}")
print(f"Dimensiones: {img.size}")
