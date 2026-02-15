import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tu Distribuidora Pierde Clientes y Nadie Te Avisa | Diagnóstico Gratis PymePilot',
  description:
    'Sistema que detecta clientes en riesgo, anticipa reposiciones y aumenta ticket. Caso IEY®: +114% facturación recurrente en 6 meses.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: 'Tu Distribuidora Pierde Clientes y Nadie Te Avisa | Diagnóstico Gratis PymePilot',
    description:
      'Sistema que detecta clientes en riesgo, anticipa reposiciones y aumenta ticket promedio. Caso real IEY®.',
    type: 'website',
  },
}

export default function DiagnosticoGratisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
