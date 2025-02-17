import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Register } from '../../shared/interfaces/register';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient)

  createUser(register: Register): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user`, register);
  }
}
