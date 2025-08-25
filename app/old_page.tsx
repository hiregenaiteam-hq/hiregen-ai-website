"use client"

import { useEffect, useState, useRef, MouseEvent, SetStateAction } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
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
  LucideIcon,
} from "lucide-react"
import waitlist from '@zootools/waitlist-js'

// --- DATA CONSTANTS (Unchanged) ---
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
];

const features = [
  { icon: Search, title: "Sourcing AI", description: "AI-powered candidate discovery from millions of profiles across platforms." },
  { icon: MessageSquare, title: "Auto Outreach", description: "Personalized messages sent automatically to qualified candidates." },
  { icon: BarChart3, title: "Smart Ranking", description: "Candidates ranked by fit score using machine learning algorithms." },
  { icon: Code, title: "Built-in Coding Tests", description: "Technical assessments integrated directly into your workflow." },
  { icon: Clock, title: "Live Score Updates", description: "Real-time candidate scoring as new data becomes available." },
  { icon: Calendar, title: "One-click Scheduling", description: "Seamless interview scheduling with calendar integration." },
];

const comparisonData = [
  { feature: "Time-to-qualified list", hiregen: "< 1 hour", jobBoards: "2-3 weeks", recruiters: "1-2 weeks" },
  { feature: "Cost per hire", hiregen: "$299/mo", jobBoards: "$5,000+", recruiters: "$15,000+" },
  { feature: "Talent depth", hiregen: "800M+", jobBoards: "Limited", recruiters: "Network only" },
  { feature: "AI scoring", hiregen: "Built-in", jobBoards: "None", recruiters: "Manual" },
  { feature: "Built-in assessments", hiregen: "Yes", jobBoards: "No", recruiters: "No" },
];

const faqs = [
  { question: "How does HireGen-AI find candidates?", answer: "Our AI searches across millions of developer profiles from GitHub, LinkedIn, Stack Overflow, and other platforms to find candidates that match your specific requirements." },
  { question: "What's included in the Growth Plan?", answer: "Unlimited searches, AI-powered candidate ranking, automated outreach, built-in coding assessments, and interview scheduling tools." },
  { question: "How accurate is the AI scoring?", answer: "Our AI achieves 85%+ accuracy in predicting candidate fit based on technical skills, experience, and cultural alignment factors." },
  { question: "Can I integrate with my existing ATS?", answer: "Yes, we support integrations with popular ATS platforms like Greenhouse, Lever, and Ashby through our API." },
  { question: "Do you offer a free trial?", answer: "We offer a 14-day free trial with full access to all features. No credit card required to get started." },
  { question: "How quickly can I see results?", answer: "Most customers see their first qualified candidates within 1 hour of posting a job description." },
];

// --- NEW & UPGRADED COMPONENTS ---

// ✨ Reusable component for section headers for consistency
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div
    className="text-center mb-12 md:mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
  </motion.div>
);

