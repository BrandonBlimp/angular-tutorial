import { Component, OnInit, Input } from '@angular/core';
import { Paddler } from '../paddler';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

  @Input() paddlers: Paddler[];

  constructor() { }

  ngOnInit() {
  }

}
