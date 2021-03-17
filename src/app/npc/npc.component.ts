import { Component, OnInit } from '@angular/core';
import { Npc } from '../npc';
import { NPCS } from '../mock-npcs';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {
  npc: Npc = {
    id: 1,
    name: 'Windstorm'
  };

  npcs = NPCS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedNpc?: Npc;
  onSelect(npc: Npc): void {
  this.selectedNpc = npc;
}


}
