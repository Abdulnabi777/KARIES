/* Hand-drawn SVG illustrations — swap any of these for real photos later. */

export function HeroArt() {
  return (
    <svg viewBox="0 0 480 440" className="art" role="img" aria-label="Graduation cap above an open book, inside a running track">
      <defs>
        <linearGradient id="ha-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" />
          <stop offset="1" stopColor="#fff" stopOpacity=".06" />
        </linearGradient>
        <path id="ha-l1" d="M180 145 H300 A75 75 0 0 1 300 295 H180 A75 75 0 0 1 180 145 Z" />
        <path id="ha-l2" d="M180 120 H300 A100 100 0 0 1 300 320 H180 A100 100 0 0 1 180 120 Z" />
        <path id="ha-l3" d="M180 95 H300 A125 125 0 0 1 300 345 H180 A125 125 0 0 1 180 95 Z" />
      </defs>
      <circle cx="240" cy="220" r="205" fill="url(#ha-bg)" />
      <use href="#ha-l3" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="2" />
      <use href="#ha-l2" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="2" />
      <use href="#ha-l1" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="2" strokeDasharray="6 8" className="flow" />

      <circle r="8" fill="#fff"><animateMotion dur="8s" repeatCount="indefinite"><mpath href="#ha-l3" /></animateMotion></circle>
      <circle r="7" fill="#9cc2ff"><animateMotion dur="6s" repeatCount="indefinite"><mpath href="#ha-l2" /></animateMotion></circle>
      <circle r="6" fill="#fff" fillOpacity=".85"><animateMotion dur="4.5s" repeatCount="indefinite"><mpath href="#ha-l1" /></animateMotion></circle>

      {/* open book */}
      <path d="M240 250 C215 235 180 235 155 245 V302 C180 292 215 292 240 307 Z" fill="#fff" />
      <path d="M240 250 C265 235 300 235 325 245 V302 C300 292 265 292 240 307 Z" fill="#e8f0ff" />
      <path d="M240 250 V307" stroke="#b9cff7" strokeWidth="2" />
      <g stroke="#9db9ee" strokeWidth="2" strokeLinecap="round">
        <path d="M172 262 C190 258 210 259 226 266" /><path d="M172 276 C190 272 210 273 226 280" />
        <path d="M254 266 C270 259 290 258 308 262" /><path d="M254 280 C270 273 290 272 308 276" />
      </g>
      {/* graduation cap */}
      <g className="bob">
        <path d="M200 182 V210 C220 224 260 224 280 210 V182 L240 198 Z" fill="#cfe0ff" />
        <path d="M240 135 L315 165 L240 195 L165 165 Z" fill="#fff" />
        <path d="M315 165 V205" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="315" cy="210" r="6" fill="#9cc2ff" />
      </g>
      {/* sparkles */}
      <g fill="#fff">
        <circle cx="70" cy="110" r="4" className="twinkle" />
        <circle cx="415" cy="90" r="3" className="twinkle" style={{ animationDelay: '.7s' }} />
        <circle cx="430" cy="330" r="4" className="twinkle" style={{ animationDelay: '1.3s' }} />
        <circle cx="55" cy="320" r="3" className="twinkle" style={{ animationDelay: '.3s' }} />
      </g>
    </svg>
  )
}

