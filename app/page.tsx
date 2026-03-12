import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import AppFeaturesSection from '@/components/sections/AppFeaturesSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
            {/* Global Navbar */}
            <Navbar />

            {/* Landing Page Sections (Light Theme focus) */}
            <HeroSection />
            <ServicesSection />
            <WhyUsSection />
            <AppFeaturesSection />
            <TestimonialSection />
            <ContactSection />

            {/* Global Footer */}
            <Footer />
        </main>
    )
}
