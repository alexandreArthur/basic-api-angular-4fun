import { animalFull } from '../models/animalFull.dto';
import { API_CONFIG } from './../config/api.config';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { animalNew } from '../models/animalNew.dto';
import { animal } from '../models/animal.dto';

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService implements OnInit{

  ngOnInit(){
    this.getAnimais();
  }

  constructor(private http: HttpClient) { }

  public getAnimais(): Observable<animal[]>{
    return this.http.get<animal[]>(`${API_CONFIG.baseUrl}/animais/findAll`);
  }

  public addAnimal(animalFull: animalFull): Observable<animalFull>{
    return this.http.post<animalFull>(`${API_CONFIG.baseUrl}`, animalFull);
  }

  public putAnimal(animalId: number, animalNew: animalNew): Observable<animalNew>{
    return this.http.put<animalNew>(`${API_CONFIG.baseUrl}/${animalId}`, animalNew);
  }

  public deleteAnimal(animalId: number): Observable<void>{
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/${animalId}`);
  }
}
