import { FORM } from '../config/site'

/** Envía el email al endpoint del formulario. Lanza error si falla. */
export async function subscribeEmail(email) {
  const formData = new FormData()
  formData.append('email', email)
  formData.append('_subject', FORM.subject)
  formData.append('_template', 'box')
  // Con captcha activo formsubmit responde con una página HTML y el envío por fetch no llega.
  // Para tener protección anti-spam real, migrar a un backend propio (p. ej. Supabase).
  formData.append('_captcha', 'false')

  const response = await fetch(FORM.endpoint, { method: 'POST', body: formData })
  if (!response.ok) throw new Error(`Formulario respondió ${response.status}`)
}
