import { useEffect, useMemo, useRef, useState } from 'react'
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
        items: group.items.filter((item) =>
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
          title="everything you can type."
          lede="no menus, no hidden gestures. this is the whole list — the rest is just your keyboard."
        />

        <div className="cmd-search">
          <span className="cmd-search__prompt" aria-hidden="true">
            grep
          </span>
          <label className="sr-only" htmlFor="command-filter">
            Filter commands
          </label>
          <input
            id="command-filter"
            ref={searchRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="type to filter…"
            spellCheck="false"
            autoComplete="off"
          />
          <kbd>/</kbd>
        </div>

        <p className="cmd-count">
          {query.trim() ? `${count} of ${TOTAL} commands match` : `${TOTAL} commands · 5 groups`}
        </p>

        <div className="cmd-table">
          {groups.length === 0 && (
            <p className="cmd-empty">
              <span aria-hidden="true">[!]</span> no command matches{' '}
              <code>&quot;{query.trim()}&quot;</code>. try another keyword.
            </p>
          )}

          {groups.map((group) => (
            <div className="cmd-group" key={group.name}>
              <h3 className="cmd-group__name">
                <span aria-hidden="true">##</span> {group.name}
              </h3>
              {group.items.map((item) => (
                <div className="cmd-row" key={item.name}>
                  <code className="cmd-row__cmd">
                    {item.name}
                    {item.args && <span className="cmd-row__arg"> {item.args}</span>}
                  </code>
                  <span className="cmd-leader" aria-hidden="true" />
                  <p className="cmd-row__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="cmd-footnote">
          // every interactive command uses a prompt. no long flags to memorize.
        </p>
      </div>
    </section>
  )
}
