import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DoLogin } from '../interfaces/login';
import { ResponseAuth } from '../interfaces/responses/response-auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient)

  doLogin(login: DoLogin): Observable<ResponseAuth> {
    return this.http.post<ResponseAuth>(`${environment.apiUrl}/Auth/login`, login);
  }

  doLoginByGetUsers(doLogin: DoLogin): Observable<User> {
    return this.http.get<User[]>(`${environment.apiUrl}/user`).pipe(
      map(users => {
        const user = users.find(user => user.email === doLogin.email && user.password === doLogin.password);
        if (!user) {
          throw new Error('Usuário não encontrado');
        }
        return user;
      }),
      catchError(error => throwError(() => error))
    );
  }

}
