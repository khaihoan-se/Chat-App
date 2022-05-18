import { LIST_USER } from '@/constants'
import React from 'react'
import ListItemOnline from '../shared/ListItemOnline';
import { FiEdit } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import ListItemMessage from '../shared/ListItemMessage';
import Avatar from "@/components/shared/Avatar";
import { useRouter } from 'next/router';

const ListFreinds = () => {
   const router = useRouter();
   const isActive = (url: string) => {
      if(router.asPath === url) return true
   }
   return (
      <div className="min-w-[350px] max-w-[350px] min-h-screen max-h-screen bg-[#fafafe] overflow-hidden">
         <div className="list--freinds--cell flex">
            <Avatar AvatarUrl="./avatar.jpeg" dot={false} classNameProps="w-12 h-12" />
            <div className="ml-2 flex-col flex">
               <span className='text-xl font-semibold'>Lê Khải Hoàn</span>
               <span className='text-xs text-gray-400'>khaihoan.mart</span>
            </div>
         </div>
         <div className="px-6 py-4">
            <div className="flex items-center justify-between">
               <span className="text-xl font-semibold">Online Now</span>
               <span className="text-[#1355fe]">{LIST_USER.length}</span>
            </div>
            <div className="scroll--none flex items-center mt-2 overflow-x-auto w-auto">
               {
                  LIST_USER.map((user) => (
                     <ListItemOnline key={user.id} user={user} />
                  ))
               }
            </div>
         </div>
         <div className="px-6 pb-6">
            <div className='flex items-center justify-between'>
               <span className='text-xl font-semibold'>Message</span>
               <div className='flex items-center'>
                  <div className='mx-2 cursor-pointer'><FiEdit/></div>
                  <div className='mx-2 cursor-pointer'><FaRegStar /></div>
               </div>
            </div>
            <div className="scroll--none mt-4 overflow-auto h-[410px]">
                  {
                     LIST_USER.map((user) => (
                        <ListItemMessage key={user.id} user={user} isActive={isActive} />
                     ))
                  }
            </div>
         </div>
      </div>
   )
}

export default ListFreinds