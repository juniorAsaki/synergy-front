export interface Residence {
  slug: string,
  name: string,
  price: number,
  description: string,
  NumberOfRooms: number,
  NumberOfShowers: number,
  NumberOfDiningRoom: number,
  NumberOfTerrace: number,
  NumberOfLounges: number,
  wifi: boolean,
  parking: boolean,
  catering: boolean,
  cleaning: boolean,
  available: boolean,
  city: string,
  district: string,
  availabilityDate: Date
  PictureResidences: string[]
}
