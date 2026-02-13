"""
PymePilot Logo v2 - Concepts Preview Generator
Generates two professional logo concepts for comparison.
"""
from PIL import Image, ImageDraw

SIZE = 1080
DARK = (41, 62, 64)        # #293E40
GREEN = (129, 181, 161)    # #81B5A1
WHITE = (255, 255, 255)
LIGHT_GRAY = (245, 245, 245)

# === Angular P shape definition (32x32 coordinate space) ===
# A bold, geometric P with a chevron-shaped bowl (no curves).
# The angular bowl evokes direction/navigation while the solid
# stem conveys stability. Far more architectural than a rounded P.

# Outer silhouette: stem + angular bowl
P_OUTER = [(6,3), (20,3), (28,13), (20,23), (14,23), (14,29), (6,29)]
# Counter (hole): chevron shape inside the bowl
P_COUNTER = [(14,8), (19,8), (23,13), (19,18), (14,18)]


def scale_pts(points, scale, ox, oy):
    return [(int(x * scale + ox), int(y * scale + oy)) for x, y in points]


def h_gradient(width, height, c1, c2):
    """Fast horizontal gradient using 1px row + resize."""
    row = Image.new('RGB', (width, 1))
    for x in range(width):
        t = x / max(width - 1, 1)
        row.putpixel((x, 0), tuple(int(a + (b - a) * t) for a, b in zip(c1, c2)))
    return row.resize((width, height), Image.NEAREST)


def diag_gradient(width, height, c1, c2):
    """Diagonal gradient (top-left to bottom-right)."""
    img = Image.new('RGB', (width, height))
    px = img.load()
    d = max(width + height - 2, 1)
    for y in range(height):
        for x in range(width):
            t = (x + y) / d
            px[x, y] = tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))
    return img


def p_mask(size, outer, counter):
    """Mask with P shape: outer filled, counter erased."""
    m = Image.new('L', (size, size), 0)
    d = ImageDraw.Draw(m)
    d.polygon(outer, fill=255)
    d.polygon(counter, fill=0)
    return m


# ─────────────────────────────────────────────
# CONCEPT A: "The Mark" — Gradient P, no background
#   Standalone angular P with horizontal gradient.
#   Modern, minimal. Like Stripe or Linear branding.
# ─────────────────────────────────────────────
def concept_a():
    S = 28
    OFS = (SIZE - 32 * S) // 2

    outer = scale_pts(P_OUTER, S, OFS, OFS)
    counter = scale_pts(P_COUNTER, S, OFS, OFS)

    img = Image.new('RGB', (SIZE, SIZE), WHITE)
    grad = h_gradient(SIZE, SIZE, DARK, GREEN)
    mask = p_mask(SIZE, outer, counter)
    img.paste(grad, (0, 0), mask)
    return img


# ─────────────────────────────────────────────
# CONCEPT B: "The Badge" — White angular P inside gradient rounded rect
#   Works on any background. App-icon style. Enterprise feel.
# ─────────────────────────────────────────────
def concept_b():
    BADGE = 780
    B_OFS = (SIZE - BADGE) // 2
    RADIUS = 140

    S = 19
    P_OFS = (SIZE - 32 * S) // 2

    outer = scale_pts(P_OUTER, S, P_OFS, P_OFS)
    counter = scale_pts(P_COUNTER, S, P_OFS, P_OFS)

    img = Image.new('RGB', (SIZE, SIZE), WHITE)

    # Gradient badge
    grad = diag_gradient(BADGE, BADGE, DARK, GREEN)
    bmask = Image.new('L', (BADGE, BADGE), 0)
    ImageDraw.Draw(bmask).rounded_rectangle([0, 0, BADGE-1, BADGE-1], radius=RADIUS, fill=255)
    img.paste(grad, (B_OFS, B_OFS), bmask)

    # White P on top
    white = Image.new('RGB', (SIZE, SIZE), WHITE)
    mask = p_mask(SIZE, outer, counter)
    img.paste(white, (0, 0), mask)

    return img


# ─────────────────────────────────────────────
# Generate
# ─────────────────────────────────────────────
OUT = "C:/claude-projects/pymepilot-landing"

a = concept_a()
a.save(f"{OUT}/logo-concept-a.png", quality=95)
print("Concept A saved: logo-concept-a.png (angular P, gradient, no background)")

b = concept_b()
b.save(f"{OUT}/logo-concept-b.png", quality=95)
print("Concept B saved: logo-concept-b.png (badge with white P)")
