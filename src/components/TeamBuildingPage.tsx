import React, { useState } from 'react';
import {
  FileText, Download, Users, Briefcase, Award,
  X, ChevronRight, Shield, Star, Clock,
  Building2, GraduationCap, Heart, Sunrise, ExternalLink, Eye
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TeamBuildingPageProps {
  onBook: () => void;
}

// Carbon texture inline CSS
const CARBON_BG: React.CSSProperties = {
  backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)`
};

// Gallery images — Cloudinary (group event + outdoor adventure photos)
const TB_GALLERY = [
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/440402985_18265456021224548_7998714459964710304_n_lr06fe.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/gallery-1_i46qs3.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/IMG_3874_nsvcbv.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/gallery-2_wygzf8.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/440402985_18265456021224548_7998714459964710304_n_1_uep4hs.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/gallery-5_oxnprr.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/IMG_8509-scaled_qwrcbe.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/gallery-3_xbigv9.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/366682330_611117657795611_1585773041965824058_n_plxuw5.jpg',
  'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/gallery-6_lz8zqp.jpg',
];

const TeamBuildingPage: React.FC<TeamBuildingPageProps> = ({ onBook }) => {
  const { trans } = useLanguage();
  const [lightboxItem, setLightboxItem] = useState<{ url: string; type: 'image' } | null>(null);

  const PACKAGES = [
    {
      id: 'day-trip',
      number: '01',
      icon: <Sunrise size={28} />,
      title: trans.team.packages.day.title,
      desc: trans.team.packages.day.desc,
      highlights: ['Activities', 'Lunch Included', 'Guide Provided', 'Certificate'],
      bgImage: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/v1776411743/DayTrip_bg_ktohfd.png',
      type: 'image' as const,
      url: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tb-daytrip_eqm8nn.jpg',
      cta: 'View Package',
    },
    {
      id: '2d1n',
      number: '02',
      icon: <Briefcase size={28} />,
      title: trans.team.packages.d2n1.title,
      desc: trans.team.packages.d2n1.desc,
      highlights: ['2 Activities', 'All Meals', 'Glamping Stay', 'Certificate'],
      bgImage: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/v1776411744/2d1n_bg_qffhiu.png',
      type: 'pdf' as const,
      url: 'https://res.cloudinary.com/djrhlrd6k/image/upload/v1776403301/2D1N_2026_PACKAGE_iaoliz.pdf',
      cta: 'Download Brochure',
    },
    {
      id: '3d2n',
      number: '03',
      icon: <Award size={28} />,
      title: trans.team.packages.d3n2.title,
      desc: trans.team.packages.d3n2.desc,
      highlights: ['4+ Activities', 'All Meals', '2-Night Glamping', 'Gala Dinner'],
      bgImage: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/v1776411743/3d2n_bg_gxjdac.png',
      type: 'pdf' as const,
      url: 'https://res.cloudinary.com/djrhlrd6k/image/upload/v1776403304/3D2N_2026_PACKAGE_i3lgyb.pdf',
      cta: 'Download Brochure',
    },
    {
      id: 'family-day',
      number: '04',
      icon: <Heart size={28} />,
      title: trans.team.packages.family.title,
      desc: trans.team.packages.family.desc,
      highlights: ['All Ages Friendly', 'Halal Catering', 'Games & Activities', 'Customizable'],
      bgImage: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/v1776411744/family_day_bg_yxtief.png',
      type: 'pdf' as const,
      url: 'https://res.cloudinary.com/djrhlrd6k/image/upload/v1776403301/FAMILY_DAY_ykqaf3.pdf',
      cta: 'Download Brochure',
    },
    {
      id: 'hrdc',
      number: '05',
      icon: <GraduationCap size={28} />,
      title: trans.team.packages.hrdc.title,
      desc: trans.team.packages.hrdc.desc,
      highlights: ['HRDC Registered', 'SBL-Khas Claimable', 'Certified Trainers', 'HR Report'],
      bgImage: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/v1776411744/HRDC_bg_zqsk3i.png',
      type: 'image' as const,
      url: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/v1776410952/HRDC_Claimable_poster_ddh9to.jpg',
      cta: 'View Poster',
    },
  ];

  const WHY_US = [
    {
      icon: <Shield size={32} className="text-brand-500" />,
      title: 'ISO 21101 Certified',
      desc: "Malaysia's 1st ISO-certified adventure tourism site. Your team's safety is our highest priority.",
    },
    {
      icon: <Star size={32} className="text-brand-500" />,
      title: 'Halal & Inclusive',
      desc: 'MS 1500:2019 Halal certified catering for all meals. 100% inclusive for all team sizes.',
    },
    {
      icon: <Building2 size={32} className="text-brand-500" />,
      title: '500+ Events Delivered',
      desc: 'From 20-pax workshops to 2,000-pax family days. We have the experience to make yours flawless.',
    },
    {
      icon: <Users size={32} className="text-brand-500" />,
      title: 'Fully Customizable',
      desc: 'Mix and match activities, meals, and duration. We tailor every programme to your company culture.',
    },
  ];

  const handlePackageClick = (pkg: typeof PACKAGES[0]) => {
    if (pkg.type === 'pdf') {
      window.open(pkg.url, '_blank');
    } else {
      setLightboxItem({ url: pkg.url, type: 'image' });
    }
  };

  return (
    <section className="bg-dark-950 min-h-screen">

      {/* ─── HERO ─── */}
      <div className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <img
          src="https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/gallery-12_uctlek.jpg"
          alt="Team Building at Gopeng Glamping Park"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'brightness(0.4)' }}
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
        <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay" style={CARBON_BG} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
          <span className="inline-flex items-center gap-2 text-brand-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">
            <span className="w-8 h-px bg-brand-500" />
            {trans.team.header}
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white leading-none mb-6">
            {trans.team.title}
          </h1>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {[
              { value: '500+', label: 'Events Hosted' },
              { value: '10K+', label: 'Participants' },
              { value: '100%', label: 'Halal Certified' },
              { value: 'ISO', label: '21101 Certified' },
            ].map(stat => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-display font-bold text-2xl md:text-3xl text-brand-400">{stat.value}</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── WHY CHOOSE GGP ─── */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-2 block">Why Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900">THE TRUSTED CHOICE</h2>
            <div className="h-1 w-16 bg-brand-500 mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-5 p-3 rounded-xl bg-brand-50 inline-block group-hover:bg-brand-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-dark-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PACKAGES ─── */}
      <div className="bg-dark-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3 block">Our Packages</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase">CHOOSE YOUR PROGRAMME</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-brand-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer"
                onClick={() => handlePackageClick(pkg)}
              >
                {/* Card background: real image + dark overlay for text legibility */}
                <img
                  src={pkg.bgImage}
                  alt={pkg.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Strong dark overlay — suppresses busy image backgrounds for legibility */}
                <div className="absolute inset-0 bg-black/75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Card content */}
                <div className="relative z-10 p-8 flex flex-col h-full min-h-[320px]">

                  {/* Header row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white group-hover:bg-white/20 transition-colors">
                      {pkg.icon}
                    </div>
                    <span className="font-display font-bold text-5xl text-white/20 leading-none">{pkg.number}</span>
                  </div>

                  {/* Title & Desc */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl text-white mb-2 leading-tight">{pkg.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{pkg.desc}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {pkg.highlights.map(h => (
                        <span key={h} className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 rounded-xl font-bold uppercase tracking-widest text-xs bg-white/10 hover:bg-white text-white hover:text-dark-900 border border-white/20 hover:border-white flex items-center justify-center gap-2 transition-all duration-300">
                    {pkg.type === 'pdf' ? (
                      <><Download size={14} /> {pkg.cta}</>
                    ) : (
                      <><Eye size={14} /> {pkg.cta}</>
                    )}
                    <ChevronRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}

            {/* Inquiry Card */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-500/40 bg-gradient-to-br from-brand-600 to-brand-800 cursor-pointer group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(234,88,12,0.3)] transition-all duration-500" onClick={onBook}>
              <div className="absolute inset-0 opacity-20" style={CARBON_BG} />
              <div className="relative z-10 p-8 flex flex-col h-full min-h-[320px]">
                <div className="p-3 rounded-xl bg-white/20 inline-block mb-6 w-fit">
                  <FileText size={28} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Custom Quote</h3>
                <p className="text-brand-100 text-sm leading-relaxed flex-1 mb-8">
                  Need a bespoke itinerary? Our corporate team will design a programme specifically for your objectives and budget.
                </p>
                <button className="w-full py-3 rounded-xl font-bold uppercase tracking-widest text-xs bg-white text-brand-600 flex items-center justify-center gap-2 hover:bg-brand-50 transition-colors">
                  Get Custom Quote <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── EVENT MOMENTS GALLERY ─── */}
      <div className="bg-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3 block">Our Events</span>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">{trans.team.events}</h2>
            <span className="text-gray-500 text-xs uppercase tracking-widest hidden sm:block">Scroll to explore →</span>
          </div>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="flex overflow-x-auto gap-4 px-6 lg:px-8 pb-6 hide-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
          {TB_GALLERY.map((src, idx) => (
            <div
              key={idx}
              className="min-w-[280px] md:min-w-[360px] h-64 md:h-80 rounded-2xl overflow-hidden snap-center group relative flex-shrink-0 shadow-xl"
            >
              <img
                src={src}
                alt={`Team Building Event ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="relative bg-dark-950 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={CARBON_BG} />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Clock size={40} className="text-brand-500 mx-auto mb-6 opacity-60" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">{trans.team.plan}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {trans.team.planDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBook}
              className="bg-brand-600 hover:bg-brand-500 text-white px-10 py-4 rounded-xl font-display font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all flex items-center justify-center gap-3"
            >
              {trans.team.contactCorp} <ChevronRight size={18} />
            </button>
            <a
              href="https://wa.me/60126083443"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-brand-500 text-white hover:text-brand-400 px-10 py-4 rounded-xl font-display font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3"
            >
              WhatsApp Us <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ─── LIGHTBOX (image viewer for Day Trip & HRDC poster) ─── */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div className="absolute top-4 right-4 flex items-center gap-3 z-50">
            <a
              href={lightboxItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-500 transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
              onClick={e => e.stopPropagation()}
              title="Open full size"
            >
              <ExternalLink size={22} />
            </a>
            <button
              onClick={() => setLightboxItem(null)}
              className="text-white hover:text-brand-500 transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
              <X size={22} />
            </button>
          </div>
          <div className="max-w-[95vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img
              src={lightboxItem.url}
              alt="Package Preview"
              className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamBuildingPage;