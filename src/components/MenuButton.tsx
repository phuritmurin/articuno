'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";


export const MenuButton = (props: { path: string, displayName: string }) => {
    const pathname = usePathname()
    return (
            <div key={props.displayName} className={"text-center"}>
                <Link href={props.path}>
                    <div
                        className={`${pathname === props.path ? "text-[#8F7000]" : "text-[#FFFFFA]"}`}>{props.displayName.toUpperCase()}</div>
                </Link>
            </div>
        )
}