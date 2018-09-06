import { Component, OnInit, Input } from '@angular/core';
import { Paddler } from '../paddler';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

  @Input() paddlers: Paddler[];

  constructor(private messageService:MessageService) { }

  ngOnInit() {
  }

  onClick(): void {
    var roster = this.paddlers;
    var rosterSize = this.paddlers.length;
    var sortedRoster = roster.sort((a,b) => a.time - b.time);
    // OC6 seats six per boat
    var numBoats = Math.ceil(rosterSize / 6);
    console.log(sortedRoster);
    console.log(numBoats);

    // create empty 2d array (array of boats, each boat is represented by an array)
    var boats = new Array(numBoats);
    for (i=0;i<boats.length;i++) {boats[i]=[];} 

    // greedy implementation
    for (var i=0; i < rosterSize; i++) {
      boats[i%numBoats].push(sortedRoster[i].name);
    }

    console.log(boats);

    for (var j=0; j<boats.length; j++) {
      var boat = boats[j];
      this.messageService.add("boat " + (j+1) + ": " + boat);
    }
  }

  determineRoster(): void {
    var roster = this.paddlers;
    var rosterSize = this.paddlers.length;
    var sortedRoster = roster.sort((a,b) => a.time - b.time);
    // OC6 seats six per boat
    var numBoats = Math.ceil(rosterSize / 6);
    console.log(sortedRoster);
    console.log(numBoats);

    // create empty 2d array (array of boats, each boat is represented by an array)
    var boats = new Array(numBoats);
    for (i=0;i<boats.length;i++) {boats[i]=[];} 

    // greedy implementation
    for (var i=0; i < rosterSize; i++) {
      boats[i%numBoats].push(sortedRoster[i].name);
    }
    console.log(boats);
  }

}
