"use client"

import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { ArrowLeft } from 'lucide-react';

export default function FineArtPrints() {
  const examples = [
    'https://picsum.photos/seed/print1/800/600',
    'https://picsum.photos/seed/print2/800/600',
    'https://picsum.photos/seed/print3/800/600'
  ];

  const printSizes = [
    '8x10 inches',
    '11x14 inches',
    '16x20 inches',
    '18x24 inches',
    '24x36 inches',
    'Custom Size'
  ];

  const paperTypes = [
    'Premium Matte',
    'Fine Art Paper',
    'Photo Paper',
    'Canvas',
    'Metal Print',
    'Acrylic Print'
  ];

  const finishOptions = [
    'Standard',
    'Museum Quality',
    'Gallery Wrapped',
    'Framed',
    'Ready to Hang'
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
              Fine Art Prints
            </h1>
            <p className="text-xl text-slate-600 mt-4">
              Museum-quality prints of original artwork
            </p>
          </div>

          {/* Gallery Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Available Prints</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {examples.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={img} alt={`Print ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* Print Information Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Print Quality</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md">
              <p className="text-slate-700 mb-4">
                All prints are produced using archival-quality materials and professional printing processes.
                Each print is carefully inspected to ensure the highest quality reproduction of the original artwork.
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Archival inks for long-lasting color</li>
                <li>Museum-quality papers and materials</li>
                <li>Professional color matching</li>
                <li>Certificate of authenticity included</li>
                <li>Carefully packaged for safe shipping</li>
              </ul>
            </div>
          </section>

          {/* Order Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Order Prints</h2>
            
            {/* Note Box */}
            <div className="bg-purple-50 border-l-4 border-purple-700 p-4 mb-6">
              <p className="text-slate-700">
                <span className="font-semibold">Note:</span> Each print is carefully produced to order. 
                Please allow 1-2 weeks for production and shipping. Custom sizes and framing options 
                are available upon request. All prints come with a certificate of authenticity.
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
                <label htmlFor="artwork" className="block text-sm font-medium text-slate-700 mb-1">
                  Artwork Selection
                </label>
                <input
                  type="text"
                  id="artwork"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter the title of the artwork you'd like to purchase"
                />
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-slate-700 mb-1">
                  Print Size
                </label>
                <select
                  id="size"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select a size</option>
                  {printSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="paperType" className="block text-sm font-medium text-slate-700 mb-1">
                  Paper/Material Type
                </label>
                <select
                  id="paperType"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select paper type</option>
                  {paperTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="finish" className="block text-sm font-medium text-slate-700 mb-1">
                  Finish Options
                </label>
                <select
                  id="finish"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select finish</option>
                  {finishOptions.map((finish) => (
                    <option key={finish} value={finish}>{finish}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  defaultValue="1"
                />
              </div>

              <div>
                <label htmlFor="shipping" className="block text-sm font-medium text-slate-700 mb-1">
                  Shipping Address
                </label>
                <textarea
                  id="shipping"
                  rows="3"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your complete shipping address..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">
                  Special Instructions
                </label>
                <textarea
                  id="notes"
                  rows="2"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Any special instructions or requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-violet-700 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-violet-600 transition-colors"
              >
                Request Print Quote
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
} 