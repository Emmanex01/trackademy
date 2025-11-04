const AcademicExperts = () => {
  const expertProfiles = [
    {
      name: 'Mark Johnson',
      title: 'Digital Marketing Strategist',
    },
    {
      name: 'Dr. Emily Brown',
      title: 'Data Science & Analytics',
    },
    {
      name: 'Alex Lee',
      title: 'UX/UI Design Lead',
    },
    {
      name: 'Dr. sarah chen',
      title: 'Computer Science & AI Expert',
    },
  ]
  return (
    <div>
      <div className='flex justify-between mt-16'>
        <h2 className='font-semibold text-2xl md:text-3xl items-center'>Meet our Academic Experts</h2>
        <button className='btn btn-neutral '>View All</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {expertProfiles.map((expert, index) => (
          <div key={index} className='bg-gray-200 rounded-lg'>
                <div className='w-full bg-gray-400 h-45 rounded-lg'></div>
                <div className='text-center p-4'>
                    <h3 className='font-semibold text-xl'>{expert.name}</h3>
                    <p className="text-sm">{expert.title}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicExperts
