export default function About() {
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="mb-4">
                We aim to revolutionize farming through technology, making weed management more efficient, 
                cost-effective, and environmentally friendly.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
              <p className="mb-4">
                Traditional weed management is labor-intensive, costly, and often relies on harmful chemicals. 
                Our AI/ML and IoT solution provides an innovative response to these challenges.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
            <p>
              Our system combines advanced AI/ML models with IoT sensors to detect weeds in real-time. 
              The data collected by IoT devices is analyzed by our AI algorithms, enabling precise 
              identification and targeted treatment of weeds, reducing herbicide use and improving crop yield.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  