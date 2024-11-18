export const environment = {
  production: false,
  baseUrl: 'http://localhost:8081',
  endPoint: {
    login: {
      auth: "api/v1/authenticate"
    },
    register: {
      owner: "api/v1/public/owners/register",
      customer: "api/v1/public/customers/register",
      verifyCountUser: "api/v1/users/verify-and-activate",
      sendOtpOfEmail: "api/v1/users/request-password-reset",
      resetPassword: "api/v1/users/reset-password",
    },
    residence: {
      getAll: "api/v1/owner/residences",
      getOne: "api/v1/owner/residence/slug",
      save: "api/v1/owner/residences",
      savePicture: "api/v1/owner/picture-residences"
    }
  }
}
