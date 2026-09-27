import { footer, founder } from '../content.js'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <p className="footer-brand">BLENS</p>
          <p className="footer-by">
            Founded by <span>{founder}</span>
          </p>
          <p className="footer-sub">{footer.sub}</p>
        </div>
        <div className="footer-meta">
          <span>{footer.copyright}</span>
          <a href={footer.domainUrl}>{footer.domain}</a>
        </div>
      </div>
    </footer>
  )
}
