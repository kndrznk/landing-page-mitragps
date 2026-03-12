'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Copy, CheckCircle2, Search, Info, Settings2, Cable, Server } from 'lucide-react'

// Dummy Data
const devices = [
    { id: 'gt06n', name: 'GT06N / Concox', tag: 'Paling Umum' },
    { id: 'vt200', name: 'Wanway VT200 / S20', tag: 'LTE 4G' },
    { id: 'tk110', name: 'TK110 / SinoTrack', tag: 'Basic' },
    { id: 'fmb120', name: 'Teltonika FMB120', tag: 'Advance' },
]

const commands = {
    'gt06n': [
        { desc: 'Set Server Utama (IP & Port)', cmd: 'SERVER,1,194.233.73.203,11116,0#', category: 'Koneksi' },
        { desc: 'Set APN Telkomsel M2M', cmd: 'APN,internet#', category: 'Koneksi' },
        { desc: 'Set Frekuensi Upload (10 detik jalan, 2 jam mesin mati)', cmd: 'TIMER,10,120#', category: 'Tracking' },
        { desc: 'Cek Status (Konek, Sinyal, Baterai)', cmd: 'STATUS#', category: 'Diagnostik' },
        { desc: 'Cek Parameter Konfigurasi', cmd: 'PARAM#', category: 'Diagnostik' },
        { desc: 'Restore Setelan Pabrik', cmd: 'FACTORY#', category: 'Reset' },
    ],
    'vt200': [
        { desc: 'Set Server IP dan Port', cmd: 'IP#194.233.73.203#11116#', category: 'Koneksi' },
        { desc: 'Set Data APN', cmd: 'APN#internet#', category: 'Koneksi' },
        { desc: 'Interval Pelacakan', cmd: 'FREQ#10#120#', category: 'Tracking' },
        { desc: 'Restart Perangkat', cmd: 'RESET#', category: 'Reset' },
    ],
    // TK110, Teltonika dll disederhanakan
}

