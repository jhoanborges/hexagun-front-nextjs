import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function generateEmailHtml(name: string, email: string, message: string) {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact from ${name}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f0f1a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f0f1a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #714B67 0%, #E46E78 50%, #017E84 100%); padding: 4px; border-radius: 16px 16px 0 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="background-color: #1a1a2e; padding: 32px 40px; border-radius: 14px 14px 0 0;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                            &#x2709; New Message
                          </h1>
                          <p style="margin: 0; font-size: 14px; color: #8b8b9e;">
                            ${date}
                          </p>
                        </td>
                        <td align="right" valign="top">
                          <div style="background: linear-gradient(135deg, #714B67, #E46E78); padding: 10px 16px; border-radius: 8px;">
                            <span style="color: #ffffff; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Contact Form</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #1e1e2f; padding: 0 4px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #1e1e2f;">
                <tr>
                  <td style="padding: 32px 36px;">

                    <!-- Sender Info Card -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #252538; border-radius: 12px; margin-bottom: 24px;">
                      <tr>
                        <td style="padding: 24px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                              <td width="56" valign="top">
                                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #714B67, #E46E78); border-radius: 50%; text-align: center; line-height: 48px;">
                                  <span style="color: #ffffff; font-size: 20px; font-weight: 600;">${name.charAt(0).toUpperCase()}</span>
                                </div>
                              </td>
                              <td valign="middle" style="padding-left: 16px;">
                                <p style="margin: 0 0 4px 0; font-size: 18px; font-weight: 600; color: #ffffff;">${name}</p>
                                <a href="mailto:${email}" style="color: #E46E78; font-size: 14px; text-decoration: none;">${email}</a>
                              </td>
                              <td align="right" valign="middle">
                                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #017E84, #714B67); color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 600;">
                                  Reply &#8594;
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 600; color: #8b8b9e; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                          <div style="background-color: #252538; border-left: 4px solid #714B67; border-radius: 0 12px 12px 0; padding: 24px;">
                            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #d1d1e0; white-space: pre-wrap;">${message}</p>
                          </div>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #714B67 0%, #E46E78 50%, #017E84 100%); padding: 4px; border-radius: 0 0 16px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="background-color: #151521; padding: 24px 40px; border-radius: 0 0 14px 14px; text-align: center;">
                    <p style="margin: 0 0 8px 0; font-size: 16px; font-weight: 700; color: #ffffff;">Hexagun</p>
                    <p style="margin: 0; font-size: 12px; color: #6b6b7e;">
                      This message was sent via hexagun.mx contact form
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: "RESEND_API_KEY is not configured" }, { status: 500 })
    }

    const { data, error } = await resend.emails.send({
      from: "Hexagun Contact <info@hexagun.mx>",
      to: ["info@hexagun.mx"],
      replyTo: email,
      subject: `New contact from ${name}`,
      html: generateEmailHtml(name, email, message),
    })

    if (error) {
      console.error("Resend error:", error)
      return Response.json({ error: error.message || "Failed to send email" }, { status: 500 })
    }

    return Response.json(data)
  } catch (error: any) {
    console.error("API error:", error)
    return Response.json({ error: error?.message || "Internal server error" }, { status: 500 })
  }
}
