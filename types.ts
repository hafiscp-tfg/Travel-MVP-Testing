export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  departureTime: string;
  departureCode: string;
  duration: string;
  stops: string;
  arrivalTime: string;
  arrivalCode: string;
  price: number;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  image: string;
  features: { icon: string; text: string; included: boolean }[];
  price: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface VisaCountry {
    id: string;
    name: string;
}
