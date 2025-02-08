import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends LocalStorageService {

  // logout(){
  //   this.clearTokensSessionStorage()
  //   this.mainLayoutService.setLayoutMainState(false)
  //   this.JWTService.clearToken()
  //   this.route.navigate(['/authentication'])
  // }

  setTokensLocalStorage(token: string) {
      this.saveTokensLocalstorage(token)
  }

  setUserLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
