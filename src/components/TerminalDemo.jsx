import { useEffect, useRef, useState } from 'react'
import TerminalFrame from './terminal/TerminalFrame.jsx'
import { ChatOutput, FeedOutput, ProfileOutput, StoriesOutput } from './terminal/Outputs.jsx'

const DEMO = {
  feed: {
    cmd: 'subwayexe feed',
    title: 'subway.exe — feed (4)',
    hint: '↑/↓ navigate · q quit',
    output: <FeedOutput />,
  },
  story: {
    cmd: 'subwayexe story feed',
    title: 'subway.exe — stories',
    hint: '↑/↓ navigate · q quit',
    output: <StoriesOutput />,
  },
  profile: {
    cmd: 'subwayexe profile budi',
    title: 'subway.exe — profile @budi',
    hint: 'q quit',
    output: <ProfileOutput />,
  },
  chat: {
    cmd: 'subwayexe chat budi',
    title: 'subway.exe — chat with @budi',
    hint: 'Enter send · Esc',
    output: <ChatOutput />,
  },
}

const ORDER = ['feed', 'story', 'profile', 'chat']

export default function TerminalDemo() {
  const [active, setActive] = useState('feed')
  const [typed, setTyped] = useState(DEMO.feed.cmd)
  const [typing, setTyping] = useState(false)
  const timer = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => () => clearInterval(timer.current), [])

  function run(key) {
    clearInterval(timer.current)
    setActive(key)
    const cmd = DEMO[key].cmd

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(cmd)
      setTyping(false)
      return
    }

    setTyped('')
    setTyping(true)
    let i = 0
    timer.current = setInterval(() => {
      i += 1
      setTyped(cmd.slice(0, i))
      if (i >= cmd.length) {
        clearInterval(timer.current)
        setTyping(false)
      }
    }, 26)
  }

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0
  }, [active, typing])

  return (
    <div className="demo">
      <div className="demo__tabs" role="group" aria-label="Example commands">
        {ORDER.map((key) => (
          <button
            key={key}
            type="button"
            className={`chip ${active === key ? 'is-active' : ''}`}
            aria-pressed={active === key}
            onClick={() => run(key)}
          >
            {DEMO[key].cmd.replace('subwayexe ', '')}
          </button>
        ))}
      </div>

      <TerminalFrame
        title={DEMO[active].title}
        hint={DEMO[active].hint}
        className="term--hero"
        bodyRef={bodyRef}
      >
        <p className="cmdline">
          <span className="cmdline__prompt">guest@subway</span>
          <span className="cmdline__dollar">$</span>
          <span className="cmdline__text">{typed}</span>
          {typing && <span className="cmdline__caret" aria-hidden="true" />}
        </p>

        <div className="term__out" aria-live="polite">
          {typing ? <p className="term__pending">connecting…</p> : DEMO[active].output}
        </div>
      </TerminalFrame>

      <p className="demo__note">
        // sample output. the commands are real; the numbers are illustrative.
      </p>
    </div>
  )
}
