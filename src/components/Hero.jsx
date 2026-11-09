import CopyButton from './CopyButton.jsx'
import TerminalDemo from './TerminalDemo.jsx'
import { installCommand, installNote } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <div className="hero__brand">
            <img className="hero__logo" src="/logo.png" alt="" width="42" height="38" />
            <span className="hero__wordmark">
              subway<span className="accent">.exe</span>
            </span>
            <span className="tag">alpha</span>
          </div>

          <p className="promptline">
            <span className="promptline__user">guest@subway</span>
            <span className="promptline__dim">:~$</span>
            <span className="promptline__cmd">./subwayexe --about</span>
            <span className="cursor cursor--inline" aria-hidden="true" />
          </p>

          <h1 className="hero__title">
            social media,
            <br />
            but in your <span className="hl">terminal.</span>
          </h1>

          <p className="lede">
            subway.exe is social media without the app. a chronological feed,
            24-hour stories, reposts, and chat — all through commands. no
            algorithm, no notifications chasing you, no app to open.
          </p>

          <div className="installbar">
            <span className="installbar__dollar" aria-hidden="true">
              $
            </span>
            <code className="installbar__cmd">{installCommand}</code>
            <span className="tag tag--red">soon</span>
            <CopyButton text={installCommand} label="copy" />
          </div>
          <p className="note-line">// {installNote}</p>

          <div className="hero__actions">
            <a className="linkbtn" href="#features">
              [ see features ]
            </a>
            <a className="linkbtn" href="#status">
              [ build status ]
            </a>
          </div>

          <p className="hero__meta">
            <span>
              client=<b>1 terminal</b>
            </span>
            <span>
              feed=<b>chronological</b>
            </span>
            <span>
              stories=<b>24h</b>
            </span>
          </p>
        </div>

        <div className="hero__demo">
          <TerminalDemo />
        </div>
      </div>
    </section>
  )
}
