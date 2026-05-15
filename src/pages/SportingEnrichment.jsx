import ServicePage from '../components/ServicePage'
import images from '../data/images.json'

export default function SportingEnrichment() {
  return (
    <ServicePage
      slug="sport"
      title="Sporting Enrichment"
      eyebrow="Building Discipline, Determination & Self Regulation"
      accent="#3B6D11"
      accentLight="#EAF3DE"
      image={images.sport}
      image2={images.sport2}
      image2Caption="Group football session: teamwork and shared experience"
      intro={[
        "From football and basketball to athletics, racket sports, and gym sessions, our sports activities give young people the chance to challenge themselves, work as a team, and experience the joy of progress. Every session focuses on teamwork, discipline, confidence, and communication, helping students grow both on and off the court.",
        "Through movement and shared goals, participants learn how effort leads to improvement, how to support one another, and how to handle emotions in a positive way. Sports become a safe space for self-expression, confidence building, and resilience."
      ]}
      fostersTitle="Sports fosters:"
      fostersList={[
        { title: "Resilience & Determination", body: "Learning to keep trying, even when things are tough." },
        { title: "Teamwork & Empathy", body: "Understanding others and encouraging everyone to do their best." },
        { title: "Focus & Discipline", body: "Building patience, routine, and a positive mindset." },
        { title: "Confidence & Wellbeing", body: "Feeling proud of effort, growth, and belonging." },
        "Our sports sessions go beyond the game. They help young people discover their strengths, manage their emotions, and celebrate progress at every level."
      ]}
      closingLine="Sports builds more than physical skills, it shapes character, connection and inspires perseverance."
    />
  )
}
