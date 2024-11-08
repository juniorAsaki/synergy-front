export interface User {
  firstName: string,
  email: string,
  remenberMe: true
}

export interface AuthResponse {
  id_token: string;
}
