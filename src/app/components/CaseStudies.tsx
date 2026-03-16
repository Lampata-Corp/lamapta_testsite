import { caseStudies } from "../content/siteContent";
const heatColors = [
  "#012753",
  "#013463",
  "#00458b",
  "#0d5ea8",
  "#347dbb",
  "#77a9d0",
  "#b8d0e6",
  "#f5d704",
  "#f5d704",
  "#f5d704",
  "#f5d704",
  "#f5d704",
];

const heatCells = Array.from({ length: 60 }, (_, index) => ({
  color: heatColors[index % heatColors.length],
  delay: `${(index % 6) * 0.35}s`,
  duration: `${2 + ((index * 7) % 20) / 10}s`,
  opacity: 0.62 + ((index * 13) % 30) / 100,
}));

export function CaseStudies() {
  return (
    <section className="section case-studies-reference" id="case-studies">
      <div className="case-studies-inner">
        <div className="case-section-header">
          <div className="case-section-label">Case Studies</div>
          <h2>
            Real impact.
            <br />
            Measurable outcomes.
          </h2>
          <p>
            From urban resilience to conservation to global logistics — here's how our
            geospatial AI work creates change at scale.
          </p>
        </div>

        <div className="cs-grid">
          {caseStudies.map((study) => (
            <article key={study.title} className="cs-card">
              {study.visual === "response" && (
                <div className="cs-visual cs-heat">
                  <div className="heat-grid">
                    {heatCells.map((cell, index) => (
                      <div
                        key={index}
                        className="heat-cell"
                        style={{
                          backgroundColor: cell.color,
                          animationDelay: cell.delay,
                          animationDuration: cell.duration,
                          opacity: cell.opacity,
                        }}
                      />
                    ))}
                  </div>
                  <span className="cs-badge">{study.badge}</span>
                  <span className="cs-metric">{study.metric}</span>
                </div>
              )}

              {study.visual === "footprint" && (
                <div className="cs-visual cs-forest">
                  <div className="forest-pattern" />
                  <svg
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }}
                    viewBox="0 0 400 200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern id="treePat" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <polygon points="10,2 18,18 2,18" fill="#00458b" opacity="0.55" />
                      </pattern>
                    </defs>
                    <rect width="400" height="200" fill="url(#treePat)" />
                    <rect x="60" y="30" width="80" height="60" fill="var(--brand-gold-medium)" rx="4" />
                    <rect x="200" y="80" width="100" height="50" fill="var(--brand-gold-solid)" rx="4" />
                    <rect x="100" y="130" width="60" height="50" fill="var(--brand-gold-solid)" rx="4" />
                    <circle cx="100" cy="60" r="20" fill="var(--brand-gold-soft)" />
                    <circle cx="250" cy="105" r="15" fill="var(--brand-gold-solid)" />
                  </svg>
                  <span className="cs-badge">{study.badge}</span>
                  <span className="cs-metric">{study.metric}</span>
                </div>
              )}

              {study.visual === "mobility" && (
                <div className="cs-visual cs-port">
                  <div className="port-lines">
                    <div className="port-line" style={{ top: "30%", left: 0, width: "100%", animationDelay: "0s" }} />
                    <div className="port-line" style={{ top: "55%", left: 0, width: "100%", animationDelay: "0.8s" }} />
                    <div className="port-line" style={{ top: "75%", left: 0, width: "100%", animationDelay: "1.6s" }} />
                  </div>
                  <svg
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                    viewBox="0 0 400 200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect x="20" y="100" width="60" height="80" fill="rgba(255,255,255,0.06)" rx="2" />
                    <rect x="90" y="80" width="40" height="100" fill="rgba(255,255,255,0.08)" rx="2" />
                    <rect x="140" y="110" width="50" height="70" fill="rgba(255,255,255,0.06)" rx="2" />
                    <line x1="40" y1="100" x2="40" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="50" x2="70" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="110" y1="80" x2="110" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="85" y1="40" x2="135" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="220" y="130" width="120" height="30" fill="var(--brand-gold-solid)" rx="4" />
                    <rect x="235" y="115" width="80" height="20" fill="var(--brand-gold-solid)" rx="3" />
                    <rect x="300" y="160" width="100" height="25" fill="rgba(255,255,255,0.08)" rx="4" />
                    <path d="M280 145 Q350 100 390 60" stroke="var(--brand-gold-strong)" strokeWidth="1.5" strokeDasharray="6,4" />
                    <circle cx="390" cy="60" r="4" fill="var(--brand-gold-bold)" />
                    <path d="M350 172 Q380 140 395 110" stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" strokeDasharray="4,4" />
                  </svg>
                  <span className="cs-badge">{study.badge}</span>
                  <span className="cs-metric">{study.metric}</span>
                </div>
              )}

              <div className="cs-body">
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <div className="cs-outcomes">
                  {study.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className={outcome.startsWith("−") || outcome.startsWith("-") ? "cs-outcome down" : "cs-outcome"}
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
                <div className="cs-client">
                  <div className="cs-client-dot" />
                  {study.client}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
