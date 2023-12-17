import Image from "next/image";
import vouchers from "../../../public/tm-19.jpg"

export default function Vouchers() {

    return (
        <div className={"grid overflow-auto"}>
            <div className={"h-[350px] bg-cover opacity-80 bg-center  bg-[url('/tm-13.jpg')]"}>
                <div className={"flex justify-center w-full h-full items-center"}>
                    <div className={"grid grid-cols-1 justify-items-center"}>
                        <div className={"font-extralight text-center text-[#FFFFFF] text-[24px] md:text-[36px]"}>FOR SPECIAL CUSTOMERS LIKE YOU</div>
                        <div className={"font-semibold text-[#FFFFFF] text-[36px] md:text-[64px]"}>GIFT VOUCHERS</div>
                    </div>
                </div>
            </div>
            <div className={""}>
                <div className={"px-[10%] grid grid-cols-1 space-y-10 md:space-y-16"}>
                    <div className={"pt-12 font-normal text-[#F4D03F] text-[36px] md:text-[48px]"}>GIFT VOUCHERS</div>
                    <div className={"flex space-y-4 md:space-x-4 flex-col md:flex-row justify-items-center"}>
                        <Image
                            className={"border-4 border-[#F4D03F]"}
                            priority
                            alt="" src={vouchers}
                            width={400}
                        />
                        <div className={"col-span-3 w-full"}>
                            <div className={"font-normal text-[#F4D03F] text-[18px] md:text-[24px]"}>Term and Conditions</div>
                            <div className={"space-y-4"}>
                                <div className={"font-normal text-[#344054] text-[14px] md:text-[18px]"}>The perfect gift for any occasion</div>
                                <div className={"font-normal text-[#344054] text-[14px] md:text-[18px]"}>The Siam Kinnaree Thai Massage & Spa’s gift voucher is fabulous gift idea for any occasion and is so easy to order. You can contact us at 04 3896 7315 or go online to our website or Facebook choice value of treatment and pay over the phone and have the voucher delivered to your email or we can post it for your, or you can visit our store at Shop C/33 Adelaide Street And Point Street (Opposite Little French Nest in Point Street ) Fremantle WA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="solid mt-12 border border-[#F4D03F]"/>
        </div>
    )
}