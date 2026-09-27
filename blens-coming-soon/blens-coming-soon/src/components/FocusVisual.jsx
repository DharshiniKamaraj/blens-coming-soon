// Abstract camera-focus illustration — pure SVG, no stock imagery.
export default function FocusVisual() {
  return (
    <div className="focus-visual" aria-hidden="true">
      <svg viewBox="0 0 400 400" fill="none">
        <circle
          className="ring-rotate"
          cx="200"
          cy="200"
          r="168"
          stroke="#DEDAD3"
          strokeWidth="1"
          strokeDasharray="1 9"
          strokeLinecap="round"
        />
        <circle className="ring-rotate-rev" cx="200" cy="200" r="138" stroke="#E7E3DC" strokeWidth="1" />
        <g className="focus-pulse">
          <circle cx="200" cy="200" r="72" stroke="#A6182C" strokeWidth="1.4" />
          <circle cx="200" cy="200" r="10" fill="#C81E3A" />
        </g>
        {/* crosshair / AF marks */}
        <line x1="200" y1="94" x2="200" y2="118" stroke="#17140F" strokeWidth="1.2" opacity="0.4" />
        <line x1="200" y1="282" x2="200" y2="306" stroke="#17140F" strokeWidth="1.2" opacity="0.4" />
        <line x1="94" y1="200" x2="118" y2="200" stroke="#17140F" strokeWidth="1.2" opacity="0.4" />
        <line x1="282" y1="200" x2="306" y2="200" stroke="#17140F" strokeWidth="1.2" opacity="0.4" />
        {/* corner brackets */}
        <path d="M40 70 V40 H70" stroke="#17140F" strokeWidth="1.4" opacity="0.55" />
        <path d="M330 40 H360 V70" stroke="#17140F" strokeWidth="1.4" opacity="0.55" />
        <path d="M40 330 V360 H70" stroke="#17140F" strokeWidth="1.4" opacity="0.55" />
        <path d="M360 330 V360 H330" stroke="#17140F" strokeWidth="1.4" opacity="0.55" />
      </svg>
    </div>
  )
}
