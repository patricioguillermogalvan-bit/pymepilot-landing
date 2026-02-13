"""
PymePilot Corporate Logo — Microsoft-style lockup
Icon: 4 rounded tiles in 2x2 grid with brand color progression
Wordmark: "PymePilot" in clean corporate type
"""
from PIL import Image, ImageDraw, ImageFont
import math

# ── Brand palette (4 shades: dark → green) ──
C1 = (41, 62, 64)      # #293E40  bottom-left
C2 = (61, 99, 98)      # #3D6362  bottom-right
C3 = (92, 143, 131)    # #5C8F83  top-left
C4 = (129, 181, 161)   # #81B5A1  top-right
WHITE = (255, 255, 255)
DARK_BG = (35, 50, 52)
OUT = "C:/claude-projects/pymepilot-landing"

# ── Draw icon at 2x for anti-aliasing ──
def draw_icon(sz, bg_color=WHITE):
    """Draw the 4-tile icon at given size, return Image."""
    # Render at 2x
    R = sz * 2
    scale = R / 32

    img = Image.new('RGB', (R, R), bg_color)
    d = ImageDraw.Draw(img)

    gap = 1.5
    tile = 13.5
    off = (32 - tile * 2 - gap) / 2  # 1.75

    def rect(col, row, color):
        x = off + col * (tile + gap)
        y = off + row * (tile + gap)
        d.rounded_rectangle(
            [int(x * scale), int(y * scale),
             int((x + tile) * scale), int((y + tile) * scale)],
            radius=int(2.8 * scale),
            fill=color
        )

    # 2x2 grid: color flows dark(BL) → green(TR)
    rect(0, 1, C1)   # bottom-left
    rect(1, 1, C2)   # bottom-right
    rect(0, 0, C3)   # top-left
    rect(1, 0, C4)   # top-right

    # Downscale for smooth anti-aliasing
    return img.resize((sz, sz), Image.LANCZOS)


# ── 1. Icon only (512x512) ──
print("1. Icon 512x512...")
icon = draw_icon(512)
icon.save(f"{OUT}/logo-corporate-icon.png", quality=95)

# ── 2. Full lockup (icon + wordmark) ──
print("2. Lockup preview...")
LOCKUP_W = 1200
LOCKUP_H = 400
lockup = Image.new('RGB', (LOCKUP_W, LOCKUP_H), WHITE)
ld = ImageDraw.Draw(lockup)

# Icon at 200px, vertically centered
icon_sz = 200
icon_img = draw_icon(icon_sz)
icon_y = (LOCKUP_H - icon_sz) // 2
lockup.paste(icon_img, (60, icon_y))

# Wordmark
try:
    font_regular = ImageFont.truetype("segoeui.ttf", 72)
    font_bold = ImageFont.truetype("segoeuib.ttf", 72)
    font_semi = ImageFont.truetype("seguisb.ttf", 72)
except:
    font_regular = ImageFont.load_default()
    font_bold = font_regular
    font_semi = font_regular

text_x = 60 + icon_sz + 14
text_y = LOCKUP_H // 2

# "Pyme" in dark, "Pilot" in green
ld.text((text_x, text_y), "Pyme", fill=C1, font=font_semi, anchor="lm")
pyme_w = ld.textlength("Pyme", font=font_semi)
ld.text((text_x + pyme_w, text_y), "Pilot", fill=C4, font=font_semi, anchor="lm")

lockup.save(f"{OUT}/logo-corporate-lockup.png", quality=95)

# ── 3. Dark background lockup ──
print("3. Dark lockup...")
lockup_dark = Image.new('RGB', (LOCKUP_W, LOCKUP_H), DARK_BG)
dd = ImageDraw.Draw(lockup_dark)
icon_dark = draw_icon(icon_sz, DARK_BG)
lockup_dark.paste(icon_dark, (60, icon_y))
dd.text((text_x, text_y), "Pyme", fill=WHITE, font=font_semi, anchor="lm")
pyme_w2 = dd.textlength("Pyme", font=font_semi)
dd.text((text_x + pyme_w2, text_y), "Pilot", fill=C4, font=font_semi, anchor="lm")
lockup_dark.save(f"{OUT}/logo-corporate-lockup-dark.png", quality=95)

# ── 4. Profile picture with lockup (1080x1080) ──
print("4. Profile 1080x1080 (icon + name)...")
profile = Image.new('RGB', (1080, 1080), WHITE)
pd = ImageDraw.Draw(profile)