// ✨ Upgraded Feature Card with interactive spotlight effect
const FeatureCard = ({ icon: Icon, title, description, index }: { icon: LucideIcon; title: string; description: string; index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div
                onMouseMove={handleMouseMove}
                className="group relative w-full h-full bg-white rounded-2xl border border-gray-200 p-8 text-center transition-shadow duration-300 hover:shadow-2xl"
            >
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.15), transparent 80%)`,
                    }}
                />
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{title}</h3>
                <p className="text-base text-gray-600 leading-relaxed relative z-10">{description}</p>
            </div>
        </motion.div>
    );
};

// ✨ Upgraded FAQ Item with animated icon
const FaqItem = ({ faq, index, openFaq, setOpenFaq }: { faq: { question: string; answer: string }; index: number; openFaq: number | null; setOpenFaq: (index: number | null) => void }) => {
  const isOpen = openFaq === index;

  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
        onClick={() => setOpenFaq(isOpen ? null : index)}
      >
        <span className="font-medium text-lg text-gray-900">{faq.question}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus className="w-6 h-6 text-blue-600" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 px-6 pb-6">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


// --- MAIN PAGE COMPONENT ---

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeHowToStep, setActiveHowToStep] = useState(0);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  const modalRef = useRef<HTMLDivElement>(null);

  // --- HOOKS ---
  useEffect(() => {
    // Handle body scroll lock for modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDemoOpen(false);
    };

    if (isDemoOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDemoOpen]);
  
  // --- HANDLERS ---
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      setIsDemoOpen(false);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  const clickPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    waitlist.openPopup("ssEMzvqG6iBaTfRn7cF2");
  };

  // ✨ Hook for the "How it Works" scroll interaction
  const useStepInView = (stepIndex: number) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveHowToStep(stepIndex);
        }
    }, [isInView, stepIndex]);

    return ref;
  };

  const step1Ref = useStepInView(0);
  const step2Ref = useStepInView(1);
  const step3Ref = useStepInView(2);
  const step4Ref = useStepInView(3);
  
  const howToSteps = [
    { ref: step1Ref, number: "01", title: "Paste job description", desc: "Simply describe the role you're hiring for." },
    { ref: step2Ref, number: "02", title: "Review ranked talent", desc: "Get AI-scored candidates ready to interview." },
    { ref: step3Ref, number: "03", title: "Contact candidates", desc: "1-click interview schedule & messaging." },
    { ref: step4Ref, number: "04", title: "Close Hire", desc: "Send an offer letter & close the hire." },
  ];
  
  // ✨ Hero Section Mouse-aware Aurora Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleHeroMouseMove = (event: MouseEvent) => {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
  };
  

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 antialiased">
        {/* --- Navigation --- */}
        <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] backdrop-blur-lg bg-white/80 border-b border-gray-200/80 transition-shadow duration-300">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-blue-600 transition-transform hover:scale-105">
                    HireGen.AI
                </Link>

                <div className="hidden md:flex items-center gap-x-2 bg-white/50 rounded-full px-4 py-2 border border-gray-200/90">
                    {["features", "pricing", "why", "faq"].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="capitalize px-4 py-1.5 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                            {item === "why" ? "Why HireGen?" : item}
                        </button>
                    ))}
                </div>

                <Button
                    className="w-[132px] h-[44px] bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
                    onClick={clickPopup}
                >
                    See Talent
                </Button>
            </div>
        </nav>

        {/* --- Hero Section --- */}
        <section 
            onMouseMove={handleHeroMouseMove}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-50"
                style={{
                    background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.15), transparent 80%)`,
                }}
            />
            <div className="text-center z-10 max-w-6xl mx-auto px-6">
                 <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                 >
                     <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Hiring shouldn't be guesswork.
                     </h1>
                     <h2 className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Describe your ideal role, and let our AI deliver a shortlist of pre-vetted engineers in minutes, not weeks.
                     </h2>
                 </motion.div>

                 {/* ✨ Modern Bento Grid Layout */}
                 <motion.div 
                    className="grid grid-cols-3 grid-rows-2 gap-4 max-w-4xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                    }}
                 >
                    {[
                        { className: "col-span-3 md:col-span-2 row-span-2", img: "/mockups/mockup-1.png", alt: "Main Dashboard" },
                        { className: "col-span-3 md:col-span-1", img: "/mockups/mockup-2.png", alt: "Candidate Profile" },
                        { className: "col-span-3 md:col-span-1", img: "/mockups/mockup-3.png", alt: "AI Scoring" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={`relative group bg-white/50 border border-white/30 rounded-2xl shadow-lg overflow-hidden ${item.className}`}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <Image src={item.img} alt={item.alt} width={800} height={600} className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        </motion.div>
                    ))}
                 </motion.div>
                 
                 <motion.div
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                 >
                     <Button
                         className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3 text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
                         onClick={clickPopup}
                     >
                         Find Your Next Hire
                     </Button>
                     <Button
                         variant="ghost"
                         onClick={() => setIsDemoOpen(true)}
                         className="border border-blue-600/50 text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-3 text-lg"
                     >
                         Watch Demo
                     </Button>
                 </motion.div>
            </div>
        </section>

        {/* --- Social Proof Marquee --- */}
        <section className="py-12 bg-white/60 backdrop-blur-md">
            <div className="relative w-full overflow-hidden">
                <motion.div 
                    className="flex"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
                >
                    {[...socialProofLogos, ...socialProofLogos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-48 flex justify-center items-center mx-4">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={48}
                                className="object-contain h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                            />
                        </div>
                    ))}
                </motion.div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/60 via-transparent to-white/60" />
            </div>
        </section>

        {/* --- Features Section --- */}
        <section id="features" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader 
                    title="Everything you need to hire faster" 
                    subtitle="Our AI-powered recruiting platform is designed to eliminate tedious tasks and surface the best candidates." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>

        {/* --- How It Works --- */}
        <section id="how" className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="Hire in 4 simple steps"
              subtitle="From job description to job offer, our streamlined process makes hiring effortless."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28 space-y-12">
                  {howToSteps.map((step, index) => (
                    <div ref={step.ref} key={step.number} className="flex items-start space-x-6">
                      <div className={`transition-colors duration-300 w-12 h-12 ${activeHowToStep === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} rounded-full flex items-center justify-center font-bold text-lg`}>
                        {step.number}
                      </div>
                      <div className={`pt-2 transition-opacity duration-300 ${activeHowToStep === index ? 'opacity-100' : 'opacity-50'}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="relative h-[600px]">
                {["/mockups/mockup-1.png", "/mockups/mockup-2.png", "/mockups/mockup-3.png", "/mockups/mockup-1.png"].map((src, index) => (
                  <motion.div
                    key={src + index}
                    className="absolute inset-0"
                    animate={{ opacity: activeHowToStep === index ? 1 : 0, scale: activeHowToStep === index ? 1 : 0.95 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <Image
                      src={src}
                      alt={`Step ${index + 1} mockup`}
                      width={800}
                      height={600}
                      className="w-full h-full object-contain rounded-2xl shadow-2xl bg-white"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Comparison Table --- */}
        <section id="why" className="py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader 
                    title="Why choose HireGen.AI?" 
                    subtitle="See how we stack up against traditional hiring methods and deliver unmatched value." 
                />
                <motion.div
                    className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-5 font-semibold text-gray-900">Feature</th>
                                    <th className="px-6 py-5 text-center font-semibold text-blue-600 bg-blue-50/50">HireGen.AI</th>
                                    <th className="px-6 py-5 text-center font-semibold text-gray-900">Job Boards</th>
                                    <th className="px-6 py-5 text-center font-semibold text-gray-900">Recruiters</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <tr key={row.feature} className="border-t border-gray-200">
                                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                                        <td className="px-6 py-4 text-center bg-blue-50/30">
                                            <div className="flex items-center justify-center gap-x-2">
                                                <Check className="w-5 h-5 text-green-600" />
                                                <span className="font-medium text-gray-900">{row.hiregen}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center gap-x-2 text-gray-600">
                                                <X className="w-5 h-5 text-red-500" />
                                                <span>{row.jobBoards}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center gap-x-2 text-gray-600">
                                                <X className="w-5 h-5 text-red-500" />
                                                <span>{row.recruiters}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="pricing" className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader 
                    title="Simple, transparent pricing" 
                    subtitle="Choose the plan that's right for your team's size and hiring velocity." 
                />
                
                {/* ✨ Interactive Pricing Toggle */}
                <motion.div 
                    className="flex justify-center items-center gap-x-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className={`font-medium ${billingCycle === 'monthly' ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
                    <button
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className="relative w-14 h-8 rounded-full bg-gray-200 flex items-center p-1 transition-colors"
                        aria-label="Toggle billing cycle"
                    >
                        <motion.div
                            className="w-6 h-6 rounded-full bg-white shadow"
                            layout
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            initial={false}
                            animate={{ x: billingCycle === 'yearly' ? 24 : 0 }}
                        />
                    </button>
                    <span className={`font-medium ${billingCycle === 'yearly' ? 'text-blue-600' : 'text-gray-500'}`}>
                        Yearly <span className="text-sm text-green-600">(Save 20%)</span>
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Startup Plan */}
                    <PricingCard 
                        plan="Startup"
                        price={billingCycle === 'monthly' ? 299 : 239}
                        searches="20 AI-powered searches/mo"
                        features={["Basic candidate profiles", "Email support", "Search history"]}
                        onClick={clickPopup}
                        billingCycle={billingCycle}
                    />

                    {/* Scale Plan */}
                    <PricingCard 
                        plan="Scale"
                        price={billingCycle === 'monthly' ? 399 : 319}
                        searches="50 AI-powered searches/mo"
                        features={[
                            "Full candidate profiles with AI insights", 
                            "Priority support", 
                            "Team collaboration",
                            "Advanced filters",
                            "Export capabilities"
                        ]}
                        onClick={clickPopup}
                        billingCycle={billingCycle}
                        popular
                    />

                    {/* Enterprise Plan */}
                    <PricingCard 
                        plan="Enterprise"
                        price="Custom"
                        searches="Unlimited AI-powered searches"
                        features={[
                            "Custom AI training", 
                            "Dedicated account manager", 
                            "API access",
                            "Custom integrations",
                            "Advanced analytics",
                            "White-label options"
                        ]}
                        onClick={clickPopup}
                        billingCycle={billingCycle}
                    />
                </div>
            </div>
        </section>

        {/* --- FAQ Section --- */}
        <section id="faq" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-6">
                <SectionHeader 
                    title="Frequently asked questions" 
                    subtitle="Have a different question? Contact our sales team." 
                />
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} faq={faq} index={index} openFaq={openFaq} setOpenFaq={setOpenFaq} />
                    ))}
                </div>
            </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-20 md:py-32 bg-gray-50 text-center">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to see your next engineer?</h2>
                    <p className="text-xl text-gray-600 mb-10">Stop sorting through resumes. Start interviewing qualified talent.</p>
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-10 py-4 text-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                        onClick={clickPopup}
                    >
                        Find Talent Now
                    </Button>
                </motion.div>
            </div>
        </section>

        {/* --- Demo Video Modal --- */}
        <AnimatePresence>
            {isDemoOpen && (
                <motion.div
                    ref={modalRef}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleModalClick}
                >
                    <motion.div
                        className="relative bg-black rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <button
                            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white focus:outline-2 focus:outline-offset-2 focus:outline-white"
                            onClick={() => setIsDemoOpen(false)}
                            aria-label="Close demo video"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="w-full aspect-video">
                            <video
                                src="/demo_vid/HireGen-AI_ProductShowcase_July2025.mov"
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                                poster="/mockups/mockup-1.png"
                                controlsList="nodownload"
                                onContextMenu={e => e.preventDefault()}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* --- Footer --- */}
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-500">© 2025 HireGen-AI. All rights reserved.</p>
              <div className="flex gap-x-6 mt-4 md:mt-0">
                  <Link href="/terms" className="text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</Link>
                  <Link href="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              </div>
            </div>
        </footer>
    </div>
  )
}


