import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private HttpClient: HttpClient) { }

  getAll(){
    return this.HttpClient.get<Fruits[]>('http://localhost:3000/fruits')
  }
}
