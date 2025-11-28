import React from 'react';
import { TourPackage } from '../types';

const tourPackages: TourPackage[] = [
    {
        id: '1',
        title: 'Enchanting Munnar & Alleppey',
        duration: '5 Nights / 6 Days',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkONuNLrIlyDMyYwKOM4c_uZR9rI68HfiHZG8g4IIencX3BCSdjTl9smaPkgsVVO_nj_f2oOTUvjx3UabGVepU9Pttq53Dq6ObRgISzR0ttnADBzBDVGIjHs9NrW8RMKFTwS2BeqsdsdyLmX_2wA7dqJRKrSIRmkeVErWsAf5nRZHdjkj8WnYgv9mcOy8gA7FYA1OVOOoUbOh5ppKCkTRNn4gb9nrMhMSpjMEJooe1HaqMBMzn5zu24I4BMPC3kaDduIeHk-aj9cC9',
        features: [
            { icon: 'check_circle', text: 'Flights Included', included: true },
            { icon: 'check_circle', text: '5-Star Hotels', included: true },
            { icon: 'cancel', text: 'Visa Not Included', included: false }
        ],
        price: 499
    },
    {
        id: '2',
        title: 'Mystical Bali Adventure',
        duration: '7 Nights / 8 Days',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7PEBTG1CYT6Sklv5-hO-IoLF-PwcXs4z_xfUmdpfL3L_jz6EfHqy1dOQ-2NPw_gX2NzEOJNwcHfgUN3E91g6J3kf0l55tuSK6cZpW8s8csc65tDPay2izqxeYuaL-8Ox38sogg4dBk0XjJfzhuq1v7n41hO_rQ2BYC_sUGLJ3xqOZEsFjteJuR2Nhewllyjtk50Tsf_GPe195Qm1m2fsSmg94EvVwTQSlbGtOisZ6Nu7-E--Vqz5v3VAaLHbmQ4BKvlEq1vwwn9md',
        features: [
            { icon: 'check_circle', text: 'Flights Included', included: true },
            { icon: 'check_circle', text: 'Private Villa', included: true },
            { icon: 'cancel', text: 'Lunch & Dinner', included: false }
        ],
        price: 1299
    },
    {
        id: '3',
        title: 'Romantic Paris Getaway',
        duration: '4 Nights / 5 Days',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHUgEnVMEuFhFlSokCD6DFReqUpmaHgyqVlPyW_I0UYuZQBDqhNWrfwfIjLCXMtqY6zqqcT4Hw-KzPFuJ_ZGaWXV3AIC-gtr90TAjSJP25Kb0Uv5tTtqj9U0ddoN-hxVR8GsyLSYt3VcaQFgVkyURZ7Jf2-9q-DgLXRhhEcCNkpbJvLM4wZu2pfPvpgTdUYxAQxgSpBphG0s8qanHrj6y6n6U3tP6BKOCsa5fBXGYy0Ar9yAZPe7Gd2p6zfbhq3L_jEGBpWVkSX86u',
        features: [
            { icon: 'check_circle', text: 'City Tour', included: true },
            { icon: 'check_circle', text: 'Boutique Hotel', included: true },
            { icon: 'cancel', text: 'Flights Not Included', included: false }
        ],
        price: 1499
    },
    {
        id: '4',
        title: 'Kerala Backwater Bliss',
        duration: '6 Nights / 7 Days',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe9zRsC_PJRpY7g5qs1l0o1V4Y3HfdZW16rhc-YubZIsA0dXP2GYY_YsMoopIgVHRlzQaCYN_BgnKMf6r_UZyJwVkZOxwi7CoSgkFNzm3YbOEwLDuLCFk2dNBjU8dSPfb5bXkaNpoagrZp6MrBy7JJppeZanODpKtC0UHmdMdQttusZ6mFFXE6-2xO6h9H5WRV-lNNUZPBPkw7gDq586XLzpYT0KIFEkS9AUALNS9ow5QUxsiQdAhE4OyJnQOlSta-GW8CBx26kHsy',
        features: [
            { icon: 'check_circle', text: 'Houseboat Stay', included: true },
            { icon: 'check_circle', text: 'All Meals', included: true },
            { icon: 'check_circle', text: 'Airport Transfers', included: true }
        ],
        price: 599
    },
    {
        id: '5',
        title: 'Swiss Alps Expedition',
        duration: '8 Nights / 9 Days',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv_XJGN0zjk8FaZ0FdJrgpMLB15yskaf9wJHmLqtbLmGY47PkixxNIRA9sDvI569MKL3zDJZOSw64mp0s7W6qApwYeJvLRnzTTAPVYeSFD6sT_xaCVtMPwnrclFH4MHzrw8M-brW4UtiWoh-__hlBgXDHoEZMs3zOfcNUOKOephuUzHkx8oImUb_kwied82uImKTHOF4UGS5n2i-CqsoWpjJlBpuonnuc-wKrHxzE29s3t2OoI_x_8Y6hUyWKH4j5TE9LI8WCqhDnR',
        features: [
            { icon: 'check_circle', text: 'Scenic Train Rides', included: true },
            { icon: 'check_circle', text: 'Guided Hikes', included: true },
            { icon: 'cancel', text: 'International Flights', included: false }
        ],
        price: 2199
    },
    {
        id: '6',
        title: 'Exotic Thailand Escape',
        duration: '5 Nights / 6 Days',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqd99fT5tXR6Pn-xsgqIauAD9O6GGTwuT1xkAMtyYQH7u0-haV-Were3MWfvyAscoPg7sU1H8K019oIadqohcDAy6j2LjN4J_GsxOO7B2-XzXLL91Z5LOEAZo3RWt41nxlNW-cbU8FW36-SFPIR_nWi8EjSrQafry1udKy8MCx_FUC9iRFnFQMGnW3G_WPqM1pQSPC4GfqwDr8Z84iMI5yyRNjRTnKpvZcprZqRTau7DAJqo3c991xlJlyG3-vDv9T3JY4EXZM3QKk',
        features: [
            { icon: 'check_circle', text: 'Island Hopping Tour', included: true },
            { icon: 'check_circle', text: 'Beachfront Resort', included: true },
            { icon: 'check_circle', text: 'Daily Breakfast', included: true }
        ],
        price: 999
    }
];

