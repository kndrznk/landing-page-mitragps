'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { Check, Cpu, Battery, Signal, Zap, Rss, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Dummy Data untuk Produk
const hardwareProducts = [
    {
        id: 'gt06n',
        name: 'Concox GT06N',
        type: 'Vehicle GPS Tracker',
        description: 'Perangkat GPS bestseller untuk mobil dan truk ringan. Dilengkapi fitur mematikan mesin jarak jauh dan sadap suara kabin.',
        features: ['Akurasi 5 Meter', 'Cut-off Engine', 'Sadap Suara (Mic)', 'Baterai Internal 450mAh', 'Notifikasi Getaran/Cabut Aki'],
        price: 'Mulai Rp 450.000',
        popular: true,
        image: '/images/gt06n.png'
    },
    {
        id: 'et200',
        name: 'GPS ET200',
        type: 'Fleet Tracker',
        description: 'Hardware tangguh dengan koneksi 4G LTE. Cocok untuk manajemen armada skala besar dengan rentang tegangan 9-90V (bisa untuk alat berat).',
        features: ['Koneksi 4G LTE', 'Rentang 9-90V', 'Tahan Air IP65', 'Deteksi ACC/Ignition', 'Perilaku Mengemudi (Harsh Braking)'],
        price: 'Mulai Rp 750.000',
        popular: false,
        image: '/images/gps-et200.jpg'
    },
    {
        id: 'fmb120',
        name: 'Teltonika FMB120',
        type: 'Advanced Tracker',
        description: 'GPS Eropa dengan fitur pembacaan CAN-bus, sensor bahan bakar (BLE), dan input/output digital yang kaya untuk sensor tambahan.',
        features: ['Bluetooth 4.0 (BLE)', 'Dual CAN-bus', 'Baterai Backup Internal', 'Sensor Suhu/RFID Support', 'Akurasi Super Tinggi'],
        price: 'Mulai Rp 1.200.000',
        popular: false,
        image: 'https://placehold.co/400x300/f8fafc/0f172a?text=FMB120+Hardware' // Dummy image
    }
]

const m2mPlans = [
    {
        id: 'telkomsel-basic',
        provider: 'Telkomsel Halo M2M',
        name: 'GPS Basic Plan',
        data: '50 MB',
        price: 'Rp 60.000',
        period: '/bulan',
        features: ['Khusus Server GPS', 'Sinyal Terluas di Indonesia', 'Gratis 50 SMS', 'IP Private/Public'],
        color: 'border-red-500',
        bg: 'bg-red-50',
        text: 'text-red-700'
    },
    {
        id: 'indosat-pro',
        provider: 'Indosat Ooredoo IoT',
        name: 'Fleet Pro Plan',
        data: '100 MB',
        price: 'Rp 45.000',
        period: '/bulan',
        features: ['Kuota Besar untuk Fleet', 'Sinyal Stabil Perkotaan', 'Gratis 100 SMS', 'IoT Platform Integration'],
        color: 'border-amber-500',
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        popular: true
    },
    {
        id: 'xl-iot',
        provider: 'XL Axiata Business',
        name: 'IoT Connect',
        data: '75 MB',
        price: 'Rp 50.000',
        period: '/bulan',
        features: ['Koneksi M2M Stabil', 'Dashboard Manajemen Kartu', 'Gratis 50 SMS', 'Dukungan Teknis 24/7'],
        color: 'border-blue-500',
        bg: 'bg-blue-50',
        text: 'text-blue-700'
    }
]

