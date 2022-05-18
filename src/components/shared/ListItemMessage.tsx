import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import Avatar from './Avatar';

interface Props {
    user: any,
    isActive: any
}
const ListItemMessage: React.FC<Props> = ({ user, isActive }) => {
  const { id, avatar, name } = user;
  return (
    <Link href={`/message/${id}`}>
      <div className={classNames(
        "py-2 px-4 flex items-center justify-between rounded-lg hover:bg-white hover:shadow-md cursor-pointer",
        isActive(`/message/${id}`) ? "bg-white shadow-md" : ""
      )}>
        <Avatar AvatarUrl={avatar} dot={false} classNameProps="w-[50px]" />
        <div className='flex-1 ml-2 flex flex-col'>
            <span className='font-semibold'>{name}</span>
            <span className='text-xs text-[#a39fad]'>You just sent a message</span>
        </div>
        <span className='w-[8px] h-[8px] bg-[#1355fe] rounded-full'></span>
      </div>
    </Link>
  );
}

export default ListItemMessage;
