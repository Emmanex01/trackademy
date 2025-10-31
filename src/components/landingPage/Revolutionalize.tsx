import { MessageCircle, Zap, Bell } from 'lucide-react';


const Revolutionalize = () => {
    const features = [
        {
            icon: <MessageCircle size={48} className='p-2 bg-amber-50 rounded-lg'/>,
            title: 'Live Discussion',
            description: 'Engage in real-time conversations with instructors and peers during lessons.'
        },
        {
            icon: <Zap size={48} className='p-2 bg-amber-50 rounded-lg'/>,
            title: 'Interactive Visuals',
            description: 'Learn with engaging flashcards, animations, and interactive pop-ups.'
        },
        {
            icon: <Bell size={48} className='p-2 bg-amber-50 rounded-lg'/>,
            title: 'Smart Reminders',
            description: 'Never miss a lesson with intelligent notifications and nudges.'
        },
    ];

    const stats = [
        {
            value: '50+',
            label: 'Experienced Tutors'
        },
        {
            value: '1200+',
            label: 'Students on our Platform'
        },
        {
            value: '200+',
            label: 'Study Materials'
        },
        {
            value: '100+',
            label: 'Learning Videos'
        },
    ];
  return (
    <div className='mt-16 text-center'>
      <h2 className='font-bold text-3xl md:text-4xl'>Revolutionizing Online Learning</h2>
      <div className='text-sm md:text-lg my-4'>
        <p>Our platform addresses the core challenges of online education with innovative</p>
        <p>features designed to boost engagement, accountability, and learning outcomes.</p>
      </div>
      <div className='flex flex-col md:flex-row gap-4 my-14'>
        {/* Feature Cards */}
        {features.map((feature, index) => (
            <div key={index} className='bg-gray-300 flex flex-col gap-4 p-4 rounded-lg text-start'>
                {feature.icon}
                <h3 className='font-semibold text-xl'>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>
        ))}
      </div>
      <div className='flex justify-center gap-6 md:justify-around mt-14'>
        {/* Statistics */}
        {stats.map((stat, index) => (
            <div key={index} >
                <span className='font-bold text-2xl md:text-4xl'>{stat.value}</span>
                <p className='text-[14px] md:text-lg font-semibold'>{stat.label}</p>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Revolutionalize
