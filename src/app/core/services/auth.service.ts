import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Credentials } from '../../shared/interfaces/credentials';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

export type AuthUser = User | null | undefined;

interface AuthState {
  user: AuthUser;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  private router = inject(Router)

  private userSignal: WritableSignal<AuthUser> = signal<AuthUser>(null);

  user() {
    return this.userSignal.asReadonly();
  }

  login(credentials: Credentials): Observable<AuthUser> {
    const { email, password } = credentials;

    return this.http.get<AuthUser[]>(`${environment.apiUrl}/users`, {
      params: { email, password }
    }).pipe(
      map((users) => {
        const user = users.length ? users[0] : null;

        if (user) {
          this.userSignal.set(user);
          return user;
        } else {
          throw new Error('Usuário ou senha inválidos');
        }
      }),
      catchError((error) => {
        this.userSignal.set(null);
        if (error.message === 'Usuário ou senha inválidos') {
          return throwError(() => new Error('Usuário ou senha inválidos'));
        }
        return throwError(() => new Error('Erro no servidor. Tente novamente mais tarde.'));
      })
    );
  }

  logout(): void {
    this.userSignal.set(null);
    this.router.navigate(['auth/login'])
  }

  isLoggedIn(): boolean {
    return this.userSignal() != null;
  }

}
