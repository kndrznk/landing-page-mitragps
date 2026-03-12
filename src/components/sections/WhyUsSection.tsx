'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Clock, Shield } from 'lucide-react'

export default function WhyUsSection() {
    const features = [
        {
            icon: <Zap size={24} className="text-blue-600" />,
            title: "Update Data 10 Detik",
            desc: "Laporan posisi lebih *real-time* dibanding GPS standar yang 30-60 detik."
        },
        {
            icon: <Clock size={24} className="text-blue-600" />,
            title: "Uptime Server 99.9%",
            desc: "Server berkapasitas tinggi mencegah *blank spot* atau sistem mati mendadak."
        },
        {
            icon: <Shield size={24} className="text-blue-600" />,
            title: "Anti-Blokir IMEI",
            desc: "Device resmi terdaftar Kominfo, dijamin tidak ada pemutusan sinyal tiba-tiba."
        }
    ]

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="keunggulan">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-32 z-0"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl p-1 shadow-2xl shadow-blue-500/20">
                            <div className="w-full h-full bg-slate-900 rounded-[22px] overflow-hidden relative">
                                {/* Dashboard Image Fake representation */}
                                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                                <div className="absolute inset-6 border border-slate-700/50 rounded-xl bg-slate-800/80 backdrop-blur-md flex flex-col p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-4 w-32 bg-slate-700 rounded"></div>
                                        <div className="flex gap-2">
                                            <div className="h-6 w-16 bg-blue-600 rounded"></div>
                                            <div className="h-6 w-16 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="h-20 bg-slate-700/50 rounded-lg p-3">
                                            <p className="text-slate-400 text-xs">Total Armada</p>
                                            <p className="text-white text-2xl font-bold font-display mt-1">1,204</p>
                                        </div>
                                        <div className="h-20 bg-slate-700/50 rounded-lg p-3 border border-blue-500/30 line-clamp-2 shadow-[0_0_15px_rgba(0,86,210,0.2)]">
                                            <p className="text-blue-400 text-xs text-nowrap">Status Aktif / Online</p>
                                            <p className="text-white text-2xl font-bold font-display mt-1">1,180</p>
                                        </div>
                                    </div>
                                    <div className="flex-grow bg-slate-900 rounded-lg relative overflow-hidden">
                                        {/* Data Chart Simulation */}
                                        <svg className="absolute bottom-0 w-full h-1/2" preserveAspectRatio="none" viewBox="0 0 100 100">
                                            <path d="M0,100 L0,50 C20,60 30,20 50,40 C70,60 80,30 100,10 L100,100 Z" fill="rgba(6, 182, 212, 0.2)" />
                                            <path d="M0,50 C20,60 30,20 50,40 C70,60 80,30 100,10" fill="none" stroke="#06B6D4" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                            Mengapa Mitra GPS?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                            Investasi Jangka Panjang untuk Keamanan Bisnis Anda
                        </h2>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            Bukan sekadar melacak lokasi. Kami memberikan Anda data krusial untuk mencegah kecurangan BBM, mendisiplinkan operasional armada, dan memastikan aset berharga selalu dalam pantauan.
                        </p>

                        <div className="space-y-6">
                            {features.map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex items-center gap-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                            <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
                            <p className="text-sm font-semibold text-slate-800">
                                Lebih dari <span className="text-blue-600">5.000+ unit kendaraan</span> telah dipercayakan sistemnya kepada kami di seluruh Indonesia.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
