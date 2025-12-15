// 'use client';
// import { ArrowLeft, Camera, Save } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import ProfileForm from '@/components/profiles/Form';

// const EditProfilePage = () => {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* Header */}
//       <div className="flex items-center gap-4 mb-6">
//         <button
//           onClick={() => router.back()}
//           className="p-2 rounded-md bg-white shadow hover:bg-gray-50"
//         >
//           <ArrowLeft size={18} />
//         </button>
//         <h1 className="text-3xl font-semibold">Edit Profile</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Left: Avatar */}
//         <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col items-center gap-4">
//           <div className="relative w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
//             <Camera className="absolute bottom-2 right-2 bg-black text-white p-1 rounded-full" />
//           </div>
//           <p className="text-sm text-gray-500">
//             Profile photo upload (coming soon)
//           </p>
//         </div>

//         {/* Right: Form */}
//         <div className="md:col-span-2 bg-gray-300 rounded-lg shadow p-6">
//           <ProfileForm />

//           {/* Actions */}
//           <div className="flex justify-end gap-3 mt-6">
//             <button
//               onClick={() => router.push('/dashboard/profile')}
//               className="px-4 py-2 rounded-md border"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               form="profile-form"
//               className="px-4 py-2 rounded-md bg-blue-600 text-white flex items-center gap-2"
//             >
//               <Save size={16} />
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfilePage;

import React from 'react'

const page = () => {
  return (
    <div>
      Nothing to see here yet
    </div>
  )
}

export default page
