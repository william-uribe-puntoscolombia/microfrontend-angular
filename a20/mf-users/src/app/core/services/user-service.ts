import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env';
import { User } from '@pages/users-list/users-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user`);
  }
}
