import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Contribution } from '../interfaces/contribution';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {
  private http = inject(HttpClient);

  postContribution(newContribution: Contribution): Observable<Contribution> {
    return this.http.post<Contribution>(`${environment.apiUrl}/contribution`, newContribution);
  }

  putContribution(updatedContribution: Contribution): Observable<Contribution> {
    return this.http.put<Contribution>(`${environment.apiUrl}/contribution/${updatedContribution.id}`, updatedContribution);
  }
}
