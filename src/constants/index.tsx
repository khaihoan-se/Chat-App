import { CgMenuGridO } from "react-icons/cg";
import { FiUsers, FiSettings } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineBookmarks } from "react-icons/md";

export const MENU_HEADER = [
    { icon: <CgMenuGridO />, url: "/" },
    { icon: <AiOutlineComment />, url: "/message" },
    { icon: <FiUsers />, url: "/friends" },
    { icon: <BiPhoneCall />, url: "/phones" },
    { icon: <MdOutlineBookmarks />, url: "/save" },
    { icon: <FiSettings />, url: "/setting" },
] as const;

export const LIST_USER = [
    {
        id: 1,
        name: 'Lê Khải Hoàn', 
        username: 'hoan.lekhaihoan@gmail.com', 
        avatar: 'https://res.cloudinary.com/figdom/image/upload/v1652865034/anime/Yui_Saikawa_icon_ln9fox.jpg',
        status: true,
    },
    { 
        id: 2,
        name: 'Lê Khải Hoàn', 
        username: 'hoan.lekhaihoan@gmail.com', 
        avatar: 'https://res.cloudinary.com/figdom/image/upload/v1652865033/anime/hyouka_icons_____d5qxdp.jpg',
        status: true
    },
    { 
        id: 3,
        name: 'Lê Khải Hoàn', 
        username: 'hoan.lekhaihoan@gmail.com', 
        avatar: 'https://res.cloudinary.com/figdom/image/upload/v1652865033/anime/Anime_Icons_rgcsny.jpg',
        status: true 
    },
    { 
        id: 4,
        name: 'Lê Khải Hoàn', 
        username: 'hoan.lekhaihoan@gmail.com', 
        avatar: 'https://res.cloudinary.com/figdom/image/upload/v1652865032/anime/__otmsa3.jpg',
        status: true 
    },
    { 
        id: 5,
        name: 'Lê Khải Hoàn', 
        username: 'hoan.lekhaihoan@gmail.com', 
        avatar: 'https://res.cloudinary.com/figdom/image/upload/v1652864987/anime/Shikimori_icon___%EF%B8%8F_bpoqlt.jpg',
        status: true 
    },
    { 
        id: 6,
        name: 'Lê Khải Hoàn', 
        username: 'hoan.lekhaihoan@gmail.com', 
        avatar: 'https://res.cloudinary.com/figdom/image/upload/v1652865034/anime/Yui_Saikawa_icon_ln9fox.jpg',
        status: true 
    },
    { 
        id: 7,
        name: 'Lê Khải Hoàn', 
        username: 'hoan.lekhaihoan@gmail.com', 
        avatar: 'https://res.cloudinary.com/figdom/image/upload/v1652865033/anime/hyouka_icons_____d5qxdp.jpg',
        status: true 
    },
    { 
        id: 8,
        name: 'Lê Khải Hoàn', 
        username: 'hoan.lekhaihoan@gmail.com', 
        avatar: 'https://res.cloudinary.com/figdom/image/upload/v1652865033/anime/Anime_Icons_rgcsny.jpg',
        status: true 
    }
]