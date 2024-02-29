interface ImageLink {
  size: string;
  url: string;
}

interface Image {
  id: string;
  imagelink: ImageLink[];
  title?: string;
}

interface Country {
  iso3166CountryCode: string;
  name: string;
  country: string;
}

interface Organization {
  activeProjects: number;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  country?: string;
  ein?: string;
  id: number;
  iso3166CountryCode?: string;
  logoUrl?: string;
  mission: string;
  name: string;
  postal?: string;
  state?: string;
  totalProjects: number;
  url?: string;
  themes?: string[];
  countries?: string[];
}

interface DonationOption {
  amount: number;
  description: string;
}

interface Video {
  url: string;
}

interface Project {
  numberFound: number;
  hasNext?: boolean;
  nextProjectId?: number;
  active: boolean;
  activities: string;
  additionalDocumentation?: string;
  approvedDate: string; // Adjusted to string for simplicity
  contactAddress: string;
  contactAddress2?: string;
  contactCity: string;
  contactCountry: string;
  contactemail: string; // Docs use lowercase 'e' here
  contactName: string;
  contactPhone: string;
  contactPostal: string;
  contactState: string;
  contactTitle: string;
  contactUrl: string;
  countries: Country[];
  country: string;
  iso3166CountryCode: string;
  funding: number;
  goal: number;
  id: number;
  image: Image;
  imageGallerySize: number;
  imageLink: string;
  latitude?: number;
  longTermImpact: string;
  longitude?: number;
  need: string;
  notice?: string;
  numberOfDonations: number;
  organization: Organization;
  progressReportLink: string;
  projectLink: string;
  region: string;
  remaining: number;
  status: string;
  summary: string;
  themes: string[];
  themeName: string;
  title: string;
  type: string;
  donationOptions: DonationOption[];
  videos: Video[];
}

export interface Theme {
  id: string;
  name: string;
}

export interface ThemesResponse {
  themes: Theme[];
}

interface GetAllProjectsResponse {
  projects: Project[];
}

export default GetAllProjectsResponse;


export interface GalleryPhotosResult {
    galleryPhotos: any[];
}

export interface CarouselComponentProps {
    photos: any[];
}

