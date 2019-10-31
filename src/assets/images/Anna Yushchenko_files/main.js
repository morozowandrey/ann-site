(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contacts-page/contacts-page.component */ "./src/app/components/contacts-page/contacts-page.component.ts");
/* harmony import */ var _components_routing_page_routing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/routing-page/routing-page.component */ "./src/app/components/routing-page/routing-page.component.ts");





var routes = [
    {
        path: '',
        component: _components_routing_page_routing_page_component__WEBPACK_IMPORTED_MODULE_4__["RoutingPageComponent"]
    },
    {
        path: 'contacts',
        component: _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactsPageComponent"],
        data: { animation: 'fader' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [@routeAnimations]=\"prepareRoute(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</main>\n\n<!-- <div class=\"cursor\" [style.top]=\"top\" [style.left]=\"left\"></div> -->\n<!-- <footer></footer> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor {\n  background-color: transparent;\n  border: 1px solid #a7a59e;\n  display: block;\n  position: fixed;\n  z-index: 100;\n  width: 170px;\n  height: 170px;\n  border-radius: 100%;\n  top: 0;\n  left: 0;\n  transition: 1s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  opacity: 0.5;\n  cursor: url('custom-cursor-plus.svg') 27 27, auto; }\n  @media (max-width: 1365.98px) {\n    .cursor {\n      display: none; } }\n  .header__logo:hover .cursor {\n  transform: scale(1.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy92YXIuc2NzcyIsIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy9tZWRpYS1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkNIWTtFRElaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE1BQU07RUFDTixPQUFPO0VBQ1AsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaURBQWtFLEVBQUE7RUVrRmhFO0lGaEdKO01BaUJJLGFBQWEsRUFBQSxFQUVoQjtFQUVEO0VBRUkscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCIsIFwidmFyXCI7XG5cbi5jdXJzb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IDFzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IHVybChcIi4uL2Fzc2V0cy9jdXJzb3IvY3VzdG9tLWN1cnNvci1wbHVzLnN2Z1wiKSAyNyAyNywgYXV0bztcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uaGVhZGVyX19sb2dvOmhvdmVyIHtcbiAgLmN1cnNvciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG59XG4iLCIvL0NvbG9yc1xuJGdyYXk6ICNhN2E1OWU7XG4kZ3JheS1kYXJrOiAjNTY1NjU2O1xuJGxpbWU6ICMxNGZmMDA7XG4kdG9tYXRvOiAjZmYwMDAwO1xuXG5cbi8vRm9udHNcbiRiLWZmOiBcIk9iamVjdFNhbnMtQm9sZFwiLCBzYW5zLXNlcmlmO1xuJHItZmY6IFwiT2JqZWN0U2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG4kdC1mZjogXCJPYmplY3RTYW5zLVRoaW5cIiwgc2Fucy1zZXJpZjsiLCIkZ3JpZC1icmVha3BvaW50czogKFxuICBudWxsOiAwLFxuICAzNjA6IDM2MHB4LFxuICAzNzU6IDM3NXB4LFxuICA3Njg6IDc2OHB4LFxuICAxMzY2OiAxMzY2cHgsXG4gIDE0NDA6IDE0NDBweCxcbiAgMTUzNjogMTUzNnB4LFxuICAxOTIwOiAxOTIwcHhcbikgIWRlZmF1bHQ7XG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dChcbiAgJG5hbWUsXG4gICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsXG4gICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpXG4pIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoXG4gICAgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLFxuICAgIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSxcbiAgICBudWxsXG4gICk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIDAuMDJweCwgbnVsbCk7XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJldGluYS1tZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSkgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSBhbmQgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcmV0aW5hLW1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-animations */ "./src/app/route-animations.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ann-site';
    }
    AppComponent.prototype.onMousemove = function ($event) {
        this.top = ($event.pageY - 85) + "px";
        this.left = ($event.pageX - 85) + "px";
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousemove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onMousemove", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                _route_animations__WEBPACK_IMPORTED_MODULE_2__["fader"]
            ],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contacts-page/contacts-page.component */ "./src/app/components/contacts-page/contacts-page.component.ts");
/* harmony import */ var _components_information_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/information/information.component */ "./src/app/components/information/information.component.ts");
/* harmony import */ var _components_routing_page_routing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/routing-page/routing-page.component */ "./src/app/components/routing-page/routing-page.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_7__["ContactsPageComponent"],
                _components_information_information_component__WEBPACK_IMPORTED_MODULE_8__["InformationComponent"],
                _components_routing_page_routing_page_component__WEBPACK_IMPORTED_MODULE_9__["RoutingPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contacts-page/contacts-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/contacts-page/contacts-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\n<div class=\"contacts-page flex-center container wrapper\">\n  <div class=\"contacts-page-content\">\n    <p class=\"contacts-page-content__text\">\n      Currently looking for full-time opportunities and open<span class=\"overlap\"><br></span> to interesting\n      collaborations.<span class=\"overlap\"><br></span> If you’re interested in\n      discussing<span class=\"overlap\"><br></span>\n      a project or simply getting in touch please send an email\n    </p>\n    <a href=\"mailto:annayushch@gmail.comm\" class=\"contacts-page-content__email\">annayushch@gmail.com</a>\n  </div>\n  <contacts></contacts>\n</div>"

/***/ }),

/***/ "./src/app/components/contacts-page/contacts-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/contacts-page/contacts-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contacts-page {\n  height: 100vh;\n  overflow: hidden; }\n  @media (max-width: 1365.98px) {\n    .contacts-page {\n      height: calc(100vh - 164px);\n      align-items: flex-end; } }\n  @media (max-width: 767.98px) {\n    .contacts-page {\n      height: calc(100vh - 100px); } }\n  @media (max-width: 767.98px) {\n    .contacts-page-content {\n      padding-right: 30px; } }\n  @media (max-width: 374.98px) {\n    .contacts-page-content {\n      padding-right: 20px; } }\n  .contacts-page-content__text, .contacts-page-content__email {\n    font-family: \"ObjectSans-Thin\", sans-serif;\n    font-size: 58px;\n    font-weight: 100;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.4;\n    letter-spacing: normal;\n    color: #a7a59e; }\n  @media (max-width: 1919.98px) {\n      .contacts-page-content__text, .contacts-page-content__email {\n        font-family: \"ObjectSans-Thin\", sans-serif;\n        font-size: 40px;\n        font-weight: 100;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.4;\n        letter-spacing: normal;\n        color: #a7a59e; } }\n  @media (max-width: 1365.98px) {\n      .contacts-page-content__text, .contacts-page-content__email {\n        line-height: 1.5;\n        font-family: \"ObjectSans-Thin\", sans-serif; } }\n  @media (max-width: 767.98px) {\n      .contacts-page-content__text, .contacts-page-content__email {\n        font-family: \"ObjectSans-Regular\", sans-serif;\n        font-size: 24px;\n        font-weight: 100;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.5;\n        letter-spacing: normal;\n        color: #ffffff;\n        font-family: \"ObjectSans-Thin\", sans-serif;\n        color: #a7a59e; } }\n  .contacts-page-content__email {\n    text-decoration: underline; }\n  .overlap {\n  display: none; }\n  @media (max-width: 1365.98px) {\n    .overlap {\n      display: inline; } }\n  @media (max-width: 767.98px) {\n    .overlap {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMtcGFnZS9jb250YWN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2RlZGFsL0RvY3VtZW50cy9FYXJseSBCaXJkL2Fubi1zaXRlL3NyYy9hcHAvc3R5bGVzL21lZGlhLW1peGlucy5zY3NzIiwiL1VzZXJzL2RlZGFsL0RvY3VtZW50cy9FYXJseSBCaXJkL2Fubi1zaXRlL3NyYy9hcHAvc3R5bGVzL21peGlucy5zY3NzIiwiL1VzZXJzL2RlZGFsL0RvY3VtZW50cy9FYXJseSBCaXJkL2Fubi1zaXRlL3NyYy9hcHAvc3R5bGVzL3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsYUFBYTtFQUNiLGdCQUFnQixFQUFBO0VDNkZkO0lEaEdKO01BWUksMkJBQTJCO01BQzNCLHFCQUFxQixFQUFBLEVBc0N4QjtFQzZDRztJRGhHSjtNQWdCSSwyQkFBMkIsRUFBQSxFQW1DOUI7RUM2Q0c7SUQ3RUY7TUFFSSxtQkFBbUIsRUFBQSxFQTZCdEI7RUM4Q0M7SUQ3RUY7TUFNSSxtQkFBbUIsRUFBQSxFQXlCdEI7RUF0QkM7SUVMRiwwQ0Nma0M7SURnQmxDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGNDL0JZLEVBQUE7RUZpR1Y7TURwRUE7UUVNRiwwQ0MxQmtDO1FEMkJsQyxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixjQzFDWSxFQUFBLEVIK0NUO0VDa0REO01EcEVBO1FBU0ksZ0JBQWdCO1FBQ2hCLDBDRzlCNEIsRUFBQSxFSHNDL0I7RUNrREQ7TURwRUE7UUVpQkYsNkNDdENxQztRRHVDckMsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsY0FBYztRRlRSLDBDR25DNEI7UUhvQzVCLGNHN0NNLEVBQUEsRUgrQ1Q7RUFDRDtJQUNFLDBCQUEwQixFQUFBO0VBS2hDO0VBQ0UsYUFBYSxFQUFBO0VDMENYO0lEM0NKO01BSUksZUFBZSxFQUFBLEVBTWxCO0VDaUNHO0lEM0NKO01BUUksYUFBYSxFQUFBLEVBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy1wYWdlL2NvbnRhY3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCIsIFwibWVkaWEtbWl4aW5zXCIsIFwidmFyXCI7XG5cbi5jb250YWN0cy1wYWdlIHtcbiAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzI0cHgpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigxNDQwKSB7XG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjY0cHgpO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigxMzY2KSB7XG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMycHgpO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjRweCk7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gIH1cblxuICAmLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM2MCkge1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX190ZXh0LFxuICAgICZfX2VtYWlsIHtcbiAgICAgIEBpbmNsdWRlIHRleHQtZGVza193aWRlO1xuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTUzNikge1xuICAgICAgICBAaW5jbHVkZSB0ZXh0LWRlc2s7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMzc1KSB7XG4gICAgICAgIEBpbmNsdWRlIHRleHQtbW9iO1xuICAgICAgICBmb250LWZhbWlseTogJHQtZmY7XG4gICAgICAgIGNvbG9yOiAkZ3JheTtcbiAgICAgIH1cbiAgICB9XG4gICAgJl9fZW1haWwge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG59XG5cbi5vdmVybGFwIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIG51bGw6IDAsXG4gIDM2MDogMzYwcHgsXG4gIDM3NTogMzc1cHgsXG4gIDc2ODogNzY4cHgsXG4gIDEzNjY6IDEzNjZweCxcbiAgMTQ0MDogMTQ0MHB4LFxuICAxNTM2OiAxNTM2cHgsXG4gIDE5MjA6IDE5MjBweFxuKSAhZGVmYXVsdDtcblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KFxuICAkbmFtZSxcbiAgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cyxcbiAgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cylcbikge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZihcbiAgICAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksXG4gICAgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLFxuICAgIG51bGxcbiAgKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gMC4wMnB4LCBudWxsKTtcbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcmV0aW5hLW1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiByZXRpbmEtbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSkgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwibWVkaWEtbWl4aW5zXCIsIFwidmFyXCI7XG5cbkBtaXhpbiB0aXRsZS13aGl0ZSB7XG4gIGZvbnQtZmFtaWx5OiAkdC1mZjtcbiAgZm9udC1zaXplOiA5OHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMC45O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQG1peGluIHRpdGxlLWdyYXkge1xuICBmb250LWZhbWlseTogJHQtZmY7XG4gIGZvbnQtc2l6ZTogOThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDAuOTg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIHRleHQtZGVza193aWRlIHtcbiAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICBmb250LXNpemU6IDU4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIHRleHQtZGVzayB7XG4gIGZvbnQtZmFtaWx5OiAkdC1mZjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogJGdyYXk7XG59XG5cbkBtaXhpbiB0ZXh0LW1vYiB7XG4gIGZvbnQtZmFtaWx5OiAkci1mZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQG1peGluIGxhYmVsLWdyYXkge1xuICBmb250LWZhbWlseTogJHItZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIGxhYmVsLXdoaXRlIHtcbiAgZm9udC1mYW1pbHk6ICRyLWZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQG1peGluIGxhYmVsLXNtIHtcbiAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogJGdyYXk7XG59XG5cbkBtaXhpbiBidG4tcmVzZXQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG4iLCIvL0NvbG9yc1xuJGdyYXk6ICNhN2E1OWU7XG4kZ3JheS1kYXJrOiAjNTY1NjU2O1xuJGxpbWU6ICMxNGZmMDA7XG4kdG9tYXRvOiAjZmYwMDAwO1xuXG5cbi8vRm9udHNcbiRiLWZmOiBcIk9iamVjdFNhbnMtQm9sZFwiLCBzYW5zLXNlcmlmO1xuJHItZmY6IFwiT2JqZWN0U2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG4kdC1mZjogXCJPYmplY3RTYW5zLVRoaW5cIiwgc2Fucy1zZXJpZjsiXX0= */"

