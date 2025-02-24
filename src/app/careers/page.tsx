import { MapPin } from 'lucide-react'

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "We're looking for a Senior Frontend Engineer to help build the next generation of our AI-powered code editor."
    },
    {
      title: "Machine Learning Engineer",
      department: "AI/ML",
      location: "Remote",
      type: "Full-time",
      description: "Join our AI team to develop and improve our code understanding and generation models."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description: "Help shape the future of developer tools by creating intuitive and beautiful user experiences."
    },
    {
      title: "Developer Advocate",
      department: "Developer Relations",
      location: "Remote",
      type: "Full-time",
      description: "Be the bridge between our product team and developer community, creating content and gathering feedback."
    }
  ]

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-gray-600">
          Help us build the future of software development with AI.
        </p>
      </div>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold mb-1">{job.title}</h2>
                <div className="text-gray-600 mb-2">{job.department}</div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  {job.location} • {job.type}
                </div>
              </div>
              <button className="bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                Apply Now
              </button>
            </div>
            <p className="text-gray-600">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 