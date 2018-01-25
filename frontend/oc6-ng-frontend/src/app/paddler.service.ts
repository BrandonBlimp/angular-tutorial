import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Paddler } from './paddler';
import { PADDLERS } from './mock-paddlers';
import { MessageService } from './message.service';

@Injectable()
export class PaddlerService {

  constructor(private messageService:MessageService) { }

  getPaddlers(): Observable<Paddler[]> {
    return of(PADDLERS);
  }

}
