import { SPORTS_SERVICES, DISCIPLINES, PATHWAY } from '../data'
import { PageHero, SectionHead, FeatureCard, Reveal, JoinCTA } from '../components/Common'
import { SportsArt } from '../components/Art'
import Icon from '../components/Icon'

export default function Sports() {
  return (
    <>
      <PageHero
        crumb="Sports"
        title="Empowering Sports and Games at KAR IES"
        text="KAR IES is committed to advancing the growth in Sports and Games. Our aim is to bring back the glory of physical presence in games and sports thus helping the youth to be stronger, healthy and contribute to the National by exceling. The meritorious Sports and Games Personnel will be identified, trained and sponsored to participate in State, National and International Levels."
        Art={SportsArt}
      />

      <section className="section">
        <div className="container">
          <SectionHead center title="Disciplines we organize" />
          <Reveal className="disciplines">
            {DISCIPLINES.map((d) => (
              <span key={d.label} className="disc"><Icon name={d.icon} size={20} />{d.label}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead center title="Our Services in Sports and Games" text="Nine ways we support corporates, colleges and budding athletes." />
          <div className="grid grid-3">
            {SPORTS_SERVICES.map((s, i) => <FeatureCard key={s.title} {...s} delay={(i % 3) * 100} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center title="The athlete pathway" text="Identified, trained and sponsored to compete at State, National and International levels." />
          <div className="pathway">
            {PATHWAY.map((s, i) => (
              <Reveal key={s.title} delay={i * 120} className="step">
                <span className="icon-bubble lg"><Icon name={s.icon} size={28} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="levels">
            <span>State</span><i /><span>National</span><i /><span>International</span>
          </Reveal>
        </div>
      </section>

      <section className="section tinted">
        <div className="container narrow">
          <SectionHead center title="Our Approach" text="At KAR IES, education goes beyond classrooms. By focusing on both academic rigor and practical exposure, we help students and professionals become confident contributors to society and industry." />
        </div>
      </section>

      <JoinCTA />
    </>
  )
}
