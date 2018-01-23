import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';

import { PADDLERS } from '../mock-paddlers';

@Component({
  selector: 'app-paddlers',
  templateUrl: './paddlers.component.html',
  styleUrls: ['./paddlers.component.css']
})
export class PaddlersComponent implements OnInit {
  
  paddlers = PADDLERS;
  selectedPaddler: Paddler;

  constructor() { }
  
  ngOnInit() {
  }
  
  onSelect(paddler: Paddler): void {
    this.selectedPaddler = paddler;
  }

}
