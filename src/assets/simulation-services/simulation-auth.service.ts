import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SnackbarService } from '../../app/shared/services/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class SimulationAuthService {
  private usersUrl = '/assets/db-test/user.json';

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.senha === password);
        if (user) {
          const { senha, ...userWithoutPassword } = user;
          sessionStorage.setItem('user', JSON.stringify(userWithoutPassword));
          return userWithoutPassword;
        } else {
          this.snackbarService.showError("E-mail ou senha incorretos.");
          throw new Error('Usuário não encontrado');
        }
      }),
      catchError(error => {
        this.snackbarService.showError('Erro ao ler o arquivo JSON');
        return throwError(() => new Error(error.message));
      })
    );
  }

  private getUsers(): Observable<any[]> {
    return this.http.get<{ users: any[] }>(this.usersUrl).pipe(
      map(response => response.users),
      catchError(error => {
        this.snackbarService.showError('Erro ao obter usuários');
        return throwError(() => new Error(error.message));
      })
    );
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  logout(): void {
    sessionStorage.removeItem('user');
  }
}
