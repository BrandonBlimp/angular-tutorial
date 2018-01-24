import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Paddler } from './paddler';
import { PADDLERS } from './mock-paddlers';

@Injectable()
export class PaddlerService {

  constructor() { }

  getPaddlers(): Observable<Paddler[]> {
    return of(PADDLERS);
  }

}
