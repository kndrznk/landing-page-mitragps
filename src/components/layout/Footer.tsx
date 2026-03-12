import Link from 'next/link'
import Image from 'next/image'
import { Satellite, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800 text-slate-300">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & About */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/images/logo.png"
                                alt="Mitra GPS Logo"
                                width={44}
                                height={44}
                                className="w-10 h-10 object-contain transition-transform group-hover:scale-105 drop-shadow-md bg-white rounded-md p-1"
                            />
                            <span className="text-2xl font-display font-bold text-white tracking-tight">
                                Mitra<span className="text-blue-500">GPS</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Solusi pelacakan IoT dan integrasi M2M terdepan. Pantau armada Anda, optimalkan rute, dan tingkatkan efisiensi operasional dengan teknologi real-time yang presisi.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-display font-semibold text-lg mb-6">Tautan Cepat</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Tentang Kami', path: '/#tentang' },
                                { name: 'Layanan M2M', path: '/produk' },
                                { name: 'Fitur Aplikasi', path: '/#fitur' },
                                { name: 'Panduan Setting', path: '/panduan' },
                                { name: 'Artikel & Update', path: '/artikel' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.path} className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-display font-semibold text-lg mb-6">Hubungi Kami</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" />
                                <span>Jl. Teknologi Raya No. 128, Kawasan Bisnis Sudirman, Jakarta Selatan 12190</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Phone size={18} className="text-blue-500 shrink-0" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Mail size={18} className="text-blue-500 shrink-0" />
                                <span>support@mitragps.co.id</span>
                            </li>
                        </ul>
                    </div>

                    {/* Tech Partners */}
                    <div>
                        <h3 className="text-white font-display font-semibold text-lg mb-6">Dukungan Provider</h3>
                        <p className="text-sm text-slate-400 mb-4">
                            Penyedia layanan IoT M2M terpercaya berkolaborasi dengan provider telekomunikasi terbaik.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-800 rounded text-xs font-semibold text-slate-300 border border-slate-700">Telkomsel Halo M2M</span>
                            <span className="px-3 py-1.5 bg-slate-800 rounded text-xs font-semibold text-slate-300 border border-slate-700">Indosat Ooredoo IoT</span>
                            <span className="px-3 py-1.5 bg-slate-800 rounded text-xs font-semibold text-slate-300 border border-slate-700">XL Axiata Business</span>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {currentYear} Mitra GPS. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
                        <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
