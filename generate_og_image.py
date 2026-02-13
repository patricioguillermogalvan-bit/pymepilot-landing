from PIL import Image, ImageDraw, ImageFont
import os

# Crear imagen 1200x630
width, height = 1200, 630
bg_color = (26, 77, 46)  # Verde oscuro del header
img = Image.new('RGB', (width, height), bg_color)
draw = ImageDraw.Draw(img)

# Cargar logo
logo_path = os.path.join(os.path.dirname(__file__), 'logo-pymepilot-perfil.png')
if os.path.exists(logo_path):
    logo = Image.open(logo_path)
    logo.thumbnail((180, 180))
    if logo.mode == 'RGBA':
        # Composite sobre el fondo verde
        bg_patch = Image.new('RGB', logo.size, bg_color)
        bg_patch.paste(logo, mask=logo.split()[3])
        logo = bg_patch
    logo_x = (width - logo.width) // 2
    img.paste(logo, (logo_x, 60))
    print(f"Logo cargado: {logo.size}")

# Fuentes - Windows
font_paths = [
    "C:/Windows/Fonts/segoeui.ttf",
    "C:/Windows/Fonts/segoeuib.ttf",
    "C:/Windows/Fonts/arial.ttf",
    "C:/Windows/Fonts/arialbd.ttf",
]

font_bold = None
font_regular = None
for fp in font_paths:
    if os.path.exists(fp):
        if 'b.' in fp or 'Bold' in fp:
            if not font_bold:
                font_bold = fp
        else:
            if not font_regular:
                font_regular = fp

try:
    font_big = ImageFont.truetype(font_bold or font_regular or font_paths[0], 52)
    font_med = ImageFont.truetype(font_regular or font_paths[0], 32)
except:
    font_big = ImageFont.load_default()
    font_med = ImageFont.load_default()

# Textos
texts = [
    ("Seguimiento Inteligente", font_big, 280, (255, 255, 255)),
    ("para Distribuidores B2B", font_big, 345, (255, 255, 255)),
    ("Analiza tu base y genera informes diarios", font_med, 440, (180, 220, 195)),
    ("pymepilot.cloud", font_med, 540, (130, 180, 155)),
]

for text, font, y_pos, color in texts:
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    draw.text((x, y_pos), text, fill=color, font=font)

# Guardar
output_dir = os.path.join(os.path.dirname(__file__), 'public')
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, 'og-image.jpg')
img.save(output_path, 'JPEG', quality=90)
print(f"Imagen creada: {output_path}")
print(f"Dimensiones: {img.size}")
