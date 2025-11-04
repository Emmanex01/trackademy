const News = () => {
  return (
    <div className="text-center mt-16">
      <h2 className="font-semibold text-2xl mb-4">Latest News & Blog</h2>
      <p className="mb-4">Stay updated with the latest trends, tips, and insights in online education</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* News articles would be mapped here */}
        <div className="h-48 bg-gray-400 rounded-lg"></div>
        <div className="h-48 bg-gray-400 rounded-lg"></div>
        <div className="h-48 bg-gray-400 rounded-lg"></div>
      </div>
      <div className="mt-4">
        <button className="btn btn-neutral">Read More Articles</button>
      </div>
    </div>
  )
}

export default News
