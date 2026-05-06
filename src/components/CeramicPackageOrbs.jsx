import { Link } from 'react-router-dom'
import { Crown, Star, Certificate, Lightning } from '@phosphor-icons/react'

const PKGS = [
  {
    tier: 'Gold',
    name: 'Gold Package',
    desc: 'Ultimate 9H coating with Top Coat, Wheel & Caliper, and Glass.',
    href: '/ceramic-pro-gold-package/',
    Icon: Crown,
    cls: 'orb-gold',
    dur1: 8,
    dur2: 14,
  },
  {
    tier: 'Silver',
    name: 'Silver Package',
    desc: 'Popular 5-year 9H package with Top Coat, Wheel & Caliper, and Glass.',
    href: '/ceramic-pro-silver-package/',
    Icon: Star,
    cls: 'orb-silver',
    dur1: 11,
    dur2: 19,
  },
  {
    tier: 'Bronze',
    name: 'Bronze Package',
    desc: 'Value-focused Top Coat package with Wheel & Caliper and Glass.',
    href: '/ceramic-pro-bronze-package/',
    Icon: Certificate,
    cls: 'orb-bronze',
    dur1: 7,
    dur2: 13,
  },
  {
    tier: 'Sport',
    name: 'Sport Package',
    desc: 'Introductory Ceramic Pro Sport for gloss and easier maintenance.',
    href: '/ceramic-pro-sport-package/',
    Icon: Lightning,
    cls: 'orb-sport',
    dur1: 9,
    dur2: 16,
  },
]

export default function CeramicPackageOrbs() {
  return (
    <div className="orbs-panel">
      <div className="orbs-grid">
        <svg className="orbs-svg" aria-hidden="true" viewBox="0 0 1000 420" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c9a24a" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#c9a24a" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow-line">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <line x1="125" y1="70" x2="375" y2="140" stroke="url(#cg)" strokeWidth="1.5" strokeDasharray="8 6" filter="url(#glow-line)" />
          <line x1="375" y1="140" x2="625" y2="210" stroke="url(#cg)" strokeWidth="1.5" strokeDasharray="8 6" filter="url(#glow-line)" />
          <line x1="625" y1="210" x2="875" y2="280" stroke="url(#cg)" strokeWidth="1.5" strokeDasharray="8 6" filter="url(#glow-line)" />
        </svg>

        {PKGS.map(({ tier, name, desc, href, Icon, cls, dur1, dur2 }, i) => (
          <Link
            key={href}
            className={`orb-item ${cls}`}
            to={href}
            style={{ '--stagger': `${i * 70}px`, '--delay': `${i * 0.18}s` }}
          >
            <div className="orb-wrap">
              <div className="orb-ring orb-ring-2" style={{ animationDuration: `${dur2}s` }} />
              <div className="orb-ring orb-ring-1" style={{ animationDuration: `${dur1}s` }} />
              <div className="orb-ring orb-ring-3" style={{ animationDuration: `${(dur1 + dur2) / 2}s` }} />
              <div className="orb-core">
                <Icon size={46} weight="duotone" />
              </div>
            </div>
            <div className="orb-info">
              <span className="orb-tier">{tier}</span>
              <strong className="orb-name">{name}</strong>
              <p className="orb-desc">{desc}</p>
              <span className="orb-cta">View Package →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
