import {Footer} from "@/components/Footer";

export default function Gallery() {

    return (
        <div className={"grid overflow-auto"}>
            <div className={"h-[350px] bg-cover opacity-80 bg-center  bg-[url('/tm-13.jpg')]"}>
                <div className={"flex justify-center w-full h-full items-center"}>
                    <div className={"grid grid-cols-1 justify-items-center"}>
                        <div className={"text-[36px] font-normal text-[#FFFFFF]"}>SIAM KINNAREE</div>
                        <div className={"text-[64px] font-semibold text-[#FFFFFF]"}>PHOTO ALBUM</div>
                    </div>
                </div>
            </div>
            <div className={"divide-y-2 space-y-16 divide-[#F4D03F]"}>
                <div className={"px-[10%]  grid grid-cols-1"}>
                    <div className={"flex items-center my-[16px]"}>
                        <div className={"font-medium text-[#F4D03F] text-[48px] col-span-4"}>GALLERY</div>
                    </div>
                    <div className={"grid grid-cols-1 justify-items-center items-center gap-y-8"}>
                        <div className={"grid grid-cols-4 w-full"}>
                            <div
                                className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-11.jpg')]"}></div>
                            <div
                                className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-12.jpg')]"}></div>
                            <div
                                className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-10.jpg')]"}></div>
                            <div
                                className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-9.jpg')]"}></div>
                        </div>
                        <div className={"grid grid-cols-4 w-full"}>
                            <div
                                className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-8.jpg')]"}></div>
                            <div
                                className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-7.jpg')]"}></div>
                            <div
                                className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-6.jpg')]"}></div>
                            <div
                                className={"h-[250px] w-[250px] border-4 border-[#F4D03F] bg-cover bg-[url('/tm-5.jpg')]"}></div>
                        </div>
                        <div className={"grid grid-cols-4 w-full"}>
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
                <Footer />
            </div>
        </div>
    )
}