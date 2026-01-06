"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import emailjs from "@emailjs/browser"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const t = useTranslations("Contact")

  // Validation schema with translations
  const formSchema = z.object({
    name: z.string().min(2, { message: t("validation.nameMin") }),
    email: z.string().email({ message: t("validation.emailInvalid") }),
    message: z.string().min(10, { message: t("validation.messageMin") }),
  })

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!recaptchaToken) {
      toast({
        title: t("recaptchaRequired"),
        description: t("recaptchaDescription"),
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      // Verify reCAPTCHA with Next.js API route
      const verifyRes = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recaptchaToken }),
      })

      const verifyData = await verifyRes.json()
      console.log('verifyData', verifyData)
      if (!verifyData.success) {
        throw new Error("Failed reCAPTCHA verification")
      }

      // Send email with EmailJS
      const { name, email, message } = values
      const response = await emailjs.send(
        "service_hfbkb49", // Replace with EmailJS Service ID
        "template_1z3s8ah", // Replace with EmailJS Template ID
        {
          from_name: name,
          from_email: email,
          message: message,
          "g-recaptcha-response": recaptchaToken,
        },
        "vYxVSatu6-6hFJs0N" // Replace with EmailJS Public Key
      )

      if (response.status === 200) {
        toast({ title: t("successTitle"), description: t("successDescription") })
        form.reset()
        setRecaptchaToken(null) // Reset reCAPTCHA
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: t("errorTitle"),
        description: t("errorDescription"),
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className="mx-auto max-w-md space-y-6 py-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("namePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("emailPlaceholder")} type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("message")}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t("messagePlaceholder")} className="min-h-[120px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* reCAPTCHA */}
          <div className="flex justify-center">
            {/* @ts-ignore */}
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY as string}
              onChange={(token: any) => {
                setRecaptchaToken(token)
              }}
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? t("sending") : t("send")}
          </Button>
        </form>
      </Form>
    </div>
  )
}
