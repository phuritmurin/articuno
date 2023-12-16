
type Props = {
    onClick?: () => void
    children: string | JSX.Element
}

export const SideBar = (props: Props) => {
    return (
        <>
            <div>
                <div className="fixed z-50 inset-0 overflow-y-auto md:hidden" aria-modal="true">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                         aria-hidden="true"></div>
                    <div className="relative bg-[#F4D03F] w-60 max-w-[calc(100%-3rem)] p-6 h-screen">
                        <button type="button" onClick={props.onClick}
                                className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-white hover:text-[#8F7000]"
                        ><svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible">
                                <path d="M0 0L10 10M10 0L0 10" fill="inherit" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round"></path>
                            </svg>
                        </button>
                        <ul>
                            <li className={"grid grid-cols-1 gap-y-4"}>
                                {props.children}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}