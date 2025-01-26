import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DoLogin } from '../interfaces/login';
import { ResponseAuth } from '../interfaces/responses/response-auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient)

  doLogin(login: DoLogin): Observable<ResponseAuth> {
    return this.http.post<ResponseAuth>(`${environment.apiUrl}/login`, login);
  }

}
