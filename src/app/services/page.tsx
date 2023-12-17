import Image from "next/image";
import traditionalThai from "../../../public/tm-16.jpg"
import aromatherapy from "../../../public/tm-12.jpg"
import thaiOil from "../../../public/tm-21.jpg"
import footReflexology from "../../../public/tm-17.jpg"
import headNeck from "../../../public/tm-18.jpg"


export default function Gallery() {

    const contents: {topic: string, description: string, image: any}[]  = [
        {
            topic: "Traditional Thai Massage",
            description: "Traditional Thai Massage involves stretching, bending and pressure point to lose your body tight and tension muscles and relieve stress. We used Tiger balm works by tricking nerve endings with cooling and heating sensations. Also, we called our Traditional Thai Massage is “Lazy Yoga”",
            image: traditionalThai
        },
        {
            topic: "Thai Oil Massage",
            description: "Thai Oil Massage is a combination of Tradition Thai Massage and Oil Massage focusing on your back, shoulder, neck, feet, legs and arm with a good pressure point and stretching, bending to lose your body tight and tension muscles and also relieve stress and clam you mind during the treatment.",
            image: thaiOil
        },
        {
            topic: "Aromatherapy Massage",
            description: "Aromatherapy Massage is a gentle pressure massage with a variety of essential oils mixed with massage oils applied to the skin. if you suffer from stress, anxiety, depression, insomnia, or nausea this is the best massage for relief.",
            image: aromatherapy
        },
        {
            topic: "Head Neck and Shoulder Massage",
            description: "Head Neck and Shoulder Massage is designed to concentrate on tension built up in the muscles of the back, neck and shoulders, so the benefits can be achieved in a shorter period of time. Using pressure points and stretches to target the source of the pain you will notice the difference from the first treatment.",
            image: headNeck
        },
        {
            topic: "Foot Reflexology Massage",
            description: "Foot Reflexology Massage is a way of pampering your foot thereby, making them strong and flexible. We will provide a good pressure point and massage to relieve your pain and tension and foot Reflexology massage is good for blood circulation.",
            image: footReflexology
        },
    ]

    return (
        <div className={"grid overflow-auto"}>
            <div className={"h-[350px] bg-cover opacity-80 bg-center  bg-[url('/tm-13.jpg')]"}>
                <div className={"flex justify-center w-full h-full items-center"}>
                    <div className={"grid grid-cols-1 justify-items-center"}>
                        <div className={"font-semibold text-[#FFFFFF] text-[36px] md:text-[64px]"}>SERVICES</div>
                    </div>
                </div>
            </div>
            <div className={"divide-y-2 divide-[#F4D03F] space-y-6 md:space-y-16"}>
                <div className={"px-[10%] grid grid-cols-1 space-y-6 md:space-y-16"}>
                    <div className={"pt-12 font-normal text-[#F4D03F] text-[36px] md:text-[48px]"}>SERVICES</div>
                    <div className={"grid grid-cols-1 space-y-4"}>
                        {contents.map(content => (
                            <div key={content.topic} className={"flex flex-col-reverse md:flex-row border rounded border-[#F4D03F] p-4"}>
                                <div>
                                    <div className={"font-normal text-[#F4D03F] text-[18px] md:text-[24px]"}>{content.topic}</div>
                                    <div className={"font-normal text-[#344054] text-[14px] md:text-[18px]"}>{content.description}</div>
                                </div>
                                <div className={"flex justify-center"}>
                                    <Image
                                        className={"border-4 border-[#F4D03F]"}
                                        priority
                                        alt="" src={content.image}
                                        height={800}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="table-auto">
                        <thead className={""}>
                        <tr className={"items-center"}>
                            <th className={"border border-[#FDC500] h-[50px] text-[14px] md:text-[18px]"}><div className={"px-2"}>Service</div></th>
                            <th className={"border border-[#FDC500] h-[50px] text-[14px] md:text-[18px]"}><div className={"px-2"}>30mins</div></th>
                            <th className={"border border-[#FDC500] h-[50px] text-[14px] md:text-[18px]"}><div className={"px-2"}>60mins</div></th>
                            <th className={"border border-[#FDC500] h-[50px] text-[14px] md:text-[18px]"}><div className={"px-2"}>90mins</div></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>Traditional Thai Massage</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>Foot Reflexology Massage</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>Aromatherapy Massage</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>Thai Oil Massage</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] text-[12px] md:text-[16px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>Head Neck and Shoulder Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>120$</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table-auto">
                        <thead className={""}>
                        <tr className={"items-center"}>
                            <th className={"border border-[#FDC500] h-[50px] text-[14px] md:text-[18px]"}><div className={"px-2"}>Service</div></th>
                            <th className={"border border-[#FDC500] h-[50px] text-[14px] md:text-[18px]"}><div className={"px-2"}>30mins</div></th>
                            <th className={"border border-[#FDC500] h-[50px] text-[14px] md:text-[18px]"}><div className={"px-2"}>60mins</div></th>
                            <th className={"border border-[#FDC500] h-[50px] text-[14px] md:text-[18px]"}><div className={"px-2"}>90mins</div></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>Foot Reflexology Massage + Traditional Thai Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>-</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>Foot Reflexology Massage + Aromatherapy Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>-</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>Foot Reflexology Massage +
                                Thai Oil Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>-</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px] text-[12px] md:text-[16px]"}>120$</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr className="solid mt-12 border border-[#F4D03F]"/>
        </div>
    )
}