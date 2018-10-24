import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { Paddler } from '../paddler';

@Component({
  selector: 'app-paddler-create',
  templateUrl: './paddler-create.component.html',
  styleUrls: ['./paddler-create.component.css']
})
export class PaddlerCreateComponent implements OnInit {

  @Input() paddler: Paddler = new Paddler("", "Both", null);
  paddlingSides = ["Both", "Left", "Right"];

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.paddler);
    this.messageService.toggleCreatePopup();
  }

  get diagnostic() { return JSON.stringify(this.paddler); }

}
