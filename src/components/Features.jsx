import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import TerminalFrame from './terminal/TerminalFrame.jsx'
import { ChatOutput, FeedMock, StoriesOutput } from './terminal/Outputs.jsx'
import { features } from '../data/content.js'

function Mock({ id }) {
  if (id === 'feed') {
    return (
      <TerminalFrame
        className="term--mock"
        title="subway.exe — feed (3)"
        hint="↑/↓ navigate · q quit"
      >
        <FeedMock />
      </TerminalFrame>
    )
  }

  if (id === 'story') {
    return (
      <TerminalFrame
        className="term--mock"
        title="subway.exe — stories"
        hint="↑/↓ navigate · q quit"
      >
        <StoriesOutput simple />
      </TerminalFrame>
    )
  }

  return (
    <TerminalFrame
      className="term--mock"
      title="subway.exe — chat with @budi"
      hint="Enter send · Esc"
    >
      <ChatOutput />
    </TerminalFrame>
  )
}

export default function Features() {
  return (
    <section className="sec sec--raise" id="fitur">
      <div className="wrap">
        <SectionHead
          index="02"
          kicker="fitur"
          title={
            <>
              Yang kamu butuhin, <em>nggak lebih.</em>
            </>
          }
          lede="Tiga hal inti, dikerjain sampai beres. Nggak ada fitur yang ada cuma biar keliatan lengkap."
        />

        <div className="features">
          {features.map((feature, index) => (
            <Reveal className="feature" key={feature.id} delay={index * 40}>
              <div className="feature__copy">
                <p className="eyebrow">
                  <span className="eyebrow__idx">{feature.label.split(' / ')[0]} /</span>
                  {feature.label.split(' / ')[1]}
                </p>
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__body">{feature.body}</p>
                <ul className="feature__list">
                  {feature.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="feature__mock">
                <Mock id={feature.id} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
