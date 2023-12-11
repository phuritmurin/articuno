'use client'

import {Footer} from "@/components/Footer";
import SwiperImageContent from "@/components/SwiperImageContent";

export default function Home() {
    return (
        <div className={"grid overflow-auto"}>
            <div className={"h-[930px] bg-cover opacity-90 bg-bottom  bg-[url('/tm-10.jpg')]"}>
                <div className={"flex justify-center w-full h-full items-center"}>
                    <div className={"grid grid-cols-1 justify-items-center"}>
                        <div className={"text-[36px] font-extralight text-[#FFFFFF]"}>WELCOME TO</div>
                        <div className={"text-[64px] font-semibold text-[#FFFFFF]"}>SIAM KINNAREE</div>
                        <a className={"text-[#FFFFFF] font-bold border-2 rounded border-[#F4D03F] px-4 py-1"}
                           href={"https://www.fresha.com/book-now/siam-kinnaree-thai-massage-gift-shop-eb138vle/all-offer?id=371499&pId=346308"}>BOOK
                            NOW</a>
                    </div>
                </div>
            </div>
            <div className={"w-full h-[20px] flex items-center bg-[#F4D03F] p-[4px]"}></div>
            <div className={"h-[930px] bg-cover opacity-90 bg-center bg-[url('/tm-12.jpg')]"}>
                <div className={"flex justify-center w-full h-full items-center"}>
                    <div className={"grid grid-cols-7 justify-items-center"}>
                        <div className={"col-span-2"}></div>
                        <p className={"col-span-3 text-[#FFFFFF] font-extralight border-2 rounded border-[#F4D03F] p-12"}>Warm Welcome to Siam Kinnaree Thai Massage & Spa Siam Kinnaree Thai Massage & Spa is the Modern Thai spa introduces a type of massage in Thai style than involves stretching and deep body massage. in warm welcome relaxing atmosphere perfect for Rest, Relax and Recover your body and mind. Also, we are specialist in Thai Therapeutic massage to help you to relieves tension and pain from body aching, Chronic pain and Sciatica pain. Let us take care of your body and minds</p>
                        <div className={"col-span-2"}></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
