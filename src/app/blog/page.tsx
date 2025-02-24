export default function BlogPage() {
  const posts = [
    {
      title: "Introducing AI-Powered Code Completion",
      date: "March 1, 2024",
      excerpt: "Learn how our new AI-powered code completion can help you write better code faster.",
      category: "Product Updates"
    },
    {
      title: "Best Practices for Using AI in Your Development Workflow",
      date: "February 28, 2024",
      excerpt: "Discover how to effectively integrate AI tools into your development process.",
      category: "Tips & Tricks"
    },
    {
      title: "The Future of AI in Software Development",
      date: "February 25, 2024",
      excerpt: "Explore how AI is shaping the future of software development and what it means for developers.",
      category: "Industry Insights"
    }
  ]

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-purple-100"></div>
            <div className="p-6">
              <div className="text-sm text-purple-800 mb-2">{post.category}</div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">{post.date}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 