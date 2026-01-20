import * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "#1a1a2e", padding: "20px", borderRadius: "8px 8px 0 0" }}>
        <h1 style={{ color: "#ffffff", margin: 0, fontSize: "24px" }}>
          New Contact Form Submission
        </h1>
      </div>
      <div style={{ backgroundColor: "#ffffff", padding: "30px", border: "1px solid #e0e0e0" }}>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#333333", fontSize: "16px", marginBottom: "5px" }}>From:</h2>
          <p style={{ color: "#555555", margin: 0, fontSize: "14px" }}>
            {name} ({email})
          </p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#333333", fontSize: "16px", marginBottom: "5px" }}>Message:</h2>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "4px",
              borderLeft: "4px solid #714B67",
            }}
          >
            <p style={{ color: "#555555", margin: 0, fontSize: "14px", whiteSpace: "pre-wrap" }}>
              {message}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderRadius: "0 0 8px 8px",
          textAlign: "center" as const,
        }}
      >
        <p style={{ color: "#888888", margin: 0, fontSize: "12px" }}>
          This email was sent from the Hexagun contact form.
        </p>
      </div>
    </div>
  )
}
