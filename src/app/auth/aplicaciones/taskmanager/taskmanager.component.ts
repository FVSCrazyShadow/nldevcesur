import { Component, OnInit } from '@angular/core';
import { HeadComponent } from '../../../head/head.component';
import { FootComponent } from '../../../footer/foot/foot.component';
import { TaskManagerPanelTM } from './paneltm/paneltm.component';

@Component({
  selector: 'app-taskmanager',
  templateUrl: 'taskmanager.component.html',
  standalone: true,
  imports: [HeadComponent,FootComponent,TaskManagerPanelTM]
})

export class TaskManager implements OnInit {
  constructor() { }

  ngOnInit() { }
}
