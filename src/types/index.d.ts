export interface SidebarLink {
  route: string;
  label: string;
}
export interface SocialLink {
  url: string;
  label: string;
  icon: string;
}

export interface ColorSet {
  gradient: string;
  block: string;
}

export interface Projects {
  logo: string;
  label: string;
}

export interface Contributor {
  name: string;
  twitterHandle: string;
  totalSubmissions: number;
}

export interface Archive {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  editionNo: number;
  onSeries: string;
  coverageList: string[];
}

export interface TeamMember {
  name: string;
  displayPicture: string;
  position: string;
  x: string;
}

export interface ContributorCalendar {
  title: string;
  image: string;
  date: string;
}
export interface Organization {
  name: string;
  logo: string;
}

export interface Readers {
  label: string;
  organizations: Organization[];
}

export interface Testimonials {
  name: string;
  link: string;
  company: string;
  image: string;
  comment: string;
}
