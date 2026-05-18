import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const accent = {
  text: "text-sky-200",
  textStrong: "text-sky-300",
  border: "border-sky-300/20",
  bg: "bg-sky-300/10",
  button: "bg-sky-300 text-slate-950 hover:bg-sky-200",
  glow: "shadow-sky-950/20",
};

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const timelineItem = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fieldExperience = [
  {
    icon: Plane,
    title: "Aviation Ramp Operations",
    detail:
      "FedEx Express ramp experience across weight and balance workflows, freight priority, flight crew communication, team coordination, and time-critical execution.",
  },
  {
    icon: Truck,
    title: "CDL Freight & Route Work",
    detail:
      "FedEx feeder path and ABF city driver experience handling pickups, deliveries, customer-facing freight workflows, and CDL operations with doubles/triples, tanker, and hazmat endorsements.",
  },
  {
    icon: Wrench,
    title: "Skilled Trades Foundation",
    detail:
      "Hardwood flooring, demolition, installation, finishing, tile, and custom staircase work — hands-on craftsmanship that shaped a practical builder mindset.",
  },
];

const caseStudies = [
  {
    eyebrow: "Confidential Operations Platform",
    title: "Executive Operational Intelligence",
    description:
      "Built and refined internal reporting experiences that help stakeholders understand fleet, site, inspection, and documentation health without exposing proprietary product details.",
    bullets: [
      "Translated messy operational questions into clean dashboard views and KPI patterns",
      "Worked across Java, JSP/Servlets, MySQL, backend controllers, and responsive UI layers",
      "Focused on performance, clarity, and decision-making value while respecting NDA boundaries",
    ],
  },
  {
    eyebrow: "Confidential Field Software",
    title: "Mobile Diagnostic Workflows",
    description:
      "Contributed to field-facing mobile experiences for diagnostic workflows, device interaction, automated test visibility, and technician usability.",
    bullets: [
      "Improved real-time status visibility for multi-step diagnostic processes",
      "Worked with Android, Java/Kotlin patterns, BLE workflows, and field-device constraints",
      "Designed around speed, readability, and trust in shop, yard, and service environments",
    ],
  },
  {
    eyebrow: "Founder Project",
    title: "RoundCount",
    description:
      "A privacy-first firearm performance intelligence app for range sessions, ammo tracking, firearm records, and ownership insights.",
    bullets: [
      "Released iOS product experience and rebuilt the foundation for iOS + Android in Flutter",
      "Designed local-first architecture with Drift/SQLite, Riverpod, and GoRouter",
      "Owned product strategy, monetization, analytics direction, and Pro positioning",
    ],
  },
  {
    eyebrow: "Builder Lab",
    title: "Local Business Systems",
    description:
      "Lead capture, booking, CRM, customer portals, and workflow tooling concepts for service businesses and field-data opportunities.",
    bullets: [
      "Explores practical systems for businesses that need qualified leads, quotes, and follow-up",
      "Includes service-business funnels, drone/property report workflows, and customer delivery portals",
      "Built with a revenue-first mindset: simple, useful, and focused on operational lift",
    ],
  },
];

const capabilities = [
  {
    title: "Backend & Data",
    items: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "REST APIs", "Query tuning"],
  },
  {
    title: "Mobile & Field Apps",
    items: ["Android", "Flutter", "iOS", "BLE workflows", "Offline-first UX", "Device constraints"],
  },
  {
    title: "Frontend & Product UX",
    items: ["Tailwind", "HTMX", "Dashboards", "Responsive UI", "Product flows", "Design systems"],
  },
  {
    title: "Operations & Strategy",
    items: ["Logistics", "Aviation ramp", "CDL freight", "Diagnostics", "Workflow design", "Founder execution"],
  },
];

const timeline = [
  ["2011", "Graduated high school and started at FedEx Express as a material handler at DENR."],
  ["2011–2015", "FedEx Express delivery driver at BJCA, building early logistics and customer-facing route experience."],
  ["2015–2017", "Flooring contractor performing hardwood demo, install, finishing, tile, and custom staircase work."],
  ["2017", "Amazon DEN3 warehouse operations before returning to FedEx."],
  ["2018–2020", "FedEx Express ramp agent focused on aircraft weight and balance, freight priority, and cross-team execution."],
  ["2020–2021", "Moved to North Idaho, transferred to GEGR, earned CDL, and moved toward feeder operations."],
  ["2021–2022", "ABF Spokane CDL city driver handling pickups, deliveries, freight, customer routes, and long operational days."],
  ["2022–Present", "Coding Dojo graduate turned software engineer building operational software for physical-world workflows."],
];

const proofPoints = [
  "10+ years in logistics, freight, aviation ramp operations, CDL work, and skilled trades before software",
  "Production software experience across backend systems, mobile tools, dashboards, data workflows, and field-facing UX",
  "Founder-led product work spanning mobile apps, local business tooling, ecommerce concepts, and operational systems",
];

