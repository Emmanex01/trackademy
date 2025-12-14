const AcademicExperts = () => {
  const expertProfiles = [
    {
      name: 'Mark Johnson',
      title: 'Digital Marketing Strategist',
      image: 'https://picsum.photos/seed/mark/400/400',
    },
    {
      name: 'Dr. Emily Brown',
      title: 'Data Science & Analytics',
      image: 'https://picsum.photos/seed/emily/400/400',
    },
    {
      name: 'Alex Lee',
      title: 'UX/UI Design Lead',
      image: 'https://picsum.photos/seed/alex/400/400',
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Computer Science & AI Expert',
      image: 'https://picsum.photos/seed/sarah/400/400',
    },
  ]

  return (
    <div>
      <div className="flex justify-between mt-16 items-center">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Meet our Academic Experts
        </h2>
        <button className="btn btn-neutral">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {expertProfiles.map((expert, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-56 object-cover"
              loading="lazy"
            />

            <div className="text-center p-4">
              <h3 className="font-semibold text-xl">{expert.name}</h3>
              <p className="text-sm text-gray-600">{expert.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicExperts
