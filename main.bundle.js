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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_contact_detail_contact_detail_component__ = __webpack_require__("../../../../../src/app/contacts/contact-detail/contact-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contact_edit_contact_edit_component__ = __webpack_require__("../../../../../src/app/contacts/contact-edit/contact-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_new_contact_new_contact_component__ = __webpack_require__("../../../../../src/app/contacts/new-contact/new-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found-component/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_5__contacts_new_contact_new_contact_component__["a" /* NewContactComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'contact/:id', component: __WEBPACK_IMPORTED_MODULE_3__contacts_contact_detail_contact_detail_component__["a" /* ContactDetailComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__contacts_contact_edit_contact_edit_component__["a" /* ContactEditComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    margin: 10px 100px;\n    text-align: left;\n}\n\nmain {\n    padding: 20px;\n}\n\na.titleBar {\n    color: white;\n    text-decoration: none;\n    padding-left: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <a class=\"titleBar\" routerLink=\"/contacts\">{{ title }}</a>\n</mat-toolbar>\n<div>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n</div>"

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
        this.title = 'Contacts';
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

/***/ "../../../../../src/app/app.material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTooltipModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTooltipModule */]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__in_memory_data_service__ = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rxjs_extensions__ = __webpack_require__("../../../../../src/app/rxjs-extensions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_material_module__ = __webpack_require__("../../../../../src/app/app.material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_contact_detail__ = __webpack_require__("../../../../../src/app/contacts/contact-detail/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contacts_contact_edit__ = __webpack_require__("../../../../../src/app/contacts/contact-edit/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contacts_contact_list__ = __webpack_require__("../../../../../src/app/contacts/contact-list/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contacts_contact_feed__ = __webpack_require__("../../../../../src/app/contacts/contact-feed/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contacts_shared_services__ = __webpack_require__("../../../../../src/app/contacts/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contacts_shared_favorite_icon__ = __webpack_require__("../../../../../src/app/contacts/shared/favorite-icon/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found-component/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contacts_shared_phone_number__ = __webpack_require__("../../../../../src/app/contacts/shared/phone-number/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contacts_new_contact_new_contact_component__ = __webpack_require__("../../../../../src/app/contacts/new-contact/new-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contacts_shared_show_contacts__ = __webpack_require__("../../../../../src/app/contacts/shared/show-contacts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__contacts_shared__ = __webpack_require__("../../../../../src/app/contacts/shared/index.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contacts_contact_edit__["a" /* ContactEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contacts_contact_detail__["a" /* ContactDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__contacts_contact_feed__["a" /* ContactFeedDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contacts_contact_list__["a" /* ContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contacts_shared_favorite_icon__["a" /* FavoriteIconDirective */],
                __WEBPACK_IMPORTED_MODULE_22__contacts_shared__["b" /* InvalidEmailModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__contacts_shared__["c" /* InvalidPhoneNumberModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_17__contacts_shared_phone_number__["a" /* PhoneNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_18__contacts_new_contact_new_contact_component__["a" /* NewContactComponent */],
                __WEBPACK_IMPORTED_MODULE_19__contacts_shared_show_contacts__["a" /* ShowContactsDirective */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__contacts_contact_feed__["a" /* ContactFeedDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__contacts_shared__["b" /* InvalidEmailModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__contacts_shared__["c" /* InvalidPhoneNumberModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__in_memory_data_service__["a" /* InMemoryDataService */], { dataEncapsulation: true }),
                __WEBPACK_IMPORTED_MODULE_21__app_routing_module__["a" /* RoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__contacts_shared_services__["b" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_14__contacts_shared_services__["a" /* ContactFeedService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contact-detail/contact-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages {\n  text-align: center;\n}\n\n.back-button {\n  cursor: pointer;\n  margin-top: 10px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.back-button-icon {\n  color: white;\n}\n\n.feed-button {\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.feed-button-icon {\n  color: white;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.buttons div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.avatar {\n  margin-top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contact-detail/contact-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\">\n  <h6 class=\"messages\">{{ loadingContactMessage }}</h6>\n  <mat-progress-bar class=\"app-progress\" mode=\"indeterminate\"\n                   aria-label=\"Indeterminate progress-bar example\"></mat-progress-bar>\n</div>\n\n<div *ngIf=\"!isLoading && contact !== null\">\n  <mat-card>\n    <mat-card-title-group>\n      <mat-icon>mood</mat-icon>\n      <mat-card-title>\n        {{ contact.name }}\n      </mat-card-title>\n      <mat-card-subtitle>{{ contact.email }}</mat-card-subtitle>\n      <mat-card-subtitle>\n        {{ contact.number | phoneNumber : \"default\" : contact.country }}\n      </mat-card-subtitle>\n    </mat-card-title-group>\n  </mat-card>\n</div>\n\n<div *ngIf=\"!isLoading && contact === null\">\n  <h6 class=\"messages\">{{ noContactFoundMessage }}</h6>\n</div>\n\n<div class=\"buttons\" *ngIf=\"!isLoading\">\n  <div>\n    <a routerLink=\"/contacts\">\n      <button mat-fab class=\"back-button\">\n        <mat-icon class=\"back-button-icon\" matTooltip=\"Add new contact\">forward</mat-icon>\n      </button>\n    </a>\n  </div>\n\n  <div>\n    <button mat-fab class=\"feed-button\" color=\"primary\" (click)=\"openDialog()\">\n      <mat-icon class=\"feed-button-icon\">rss_feed</mat-icon>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contact-detail/contact-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_feed__ = __webpack_require__("../../../../../src/app/contacts/contact-feed/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/contacts/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_detail_constants__ = __webpack_require__("../../../../../src/app/contacts/contact-detail/contact-detail.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactDetailComponent = (function () {
    function ContactDetailComponent(contactService, route, dialog) {
        this.contactService = contactService;
        this.route = route;
        this.dialog = dialog;
        this.loadingContactMessage = __WEBPACK_IMPORTED_MODULE_4__contact_detail_constants__["a" /* constants */].LOADING_CONTACT_MESSAGE;
        this.noContactFoundMessage = __WEBPACK_IMPORTED_MODULE_4__contact_detail_constants__["a" /* constants */].NO_CONTACT_FOUND_MESSAGE;
        this.isLoading = true;
        this.contact = null;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        this.loadContact();
    };
    ContactDetailComponent.prototype.loadContact = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.contactService.getContact(id)
                .then(function (contact) {
                _this.isLoading = false;
                _this.contact = contact;
            });
        });
    };
    ContactDetailComponent.prototype.openDialog = function () {
        var _this = this;
        // For instructional purposes, insert a slight delay before opening the dialog
        setTimeout(function () {
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__contact_feed__["a" /* ContactFeedDialogComponent */], { disableClose: true, data: { name: _this.contact.name } });
            dialogRef.afterClosed().subscribe(function (result) {
                // TODO do something here if Follow is clicked
            });
        }, 500);
    };
    ContactDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-detail',
            template: __webpack_require__("../../../../../src/app/contacts/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */]])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contact-detail/contact-detail.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
var constants = {
    NO_CONTACT_FOUND_MESSAGE: 'Contact not found',
    LOADING_CONTACT_MESSAGE: 'Loading contact...'
};


/***/ }),

/***/ "../../../../../src/app/contacts/contact-detail/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_detail_component__ = __webpack_require__("../../../../../src/app/contacts/contact-detail/contact-detail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_detail_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/contacts/contact-edit/contact-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages {\n  text-align: center;\n}\n\n.back-button {\n  cursor: pointer;\n  margin-top: 10px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.back-button-icon {\n  color: white;\n}\n\n.avatar {\n  margin-top: 15px;\n}\n\ninput {\n  width: 300px;\n}\n\ni {\n  cursor: pointer;\n}\n\n.left-padding {\n  padding-left: 35px;\n}\n\n.update-contact-button {\n  padding-left: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contact-edit/contact-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"isLoading\">\n    <h6 class=\"messages\">{{ loadingContactMessage }}</h6>\n    <mat-progress-bar class=\"app-progress\" mode=\"indeterminate\"\n      aria-label=\"Indeterminate progress-bar example\"></mat-progress-bar>\n  </div>\n\n  <div *ngIf=\"!isLoading && contact !== null\">\n    <mat-card>\n      <mat-card-title-group>\n        <mat-icon>mood</mat-icon>\n          <mat-card-title>\n            <i [appFavoriteIcon]=\"contact.favorite\" [color]=\"'gold'\"\n              [matTooltip]=\"contact.favorite ? 'Starred' : 'Not Starred'\"\n              (click)=\"saveContact(contact)\"></i>\n            <mat-form-field>\n              <input matInput placeholder=\"Name\" [(ngModel)]=\"contact.name\" class=\"contact-name\" />\n            </mat-form-field>\n          </mat-card-title>\n          <mat-card-subtitle class=\"left-padding\">\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" [(ngModel)]=\"contact.email\" />\n            </mat-form-field>\n          </mat-card-subtitle>\n          <mat-card-subtitle class=\"left-padding\">\n            <mat-form-field>\n              <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"contact.number\" />\n            </mat-form-field>\n          </mat-card-subtitle>\n          <mat-card-subtitle class=\"left-padding\">\n            <mat-form-field>\n              <mat-select placeholder=\"Country code\" [(ngModel)]=\"contact.country\">\n                <mat-option *ngFor=\"let countryDialingCode of countryDialingCodes\" [value]=\"countryDialingCode\">\n                  {{ countryDialingCode }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </mat-card-subtitle>\n      </mat-card-title-group>\n      <div class=\"update-contact-button\">\n        <button (click)=\"updateContact(contact)\" mat-raised-button color=\"primary\">\n          Update Contact\n        </button>\n      </div>\n    </mat-card>\n  </div>\n\n  <div *ngIf=\"!isLoading && contact === null\">\n    <h6 class=\"messages\">{{ noContactFoundMessage }}</h6>\n  </div>\n\n  <a *ngIf=\"!isLoading\" routerLink=\"/contacts\">\n    <button mat-fab class=\"back-button\"><mat-icon class=\"back-button-icon\" matTooltip=\"Add new contact\">forward</mat-icon></button>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/contact-edit/contact-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/contacts/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_edit_constants__ = __webpack_require__("../../../../../src/app/contacts/contact-edit/contact-edit.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContactEditComponent = (function () {
    function ContactEditComponent(contactService, route, router, snackBar, dialog) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.loadingContactMessage = __WEBPACK_IMPORTED_MODULE_4__contact_edit_constants__["a" /* constants */].LOADING_CONTACT_MESSAGE;
        this.noContactFoundMessage = __WEBPACK_IMPORTED_MODULE_4__contact_edit_constants__["a" /* constants */].NO_CONTACT_FOUND_MESSAGE;
        this.isLoading = true;
        this.contact = null;
        this.countryDialingCodes = this.getKeys(__WEBPACK_IMPORTED_MODULE_3__shared__["d" /* countryDialingCodes */]);
    }
    ContactEditComponent.prototype.ngOnInit = function () {
        this.loadContact();
    };
    ContactEditComponent.prototype.saveContact = function (contact) {
        contact.favorite = !contact.favorite;
        this.contactService.save(contact);
    };
    ContactEditComponent.prototype.loadContact = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.contactService.getContact(id)
                .then(function (contact) {
                _this.isLoading = false;
                _this.contact = contact;
            });
        });
    };
    ContactEditComponent.prototype.updateContact = function (contact) {
        var _this = this;
        if (!this.isContactValid(contact)) {
            return;
        }
        this.displayEditSnackBar();
        this.contactService.save(contact)
            .then(function () {
            _this.router.navigate(['/']);
        });
    };
    ContactEditComponent.prototype.getKeys = function (object) {
        return Object.keys(object).map(function (key, value) { return key; });
    };
    ContactEditComponent.prototype.displayEditSnackBar = function () {
        var message = 'Contact updated';
        var snackConfig = { duration: 2000 };
        var actionLabel = '';
        this.snackBar.open(message, actionLabel, snackConfig);
    };
    ContactEditComponent.prototype.isEmailValid = function (email) {
        return email === '' || (email !== '' && email.includes('@') && email.includes('.'));
    };
    ContactEditComponent.prototype.isPhoneNumberValid = function (phoneNumber) {
        return phoneNumber === '' || (phoneNumber !== '' && phoneNumber.length === 10 && /^\d+$/.test(phoneNumber));
    };
    ContactEditComponent.prototype.isContactValid = function (contact) {
        if (!this.isEmailValid(contact.email)) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* InvalidEmailModalComponent */]);
            return false;
        }
        if (!this.isPhoneNumberValid(contact.number)) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared__["c" /* InvalidPhoneNumberModalComponent */]);
            return false;
        }
        return true;
    };
    ContactEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-detail',
            template: __webpack_require__("../../../../../src/app/contacts/contact-edit/contact-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contact-edit/contact-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSnackBar */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], ContactEditComponent);
    return ContactEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contact-edit/contact-edit.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
var constants = {
    INVALID_PHONE_NUMBER_MESSAGE: 'Please enter a phone number with 10 digits (For example, 2125551234).',
    INVALID_EMAIL_ADDRESS_MESSAGE: 'Please enter a valid email address.',
    NO_CONTACTS_FOUND_MESSAGE: 'You do not have any contacts yet',
    LOADING_CONTACTS_MESSAGE: 'Loading contacts...',
    NO_CONTACT_FOUND_MESSAGE: 'Contact not found',
    LOADING_CONTACT_MESSAGE: 'Loading contact...'
};


/***/ }),

