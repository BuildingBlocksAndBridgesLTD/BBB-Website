import ServicePage from '../components/ServicePage'
import images from '../data/images.json'

export default function AnimalTherapy() {
  return (
    <ServicePage
      slug="animal"
      title="Animal Therapy & Respite"
      eyebrow="Connecting, Caring, and Growing"
      accent="#854F0B"
      accentLight="#FAEEDA"
      image={images.animal}
      image2={images.animal2}
      image2Caption="Building trust and connection through gentle interaction with animals"
      intro={[
        "Spending time with horses, farmyard animals, and exploring nature provides a unique and calming therapeutic experience for young people. These sessions offer more than just time outdoors. They foster emotional regulation, responsibility, and self-awareness, while helping participants discover new strengths and interests.",
        "Animals have a remarkable way of building trust and connection. Caring for them encourages patience, empathy, and communication, while offering young people a sense of achievement as they nurture and support another living being. Many students describe the experience as grounding, calming, and empowering: a space where they can relax, try new things, and feel safe being themselves."
      ]}
      fostersTitle="Animal therapy fosters:"
      fostersList={[
        { title: "Emotional regulation & calm", body: "Spending time with animals reduces stress and encourages mindfulness." },
        { title: "Empathy & responsibility", body: "Caring for animals helps youth understand the impact of their actions and nurture others." },
        { title: "Confidence & self-awareness", body: "New experiences build self-belief and personal growth." },
        { title: "Connection & social skills", body: "Interacting with animals and peers strengthens communication, teamwork, and trust." },
        { title: "Exploration & engagement", body: "Nature and animal-based activities offer fresh experiences that spark curiosity and joy." }
      ]}
      closingLine="Through compassion and calm interaction, animal therapy nurtures trust, emotional growth and inner balance."
    />
  )
}
