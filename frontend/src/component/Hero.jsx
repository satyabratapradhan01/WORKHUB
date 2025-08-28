import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Users, TrendingUp, Percent, DollarSign } from 'lucide-react';
import NavBar from './NavBar';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for background animation
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2
      });
    }
    setParticles(particleArray);
  }, []);

  const stats = [
    { label: 'Total Users', value: '12,345', icon: Users, description: 'The total number of registered users.' },
    { label: 'New Signups', value: '1,234', icon: TrendingUp, description: 'The number of new users that signed up this month.' },
    { label: 'Conversion Rate', value: '12%', icon: Percent, description: 'The percentage of visitors that become customers.' },
    { label: 'Revenue', value: '$123,456', icon: DollarSign, description: 'The total revenue generated this month.' }
  ];

  return (
    <div className="min-h-screen bg-black from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              One-stop solution for all
            </span>
            <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              your content needs
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Space Rocket Tech is a team of passionate and experienced professionals who 
            are dedicated to helping you achieve your content marketing goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Get started
            </button>
            <button className="w-full sm:w-auto group bg-transparent border-2 border-gray-600 hover:border-cyan-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-cyan-400 hover:bg-opacity-10">
              Contact us
              <ArrowRight size={16} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-12 sm:mt-20 relative">
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-slate-700 shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Analytics Dashboard</h2>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors duration-300">
                Full Screen
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-600 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-300 text-sm font-medium">{stat.label}</h3>
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{stat.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2 bg-slate-700 bg-opacity-30 rounded-xl p-4 sm:p-6 border border-slate-600">
                <h3 className="text-white font-semibold mb-4">Sales Trends</h3>
                <div className="h-32 sm:h-48 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 rounded-lg flex items-end justify-around p-4">
                  {[...Array(7)].map((_, i) => (
                    <div 
                      key={i}
                      className="bg-cyan-400 rounded-t"
                      style={{
                        height: `${Math.random() * 80 + 20}%`,
                        width: '10%'
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-slate-700 bg-opacity-30 rounded-xl p-4 sm:p-6 border border-slate-600">
                <h3 className="text-white font-semibold mb-4">User Acquisition</h3>
                <div className="h-32 sm:h-48 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;