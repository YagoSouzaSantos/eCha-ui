import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  protected saveTokensLocalstorage(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('EChaAccessToken', token);
    } else {
      console.warn('localStorage não está disponível neste ambiente.');
    }
  }

  protected getAccessToken(): string | any {
    return localStorage.getItem('EChaAccessToken');
  }

}
