"use client";
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      const showcaseSection = document.getElementById('creative-showcase');

      if (scrollPosition > 0) {
        heroSection.classList.add('opacity-0');
      } else {
        heroSection.classList.remove('opacity-0');
      }

      if (scrollPosition > showcaseSection.offsetTop - 200) {
        showcaseSection.classList.add('fade-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      <Head>
        <title>VaynerMedia Creative Showcase</title>
        <meta name="description" content="Creative digital marketing agency" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center h-screen bg-blue-800 text-white text-center transition-opacity duration-500">
        <h1 className="text-6xl font-extrabold mb-4 animate-bounce">Curiosity Unleashed</h1>
        <p className="text-xl mb-8 max-w-2xl px-4">
          A consumer-centric storytelling engine driving powerful creative that works.
        </p>
        <a href="#creative-showcase" className="bg-white text-blue-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition transform hover:scale-105">
          Explore Our Work
        </a>
      </section>

      {/* Creative Showcase Section */}
      <section id="creative-showcase" className="py-20 px-4 fade-in opacity-0 transition-opacity duration-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Our Creative Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Example Creative Cards */}
            {['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'].map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold mb-2">{project}</h3>
                <p className="text-gray-600">A brief description of {project} showcasing our innovative strategies and consumer insights.</p>
                <div className="absolute inset-0 bg-blue-500 opacity-30 transition-opacity duration-300 hover:opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4 text-center">
        <p>&copy; 2024 VaynerMedia. All rights reserved.</p>
      </footer>

      {/* Global Styles for Animation */}
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .fade-in.fade-in {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}