import {MenuButton} from "@/components/MenuButton";
import Image from 'next/image';
import menuIcon from "../../public/menu-icon.svg"

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

    return (
        <div className={"sticky top-0 z-40 w-full bg-[#F4D03F]"}>
            <div className={"flex h-[60px] w-full justify-between px-8"}>
                <div className={"flex content-center space-x-2"}>
                    <img className={"h-full min-w-[60px]"} src={'/logo.png'} alt={"test"}/>
                    <div className={"flex self-center"}>
                        <span
                            className={"text-[#8F7000] font-[700] hidden lg:inline-block"}>Siam Kinnaree Thai Massage</span>
                    </div>
                </div>
                <div className={`col-span-3 flex justify-end space-x-4 text-[12px] font-[700] items-center`}>
                    <>
                        <div className={"grid grid-cols-1 w-[120px]"}>
                            <span className={"text-[#8F7000]"}>Tel. 08 93361010</span>
                            <span className={"text-[#8F7000]"}>Tel. 043 8967315</span>
                        </div>
                        <Image
                            className={"inline-block md:hidden"}
                            priority
                            alt="" src={menuIcon}/>

                        <a className={"text-[#59AA88] border rounded border-[#59AA88] px-2 py-1 hidden md:inline-block"}
                           href="https://www.fresha.com/book-now/siam-kinnaree-thai-massage-oylokhj9/services?lid=1166621&amp;pId=1106498&amp;hl=en-TH&amp;gei=p9h8ZdHBEbPx4-EPyoSDuA4&amp;rwg_token=AOZt1jUhQ1_tSuFMOJkQisc5AqOSRkLnB1Nuzo-knod-BgFCNGPGEorgXeqd8xCAqW0T4MPpSk1WEVthjuVUWZVcIX23YFA_ng%3D%3D"
                           ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.fresha.com/book-now/siam-kinnaree-thai-massage-oylokhj9/services?lid%3D1166621%26pId%3D1106498%26hl%3Den-TH%26gei%3Dp9h8ZdHBEbPx4-EPyoSDuA4%26rwg_token%3DAOZt1jUhQ1_tSuFMOJkQisc5AqOSRkLnB1Nuzo-knod-BgFCNGPGEorgXeqd8xCAqW0T4MPpSk1WEVthjuVUWZVcIX23YFA_ng%253D%253D&amp;ved=2ahUKEwiRsfqGxJKDAxWz-DgGHUrCAOcQob4JKAB6BAgXEAY&amp;opi=89978449">BOOK
                            NOW</a>
                        {pathNavigates.map((menu) => (
                            <MenuButton key={menu.path} path={menu.path} displayName={menu.displayName}/>
                        ))}
                    </>
                </div>
            </div>
        </div>
    )
}