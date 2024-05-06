export interface Company {
  _id: string;
  name: string;
  descriptionEs: string;
  descriptionEn: string;
  stars: number;
  activePromotions: number;
  logo?: string;
  banner?: string;
  country: string;
  state: string;
  city: string;
  cp: number;
  lat: number;
  lng: number;
  phone: number;
  whatsapp?: number;
  facebook?: string;
  categories: string[];
  openingDays: string[];
  hourInit?: string;
  hourEnd?: string;
  active: boolean;
  industry: string;
  tags: string[];
  ubication: string;
}
