import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code-card',
  templateUrl: './code-card.component.html',
  styleUrls: ['./code-card.component.css']
})
export class CodeCardComponent implements OnInit {
  cardHeight = 50;

  @Input() code = '';
  @Output() codeChange = new EventEmitter<string>();

  options = {
    scrollBeyondLastLine: false
  };

  constructor() {}

  ngOnInit() {}

  expand(amount) {
    this.cardHeight = Math.max(50, this.cardHeight + amount);
  }

  emitCodeChange() {
    this.codeChange.emit(this.code);
  }
}
