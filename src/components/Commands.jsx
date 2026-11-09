import { useEffect, useMemo, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { commandGroups } from '../data/content.js'

const TOTAL = commandGroups.reduce((sum, group) => sum + group.items.length, 0)

export default function Commands() {
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)

  useEffect(() => {
    function onKey(event) {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return
      const active = document.activeElement
      const tag = active?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || active?.isContentEditable) return
      event.preventDefault()
      searchRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commandGroups
    return commandGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            `${item.name} ${item.args} ${item.desc}`.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  const count = groups.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <section className="sec" id="commands">
      <div className="wrap">
        <SectionHead
          index="03"
          kicker="commands"
          title={
            <>
              Semua yang bisa <em>kamu ketik.</em>
            </>
          }
          lede="Nggak ada menu, nggak ada hidden gesture. Ini daftar lengkapnya — sisanya cuma keyboard."
        />

        <div className="cmd-layout">
          <aside className="cmd-side">
            <label className="cmd-search">
              <span aria-hidden="true">$</span>
              <span className="sr-only">Cari command</span>
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="cari command…"
                spellCheck="false"
                autoComplete="off"
              />
              <kbd>/</kbd>
            </label>

            <p className="cmd-count">
              {query.trim()
                ? `${count} dari ${TOTAL} command cocok`
                : `${TOTAL} command · 5 grup`}
            </p>

            <div className="cmd-note">
              <p>
                Semua command interaktif pakai prompt. Nggak ada flag panjang
                yang perlu dihafal.
              </p>
              <p className="cmd-note__hint">
                Contoh: <code>subwayexe post "halo dunia"</code>
              </p>
            </div>
          </aside>

          <div className="cmd-table">
            {groups.length === 0 && (
              <p className="cmd-empty">
                <span aria-hidden="true">✗</span> Nggak ada command yang cocok
                dengan <code>"{query.trim()}"</code>. Coba kata kunci lain.
              </p>
            )}

            {groups.map((group, groupIndex) => (
              <Reveal className="cmd-group" key={group.name} delay={groupIndex * 40}>
                <h3 className="cmd-group__name">{group.name}</h3>
                {group.items.map((item) => (
                  <div className="cmd-row" key={item.name}>
                    <code className="cmd-row__cmd">
                      {item.name}
                      {item.args && (
                        <span className="cmd-row__arg"> {item.args}</span>
                      )}
                    </code>
                    <p className="cmd-row__desc">{item.desc}</p>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
