import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Support() {
  return (
    <section id="support" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Support & Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-600 hover:underline">User Manual</Link></li>
              <li><Link href="#" className="text-blue-600 hover:underline">Installation Guide</Link></li>
              <li><Link href="#" className="text-blue-600 hover:underline">API Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">FAQs</h3>
            <Link href="#" className="text-blue-600 hover:underline">View Frequently Asked Questions</Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Community Forum</h3>
            <p className="mb-4">Join our community to share experiences and get help from other users.</p>
            <Button>Join Forum</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