/***/ }),

/***/ "./src/app/components/contacts-page/contacts-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/contacts-page/contacts-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageComponent", function() { return ContactsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsPageComponent = /** @class */ (function () {
    function ContactsPageComponent() {
    }
    ContactsPageComponent.prototype.ngOnInit = function () {
    };
    ContactsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts-page',
            template: __webpack_require__(/*! ./contacts-page.component.html */ "./src/app/components/contacts-page/contacts-page.component.html"),
            styles: [__webpack_require__(/*! ./contacts-page.component.scss */ "./src/app/components/contacts-page/contacts-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsPageComponent);
    return ContactsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"homeSection\" class=\"home\">\n  <div class=\"wrapper home-aline\">\n\n    <div class=\"home-content\">\n      <h1 class=\"home__title\">\n        I’m a designer\n      </h1>\n      <p class=\"home__subtitle\">that execute</p>\n      <p class=\"home__subtitle_mob\">from idea →<br>concept →<br>wireframing →<br>design</p>\n    </div>\n\n    <div class=\"home-marquee\">\n      <div class=\"marqueeAnimFirst\">\n        <div class=\"home-marquee-mover text-gradient-animation\">\n          idea → concept → wireframing → design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        </div>\n      </div>\n      <div class=\"marqueeAnimSecond\">\n        <div class=\"home-marquee-mover text-gradient-animation\">\n          idea → concept → wireframing → design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<header></header>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fadeIn {\n  -webkit-animation: fadeIn 0.3s ease-in forwards;\n          animation: fadeIn 0.3s ease-in forwards; }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeOut {\n  -webkit-animation: fadeOut 0.3s ease-in forwards;\n          animation: fadeOut 0.3s ease-in forwards; }\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.marqueeAnimFirst {\n  display: inline-block;\n  transform: translate3d(0, 0, 0);\n  -webkit-animation: marqueeAnimFirst 15s linear infinite;\n          animation: marqueeAnimFirst 15s linear infinite; }\n\n@-webkit-keyframes marqueeAnimFirst {\n  from {\n    transform: translateX(80%); }\n  to {\n    transform: translateX(-120%); } }\n\n@keyframes marqueeAnimFirst {\n  from {\n    transform: translateX(80%); }\n  to {\n    transform: translateX(-120%); } }\n\n.marqueeAnimSecond {\n  display: inline-block;\n  transform: translate3d(0, 0, 0);\n  -webkit-animation: marqueeAnimSecond 15s linear infinite;\n          animation: marqueeAnimSecond 15s linear infinite;\n  -webkit-animation-delay: 7.5s;\n          animation-delay: 7.5s; }\n\n@-webkit-keyframes marqueeAnimSecond {\n  from {\n    transform: translateX(-20%); }\n  to {\n    transform: translateX(-220%); } }\n\n@keyframes marqueeAnimSecond {\n  from {\n    transform: translateX(-20%); }\n  to {\n    transform: translateX(-220%); } }\n\n.text-gradient-animation {\n  color: #ff0000;\n  background-image: -webkit-linear-gradient(92deg, #ff0000, #8dff00);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-animation: textGradientAnimation 5s infinite linear;\n          animation: textGradientAnimation 5s infinite linear; }\n\n@-webkit-keyframes textGradientAnimation {\n  from {\n    -webkit-filter: hue-rotate(0deg); }\n  to {\n    -webkit-filter: hue-rotate(-360deg); } }\n\n.home {\n  padding-top: 140px;\n  height: calc(100vh - 140px); }\n\n@media (max-width: 1535.98px) {\n    .home {\n      padding-top: 80px;\n      height: calc(100vh - 108px); } }\n\n@media (max-width: 1365.98px) {\n    .home {\n      padding-top: 0px;\n      height: 100vh; } }\n\n.home-aline {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start; }\n\n@media (max-width: 1365.98px) {\n      .home-aline {\n        justify-content: flex-end; } }\n\n.home-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    padding-left: 104px; }\n\n@media (max-width: 1365.98px) {\n      .home-content {\n        flex-direction: column;\n        padding-left: 60px;\n        margin-bottom: 72px; } }\n\n@media (max-width: 767.98px) {\n      .home-content {\n        padding-left: 32px;\n        margin-bottom: 40px; } }\n\n.home__title {\n    font-family: \"ObjectSans-Thin\", sans-serif;\n    font-size: 98px;\n    font-weight: 100;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 0.9;\n    letter-spacing: normal;\n    color: #ffffff;\n    margin-bottom: 56px;\n    margin-right: 32px;\n    font-size: 140px;\n    line-height: 0.7; }\n\n@media (max-width: 1535.98px) {\n      .home__title {\n        margin-bottom: 24px;\n        margin-right: 24px;\n        font-size: 104px;\n        line-height: 0.94; } }\n\n@media (max-width: 1439.98px) {\n      .home__title {\n        font-size: 98px;\n        line-height: 1; } }\n\n@media (max-width: 1365.98px) {\n      .home__title {\n        margin-bottom: 8px;\n        margin-right: 0;\n        font-size: 78px;\n        line-height: 1.13; } }\n\n@media (max-width: 767.98px) {\n      .home__title {\n        margin-bottom: 6px;\n        font-size: 40px;\n        line-height: 1.2; } }\n\n.home__subtitle {\n    font-family: \"ObjectSans-Thin\", sans-serif;\n    font-size: 40px;\n    font-weight: 100;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.4;\n    letter-spacing: normal;\n    color: #a7a59e;\n    display: inline-block;\n    line-height: 0.9;\n    font-size: 58px; }\n\n@media (max-width: 1535.98px) {\n      .home__subtitle {\n        font-size: 42px;\n        line-height: 1.24; } }\n\n@media (max-width: 1439.98px) {\n      .home__subtitle {\n        font-size: 40px;\n        line-height: 1.3; } }\n\n@media (max-width: 1365.98px) {\n      .home__subtitle {\n        font-size: 78px;\n        line-height: 1.13;\n        margin-bottom: 8px; } }\n\n@media (max-width: 767.98px) {\n      .home__subtitle {\n        margin-bottom: 6px;\n        font-size: 40px; } }\n\n.home__subtitle_mob {\n      font-family: \"ObjectSans-Thin\", sans-serif;\n      font-size: 40px;\n      font-weight: 100;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.4;\n      letter-spacing: normal;\n      color: #a7a59e;\n      display: none;\n      font-size: 78px;\n      line-height: 1.13; }\n\n@media (max-width: 1365.98px) {\n        .home__subtitle_mob {\n          display: block; } }\n\n@media (max-width: 767.98px) {\n        .home__subtitle_mob {\n          font-size: 40px;\n          line-height: 1.2; } }\n\n.home-marquee {\n    overflow: hidden;\n    white-space: nowrap;\n    width: 100%; }\n\n.home-marquee-mover {\n      font-family: \"ObjectSans-Thin\", sans-serif;\n      font-size: 98px;\n      font-weight: 100;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 0.98;\n      letter-spacing: normal;\n      color: #a7a59e;\n      line-height: 1.1;\n      font-size: 112px; }\n\n@media (min-width: 1440px) {\n        .home-marquee-mover {\n          font-size: 140px; } }\n\n@media (max-width: 1535.98px) {\n        .home-marquee-mover {\n          font-size: 98px; } }\n\n@media (max-width: 1365.98px) {\n        .home-marquee-mover {\n          display: none; } }\n\n@media (max-width: 1365.98px) {\n      .home-marquee {\n        display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy9hbmltYXRpb25zLnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy9tZWRpYS1taXhpbnMuc2NzcyIsIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUF1QztVQUF2Qyx1Q0FBdUMsRUFBQTs7QUFFekM7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBTmQ7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDLEVBQUE7O0FBRTFDO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQU5kO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQix1REFBK0M7VUFBL0MsK0NBQStDLEVBQUE7O0FBRWpEO0VBQ0U7SUFDRSwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLDRCQUE0QixFQUFBLEVBQUE7O0FBTGhDO0VBQ0U7SUFDRSwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLDRCQUE0QixFQUFBLEVBQUE7O0FBSWhDO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQix3REFBZ0Q7VUFBaEQsZ0RBQWdEO0VBQ2hELDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRTtJQUNFLDJCQUEyQixFQUFBO0VBRTdCO0lBQ0UsNEJBQTRCLEVBQUEsRUFBQTs7QUFMaEM7RUFDRTtJQUNFLDJCQUEyQixFQUFBO0VBRTdCO0lBQ0UsNEJBQTRCLEVBQUEsRUFBQTs7QUFJaEM7RUFDRSxjQUFjO0VBRWQsa0VBQWtFO0VBQ2xFLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLDJEQUFtRDtVQUFuRCxtREFBbUQsRUFBQTs7QUFHckQ7RUFDRTtJQUNFLGdDQUFnQyxFQUFBO0VBRWxDO0lBQ0UsbUNBQW1DLEVBQUEsRUFBQTs7QUNuRXZDO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQixFQUFBOztBQzhGekI7SURoR0o7TUFLSSxpQkFBaUI7TUFDakIsMkJBQTJCLEVBQUEsRUErSTlCOztBQ3JERztJRGhHSjtNQVNJLGdCQUFnQjtNQUNoQixhQUFhLEVBQUEsRUEySWhCOztBQXhJQztJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QixFQUFBOztBQytFdkI7TURuRkY7UUFPSSx5QkFBeUIsRUFBQSxFQUU1Qjs7QUFFRDtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFBOztBQ29FbkI7TUR4RUY7UUFPSSxzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLG1CQUFtQixFQUFBLEVBT3RCOztBQ3dEQztNRHhFRjtRQWFJLGtCQUFrQjtRQUNsQixtQkFBbUIsRUFBQSxFQUV0Qjs7QUFFRDtJRXpDQSwwQ0NPa0M7SURObEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsY0FBYztJRm9DWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTs7QUNpRGhCO01EdERGO1FBUUksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQUEsRUFvQnBCOztBQ3VCQztNRHRERjtRQWVJLGVBQWU7UUFDZixjQUFjLEVBQUEsRUFlakI7O0FDdUJDO01EdERGO1FBb0JJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQixFQUFBLEVBUXBCOztBQ3VCQztNRHRERjtRQTJCSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQixFQUFBLEVBRW5COztBQUVEO0lFekNBLDBDQzFCa0M7SUQyQmxDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGNDMUNZO0lIOEVWLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQ2lCZjtNRHJCRjtRQU9JLGVBQWU7UUFDZixpQkFBaUIsRUFBQSxFQWtDcEI7O0FDckJDO01EckJGO1FBWUksZUFBZTtRQUNmLGdCQUFnQixFQUFBLEVBNkJuQjs7QUNyQkM7TURyQkY7UUFpQkksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBQSxFQXVCckI7O0FDckJDO01EckJGO1FBdUJJLGtCQUFrQjtRQUNsQixlQUFlLEVBQUEsRUFrQmxCOztBQWZDO01FcEVGLDBDQzFCa0M7TUQyQmxDLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLG9CQUFvQjtNQUNwQixnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLGNDMUNZO01IeUdSLGFBQWE7TUFDYixlQUFlO01BQ2YsaUJBQWlCLEVBQUE7O0FDVm5CO1FETUE7VUFPSSxjQUFjLEVBQUEsRUFPakI7O0FDcEJEO1FETUE7VUFXSSxlQUFlO1VBQ2YsZ0JBQWdCLEVBQUEsRUFFbkI7O0FBR0g7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTs7QUFFWDtNRWhIRiwwQ0NKa0M7TURLbEMsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLGlCQUFpQjtNQUNqQixzQkFBc0I7TUFDdEIsY0NwQlk7TUgrSFIsZ0JBQWdCO01BT2QsZ0JBQWdCLEVBQUE7O0FDckVwQjtRRDREQTtVQUtJLGdCQUFnQixFQUFBLEVBY25COztBQy9DRDtRRDRCQTtVQWFJLGVBQWUsRUFBQSxFQU1sQjs7QUMvQ0Q7UUQ0QkE7VUFpQkksYUFBYSxFQUFBLEVBRWhCOztBQy9DRDtNRHVCRjtRQTJCSSxhQUFhLEVBQUEsRUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWRlSW4ge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZU91dCB7XG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm1hcnF1ZWVBbmltRmlyc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGFuaW1hdGlvbjogbWFycXVlZUFuaW1GaXJzdCAxNXMgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBtYXJxdWVlQW5pbUZpcnN0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSk7XG4gIH1cbn1cblxuLm1hcnF1ZWVBbmltU2Vjb25kIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBhbmltYXRpb246IG1hcnF1ZWVBbmltU2Vjb25kIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogNy41cztcbn1cbkBrZXlmcmFtZXMgbWFycXVlZUFuaW1TZWNvbmQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjIwJSk7XG4gIH1cbn1cblxuLnRleHQtZ3JhZGllbnQtYW5pbWF0aW9uIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkyZGVnLCAjZjM1NjI2LCAjZmVhYjNhKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTJkZWcsICNmZjAwMDAsICM4ZGZmMDApO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiB0ZXh0R3JhZGllbnRBbmltYXRpb24gNXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGV4dEdyYWRpZW50QW5pbWF0aW9uIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKC0zNjBkZWcpO1xuICB9XG59XG4iLCJAaW1wb3J0IFwibWl4aW5zXCIsIFwibWVkaWEtbWl4aW5zXCIsIFwidmFyXCIsIFwiYW5pbWF0aW9uc1wiO1xuXG4uaG9tZSB7XG4gIHBhZGRpbmctdG9wOiAxNDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQwcHgpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigxNDQwKSB7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA4cHgpO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAmLWFsaW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgfVxuXG4gICYtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIHBhZGRpbmctbGVmdDogMTA0cHg7XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNzJweDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMzc1KSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBAaW5jbHVkZSB0aXRsZS13aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwLjc7XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTQ0MCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTA0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMC45NDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTM2Nikge1xuICAgICAgZm9udC1zaXplOiA5OHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDc2OCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgZm9udC1zaXplOiA3OHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTM7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gIH1cblxuICAmX19zdWJ0aXRsZSB7XG4gICAgQGluY2x1ZGUgdGV4dC1kZXNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMC45O1xuICAgIGZvbnQtc2l6ZTogNThweDtcblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigxNDQwKSB7XG4gICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4yNDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTM2Nikge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICBmb250LXNpemU6IDc4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4xMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMzc1KSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuXG4gICAgJl9tb2Ige1xuICAgICAgQGluY2x1ZGUgdGV4dC1kZXNrO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogNzhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMzc1KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLW1hcnF1ZWUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYtbW92ZXIge1xuICAgICAgQGluY2x1ZGUgdGl0bGUtZ3JheTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoMTQ0MCkge1xuICAgICAgICBmb250LXNpemU6IDE0MHB4O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTkyMCkge1xuICAgICAgICBmb250LXNpemU6IDExMnB4O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTQ0MCkge1xuICAgICAgICBmb250LXNpemU6IDk4cHg7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgbnVsbDogMCxcbiAgMzYwOiAzNjBweCxcbiAgMzc1OiAzNzVweCxcbiAgNzY4OiA3NjhweCxcbiAgMTM2NjogMTM2NnB4LFxuICAxNDQwOiAxNDQwcHgsXG4gIDE1MzY6IDE1MzZweCxcbiAgMTkyMDogMTkyMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoXG4gICRuYW1lLFxuICAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLFxuICAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKVxuKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKFxuICAgICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSxcbiAgICBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksXG4gICAgbnVsbFxuICApO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAwLjAycHgsIG51bGwpO1xufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiByZXRpbmEtbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJldGluYS1tZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJtZWRpYS1taXhpbnNcIiwgXCJ2YXJcIjtcblxuQG1peGluIHRpdGxlLXdoaXRlIHtcbiAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICBmb250LXNpemU6IDk4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAwLjk7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gdGl0bGUtZ3JheSB7XG4gIGZvbnQtZmFtaWx5OiAkdC1mZjtcbiAgZm9udC1zaXplOiA5OHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMC45ODtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gdGV4dC1kZXNrX3dpZGUge1xuICBmb250LWZhbWlseTogJHQtZmY7XG4gIGZvbnQtc2l6ZTogNThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gdGV4dC1kZXNrIHtcbiAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIHRleHQtbW9iIHtcbiAgZm9udC1mYW1pbHk6ICRyLWZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gbGFiZWwtZ3JheSB7XG4gIGZvbnQtZmFtaWx5OiAkci1mZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gbGFiZWwtd2hpdGUge1xuICBmb250LWZhbWlseTogJHItZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gbGFiZWwtc20ge1xuICBmb250LWZhbWlseTogJHQtZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIGJ0bi1yZXNldCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cbiIsIi8vQ29sb3JzXG4kZ3JheTogI2E3YTU5ZTtcbiRncmF5LWRhcms6ICM1NjU2NTY7XG4kbGltZTogIzE0ZmYwMDtcbiR0b21hdG86ICNmZjAwMDA7XG5cblxuLy9Gb250c1xuJGItZmY6IFwiT2JqZWN0U2Fucy1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4kci1mZjogXCJPYmplY3RTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiR0LWZmOiBcIk9iamVjdFNhbnMtVGhpblwiLCBzYW5zLXNlcmlmOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../route-animations */ "./src/app/route-animations.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.isMobileSize = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.screen.availWidth <= 768 ? this.isMobileSize = true : this.isMobileSize = false;
    };
    HomeComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            animations: [
                _route_animations__WEBPACK_IMPORTED_MODULE_2__["fader"]
            ],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/information/information.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/information/information.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"information flex-column container wrapper\">\n  <div class=\"information-main flex-center\">\n    <div class=\"information-content flex-between\">\n\n      <div class=\"information-content-mobile information-content-mobile_top\">\n        <a href=\"/\" class=\"information-content-mobile-content flex-between\">\n          <img class=\"information-content-mobile-content__img\" src=\"../../../assets/images/cv.png\" alt=\"cv image\">\n          <p class=\"information-content-mobile-content__text\">* check my paper version CV with full information</p>\n        </a>\n      </div>\n\n      <div class=\"information-content-text\">\n        In the\n        <span class=\"information-content-text__action-part after-err-1\" (mouseenter)=\"cvImg = true\"\n          (mouseleave)=\"cvImg = false\">past\n          few years</span>,\n        <span class=\"overlap\"><br></span>\n        <span class=\"overlap_mob\"><br></span>\n        I’ve mostly been working on\n        <span class=\"overlap\"><br></span>\n        corporate websites, landing\n        <span class=\"overlap\"><br></span>\n        pages, and digital products.\n        <span class=\"overlap\"><br></span>\n        In total, I was involved in more\n        <span class=\"overlap\"><br></span>\n        than\n        <span class=\"overlap_mob\"><br></span>\n        <span class=\"information-content-text__action-part after-err-2\" (mouseenter)=\"projectsImg = true\"\n          (mouseleave)=\"projectsImg = false\">100\n          design projects</span>.\n      </div>\n\n      <div class=\"information-content-mobile information-content-mobile_bottom\">\n        <a href=\"/\" class=\"information-content-mobile-content flex-between\">\n          <img class=\"information-content-mobile-content__img\" src=\"../../../assets/images/project-images.png\"\n            alt=\"project images collage\">\n          <p class=\"information-content-mobile-content__text\">* check my selected works<span class=\"overlap\"><br></span>\n            or just scroll down</p>\n        </a>\n      </div>\n\n      <div class=\"information-content-images\">\n        <img class=\"information-content-images__img\" *ngIf=\"!cvImg && !projectsImg\"\n          src=\"../../../assets/images/information-ann.png\" alt=\"Annas cv image\">\n        <img class=\"information-content-images__img\" *ngIf=\"cvImg\" src=\"../../../assets/images/information-cv.png\"\n          alt=\"collage about Anna\">\n        <img class=\"information-content-images__img\" *ngIf=\"projectsImg\"\n          src=\"../../../assets/images/information-projects.png\" alt=\"100 projects collage\">\n      </div>\n\n    </div>\n  </div>\n  <div class=\"information-footer\">\n    <span *ngIf=\"!cvImg && !projectsImg\" class=\"information-footer__link\"></span>\n    <a *ngIf=\"cvImg\" href=\"\" target=\"blank\" class=\"information-footer__link\">\n      * check my paper version CV with full information\n    </a>\n    <span *ngIf=\"projectsImg\" class=\"information-footer__link\">\n      * check my selected works or just scroll down\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/information/information.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/information/information.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".information {\n  overflow: hidden;\n  height: 100vh;\n  padding-top: 115px; }\n  @media (max-width: 1365.98px) {\n    .information {\n      padding-top: 209px; } }\n  @media (max-width: 767.98px) {\n    .information {\n      padding-top: 111px; } }\n  .information-main {\n    height: 100%; }\n  .information-content {\n    width: 100%; }\n  @media (max-width: 1365.98px) {\n      .information-content {\n        flex-direction: column; } }\n  .information-content-text, .information-content__action-part {\n      font-family: \"ObjectSans-Thin\", sans-serif;\n      font-size: 58px;\n      font-weight: 100;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.4;\n      letter-spacing: normal;\n      color: #a7a59e;\n      font-family: \"ObjectSans-Thin\", sans-serif;\n      max-width: 60%;\n      margin-right: 77px;\n      position: relative; }\n  @media (max-width: 1919.98px) {\n        .information-content-text, .information-content__action-part {\n          max-width: 55%;\n          font-size: 42px;\n          line-height: 1.33;\n          margin-right: 124px; } }\n  @media (max-width: 1535.98px) {\n        .information-content-text, .information-content__action-part {\n          max-width: 60%; } }\n  @media (max-width: 1439.98px) {\n        .information-content-text, .information-content__action-part {\n          font-size: 40px;\n          line-height: 1.3;\n          margin-right: 80px; } }\n  @media (max-width: 1365.98px) {\n        .information-content-text, .information-content__action-part {\n          line-height: 1.6;\n          max-width: 100%; } }\n  .information-content-text__action-part, .information-content__action-part__action-part {\n        max-width: none;\n        text-decoration: underline;\n        margin-right: 0; }\n  @media (max-width: 1365.98px) {\n      .information-content-text {\n        color: #fff; } }\n  @media (max-width: 767.98px) {\n      .information-content-text {\n        font-size: 24px;\n        font-weight: 100;\n        margin-right: 0; } }\n  .information-content-images {\n      max-width: 544px; }\n  @media (max-width: 1919.98px) {\n        .information-content-images {\n          max-width: 500px; } }\n  @media (max-width: 1365.98px) {\n        .information-content-images {\n          display: none; } }\n  .information-content-mobile {\n      display: none;\n      align-items: center;\n      width: 100%; }\n  @media (max-width: 1365.98px) {\n        .information-content-mobile {\n          display: flex; } }\n  .information-content-mobile-content {\n        max-width: 365px; }\n  .information-content-mobile-content__text {\n          font-family: \"ObjectSans-Regular\", sans-serif;\n          font-size: 24px;\n          font-weight: 100;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.5;\n          letter-spacing: normal;\n          color: #ffffff;\n          line-height: 1.4;\n          color: #a7a59e; }\n  @media (max-width: 767.98px) {\n            .information-content-mobile-content__text {\n              font-size: 14px;\n              line-height: 1.25; } }\n  .information-content-mobile-content__img {\n          margin-right: 32px; }\n  @media (max-width: 767.98px) {\n            .information-content-mobile-content__img {\n              margin-right: 24px; } }\n  .information-content-mobile_top {\n        justify-content: flex-start;\n        margin-bottom: 62px; }\n  @media (max-width: 767.98px) {\n          .information-content-mobile_top {\n            margin-bottom: 33px; } }\n  .information-content-mobile_top .information-content-mobile-content__text {\n          max-width: 211px; }\n  .information-content-mobile_top .information-content-mobile-content__img {\n          max-height: 100px; }\n  @media (max-width: 767.98px) {\n          .information-content-mobile_top .information-content-mobile-content__text {\n            max-width: 113px; }\n          .information-content-mobile_top .information-content-mobile-content__img {\n            max-height: 77px; } }\n  .information-content-mobile_bottom {\n        justify-content: flex-end;\n        margin-top: 93px; }\n  @media (max-width: 767.98px) {\n          .information-content-mobile_bottom {\n            margin-top: 44px; } }\n  .information-content-mobile_bottom .information-content-mobile-content__text {\n          max-width: 217px; }\n  .information-content-mobile_bottom .information-content-mobile-content__img {\n          max-height: 102px; }\n  @media (max-width: 767.98px) {\n          .information-content-mobile_bottom .information-content-mobile-content__text {\n            max-width: 101px; }\n          .information-content-mobile_bottom .information-content-mobile-content__img {\n            max-height: 80px; } }\n  .information-footer__link {\n    font-family: \"ObjectSans-Regular\", sans-serif;\n    font-size: 24px;\n    font-weight: 100;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #ffffff;\n    min-height: 18px;\n    font-family: \"ObjectSans-Thin\", sans-serif;\n    display: block;\n    margin-bottom: 72px;\n    line-height: 0.83;\n    color: #a7a59e; }\n  .overlap {\n  display: none; }\n  @media (max-width: 1365.98px) {\n    .overlap {\n      display: inline; } }\n  @media (max-width: 767.98px) {\n    .overlap {\n      display: none; } }\n  .overlap_mob {\n    display: none; }\n  @media (max-width: 767.98px) {\n      .overlap_mob {\n        display: inline; } }\n  @media (max-width: 1365.98px) {\n  .after-err-1 {\n    position: relative; }\n    .after-err-1::after {\n      content: \"\";\n      position: absolute;\n      background-image: url('arrow-up-left.svg');\n      background-position: center;\n      background-size: contain;\n      background-repeat: no-repeat;\n      right: -40px;\n      top: -40px;\n      width: 28px;\n      height: 58px; }\n  .after-err-2 {\n    position: relative; }\n    .after-err-2::after {\n      content: \"\";\n      position: absolute;\n      background-image: url('arrow-down-left.svg');\n      background-position: center;\n      background-size: contain;\n      background-repeat: no-repeat;\n      right: -40px;\n      bottom: -40px;\n      width: 28px;\n      height: 58px; } }\n  @media (max-width: 767.98px) {\n  .after-err-1::after {\n    right: -20px;\n    top: -17px;\n    width: 14px;\n    height: 29px; }\n  .after-err-2::after {\n    right: -20px;\n    bottom: -17px;\n    width: 14px;\n    height: 29px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9zdHlsZXMvbWVkaWEtbWl4aW5zLnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9zdHlsZXMvdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0VDNkZoQjtJRGhHSjtNQU1JLGtCQUFrQixFQUFBLEVBNktyQjtFQ25GRztJRGhHSjtNQVVJLGtCQUFrQixFQUFBLEVBeUtyQjtFQXRLQztJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsV0FBVyxFQUFBO0VDOEVYO01EL0VGO1FBSUksc0JBQXNCLEVBQUEsRUFpSnpCO0VBOUlDO01FREYsMENDZmtDO01EZ0JsQyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixjQy9CWTtNSDRCUiwwQ0duQjhCO01Ib0I5QixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0VDa0VwQjtRRHhFQTtVQVNJLGNBQWM7VUFDZCxlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLG1CQUFtQixFQUFBLEVBc0J0QjtFQ3NDRDtRRHhFQTtVQWVJLGNBQWMsRUFBQSxFQW1CakI7RUNzQ0Q7UUR4RUE7VUFrQkksZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixrQkFBa0IsRUFBQSxFQWNyQjtFQ3NDRDtRRHhFQTtVQXVCSSxnQkFBZ0I7VUFDaEIsZUFBZSxFQUFBLEVBVWxCO0VBTEM7UUFDRSxlQUFlO1FBQ2YsMEJBQTBCO1FBQzFCLGVBQWUsRUFBQTtFQ3dDbkI7TURwQ0E7UUFFSSxXQUFXLEVBQUEsRUFRZDtFQzBCRDtNRHBDQTtRQU1JLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBLEVBRWxCO0VBRUQ7TUFDRSxnQkFBZ0IsRUFBQTtFQ3VCbEI7UUR4QkE7VUFHSSxnQkFBZ0IsRUFBQSxFQVNuQjtFQ1lEO1FEeEJBO1VBT0ksYUFBYSxFQUFBLEVBS2hCO0VBRUQ7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBQTtFQ09iO1FEVkE7VUFNSSxhQUFhLEVBQUEsRUF5RWhCO0VBdEVDO1FBQ0UsZ0JBQWdCLEVBQUE7RUFFaEI7VUVyRE4sNkNDdENxQztVRHVDckMsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixrQkFBa0I7VUFDbEIsb0JBQW9CO1VBQ3BCLGdCQUFnQjtVQUNoQixzQkFBc0I7VUFDdEIsY0FBYztVRmdETixnQkFBZ0I7VUFDaEIsY0d0R0ksRUFBQTtFRmlHVjtZREVJO2NBTUksZUFBZTtjQUNmLGlCQUFpQixFQUFBLEVBRXBCO0VBQ0Q7VUFDRSxrQkFBa0IsRUFBQTtFQ2J4QjtZRFlJO2NBSUksa0JBQWtCLEVBQUEsRUFFckI7RUFHSDtRQUNFLDJCQUEyQjtRQUMzQixtQkFBbUIsRUFBQTtFQ3ZCdkI7VURxQkU7WUFLSSxtQkFBbUIsRUFBQSxFQWtCdEI7RUF2QkE7VUFTRyxnQkFBZ0IsRUFBQTtFQVRuQjtVQVlHLGlCQUFpQixFQUFBO0VDakN2QjtVRHFCRztZQWlCSyxnQkFBZ0IsRUFBQTtVQWpCckI7WUFvQkssZ0JBQWdCLEVBQUEsRUFDakI7RUFHTDtRQUNFLHlCQUF5QjtRQUN6QixnQkFBZ0IsRUFBQTtFQy9DcEI7VUQ2Q0U7WUFLSSxnQkFBZ0IsRUFBQSxFQWtCbkI7RUF2QkE7VUFTRyxnQkFBZ0IsRUFBQTtFQVRuQjtVQVlHLGlCQUFpQixFQUFBO0VDekR2QjtVRDZDRztZQWlCSyxnQkFBZ0IsRUFBQTtVQWpCckI7WUFvQkssZ0JBQWdCLEVBQUEsRUFDakI7RUFPUDtJRTVIRiw2Q0N0Q3FDO0lEdUNyQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0lGdUhWLGdCQUFnQjtJQUNoQiwwQ0dwSzhCO0lIcUs5QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjR2pMUSxFQUFBO0VIc0xkO0VBQ0UsYUFBYSxFQUFBO0VDdEZYO0lEcUZKO01BSUksZUFBZSxFQUFBLEVBY2xCO0VDdkdHO0lEcUZKO01BUUksYUFBYSxFQUFBLEVBVWhCO0VBUEM7SUFDRSxhQUFhLEVBQUE7RUNqR2I7TURnR0Y7UUFJSSxlQUFlLEVBQUEsRUFFbEI7RUN0R0M7RUQwR0Y7SUFDRSxrQkFBa0IsRUFBQTtJQURwQjtNQUdJLFdBQVc7TUFDWCxrQkFBa0I7TUFFbEIsMENBQThEO01BQzlELDJCQUEyQjtNQUMzQix3QkFBd0I7TUFDeEIsNEJBQTRCO01BRTVCLFlBQVk7TUFDWixVQUFVO01BQ1YsV0FBVztNQUNYLFlBQVksRUFBQTtFQUdoQjtJQUNFLGtCQUFrQixFQUFBO0lBRHBCO01BR0ksV0FBVztNQUNYLGtCQUFrQjtNQUVsQiw0Q0FBZ0U7TUFDaEUsMkJBQTJCO01BQzNCLHdCQUF3QjtNQUN4Qiw0QkFBNEI7TUFFNUIsWUFBWTtNQUNaLGFBQWE7TUFDYixXQUFXO01BQ1gsWUFBWSxFQUFBLEVBQ2I7RUMxSUQ7RUQrSUY7SUFFSSxZQUFZO0lBQ1osVUFBVTtJQUVWLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHaEI7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUViLFdBQVc7SUFDWCxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCIsIFwibWVkaWEtbWl4aW5zXCIsIFwidmFyXCI7XG5cbi5pbmZvcm1hdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiAxMTVweDtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgcGFkZGluZy10b3A6IDIwOXB4O1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgIHBhZGRpbmctdG9wOiAxMTFweDtcbiAgfVxuXG4gICYtbWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgJi1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi10ZXh0LFxuICAgICZfX2FjdGlvbi1wYXJ0IHtcbiAgICAgIEBpbmNsdWRlIHRleHQtZGVza193aWRlO1xuICAgICAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDc3cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigxNTM2KSB7XG4gICAgICAgIG1heC13aWR0aDogNTUlO1xuICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEyNHB4O1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDE0NDApIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTM2Nikge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgfVxuXG4gICAgICAmX19hY3Rpb24tcGFydCB7XG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDc2OCkge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWltYWdlcyB7XG4gICAgICBtYXgtd2lkdGg6IDU0NHB4O1xuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDE1MzYpIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDc2OCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmX19pbWcge1xuICAgICAgfVxuICAgIH1cblxuICAgICYtbW9iaWxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgJi1jb250ZW50IHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNjVweDtcblxuICAgICAgICAmX190ZXh0IHtcbiAgICAgICAgICBAaW5jbHVkZSB0ZXh0LW1vYjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgIGNvbG9yOiAkZ3JheTtcblxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19pbWcge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcblxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl90b3Age1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYycHg7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mb3JtYXRpb24tY29udGVudC1tb2JpbGUtY29udGVudF9fdGV4dCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMTFweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mb3JtYXRpb24tY29udGVudC1tb2JpbGUtY29udGVudF9faW1nIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICAgICAgICAuaW5mb3JtYXRpb24tY29udGVudC1tb2JpbGUtY29udGVudF9fdGV4dCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5mb3JtYXRpb24tY29udGVudC1tb2JpbGUtY29udGVudF9faW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDc3cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmX2JvdHRvbSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDkzcHg7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDQ0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mb3JtYXRpb24tY29udGVudC1tb2JpbGUtY29udGVudF9fdGV4dCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMTdweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mb3JtYXRpb24tY29udGVudC1tb2JpbGUtY29udGVudF9faW1nIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICAgICAgICAuaW5mb3JtYXRpb24tY29udGVudC1tb2JpbGUtY29udGVudF9fdGV4dCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5mb3JtYXRpb24tY29udGVudC1tb2JpbGUtY29udGVudF9faW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1mb290ZXIge1xuICAgICZfX2xpbmsge1xuICAgICAgQGluY2x1ZGUgdGV4dC1tb2I7XG4gICAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3MnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODM7XG4gICAgICBjb2xvcjogJGdyYXk7XG4gICAgfVxuICB9XG59XG5cbi5vdmVybGFwIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmX21vYiB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDc2OCkge1xuICAuYWZ0ZXItZXJyLTEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LXVwLWxlZnQuc3ZnKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAgIHJpZ2h0OiAtNDBweDtcbiAgICAgIHRvcDogLTQwcHg7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogNThweDtcbiAgICB9XG4gIH1cbiAgLmFmdGVyLWVyci0yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1kb3duLWxlZnQuc3ZnKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAgIHJpZ2h0OiAtNDBweDtcbiAgICAgIGJvdHRvbTogLTQwcHg7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogNThweDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAuYWZ0ZXItZXJyLTEge1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgIHRvcDogLTE3cHg7XG5cbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAyOXB4O1xuICAgIH1cbiAgfVxuICAuYWZ0ZXItZXJyLTIge1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgIGJvdHRvbTogLTE3cHg7XG5cbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAyOXB4O1xuICAgIH1cbiAgfVxufVxuIiwiJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgbnVsbDogMCxcbiAgMzYwOiAzNjBweCxcbiAgMzc1OiAzNzVweCxcbiAgNzY4OiA3NjhweCxcbiAgMTM2NjogMTM2NnB4LFxuICAxNDQwOiAxNDQwcHgsXG4gIDE1MzY6IDE1MzZweCxcbiAgMTkyMDogMTkyMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoXG4gICRuYW1lLFxuICAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLFxuICAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKVxuKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKFxuICAgICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSxcbiAgICBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksXG4gICAgbnVsbFxuICApO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAwLjAycHgsIG51bGwpO1xufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiByZXRpbmEtbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJldGluYS1tZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJtZWRpYS1taXhpbnNcIiwgXCJ2YXJcIjtcblxuQG1peGluIHRpdGxlLXdoaXRlIHtcbiAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICBmb250LXNpemU6IDk4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAwLjk7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gdGl0bGUtZ3JheSB7XG4gIGZvbnQtZmFtaWx5OiAkdC1mZjtcbiAgZm9udC1zaXplOiA5OHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMC45ODtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gdGV4dC1kZXNrX3dpZGUge1xuICBmb250LWZhbWlseTogJHQtZmY7XG4gIGZvbnQtc2l6ZTogNThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gdGV4dC1kZXNrIHtcbiAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIHRleHQtbW9iIHtcbiAgZm9udC1mYW1pbHk6ICRyLWZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gbGFiZWwtZ3JheSB7XG4gIGZvbnQtZmFtaWx5OiAkci1mZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gbGFiZWwtd2hpdGUge1xuICBmb250LWZhbWlseTogJHItZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gbGFiZWwtc20ge1xuICBmb250LWZhbWlseTogJHQtZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIGJ0bi1yZXNldCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cbiIsIi8vQ29sb3JzXG4kZ3JheTogI2E3YTU5ZTtcbiRncmF5LWRhcms6ICM1NjU2NTY7XG4kbGltZTogIzE0ZmYwMDtcbiR0b21hdG86ICNmZjAwMDA7XG5cblxuLy9Gb250c1xuJGItZmY6IFwiT2JqZWN0U2Fucy1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4kci1mZjogXCJPYmplY3RTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiR0LWZmOiBcIk9iamVjdFNhbnMtVGhpblwiLCBzYW5zLXNlcmlmOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/information/information.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/information/information.component.ts ***!
  \*****************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
        this.cvImg = false;
        this.projectsImg = false;
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/components/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.scss */ "./src/app/components/information/information.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/components/routing-page/routing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/routing-page/routing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<home></home>\n<information></information>"

/***/ }),

/***/ "./src/app/components/routing-page/routing-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/routing-page/routing-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGluZy1wYWdlL3JvdXRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/routing-page/routing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/routing-page/routing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: RoutingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingPageComponent", function() { return RoutingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoutingPageComponent = /** @class */ (function () {
    function RoutingPageComponent() {
    }
    RoutingPageComponent.prototype.ngOnInit = function () {
    };
    RoutingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routing-page',
            template: __webpack_require__(/*! ./routing-page.component.html */ "./src/app/components/routing-page/routing-page.component.html"),
            styles: [__webpack_require__(/*! ./routing-page.component.scss */ "./src/app/components/routing-page/routing-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoutingPageComponent);
    return RoutingPageComponent;
}());



/***/ }),

/***/ "./src/app/helpers/check-mobile.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/check-mobile.ts ***!
  \*****************************************/
/*! exports provided: checkMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMobile", function() { return checkMobile; });
function checkMobile() {
    var isMobile = false;
    isMobile = window.innerWidth <= 768 ? true : false;
    return isMobile;
}


/***/ }),

/***/ "./src/app/helpers/scrollTo.ts":
/*!*************************************!*\
  !*** ./src/app/helpers/scrollTo.ts ***!
  \*************************************/
/*! exports provided: scrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
function scrollTo(destinationNode) {
    var destination = document.getElementById(destinationNode);
    if (!destination)
        return;
    var offsetTop = destination.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
}


/***/ }),

