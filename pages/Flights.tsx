import React from 'react';
import { Flight } from '../types';

const flightData: Flight[] = [
    { id: '1', airline: 'Emirates', airlineLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkLlKWMqgg8e3VMq2D_xuf6M_1TVSDcIl_J3C3hitVEBauQDDDGPbCHCZSymu_fLEsDKNfEKKGWq5V-899fxMtVhvpD_95MbTon72L2sbM5gTrLh5-ZwBh6_xXy40cxD9fWifWgGS8SUH0In9ZYkAscA8wwnJckHqmk4Zyb6mp-4Rk_W8fPixY_zg6HsGdbl1uL10PN94JJQZAvZXJN5KgCSH4S9DMTUCmJmc3fVg7UI4p0yamuvAlmno5bMKHxcDOQ_ISSLKxGnnh', flightNumber: 'EK 005', departureTime: '07:45', departureCode: 'DXB', duration: '7h 50m', stops: 'Direct', arrivalTime: '12:35', arrivalCode: 'LHR', price: 980 },
    { id: '2', airline: 'Qatar Airways', airlineLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2R2pY0jLecJurBPqs25NRNUjA0UbLC98csS1DaNfpdrCY9zf5T4FsDKUhzf1dqt1wKduoALyEScrjV-O5cDHCxEar-7FDOdp-iWW6uKAUvE9PUa4Wf2fB5t2xFqiDNDtqXjQYaoGXg_EDR6XEWehPxgMwXrWvob_usd2_H_lXjM2fRpqDJKWCwSTQIkSz9gC44dZoloySZSgekDjkAHB6BSgWXE6oHGpGGcE-FH9hyz69T8RQgb9nBo2ovtDbGdAYY1PmtH04JLvC', flightNumber: 'QR 1019', departureTime: '10:15', departureCode: 'DXB', duration: '9h 20m', stops: '1 Stop (DOH)', arrivalTime: '16:35', arrivalCode: 'LHR', price: 850 },
    { id: '3', airline: 'British Airways', airlineLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLY3v1BV0iQZD_Jt6Bl-abIlnVGVFG5KD5gJ8ikcWNx3yGN0lDgG7mfel-Shc5eNpCRu5IJEA2R_nYcHE85bugjMBr0g4SmGrplrY-1b9ci2P6JrYLEGMlDhmnPxbpxjdvfSWSj6wI-jYQ-vBZtDEEhBX-xK3wSpRIB_FN7-gXY3ftUeADUurQ1j3YB_FhCbuQE241o3jp9Mkelv4hxeHZXrE8CKs89PmKHod7-xiDbL3KC_njiCwlCpc-HY_0ZwFpGrV3nbGZQipU', flightNumber: 'BA 106', departureTime: '13:30', departureCode: 'DXB', duration: '8h 05m', stops: 'Direct', arrivalTime: '18:35', arrivalCode: 'LHR', price: 920 },
];

const Flights: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {/* Search Header */}
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 min-h-14 justify-between mb-8 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-10">
                    <span className="material-symbols-outlined">flight_takeoff</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 text-base font-normal leading-normal flex-1 truncate">
                    DXB to LHR, Round Trip, 2 Adults, 15 Sep - 22 Sep
                </p>
            </div>
            <div className="shrink-0">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    Edit Search
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Filters */}
            <aside className="lg:col-span-3">
                <div className="sticky top-28">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="text-slate-800 dark:text-slate-200 text-lg font-bold leading-tight px-4 pb-2 pt-4">Filter Your Results</h3>
                        
                        {/* Stops */}
                        <div className="border-b border-slate-200 dark:border-slate-800 py-4">
                            <p className="text-slate-800 dark:text-slate-200 text-base font-medium px-4 mb-3">Stops</p>
                            <div className="flex flex-col gap-3 px-4">
                                {['Direct', '1 Stop', '2+ Stops'].map((stop, idx) => (
                                    <label key={idx} className="flex items-center gap-4 rounded-lg border border-slate-200 dark:border-slate-700 p-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                                        <input type="radio" name="stops-filter" className="h-5 w-5 border-2 border-slate-300 text-primary focus:ring-primary" defaultChecked={idx === 0} />
                                        <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">{stop}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Airlines */}
                        <div className="py-4">
                            <p className="text-slate-800 dark:text-slate-200 text-base font-medium px-4 mb-3">Airlines</p>
                            <div className="flex flex-col gap-3 px-4">
                                {['Emirates', 'British Airways', 'Qatar Airways', 'Lufthansa'].map((airline, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" defaultChecked={airline === 'Qatar Airways'} />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm">{airline}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Results */}
            <div className="lg:col-span-9 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Showing {flightData.length} of 84 flights for Dubai to London</p>
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Sort by:</label>
                        <select className="rounded-md border-slate-300 text-sm py-1.5 focus:border-primary focus:ring-primary bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            <option>Price (Low to High)</option>
                            <option>Duration (Shortest)</option>
                            <option>Departure (Earliest)</option>
                        </select>
                    </div>
                </div>

                {flightData.map((flight) => (
                    <div key={flight.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                             {/* Airline Info */}
                            <div className="flex items-center gap-4 w-full md:w-1/4">
                                <img src={flight.airlineLogo} alt={flight.airline} className="h-10 w-10 object-contain" />
                                <div>
                                    <p className="font-semibold text-slate-800 dark:text-slate-200">{flight.airline}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{flight.flightNumber}</p>
                                </div>
                            </div>

                            {/* Flight Path */}
                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="text-center">
                                        <p className="font-bold text-lg text-slate-800 dark:text-slate-200">{flight.departureTime}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{flight.departureCode}</p>
                                    </div>
                                    <div className="flex-1 mx-4 text-center">
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{flight.duration}</p>
                                        <div className="h-0.5 w-full bg-slate-200 dark:bg-slate-700 relative">
                                            {flight.stops !== 'Direct' && (
                                                <div className="absolute left-1/2 -translate-x-1/2 -top-[5px] h-2.5 w-2.5 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-400"></div>
                                            )}
                                            <div className="absolute -left-1 -top-[3px] h-2 w-2 rounded-full bg-slate-400"></div>
                                            <div className="absolute -right-1 -top-[3px] h-2 w-2 rounded-full bg-slate-400"></div>
                                        </div>
                                        <p className={`text-xs font-medium mt-1 ${flight.stops === 'Direct' ? 'text-green-600' : 'text-slate-500'}`}>{flight.stops}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-lg text-slate-800 dark:text-slate-200">{flight.arrivalTime}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{flight.arrivalCode}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Price & Action */}
                            <div className="flex flex-col items-center md:items-end w-full md:w-1/4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 md:pl-6">
                                <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">${flight.price}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Total price for 2 adults</p>
                                <button className="w-full md:w-auto flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors">
                                    Select Flight
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Flights;
