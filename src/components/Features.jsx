import SectionHead from './SectionHead.jsx'
import TerminalFrame from './terminal/TerminalFrame.jsx'
import { ChatOutput, FeedMock, StoriesOutput } from './terminal/Outputs.jsx'
import { features } from '../data/content.js'

function Mock({ id }) {
  if (id === 'feed') {
    return (
      <TerminalFrame className="term--mock" title="subway.exe — feed (3)" hint="↑/↓ navigate · q quit">
        <FeedMock />
      </TerminalFrame>
    )
  }

  if (id === 'story') {
    return (
      <TerminalFrame className="term--mock" title="subway.exe — stories" hint="↑/↓ navigate · q quit">
        <StoriesOutput simple />
      </TerminalFrame>
    )
  }

  return (
    <TerminalFrame className="term--mock" title="subway.exe — chat with @budi" hint="Enter send · Esc">
      <ChatOutput />
    </TerminalFrame>
  )
}

export default function Features() {
  return (
    <section className="sec" id="features">
      <div className="wrap">
        <SectionHead
          index="02"
          kicker="features"
          title="what you need. nothing more."
          lede="three core things, built properly. no features that exist just to make the list look complete."
        />

        <div className="features">
          {features.map((feature) => (
            <article className="feature" key={feature.id}>
              <div className="feature__copy">
                <p className="feature__label">
                  [{feature.label}] {feature.name}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
