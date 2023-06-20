import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private eventSubject = new Subject<string>();
  public event: Observable<string> = this.eventSubject.asObservable();

  constructor() { }

  public sendEvent(event: string) {
    this.eventSubject.next(event);
  }
}
