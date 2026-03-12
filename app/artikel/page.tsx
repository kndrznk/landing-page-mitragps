'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Server, AlertCircle, CheckCircle2, Calendar, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Dummy Data
const serverStatus = {
    isOperational: true,
    lastUpdate: '10 Menit yang lalu',
    message: 'Semua sistem server pelacakan GPS berjalan normal tanpa kendala.'
}

const articles = [
    {
        id: 1,
        title: 'Cara Mengatasi GPS Tracker yang Tiba-tiba Offline',
        category: 'Kendala Teknis',
        date: '24 Mei 2024',
        excerpt: 'Panduan langkah demi langkah memeriksa status kartu SIM, sinyal GSM, dan tegangan aki untuk menormalkan kembali GPS yang hilang sinyal.',
        tag: 'Troubleshooting'
    },
    {
        id: 2,
        title: 'Optimalisasi Rute Pengiriman dengan Fitur Geofence',
        category: 'Tips & Trik',
        date: '18 Mei 2024',
        excerpt: 'Pelajari bagaimana Geofencing dapat membantu perusahaan logistik mengurangi biaya bahan bakar hingga 15% setiap bulannya.',
        tag: 'Manajemen Armada'
    },
    {
        id: 3,
        title: 'Pentingnya Baterai Cadangan (Backup Battery) pada GPS',
        category: 'Edukasi Produk',
        date: '02 Mei 2024',
        excerpt: 'Kenapa memilih GPS tracker dengan baterai internal sangat krusial untuk mencegah sabotase dan pencurian kendaraan.',
        tag: 'Hardware'
    },
    {
        id: 4,
        title: 'Update Server: Peningkatan Kecepatan Ping Real-time',
        category: 'Pembaruan Sistem',
        date: '28 April 2024',
        excerpt: 'Kami baru saja melakukan upgrade infrastruktur server untuk memastikan delay pelacakan berada di bawah 2 detik.',
        tag: 'Update Server'
    },
    {
        id: 5,
        title: 'Arti Status ACC ON/OFF pada Notifikasi Aplikasi',
        category: 'Panduan Aplikasi',
        date: '15 April 2024',
        excerpt: 'Memahami arti dari notifikasi mesin menyala dan mati, serta bagaimana menyetel jadwal operasional kendaraan yang diizinkan.',
        tag: 'Manual'
    },
    {
        id: 6,
        title: 'Maintenance Rutin: Pembersihan Database Riwayat 1 Tahun',
        category: 'Pembaruan Sistem',
        date: '01 April 2024',
        excerpt: 'Informasi mengenai jadwal maintenance rutin penghapusan data rute perjalanan yang lebih tua dari 100 hari untuk optimalisasi.',
        tag: 'Maintenance'
    }
]

const categories = ['Semua', 'Kendala Teknis', 'Tips & Trik', 'Edukasi Produk', 'Pembaruan Sistem', 'Panduan Aplikasi']

export default function ArtikelPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('Semua')

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = activeCategory === 'Semua' || article.category === activeCategory

        return matchesSearch && matchesCategory
    })

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900 flex flex-col pt-20">
            <Navbar />

            {/* Header Area */}
            <div className="bg-white border-b border-slate-200">
                <div className="container-custom py-16 md:py-24">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                            Pusat Informasi & <span className="text-blue-600">Update Kendala</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                            Temukan solusi untuk kendala teknis GPS Anda, baca panduan optimasi, dan pantau status server real-time sistem Mitra GPS.
                        </p>
                    </div>
                </div>
            </div>

            {/* Server Status Banner */}
            <div className="bg-slate-50 border-b border-slate-200 shadow-sm relative z-10 -mt-1">
                <div className="container-custom py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className={`p-3 rounded-full flex-shrink-0 ${serverStatus.isOperational ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                {serverStatus.isOperational ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm md:text-base flex items-center gap-2">
                                    Status Server GPS
                                    <span className="relative flex h-2.5 w-2.5">
                                        {serverStatus.isOperational && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${serverStatus.isOperational ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </span>
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">{serverStatus.message}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg w-full sm:w-auto justify-center sm:justify-start">
                            <Server size={14} />
                            Update: {serverStatus.lastUpdate}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow py-12 md:py-20">
                <div className="container-custom flex flex-col md:flex-row gap-10">

                    {/* Sidebar / Filters (Left) */}
                    <aside className="w-full md:w-1/4 flex-shrink-0 space-y-8">
                        {/* Search */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider mb-4">Pencarian</h3>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Cari kendala, fitur..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider mb-4">Kategori</h3>
                            <div className="flex flex-col gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategory === category
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Articles Grid (Right) */}
                    <div className="w-full md:w-3/4">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-slate-800 font-display">
                                {activeCategory === 'Semua' ? 'Artikel Terbaru' : `Kategori: ${activeCategory}`}
                            </h2>
                            <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                {filteredArticles.length} Hasil
                            </span>
                        </div>

                        {filteredArticles.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <AnimatePresence mode="popLayout">
                                    {filteredArticles.map((article) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            key={article.id}
                                            className="bg-white border text-left border-slate-200 p-6 rounded-2xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col h-full"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="inline-block px-3 py-1 text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100 rounded-full">
                                                    {article.tag}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                                                    <Calendar size={14} />
                                                    {article.date}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>

                                            <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3 flex-grow">
                                                {article.excerpt}
                                            </p>

                                            <Link href={`#baca-${article.id}`} className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors w-max">
                                                Baca Selengkapnya
                                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search size={28} className="text-slate-300" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">Tidak ada artikel ditemukan</h3>
                                <p className="text-slate-500 text-sm">Coba gunakan kata kunci pencarian yang berbeda atau ubah kategori.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); }}
                                    className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    Reset Pencarian
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    )
} 
