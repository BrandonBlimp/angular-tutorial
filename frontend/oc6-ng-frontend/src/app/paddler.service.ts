import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Paddler } from './paddler';
import { PADDLERS } from './mock-paddlers';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PaddlerService {

  constructor( private messageService: MessageService, private http: HttpClient) { }

  private paddlersUrl = 'api/paddlers';

  // private log(message: string) {
  //   this.messageService.add('PaddlerService: ${message}');
  // }

  /** GET paddlers from the server */
  getPaddlers(): Observable<Paddler[]> {
    return this.http.get<Paddler[]>(this.paddlersUrl)
  }

}
