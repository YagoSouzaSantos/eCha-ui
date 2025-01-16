import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../../environments/environment';
import { Register } from '../../shared/interfaces/register';
import { ResponseAuth } from '../interfaces/responses/response-auth';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient)

  createUser(register: Register): Observable<ResponseAuth> {
    return this.http.post<ResponseAuth>(`${environment.apiUrl}/user`, register);
  }
}
