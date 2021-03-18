import { Component, OnInit } from '@angular/core';

import { Npc } from '../npc';
import { NpcService } from '../npc.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

  selectedNpc?: Npc;

  npcs: Npc[] = [];

  constructor(private npcService: NpcService, private messageService: MessageService) { }

  ngOnInit() { 
    this.getNpcs(); 
  }
  
  onSelect(npc: Npc): void {
  this.selectedNpc = npc;
  this.messageService.add(`NpcComponent: Selected hero id=${npc.id}`);
  
}

getNpcs(): void{
  this.npcService.getNpcs()
    .subscribe(npcs => this.npcs = npcs);
}

}
