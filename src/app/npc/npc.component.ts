import { Component, OnInit } from '@angular/core';
import { Npc } from '../npc';

import { NpcService } from '../npc.service';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {
  selectedNpc?: Npc;

  npcs: Npc[] = [];

  constructor(private npcService: NpcService) { }

  ngOnInit() { 
    this.getNpcs(); 
  }
  
  onSelect(npc: Npc): void {
  this.selectedNpc = npc;
}

getNpcs(): void{
  this.npcService.getNpcs()
    .subscribe(npcs => this.npcs = npcs);
}

}