const contactLinks = [
  {
    label: "Email Alex",
    href: "mailto:schaffer.engineering@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/ASchaffer8770",
    icon: Code2,
    primary: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexander-schaffer/",
    icon: ExternalLink,
    primary: false,
  },
];

const dataSmokeTests = [
  {
    name: "four case studies",
    pass: caseStudies.length === 4,
  },
  {
    name: "four capability groups",
    pass: capabilities.length === 4,
  },
  {
    name: "professional email configured",
    pass: contactLinks[0]?.href === "mailto:schaffer.engineering@gmail.com",
  },
  {
    name: "no broken placeholder content",
    pass: [...fieldExperience, ...caseStudies, ...capabilities].every(
      (item) => !JSON.stringify(item).includes("$1"),
    ),
  },
];

function Pill({ children }) {
  return (
    <span className={`rounded-full border ${accent.border} ${accent.bg} px-3 py-1 text-xs font-medium ${accent.text} shadow-sm ${accent.glow}`}>
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-white">{eyebrow}</div>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>}
    </motion.div>
  );
}

function ContactButton({ link }) {
  const Icon = link.icon;
  const isExternal = link.href.startsWith("http");

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }}>
      <Button
        asChild
        variant={link.primary ? "default" : "outline"}
        className={
          link.primary
            ? `h-12 w-full justify-start rounded-2xl ${accent.button} font-semibold shadow-lg shadow-sky-950/20 transition-shadow hover:shadow-sky-900/30`
            : "h-12 w-full justify-start rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
        }
      >
        <a href={link.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
          <Icon className="mr-3 h-4 w-4" /> {link.label}
        </a>
      </Button>
    </motion.div>
  );
}

