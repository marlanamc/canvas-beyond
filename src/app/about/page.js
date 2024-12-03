import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Back to Home Link */}
        <Link href="/" className="text-amber-800 hover:text-amber-600 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-stone-800 to-amber-800 text-transparent bg-clip-text mb-8">
          About Me
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md">
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-700 mb-6">
              Hello! I'm Heidi, an artist passionate about capturing the beauty in everyday moments.
              With a focus on pet portraits, house illustrations, and landscapes, I strive to create
              meaningful artwork that tells your unique story.
            </p>

            <h2 className="text-2xl font-semibold text-stone-800 mb-4">My Journey</h2>
            <p className="text-lg text-stone-700 mb-6">
              My artistic journey began [your background story here]. Through years of practice and
              dedication, I've developed a style that combines traditional techniques with modern
              sensibilities.
            </p>

            <h2 className="text-2xl font-semibold text-stone-800 mb-4">My Process</h2>
            <p className="text-lg text-stone-700 mb-6">
              Each piece begins with a conversation to understand your vision. Whether it's capturing
              your beloved pet's personality or preserving the memory of your family home, I work
              closely with you to create artwork that exceeds your expectations.
            </p>

            <h2 className="text-2xl font-semibold text-stone-800 mb-4">My Mission</h2>
            <p className="text-lg text-stone-700">
              My goal is to create meaningful art that brings joy and preserves precious memories.
              I believe that every piece tells a story, and I'm honored to help tell yours through
              my artwork.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 