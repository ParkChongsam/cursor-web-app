import { Building2, Users, Shield, HeartHandshake } from 'lucide-react'

export default function EnterprisePage() {
  const benefits = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Enterprise-grade Security",
      description: "Advanced security features including SSO, audit logs, and role-based access control."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Management",
      description: "Manage large teams with advanced permissions and collaboration features."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance & Privacy",
      description: "Meet your compliance requirements with our enterprise-ready platform."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Get priority support with a dedicated account manager."
    }
  ]

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Enterprise Solutions</h1>
        <p className="text-xl text-gray-600">
          Empower your organization with our enterprise-grade AI code editor solution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-purple-800 mb-4">{benefit.icon}</div>
            <h2 className="text-xl font-bold mb-2">{benefit.title}</h2>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-purple-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700">
          Contact Sales Team
        </button>
      </div>
    </div>
  )
} 