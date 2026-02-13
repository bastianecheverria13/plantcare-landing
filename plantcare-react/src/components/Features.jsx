import { Droplets, Radio, BrainCircuit } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Droplets,
      title: 'Recordatorios Inteligentes',
      description: 'Olvídate de regar de más o de menos. PlantCare aprende las necesidades de cada planta y te avisa en el momento exacto para regarlas, fertilizarlas o podarlas.'
    },
    {
      icon: Radio,
      title: 'Sensores IoT Integrados',
      description: 'Conecta sensores de humedad, luz y temperatura. Monitorea en tiempo real las condiciones de tus plantas desde cualquier lugar y recibe alertas instantáneas.'
    },
    {
      icon: BrainCircuit,
      title: 'IA que Aprende',
      description: 'Nuestra inteligencia artificial analiza el comportamiento de tus plantas y te da recomendaciones personalizadas basadas en su ubicación, clima local y estado de salud.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <span className="section-tag">Tecnología para tus plantas</span>
          <h2 className="section-title">Todo en una<br/>sola app</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon-svg" size={28} strokeWidth={2} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
