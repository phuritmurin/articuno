import {Footer} from "@/components/Footer";

export default function Gallery() {

    return (
        <div className={"grid overflow-auto"}>
            <div className={"h-[350px] bg-cover opacity-80 bg-center  bg-[url('/tm-13.jpg')]"}>
                <div className={"flex justify-center w-full h-full items-center"}>
                    <div className={"grid grid-cols-1 justify-items-center"}>
                        <div className={"text-[64px] font-semibold text-[#FFFFFF]"}>SERVICES</div>
                    </div>
                </div>
            </div>
            <div className={"divide-y-2 space-y-16 divide-[#F4D03F]"}>
                <div className={"px-[10%] grid grid-cols-1 space-y-16"}>
                    <div className={"pt-12 font-normal text-[#F4D03F] text-[48px]"}>SERVICES</div>
                    <div className={"grid grid-cols-1 space-y-4"}>
                        <div>
                            <div className={"font-normal text-[#F4D03F] text-[24px]"}>Traditional Thai Massage</div>
                            <div className={"font-normal text-[#344054] text-[16px]"}>Traditional Thai Massage involves
                                stretching, bending and pressure point to lose your body tight and tension muscles and
                                relieve stress. We used Tiger balm works by tricking nerve endings with cooling and
                                heating sensations. Also, we called our Traditional Thai Massage is “Lazy Yoga”
                            </div>
                        </div>
                        <div>
                            <div className={"font-normal text-[#F4D03F] text-[24px]"}>Foot Reflexology Massage</div>
                            <div className={"font-normal text-[#344054] text-[16px]"}>Foot Reflexology Massage is a way
                                of
                                pampering your foot thereby, making them strong and flexible. We will provide a good
                                pressure point and massage to relieve your pain and tension and foot Reflexology massage
                                is
                                good for blood circulation.
                            </div>
                        </div>
                        <div>
                            <div className={"font-normal text-[#F4D03F] text-[24px]"}>Aromatherapy Massage</div>
                            <div className={"font-normal text-[#344054] text-[16px]"}>Aromatherapy Massage is a gentle
                                pressure massage with a variety of essential oils mixed with massage oils applied to the
                                skin. if you suffer from stress, anxiety, depression, insomnia, or nausea this is the
                                best
                                massage for relief.
                            </div>
                        </div>
                        <div>
                            <div className={"font-normal text-[#F4D03F] text-[24px]"}>Thai Oil Massage</div>
                            <div className={"font-normal text-[#344054] text-[16px]"}>Thai Oil Massage is a combination
                                of
                                Tradition Thai Massage and Oil Massage focusing on your back, shoulder, neck, feet, legs
                                and
                                arm with a good pressure point and stretching, bending to lose your body tight and
                                tension
                                muscles and also relieve stress and clam you mind during the treatment.
                            </div>
                        </div>
                        <div>
                            <div className={"font-normal text-[#F4D03F] text-[24px]"}>Head Neck and Shoulder Massage
                            </div>
                            <div className={"font-normal text-[#344054] text-[16px]"}>Head Neck and Shoulder Massage is
                                designed to concentrate on tension built up in the muscles of the back, neck and
                                shoulders,
                                so the benefits can be achieved in a shorter period of time. Using pressure points and
                                stretches to target the source of the pain you will notice the difference from the first
                                treatment.
                            </div>
                        </div>
                    </div>
                    <table className="table-auto">
                        <thead className={""}>
                        <tr className={"items-center"}>
                            <th className={"border border-[#FDC500] h-[50px]"}>Service</th>
                            <th className={"border border-[#FDC500] h-[50px]"}>30mins</th>
                            <th className={"border border-[#FDC500] h-[50px]"}>60mins</th>
                            <th className={"border border-[#FDC500] h-[50px]"}>90mins</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px]"}>Traditional Thai Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px]"}>Foot Reflexology Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px]"}>Aromatherapy Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px]"}>Thai Oil Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px]"}>Head Neck and Shoulder Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>45$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>120$</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table-auto">
                        <thead className={""}>
                        <tr className={"items-center"}>
                            <th className={"border border-[#FDC500] h-[50px]"}>Packages</th>
                            <th className={"border border-[#FDC500] h-[50px]"}>30mins</th>
                            <th className={"border border-[#FDC500] h-[50px]"}>60mins</th>
                            <th className={"border border-[#FDC500] h-[50px]"}>90mins</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px]"}>Foot Reflexology Massage + Traditional Thai Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>-</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px]"}>Foot Reflexology Massage + Aromatherapy Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>-</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>120$</td>
                        </tr>
                        <tr>
                            <td className={"px-2 border border-[#FDC500] h-[50px]"}>Foot Reflexology Massage +
                                Thai Oil Massage</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>-</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>85$</td>
                            <td className={"text-center border border-[#FDC500] h-[50px]"}>120$</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>
        </div>
    )
}