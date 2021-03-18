import { Component, OnInit, Input } from '@angular/core';
import { Npc } from '../npc';

@Component({
  selector: 'app-npc-detail',
  templateUrl: './npc-detail.component.html',
  styleUrls: ['./npc-detail.component.css']
})
export class NpcDetailComponent implements OnInit {
  @Input() npc?: Npc;

  constructor() { }

  ngOnInit(): void {
  }
  
}
