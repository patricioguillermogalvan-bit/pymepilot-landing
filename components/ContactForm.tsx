'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/contact-schema'

const ACCENT = '#81B5A1'
const ACCENT_LIGHT = '#a3cabb'
const DARK = '#293E40'
const DARK_LIGHTER = '#344B4E'
const GRAY_300 = '#D1DADC'
const GRAY_400 = '#9AABAE'
const GRAY_500 = '#6B7C7F'
const GRAY_600 = '#4A5759'
const ERROR = '#E17055'
const WHITE = '#FFFFFF'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
      } else {
        setServerError('Hubo un error al enviar el mensaje. Intentá nuevamente.')
      }
    } catch {
      setServerError('Error de conexión. Verificá tu internet e intentá de nuevo.')
    }
  }

  if (submitted) {
    return (
      <div style={styles.successBox}>
        <div style={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 style={styles.successTitle}>Mensaje enviado</h3>
        <p style={styles.successText}>
          Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas hábiles.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={styles.form}>
      <div style={styles.field}>
        <label htmlFor="nombre" style={styles.label}>
          Nombre completo <span style={styles.required}>*</span>
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          {...register('nombre')}
          style={{
            ...styles.input,
            ...(errors.nombre ? styles.inputError : {}),
          }}
        />
        {errors.nombre && <p style={styles.error}>{errors.nombre.message}</p>}
      </div>

      <div style={styles.field}>
        <label htmlFor="email" style={styles.label}>
          Email <span style={styles.required}>*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          {...register('email')}
          style={{
            ...styles.input,
            ...(errors.email ? styles.inputError : {}),
          }}
        />
        {errors.email && <p style={styles.error}>{errors.email.message}</p>}
      </div>

      <div style={styles.row}>
        <div style={styles.field}>
          <label htmlFor="empresa" style={styles.label}>Empresa</label>
          <input
            id="empresa"
            type="text"
            placeholder="Nombre de tu empresa"
            {...register('empresa')}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label htmlFor="telefono" style={styles.label}>Teléfono</label>
          <input
            id="telefono"
            type="tel"
            placeholder="+54 11 1234-5678"
            {...register('telefono')}
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.field}>
        <label htmlFor="mensaje" style={styles.label}>
          Mensaje <span style={styles.required}>*</span>
        </label>
        <textarea
          id="mensaje"
          rows={5}
          placeholder="Contanos en qué podemos ayudarte..."
          {...register('mensaje')}
          style={{
            ...styles.input,
            ...styles.textarea,
            ...(errors.mensaje ? styles.inputError : {}),
          }}
        />
        {errors.mensaje && <p style={styles.error}>{errors.mensaje.message}</p>}
      </div>

      {serverError && <p style={styles.serverError}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          ...styles.button,
          ...(isSubmitting ? styles.buttonDisabled : {}),
        }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  )
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: 1,
  },
  row: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  label: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    color: DARK,
  },
  required: {
    color: ERROR,
  },
  input: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '15px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: `1.5px solid ${GRAY_300}`,
    background: WHITE,
    color: DARK,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  inputError: {
    borderColor: ERROR,
    boxShadow: `0 0 0 3px rgba(225, 112, 85, 0.15)`,
  },
  textarea: {
    resize: 'vertical' as const,
    minHeight: '120px',
  },
  error: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '13px',
    color: ERROR,
    margin: 0,
  },
  serverError: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '14px',
    color: WHITE,
    background: ERROR,
    padding: '12px 16px',
    borderRadius: '8px',
    margin: 0,
  },
  button: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    padding: '14px 32px',
    borderRadius: '8px',
    border: 'none',
    background: ACCENT,
    color: DARK,
    cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    alignSelf: 'flex-start',
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  successBox: {
    textAlign: 'center' as const,
    padding: '48px 24px',
  },
  successIcon: {
    width: '64px',
    height: '64px',
    background: 'rgba(129, 181, 161, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  },
  successTitle: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '24px',
    fontWeight: 700,
    color: DARK,
    marginBottom: '8px',
  },
  successText: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '16px',
    color: GRAY_500,
    lineHeight: '1.6',
  },
}
