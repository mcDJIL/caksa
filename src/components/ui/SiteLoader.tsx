import { useEffect, useState } from "react"

export default function SiteLoader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setLeaving(true), 700)
    const removeTimer = window.setTimeout(() => setVisible(false), 1250)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-[#0b152a] px-[6vw] py-7 text-white transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)] ${leaving ? "-translate-y-full" : "translate-y-0"}`}
      role="status"
      aria-label="Loading CAKSA website"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:clamp(32px,4vw,68px)_clamp(32px,4vw,68px)]" />
      <div className="relative flex items-start justify-between font-mono text-[9px] tracking-[.12em] text-[#aeb8c8]">
        <span>CAKSA / 2026</span>
        <span>GALA AKASA WIRYA SATYA</span>
      </div>

      <div className="relative flex items-center gap-5">
        <div className="h-2 w-2 animate-pulse bg-[#f4841e]" />
        <div>
          <p className="font-mono text-[9px] tracking-[.14em] text-[#f4841e]">INITIALIZING FLIGHT SYSTEM</p>
          <h1 className="mt-3 font-sans text-[clamp(3.5rem,10vw,10rem)] font-black leading-[.75] tracking-[-.12em]">CAKSA</h1>
        </div>
      </div>

      <div className="relative flex items-end justify-between gap-8 font-mono text-[9px] tracking-[.1em] text-[#aeb8c8]">
        <span>POLITEKNIK ELEKTRONIKA<br />NEGERI SURABAYA</span>
        <div className="w-[min(260px,45vw)]">
          <div className="mb-2 flex justify-between text-[#f4841e]"><span>LOADING</span><span>100%</span></div>
          <div className="h-px bg-white/20"><div className="h-full w-full origin-left bg-[#f4841e] transition-transform duration-700 ease-out" /></div>
        </div>
      </div>
    </div>
  )
}
