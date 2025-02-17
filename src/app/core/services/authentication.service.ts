import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { User } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends LocalStorageService {
  #userService = inject(UserService);
  user!: User;

  setTokensLocalStorage(token: string) {
    this.saveTokensLocalstorage(token)
  }

  getTokensLocalStorage(): string {
    return this.getAccessToken()
  }

  setUserLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isUserAuthenticated(): boolean {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return false;
    }

    return localStorage.getItem('EChaAccessToken') !== null;
  }

  setUserByToken() {
    const token = localStorage.getItem('EChaAccessToken');

    const payload = JSON.parse(atob(token!.split('.')[1]));

    const userData = JSON.parse(payload.UserData);

    this.#userService.getUserById(userData.Id).subscribe((response) => {
      
      const user: User = {
        id: response.id,
        email: response.email,
        statusUserId: response.statusUserId,
        password: '',
        cpf:'',
        contactNumber:'',
        pixKey: response.pixKey,        
        name: response.name,
        profileImage: response.profileImage
      }
      this.user = response;
      
      this.setUserLocalStorage(user)
    })
  }

  updateUserProfileImage(newProfileImage: string): void {
    const user = this.getUser();
    user.profileImage = newProfileImage;
    this.setUserLocalStorage(user);
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')!) as User;
  }

  logout(): void {
    localStorage.removeItem('EChaAccessToken');
    localStorage.removeItem('user');
    window.location.reload();
  }
}
