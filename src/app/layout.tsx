import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {AppBar} from "@/components/AppBar";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Siam Kinnaree Thai Massage',
    description: 'Thai Message',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="th">
        <body className={inter.className}>
        <div className={"flex flex-col overflow-auto min-w-[375px]"}>
            <AppBar/>
            {children}
        </div>
        </body>
        </html>
    )
}