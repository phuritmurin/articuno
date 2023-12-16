import Image from 'next/image';
import facebookIcon from "../../public/facebook-icon.svg"


export const Footer = () => {
    return (
        <>
            <div className={"flex w-full p-12"}>
                <div className={"grid grid-cols-1 w-full justify-items-center items-center"}>
                    <div className={"flex flex-col items-center space-y-4"}>
                        <a href={"https://www.facebook.com/tew88"} target={"_blank"}>
                            <Image
                                priority
                                alt="Facebook" src={facebookIcon}/></a>
                        <span className={"font-normal text-[12px] text-center text-[#8F7000] ms:text-[16px]"}>Siam Kinnaree
                      Thai Massage And Spa (04)38967315 Or Visit Us Shop C/33 Adelaide Street And Point Street
                      (Opposite Little French Nest in Point Street ) Fremantle WA 6160
              </span>
                    </div>
                </div>
            </div>
        </>

    )
}