/***/ "../../../../../src/app/contacts/contact-edit/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_edit_component__ = __webpack_require__("../../../../../src/app/contacts/contact-edit/contact-edit.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_edit_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/contacts/contact-feed/contact-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages {\n  text-align: center;\n}\n\n.update-time {\n  color: grey\n}\n\n.buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contact-feed/contact-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Latest posts from {{name}}</h2>\n<mat-dialog-content>\n<mat-list *ngIf=\"updates.length > 0\">\n    <mat-list-item *ngFor=\"let update of updates\">\n      <h4 mat-line>{{update}}</h4>\n      <p class=\"update-time\" mat-line>at Wed 12:00</p>\n    </mat-list-item>\n</mat-list>\n\n<mat-progress-bar color=\"secondary\" mode=\"indeterminate\" *ngIf=\"updates.length == 0\"></mat-progress-bar>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"buttons\">\n      <button mat-raised-button mat-dialog-close disabled=\"{{closeDisabled}}\">Close</button>\n      <button mat-raised-button class=\"follow\" color=\"primary\" disabled=\"{{updates.length < 2}}\">Follow</button>\n  </div>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contact-feed/contact-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFeedDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_contact_feed_service__ = __webpack_require__("../../../../../src/app/contacts/shared/services/contact-feed.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ContactFeedDialogComponent = (function () {
    function ContactFeedDialogComponent(dialogRef, feed, zone, data) {
        this.dialogRef = dialogRef;
        this.feed = feed;
        this.zone = zone;
        this.updates = [];
        this.closeDisabled = true;
        this.name = data.name;
    }
    ContactFeedDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*
         This version runs inside the Angular zone, and will block Protractor testing indefinitely.
         this.sub = this.feed.getFeed().subscribe((x) => {
           this.updates.push(x);
           if (this.updates.length > 5) {
             this.updates.shift();
           }
         });
         */
        this.closeDisabled = false;
        this.zone.runOutsideAngular(function () {
            _this.sub = _this.feed.getFeed().subscribe(function (x) {
                _this.zone.run(function () {
                    _this.updates.push(x);
                    if (_this.updates.length > 4) {
                        _this.updates.shift();
                    }
                });
            });
        });
    };
    ContactFeedDialogComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ContactFeedDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-feed',
            template: __webpack_require__("../../../../../src/app/contacts/contact-feed/contact-feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contact-feed/contact-feed.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_2__shared_services_contact_feed_service__["a" /* ContactFeedService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], Object])
    ], ContactFeedDialogComponent);
    return ContactFeedDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contact-feed/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_feed_component__ = __webpack_require__("../../../../../src/app/contacts/contact-feed/contact-feed.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_feed_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/contacts/contact-list/contact-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  margin-left: auto; \n  margin-right: auto;\n  width: 50%;\n}\n\ntr {\n  cursor: pointer;\n}\n\n.messages {\n  text-align: center;\n}\n\n.add-fab {\n  float: right;\n  cursor: pointer;\n}\n\n.add-fab-icon {\n  color: white;\n}\n\n.edit-icon {\n  color: white;\n}\n\n.edit-icon:hover {\n  color: black;\n}\n\n.delete-icon {\n  color: white;\n}\n\n.delete-icon:hover {\n  color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *appShowContacts=\"contacts.length && !deletingContact && !deletingContacts\">\n  <table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n    <thead>\n      <tr>\n        <th class=\"mdl-data-table__cell--non-numeric\"></th>\n        <th class=\"mdl-data-table__cell--non-numeric\">Name</th>\n        <th class=\"mdl-data-table__cell--non-numeric\">Email</th>\n        <th class=\"mdl-data-table__cell--non-numeric\">Number</th>\n        <th class=\"mdl-data-table__cell--non-numeric\"></th>\n        <th class=\"mdl-data-table__cell--non-numeric\"></th>\n        <th class=\"mdl-data-table__cell--non-numeric\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let contact of contacts\" (click)=\"onSelect(contact)\">\n        <td class=\"mdl-data-table__cell--non-numeric\" (click)=\"onClick(contact)\">\n            <mat-icon>mood</mat-icon>\n        </td>\n        <td class=\"mdl-data-table__cell--non-numeric\" (click)=\"onClick(contact)\"><strong>{{ contact.name }}</strong></td>\n        <td class=\"mdl-data-table__cell--non-numeric\" (click)=\"onClick(contact)\">{{ contact.email }}</td>\n        <td class=\"mdl-data-table__cell--non-numeric\" (click)=\"onClick(contact)\">\n          {{ contact.number | phoneNumber : \"default\" : contact.country : true }}\n        </td>\n        <td>\n          <mat-icon class=\"edit-icon\" (click)=\"editContact(contact)\" matTooltip=\"Edit\">\n            edit\n          </mat-icon>\n        </td>\n        <td>\n          <mat-icon class=\"delete-icon\" (click)=\"deleteContact(contact)\" matTooltip=\"Delete\">\n            delete\n          </mat-icon>\n        </td>\n        <td class=\"mdl-data-table__cell--non-numeric icon\">\n          <i [appFavoriteIcon]=\"contact.favorite\" [color]=\"'gold'\"\n             [matTooltip]=\"contact.favorite ? 'Starred' : 'Not Starred'\"\n             (click)=\"saveContact(contact)\"></i>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <br>\n  <button mat-raised-button color=\"primary\" (click)=\"deleteContacts()\">\n      Delete All Contacts\n  </button>\n  <a *ngIf=\"!isLoading && !deletingContact\" routerLink=\"/add\">\n    <button mat-fab class=\"add-fab\" id=\"add-contact\"><mat-icon class=\"add-fab-icon\" matTooltip=\"Add new contact\">add</mat-icon></button>\n  </a>\n</div>\n\n<div *appShowContacts=\"!contacts.length && !isLoading && !deletingContact && !deletingContacts\">\n  <h6 class=\"messages\">{{ noContactsFoundMessage }}</h6>\n  <button (click)=\"refreshContacts()\" mat-raised-button color=\"primary\">Add Contacts</button>\n</div>\n\n<div *appShowContacts=\"!contacts.length && isLoading && !deletingContact && !deletingContacts\">\n  <h6 class=\"messages\">{{ loadingContactsMessage }}</h6>\n  <mat-progress-bar class=\"app-progress\" mode=\"indeterminate\"\n    aria-label=\"Indeterminate progress-bar example\"></mat-progress-bar>\n</div>\n\n<div *appShowContacts=\"deletingContact\">\n    <h6 class=\"messages\">{{ deletingContactMessage }}</h6>\n    <mat-progress-bar class=\"app-progress\" mode=\"indeterminate\"\n                     aria-label=\"Indeterminate progress-bar example\"></mat-progress-bar>\n</div>\n\n<div *appShowContacts=\"deletingContacts\">\n    <h6 class=\"messages\">{{ deletingContactsMessage }}</h6>\n    <mat-progress-bar class=\"app-progress\" mode=\"indeterminate\"\n                     aria-label=\"Indeterminate progress-bar example\"></mat-progress-bar>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/contacts/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_list_constants__ = __webpack_require__("../../../../../src/app/contacts/contact-list/contact-list.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_mock_contacts__ = __webpack_require__("../../../../../src/app/contacts/shared/data/mock-contacts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactListComponent = (function () {
    function ContactListComponent(contactService, router, snackBar) {
        this.contactService = contactService;
        this.router = router;
        this.snackBar = snackBar;
        this.noContactsFoundMessage = __WEBPACK_IMPORTED_MODULE_4__contact_list_constants__["a" /* constants */].NO_CONTACTS_FOUND_MESSAGE;
        this.loadingContactsMessage = __WEBPACK_IMPORTED_MODULE_4__contact_list_constants__["a" /* constants */].LOADING_CONTACTS_MESSAGE;
        this.deletingContactsMessage = __WEBPACK_IMPORTED_MODULE_4__contact_list_constants__["a" /* constants */].DELETING_CONTACTS_MESSAGE;
        this.deletingContactMessage = __WEBPACK_IMPORTED_MODULE_4__contact_list_constants__["a" /* constants */].DELETING_CONTACT_MESSAGE;
        this.isLoading = true;
        this.deletingContacts = false;
        this.deletingContact = false;
        this.backupContacts = __WEBPACK_IMPORTED_MODULE_5__shared_data_mock_contacts__["a" /* CONTACTS */].slice();
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactListComponent.prototype.onClick = function (contact) {
        this.router.navigate(['/contact', contact.id]);
    };
    ContactListComponent.prototype.editContact = function (contact) {
        this.router.navigate(['/edit', contact.id]);
    };
    ContactListComponent.prototype.displayDeleteSnackBar = function (contact) {
        var message = contact.name + " deleted.";
        var snackConfig = { duration: 2000 };
        var actionLabel = '';
        this.snackBar.open(message, actionLabel, snackConfig);
    };
    ContactListComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.deletingContact = true;
        this.displayDeleteSnackBar(contact);
        this.contactService
            .delete(contact)
            .then(function () {
            _this.contacts = _this.contacts.filter(function (c) { return c !== contact; });
            if (_this.selectedContact === contact) {
                _this.selectedContact = null;
            }
            _this.deletingContact = false;
        });
    };
    ContactListComponent.prototype.deleteContacts = function () {
        var _this = this;
        this.deletingContacts = true;
        this.contacts.forEach(function (contact, index) {
            _this.contactService.delete(contact);
            if (index === _this.contacts.length - 1) {
                _this.getContacts();
            }
        });
    };
    ContactListComponent.prototype.getContacts = function () {
        var _this = this;
        this.isLoading = true;
        this.contactService.getContacts()
            .then(function (contacts) {
            _this.isLoading = false;
            _this.deletingContacts = false;
            _this.contacts = contacts;
        });
    };
    ContactListComponent.prototype.refreshContacts = function () {
        var _this = this;
        this.backupContacts.forEach(function (contact, index) {
            _this.contactService.post(contact);
            if (index === _this.backupContacts.length - 1) {
                _this.getContacts();
            }
        });
    };
    ContactListComponent.prototype.saveContact = function (contact) {
        contact.favorite = !contact.favorite;
        this.contactService.save(contact);
    };
    ContactListComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('contacts'),
        __metadata("design:type", Array)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-list',
            template: __webpack_require__("../../../../../src/app/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contact-list/contact-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSnackBar */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSnackBar */]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contact-list/contact-list.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
var constants = {
    NO_CONTACTS_FOUND_MESSAGE: 'You do not have any contacts yet',
    LOADING_CONTACTS_MESSAGE: 'Loading contacts...',
    DELETING_CONTACTS_MESSAGE: 'Deleting contacts...',
    DELETING_CONTACT_MESSAGE: 'Deleting contact...',
};


/***/ }),

/***/ "../../../../../src/app/contacts/contact-list/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_list_component__ = __webpack_require__("../../../../../src/app/contacts/contact-list/contact-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_list_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-contact-list [contacts]=contacts></app-contact-list>"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
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

var ContactsComponent = (function () {
    function ContactsComponent() {
        this.contacts = [];
    }
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/new-contact/new-contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-button {\n    color: white;\n    cursor: pointer;\n    margin-top: 10px;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n\n.messages {\n    text-align: center;\n}\n\nmd-input {\n    width: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/new-contact/new-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contact && !savingContact\">\n  <mat-card>\n    <div>\n      <h4>Add New Contact</h4>\n      <mat-form-field>\n        <input matInput type=\"text\" id=\"contact-name\"\n            placeholder=\"Name\" align=\"end\" [(ngModel)]=\"contact.name\" required />\n      </mat-form-field>\n      <br />\n      <div *ngIf=\"contact.name\">\n        <mat-form-field>\n          <input matInput type=\"email\" css=\"contact-email\" id=\"contact-email\"\n              placeholder=\"Email\" align=\"end\" [(ngModel)]=\"contact.email\" />\n        </mat-form-field>\n        <br />\n        <mat-form-field>\n          <input matInput id=\"tel\" type=\"tel\" id=\"contact-tel\"\n              placeholder=\"Phone Number (10 digits)\" align=\"end\" [(ngModel)]=\"contact.number\" />\n        </mat-form-field>\n        <br />\n        <button class=\"create-button\" (click)=\"addNewContact(contact)\" mat-raised-button color=\"primary\">Create</button>\n       </div>\n    </div>\n  </mat-card>\n  <a *ngIf=\"!savingContact\" routerLink=\"/contacts\">\n    <button mat-fab class=\"back-button\"><mat-icon class=\"back-button-icon\">forward</mat-icon></button>\n  </a>\n</div>\n<div *ngIf=\"savingContact\">\n  <h6 class=\"messages\">Saving Contact...</h6>\n  <mat-progress-bar class=\"app-progress\" mode=\"indeterminate\"\n                     aria-label=\"Indeterminate progress-bar example\"></mat-progress-bar>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/new-contact/new-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_contact_service__ = __webpack_require__("../../../../../src/app/contacts/shared/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/contacts/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewContactComponent = (function () {
    function NewContactComponent(contactService, router, dialog) {
        this.contactService = contactService;
        this.router = router;
        this.dialog = dialog;
        this.savingContact = false;
    }
    NewContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts()
            .then(function (contacts) { _this.createNewContact(contacts.length); });
    };
    NewContactComponent.prototype.createNewContact = function (numContacts) {
        var contactId = numContacts + 1;
        this.contact = {
            id: contactId,
            email: '',
            number: '',
            country: 'us',
            favorite: false
        };
    };
    NewContactComponent.prototype.addNewContact = function (contact) {
        var _this = this;
        if (!this.isFormValid()) {
            return;
        }
        this.savingContact = true;
        this.contactService.save(contact)
            .then(function () {
            _this.savingContact = false;
            _this.router.navigate(['/']);
        });
    };
    NewContactComponent.prototype.isEmailValid = function () {
        return this.contact.email === '' ||
            (this.contact.email !== '' && this.contact.email.includes('@') && this.contact.email.includes('.'));
    };
    NewContactComponent.prototype.isPhoneNumberValid = function () {
        return this.contact.number === '' ||
            this.contact.number !== '' && this.contact.number.length === 10 && /^\d+$/.test(this.contact.number);
    };
    NewContactComponent.prototype.isFormValid = function () {
        if (!this.isEmailValid()) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared__["b" /* InvalidEmailModalComponent */]);
            return false;
        }
        if (!this.isPhoneNumberValid()) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared__["c" /* InvalidPhoneNumberModalComponent */]);
            return false;
        }
        return true;
    };
    NewContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-contact',
            template: __webpack_require__("../../../../../src/app/contacts/new-contact/new-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/new-contact/new-contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], NewContactComponent);
    return NewContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/shared/data/mock-contacts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTACTS; });
var CONTACTS = [
    {
        id: 1,
        name: 'Adrian Directive',
        email: 'adrian.directive@example.com',
        number: '7035550123',
        country: 'us',
        favorite: true
    },
    {
        id: 2,
        name: 'Rusty Component',
        email: 'rusty.component@example.com',
        number: '4415550122',
        country: 'bm',
        favorite: false
    },
    {
        id: 3,
        name: 'Jeff Pipe',
        email: 'jeff.pipe@example.com',
        number: '7145550111',
        country: 'us',
        favorite: true
    },
    {
        id: 4,
        name: 'Craig Service',
        email: 'craig.services@example.com',
        number: '5145550132',
        country: 'ca',
        favorite: false
    }
];


/***/ }),

