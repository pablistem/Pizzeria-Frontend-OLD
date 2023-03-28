import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventSubject = new Subject<string>();
  public event: Observable<string> = this.eventSubject.asObservable();

  constructor() { }

  public sendEvent(event: string) {
    console.log(`EventService envió evento "${event}"`);
    this.eventSubject.next(event);
  }

}
