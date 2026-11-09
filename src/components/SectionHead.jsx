export default function SectionHead({ index, kicker, title, lede }) {
  return (
    <div className="sec__head">
      <div>
        <p className="eyebrow">
          <span className="eyebrow__idx">/ {index}</span>
          {kicker}
        </p>
        <h2 className="sec__title">{title}</h2>
      </div>
      {lede && <p className="sec__lede">{lede}</p>}
    </div>
  )
}