/***/ "../../../../../src/app/contacts/shared/favorite-icon/favorite-icon.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
var constants = {
    classes: {
        SOLID_STAR: 'fa fa-star fa-lg',
        OUTLINE_STAR: 'fa fa-star-o fa-lg',
        SOLID_STAR_STYLE_LIST: ['fa', 'fa-star', 'fa-lg'],
        OUTLINE_STAR_STYLE_LIST: ['fa', 'fa-star-o', 'fa-lg']
    }
};


/***/ }),

/***/ "../../../../../src/app/contacts/shared/favorite-icon/favorite-icon.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteIconDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorite_icon_constants__ = __webpack_require__("../../../../../src/app/contacts/shared/favorite-icon/favorite-icon.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * FavoriteIconDirective
 * =====================
 * The FavoriteIconDirective takes in a boolean and applies a star depending
 * to the element depending on whether the boolean is true or false. If the
 * boolean is false, when the element is rolled over a outlined star appears,
 * otherwise a star with the primary color will show up. The default primary
 * color is gold. You can set the primary star color by specifying the second
 * optional color parameter.
 *
 * Usage:
 * <element [appFavoriteIcon]="expression"></element>
 *
 * Example:
 * <i [appFavoriteIcon]="contact.favorite"></i>
 *
 *
 * Color (optional)
 * ---------------------------------
 * The second parameter is the color of the star.
 *
 * Usage:
 * <element [appFavoriteIcon]="expression" [color]="'color'"></element>
 *
 * Example:
 * <i [appFavoriteIcon]="contact.favorite" [color]="'blue'></i>
 */
