'use client'
import React, { JSX, useState } from 'react'
import { Bell, Bookmark, Download, Eye, Mic, ScrollText, Search, Share2, Star, User, Video } from 'lucide-react'
import Link from 'next/link'


type resourceProps = {
    resources?: {
    id: string;
    type: string | null;
    title: string;
    description: string | null;
    categories: string[];
    author: string | null;
    rating: number | null;
    icon: string | null;
    courseId: string | null;
}[] | undefined;
}
const ResourcesPage = ({resources}: resourceProps) => {
    const [active, setActive] = useState('All');

    // const resources = [
    //     {
    //         title: 'Product Management Framework Guide',
    //         description: 'Comprehensive guide covering popular PM frameworks including RICE, MoSCoW, and Jobs-to-be-Done',
    //         category: ['All', "Documents"],
    //         type: 'pdf',
    //         author: 'Dr. Amaka Umeh',
    //         icon: <ScrollText/>,
    //         rate: 4.8
    //     },
    //     {
    //         title: 'UX Research Methods Video Series',
    //         description: 'Complete video series covering user interviews, surveys, usability testing, and analysis techniques',
    //         category: ['All', "Videos"],
    //         type: 'video',
    //         author: 'Prof. Daniel Eze',
    //         icon: <Video/>,
    //         rate: 4.9
    //     },
    //     {
    //         title: 'Digital Marketing Case Studies',
    //         description: 'Real-world case studies from successful digital marketing campaigns across different industries',
    //         category: ['All', "Documents"],
    //         type: 'pdf',
    //         author: 'Sarah Johnson',
    //         icon: <ScrollText/>,
    //         rate: 4.8
    //     },
    //     {
    //         title: 'Recorded Lecture: Product Strategy',
    //         description: 'Full lecture recording covering product vision, roadmapping, and stakeholder alignment',
    //         category: ['All', "Recordings"],
    //         type: 'recording',
    //         author: 'Dr. Amaka Umeh',
    //         icon: <Mic/>,
    //         rate: 4.9
    //     },
    //     {
    //         title: 'Product Management Framework Guide',
    //         description: 'Comprehensive guide covering popular PM frameworks including RICE, MoSCoW, and Jobs-to-be-Done',
    //         category: ['All', "Documents"],
    //         type: 'pdf',
    //         author: 'Dr. Amaka Umeh',
    //         icon: <ScrollText/>,
    //         rate: 4.7
    //     },
    // ]

    const filterResources = resources?.filter((item) => {
        return item.categories.includes(active)
    })
    const menus = ['All', 'Videos', 'Documents', 'Recordings']
  return (
    <div>
        <header>
            <div className='flex justify-between '>
                <h1 className='font-medium text-4xl'>Resource Library</h1>
                <div className='flex items-center gap-2'>
                    <Link href='/notification' className='bg-gray-300 p-2 rounded-full relative '>
                        <Bell/>
                        <span className='absolute w-5 h-5 text-sm flex items-center justify-center -top-1 -right-1 rounded-full bg-red-400'>0</span>
                    </Link>
                    <Link href='/profile' className='bg-gray-800 text-gray-200 p-2 rounded-full'>
                        <User/>
                    </Link>
                </div>
            </div>
            <p>Access your course resources, notes, and study materials</p>
        </header>
        <div className='flex justify-between gap-2 my-10'>
            <div className='flex items-center rounded-lg p-2 gap-1 bg-gray-300'>
                <Search className='text-gray-400'/>
                <input 
                    type="text" 
                    className='outline-none'
                    placeholder='Search ....'
                />
            </div>
            <div>
                <ul className='flex gap-4 items-center'>
                    {
                        menus.map((item) => (
                            <li 
                                onClick={() => setActive(item)}
                                key={item}
                                className={`p-1 rounded-lg cursor-pointer ${active === item ? 'bg-gray-800 text-white' : ' text-black hover:bg-gray-100' }`}
                            >
                                {item}
                            </li>
                        )) 
                    }
                 </ul>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-10'>
            {
                filterResources?.map((resource, index) => {
                    const iconMap: { [key: string]: JSX.Element } = {
                        'scroll_text': <ScrollText />,
                        'video': <Video />,
                        'mic': <Mic />,
                    };
                    return (
                    <div key={index} className='bg-gray-300 px-6 py-4 rounded-lg'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 mb-4 font-semibold'>
                                {iconMap[resource.icon || 'scroll_text']}
                                {resource.type?.toUpperCase()}
                            </div>
                            <Bookmark/>
                        </div>
                        <h3 className='font-semibold text-2xl max-w-[250px] mb-2'>{resource.title}</h3>
                        <p className='text-sm max-w-[250px] mb-2'>{resource.description}</p>
                        <div className='flex text-[12px] font-semibold mb-4 gap-4 items-center'>
                            <p className=''>{resource.title}</p>
                            <div className='flex items-center gap-4'>
                                <div className='h-1 w-1 rounded-full bg-black'></div>
                                <p>{resource.author}</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center justify-between'>
                            <button className='btn btn-neutral px-10'>
                                <Eye/>
                                View
                            </button>
                            <div className='flex gap-1'>
                                <Star/>
                                {resource.rating}
                            </div>
                            <div className='flex gap-1'>
                                <div className='bg-gray-200 p-2 rounded-lg'>
                                    <Download/>
                                </div>
                                <div className='bg-gray-200 p-2 rounded-lg'>
                                    <Share2/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            )
            }
        </div>
    </div>
  )
}

export default ResourcesPage
