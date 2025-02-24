import { MessageCircle, ThumbsUp } from 'lucide-react'

export default function ForumPage() {
  const discussions = [
    {
      title: "How to use the AI code completion effectively?",
      author: "Sarah Chen",
      replies: 23,
      likes: 45,
      category: "Tips & Tricks",
      lastActivity: "2 hours ago"
    },
    {
      title: "Feature request: Add support for Ruby",
      author: "Mike Johnson",
      replies: 15,
      likes: 32,
      category: "Feature Requests",
      lastActivity: "5 hours ago"
    },
    {
      title: "Best practices for team collaboration",
      author: "Alex Kim",
      replies: 18,
      likes: 27,
      category: "Best Practices",
      lastActivity: "1 day ago"
    }
  ]

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Community Forum</h1>
        <button className="bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
          New Discussion
        </button>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold mb-2">{discussion.title}</h2>
                <div className="text-sm text-gray-600">
                  Posted by {discussion.author} • {discussion.lastActivity}
                </div>
              </div>
              <div className="text-sm text-purple-800 px-3 py-1 bg-purple-50 rounded-full">
                {discussion.category}
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <MessageCircle size={16} />
                <span>{discussion.replies} replies</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp size={16} />
                <span>{discussion.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 