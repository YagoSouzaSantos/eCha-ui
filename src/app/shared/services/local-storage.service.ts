import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  protected saveTokensLocalstorage(token: string): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('EChaAccessToken', token);
    } else {
      console.warn('sessionStorage não está disponível neste ambiente.');
    }
  }

  // protected getAccessToken(): string | any {
  //   return sessionStorage.getItem('FanturyManagerDeskToken');
  // }

  // protected getRefreshToken(): string | any {
  //   return sessionStorage.getItem('FanturyManagerDeskRefreshToken');
  // }

  // static getCompanySelected(): { codEmp: string, name: string } | string {
  //   const company = sessionStorage.getItem('FanturyManagerCompanySelected');
  //   if (company) {
  //     return JSON.parse(company)
  //   }
  //   return { codEmp: '000', name: '' }
  // }

  // static clearCompanySelected(): void {
  //   sessionStorage.removeItem('FanturyManagerCompanySelected')
  // }

  // protected clearTokensSessionStorage(): void {
  //   sessionStorage.removeItem('FanturyManagerDeskToken');
  //   sessionStorage.removeItem('FanturyManagerDeskRefreshToken');
  //   sessionStorage.removeItem('FanturyManagerCompanySelected')
  // }
}
