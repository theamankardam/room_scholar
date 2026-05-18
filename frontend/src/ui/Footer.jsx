import React from 'react';
import Logo from './Logo'; // Your custom logo component
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFBFD] text-slate-600 pt-12 md:pt-16 pb-6 border-t border-slate-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8">
        
        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200/60">
          
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 sm:pr-4">
            <div className="space-y-4">
              {/* Logo Container ensuring it respects your custom heights */}
              <div className="inline-block cursor-pointer select-none">
                <Logo />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                Premium student accommodation in the best locations across London.
              </p>
            </div>

            {/* Social Icons Layout */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FiFacebook className="w-4 h-4" />, link: "#" },
                { icon: <FiInstagram className="w-4 h-4" />, link: "#" },
                { icon: <FiTwitter className="w-4 h-4" />, link: "#" },
                { icon: <FiLinkedin className="w-4 h-4" />, link: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-[#0A192F] hover:text-white hover:border-[#0A192F] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 sm:pt-2">
            <h4 className="text-slate-900 font-bold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Properties', 'Destinations', 'About Us', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-slate-500 hover:text-orange-500 transition-colors block py-0.5">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-2 sm:pt-2">
            <h4 className="text-slate-900 font-bold text-sm tracking-wider uppercase mb-4">Support</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Help Center', 'Terms & Conditions', 'Privacy Policy', 'Cancellation Policy', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-slate-500 hover:text-orange-500 transition-colors block py-0.5">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:col-span-2 lg:col-span-4">
            {/* Contact Info Block */}
            <div>
              <h4 className="text-slate-900 font-bold text-sm tracking-wider uppercase mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <HiOutlinePhone className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href="tel:+919315820864" className="text-slate-500 hover:text-orange-500 transition-colors">+91 93158 20864</a>
                </li>
                <li className="flex items-center gap-3">
                  <HiOutlineMail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href="mailto:hello@roomscholars.com" className="text-slate-500 hover:text-orange-500 transition-colors">hello@roomscholars.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-500 leading-normal">
                    101 Oxford Street,<br />London, United Kingdom
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter Input Area */}
            <div className="w-full">
              <h4 className="text-slate-900 font-bold text-sm tracking-wider uppercase mb-1">Subscribe to our newsletter</h4>
              <p className="text-xs text-slate-400 mb-3">Get the latest updates and offers.</p>
              
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center relative w-full max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-400 shadow-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 p-2 bg-[#0A192F] text-white rounded-lg hover:bg-orange-500 transition-colors duration-200 cursor-pointer flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <IoPaperPlaneOutline className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {currentYear} Room Scholars. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacypolicy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#terms&conditions" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;