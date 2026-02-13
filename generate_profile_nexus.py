"""Generate 1080x1080 profile picture with Nexus logo (for WhatsApp/Instagram)."""
from PIL import Image, ImageDraw

SIZE = 1080
SCALE = 28
OFS = (SIZE - 32 * SCALE) // 2
DARK = (41, 62, 64)
GREEN = (129, 181, 161)
WHITE = (255, 255, 255)

NODES = [(7, 25, 2.2), (13, 19, 2.6), (19, 13, 3.0), (25, 7, 3.5)]

def s(x, y):
    return (int(x * SCALE + OFS), int(y * SCALE + OFS))

def sr(r):
    return int(r * SCALE)

# Gradient
grad = Image.new('RGB', (SIZE, SIZE))
px = grad.load()
d = max(SIZE * 2 - 2, 1)
for y in range(SIZE):
    base = SIZE - 1 - y
    for x in range(SIZE):
        t = (x + base) / d
        px[x, y] = tuple(int(a + (b-a)*t) for a, b in zip(DARK, GREEN))

# Mask
mask = Image.new('L', (SIZE, SIZE), 0)
draw = ImageDraw.Draw(mask)
lw = sr(1.5)
for i in range(len(NODES) - 1):
    p1 = s(NODES[i][0], NODES[i][1])
    p2 = s(NODES[i+1][0], NODES[i+1][1])
    draw.line([p1, p2], fill=255, width=lw)
for nx, ny, ru in NODES:
    r = sr(ru)
    cx, cy = s(nx, ny)
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=255)

# Composite
img = Image.new('RGB', (SIZE, SIZE), WHITE)
img.paste(grad, (0, 0), mask)

out = "C:/claude-projects/pymepilot-landing/logo-pymepilot-perfil.png"
img.save(out, quality=95)
print(f"Profile picture saved: {out} ({SIZE}x{SIZE})")
