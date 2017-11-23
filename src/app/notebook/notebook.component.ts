import { Component, OnInit } from '@angular/core';
import * as bosc from 'bosc';
import * as _ from 'lodash';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {
  cards = [];

  constructor() {}

  ngOnInit() {}

  removeCard(index) {
    this.cards.splice(index, 1);
  }

  addCodeCard(index = -1) {
    let card = { type: 'code', value: '' };
    if (index >= 0) this.cards.splice(index, 0, card);
    else this.cards.push(card);
  }

  addCommentCard(index = -1) {
    let card = { type: 'comment', value: '' };
    if (index >= 0) this.cards.splice(index, 0, card);
    else this.cards.push(card);
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

  evalCard(card, index) {
    let result = bosc.eval(card.value);
    console.log(result);
    let newCard = {
      type: 'result',
      value: this.prune(result)
    };
    this.cards.splice(index + 1, 0, newCard);
  }
}
