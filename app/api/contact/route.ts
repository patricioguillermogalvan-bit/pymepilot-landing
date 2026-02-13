import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      )
    }

    // TODO: Configurar envío de email real (SendGrid, Resend, etc.)
    console.log('Nuevo mensaje de contacto:', result.data)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ['Error al procesar la solicitud'] } },
      { status: 500 }
    )
  }
}
