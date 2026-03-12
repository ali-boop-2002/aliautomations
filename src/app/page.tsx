"use client";

import {
  Mail,
  Linkedin,
  Calendar,
  Play,
  CheckCircle2,
  UploadCloud,
  Zap,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hoveredReview, setHoveredReview] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slideImages = [
    {
      src: "/images/workflow.png",
      alt: "Workflow Automation Dashboard",
    },
    {
      src: "/images/calendar.png",
      alt: "Calendar Management View",
    },
    {
      src: "/images/reports.png",
      alt: "Reports Analytics Dashboard",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + slideImages.length) % slideImages.length,
    );
  };

  const reviews = [
    {
      name: "Client 1",
      title: "The Brodsky Organization",
      rating: 5,
      text: "Ali did an excellent job. Early on it was clear that he deeply understands what he's building and approaches his work with real passion. He's eager to learn, and more importantly, he picks up new skills and tools incredibly fast. Great communication, great attitude, and solid results. I'll definitely be working with him again.",
      badges: [
        "Clear Communicator",
        "Committed to Quality",
        "Accountable for Outcomes",
      ],
    },
    {
      name: "Client 2",
      title: "Renaissance Properties New York",
      rating: 5,
      text: "Thoroughly enjoyed working with Ali! Brilliant young man with a brilliant future! Will work with him again.",
      badges: ["Collaborative"],
    },
    {
      name: "Client 3",
      title: "Vision Realty & Management",
      rating: 5,
      text: "Ali is an amazing professional who completed the task efficiently and with great attention to detail. I truly appreciate the high-quality work and look forward to collaborating again soon!",
      badges: [
        "Professional",
        "Detail Oriented",
        "Committed to Quality",
        "Collaborative",
      ],
    },
  ];

  const features = [
    {
      icon: UploadCloud,
      title: "Handles blurry violation notices",
      description:
        "AI-powered image recognition processes even unclear photos and PDFs",
    },
    {
      icon: Zap,
      title: "Natural language commands",
      description:
        "Tell your system what to do in plain English—no complex configurations",
    },
    {
      icon: Shield,
      title: "Enforces your rules automatically",
      description:
        "Custom workflows ensure consistency without manual intervention",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center gap-2">
          <div className="min-w-0 text-base sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent truncate">
            aliautomations
          </div>
          <div className="flex gap-2 sm:gap-4 items-center shrink-0">
            <a
              href="/demo"
              className="text-xs sm:text-sm text-slate-300 hover:text-white transition px-3 sm:px-4 py-2"
            >
              See Demo
            </a>
            <a
              href="/form"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition"
            >
              Book Pilot
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/50">
                ✨ AI-Powered Property Operations
              </div>

              <h1 className="text-3xl sm:text-6xl font-bold leading-tight break-words">
                Turn Violations & Work Orders into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Autopilot
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
                Extract from photos/PDFs → Auto-tickets → Sheets/Airtable
                updates → Rules & Reminders. No rip-and-replace.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full">
                <a
                  href="/form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Calendar size={20} />
                  Book Free 15-min Pilot
                </a>
                <a
                  href="/demo"
                  className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 border border-slate-600 hover:border-blue-500 text-white font-semibold rounded-lg transition inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Play size={20} />
                  See Demo
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-col gap-2">
                <div className="text-sm text-slate-400">
                  Trusted by Property Professionals
                </div>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs border border-slate-700">
                    ⭐ 5-Star Client Reviews
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs border border-slate-700">
                    📍 NYC-based Builder
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Image Slideshow */}
            <div className="relative w-full max-w-full overflow-hidden">
              <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-[360px] lg:h-[500px] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
                {/* Image */}
                <img
                  src={slideImages[currentImageIndex].src}
                  alt={slideImages[currentImageIndex].alt}
                  className="w-full h-full object-cover sm:object-contain p-0 sm:p-4"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition z-10"
                  title="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition z-10"
                  title="Next image"
                >
                  →
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {slideImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition ${
                        index === currentImageIndex
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      title={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How aliautomations Works
              <span className="block text-blue-400 text-lg mt-2">
                in Seconds
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A simple workflow that transforms your property operations
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-slate-800 hover:border-blue-600/50 bg-slate-800/50 hover:bg-slate-800/80 transition group"
                >
                  <div className="inline-block p-3 rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/40 transition mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Demo Video/Image */}
          <div className="max-w-5xl mx-auto flex justify-center">
            <img
              src="/images/dashboard.png"
              alt="Demo: Photo → Extraction → Ticket → Sheets Update"
              className="max-w-full max-h-[520px] w-auto h-auto object-contain rounded-2xl"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="/form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition"
            >
              Try a Free Pilot on Your Properties
            </a>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-slate-400">
              Real results from real property professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredReview(index)}
                onMouseLeave={() => setHoveredReview(null)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredReview === index
                    ? "border-blue-600 bg-slate-800/80 shadow-lg shadow-blue-600/20"
                    : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                }`}
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-600/20 text-blue-300 rounded border border-blue-600/50"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Client Info */}
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-300">
              <span className="font-semibold">100% 5-Star Client Reviews</span>{" "}
              — All projects delivered to satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Personal Photo */}
            <div className="order-2 md:order-1">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                <img
                  src="/images/personalphoto.JPG"
                  alt="Ali - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Bio */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold">Hi, I'm Ali</h2>

              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  I'm a builder from Endicott, NY obsessed with making property
                  ops effortless.
                </p>
                <p>
                  From manual spreadsheets to AI orchestration—without ditching
                  your tools. I've helped property managers save 10+ hours per
                  week by automating their most painful workflows.
                </p>
                <p>
                  My approach: understand your chaos, build the solution,
                  integrate seamlessly with what you already use.
                </p>
              </div>

              {/* Why Trust */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-semibold text-white">
                  Why trust me:
                </h3>
                <div className="space-y-2">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2
                      className="text-blue-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-slate-300">
                      Track record of 5-star client reviews
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2
                      className="text-blue-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-slate-300">
                      Indie builder mindset — your success is my success
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2
                      className="text-blue-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-slate-300">
                      Serving NY property managers first
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to Save 10+ Hours Weekly?
            </h2>
            <p className="text-xl text-slate-400">
              Let's explore if aliautomations fits your workflow
            </p>
          </div>

          <a
            href="/form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Get Started – Free Pilot
          </a>

          <p className="text-slate-400">
            No commitment. No credit card. Just a 15-minute conversation about
            your property ops.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                aliautomations
              </div>
              <p className="text-slate-400 text-sm">
                AI-Powered Ops Automation for Property Managers
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Links</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#demo" className="hover:text-blue-400 transition">
                  How It Works
                </a>
                <br />
                <a
                  href="/form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Book a Pilot
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:muhammadalishahid14@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition"
                >
                  <Mail size={16} />
                  muhammadalishahid14@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-shahid-5a2933199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>© 2026 Ali Automations. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-slate-300 transition">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-slate-300 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
