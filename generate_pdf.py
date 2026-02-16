"""
PymePilot — Lead Magnet PDF
"Guía Práctica: Cómo Dejar de Perder Clientes en Tu Distribuidora Mayorista"
8 pages — actionable frameworks, real data, educational value.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import Color, HexColor
from reportlab.pdfgen.canvas import Canvas
import os

# ─── Brand palette ───────────────────────────────────────────────
BG       = HexColor("#111b1d")
BG2      = HexColor("#182628")
BG3      = HexColor("#1e3234")
CARD     = HexColor("#1a2f32")
CARD2    = HexColor("#213a3d")
GREEN    = HexColor("#81B5A1")
GREEN_D  = HexColor("#5a9a84")
GREEN_L  = HexColor("#a3cabb")
GREEN_XL = HexColor("#d0e8dd")
WHITE    = HexColor("#FFFFFF")
T1       = HexColor("#E8EEEF")  # primary text
T2       = HexColor("#B0BFC2")  # secondary text
T3       = HexColor("#7A8E91")  # tertiary text
T4       = HexColor("#526466")  # dim text
RED      = HexColor("#F87171")
ORANGE   = HexColor("#FB923C")
YELLOW   = HexColor("#FACC15")
BORDER   = HexColor("#2d4a4d")

W, H = A4  # 595 × 842
M = 50     # generous margin
CW = W - 2*M  # ~495

# ─── Helpers ─────────────────────────────────────────────────────

def _bg(c):
    c.saveState(); c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0); c.restoreState()

def _rrect(c, x, y, w, h, r=8, fill=None, stroke=None, sw=1):
    c.saveState()
    if fill: c.setFillColor(fill)
    if stroke: c.setStrokeColor(stroke); c.setLineWidth(sw)
    p = c.beginPath(); p.roundRect(x, y, w, h, r)
    c.drawPath(p, fill=1 if fill else 0, stroke=1 if stroke else 0)
    c.restoreState()

def _txt(c, x, y, t, sz=10, col=WHITE, bold=False, align="left"):
    c.saveState(); c.setFillColor(col)
    f = "Helvetica-Bold" if bold else "Helvetica"
    c.setFont(f, sz)
    if align == "center": c.drawCentredString(x, y, t)
    elif align == "right": c.drawRightString(x, y, t)
    else: c.drawString(x, y, t)
    c.restoreState()

def _wrap(c, x, y, t, sz=10, col=WHITE, bold=False, lead=14, mw=495, align="left"):
    f = "Helvetica-Bold" if bold else "Helvetica"
    c.saveState(); c.setFillColor(col); c.setFont(f, sz)
    words = t.split(); lines = []; cur = ""
    for w in words:
        test = f"{cur} {w}".strip()
        if c.stringWidth(test, f, sz) <= mw:
            cur = test
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    for line in lines:
        if align == "center":
            c.drawCentredString(x, y, line)
        else:
            c.drawString(x, y, line)
        y -= lead
    c.restoreState()
    return y

def _line(c, x1, y1, x2, y2, col=BORDER, w=0.5):
    c.saveState(); c.setStrokeColor(col); c.setLineWidth(w)
    c.line(x1, y1, x2, y2); c.restoreState()

def _header(c, pg, total=8):
    """Elegant top bar with thin green accent."""
    c.saveState()
    c.setFillColor(GREEN_D)
    c.rect(0, H - 3, W, 3, fill=1, stroke=0)
    c.restoreState()
    # Page number (top right)
    _txt(c, W - M, H - 22, f"{pg}/{total}", sz=7, col=T4, align="right")

def _footer(c):
    _line(c, M, 34, W - M, 34, col=BORDER, w=0.4)
    _txt(c, M, 20, "PymePilot", sz=7, col=GREEN_D, bold=True)
    _txt(c, M + 52, 20, "·  pymepilot.cloud", sz=7, col=T4)
    _txt(c, W - M, 20, "Guía Práctica — Distribuidoras Mayoristas", sz=7, col=T4, align="right")

def _insight_box(c, x, y, w, text, sz=9.5, lead=14):
    """Left-bordered insight/tip box."""
    lines = []
    f = "Helvetica"
    cur = ""
    for word in text.split():
        test = f"{cur} {word}".strip()
        if c.stringWidth(test, f, sz) <= w - 24:
            cur = test
        else:
            if cur: lines.append(cur)
            cur = word
    if cur: lines.append(cur)
    h = max(len(lines) * lead + 20, 36)
    _rrect(c, x, y - h, w, h, r=6, fill=CARD)
    # Green left border
    c.saveState(); c.setFillColor(GREEN_D)
    c.rect(x, y - h + 6, 3, h - 12, fill=1, stroke=0); c.restoreState()
    ty = y - 14
    c.saveState(); c.setFillColor(GREEN_L); c.setFont("Helvetica", sz)
    for line in lines:
        c.drawString(x + 16, ty, line)
        ty -= lead
    c.restoreState()
    return y - h

def _stat_callout(c, x, y, value, label, col=GREEN):
    """Big number with small label underneath."""
    _txt(c, x, y, value, sz=32, col=col, bold=True, align="center")
    _txt(c, x, y - 18, label, sz=8, col=T2, align="center")
    return y - 40

def _num_step(c, x, y, num, title, desc, desc_mw=420):
    """Numbered step with large number accent."""
    _txt(c, x, y + 2, num, sz=28, col=GREEN_D, bold=True)
    _txt(c, x + 30, y + 6, title, sz=11, col=WHITE, bold=True)
    end_y = _wrap(c, x + 30, y - 10, desc, sz=9, col=T2, lead=13, mw=desc_mw)
    return end_y - 4


# ═════════════════════════════════════════════════════════════════
output = os.path.join(os.path.dirname(os.path.abspath(__file__)), "PymePilot_Guia_Distribuidoras.pdf")
c = Canvas(output, pagesize=A4)

# ─────────────────────────────────────────────────────────────────
#  PAGE 1 — COVER
# ─────────────────────────────────────────────────────────────────
_bg(c)

# Top accent bar (thicker, gradient feel with 2 bars)
c.saveState(); c.setFillColor(GREEN_D)
c.rect(0, H - 4, W, 4, fill=1, stroke=0); c.restoreState()
c.saveState(); c.setFillColor(Color(0.35, 0.60, 0.50, alpha=0.15))
c.rect(0, H - 20, W, 16, fill=1, stroke=0); c.restoreState()

# PymePilot logo area (minimal)
_txt(c, M, H - 50, "PYMEPILOT", sz=10, col=GREEN, bold=True)
_line(c, M + 72, H - 47, M + 72 + 30, H - 47, col=GREEN_D, w=1)
_txt(c, M + 108, H - 50, "GUÍA PRÁCTICA", sz=8, col=T3)

# Decorative circle (top right, subtle)
c.saveState()
c.setFillColor(Color(0.35, 0.71, 0.63, alpha=0.06))
c.circle(W - 40, H - 80, 180, fill=1, stroke=0)
c.restoreState()

# Main title block
y = H - 160
_txt(c, M, y, "Cómo dejar de perder", sz=34, col=WHITE, bold=True)
y -= 42
_txt(c, M, y, "clientes en tu", sz=34, col=WHITE, bold=True)
y -= 42
_txt(c, M, y, "distribuidora", sz=34, col=GREEN, bold=True)

y -= 50
_line(c, M, y, M + 60, y, col=GREEN_D, w=2)

y -= 30
y = _wrap(c, M, y,
    "Frameworks, fórmulas y plantillas probadas en distribuidoras "
    "mayoristas argentinas. Basado en 6 meses de datos reales.",
    sz=12, col=T2, lead=18, mw=380)

y -= 20

# What you'll learn — elegant list
items = [
    "El patrón de 5 etapas por el que tus clientes desaparecen",
    "La fórmula exacta para calcular ciclos de reposición",
    "Sistema de alertas Amarillo / Naranja / Rojo",
    "Plantillas de mensajes WhatsApp con 71% de respuesta",
    "Diagnóstico de 10 señales para tu distribuidora",
    "Plan de implementación de 30 días paso a paso",
]
for item in items:
    _txt(c, M + 2, y, "—", sz=10, col=GREEN_D, bold=True)
    _txt(c, M + 18, y, item, sz=10, col=T1)
    y -= 20

y -= 30

# Bottom credential bar
_rrect(c, M, y - 4, CW, 38, r=8, fill=CARD, stroke=BORDER, sw=0.6)
_txt(c, M + 16, y + 6, "Datos reales de IEY®", sz=8, col=GREEN, bold=True)
_txt(c, M + 130, y + 6, "·  Distribuidora #1 MagSafe en Argentina  ·  6 meses operativos", sz=8, col=T3)

# Bottom decorative element
c.saveState()
c.setFillColor(Color(0.35, 0.71, 0.63, alpha=0.04))
c.circle(M + 40, 100, 120, fill=1, stroke=0)
c.restoreState()

_footer(c)
_header(c, 1)
c.showPage()


# ─────────────────────────────────────────────────────────────────
#  PAGE 2 — EL PATRÓN INVISIBLE
# ─────────────────────────────────────────────────────────────────
_bg(c)
_header(c, 2)

y = H - 55
_txt(c, M, y, "01", sz=36, col=GREEN_D, bold=True)
_txt(c, M + 50, y + 4, "El patrón invisible", sz=20, col=WHITE, bold=True)
y -= 14
_txt(c, M + 50, y, "Por qué el 68% de tus clientes desaparece en silencio", sz=10, col=T3)

y -= 35
y = _wrap(c, M, y,
    "IEY® analizó su base de clientes mayoristas durante 6 meses y descubrió que "
    "el 68% de los nuevos clientes dejó de comprar antes de los 3 meses. No se "
    "quejaron, no avisaron. Simplemente desaparecieron.",
    sz=10, col=T2, lead=15, mw=CW)

y -= 14

# The 5-stage decay pattern
_txt(c, M, y, "Las 5 etapas del deterioro silencioso", sz=13, col=WHITE, bold=True)
y -= 8
_txt(c, M, y, "Documentado en distribuidora con 150+ clientes mayoristas", sz=8, col=T4)
y -= 22

stages = [
    ("1", "Compra inicial fuerte", "Ticket promedio: $800.000 ARS. Todo parece bien.", T1),
    ("2", "Mes 2: Recompra al 50-70%", "El ticket baja pero sigue comprando. Nadie lo nota.", T2),
    ("3", "Mes 3: Silencio", "No pide, no escribe. Tu equipo está ocupado con clientes nuevos.", ORANGE),
    ("4", "Mes 4: Silencio total", "Ya está comprando a tu competencia. Pero vos no lo sabés.", RED),
    ("5", "Mes 6: Cliente perdido", "Cuando te das cuenta, ya tiene otro proveedor instalado.", RED),
]
for num, title, desc, col in stages:
    # Step number
    _rrect(c, M, y - 6, 24, 24, r=12, fill=CARD2)
    _txt(c, M + 12, y - 1, num, sz=10, col=col, bold=True, align="center")
    _txt(c, M + 34, y, title, sz=10, col=col, bold=True)
    _txt(c, M + 34, y - 14, desc, sz=8.5, col=T3)
    y -= 38

y -= 12

# Cost math box
_rrect(c, M, y - 100, CW, 100, r=10, fill=CARD, stroke=BORDER, sw=0.6)
_txt(c, M + 16, y - 16, "Lo que realmente te cuesta", sz=11, col=WHITE, bold=True)
_line(c, M + 16, y - 26, M + 180, y - 26, col=BORDER, w=0.4)

costs = [
    ("Costo de adquisición por cliente:", "$80.000–$150.000 ARS", T2, T1),
    ("Ticket mensual promedio perdido:", "$400.000 ARS/mes", T2, ORANGE),
    ("LTV no capturado por cliente:", "$4.800.000 ARS (12 meses)", T2, RED),
]
cy = y - 42
for label, value, lc, vc in costs:
    _txt(c, M + 16, cy, label, sz=9, col=lc)
    _txt(c, W - M - 16, cy, value, sz=9, col=vc, bold=True, align="right")
    cy -= 18

y -= 100 + 20

# Insight
y = _insight_box(c, M, y, CW,
    "Es como un grifo que gotea. Perdés 10 litros por día pero no lo notás hasta que llega la factura del agua. Con 68 clientes perdidos × $4.8M = $326M ARS dejados sobre la mesa.")

y -= 16

# Key stat callout
_rrect(c, M, y - 50, CW, 50, r=8, fill=BG3)
_txt(c, M + 16, y - 22, "Si un cliente mayorista pasa 45+ días sin comprar,", sz=9.5, col=T2)
_txt(c, M + 16, y - 38, "hay un 67% de probabilidad de que ya compró a tu competencia.", sz=9.5, col=ORANGE, bold=True)

_footer(c)
c.showPage()


# ─────────────────────────────────────────────────────────────────
#  PAGE 3 — EL CICLO DE REPOSICIÓN
# ─────────────────────────────────────────────────────────────────
_bg(c)
_header(c, 3)

y = H - 55
_txt(c, M, y, "02", sz=36, col=GREEN_D, bold=True)
_txt(c, M + 50, y + 4, "El ciclo de reposición", sz=20, col=WHITE, bold=True)
y -= 14
_txt(c, M + 50, y, "La fórmula para anticiparte a tu cliente", sz=10, col=T3)

y -= 30

# Dentist analogy
y = _insight_box(c, M, y, CW,
    "Tu dentista no espera a que lo llames cuando te acordás que hace 8 meses no vas. Tiene tu historial y cuando se acerca el mes 6, te manda un mensaje. Tu distribuidora puede hacer exactamente lo mismo.")

y -= 22

# Reactive vs Proactive comparison
_txt(c, M, y, "Modelo reactivo vs. proactivo", sz=12, col=WHITE, bold=True)
y -= 22

# Two columns
col_w = (CW - 16) / 2

# Reactive
_rrect(c, M, y - 100, col_w, 100, r=8, fill=CARD, stroke=HexColor("#4a3030"), sw=0.8)
_txt(c, M + 14, y - 16, "Reactivo (hoy)", sz=10, col=RED, bold=True)
reactive_steps = [
    "Cliente necesita producto",
    "Escribe a 3-4 proveedores",
    "Compite por precio y velocidad",
    "Gana el más rápido o barato",
]
ry = y - 34
for step in reactive_steps:
    _txt(c, M + 14, ry, "→  " + step, sz=8, col=T3)
    ry -= 14

# Proactive
px = M + col_w + 16
_rrect(c, px, y - 100, col_w, 100, r=8, fill=CARD, stroke=GREEN_D, sw=0.8)
_txt(c, px + 14, y - 16, "Proactivo (con datos)", sz=10, col=GREEN, bold=True)
proactive_steps = [
    "Sistema detecta momento de reposición",
    "VOS contactás ANTES que necesite",
    "Cliente: \"Justo necesitaba eso\"",
    "Pedido cerrado sin competencia",
]
ry = y - 34
for step in proactive_steps:
    _txt(c, px + 14, ry, "→  " + step, sz=8, col=GREEN_L)
    ry -= 14

y -= 126

# The 4-step formula
_txt(c, M, y, "Fórmula de 4 pasos (implementable en Excel)", sz=12, col=WHITE, bold=True)
y -= 24

steps_data = [
    ("1", "Calcular el ciclo de reposición",
     "Promedio de días entre compras por cliente. Ej: compras el 15/1, 5/2 (21d), 28/2 (23d), 22/3 (23d) = promedio 22.8 → 23 días."),
    ("2", "Fecha esperada de próxima compra",
     "Fecha última compra + ciclo de reposición = fecha esperada. Si compró el 8/5 y su ciclo es 23 días → esperar compra el 31/5."),
    ("3", "Ventana óptima de contacto",
     "Contactar 3-5 días ANTES de la fecha esperada. 10 días antes = muy temprano. El mismo día = ya compró a otro. 3-5 días = momento justo."),
    ("4", "Ajustar por desviación estándar",
     "Desvío <3 días: cliente regular → contactar 4 días antes. Desvío 3-7: semi-regular → 6 días antes. Desvío >7: errático → intervalo fijo cada 30 días."),
]
for num, title, desc in steps_data:
    y -= 6
    y = _num_step(c, M, y, num, title, desc, desc_mw=CW - 35)
    y -= 2

y -= 10

# Impact comparison
_rrect(c, M, y - 68, CW, 68, r=8, fill=BG3)
row_y = y - 14
_txt(c, M + 16, row_y, "Conversión de mensajes:", sz=9, col=T3)
_txt(c, M + CW/3, row_y, "Genérico: 22%", sz=9, col=RED, bold=True, align="center")
_txt(c, M + 2*CW/3, row_y, "Personalizado: 48%", sz=9, col=YELLOW, bold=True, align="center")
row_y -= 18
_txt(c, M + 16, row_y, "Ticket promedio:", sz=9, col=T3)
_txt(c, M + CW/3, row_y, "Reactivo: $320K", sz=9, col=T2, align="center")
_txt(c, M + 2*CW/3, row_y, "Proactivo: $480K (+50%)", sz=9, col=GREEN, bold=True, align="center")
row_y -= 18
_txt(c, M + 16, row_y, "Cumplimiento a tiempo:", sz=9, col=T3)
_txt(c, M + CW/3, row_y, "71%", sz=9, col=T2, align="center")
_txt(c, M + 2*CW/3, row_y, "95%", sz=9, col=GREEN, bold=True, align="center")

_footer(c)
c.showPage()


# ─────────────────────────────────────────────────────────────────
#  PAGE 4 — SISTEMA DE ALERTAS Y SEGMENTACIÓN
# ─────────────────────────────────────────────────────────────────
_bg(c)
_header(c, 4)

y = H - 55
_txt(c, M, y, "03", sz=36, col=GREEN_D, bold=True)
_txt(c, M + 50, y + 4, "Sistema de alertas", sz=20, col=WHITE, bold=True)
y -= 14
_txt(c, M + 50, y, "Priorizar a quién contactar y cuándo", sz=10, col=T3)

y -= 32

# 3-level alert system
_txt(c, M, y, "Semáforo de contacto (3 niveles)", sz=12, col=WHITE, bold=True)
y -= 22

alerts = [
    ("AMARILLA", "+5 días sobre patrón", "Monitorear. No contactar aún. Solo observar si el cliente vuelve solo.", YELLOW, HexColor("#3a3520")),
    ("NARANJA", "+10 días sobre patrón", "Preparar mensaje personalizado. Revisar historial de compras y redactar contacto.", ORANGE, HexColor("#3a2a18")),
    ("ROJA", "+20 días sobre patrón", "Contactar HOY. Alto riesgo de pérdida. Este cliente probablemente está evaluando competencia.", RED, HexColor("#3a1e1e")),
]
for name, trigger, action, col, bg_col in alerts:
    box_h = 56
    box_y = y - box_h
    _rrect(c, M, box_y, CW, box_h, r=8, fill=bg_col)
    # Color indicator bar — inset within rounded corners
    c.saveState(); c.setFillColor(col)
    c.rect(M + 1, box_y + 8, 3, box_h - 16, fill=1, stroke=0); c.restoreState()

    _txt(c, M + 16, y - 16, f"Alerta {name}", sz=10, col=col, bold=True)
    _txt(c, M + 130, y - 16, trigger, sz=9, col=T2)
    _wrap(c, M + 16, y - 34, action, sz=8.5, col=T3, lead=12, mw=CW - 32)
    y -= box_h + 10

y -= 8

# Client segmentation
_txt(c, M, y, "Segmentación para campañas de recuperación", sz=12, col=WHITE, bold=True)
y -= 22

segments = [
    ("A", "Alta prioridad", "Ticket >$500K/mes · 60-90 días inactivo · Patrón claro", "Foco principal. Máximo potencial de recuperación.", GREEN),
    ("B", "Media prioridad", "Ticket $300-500K/mes · 90-120 días inactivo", "Segundo foco. Requiere incentivo para volver.", YELLOW),
    ("C", "Baja prioridad", "Ticket bajo o errático · 120+ días inactivo", "Probablemente perdido. No invertir tiempo aquí.", RED),
]
for letter, label, criteria, action, col in segments:
    _rrect(c, M, y - 64, CW, 64, r=8, fill=CARD)
    # Letter badge — vertically centered in card
    _rrect(c, M + 12, y - 48, 32, 32, r=6, fill=CARD2, stroke=col, sw=1)
    _txt(c, M + 28, y - 37, letter, sz=16, col=col, bold=True, align="center")
    # Content — aligned to top of card
    _txt(c, M + 56, y - 16, label, sz=10, col=col, bold=True)
    _txt(c, M + 56, y - 32, criteria, sz=8, col=T3)
    _txt(c, M + 56, y - 48, action, sz=8.5, col=T2)
    y -= 74

y -= 4

# Cadence
_txt(c, M, y, "Cadencia de contacto: la regla 15-30-45", sz=12, col=WHITE, bold=True)
y -= 22

cadence = [
    ("Día 15", "Toque suave", "\"¿Llegó todo bien? ¿Necesitás algo?\"", GREEN_L),
    ("Día 30", "Valor", "Nuevos modelos, tips de rotación, tendencias", T1),
    ("Día 45+", "Proactiva", "\"¿Necesitás reponer? Tenemos stock de [producto].\"", GREEN),
]
for day, tipo, msg, col in cadence:
    _txt(c, M + 2, y, day, sz=9, col=col, bold=True)
    _txt(c, M + 62, y, tipo, sz=9, col=WHITE, bold=True)
    _txt(c, M + 150, y, msg, sz=8, col=T3)
    y -= 20

y -= 8
y = _insight_box(c, M, y, CW,
    "Frecuencia ideal: 1 mensaje cada 15-20 días. No más (spam). No menos (te olvidan). Con 50 mensajes de WhatsApp por día que recibe tu cliente, si pasás 60 días sin escribirle, cuando necesite producto va a buscar en Google y encontrar a otro.")

_footer(c)
c.showPage()


# ─────────────────────────────────────────────────────────────────
#  PAGE 5 — MENSAJES QUE FUNCIONAN
# ─────────────────────────────────────────────────────────────────
_bg(c)
_header(c, 5)

y = H - 55
_txt(c, M, y, "04", sz=36, col=GREEN_D, bold=True)
_txt(c, M + 50, y + 4, "Mensajes que funcionan", sz=20, col=WHITE, bold=True)
y -= 14
_txt(c, M + 50, y, "De 22% a 71% de tasa de respuesta", sz=10, col=T3)

y -= 30

# Personalization levels
_txt(c, M, y, "3 niveles de personalización (datos reales IEY®)", sz=12, col=WHITE, bold=True)
y -= 24

levels = [
    ("Genérico", "\"Hola, tenemos ofertas esta semana.\"", "22%", RED, HexColor("#3a1e1e")),
    ("Personalizado básico", "\"Hola Juan, ¿necesitás reponer fundas MagSafe?\"", "48%", YELLOW, HexColor("#3a3520")),
    ("Personalizado avanzado", "\"Hola Juan, vi que hace 25 días compraste fundas MagSafe. ¿Necesitás reponer esta semana? Tenemos stock del modelo que siempre llevás.\"", "71%", GREEN, HexColor("#1e3a2c")),
]
for label, example, rate, col, bg_col in levels:
    # Pre-calculate actual wrapped lines for correct box height
    _fn = "Helvetica"
    _mw = CW - 100
    _words = example.split(); _lines = []; _cur = ""
    for _w in _words:
        _test = f"{_cur} {_w}".strip()
        if c.stringWidth(_test, _fn, 8.5) <= _mw:
            _cur = _test
        else:
            if _cur: _lines.append(_cur)
            _cur = _w
    if _cur: _lines.append(_cur)
    box_h = max(52, 38 + len(_lines) * 13)
    _rrect(c, M, y - box_h, CW, box_h, r=8, fill=bg_col)
    # Rate badge — inside box, top-right
    _rrect(c, W - M - 68, y - 6 - 20, 54, 20, r=6, fill=CARD2, stroke=col, sw=0.8)
    _txt(c, W - M - 41, y - 12 - 6, rate, sz=11, col=col, bold=True, align="center")
    _txt(c, M + 14, y - 16, label, sz=10, col=col, bold=True)
    _wrap(c, M + 14, y - 34, example, sz=8.5, col=T3, lead=13, mw=_mw)
    y -= box_h + 8

y -= 6

# Message template
_txt(c, M, y, "Plantilla de mensaje para recuperación", sz=12, col=WHITE, bold=True)
y -= 20

_rrect(c, M, y - 150, CW, 150, r=10, fill=CARD, stroke=GREEN_D, sw=0.8)
template_lines = [
    ("Hola [Nombre], ¿cómo estás?", WHITE),
    ("", WHITE),
    ("Vi que hace [X] días no te vemos por acá.", T2),
    ("Normalmente comprás [producto] cada [Y] días.", T2),
    ("", WHITE),
    ("Tenemos stock de [productos que siempre lleva].", GREEN_L),
    ("[OPCIONAL: promoción relevante o producto nuevo]", GREEN_L),
    ("", WHITE),
    ("¿Necesitás reponer esta semana o estás cubierto?", WHITE),
    ("", WHITE),
    ("Saludos, [Tu nombre]", T3),
]
ty = y - 12
for line, col in template_lines:
    if line:
        _txt(c, M + 16, ty, line, sz=8.5, col=col)
    ty -= 12

y -= 170

# Why it works
_txt(c, M, y, "Por qué funciona:", sz=10, col=WHITE, bold=True)
y -= 18
reasons = [
    ("Personalizado", "— menciona su patrón específico, no es genérico"),
    ("Proactivo", "— ofrece solución, no solo pregunta"),
    ("Sin presión", "— pregunta abierta, da espacio para decidir"),
]
for bold_part, rest in reasons:
    _txt(c, M + 12, y, bold_part, sz=9, col=GREEN, bold=True)
    _txt(c, M + 12 + c.stringWidth(bold_part, "Helvetica-Bold", 9) + 4, y, rest, sz=9, col=T3)
    y -= 16

y -= 12

# Timing data
_txt(c, M, y, "Mejor momento para contactar (datos reales)", sz=12, col=WHITE, bold=True)
y -= 20

_rrect(c, M, y - 88, CW, 88, r=8, fill=CARD)
# Table header
_txt(c, M + 16, y - 14, "Día / Hora", sz=8, col=T4, bold=True)
_txt(c, M + 180, y - 14, "Respuesta", sz=8, col=T4, bold=True, align="center")
_txt(c, M + 280, y - 14, "Conversión", sz=8, col=T4, bold=True, align="center")
_txt(c, M + 400, y - 14, "Rating", sz=8, col=T4, bold=True, align="center")
_line(c, M + 16, y - 22, W - M - 16, y - 22, col=BORDER, w=0.3)

timing = [
    ("Martes 9-11am", "71%", "48%", "ÓPTIMO", GREEN),
    ("Lunes / Miérc / Juev 9-11am", "58-65%", "35-42%", "Bueno", T1),
    ("Viernes mañana", "48%", "28%", "Regular", YELLOW),
    ("Viernes tarde / Fines de semana", "8-22%", "3-12%", "Evitar", RED),
]
ty = y - 36
for day, resp, conv, rating, col in timing:
    _txt(c, M + 16, ty, day, sz=8, col=T2)
    _txt(c, M + 180, ty, resp, sz=8, col=T1, align="center")
    _txt(c, M + 280, ty, conv, sz=8, col=T1, align="center")
    _txt(c, M + 400, ty, rating, sz=8, col=col, bold=True, align="center")
    ty -= 15

_footer(c)
c.showPage()


# ─────────────────────────────────────────────────────────────────
#  PAGE 6 — PLAN DE 30 DÍAS
# ─────────────────────────────────────────────────────────────────
_bg(c)
_header(c, 6)

y = H - 55
_txt(c, M, y, "05", sz=36, col=GREEN_D, bold=True)
_txt(c, M + 50, y + 4, "Plan de 30 días", sz=20, col=WHITE, bold=True)
y -= 14
_txt(c, M + 50, y, "De cero a sistema operativo en 4 semanas", sz=10, col=T3)

y -= 32

weeks = [
    ("SEMANA 1", "Setup y preparación", [
        ("Días 1-2", "Recopilar datos de ventas (3-4 hs)", "Exportar historial de tu ERP/Excel. Necesitás: cliente, fecha, productos, monto."),
        ("Días 3-4", "Analizar patrones (2-3 hs)", "Calcular ciclo de reposición por cliente. Segmentar en Regular / Semi-regular / Errático."),
        ("Días 5-7", "Configurar herramienta (2-4 hs)", "Armar la planilla con alertas de colores. Priorizar top 20% (Pareto) de tu base."),
    ], GREEN_D),
    ("SEMANA 2", "Piloto con 10 clientes", [
        ("Selección", "Elegir 10 clientes regulares", "Ticket medio-alto, patrón claro de compra. NO empezar con los más difíciles."),
        ("Ejecución", "Contactar en su ventana óptima", "Mensaje personalizado avanzado (plantilla pág. 5). Medir respuesta."),
        ("Medición", "Evaluar resultados (1 hora)", "Si respuesta <50% → revisar mensajes. Si conversión baja → revisar timing."),
    ], GREEN),
    ("SEMANA 3", "Escalar a toda la base", [
        ("Rutina diaria", "9am: revisar dashboard", "10-12am: enviar mensajes. 3pm: responder. 6pm: actualizar planilla."),
        ("Troubleshooting", "Sin respuestas → probar horarios", "Responden pero no compran → preguntar por qué. Toma mucho tiempo → crear templates."),
        ("Tiempo", "Inicialmente 2-3 hs/día", "Después de 2 semanas: 1 hora/día. El sistema se vuelve eficiente."),
    ], GREEN_L),
    ("SEMANA 4", "Optimizar y documentar", [
        ("Comparar", "Semana 1 vs Semana 3", "Medir: tasa de respuesta, conversión, ticket promedio, facturación incremental."),
        ("Documentar", "Crear SOP para tu equipo", "Proceso paso a paso para que cualquier vendedor lo replique."),
        ("Metas mes 2", "Objetivos", "65%+ respuesta, 45%+ conversión, +30% facturación incremental."),
    ], WHITE),
]

for week_name, week_title, tasks, col in weeks:
    # Week header
    _rrect(c, M, y - 6, CW, 24, r=6, fill=CARD2)
    _txt(c, M + 12, y - 1, week_name, sz=9, col=col, bold=True)
    _txt(c, M + 100, y - 1, week_title, sz=9, col=T2)
    y -= 34

    for label, action, detail in tasks:
        _txt(c, M + 12, y, label, sz=8, col=col, bold=True)
        _txt(c, M + 90, y, action, sz=8, col=T1)
        _txt(c, M + 12, y - 13, detail, sz=7.5, col=T4)
        y -= 30

    y -= 8

y -= 4
y = _insight_box(c, M, y, CW,
    "Consejo: No intentes automatizar todo desde el día 1. Validá el concepto manualmente con 10 clientes antes de escalar. Los 2 primeros meses manuales te dan el conocimiento para automatizar correctamente después.")

_footer(c)
c.showPage()


# ─────────────────────────────────────────────────────────────────
#  PAGE 7 — DIAGNÓSTICO DE 10 SEÑALES
# ─────────────────────────────────────────────────────────────────
_bg(c)
_header(c, 7)

y = H - 55
_txt(c, M, y, "06", sz=36, col=GREEN_D, bold=True)
_txt(c, M + 50, y + 4, "Diagnóstico rápido", sz=20, col=WHITE, bold=True)
y -= 14
_txt(c, M + 50, y, "10 señales de que estás perdiendo clientes y dinero", sz=10, col=T3)

y -= 28
y = _wrap(c, M, y,
    "Marcá cuántas de estas situaciones aplican a tu distribuidora hoy. "
    "Sé honesto — este diagnóstico es para vos, no para nosotros.",
    sz=10, col=T2, lead=15, mw=CW)

y -= 10

signals = [
    "No sabés cuándo debería recomprar cada cliente",
    "Más del 30% de tu base está inactiva (60+ días sin comprar)",
    "El seguimiento es reactivo: contactás cuando vos podés, no cuando el cliente necesita",
    "Tus vendedores pasan +50% del tiempo en tareas administrativas",
    "No medís la tasa de respuesta de tus mensajes de WhatsApp",
    "Perdiste clientes sin saber por qué se fueron",
    "Tu base de datos de clientes está desactualizada o incompleta",
    "No hacés check-ins regulares con tu top 20% de clientes",
    "No sabés cuál es el LTV promedio de tus clientes",
    "Tus vendedores contactan clientes \"cuando se acuerdan\"",
]
for i, signal in enumerate(signals):
    # Checkbox — aligned with first line of text
    _rrect(c, M + 2, y - 3, 14, 14, r=3, fill=None, stroke=T4, sw=0.8)
    end_y = _wrap(c, M + 24, y, signal, sz=9, col=T1, lead=13, mw=CW - 26)
    y = end_y - 8

y -= 14

# Scoring
_txt(c, M, y, "Tu resultado:", sz=13, col=WHITE, bold=True)
y -= 24

scores = [
    ("0-2 señales", "Saludable", "Tu distribuidora tiene buen control. Optimizar puede llevarla al siguiente nivel.", GREEN),
    ("3-5 señales", "Oportunidad clara", "Estás dejando dinero sobre la mesa. Hay ganancias rápidas disponibles.", YELLOW),
    ("6-8 señales", "Pérdida significativa", "Estás perdiendo facturación importante cada mes. Necesitás actuar.", ORANGE),
    ("9-10 señales", "Crisis de retención", "Tu distribuidora está perdiendo clientes activamente. Acción urgente.", RED),
]
for rango, label, desc, col in scores:
    _rrect(c, M, y - 40, CW, 40, r=6, fill=CARD)
    c.saveState(); c.setFillColor(col)
    c.rect(M, y - 34, 4, 28, fill=1, stroke=0); c.restoreState()
    _txt(c, M + 16, y - 14, rango, sz=9, col=col, bold=True)
    _txt(c, M + 110, y - 14, label, sz=9, col=WHITE, bold=True)
    _txt(c, M + 16, y - 30, desc, sz=8, col=T3)
    y -= 48

y -= 4

# Benchmarks
_rrect(c, M, y - 52, CW, 52, r=8, fill=BG3)
_txt(c, M + 16, y - 14, "Benchmarks saludables (datos IEY® post-implementación):", sz=9, col=WHITE, bold=True)
_txt(c, M + 16, y - 32, ">60% tasa de respuesta", sz=8.5, col=GREEN, bold=True)
_txt(c, M + 170, y - 32, ">40% conversión", sz=8.5, col=GREEN, bold=True)
_txt(c, M + 280, y - 32, "<20% base inactiva", sz=8.5, col=GREEN, bold=True)
_txt(c, M + 400, y - 32, ">$400K/hr facturado", sz=8.5, col=GREEN, bold=True)

_footer(c)
c.showPage()


# ─────────────────────────────────────────────────────────────────
#  PAGE 8 — RESULTADOS REALES + CTA
# ─────────────────────────────────────────────────────────────────
_bg(c)
_header(c, 8)

y = H - 55
_txt(c, M, y, "07", sz=36, col=GREEN_D, bold=True)
_txt(c, M + 50, y + 4, "Esto funciona", sz=20, col=WHITE, bold=True)
y -= 14
_txt(c, M + 50, y, "Resultados reales de IEY® en 6 meses", sz=10, col=T3)

y -= 30

# Before/After highlight
_rrect(c, M, y - 80, CW, 80, r=12, fill=GREEN_D, stroke=GREEN, sw=1.5)
_txt(c, W/2 - 100, y - 30, "34%", sz=40, col=T3, bold=True, align="center")
_txt(c, W/2 - 100, y - 48, "Antes", sz=8, col=T4, align="center")
_txt(c, W/2, y - 28, "→", sz=28, col=GREEN, bold=True, align="center")
_txt(c, W/2 + 100, y - 30, "74%", sz=40, col=GREEN_L, bold=True, align="center")
_txt(c, W/2 + 100, y - 48, "Después", sz=8, col=T4, align="center")
_txt(c, W/2, y - 68, "Facturación recurrente  ·  +114.8% mejora en 6 meses", sz=9, col=T2, align="center")

y -= 102

# Key metrics grid (2x3)
metrics = [
    ("-56%", "Clientes perdidos mensuales"),
    ("+88%", "Ticket promedio"),
    ("18", "Clientes recuperados en 30 días"),
    ("+258%", "Pedidos mensuales (12→43)"),
    ("+126%", "Conversión nuevo→recurrente"),
    ("2.850%", "ROI del sistema"),
]
cw2 = (CW - 12) / 3
mh = 52
for i, (val, lab) in enumerate(metrics):
    row, col_i = divmod(i, 3)
    mx = M + col_i * (cw2 + 6)
    my = y - row * (mh + 8) - mh
    _rrect(c, mx, my, cw2, mh, r=8, fill=CARD, stroke=BORDER, sw=0.5)
    _txt(c, mx + cw2/2, my + mh - 18, val, sz=18, col=GREEN, bold=True, align="center")
    _txt(c, mx + cw2/2, my + mh - 36, lab, sz=7.5, col=T3, align="center")

y -= 2 * (mh + 8) + 18

# Testimonial
_rrect(c, M, y - 54, CW, 54, r=8, fill=HexColor("#0d1e20"))
c.saveState(); c.setFillColor(GREEN_D)
c.rect(M + 1, y - 48, 3, 42, fill=1, stroke=0); c.restoreState()
_wrap(c, M + 16, y - 12,
    '"Lo que más valoro es la previsibilidad. Pasar de 34% a 74% recurrente '
    'me dio un flujo de caja estable. Ahora puedo proyectar."',
    sz=9, col=T2, lead=13, mw=CW - 32)
_txt(c, W - M - 16, y - 44, "— Agustín M., Fundador IEY®", sz=8, col=GREEN, bold=True, align="right")

y -= 72

# Divider
_line(c, M, y, W - M, y, col=BORDER, w=0.4)
y -= 24

# CTA section
_txt(c, M, y, "¿Querés implementar esto en tu distribuidora?", sz=14, col=WHITE, bold=True)
y -= 20

y = _wrap(c, M, y,
    "Todo lo que leíste en esta guía lo podés implementar manualmente con Excel "
    "y WhatsApp. Pero si tenés +50 clientes y querés automatizarlo, "
    "agendá un diagnóstico gratis de 15 minutos.",
    sz=10, col=T2, lead=15, mw=CW)

y -= 22

# CTA box
_rrect(c, M, y - 64, CW, 64, r=12, fill=GREEN_D, stroke=GREEN, sw=1.5)
_txt(c, W/2, y - 22, "Diagnóstico gratis — 15 min por WhatsApp", sz=14, col=WHITE, bold=True, align="center")
_txt(c, W/2, y - 42, "wa.me/5491123994719  ·  Hablás con Patricio (fundador)", sz=10, col=GREEN_L, align="center")

y -= 82

# What you get in the diagnostic
items_diag = [
    "Análisis de tu base de clientes y detección de inactivos",
    "Cálculo de facturación en riesgo",
    "Plan de implementación personalizado",
]
for item in items_diag:
    _txt(c, M + 4, y, "—", sz=9, col=GREEN_D)
    _txt(c, M + 18, y, item, sz=9, col=T3)
    y -= 16

y -= 12

# Guarantees
_txt(c, M, y, "Sin compromiso de compra", sz=8, col=T4)
_txt(c, M + 160, y, "·  Garantía 90 días", sz=8, col=T4)
_txt(c, M + 290, y, "·  Setup gratis para los primeros 10 clientes", sz=8, col=T4)

y -= 24
_txt(c, W/2, y, "pymepilot.cloud", sz=9, col=GREEN_D, bold=True, align="center")

_footer(c)

# ─── Save ────────────────────────────────────────────────────────
c.save()
size_kb = os.path.getsize(output) / 1024
print(f"PDF generado: {output}")
print(f"Tamaño: {size_kb:.0f} KB")
print(f"Páginas: 8")