/***/ "./src/app/route-animations.ts":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: fader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        // Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ], { optional: true }),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ], { optional: true })
    ]),
]);


/***/ }),

/***/ "./src/app/shared/components/contacts/contacts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/contacts/contacts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts\">\n  <div class=\"container wrapper\">\n    <a href=\"https://www.facebook.com/annayushch\" target=\"_blank\" class=\"contacts__item\">\n      <span *ngIf=\"isMobile\">Fb</span>\n      <span *ngIf=\"!isMobile\">Facebook</span>\n    </a>\n    <a href=\"https://telegram.me/annayushch\" target=\"_blank\" class=\"contacts__item\">\n      <span *ngIf=\"isMobile\">Tg</span>\n      <span *ngIf=\"!isMobile\">Telegram</span>\n    </a>\n    <a href=\"https://www.instagram.com/annayushch/\" target=\"_blank\" class=\"contacts__item\">\n      <span *ngIf=\"isMobile\">Inst</span>\n      <span *ngIf=\"!isMobile\">Instagram</span>\n    </a>\n    <a href=\"https://www.are.na/anna-yushchenko\" target=\"_blank\" class=\"contacts__item\">\n      <span *ngIf=\"isMobile\">Ar</span>\n      <span *ngIf=\"!isMobile\">Are.na</span>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/contacts/contacts.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/contacts/contacts.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contacts {\n  width: 100%;\n  padding: 70px 0; }\n  @media (max-width: 1919.98px) {\n    .contacts {\n      padding: 56px 0; } }\n  @media (max-width: 1535.98px) {\n    .contacts {\n      padding: 48px 0; } }\n  @media (max-width: 1365.98px) {\n    .contacts {\n      padding: 72px 0; } }\n  @media (max-width: 767.98px) {\n    .contacts {\n      padding: 40px 0; } }\n  .contacts__item {\n    position: relative;\n    margin-right: 104px;\n    padding-left: 34px;\n    font-size: 24px;\n    line-height: 0.83;\n    font-family: \"ObjectSans-Regular\", sans-serif;\n    color: #a7a59e; }\n  .contacts__item:hover {\n      color: #fff; }\n  @media (max-width: 1919.98px) {\n      .contacts__item {\n        margin-right: 62px;\n        padding-left: 20px;\n        font-size: 16px;\n        line-height: 1.25; } }\n  @media (max-width: 1365.98px) {\n      .contacts__item {\n        margin-right: 72px;\n        padding-left: 34px;\n        font-size: 24px;\n        line-height: 0.83; } }\n  @media (max-width: 767.98px) {\n      .contacts__item {\n        margin-right: 40px;\n        padding-left: 20px;\n        font-size: 16px;\n        line-height: 1.25; } }\n  .contacts__item::before {\n      content: \"\";\n      width: 18px;\n      height: 18px;\n      position: absolute;\n      top: 1px;\n      left: 0;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      cursor: pointer; }\n  @media (max-width: 1919.98px) {\n        .contacts__item::before {\n          width: 12px;\n          height: 12px; } }\n  @media (max-width: 1365.98px) {\n        .contacts__item::before {\n          width: 18px;\n          height: 18px; } }\n  @media (max-width: 767.98px) {\n        .contacts__item::before {\n          width: 12px;\n          height: 12px; } }\n  .contacts__item:nth-child(1)::before {\n      background-image: url('fb.svg'); }\n  .contacts__item:nth-child(2)::before {\n      background-image: url('tg.svg'); }\n  .contacts__item:nth-child(3)::before {\n      background-image: url('inst.svg'); }\n  .contacts__item:nth-child(4)::before {\n      background-image: url('arena.svg'); }\n  .contacts__item:last-of-type {\n      margin-right: 0; }\n  .contacts-page :host {\n  width: 100%;\n  position: fixed;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2RlZGFsL0RvY3VtZW50cy9FYXJseSBCaXJkL2Fubi1zaXRlL3NyYy9hcHAvc3R5bGVzL21lZGlhLW1peGlucy5zY3NzIiwiL1VzZXJzL2RlZGFsL0RvY3VtZW50cy9FYXJseSBCaXJkL2Fubi1zaXRlL3NyYy9hcHAvc3R5bGVzL3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQTtFQzhGYjtJRGhHSjtNQUtJLGVBQWUsRUFBQSxFQXVHbEI7RUNaRztJRGhHSjtNQVNJLGVBQWUsRUFBQSxFQW1HbEI7RUNaRztJRGhHSjtNQWFJLGVBQWUsRUFBQSxFQStGbEI7RUNaRztJRGhHSjtNQWlCSSxlQUFlLEVBQUEsRUEyRmxCO0VBeEZDO0lBQ0Usa0JBQWtCO0lBRWxCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUVqQiw2Q0VyQm1DO0lGc0JuQyxjRTlCVSxFQUFBO0VGcUJYO01BWUcsV0FBVyxFQUFBO0VDZ0ViO01ENUVGO1FBZ0JJLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGlCQUFpQixFQUFBLEVBb0VwQjtFQ1hDO01ENUVGO1FBdUJJLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGlCQUFpQixFQUFBLEVBNkRwQjtFQ1hDO01ENUVGO1FBOEJJLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGlCQUFpQixFQUFBLEVBc0RwQjtFQXZGQTtNQXFDRyxXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLE9BQU87TUFDUCw0QkFBNEI7TUFDNUIsMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QixlQUFlLEVBQUE7RUM4QmpCO1FENUVEO1VBaURLLFdBQVc7VUFDWCxZQUFZLEVBQUEsRUFZZjtFQ2NEO1FENUVEO1VBc0RLLFdBQVc7VUFDWCxZQUFZLEVBQUEsRUFPZjtFQ2NEO1FENUVEO1VBMkRLLFdBQVc7VUFDWCxZQUFZLEVBQUEsRUFFZjtFQTlERjtNQWtFSywrQkFBd0QsRUFBQTtFQWxFN0Q7TUF1RUssK0JBQXdELEVBQUE7RUF2RTdEO01BNEVLLGlDQUEwRCxFQUFBO0VBNUUvRDtNQWlGSyxrQ0FBMkQsRUFBQTtFQWpGaEU7TUFxRkcsZUFBZSxFQUFBO0VBS3JCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIiwgXCJtZWRpYS1taXhpbnNcIiwgXCJ2YXJcIjtcblxuLmNvbnRhY3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDcwcHggMDtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTUzNikge1xuICAgIHBhZGRpbmc6IDU2cHggMDtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigxNDQwKSB7XG4gICAgcGFkZGluZzogNDhweCAwO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDc2OCkge1xuICAgIHBhZGRpbmc6IDcycHggMDtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDEwNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzRweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDAuODM7XG5cbiAgICBmb250LWZhbWlseTogJHItZmY7XG4gICAgY29sb3I6ICRncmF5O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTUzNikge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2MnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDc2OCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA3MnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAzNHB4O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODM7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMXB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTUzNikge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3NvY2lhbHMvZmIuc3ZnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9zb2NpYWxzL3RnLnN2Zyk7XG4gICAgICB9XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvc29jaWFscy9pbnN0LnN2Zyk7XG4gICAgICB9XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvc29jaWFscy9hcmVuYS5zdmcpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi5jb250YWN0cy1wYWdlIDpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuIiwiJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgbnVsbDogMCxcbiAgMzYwOiAzNjBweCxcbiAgMzc1OiAzNzVweCxcbiAgNzY4OiA3NjhweCxcbiAgMTM2NjogMTM2NnB4LFxuICAxNDQwOiAxNDQwcHgsXG4gIDE1MzY6IDE1MzZweCxcbiAgMTkyMDogMTkyMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoXG4gICRuYW1lLFxuICAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLFxuICAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKVxuKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKFxuICAgICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSxcbiAgICBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksXG4gICAgbnVsbFxuICApO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAwLjAycHgsIG51bGwpO1xufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiByZXRpbmEtbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJldGluYS1tZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vQ29sb3JzXG4kZ3JheTogI2E3YTU5ZTtcbiRncmF5LWRhcms6ICM1NjU2NTY7XG4kbGltZTogIzE0ZmYwMDtcbiR0b21hdG86ICNmZjAwMDA7XG5cblxuLy9Gb250c1xuJGItZmY6IFwiT2JqZWN0U2Fucy1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4kci1mZjogXCJPYmplY3RTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiR0LWZmOiBcIk9iamVjdFNhbnMtVGhpblwiLCBzYW5zLXNlcmlmOyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/contacts/contacts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/contacts/contacts.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_check_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/check-mobile */ "./src/app/helpers/check-mobile.ts");



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.isMobile = Object(_helpers_check_mobile__WEBPACK_IMPORTED_MODULE_2__["checkMobile"])();
    }
    ContactsComponent.prototype.ngOnInit = function () {
        console.log(this.isMobile);
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/shared/components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/shared/components/contacts/contacts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" id=\"header\">\n  <div class=\"wrapper container flex-between\">\n\n    <a (click)=\"scrollTo('homeSection')\" class=\"header__logo\">Anna Yushchenko</a>\n    <a routerLink=\"/contacts\" class=\"header__logo\">contacts</a>\n\n    <!-- <nav class=\"header-nav flex-between\">\n      <div class=\"header-nav__item\">Information</div>\n      <div class=\"header-nav__item\">Work</div>\n      <div class=\"header-nav__item\" routerLink=\"/contacts\">Contact</div>\n    </nav> -->\n\n    <button *ngIf=\"!navOpen\" class=\"header-nav__burger header-nav__burger_desk\" (click)=\"navOpen = true\">menu</button>\n    <button *ngIf=\"!navOpen\" class=\"header-nav__burger\" (click)=\"navOpen = true\"></button>\n\n    <!-- <nav *ngIf=\"navOpen\" class=\"header-nav-mob container flex-column\">\n      <div class=\"header-nav-mob-header flex-between\">\n        <p class=\"header__logo\">Anna Yushchenko</p>\n        <button class=\"header-nav-mob__close\" (click)=\"navOpen = false\"></button>\n      </div>\n      <div class=\"flex-column\">\n        <div class=\"header-nav-mob__item\" (click)=\"navOpen = false\">Information</div>\n        <div class=\"header-nav-mob__item\" (click)=\"navOpen = false\">Work</div>\n        <div class=\"header-nav-mob__item\" routerLink=\"/contacts\" (click)=\"navOpen = false\">Contact</div>\n      </div>\n      <contacts></contacts>\n    </nav> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: absolute;\n  width: 100%;\n  z-index: 102;\n  padding: 56px 0;\n  background-color: #000; }\n  @media (max-width: 1535.98px) {\n    .header {\n      padding: 40px 0; } }\n  @media (max-width: 1365.98px) {\n    .header {\n      padding: 56px 0; } }\n  @media (max-width: 767.98px) {\n    .header {\n      padding: 40px 0; } }\n  .header__logo {\n    font-family: \"ObjectSans-Regular\", sans-serif;\n    font-size: 16px;\n    letter-spacing: 1px;\n    color: #fff;\n    text-transform: uppercase; }\n  @media (max-width: 1365.98px) {\n      .header__logo {\n        font-size: 24px;\n        letter-spacing: 0.9px; } }\n  @media (max-width: 767.98px) {\n      .header__logo {\n        font-size: 16px;\n        letter-spacing: 0.6px; } }\n  @media (max-width: 1365.98px) {\n    .header-nav {\n      display: none; } }\n  .header-nav__burger {\n    padding: 0;\n    margin: 0;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    width: 48px;\n    height: 28px;\n    display: none;\n    background-image: url('burger-menu.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    cursor: pointer; }\n  .header-nav__burger:hover, .header-nav__burger:focus {\n      outline: none; }\n  @media (max-width: 1365.98px) {\n      .header-nav__burger {\n        display: flex; } }\n  @media (max-width: 767.98px) {\n      .header-nav__burger {\n        width: 24px;\n        height: 14px; } }\n  .header-nav__burger_desk {\n      font-family: \"ObjectSans-Thin\", sans-serif;\n      font-size: 14px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.43;\n      letter-spacing: 1px;\n      color: #a7a59e;\n      display: flex;\n      text-transform: uppercase;\n      background: none;\n      font-size: 16px;\n      letter-spacing: 1px;\n      line-height: 1.3; }\n  .header-nav__burger_desk:hover {\n        color: #fff; }\n  @media (max-width: 1365.98px) {\n        .header-nav__burger_desk {\n          display: none; } }\n  .header-nav-mob {\n    width: 100%;\n    height: 100vh;\n    padding-top: 72px;\n    padding-bottom: 72px;\n    justify-content: space-between;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #000; }\n  .header-nav-mob__item {\n      margin-bottom: 24px;\n      font-family: \"ObjectSans-Thin\", sans-serif;\n      font-size: 78px;\n      font-weight: 100;\n      line-height: 1.13;\n      color: #fff; }\n  @media (max-width: 767.98px) {\n        .header-nav-mob__item {\n          font-size: 40px;\n          line-height: 1.2; } }\n  .header-nav-mob-header {\n      width: 100%; }\n  @media (max-width: 767.98px) {\n      .header-nav-mob {\n        padding-top: 40px;\n        padding-bottom: 40px; } }\n  .header-nav-mob__close {\n      padding: 0;\n      margin: 0;\n      background-color: transparent;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      width: 28px;\n      height: 28px;\n      background-image: url('burger-menu-close.svg');\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n  .header-nav-mob__close:hover, .header-nav-mob__close:focus {\n        outline: none; }\n  @media (max-width: 767.98px) {\n        .header-nav-mob__close {\n          width: 14px;\n          height: 14px; } }\n  .header-nav__item {\n    margin-right: 63px;\n    font-family: \"ObjectSans-Regular\", sans-serif;\n    font-size: 14px;\n    text-transform: uppercase;\n    line-height: 1.43;\n    letter-spacing: 1px;\n    color: #a7a59e; }\n  .header-nav__item_active {\n      color: #fff; }\n  .header-nav__item:last-of-type {\n      margin-right: 0; }\n  .header-nav__item:hover {\n      color: #fff; }\n  home :host {\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 100;\n  position: -webkit-sticky;\n  position: sticky; }\n  @media (max-width: 1365.98px) {\n    home :host {\n      position: fixed; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9zdHlsZXMvbWVkaWEtbWl4aW5zLnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9zdHlsZXMvdmFyLnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCLEVBQUE7RUMyRnBCO0lEaEdKO01BUUksZUFBZSxFQUFBLEVBcUpsQjtFQzdERztJRGhHSjtNQVlJLGVBQWUsRUFBQSxFQWlKbEI7RUM3REc7SURoR0o7TUFnQkksZUFBZSxFQUFBLEVBNklsQjtFQTFJQztJQUNFLDZDRWJtQztJRmNuQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUIsRUFBQTtFQ3dFekI7TUQ3RUY7UUFRSSxlQUFlO1FBQ2YscUJBQXFCLEVBQUEsRUFPeEI7RUM2REM7TUQ3RUY7UUFhSSxlQUFlO1FBQ2YscUJBQXFCLEVBQUEsRUFFeEI7RUM2REM7SUQzREY7TUFFSSxhQUFhLEVBQUEsRUFxSGhCO0VBbEhDO0lHK0NGLFVBQVU7SUFDVixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJSGxEWCxXQUFXO0lBQ1gsWUFBWTtJQUVaLGFBQWE7SUFFYix3Q0FBK0Q7SUFDL0QsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZUFBZSxFQUFBO0VBWGhCO01Hd0RELGFBQWEsRUFBQTtFRkZiO01EdERBO1FBY0ksYUFBYSxFQUFBLEVBMEJoQjtFQ2NEO01EdERBO1FBa0JJLFdBQVc7UUFDWCxZQUFZLEVBQUEsRUFxQmY7RUFsQkM7TUdjSiwwQ0R0RWtDO01DdUVsQyxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixjRHRGWTtNRm1FTixhQUFhO01BQ2IseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUVoQixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGdCQUFnQixFQUFBO0VBUmpCO1FBV0csV0FBVyxFQUFBO0VDcUJqQjtRRGhDRTtVQWVJLGFBQWEsRUFBQSxFQUVoQjtFQUdIO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxzQkFBc0IsRUFBQTtFQUV0QjtNQUNFLG1CQUFtQjtNQUNuQiwwQ0V6RjRCO01GMEY1QixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixXQUFXLEVBQUE7RUNMZjtRRERFO1VBU0ksZUFBZTtVQUNmLGdCQUFnQixFQUFBLEVBRW5CO0VBRUQ7TUFDRSxXQUFXLEVBQUE7RUNkZjtNRFpBO1FBOEJJLGlCQUFpQjtRQUNqQixvQkFBb0IsRUFBQSxFQWtCdkI7RUFmQztNRzdCSixVQUFVO01BQ1YsU0FBUztNQUNULDZCQUE2QjtNQUM3QixZQUFZO01BQ1osYUFBYTtNQUNiLGVBQWU7TUgwQlQsV0FBVztNQUNYLFlBQVk7TUFFWiw4Q0FBcUU7TUFDckUsNEJBQTRCO01BQzVCLDJCQUEyQjtNQUMzQixzQkFBc0IsRUFBQTtFQVJ2QjtRR3BCSCxhQUFhLEVBQUE7RUZGYjtRRHNCRTtVQVdJLFdBQVc7VUFDWCxZQUFZLEVBQUEsRUFFZjtFQUdIO0lBQ0Usa0JBQWtCO0lBQ2xCLDZDRWxJaUM7SUZtSWpDLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjRS9JUSxFQUFBO0VGaUpSO01BQ0UsV0FBVyxFQUFBO0VBVmQ7TUFjRyxlQUFlLEVBQUE7RUFkbEI7TUFrQkcsV0FBVyxFQUFBO0VBTW5CO0VBQ0UsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTtFQ3JFZDtJRCtESjtNQVNJLGVBQWUsRUFBQSxFQUVsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCIsIFwibWVkaWEtbWl4aW5zXCIsIFwidmFyXCI7XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDI7XG4gIHBhZGRpbmc6IDU2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMTQ0MCkge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICBwYWRkaW5nOiA1NnB4IDA7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMzc1KSB7XG4gICAgcGFkZGluZzogNDBweCAwO1xuICB9XG5cbiAgJl9fbG9nbyB7XG4gICAgZm9udC1mYW1pbHk6ICRyLWZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC45cHg7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICAgIH1cbiAgfVxuXG4gICYtbmF2IHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICZfX2J1cmdlciB7XG4gICAgICBAaW5jbHVkZSBidG4tcmVzZXQ7XG4gICAgICB3aWR0aDogNDhweDtcbiAgICAgIGhlaWdodDogMjhweDtcblxuICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9idXJnZXItbWVudS5zdmcpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93big3NjgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAmX2Rlc2sge1xuICAgICAgICBAaW5jbHVkZSBsYWJlbC1zbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtbW9iIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHBhZGRpbmctdG9wOiA3MnB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDcycHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblxuICAgICAgJl9faXRlbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdC1mZjtcbiAgICAgICAgZm9udC1zaXplOiA3OHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xMztcbiAgICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDM3NSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtaGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAmX19jbG9zZSB7XG4gICAgICAgIEBpbmNsdWRlIGJ0bi1yZXNldDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2J1cmdlci1tZW51LWNsb3NlLnN2Zyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oMzc1KSB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9faXRlbSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDYzcHg7XG4gICAgICBmb250LWZhbWlseTogJHItZmY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgY29sb3I6ICRncmF5O1xuXG4gICAgICAmX2FjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ob21lIDpob3N0IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDc2OCkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxufVxuIiwiJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgbnVsbDogMCxcbiAgMzYwOiAzNjBweCxcbiAgMzc1OiAzNzVweCxcbiAgNzY4OiA3NjhweCxcbiAgMTM2NjogMTM2NnB4LFxuICAxNDQwOiAxNDQwcHgsXG4gIDE1MzY6IDE1MzZweCxcbiAgMTkyMDogMTkyMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoXG4gICRuYW1lLFxuICAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLFxuICAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKVxuKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKFxuICAgICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSxcbiAgICBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksXG4gICAgbnVsbFxuICApO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAwLjAycHgsIG51bGwpO1xufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiByZXRpbmEtbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJldGluYS1tZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vQ29sb3JzXG4kZ3JheTogI2E3YTU5ZTtcbiRncmF5LWRhcms6ICM1NjU2NTY7XG4kbGltZTogIzE0ZmYwMDtcbiR0b21hdG86ICNmZjAwMDA7XG5cblxuLy9Gb250c1xuJGItZmY6IFwiT2JqZWN0U2Fucy1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4kci1mZjogXCJPYmplY3RTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiR0LWZmOiBcIk9iamVjdFNhbnMtVGhpblwiLCBzYW5zLXNlcmlmOyIsIkBpbXBvcnQgXCJtZWRpYS1taXhpbnNcIiwgXCJ2YXJcIjtcblxuQG1peGluIHRpdGxlLXdoaXRlIHtcbiAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICBmb250LXNpemU6IDk4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAwLjk7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gdGl0bGUtZ3JheSB7XG4gIGZvbnQtZmFtaWx5OiAkdC1mZjtcbiAgZm9udC1zaXplOiA5OHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMC45ODtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gdGV4dC1kZXNrX3dpZGUge1xuICBmb250LWZhbWlseTogJHQtZmY7XG4gIGZvbnQtc2l6ZTogNThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gdGV4dC1kZXNrIHtcbiAgZm9udC1mYW1pbHk6ICR0LWZmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIHRleHQtbW9iIHtcbiAgZm9udC1mYW1pbHk6ICRyLWZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gbGFiZWwtZ3JheSB7XG4gIGZvbnQtZmFtaWx5OiAkci1mZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRncmF5O1xufVxuXG5AbWl4aW4gbGFiZWwtd2hpdGUge1xuICBmb250LWZhbWlseTogJHItZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWl4aW4gbGFiZWwtc20ge1xuICBmb250LWZhbWlseTogJHQtZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuQG1peGluIGJ0bi1yZXNldCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_scrollTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/scrollTo */ "./src/app/helpers/scrollTo.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.navOpen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.scrollTo = function (target) {
        Object(_helpers_scrollTo__WEBPACK_IMPORTED_MODULE_2__["scrollTo"])(target);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/shared/components/contacts/contacts.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");



// Components




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dedal/Documents/Early Bird/ann-site/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/dedal/Documents/Early Bird/ann-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map