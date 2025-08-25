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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import waitlist from '@zootools/waitlist-js'
import { useRef } from "react"

const socialProofLogos = [
  { name: "Goldman Sachs", src: "/landing%20page%20porfolio%20logos/goldman-sachs.svg" },
  { name: "Shopify", src: "/landing%20page%20porfolio%20logos/shopify-2.svg" },
  { name: "Revolut", src: "/landing%20page%20porfolio%20logos/revolut-1.svg" },
  { name: "Grab", src: "/landing%20page%20porfolio%20logos/grab.svg" },
  { name: "MTN", src: "/landing%20page%20porfolio%20logos/mtn-3.svg" },
  { name: "Emirates", src: "/landing%20page%20porfolio%20logos/emirates-group.svg" },
  { name: "Swissport", src: "/landing%20page%20porfolio%20logos/swissport.svg" },
  { name: "McKinsey & Company", src: "/landing%20page%20porfolio%20logos/mckinsey-company.svg" },
  { name: "Golden Star Resources", src: "/landing%20page%20porfolio%20logos/golden_star_resources_ltd_logo.png" },
  { name: "Safaricom", src: "/landing%20page%20porfolio%20logos/safaricom.svg" },
  { name: "Adnoc", src: "/landing%20page%20porfolio%20logos/adnoc.svg" },
  { name: "SHR", src: "/landing%20page%20porfolio%20logos/shrm-main.svg" },
]

const features = [
  {
    icon: Search,
    title: "Sourcing AI",
    description: "AI-powered candidate discovery from millions of profiles across platforms.",
  },
  {
    icon: MessageSquare,
    title: "Auto Outreach",
    description: "Personalized messages sent automatically to qualified candidates.",
  },
  {
    icon: BarChart3,
    title: "Smart Ranking",
    description: "Candidates ranked by fit score using machine learning algorithms.",
  },
  {
    icon: Code,
    title: "Built-in Coding Tests",
    description: "Technical assessments integrated directly into your workflow.",
  },
  {
    icon: Clock,
    title: "Live Score Updates",
    description: "Real-time candidate scoring as new data becomes available.",
  },
  {
    icon: Calendar,
    title: "One-click Scheduling",
    description: "Seamless interview scheduling with calendar integration.",
  },
]

