import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'spa-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() textButton = "Clique aqui";
  @Output() clickChildren = new EventEmitter();
  textFilho = "Clicou no filho";


  constructor() { }

  ngOnInit(): void {
  }

  clicou() {
    this.clickChildren.emit(this.textFilho);
  }


}
