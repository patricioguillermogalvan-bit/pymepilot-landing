"""
PymePilot Nexus Logo — Generate PNG previews + mockup
3 versions: A (Clean), B (Pulse), C (Hub)
"""
from PIL import Image, ImageDraw, ImageFont

SZ = 512
SCALE = SZ / 32
DARK = (41, 62, 64)
GREEN = (129, 181, 161)
WHITE = (255, 255, 255)
DARK_BG = (35, 50, 52)
OUT = "C:/claude-projects/pymepilot-landing"

def s(x, y):
    return (int(x * SCALE), int(y * SCALE))

def sr(r):
    return max(int(r * SCALE), 1)

# 4 ascending nodes at 45°: (x, y, radius)
NODES = [(7, 25, 2.2), (13, 19, 2.6), (19, 13, 3.0), (25, 7, 3.5)]
LINE_W = sr(1.5)

# ── Gradient (bottom-left dark → top-right green) ──
print("Gradient...")
grad = Image.new('RGB', (SZ, SZ))
px = grad.load()
d = max(SZ * 2 - 2, 1)
for y in range(SZ):
    base = SZ - 1 - y
    for x in range(SZ):
        t = (x + base) / d
        px[x, y] = tuple(int(a + (b - a) * t) for a, b in zip(DARK, GREEN))

# White version for dark backgrounds
white_img = Image.new('RGB', (SZ, SZ), WHITE)


def apply(mask, use_gradient=True):
    bg = Image.new('RGB', (SZ, SZ), WHITE)
    src = grad if use_gradient else white_img
    bg.paste(src, (0, 0), mask)
    return bg


def draw_base(d):
    """Lines + nodes common to all versions."""
    for i in range(len(NODES) - 1):
        p1 = s(NODES[i][0], NODES[i][1])
        p2 = s(NODES[i + 1][0], NODES[i + 1][1])
        d.line([p1, p2], fill=255, width=LINE_W)
    for nx, ny, ru in NODES:
        r = sr(ru)
        cx, cy = s(nx, ny)
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=255)


def version_a(use_gradient=True):
    m = Image.new('L', (SZ, SZ), 0)
    draw_base(ImageDraw.Draw(m))
    return apply(m, use_gradient)


def version_b(use_gradient=True):
    m = Image.new('L', (SZ, SZ), 0)
    d = ImageDraw.Draw(m)
    # Glow rings behind top node
    n4 = s(25, 7)
    for gr, gf in [(sr(6.5), 20), (sr(5), 35)]:
        d.ellipse([n4[0] - gr, n4[1] - gr, n4[0] + gr, n4[1] + gr], fill=gf)
    draw_base(d)
    return apply(m, use_gradient)


def version_c(use_gradient=True):
    m = Image.new('L', (SZ, SZ), 0)
    d = ImageDraw.Draw(m)
    draw_base(d)
    # Hub ring at center (16,16)
    cx, cy = s(16, 16)
    hr = sr(2.2)
    rw = max(sr(0.7), 2)
    d.ellipse([cx - hr, cy - hr, cx + hr, cy + hr], outline=160, width=rw)
    return apply(m, use_gradient)


# ── Generate 512x512 PNGs ──
print("Generating 512x512 PNGs...")
versions = [("nexus-a", version_a), ("nexus-b", version_b), ("nexus-c", version_c)]
imgs = {}

for name, fn in versions:
    img = fn(True)
    img.save(f"{OUT}/logo-{name}.png", quality=95)
    imgs[name] = img
    print(f"  logo-{name}.png")


# ── Generate combined mockup ──
print("Generating mockup...")

MOCK_W = 1500
MOCK_H = 820
mockup = Image.new('RGB', (MOCK_W, MOCK_H), (248, 248, 248))
md = ImageDraw.Draw(mockup)

# Try loading a system font for labels
try:
    font_label = ImageFont.truetype("segoeui.ttf", 18)
    font_small = ImageFont.truetype("segoeui.ttf", 13)
    font_title = ImageFont.truetype("segoeuib.ttf", 22)