# Icon centered horizontally, slightly above center
prof_icon_sz = 340
prof_icon = draw_icon(prof_icon_sz)
prof_icon_x = (1080 - prof_icon_sz) // 2
prof_icon_y = 260
profile.paste(prof_icon, (prof_icon_x, prof_icon_y))

# "PymePilot" text below icon
try:
    prof_font = ImageFont.truetype("seguisb.ttf", 96)
except:
    prof_font = ImageFont.load_default()

text_center_y = prof_icon_y + prof_icon_sz + 60
pyme_w_prof = pd.textlength("Pyme", font=prof_font)
pilot_w_prof = pd.textlength("Pilot", font=prof_font)
total_w = pyme_w_prof + pilot_w_prof
text_start_x = (1080 - total_w) / 2

pd.text((text_start_x, text_center_y), "Pyme", fill=C1, font=prof_font, anchor="lt")
pd.text((text_start_x + pyme_w_prof, text_center_y), "Pilot", fill=C4, font=prof_font, anchor="lt")

profile.save(f"{OUT}/logo-pymepilot-perfil.png", quality=95)

# ── 5. Comprehensive mockup ──
print("5. Mockup...")
MK_W, MK_H = 1500, 900
mk = Image.new('RGB', (MK_W, MK_H), (248, 248, 248))
md = ImageDraw.Draw(mk)

try:
    f_title = ImageFont.truetype("segoeuib.ttf", 20)
    f_label = ImageFont.truetype("segoeui.ttf", 14)
    f_nav = ImageFont.truetype("seguisb.ttf", 16)
except:
    f_title = ImageFont.load_default()
    f_label = f_title
    f_nav = f_title

# Top: lockup on white
md.rounded_rectangle([30, 20, MK_W - 30, 220], radius=12, fill=WHITE, outline=(230, 230, 230))
md.text((50, 30), "Lockup — fondo blanco", fill=(140, 140, 140), font=f_label)
lockup_small = lockup.resize((800, int(800 * LOCKUP_H / LOCKUP_W)), Image.LANCZOS)
mk.paste(lockup_small, (50, 55))

# Middle: lockup on dark
md.rounded_rectangle([30, 240, MK_W - 30, 440], radius=12, fill=DARK_BG)
md.text((50, 250), "Lockup — fondo oscuro", fill=(120, 140, 140), font=f_label)
lockup_dark_small = lockup_dark.resize((800, int(800 * LOCKUP_H / LOCKUP_W)), Image.LANCZOS)
mk.paste(lockup_dark_small, (50, 275))

# Bottom-left: navbar simulation
md.text((40, 470), "Navbar (32px icon)", fill=(140, 140, 140), font=f_label)
# White navbar
md.rounded_rectangle([30, 490, 700, 544], radius=8, fill=WHITE, outline=(230, 230, 230))
nav_icon = draw_icon(32)
mk.paste(nav_icon, (50, 498))
md.text((90, 517), "PymePilot", fill=C1, font=f_nav, anchor="lm")

# Dark navbar
md.rounded_rectangle([30, 556, 700, 610], radius=8, fill=DARK_BG)
nav_icon_d = draw_icon(32, DARK_BG)
mk.paste(nav_icon_d, (50, 564))
md.text((90, 583), "PymePilot", fill=WHITE, font=f_nav, anchor="lm")

# Bottom-right: size demos
base_x = 760
md.text((base_x, 470), "Escalas", fill=(140, 140, 140), font=f_label)
sizes = [(128, "128px"), (64, "64px"), (32, "32px"), (16, "16px")]
sx = base_x
for sz, label in sizes:
    md.rounded_rectangle([sx - 4, 490 - 4, sx + sz + 4, 490 + sz + 4], radius=4, fill=WHITE, outline=(230, 230, 230))
    ic = draw_icon(sz)
    mk.paste(ic, (sx, 490))
    md.text((sx + sz // 2, 498 + sz), label, fill=(140, 140, 140), font=f_label, anchor="mt")
    sx += sz + 30

# Favicon pixelated preview
md.text((base_x, 640), "Favicon 16px (x8 zoom)", fill=(140, 140, 140), font=f_label)
tiny = draw_icon(16)
zoomed = tiny.resize((128, 128), Image.NEAREST)
md.rounded_rectangle([base_x - 2, 660 - 2, base_x + 130, 790], radius=4, fill=WHITE, outline=(220, 220, 220))
mk.paste(zoomed, (base_x, 660))

mk.save(f"{OUT}/logo-corporate-mockup.png", quality=95)

print("\nDone! All files generated.")
