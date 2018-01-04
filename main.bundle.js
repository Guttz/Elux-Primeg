webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/crisis-center/crisis-center.module": [
		"../../../../../src/app/crisis-center/crisis-center.module.ts",
		"crisis-center.module"
	],
	"app/dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/aidashboard/aidashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-class{\r\n\tbackground: #0097A7;\r\n}\r\n\r\n.menu-button{\r\n\tfont-family: \"electroluxSans\";\r\n\tcolor: white;\r\n\tfont-size: 95%;\r\n}\r\n\r\n.dropped-menu-button{\r\n\tfont-family: \"electroluxSans\";\r\n\tcolor: black;\r\n\tfont-size: 110%;\r\n}\r\n\r\n.mat-menu{\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aidashboard/aidashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"toolbar-class\" fxLayout=\"row\" color=\"#ffffff\">\n\n<button mat-button class=\"menu-button\" [matMenuTriggerFor]=\"menuraw\"> <b>Raw Material</b> </button>\n\n<mat-menu class=\"mat-menu\" #menuraw=\"matMenu\">\n  \t<button mat-menu-item class=\"dropped-menu-button\" > <b> Steel </b> </button>\n  \t<button mat-menu-item class=\"dropped-menu-button\" > <b> Copper </b> </button>\n  \t<button mat-menu-item class=\"dropped-menu-button\" > <b> Zinco </b> </button>\n  \t<button mat-menu-item class=\"dropped-menu-button\" > <b> Alumínio </b> </button>\n  \t<button mat-menu-item class=\"dropped-menu-button\" > <b> Lead </b> </button>\n  \t<button mat-menu-item class=\"dropped-menu-button\" > <b> Tin </b> </button>\n  \t<button mat-menu-item class=\"dropped-menu-button\" > <b> Nickel </b> </button>\n\n</mat-menu>\n\n<button mat-button class=\"menu-button\" [matMenuTriggerFor]=\"menucurrency\"> <b>Currency</b> </button>\n\n<mat-menu class=\"mat-menu\" #menucurrency=\"matMenu\">\n  <button mat-menu-item>USD</button>\n  <button mat-menu-item>EUR</button>\n  <button mat-menu-item>BRL</button>\n  <button mat-menu-item>SEK</button>\n  <button mat-menu-item>CNY</button>\n  <button mat-menu-item>RMB</button>\n</mat-menu>\n\n<button mat-button class=\"menu-button\" [matMenuTriggerFor]=\"menu\"><b>General</b></button>\n\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n  <button mat-menu-item>Item 3</button>\n</mat-menu>\n\n<button mat-button class=\"menu-button\" [matMenuTriggerFor]=\"menu\"><b>Purchasing</b></button>\n\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n  <button mat-menu-item>Item 3</button>\n</mat-menu>\n\n\n</mat-toolbar>\n\n<iframe width=\"1600\" height=\"1000\" src=\"https://app.powerbi.com/view?r=eyJrIjoiMDE1MzhkYTQtNTkxYi00NjEwLTllYTUtM2E4YzE5YjE2ZDVmIiwidCI6ImQyMDA3YmVmLTEyN2QtNDU5MS05N2FjLTEwZDcyZmUyODAzMSIsImMiOjh9\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\n \n<iframe width=\"1600\" height=\"1000\" src=\"https://app.powerbi.com/view?r=eyJrIjoiNWIxZWNjODctOWYxOC00YTQwLThkNjctMjc2MWIyMjg2NjViIiwidCI6ImQ1ZWEwMTEwLWNmZTUtNDM5Yi1hOTQ3LWFhMjdjZDU2ZjA2NyJ9\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\n\n"

/***/ }),

/***/ "../../../../../src/app/aidashboard/aidashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AidashboardComponent; });
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

var AidashboardComponent = (function () {
    function AidashboardComponent() {
        this.myVar = true;
    }
    AidashboardComponent.prototype.ngOnInit = function () {
    };
    AidashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aidashboard',
            template: __webpack_require__("../../../../../src/app/aidashboard/aidashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aidashboard/aidashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AidashboardComponent);
    return AidashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aidashboard_aidashboard_component__ = __webpack_require__("../../../../../src/app/aidashboard/aidashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'intelligence', component: __WEBPACK_IMPORTED_MODULE_2__aidashboard_aidashboard_component__["a" /* AidashboardComponent */] },
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        data: { preload: true }
    },
    {
        path: 'crisis-center',
        loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
        data: { preload: true }
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#over\r\n{\r\n    width:38.3%;\r\n    height:50px;\r\n}\r\n/*handles the vertical centering*/\r\n.Centerer\r\n{\r\n\tpadding-top: 10px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size: 110%;\r\n\tfont-family: \"electroluxSans\";\r\n}\r\n\r\n.Centered\r\n{\r\n\tmax-height: 100%;\r\n    max-width: 100%;\r\n\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.example-fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.toolbar-class{\r\n    box-shadow: 2px 2px 2px grey;\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n\tpadding-right: 0px;\r\n}\r\n\r\n.toolbar-buttons{\r\n    font-size: 90%;\r\n    height: 100%;\r\n    color: white;\r\n    width: 70%;\r\n    font-family: \"electroluxSans\";\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-class\" fxLayout=\"row\" color=\"primary\">\r\n\r\n<div id=\"over\">\r\n\t<img class=\"Centered\" src=\"assets/icons/robot-face2.png\" />\r\n    <span class=\"Centerer\"> <b> Optilux </b> </span>\r\n\r\n</div>\r\n\r\n    \t<button routerLink=\"/dashboard\" fxFlexOffset=\"0\" style=\"\tborder-right: 1px solid #cccccc; border-left: 1px solid #cccccc; border-bottom: 5px solid #00638F;\" mat-button class=\"toolbar-buttons\">Automation Tools</button>\r\n\r\n    \t<button routerLink=\"/intelligence\" style = \"border-right: 1px solid #cccccc; border-bottom: 3px solid #00638F;\" fxFlexOffset=\"0\" mat-button class=\"toolbar-buttons\">Puchasing Intelligence</button>\r\n\r\n  </mat-toolbar>\r\n\r\n<router-outlet></router-outlet>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aidashboard_aidashboard_component__ = __webpack_require__("../../../../../src/app/aidashboard/aidashboard.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_menu__["a" /* MatMenuModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_sidenav__["a" /* MatSidenavModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__aidashboard_aidashboard_component__["a" /* AidashboardComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map