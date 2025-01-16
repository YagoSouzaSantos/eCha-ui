import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../../environments/environment';
import { Register } from '../../shared/interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient)

  createUser(register: Register): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.apiUrl}/user`, register, { observe: 'response' });
  }
}
