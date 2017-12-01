webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-notebook></app-notebook>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__covalent_markdown__ = __webpack_require__("../../../../@covalent/markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__covalent_text_editor__ = __webpack_require__("../../../../@covalent/text-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__covalent_code_editor__ = __webpack_require__("../../../../@covalent/code-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__comment_card_comment_card_component__ = __webpack_require__("../../../../../src/app/comment-card/comment-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__code_card_code_card_component__ = __webpack_require__("../../../../../src/app/code-card/code-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__notebook_notebook_component__ = __webpack_require__("../../../../../src/app/notebook/notebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__result_card_result_card_component__ = __webpack_require__("../../../../../src/app/result-card/result-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__comment_card_comment_card_component__["a" /* CommentCardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__code_card_code_card_component__["a" /* CodeCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__notebook_notebook_component__["a" /* NotebookComponent */],
                __WEBPACK_IMPORTED_MODULE_14__result_card_result_card_component__["a" /* ResultCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__covalent_markdown__["a" /* CovalentMarkdownModule */],
                __WEBPACK_IMPORTED_MODULE_7__covalent_text_editor__["a" /* CovalentTextEditorModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_code_editor__["a" /* CovalentCodeEditorModule */],
                __WEBPACK_IMPORTED_MODULE_5__covalent_core__["a" /* CovalentJsonFormatterModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/code-card/code-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host>>>mat-card {\n  padding: 5px;\n  margin: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/code-card/code-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <td-code-editor [(ngModel)]=\"code\" (ngModelChange)=\"emitCodeChange()\" [automaticLayout]=\"true\" [style.height]=\"'' + cardHeight + 'px'\"\n    [editorOptions]=\"options\" theme=\"vs\" flex language=\"bosc\">\n  </td-code-editor>\n\n  <button mat-button (click)=\"expand(50)\">Expand</button>\n  <button mat-button (click)=\"expand(-50)\">Shrink</button>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/code-card/code-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeCardComponent = (function () {
    function CodeCardComponent() {
        this.cardHeightChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.cardHeight = 50;
        this.code = '';
        this.codeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.options = {
            scrollBeyondLastLine: false,
            fontSize: 14
        };
    }
    CodeCardComponent.prototype.ngOnInit = function () { };
    CodeCardComponent.prototype.expand = function (amount) {
        this.cardHeight = Math.max(50, this.cardHeight + amount);
        this.cardHeightChange.emit(this.cardHeight);
    };
    CodeCardComponent.prototype.emitCodeChange = function () {
        this.codeChange.emit(this.code);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CodeCardComponent.prototype, "cardHeightChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CodeCardComponent.prototype, "cardHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CodeCardComponent.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CodeCardComponent.prototype, "codeChange", void 0);
    CodeCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-code-card',
            template: __webpack_require__("../../../../../src/app/code-card/code-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/code-card/code-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CodeCardComponent);
    return CodeCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comment-card/comment-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host>>>mat-card {\n  padding: 0px;\n  margin: 0px;\n  background: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment-card/comment-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"toggleEditMode(true)\">\n\n  <div *ngIf=\"editMode\">\n    <button mat-button (click)=\"toggleEditMode(false); $event.stopPropagation()\">\n      Done\n    </button>\n    <br />\n  </div>\n  <td-text-editor *ngIf=\"editMode\" [(ngModel)]=\"comment\" (ngModelChange)=\"emitCommentChange()\" [options]=\"options\" #textEditor></td-text-editor>\n  <div *ngIf=\"!editMode\" style=\"padding: 20px;\">\n    <td-markdown [content]=\"comment\"></td-markdown>\n  </div>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/comment-card/comment-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_text_editor__ = __webpack_require__("../../../../@covalent/text-editor/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentCardComponent = (function () {
    function CommentCardComponent() {
        this.options = {
            toolbar: false
        };
        this.editMode = true;
        this.editModeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.comment = '';
        this.commentChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CommentCardComponent.prototype.ngOnInit = function () { };
    CommentCardComponent.prototype.toggleEditMode = function (cardClicked) {
        if (this.editMode && !cardClicked) {
            if (this._textEditor)
                this.comment = this._textEditor.value;
            this.editMode = !this.editMode;
        }
        else if (!this.editMode && cardClicked) {
            this.editMode = !this.editMode;
        }
        this.editModeChange.emit(this.editMode);
    };
    CommentCardComponent.prototype.emitCommentChange = function () {
        this.commentChange.emit(this.comment);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('textEditor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__covalent_text_editor__["b" /* TdTextEditorComponent */])
    ], CommentCardComponent.prototype, "_textEditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentCardComponent.prototype, "editMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CommentCardComponent.prototype, "editModeChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentCardComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CommentCardComponent.prototype, "commentChange", void 0);
    CommentCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comment-card',
            template: __webpack_require__("../../../../../src/app/comment-card/comment-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comment-card/comment-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentCardComponent);
    return CommentCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notebook/default-notebook.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultNotebook; });
var defaultNotebook = {
    title: 'Getting Started',
    cards: [
        {
            type: 'comment',
            value: "### Bosc\n> **A data-driven, object-oriented scripting language**\n\nLet's start by looking at a high level example, then let's explore the language. **Hit the play button to run each code block**.",
            editMode: false
        },
        { type: 'code', value: "5 times #([x] 5 - x) push 'Boom'\n", height: 50 },
        {
            type: 'comment',
            value: "### Objects (or Tables) \n#### Everything is an Object\nIn Bosc there is only one data structure: the **table**. Everything is a table, including primitives like `3`, `'Hello'`, and `true`. Hence forth I will use the terms object and table interchangeably.\n\nThe table is most similar to a map or dictionary in other languages. However, it also acts as an array by letting numerical keys represent list entries.\n\nThere are three ways to define a table: as a **list** `[1 2 3]`, as a **map** `{key 'value'}`, and as a **function** `#([args] symbol1 symbol2)`. In the end though, the different forms just choose how each value is assigned to a key. Run the example bellow to explore the resulting tables of each table literal.\n\nDon't worry about the `local : [variable]` we will come back to that later.",
            editMode: false
        },
        {
            type: 'code',
            value: "local : list [1 2 3] ,\nlocal : map  { name 'Gabe' age 23 } ,\nlocal : fun  #([x] x + 1)",
            height: 100
        },
        {
            type: 'comment',
            value: '### The Interpreter\n\nThe interpreter is very simple and for the most part has one expectation about the structure of your code. Let me explain:\n\n> 1. The first symbol consumed should be an **object**, for example `3`.\n> 2. The second symbol should be a **method** of the preceding object, for example `+`.\n> 3. The next zero or more symbols should be the **arguments** for the previous method, for example `4`.\n> 4. Once the method is evaluated it takes the returned object and returns to state 2 (expecting another method).\n\n**Note that symbols are delimited by spaces.**\n\nFollowing the above process, lets explore the code block bellow:\n```\n3 + 4 / 2\n```\nIn this example `3` is our object, `+` is our method, and  `4` is the single argument (to the `+` method). This returns the object `7`, which subsequently has the method `/` which takes the argument `2`. The end result is the object `3.5`.\n\n',
            editMode: false
        },
        { type: 'code', value: '3 + 4 / 2', height: 50 },
        {
            type: 'comment',
            value: '### Storing data with `local`\nLike everything else in Bosc, **`local` is a table**. Every table comes preloaded with the `:` method. The `:` method takes two arguments, a key and a value, and creates that entry in the source object. It then returns the object manipulated. So, like in our earlier example, when we say `local : x 3` we are assigning the value `3` to the `x` key of our local object. \n\n`local` receives some special treatment from the interpreter. When the interpreter encounters an unknown symbol (variable name) it will check the `local` table for that key. If found it will inject the corresponding value in place of the symbol. Look at the example bellow. After we have defined x, we can use it as symbol in future statements.\n\n`local` also has some special properties to enable **lexical scoping** -- we will explore this more when we learn how to define methods.\n\n### A quick note about `,`\n`,` is another preloaded method that comes with every object in Bosc. It takes one argument -- and then returns that argument. This allows one to switch the object they are currently operating on. In the example below, after the statement `local : x 3`, I no longer want to call any methods on `local`. Therefore, by using the `,` method I can switch gears and make `x` my source object.',
            editMode: false
        },
        { type: 'code', value: 'local : x 3 ,\nx + 10', height: 50 },
        {
            type: 'comment',
            value: '### Functions/Methods\nA function is list of symbols with an `args` key that defines a list of arguments. The short hand to define a function is `#([args] symbols)`.\n\n### The `$( ... )` special form\nThe only exception to the object-method-argument rule is the special form `$(function arg1 arg2)`. This allows one to call a function without having to reference `local`. That being said, there is never a strict requirement to do so. This is equivalent to `local function arg1 arg2`.\n',
            editMode: false
        },
        {
            type: 'code',
            value: 'local : func #([x] x + 1) ,\n$(func 5)',
            height: 100
        }
    ]
};


/***/ }),

