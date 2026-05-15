import { EnquirySection } from '../components/Sections'
import images from '../data/images.json'

export default function WhoWeAre() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Who we are</div>
          <h1>Hello</h1>
          <p>Meet Jamah Lynam, founder of Building Blocks and Bridges, youth mentor and enrichment specialist with over a decade of experience.</p>
        </div>
      </section>

      <section className="section cream">
        <div className="who-grid">
          <div className="who-image-wrap">
            <img src={images.about} alt="Jamah Lynam" />
          </div>
          <div className="who-text">
            <h3>Hi, I'm Jamah</h3>
            <p>Hi, my name is Jamah, founder of Building Blocks and Bridges. I'm a youth mentor and enrichment specialist with over ten years of experience working with young people as a tutor, youth worker, and advocate. I'm passionate about helping young people unlock their potential through music, sport, and meaningful connection, empowering them to believe in themselves and build a brighter future.</p>

            <h3>My Story</h3>
            <p>Growing up in challenging circumstances taught me the importance of resilience, creativity, and positive role models. Music and sport became my foundations, spaces where I could channel my energy, express myself, and build confidence. Those experiences inspired me to create Building Blocks and Bridges, a service dedicated to giving young people the same opportunities for growth, belonging, and success.</p>

            <p>At Building Blocks and Bridges, we partner closely with schools, services, and families to deliver inclusive mentoring and enrichment programmes that make a measurable impact. Our work supports young people aged 8–18, particularly those with additional needs or barriers to learning, through creative and active approaches that re-engage them in education and life. Whether it's through a drumming session that boosts self-expression, a football activity that builds teamwork, or one-to-one mentoring that nurtures emotional wellbeing, each programme is designed to build confidence, resilience, and positive behaviour.</p>

            <p>By collaborating with Schools, SENCOs, and local services, we ensure our sessions complement school priorities, EHCP outcomes, and wider wellbeing goals. The result is improved engagement, attendance, and emotional regulation, helping students to reconnect with learning while supporting the whole school's inclusion and behaviour strategies.</p>

            <p>I believe it truly takes a village to raise a child, and by building strong, connected communities, we create the best environment for young people to thrive. Working alongside a trusted network of mentors, coaches, and creative practitioners, I'm proud to lead a service that bridges gaps, builds confidence, and empowers the next generation to achieve their full potential, both in and beyond the classroom.</p>
          </div>
        </div>
      </section>

      <EnquirySection />
    </>
  )
}
