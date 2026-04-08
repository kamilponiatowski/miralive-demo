import { Resend } from 'resend'

interface ContactBody {
  name: string
  phone: string
  email?: string
  message?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)

  const name = (body.name ?? '').trim()
  const phone = (body.phone ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!name || !phone) {
    throw createError({ statusCode: 400, statusMessage: 'Brakujące pola' })
  }

  const config = useRuntimeConfig()
  const resend = new Resend(config.resendApiKey)

  const html = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nowe zapytanie — Miralive</title>
</head>
<body style="margin:0;padding:0;background:#F5F5F5;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#E31E24;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:0.08em;text-transform:uppercase;font-weight:600;">Miralive</p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.02em;">
                Nowe zapytanie ze strony
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#FFFFFF;padding:40px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0;">

              <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.6;">
                Otrzymałaś nowe zapytanie kontaktowe. Poniżej znajdziesz szczegóły.
              </p>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #E8E8E8;">
                <tr style="background:#F8F8F8;">
                  <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#333333;letter-spacing:0.06em;text-transform:uppercase;width:35%;border-bottom:1px solid #E8E8E8;">
                    Imię i nazwisko
                  </td>
                  <td style="padding:14px 20px;font-size:15px;color:#1A1A1A;font-weight:600;border-bottom:1px solid #E8E8E8;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#333333;letter-spacing:0.06em;text-transform:uppercase;background:#F8F8F8;border-bottom:1px solid #E8E8E8;">
                    Telefon
                  </td>
                  <td style="padding:14px 20px;border-bottom:1px solid #E8E8E8;">
                    <a href="tel:${phone.replace(/\s/g, '')}" style="font-size:15px;color:#E31E24;font-weight:700;text-decoration:none;">${phone}</a>
                  </td>
                </tr>
                ${email ? `
                <tr style="background:#F8F8F8;">
                  <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#333333;letter-spacing:0.06em;text-transform:uppercase;border-bottom:1px solid #E8E8E8;">
                    Email
                  </td>
                  <td style="padding:14px 20px;border-bottom:1px solid #E8E8E8;">
                    <a href="mailto:${email}" style="font-size:15px;color:#E31E24;font-weight:600;text-decoration:none;">${email}</a>
                  </td>
                </tr>` : ''}
                ${message ? `
                <tr>
                  <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#333333;letter-spacing:0.06em;text-transform:uppercase;background:#F8F8F8;vertical-align:top;">
                    Wiadomość
                  </td>
                  <td style="padding:14px 20px;font-size:15px;color:#1A1A1A;line-height:1.7;white-space:pre-wrap;">${message}</td>
                </tr>` : ''}
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="tel:${phone.replace(/\s/g, '')}"
                      style="display:inline-block;background:#E31E24;color:#FFFFFF;font-size:15px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:12px;letter-spacing:0.01em;">
                      Zadzwoń do ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5F5F5;border:1px solid #E8E8E8;border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#999999;line-height:1.6;">
                Wiadomość wysłana przez formularz na
                <a href="https://miralive.pl" style="color:#E31E24;text-decoration:none;font-weight:600;">miralive.pl</a>
                &nbsp;·&nbsp; ul. Spółdzielcza 3, 87-810 Włocławek
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

  const { error } = await resend.emails.send({
    from: 'Miralive Formularz <formularz@miralive.pl>',
    to: 'kontakt@miralive.pl',
    replyTo: email || undefined,
    subject: `Nowe zapytanie od ${name}`,
    html,
  })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Błąd wysyłki' })
  }

  return { success: true }
})
