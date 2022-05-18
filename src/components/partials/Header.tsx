import React from "react";
import { MENU_HEADER } from "@/constants"
import Logo from "@/components/shared/Logo";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import Avatar from "@/components/shared/Avatar";

const Header = () => {
    const router = useRouter();
    const isActive = (url: string) => {
        if(router.pathname === url || router.pathname === `${url}/[id]`) return true
    }
    return (
        <div className="min-w-[80px] min-h-screen border-r bg-white flex items-center justify-between flex-col py-6">
            <div className="p-2 bg-[#1355fe] rounded-lg cursor-pointer">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <ul className="flex-1 mt-8 w-full">
                {
                    MENU_HEADER.map((item, index) => (
                        <Link href={`${item.url}`} key={index}>
                            <li className="menu__header--li w-full h-[50px] flex items-center justify-center relative cursor-pointer">
                                <span className={classNames("header__menu--li--icon",
                                    isActive(`${item.url}`) 
                                    ?
                                    "active after:w-1 after:h-full after:absolute after:inline-block after:bg-[#1355fe] after:left-0 after:top-0 after:rounded-r-lg"
                                    : ''
                                )}>{item.icon}</span>
                            </li>
                        </Link>
                    ))
                }
            </ul>
            <Avatar AvatarUrl="./avatar.jpeg" dot={true} classNameProps="w-10 h-10" />
        </div>
    )
}

export default Header;