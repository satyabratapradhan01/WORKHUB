import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
              <p className="text-gray-300 text-sm">Stay updated with our latest news and offers.</p>
            </div>
            <div className="flex space-x-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-gray-400 text-sm"
              />
              <button className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Your Company</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are dedicated to providing exceptional services and building lasting relationships with our clients. Your success is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Portfolio</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Web Development</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Mobile Apps</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">UI/UX Design</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Digital Marketing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Consulting</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Support</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>123 Business Street</p>
                  <p>Suite 100</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <p className="text-gray-300 text-sm">hello@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2024 Your Company. All rights reserved.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}