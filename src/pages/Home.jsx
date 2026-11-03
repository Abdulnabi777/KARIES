import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FORM_URL } from '../config'
import { PILLARS, INITIATIVES, SERVICES, STATS, MARQUEE, AUDIENCE, PATHWAY } from '../data'
import { Reveal, SectionHead, Marquee, Stat, FeatureCard, JoinCTA, Wave } from '../components/Common'
import { HeroArt, EducationArt, SportsArt } from '../components/Art'
import Icon from '../components/Icon'

const TABS = ['All', 'Education', 'Sports', 'Corporate & CSR']

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="pill"><Icon name="star" size={14} /> Academic · Sports · Athletics</span>
          <h1>Empowering Knowledge, Innovation, and Sportsmanship</h1>
          <p>
            Creating meaningful platforms for learning, collaboration, participation, conduction and growth across
            Academic, Sports and Athletic fields. Reviving physical activities and conventional learning are the prime
            targets to bring back the Glorious Practices that certainly helped us to live healthily.
          </p>
          <div className="hero-actions">
            <a className="btn btn-light" href={FORM_URL}>Contact Us <Icon name="arrow" size={18} /></a>
            <a className="btn btn-ghost" href="#programs">Explore programs</a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroArt />
          <span className="chip chip-1"><Icon name="trophy" size={22} /></span>
          <span className="chip chip-2"><Icon name="globe" size={22} /></span>
          <span className="chip chip-3"><Icon name="medal" size={22} /></span>
          <span className="chip chip-4"><Icon name="users" size={22} /></span>
        </div>
      </div>
      <Wave />
    </section>
  )
}

function Initiatives() {
  const [tab, setTab] = useState('All')
  const list = tab === 'All' ? INITIATIVES : INITIATIVES.filter((i) => i.cat === tab)
  return (
    <section className="section" id="programs">
      <div className="container">
        <SectionHead
          title="Our Signature Initiatives"
          text="Discover the most valued services at KAR IES, designed to enrich learning and foster excellence in Academic, Games and Sports domains."
        />
        <div className="tabs" role="tablist" aria-label="Filter initiatives">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        <ul className="initiatives" key={tab}>
          {list.map((it, i) => (
            <li key={it.text} style={{ '--i': i }}>
              <span className="icon-bubble sm"><Icon name={it.icon} size={20} /></span>
              <div>
                <small>{it.cat}</small>
                <p>{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Split() {
  return (
    <section className="section tinted">
      <div className="container split-grid">
        <Reveal className="split-card">
          <EducationArt />
          <h3>Education</h3>
          <p>Conferences, training, journals, library networks and institutional tie-ups that connect academia with industry.</p>
          <Link className="link-arrow" to="/education">Explore education <Icon name="arrow" size={18} /></Link>
        </Reveal>
        <Reveal delay={120} className="split-card">
          <SportsArt />
          <h3>Sports & Games</h3>
          <p>Corporate tournaments, marathons, championships and a clear pathway for rural and budding talent.</p>
          <Link className="link-arrow" to="/sports">Explore sports <Icon name="arrow" size={18} /></Link>
        </Reveal>
      </div>
    </section>
  )
}

function Pathway() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead center title="From hidden talent to the podium" text="A simple four-step pathway for every young sportsperson we meet." />
        <div className="pathway">
          {PATHWAY.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="step">
              <span className="icon-bubble lg"><Icon name={s.icon} size={28} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={MARQUEE} />

      <section className="container pillars">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} as="article" className="card pillar">
            <span className="icon-bubble"><Icon name={p.icon} size={26} /></span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <Link className="link-arrow" to={p.to}>Learn more <Icon name="arrow" size={18} /></Link>
          </Reveal>
        ))}
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {STATS.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </section>

      <Initiatives />
      <Split />
      <Pathway />

      <section className="section tinted">
        <div className="container">
          <SectionHead center title="Be in Demand with Our Professional Services" text="Explore our core initiatives designed to empower, educate, and inspire institutions, professionals, and students." />
          <div className="grid grid-5">
            {SERVICES.map((s, i) => <FeatureCard key={s.title} {...s} delay={i * 90} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center title="Who we work with" text="Programs shaped around the people who take part in them." />
          <div className="audience">
            {AUDIENCE.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="aud">
                <span className="icon-bubble"><Icon name={a.icon} size={24} /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JoinCTA />
    </>
  )
}
