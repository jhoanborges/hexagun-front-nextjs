import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { recaptchaToken } = await req.json()
    console.log("Received reCAPTCHA Token:", recaptchaToken) // Debugging

    if (!recaptchaToken) {
      return NextResponse.json({ success: false, message: "Missing reCAPTCHA token" }, { status: 400 })
    }

    const secretKey = process.env.GOOGLE_SECRET_KEY
    if (!secretKey) {
      console.error("Google Secret Key is missing!")
      return NextResponse.json({ success: false, message: "Server misconfiguration" }, { status: 500 })
    }

    // Verify with Google
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: recaptchaToken,
      }),
    })

    const data = await response.json()
    console.log("Google reCAPTCHA Response:", data) // Debugging

    if (!data.success) {
      return NextResponse.json({ success: false, message: "Failed reCAPTCHA verification" }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
  }
}
