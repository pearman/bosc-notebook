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

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css'],
  animations: [
    trigger('slideInOut', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('right', style({ transform: 'translateX(0)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class NotebookComponent implements OnInit {
  cards = [];
  namespace = bosc.newScope();
  showScope = false;

  constructor() {}

  ngOnInit() {}

  removeCard(index) {
    this.cards.splice(index, 1);
  }

  addCodeCard(index = -1) {
    let card = { type: 'code', value: '', animState: 'right' };
    if (index >= 0) this.cards.splice(index, 0, card);
    else this.cards.push(card);
  }

  addCommentCard(index = -1) {
    let card = { type: 'comment', value: '', animState: 'right' };
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
      console.log(this.namespace);
      if (_.get(this.cards, [index + 1, 'type']) === 'result')
        this.cards[index + 1] = newCard;
      else this.cards.splice(index + 1, 0, newCard);
    } catch (err) {
      console.log(err);
      let newCard = {
        type: 'result',
        value: err,
        animState: 'right'
      };
      console.log(this.cards);
      if (_.get(this.cards, [index + 1, 'type']) === 'result')
        this.cards[index + 1] = newCard;
      else this.cards.splice(index + 1, 0, newCard);
    }
  }

  prune(table) {
    if (_.isNil(table)) return table;
    if (_.isString(table)) return table;
    let pruned = _.omitBy(
      table,
      (entry, key) => _.has(entry, '_eval') || key === '_context'
    );
    if (_.has(pruned, 'value')) return _.get(pruned, 'value');
    let extraPruned = _.mapValues(pruned, value => {
      if (_.isEqual(value, table)) return '[self]';
      if (_.isObject(value)) return this.prune(value);
      return value;
    });
    return extraPruned;
  }
}
