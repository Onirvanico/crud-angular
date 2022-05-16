import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-learning-pipe',
  templateUrl: './learning-pipe.component.html',
  styleUrls: ['./learning-pipe.component.css']
})
export class LearningPipeComponent implements OnInit {

  number = 0;
  text = "Hello World!";
  date = Date();

  listWords = ["Minha", "Velha", "Traga", "Meu", "Jantar", "Sopa",
               "Uva", "Nabo", "Pão"];

  constructor() { }

  ngOnInit(): void {
  }

}
