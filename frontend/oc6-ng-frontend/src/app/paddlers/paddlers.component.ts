import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';
import { PaddlerService } from '../paddler.service';

@Component({
  selector: 'app-paddlers',
  templateUrl: './paddlers.component.html',
  styleUrls: ['./paddlers.component.css']
})
export class PaddlersComponent implements OnInit {
  
  paddlers: Paddler[];
  selectedPaddler: Paddler;

  constructor(private paddlerService: PaddlerService) { }
  
  ngOnInit() {
    this.getPaddlers();
  }
  
  onSelect(paddler: Paddler): void {
    this.selectedPaddler = paddler;
  }

  getPaddlers(): void {
    this.paddlerService.getPaddlers().subscribe(paddlers => this.paddlers = paddlers);
  }

}
