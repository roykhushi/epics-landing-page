import { Button } from "@/components/ui/button"

export default function Demo() {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">See It In Action</h2>
        <div className="bg-gray-200 p-8 rounded-lg mb-8">
          {/* Placeholder for interactive demo */}
          <div className="aspect-video bg-gray-300 flex items-center justify-center">
            <p className="text-xl">Interactive Demo Placeholder</p>
          </div>
        </div>
        <div className="text-center">
          <Button size="lg">Try Live Demo</Button>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Real-World Use Cases</h3>
          <ul className="list-disc pl-6">
            <li>Precision agriculture for large-scale farms</li>
            <li>Automated weed management in greenhouse environments</li>
            <li>Cost reduction in manual labor for small-scale farmers</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

