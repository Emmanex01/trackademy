import { BookAIcon, icons, Search, Video } from 'lucide-react'


const QuickAction = () => {
    const actions = [
        { title: 'Join Live Class',
          description: 'Product Management 101 Starting now.',
          status: 'live',
          icons: <Video/>
        },
        { title: 'Continue Learning',
          description: 'Resume market research lesson',
          status: '65%',
          icons: <BookAIcon/>
        },
        { title: 'Find Resources',
          description: 'Search for recordings and materials',
          status: '200+',
          icons: <Search/>
        },
    ]
  return (
    <div>
      <h2 className='font-bold py-4'>Quick Actions</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {actions.map((action, index) => (
            <div key={index} className='bg-gray-200 rounded-lg p-4 flex flex-col gap-8'>
                <div className='flex items-start justify-between text-white'>
                    <div className='bg-black p-2 rounded-lg'>{action.icons}</div>
                    <span className='bg-gray-800 text-sm px-2'>{action.status}</span>
                </div>
                <div>
                    <h3 className='font-medium'>{action.title}</h3>
                    <p className='text-sm'>{action.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default QuickAction
