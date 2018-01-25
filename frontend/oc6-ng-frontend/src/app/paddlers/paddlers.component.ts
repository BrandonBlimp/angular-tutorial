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
  selectedPaddlers: Paddler[] = [];

  constructor(private paddlerService: PaddlerService) { }
  
  ngOnInit() {
    this.getPaddlers();
  }
  
  onMouseEnter(paddler: Paddler): void {
    this.selectedPaddler = paddler;
  }

  onSelect(paddler: Paddler): void {
    // TODO: check paddler id, not the entire object
    var index: number = this.selectedPaddlers.indexOf(paddler);

    if (index >= 0) {
      this.selectedPaddlers.splice(index, 1)
    }
    else {
      this.selectedPaddlers.push(paddler);
    }
    console.log(this.selectedPaddlers);
  }

  getPaddlers(): void {
    this.paddlerService.getPaddlers().subscribe(paddlers => this.paddlers = paddlers);
  }

}
