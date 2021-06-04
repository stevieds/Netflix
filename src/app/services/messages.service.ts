import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messageSource = new BehaviorSubject(0);
  currentFilm = this.messageSource.asObservable();



  constructor() { }

  changeFilm(message: number) {
    this.messageSource.next(message)
  }
}
