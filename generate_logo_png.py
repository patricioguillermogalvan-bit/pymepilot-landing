from PIL import Image, ImageDraw, ImageFont
import math

SCALE = 25  # 32 * 25 = 800px icon
SIZE = 1080
ICON_SIZE = 32 * SCALE  # 800px
OFFSET = (SIZE - ICON_SIZE) // 2  # 140px centering padding

def s(x, y=None):
    """Scale coordinates from 32x32 space to pixel space, with centering offset."""
    if y is None:
        return int(x * SCALE + OFFSET)
    return (int(x * SCALE + OFFSET), int(y * SCALE + OFFSET))

def create_gradient(width, height, color1, color2):
    """Create a diagonal gradient image."""
    img = Image.new('RGB', (width, height))
    pixels = img.load()
    for y in range(height):
        for x in range(width):
            t = (x + y) / (width + height - 2) if (width + height - 2) > 0 else 0
            r = int(color1[0] + (color2[0] - color1[0]) * t)
            g = int(color1[1] + (color2[1] - color1[1]) * t)
            b = int(color1[2] + (color2[2] - color1[2]) * t)
            pixels[x, y] = (r, g, b)
    return img

def rounded_rect_mask(width, height, radius):
    """Create a rounded rectangle mask."""
    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, width - 1, height - 1], radius=radius, fill=255)
    return mask

# --- Create the profile picture (1080x1080, white bg, centered icon) ---
img = Image.new('RGB', (SIZE, SIZE), (255, 255, 255))

# 1. Gradient rounded rectangle background
gradient = create_gradient(ICON_SIZE, ICON_SIZE, (129, 181, 161), (41, 62, 64))
mask = rounded_rect_mask(ICON_SIZE, ICON_SIZE, int(8 * SCALE))
img.paste(gradient, (OFFSET, OFFSET), mask)

# 2. Draw the P shape (white) with arrow counter (transparent/gradient showing through)
# We'll draw the P as a white shape, then "cut out" the arrow triangle

# Create a white P on a transparent layer
p_layer = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
p_draw = ImageDraw.Draw(p_layer)

# P outer shape - approximate the path:
# M9,8 C9,7.45 9.45,7 10,7 H16.5 C20.64,7 23.5,9.5 23.5,13 C23.5,16.5 20.64,19 16.5,19 H13 V24 C13,24.55 12.55,25 12,25 H10 C9.45,25 9,24.55 9,24 V8 Z
# Simplified as polygon points tracing the P outline

# For Pillow, we'll use a series of points to approximate the curves
# Stem: left side
# Bowl: right side curve

def bezier_points(p0, p1, p2, p3, steps=20):
    """Generate points along a cubic bezier curve."""
    points = []
    for i in range(steps + 1):
        t = i / steps
        x = (1-t)**3*p0[0] + 3*(1-t)**2*t*p1[0] + 3*(1-t)*t**2*p2[0] + t**3*p3[0]
        y = (1-t)**3*p0[1] + 3*(1-t)**2*t*p1[1] + 3*(1-t)*t**2*p2[1] + t**3*p3[1]
        points.append(s(x, y))
    return points

# Build the P outer contour
p_points = []

# Top-left corner (rounded): from (9,8) curving to (10,7)
p_points += bezier_points((9, 8), (9, 7.45), (9.45, 7), (10, 7), steps=8)

# Top edge to bowl start
p_points.append(s(16.5, 7))

# Bowl top curve: (16.5,7) C(20.64,7)(23.5,9.5)(23.5,13)
p_points += bezier_points((16.5, 7), (20.64, 7), (23.5, 9.5), (23.5, 13), steps=20)

# Bowl bottom curve: (23.5,13) C(23.5,16.5)(20.64,19)(16.5,19)
p_points += bezier_points((23.5, 13), (23.5, 16.5), (20.64, 19), (16.5, 19), steps=20)

# Back to stem
p_points.append(s(13, 19))

# Down the inner stem
p_points.append(s(13, 24))

# Bottom-right corner: (13,24) C(13,24.55)(12.55,25)(12,25)
p_points += bezier_points((13, 24), (13, 24.55), (12.55, 25), (12, 25), steps=8)

# Bottom edge
p_points.append(s(10, 25))

# Bottom-left corner: (10,25) C(9.45,25)(9,24.55)(9,24)
p_points += bezier_points((10, 25), (9.45, 25), (9, 24.55), (9, 24), steps=8)

# Close back to start
p_points.append(s(9, 8))

# Draw the P shape
p_draw.polygon(p_points, fill=(255, 255, 255, 255))

# 3. Cut out the arrow triangle (counter) - draw it in transparent
# Triangle: M13.5,16.5 L16.5,10 L19.5,16.5 Z
arrow_points = [s(13.5, 16.5), s(16.5, 10), s(19.5, 16.5)]
p_draw.polygon(arrow_points, fill=(0, 0, 0, 0))

# Composite the P layer onto the main image
img = Image.alpha_composite(img.convert('RGBA'), p_layer).convert('RGB')

# Save profile picture
output_path = "C:/claude-projects/pymepilot-landing/logo-pymepilot-perfil.png"
img.save(output_path, 'PNG', quality=100)
print(f"Profile picture saved: {output_path}")
print(f"Size: {img.size[0]}x{img.size[1]}px")
