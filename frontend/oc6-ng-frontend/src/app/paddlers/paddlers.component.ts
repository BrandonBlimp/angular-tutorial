import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';

@Component({
  selector: 'app-paddlers',
  templateUrl: './paddlers.component.html',
  styleUrls: ['./paddlers.component.css']
})
export class PaddlersComponent implements OnInit {

  paddler: Paddler = {
    id: 1,
    name: 'Alex',
    paddlingSide: 'Both',
    time: 10
  }

  constructor() { }

  ngOnInit() {
  }

}
