const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'How Online Learning Is Shaping the Future of Education',
      excerpt:
        'Discover how digital classrooms, live sessions, and personalized learning are transforming education worldwide.',
      date: 'August 12, 2025',
      category: 'Education',
    },
    {
      id: 2,
      title: '5 Study Tips to Stay Focused During Online Classes',
      excerpt:
        'Struggling to stay focused? These practical study tips will help you stay productive and motivated.',
      date: 'August 8, 2025',
      category: 'Study Tips',
    },
    {
      id: 3,
      title: 'Why Live Teacher Feedback Improves Student Success',
      excerpt:
        'Instant feedback from teachers helps students learn faster and build confidence in their skills.',
      date: 'August 3, 2025',
      category: 'Learning',
    },
  ]

  return (
    <div className="text-center mt-16">
      <h2 className="font-semibold text-2xl mb-4">Latest News & Blog</h2>
      <p className="mb-8 text-gray-600">
        Stay updated with the latest trends, tips, and insights in online education
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {newsArticles.map((article) => (
          <div
            key={article.id}
            className="bg-gray-300 rounded-lg shadow p-6 text-left flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <span className="text-sm text-blue-600 font-medium">
                {article.category}
              </span>
              <h3 className="font-semibold text-lg mt-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {article.excerpt}
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              {article.date}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="btn btn-neutral">Read More Articles</button>
      </div>
    </div>
  )
}

export default News
