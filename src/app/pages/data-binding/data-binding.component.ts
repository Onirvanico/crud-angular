import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  natureImage = "https://i0.wp.com/techwek.com/wp-content/uploads/2021/01/paisagens-da-naturesa.jpg?resize=1024%2C685&ssl=1";
  width = 500;
  height = 500;
  constructor() { }

  ngOnInit(): void {
  }

  clicouNoFilho(text: any) {
    console.log(text);
  }

}
