import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }


  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    console.log("Saving token to localStorage:", token);  // Debugging log
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }
  
  public getToken(): string {
    const token = window.localStorage.getItem(TOKEN_KEY);
    console.log("Token Retrieved from Local Storage:", token);  // Debugging log
    return token;
  }
  

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
