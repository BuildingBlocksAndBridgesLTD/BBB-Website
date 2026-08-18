import { Link } from 'react-router-dom'

export default function OurStory() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Our Story</div>
          <h1>Every Young Person Has a Story</h1>
        </div>
      </section>

      <section className="section cream">
        <div className="privacy-content">
          <p>At Building Blocks &amp; Bridges, we believe every young person has potential &mdash; sometimes they just need the right environment, the right opportunity, and someone who believes in them.</p>

          <p>That belief comes from my own journey.</p>

          <p>Growing up, I experienced challenges that shaped the way I viewed education, identity and belonging. Like many of the young people I work with today, there were times when I felt misunderstood, struggled to engage in traditional learning environments, and searched for a place where I truly belonged.</p>

          <p>Behind disruption there can be low self-esteem. Behind disengagement there can be a young person who simply doesn't believe they are capable of succeeding. I have learnt that behaviour is often communication.</p>

          <p>Everything changed when I discovered music and sport. They became far more than hobbies. They gave me confidence, discipline, purpose and a positive outlet. Through drumming, steel pan and sport, I found positive role models, developed resilience, and began to realise that my circumstances didn't have to define my future. Writing and rapping gave me a safe space to share my thoughts and process what I was feeling, in a way I couldn't always find the words for elsewhere.</p>

          <p>Those experiences inspired me to create Building Blocks &amp; Bridges.</p>

          <p>Today, I work alongside schools, families and services to support young people through mentoring, music and sport. Every session is designed to build confidence, resilience, emotional wellbeing, communication and a sense of belonging &mdash; helping young people recognise strengths they may not yet see in themselves.</p>

          <p>Building Blocks &amp; Bridges was founded on one simple belief: every young person deserves someone who sees their potential before they see it themselves.</p>

          <p><strong>Because our past can influence us, but it should never define us.</strong></p>

          <p style={{ marginTop: '36px' }}>
            <Link to="/get-in-contact" className="btn btn-primary">Make an enquiry <i className="ti ti-arrow-right"></i></Link>
          </p>
        </div>
      </section>
    </>
  )
}
