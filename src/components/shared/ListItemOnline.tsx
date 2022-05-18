import React from 'react';
import Avatar from "@/components/shared/Avatar"
interface Props {
    user: any
}
const ListItemOnline: React.FC<Props> = ({ user }) => {
  return  <Avatar AvatarUrl={user.avatar} dot={true} classNameProps="mx-[6px] min-w-[48px] h-12 h-12" />

}

export default ListItemOnline;