export default function PanduanPage() {
    const [activeDevice, setActiveDevice] = useState(devices[0].id)
    const [searchCmd, setSearchCmd] = useState('')
    const [copiedCmd, setCopiedCmd] = useState<string | null>(null)

    const handleCopy = (cmd: string) => {
        navigator.clipboard.writeText(cmd)
        setCopiedCmd(cmd)
        setTimeout(() => setCopiedCmd(null), 2000)
    }

    const currentCommands = commands[activeDevice as keyof typeof commands] || commands['gt06n']

    const filteredCommands = currentCommands.filter(c =>
        c.desc.toLowerCase().includes(searchCmd.toLowerCase()) ||
        c.cmd.toLowerCase().includes(searchCmd.toLowerCase())
    )

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900 flex flex-col pt-20">
            <Navbar />

            {/* Header */}
            <div className="bg-white border-b border-slate-200 shadow-sm relative z-10">
                <div className="container-custom py-16">
                    <div className="max-w-3xl">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2">
                            <Settings2 size={16} /> Knowledge Base
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                            Panduan Setting & <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                                Instalasi Tracker
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Kumpulan kode SMS lengkap untuk menghubungkan berbagai merk GPS Tracker ke server Mitra GPS. Pilih tipe perangkat Anda di bawah ini.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow py-12 md:py-20">
                <div className="container-custom">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Sidebar: Device Selection */}
                        <div className="lg:col-span-3 space-y-6">
                            <h3 className="font-bold text-sm text-slate-800 uppercase tracking-widest px-1">Pilih GPS Tracker</h3>
                            <div className="flex flex-col gap-3">
                                {devices.map(device => (
                                    <button
                                        key={device.id}
                                        onClick={() => setActiveDevice(device.id)}
                                        className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col gap-1 relative overflow-hidden ${activeDevice === device.id
                                            ? 'bg-blue-50 border-blue-500 shadow-md shadow-blue-500/10'
                                            : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:shadow-sm'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center w-full">
                                            <span className={`font-bold ${activeDevice === device.id ? 'text-blue-700' : 'text-slate-800'}`}>
                                                {device.name}
                                            </span>
                                            {activeDevice === device.id && (
                                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                            )}
                                        </div>
                                        {device.tag && (
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded w-max ${activeDevice === device.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                                                }`}>
                                                {device.tag}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Server Info Card */}
                            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 mt-8 shadow-xl shadow-slate-900/20">
                                <h3 className="flex items-center gap-2 font-bold mb-4 pb-4 border-b border-slate-700">
                                    <Server size={18} className="text-blue-400" />
                                    IP & Port Default
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-slate-400 mb-1">IP Address Server</p>
                                        <p className="font-mono text-cyan-400 font-bold bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">194.233.73.203</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 mb-1">Port Standar (GT06)</p>
                                        <p className="font-mono text-cyan-400 font-bold bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">11116</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Area: Instructions & Commands */}
                        <div className="lg:col-span-9 space-y-8">

                            {/* Intro/Wiring Config */}
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                                        <Cable size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold font-display text-slate-900 mb-2">Skema & Instalasi Kabel (GT06N)</h2>
                                        <p className="text-slate-600 leading-relaxed">Pastikan pemasangan kabel dilakukan oleh teknisi berpengalaman. Jangan sambungkan GPS ke tegangan yang melebihi batas spesifikasi perangkat (biasanya maksimal 36V DC).</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-4">
                                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
                                        <div>
                                            <p className="font-bold text-sm text-slate-800">Kabel Merah</p>
                                            <p className="text-xs font-medium text-slate-500">Power Positif (+)</p>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-4">
                                        <div className="w-4 h-4 rounded-full bg-slate-900 shadow-[0_0_10px_rgba(15,23,42,0.4)]"></div>
                                        <div>
                                            <p className="font-bold text-sm text-slate-800">Kabel Hitam</p>
                                            <p className="text-xs font-medium text-slate-500">Ground Negatif (-)</p>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-4">
                                        <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]"></div>
                                        <div>
                                            <p className="font-bold text-sm text-slate-800">Kabel Oranye</p>
                                            <p className="text-xs font-medium text-slate-500">Deteksi ACC / Kontak</p>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-4">
                                        <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.4)]"></div>
                                        <div>
                                            <p className="font-bold text-sm text-slate-800">Kabel Kuning</p>
                                            <p className="text-xs font-medium text-slate-500">Relay / Cut Engine</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SMS Commands Table */}
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                            <Terminal size={20} className="text-slate-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold font-display text-slate-900">SMS Konfigurasi</h2>
                                    </div>

                                    <div className="relative w-full sm:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Cari perintah SMS..."
                                            value={searchCmd}
                                            onChange={(e) => setSearchCmd(e.target.value)}
                                            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-700"
                                        />
                                    </div>
                                </div>

                                {/* Table Header */}
                                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 rounded-lg border border-slate-200 mb-4 font-bold text-xs uppercase tracking-wider text-slate-500">
                                    <div className="col-span-5">Deskripsi / Fungsi</div>
                                    <div className="col-span-5">Format SMS (Kirim ke Nomor GPS)</div>
                                    <div className="col-span-2 text-center">Aksi</div>
                                </div>

                                {/* Command Rows */}
                                <div className="space-y-4">
                                    <AnimatePresence>
                                        {filteredCommands.length > 0 ? (
                                            filteredCommands.map((item, idx) => (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    key={idx}
                                                    className="group flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center px-6 py-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all relative overflow-hidden"
                                                >
                                                    {/* Decorative line indicator */}
                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-blue-500 transition-colors"></div>

                                                    <div className="col-span-5 w-full">
                                                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-500 uppercase tracking-widest rounded mb-2">
                                                            {item.category}
                                                        </span>
                                                        <h4 className="font-bold text-slate-800 text-sm">{item.desc}</h4>
                                                    </div>

                                                    <div className="col-span-5 w-full">
                                                        <div className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 font-mono text-sm text-emerald-400 font-bold tracking-wide relative">
                                                            {item.cmd}
                                                        </div>
                                                    </div>

                                                    <div className="col-span-2 w-full flex justify-end md:justify-center">
                                                        <button
                                                            onClick={() => handleCopy(item.cmd)}
                                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs transition-colors w-full md:w-auto justify-center ${copiedCmd === item.cmd
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                                                                }`}
                                                        >
                                                            {copiedCmd === item.cmd ? (
                                                                <><CheckCircle2 size={16} /> Tersalin</>
                                                            ) : (
                                                                <><Copy size={16} /> Salin</>
                                                            )}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            ))
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="py-12 text-center"
                                            >
                                                <Info size={32} className="mx-auto text-slate-300 mb-3" />
                                                <p className="text-slate-500 font-medium">Perintah SMS tidak ditemukan.</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
} 
