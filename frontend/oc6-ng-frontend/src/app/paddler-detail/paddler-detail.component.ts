import { Component, OnInit, Input } from '@angular/core';
import { Paddler } from '../paddler';

@Component({
  selector: 'app-paddler-detail',
  templateUrl: './paddler-detail.component.html',
  styleUrls: ['./paddler-detail.component.css']
})
export class PaddlerDetailComponent implements OnInit {

  @Input() paddler: Paddler;

  constructor() { }

  ngOnInit() {
  }

}