var FavoriteIconDirective = (function () {
    function FavoriteIconDirective(element, renderer) {
        this._primaryColor = 'gold';
        this._starClasses = __WEBPACK_IMPORTED_MODULE_1__favorite_icon_constants__["a" /* constants */].classes;
        this.element = element.nativeElement;
        this.renderer = renderer;
    }
    Object.defineProperty(FavoriteIconDirective.prototype, "color", {
        set: function (primaryColorName) {
            if (primaryColorName) {
                this._primaryColor = primaryColorName.toLowerCase();
                this.setSolidColoredStar();
            }
        },
        enumerable: true,
        configurable: true
    });
    FavoriteIconDirective.prototype.ngOnInit = function () {
        if (this.isFavorite) {
            this.setSolidColoredStar();
        }
        else {
            this.setWhiteSolidStar();
        }
    };
    FavoriteIconDirective.prototype.onMouseEnter = function () {
        if (!this.isFavorite) {
            this.setBlackOulineStar();
        }
    };
    FavoriteIconDirective.prototype.onMouseLeave = function () {
        if (!this.isFavorite) {
            this.setWhiteSolidStar();
        }
    };
    FavoriteIconDirective.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        if (this.isFavorite) {
            this.setSolidColoredStar();
        }
        else {
            this.setBlackOulineStar();
        }
    };
    FavoriteIconDirective.prototype.setBlackOulineStar = function () {
        this.setStarColor('black');
        this.setStarClass('outline');
    };
    FavoriteIconDirective.prototype.setSolidColoredStar = function () {
        this.setStarColor(this._primaryColor);
        this.setStarClass('solid');
    };
    FavoriteIconDirective.prototype.setWhiteSolidStar = function () {
        this.setStarColor('white');
        this.setStarClass('solid');
    };
    FavoriteIconDirective.prototype.setStarClass = function (starType) {
        var className = this.getStarClasses(starType);
        this.renderer.setElementAttribute(this.element, 'class', className);
    };
    FavoriteIconDirective.prototype.setStarColor = function (color) {
        this.renderer.setElementStyle(this.element, 'color', color);
    };
    FavoriteIconDirective.prototype.getStarClasses = function (starType) {
        var classNames = '';
        switch (starType) {
            case 'solid':
                classNames = this._starClasses.SOLID_STAR;
                break;
            case 'outline':
                classNames = this._starClasses.OUTLINE_STAR;
                break;
            default:
                classNames = this._starClasses.SOLID_STAR;
        }
        return classNames;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('appFavoriteIcon'),
        __metadata("design:type", Boolean)
    ], FavoriteIconDirective.prototype, "isFavorite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FavoriteIconDirective.prototype, "color", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FavoriteIconDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FavoriteIconDirective.prototype, "onMouseLeave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FavoriteIconDirective.prototype, "onClick", null);
    FavoriteIconDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appFavoriteIcon]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], FavoriteIconDirective);
    return FavoriteIconDirective;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/shared/favorite-icon/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorite_icon_directive__ = __webpack_require__("../../../../../src/app/contacts/shared/favorite-icon/favorite-icon.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__favorite_icon_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/contacts/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_mock_contacts__ = __webpack_require__("../../../../../src/app/contacts/shared/data/mock-contacts.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorite_icon_favorite_icon_directive__ = __webpack_require__("../../../../../src/app/contacts/shared/favorite-icon/favorite-icon.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_number_phone_number_pipe__ = __webpack_require__("../../../../../src/app/contacts/shared/phone-number/phone-number.pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__phone_number_country_dialing_codes__ = __webpack_require__("../../../../../src/app/contacts/shared/phone-number/country-dialing-codes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__phone_number_country_dialing_codes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contact_service__ = __webpack_require__("../../../../../src/app/contacts/shared/services/contact.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__services_contact_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_contacts_show_contacts_directive__ = __webpack_require__("../../../../../src/app/contacts/shared/show-contacts/show-contacts.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_invalid_email_modal_invalid_email_modal_component__ = __webpack_require__("../../../../../src/app/contacts/shared/modals/invalid-email-modal/invalid-email-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__modals_invalid_email_modal_invalid_email_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_invalid_phone_number_modal_invalid_phone_number_modal_component__ = __webpack_require__("../../../../../src/app/contacts/shared/modals/invalid-phone-number-modal/invalid-phone-number-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__modals_invalid_phone_number_modal_invalid_phone_number_modal_component__["a"]; });










/***/ }),

/***/ "../../../../../src/app/contacts/shared/modals/invalid-email-modal/invalid-email-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/shared/modals/invalid-email-modal/invalid-email-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Invalid Email Address</h1>\n<div mat-dialog-content>{{ invalidEmailMessage }}</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Ok</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/shared/modals/invalid-email-modal/invalid-email-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidEmailModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_constants__ = __webpack_require__("../../../../../src/app/contacts/shared/modals/modal.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvalidEmailModalComponent = (function () {
    function InvalidEmailModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.invalidEmailMessage = __WEBPACK_IMPORTED_MODULE_2__modal_constants__["a" /* constants */].INVALID_EMAIL_ADDRESS_MESSAGE;
    }
    InvalidEmailModalComponent.prototype.ngOnInit = function () {
    };
    InvalidEmailModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invalid-email-modal',
            template: __webpack_require__("../../../../../src/app/contacts/shared/modals/invalid-email-modal/invalid-email-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/shared/modals/invalid-email-modal/invalid-email-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]])
    ], InvalidEmailModalComponent);
    return InvalidEmailModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/shared/modals/invalid-phone-number-modal/invalid-phone-number-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/shared/modals/invalid-phone-number-modal/invalid-phone-number-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Invalid Phone Number</h1>\n<div mat-dialog-content>{{ invalidPhoneNumberMessage }}</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Ok</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/shared/modals/invalid-phone-number-modal/invalid-phone-number-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidPhoneNumberModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_constants__ = __webpack_require__("../../../../../src/app/contacts/shared/modals/modal.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvalidPhoneNumberModalComponent = (function () {
    function InvalidPhoneNumberModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.invalidPhoneNumberMessage = __WEBPACK_IMPORTED_MODULE_2__modal_constants__["a" /* constants */].INVALID_PHONE_NUMBER_MESSAGE;
    }
    InvalidPhoneNumberModalComponent.prototype.ngOnInit = function () {
    };
    InvalidPhoneNumberModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invalid-phone-number-modal',
            template: __webpack_require__("../../../../../src/app/contacts/shared/modals/invalid-phone-number-modal/invalid-phone-number-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/shared/modals/invalid-phone-number-modal/invalid-phone-number-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]])
    ], InvalidPhoneNumberModalComponent);
    return InvalidPhoneNumberModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/shared/modals/modal.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
var constants = {
    INVALID_PHONE_NUMBER_MESSAGE: 'Please enter a phone number with 10 digits (For example, 2125551234).',
    INVALID_EMAIL_ADDRESS_MESSAGE: 'Please enter a valid email address.'
};


/***/ }),