except:
    font_label = ImageFont.load_default()
    font_small = font_label
    font_title = font_label

labels = ["A: Clean", "B: Pulse", "C: Hub"]

# Row 1: 512x512 previews (scaled to 340x340 for layout)
PREVIEW_SZ = 320
y_top = 30
for i, (name, _) in enumerate(versions):
    x = 40 + i * (PREVIEW_SZ + 50)
    # White card
    md.rounded_rectangle(
        [x - 10, y_top - 10, x + PREVIEW_SZ + 10, y_top + PREVIEW_SZ + 10],
        radius=12, fill=WHITE, outline=(230, 230, 230)
    )
    preview = imgs[name].resize((PREVIEW_SZ, PREVIEW_SZ), Image.LANCZOS)
    mockup.paste(preview, (x, y_top))
    md.text((x + PREVIEW_SZ // 2, y_top + PREVIEW_SZ + 22), labels[i],
            fill=DARK, font=font_label, anchor="mt")

# Row 2: Navbar mockup (white background)
y_nav = y_top + PREVIEW_SZ + 60
md.text((40, y_nav), "Navbar (40px) — fondo blanco", fill=(120, 120, 120), font=font_small)
y_nav += 24
md.rounded_rectangle([30, y_nav, MOCK_W - 30, y_nav + 56], radius=8, fill=WHITE, outline=(230, 230, 230))
for i, (name, _) in enumerate(versions):
    x = 60 + i * 180
    small = imgs[name].resize((40, 40), Image.LANCZOS)
    mockup.paste(small, (x, y_nav + 8))
    md.text((x + 48, y_nav + 20), "PymePilot", fill=DARK, font=font_label)

# Row 3: Navbar mockup (dark background)
y_dark = y_nav + 76
md.text((40, y_dark), "Navbar (40px) — fondo oscuro", fill=(120, 120, 120), font=font_small)
y_dark += 24
md.rounded_rectangle([30, y_dark, MOCK_W - 30, y_dark + 56], radius=8, fill=DARK_BG)

# Generate white versions for dark bg
white_versions = [("nexus-a", version_a), ("nexus-b", version_b), ("nexus-c", version_c)]
for i, (name, fn) in enumerate(white_versions):
    x = 60 + i * 180
    white_v = fn(False)  # white fill on dark bg
    small_w = white_v.resize((40, 40), Image.LANCZOS)
    # On dark bg, paste the white-on-white version won't show.
    # Instead, draw white mark on dark patch
    dark_patch = Image.new('RGB', (40, 40), DARK_BG)
    # Create mask from the 512 version
    m512 = Image.new('L', (SZ, SZ), 0)
    draw_base(ImageDraw.Draw(m512))
    m40 = m512.resize((40, 40), Image.LANCZOS)
    white40 = Image.new('RGB', (40, 40), WHITE)
    dark_patch.paste(white40, (0, 0), m40)
    mockup.paste(dark_patch, (x, y_dark + 8))
    md.text((x + 48, y_dark + 20), "PymePilot", fill=WHITE, font=font_label)

# Row 4: Favicon demonstrations
y_fav = y_dark + 76
md.text((40, y_fav), "Favicon (16x16) — escalados x6 para visibilidad", fill=(120, 120, 120), font=font_small)
y_fav += 24
for i, (name, _) in enumerate(versions):
    x = 60 + i * 160
    # Generate tiny then scale up for visibility
    tiny = imgs[name].resize((16, 16), Image.LANCZOS)
    visible = tiny.resize((96, 96), Image.NEAREST)  # 6x scale, pixelated
    md.rounded_rectangle([x - 4, y_fav - 4, x + 100, y_fav + 100], radius=4, fill=WHITE, outline=(220, 220, 220))
    mockup.paste(visible, (x, y_fav))
    md.text((x + 48, y_fav + 106), labels[i], fill=DARK, font=font_small, anchor="mt")

mockup.save(f"{OUT}/nexus-mockup.png", quality=95)
print("  nexus-mockup.png")

print("\nDone!")
