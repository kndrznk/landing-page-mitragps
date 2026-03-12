'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, AlertTriangle, Route } from 'lucide-react'

const features = [
    {
        id: 'playback',
        title: 'Riwayat Rute (Playback)',
        icon: <Route size={20} />,
        desc: 'Putar ulang perjalanan armada hingga 100 hari ke belakang. Lihat persis di mana mereka berhenti dan rute mana yang diambil.',
    },
    {
        id: 'engine',
        title: 'Kendali Mesin Jarak Jauh',
        icon: <Pause size={20} />,
        desc: 'Matikan mesin kendaraan dari aplikasi saat terjadi pencurian atau penggunaan di luar jam operasional.',
    },
    {
        id: 'alerts',
        title: 'Notifikasi Cerdas',
        icon: <AlertTriangle size={20} />,
        desc: 'Terima peringatan seketika saat aki dicabut, kendaraan keluar zona (geofence), atau kecepatan melebihi batas.',
    }
]

export default function AppFeaturesSection() {
    const [activeFeature, setActiveFeature] = useState(features[0].id)

    return (
        <section className="py-24 bg-white" id="fitur">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                        Dashboard & Aplikasi Mobile
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                        Satu Layar untuk Ribuan Keputusan
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Platform pelacakan multi-bahasa yang intuitif. Memudahkan Anda memonitor aktivitas armada baik dari PC di kantor maupun Smartphone saat *mobile*.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Feature List (Left Side) */}
                    <div className="lg:col-span-5 space-y-4">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(feature.id)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${activeFeature === feature.id
                                    ? 'bg-blue-50 border-blue-200 shadow-md shadow-blue-100/50'
                                    : 'bg-white border-transparent hover:bg-slate-50'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 p-3 rounded-xl ${activeFeature === feature.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold font-display mb-2 ${activeFeature === feature.id ? 'text-blue-900' : 'text-slate-700'
                                            }`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`leading-relaxed ${activeFeature === feature.id ? 'text-blue-800/80' : 'text-slate-500'
                                            }`}>
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Interactive Mockup (Right Side) */}
                    <div className="lg:col-span-7 relative">
                        <div className="aspect-[4/3] md:aspect-video rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-2xl relative">

                            {/* Header Mockup */}
                            <div className="h-12 bg-white border-b border-slate-200 flex items-center px-4 justify-between z-10 relative">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="h-2 w-32 bg-slate-200 rounded"></div>
                                    <div className="w-6 h-6 rounded-full bg-blue-100"></div>
                                </div>
                            </div>

                            {/* Dynamic Content Area */}
                            <div className="absolute inset-0 top-12 bg-slate-50">
                                <AnimatePresence mode="wait">

                                    {activeFeature === 'playback' && (
                                        <motion.div
                                            key="playback"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full relative"
                                        >
                                            <Image
                                                src="/images/playback.png"
                                                alt="Riwayat Rute Playback"
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    )}

                                    {activeFeature === 'engine' && (
                                        <motion.div
                                            key="engine"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full relative"
                                        >
                                            <Image
                                                src="/images/engine-control.png"
                                                alt="Kendali Mesin"
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    )}

                                    {activeFeature === 'alerts' && (
                                        <motion.div
                                            key="alerts"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full relative"
                                        >
                                            <Image
                                                src="/images/notification.jpeg"
                                                alt="Notifikasi Cerdas"
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -right-6 -bottom-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
                        <div className="absolute -z-10 -left-6 -top-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