/***/ "../../../../../src/app/contacts/shared/phone-number/country-dialing-codes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countryDialingCodes; });
var countryDialingCodes = {
    'AG': 1,
    'AI': 1,
    'AS': 1,
    'BB': 1,
    'BM': 1,
    'BS': 1,
    'CA': 1,
    'DM': 1,
    'DO': 1,
    'GD': 1,
    'GU': 1,
    'JM': 1,
    'KN': 1,
    'KY': 1,
    'LC': 1,
    'MP': 1,
    'MS': 1,
    'PR': 1,
    'SX': 1,
    'TC': 1,
    'TT': 1,
    'US': 1,
    'VC': 1,
    'VI': 1,
    'VG': 1
};


/***/ }),

/***/ "../../../../../src/app/contacts/shared/phone-number/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phone_number_pipe__ = __webpack_require__("../../../../../src/app/contacts/shared/phone-number/phone-number.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__phone_number_pipe__["a"]; });



/***/ }),

/***/ "../../../../../src/app/contacts/shared/phone-number/phone-number-error-messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return phoneNumberErrorMessages; });
var phoneNumberErrorMessages = {
    INVALID_PHONE_NUMBER_TYPE_ERR: "The phone number type you have entered is\n    invalid. The should number in a string or number format.",
    INVALID_PHONE_NUMBER_LENGTH_ERR: "The phone number you have entered is not\n    the proper length. It should be 10 characters long.",
    INVALID_COUNTRY_CODE_WARN: "Unrecognized country code entered.",
    INVALID_FORMAT_WARN: "Unrecognized phone format entered. Using default\n    (XXX) XXX-XXXX format."
};


