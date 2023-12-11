import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {AppBar} from "@/components/AppBar";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Kinnaree Thai Message',
    description: 'Thai Message',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="th">
        <body className={inter.className}>
        <div className={"h-screen flex flex-col"}>
            <AppBar/>
            {children}
        </div>
        </body>
        </html>
    )
}