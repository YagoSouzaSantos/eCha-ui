import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../../core/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl = 'assets/db-test/user.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.usersUrl).pipe(
      map(response => response.users)
    );
  }

  login(email: string, senha: string): Observable<boolean> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.senha === senha);
        return !!user;
      })
    );
  }
}
