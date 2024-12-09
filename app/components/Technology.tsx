import Image from 'next/image'

export default function Technology() {
  return (
    <section id="technology" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">AI/ML Models</h3>
            <p className="mb-4">
              We use state-of-the-art machine learning algorithms including image classification, 
              object detection, and deep learning for accurate weed identification.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">IoT Integration</h3>
            <p className="mb-4">
              Our system integrates various IoT sensors such as cameras, temperature sensors, and 
              soil moisture sensors to collect real-time data for the AI model.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Data Pipeline</h3>
          <Image
            src="/placeholder.svg" 
            alt="Data Pipeline Diagram" 
            width={800} 
            height={400} 
            className="mx-auto text-black"
          />
          
        </div>
      </div>
    </section>
  )
}

