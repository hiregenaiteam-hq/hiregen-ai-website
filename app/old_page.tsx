"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  Search,
  MessageSquare,
  BarChart3,
  Code,
  Clock,
  Calendar,
  Check,
  X,
  Plus,
  Minus,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useLayoutEffect } from "react"
import waitlist from '@zootools/waitlist-js'
import { UmukoziLogo } from "@/components/umukozi-logo"

const socialProofLogos = [
  { name: "AHRC", src: "/landing%20page%20porfolio%20logos/ahrc.jpg" },
  { name: "GCHRA", src: "/landing%20page%20porfolio%20logos/gchra.jpg" },
  { name: "Golden Star Resources", src: "/landing%20page%20porfolio%20logos/golden_star_resources_ltd_logo.png" },
  { name: "Kusi Consulting", src: "/landing%20page%20porfolio%20logos/kusiconsulting_logo.jpg" },
  { name: "RHRMO", src: "/landing%20page%20porfolio%20logos/rhrmo.png" },
  { name: "Rwanda Energy Group", src: "/landing%20page%20porfolio%20logos/Rwanda_Energy_Group_logo.png" },
  { name: "SHRM", src: "/landing%20page%20porfolio%20logos/shrm-main.svg" },
  { name: "Swissport", src: "/landing%20page%20porfolio%20logos/swissport.svg" },
  { name: "Benin Cashew SA", src: "/landing page porfolio logos/benin_cashew_sa_logo.jpg" }
]


const features = [
  {
    icon: Search,
    title: "Sourcing AI",
    description: "Discover top HR talent from millions of profiles across LinkedIn, industry networks, and professional platforms.",
  },
  {
    icon: MessageSquare,
    title: "Auto Outreach",
    description: "Send personalized recruitment messages automatically to qualified HR professionals and candidates.",
  },
  {
    icon: BarChart3,
    title: "Smart Ranking",
    description: "Rank candidates by cultural fit, HR expertise, and role compatibility using advanced AI algorithms.",
  },
  {
    icon: Code,
    title: "Built-in Assessments",
    description: "HR-specific skill assessments and behavioral tests integrated directly into your hiring workflow.",
  },
  {
    icon: Clock,
    title: "Live Score Updates",
    description: "Real-time candidate scoring updates as new HR experience and performance data becomes available.",
  },
  {
    icon: Calendar,
    title: "One-click Scheduling",
    description: "Streamlined interview scheduling with HR team calendar integration and automated reminders.",
  },
]

