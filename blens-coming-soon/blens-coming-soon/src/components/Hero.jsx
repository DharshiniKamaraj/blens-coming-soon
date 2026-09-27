import FocusVisual from './FocusVisual.jsx'
import { CTA_LINK, founder, hero } from '../content.js'

export default function Hero() {
  return (
    <section className="hero">
      <span className="frame-corner tl" aria-hidden="true"></span>
      <span className="frame-corner tr" aria-hidden="true"></span>
      <span className="frame-corner bl" aria-hidden="true"></span>
      <span className="frame-corner br" aria-hidden="true"></span>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="wordmark">
            BLE<span className="accent">N</span>S
          </h1>
          <p className="signature">
            by <span>{founder}</span>
          </p>
          <p className="subline">Photo / Film / Stories</p>

          <p className="headline">
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2}
          </p>

          <p className="lede">{hero.lede}</p>

          <div className="badge-row">
            <span className="badge">
              <span className="ring"></span>
              {hero.badge}
            </span>
            <span className="crafting">{hero.crafting}</span>
          </div>

          <p className="cta">
            <a href={CTA_LINK}>{hero.ctaLabel}</a>
          </p>
        </div>

        <FocusVisual />
      </div>
    </section>
  )
}
