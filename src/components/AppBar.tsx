import {MenuButton} from "@/components/MenuButton";

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
        <div className={"w-full h-[60px] flex items-center bg-[#F4D03F] p-[4px]"}>
            <div className={"flex h-[60px] w-full justify-between px-8"}>
                {/*<img className={"h-full"} src={logo} alt={"test"}/>*/}
                <div className={`col-span-3 flex justify-end space-x-4 text-[12px] font-[700] items-center`}>
                    <>
                        <a className={"text-[#59AA88] border rounded border-[#59AA88] px-2 py-1"}
                           href={"https://www.fresha.com/book-now/siam-kinnaree-thai-massage-gift-shop-eb138vle/all-offer?id=371499&pId=346308"}>BOOK
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