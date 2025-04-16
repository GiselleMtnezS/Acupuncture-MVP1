'use client';

import { useState } from 'react';

export default function Page() {
    const [language, setLanguage] = useState('english');

    const content = {
        english: {
            title: 'Integrative Healing',
            subtitle: 'Wellness Center',
            tagline: 'Acupuncture and Massage to Nurture Your Natural Balance',
            doctor1: 'Dr. Giselle Sanchez',
            doctor1License: 'AP 4242',
            doctor1Email: 'gisellesanchezj@yahoo.es',
            doctor1Phone: '786-612-5972',
            doctor2: 'Dr. Alexander Febles',
            doctor2License: 'MA 96237',
            doctor2Email: 'alexanderfebles@yahoo.es',
            doctor2Phone: '786-546-9033',
            massageTitle: 'Massage Services',
            massageServices: [
                'Therapeutic Massage',
                'Shiatsu Massage',
                'Swedish Massage',
                'Deep Tissue Massage',
                'Tui Na Massage',
                'Cupping',
                'GuaSha',
            ],

            acupunctureTitle: 'Acupuncture Services',
            acupunctureServices: [
                'Acupuncture',
                'Electroestimulation',
                'Cupping',
                'GuaSha',
                'Herbal Formulas',
                'Herbal Teas',
                'Homeopathic Injections',
                'Moxibustion',
            ],

            bookNow: 'Book Appointment',
            about: 'About Us',
            contact: 'Contact',
            services: 'Services',
        },
        spanish: {
            title: 'Centro Integral',
            subtitle: 'de Curacion',
            tagline: 'Acupuntura y Masaje para Nutrir Tu Equilibrio Natural',
            doctor1: 'Dr. Giselle Sanchez',
            doctor1License: 'AP 4242',
            doctor1Email: 'gisellesanchezj@yahoo.es',
            doctor1Phone: '786-612-5972',
            doctor2: 'Dr. Alexander Febles',
            doctor2License: 'MA 96237',
            doctor2Email: 'alexanderfebles@yahoo.es',
            doctor2Phone: '786-546-9033',
            massageTitle: 'Servicios de Masaje',
            massageServices: [
                'Masaje Terapeutico',
                'Masaje Shiatsu',
                'Masaje Sueco',
                'Masaje De Tejido Profundo',
                'Masaje Tui Na',
                'Terapia con ventosas',
                'GuaSha',
            ],

            acupunctureTitle: 'Servicios de Acupuntura',
            acupunctureServices: [
                'Acupuntura',
                'Electroestimulación',
                'Terapia con ventosas',
                'GuaSha',
                'Fórmulas herbales',
                'Tés herbales',
                'Inyecciones Homeopáticas',
                'Moxibustión',
            ],

            bookNow: 'Reservar Cita',
            about: 'Sobre Nosotros',
            contact: 'Contacto',
            services: 'Servicios',
        },
    };

    const currentContent = content[language];

    return (
        <div className="min-h-screen bg-[#e8f2e9] text-[#1a3a3a] font-serif" data-oid="3zlk97b">
            {/* Navigation */}
            <nav className="py-6 px-8 flex justify-between items-center" data-oid="t00adgo">
                <div className="flex items-center" data-oid=".zy7hcn">
                    <div className="mr-4" data-oid="wxmxpgh">
                        {/* Logo - Lotus Image */}
                        <div
                            className="relative w-16 h-16 flex items-center justify-center"
                            data-oid="i.bv4wm"
                        >
                            <img
                                src="/images/lotus_logo.png"
                                alt="Integrative Healing Lotus Logo"
                                className="w-full h-full object-contain"
                                data-oid="vrlv8qb"
                            />
                        </div>
                    </div>
                    {/* Language Toggle - Now part of the left nav */}
                    <div className="mr-4 flex flex-col space-y-1" data-oid="h3.qlhv">
                        <button
                            onClick={() => setLanguage('english')}
                            className={`px-3 py-1 rounded-full text-sm ${language === 'english' ? 'bg-[#1a3a3a] text-white' : 'bg-white/70 text-[#1a3a3a]'}`}
                            data-oid="5p744u9"
                        >
                            English
                        </button>
                        <button
                            onClick={() => setLanguage('spanish')}
                            className={`px-3 py-1 rounded-full text-sm ${language === 'spanish' ? 'bg-[#1a3a3a] text-white' : 'bg-white/70 text-[#1a3a3a]'}`}
                            data-oid="8veshed"
                        >
                            Español
                        </button>
                    </div>

                    <div data-oid="jjje_l.">
                        <h1 className="text-2xl font-medium" data-oid="t:0vryi">
                            {currentContent.title}
                        </h1>

                        {language === 'spanish' ? (
                            <h1 className="text-2xl font-medium text-center" data-oid="rgy7sb1">
                                {currentContent.subtitle}
                            </h1>
                        ) : (
                            <h2 className="text-lg" data-oid="n:_ty-5">
                                {currentContent.subtitle}
                            </h2>
                        )}
                    </div>
                </div>
                <div className="hidden md:flex space-x-6 text-sm" data-oid=".w0ju_:">
                    <a
                        href="#about"
                        className="hover:text-[#3a6a6a] transition-colors"
                        data-oid="b.ssj1a"
                    >
                        {currentContent.about}
                    </a>
                    <a
                        href="#services"
                        className="hover:text-[#3a6a6a] transition-colors"
                        data-oid="-zz87p8"
                    >
                        {currentContent.services}
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-[#3a6a6a] transition-colors"
                        data-oid="tccfg4h"
                    >
                        {currentContent.contact}
                    </a>
                    <button
                        className="px-4 py-2 bg-[#1a3a3a] text-white rounded-full hover:bg-[#3a6a6a] transition-colors"
                        data-oid="mcaq0sr"
                    >
                        {currentContent.bookNow}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-16 px-8 overflow-hidden" data-oid="w6mud:f">
                <div
                    className="max-w-6xl mx-auto flex flex-col md:flex-row items-center"
                    data-oid="4l5osm4"
                >
                    <div className="md:w-1/2 z-10" data-oid="l.rd3h2">
                        <h2 className="text-4xl md:text-5xl font-light mb-6" data-oid="g-i7xk4">
                            {currentContent.tagline}
                        </h2>
                        <p className="text-lg mb-8 max-w-lg" data-oid="q61_jaa">
                            {language === 'english'
                                ? 'Experience holistic healing through our integrative approach combining Eastern and Western techniques for optimal wellness.'
                                : 'Experimente una curación holística a través de nuestro enfoque integrativo que combina técnicas orientales y occidentales para un bienestar óptimo.'}
                        </p>
                        <button
                            className="px-8 py-3 bg-[#1a3a3a] text-white rounded-full hover:bg-[#3a6a6a] transition-colors"
                            data-oid="5l:wesi"
                        >
                            {currentContent.bookNow}
                        </button>
                    </div>
                    <div
                        className="md:w-1/2 mt-12 md:mt-0 flex justify-center w-full h-full"
                        data-oid=":qgr450"
                    >
                        {/* Stylized lotus and hands image */}
                        <div
                            className="flex justify-center items-center w-full max-w-md aspect-square"
                            data-oid="gz.h8zy"
                        >
                            <img
                                src="/images/lotus_logo.png"
                                alt="Integrative Healing Lotus Logo"
                                className="object-contain h-full w-full"
                                data-oid="k74c5sr"
                            />
                        </div>
                    </div>
                </div>
                {/* Decorative leaf */}
                {/* Top decorative leaf - visible border on small and medium screens only */}
                <div
                    className="absolute -right-32 -top-32 w-96 h-96 border-2 md:border-0 border-[#a7c4b5] rounded-full opacity-60"
                    data-oid="cqj7xcs"
                >
                    <img
                        src="/images/decorative_leaf_1.png"
                        alt="Integrative Healing Leaf 1"
                        className="w-full h-full object-contain"
                        data-oid="rkti46:"
                    />
                </div>

                {/* Bottom decorative leaf - flipped horizontally */}
                <div
                    className="hidden lg:block absolute -right-24 -bottom-24 w-64 h-84 rounded-full opacity-60"
                    data-oid="66o7sgr"
                >
                    <img
                        src="/images/decorative_leaf_1.png"
                        alt="Integrative Healing Leaf 2 Flipped"
                        className="w-full h-full object-contain scale-y-[-1]"
                        data-oid="flippedleaf"
                    />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-8 bg-white/50" data-oid="xpehvt.">
                <div className="max-w-6xl mx-auto" data-oid="3j_9dna">
                    <h2 className="text-3xl mb-12 text-center" data-oid="r2ew4hq">
                        {language === 'english' ? 'Our Services' : 'Nuestros Servicios'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12" data-oid="ash6jzu">
                        {/* Acupuncture Services */}
                        <div
                            className="bg-white/80 p-8 rounded-lg shadow-sm border border-[#a7c4b5]/30"
                            data-oid="s6.9:ul"
                        >
                            <h3 className="text-2xl mb-6 flex items-center" data-oid="q0qs1cu">
                                <span className="mr-2" data-oid="1u85tph">
                                    {/* <img
                    src="/images/bullet_lotus_icon.png"
                    alt="Integrative Healing Lotus Bullets"
                    className="w-full h-full object-contain"
                    data-oid="rhfmacy"
                    /> */}
                                    🌿
                                </span>{' '}
                                {currentContent.acupunctureTitle}
                            </h3>
                            <ul className="space-y-3" data-oid="d.5d5na">
                                {currentContent.acupunctureServices.map((service, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center"
                                        data-oid="roopzap"
                                    >
                                        <span className="mr-2 text-[#3a6a6a]" data-oid="jdm5b9u">
                                            {/* <img
                      src="/images/bullet_lotus_icon.png"
                      alt="Integrative Healing Lotus Bullets"
                      className="w-full h-full object-contain"
                      data-oid="b4h84bs"
                      /> */}{' '}
                                            🌿
                                        </span>{' '}
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Massage Services */}
                        <div
                            className="bg-white/80 p-8 rounded-lg shadow-sm border border-[#a7c4b5]/30"
                            data-oid=".v0ctk7"
                        >
                            <h3 className="text-2xl mb-6 flex items-center" data-oid="v3zkudi">
                                <span className="mr-2" data-oid="1aknya8">
                                    {/* <img
                    src="/images/bullet_lotus_icon.png"
                    alt="Integrative Healing Lotus Bullets"
                    className="h-full object-contain w-full"
                    data-oid="28p6ybq"
                    /> */}
                                    🌿
                                </span>{' '}
                                {currentContent.massageTitle}
                            </h3>
                            <ul className="space-y-3" data-oid="mw:9b62">
                                {currentContent.massageServices.map((service, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center"
                                        data-oid="z0vut60"
                                    >
                                        <span className="mr-2 text-[#3a6a6a]" data-oid="ksq-no_">
                                            {/* <img
                      src="/images/bullet_lotus_icon.png"
                      alt="Integrative Healing Lotus Bullets"
                      className="w-full h-full object-contain"
                      data-oid="i-o:sxi"
                      /> */}
                                            🌿
                                        </span>{' '}
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practitioners Section */}
            <section id="about" className="py-16 px-8" data-oid="ar6yd:q">
                <div className="max-w-6xl mx-auto" data-oid="i8xvfeg">
                    <h2 className="text-3xl mb-12 text-center" data-oid="260ahek">
                        {language === 'english' ? 'Our Practitioners' : 'Nuestros Profesionales'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12" data-oid="3d7i6a3">
                        {/* Dr. Giselle Sanchez */}
                        <div
                            className="bg-white/80 p-8 rounded-lg shadow-sm border border-[#a7c4b5]/30"
                            data-oid="xbuod0:"
                        >
                            <h3 className="text-2xl mb-2" data-oid="r3phxu5">
                                {currentContent.doctor1}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4" data-oid="ub2cf4t">
                                {currentContent.doctor1License}
                            </p>
                            <p className="mb-2" data-oid="ryqfr23">
                                {currentContent.doctor1Email}
                            </p>
                            <p className="text-xl font-medium" data-oid="4ep_vke">
                                {currentContent.doctor1Phone}
                            </p>
                        </div>

                        {/* Dr. Alexander Febles */}
                        <div
                            className="bg-white/80 p-8 rounded-lg shadow-sm border border-[#a7c4b5]/30"
                            data-oid="f.6eja:"
                        >
                            <h3 className="text-2xl mb-2" data-oid="tnbjsq5">
                                {currentContent.doctor2}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4" data-oid="hwaojgy">
                                {currentContent.doctor2License}
                            </p>
                            <p className="mb-2" data-oid="bzlyn:_">
                                {currentContent.doctor2Email}
                            </p>
                            <p className="text-xl font-medium" data-oid=":h8..n0">
                                {currentContent.doctor2Phone}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-8 bg-white/50" data-oid="._yh5b3">
                <div className="max-w-6xl mx-auto" data-oid="0iv0qvs">
                    <h2 className="text-3xl mb-12 text-center" data-oid="wdhs46u">
                        {language === 'english' ? 'Contact Us' : 'Contáctenos'}
                    </h2>

                    {/* <div className="grid md:grid-cols-2 gap-12" data-oid="hg5f0ad"> */}
                    <div className="flex flex-col justify-center" data-oid="hg5f0ad">
                        <div data-oid="j754w2-" className="w-full md:w-1/2 mx-auto">
                            <form
                                className="space-y-6 w-full h-full flex flex-col justify-center items-stretch"
                                data-oid="bku3:h-"
                            >
                                <div data-oid="2w0-8t3" className="w-auto">
                                    <label className="block mb-2 text-sm" data-oid="b8cmpme">
                                        {language === 'english' ? 'Name' : 'Nombre'}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-[#a7c4b5] rounded-lg bg-white/80"
                                        data-oid="q1mrcwk"
                                    />
                                </div>
                                <div data-oid="870lafz">
                                    <label className="block mb-2 text-sm" data-oid="2y020rr">
                                        {language === 'english' ? 'Email' : 'Correo Electrónico'}
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full p-3 border border-[#a7c4b5] rounded-lg bg-white/80"
                                        data-oid=":3s5axa"
                                    />
                                </div>
                                <div data-oid="zqhv4mr">
                                    <label className="block mb-2 text-sm" data-oid="pejf.k_">
                                        {language === 'english' ? 'Phone' : 'Teléfono'}
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full p-3 border border-[#a7c4b5] rounded-lg bg-white/80"
                                        data-oid="eb8oc55"
                                    />
                                </div>
                                <div data-oid="3h1pl3a">
                                    <label className="block mb-2 text-sm" data-oid="hq65p7c">
                                        {language === 'english' ? 'Message' : 'Mensaje'}
                                    </label>
                                    <textarea
                                        className="w-full p-3 border border-[#a7c4b5] rounded-lg bg-white/80 h-32"
                                        data-oid="gdrn0cu"
                                    ></textarea>
                                </div>
                                <div
                                    className="flex justify-center items-center"
                                    data-oid="cock.-k"
                                >
                                    <button
                                        className="px-6 py-3 bg-[#1a3a3a] text-white rounded-full hover:bg-[#3a6a6a] transition-colors flex justify-center items-center"
                                        data-oid="0xnyz_r"
                                    >
                                        {language === 'english' ? 'Send Message' : 'Enviar Mensaje'}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* <div className="flex flex-col justify-center" data-oid="95kis0q">
              <div className="mb-8" data-oid="sg_7-a0">
              <h3 className="text-xl mb-4" data-oid="bh17hs.">
              {language === 'english' ? 'Our Location' : 'Nuestra Ubicación'}
              </h3>
              <p className="mb-2" data-oid="peoeytm">
              {language === 'english'
              ? '123 Healing Way'
              : '123 Camino de Curación'}
              </p>
              <p className="mb-2" data-oid="-zk72i_">
              {language === 'english' ? 'Miami, FL 33133' : 'Miami, FL 33133'}
              </p>
              </div>
              <div data-oid="hwdg:j6">
              <h3 className="text-xl mb-4" data-oid="o0cznkz">
              {language === 'english' ? 'Hours' : 'Horario'}
              </h3>
              <p className="mb-2" data-oid="s1yizx7">
              {language === 'english'
              ? 'Monday - Friday: 9am - 7pm'
              : 'Lunes - Viernes: 9am - 7pm'}
              </p>
              <p className="mb-2" data-oid="vg0r9e-">
              {language === 'english'
              ? 'Saturday: 10am - 4pm'
              : 'Sábado: 10am - 4pm'}
              </p>
              <p data-oid="zfrww9l">
              {language === 'english' ? 'Sunday: Closed' : 'Domingo: Cerrado'}
              </p>
              </div>
              </div> */}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-8 bg-[#1a3a3a] text-white" data-oid="2:8k6m4">
                <div
                    className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
                    data-oid="s7jc1l7"
                >
                    <div className="flex items-center mb-6 md:mb-0" data-oid="ed:bhiq">
                        {/* Small logo */}
                        <div
                            className="w-10 h-10 mr-3 bg-white/10 rounded-full flex items-center justify-center"
                            data-oid="6kbm:.."
                        >
                            <img
                                src="/images/lotus_logo.png"
                                alt="Integrative Healing Lotus Logo"
                                className="w-full h-full object-contain"
                                data-oid="ip7uv9_"
                            />
                        </div>
                        <div data-oid="s7-3-:m">
                            <h3 className="text-lg" data-oid="x36j:ru">
                                {currentContent.title}
                            </h3>
                            <p className="text-sm text-white/70" data-oid="cge8_rm">
                                {currentContent.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="text-center md:text-right" data-oid="b-kphwb">
                        <p className="text-sm text-white/70" data-oid="b_mhdbj">
                            {language === 'english'
                                ? '© 2023 Integrative Healing Wellness Center. All rights reserved.'
                                : '© 2023 Centro Integral de Curacion. Todos los derechos reservados.'}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
