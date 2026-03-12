'use client'

import { motion } from 'framer-motion'
import { MessageSquare, PhoneCall, HeadphonesIcon } from 'lucide-react'

export default function ContactSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="kontak">
            {/* Dynamic Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white z-0"></div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative"
                >
                    {/* Abstract Glow Graphics inside dark box */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 md:p-16 lg:p-20 relative z-10 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 bg-white/10 text-blue-300 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 max-w-max">
                                Konsultasi Gratis
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                Amankan Aset Bisnis Anda Sekarang!
                            </h2>
                            <p className="text-slate-300 text-lg mb-10 max-w-md leading-relaxed">
                                Diskusikan kebutuhan manajemen armada Anda dengan tim ahli kami. Kami siap memberikan penawaran terbaik dan uji coba sistem gratis.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30">
                                    <PhoneCall className="mr-2" size={20} />
                                    Hubungi Sales
                                </a>
                                <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-green-600 hover:bg-green-500 transition-colors shadow-lg shadow-green-600/30">
                                    <MessageSquare className="mr-2" size={20} />
                                    Chat WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-12 lg:p-20 relative z-10 flex flex-col justify-center border-l border-slate-700/50">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-8">
                                <HeadphonesIcon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-white mb-4">Butuh Bantuan Teknis?</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Pengguna aktif Mitra GPS yang mengalami kendala teknis atau butuh konfigurasi ulang perangkat dapat mengunjungi Pusat Bantuan 24/7 kami.
                            </p>
                            <a href="/panduan" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group">
                                Kunjungi Pusat Pengetahuan
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
