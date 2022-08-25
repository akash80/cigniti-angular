import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-data-card',
  templateUrl: './sample-data-card.component.html',
  styleUrls: ['./sample-data-card.component.css']
})
export class SampleDataCardComponent implements OnInit {
  @Input() 
  title:any;

  constructor() { }

  ngOnInit(): void {
  }

}
