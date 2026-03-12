'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
    {
        name: 'Budi Santoso',
        role: 'Pemilik Ekspedisi Lintas Jawa',
        content: 'Sejak pakai Mitra GPS, klaim sopir soal BBM berlebihan langsung hilang karena rute terbaca presisi. Sangat menghemat biaya operasional bulanan kami.',
        rating: 5
    },
    {
        name: 'Siti Aminah',
        role: 'Manager Rental Mobil',
        content: 'Fitur matikan mesin jarak jauh penyelamat! Pernah ada indikasi unit dibawa kabur, langsung saya eksekusi dari aplikasi detik itu juga.',
        rating: 5
    },
    {
        name: 'Rudi Pratama',
        role: 'Direktur Logistik Konstruksi',
        content: 'Uptime servernya luar biasa. Berbeda dengan GPS murahan yang aplikasinya sering down. Pelayanan after-sales teknisinya juga sangat responsif.',
        rating: 5
    }
]

export default function TestimonialSection() {
    return (
        <section className="py-24 bg-slate-50 relative border-t border-slate-100" id="testimoni">
            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                        Testimoni Klien
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                        Kepercayaan Ratusan Pengusaha Transportasi
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testi, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-100 w-12 h-12" />
                            <div className="flex gap-1 mb-6 text-amber-400">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-8 italic relative z-10">
                                "{testi.content}"
                            </p>
                            <div>
                                <h4 className="font-bold text-slate-900">{testi.name}</h4>
                                <p className="text-sm text-slate-500">{testi.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Client Logos (Abstract Representation) */}
                <div className="border-t border-slate-200 pt-16">
                    <p className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest">
                        Dipercaya oleh berbagai perusahaan di Indonesia
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Fake logos represented by basic SVGs */}
                        <div className="flex items-center gap-2 font-display font-bold text-xl text-slate-700">
                            <div className="w-8 h-8 bg-blue-600 rounded-sm rotate-45"></div>
                            TransLogistics
                        </div>
                        <div className="flex items-center gap-2 font-display font-bold text-xl text-slate-700">
                            <div className="w-8 h-8 border-4 border-emerald-600 rounded-full"></div>
                            AgroNusantara
                        </div>
                        <div className="flex items-center gap-2 font-display font-bold text-xl text-slate-700">
                            <div className="h-8 w-12 bg-red-600 rounded-t-full"></div>
                            MiningTech
                        </div>
                        <div className="flex items-center gap-2 font-display font-bold text-xl text-slate-700">
                            <div className="w-8 h-8 border-2 border-indigo-600 skew-x-12"></div>
                            RentAcar
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
