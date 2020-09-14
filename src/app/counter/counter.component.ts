import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works!{{counter}}
    </p>

  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  counter : number=42;
  constructor() { }

  ngOnInit(): void {
  }

}
