export interface Residence {
  id: number,
  slug: string,
  name: string,
  price: number,
  description: string,
  rooms: number,
  showers: number,
  diningRoom: number,
  terrace: number,
  lounges: number,
  wifi: boolean,
  parking: boolean,
  catering: boolean,
  cleaning: boolean,
  available: boolean,
  address: {
    city: string,
    district: string
  }
  availabilityDate: Date
  images: {imageUrl:string}[]
}

export interface PageResidence {
  size: number;
  totalPage: number;
  page: number;
  residences: Residence[]
}
