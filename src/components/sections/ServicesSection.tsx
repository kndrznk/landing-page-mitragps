'use client'

import { motion } from 'framer-motion'
import { Server, Smartphone, ShieldCheck, Activity } from 'lucide-react'

const services = [
    {
        icon: <Server className="w-8 h-8 text-blue-600" />,
        title: 'Server GPS Whitelabel',
        description: 'Platform pelacakan mandiri dengan branding perusahaan Anda sendiri. Aman, cepat, dan scalable untuk ribuan unit.'
    },
    {
        icon: <Activity className="w-8 h-8 text-blue-600" />,
        title: 'Konektivitas M2M & IoT',
        description: 'Menyediakan kartu SIM khusus M2M (Telkomsel/Indosat) yang stabil tanpa blokir untuk memastikan device selelu online.'
    },
    {
        icon: <Smartphone className="w-8 h-8 text-blue-600" />,
        title: 'Aplikasi Manajemen Armada',
        description: 'Pantau posisi kendaraan, riwayat rute, batas kecepatan, hingga sadap suara langsung dari smartphone Anda.'
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
        title: 'Instalasi & Maintenance',
        description: 'Tenaga teknisi profesional siap membantu pemasangan tersembunyi dan aman untuk berbagai jenis kendaraan.'
    }
]

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white" id="layanan">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                        Layanan Utama Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                        Ekosistem IoT & Pelacakan Lengkap
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Mitra GPS memberikan solusi *end-to-end*, memastikan hardware terpasang presisi dan software berjalan tanpa henti.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="light-card p-8 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-display text-slate-900 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
