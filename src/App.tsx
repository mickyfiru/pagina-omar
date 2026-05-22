import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  ChevronDown,
  Clock,
  Fuel,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Route,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

const HERO_VIDEO_URL = "/phoenix-hero.mp4";
const WHATSAPP_NUMBER = "XXXXXXXXXXX";
const WHATSAPP_MESSAGE = "Hola Phoenix Tow Solution SPA, necesito asistencia vial.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Galería", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const trustItems = [
  { label: "Disponible 24/7", icon: Clock },
  { label: "Cobertura interurbana", icon: MapPin },
  { label: "Respuesta rápida", icon: ShieldCheck },
  { label: "Contacto por WhatsApp", icon: MessageCircle },
];

const services = [
  {
    title: "Asistencia de batería",
    description: "Ayuda para vehículos con batería descargada. Servicio rápido para que puedas continuar tu camino.",
    icon: BatteryCharging,
  },
  {
    title: "Cambio de neumáticos",
    description: "Soporte en carretera para cambio de neumáticos ante pinchazos o emergencias.",
    icon: Wrench,
  },
  {
    title: "Suministro de combustible",
    description: "Entrega de combustible cuando tu vehículo se queda sin gasolina durante el trayecto.",
    icon: Fuel,
  },
];

const steps = [
  "Escríbenos por WhatsApp",
  "Comparte tu ubicación y emergencia",
  "Enviamos asistencia a tu ruta",
];

const galleryItems = [
  { label: "Asistencia nocturna", icon: Moon },
  { label: "Batería descargada", icon: BatteryCharging },
  { label: "Cambio de neumático", icon: Wrench },
  { label: "Combustible en ruta", icon: Fuel },
  { label: "Respuesta 24/7", icon: Clock },
  { label: "Cobertura interurbana", icon: Route },
];

const faqs = [
  {
    question: "¿Atienden 24/7?",
    answer: "Sí. Phoenix Tow Solution SPA ofrece asistencia vial todos los días, a cualquier hora.",
  },
  {
    question: "¿Qué servicios ofrecen?",
    answer: "Asistencia de batería, cambio de neumáticos y suministro de combustible.",
  },
  {
    question: "¿Cómo solicito asistencia?",
    answer: "Puedes solicitar ayuda directamente por WhatsApp desde la página.",
  },
  {
    question: "¿Trabajan en zonas interurbanas?",
    answer: "Sí. La cobertura está enfocada en asistencia interurbana.",
  },
  {
    question: "¿Tienen atención por teléfono?",
    answer: "El método principal de contacto es WhatsApp.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
};

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-phoenix">Phoenix Tow</p>
      <h2 className="text-balance text-3xl font-extrabold uppercase tracking-[0.14em] text-ivory sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-ash sm:text-lg">{subtitle}</p> : null}
    </motion.div>
  );
}

function WhatsAppButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-phoenix focus:ring-offset-2 focus:ring-offset-obsidian";
  const styles =
    variant === "primary"
      ? "bg-fire-gradient text-obsidian shadow-ember hover:-translate-y-0.5 hover:shadow-ember-strong"
      : "border border-bronze/60 bg-white/5 text-ivory hover:border-phoenix hover:bg-phoenix/10";

  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-bronze/20 bg-obsidian/75 backdrop-blur-xl"
      initial="hidden"
      animate="visible"
      variants={fadeDown}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="group leading-none" aria-label="Phoenix Tow Solution SPA">
          <span className="block text-base font-extrabold uppercase tracking-[0.24em] text-ivory group-hover:text-phoenix">
            Phoenix Tow
          </span>
          <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-ash">
            Solution SPA
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsAppButton className="min-h-11 px-5 text-xs">
            <MessageCircle className="h-4 w-4" />
            WhatsApp 24/7
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bronze/40 bg-card/80 text-ivory lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex min-h-screen flex-col bg-obsidian/98 px-6 py-6 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-base font-extrabold uppercase tracking-[0.24em] text-ivory">Phoenix Tow</span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-ash">
                  Solution SPA
                </span>
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bronze/40 bg-card text-ivory"
                aria-label="Cerrar menú"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-14 flex flex-1 flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="border-b border-bronze/20 pb-5 text-xl font-extrabold uppercase tracking-[0.2em] text-ivory"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <WhatsAppButton className="mt-4 w-full">
                <MessageCircle className="h-5 w-5" />
                WhatsApp 24/7
              </WhatsAppButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const titleWords = "ASISTENCIA VIAL 24/7".split(" ");

  return (
    <section id="inicio" className="relative flex min-h-screen overflow-hidden pt-20">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>
      <div className="hero-fallback absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,0.96),rgba(3,3,3,0.72),rgba(3,3,3,0.94))]" />
      <div className="noise absolute inset-0 opacity-35" />
      <motion.div
        className="floating-ember left-[12%] top-[26%]"
        animate={{ y: [0, -24, 0], opacity: [0.18, 0.38, 0.18] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-ember right-[12%] top-[58%] h-56 w-56"
        animate={{ y: [0, 28, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 py-16 lg:px-8">
        <div className="max-w-3xl text-center lg:text-left">
          <motion.p
            className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-phoenix"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            Phoenix Tow Solution SPA
          </motion.p>
          <motion.h1
            className="text-balance text-4xl font-extrabold uppercase tracking-[0.12em] text-ivory sm:text-6xl lg:text-7xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word) => (
              <motion.span
                key={word}
                className="mr-3 inline-block"
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg font-extrabold uppercase tracking-[0.18em] text-ember sm:text-xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            CUANDO TU VEHÍCULO SE DETIENE, NOSOTROS RESPONDEMOS.
          </motion.p>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ash sm:text-lg lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.5 }}
          >
            Phoenix Tow Solution SPA ofrece asistencia de batería, cambio de neumáticos y suministro de combustible en
            rutas interurbanas. Atención rápida por WhatsApp, todos los días, a cualquier hora.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.65 }}
          >
            <WhatsAppButton className="w-full sm:w-auto">
              <MessageCircle className="h-5 w-5" />
              Pedir asistencia por WhatsApp
            </WhatsAppButton>
            <a
              href="#servicios"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-bronze/60 bg-card/80 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-ivory transition hover:border-phoenix hover:bg-phoenix/10 sm:w-auto"
            >
              Ver servicios
            </a>
          </motion.div>
          <motion.div
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {trustItems.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-2xl border border-bronze/25 bg-card/60 p-4 text-left backdrop-blur"
                variants={fadeUp}
                transition={{ duration: 0.55 }}
              >
                <item.icon className="mb-3 h-5 w-5 text-phoenix" />
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ivory">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="section-shell">
      <SectionHeading title="SERVICIOS DE ASISTENCIA" subtitle="Soluciones rápidas para emergencias comunes en carretera." />
      <motion.div
        className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.article key={service.title} className="premium-card group" variants={fadeUp}>
            <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-phoenix/25 bg-phoenix/10 text-phoenix shadow-ember-soft">
              <service.icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-extrabold uppercase tracking-[0.18em] text-ivory">{service.title}</h3>
            <p className="mt-4 leading-7 text-ash">{service.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function EmergencyCTA() {
  return (
    <section className="px-5 py-8 lg:px-8">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-phoenix/30 bg-[radial-gradient(circle_at_15%_50%,rgba(255,90,0,0.22),transparent_32%),linear-gradient(135deg,#161616,#080808)] p-7 shadow-ember-soft md:flex-row md:p-9"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
      >
        <div>
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.16em] text-ivory">¿Necesitas ayuda ahora?</h2>
          <p className="mt-3 text-ash">Estamos disponibles 24/7 para asistirte en carretera.</p>
        </div>
        <WhatsAppButton>
          <MessageCircle className="h-5 w-5" />
          Contactar por WhatsApp
          <ArrowRight className="h-5 w-5" />
        </WhatsAppButton>
      </motion.div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-shell">
      <SectionHeading title="ASISTENCIA EN 3 PASOS" />
      <div className="mx-auto max-w-6xl">
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-6 top-0 h-full w-px bg-bronze/50 md:left-0 md:right-0 md:top-8 md:mx-auto md:h-px md:w-[72%]" />
          {steps.map((step, index) => (
            <motion.div
              key={step}
              className="relative pl-16 md:pl-0 md:text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-phoenix bg-card text-sm font-extrabold uppercase tracking-[0.12em] text-phoenix shadow-ember md:left-1/2 md:-translate-x-1/2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-1 md:pt-20">
                <h3 className="text-lg font-extrabold uppercase tracking-[0.16em] text-ivory">{step}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="cobertura" className="section-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-phoenix">Rutas y emergencia</p>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-[0.14em] text-ivory sm:text-4xl">
            COBERTURA INTERURBANA
          </h2>
          <p className="mt-5 text-base leading-8 text-ash sm:text-lg">
            Atendemos emergencias viales en rutas interurbanas, brindando soporte rápido y confiable cuando más lo
            necesitas.
          </p>
          <WhatsAppButton className="mt-8">
            <MessageCircle className="h-5 w-5" />
            Consultar cobertura por WhatsApp
          </WhatsAppButton>
        </motion.div>
        <motion.div
          className="map-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="route-line" />
          <span className="map-pin left-[16%] top-[64%]" />
          <span className="map-pin left-[48%] top-[38%]" />
          <span className="map-pin left-[76%] top-[56%]" />
          <div className="absolute bottom-5 left-5 rounded-full border border-bronze/40 bg-obsidian/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-ivory backdrop-blur">
            Interurbano 24/7
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ icon: Icon, title }: IconCardProps) {
  return (
    <motion.article className="gallery-card group" variants={fadeUp}>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <Icon className="h-9 w-9 text-phoenix transition group-hover:scale-110" />
        <h3 className="mt-16 text-base font-extrabold uppercase tracking-[0.18em] text-ivory">{title}</h3>
      </div>
    </motion.article>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="section-shell">
      <SectionHeading
        title="GALERÍA"
        subtitle="Una presencia visual fuerte para una marca de asistencia vial moderna."
      />
      <motion.div
        className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {galleryItems.map((item) => (
          <GalleryCard key={item.label} icon={item.icon} title={item.label} />
        ))}
      </motion.div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-shell">
      <SectionHeading title="PREGUNTAS FRECUENTES" />
      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-bronze/25 bg-card/70"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-extrabold uppercase tracking-[0.15em] text-ivory sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-phoenix transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <p className="border-t border-bronze/20 px-5 py-5 leading-7 text-ash">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCTA() {
  const badges = ["24/7", "WhatsApp", "Interurbano", "Respuesta rápida"];

  return (
    <section id="contacto" className="px-5 py-24 lg:px-8">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-phoenix/25 bg-[linear-gradient(135deg,#161616,#030303)] px-6 py-16 text-center shadow-ember-soft sm:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(255,90,0,0.3),transparent_45%),radial-gradient(circle_at_18%_20%,rgba(139,30,15,0.28),transparent_30%)]" />
        <div className="noise absolute inset-0 opacity-25" />
        <div className="relative z-10">
          <Sparkles className="mx-auto mb-5 h-9 w-9 text-phoenix" />
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-[0.15em] text-ivory sm:text-5xl">
            ¿NECESITAS ASISTENCIA AHORA?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ash">
            Estamos disponibles 24/7 para ayudarte en carretera.
          </p>
          <WhatsAppButton className="mt-8">
            <MessageCircle className="h-5 w-5" />
            CONTACTAR POR WHATSAPP
          </WhatsAppButton>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-bronze/40 bg-obsidian/55 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-ivory"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-bronze/20 bg-obsidian px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-lg font-extrabold uppercase tracking-[0.22em] text-ivory">Phoenix Tow Solution SPA</h2>
          <p className="mt-4 text-ash">Asistencia vial 24/7</p>
          <p className="mt-2 text-ash">Batería • Neumáticos • Combustible</p>
          <p className="mt-2 text-ash">Cobertura interurbana</p>
          <p className="mt-2 text-ash">Contacto principal: WhatsApp</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-fire-gradient text-obsidian shadow-ember-strong transition hover:-translate-y-1 sm:w-auto sm:px-5"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-phoenix/30 animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
      <span className="relative ml-2 hidden text-xs font-extrabold uppercase tracking-[0.16em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}

function App() {
  const page = useMemo(
    () => (
      <>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <EmergencyCTA />
          <HowItWorks />
          <Coverage />
          <Gallery />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </>
    ),
    [],
  );

  return page;
}

export default App;
