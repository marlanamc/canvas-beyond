import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Back to Home Link */}
        <Link href="/" className="text-amber-800 hover:text-amber-600 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-stone-800 to-amber-800 text-transparent bg-clip-text mb-8">
          Contact Me
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md">
          <p className="text-lg text-stone-700 mb-8">
            I'd love to hear from you! Whether you're interested in commissioning a piece or have
            questions about my work, please don't hesitate to reach out.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="commission">Commission Request</option>
                <option value="question">General Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-700 to-orange-700 text-white py-2 px-4 rounded-md hover:from-amber-600 hover:to-orange-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 border-t border-stone-200 pt-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Other Ways to Connect</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:your-email@example.com" className="text-amber-700 hover:text-amber-600">
                  your-email@example.com
                </a>
              </p>
              <p>
                <strong>Social Media:</strong> Find me on Instagram, Facebook, and TikTok
              </p>
              <p>
                <strong>Location:</strong> Based in [Your Location]
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 