import SectionHead from './SectionHead.jsx'
import { faqs } from '../data/content.js'

export default function Faq() {
  return (
    <section className="sec" id="faq">
      <div className="wrap faq-wrap">
        <SectionHead
          index="06"
          kicker="help"
          title="subway.exe --help"
          lede="the questions people ask before they try it."
        />

        <div className="faq">
          {faqs.map((item, index) => (
            <details className="faq__item" key={item.q} name="faq" open={index === 0}>
              <summary>
                <span className="faq__q">{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  [+]
                </span>
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
