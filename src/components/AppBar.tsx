"use client"

import {MenuButton} from "@/components/MenuButton";
import Image from 'next/image';
import menuIcon from "../../public/menu-icon.svg"
import {SideBar} from "@/components/SideBar";
import {useState} from "react";

const pathNavigates: { path: string, displayName: string }[] = [
    {
        path: "/",
        displayName: "Home"
    },
    {
        path: "/services",
        displayName: "Services"
    },
    {
        path: "/gallery",
        displayName: "Gallery"
    },
]


export const AppBar = () => {

    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const handleMenuIconClick = (isOpen: boolean) => {
        setSideBarOpen(isOpen);
    };

    const MenuRender = (props: {className?: string, onClick?: () => void}) => {
        return (
            <>
                {pathNavigates.map((menu) => (
                    <MenuButton key={menu.path} path={menu.path} displayName={menu.displayName} className={props.className} onClick={props.onClick}/>
                ))}
            </>

        )
    }

    return (
        <div className={"sticky top-0 z-40 w-full bg-[#F4D03F]"}>
            {isSideBarOpen && <SideBar onClick={() => handleMenuIconClick(false)}><MenuRender className={"text-[14px] font-[700]"} onClick={() => handleMenuIconClick(false)}/></SideBar>}
            <div className={"flex h-[60px] w-full justify-between px-8"}>
                <div className={"basis-1/4 flex content-center space-x-2"}>
                    <img className={"h-full min-w-[60px] hidden md:inline-block"} src={'/logo.png'} alt={"test"}/>
                    <Image
                        className={"inline-block md:hidden"}
                        priority
                        alt="" src={menuIcon}
                        onClick={() => handleMenuIconClick(true)}
                    />
                    <div className={"flex self-center"}>
                        <span
                            className={"text-[#8F7000] w-[250px] font-[700] hidden lg:inline-block"}>Siam Kinnaree Thai Massage</span>
                    </div>
                </div>
                <div className={`basis-3/4 flex justify-end space-x-4 text-[12px] font-[700] items-center`}>
                    <>
                        <div className={"grid grid-cols-1 text-end items-center"}>
                            <span className={"text-[#8F7000] text-[10px] md:text-[12px]"}>Tel. 08 93361010</span>
                            <span className={"text-[#8F7000] text-[10px] md:text-[12px]"}>Tel. 043 8967315</span>
                        </div>
                        <div className={""}>
                            <a className={"text-[#59AA88] border rounded border-[#59AA88] px-2 py-1"}
                               href="https://www.fresha.com/book-now/siam-kinnaree-thai-massage-oylokhj9/services?lid=1166621&amp;pId=1106498&amp;hl=en-TH&amp;gei=p9h8ZdHBEbPx4-EPyoSDuA4&amp;rwg_token=AOZt1jUhQ1_tSuFMOJkQisc5AqOSRkLnB1Nuzo-knod-BgFCNGPGEorgXeqd8xCAqW0T4MPpSk1WEVthjuVUWZVcIX23YFA_ng%3D%3D"
                               ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.fresha.com/book-now/siam-kinnaree-thai-massage-oylokhj9/services?lid%3D1166621%26pId%3D1106498%26hl%3Den-TH%26gei%3Dp9h8ZdHBEbPx4-EPyoSDuA4%26rwg_token%3DAOZt1jUhQ1_tSuFMOJkQisc5AqOSRkLnB1Nuzo-knod-BgFCNGPGEorgXeqd8xCAqW0T4MPpSk1WEVthjuVUWZVcIX23YFA_ng%253D%253D&amp;ved=2ahUKEwiRsfqGxJKDAxWz-DgGHUrCAOcQob4JKAB6BAgXEAY&amp;opi=89978449">BOOK
                                NOW</a>
                        </div>
                        <MenuRender className={"text-center hidden md:inline-block"} onClick={() => handleMenuIconClick(false)}/>
                    </>
                </div>
            </div>
        </div>
    )
}