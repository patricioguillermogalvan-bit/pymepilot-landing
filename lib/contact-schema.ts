import { z } from 'zod'

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede superar los 100 caracteres'),
  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Ingresá un email válido'),
  empresa: z
    .string()
    .max(100, 'La empresa no puede superar los 100 caracteres')
    .optional()
    .or(z.literal('')),
  telefono: z
    .string()
    .max(30, 'El teléfono no puede superar los 30 caracteres')
    .optional()
    .or(z.literal('')),
  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede superar los 500 caracteres'),
})

export type ContactFormData = z.infer<typeof contactSchema>
