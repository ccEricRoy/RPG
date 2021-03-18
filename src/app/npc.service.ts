import { Injectable } from '@angular/core';
import { Npc } from './npc';
import { NPCS } from './mock-npcs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpcService {

  constructor() { }

  getNpcs(): Observable<Npc[]> {
    const npcs = of(NPCS);
    return npcs;
  }

}