function ProofRail() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid gap-3 md:grid-cols-3"
    >
      {proofPoints.map((point, index) => (
        <motion.div
          key={point}
          variants={scaleIn}
          whileHover={{ y: -6, scale: 1.015 }}
          className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/10 backdrop-blur transition-colors hover:bg-white/[0.07]"
        >
          <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-2xl ${accent.bg} ${accent.textStrong}`}>
            0{index + 1}
          </div>
          <p className="text-sm leading-6 text-slate-300">{point}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function FieldExperienceCard({ item }) {
  const Icon = item.icon;

  return (
    <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.055] shadow-xl shadow-black/20 backdrop-blur transition-colors hover:bg-white/[0.075]">
      <CardContent className="p-6">
        <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${accent.bg} ${accent.textStrong}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-slate-50 drop-shadow-sm">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
      </CardContent>
    </Card>
  );
}

function CaseStudyCard({ study }) {
  return (
    <Card className="group h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur transition-colors hover:bg-white/[0.075]">
      <CardContent className="p-6 md:p-8">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white">{study.eyebrow}</div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-slate-50 drop-shadow-sm md:text-3xl">{study.title}</h3>
          <div className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition group-hover:text-sky-300">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
        <p className="mt-4 text-base leading-7 text-slate-300">{study.description}</p>
        <div className="mt-6 space-y-3">
          {study.bullets.map((bullet) => (
            <div key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
              <BadgeCheck className={`mt-0.5 h-5 w-5 shrink-0 ${accent.textStrong}`} />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CapabilityCard({ group }) {
  return (
    <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.055] backdrop-blur transition-colors hover:bg-white/[0.075]">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold tracking-tight text-slate-50 drop-shadow-sm">{group.title}</h3>
        <div className="mt-5 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function runDataSmokeTests() {
  return dataSmokeTests.every((test) => test.pass);
}

export default function AlexSchafferPortfolio() {
  runDataSmokeTests();

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, 18, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[18%] top-[-14rem] h-[32rem] w-[32rem] rounded-full bg-sky-500/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -24, 0], y: [0, 22, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10rem] top-[16rem] h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-16rem] left-[25%] h-[34rem] w-[34rem] rounded-full bg-amber-500/8 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:100%_100%,54px_54px,54px_54px]" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8"
      >
        <motion.a href="#top" whileHover={{ y: -1 }} className="group block">
          <div className="text-sm font-semibold tracking-tight text-white">Alex Schaffer</div>
          <div className="text-xs text-slate-400">Operator × Engineer × Builder</div>
        </motion.a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#work">Work</a>
          <a className="transition hover:text-white" href="#experience">Experience</a>
          <a className="transition hover:text-white" href="#skills">Skills</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
      </motion.header>

      <section id="top" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div variants={fadeUp} className="mb-6 flex flex-wrap justify-center gap-2">
              <Pill>Field-tested software engineer</Pill>
              <Pill>Operational systems</Pill>
              <Pill>Builder mindset</Pill>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Looking for someone who can bridge software, operations, and product execution?
            </motion.h1>
          </div>

          <motion.div variants={scaleIn} className="relative mx-auto mt-12 max-w-5xl">
            <motion.div
              animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.025, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-[2rem] bg-sky-400/10 blur-2xl"
            />
            <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.055] shadow-2xl shadow-black/40 backdrop-blur-xl">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.28em] text-white">Core identity</div>
                    <div className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">Builder · Engineer · Operator</div>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className={`h-7 w-7 shrink-0 ${accent.textStrong}`} />
                  </motion.div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div>
                    <p className="text-xl leading-8 text-slate-100 md:text-2xl md:leading-9">
                      I build backend systems, mobile tools, dashboards, and product platforms for the messy places where operations, equipment, people, and data meet.
                    </p>

                    <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
                      Before software, I worked in aviation ramp operations, delivery, CDL freight, and skilled trades. That background gives me an operator’s eye for practical workflows — and a builder’s bias toward shipping useful systems.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button asChild className={`h-12 rounded-2xl px-6 font-semibold ${accent.button}`}>
                        <a href="#work">View selected work <ArrowRight className="ml-2 h-4 w-4" /></a>
                      </Button>
                      <Button asChild variant="outline" className="h-12 rounded-2xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                        <a href="#contact">Start a conversation</a>
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {[
                      [Route, "Lived the workflow", "Freight, delivery, ramp, CDL, and field operations experience before software."],
                      [Code2, "Builds the system", "Backend, mobile, data, dashboards, diagnostics, and product implementation."],
                      [Zap, "Creates leverage", "Identifies friction, ships tools, tests products, and turns ideas into real assets."],
                    ].map(([Icon, title, text]) => (
                      <motion.div
                        key={title}
                        whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.075)" }}
                        className="rounded-3xl border border-white/10 bg-black/25 p-5"
                      >
                        <div className="flex gap-4">
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${accent.bg} ${accent.textStrong}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold tracking-tight text-slate-50 drop-shadow-sm">{title}</div>
                            <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="mt-16">
          <ProofRail />
        </div>
      </section>

      <section id="experience" className="relative z-10 border-y border-white/10 bg-white/[0.025] px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Built from the field up"
            title="I understand the operation behind the software."
            description="This is the leverage: I can talk to the people doing the work, understand the real constraints, and then build systems that respect the environment they operate in."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5 md:grid-cols-3"
          >
            {fieldExperience.map((item) => (
              <motion.div key={item.title} variants={scaleIn} whileHover={{ y: -8, scale: 1.015 }}>
                <FieldExperienceCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="work" className="relative z-10 px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Public-safe case studies. Real technical depth."
            description="Some professional work is intentionally described at a higher level to respect confidentiality. The focus here is the problem shape, engineering judgment, and outcomes — not proprietary screenshots or product details."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {caseStudies.map((study) => (
              <motion.div key={study.title} variants={scaleIn} whileHover={{ y: -8, scale: 1.01 }}>
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="relative z-10 border-y border-white/10 bg-black/20 px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Capability stack"
            title="Engineering range with operational depth."
            description="The technical stack matters, but the leverage is knowing which problems are worth solving and how the work actually gets done in the field."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {capabilities.map((group) => (
              <motion.div key={group.title} variants={scaleIn} whileHover={{ y: -6 }}>
                <CapabilityCard group={group} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Career timeline"
            title="A builder path, not a straight line."
            description="The throughline is practical execution: physical work, logistics pressure, operational responsibility, and then software as the leverage layer."
          />

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-300 via-white/15 to-transparent md:left-1/2" />
            <div className="space-y-6">
              {timeline.map(([year, text], index) => (
                <motion.div
                  key={year}
                  variants={timelineItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="relative grid gap-4 md:grid-cols-2"
                >
                  <div
                    className={`${index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2 md:text-left"} ml-12 md:ml-0`}
                  >
                    <Card className="rounded-3xl border-white/10 bg-white/[0.055] backdrop-blur">
                      <CardContent className="p-5">
                        <div className={`text-sm font-bold ${accent.textStrong}`}>{year}</div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border border-sky-100 bg-sky-300 shadow-lg shadow-sky-400/30 md:left-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 pb-16 md:px-8 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scaleIn}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-sky-400/12 via-white/[0.055] to-indigo-400/10 p-8 shadow-2xl shadow-black/30 backdrop-blur md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white">
                <ShieldCheck className="h-4 w-4" /> Open to the right opportunity
              </div>
              <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
                Let’s build useful systems for real-world work.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                I’m interested in software engineering, solutions engineering, technical product, and operational technology roles where real-world workflow understanding is an advantage.
              </p>
            </div>

            <Card className="rounded-[2rem] border-white/10 bg-black/25 backdrop-blur">
              <CardContent className="space-y-3 p-5">
                {contactLinks.map((link) => (
                  <ContactButton key={link.label} link={link} />
                ))}
                <div className="flex items-center gap-2 pt-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4" /> Spokane / North Idaho region
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div>© {new Date().getFullYear()} Alex Schaffer. Built for the real world.</div>
            <div className="flex items-center gap-2 text-slate-400">
              <BriefcaseBusiness className="h-4 w-4" /> Software Engineer · Operator · Builder
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
