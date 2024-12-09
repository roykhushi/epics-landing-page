import Link from 'next/link'

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog & Research</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Latest Research Paper</h3>
            <p className="mb-4">Advancements in AI-Driven Weed Detection Algorithms</p>
            <Link href="#" className="text-blue-600 hover:underline">Read Paper</Link>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Product Update</h3>
            <p className="mb-4">New Features in Our Latest Software Release</p>
            <Link href="#" className="text-blue-600 hover:underline">Read Update</Link>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
            <p className="mb-4">Optimizing Weed Detection in Various Crop Types</p>
            <Link href="#" className="text-blue-600 hover:underline">Read Article</Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="#" className="text-blue-600 hover:underline">View All Posts</Link>
        </div>
      </div>
    </section>
  )
}

