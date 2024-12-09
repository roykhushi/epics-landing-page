export default function Results() {
    return (
      <section id="results" className="bg-green-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Impact & Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
              <p>Reduced herbicide use by up to 90% in pilot studies, promoting sustainable farming practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Economic Benefits</h3>
              <p>Farmers reported an average of 30% reduction in weed management costs and 20% increase in crop yield.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Efficiency Gains</h3>
              <p>Automated weed detection reduced manual labor hours by 70%, allowing farmers to focus on other critical tasks.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  