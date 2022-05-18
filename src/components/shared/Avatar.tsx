import classNames from 'classnames';
import React from 'react'

interface Props {
    AvatarUrl: any;
    classNameProps?: string;
    dot: boolean;
}
const Avatar: React.FC<Props> = ({ AvatarUrl, classNameProps, dot }) => {
  return (
    <div className={classNames(
        "relative rounded-full border-[2px] border-[#1355fe] p-[3px]",
        classNameProps
    )}>
        <img src={AvatarUrl} alt="" className="rounded-full" />
        {
            dot && <span className="w-[10px] h-[10px] bg-[#16a085] rounded-full absolute top-0 right-0"></span>
        }
    </div>
  )
}

export default Avatar