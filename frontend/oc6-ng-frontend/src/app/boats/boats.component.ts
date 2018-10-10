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

  clearSelections(): void { this.paddlers.length = 0; }

  determineRoster(): void {
    var boats: Boat[];
    var roster = this.paddlers;
    var rosterSize = this.paddlers.length;
    var sortedRoster = roster.sort((a,b) => b.time_s - a.time_s); // sorts from slowest to fastest
    // OC6 seats six per boat
    var numBoats = Math.ceil(rosterSize / 6);
    console.log("Sorted roster = ", sortedRoster);
    console.log("Goal: generate ", numBoats, "boats");

    // create empty 2d array (array of boats, each boat is represented by an array)
    boats = new Array(numBoats);
    for (let i=0; i<boats.length; i++) {boats[i] = new Boat([]);} 

    // greedy implementation: simply iterates paddlers and inserts into boats
    // for (var i=0; i < rosterSize; i++) {
    //   boats[i%numBoats].addPaddler(sortedRoster[i]);
    // }

    // slightly less greedy implementation: iterates through paddlers and inserts into current fastest boat
    for (let i=0; i < rosterSize; i++) {
      let fastestBoat = boats.reduce((acc, currentValue) => {
        return (currentValue.getTimeSumInSeconds() < acc.getTimeSumInSeconds()) ? currentValue : acc;
      }, boats[0]);
      fastestBoat.addPaddler(sortedRoster[i]);
    }

    // logs each boat's time to console
    boats.map(function(x) {console.log("Boat time: ", x.getTimeSumInSeconds())});

    // display resulting boats to user
    for (var j=0; j<boats.length; j++) {
      let boat = boats[j];
      this.messageService.add("boat " + (j+1) + ": " + boat.toString());
    }
  }
}

class Boat {
  _roster:Paddler[] = [];

  constructor(roster:Paddler[]) { this._roster = roster; }

  get roster():Paddler[] { return this._roster; }

  set roster(input:Paddler[]) { this._roster = input; }

  toString(): String {
    let rosterNames = [];
    this.roster.map(function(x) {rosterNames.push(x.name)})
    return rosterNames.toString();
  }

  getTimeSumInSeconds(): number {
    let sum = 0;
    if (this.roster.length > 0) {
      this.roster.map(function(x) {sum += x.time_s});
    }
    return sum;
  }

  addPaddler(paddler: Paddler): void { this.roster.push(paddler); }
}
