import { marqueeItems } from '../data/content.js'

function Group({ hidden = false }) {
  return (
    <div className="marquee__group" aria-hidden={hidden ? 'true' : undefined}>
      {marqueeItems.map((item) => (
        <span className="marquee__item" key={item}>
          <b>{item}</b>
          <span className="marquee__sep" aria-hidden="true">
            /
          </span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Daftar command subway.exe">
      <div className="marquee__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  )
}
