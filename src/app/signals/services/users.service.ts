import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SingleUserReponse, User } from '../interfaces/user-request.interface';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );
  private baseUrl = 'https://reqres.in/api/users';

  getUserById( id: number ): Observable<User> {
    return this.http.get<SingleUserReponse>(`${ this.baseUrl }/${ id }`)
      .pipe(
        map( response => response.data ),
        tap( console.log ),
      );
  }
}
