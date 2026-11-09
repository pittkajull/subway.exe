import { useRef, useState } from 'react'

export default function CopyButton({ text, label = 'copy', className = '' }) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef(null)

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const area = document.createElement('textarea')
        area.value = text
        area.setAttribute('readonly', '')
        area.style.position = 'fixed'
        area.style.opacity = '0'
        document.body.appendChild(area)
        area.select()
        document.execCommand('copy')
        document.body.removeChild(area)
      }
      setCopied(true)
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button type="button" className={`copy ${className}`.trim()} onClick={handleCopy}>
      {copied ? 'copied' : label}
    </button>
  )
}
