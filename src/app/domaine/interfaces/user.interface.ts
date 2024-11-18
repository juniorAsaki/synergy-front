export interface User {
  firstName: string,
  email: string,
  remenberMe: true
}

export interface AuthResponse {
  id_token: string;
}

export interface Customer {
  email: string,
  password: string,
  verifiedCompte: boolean,
  city: string,
  district: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  gender: string
}