/***/ }),

/***/ "../../../../../src/app/contacts/shared/phone-number/phone-number.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_dialing_codes__ = __webpack_require__("../../../../../src/app/contacts/shared/phone-number/country-dialing-codes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_number_error_messages__ = __webpack_require__("../../../../../src/app/contacts/shared/phone-number/phone-number-error-messages.ts");


var PhoneNumber = (function () {
    function PhoneNumber(phoneNumber) {
        this.areaCode = this.getAreaCode(phoneNumber);
        this.prefix = this.getPrefixCode(phoneNumber);
        this.suffix = this.getSuffixCode(phoneNumber);
    }
    PhoneNumber.prototype.getAreaCode = function (phoneNumber) {
        return phoneNumber.substring(0, 3);
    };
    PhoneNumber.prototype.getPrefixCode = function (phoneNumber) {
        return phoneNumber.substring(3, 6);
    };
    PhoneNumber.prototype.getSuffixCode = function (phoneNumber) {
        return phoneNumber.substring(6);
    };
    PhoneNumber.prototype.getDefaultFormattedPhoneNumber = function () {
        return "(" + this.areaCode + ") " + this.prefix + "-" + this.suffix;
    };
    PhoneNumber.prototype.getHyphensFormattedPhoneNumber = function () {
        return this.areaCode + "-" + this.prefix + "-" + this.suffix;
    };
    PhoneNumber.prototype.getDotsFormattedPhoneNumber = function () {
        return this.areaCode + "." + this.prefix + "." + this.suffix;
    };
    PhoneNumber.prototype.getInternationCountryCodeStr = function (countryCode) {
        countryCode = countryCode.toUpperCase();
        var countryDialingCode = '';
        if (__WEBPACK_IMPORTED_MODULE_0__country_dialing_codes__["a" /* countryDialingCodes */][countryCode]) {
            countryDialingCode = "+" + __WEBPACK_IMPORTED_MODULE_0__country_dialing_codes__["a" /* countryDialingCodes */][countryCode];
        }
        else {
            console.warn(__WEBPACK_IMPORTED_MODULE_1__phone_number_error_messages__["a" /* phoneNumberErrorMessages */].INVALID_COUNTRY_CODE_WARN);
        }
        return countryDialingCode;
    };
    PhoneNumber.prototype.getFormattedPhoneNumberStr = function (format, countryCode) {
        if (format === void 0) { format = 'default'; }
        var formattedPhoneNumber = '';
        switch (format.toLowerCase()) {
            case 'default':
                formattedPhoneNumber = this.getDefaultFormattedPhoneNumber();
                break;
            case 'dots':
                formattedPhoneNumber = this.getDotsFormattedPhoneNumber();
                break;
            case 'hyphens':
                formattedPhoneNumber = this.getHyphensFormattedPhoneNumber();
                break;
            default:
                console.warn(__WEBPACK_IMPORTED_MODULE_1__phone_number_error_messages__["a" /* phoneNumberErrorMessages */].INVALID_FORMAT_WARN);
                formattedPhoneNumber = this.getDefaultFormattedPhoneNumber();
        }
        return formattedPhoneNumber;
    };
    PhoneNumber.prototype.getFormattedPhoneNumber = function (format, countryCode) {
        if (format === void 0) { format = 'default'; }
        var formattedPhoneNumber = this.getFormattedPhoneNumberStr(format);
        var internationalCountryCodeStr = '';
        if (countryCode && format) {
            internationalCountryCodeStr = this.getInternationCountryCodeStr(countryCode);
            formattedPhoneNumber = internationalCountryCodeStr ?
                internationalCountryCodeStr + " " + formattedPhoneNumber : "" + formattedPhoneNumber;
        }
        return formattedPhoneNumber;
    };
    return PhoneNumber;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/shared/phone-number/phone-number.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_number_model__ = __webpack_require__("../../../../../src/app/contacts/shared/phone-number/phone-number.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_number_error_messages__ = __webpack_require__("../../../../../src/app/contacts/shared/phone-number/phone-number-error-messages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * PhoneNumberPipe
 * ===============
 * The PhoneNumberPipe takes in a string or a number and transforms that input
 * into a formatted format. The format is optional and if it is not entered as
 * a parameter then the number will be formatted using the (XXX) XXX-XXXX format
 * by default. there is a format based on the format (optional) and country
 * code (optional). If the format is not entered, the number will be formatted
 * using the (XXX) XXX-XXXX format by default.
 *
 * The PhoneNumberPipe currently only supports phone numbers
 * in the North American Numbering Plan. Please see
 * https://en.wikipedia.org/wiki/North_American_Numbering_Plan for details.
 *
 * No parameters
 * -------------
 * Not specifying a format parameter will result in the pipe transforming the
 * value into a default phone format, which is (XXX) XXX-XXXX.
 *
 * Usage:
 * {{ <phone number> | phoneNumber }}
 *
 * Example:
 * {{ 7035551234 | phoneNumber }}
 * (703) 555-1234
 *
 * Phone Number Format Parameter (optional)
 * ----------------------------------------
 * The first parameter is the phone format which is optional. If there is no
 * format entered, then the default format, (XXX) XXX- XXXX, will be used.
 * Acceptable parameters are "default", "dots", "hyphens". The phone number
 * parameter is case insensitive.
 *
 * Usage:
 * {{ <phone number> | phoneNumber : <format-type> }}
 *
 * Examples:
 * {{ 7035551234 | phoneNumber : "default" }}
 * (703) 555-1234
 *
 * {{ 7035551234 | phoneNumber : "DOTS" }}
 * 703.555.1234
 *
 * {{ 7035551234 | phoneNumber : "hyphens" }}
 * 703-555-1234
 *
 * Country Code Parameter (optional)
 * ---------------------------------
 * The second parameter is the country code. Any valid two character country
 * code that uses the North American Numbering Plan is acceptable. To see a list
 * of countries that use the North American Numbering Plan see
 * https://en.wikipedia.org/wiki/North_American_Numbering_Plan. To find their
 * respective two character country code please see:
 * http://www.worldatlas.com/aatlas/ctycodes.htm. The country code parameter is
 * case insensitive.
 *
 * Usage:
 * {{ <phone number> | phoneNumber : <format-type> : <country-code> }}
 *
 * Example:
 * {{ 7035551234 | phoneNumber : "DOTS" : "US" }}
 * +1 703.555.1234
 *
 * Allow Empty String (optional)
 * ---------------------------------
 * Using this third parameter you can allow empty strings without throwing an
 * exception.
 *
 * Usage:
 * {{ <phone number> | phoneNumber : <format-type> : <country-code> : <boolean> }}
 *
 * Example:
 * {{ 7035551234 | phoneNumber : "DOTS" : "US" : true }}
*/
var PhoneNumberPipe = (function () {
    function PhoneNumberPipe() {
    }
    PhoneNumberPipe.prototype.transform = function (value, format, countryCode, allowEmptyString) {
        if (value === void 0) { value = ''; }
        if (countryCode === void 0) { countryCode = ''; }
        var phoneNumber = null;
        var formattedPhoneNumber = '';
        if (allowEmptyString && value === '') {
            return '';
        }
        if (this.isPhoneNumberValid(value)) {
            phoneNumber = new __WEBPACK_IMPORTED_MODULE_1__phone_number_model__["a" /* PhoneNumber */](value);
            formattedPhoneNumber = phoneNumber.getFormattedPhoneNumber(format, countryCode);
        }
        return formattedPhoneNumber;
    };
    PhoneNumberPipe.prototype.isPhoneNumberValid = function (phoneNumber) {
        var VALID_PHONE_LENGTH = 10;
        var isPhoneNumberValid = false;
        if (isNaN(phoneNumber)) {
            console.error(__WEBPACK_IMPORTED_MODULE_2__phone_number_error_messages__["a" /* phoneNumberErrorMessages */].INVALID_PHONE_NUMBER_TYPE_ERR);
        }
        else if (phoneNumber.toString().length !== VALID_PHONE_LENGTH) {
            console.error(__WEBPACK_IMPORTED_MODULE_2__phone_number_error_messages__["a" /* phoneNumberErrorMessages */].INVALID_PHONE_NUMBER_LENGTH_ERR);
        }
        else {
            isPhoneNumberValid = true;
        }
        return isPhoneNumberValid;
    };
    PhoneNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'phoneNumber'
        })
    ], PhoneNumberPipe);
    return PhoneNumberPipe;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/shared/services/contact-feed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FEED_UPDATES = [
    "Time my favorite, for burritos and beers #BurritoLyfe",
    "Had my first Soylent today. I've reached peak SF.",
    "Is it raining for anyone else, or is it just me?",
    "lmao cats are so funny!",
    "When I say mizzenmast, what I really mean is larders",
    "A rolling stone is your oyster",
    "Taco Bell? More like Taco Cartel, amirite?",
    "\"Um\" - 1st horse that got ridden",
    "The guy at Chipotle couldn't close my burrito. He looked up at me. I looked at him. I whispered, \"It's not your fault.\" He wept in my\n   arms."
];
/**
 * A fake service that returns an observable of a contact's social media updates.
 */
var ContactFeedService = (function () {
    function ContactFeedService() {
    }
    ContactFeedService.prototype.getFeed = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(500)
            .map(function (x) { return Math.random() * 2 + 2; })
            .concatMap(function (x) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(x).delay(x * 1000); })
            .map(function (x) { return FEED_UPDATES[Math.floor(Math.random() * FEED_UPDATES.length)]; });
    };
    ContactFeedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ContactFeedService);
    return ContactFeedService;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/shared/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.contactsUrl = 'app/contacts';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ContactService.prototype.getContact = function (id) {
        return this.getContacts()
            .then(function (contacts) { return contacts.find(function (contact) { return contact.id === id; }); });
    };
    ContactService.prototype.save = function (contact) {
        if (contact.id) {
            return this.put(contact);
        }
        return this.post(contact);
    };
    ContactService.prototype.new = function (contact) {
        return this.post(contact);
    };
    ContactService.prototype.delete = function (contact) {
        var url = this.contactsUrl + "/" + contact.id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ContactService.prototype.post = function (contact) {
        return this.http
            .post(this.contactsUrl, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.put = function (contact) {
        var url = this.contactsUrl + "/" + contact.id;
        return this.http
            .put(url, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(function () { return contact; })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_service__ = __webpack_require__("../../../../../src/app/contacts/shared/services/contact.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_feed_service__ = __webpack_require__("../../../../../src/app/contacts/shared/services/contact-feed.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__contact_feed_service__["a"]; });




/***/ }),

/***/ "../../../../../src/app/contacts/shared/show-contacts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_contacts_directive__ = __webpack_require__("../../../../../src/app/contacts/shared/show-contacts/show-contacts.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__show_contacts_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/contacts/shared/show-contacts/show-contacts.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowContactsDirective; });
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

