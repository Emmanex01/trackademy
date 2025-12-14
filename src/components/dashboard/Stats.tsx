type statsItem = {
    title: string,
    value: number | string | undefined,
    icon : React.ReactNode
}

type StatsProps = {
    items: statsItem[];
}

const Stats = ({items}: StatsProps) => {
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-4 my-4'>
      {items.map((stat, index) => (
        <div key={index} className='bg-gray-200 p-4 rounded-lg flex items-center justify-between gap-4'>
            <div>
                <span className='font-medium'>{stat.value}</span>
                <h3 className='text-sm'>{stat.title}</h3>
            </div>
            <div>
                <div className='bg-black text-white p-2 rounded-lg'>
                    {stat.icon}
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Stats
