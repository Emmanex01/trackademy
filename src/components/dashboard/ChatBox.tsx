import { File, MessageCircle, Send, Smile, User2 } from 'lucide-react'
import React from 'react'

const ChatBox = () => {
    const chats = [
        {
            id: 1,
            username: 'John Doe',
            message: 'This course is amazing!',
            timestamp: '10:30 AM',
            likes: 5,
            loves: 2
        },
        {
            id: 2,
            username: 'John Doe',
            message: 'This course is amazing!',
            timestamp: '10:30 AM',
            likes: 5,
            loves: 2
        }
    ]
  return (
    <div>
        <div className='flex justify-between items-center p-4 bg-gray-800 rounded-t-lg text-white font-semibold'>
            <div className='flex gap-2'>
                <MessageCircle size={20}/>
                <span>Live Discussion</span>
            </div>
            <div className='flex gap-2'>
                <User2 size={20}/>
                <span>24</span>
            </div>
        </div>
        <div className='p-4 bg-gray-200'>
            {chats.map((chat, index) => (
                <div key={index} >
                    <div className='flex flex-col justify-between p-4 bg-gray-400 rounded-lg'>
                        <span className='font-semibold'>{chat.username}</span>
                        <p className='mb-2'>{chat.message}</p>
                    </div>
                    <div className='flex gap-2 text-sm text-gray-500 p-2'>
                        <span>👍 {chat.likes}</span>
                        <span>❤️ {chat.loves}</span>
                    </div>
                </div>
            ))}
            <div className=' flex items-center border rounded-lg absolute bottom-4 bg-white mt-4'>
                <div className='flex items-center px-1 w-full'>
                    <File size={20} className='inline-block mr-2'/>
                    <input type='text' placeholder='Type your message...' className='w-full p-2 outline-0 rounded-lg'/>
                    <Smile size={20} className='inline-block ml-2'/>
                </div>
                <div className='border-l p-2'>
                    <button className=''>
                        <Send/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatBox
