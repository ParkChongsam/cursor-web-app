export default function PricingPage() {
  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Free</h2>
          <p className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal">/month</span></p>
          <ul className="space-y-3 mb-6">
            <li>✓ Basic AI assistance</li>
            <li>✓ Community support</li>
            <li>✓ Basic templates</li>
          </ul>
          <button className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-700">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-lg p-6 shadow-sm bg-purple-800 text-white">
          <h2 className="text-2xl font-bold mb-4">Pro</h2>
          <p className="text-3xl font-bold mb-6">$19<span className="text-lg font-normal">/month</span></p>
          <ul className="space-y-3 mb-6">
            <li>✓ Advanced AI features</li>
            <li>✓ Priority support</li>
            <li>✓ Pro templates</li>
            <li>✓ Custom themes</li>
          </ul>
          <button className="w-full bg-white text-purple-800 py-2 rounded-lg hover:bg-gray-100">
            Upgrade to Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
          <p className="text-3xl font-bold mb-6">Custom</p>
          <ul className="space-y-3 mb-6">
            <li>✓ Custom AI models</li>
            <li>✓ Dedicated support</li>
            <li>✓ Custom integration</li>
            <li>✓ Team management</li>
          </ul>
          <button className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-700">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
} 