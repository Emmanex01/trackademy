import { Group, Users } from "lucide-react"


const Stats = () => {

  return (
    <>
      <div className="w-full border border-green-500 my-10 grid grid-cols-2 gap-3 md:grid-cols-4">

        <div className='flex-1 flex align-middle justify-between gap-8 bg-gray-300 p-4 rounded-lg'>
          <div className='text-gray-700'>
            <p className='font-semibold'>136</p>
            <span className='text-sm'>Total students</span>
          </div>

          <button className='text-white text-lg bg-gray-700 h-fit p-1 px-3 rounded-lg'>
            <Users />
          </button>
        </div>

        
        
        <div className='flex-1 flex align-middle justify-between gap-8 bg-gray-300 p-4 rounded-lg'>
          <div className='text-gray-700'>
            <p className='font-semibold'>136</p>
            <span className='text-sm'>Total students</span>
          </div>

          <button className='text-white text-lg bg-gray-700 h-fit p-1 px-3 rounded-lg'>
            <Users />
          </button>
        </div>

        
        <div className='flex-1 flex align-middle justify-between gap-8 bg-gray-300 p-4 rounded-lg'>
          <div className='text-gray-700'>
            <p className='font-semibold'>136</p>
            <span className='text-sm'>Total students</span>
          </div>

          <button className='text-white text-lg bg-gray-700 h-fit p-1 px-3 rounded-lg'>
            <Users />
          </button>
        </div>

        
        <div className='flex-1 flex align-middle justify-between gap-8 bg-gray-300 p-4 rounded-lg'>
          <div className='text-gray-700'>
            <p className='font-semibold'>136</p>
            <span className='text-sm'>Total students</span>
          </div>

          <button className='text-white text-lg bg-gray-700 h-fit p-1 px-3 rounded-lg'>
            <Users />
          </button>
        </div>

      </div>
    </>
  )
}

export default Stats