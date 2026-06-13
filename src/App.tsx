import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Cat,
  ChevronDown,
  Clock,
  Dog,
  Fuel,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  PawPrint,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  UnlockKeyhole,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { setupVideoLoop } from "./utils/videoLoop";

const HERO_VIDEO_URL = "/logo/phoenix-hero.mp4";
const HERO_VIDEO_LOOP_START = 1.2;
const HERO_VIDEO_LOOP_END = 8.6;
const PHOENIX_WHATSAPP_NUMBER = "56966871828";
const PET_STORE_WHATSAPP_NUMBER = "56934193423";
const INSTAGRAM_USERNAME = "phenixtow.cl";
const PHOENIX_WHATSAPP_MESSAGE = "Hola Phoenix Tow Solutions SPA, necesito asistencia vial.";
const PET_STORE_WHATSAPP_MESSAGE = "Hola, quiero consultar por alimentos para perros y gatos.";
const PHOENIX_WHATSAPP_URL = `https://wa.me/${PHOENIX_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  PHOENIX_WHATSAPP_MESSAGE,
)}`;
const PET_STORE_WHATSAPP_URL = `https://wa.me/${PET_STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  PET_STORE_WHATSAPP_MESSAGE,
)}`;
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}`;

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
  {
    title: "Apertura de automóviles",
    description:
      "Asistencia para apertura de vehículos en caso de llaves olvidadas, bloqueo accidental o emergencias similares.",
    icon: UnlockKeyhole,
  },
  {
    title: "Transporte",
    description:
      "Servicio de transporte y apoyo logístico según disponibilidad, orientado a traslados y necesidades en ruta.",
    icon: Truck,
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
    answer: "Sí. Phoenix Tow Solutions SPA ofrece asistencia vial todos los días, a cualquier hora.",
  },
  {
    question: "¿Qué servicios ofrecen?",
    answer:
      "Asistencia de batería, cambio de neumáticos, suministro de combustible, apertura de automóviles y transporte.",
  },
  {
    question: "¿Realizan apertura de automóviles?",
    answer:
      "Sí. Se ofrece asistencia para apertura de vehículos en casos de bloqueo accidental o llaves olvidadas, según disponibilidad.",
  },
  {
    question: "¿También ofrecen transporte?",
    answer: "Sí. Phoenix Tow Solutions SPA también ofrece servicio de transporte y apoyo logístico según disponibilidad.",
  },
  {
    question: "¿Qué es el emprendimiento asociado de alimentos para mascotas?",
    answer: "Es un emprendimiento familiar asociado, con contacto independiente por WhatsApp.",
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
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex min-h-12 min-w-0 max-w-full flex-wrap items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-xs font-extrabold uppercase leading-5 tracking-[0.1em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-phoenix focus:ring-offset-2 focus:ring-offset-obsidian sm:text-sm sm:tracking-[0.18em] [&>svg]:shrink-0";
  const styles =
    variant === "primary"
      ? "bg-fire-gradient text-obsidian shadow-ember hover:-translate-y-0.5 hover:shadow-ember-strong"
      : "border border-bronze/60 bg-white/5 text-ivory hover:border-phoenix hover:bg-phoenix/10";
  const content = Children.map(children, (child) =>
    typeof child === "string" && child.trim().length > 0 ? (
      <span className="min-w-0 max-w-full whitespace-normal break-words">{child.trim()}</span>
    ) : (
      child
    ),
  );

  return (
    <a href={PHOENIX_WHATSAPP_URL} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
      {content}
    </a>
  );
}

function InstagramLink({
  children,
  className = "",
  iconOnly = false,
}: {
  children?: ReactNode;
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 border border-bronze/45 bg-card/70 text-ivory transition duration-300 hover:-translate-y-0.5 hover:border-phoenix hover:bg-phoenix/10 hover:text-phoenix focus:outline-none focus:ring-2 focus:ring-phoenix focus:ring-offset-2 focus:ring-offset-obsidian ${className}`}
      aria-label={iconOnly ? "Instagram de Phoenix Tow Solutions SPA" : undefined}
    >
      <Instagram className="h-5 w-5 shrink-0" />
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
        <a href="#inicio" className="group leading-none" aria-label="Phoenix Tow Solutions SPA">
          <span className="block text-base font-extrabold uppercase tracking-[0.24em] text-ivory group-hover:text-phoenix">
            Phoenix Tow
          </span>
          <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-ash">
            Solutions SPA
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <InstagramLink iconOnly className="h-11 w-11 rounded-full" />
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
            className="fixed inset-0 z-[80] flex min-h-screen flex-col bg-obsidian px-6 py-6 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-base font-extrabold uppercase tracking-[0.24em] text-ivory">Phoenix Tow</span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-ash">
                  Solutions SPA
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
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-b border-bronze/20 pb-5 text-xl font-extrabold uppercase tracking-[0.2em] text-ivory transition hover:text-phoenix"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Instagram className="h-6 w-6 shrink-0 text-phoenix" />
                Instagram
              </motion.a>
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const titleWords = "ASISTENCIA VIAL 24/7".split(" ");

  useEffect(() => {
    if (!videoRef.current) return;

    const cleanup = setupVideoLoop(videoRef.current, HERO_VIDEO_LOOP_START, HERO_VIDEO_LOOP_END);

    return cleanup;
  }, []);

  return (
    <section id="inicio" className="relative flex min-h-screen overflow-hidden pt-20">
      <div className="hero-fallback absolute inset-0" />
      <video
        ref={videoRef}
        className="absolute inset-0 z-[1] h-full w-full object-cover opacity-55"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(3,3,3,0.88),rgba(3,3,3,0.52),rgba(3,3,3,0.82))]" />
      <div className="noise absolute inset-0 z-[3] opacity-25" />
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
        <div className="w-full min-w-0 max-w-[22rem] text-center sm:max-w-3xl lg:text-left">
          <motion.p
            className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-phoenix"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            Phoenix Tow Solutions SPA
          </motion.p>
          <motion.h1
            className="text-balance text-3xl font-extrabold uppercase tracking-[0.12em] text-ivory min-[380px]:text-4xl sm:text-6xl lg:text-7xl"
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
            Phoenix Tow Solutions SPA ofrece asistencia de batería, cambio de neumáticos, suministro de combustible,
            apertura de automóviles y transporte en rutas interurbanas. Atención rápida por WhatsApp, todos los días, a
            cualquier hora.
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
                className="min-w-0 rounded-2xl border border-bronze/25 bg-card/60 p-4 text-left backdrop-blur"
                variants={fadeUp}
                transition={{ duration: 0.55 }}
              >
                <item.icon className="mb-3 h-5 w-5 text-phoenix" />
                <p className="break-words text-xs font-extrabold uppercase tracking-[0.16em] text-ivory">{item.label}</p>
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

