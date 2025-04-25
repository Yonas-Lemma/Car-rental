// Store admin credentials
const ADMIN_CREDENTIALS = {
  username: "eurotaxi",
  password: "secure123",
}

// Authentication function
export function authenticateAdmin(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}
