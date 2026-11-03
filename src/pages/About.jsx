import { VALUES, AUDIENCE } from '../data'
import { PageHero, SectionHead, FeatureCard, Reveal, JoinCTA } from '../components/Common'
import { BridgeArt } from '../components/Art'

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        title="About KAR IES"
        text="We create meaningful platforms for learning, collaboration, participation, conduction and growth across Academic, Sports and Athletic fields."
        Art={BridgeArt}
      />

      <section className="section">
        <div className="container narrow">
          <Reveal>
            <h2 className="h2">What drives us</h2>
            <p className="lead">
              Reviving physical activities and conventional learning are our prime targets: to bring back the Glorious
              Practices that certainly helped us to live healthily. Through conferences, training, tournaments and
              marathons, we give students, professionals, corporates and young athletes a place to grow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead center title="What we stand for" />
          <div className="grid grid-4">
            {VALUES.map((v, i) => <FeatureCard key={v.title} {...v} delay={i * 90} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center title="Who we serve" />
          <div className="audience">
            {AUDIENCE.map((a, i) => <FeatureCard key={a.title} {...a} delay={i * 80} />)}
          </div>
        </div>
      </section>

      <JoinCTA />
    </>
  )
}