const Tours: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      {/* Hero */}
      <section className="mb-12 rounded-xl overflow-hidden relative">
        <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzIj5_Yp6ZsCMG-d3rUvJWOE0Bx1sXXdUNq1z7ft03R3WzG9zAJ3oXhrdGRAMKRdRy8kHU81VWNVVcM6IwwJfUIp143s6UWNOPdDe9ss7tYGkwv7DraQvlnsTXzJ_-HnA7DEx-XKflPwUPJWgoGfKjHVvqJcMRdwDNpcPRU_TmBLxgoL-4IBia_wwVIA9VYeEyJqyoH2ub_bwLVB4r3idVb781fD9Pqvr_bdOIBWZnDYAO9X0cQ_aB3y1YGD1dKivpbrILjAUEpksE')"}}>
            <h1 className="text-white text-4xl font-black leading-tight sm:text-5xl">Discover Your Next Adventure</h1>
            <h2 className="text-white text-lg font-normal">Curated Travel Experiences Just for You</h2>
            <button className="mt-4 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">
                Explore Tours
            </button>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="mb-12">
        <div className="flex gap-3 flex-wrap items-center">
            {['All', 'Kerala Packages', 'International', 'Honeymoon', 'Adventure'].map((filter, idx) => (
                <button 
                    key={idx}
                    className={`flex h-10 items-center justify-center px-4 rounded-full text-sm font-medium transition-colors ${
                        idx === 0 
                        ? 'bg-primary text-white ring-2 ring-primary' 
                        : 'bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
                <div key={tour.id} className="flex flex-col gap-4 bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: `url("${tour.image}")` }}></div>
                    <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold mb-1">{tour.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{tour.duration}</p>
                        
                        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-4">
                            {tour.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <span className={`material-symbols-outlined text-base ${feature.included ? 'text-green-500' : 'text-red-500'}`}>
                                        {feature.icon}
                                    </span>
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-auto mb-4">
                            Starting from <span className="text-lg font-bold text-slate-800 dark:text-slate-100">${tour.price}</span>
                        </p>
                        <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
                            Request Quote
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
       {/* Pagination (Visual only) */}
       <div className="flex justify-center items-center gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="size-10 rounded-full bg-primary text-white font-bold text-sm">1</button>
            <button className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 text-sm">2</button>
            <button className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 text-sm">3</button>
            <span className="text-slate-400">...</span>
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600"><span className="material-symbols-outlined">chevron_right</span></button>
       </div>
    </div>
  );
};

export default Tours;
