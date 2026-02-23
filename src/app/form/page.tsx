'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-md mx-auto w-full text-center">
          <div className="space-y-6">
            <div className="flex justify-center">
              <CheckCircle size={80} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">Thank You!</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We've received your information and will be in touch shortly to schedule your free 15-minute pilot.
            </p>
            <p className="text-slate-400 text-sm">
              Look out for an email from us at <span className="text-blue-400">{formData.email}</span>
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Schedule Your Free Pilot
          </h1>
          <p className="text-xl text-slate-300">
            Let's show you how AI can transform your property operations. Fill out the form below and we'll be in touch within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition"
                placeholder="Ali"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition"
                placeholder="Shahid"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="flex text-sm font-medium text-white mb-2 items-center gap-2">
              <Mail size={16} />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex text-sm font-medium text-white mb-2 items-center gap-2">
              <Phone size={16} />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Company / Property Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition"
              placeholder="Your company or property name"
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex text-sm font-medium text-white mb-2 items-center gap-2">
              <MessageSquare size={16} />
              Tell us about your needs *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition resize-none"
              placeholder="What challenges are you facing? What would you like to see automated?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              'Schedule My Free Pilot'
            )}
          </button>

          <p className="text-center text-sm text-slate-400">
            * Required fields. We'll contact you within 24 hours.
          </p>
        </form>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-slate-400 hover:text-slate-300 transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
