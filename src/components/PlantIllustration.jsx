// A small library of hand-drawn-style SVG plants, built from primitives so
// every product gets a distinct, on-brand thumbnail without any external
// image files. `variant` picks the silhouette; `leaf` / `pot` set the fill.

function Pot({ pot }) {
  return (
    <path
      d="M38 118 L44 152 Q64 158 84 152 L90 118 Z"
      fill={pot}
    />
  );
}

const variants = {
  blade: ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      {[-26, -13, 0, 13, 26].map((offset, i) => (
        <path
          key={i}
          d={`M64 118 C${64 + offset * 0.4} 90 ${64 + offset} 55 ${64 + offset * 1.1} 22`}
          stroke={leaf}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          opacity={0.85 + (i % 2) * 0.15}
        />
      ))}
    </>
  ),
  bloom: ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      <path d="M64 118 C40 108 34 78 50 60 C58 74 62 96 64 118" fill={leaf} />
      <path d="M64 118 C88 108 94 78 78 60 C70 74 66 96 64 118" fill={leaf} />
      <g>
        <circle cx="64" cy="40" r="8" fill="#F1EAD9" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="64"
            cy="40"
            rx="6"
            ry="16"
            fill="#F1EAD9"
            opacity="0.9"
            transform={`rotate(${deg} 64 40) translate(0 -14)`}
          />
        ))}
        <circle cx="64" cy="40" r="6" fill="#D4A24C" />
      </g>
    </>
  ),
  cascade: ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      {[-1, -0.4, 0.3, 1].map((t, i) => (
        <path
          key={i}
          d={`M${64 + t * 10} 118 C${64 + t * 40} 130 ${64 + t * 60} 150 ${64 + t * 50} 172`}
          stroke={leaf}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      ))}
      <path d="M64 118 C40 104 40 70 64 55 C88 70 88 104 64 118 Z" fill={leaf} opacity="0.9" />
    </>
  ),
  fern: ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      {[-30, -15, 0, 15, 30].map((offset, i) => (
        <g key={i} transform={`rotate(${offset} 64 118)`}>
          <path d="M64 118 C64 90 64 60 64 30" stroke={leaf} strokeWidth="3" fill="none" />
          {[24, 40, 56, 72, 90].map((y) => (
            <g key={y}>
              <line x1="64" y1={118 - y} x2={64 - 10} y2={118 - y - 6} stroke={leaf} strokeWidth="3" strokeLinecap="round" />
              <line x1="64" y1={118 - y} x2={64 + 10} y2={118 - y - 6} stroke={leaf} strokeWidth="3" strokeLinecap="round" />
            </g>
          ))}
        </g>
      ))}
    </>
  ),
  palm: ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      <path d="M64 118 C64 95 64 70 64 45" stroke={leaf} strokeWidth="5" fill="none" />
      {[-70, -35, 0, 35, 70].map((deg, i) => (
        <path
          key={i}
          d="M64 60 C 90 55 110 40 120 20"
          stroke={leaf}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          transform={`rotate(${deg} 64 60)`}
          opacity={0.9}
        />
      ))}
    </>
  ),
  broadleaf: ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      <path d="M64 118 C64 100 58 90 50 82" stroke={leaf} strokeWidth="4" fill="none" />
      <path d="M50 82 C20 78 18 40 46 24 C60 44 58 66 50 82 Z" fill={leaf} />
      <path d="M64 118 C64 96 72 84 84 74" stroke={leaf} strokeWidth="4" fill="none" />
      <path d="M84 74 C114 66 118 30 90 16 C74 36 76 60 84 74 Z" fill={leaf} opacity="0.9" />
    </>
  ),
  'vine-bloom': ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      <path d="M64 118 C50 100 78 90 60 70 C44 52 76 40 58 20" stroke={leaf} strokeWidth="4" fill="none" strokeLinecap="round" />
      {[[60, 70], [58, 20], [66, 45]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx="0" cy="0" rx="4" ry="10" fill="#E4A5A0" transform={`rotate(${deg}) translate(0 -8)`} />
          ))}
          <circle r="3" fill="#D4A24C" />
        </g>
      ))}
    </>
  ),
  spike: ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      {[-24, -8, 8, 24].map((offset, i) => (
        <g key={i}>
          <path d={`M${64 + offset * 0.3} 118 C${64 + offset} 90 ${64 + offset} 60 ${64 + offset * 1.2} 34`} stroke={leaf} strokeWidth="3" fill="none" />
          {[0, 8, 16, 24, 32].map((y) => (
            <circle key={y} cx={64 + offset * 1.15} cy={38 + y} r="3" fill="#8F6BC9" opacity={0.9} />
          ))}
        </g>
      ))}
    </>
  ),
  rosette: ({ leaf, pot }) => (
    <>
      <Pot pot={pot} />
      {Array.from({ length: 10 }).map((_, i) => {
        const deg = i * 36;
        return (
          <ellipse
            key={i}
            cx="64"
            cy="100"
            rx="10"
            ry="32"
            fill={leaf}
            opacity={0.7 + (i % 3) * 0.1}
            transform={`rotate(${deg} 64 100) translate(0 -18)`}
          />
        );
      })}
      <circle cx="64" cy="98" r="8" fill={leaf} opacity="0.6" />
    </>
  ),
};

export default function PlantIllustration({ variant, leaf, pot, className }) {
  const render = variants[variant] || variants.blade;
  return (
    <svg
      viewBox="0 0 128 176"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <ellipse cx="64" cy="156" rx="34" ry="7" fill="#000000" opacity="0.12" />
      {render({ leaf, pot })}
    </svg>
  );
}
