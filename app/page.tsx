export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Ensure critical webhooks{" "}
          <span className="text-[#58a6ff]">never fail silently</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Monitor webhook delivery success rates, auto-retry failed attempts, and get instant alerts when your endpoints go down. Built for SaaS companies, e-commerce platforms, and API providers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
          >
            Start Monitoring — $11/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required to try</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            ["99.9%", "Delivery SLA"],
            ["Auto-Retry", "Failed Webhooks"],
            ["Real-Time", "Endpoint Health"],
            ["Instant", "Downtime Alerts"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-bold text-xl mb-1">{stat}</div>
              <div className="text-[#8b949e] text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited webhook endpoints",
              "Automatic retry with backoff",
              "Real-time delivery dashboard",
              "Email & Slack alerts",
              "Delivery SLA tracking",
              "30-day delivery history"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the retry mechanism work?",
              "When a webhook delivery fails, we automatically retry using exponential backoff — starting at 1 minute, then 5, 15, and 60 minutes. You can configure the retry policy per endpoint."
            ],
            [
              "What counts as a failed delivery?",
              "Any response outside the 2xx range, a connection timeout, or a DNS failure is treated as a failed delivery. We log the exact error so you can debug quickly."
            ],
            [
              "How are alerts sent?",
              "Alerts are sent via email immediately when an endpoint fails 3 consecutive deliveries. Slack integration is also available from the dashboard settings."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Webhook Delivery Monitor · $11/mo · All rights reserved
      </footer>
    </main>
  )
}
