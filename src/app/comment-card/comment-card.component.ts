import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { TdTextEditorComponent } from '@covalent/text-editor';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;

  options = {
    toolbar: false
  };

  @Input() editMode = true;
  @Output() editModeChange = new EventEmitter<boolean>();

  @Input() comment = '';
  @Output() commentChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  toggleEditMode(cardClicked) {
    if (this.editMode && !cardClicked) {
      if (this._textEditor) this.comment = this._textEditor.value;
      this.editMode = !this.editMode;
    } else if (!this.editMode && cardClicked) {
      this.editMode = !this.editMode;
    }
    this.editModeChange.emit(this.editMode);
  }

  emitCommentChange() {
    this.commentChange.emit(this.comment);
  }
}
