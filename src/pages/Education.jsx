import { EDU_SERVICES, APPROACH } from '../data'
import { PageHero, SectionHead, FeatureCard, Reveal, JoinCTA } from '../components/Common'
import { EducationArt, BridgeArt } from '../components/Art'
import Icon from '../components/Icon'
import { FORM_URL } from '../config'

export default function Education() {
  return (
    <>
      <PageHero
        crumb="Education"
        title="Empowering Education at KAR IES"
        text="KAR IES is committed to advancing academic excellence, professional growth, and collaborative learning for students, educators, and institutions."
        Art={EducationArt}
      />

      <section className="section">
        <div className="container">
          <SectionHead center title="Our Educational Services" text="Six ways we bring students, professionals and institutions together." />
          <div className="grid grid-3">
            {EDU_SERVICES.map((s, i) => <FeatureCard key={s.title} {...s} delay={(i % 3) * 100} />)}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container two-col">
          <Reveal>
            <BridgeArt />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="h2">Bridging Academia and Industry</h2>
            <p className="lead">
              We act as the bridge between academia and industry, especially for institutions in towns and
              municipalities that are far from the big cities.
            </p>
            <ul className="ticks">
              <li><Icon name="check" size={18} />Free seminars and workshops for final year UG and PG students</li>
              <li><Icon name="check" size={18} />Awareness of future options and professions</li>
              <li><Icon name="check" size={18} />Quality journals and magazines for library users</li>
            </ul>
            <a className="btn btn-primary" href={FORM_URL}>Book a seminar</a>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center title="Our Approach" text="At KAR IES, education goes beyond classrooms. By focusing on both academic rigor and practical exposure, we help students and professionals become confident contributors to society and industry." />
          <div className="grid grid-2">
            {APPROACH.map((a, i) => <FeatureCard key={a.title} {...a} delay={i * 120} />)}
          </div>
        </div>
      </section>

      <JoinCTA />
    </>
  )
}
