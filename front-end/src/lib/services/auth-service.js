const key = 'email';

export class AuthService {
  static isLoggedIn() {
    return localStorage.getItem(key);
  }

  static logout() {
    localStorage.removeItem(key);
  }

  static login(loginEmail) {
    localStorage.setItem('email', loginEmail);
  }
}