const comparisonData = [
  {
    feature: "Time-to-qualified list",
    umukozi: "< 1 hour",
    jobBoards: "2-3 weeks",
    recruiters: "1-2 weeks",
    umukoziGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
  {
    feature: "Cost per hire",
    umukozi: "$299/mo",
    jobBoards: "$5,000+",
    recruiters: "$15,000+",
    umukoziGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
  {
    feature: "Talent depth",
    umukozi: "800M+",
    jobBoards: "Limited",
    recruiters: "Network only",
    umukoziGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
  {
    feature: "AI scoring",
    umukozi: "Built-in",
    jobBoards: "None",
    recruiters: "Manual",
    umukoziGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
  {
    feature: "Built-in assessments",
    umukozi: "Yes",
    jobBoards: "No",
    recruiters: "No",
    umukoziGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
]

const faqs = [
  {
    question: "How does UmukoziHR find HR professionals?",
    answer:
      "Our AI searches across millions of HR professional profiles from LinkedIn, industry networks, and professional platforms to find candidates that match your specific HR department requirements and company culture.",
  },
  {
    question: "What HR-specific features are included in the Growth Plan?",
    answer:
      "Unlimited HR talent searches, AI-powered candidate ranking for HR roles, automated outreach to HR professionals, built-in HR competency assessments, interview scheduling tools, and ATS integration for seamless HR workflow management.",
  },
  {
    question: "How accurate is the AI scoring for HR candidates?",
    answer:
      "Our AI achieves 85%+ accuracy in predicting HR candidate fit based on HR expertise, people management skills, compliance knowledge, and cultural alignment factors specific to HR departments.",
  },
  {
    question: "Can I integrate UmukoziHR with my existing HR systems?",
    answer:
      "Yes, we support integrations with popular HR platforms and ATS systems like Greenhouse, Lever, Workday, and BambooHR through our API, ensuring seamless workflow integration with your existing HR tech stack.",
  },
  {
    question: "Do you offer a free trial for HR teams?",
    answer: "We offer a 14-day free trial with full access to all HR-focused features. No credit card required to get started, and you can invite your entire HR team to evaluate the platform.",
  },
  {
    question: "How quickly can HR teams see qualified candidates?",
    answer: "Most HR teams see their first qualified HR candidates within 1 hour of posting role requirements. Our AI specifically understands HR competencies and can quickly identify professionals with the right mix of HR expertise and cultural fit.",
  },
]

// Custom hook for smooth height animations
function useMeasure() {
  const ref = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState({ height: 0 })

  useLayoutEffect(() => {
    if (ref.current) {
      setBounds({ height: ref.current.scrollHeight })
    }
  })

  return [ref, bounds] as const
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("LANDING READY")
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDemoOpen(false)
    }
    if (isDemoOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isDemoOpen])

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      setIsDemoOpen(false)
    }
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  // Waitlist popup handler
  const clickPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    waitlist.openPopup("ssEMzvqG6iBaTfRn7cF2");
  };

  return (
    <div className="min-h-screen bg-umukozi-gradient-hero">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[64px] sm:h-[72px] backdrop-blur-lg bg-white/80 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] flex-shrink-0">
            <UmukoziLogo width={140} height={40} responsive={true} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 bg-white/20 backdrop-blur-md rounded-full px-4 lg:px-6 py-2 border border-white/30">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm lg:text-base text-gray-700 hover:text-umukozi-orange transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm lg:text-base text-gray-700 hover:text-umukozi-orange transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm lg:text-base text-gray-700 hover:text-umukozi-orange transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange whitespace-nowrap"
            >
              Why UmukoziHR
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm lg:text-base text-gray-700 hover:text-umukozi-orange transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
            >
              FAQ
            </button>
          </div>

          {/* Desktop CTA Button */}
          <Button
            className="hidden md:flex w-[120px] lg:w-[132px] h-[40px] lg:h-[44px] bg-umukozi-orange hover:bg-umukozi-orange-light text-white rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange transition-colors text-sm lg:text-base flex-shrink-0"
            onClick={clickPopup}
            aria-label="Join waitlist to see talent pool"
          >
            See Talent
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-umukozi-orange transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-b border-white/20"
            >
              <div className="px-4 sm:px-6 py-4 space-y-3">
                <button
                  onClick={() => {
                    scrollToSection("features")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-umukozi-orange transition-colors py-3 px-2 rounded-lg hover:bg-umukozi-orange/5 focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    scrollToSection("pricing")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-umukozi-orange transition-colors py-3 px-2 rounded-lg hover:bg-umukozi-orange/5 focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
                >
                  Pricing
                </button>
                <button
                  onClick={() => {
                    scrollToSection("why")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-umukozi-orange transition-colors py-3 px-2 rounded-lg hover:bg-umukozi-orange/5 focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
                >
                  Why UmukoziHR
                </button>
                <button
                  onClick={() => {
                    scrollToSection("faq")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-umukozi-orange transition-colors py-3 px-2 rounded-lg hover:bg-umukozi-orange/5 focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
                >
                  FAQ
                </button>
                <div className="pt-2">
                  <Button
                    className="w-full bg-umukozi-orange hover:bg-umukozi-orange-light text-white rounded-xl py-3 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
                    onClick={(event) => {
                      clickPopup(event)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    See Talent
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating Gradient Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-umukozi-orange/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-umukozi-teal/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-umukozi-orange-light/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 8 }}
        />
      </div>

      {/* Hero Section */}
      <main id="main-content">
        <section className="min-h-screen flex items-center justify-center overflow-hidden relative pt-16 sm:pt-20">
          <div className="text-center z-10 max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Automate Your Entire Hiring Workflow With AI Agents
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Connect with top talent faster using UmukoziHR&apos;s intelligent recruiting platform
            </motion.h2>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              {/* Hero Section Buttons */}
              <Button
                className="w-full sm:w-auto bg-umukozi-orange hover:bg-umukozi-orange-light text-white hover:scale-105 transition-all duration-400 shadow-xl rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange"
                onClick={clickPopup}
                aria-label="Join waitlist to start hiring smarter with UmukoziHR"
              >
                Start Hiring Smarter
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto border-2 border-umukozi-teal text-umukozi-teal hover:bg-umukozi-teal hover:text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-teal transition-colors"
              >
                See Platform Demo
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </section>

        {/* Social Proof Bar */}
        <section className="pt-8 sm:pt-12 pb-8 sm:pb-12 bg-umukozi-gradient-subtle backdrop-blur-md relative overflow-hidden" aria-label="Trusted by leading companies">
          {/* Subtle brand gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-umukozi-orange/5 via-white/80 to-umukozi-teal/5"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
              {socialProofLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="flex items-center justify-center grayscale hover:grayscale-0 hover:scale-110 transition-all duration-400 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-2 rounded-lg group-hover:bg-white/20 group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} company logo - UmukoziHR client`}
                      className="h-8 sm:h-10 md:h-12 w-16 sm:w-20 md:w-24 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      width={96}
                      height={48}
                      loading="lazy"
                    />
                    {/* Brand-colored hover accent */}
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-umukozi-orange/20 transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section id="features" className="py-12 sm:py-16 md:py-20" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything HR teams need to hire smarter</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">AI-powered HR solutions that transform your recruitment process</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="w-full max-w-[320px] h-[320px] sm:h-[340px] mx-auto bg-white/20 backdrop-blur-lg border-2 border-transparent bg-gradient-to-br from-white/25 to-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:border-umukozi-orange/30">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-umukozi-orange/20 via-transparent to-umukozi-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <CardContent className="p-6 sm:p-8 text-center relative z-10 h-full flex flex-col justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-umukozi-orange/15 to-umukozi-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-umukozi-orange/25 group-hover:to-umukozi-teal/20 transition-all duration-500 group-hover:scale-110">
                        <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-umukozi-orange group-hover:text-umukozi-orange transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-umukozi-teal transition-colors duration-300">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-umukozi-orange/5 to-umukozi-teal/5 relative overflow-hidden" aria-labelledby="how-it-works-heading">
          {/* Subtle brand accent pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-32 h-32 bg-umukozi-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-umukozi-teal/10 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Left - Steps */}
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">How it works</h2>
                <div className="space-y-8 sm:space-y-12">
                  {[
                    { number: "01", title: "Define HR role requirements", desc: "Describe the HR position, skills, and cultural fit criteria you're seeking" },
                    { number: "02", title: "Review AI-ranked candidates", desc: "Get HR professionals scored by expertise, experience, and role compatibility" },
                    { number: "03", title: "Connect with top talent", desc: "1-click interview scheduling and personalized outreach to HR candidates" },
                    { number: "04", title: "Complete the hire", desc: "Send offer letters and onboard your new HR team member seamlessly" },
                  ].map((step, index) => (
                    <motion.div
                      key={step.number}
                      className="flex items-start space-x-4 sm:space-x-6 relative"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Connecting line for steps (except last one) */}
                      {index < 3 && (
                        <div className="absolute left-5 sm:left-6 top-10 sm:top-12 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-umukozi-teal to-umukozi-teal-light opacity-30" />
                      )}

                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-umukozi-orange to-umukozi-orange-light text-white rounded-full flex items-center justify-center font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 text-sm sm:text-base flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 hover:text-umukozi-teal transition-colors duration-300">{step.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - Screenshots */}
              <div className="space-y-6 sm:space-y-8">
                <motion.div
                  className="h-auto bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-umukozi-orange/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src="/mockups/mockup-1.png"
                      alt="UmukoziHR platform dashboard showing candidate search and AI-powered ranking features"
                      width={800}
                      height={600}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-umukozi-orange/5 to-umukozi-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                <motion.div
                  className="h-auto bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-umukozi-orange/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src="/mockups/mockup-2.png"
                      alt="UmukoziHR candidate profile view with HR skills assessment and interview scheduling tools"
                      width={800}
                      height={600}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-umukozi-orange/5 to-umukozi-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                <motion.div
                  className="h-auto bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-umukozi-orange/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src="/mockups/mockup-3.png"
                      alt="UmukoziHR analytics dashboard displaying hiring metrics and HR team performance insights"
                      width={800}
                      height={600}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-umukozi-orange/5 to-umukozi-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="why" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-umukozi-orange/10 to-umukozi-teal/10 opacity-60"></div>
          {/* Additional brand accent elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-umukozi-orange/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-umukozi-teal/12 rounded-full blur-3xl"></div>
          </div>
          <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why choose UmukoziHR?</h2>
              <p className="text-lg sm:text-xl text-gray-600">See how we compare to traditional hiring methods</p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
              {/* Mobile-first responsive table */}
              <div className="block sm:hidden">
                {comparisonData.map((row, index) => (
                  <div key={row.feature} className="border-b border-gray-200 last:border-b-0">
                    <div className="p-4 bg-gradient-to-r from-umukozi-orange/5 to-umukozi-teal/5">
                      <h3 className="font-semibold text-gray-900 text-sm">{row.feature}</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-umukozi-orange">UmukoziHR</span>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-umukozi-orange" />
                          <span className="text-sm font-medium text-gray-900">{row.umukozi}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Job Boards</span>
                        <div className="flex items-center space-x-2">
                          <X className="w-4 h-4 text-red-600" />
                          <span className="text-sm text-gray-600">{row.jobBoards}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Recruiters</span>
                        <div className="flex items-center space-x-2">
                          <X className="w-4 h-4 text-red-600" />
                          <span className="text-sm text-gray-600">{row.recruiters}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <table className="w-full hidden sm:table">
                <thead className="bg-gradient-to-r from-umukozi-orange/5 to-umukozi-teal/5">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-gray-900 text-sm sm:text-base">Feature</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-white bg-umukozi-orange text-sm sm:text-base">UmukoziHR</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-gray-900 text-sm sm:text-base">Job Boards</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-gray-900 text-sm sm:text-base">Recruiters</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? "bg-gradient-to-r from-umukozi-orange/3 to-umukozi-teal/3" : "bg-white"}>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">{row.feature}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-center bg-umukozi-orange/5">
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-umukozi-orange" />
                          <span className="font-medium text-gray-900 text-sm sm:text-base">{row.umukozi}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                          <span className="text-gray-600 text-sm sm:text-base">{row.jobBoards}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                          <span className="text-gray-600 text-sm sm:text-base">{row.recruiters}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-umukozi-orange/3 to-umukozi-teal/3 relative overflow-hidden">
          {/* Subtle brand accent elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-1/4 w-40 h-40 bg-umukozi-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-umukozi-teal/15 rounded-full blur-xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">Choose the plan that fits your hiring needs</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-center">
                {/* Startup Plan */}
                <Card className="w-full max-w-[400px] mx-auto bg-white/15 backdrop-blur-lg border-2 border-transparent bg-gradient-to-br from-white/25 to-white/10 rounded-xl sm:rounded-2xl shadow-2xl relative overflow-hidden group hover:border-umukozi-orange/30 transition-all duration-500">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-umukozi-orange/20 via-transparent to-umukozi-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <CardContent className="p-6 sm:p-8 text-center relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Startup</h3>
                    <div className="text-3xl sm:text-4xl font-bold text-umukozi-orange mb-1">$299</div>
                    <div className="text-gray-600 mb-4 sm:mb-6">per month</div>
                    <div className="text-base sm:text-lg font-medium text-gray-900 mb-4 sm:mb-6">20 AI-powered searches/mo</div>
                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                      <div className="flex items-center space-x-2 sm:space-x-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-umukozi-orange flex-shrink-0" /><span className="text-sm sm:text-base text-gray-700">Basic candidate profiles</span></div>
                      <div className="flex items-center space-x-2 sm:space-x-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-umukozi-orange flex-shrink-0" /><span className="text-sm sm:text-base text-gray-700">Email support</span></div>
                      <div className="flex items-center space-x-2 sm:space-x-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-umukozi-orange flex-shrink-0" /><span className="text-sm sm:text-base text-gray-700">Search history</span></div>
                    </div>
                    <Button className="w-full bg-umukozi-orange hover:bg-umukozi-orange-light text-white rounded-xl py-3 focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange transition-colors text-sm sm:text-base" onClick={clickPopup}>Start with Startup</Button>
                  </CardContent>
                </Card>

                {/* Scale Plan */}
                <Card className="w-full max-w-[400px] mx-auto bg-white/15 backdrop-blur-lg border-2 border-transparent bg-gradient-to-br from-white/25 to-white/10 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-umukozi-orange/30 transition-all duration-500">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-umukozi-orange/20 via-transparent to-umukozi-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <CardContent className="p-8 text-center relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                    <div className="text-4xl font-bold text-umukozi-orange mb-1">$399</div>
                    <div className="text-gray-600 mb-6">per month</div>
                    <div className="text-lg font-medium text-gray-900 mb-6">50 AI-powered searches/mo</div>
                    <div className="space-y-3 mb-8 text-left">
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Full candidate profiles with AI insights</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Priority support</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Team collaboration</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Advanced filters</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Export capabilities</span></div>
                    </div>
                    <div className="inline-block bg-umukozi-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Most popular for SMEs & Growth Startups</div>
                    <Button className="w-full bg-umukozi-orange hover:bg-umukozi-orange-light text-white rounded-xl py-3 focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange transition-colors" onClick={clickPopup}>Start with Scale</Button>
                  </CardContent>
                </Card>

                {/* Enterprise Plan */}
                <Card className="w-full max-w-[400px] mx-auto bg-white/15 backdrop-blur-lg border-2 border-transparent bg-gradient-to-br from-white/25 to-white/10 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-umukozi-orange/30 transition-all duration-500">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-umukozi-orange/20 via-transparent to-umukozi-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <CardContent className="p-8 text-center relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                    <div className="text-4xl font-bold text-umukozi-orange mb-1">Custom</div>
                    <div className="text-gray-600 mb-6">Contact Sales</div>
                    <div className="text-lg font-medium text-gray-900 mb-6">Unlimited AI-powered searches</div>
                    <div className="space-y-3 mb-8 text-left">
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Custom AI training</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Dedicated account manager</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">API access</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Custom integrations</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">Advanced analytics</span></div>
                      <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-umukozi-orange" /><span className="text-gray-700">White-label options</span></div>
                    </div>
                    <Button className="w-full bg-umukozi-orange hover:bg-umukozi-orange-light text-white rounded-xl py-3 focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange transition-colors" onClick={clickPopup}>Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-umukozi-teal/5 to-umukozi-orange/5 relative overflow-hidden">
          {/* Subtle brand accent elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-10 w-24 h-24 bg-umukozi-teal/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/3 right-16 w-36 h-36 bg-umukozi-orange/15 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
              <p className="text-lg sm:text-xl text-gray-600">Everything you need to know about UmukoziHR</p>
            </motion.div>

            <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <motion.div
                    key={index}
                    className={`bg-white rounded-lg sm:rounded-xl border-2 transition-all duration-300 overflow-hidden relative ${isOpen
                        ? 'border-umukozi-teal shadow-lg shadow-umukozi-teal/10'
                        : 'border-gray-200 hover:border-umukozi-orange/30 hover:shadow-md'
                      }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Teal accent line for open FAQ items */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 bg-umukozi-teal"
                      initial={{ width: 0 }}
                      animate={{ width: isOpen ? 4 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />

                    <button
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-start sm:items-center justify-between hover:bg-gradient-to-r hover:from-umukozi-orange/5 hover:to-umukozi-teal/5 transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange group"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      aria-label={`Toggle FAQ: ${faq.question}`}
                    >
                      <span
                        className={`font-semibold transition-colors duration-300 text-sm sm:text-base pr-4 flex-1 ${isOpen ? 'text-umukozi-teal' : 'text-gray-900 group-hover:text-umukozi-orange'
                          }`}
                        id={`faq-question-${index}`}
                      >
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0 mt-0.5 sm:mt-0"
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-umukozi-orange" />
                        ) : (
                          <Plus className="w-5 h-5 text-umukozi-teal group-hover:text-umukozi-orange transition-colors duration-300" />
                        )}
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0
                      }}
                      transition={{
                        height: {
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        },
                        opacity: {
                          duration: 0.3,
                          delay: isOpen ? 0.15 : 0,
                          ease: "easeInOut"
                        }
                      }}
                      className="overflow-hidden"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <motion.div
                        className="px-4 sm:px-6 pb-4 sm:pb-5 border-l-4 border-l-umukozi-teal/20 ml-4"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, delay: isOpen ? 0.2 : 0 }}
                      >
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Ready to find your next key hire?</h3>
              <Link href="/login">
                <Button
                  className="w-full sm:w-auto bg-umukozi-orange hover:bg-umukozi-orange-light text-white rounded-xl px-6 sm:px-8 py-3 text-base sm:text-lg focus:outline-2 focus:outline-offset-2 focus:outline-umukozi-orange transition-colors"
                  onClick={clickPopup}
                >
                  See Talent
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Modal for Demo Video */}
        <AnimatePresence>
          {isDemoOpen && (
            <motion.div
              ref={modalRef}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalClick}
            >
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-0 overflow-hidden"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow focus:outline-2 focus:outline-offset-2 focus:outline-orange-500"
                  onClick={() => setIsDemoOpen(false)}
                  aria-label="Close demo video"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
                <div className="w-full aspect-video bg-black">
                  <video
                    src="/demo_vid/UmukoziHR_ProductShowcase_July2025.mov"
                    controls
                    autoPlay
                    className="w-full h-full object-contain rounded-b-2xl"
                    poster="/mockups/mockup-1.png"
                    // uncomment the below 2 lines to ensable download of demo video
                    controlsList="nodownload"
                    onContextMenu={e => e.preventDefault()}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Footer */}
      <footer className="h-[100px] bg-gradient-to-r from-umukozi-orange/5 via-white to-umukozi-teal/5 border-t border-umukozi-orange/20 flex items-center justify-center relative overflow-hidden">
        {/* Subtle brand accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-umukozi-orange/3 to-umukozi-teal/3 opacity-30"></div>
        <p className="text-gray-600 relative z-10 font-medium">© 2025 <span className="text-umukozi-teal font-semibold">UmukoziHR</span>. All rights reserved.</p>
      </footer>
    </div>
  )
}