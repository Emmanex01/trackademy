import { Users } from "lucide-react"

const StudentPerformance = () => {

  return (
    <>
      <div className="bg-gray-200 rounded-2xl">
        <div className='flex justify-between align-middle bg-gray-700 p-3 rounded-t-xl'>
          <div className='flex justify-between align-middle text-white w-full'>
            <span className='text-lg flex align-middle'>
              <Users className="mr-2" />
              Student Performance
            </span>
          </div>
        </div>


        {/* THE BOXES */}

        <div className="p-3">

          <div className="flex justify-start my-2 px-2 py-3 gap-3 border border-green-400 rounded-xl">
            <div className='h-12 w-12 border rounded-full'></div>

            <div>
              <p className="font-semibold">Sophia Johnson</p>

              <div className="flex gap-4 my-2">
                <span className="text-sm">Last active: 2 min ago</span>
                <span className="text-sm">Product Management 101</span>
              </div>

              <div className="flex align-bottom gap-5 border border-red-500">

                <div className="flex align-middle gap-3 h-fit border">
                  <div className="w-24 h-3.5 bg-gray-400 rounded-2xl m-0 flex">
                    <div className="h-full w-9/12 bg-gray-700 rounded-2xl"></div>
                  </div>

                  <p className="m-0">75%</p>
                </div>

                <p className="p-1 px-3 bg-gray-600 rounded-lg text-white">Excellent</p>
              </div>

            </div>
          </div>
          
         
        </div>





      </div>
    </>
  )

}

export default StudentPerformance
