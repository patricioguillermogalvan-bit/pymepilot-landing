from PIL import Image
import os

logo_path = 'logo-corporate-icon.png'
logo = Image.open(logo_path)

if logo.mode != 'RGBA':
    logo = logo.convert('RGBA')

print(f"Logo: {logo_path} ({logo.size[0]}x{logo.size[1]})")

# 1. favicon.ico (32x32) - keep transparency
favicon = logo.copy()
favicon = favicon.resize((32, 32), Image.Resampling.LANCZOS)
favicon.save('app/favicon.ico', format='ICO', sizes=[(32, 32)])
print("Created: app/favicon.ico (32x32)")

# 2. icon.png (512x512)
icon = logo.copy()
icon = icon.resize((512, 512), Image.Resampling.LANCZOS)
icon.save('app/icon.png', 'PNG')
print("Created: app/icon.png (512x512)")

# 3. apple-icon.png (180x180)
apple = logo.copy()
apple = apple.resize((180, 180), Image.Resampling.LANCZOS)
apple.save('app/apple-icon.png', 'PNG')
print("Created: app/apple-icon.png (180x180)")

print("\nDone!")
