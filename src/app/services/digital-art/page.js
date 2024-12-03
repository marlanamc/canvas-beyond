"use client"

import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function DigitalArt() {
  const examples = [
    'https://picsum.photos/seed/digital1/800/600',
    'https://picsum.photos/seed/digital2/800/600',
    'https://picsum.photos/seed/digital3/800/600'
  ];

  const styleOptions = [
    'Realistic',
    'Semi-Realistic',
    'Stylized',
    'Cartoon',
    'Abstract',
    'Concept Art'
  ];

  const purposeOptions = [
    'Personal Art',
    'Social Media',
    'Business/Commercial',
    'Book/Publication',
    'Website/Blog',
    'Other'
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Back Navigation */}
          <Link href="/" className="text-purple-800 hover:text-purple-600 mb-8 inline-block">
            ← Back to Home
          </Link>

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-800 to-violet-800 text-transparent bg-clip-text">
              Digital Art
            </h1>
            <p className="text-xl text-slate-600 mt-4">
              Modern artistry meets endless possibilities
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
                Digital art commissions are priced based on complexity, style, and intended use.
                Each piece is created with professional digital tools to ensure the highest quality output.
              </p>
              <p className="text-slate-700">
                Starting at $XXX for a standard digital artwork.
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Request a Commission</h2>
            
            {/* Note Box */}
            <div className="bg-purple-50 border-l-4 border-purple-700 p-4 mb-6">
              <p className="text-slate-700">
                <span className="font-semibold">Note:</span> Please provide as many details as possible about your digital art project. 
                Include your preferred style, color palette, intended use, and any specific elements or themes you'd like incorporated. 
                Reference images are highly encouraged to help communicate your vision.
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

              {/* Project Details */}
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
                <label htmlFor="purpose" className="block text-sm font-medium text-slate-700 mb-1">
                  Intended Use
                </label>
                <select
                  id="purpose"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select intended use</option>
                  {purposeOptions.map((purpose) => (
                    <option key={purpose} value={purpose}>{purpose}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="dimensions" className="block text-sm font-medium text-slate-700 mb-1">
                  Required Dimensions
                </label>
                <input
                  type="text"
                  id="dimensions"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="e.g., 1920x1080px, 4K, Instagram post size..."
                />
              </div>

              <div>
                <label htmlFor="references" className="block text-sm font-medium text-slate-700 mb-1">
                  Reference Images
                </label>
                <input
                  type="file"
                  id="references"
                  accept="image/*"
                  multiple
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
                <p className="text-sm text-slate-500 mt-1">
                  Upload any reference images or style examples
                </p>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1">
                  Project Details
                </label>
                <textarea
                  id="details"
                  rows="4"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Describe your vision, including color preferences, mood, specific elements to include..."
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