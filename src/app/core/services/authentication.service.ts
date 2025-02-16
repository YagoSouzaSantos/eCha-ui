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

  getTokensLocalStorage(): string {
    return this.getAccessToken()
  }

  setUserLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isUserAuthenticated(): boolean {
    return localStorage.getItem('EChaAccessToken') !== null;
  }

  setUserByToken(): User {
    const token = localStorage.getItem('EChaAccessToken');

    const payload = JSON.parse(atob(token!.split('.')[1]));

    const userData = JSON.parse(payload.UserData);

    const user: User = {
      id: userData.Id,
      email: userData.Email,
      statusUserId: userData.StatusUserId,
      password: userData.Password,
      cpf: userData.Cpf,
      pixKey: userData.PixKey,
      contactNumber: userData.ContactNumber,
      name: userData.Name,
      profileImage: userData.ProfileImage
    };

    this,this.setUserLocalStorage(user)

    return user;
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
    window.location.reload();
  }
}
