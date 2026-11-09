import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { cliCode, installSteps, serverCode } from '../data/content.js'

function CodeBlock({ label, lines }) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef(null)

  const text = lines.map(([, line]) => line).join('\n')

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
    <div className="code">
      <div className="code__bar">
        <span>{label}</span>
        <button type="button" className="copy" onClick={handleCopy}>
          {copied ? '✓ copied' : 'copy'}
        </button>
      </div>
      <pre>
        <code>
          {lines.map(([type, line], index) => (
            <span
              className={`code__line ${type === 'c' ? 'code__line--c' : ''}`}
              key={`${index}-${line}`}
            >
              {line || ' '}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}

export default function Install() {
  return (
    <section className="sec" id="install">
      <div className="wrap">
        <SectionHead
          index="05"
          kicker="mulai"
          title={
            <>
              Dari nol ke <em>post pertama.</em>
            </>
          }
          lede="Belum ada paket npm. Sementara, clone repo-nya dan jalanin dari source — butuh Node.js dan npm."
        />

        <div className="install-grid">
          <div>
            <ol className="steps">
              {installSteps.map((step, index) => (
                <Reveal as="li" className="step" key={step.num} delay={index * 50}>
                  <span className="step__num">{step.num}</span>
                  <div>
                    <h3 className="step__title">{step.title}</h3>
                    <p className="step__body">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <div className="install-hint">
              <span aria-hidden="true">→</span>
              <p>
                Habis server-nya nyala, buka terminal kedua. Daftar akun dan
                feed-nya langsung bisa dibuka. Ganti <code>&lt;repo-url&gt;</code>{' '}
                sama URL repo kamu.
              </p>
            </div>
          </div>

          <div>
            <CodeBlock label="bash — quickstart" lines={serverCode} />
            <CodeBlock label="bash — cli" lines={cliCode} />
          </div>
        </div>
      </div>
    </section>
  )
}
