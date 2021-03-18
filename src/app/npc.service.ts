import { Injectable } from '@angular/core';
import { Npc } from './npc';
import { NPCS } from './mock-npcs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NpcService {

  constructor(private messageService: MessageService) { }

  getNpcs(): Observable<Npc[]> {
    const npcs = of(NPCS);
    this.messageService.add('NpcService: fetched npcs');
    return npcs;
  }

}




