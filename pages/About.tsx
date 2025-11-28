import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-5">
      <div className="flex flex-col max-w-4xl flex-1 px-4">
        {/* Hero */}
        <div className="w-full rounded-xl overflow-hidden relative min-h-[400px] flex items-center justify-center p-4 bg-cover bg-center mb-12"
             style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-cbjVwzMMLn6lpuUbuV4hC5YSgGG7kffsvFsY9xWL9x6Rr9lFBVTYJQ2LHoWf_VTew4F0VfKcksLsYscN-s6nVbsjw022hoo89Z9P7VUYMLhDUaPcE3WOM4iku-fFm2ivTF2ZGE44gE-i3f1Oie0npNIGO10FwOmwHpyd7o6MJ_ycB6c9kpUhZjRalihESSUQMRSqgYOlHu34OkyifYlkQKUlh5V-KzFbC2FKyB2lm2uFz1EyT-nLW4Ycy6R27KsKdg8jrcOYIJOe')" }}>
            <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-black mb-2">About Sharafiya Tourism</h1>
                <h2 className="text-base md:text-lg">Your Gateway to Unforgettable Journeys.</h2>
            </div>
        </div>

        {/* Story */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-10 text-slate-900 dark:text-white">Our Story</h2>
            <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-x-6 gap-y-12">
                {/* 2010 */}
                <div className="hidden md:flex flex-col items-end text-right">
                    <p className="font-bold text-slate-900 dark:text-white">Founded Sharafiya Tourism</p>
                    <p className="text-slate-500">With a passion for travel and a vision to share the world's wonders, our journey began.</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-primary font-bold">2010</span>
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-10">
                        <span className="material-symbols-outlined text-sm">flag</span>
                    </div>
                    <div className="w-0.5 bg-slate-200 grow h-full"></div>
                </div>
                <div className="md:hidden">
                    <p className="font-bold text-slate-900 dark:text-white">Founded Sharafiya Tourism</p>
                    <p className="text-slate-500">With a passion for travel and a vision to share the world's wonders, our journey began.</p>
                </div>
                <div className="hidden md:block"></div>

                {/* 2014 */}
                <div className="hidden md:block"></div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-primary font-bold">2014</span>
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-10">
                        <span className="material-symbols-outlined text-sm">public</span>
                    </div>
                    <div className="w-0.5 bg-slate-200 grow h-full"></div>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-slate-900 dark:text-white">Opened First International Office</p>
                    <p className="text-slate-500">Expanding our horizons to bring global adventures closer to you.</p>
                </div>

                {/* 2018 */}
                <div className="hidden md:flex flex-col items-end text-right">
                    <p className="font-bold text-slate-900 dark:text-white">Launched Online Booking</p>
                    <p className="text-slate-500">Making travel planning seamless and accessible from anywhere, anytime.</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-primary font-bold">2018</span>
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-10">
                        <span className="material-symbols-outlined text-sm">computer</span>
                    </div>
                    <div className="w-0.5 bg-slate-200 grow h-full"></div>
                </div>
                <div className="md:hidden">
                    <p className="font-bold text-slate-900 dark:text-white">Launched Online Booking</p>
                    <p className="text-slate-500">Making travel planning seamless and accessible from anywhere, anytime.</p>
                </div>
                <div className="hidden md:block"></div>

                {/* 2023 */}
                <div className="hidden md:block"></div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-primary font-bold">2023</span>
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-10">
                        <span className="material-symbols-outlined text-sm">celebration</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-slate-900 dark:text-white">100,000 Happy Travelers</p>
                    <p className="text-slate-500">A milestone marking countless memories created and adventures shared.</p>
                </div>
            </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-8 mb-16 text-center shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Mission & Values</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                We are dedicated to providing exceptional travel experiences with a focus on reliability, expert guidance, and putting our customers first.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: 'favorite', title: 'Customer First', desc: 'Your needs and satisfaction are at the core of everything we do.' },
                    { icon: 'verified_user', title: 'Reliability', desc: 'Count on us for safe, seamless, and dependable travel arrangements.' },
                    { icon: 'explore', title: 'Expert Guidance', desc: 'Our team of seasoned experts is here to craft your perfect journey.' }
                ].map((val, i) => (
                    <div key={i} className="bg-background-light dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="material-symbols-outlined text-4xl text-primary mb-3">{val.icon}</span>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">{val.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Team */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                 {[
                    { name: 'John Doe', role: 'Founder & CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7EaTI6JbLJ8ZUG9XF4jtGlKxNBAuHgFd3y48Py-l5XI4KPNnGMNAlc64Y5sbCgJ8gSTLnsCxYNZB0rH6g_cWmRtrZsWDgJZeVfMqQJZLcoQjZ9k_m18DqXtSDuJdAHgyvqEN7MeyG5n611GgPUmIKGxYYU98rUxoft7ViG6xkA_AtD4BSS8bGb3YbIBnlNM-d92DIy0B8j0tCN9XvOghJowEs9YniRYJoQqXvM1DpWBlWaBOUcTSKZf4N8_UaNeifnOmicWACLgC9' },
                    { name: 'Jane Smith', role: 'Head of Tours', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC-qgAKLuhZlHGfikKDlGgHECMmSTJ2uNaGGLKa5XgcENTvxQ1Ag4in5v-luLxQDbDR5wD13PxRJ1QIUog4GMlKeglAGjHbC0qP5Z7D7qsHVE_jvnw7GMqWSOUP7J8xDYn66hU4HHnJzQpUK2CEAGtn6384IEHNomaCfHHyx_0aMohSGSNZsb61HpQzSh2c9Qww8LUUFbLKXh_tVzU6rhnZRzLWbIFmVsMp2oG_DG1CRw1ia-IFottOkKPlRSB9C_uX289svQdkdb8' },
                    { name: 'Alex Johnson', role: 'Visa & Flight Specialist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaSTB6IvhySh0t4mwF7srVZ1ODsxpOSNzZX8_kqcXgaH_GYkUl7fcwRFRuuH__qqBETrqLoc0epQ3AJiUZbtj7_n_w6ft3z1F3uel7xhGHfpbHC1UzubDF5DyfE-ACFeuLPdn7OB9IraQxI9YU7suAhNjVYgRu8W3cQ305vd9suoEqCa5OnraHlJQmXMqyWRSCLvxOP-F5BCmc_gs5QLenryaLzdd6BPZST0KQ6mnlu36QOuZLImljpYkVcd7IIMB0pZmqbElftH0j' },
                 ].map((member, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-md" />
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">{member.name}</h3>
                        <p className="text-primary font-medium text-sm">{member.role}</p>
                    </div>
                 ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
