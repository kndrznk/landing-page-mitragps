'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Satellite, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Beranda', path: '/' },
        { name: 'Produk & Solusi', path: '/produk' },
        { name: 'Panduan', path: '/panduan' },
        { name: 'Artikel', path: '/artikel' },
    ]

    return (
        <>
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm' : 'bg-transparent py-5'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex flex-row justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex flex-row items-center gap-3 group">
                            <Image
                                src="/images/logo.png"
                                alt="Mitra GPS Logo"
                                width={44}
                                height={44}
                                className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
                                priority
                            />
                            <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">
                                Mitra<span className="text-blue-600">GPS</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex flex-row items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`text-sm font-semibold tracking-wide transition-colors ${pathname === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:flex flex-row items-center gap-6">
                            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-bold">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Phone size={14} />
                                </div>
                                +62 812-3456-7890
                            </a>
                            <Link href="/produk" className="btn-primary py-2.5 px-6 text-sm">
                                Konsultasi Gratis
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-slate-800 p-2 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed top-[72px] left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 z-40"
                    >
                        <div className="container-custom flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`block py-3 px-4 rounded-lg text-base font-semibold ${pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-gray-100 my-2 mx-4"></div>
                            <a href="#" className="flex items-center gap-3 py-3 px-4 text-slate-700 font-medium">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Phone size={14} />
                                </div>
                                +62 812-3456-7890
                            </a>
                            <div className="px-4 mt-2">
                                <Link
                                    href="/produk"
                                    className="btn-primary w-full"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Konsultasi Gratis
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
