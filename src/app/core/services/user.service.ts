import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Register } from '../../shared/interfaces/register';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  createUser(register: Register): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user`, register);
  }

  getUserNameById(id: number): Observable<string> {
    return this.http.get<User[]>(`${environment.apiUrl}/user`).pipe(
      map(users => {
        const user = users.find(user => user.id === id);
        if (!user) {
          throw new Error('Usuário não encontrado');
        }
        return user.name;
      }),
      catchError(error => throwError(() => new Error(`Erro ao buscar usuário: ${error.message}`)))
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user/${id}`);
  }

  updateUser(id: number, userData: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/user/${id}`, userData);
  }
}
