"use client"

import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { ArrowLeft } from 'lucide-react';

export default function BusinessIllustrations() {
  const examples = [
    'https://picsum.photos/seed/business1/800/600',
    'https://picsum.photos/seed/business2/800/600',
    'https://picsum.photos/seed/business3/800/600'
  ];

  const illustrationTypes = [
    'Logo Design',
    'Brand Mascot',
    'Product Illustration',
    'Marketing Materials',
    'Social Media Graphics',
    'Website Graphics',
    'Infographics',
    'Business Cards',
    'Custom Design'
  ];

  const styleOptions = [
    'Modern Minimal',
    'Corporate Professional',
    'Playful/Casual',
    'Luxury/Elegant',
    'Hand-drawn Style',
    'Geometric',
    'Custom Style'
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Back Navigation */}
          <Link href="/" className="text-purple-800 hover:text-purple-600 mb-8 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-800 to-violet-800 text-transparent bg-clip-text">
              Business Illustrations
            </h1>
            <p className="text-xl text-slate-600 mt-4">
              Elevate your brand with custom illustrations
            </p>
          </div>

          {/* Gallery Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Example Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {examples.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={img} alt={`Example ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Pricing</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md">
              <p className="text-slate-700 mb-4">
                Business illustration pricing is tailored to your specific needs and usage rights.
                Packages can be customized to include multiple assets for consistent branding across all platforms.
              </p>
              <p className="text-slate-700">
                Starting at $XXX for basic business illustrations.
                Please inquire for custom package pricing.
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Request a Commission</h2>
            
            {/* Note Box */}
            <div className="bg-purple-50 border-l-4 border-purple-700 p-4 mb-6">
              <p className="text-slate-700">
                <span className="font-semibold">Note:</span> Please provide as many details as possible about your business 
                and illustration needs. Include your brand guidelines, color schemes, and intended use of the illustrations. 
                The more information you share about your business and target audience, the better we can create illustrations 
                that align with your brand identity.
              </p>
            </div>

            <form className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">
                  Website (if applicable)
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="https://"
                />
              </div>

              <div>
                <label htmlFor="illustrationType" className="block text-sm font-medium text-slate-700 mb-1">
                  Type of Illustration Needed
                </label>
                <select
                  id="illustrationType"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select illustration type</option>
                  {illustrationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="style" className="block text-sm font-medium text-slate-700 mb-1">
                  Preferred Style
                </label>
                <select
                  id="style"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select a style</option>
                  {styleOptions.map((style) => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="brandGuidelines" className="block text-sm font-medium text-slate-700 mb-1">
                  Brand Guidelines/Assets
                </label>
                <input
                  type="file"
                  id="brandGuidelines"
                  accept=".pdf,.doc,.docx,.zip"
                  multiple
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
                <p className="text-sm text-slate-500 mt-1">
                  Upload any brand guidelines, logos, or color schemes
                </p>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">
                  Project Timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="e.g., Needed by Q2 2024, 2 weeks, etc."
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1">
                  Project Details
                </label>
                <textarea
                  id="details"
                  rows="4"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Describe your business, target audience, and specific requirements for the illustrations..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-violet-700 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-violet-600 transition-colors"
              >
                Request Quote
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
} 