/***/ "../../../../../src/app/notebook/notebook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".small-icon {\n  font-size: 14pt;\n  color: white;\n}\n\n:host>>>.td-key {\n  color: grey;\n}\n\n:host>>>.value {\n  color: black;\n}\n\n:host>>>.number {\n  color: green;\n}\n\n:host>>>.boolean {\n  color: mediumslateblue;\n}\n\n:host>>>.string {\n  color: orangered;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notebook/notebook.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex; height: 100%\">\n  <div [style.width]=\"showScope ? '75%' : '100%'\" style=\"height: 100%; overflow:auto; background: dimgrey\">\n    <mat-toolbar [style.width]=\"showScope ? '75%' : '100%'\" color=\"primary\" style=\"position: fixed; z-index: 10000\">\n      <mat-form-field color=\"accent\">\n        <input matInput [(ngModel)]=\"notebookTitle\">\n      </mat-form-field>\n      <!-- <button mat-icon-button (save)=\"save()\">\n        <mat-icon>insert_drive_file</mat-icon>\n      </button> -->\n      <a mat-icon-button [href]=\"saveData()\" [download]=\"notebookTitle + '.json'\">\n        <mat-icon>save</mat-icon>\n      </a>\n      <button mat-icon-button (click)=\"openFile = !openFile\">\n        <mat-icon>folder</mat-icon>\n      </button>\n      <input [@slideInOutRight] *ngIf=\"openFile\" type='file' [(ngModel)]=\"file\" (change)=\"loadFile($event)\" />\n      <div style=\"width: 30px\"></div>\n      <div style=\"display: flex; width: 100%\"></div>\n      <button mat-icon-button (click)=\"showScope = !showScope\">\n        <mat-icon *ngIf=\"!showScope\">keyboard_arrow_left</mat-icon>\n        <mat-icon *ngIf=\"showScope\">keyboard_arrow_right</mat-icon>\n      </button>\n    </mat-toolbar>\n    <div style=\"height: 64px\"></div>\n    <div *ngFor=\" let card of cards; let index=index\" [@slideInOutLeft]>\n      <div style=\"display:flex\">\n        <button mat-icon-button (click)=\"removeCard(index)\">\n          <mat-icon (click)=\"removeCard(index)\" class=\"small-icon\">close</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"addCodeCard(index) \">\n          <mat-icon class=\"small-icon\">code</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"addCommentCard(index) \">\n          <mat-icon class=\"small-icon\">comment</mat-icon>\n        </button>\n        <button *ngIf=\"card.type === 'code'\" mat-icon-button (click)=\"evalCard(card, index) \">\n          <mat-icon class=\"small-icon\">play_arrow</mat-icon>\n        </button>\n        <span style=\"display: flex; width:100%\"></span>\n        <b style=\"margin: 10px; color:white\">{{card.type}}</b>\n      </div>\n      <app-code-card *ngIf=\"card.type === 'code' \" [(code)]=\"card.value\" [(cardHeight)]=\"card.height\"></app-code-card>\n      <app-comment-card *ngIf=\"card.type ==='comment' \" [(comment)]=\"card.value\" [(editMode)]=\"card.editMode\"></app-comment-card>\n      <app-result-card *ngIf=\"card.type === 'result'\" [data]=\"card.value\"></app-result-card>\n    </div>\n    <div style=\"margin: 10px; color: white\">\n      Add a new card:\n      <button mat-icon-button (click)=\"addCodeCard() \">\n        <mat-icon>code</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"addCommentCard() \">\n        <mat-icon>comment</mat-icon>\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"showScope\" style=\"height: 100%; background: white; width: 25%;\">\n    <td-json-formatter [data]=\"prune(namespace[0])\" [levelsOpen]=\"1\">\n    </td-json-formatter>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/notebook/notebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotebookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bosc__ = __webpack_require__("../../../../bosc/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bosc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bosc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_notebook__ = __webpack_require__("../../../../../src/app/notebook/default-notebook.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotebookComponent = (function () {
    function NotebookComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.cards = [];
        this.namespace = __WEBPACK_IMPORTED_MODULE_1_bosc__["newScope"]();
        this.showScope = false;
        this.openFile = false;
        this.file = '';
        this.notebookTitle = 'New Notebook';
        this.notebookTitle = __WEBPACK_IMPORTED_MODULE_5__default_notebook__["a" /* defaultNotebook */].title;
        this.cards = __WEBPACK_IMPORTED_MODULE_5__default_notebook__["a" /* defaultNotebook */].cards;
    }
    NotebookComponent.prototype.ngOnInit = function () { };
    NotebookComponent.prototype.saveData = function () {
        return this.sanitizer.bypassSecurityTrustUrl("data: 'text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify({
                title: this.notebookTitle,
                cards: this.cards
            })));
    };
    NotebookComponent.prototype.loadFile = function (event) {
        var _this = this;
        var file = __WEBPACK_IMPORTED_MODULE_2_lodash__["get"](event, ['target', 'files', 0]);
        if (file) {
            var reader = new FileReader();
            var textFile = event.target.files[0];
            reader.readAsText(textFile);
            reader.onload = function (file) {
                var result = JSON.parse(__WEBPACK_IMPORTED_MODULE_2_lodash__["get"](file, ['currentTarget', 'result'], "{title:'New Notebook', cards: []}"));
                _this.notebookTitle = result.title;
                _this.cards = result.cards;
            };
        }
    };
    NotebookComponent.prototype.removeCard = function (index) {
        this.cards.splice(index, 1);
    };
    NotebookComponent.prototype.addCodeCard = function (index) {
        if (index === void 0) { index = -1; }
        var card = { type: 'code', value: '', height: 50 };
        if (index >= 0)
            this.cards.splice(index, 0, card);
        else
            this.cards.push(card);
    };
    NotebookComponent.prototype.addCommentCard = function (index) {
        if (index === void 0) { index = -1; }
        var card = { type: 'comment', value: '', editMode: true };
        if (index >= 0)
            this.cards.splice(index, 0, card);
        else
            this.cards.push(card);
    };
    NotebookComponent.prototype.evalCard = function (card, index) {
        try {
            var result = __WEBPACK_IMPORTED_MODULE_1_bosc__["eval"](card.value, this.namespace);
            var newCard = {
                type: 'result',
                value: this.prune(result),
                animState: 'right'
            };
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["get"](this.cards, [index + 1, 'type']) === 'result')
                this.cards[index + 1] = newCard;
            else
                this.cards.splice(index + 1, 0, newCard);
        }
        catch (err) {
            var newCard = {
                type: 'result',
                value: this.prune(err),
                animState: 'right'
            };
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["get"](this.cards, [index + 1, 'type']) === 'result')
                this.cards[index + 1] = newCard;
            else
                this.cards.splice(index + 1, 0, newCard);
        }
    };
    NotebookComponent.prototype.prune = function (table) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNil"](table))
            return table;
        var pruned = __WEBPACK_IMPORTED_MODULE_2_lodash__["omitBy"](table, function (entry, key) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["has"](entry, '_eval') || key === '_context'; });
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["has"](pruned, 'value'))
            return __WEBPACK_IMPORTED_MODULE_2_lodash__["get"](pruned, 'value');
        var extraPruned = __WEBPACK_IMPORTED_MODULE_2_lodash__["mapValues"](pruned, function (value) {
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"](value))
                return "Symbol[ " + value + " ]";
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEqual"](value, table))
                return '[ self ]';
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isObject"](value))
                return _this.prune(value);
            return value;
        });
        return extraPruned;
    };
    NotebookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notebook',
            template: __webpack_require__("../../../../../src/app/notebook/notebook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notebook/notebook.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* trigger */])('slideInOutLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ transform: 'translateX(-100%)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* state */])('right', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(200))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* trigger */])('slideInOutRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ transform: 'translateX(100%)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* state */])('right', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(200))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NotebookComponent);
    return NotebookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/result-card/result-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host>>>mat-card {\n  background: #ffffff;\n  margin: 0px;\n}\n\n:host>>>.td-key {\n  color: grey;\n}\n\n:host>>>.value {\n  color: black;\n}\n\n:host>>>.number {\n  color: green;\n}\n\n:host>>>.boolean {\n  color: mediumslateblue;\n}\n\n:host>>>.string {\n  color: orangered;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result-card/result-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"padding: 10px\">\n  <td-json-formatter [data]=\"data\" [levelsOpen]=\"1\">\n  </td-json-formatter>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/result-card/result-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultCardComponent = (function () {
    function ResultCardComponent() {
        this.data = {};
    }
    ResultCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ResultCardComponent.prototype, "data", void 0);
    ResultCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-result-card',
            template: __webpack_require__("../../../../../src/app/result-card/result-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/result-card/result-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultCardComponent);
    return ResultCardComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map