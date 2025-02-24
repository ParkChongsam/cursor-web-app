import { Code, MessageSquare, Zap, Brain, GitBranch, Lock } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Assistance",
      description: "Get intelligent code suggestions and autocompletions powered by advanced AI models."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Chat",
      description: "Ask questions and get answers in natural language about your code and programming concepts."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Smart Code Generation",
      description: "Generate boilerplate code, functions, and entire components with simple prompts."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time with built-in collaboration features."
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Version Control",
      description: "Seamless integration with Git and other version control systems."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security First",
      description: "Enterprise-grade security with end-to-end encryption for your code and data."
    }
  ]

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Features</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-purple-800 mb-4">{feature.icon}</div>
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 