export interface ImageLink {
  size: string;
  url: string;
}

export interface Image {
  id: string;
  imagelink: ImageLink[];
  title?: string;
}

export interface Country {
  iso3166CountryCode: string;
  name: string;
  country: string;
}

export interface Organization {
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

export interface DonationOption {
  amount: number;
  description: string;
}

export interface Video {
  url: string;
}

export interface GlobalGivingProject {
  active: boolean;
  activities: string;
  additionalDocumentation?: string;
  approvedDate: string; // Assuming string for simplicity, adjust if a specific date format is used
  contactAddress: string;
  contactAddress2?: string;
  contactCity: string;
  contactCountry: string;
  contactName: string;
  contactPostal: string;
  contactState: string;
  contactTitle: string;
  contactUrl: string;
  countries: {
    iso3166CountryCode: string;
    name: string;
    country: string;
  }[];
  country: string;
  iso3166CountryCode: string;
  funding: number; // Assuming a number for simplicity
  goal: number; // Assuming a number for simplicity
  id: number;
  imageGallerySize: number;
  imageLink: string;
  image?: {
    id: number;
    title?: string;
    imagelink: {
      size: string;
      url: string;
    }[];
  };
  latitude?: number;
  longTermImpact: string;
  longitude?: number;
  need: string;
  notice?: string;
  numberOfDonations: number;
  organization?: {
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
  };
  progressReportLink: string;
  projectLink: string;
  region: string;
  remaining: number; // Number for simplicity
  status: string;
  summary: string;
  themes: {
    id: string;
    name: string;
    themeName: string;
    title: string;
    type: string;
  }[];
  type: string;
  donationOptions?: {
    donationOption: {
      amount: number; // Number for simplicity
      description: string;
    };
  }[];
  videos?: {
    video: {
      url: string;
    };
  }[];
}

export interface Project {
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
  globalGivingProject: GlobalGivingProject; // Allows access to that interface when detailed info is needed
}

export interface Theme {
  id: string;
  name: string;
}

export interface ThemesResponse {
  themes: Theme[];
}

export interface GetAllProjectsResponse {
  projects: Project[];
}

export default GetAllProjectsResponse;


export interface GalleryPhotosResult {
    galleryPhotos: string[];
                  //I feel like this needs redefined to take photourls.
}

export interface CarouselComponentProps {
    photos: any[];
}

