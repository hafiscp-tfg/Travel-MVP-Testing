import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `text-sm font-medium leading-normal transition-colors ${
      isActive(path)
        ? 'text-primary font-bold'
        : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
    }`;

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-background-light/80 dark:border-background-dark/20 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
            <div className="text-primary size-7">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 class="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Sharafiya Tourism</h2>
          </Link>
          
          <nav className="hidden md:flex items-center gap-9">
            <Link className={navLinkClass('/')} to="/">Home</Link>
            <Link className={navLinkClass('/flights')} to="/flights">Flights</Link>
            <Link className={navLinkClass('/tours')} to="/tours">Tours</Link>
            <Link className={navLinkClass('/visa')} to="/visa">Visa Services</Link>
            <Link className={navLinkClass('/about')} to="/about">About Us</Link>
            <Link className={navLinkClass('/contact')} to="/contact">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
              Login
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors">
              Sign Up
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
           <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-slate-200">
             <nav className="flex flex-col p-4 gap-4">
                <Link className={navLinkClass('/')} to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link className={navLinkClass('/flights')} to="/flights" onClick={() => setIsMobileMenuOpen(false)}>Flights</Link>
                <Link className={navLinkClass('/tours')} to="/tours" onClick={() => setIsMobileMenuOpen(false)}>Tours</Link>
                <Link className={navLinkClass('/visa')} to="/visa" onClick={() => setIsMobileMenuOpen(false)}>Visa Services</Link>
                <Link className={navLinkClass('/about')} to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                <Link className={navLinkClass('/contact')} to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
             </nav>
           </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="text-primary size-6">
                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
                    </svg>
                 </div>
                 <h4 class="font-bold text-slate-900 dark:text-slate-50">Sharafiya Tourism</h4>
              </div>
              <p class="text-sm text-slate-500 dark:text-slate-400">Your trusted partner in creating unforgettable travel memories.</p>
            </div>
            <div>
              <h4 class="font-bold mb-4 text-slate-900 dark:text-slate-50">Quick Links</h4>
              <ul class="space-y-2">
                <li><Link to="/about" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Contact Us</Link></li>
                <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4 text-slate-900 dark:text-slate-50">Services</h4>
              <ul class="space-y-2">
                <li><Link to="/flights" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Flights</Link></li>
                <li><Link to="/tours" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Tours</Link></li>
                <li><Link to="/visa" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Visa Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4 text-slate-900 dark:text-slate-50">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">alternate_email</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 Sharafiya Tourism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