const comparisonData = [
  {
    feature: "Time-to-qualified list",
    hiregen: "< 1 hour",
    jobBoards: "2-3 weeks",
    recruiters: "1-2 weeks",
    hiregenGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
  {
    feature: "Cost per hire",
    hiregen: "$299/mo",
    jobBoards: "$5,000+",
    recruiters: "$15,000+",
    hiregenGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
  {
    feature: "Talent depth",
    hiregen: "800M+",
    jobBoards: "Limited",
    recruiters: "Network only",
    hiregenGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
  {
    feature: "AI scoring",
    hiregen: "Built-in",
    jobBoards: "None",
    recruiters: "Manual",
    hiregenGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
  {
    feature: "Built-in assessments",
    hiregen: "Yes",
    jobBoards: "No",
    recruiters: "No",
    hiregenGood: true,
    jobBoardsGood: false,
    recruitersGood: false,
  },
]

const faqs = [
  {
    question: "How does HireGen-AI find candidates?",
    answer:
      "Our AI searches across millions of developer profiles from GitHub, LinkedIn, Stack Overflow, and other platforms to find candidates that match your specific requirements.",
  },
  {
    question: "What's included in the Growth Plan?",
    answer:
      "Unlimited searches, AI-powered candidate ranking, automated outreach, built-in coding assessments, and interview scheduling tools.",
  },
  {
    question: "How accurate is the AI scoring?",
    answer:
      "Our AI achieves 85%+ accuracy in predicting candidate fit based on technical skills, experience, and cultural alignment factors.",
  },
  {
    question: "Can I integrate with my existing ATS?",
    answer:
      "Yes, we support integrations with popular ATS platforms like Greenhouse, Lever, and Ashby through our API.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "We offer a 14-day free trial with full access to all features. No credit card required to get started.",
  },
  {
    question: "How quickly can I see results?",
    answer: "Most customers see their first qualified candidates within 1 hour of posting a job description.",
  },
]

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] backdrop-blur-lg bg-white/80 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="w-[120px]">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              HireGen.AI
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 bg-white/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/30">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
            >
              Why HireGen-AI
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
            >
              FAQ
            </button>
          </div>

          {/* Navigation CTA Button */}
          <Button
            className="w-[132px] h-[44px] bg-blue-600 hover:bg-blue-700 text-white rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
            onClick={clickPopup}
          >
            See Talent
          </Button>
        </div>
      </nav>

      {/* Floating Gradient Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 8 }}
        />
      </div>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center overflow-hidden relative">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Hiring shouldn't feel like guesswork.
          </motion.h1>

          <motion.h2
            className="text-xl font-medium text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Describe your role, get matched to pre-vetted engineers in seconds.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            {/* Hero Section Buttons */}
            <Button
              className="bg-white/15 backdrop-blur-lg border border-white/30 text-blue-600 hover:bg-white/25 hover:scale-105 transition-all duration-400 shadow-xl rounded-xl px-8 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
              onClick={clickPopup}
            >
              Find Matches
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsDemoOpen(true)}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
            >
              See Demo
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
      <section className="pt-12 pb-12 bg-white/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {socialProofLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 w-24 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to hire faster</h2>
            <p className="text-xl text-gray-600">AI-powered recruiting tools that actually work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="w-[260px] h-[320px] mx-auto bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Steps */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">How it works</h2>
              <div className="space-y-12">
                {[
                  { number: "01", title: "Paste job description", desc: "Simply describe the role you're hiring for" },
                  { number: "02", title: "Review ranked talent", desc: "Get AI-scored candidates ready to interview" },
                  { number: "03", title: "Contact candidate", desc: "1-click interview schedule & messaging" },
                  { number: "04", title: "Close Hire", desc: "Send and offer letter & close the hire" },
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="flex items-start space-x-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Screenshots */}
            <div className="space-y-8">
              <motion.div
                className="h-auto bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image src="/mockups/mockup-1.png" alt="HireGen-AI platform mockup 1" width={800} height={600} layout="responsive" />
              </motion.div>
              <motion.div
                className="h-auto bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image src="/mockups/mockup-2.png" alt="HireGen-AI platform mockup 2" width={800} height={600} layout="responsive" />
              </motion.div>
              <motion.div
                className="h-auto bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Image src="/mockups/mockup-3.png" alt="HireGen-AI platform mockup 3" width={800} height={600} layout="responsive" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="why" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <motion.div
          className="max-w-6xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why choose HireGen-AI?</h2>
            <p className="text-xl text-gray-600">See how we compare to traditional hiring methods</p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600 bg-blue-100/50">HireGen-AI</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Job Boards</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Recruiters</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-blue-50/50">
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">{row.hiregen}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5 text-red-600" />
                        <span className="text-gray-600">{row.jobBoards}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5 text-red-600" />
                        <span className="text-gray-600">{row.recruiters}</span>
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
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600 mb-12">Choose the plan that fits your hiring needs</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {/* Startup Plan */}
              <Card className="w-full max-w-[400px] mx-auto bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">$299</div>
                  <div className="text-gray-600 mb-6">per month</div>
                  <div className="text-lg font-medium text-gray-900 mb-6">20 AI-powered searches/mo</div>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Basic candidate profiles</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Email support</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Search history</span></div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]" onClick={clickPopup}>Start with Startup</Button>
                </CardContent>
              </Card>

              {/* Scale Plan */}
              <Card className="w-full max-w-[400px] mx-auto bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">$399</div>
                  <div className="text-gray-600 mb-6">per month</div>
                  <div className="text-lg font-medium text-gray-900 mb-6">50 AI-powered searches/mo</div>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Full candidate profiles with AI insights</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Priority support</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Team collaboration</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Advanced filters</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Export capabilities</span></div>
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mb-4">Most popular for SMEs & Growth Startups</div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]" onClick={clickPopup}>Start with Scale</Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="w-full max-w-[400px] mx-auto bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">Custom</div>
                  <div className="text-gray-600 mb-6">Contact Sales</div>
                  <div className="text-lg font-medium text-gray-900 mb-6">Unlimited AI-powered searches</div>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Custom AI training</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Dedicated account manager</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">API access</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Custom integrations</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">Advanced analytics</span></div>
                    <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-600" /><span className="text-gray-700">White-label options</span></div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]" onClick={clickPopup}>Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about HireGen-AI</p>
          </motion.div>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to see your next engineer?</h3>
            <Link href="/login">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3 text-lg focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
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
                className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
                onClick={() => setIsDemoOpen(false)}
                aria-label="Close demo video"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
              <div className="w-full aspect-video bg-black">
                <video
                  src="/demo_vid/HireGen-AI_ProductShowcase_July2025.mov"
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

      {/* Footer */}
      <footer className="h-[100px] bg-white border-t border-gray-200 flex items-center justify-center">
        <p className="text-gray-500">© 2025 HireGen-AI. All rights reserved.</p>
      </footer>
    </div>
  )
}
