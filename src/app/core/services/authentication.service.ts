import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends LocalStorageService {
  setTokensLocalStorage(token: string) {
      this.saveTokensLocalstorage(token)
  }

  setUserLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isUserAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  getUser(): User {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem('user');
    window.location.reload();
  }
}
