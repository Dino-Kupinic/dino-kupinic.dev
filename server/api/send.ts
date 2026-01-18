import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const response = await resend.emails.send({
    from: "admin@news.dino-kupinic.dev",
    to: body.to,
    subject: "Form Submission – dino-kupinic.dev",
    html: `
    <div style="font-family: sans-serif; line-height: 1.5; font-size: 16px;">
      <p><strong>From:</strong> ${body.firstName} ${body.lastName} (${body.email})</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 12px; background: #f5f5f5; border-radius: 8px;">
        ${body.message.replace(/\n/g, "<br/>")}
      </div>
    </div>
  `,
  })

  if (response.error) {
    throw createError({
      statusCode: 500,
      message: "Error sending email" + response.error.message,
    })
  }

  return response
})