function PetFoodPromo() {
  return (
    <section id="emprendimiento-asociado" className="px-5 py-8 lg:px-8" aria-labelledby="pet-food-title">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-phoenix/25 bg-ivory px-6 py-12 text-obsidian shadow-ember-soft sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        variants={fadeUp}
      >
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-phoenix/20" />
        <div className="absolute bottom-8 right-8 hidden text-phoenix/10 lg:block">
          <PawPrint className="h-40 w-40" />
        </div>

        <div className="relative z-10 grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-phoenix/35 bg-white/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-phoenix">
              <PawPrint className="h-4 w-4" />
              Pyme familiar
            </span>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-phoenix">
              EMPRENDIMIENTO ASOCIADO
            </p>
            <h2
              id="pet-food-title"
              className="text-balance text-3xl font-extrabold uppercase tracking-[0.12em] text-obsidian sm:text-4xl"
            >
              ALIMENTOS PARA PERROS Y GATOS
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-700 sm:text-lg">
              Promoción de emprendimiento familiar asociado. Consulta por alimentos para mascotas, con opciones para
              perros y gatos.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-end">
            <div className="flex gap-3 text-phoenix" aria-hidden="true">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-phoenix/30 bg-white/70">
                <Dog className="h-7 w-7" />
              </span>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-phoenix/30 bg-white/70">
                <Cat className="h-7 w-7" />
              </span>
            </div>
            <a
              href={PET_STORE_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 min-w-0 max-w-full flex-wrap items-center justify-center gap-2 rounded-full bg-obsidian px-6 py-3 text-center text-xs font-extrabold uppercase leading-5 tracking-[0.1em] text-ivory shadow-ember transition duration-300 hover:-translate-y-0.5 hover:bg-card focus:outline-none focus:ring-2 focus:ring-phoenix focus:ring-offset-2 focus:ring-offset-ivory sm:text-sm sm:tracking-[0.16em]"
            >
              <MessageCircle className="h-5 w-5 text-phoenix" />
              <span className="min-w-0 max-w-full whitespace-normal break-words">Consultar tienda de mascotas</span>
            </a>
          </div>
        </div>
      </motion.div>
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
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-bronze/25 bg-obsidian/55 p-5 backdrop-blur">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-ivory">
              También puedes seguirnos
            </h3>
            <p className="mt-3 text-sm leading-6 text-ash">
              Revisa novedades, servicios y actualizaciones en nuestro Instagram.
            </p>
            <InstagramLink className="mt-5 rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em]">
              Ver Instagram
            </InstagramLink>
          </div>
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
          <h2 className="text-lg font-extrabold uppercase tracking-[0.22em] text-ivory">Phoenix Tow Solutions SPA</h2>
          <p className="mt-4 text-ash">Asistencia vial 24/7</p>
          <p className="mt-2 text-ash">
            Asistencia de batería, cambio de neumáticos, suministro de combustible, apertura de automóviles y
            transporte.
          </p>
          <p className="mt-2 text-ash">Cobertura interurbana</p>
          <p className="mt-2 text-ash">Contacto principal: WhatsApp</p>
          <div className="mt-6">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-ash">Síguenos en Instagram</p>
            <InstagramLink className="rounded-xl px-4 py-3 text-xs font-extrabold uppercase tracking-[0.16em]">
              @{INSTAGRAM_USERNAME}
            </InstagramLink>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-bronze/20 pr-24 pt-6 text-left text-xs leading-6 text-ash sm:pr-48 lg:pr-0">
        <p>© 2026 Phoenix Tow Solutions SPA. Todos los derechos reservados.</p>
        <p>
          Página creada por{" "}
          <span className="font-semibold text-ivory transition-colors duration-300 hover:text-phoenix">Dywev</span>.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsAppButton() {
  return (
    <a
      href={PHOENIX_WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-fire-gradient text-obsidian shadow-ember-strong transition hover:-translate-y-1 sm:w-auto sm:px-5"
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
  return (
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
        <PetFoodPromo />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default App;
