import { Button } from "@/components/ui/button"

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">AI/ML Weed Detection Software</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Automated weed identification</li>
              <li>Real-time alerts and reporting</li>
              <li>Integration with existing farm management systems</li>
            </ul>
            <Button>Learn More</Button>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">IoT Devices & Sensors</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>High-resolution camera modules</li>
              <li>Environmental sensors (temperature, humidity, soil moisture)</li>
              <li>Edge computing devices for real-time processing</li>
            </ul>
            <Button>View Devices</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

