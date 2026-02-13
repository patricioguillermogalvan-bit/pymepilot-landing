"""
PymePilot Logo v3 - 4 Abstract Concepts
No letters. Pure geometric/conceptual marks.
"""
from PIL import Image, ImageDraw

SIZE = 1080
DARK = (41, 62, 64)
GREEN = (129, 181, 161)
WHITE = (255, 255, 255)

SCALE = 28
OFS = (SIZE - 32 * SCALE) // 2  # 92

def s(x, y):
    return (int(x * SCALE + OFS), int(y * SCALE + OFS))

def sr(r):
    return int(r * SCALE)

# Pre-compute diagonal gradient (dark bottom-left → green top-right)
print("Computing gradient...")
grad = Image.new('RGB', (SIZE, SIZE))
px = grad.load()
d = max(SIZE * 2 - 2, 1)
dr, dg, db = DARK
cr, cg, cb = GREEN[0]-DARK[0], GREEN[1]-DARK[1], GREEN[2]-DARK[2]
for y in range(SIZE):
    base = SIZE - 1 - y
    for x in range(SIZE):
        t = (x + base) / d
        px[x, y] = (int(dr + cr*t), int(dg + cg*t), int(db + cb*t))
print("Gradient ready.\n")

def apply(mask):
    bg = Image.new('RGB', (SIZE, SIZE), WHITE)
    bg.paste(grad, (0, 0), mask)
    return bg

def save(img, name):
    p = f"C:/claude-projects/pymepilot-landing/logo-{name}.png"
    img.save(p, quality=95)
    print(f"  Saved: logo-{name}.png")


# ──────────────────────────────────────────
# CONCEPT 1: "NEXUS" — Connected ascending nodes
#   Three nodes linked by lines, ascending diagonal.
#   Symbolizes: workflow automation, connected systems, growth.
# ──────────────────────────────────────────
print("1. Nexus (connected nodes)...")
m = Image.new('L', (SIZE, SIZE), 0)
draw = ImageDraw.Draw(m)

nodes = [(8, 24), (16, 15), (24, 7)]
lw = sr(1.8)

for i in range(len(nodes) - 1):
    draw.line([s(*nodes[i]), s(*nodes[i+1])], fill=255, width=lw)

for i, (nx, ny) in enumerate(nodes):
    r = sr(3.8 if i == 1 else 3)
    cx, cy = s(nx, ny)
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=255)

save(apply(m), "nexus")


# ──────────────────────────────────────────
# CONCEPT 2: "SIGNAL" — Expanding arcs from origin
#   Three concentric quarter-arcs radiating upward-right.
#   Symbolizes: growth, broadcast, expanding reach, signal.
# ──────────────────────────────────────────
print("2. Signal (expanding arcs)...")
m = Image.new('L', (SIZE, SIZE), 0)
draw = ImageDraw.Draw(m)

origin = s(6, 26)
arc_w = sr(2.5)

for r_unit in [8, 14, 20]:
    r = sr(r_unit)
    bbox = [origin[0]-r, origin[1]-r, origin[0]+r, origin[1]+r]
    draw.arc(bbox, start=-90, end=0, fill=255, width=arc_w)

dot_r = sr(2.8)
draw.ellipse([origin[0]-dot_r, origin[1]-dot_r, origin[0]+dot_r, origin[1]+dot_r], fill=255)

save(apply(m), "signal")


# ──────────────────────────────────────────
# CONCEPT 3: "NORTH STAR" — Geometric 4-pointed star
#   Asymmetric star with N/E points longer (upper-right emphasis).
#   Symbolizes: navigation, direction, guidance, piloting.
# ──────────────────────────────────────────
print("3. North Star (compass star)...")
m = Image.new('L', (SIZE, SIZE), 0)
draw = ImageDraw.Draw(m)

star_points = [
    s(16, 2),    # N (long — emphasis)
    s(20, 12),   # inner NE
    s(30, 16),   # E (long — emphasis)
    s(20, 20),   # inner SE
    s(16, 28),   # S (shorter)
    s(12, 20),   # inner SW
    s(2, 16),    # W (shorter)
    s(12, 12),   # inner NW
]
draw.polygon(star_points, fill=255)

save(apply(m), "star")


# ──────────────────────────────────────────
# CONCEPT 4: "CIRCUIT" — Ascending workflow pathway
#   Right-angle path connecting nodes, staircase pattern.
#   Symbolizes: automated workflows, systematic processes, optimization.
# ──────────────────────────────────────────
print("4. Circuit (workflow pathway)...")
m = Image.new('L', (SIZE, SIZE), 0)
draw = ImageDraw.Draw(m)

segments = [
    ((7, 25), (7, 16)),
    ((7, 16), (16, 16)),
    ((16, 16), (16, 7)),
    ((16, 7), (25, 7)),
]
seg_w = sr(1.8)

for p1, p2 in segments:
    draw.line([s(*p1), s(*p2)], fill=255, width=seg_w)

node_defs = [
    (7, 25, 3.2),    # start node
    (7, 16, 2),       # turn (small)
    (16, 16, 4),      # central hub (large)
    (16, 7, 2),       # turn (small)
    (25, 7, 3.2),     # end node
]
for nx, ny, ru in node_defs:
    r = sr(ru)
    cx, cy = s(nx, ny)
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=255)

save(apply(m), "circuit")

print("\nDone! 4 concepts generated.")
