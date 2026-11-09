export default function TerminalFrame({
  title,
  hint = '↑/↓ navigate · q quit',
  children,
  className = '',
  bodyClassName = '',
  bodyRef,
}) {
  return (
    <div className={`term ${className}`.trim()}>
      <div className="term__bar">
        <span className="term__title">{title}</span>
        <span className="term__hint">{hint}</span>
      </div>
      <div className={`term__body ${bodyClassName}`.trim()} ref={bodyRef}>
        {children}
      </div>
    </div>
  )
}
