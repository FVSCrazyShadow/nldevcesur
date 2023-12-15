import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  standalone: true,
  imports: [],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent implements OnInit{

  public currentYear: number = 2022;

  ngOnInit(){
    this.currentYear = new Date().getFullYear();
  }
}