export default function ProdukPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900 flex flex-col pt-20">
            <Navbar />

            {/* Header Area */}
            <div className="bg-white border-b border-slate-200 relative overflow-hidden flex-shrink-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
                <div className="container-custom py-16 md:py-24 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                            Katalog Produk
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                            Solusi Hardware & <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                                Konektivitas M2M
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                            Kami menyediakan perangkat pelacakan GPS berkualitas tinggi dengan tingkat kegagalan (RMA) di bawah 1%, dipadukan dengan layanan data kartu SIM M2M khusus IoT.
                        </p>
                        <div className="flex gap-4">
                            <a href="#hardware" className="btn-primary py-3">
                                Lihat Hardware
                            </a>
                            <a href="#layanan-m2m" className="btn-secondary py-3 bg-white">
                                Paket Data M2M
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hardware Section */}
            <div id="hardware" className="py-20 md:py-28 flex-shrink-0">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Hardware Pelacak GPS (Tracker)</h2>
                        <p className="text-slate-600 text-lg">
                            Perangkat kuat, tahan lama, dan akurat untuk berbagai jenis kendaraan bermotor, mobil, hingga alat berat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hardwareProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className={`bg-white rounded-2xl border ${product.popular ? 'border-blue-300 shadow-xl shadow-blue-500/10 relative mt-4 md:mt-0' : 'border-slate-200 shadow-md'} overflow-hidden flex flex-col group`}
                            >
                                {product.popular && (
                                    <div className="absolute top-0 inset-x-0 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest text-center py-1.5 shadow-sm">
                                        Paling Laris
                                    </div>
                                )}
                                <div className={`h-48 bg-slate-100 flex justify-center items-center relative overflow-hidden ${product.popular ? 'pt-10' : ''}`}>
                                    {/* Gunakan object-cover atau contain sesuai jenis gambar. Jika ada image, render gambarnya */}
                                    {product.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain mix-blend-multiply drop-shadow-md group-hover:scale-110 transition-transform duration-500 max-h-[60%] max-w-[60%]"
                                        />
                                    ) : (
                                        // Fallback ke dummy box jika image kosong
                                        <div className="w-32 h-32 bg-slate-200 rounded-xl shadow-inner border border-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                            <Cpu size={48} className="text-slate-400" />
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs font-bold text-blue-600 mb-2">{product.type}</div>
                                    <h3 className="text-xl font-bold font-display text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                        {product.description}
                                    </p>

                                    <div className="mb-6 flex-grow">
                                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 block">Fitur Utama</span>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                                    <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                        <div className="font-bold text-slate-800">{product.price}</div>
                                        <a href="#" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:text-blue-800 transition-colors">
                                            Konsultasi <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* M2M Plans Section */}
            <div id="layanan-m2m" className="py-20 md:py-28 bg-white border-t border-slate-200 flex-shrink-0">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-4">
                            <Signal size={32} />
                        </div>
                        <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Layanan Kartu IoT & M2M</h2>
                        <p className="text-slate-600 text-lg">
                            Konektivitas stabil prioritas tinggi untuk transmisi data koordinat kendaraan tanpa delay. Berbeda dengan kartu prabayar biasa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {m2mPlans.map((plan) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4 }}
                                className={`bg-slate-50 rounded-2xl border-2 ${plan.popular ? 'border-blue-500 shadow-xl shadow-blue-500/20 md:-translate-y-4' : 'border-slate-200 shadow-sm'} p-8 relative flex flex-col`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                                        Rekomendasi
                                    </div>
                                )}

                                <div className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 w-max border ${plan.bg} ${plan.text} ${plan.color}`}>
                                    {plan.provider}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                                    <span className="text-sm font-semibold text-slate-500">{plan.period}</span>
                                </div>

                                <div className="bg-white rounded-xl p-4 border border-slate-200 mb-6 flex items-center justify-between shadow-sm">
                                    <span className="text-sm font-bold text-slate-500">Kuota Data</span>
                                    <span className={`text-lg font-black ${plan.popular ? 'text-blue-600' : 'text-slate-800'}`}>{plan.data}</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check size={12} className="text-blue-600 font-bold" />
                                            </div>
                                            <span className="text-sm text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="#" className={`w-full py-3 rounded-xl font-bold text-center transition-all mt-auto ${plan.popular
                                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg'
                                    : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600'
                                    }`}>
                                    Pesan Sekarang
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Global CTA Section */}
            <div className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/0f172a/1e293b?text=Map+Pattern')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>

                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Butuh Konsultasi Penawaran B2B?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                        Kami menyediakan harga khusus (Grosir) untuk pembelian GPS Tracker dalam jumlah banyak (&gt;10 unit) bagi perusahaan logistik dan taksi.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="#" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all text-lg flex items-center justify-center gap-2">
                            Hubungi Tim Sales
                        </a>
                        <a href="#" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl font-bold transition-all text-lg text-center">
                            Download Katalog PDF
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
} 
