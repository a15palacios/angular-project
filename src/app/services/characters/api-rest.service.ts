import { Injectable }     from '@angular/core';
import {HttpClient}       from '@angular/common/http';
import { Observable }     from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private httpClient: HttpClient) {
    
  }

  getCharacterData(): Observable<any> {
    const data = this.httpClient.get<any>('https://rickandmortyapi.com/api/character');
    
    // if(!data){
    //   console.log('Error en la llamada');
    // }

    return data;
  }
}
