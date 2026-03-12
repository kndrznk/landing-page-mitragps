import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' })

export const metadata: Metadata = {
    title: 'Mitra GPS - Solusi Pelacakan Fleet Management Terbaik',
    description: 'Tingkatkan efisiensi armada Anda dengan sistem pelacakan GPS real-time, kontrol mesin jarak jauh, dan notifikasi pintar.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id" className="scroll-smooth">
            <body
                className={`${inter.variable} ${jakarta.variable} antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col relative overflow-x-hidden`}
            >
                {/* Subtle Light Gradients */}
                <div className="fixed top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent -z-10 pointer-events-none"></div>

                <div className="flex-grow flex flex-col">
                    {children}
                </div>
            </body>
        </html>
    )
}
