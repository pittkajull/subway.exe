export default function SectionHead({ index, kicker, title, lede }) {
  return (
    <div className="sec-head">
      <p className="sec-head__label">
        <span className="sec-head__idx">[{index}]</span>
        <span>{kicker}</span>
      </p>
      <div className="sec-head__body">
        <h2 className="sec-head__title">{title}</h2>
        {lede && <p className="sec-head__lede">{lede}</p>}
      </div>
    </div>
  )
}
