webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  /********Colour palette*********/\n  .wht {\n    color: #fff;\n  }\n  .light-blue {\n    color: #9CD9F0;\n  }\n  .light-green {\n    color: #CDEE69;\n  }\n  .light-pink {\n    color: #E09690;\n  }\n  .light-red {\n    color: #c90000;\n  }\n  .green {\n    color: green;\n  }\n  /******************************/\n  \n  input {\n      background-color: transparent;\n      border-color: transparent;\n      padding: 0px;\n      border: initial;\n      font: inherit;\n      margin: 0px;\n  }\n  \n  input:focus {\n      outline: none;\n  }\n  \n  p {\n    position: relative;\n    left: 10%;\n    text-align: left;\n    font-size: 3em;\n    font-family: monospace;\n    white-space: normal;\n    overflow: hidden;\n    width: 0;\n  }\n  \n  .bld {\n    font-weight: bold;\n  }\n  \n  .terminal-screen {\n    box-sizing: border-box;\n    margin: 0 auto;\n  }\n  \n  .first-line-cursor {\n    -webkit-animation: blink 1s 2s 2 forwards;\n    animation: blink 1s 2s 2 forwards;\n  }\n  \n  .first-line {\n    -webkit-animation: type .5s 1s steps(30, end) forwards;\n    animation: type .5s 1s steps(30, end) forwards;\n  }\n  \n  .second-line {\n    -webkit-animation: type .5s 4.25s steps(20, end) forwards;\n    animation: type .5s 4.25s steps(20, end) forwards;\n  }\n  \n  .second-line-cursor {\n    -webkit-animation: blink 1s 5.25s 2 forwards;\n    animation: blink 1s 5.25s 2 forwards;\n  }\n  \n  .third-line {\n    -webkit-animation: type .5s 7.5s steps(20, end) forwards;\n    animation: type .5s 7.5s steps(20, end) forwards;\n  }\n  \n  .third-line-cursor {\n    -webkit-animation: blink 1s 8.5s 2 forwards;\n    animation: blink 1s 8.5s 2 forwards;\n  }\n  \n  .edit-line {\n    -webkit-animation: type .5s 10.75s steps(20, end) forwards;\n    animation: type .5s 10.75s steps(20, end) forwards;\n  }\n  \n  .edited-line {\n    -webkit-animation: type .5s 0.75s steps(20, end) forwards;\n    animation: type .5s 0.75s steps(20, end) forwards;\n  }\n  \n  .edit-line-cursor {\n    -webkit-animation: blink 1s 11.5s infinite;\n    animation: blink 1s 8.5s infinite;\n  }\n  \n  .cmd-line {\n    -webkit-animation: type .5s 0.5s steps(30, end) forwards;\n    animation: type .5s 0.5s steps(30, end) forwards;\n  }\n  \n  @-webkit-keyframes blink {\n    0% {\n      opacity: 0;\n    }\n    40% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 1;\n    }\n    90% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n  \n  @keyframes blink {\n    0% {\n      opacity: 0;\n    }\n    40% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 1;\n    }\n    90% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n  \n  @-webkit-keyframes type {\n    to {\n      width: 20em;\n    }\n  }\n  \n  @keyframes type {\n    to {\n      width: 20em;\n    }\n  }\n  \n  ::-ms-clear {\n     display: none;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"terminal-screen\">\n  <p class=\"first-line light-blue\">\n    $ RGB command line\n    <span class=\"first-line-cursor wht bld\">_</span>\n  </p>\n  <p class=\"second-line light-blue\">\n    $ -clear to clear\n    <span class=\"second-line-cursor wht bld\">_</span>\n  </p>\n  <p class=\"third-line light-blue\">\n    $ [?] <del>Red</del>, Green, Blue\n    <span class=\"third-line-cursor wht bld\">_</span>\n  </p>\n  <p id=\"editLine\" class=\"edit-line wht\">\n    >\n    <input class=\"bld wht\" id=\"editSpan\" placeholder=\"_\" />\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ws_socket_service__ = __webpack_require__("../../../../../src/services/ws-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_rgbCommands__ = __webpack_require__("../../../../../src/models/rgbCommands.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.registerHandler();
        this.registerSocketService();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    AppComponent.prototype.registerSocketService = function () {
        this.connection = this.socketService.connect().subscribe(function (message) {
            console.log(message);
        });
    };
    AppComponent.prototype.registerHandler = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".terminal-screen #editSpan").keyup(function (e) {
            if (e.keyCode == 13) {
                that.enterKeyHandle();
            }
        });
    };
    AppComponent.prototype.enterKeyHandle = function () {
        var editLineCommand = this.returnUserInput();
        var detachedEditInput = this.cloneEditInput();
        this.addRemoveEditClass(detachedEditInput);
        this.handleUserCommands(editLineCommand);
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".terminal-screen p:empty").remove();
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".terminal-screen p:last-child").after(detachedEditInput);
    };
    AppComponent.prototype.handleUserCommands = function (editLineCommand) {
        var loweredCommand = editLineCommand.toLocaleLowerCase();
        var lineClr = "light-green";
        if (loweredCommand === "cls" || loweredCommand === "clear") {
            this.clearScreenCommand();
        }
        else {
            var typedColor = __WEBPACK_IMPORTED_MODULE_3__models_rgbCommands__["a" /* RGB */][loweredCommand];
            if (typeof typedColor === "undefined") {
                this.pushCommand(loweredCommand);
            }
            else {
                editLineCommand = editLineCommand + " did you mean green?";
                lineClr = undefined;
            }
            this.repeatCommand(editLineCommand, lineClr);
        }
    };
    AppComponent.prototype.returnUserInput = function () {
        // Get edit command
        var editLineText = __WEBPACK_IMPORTED_MODULE_1_jquery__("#editSpan").val();
        // Reset edit command
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#editSpan").val("");
        return editLineText.toString();
    };
    AppComponent.prototype.cloneEditInput = function () {
        // Detach editLine span preserve event listeners
        var detachedInput = __WEBPACK_IMPORTED_MODULE_1_jquery__("#editLine").detach();
        return detachedInput;
    };
    AppComponent.prototype.addRemoveEditClass = function (detachedEditInput) {
        // Remove class for css reasons
        detachedEditInput.removeClass("edit-line");
        detachedEditInput.addClass("edited-line");
    };
    AppComponent.prototype.clearScreenCommand = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("p:not(:first-child)").empty();
    };
    AppComponent.prototype.repeatCommand = function (editLineCommand, lineClr) {
        if (lineClr === void 0) { lineClr = "light-red"; }
        var inputCommand = "<p class='cmd-line " + lineClr + "'>$ " + editLineCommand + "<p>";
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".terminal-screen p:last-child").after(inputCommand);
    };
    AppComponent.prototype.pushCommand = function (colourCommand) {
        this.socketService.pushRGBCommand(colourCommand);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_ws_socket_service__["a" /* SocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_ws_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ws_socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ws_socket_service__ = __webpack_require__("../../../../../src/services/ws-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_ws_socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/rgbCommands.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RGB; });
var RGB = {
    red: "red"
};
//# sourceMappingURL=rgbCommands.js.map

/***/ }),

/***/ "../../../../../src/services/ws-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = (function () {
    function SocketService() {
        this.url = 'https://rgb-socket-api.herokuapp.com/';
    }
    SocketService.prototype.connect = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (stream) {
            return _this.socket.on('rgb-pull', function (data) { stream.next(data); });
        });
        return observable;
    };
    SocketService.prototype.pushRGBCommand = function (rgbCommand) {
        this.socket.emit('rgb-push', rgbCommand);
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=ws-socket.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map