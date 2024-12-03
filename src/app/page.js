"use client"

import React, { useState, useEffect } from 'react';
import { Palette, Home, ShoppingBag, Brush, PenTool, Heart } from 'lucide-react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Website = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const bannerImages = [
    '/banner/image1.jpg',
    '/banner/image2.jpg',
    '/banner/image3.jpg',
    '/banner/image4.jpg'
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Pet Portraits",
      description: "Capture the personality of your beloved pets in stunning custom portraits.",
      link: "/services/pet-portraits"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "House Illustrations",
      description: "Preserve memories of your home or create the perfect housewarming gift.",
      link: "/services/house-illustrations"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Landscapes",
      description: "Beautiful landscape artworks that bring nature into your space.",
      link: "/services/landscapes"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Digital Art",
      description: "Modern digital artworks created with precision and creativity.",
      link: "/services/digital-art"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Business Illustrations",
      description: "Custom illustrations to enhance your business brand.",
      link: "/services/business-illustrations"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fine Art Prints",
      description: "Quality prints available through Fine Arts America.",
      link: "/services/fine-art-prints"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-purple-800 hover:text-purple-600 font-semibold">
              Canvas & Beyond
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-slate-600 hover:text-purple-800 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-purple-800 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-purple-800 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner/Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image src={image} alt={`Banner ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="group p-8 rounded-xl bg-white/90 backdrop-blur-sm hover:bg-gradient-to-br from-purple-700 to-violet-700 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-purple-800 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-white/90">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Social Media Section */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-800 to-violet-800 text-transparent bg-clip-text">
            Connect With Me
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your-email@example.com" className="text-purple-800 hover:text-purple-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
            <a href="#" className="text-purple-800 hover:text-purple-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="#" className="text-purple-800 hover:text-purple-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-slate-600 border-t border-slate-200">
          <p>© 2024 Canvas & Beyond. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
};

export default Website;