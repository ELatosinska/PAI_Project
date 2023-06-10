import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private httpClient: HttpClient) {
  }
  

  public getUsers() {
    return this.httpClient.get('https://reqres.in/api/users')
  }

  public getGalleries() {
    return this.httpClient.get('http://localhost:3001/gallery')}
}
