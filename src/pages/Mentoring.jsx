import ServicePage from '../components/ServicePage'
import images from '../data/images.json'

export default function Mentoring() {
  return (
    <ServicePage
      slug="mentoring"
      title="Mentoring & Interventions"
      eyebrow="Building Trust, Skills, and Confidence"
      accent="#185FA5"
      accentLight="#E6F1FB"
      image={images.mentoring}
      image2={images.mentoring2}
      image2Caption="1:1 outdoor time, giving young people space to talk and reflect"
      intro={[
        "Our one-to-one and small group mentoring provides young people with consistent support in a safe, welcoming space where they can be themselves. Sessions are built on trust, understanding, and positive relationships, helping students feel heard, valued, and supported as they navigate challenges.",
        "We believe prevention is better than cure, and that we must meet children where they are, in their state of mind. Mentoring takes place in classrooms and small group settings, supporting young people in class, transitioning back to school, or adjusting to new routines.",
        "Mentoring and intervention sessions also offer students a break from the classroom environment, giving them time to mentally prepare for lessons they may find challenging, or to reflect on recent events and make positive choices moving forward.",
        "Mentoring helps young people build confidence, speak up, and develop strategies for success. Through guided activities and conversations, students explore:"
      ]}
      extraSections={
        <div className="fosters-list" style={{ '--accent': '#185FA5', marginBottom: 0 }}>
          <ul>
            <li><span><strong>Emotional regulation & self-reflection:</strong> recognising feelings, pausing, and responding thoughtfully.</span></li>
            <li><span><strong>Communication & social skills:</strong> expressing themselves clearly, listening, and resolving conflicts.</span></li>
            <li><span><strong>Life skills & personal growth:</strong> setting goals, problem-solving, and building resilience.</span></li>
            <li><span><strong>Decision-making & self-awareness:</strong> understanding the impact of choices on themselves and others.</span></li>
          </ul>
        </div>
      }
      fostersTitle="Youth mentoring fosters:"
      fostersList={[
        "Trust & safe relationships",
        "Emotional regulation & resilience",
        "Confidence & self-belief",
        "Communication & social skills",
        "Life strategies & problem-solving",
        "School engagement, reflection & transition support"
      ]}
      closingLine="Through mentoring, young people gain the confidence, insight, and tools to thrive, knowing they have someone who supports them, believes in them, and meets them where they are."
    />
  )
}
