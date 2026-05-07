import './styles.css'
import {
  exceptions,
  heroMetrics,
  postureTrend,
  remediationQueue,
  scorecards,
  tierMix,
  vendors,
  workflowStages,
} from './data'

function LineChart() {
  const width = 420
  const height = 150
  const padding = 20
  const max = 80
  const min = 55

  const points = postureTrend
    .map((point, index) => {
      const x = padding + (index * (width - padding * 2)) / (postureTrend.length - 1)
      const y =
        height - padding - ((point.value - min) / (max - min)) * (height - padding * 2)
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="trend-chart" role="img" aria-label="Vendor posture trend">
      <defs>
        <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(87, 208, 255, 0.38)" />
          <stop offset="100%" stopColor="rgba(87, 208, 255, 0.03)" />
        </linearGradient>
      </defs>
      {[60, 65, 70, 75, 80].map((grid) => {
        const y = height - padding - ((grid - min) / (max - min)) * (height - padding * 2)
        return <line key={grid} x1={padding} x2={width - padding} y1={y} y2={y} className="chart-grid" />
      })}
      <polyline points={points} fill="none" stroke="#57d0ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <polygon
        points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
        fill="url(#trendFill)"
      />
      {postureTrend.map((point, index) => {
        const x = padding + (index * (width - padding * 2)) / (postureTrend.length - 1)
        const y =
          height - padding - ((point.value - min) / (max - min)) * (height - padding * 2)
        return (
          <g key={point.month}>
            <circle cx={x} cy={y} r="5" fill="#09111d" stroke="#ffb65c" strokeWidth="3" />
            <text x={x} y={height - 2} textAnchor="middle" className="chart-label">
              {point.month}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function TierBars() {
  const max = Math.max(...tierMix.map((item) => item.value))
  return (
    <div className="tier-bars" aria-label="Vendor risk tier distribution">
      {tierMix.map((item) => (
        <div key={item.label} className="tier-bar-row">
          <div>
            <p className="eyebrow">{item.label}</p>
            <strong>{item.value} vendors</strong>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${(item.value / max) * 100}%`, background: item.color }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function VendorTable() {
  return (
    <table className="vendor-table">
      <thead>
        <tr>
          <th>Vendor</th>
          <th>Tier</th>
          <th>State</th>
          <th>Posture</th>
          <th>SLA risk</th>
          <th>Open actions</th>
        </tr>
      </thead>
      <tbody>
        {vendors.map((vendor) => (
          <tr key={vendor.name}>
            <td>
              <strong>{vendor.name}</strong>
              <span>{vendor.category}</span>
            </td>
            <td>{vendor.tier}</td>
            <td>
              <span className={`state-pill state-${vendor.state.toLowerCase().replace(/\s+/g, '-')}`}>
                {vendor.state}
              </span>
            </td>
            <td>{vendor.posture}</td>
            <td>{vendor.slaRisk}</td>
            <td>{vendor.openActions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="kicker">Vendor Risk Operations Center</p>
          <h1>Run renewals, exceptions, and remediation with one executive-grade control surface.</h1>
          <p className="lead">
            A premium internal workspace for third-party risk review, policy exceptions, control evidence,
            renewal pressure, and remediation sequencing.
          </p>
          <div className="hero-actions">
            <a href="https://kineticgain.com/" target="_blank" rel="noreferrer" className="primary-link">
              Kinetic Gain
            </a>
            <a href="https://mizcausevic.com/skills/" target="_blank" rel="noreferrer" className="secondary-link">
              Skills / Portfolio
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p className="eyebrow">Executive snapshot</p>
          <div className="metrics-grid">
            {heroMetrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scorecard-grid">
        {scorecards.map((card) => (
          <article key={card.title} className="scorecard">
            <p className="eyebrow">{card.title}</p>
            <strong>{card.score}</strong>
            <span>{card.detail}</span>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Portfolio posture</p>
              <h2>Critical vendor exposure is improving, but renewal pressure is compressing decision time.</h2>
            </div>
            <span className="annotation">Quarterly target: 80 posture score</span>
          </div>
          <LineChart />
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Tier mix</p>
              <h2>Where the risk surface sits</h2>
            </div>
          </div>
          <TierBars />
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Vendor review desk</p>
              <h2>Review queue across critical suppliers and renewal windows</h2>
            </div>
            <span className="annotation">12 findings require legal or privacy sign-off</span>
          </div>
          <VendorTable />
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Workflow stages</p>
              <h2>Where attention is stacking up</h2>
            </div>
          </div>
          <div className="workflow-stack">
            {workflowStages.map((stage) => (
              <div key={stage.name} className="workflow-item">
                <div>
                  <strong>{stage.name}</strong>
                  <p>{stage.detail}</p>
                </div>
                <span>{stage.count}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Exception review</p>
              <h2>Policy waivers and evidence gaps</h2>
            </div>
          </div>
          <div className="exception-list">
            {exceptions.map((item) => (
              <article key={`${item.vendor}-${item.exception}`} className="exception-card">
                <div>
                  <strong>{item.vendor}</strong>
                  <p>{item.exception}</p>
                </div>
                <div className="exception-meta">
                  <span>{item.owner}</span>
                  <b>{item.due}</b>
                  <small>{item.severity}</small>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Remediation queue</p>
              <h2>Operator actions this sprint</h2>
            </div>
          </div>
          <div className="queue-list">
            {remediationQueue.map((item) => (
              <article key={item.title} className="queue-card">
                <div>
                  <span className="priority">{item.priority}</span>
                  <strong>{item.title}</strong>
                </div>
                <p>{item.owner}</p>
                <b>{item.count} open tasks</b>
              </article>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