// --- New Reusable Pricing Card Component ---
const PricingCard = ({ plan, price, searches, features, onClick, billingCycle, popular = false }: {
    plan: string;
    price: number | string;
    searches: string;
    features: string[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    billingCycle: 'monthly' | 'yearly';
    popular?: boolean;
}) => (
    <motion.div
        className={`relative w-full bg-white rounded-2xl shadow-lg border ${popular ? 'border-blue-500' : 'border-gray-200'} p-8 flex flex-col`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        {popular && (
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                Most Popular
            </div>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{plan}</h3>
        <div className="text-center mb-6 min-h-[80px]">
            {typeof price === 'number' ? (
                <>
                    <div className="flex justify-center items-baseline">
                        <span className="text-4xl font-bold text-blue-600">${price}</span>
                        <span className="text-gray-500 ml-1">/ mo</span>
                    </div>
                    <span className="text-gray-500 text-sm">
                        {billingCycle === 'yearly' ? `Billed $${price * 12} annually` : 'Billed monthly'}
                    </span>
                </>
            ) : (
                <div className="text-4xl font-bold text-blue-600 mt-3">Custom</div>
            )}
        </div>
        <p className="font-semibold text-gray-700 mb-6 text-center">{searches}</p>
        <div className="space-y-3 mb-8 text-left flex-grow">
            {features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                </div>
            ))}
        </div>
        <Button 
            className={`w-full ${popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-blue-600'} rounded-xl py-3 mt-4 transition-all transform hover:-translate-y-0.5`}
            onClick={onClick}
        >
            {plan === 'Enterprise' ? 'Contact Sales' : `Start with ${plan}`}
        </Button>
    </motion.div>
);