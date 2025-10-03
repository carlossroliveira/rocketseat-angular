import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { IAuthSuccessResponse } from '../interfaces/auth-success-response'
import { ILoginSuccessResponse } from '../interfaces/login-success-response'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _httpClient = inject(HttpClient);

  validateUser(): Observable<IAuthSuccessResponse> {
    return this._httpClient.get<IAuthSuccessResponse>(`${environment.apiUrl}/protected`);
  }

  login(email: string, password: string): Observable<ILoginSuccessResponse> {
    const body = { email, password };

    return this._httpClient.post<ILoginSuccessResponse>(`${environment.apiUrl}/users/login`, body);
  }
}
