import { nextFrame } from '../content.js'

export default function NextFrame() {
  return (
    <section className="next" id="next">
      <div className="next-inner">
        <p className="next-label">{nextFrame.label}</p>
        <h2 className="next-title">{nextFrame.title}</h2>
        <p className="next-text">{nextFrame.text}</p>

        <div className="grid">
          {nextFrame.categories.map((cat) => (
            <div className="card" key={cat.num}>
              <p className="card-num">{cat.num}</p>
              <h3 className="card-title">{cat.title}</h3>
              <p className="card-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
