'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Navigation, SignalHigh, Truck } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl mix-blend-multiply filter animate-blob"></div>
            <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                            <SignalHigh size={16} />
                            <span>Konektivitas M2M Real-Time</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] mb-6">
                            Pantau Armada Anda, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Kendalikan Bisnis Anda.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Solusi pelacakan GPS Premium dan integrasi IoT M2M untuk efisiensi logistik, keamanan armada, dan manajemen rute pintar dalam satu dashboard interaktif.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link href="/produk" className="btn-primary group h-14 px-8 text-lg">
                                Lihat Katalog Produk
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                            <Link href="#fitur" className="btn-secondary h-14 px-8 text-lg">
                                Pelajari Fitur
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                Akurasi 99.9%
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                Support 24/7
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                Instalasi Nasional
                            </div>
                        </div>
                    </motion.div>

                    {/* Vehicle UI Vector Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] lg:h-[500px] w-full"
                    >
                        {/* The Main UI Base */}
                        <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 overflow-hidden">
                            {/* Fake Map Background (Grid) */}
                            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] bg-[length:30px_30px]"></div>

                            {/* UI Header */}
                            <div className="h-14 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-xs font-semibold text-slate-400 font-display">Live Tracking Dashboard</div>
                                <div className="w-6"></div>
                            </div>

                            {/* Center Map Area */}
                            <div className="relative h-full p-8 flex items-center justify-center">

                                {/* Map Route SVG Line */}
                                <svg className="absolute w-full h-full left-0 top-0 overflow-visible" viewBox="0 0 400 300">
                                    <motion.path
                                        d="M 50 250 C 100 250, 150 150, 200 150 C 250 150, 300 100, 350 50"
                                        fill="none"
                                        stroke="#0056D2"
                                        strokeWidth="3"
                                        strokeDasharray="8 8"
                                        className="opacity-40"
                                    />
                                    <motion.path
                                        d="M 50 250 C 100 250, 150 150, 200 150 C 250 150, 300 100, 350 50"
                                        fill="none"
                                        stroke="#0056D2"
                                        strokeWidth="3"
                                        strokeDasharray="1000"
                                        strokeDashoffset="1000"
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
                                    />
                                </svg>

                                {/* Origin Point */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-16 left-12 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-md z-10"
                                >
                                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                </motion.div>

                                {/* Vehicle Marker */}
                                <motion.div
                                    initial={{ x: -100, y: 80 }}
                                    animate={{ x: 30, y: -20 }}
                                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse' }}
                                    className="absolute bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center justify-center z-20"
                                >
                                    <Truck className="text-blue-600" size={24} />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                </motion.div>

                                {/* Destination Point */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                    className="absolute top-12 right-12 flex flex-col items-center z-10"
                                >
                                    <div className="bg-slate-900 text-white text-[10px] font-bold py-1 px-3 rounded-md shadow-lg mb-1 relative animate-float">
                                        Tujuan
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-2 border-transparent border-t-slate-900"></div>
                                    </div>
                                    <MapPin className="text-rose-500 fill-rose-100" size={32} strokeWidth={1.5} />
                                </motion.div>

                            </div>

                            {/* Floating Info Cards */}
                            <motion.div
                                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 p-4 flex justify-between items-center"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Navigation size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold mb-0.5">Status Kendaraan</p>
                                        <p className="text-sm font-bold text-slate-800">Bergerak (65 km/h)</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-400 font-semibold mb-0.5">Sinyal GPS</p>
                                    <div className="flex gap-1 justify-end items-end h-[18px]">
                                        <div className="w-1 h-2 bg-blue-600 rounded-sm"></div>
                                        <div className="w-1 h-3 bg-blue-600 rounded-sm"></div>
                                        <div className="w-1 h-4 bg-blue-600 rounded-sm"></div>
                                        <div className="w-1 h-5 bg-blue-600 rounded-sm"></div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