/**
 * ShowContactsDirective
 * =====================
 * The ShowContactsDirective takes in a boolean and will remove or add
 * an element to the DOM whether the boolean is true or false. The
 * implementation of the ShowContactsDirective is almost exactly what ngIf
 * does. This directive is only to demonstrate how a structural directive
 * works. It should not be used in production.
 *
 * Usage:
 * <element *appFavoriteIcon="boolean expression"></element>
 *
 * Example:
 * <div *appShowContacts="contacts.length"></div>
 */
var ShowContactsDirective = (function () {
    function ShowContactsDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(ShowContactsDirective.prototype, "appShowContacts", {
        set: function (shouldShow) {
            if (shouldShow) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ShowContactsDirective.prototype, "appShowContacts", null);
    ShowContactsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appShowContacts]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */]])
    ], ShowContactsDirective);
    return ShowContactsDirective;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contacts_shared_data_mock_contacts__ = __webpack_require__("../../../../../src/app/contacts/shared/data/mock-contacts.ts");

var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contacts = __WEBPACK_IMPORTED_MODULE_0__contacts_shared_data_mock_contacts__["a" /* CONTACTS */];
        return { contacts: contacts };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found-component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_not_found_component_component__ = __webpack_require__("../../../../../src/app/page-not-found-component/page-not-found-component.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_not_found_component_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/page-not-found-component/page-not-found-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found-component/page-not-found-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  404 - Sorry page not found.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found-component/page-not-found-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found-component',
            template: __webpack_require__("../../../../../src/app/page-not-found-component/page-not-found-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found-component/page-not-found-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rxjs-extensions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
// Observable class extensions


// Observable operators









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


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map