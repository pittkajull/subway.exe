import SectionHead from './SectionHead.jsx'
import TerminalFrame from './terminal/TerminalFrame.jsx'
import { statusItems, statusNote } from '../data/content.js'

const MARK = {
  done: '[x]',
  warn: '[!]',
  todo: '[ ]',
}

export default function Status() {
  return (
    <section className="sec" id="status">
      <div className="wrap">
        <SectionHead
          index="04"
          kicker="status"
          title="what ships, what's next."
          lede="the mvp comes first. everything after it is sequenced, not promised — no invented release dates."
        />

        <TerminalFrame
          className="term--status"
          title="subway.exe — roadmap"
          hint="mvp first"
        >
          <p className="cmdline">
            <span className="cmdline__prompt">guest@subway</span>
            <span className="cmdline__dollar">$</span>
            <span className="cmdline__text">subwayexe --status</span>
          </p>

          <ul className="status-list">
            {statusItems.map((item) => (
              <li className={`status-item is-${item.state}`} key={item.label}>
                <span className="status-item__mark">{MARK[item.state]}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <p className="status-note">// {statusNote}</p>
        </TerminalFrame>
      </div>
    </section>
  )
}
