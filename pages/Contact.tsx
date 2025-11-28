import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We're here to help. Reach out to us for any inquiries about flights, tours, or visa services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
         <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
                <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Our Office</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Ground Floor, Skytower Business Center, Bank Rd, Mavoor Rd Junction, Calicut, Kerala 673001
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Phone</h3>
                    <a href="tel:+911234567890" className="text-slate-600 dark:text-slate-400 mt-1 block hover:text-primary">+91 123 456 7890</a>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">chat_bubble</span>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">WhatsApp</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 mb-3">Connect with us for instant support.</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.75 13.96c.25.13.41.2.52.34.11.14.11.45 0 .84-.09.34-.5.71-1.12.82-.6.13-1.07.2-1.63.11-.56-.09-1.25-.31-2.14-1.11-.93-.84-1.63-1.84-2.12-2.93-.41-.91-.31-1.58-.16-2.11.16-.54.43-.9.78-1.14.34-.25.68-.36.95-.36.27 0 .54.02.73.04.29.02.43.04.59.45.16.41.52 1.33.57 1.43s.11.23.02.39c-.09.16-.16.25-.31.41-.16.16-.27.31-.41.45-.13.14-.25.29-.11.54s.45.78.93 1.22c.57.52 1.04.87 1.34.98.29.11.43.09.59-.04.16-.13.31-.34.45-.48.14-.14.29-.27.48-.16.18.11.98.47 1.15.54.16.09.27.13.31.2Z M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.45 3.5 1.34 5l-1.43 5.21 5.34-1.41c1.45.84 3.09 1.32 4.66 1.32 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z"></path></svg>
                        Chat on WhatsApp
                    </button>
                </div>
            </div>
         </div>

         <div className="h-96 w-full rounded-xl overflow-hidden bg-slate-200 shadow-md">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.116933560249!2d75.78018287481267!3d11.2529949889417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593623975a23%3A0x77c2957e8417c49b!2sMavoor%20Road%20Junction!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
            ></iframe>
         </div>
      </div>
    </div>
  );
};

export default Contact;
