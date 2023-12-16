import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {AppBar} from "@/components/AppBar";
import {Footer} from "@/components/Footer";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Siam Kinnaree Thai Massage',
    description: 'Thai Message',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="th">
        <body className={inter.className}>
        <div className={"flex flex-col"}>
            <AppBar/>
            {children}
            <Footer />
        </div>
        </body>
        </html>
    )
}