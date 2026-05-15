import ServicePage from '../components/ServicePage'
import images from '../data/images.json'

export default function MusicEnrichment() {
  return (
    <ServicePage
      slug="music"
      title="Music Enrichment"
      eyebrow="Developing Confidence, Creativity & Communication Through Music"
      accent="#D4537E"
      accentLight="#FBEAF0"
      image={images.music}
      image2={images.music2}
      image2Caption="Steel pans at a community event in Berkshire"
      intro={[
        "Our Music Enrichment Program uses Steel Pans, Percussion, Drumming, Rap, and Spoken Word to give young people a powerful outlet for creativity and self expression. In a fun, structured, and inclusive setting, students explore rhythm, language, and sound while building teamwork, communication, and confidence.",
        "Through music, participants learn to express emotions constructively, develop focus and self-regulation, and take pride in their achievements. Group performance and collaboration strengthen listening and leadership skills, while creative writing and improvisation inspire self-belief and personal growth."
      ]}
      fostersTitle="Music fosters:"
      fostersList={[
        { title: "Confidence and self-expression", body: "Encouraging young people to find their voice, take creative risks, and celebrate their individuality through performance and participation." },
        { title: "Emotional regulation and focus", body: "Helping students channel energy, manage emotions, and develop mindfulness through rhythm, repetition, and musical flow." },
        { title: "Teamwork and communication", body: "Building trust, respect, and active listening as participants learn to play in harmony, collaborate, and support one another." },
        { title: "Creativity, identity, and pride", body: "Inspiring imagination and self-discovery through songwriting, improvisation, and shared achievement, nurturing a sense of belonging and cultural identity." },
        { title: "Resilience and perseverance", body: "Teaching the value of practice, patience, and persistence, showing that progress comes from dedication and effort." },
        { title: "Empathy and connection", body: "Encouraging students to understand and respond to others' emotions, creating meaningful connections through shared musical experiences." },
        { title: "Joy and wellbeing", body: "Promoting positive mental health, reducing stress, and creating moments of happiness and fulfilment through the universal language of music." }
      ]}
      closingLine="Music is more than an art form, it's a bridge to connection, growth, and self discovery."
    />
  )
}
