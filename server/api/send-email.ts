import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_PORT == '465',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: body.to,
        subject: body.subject,
        text: body.text,
    }

    try {
        await transporter.sendMail(mailOptions)
        return { success: true }
    } catch (error) {
        console.error(error)
        return { success: false, error: error }
    }
})
