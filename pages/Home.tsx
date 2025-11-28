import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flights' | 'tours' | 'visa'>('flights');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/${activeTab}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbgR3asRScD6kCB-VC-DYGdhOJKcVme0idQCaUwCqEy6w8QdOVWtxHk-fEicy1jty_MWepHtb_2_EwLvHenSSGp55yaG1oylMR7bICudKMp6Z7Iz3D1qZKBSIH49a3nFPzy8Xi1EHL-ZyMhpsbf44A-D7ErmipbUoVYRiTKA47TDCggm6tzgQcupKkEamvKe_R6EdCBifFRrldQc6tl5arNnOKoeizgLgzYRWQdw62p_T9AiSKoXwIz_mZ5qZz-So-GfBCqa8QBKB4')",
            }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Find and Book Your Next Adventure
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Effortless flights, tours, and visa services at your fingertips.
          </p>

          {/* Search Form */}
          <div className="mt-10 w-full max-w-5xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl">
            <div className="border-b border-slate-200 dark:border-slate-800">
              <div className="flex px-4 pt-2 gap-8">
                <button
                  onClick={() => setActiveTab('flights')}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 gap-2 transition-colors ${
                    activeTab === 'flights' 
                        ? 'border-b-primary text-primary' 
                        : 'border-b-transparent text-gray-500 hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined">flight_takeoff</span>
                  <p className="text-sm font-bold tracking-[0.015em]">Flights</p>
                </button>
                <button
                   onClick={() => setActiveTab('tours')}
                   className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 gap-2 transition-colors ${
                    activeTab === 'tours' 
                        ? 'border-b-primary text-primary' 
                        : 'border-b-transparent text-gray-500 hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined">tour</span>
                  <p className="text-sm font-bold tracking-[0.015em]">Tours</p>
                </button>
                <button
                   onClick={() => setActiveTab('visa')}
                   className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 gap-2 transition-colors ${
                    activeTab === 'visa' 
                        ? 'border-b-primary text-primary' 
                        : 'border-b-transparent text-gray-500 hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined">receipt_long</span>
                  <p className="text-sm font-bold tracking-[0.015em]">Visa</p>
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'flights' && (
                <div className="flex justify-start px-2 py-3">
                    <div className="flex h-10 w-fit items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
                    <label className="flex cursor-pointer h-full items-center justify-center overflow-hidden rounded-md px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-slate-900 dark:has-[:checked]:text-white text-gray-500 text-sm font-medium">
                        <span className="truncate">Round Trip</span>
                        <input type="radio" name="trip-type" value="Round Trip" className="invisible w-0" defaultChecked />
                    </label>
                    <label className="flex cursor-pointer h-full items-center justify-center overflow-hidden rounded-md px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-slate-900 dark:has-[:checked]:text-white text-gray-500 text-sm font-medium">
                        <span className="truncate">One Way</span>
                        <input type="radio" name="trip-type" value="One Way" className="invisible w-0" />
                    </label>
                    </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 items-end px-2 pt-2">
                {activeTab === 'flights' && (
                  <>
                     <label className="flex flex-col flex-1 lg:col-span-2">
                        <p className="text-sm font-medium pb-2 text-left">From</p>
                        <input className="flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-3 text-base" placeholder="DXB" defaultValue="DXB" />
                    </label>
                    <label className="flex flex-col flex-1 lg:col-span-2">
                        <p className="text-sm font-medium pb-2 text-left">To</p>
                        <input className="flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-3 text-base" placeholder="COK" defaultValue="COK" />
                    </label>
                    <label className="flex flex-col flex-1 lg:col-span-2">
                        <p className="text-sm font-medium pb-2 text-left">Departure</p>
                        <input type="date" className="flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-3 text-base" defaultValue="2024-08-15" />
                    </label>
                    <label className="flex flex-col flex-1 lg:col-span-2">
                        <p className="text-sm font-medium pb-2 text-left">Return</p>
                        <input type="date" className="flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-3 text-base" defaultValue="2024-09-05" />
                    </label>
                  </>
                )}
                 {activeTab === 'tours' && (
                    <label className="flex flex-col flex-1 lg:col-span-8">
                        <p className="text-sm font-medium pb-2 text-left">Destination</p>
                        <input className="flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-3 text-base" placeholder="Where do you want to go?" />
                    </label>
                )}
                {activeTab === 'visa' && (
                    <label className="flex flex-col flex-1 lg:col-span-8">
                        <p className="text-sm font-medium pb-2 text-left">Country</p>
                        <select className="flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-3 text-base">
                            <option>Saudi Arabia</option>
                            <option>UAE</option>
                            <option>United Kingdom</option>
                            <option>Schengen</option>
                        </select>
                    </label>
                )}

                <button 
                  onClick={handleSearch}
                  className="flex w-full items-center justify-center rounded-lg h-12 px-5 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary-dark transition-colors lg:col-span-2"
                >
                  <span className="material-symbols-outlined mr-2">search</span>
                  <span className="truncate">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Welcome to Sharafiya Tourism</h2>
            <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300">
                Your trusted partner in crafting unforgettable travel experiences. From seamless flight bookings to curated tours and hassle-free visa assistance, we are dedicated to making your journey as remarkable as the destination.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: 'flight', title: 'Book Flights', desc: 'Find the best deals on flights to destinations worldwide with our easy-to-use search engine.' },
                    { icon: 'explore', title: 'Explore Tours', desc: 'Discover curated tour packages that offer unique experiences and unforgettable memories.' },
                    { icon: 'approval', title: 'Visa Assistance', desc: 'We provide expert guidance and support to make your visa application process smooth and simple.' }
                ].map((feature, i) => (
                    <div key={i} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                         <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-5">
                            <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                         <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Explore Our Popular Destinations</h2>
                <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300">Get inspired for your next journey with our most-loved travel spots.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: 'Kerala', country: 'India', price: '$499', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuka5kcdhe8WLjTI4kb4xAx69tvJKKXctMyXArhAjImjYmATOZV-xLPbvVBGZ90s2wPTC8pJ1A6XKOHN1hSE4os-iHPsHX5E3uSwV4Xo7gpnklLAb_wNyIOOgmGBPkWYSLdVFJdcAIOzOOrRAfiCxabr_m4sas7KPJay0qFXbiSgLhyEnG06Kz_7LKv2OJCge0LaZYcklYpH2U9oomOtY0_7e2GMOJ1rFpq30COMLRN7x3jPMp19ok6oWBo6j8r1bNQ9M-ZjwDmR0y' },
                    { name: 'Paris', country: 'France', price: '$750', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDirb-QBLNwVPC3-RH6DOSnt2D1JL0mP9cghYxAwCk9w3QOCAycK6CdXCbW3lxaRivyA8Fglk2G4r_d-gLMYhUyQnPv5UooGjBVXCHDJ132ycDOFVLCTvNltamCuGC387XNkUQ51LJVFKGWUVYnKncvZmiJWxvhJ1VwBZsu5eNha-604agZTjy9aGkZe8Ox-S8TqCch3_HvVaD8AlKZVLhWubGpKSO1xiAb58P23nnyLk54IU9sdbaGzkra5WwHcKtDG9VSM0wmQL-n' },
                    { name: 'Tokyo', country: 'Japan', price: '$1200', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5AZqvE7oWG5i4uohTyO0F0kAmAjKkVeuL4n7gQz2YQl-UOkNw11TgXM-DJVatj7cceWYZK8tNY_KZdIqI2D8N7hxpje150dqxFLmikeOws9reXSGYA7t3_WR-08XGkTkEMtbXkUzD6ZKawlXRDpR2c-1AGQVBxpTbmOVySpVuUhqm7N27FmhqXVzz6OfRi6wNqGtzud0bkQROaxkmFEtAGcknoOGrrU5nnAkiC6_HEEqX4aTNKsLOHhM5GVQPuOFr0nDrgAY0RD3W' }
                ].map((dest, i) => (
                    <div key={i} className="group overflow-hidden rounded-xl shadow-lg relative cursor-pointer" onClick={() => navigate('/tours')}>
                        <img className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110" src={dest.img} alt={dest.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">{dest.name}</h3>
                            <p className="text-sm opacity-90">{dest.country}</p>
                            <p className="mt-2 text-sm font-medium text-secondary text-orange-400">Tours from {dest.price}</p>
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
