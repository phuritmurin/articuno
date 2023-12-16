export default function Gallery() {

    return (
        <div className={"grid overflow-auto"}>
            <div className={"h-[350px] bg-cover opacity-80 bg-center  bg-[url('/tm-13.jpg')]"}>
                <div className={"flex justify-center w-full h-full items-center"}>
                    <div className={"grid grid-cols-1 justify-items-center"}>
                        <div className={"font-semibold text-[#FFFFFF] text-[36px] md:text-[64px]"}>PHOTO ALBUM</div>
                    </div>
                </div>
            </div>
            <div className={""}>
                <div className={"px-[10%] grid grid-cols-1 space-y-10 md:space-y-16"}>
                    <div className={"pt-12 font-normal text-[#F4D03F] text-[36px] md:text-[48px]"}>GALLERY</div>
                    <div className={"grid grid-cols-1 justify-items-center w-full xl:grid-cols-4 md:grid-cols-2 gap-8"}>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-11.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-12.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-10.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-9.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-8.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-7.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-6.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-5.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-4.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-2.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-3.jpg')]"}></div>
                        <div
                            className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-1.jpg')]"}></div>
                    </div>
                </div>
            </div>
            <hr className="solid mt-12 border border-[#F4D03F]"/>
        </div>
    )
}