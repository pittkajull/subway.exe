import SectionHead from './SectionHead.jsx'
import { principles } from '../data/content.js'

export default function Why() {
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <SectionHead
          index="01"
          kicker="why cli"
          title="nothing you need to close."
          lede="subway.exe is deliberately small. one terminal, one feed, one conversation. the exhausting part was never social media — it is everything around it."
        />

        <ol className="principles">
          {principles.map((item) => (
            <li className="principle" key={item.num}>
              <span className="principle__num">{item.num}</span>
              <div className="principle__body">
                <h3 className="principle__title">{item.title}</h3>
                <p className="principle__text">{item.body}</p>
                <code className="principle__cmd">{item.cmd}</code>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