export function EducationArt() {
  const bars = [70, 105, 85, 130, 150]
  return (
    <svg viewBox="0 0 480 360" className="art" role="img" aria-label="Presentation board with a growing bar chart and a stack of books">
      <defs>
        <linearGradient id="ea-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4f8bff" /><stop offset="1" stopColor="#1347b5" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="440" height="320" rx="28" fill="#e6efff" />
      <rect x="70" y="50" width="340" height="205" rx="16" fill="#fff" stroke="#bcd0f5" strokeWidth="3" />
      <rect x="90" y="68" width="120" height="10" rx="5" fill="#bcd0f5" />
      <rect x="90" y="88" width="80" height="8" rx="4" fill="#dbe7fb" />
      {bars.map((h, i) => (
        <rect key={i} className="bar" style={{ '--i': i }} x={110 + i * 54} y={235 - h} width="30" height={h} rx="6" fill="url(#ea-g)" />
      ))}
      <path d="M118 175 L172 150 L226 160 L280 125 L334 108" fill="none" stroke="#7aa5f5" strokeWidth="3" strokeDasharray="5 7" strokeLinecap="round" className="flow" />
      <circle cx="334" cy="108" r="7" fill="#fff" stroke="#1a5be0" strokeWidth="3" />
      <path d="M200 255 V285 M280 255 V285" stroke="#bcd0f5" strokeWidth="6" strokeLinecap="round" />
      {/* books */}
      <g>
        <rect x="46" y="296" width="120" height="22" rx="5" fill="#1347b5" />
        <rect x="58" y="274" width="100" height="22" rx="5" fill="#1a5be0" />
        <rect x="52" y="252" width="104" height="22" rx="5" fill="#7aa5f5" />
        <path d="M70 307h60M82 285h50M70 263h56" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* cap on books */}
      <g className="bob">
        <path d="M82 232 L104 222 L126 232 L104 242 Z" fill="#0b2a6f" />
        <path d="M92 237 V246 C100 251 108 251 116 246 V237 L104 242 Z" fill="#1a5be0" />
      </g>
      {/* lightbulb */}
      <g transform="translate(395 270)">
        <circle cx="0" cy="0" r="30" fill="#fff" className="pulse-ring" />
        <path d="M0 -18a12 12 0 0 0-7 22v6h14v-6a12 12 0 0 0-7-22Z" fill="#cfe0ff" stroke="#1a5be0" strokeWidth="3" strokeLinejoin="round" />
        <path d="M-5 14h10" stroke="#1a5be0" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function SportsArt() {
  const confetti = [
    [60, '#4f8bff'], [120, '#1a5be0'], [190, '#9cc2ff'], [260, '#1347b5'], [330, '#4f8bff'], [400, '#9cc2ff'], [440, '#1a5be0'],
  ]
  return (
    <svg viewBox="0 0 480 360" className="art" role="img" aria-label="Winners podium with a trophy and falling confetti">
      <defs>
        <linearGradient id="sa-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4f8bff" /><stop offset="1" stopColor="#0b2a6f" />
        </linearGradient>
        <linearGradient id="sa-g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9cc2ff" /><stop offset="1" stopColor="#1a5be0" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="440" height="320" rx="28" fill="#e6efff" />
      {confetti.map(([x, c], i) => (
        <rect key={i} className="confetti" style={{ animationDelay: `${i * 0.45}s` }} x={x} y="30" width="9" height="14" rx="2" fill={c} />
      ))}
      <rect x="70" y="300" width="340" height="10" rx="5" fill="#bcd0f5" />
      <rect x="90" y="200" width="92" height="100" rx="8" fill="url(#sa-g2)" />
      <rect x="194" y="155" width="92" height="145" rx="8" fill="url(#sa-g)" />
      <rect x="298" y="225" width="92" height="75" rx="8" fill="url(#sa-g2)" />
      <g fill="#fff" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="34" textAnchor="middle">
        <text x="136" y="260">2</text><text x="240" y="225">1</text><text x="344" y="280">3</text>
      </g>
      {/* trophy */}
      <g className="bob" transform="translate(240 95)">
        <path d="M-26 -42h52v30a26 26 0 0 1-52 0z" fill="#fff" stroke="#1a5be0" strokeWidth="4" strokeLinejoin="round" />
        <path d="M-26 -34h-12a10 10 0 0 0 0 20h14M26 -34h12a10 10 0 0 1 0 20h-14" fill="none" stroke="#1a5be0" strokeWidth="4" strokeLinecap="round" />
        <path d="M0 14v18M-16 40h32" stroke="#1a5be0" strokeWidth="5" strokeLinecap="round" />
        <path d="m0 -30 5 10 11 1-8 8 2 11-10-5-10 5 2-11-8-8 11-1z" fill="#9cc2ff" />
      </g>
      {/* runners */}
      <g fill="#1347b5">
        <circle cx="136" cy="176" r="10" /><path d="M120 200c2-12 10-16 16-16s14 4 16 16z" />
        <circle cx="344" cy="201" r="10" /><path d="M328 225c2-12 10-16 16-16s14 4 16 16z" />
      </g>
    </svg>
  )
}

export function BridgeArt() {
  const win = (x, y) => <rect key={`${x}${y}`} x={x} y={y} width="12" height="14" rx="3" fill="#fff" fillOpacity=".75" />
  return (
    <svg viewBox="0 0 480 320" className="art" role="img" aria-label="A bridge connecting academia and industry">
      <defs>
        <path id="ba-path" d="M130 190 Q240 60 350 190" />
        <linearGradient id="ba-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4f8bff" /><stop offset="1" stopColor="#1347b5" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="440" height="280" rx="28" fill="#e6efff" />
      <rect x="20" y="250" width="440" height="50" rx="0" fill="#cfe0ff" />
      <rect x="50" y="130" width="100" height="130" rx="10" fill="url(#ba-g)" />
      <path d="M40 130 L100 95 L160 130 Z" fill="#0b2a6f" />
      {[68, 104].map((x) => [150, 180, 210].map((y) => win(x, y)))}
      <rect x="330" y="110" width="100" height="150" rx="10" fill="url(#ba-g)" />
      <rect x="350" y="90" width="20" height="20" rx="3" fill="#0b2a6f" />
      {[346, 382].map((x) => [128, 158, 188, 218].map((y) => win(x, y)))}
      <use href="#ba-path" fill="none" stroke="#1a5be0" strokeWidth="6" strokeLinecap="round" strokeDasharray="2 14" className="flow" />
      <use href="#ba-path" fill="none" stroke="#7aa5f5" strokeWidth="2" />
      <circle r="9" fill="#1a5be0"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#ba-path" /></animateMotion></circle>
      <circle r="7" fill="#fff" stroke="#1a5be0" strokeWidth="3"><animateMotion dur="5s" begin="-2.5s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#ba-path" /></animateMotion></circle>
      <g fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="15" fill="#0b2a6f" textAnchor="middle">
        <text x="100" y="282">Academia</text><text x="380" y="282">Industry</text>
      </g>
    </svg>
  )
}
