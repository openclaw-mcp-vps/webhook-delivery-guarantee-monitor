import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webhook Delivery Guarantee Monitor',
  description: 'Ensure critical webhooks never fail silently. Monitor deliveries, retry failures, and get alerted when endpoints go down.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dce86e3e-3d1a-4d52-ac8a-d307ded2515b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
