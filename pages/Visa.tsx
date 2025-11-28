import React, { useState } from 'react';

const Visa: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Saudi Arabia');
  
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-16">
            <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-6 md:p-10" 
                 style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhXiWVnnNqzC-r47yGfPtyT1LZxqZzo6NaR-84wIfXsbqoPPdYgKW5vJb4QcmS1MDIguTHnj9WIDQNwzamwkIEbvc8YzBQpfrAux29AO9VNIuPHQ5HOVLEUKAlXs-Hq2DcFKZ1nyAFb0RSwFLm-K3TxAakOIcnjb5qIv-Z0lg-uGwDDTXG7ZY5GoAn2qqu1NW-zLPqKMf-dax4B25OdXXK2Air5PSrDvemKMP3qQvAXLpCkaZoLxZ4HFO8kQqDIcA6eSnW1nvVjGs-')" }}>
                <div className="flex flex-col gap-4 text-left max-w-2xl">
                    <h1 className="text-white text-4xl font-black leading-tight md:text-5xl">Simplified Visa Services for Your Global Travels</h1>
                    <h2 className="text-slate-100 text-base font-normal md:text-lg">Let us make your visa application process seamless and hassle-free, so you can focus on your journey.</h2>
                </div>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Info Column */}
            <div className="lg:col-span-2">
                {/* Tabs */}
                <div className="border-b border-slate-300 dark:border-slate-700 flex gap-8 mb-6">
                    {['Saudi Arabia', 'UAE', 'United Kingdom'].map((country) => (
                        <button
                            key={country}
                            onClick={() => setActiveTab(country)}
                            className={`pb-4 pt-2 text-sm font-bold border-b-[3px] transition-colors ${
                                activeTab === country 
                                ? 'border-primary text-slate-900 dark:text-slate-50' 
                                : 'border-transparent text-slate-500 hover:text-primary'
                            }`}
                        >
                            {country}
                        </button>
                    ))}
                </div>

                {/* Accordions */}
                <div className="space-y-4">
                     <details className="group border-t border-slate-200 dark:border-slate-800" open>
                        <summary className="flex cursor-pointer items-center justify-between py-4 list-none text-slate-900 dark:text-slate-200 font-medium text-lg">
                            Required Documents
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Passport copy with at least 6 months validity. Recent passport-sized photograph with a white background. Completed visa application form. Proof of accommodation and flight bookings.
                        </div>
                     </details>
                     <details className="group border-t border-slate-200 dark:border-slate-800">
                        <summary className="flex cursor-pointer items-center justify-between py-4 list-none text-slate-900 dark:text-slate-200 font-medium text-lg">
                            Processing Time & Fees
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Standard processing takes 5-7 business days. Expedited options are available for an additional fee. Please contact us for a detailed quote based on your specific needs and nationality.
                        </div>
                     </details>
                     <details className="group border-t border-b border-slate-200 dark:border-slate-800">
                        <summary className="flex cursor-pointer items-center justify-between py-4 list-none text-slate-900 dark:text-slate-200 font-medium text-lg">
                            Eligibility Criteria
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                             Applicants must have a valid reason for travel, sufficient funds to cover their stay, and no history of visa violations. Specific criteria may vary based on the purpose of your visit (tourism, business, etc.).
                        </div>
                     </details>
                </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-1">
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm sticky top-24">
                    <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Start Your Visa Application</h2>
                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                            <input type="text" className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 focus:border-primary focus:ring-primary" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                            <input type="tel" className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 focus:border-primary focus:ring-primary" placeholder="+1 (555) 123-4567" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                            <input type="email" className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 focus:border-primary focus:ring-primary" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Desired Visa</label>
                            <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 focus:border-primary focus:ring-primary">
                                <option>Saudi Arabia</option>
                                <option>UAE</option>
                                <option>United Kingdom</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="flex gap-3 mt-2">
                             <button type="button" className="flex-1 h-10 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors">Get Callback</button>
                             <button type="button" className="flex-1 h-10 bg-[#25D366] text-white rounded-lg font-bold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg>
                                WhatsApp
                             </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>

      {/* Features */}
      <section className="bg-white dark:bg-slate-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: 'groups', title: 'Expert Guidance', desc: 'Our experienced team provides step-by-step assistance to ensure your application is perfect.' },
                    { icon: 'rocket_launch', title: 'Fast Processing', desc: 'We prioritize your application to minimize waiting times and get your visa approved quickly.' },
                    { icon: 'support_agent', title: 'Dedicated Support', desc: 'Have questions? Our support team is available around the clock to assist you at every stage.' },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary mb-4">
                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Visa;
