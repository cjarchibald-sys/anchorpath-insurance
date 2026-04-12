import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body ?? {}

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' })
  }

  // Build the PDF URL dynamically from the incoming request — works in dev and prod
  const host = req.headers.host
  const protocol = host?.startsWith('localhost') ? 'http' : 'https'
  const pdfUrl = `${protocol}://${host}/medicare-roadmap.pdf`

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? 'AnchorPath Insurance Services <hello@anchorpathinsurance.com>',
      to: email,
      subject: 'Your Medicare Roadmap — AnchorPath Insurance Services',
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fbfd;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fbfd;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;border:1px solid #ddeef8;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#2e6da4;padding:28px 40px;">
            <span style="font-size:22px;vertical-align:middle;">⚓</span>
            <span style="font-family:Georgia,serif;font-weight:600;color:#ffffff;font-size:17px;margin-left:8px;vertical-align:middle;">
              AnchorPath Insurance Services
            </span>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <h1 style="font-family:Georgia,serif;font-size:24px;color:#1e2d3d;margin:0 0 16px;">
              Your Medicare Roadmap is ready
            </h1>
            <p style="color:#607080;font-size:15px;line-height:1.75;margin:0 0 28px;">
              Thank you for your interest in AnchorPath Insurance Services. Below you'll find
              your plain-language guide to understanding Medicare options before you enroll.
            </p>

            <!-- CTA Button -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background:#2e6da4;border-radius:8px;">
                  <a href="${pdfUrl}"
                     style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;border-radius:8px;">
                    Download the Medicare Roadmap →
                  </a>
                </td>
              </tr>
            </table>

            <p style="color:#607080;font-size:15px;line-height:1.75;margin:0 0 16px;">
              If the button above doesn't work, copy and paste this link into your browser:
            </p>
            <p style="margin:0 0 32px;">
              <a href="${pdfUrl}" style="color:#2e6da4;font-size:13px;word-break:break-all;">${pdfUrl}</a>
            </p>

            <!-- Soft CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f7fc;border-radius:8px;margin-bottom:32px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="color:#1e2d3d;font-size:14px;line-height:1.7;margin:0 0 12px;">
                    <strong>Have questions after reviewing the guide?</strong>
                  </p>
                  <p style="color:#607080;font-size:14px;line-height:1.7;margin:0 0 16px;">
                    We're happy to walk through your specific situation — Medicare plan types,
                    enrollment windows, or anything else that feels unclear.
                    Our consultations are always complimentary, with no obligation.
                  </p>
                  <a href="https://anchorpathinsurance.com"
                     style="color:#2e6da4;font-size:14px;font-weight:600;text-decoration:underline;">
                    Schedule a Conversation →
                  </a>
                </td>
              </tr>
            </table>

            <p style="color:#607080;font-size:15px;line-height:1.75;margin:0 0 8px;">
              Warmly,
            </p>
            <p style="color:#1e2d3d;font-size:15px;line-height:1.75;margin:0;font-weight:500;">
              Chris &amp; Helga Archibald<br>
              <span style="color:#2e6da4;font-weight:400;">AnchorPath Insurance Services</span>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f0f7fc;padding:20px 40px;border-top:1px solid #ddeef8;">
            <p style="color:#aabbcc;font-size:11px;line-height:1.7;margin:0;text-align:center;">
              AnchorPath Insurance Services · Licensed California Life &amp; Health Insurance Agents<br>
              We are not affiliated with or endorsed by the U.S. government or the federal Medicare program.<br>
              Information provided is for general educational purposes only and is not a guarantee of
              coverage, benefits, or plan availability.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
