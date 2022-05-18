import React from 'react';
import { LIST_USER } from "@/constants"
import { useRouter } from 'next/router';
import Avatar from '@/components/shared/Avatar';

const MessageId = () => {
  const { id } = useRouter().query

  return (
    <div>
      {
        LIST_USER.map(item => (
          Number(id) === item.id
          ? <Avatar AvatarUrl={item.avatar} dot={false} classNameProps="w-[50px]" />
          : ""
        ))
      }
    </div>
  )
}

export default MessageId