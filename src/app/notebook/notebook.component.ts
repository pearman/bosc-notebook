import { Component, OnInit } from '@angular/core';
import * as bosc from 'bosc';
import * as _ from 'lodash';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

import { defaultNotebook } from './default-notebook';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css'],
  animations: [
    trigger('slideInOutLeft', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('right', style({ transform: 'translateX(0)' })),
      transition('* => *', animate(200))
    ]),
    trigger('slideInOutRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('right', style({ transform: 'translateX(0)' })),
      transition('* => *', animate(200))
    ])
  ]
})
export class NotebookComponent implements OnInit {
  cards = [];
  namespace = bosc.newScope();
  showScope = false;
  openFile = false;
  file = '';
  notebookTitle = 'New Notebook';

  constructor(private sanitizer: DomSanitizer) {
    this.notebookTitle = defaultNotebook.title;
    this.cards = defaultNotebook.cards;
  }

  ngOnInit() {}

  saveData() {
    return this.sanitizer.bypassSecurityTrustUrl(
      `data: 'text/json;charset=utf-8,` +
        encodeURIComponent(
          JSON.stringify({
            title: this.notebookTitle,
            cards: this.cards
          })
        )
    );
  }

  loadFile(event) {
    let file = _.get(event, ['target', 'files', 0]);
    if (file) {
      let reader = new FileReader();
      let textFile = event.target.files[0];
      reader.readAsText(textFile);
      reader.onload = file => {
        let result: any = JSON.parse(
          _.get(
            file,
            ['currentTarget', 'result'],
            `{title:'New Notebook', cards: []}`
          )
        );
        this.notebookTitle = result.title;
        this.cards = result.cards;
      };
    }
  }

  removeCard(index) {
    this.cards.splice(index, 1);
  }

  addCodeCard(index = -1) {
    let card = { type: 'code', value: '', height: 50 };
    if (index >= 0) this.cards.splice(index, 0, card);
    else this.cards.push(card);
  }

  addCommentCard(index = -1) {
    let card = { type: 'comment', value: '', editMode: true };
    if (index >= 0) this.cards.splice(index, 0, card);
    else this.cards.push(card);
  }

  evalCard(card, index) {
    try {
      let result = bosc.eval(card.value, this.namespace);
      let newCard = {
        type: 'result',
        value: this.prune(result),
        animState: 'right'
      };
      if (_.get(this.cards, [index + 1, 'type']) === 'result')
        this.cards[index + 1] = newCard;
      else this.cards.splice(index + 1, 0, newCard);
    } catch (err) {
      let newCard = {
        type: 'result',
        value: this.prune(err),
        animState: 'right'
      };
      if (_.get(this.cards, [index + 1, 'type']) === 'result')
        this.cards[index + 1] = newCard;
      else this.cards.splice(index + 1, 0, newCard);
    }
  }

  prune(table) {
    if (_.isNil(table)) return table;
    let pruned = _.omitBy(
      table,
      (entry, key) => _.has(entry, '_eval') || key === '_context'
    );
    if (_.has(pruned, 'value')) return _.get(pruned, 'value');
    let extraPruned = _.mapValues(pruned, value => {
      if (_.isString(value)) return `Symbol[ ${value} ]`;
      if (_.isEqual(value, table)) return '[ self ]';
      if (_.isObject(value)) return this.prune(value);
      return value;
    });
    return extraPruned;
  }
}
