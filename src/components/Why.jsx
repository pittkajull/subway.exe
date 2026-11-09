import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { whyCards } from '../data/content.js'

export default function Why() {
  return (
    <section className="sec" id="kenapa">
      <div className="wrap">
        <SectionHead
          index="01"
          kicker="kenapa cli"
          title={
            <>
              Nggak ada yang perlu <em>kamu tutup.</em>
            </>
          }
          lede="subway.exe sengaja dibikin sempit. Satu terminal, satu feed, satu percakapan. Karena yang bikin capek bukan sosial medianya — tapi semua hal di sekitarnya."
        />

        <div className="why-grid">
          {whyCards.map((card, index) => (
            <Reveal className="why-card" key={card.num} delay={index * 60}>
              <span className="why-card__num">{card.num}</span>
              <h3 className="why-card__title">{card.title}</h3>
              <p className="why-card__body">{card.body}</p>
              <p className="why-card__foot">{card.foot}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
