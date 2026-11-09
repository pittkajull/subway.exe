import CopyButton from './CopyButton.jsx'
import SectionHead from './SectionHead.jsx'
import TerminalFrame from './terminal/TerminalFrame.jsx'
import {
  installCommand,
  installNote,
  installPreview,
  installSteps,
} from '../data/content.js'

export default function Install() {
  return (
    <section className="sec" id="install">
      <div className="wrap">
        <SectionHead
          index="05"
          kicker="install"
          title="one line, eventually."
          lede="the install flow is still being built: one npm command, then you are in. it is not published yet."
        />

        <div className="install-grid">
          <div className="install__left">
            <div className="installbar">
              <span className="installbar__dollar" aria-hidden="true">
                $
              </span>
              <code className="installbar__cmd">{installCommand}</code>
              <span className="tag tag--red">soon</span>
              <CopyButton text={installCommand} label="copy" />
            </div>
            <p className="note-line">// {installNote}</p>

            <ol className="steps">
              {installSteps.map((step) => (
                <li className="step" key={step.num}>
                  <span className="step__num">{step.num}</span>
                  <div>
                    <h3 className="step__title">{step.title}</h3>
                    <p className="step__body">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="install__hint">
              // nothing is downloadable today. this page will change when the
              package ships.
            </p>
          </div>

          <div className="install__right">
            <TerminalFrame
              className="term--install"
              title="planned install"
              hint="not live yet"
            >
              <div className="preview">
                {installPreview.map(([type, line]) => (
                  <p className={`preview__line preview__line--${type}`} key={line}>
                    {line}
                  </p>
                ))}
                <p className="preview__line preview__line--dim">
                  <span className="cursor cursor--inline" aria-hidden="true" />{' '}
                  waiting for release…
                </p>
              </div>
            </TerminalFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
