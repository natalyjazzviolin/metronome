import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FrequencyService {
  private subject = new Subject<number>();
  constructor() {}

  //Send frequency as a number
  sendFrequency(frequency: number) {
    this.subject.next(frequency);
  }
  //Receive frequency as a number and observe
  receiveFrequency(): Observable<number> {
    return this.subject.asObservable();
  }
}
