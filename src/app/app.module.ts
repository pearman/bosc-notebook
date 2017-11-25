import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { CovalentJsonFormatterModule } from '@covalent/core';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { CodeCardComponent } from './code-card/code-card.component';
import { NotebookComponent } from './notebook/notebook.component';
import { ResultCardComponent } from './result-card/result-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentCardComponent,
    CodeCardComponent,
    NotebookComponent,
    ResultCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    CovalentMarkdownModule,
    CovalentTextEditorModule,
    CovalentCodeEditorModule,
    CovalentJsonFormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
