import { Laptop, LoaderPinwheel, Database, DraftingCompass } from 'lucide-react';

const Categories = () => {
    const categories = [
        {
            icon: <Laptop size={48} className='p-2 bg-amber-50 rounded-lg'/>,
            name: 'Technology',
            courseCount: 45
        },
        {
            icon: <LoaderPinwheel size={48} className='p-2 bg-amber-50 rounded-lg'/>,
            name: 'Business',
            courseCount: 30
        },
        {
            icon: <Database size={48} className='p-2 bg-amber-50 rounded-lg'/>,
            name: 'Data Science',
            courseCount: 19
        },
        {
            icon: <Laptop size={48} className='p-2 bg-amber-50 rounded-lg'/>,
            name: 'Design',
            courseCount: 10
        },
    ];
  return (
    <div className=' mt-16 '>
      <div className='flex justify-between'>
        <h2 className='font-semibold text-2xl md:text-3xl items-center'>Explore Top Categories</h2>
        <button className='btn btn-neutral '>View All Categories</button>
      </div>
      <div className='grid gap-2 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6'>
        {/* Categories List - Placeholder */}
        {categories.map((category, index) => (
            <div key={index} className='bg-gray-400 flex flex-col items-center p-6 rounded-lg  my-4'>
                {category.icon}
                <h3 className='font-semibold text-xl'>{category.name}</h3>
                <p className='text-sm'>{category.courseCount} Courses</p>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Categories
