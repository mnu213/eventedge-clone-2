const key = 'token';

export class AuthService {
  static isLoggedIn() {
    return localStorage.getItem(key);
  }

  static logout() {
    localStorage.removeItem(key);
  }

  static login(token) {
    localStorage.setItem(key, token);
  }
}
