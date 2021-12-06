(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XXu":
/*!***************************************************!*\
  !*** ./src/app/sections/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "kbRT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    NgbdModalContent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-component',
            template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "/OG6":
/*!****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\testusr\Pictures\new portal clone\static frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "03g3":
/*!*****************************************************!*\
  !*** ./src/app/case-study/case-study.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNlLXN0dWR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "0KVf":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TypographySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographySectionComponent", function() { return TypographySectionComponent; });
/* harmony import */ var _raw_loader_typography_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography-section.component.html */ "htC0");
/* harmony import */ var _typography_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography-section.component.css */ "aScS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographySectionComponent = /** @class */ (function () {
    function TypographySectionComponent() {
    }
    TypographySectionComponent.prototype.ngOnInit = function () {
    };
    TypographySectionComponent.ctorParameters = function () { return []; };
    TypographySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography-section',
            template: _raw_loader_typography_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographySectionComponent);
    return TypographySectionComponent;
}());



/***/ }),

/***/ "0cls":
/*!***************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.ts ***!
  \***************************************************************/
/*! exports provided: CrsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrsSectionComponent", function() { return CrsSectionComponent; });
/* harmony import */ var _raw_loader_crs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./crs-section.component.html */ "eo/P");
/* harmony import */ var _crs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crs-section.component.css */ "/OG6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "6foH");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrsSectionComponent = /** @class */ (function () {
    function CrsSectionComponent() {
    }
    CrsSectionComponent.prototype.ngOnInit = function () {
    };
    CrsSectionComponent.prototype.ngAfterViewInit = function () {
        var slider = document.getElementById("input-slider");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("input-slider-range");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    CrsSectionComponent.ctorParameters = function () { return []; };
    CrsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-crs-section',
            template: _raw_loader_crs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_crs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CrsSectionComponent);
    return CrsSectionComponent;
}());



/***/ }),

/***/ "0fzz":
/*!*******************************************************************!*\
  !*** ./src/app/migration-factory/migration-factory.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaWdyYXRpb24tZmFjdG9yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "0g5s":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/certification-map/certification-map.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-fifthcolumn \">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to Certification Map\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Certifiaction Map Story Page</p>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "1Eyi":
/*!*******************************************************************!*\
  !*** ./src/app/certification-map/certification-map.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0aW9uLW1hcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "3DdL":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/acceleratorsips/acceleratorsips.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"position-relative\">\r\n    <!-- shape new Hero -->\r\n    <section class=\"section section-lg section-shaped pb-250\">\r\n      <div class=\"shape shape-style-1 shape-sandbox\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container \" style=\"margin-bottom: 1px; \">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-15\">\r\n                <h1 class=\"display-3  text-white\">Accelerators/ IPs\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n\r\n              </div>\r\n            </div> \r\n          </div>\r\n          \r\n        </div>\r\n\r\n  \r\n        \r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"section\">\r\n        <div class=\"container\" style=\"margin-top: 1px;\">\r\n          <div class=\"card card-profile shadow mt--300\" style=\"width:95%;\">\r\n            <table id=\"customers\">\r\n<tr>\r\n  <th>Sl.No</th>\r\n  <th>ISU</th>\r\n  <th>Type</th>\r\n  <th>Accelerator IP</th>\r\n  <th>Accelerator Ip DESC</th>\r\n  <th>Owner Name</th>\r\n  <th>Owner EmailID</th>\r\n  <th>Created On</th>\r\n</tr>\r\n              <tr *ngFor=\"let user of this.jsonvaluesofexcel.Sheet1\"> \r\n               <td >{{user.Slno}} </td>\r\n               <td>{{user.ISU}}</td>\r\n               <td>{{user.Type}}</td>\r\n                 <td>{{user.AcceleratorIp}}</td>\r\n                 <td>{{user.AccelaratorIPdesc}}</td>\r\n                 <td>{{user.OwnerName}}</td>\r\n                  <td>{{user.OwnerEmailId}}</td>\r\n                 <td>{{user.Createdon}}</td>\r\n    \r\n             </tr>\r\n             \r\n           </table>\r\n           \r\n        \r\n              \r\n            \r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "62IN":
/*!**********************************************************!*\
  !*** ./src/app/teams-channel/teams-channel.component.ts ***!
  \**********************************************************/
/*! exports provided: TeamsChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsChannelComponent", function() { return TeamsChannelComponent; });
/* harmony import */ var _raw_loader_teams_channel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./teams-channel.component.html */ "XdWl");
/* harmony import */ var _teams_channel_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams-channel.component.css */ "N/YF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamsChannelComponent = /** @class */ (function () {
    function TeamsChannelComponent() {
    }
    TeamsChannelComponent.prototype.ngOnInit = function () {
    };
    TeamsChannelComponent.ctorParameters = function () { return []; };
    TeamsChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-teams-channel',
            template: _raw_loader_teams_channel_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_teams_channel_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TeamsChannelComponent);
    return TeamsChannelComponent;
}());



/***/ }),

/***/ "6E3v":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Tabs</h3>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6\">\r\n      <!-- Tabs with icons -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n      </div>\r\n        <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-cloud-upload-96 mr-2\"></i> Home\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-bell-55 mr-2\"></i> Profile\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                  <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Messages\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-5 mt-lg-0\">\r\n      <!-- Menu -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n      </div>\r\n      <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n          <ngb-tab title=\"Home\">\r\n            <ng-template ngbTabContent>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Profile\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Messages\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-grid justify-content-between align-items-center mt-lg\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-4\">Progress bars</h3>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>40%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"default\" [value]=\"25\"></ngb-progressbar>\r\n      </div>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>60%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"primary\" [value]=\"60\"></ngb-progressbar>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Pagination</h3>\r\n      <nav aria-label=\"Page navigation example\" class=\"mb-4\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n      </nav>\r\n      <nav aria-label=\"Page navigation example\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\">\r\n          <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\r\n          <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\r\n        </ngb-pagination>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-grid justify-content-between\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Navigation Pills</h3>\r\n      <ngb-tabset type=\"pills\" class=\"nav-pills-circle\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-atom\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-chat-round\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n                <span class=\"nav-link-icon d-block\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Labels</h3>\r\n      <span class=\"badge badge-pill badge-primary text-uppercase\">Primary</span>\r\n      <span class=\"badge badge-pill badge-success text-uppercase\">Success</span>\r\n      <span class=\"badge badge-pill badge-danger text-uppercase\">Danger</span>\r\n      <span class=\"badge badge-pill badge-warning text-uppercase\">Warning</span>\r\n      <span class=\"badge badge-pill badge-info text-uppercase\">Info</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "78X7":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape new Hero -->\r\n      <section class=\"section section-lg section-shaped pb-250\">\r\n        <div class=\"shape shape-style-1 shape-sandbox\">\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n        </div>\r\n      \r\n   \r\n       \r\n       \r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n\r\n\r\n         \r\n              \r\n                \r\n              \r\n            \r\n        \r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n   \r\n    <section class=\"section\">\r\n        <div class=\"container\" style=\"margin-top: 1px;\">\r\n          <div class=\"card card-profile shadow mt--300\" style=\"width:95%;\">\r\n            \r\n           <div>\r\n               <h2 style=\"text-align: center;\" >Frequntly Asked Questions</h2>\r\n            <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n                <ngb-panel id=\"preventchange-1\" title=\"Q1. What is Microsoft Azure Sandbox Environment?\">\r\n                  <ng-template ngbPanelContent>\r\n                    Ans: Microsoft Azure sandbox is an environment that was given access to TCS for performing,<br>\r\n                    a) Delivering POCs<br>\r\n                    b) Deploying the Dev & Test Environments<br>\r\n                    c) Delivering Trainings.\r\n                  </ng-template>\r\n                </ngb-panel>\r\n              \r\n              </ngb-accordion>\r\n\r\n              <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n                <ngb-panel id=\"preventchange-1\" title=\"Q2.How to procure a new Sandbox Subscription?\">\r\n                  <ng-template ngbPanelContent>\r\n                    Ans: a) Account team need to send request mail to Alliance Unit for procuring Sandbox.<br>\r\n                    b) Engg-Practice Team will share a business case template to account team to fill with details.<br>\r\n                    c) Alliance team need to review and approve the request.<br>\r\n                   d)  Post approval the Engg-Practice Team will create the subscription in Sandbox environment.\r\n                  </ng-template>\r\n                </ngb-panel>\r\n              \r\n              </ngb-accordion>\r\n\r\n              <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n                <ngb-panel id=\"preventchange-1\" title=\"Q3.What is the duration Sandbox subscription can be used?\">\r\n                  <ng-template ngbPanelContent>\r\n                    Ans: The Sandbox subscription can be used for a duration of 3-4 months for PoC or validation of any solution.\r\n                  </ng-template>\r\n                </ngb-panel>\r\n              \r\n              </ngb-accordion>\r\n              <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n                <ngb-panel id=\"preventchange-1\" title=\"Q4:Whom should I contact for Access related issues?\">\r\n                  <ng-template ngbPanelContent>\r\n                    Ans: Account teams can reachout to Engg-Pratice Team to support with access related issues.\r\n                  </ng-template>\r\n                </ngb-panel>\r\n              \r\n              </ngb-accordion>\r\n              <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n                <ngb-panel id=\"preventchange-1\" title=\"Q5.Who can help creating users/resetting password in sandbox subscriptions?\">\r\n                  <ng-template ngbPanelContent>\r\n                    Ans: Account team can reach out to Engg-Practice Team for creating new users or Password reset related activity in Azure Sandbox subscription.\r\n                  </ng-template>\r\n                </ngb-panel>\r\n              \r\n              </ngb-accordion>\r\n\r\n           </div>\r\n              \r\n            \r\n              \r\n            \r\n          </div>\r\n        </div>\r\n      </section>\r\n  \r\n  \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "7BkA":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "7C2d":
/*!**************************************************************************!*\
  !*** ./src/app/design-and-automation/design-and-automation.component.ts ***!
  \**************************************************************************/
/*! exports provided: DesignAndAutomationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignAndAutomationComponent", function() { return DesignAndAutomationComponent; });
/* harmony import */ var _raw_loader_design_and_automation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./design-and-automation.component.html */ "bEan");
/* harmony import */ var _design_and_automation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./design-and-automation.component.css */ "ytxo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DesignAndAutomationComponent = /** @class */ (function () {
    function DesignAndAutomationComponent() {
        this.images = [100, 100, 100].map(function (n) { return "https://picsum.photos/id/" + n + "/900/500"; });
    }
    DesignAndAutomationComponent.prototype.ngOnInit = function () {
    };
    DesignAndAutomationComponent.ctorParameters = function () { return []; };
    DesignAndAutomationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-design-and-automation',
            template: _raw_loader_design_and_automation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_design_and_automation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DesignAndAutomationComponent);
    return DesignAndAutomationComponent;
}());



/***/ }),

/***/ "8hln":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"position-relative\">\r\n    <!-- shape new Hero -->\r\n    <section class=\"section section-lg bg-gradient-default\">\r\n      <div class=\"container pt-lg pb-300\">\r\n        <div class=\"row text-center justify-content-center\">\r\n          <div class=\"col-lg-10\">\r\n            <h2 class=\"display-3 text-white\">Contact US</h2>\r\n            <p class=\"lead text-white\">Feel free to contact us for any queires</p>\r\n          </div>\r\n        </div>\r\n        \r\n\r\n\r\n\r\n\r\n        <div class=\"row row-grid mt-5\">\r\n          <!-- <div class=\"col-lg-3\"></div> -->\r\n          <!-- <div class=\"col-lg-4\">\r\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n             \r\n              <i class=\"ni ni-mobile-button text-primary\"></i>\r\n            </div>\r\n            <h5 class=\"text-white mt-3\">Call us</h5>\r\n            <p class=\"text-white mt-3\">+956XXXXX XX</p>\r\n          </div> -->\r\n          <div style=\"align-items: center;\" class=\"col-lg-12\">\r\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n              <i class=\"ni ni-chat-round text-primary\"></i>\r\n            </div>\r\n            <h5 class=\"text-white mt-3\">Connext with us through Teams Channel</h5>\r\n            <a href=\"https://teams.microsoft.com/l/team/19%3aKx6D9p705BPJUmpQKZdLaOjbEsl3wS2He3znrUZwSdU1%40thread.tacv2/conversations?groupId=684f44d5-a128-48ed-91e8-979b40ba737d&tenantId=404b1967-6507-45ab-8a6d-7374a3f478be\" class=\"text-white mt-3\">Please click here to Join us in Teams</a>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n     \r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section> \r\n  \r\n    <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center mt--300\">\r\n          <div class=\"col-lg-8\">\r\n            <div class=\"card bg-gradient-secondary shadow\">\r\n              <div class=\"card-body p-lg-5\">\r\n                <h4 class=\"mb-1\">Want to work with us?</h4>\r\n                <p class=\"mt-0\">Leave a message here</p>\r\n                <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group mb-4\">\r\n                  <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n\r\n    \r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  \r\n\r\n\r\n</main>\r\n\r\n");

/***/ }),

/***/ "9+np":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section pb-0 section-components\">\r\n  <div class=\"container mb-5\">\r\n    <!-- Inputs -->\r\n    <h3 class=\"h4 text-success font-weight-bold mb-4\">Inputs</h3>\r\n    <div class=\"mb-3\">\r\n      <small class=\"text-uppercase font-weight-bold\">Form controls</small>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" disabled />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\" (focus)=\"focus5=true\" (blur)=\"focus5=false\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group has-success\">\r\n          <input type=\"text\" placeholder=\"Success\" class=\"form-control is-valid\" />\r\n        </div>\r\n        <div class=\"form-group has-danger\">\r\n          <input type=\"email\" placeholder=\"Error Input\" class=\"form-control is-invalid\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"py-5 bg-secondary\">\r\n    <div class=\"container\">\r\n      <!-- Inputs (alternative) -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">Form controls (alternative)</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative\" />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative \" disabled />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group has-success\">\r\n            <input type=\"text\" placeholder=\"Success\" class=\"form-control form-control-alternative is-valid\" />\r\n          </div>\r\n          <div class=\"form-group has-danger\">\r\n            <input type=\"email\" placeholder=\"Error Input\" class=\"form-control form-control-alternative is-invalid\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "92Y0":
/*!**************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9ucy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "9W4q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Javascript Components</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Modals</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-primary mb-3\" (click)=\"open(classic,'' , '')\">\r\n       Default\r\n      </button>\r\n      <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Type your modal title</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-warning mb-3\" (click)=\"open(classic2, 'Notification', '')\">\r\n         Notification\r\n      </button>\r\n      <ng-template #classic2 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content bg-gradient-danger\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-notification\">Your attention is required</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"py-3 text-center\">\r\n              <i class=\"ni ni-bell-55 ni-3x\"></i>\r\n              <h4 class=\"heading mt-4\">You should read this!</h4>\r\n              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-white\">Ok, Got it</button>\r\n            <button type=\"button\" class=\"btn btn-link text-white ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-default\" (click)=\"open(classic1, 'modal_mini', 'sm')\">\r\n         Form\r\n      </button>\r\n      <ng-template #classic1 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-body p-0\">\r\n            <div class=\"card bg-secondary shadow border-0\">\r\n              <div class=\"card-header bg-white pb-5\">\r\n                <div class=\"text-muted text-center mb-3\">\r\n                  <small>Sign in with</small>\r\n                </div>\r\n                <div class=\"btn-wrapper text-center\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/github.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Github</span>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/google.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Google</span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body px-lg-5 py-lg-5\">\r\n                <div class=\"text-center text-muted mb-4\">\r\n                  <small>Or sign in with credentials</small>\r\n                </div>\r\n                <form role=\"form\">\r\n                  <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                      <span>Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <!-- Datepicker -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Datepicker</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Single date</small>\r\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n          </div>\r\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8 mt-4 mt-md-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Date range</small>\r\n      <div class=\"input-daterange datepicker row align-items-center\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp1\" [(ngModel)]=\"model1\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" (select)=\"mama($event)\" type=\"text\" [dayTemplate]=\"t\" (dateSelect)=\"startDateChanged($event)\" autocomplete=\"off\" (focus)=\"focus3=true\" (blur)=\"focus3=false\"/>\r\n              <ng-template #t let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp2\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" (click)=\"d2.toggle()\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" type=\"text\" [dayTemplate]=\"t1\" (dateSelect)=\"endDateChanged($event)\" autocomplete=\"off\"/>\r\n              <ng-template #t1 let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Tooltips and Popovers -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Tooltips &amp; Popovers</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Tooltips</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"left\"   ngbTooltip=\"Tooltip on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"top\"    ngbTooltip=\"Tooltip on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">On bottom</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"right\"  ngbTooltip=\"Tooltip on right\">On right</button>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Popovers</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"left\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"top\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"right\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">On right</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"bottom\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">On bottom</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "AytR":
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

/***/ "C8Xq":
/*!***************************************************************!*\
  !*** ./src/app/acceleratorsips/acceleratorsips.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n#customers {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n  \r\n  #customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n  \r\n  #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n  \r\n  #customers tr:hover {background-color: #ddd;}\r\n  \r\n  #customers th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #04AA6D;\r\n    color: white;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2VsZXJhdG9yc2lwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlDQUF5QztJQUN6Qyx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQSw4QkFBOEIseUJBQXlCLENBQUM7O0VBRXhELHFCQUFxQixzQkFBc0IsQ0FBQzs7RUFFNUM7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkIiwiZmlsZSI6ImFjY2VsZXJhdG9yc2lwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNjdXN0b21lcnMge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "Es3B":
/*!******************************************************!*\
  !*** ./src/app/events-link/events-link.component.ts ***!
  \******************************************************/
/*! exports provided: EventsLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsLinkComponent", function() { return EventsLinkComponent; });
/* harmony import */ var _raw_loader_events_link_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./events-link.component.html */ "jl+v");
/* harmony import */ var _events_link_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-link.component.css */ "vYMl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsLinkComponent = /** @class */ (function () {
    function EventsLinkComponent() {
    }
    EventsLinkComponent.prototype.ngOnInit = function () {
    };
    EventsLinkComponent.ctorParameters = function () { return []; };
    EventsLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-events-link',
            template: _raw_loader_events_link_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_events_link_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], EventsLinkComponent);
    return EventsLinkComponent;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router) {
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "FCdR":
/*!*****************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.ts ***!
  \*****************************************************************/
/*! exports provided: TabsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function() { return TabsSectionComponent; });
/* harmony import */ var _raw_loader_tabs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tabs-section.component.html */ "6E3v");
/* harmony import */ var _tabs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-section.component.css */ "YSaL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
        this.page = 2;
        this.page1 = 3;
    }
    TabsSectionComponent.prototype.ngOnInit = function () {
    };
    TabsSectionComponent.ctorParameters = function () { return []; };
    TabsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tabs-section',
            template: _raw_loader_tabs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tabs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "FECC":
/*!**************************************!*\
  !*** ./src/app/sap/sap.component.ts ***!
  \**************************************/
/*! exports provided: SapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SapComponent", function() { return SapComponent; });
/* harmony import */ var _raw_loader_sap_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sap.component.html */ "U723");
/* harmony import */ var _sap_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sap.component.css */ "eLGM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SapComponent = /** @class */ (function () {
    function SapComponent() {
    }
    SapComponent.prototype.ngOnInit = function () {
    };
    SapComponent.ctorParameters = function () { return []; };
    SapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sap',
            template: _raw_loader_sap_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sap_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SapComponent);
    return SapComponent;
}());



/***/ }),

/***/ "GYAT":
/*!********************************************!*\
  !*** ./src/app/trends/trends.component.ts ***!
  \********************************************/
/*! exports provided: TrendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendsComponent", function() { return TrendsComponent; });
/* harmony import */ var _raw_loader_trends_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./trends.component.html */ "fFhA");
/* harmony import */ var _trends_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trends.component.css */ "ngQx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrendsComponent = /** @class */ (function () {
    function TrendsComponent() {
    }
    TrendsComponent.prototype.ngOnInit = function () {
    };
    TrendsComponent.ctorParameters = function () { return []; };
    TrendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-trends',
            template: _raw_loader_trends_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_trends_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TrendsComponent);
    return TrendsComponent;
}());



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"position-relative\">\r\n    <!-- Hero for FREE version -->\r\n    <section class=\"section section-lg section-hero section-shaped\">\r\n      <!-- Background circles -->\r\n      <div class=\"shape shape-style-1 shape-summerdog\">\r\n        <span class=\"span-150\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-75\"></span>\r\n        <span class=\"span-100\"></span>\r\n        <span class=\"span-75\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-100\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-100\"></span>\r\n      </div>\r\n      <div class=\" shape-container d-flex align-items-center py-lg\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row align-items-center justify-content-center\">\r\n            <div class=\"col-lg-10 text-center\">\r\n              <!--<img src=\"./assets/img/brand/tcs-color.png\" style=\"width: 200px;\" class=\"img-fluid\">-->\r\n              <h3 class=\"display-1  text-white \">Welcome to MBU Engineering Practice<br><span class= \"badge badge-secondary\" style=\"font-size: small; position: absolute; right: 100px; top: 62px; \">BETA</span></h3>\r\n               \r\n              \r\n              \r\n              <!--<div class=\"btn-wrapper mt-5\">\r\n                <a  href=\"https://www.tcs.com/buildingonbelief\" target=\"_blank\" class=\"btn btn-lg btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni \"></i></span>\r\n                  <span class=\"btn-inner--text\">Building on belief</span>\r\n                </a>-->\r\n                <!-- <a href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-github btn-icon mb-3 mb-sm-0\" target=\"_blank\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-github\"></i></span>\r\n                  <span class=\"btn-inner--text\">\r\n                    <span class=\"text-warning\">Star us</span> on Github</span>\r\n                </a> \r\n              </div>-->\r\n              <!-- <div class=\"mt-5\">\r\n                <small class=\"text-white font-weight-bold mb-0 mr-2\">*proudly coded by</small>\r\n                <img src=\"./assets/img/brand/creativetim-white-slim.png\" style=\"height: 28px;\">\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"section section-lg\">\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid align-items-center\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card bg-default shadow border-0\">\r\n              <img src=\"./assets/img/theme/vision.jpg\" class=\"card-img-top\">\r\n              <blockquote class=\"card-blockquote\">\r\n                <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                  <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                  <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n                </svg>\r\n                <h4 class=\"display-3 font-weight-bold text-white\">Vision</h4>\r\n                <!--<p class=\"lead text-italic text-white\">vision</p>-->\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"pl-md-5\">\r\n             <!-- <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n                <i class=\"ni ni-settings\"></i>\r\n              </div>-->\r\n              \r\n              <ul >\r\n                <li> Incubate a product as-a-service, agile, collaborative engineering culture.</li>\r\n                <li> Concentrate on experience differentiation instead of technology differentiation.</li> \r\n                <li> Embed Sustainability by optimal design choices & leverage ‘digital chassis’.</li> \r\n                <li> Build Belief for automated Engineering Function to serve ISU and Microsoft.</li> \r\n                              \r\n            </ul>\r\n\r\n              <!-- <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section> \r\n\r\n    \r\n    <section class=\"section bg-secondary\">\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid align-items-center\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card bg-default shadow border-0\">\r\n              <img src=\"./assets/img/theme/focus.jpg\" class=\"card-img-top\">\r\n              <blockquote class=\"card-blockquote\">\r\n                <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                  <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                  <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n                </svg>\r\n                <h4 class=\"display-3 font-weight-bold text-white\">Key Focus</h4>\r\n                <!--<p class=\"lead text-italic text-white\">vision</p>-->\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"pl-md-5\">\r\n              \r\n              \r\n              <ul >\r\n              \r\n                <li>Elevate current product suite to come to N level (business & technology)</li>\r\n                <li> Business/domain centric packages - ref arch / best practices </li> \r\n                  <li> Sustainability (carbon footprint) calculation specific to as-is and cloud across domain</li> \r\n                    <li> Automated migration factory (AI/ML)</li> \r\n                      <li> Collaboration across MBU Engineering teams - realize co-creation, sharing & learning</li> \r\n                        <li> Publish technical thought leadership papers / blogs </li>\r\n                        \r\n            </ul>\r\n\r\n              <!-- <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section> \r\n\r\n \r\n        \r\n  </div>\r\n  <app-sections></app-sections>\r\n</main>");

/***/ }),

/***/ "HiAf":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n  <h3 class=\"mt-lg mb-4\">\r\n    <span>Alerts</span>\r\n  </h3>\r\n  <div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"true\"  (close)=\"close(alert)\" >\r\n      <ng-container *ngIf=\"alert.icon\">\r\n        <div class=\"alert-inner--icon\">\r\n            <i class=\"{{alert.icon}}\"></i>\r\n        </div>\r\n      </ng-container>\r\n      <span class=\"alert-inner--text\">  <strong>{{alert.strong}} </strong>{{ alert.message }}</span>\r\n    </ngb-alert>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "QnVx");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ "KjGC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent.ctorParameters = function () { return []; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "JmOz":
/*!****************************************************************************!*\
  !*** ./src/app/cloud-service-heat-map/cloud-service-heat-map.component.ts ***!
  \****************************************************************************/
/*! exports provided: CloudServiceHeatMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudServiceHeatMapComponent", function() { return CloudServiceHeatMapComponent; });
/* harmony import */ var _raw_loader_cloud_service_heat_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cloud-service-heat-map.component.html */ "kQCU");
/* harmony import */ var _cloud_service_heat_map_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloud-service-heat-map.component.css */ "uMLx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CloudServiceHeatMapComponent = /** @class */ (function () {
    function CloudServiceHeatMapComponent(router) {
        this.router = router;
    }
    CloudServiceHeatMapComponent.prototype.ngOnInit = function () {
    };
    CloudServiceHeatMapComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CloudServiceHeatMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cloud-service-heat-map',
            template: _raw_loader_cloud_service_heat_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_cloud_service_heat_map_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CloudServiceHeatMapComponent);
    return CloudServiceHeatMapComponent;
}());



/***/ }),

/***/ "K4CT":
/*!***********************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsSectionComponent", function() { return ButtonsSectionComponent; });
/* harmony import */ var _raw_loader_buttons_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./buttons-section.component.html */ "m1bB");
/* harmony import */ var _buttons_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons-section.component.css */ "gFCd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonsSectionComponent = /** @class */ (function () {
    function ButtonsSectionComponent() {
    }
    ButtonsSectionComponent.prototype.ngOnInit = function () {
    };
    ButtonsSectionComponent.ctorParameters = function () { return []; };
    ButtonsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-buttons-section',
            template: _raw_loader_buttons_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_buttons_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsSectionComponent);
    return ButtonsSectionComponent;
}());



/***/ }),

/***/ "KKlp":
/*!**********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dHMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "KjGC":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "KuAA":
/*!*************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: VersionsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsSectionComponent", function() { return VersionsSectionComponent; });
/* harmony import */ var _raw_loader_versions_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./versions-section.component.html */ "P0L2");
/* harmony import */ var _versions_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./versions-section.component.css */ "92Y0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VersionsSectionComponent = /** @class */ (function () {
    function VersionsSectionComponent() {
    }
    VersionsSectionComponent.prototype.ngOnInit = function () {
    };
    VersionsSectionComponent.ctorParameters = function () { return []; };
    VersionsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-versions-section',
            template: _raw_loader_versions_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_versions_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], VersionsSectionComponent);
    return VersionsSectionComponent;
}());



/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./product.component.html */ "ez78");
/* harmony import */ var _product_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component.css */ "7BkA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(router) {
        this.router = router;
    }
    ProductComponent.prototype.assessment = function () {
        this.router.navigate(['assessment']);
    };
    ProductComponent.prototype.migrationfactory = function () {
        this.router.navigate(['migration-factory']);
    };
    ProductComponent.prototype.design = function () {
        this.router.navigate(['design-and-automation']);
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product',
            template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_product_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "M05T":
/*!**************************************************************************************!*\
  !*** ./src/app/activeinactivesubscriptions/activeinactivesubscriptions.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ActiveinactivesubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveinactivesubscriptionsComponent", function() { return ActiveinactivesubscriptionsComponent; });
/* harmony import */ var _raw_loader_activeinactivesubscriptions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./activeinactivesubscriptions.component.html */ "X8sb");
/* harmony import */ var _activeinactivesubscriptions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activeinactivesubscriptions.component.css */ "zg1N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActiveinactivesubscriptionsComponent = /** @class */ (function () {
    function ActiveinactivesubscriptionsComponent() {
        this.pieChartOptions = {
            responsive: true,
        };
        this.pieChartLabels = ['ACTIVE', 'INACTIVE'];
        this.pieChartData = [0, 3];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_3__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_3__["monkeyPatchChartJsLegend"])();
    }
    ActiveinactivesubscriptionsComponent.prototype.ngOnInit = function () {
    };
    ActiveinactivesubscriptionsComponent.ctorParameters = function () { return []; };
    ActiveinactivesubscriptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-activeinactivesubscriptions',
            template: _raw_loader_activeinactivesubscriptions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_activeinactivesubscriptions_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ActiveinactivesubscriptionsComponent);
    return ActiveinactivesubscriptionsComponent;
}());



/***/ }),

/***/ "MZ+R":
/*!******************************************************************************!*\
  !*** ./src/app/sustainability-analysis/sustainability-analysis.component.ts ***!
  \******************************************************************************/
/*! exports provided: SustainabilityAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SustainabilityAnalysisComponent", function() { return SustainabilityAnalysisComponent; });
/* harmony import */ var _raw_loader_sustainability_analysis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sustainability-analysis.component.html */ "cFA6");
/* harmony import */ var _sustainability_analysis_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sustainability-analysis.component.css */ "vKXC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SustainabilityAnalysisComponent = /** @class */ (function () {
    function SustainabilityAnalysisComponent() {
    }
    SustainabilityAnalysisComponent.prototype.ngOnInit = function () {
    };
    SustainabilityAnalysisComponent.ctorParameters = function () { return []; };
    SustainabilityAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sustainability-analysis',
            template: _raw_loader_sustainability_analysis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sustainability_analysis_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SustainabilityAnalysisComponent);
    return SustainabilityAnalysisComponent;
}());



/***/ }),

/***/ "N/YF":
/*!***********************************************************!*\
  !*** ./src/app/teams-channel/teams-channel.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtcy1jaGFubmVsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "OK6E":
/*!**********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWNsZW8tc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "P0L2":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Do you love this awesome\r\n          <span class=\"text-success\">Design System for Angular?</span>\r\n        </h2>\r\n        <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Sketch - Digital design toolkit\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Adobe Photoshop - Software for digital images manipulation\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "P0Ra":
/*!*******************************************************************!*\
  !*** ./src/app/latest-highlights/latest-highlights.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXRlc3QtaGlnaGxpZ2h0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Q7Co":
/*!****************************************************!*\
  !*** ./src/app/assessment/assessment.component.ts ***!
  \****************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var _raw_loader_assessment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./assessment.component.html */ "U0sT");
/* harmony import */ var _assessment_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assessment.component.css */ "ggCp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssessmentComponent = /** @class */ (function () {
    function AssessmentComponent() {
    }
    AssessmentComponent.prototype.ngOnInit = function () {
    };
    AssessmentComponent.ctorParameters = function () { return []; };
    AssessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-assessment',
            template: _raw_loader_assessment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_assessment_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AssessmentComponent);
    return AssessmentComponent;
}());



/***/ }),

/***/ "QL6Z":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/latest-highlights/latest-highlights.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-primary \">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to Latest Highlights\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Latest Highlights Page</p>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "QaPg":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-lg section-nucleo-icons pb-250\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Nucleo Icons</h2>\r\n        <p class=\"lead\">\r\n          The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.\r\n        </p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\" class=\"btn btn-primary\">View demo icons</a>\r\n          <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\" class=\"btn btn-default mt-3 mt-md-0\">View all icons</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"blur--hover\">\r\n      <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\">\r\n        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\r\n          <!-- Center -->\r\n          <i class=\"icon ni ni-diamond\"></i>\r\n          <!-- Right 1 -->\r\n          <i class=\"icon icon-sm ni ni-album-2\"></i>\r\n          <i class=\"icon icon-sm ni ni-app\"></i>\r\n          <i class=\"icon icon-sm ni ni-atom\"></i>\r\n          <!-- Right 2 -->\r\n          <i class=\"icon ni ni-bag-17\"></i>\r\n          <i class=\"icon ni ni-bell-55\"></i>\r\n          <i class=\"icon ni ni-credit-card\"></i>\r\n          <!-- Left 1 -->\r\n          <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\r\n          <i class=\"icon icon-sm ni ni-building\"></i>\r\n          <i class=\"icon icon-sm ni ni-button-play\"></i>\r\n          <!-- Left 2 -->\r\n          <i class=\"icon ni ni-calendar-grid-58\"></i>\r\n          <i class=\"icon ni ni-camera-compact\"></i>\r\n          <i class=\"icon ni ni-chart-bar-32\"></i>\r\n        </div>\r\n        <span class=\"blur-hidden h5 text-success\">Eplore all the 21.000+ Nucleo Icons</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "QnVx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"position-relative\">\r\n    <!-- shape Hero -->\r\n    <section class=\"section section-lg section-shaped pb-250\">\r\n      <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <h1 class=\"display-3  text-white\">Assessment\r\n                <!-- <span>completed with examples</span> -->\r\n              </h1>\r\n            <p class=\"lead  text-white\">Cloud Clounsel is TCS's Discovery, Cloud Assessment and Cloud Recommendation Offering</p>\r\n              <!-- <div class=\"btn-wrapper\">\r\n                <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                  <span class=\"btn-inner--text\">Components</span>\r\n                </a>\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Download Angular</span>\r\n                </a>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n\r\n  <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row row-grid\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                    <i class=\"ni ni-check-bold\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                    <i class=\"ni ni-istanbul\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-success\">business</span>\r\n                    <span class=\"badge badge-pill badge-success\">vision</span>\r\n                    <span class=\"badge badge-pill badge-success\">success</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                    <i class=\"ni ni-planet\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                    <span class=\"badge badge-pill badge-warning\">product</span>\r\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-md-2\">\r\n          <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n          <div class=\"pr-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n            </div>\r\n            <h3>Awesome features</h3>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-settings-gear-65\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Carefully crafted components</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-html5\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Amazing page examples</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-satisfied\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Super friendly support team</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n   <!-- <section class=\"section bg-secondary\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card bg-default shadow border-0\">\r\n            <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n              </svg>\r\n              <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n              <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"pl-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings\"></i>\r\n            </div>\r\n            <h3>Our customers</h3>\r\n            <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>  -->\r\n\r\n  <!-- <section class=\"section pb-0 bg-gradient-warning\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n          <div class=\"position-relative pl-md-5\">\r\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-1\">\r\n          <div class=\"d-flex px-3\">\r\n            <div>\r\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                <i class=\"ni ni-building text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"pl-4\">\r\n              <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n              <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-success\">Awesome Support</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                    <i class=\"ni ni-active-40\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-warning\">Modular Components</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n     SVG separator\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center text-center mb-lg\">\r\n        <div class=\"col-lg-8\">\r\n          <h2 class=\"display-3\">The amazing Team</h2>\r\n          <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                <small class=\"h6 text-muted\">Web Developer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">John Doe</span>\r\n                <small class=\"h6 text-muted\">Founder and CEO</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n        <div class=\"p-5\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-8\">\r\n              <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n              <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 ml-lg-auto\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg bg-gradient-default\">\r\n    <div class=\"container pt-lg pb-300\">\r\n      <div class=\"row text-center justify-content-center\">\r\n        <div class=\"col-lg-10\">\r\n          <h2 class=\"display-3 text-white\">Build something</h2>\r\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-settings text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Building tools</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-atom text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Launch time</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n     SVG separator\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center mt--300\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-gradient-secondary shadow\">\r\n            <div class=\"card-body p-lg-5\">\r\n              <h4 class=\"mb-1\">Want to work with us?</h4>\r\n              <p class=\"mt-0\">Your project is very important to us.</p>\r\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n              </div>\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-center\">\r\n        <div class=\"col-lg-8 text-center\">\r\n          <h2 class=\"display-3\">Do you love this awesome\r\n            <span class=\"text-success\">Design System for Angular?</span>\r\n          </h2>\r\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n          <div class=\"btn-wrapper\">\r\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n</main>\r\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S3Y7":
/*!*****************************************************!*\
  !*** ./src/app/doanddonts/doanddonts.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".redclr{\r\n    color: red;\r\n}\r\n\r\n.redbgnd{\r\n    background-color:red;\r\n}\r\n\r\n/* .crimson-text{\r\n    color:crimson;\r\n} */\r\n\r\n.space{\r\n    content: \"|\\00a0\\00a0\";\r\n}\r\n\r\n/* .marginincrease{\r\n    margin-left: 300px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvYW5kZG9udHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7R0FFRyIsImZpbGUiOiJkb2FuZGRvbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkY2xye1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnJlZGJnbmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG4vKiAuY3JpbXNvbi10ZXh0e1xyXG4gICAgY29sb3I6Y3JpbXNvbjtcclxufSAqL1xyXG5cclxuLnNwYWNle1xyXG4gICAgY29udGVudDogXCJ8XFwwMGEwXFwwMGEwXCI7XHJcbn1cclxuXHJcbi8qIC5tYXJnaW5pbmNyZWFzZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "SgHW":
/*!**************************************************************************************!*\
  !*** ./src/app/business-cerntric-solutions/business-cerntric-solutions.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BusinessCerntricSolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCerntricSolutionsComponent", function() { return BusinessCerntricSolutionsComponent; });
/* harmony import */ var _raw_loader_business_cerntric_solutions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./business-cerntric-solutions.component.html */ "k82o");
/* harmony import */ var _business_cerntric_solutions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-cerntric-solutions.component.css */ "rh7f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessCerntricSolutionsComponent = /** @class */ (function () {
    function BusinessCerntricSolutionsComponent() {
    }
    BusinessCerntricSolutionsComponent.prototype.ngOnInit = function () {
    };
    BusinessCerntricSolutionsComponent.ctorParameters = function () { return []; };
    BusinessCerntricSolutionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-business-cerntric-solutions',
            template: _raw_loader_business_cerntric_solutions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_business_cerntric_solutions_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], BusinessCerntricSolutionsComponent);
    return BusinessCerntricSolutionsComponent;
}());



/***/ }),

/***/ "SsEH":
/*!******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        hasScrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:scroll', ['$event'],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T9bN":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sections.component.html */ "kQxL");
/* harmony import */ var _sections_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections.component.css */ "UiAr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent.ctorParameters = function () { return []; };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sections',
            template: _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sections_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "U0sT":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assessment/assessment.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"position-relative\">\r\n    <!-- shape new Hero -->\r\n    <section class=\"section section-lg section-shaped pb-250\">\r\n      <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-15\">\r\n              <h1 class=\"display-3  text-white\">Cloud Counsel\r\n                <!-- <span>completed with examples</span> -->\r\n              </h1>\r\n              <ul>\r\n            <li class=\"lead  text-white\">Platform for Cloud Advisory & Assessment services.</li>\r\n            <li class=\"lead  text-white\">Cloud discovery, assessment and recommendation framework for cloud migration.</li>\r\n           </ul>\r\n               \r\n                <!--<a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                  <span class=\"btn-inner--text\">Components</span>\r\n                </a>\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Download Angular</span>\r\n                </a>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n\r\n    \r\n    <section class=\"section\">\r\n      <div class=\"container\">\r\n        <div class=\"card card-profile shadow mt--300\">\r\n          <div >\r\n            <div >\r\n              <img src=\"./assets/img/theme/ass1.png\" class=\"img-center img-fluid shadow shadow-lg--hover\" style=\"width: 1500px; height:470px; \" >\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n       \r\n      \r\n   \r\n\r\n    \r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  \r\n\r\n  <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row row-grid\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                    <i class=\"ni ni-check-bold\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                    <i class=\"ni ni-istanbul\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-success\">business</span>\r\n                    <span class=\"badge badge-pill badge-success\">vision</span>\r\n                    <span class=\"badge badge-pill badge-success\">success</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                    <i class=\"ni ni-planet\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                    <span class=\"badge badge-pill badge-warning\">product</span>\r\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-md-2\">\r\n          <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n          <div class=\"pr-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n            </div>\r\n            <h3>Awesome features</h3>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-settings-gear-65\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Carefully crafted components</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-html5\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Amazing page examples</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-satisfied\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Super friendly support team</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section bg-secondary\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card bg-default shadow border-0\">\r\n            <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n              </svg>\r\n              <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n              <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"pl-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings\"></i>\r\n            </div>\r\n            <h3>Our customers</h3>\r\n            <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section pb-0 bg-gradient-warning\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n          <div class=\"position-relative pl-md-5\">\r\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-1\">\r\n          <div class=\"d-flex px-3\">\r\n            <div>\r\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                <i class=\"ni ni-building text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"pl-4\">\r\n              <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n              <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-success\">Awesome Support</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                    <i class=\"ni ni-active-40\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-warning\">Modular Components</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n     SVG separator\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center text-center mb-lg\">\r\n        <div class=\"col-lg-8\">\r\n          <h2 class=\"display-3\">The amazing Team</h2>\r\n          <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                <small class=\"h6 text-muted\">Web Developer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">John Doe</span>\r\n                <small class=\"h6 text-muted\">Founder and CEO</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n        <div class=\"p-5\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-8\">\r\n              <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n              <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 ml-lg-auto\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg bg-gradient-default\">\r\n    <div class=\"container pt-lg pb-300\">\r\n      <div class=\"row text-center justify-content-center\">\r\n        <div class=\"col-lg-10\">\r\n          <h2 class=\"display-3 text-white\">Build something</h2>\r\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-settings text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Building tools</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-atom text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Launch time</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n     SVG separator\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center mt--300\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-gradient-secondary shadow\">\r\n            <div class=\"card-body p-lg-5\">\r\n              <h4 class=\"mb-1\">Want to work with us?</h4>\r\n              <p class=\"mt-0\">Your project is very important to us.</p>\r\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n              </div>\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-center\">\r\n        <div class=\"col-lg-8 text-center\">\r\n          <h2 class=\"display-3\">Do you love this awesome\r\n            <span class=\"text-success\">Design System for Angular?</span>\r\n          </h2>\r\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n          <div class=\"btn-wrapper\">\r\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n</main>");

/***/ }),

/***/ "U723":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sap/sap.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to Enterprise Solution-SAP\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Enterprise Solution SAP Page</p>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "UiAr":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "UsU6":
/*!*****************************************!*\
  !*** ./src/app/faqs/faqs.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "VEnh":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upcomming-enhancement/upcomming-enhancement.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"position-relative\">\r\n    <!-- shape Hero -->\r\n    <section class=\"section section-lg section-shaped pb-250\">\r\n      <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-15\">\r\n              <h1 class=\"display-3  text-white\">Upcoming Enhancements\r\n                <!-- <span>completed with examples</span> -->\r\n              </h1>\r\n            <p class=\"lead  text-white\">Some of the upcoming enhancements are:</p>\r\n              <!-- <div class=\"btn-wrapper\">\r\n                <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                  <span class=\"btn-inner--text\">Components</span>\r\n                </a>\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Download Angular</span>\r\n                </a>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "VhEO":
/*!**********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "xwfu");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ "bygX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "W706":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSectionComponent", function() { return NavigationSectionComponent; });
/* harmony import */ var _raw_loader_navigation_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navigation-section.component.html */ "z2zG");
/* harmony import */ var _navigation_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-section.component.css */ "SsEH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationSectionComponent = /** @class */ (function () {
    function NavigationSectionComponent() {
    }
    NavigationSectionComponent.prototype.ngOnInit = function () {
    };
    NavigationSectionComponent.ctorParameters = function () { return []; };
    NavigationSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation-section',
            template: _raw_loader_navigation_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navigation_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationSectionComponent);
    return NavigationSectionComponent;
}());



/***/ }),

/***/ "X8sb":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activeinactivesubscriptions/activeinactivesubscriptions.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-sandbox \">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-15\">\r\n                <h1 class=\"display-3  text-white\">Active / Inactive Subscriptions\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              \r\n\r\n              \r\n              \r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"section\">\r\n        <div class=\"container\" style=\"margin-top: 1px;\">\r\n          <div class=\"card card-profile shadow mt--300\" style=\"width:95%;\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div style=\"display: block;\">\r\n                      <canvas baseChart \r\n                        [data]=\"pieChartData\" \r\n                        [labels]=\"pieChartLabels\" \r\n                        [chartType]=\"pieChartType\"\r\n                        [options]=\"pieChartOptions\"\r\n                        [plugins]=\"pieChartPlugins\"\r\n                        [legend]=\"pieChartLegend\">\r\n                      </canvas>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\"></div>\r\n              </div>\r\n          </div>\r\n            \r\n                \r\n              \r\n            \r\n          </div>\r\n        </div>\r\n      </section>\r\n    \r\n  \r\n\r\n\r\n\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "XT1+":
/*!*********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsSectionComponent", function() { return InputsSectionComponent; });
/* harmony import */ var _raw_loader_inputs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./inputs-section.component.html */ "9+np");
/* harmony import */ var _inputs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs-section.component.css */ "KKlp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputsSectionComponent = /** @class */ (function () {
    function InputsSectionComponent() {
    }
    InputsSectionComponent.prototype.ngOnInit = function () {
    };
    InputsSectionComponent.ctorParameters = function () { return []; };
    InputsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-inputs-section',
            template: _raw_loader_inputs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_inputs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], InputsSectionComponent);
    return InputsSectionComponent;
}());



/***/ }),

/***/ "XdWl":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams-channel/teams-channel.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-fifthcolumn \">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to Case Study/Success Story\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Case Study/Success Story Page</p>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "XsTM":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections.component */ "T9bN");
/* harmony import */ var _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons-section/buttons-section.component */ "K4CT");
/* harmony import */ var _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputs-section/inputs-section.component */ "XT1+");
/* harmony import */ var _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crs-section/crs-section.component */ "0cls");
/* harmony import */ var _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-section/navigation-section.component */ "W706");
/* harmony import */ var _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs-section/tabs-section.component */ "FCdR");
/* harmony import */ var _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alerts-section/alerts-section.component */ "jyux");
/* harmony import */ var _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typography-section/typography-section.component */ "0KVf");
/* harmony import */ var _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-section/angular-section.component */ "abin");
/* harmony import */ var _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nucleo-section/nucleo-section.component */ "aZjO");
/* harmony import */ var _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./versions-section/versions-section.component */ "KuAA");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "+XXu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsSectionComponent"],
                _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__["InputsSectionComponent"],
                _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__["CrsSectionComponent"],
                _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__["NavigationSectionComponent"],
                _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__["TabsSectionComponent"],
                _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__["AlertsSectionComponent"],
                _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__["TypographySectionComponent"],
                _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__["AngularSectionComponent"],
                _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"],
                _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__["VersionsSectionComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            exports: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"]]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "Y+cp":
/*!****************************************!*\
  !*** ./src/app/faqs/faqs.component.ts ***!
  \****************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _raw_loader_faqs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./faqs.component.html */ "78X7");
/* harmony import */ var _faqs_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.component.css */ "UsU6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    FaqsComponent.ctorParameters = function () { return []; };
    FaqsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-faqs',
            template: _raw_loader_faqs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_faqs_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "YSaL":
/*!******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assessment/assessment.component */ "Q7Co");
/* harmony import */ var _design_and_automation_design_and_automation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./design-and-automation/design-and-automation.component */ "7C2d");
/* harmony import */ var _migration_factory_migration_factory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./migration-factory/migration-factory.component */ "gdZr");
/* harmony import */ var _business_cerntric_solutions_business_cerntric_solutions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./business-cerntric-solutions/business-cerntric-solutions.component */ "SgHW");
/* harmony import */ var _sustainability_analysis_sustainability_analysis_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sustainability-analysis/sustainability-analysis.component */ "MZ+R");
/* harmony import */ var _sap_sap_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sap/sap.component */ "FECC");
/* harmony import */ var _events_link_events_link_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./events-link/events-link.component */ "Es3B");
/* harmony import */ var _upcomming_enhancement_upcomming_enhancement_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./upcomming-enhancement/upcomming-enhancement.component */ "j6en");
/* harmony import */ var _cloud_service_heat_map_cloud_service_heat_map_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cloud-service-heat-map/cloud-service-heat-map.component */ "JmOz");
/* harmony import */ var _latest_highlights_latest_highlights_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./latest-highlights/latest-highlights.component */ "fcLo");
/* harmony import */ var _trends_trends_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./trends/trends.component */ "GYAT");
/* harmony import */ var _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./case-study/case-study.component */ "nfO4");
/* harmony import */ var _certification_map_certification_map_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./certification-map/certification-map.component */ "xu0q");
/* harmony import */ var _teams_channel_teams_channel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./teams-channel/teams-channel.component */ "62IN");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _doanddonts_doanddonts_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./doanddonts/doanddonts.component */ "vqoi");
/* harmony import */ var _activeinactivesubscriptions_activeinactivesubscriptions_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./activeinactivesubscriptions/activeinactivesubscriptions.component */ "M05T");
/* harmony import */ var _acceleratorsips_acceleratorsips_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./acceleratorsips/acceleratorsips.component */ "gIUp");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./contactus/contactus.component */ "sOoW");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-doc-viewer */ "w4ga");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./faqs/faqs.component */ "Y+cp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































// import { NgbdAccordionPreventchange } from './accordion-preventchange';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                // NgbdAccordionPreventchange,
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_14__["AssessmentComponent"],
                _design_and_automation_design_and_automation_component__WEBPACK_IMPORTED_MODULE_15__["DesignAndAutomationComponent"],
                _migration_factory_migration_factory_component__WEBPACK_IMPORTED_MODULE_16__["MigrationFactoryComponent"],
                _business_cerntric_solutions_business_cerntric_solutions_component__WEBPACK_IMPORTED_MODULE_17__["BusinessCerntricSolutionsComponent"],
                _sustainability_analysis_sustainability_analysis_component__WEBPACK_IMPORTED_MODULE_18__["SustainabilityAnalysisComponent"],
                _sap_sap_component__WEBPACK_IMPORTED_MODULE_19__["SapComponent"],
                _events_link_events_link_component__WEBPACK_IMPORTED_MODULE_20__["EventsLinkComponent"],
                _upcomming_enhancement_upcomming_enhancement_component__WEBPACK_IMPORTED_MODULE_21__["UpcommingEnhancementComponent"],
                _cloud_service_heat_map_cloud_service_heat_map_component__WEBPACK_IMPORTED_MODULE_22__["CloudServiceHeatMapComponent"],
                _latest_highlights_latest_highlights_component__WEBPACK_IMPORTED_MODULE_23__["LatestHighlightsComponent"],
                _trends_trends_component__WEBPACK_IMPORTED_MODULE_24__["TrendsComponent"],
                _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_25__["CaseStudyComponent"],
                _certification_map_certification_map_component__WEBPACK_IMPORTED_MODULE_26__["CertificationMapComponent"],
                _teams_channel_teams_channel_component__WEBPACK_IMPORTED_MODULE_27__["TeamsChannelComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_28__["ProductComponent"],
                _doanddonts_doanddonts_component__WEBPACK_IMPORTED_MODULE_29__["DoanddontsComponent"],
                _activeinactivesubscriptions_activeinactivesubscriptions_component__WEBPACK_IMPORTED_MODULE_30__["ActiveinactivesubscriptionsComponent"],
                _acceleratorsips_acceleratorsips_component__WEBPACK_IMPORTED_MODULE_31__["AcceleratorsipsComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_32__["ContactusComponent"],
                _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_35__["FaqsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_33__["NgxDocViewerModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_34__["ChartsModule"]
            ],
            exports: [
            // NgbdAccordionPreventchange
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aScS":
/*!******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "aZjO":
/*!*********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: NucleoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoSectionComponent", function() { return NucleoSectionComponent; });
/* harmony import */ var _raw_loader_nucleo_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nucleo-section.component.html */ "QaPg");
/* harmony import */ var _nucleo_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nucleo-section.component.css */ "OK6E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NucleoSectionComponent = /** @class */ (function () {
    function NucleoSectionComponent() {
    }
    NucleoSectionComponent.prototype.ngOnInit = function () {
        var nucleoView = document.getElementsByClassName('icons-container')[0];
        window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
                nucleoView.classList.add('on-screen');
            }
            else {
                nucleoView.classList.remove('on-screen');
            }
        }.bind(this), false);
    };
    NucleoSectionComponent.prototype.isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    ;
    NucleoSectionComponent.ctorParameters = function () { return []; };
    NucleoSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nucleo-section',
            template: _raw_loader_nucleo_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_nucleo_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NucleoSectionComponent);
    return NucleoSectionComponent;
}());



/***/ }),

/***/ "abin":
/*!***********************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: AngularSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSectionComponent", function() { return AngularSectionComponent; });
/* harmony import */ var _raw_loader_angular_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./angular-section.component.html */ "9W4q");
/* harmony import */ var _angular_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-section.component.css */ "tALr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AngularSectionComponent = /** @class */ (function () {
    function AngularSectionComponent(modalService, calendar) {
        this.modalService = modalService;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    AngularSectionComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    AngularSectionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AngularSectionComponent.prototype.isRangeStart = function (date) {
        return this.model1 && this.model2 && date.equals(this.model1);
    };
    AngularSectionComponent.prototype.isRangeEnd = function (date) {
        return this.model1 && this.model2 && date.equals(this.model2);
    };
    AngularSectionComponent.prototype.isInRange = function (date) {
        return date.after(this.model1) && date.before(this.model2);
    };
    AngularSectionComponent.prototype.isActive = function (date) {
        return date.equals(this.model1) || date.equals(this.model2);
    };
    AngularSectionComponent.prototype.endDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
        }
    };
    AngularSectionComponent.prototype.startDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
        }
    };
    AngularSectionComponent.prototype.ngOnInit = function () {
    };
    AngularSectionComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] }
    ]; };
    AngularSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-angular-section',
            template: _raw_loader_angular_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_angular_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]])
    ], AngularSectionComponent);
    return AngularSectionComponent;
}());



/***/ }),

/***/ "bEan":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/design-and-automation/design-and-automation.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section section-lg section-shaped pb-250\">\r\n        <div class=\"shape shape-style-1 shape-default\">\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-15\">\r\n                <h1 class=\"display-3  text-white\">Design and Automation Page\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Defines, Designs and Deploys scalable Enterprise Cloud Platforms</p>\r\n                <!-- <div class=\"btn-wrapper\">\r\n                  <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                    <span class=\"btn-inner--text\">Components</span>\r\n                  </a>\r\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                    <span class=\"btn-inner--text\">Download Angular</span>\r\n                  </a>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n\r\n\r\n\r\n\r\n      <section class=\"section\">\r\n        <div class=\"container\">\r\n          <div class=\"card card-profile shadow mt--300\">\r\n            <div >\r\n              <div >\r\n                <img src=\"./assets/img/theme/cfd1.png\" class=\"img-center img-fluid shadow shadow-lg--hover\" style=\"width: 1500px; height:470px; \" >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!--<section class=\"section\">\r\n        <div class=\"container\" >\r\n          <div class=\"card card-profile shadow mt--300\" >\r\n            \r\n            \r\n\r\n            <ngb-carousel *ngIf=\"images\">\r\n              <ng-template ngbSlide>\r\n                <div class=\"picsum-img-wrapper\">\r\n                  <img src=\"./assets/img/theme/cfd1.png\" alt=\"Random first slide\" class=\"img-center img-fluid shadow shadow-lg--hover\" style=\"width: 1500px; height:470px; \">\r\n                </div>\r\n                \r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <div class=\"picsum-img-wrapper\">\r\n                  <img src=\"./assets/img/theme/cfd2.png\" alt=\"Random second slide\" class=\"img-center img-fluid shadow shadow-lg--hover\" style=\"width: 1500px; height:470px; \">\r\n                </div>\r\n                \r\n              </ng-template>\r\n              \r\n            </ngb-carousel>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </section>-->\r\n\r\n\r\n\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"row row-grid\">\r\n              <div class=\"col-lg-4\">\r\n                <div class=\"card card-lift--hover shadow border-0\">\r\n                  <div class=\"card-body py-5\">\r\n                    <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                      <i class=\"ni ni-check-bold\"></i>\r\n                    </div>\r\n                    <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                    <div>\r\n                      <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                      <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                      <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                    </div>\r\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-4\">\r\n                <div class=\"card card-lift--hover shadow border-0\">\r\n                  <div class=\"card-body py-5\">\r\n                    <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                      <i class=\"ni ni-istanbul\"></i>\r\n                    </div>\r\n                    <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                    <div>\r\n                      <span class=\"badge badge-pill badge-success\">business</span>\r\n                      <span class=\"badge badge-pill badge-success\">vision</span>\r\n                      <span class=\"badge badge-pill badge-success\">success</span>\r\n                    </div>\r\n                    <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-4\">\r\n                <div class=\"card card-lift--hover shadow border-0\">\r\n                  <div class=\"card-body py-5\">\r\n                    <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                      <i class=\"ni ni-planet\"></i>\r\n                    </div>\r\n                    <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                    <div>\r\n                      <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                      <span class=\"badge badge-pill badge-warning\">product</span>\r\n                      <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                    </div>\r\n                    <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg\">\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid align-items-center\">\r\n          <div class=\"col-md-6 order-md-2\">\r\n            <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\r\n          </div>\r\n          <div class=\"col-md-6 order-md-1\">\r\n            <div class=\"pr-md-5\">\r\n              <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n                <i class=\"ni ni-settings-gear-65\"></i>\r\n              </div>\r\n              <h3>Awesome features</h3>\r\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n              <ul class=\"list-unstyled mt-5\">\r\n                <li class=\"py-2\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div>\r\n                      <div class=\"badge badge-circle badge-success mr-3\">\r\n                        <i class=\"ni ni-settings-gear-65\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <h6 class=\"mb-0\">Carefully crafted components</h6>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"py-2\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div>\r\n                      <div class=\"badge badge-circle badge-success mr-3\">\r\n                        <i class=\"ni ni-html5\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <h6 class=\"mb-0\">Amazing page examples</h6>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"py-2\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div>\r\n                      <div class=\"badge badge-circle badge-success mr-3\">\r\n                        <i class=\"ni ni-satisfied\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <h6 class=\"mb-0\">Super friendly support team</h6>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section bg-secondary\">\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid align-items-center\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card bg-default shadow border-0\">\r\n              <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n              <blockquote class=\"card-blockquote\">\r\n                <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                  <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                  <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n                </svg>\r\n                <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n                <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"pl-md-5\">\r\n              <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n                <i class=\"ni ni-settings\"></i>\r\n              </div>\r\n              <h3>Our customers</h3>\r\n              <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n              <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section pb-0 bg-gradient-warning\">\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid align-items-center\">\r\n          <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n            <div class=\"position-relative pl-md-5\">\r\n              <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 order-lg-1\">\r\n            <div class=\"d-flex px-3\">\r\n              <div>\r\n                <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                  <i class=\"ni ni-building text-primary\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"pl-4\">\r\n                <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n                <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"card shadow shadow-lg--hover mt-5\">\r\n              <div class=\"card-body\">\r\n                <div class=\"d-flex px-3\">\r\n                  <div>\r\n                    <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                      <i class=\"ni ni-satisfied\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"pl-4\">\r\n                    <h5 class=\"title text-success\">Awesome Support</h5>\r\n                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                    <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card shadow shadow-lg--hover mt-5\">\r\n              <div class=\"card-body\">\r\n                <div class=\"d-flex px-3\">\r\n                  <div>\r\n                    <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                      <i class=\"ni ni-active-40\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"pl-4\">\r\n                    <h5 class=\"title text-warning\">Modular Components</h5>\r\n                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                    <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n       SVG separator\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center text-center mb-lg\">\r\n          <div class=\"col-lg-8\">\r\n            <h2 class=\"display-3\">The amazing Team</h2>\r\n            <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n            <div class=\"px-4\">\r\n              <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n              <div class=\"pt-4 text-center\">\r\n                <h5 class=\"title\">\r\n                  <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                  <small class=\"h6 text-muted\">Web Developer</small>\r\n                </h5>\r\n                <div class=\"mt-3\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n            <div class=\"px-4\">\r\n              <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n              <div class=\"pt-4 text-center\">\r\n                <h5 class=\"title\">\r\n                  <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                  <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n                </h5>\r\n                <div class=\"mt-3\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n            <div class=\"px-4\">\r\n              <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n              <div class=\"pt-4 text-center\">\r\n                <h5 class=\"title\">\r\n                  <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                  <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n                </h5>\r\n                <div class=\"mt-3\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n            <div class=\"px-4\">\r\n              <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n              <div class=\"pt-4 text-center\">\r\n                <h5 class=\"title\">\r\n                  <span class=\"d-block mb-1\">John Doe</span>\r\n                  <small class=\"h6 text-muted\">Founder and CEO</small>\r\n                </h5>\r\n                <div class=\"mt-3\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg pt-0\">\r\n      <div class=\"container\">\r\n        <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n          <div class=\"p-5\">\r\n            <div class=\"row align-items-center\">\r\n              <div class=\"col-lg-8\">\r\n                <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n                <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n              </div>\r\n              <div class=\"col-lg-3 ml-lg-auto\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg bg-gradient-default\">\r\n      <div class=\"container pt-lg pb-300\">\r\n        <div class=\"row text-center justify-content-center\">\r\n          <div class=\"col-lg-10\">\r\n            <h2 class=\"display-3 text-white\">Build something</h2>\r\n            <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-grid mt-5\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n              <i class=\"ni ni-settings text-primary\"></i>\r\n            </div>\r\n            <h5 class=\"text-white mt-3\">Building tools</h5>\r\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n              <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n            </div>\r\n            <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n              <i class=\"ni ni-atom text-primary\"></i>\r\n            </div>\r\n            <h5 class=\"text-white mt-3\">Launch time</h5>\r\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n       SVG separator\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center mt--300\">\r\n          <div class=\"col-lg-8\">\r\n            <div class=\"card bg-gradient-secondary shadow\">\r\n              <div class=\"card-body p-lg-5\">\r\n                <h4 class=\"mb-1\">Want to work with us?</h4>\r\n                <p class=\"mt-0\">Your project is very important to us.</p>\r\n                <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group mb-4\">\r\n                  <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg\">\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid justify-content-center\">\r\n          <div class=\"col-lg-8 text-center\">\r\n            <h2 class=\"display-3\">Do you love this awesome\r\n              <span class=\"text-success\">Design System for Angular?</span>\r\n            </h2>\r\n            <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n            <div class=\"btn-wrapper\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n              <div class=\"row justify-content-center\">\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assessment/assessment.component */ "Q7Co");
/* harmony import */ var _business_cerntric_solutions_business_cerntric_solutions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./business-cerntric-solutions/business-cerntric-solutions.component */ "SgHW");
/* harmony import */ var _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./case-study/case-study.component */ "nfO4");
/* harmony import */ var _certification_map_certification_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./certification-map/certification-map.component */ "xu0q");
/* harmony import */ var _cloud_service_heat_map_cloud_service_heat_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cloud-service-heat-map/cloud-service-heat-map.component */ "JmOz");
/* harmony import */ var _design_and_automation_design_and_automation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./design-and-automation/design-and-automation.component */ "7C2d");
/* harmony import */ var _events_link_events_link_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events-link/events-link.component */ "Es3B");
/* harmony import */ var _latest_highlights_latest_highlights_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./latest-highlights/latest-highlights.component */ "fcLo");
/* harmony import */ var _migration_factory_migration_factory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./migration-factory/migration-factory.component */ "gdZr");
/* harmony import */ var _sap_sap_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sap/sap.component */ "FECC");
/* harmony import */ var _sustainability_analysis_sustainability_analysis_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sustainability-analysis/sustainability-analysis.component */ "MZ+R");
/* harmony import */ var _teams_channel_teams_channel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./teams-channel/teams-channel.component */ "62IN");
/* harmony import */ var _trends_trends_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./trends/trends.component */ "GYAT");
/* harmony import */ var _upcomming_enhancement_upcomming_enhancement_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./upcomming-enhancement/upcomming-enhancement.component */ "j6en");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _doanddonts_doanddonts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./doanddonts/doanddonts.component */ "vqoi");
/* harmony import */ var _acceleratorsips_acceleratorsips_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./acceleratorsips/acceleratorsips.component */ "gIUp");
/* harmony import */ var _activeinactivesubscriptions_activeinactivesubscriptions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./activeinactivesubscriptions/activeinactivesubscriptions.component */ "M05T");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./contactus/contactus.component */ "sOoW");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./faqs/faqs.component */ "Y+cp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'register', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'assessment', component: _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_9__["AssessmentComponent"] },
    { path: 'business-centric-solutions', component: _business_cerntric_solutions_business_cerntric_solutions_component__WEBPACK_IMPORTED_MODULE_10__["BusinessCerntricSolutionsComponent"] },
    { path: 'case-study', component: _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_11__["CaseStudyComponent"] },
    { path: 'certification-map', component: _certification_map_certification_map_component__WEBPACK_IMPORTED_MODULE_12__["CertificationMapComponent"] },
    { path: 'cloud-service-heat-map', component: _cloud_service_heat_map_cloud_service_heat_map_component__WEBPACK_IMPORTED_MODULE_13__["CloudServiceHeatMapComponent"] },
    { path: 'design-and-automation', component: _design_and_automation_design_and_automation_component__WEBPACK_IMPORTED_MODULE_14__["DesignAndAutomationComponent"] },
    { path: 'events-link', component: _events_link_events_link_component__WEBPACK_IMPORTED_MODULE_15__["EventsLinkComponent"] },
    { path: 'latest-highlights', component: _latest_highlights_latest_highlights_component__WEBPACK_IMPORTED_MODULE_16__["LatestHighlightsComponent"] },
    { path: 'migration-factory', component: _migration_factory_migration_factory_component__WEBPACK_IMPORTED_MODULE_17__["MigrationFactoryComponent"] },
    { path: 'sap', component: _sap_sap_component__WEBPACK_IMPORTED_MODULE_18__["SapComponent"] },
    { path: 'sustainability-analysis', component: _sustainability_analysis_sustainability_analysis_component__WEBPACK_IMPORTED_MODULE_19__["SustainabilityAnalysisComponent"] },
    { path: 'teams-channel', component: _teams_channel_teams_channel_component__WEBPACK_IMPORTED_MODULE_20__["TeamsChannelComponent"] },
    { path: 'trends', component: _trends_trends_component__WEBPACK_IMPORTED_MODULE_21__["TrendsComponent"] },
    { path: 'upcomming-enhancements', component: _upcomming_enhancement_upcomming_enhancement_component__WEBPACK_IMPORTED_MODULE_22__["UpcommingEnhancementComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"] },
    { path: 'DoanddontsComponent', component: _doanddonts_doanddonts_component__WEBPACK_IMPORTED_MODULE_24__["DoanddontsComponent"] },
    { path: 'AcceleratorsipsComponent', component: _acceleratorsips_acceleratorsips_component__WEBPACK_IMPORTED_MODULE_25__["AcceleratorsipsComponent"] },
    { path: 'ActiveinactivesubscriptionsComponent', component: _activeinactivesubscriptions_activeinactivesubscriptions_component__WEBPACK_IMPORTED_MODULE_26__["ActiveinactivesubscriptionsComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_27__["ContactusComponent"] },
    { path: 'faqs', component: _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_28__["FaqsComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bygX":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "cFA6":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sustainability-analysis/sustainability-analysis.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to Sustainability Analysis\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Sustainability Analysis Page</p>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/sections.module */ "XsTM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "cvwt":
/*!***************************************************************************!*\
  !*** ./src/app/upcomming-enhancement/upcomming-enhancement.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGNvbW1pbmctZW5oYW5jZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "eLGM":
/*!***************************************!*\
  !*** ./src/app/sap/sap.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "eo/P":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section\">\r\n  <div class=\"container\">\r\n    <!-- Custom controls -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <!-- Checkboxes -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Checkboxes</small>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\r\n          <label class=\"custom-control-label\" for=\"customCheck1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" checked>\r\n          <label class=\"custom-control-label\" for=\"customCheck2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck3\">\r\n            <span>Disabled Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck4\" type=\"checkbox\" checked disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck4\">\r\n            <span>Disabled Checked</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Radio buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Radios</small>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio3\" disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio3\">\r\n            <span>Disabled unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio4\" checked disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio4\">\r\n            <span>Disabled checkbox</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Toggle buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Toggle buttons</small>\r\n        </div>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\">\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n        <span class=\"clearfix\"></span>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Sliders</small>\r\n        </div>\r\n        <!-- Simple slider -->\r\n        <div class=\"input-slider-container\">\r\n          <div id=\"input-slider\" class=\"input-slider\" ></div>\r\n        </div>\r\n        <!-- Range slider -->\r\n        <div class=\"mt-5\">\r\n          <!-- Range slider container -->\r\n          <div id=\"input-slider-range\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center mt-md\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Menu -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Menu</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-primary\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          \r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n                        <span class=\"sr-only\">(current)</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link no-caret\" ngbDropdownToggle id=\"dropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"dropdown1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n          <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-success rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          \r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-favourite-28\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-notification-70\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"ni ni-settings-gear-65\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n                      </a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "ez78":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-default \">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to Products\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Products Page</p>\r\n\r\n              \r\n              \r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row\" style=\"margin: 20px;\">\r\n            <div class=\"col-md-1\">\r\n              \r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              \r\n              <img src=\"./assets/img/theme/cart.png\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\" (click)=\"assessment()\">\r\n            \r\n            </div>\r\n            \r\n            <div class=\"col-md-4\">\r\n              \r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"./assets/img/theme/car.png\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\" (click)=\"design()\">\r\n            </div>\r\n           <!-- <div class=\"col-md-1\"></div>-->\r\n        </div>\r\n        <div class=\"row\">\r\n          \r\n            <div class=\"col-md-4\">\r\n           \r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              \r\n  \r\n              <img src=\"./assets/img/theme/service.png\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\" >\r\n            </div>\r\n            <div class=\"col-md-3\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-3\">\r\n            <img src=\"./assets/img/theme/factory.png\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\"(click)=\"migrationfactory()\">\r\n          </div>\r\n          <div class=\"col-md-4\"></div>\r\n          <div class=\"col-md-3\">\r\n            <img src=\"./assets/img/theme/connect.png\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\" (click)=\"assessment()\">\r\n          </div>\r\n        </div>\r\n    </div>\r\n  \r\n\r\n\r\n\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "fFhA":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trends/trends.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-primary \">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to New Trends\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Trends Page</p>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "fcLo":
/*!******************************************************************!*\
  !*** ./src/app/latest-highlights/latest-highlights.component.ts ***!
  \******************************************************************/
/*! exports provided: LatestHighlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestHighlightsComponent", function() { return LatestHighlightsComponent; });
/* harmony import */ var _raw_loader_latest_highlights_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./latest-highlights.component.html */ "QL6Z");
/* harmony import */ var _latest_highlights_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./latest-highlights.component.css */ "P0Ra");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LatestHighlightsComponent = /** @class */ (function () {
    function LatestHighlightsComponent() {
    }
    LatestHighlightsComponent.prototype.ngOnInit = function () {
    };
    LatestHighlightsComponent.ctorParameters = function () { return []; };
    LatestHighlightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-latest-highlights',
            template: _raw_loader_latest_highlights_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_latest_highlights_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LatestHighlightsComponent);
    return LatestHighlightsComponent;
}());



/***/ }),

/***/ "gFCd":
/*!************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "gIUp":
/*!**************************************************************!*\
  !*** ./src/app/acceleratorsips/acceleratorsips.component.ts ***!
  \**************************************************************/
/*! exports provided: AcceleratorsipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceleratorsipsComponent", function() { return AcceleratorsipsComponent; });
/* harmony import */ var _raw_loader_acceleratorsips_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./acceleratorsips.component.html */ "3DdL");
/* harmony import */ var _acceleratorsips_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acceleratorsips.component.css */ "C8Xq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AcceleratorsipsComponent = /** @class */ (function () {
    function AcceleratorsipsComponent() {
        // bloburl="https://viewdatainexcel.blob.core.windows.net/testcontainer/Accelerator.xlsx"
        this.jsonvaluesofexcel = {
            "Sheet1": [{
                    "Slno": 1,
                    "ISU": "CTO",
                    "Type": "IP",
                    "AcceleratorIp": "TCS CUBO Marketplace_API Management",
                    "AccelaratorIPdesc": "TCS CUBO Marketplace API Management is a Online marketplace for partners to publish their Product APIs",
                    "OwnerName": "Rajendra Biswal",
                    "OwnerEmailId": "rajendra.biswal @tcs.com ",
                    "Createdon": "07/29/20"
                },
                {
                    "Slno": 2,
                    "ISU": "CSI",
                    "Type": "Accelarator",
                    "AcceleratorIp": "DevSecOps Accelarator(Accelarator)",
                    "AccelaratorIPdesc": "Hosting web application,containerized web  application in Azure App Service",
                    "OwnerName": "Deepak Kannan Muthuchamy",
                    "OwnerEmailId": "deepak.kannan @tcs.com ",
                    "Createdon": "02/18/21"
                },
                {
                    "Slno": 3,
                    "ISU": "MBU",
                    "Type": "IP",
                    "AcceleratorIp": "DataAI Intelligent Data Services",
                    "AccelaratorIPdesc": "DataAI intelligent data services",
                    "OwnerName": "Vinit Maind",
                    "OwnerEmailId": "vinit.maind @tcs.com ",
                    "Createdon": "11/24/20"
                },
                {
                    "Slno": 4,
                    "ISU": "MBU",
                    "Type": "Accelarator",
                    "AcceleratorIp": "DAWIN - Smart Document Capturing System",
                    "AccelaratorIPdesc": "ABN Amro Smart Document Capturing System is a Document Automation With Intelligence implemented across multiple TCS clients",
                    "OwnerName": "Sanal S",
                    "OwnerEmailId": "sanal.s @tcs.com ",
                    "Createdon": "10/01/20"
                },
                {
                    "Slno": 5,
                    "ISU": "CTO",
                    "Type": "Accelarator",
                    "AcceleratorIp": "TCS-CUBO (Accelarator)",
                    "AccelaratorIPdesc": "Online marketplace for partners to publish their Product APIs",
                    "OwnerName": "Rajendra Biswal",
                    "OwnerEmailId": "rajendra.biswal @tcs.com ",
                    "Createdon": "07/29/20"
                }
            ]
        };
    }
    AcceleratorsipsComponent.prototype.ngOnInit = function () {
        console.log(this.jsonvaluesofexcel.Sheet1);
    };
    AcceleratorsipsComponent.ctorParameters = function () { return []; };
    AcceleratorsipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-acceleratorsips',
            template: _raw_loader_acceleratorsips_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_acceleratorsips_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AcceleratorsipsComponent);
    return AcceleratorsipsComponent;
}());



/***/ }),

/***/ "gdZr":
/*!******************************************************************!*\
  !*** ./src/app/migration-factory/migration-factory.component.ts ***!
  \******************************************************************/
/*! exports provided: MigrationFactoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationFactoryComponent", function() { return MigrationFactoryComponent; });
/* harmony import */ var _raw_loader_migration_factory_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./migration-factory.component.html */ "zcPd");
/* harmony import */ var _migration_factory_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migration-factory.component.css */ "0fzz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MigrationFactoryComponent = /** @class */ (function () {
    function MigrationFactoryComponent() {
    }
    MigrationFactoryComponent.prototype.ngOnInit = function () {
    };
    MigrationFactoryComponent.ctorParameters = function () { return []; };
    MigrationFactoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-migration-factory',
            template: _raw_loader_migration_factory_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_migration_factory_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], MigrationFactoryComponent);
    return MigrationFactoryComponent;
}());



/***/ }),

/***/ "ggCp":
/*!*****************************************************!*\
  !*** ./src/app/assessment/assessment.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3Nlc3NtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "hNnN":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0dXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "htC0":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Typography</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold\">Headings</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 5</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h5 class=\"mb-0\">Argon Design System </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 6</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h6 class=\"mb-0\">Argon Design System </h6>\r\n    </div>\r\n  </div>\r\n  <!-- Display titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Display titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"display-1 mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"display-2 mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"display-3 mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"display-4 mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <!-- Specialized titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Specialized titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading title</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading-title text-warning mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading seaction</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div>\r\n        <h2 class=\"display-3\">Header with small subtitle </h2>\r\n        <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Paragraphs -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Paragraphs</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Paragraph</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Lead text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"lead\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Quote</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <blockquote class=\"blockquote\">\r\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n        <footer class=\"blockquote-footer\">Someone famous in\r\n          <cite title=\"Source Title\">Source Title</cite>\r\n        </footer>\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Muted text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-muted mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Primary text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-primary\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Info text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-info mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Success text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-success mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Warning text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-warning mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Danger text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-danger mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <!-- Images -->\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Images</span>\r\n  </h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Image</small>\r\n      <img src=\"./assets/img/theme/team-1-800x800.jpg\" alt=\"Rounded image\" class=\"img-fluid rounded shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Image</small>\r\n      <img src=\"./assets/img/theme/team-2-800x800.jpg\" alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Raised</small>\r\n      <img src=\"./assets/img/theme/team-3-800x800.jpg\" alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Raised</small>\r\n      <img src=\"./assets/img/theme/team-4-800x800.jpg\" alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign in with</small>\r\n              </div>\r\n              <div class=\"btn-wrapper text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign in with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-6\">\r\n              <a href=\"javascript:void(0)\" class=\"text-light\">\r\n                <small>Forgot password?</small>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n              <a href=\"javascript:void(0)\" class=\"text-light\">\r\n                <small>Create new account</small>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n");

/***/ }),

/***/ "j6en":
/*!**************************************************************************!*\
  !*** ./src/app/upcomming-enhancement/upcomming-enhancement.component.ts ***!
  \**************************************************************************/
/*! exports provided: UpcommingEnhancementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcommingEnhancementComponent", function() { return UpcommingEnhancementComponent; });
/* harmony import */ var _raw_loader_upcomming_enhancement_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./upcomming-enhancement.component.html */ "VEnh");
/* harmony import */ var _upcomming_enhancement_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upcomming-enhancement.component.css */ "cvwt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpcommingEnhancementComponent = /** @class */ (function () {
    function UpcommingEnhancementComponent() {
    }
    UpcommingEnhancementComponent.prototype.ngOnInit = function () {
    };
    UpcommingEnhancementComponent.ctorParameters = function () { return []; };
    UpcommingEnhancementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upcomming-enhancement',
            template: _raw_loader_upcomming_enhancement_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_upcomming_enhancement_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpcommingEnhancementComponent);
    return UpcommingEnhancementComponent;
}());



/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\r\n  <div class=\"container container-lg\" *ngIf=\"getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'\">\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-md-6 mb-5 mb-md-0\">\r\n        <div class=\"card card-lift--hover shadow border-0\">\r\n          <a [routerLink]=\"['/landing']\" title=\"Landing Page\">\r\n            <img src=\"./assets/img/theme/landing.jpg\" class=\"card-img\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 mb-5 mb-lg-0\">\r\n        <div class=\"card card-lift--hover shadow border-0\">\r\n          <a [routerLink]=\"['/user-profile']\" title=\"Profile Page\">\r\n            <img src=\"./assets/img/theme/profile.jpg\" class=\"card-img\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid align-items-center\" [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/register' || getPath()==='/login'}\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"text-primary font-weight-light mb-2\">Thank you for Visiting Page!</h3>\r\n        <h4 class=\"mb-0 font-weight-light\">Let's get in touch For all Kind Of queries.</h4>\r\n      </div>\r\n      <!-- <div class=\"col-lg-6 text-lg-center btn-wrapper\">\r\n        <a target=\"_blank\" href=\"https://twitter.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-twitter\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\">\r\n          <i class=\"fa fa-facebook-square\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://dribbble.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-dribbble\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://github.com/creativetimofficial\" class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\">\r\n          <i class=\"fa fa-github\"></i>\r\n        </a>\r\n      </div> -->\r\n    </div>\r\n    <hr>\r\n    <div class=\"row align-items-center justify-content-md-between\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"copyright\">\r\n          &copy; {{test | date: 'yyyy'}}\r\n          <a href=\"https://www.tcs.com\" target=\"_blank\">Tata Consultancy Services Ltd</a>.\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"nav nav-footer justify-content-end\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://www.tcs.com\" class=\"nav-link\" target=\"_blank\">TCS</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a [routerLink]=\"['/contactus']\" class=\"nav-link\" target=\"_blank\">Contact Us</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a [routerLink]=\"['/faqs']\" class=\"nav-link\" >FAQS</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://tcs.com\" class=\"nav-link\" target=\"_blank\">Terms of Use</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"http://tcs.com\" class=\"nav-link\" target=\"_blank\">Blog</a>\r\n          </li>\r\n          <!-- <li class=\"nav-item\">\r\n            <a href=\"https://tcs.com\" class=\"nav-link\" target=\"_blank\">Misc</a>\r\n          </li> -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "jl+v":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events-link/events-link.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section section-shaped section-lg\">\r\n        <div class=\"shape shape-style-1 shape-dark\">\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n        </div>\r\n\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-15\">\r\n                <h1 class=\"display-3  text-white\">Events\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Choose the events you want to join</p>\r\n\r\n              \r\n              \r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-15 order-lg-1\">\r\n              <div class=\"d-flex px-3\">\r\n              <div class=\"card shadow shadow-lg--hover mt-5\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"d-flex px-7\">\r\n                    <div>\r\n                      <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\r\n                        <i class=\"ni ni-calendar-grid-58\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"pl-4\">\r\n                      <h5 class=\"title text-primary\">Microsoft Ignite</h5>\r\n                      <p> Ignite is an annual event is geared toward the IT professional and developer audiences. \r\n                        Ignite focuses on development tools and provides detailed technical training on new \r\n                        technologies and new techniques for getting things done.</p>\r\n                      <a href=\"https://myignite.microsoft.com/sessions?t=%257B%2522from%2522%253A%25222021-11-02T00%253A00%253A00%252B05%253A30%2522%252C%2522to%2522%253A%25222021-11-04T23%253A59%253A00%252B05%253A30%2522%257D\" \r\n                      target=\"_blank\" class=\"text-primary\">Register Here</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      \r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n\r\n      \r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "js6R":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/case-study/case-study.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-fifthcolumn \">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to Case Study/Success Story\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Case Study/Success Story Page</p>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "jyux":
/*!*********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsSectionComponent", function() { return AlertsSectionComponent; });
/* harmony import */ var _raw_loader_alerts_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./alerts-section.component.html */ "HiAf");
/* harmony import */ var _alerts_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts-section.component.css */ "VhEO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsSectionComponent = /** @class */ (function () {
    function AlertsSectionComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Success!',
            message: 'This is a success alert—check it out!',
            icon: 'ni ni-like-2'
        }, {
            id: 2,
            strong: 'Info!',
            type: 'info',
            message: 'This is an info alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Danger!',
            message: 'This is a danger alert—check it out!',
            icon: 'ni ni-support-16'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertsSectionComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertsSectionComponent.ctorParameters = function () { return []; };
    AlertsSectionComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    AlertsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-alerts-section',
            template: _raw_loader_alerts_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_alerts_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AlertsSectionComponent);
    return AlertsSectionComponent;
}());



/***/ }),

/***/ "k82o":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/business-cerntric-solutions/business-cerntric-solutions.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section-profile-cover section-shaped my-0\">\r\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div>\r\n              <p><br></p>\r\n          </div>\r\n          <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div>\r\n            <p><br></p>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <h1 class=\"display-3  text-white\">Welcome to Business centric Solutions\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Design and Automation Page</p>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "kQCU":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cloud-service-heat-map/cloud-service-heat-map.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "kQxL":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-buttons-section></app-buttons-section> -->\r\n<!-- <app-inputs-section></app-inputs-section>\r\n<app-crs-section></app-crs-section>\r\n<app-navigation-section></app-navigation-section> -->\r\n\r\n<!-- <section class=\"section section-components\">\r\n  <app-tabs-section></app-tabs-section>\r\n  <app-alerts-section></app-alerts-section>\r\n  <app-typography-section></app-typography-section>\r\n  <app-angular-section></app-angular-section>\r\n</section> -->\r\n\r\n<!-- <section class=\"section section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row justify-content-between align-items-center\">\r\n      <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n        <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\r\n        <p class=\"lead text-white mt-4\">Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n        <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-bootstrap-carousel\" class=\"btn btn-white mt-4\">See all components</a>\r\n      </div>\r\n      <div class=\"col-lg-6 mb-lg-auto\">\r\n        <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\r\n          <ngb-carousel>\r\n              <ng-template ngbSlide>\r\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-1-1200x1000.jpg\" alt=\"First slide\">\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-2-1200x1000.jpg\" alt=\"Second slide\">\r\n              </ng-template>\r\n          </ngb-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  SVG separator -->\r\n  <!-- <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section> -->\r\n\r\n<!-- <app-nucleo-section></app-nucleo-section> -->\r\n\r\n<!-- <section class=\"section section-lg section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row row-grid justify-content-between align-items-center\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"display-3 text-white\">A beautiful Design System\r\n          <span class=\"text-white\">completed with examples</span>\r\n        </h3>\r\n        <p class=\"lead text-white\">The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a [routerLink]=\"['/login']\" class=\"btn btn-success\">Login Page</a>\r\n          <a [routerLink]=\"['/register']\" class=\"btn btn-white\">Register Page</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 mb-lg-auto\">\r\n        <div class=\"transform-perspective-right\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign in with</small>\r\n              </div>\r\n              <div class=\"btn-wrapper text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign in with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\" customCheckLogin2\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin2\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n   SVG separator -->\r\n  <!-- <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section> -->\r\n<!-- <app-versions-section></app-versions-section> -->\r\n");

/***/ }),

/***/ "kbRT":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n");

/***/ }),

/***/ "m1bB":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-components pb-0\" id=\"section-components\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Basic elements -->\r\n        <h2 class=\"mb-5\">\r\n          <span>Basic Elements</span>\r\n        </h2>\r\n        <!-- Buttons -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Buttons</h3>\r\n        <!-- Button styles -->\r\n        <div>\r\n          <button class=\"btn btn-primary\" type=\"button\">Button</button>\r\n          <button class=\"btn btn-icon btn-3 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n            <span class=\"btn-inner--text\">With icon</span>\r\n          </button>\r\n          <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n          </button>\r\n          <!-- Button wizes -->\r\n          <div class=\"mb-3 mt-5\">\r\n            <small class=\"text-uppercase font-weight-bold\">Pick your size</small>\r\n          </div>\r\n          <button class=\"btn btn-sm btn-primary\" type=\"button\">Small</button>\r\n          <button class=\"btn btn-1 btn-primary\" type=\"button\">Regular</button>\r\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">Large Button</button>\r\n        </div>\r\n        <!-- Button colors -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Pick your color</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-primary\" type=\"button\">Primary</button>\r\n        <button class=\"btn btn-1 btn-info\" type=\"button\">Info</button>\r\n        <button class=\"btn btn-1 btn-success\" type=\"button\">Success</button>\r\n        <button class=\"btn btn-1 btn-warning\" type=\"button\">Warning</button>\r\n        <button class=\"btn btn-1 btn-danger\" type=\"button\">Danger</button>\r\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\">Neutral</button>\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Outline</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-outline-primary\" type=\"button\">Outline-primary</button>\r\n        <button class=\"btn btn-1 btn-outline-info\" type=\"button\">Outline-info</button>\r\n        <button class=\"btn btn-1 btn-outline-success\" type=\"button\">Outline-success</button>\r\n        <button class=\"btn btn-1 btn-outline-warning\" type=\"button\">Outline-warning</button>\r\n        <button class=\"btn btn-1 btn-outline-danger\" type=\"button\">Outline-danger</button>\r\n        <!-- Button links -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Links</small>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-default\">Default</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-primary\">Primary</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-info\">Info</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-success\">Success</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-warning\">Warning</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-danger\">Danger</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "nfO4":
/*!****************************************************!*\
  !*** ./src/app/case-study/case-study.component.ts ***!
  \****************************************************/
/*! exports provided: CaseStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudyComponent", function() { return CaseStudyComponent; });
/* harmony import */ var _raw_loader_case_study_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./case-study.component.html */ "js6R");
/* harmony import */ var _case_study_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./case-study.component.css */ "03g3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaseStudyComponent = /** @class */ (function () {
    function CaseStudyComponent() {
    }
    CaseStudyComponent.prototype.ngOnInit = function () {
    };
    CaseStudyComponent.ctorParameters = function () { return []; };
    CaseStudyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-case-study',
            template: _raw_loader_case_study_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_case_study_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CaseStudyComponent);
    return CaseStudyComponent;
}());



/***/ }),

/***/ "ngQx":
/*!*********************************************!*\
  !*** ./src/app/trends/trends.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "zwQV");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss */ "tZ3g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.ctorParameters = function () { return []; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "rh7f":
/*!***************************************************************************************!*\
  !*** ./src/app/business-cerntric-solutions/business-cerntric-solutions.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy1jZXJudHJpYy1zb2x1dGlvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "sOoW":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _raw_loader_contactus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./contactus.component.html */ "8hln");
/* harmony import */ var _contactus_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.component.css */ "hNnN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.ctorParameters = function () { return []; };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contactus',
            template: _raw_loader_contactus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_contactus_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "tALr":
/*!************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmd1bGFyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "tZ3g":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "uMLx":
/*!*****************************************************************************!*\
  !*** ./src/app/cloud-service-heat-map/cloud-service-heat-map.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#arrowAnim {\r\n    width: 5vw;\r\n    height: 5vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .arrow {\r\n    width: 5vw;\r\n    height: 5vw;\r\n    border: 0.5vw solid;\r\n    border-color: black transparent transparent black;\r\n    transform: rotate(45deg);\r\n  }\r\n  \r\n  .arrowSliding {\r\n    position: static;\r\n    top:100px; bottom: 100px; \r\n    -webkit-animation: slide 2s linear infinite; \r\n            animation: slide 2s linear infinite;\r\n  }\r\n  \r\n  .delay1 {\r\n    -webkit-animation-delay: 1s; \r\n      animation-delay: 1s;\r\n  }\r\n  \r\n  .delay2 {\r\n    -webkit-animation-delay: 2s; \r\n      animation-delay: 2s;\r\n  }\r\n  \r\n  .delay3 {\r\n    -webkit-animation-delay: 3s; \r\n      animation-delay: 3s;\r\n  }\r\n  \r\n  @-webkit-keyframes slide {\r\n      0% { opacity:0; transform: translateX(5vw); }  \r\n     20% { opacity:1; transform: translateX(5vw); } \r\n     80% { opacity:1; transform: translateX(-5vw); }  \r\n    100% { opacity:0; transform: translateX(-5vw); } \r\n  }\r\n  \r\n  @keyframes slide {\r\n      0% { opacity:0; transform: translateX(15vw); }  \r\n     20% { opacity:1; transform: translateX(9vw); } \r\n     80% { opacity:1; transform: translateX(-9vw); }  \r\n    100% { opacity:0; transform: translateX(-15vw); } \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkLXNlcnZpY2UtaGVhdC1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpREFBaUQ7SUFDakQsd0JBQXdCO0VBQzFCOztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFNBQVMsRUFBRSxhQUFhO0lBQ3hCLDJDQUEyQztZQUNuQyxtQ0FBbUM7RUFDN0M7O0VBRUE7SUFDRSwyQkFBMkI7TUFDekIsbUJBQW1CO0VBQ3ZCOztFQUNBO0lBQ0UsMkJBQTJCO01BQ3pCLG1CQUFtQjtFQUN2Qjs7RUFDQTtJQUNFLDJCQUEyQjtNQUN6QixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxLQUFLLFNBQVMsRUFBRSwwQkFBMEIsRUFBRTtLQUM3QyxNQUFNLFNBQVMsRUFBRSwwQkFBMEIsRUFBRTtLQUM3QyxNQUFNLFNBQVMsRUFBRSwyQkFBMkIsRUFBRTtJQUMvQyxPQUFPLFNBQVMsRUFBRSwyQkFBMkIsRUFBRTtFQUNqRDs7RUFDQTtNQUNJLEtBQUssU0FBUyxFQUFFLDJCQUEyQixFQUFFO0tBQzlDLE1BQU0sU0FBUyxFQUFFLDBCQUEwQixFQUFFO0tBQzdDLE1BQU0sU0FBUyxFQUFFLDJCQUEyQixFQUFFO0lBQy9DLE9BQU8sU0FBUyxFQUFFLDRCQUE0QixFQUFFO0VBQ2xEIiwiZmlsZSI6ImNsb3VkLXNlcnZpY2UtaGVhdC1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcnJvd0FuaW0ge1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFycm93IHtcclxuICAgIHdpZHRoOiA1dnc7XHJcbiAgICBoZWlnaHQ6IDV2dztcclxuICAgIGJvcmRlcjogMC41dncgc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGJsYWNrO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYXJyb3dTbGlkaW5nIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB0b3A6MTAwcHg7IGJvdHRvbTogMTAwcHg7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlIDJzIGxpbmVhciBpbmZpbml0ZTsgXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAuZGVsYXkxIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxczsgXHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgfVxyXG4gIC5kZWxheTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzOyBcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICB9XHJcbiAgLmRlbGF5MyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogM3M7IFxyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xyXG4gICAgICAwJSB7IG9wYWNpdHk6MDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDV2dyk7IH0gIFxyXG4gICAgIDIwJSB7IG9wYWNpdHk6MTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDV2dyk7IH0gXHJcbiAgICAgODAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTV2dyk7IH0gIFxyXG4gICAgMTAwJSB7IG9wYWNpdHk6MDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01dncpOyB9IFxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAgICAgMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXZ3KTsgfSAgXHJcbiAgICAgMjAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXZ3KTsgfSBcclxuICAgICA4MCUgeyBvcGFjaXR5OjE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOXZ3KTsgfSAgXHJcbiAgICAxMDAlIHsgb3BhY2l0eTowOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1dncpOyB9IFxyXG4gIH0iXX0= */");

/***/ }),

/***/ "vBxA":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doanddonts/doanddonts.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape new Hero -->\r\n      <section class=\"section section-lg section-shaped pb-250\">\r\n        <div class=\"shape shape-style-1 shape-sandbox\">\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n        </div>\r\n        <div class=\"container py-sm ml-pl-5 pt-1 d-flex my-1\">\r\n            <div class=\"card text-white bg-white \" style=\"width: 1500px;\">\r\n                <div class=\"card-header h3 text-success font-weight-bold\">Sandbox Do's <img style=\"width:25px;height:25px;\" src=\"./assets/img/icons/tick.png\" ></div>\r\n                <div class=\"card-body\">\r\n                  <!-- <h5 class=\"card-title\">Things that i can do</h5> -->\r\n                  <ul>\r\n                  <li class=\"card-text text-success\">Sandbox access will be given for only POC purpose or testing the Solutions or Creating Offerings.</li>\r\n                  <li class=\"card-text text-success\">Sandbox Credits can be given upon approval from the alliance team.</li>\r\n                  <li class=\"card-text text-success\">Any Subscription request to come with the Value or the Returns that they are generating.</li>\r\n                  <li class=\"card-text text-success\">Sandbox Susbcripton can be given to host the certain Solutions like garage.</li>\r\n                  <li class=\"card-text text-success\">Technical Justification is needed for Providing the Elivated Access.</li>\r\n                  <li class=\"card-text text-success\">GA Access might be needed in few uses cases to spin certain Services.</li>\r\n                  <li class=\"card-text text-success\">It is recommended to raise MSFT support request for any Issue Troubleshootings.</li>\r\n                  <li class=\"card-text text-success\">Password Reset, MFA key generation or privilege elivation can be taken care by Eng team.</li>\r\n                  <li class=\"card-text text-success\">User Creation and providing the required roles can be done by the Eng team.</li>\r\n                  <li class=\"card-text text-success\">House keeping and cleanup of the Sandbox will be done by Eng team.</li>\r\n\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"card text-white bg-white ml-5\" style=\"width: 1500px;\">\r\n                <div class=\"card-header h3 text-danger font-weight-bold \">Sandbox Dont's <img style=\"width:25px;height:25px;\" src=\"./assets/img/icons/wrong.png\" ></div>\r\n                <div class=\"card-body\">\r\n                  <!-- <h5 class=\"card-title\">Things that i can do</h5> -->\r\n                  <ul>\r\n                  <li class=\"card-text text-danger\">Sandbox is not for the Development or Training Purposes.</li>\r\n                  <li class=\"card-text text-danger\">Global Admin access can not be given to any subscription users permanently.</li>\r\n                  <li class=\"card-text text-danger\">Eng team can not be part of Testing or Integrating the thirdparty Susbcriptions to Sandbox.</li>\r\n                  <li class=\"card-text text-danger\">Eng team can not be part of POC Technical Issues.</li>\r\n                  <li class=\"card-text text-danger\">Eng team can not be part of Testing or Integrating the thirdparty Susbcriptions to Sandbox.</li>\r\n                  <li class=\"card-text text-danger\">No Procurement to be done for the services in the Sandbox, it is recommended to raise GPS request and purchase the required Azure Service with new Commercial Subscription.</li>\r\n                  </ul>\r\n                  \r\n                </div>\r\n              </div>\r\n        </div>\r\n        <!-- <div class=\"container py-lg-md my-1 d-flex \"> -->\r\n       \r\n       \r\n       \r\n       \r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n\r\n    \r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n   \r\n  \r\n  \r\n  </main>\r\n  \r\n");

/***/ }),

/***/ "vKXC":
/*!*******************************************************************************!*\
  !*** ./src/app/sustainability-analysis/sustainability-analysis.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXN0YWluYWJpbGl0eS1hbmFseXNpcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "vYMl":
/*!*******************************************************!*\
  !*** ./src/app/events-link/events-link.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudHMtbGluay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "vqoi":
/*!****************************************************!*\
  !*** ./src/app/doanddonts/doanddonts.component.ts ***!
  \****************************************************/
/*! exports provided: DoanddontsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanddontsComponent", function() { return DoanddontsComponent; });
/* harmony import */ var _raw_loader_doanddonts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./doanddonts.component.html */ "vBxA");
/* harmony import */ var _doanddonts_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doanddonts.component.css */ "S3Y7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoanddontsComponent = /** @class */ (function () {
    function DoanddontsComponent() {
    }
    DoanddontsComponent.prototype.ngOnInit = function () {
    };
    DoanddontsComponent.ctorParameters = function () { return []; };
    DoanddontsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-doanddonts',
            template: _raw_loader_doanddonts_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_doanddonts_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DoanddontsComponent);
    return DoanddontsComponent;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return []; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "xu0q":
/*!******************************************************************!*\
  !*** ./src/app/certification-map/certification-map.component.ts ***!
  \******************************************************************/
/*! exports provided: CertificationMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationMapComponent", function() { return CertificationMapComponent; });
/* harmony import */ var _raw_loader_certification_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./certification-map.component.html */ "0g5s");
/* harmony import */ var _certification_map_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certification-map.component.css */ "1Eyi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CertificationMapComponent = /** @class */ (function () {
    function CertificationMapComponent() {
    }
    CertificationMapComponent.prototype.ngOnInit = function () {
    };
    CertificationMapComponent.ctorParameters = function () { return []; };
    CertificationMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-certification-map',
            template: _raw_loader_certification_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_certification_map_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CertificationMapComponent);
    return CertificationMapComponent;
}());



/***/ }),

/***/ "xwfu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"profile-page\">\r\n  <section class=\"section-profile-cover section-shaped my-0\">\r\n    <!-- Circles background -->\r\n    <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <div class=\"separator separator-bottom separator-skew\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  \r\n  <!-- <section class=\"section\">\r\n    <div class=\"container\">\r\n      <div class=\"card card-profile shadow mt--300\">\r\n        <div class=\"px-4\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-3 order-lg-2\">\r\n              <div class=\"card-profile-image\">\r\n                <a href=\"javascript:void(0)\">\r\n                  <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\r\n              <div class=\"card-profile-actions py-4 mt-lg-0\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 order-lg-1\">\r\n              <div class=\"card-profile-stats d-flex justify-content-center\">\r\n                <div>\r\n                  <span class=\"heading\">22</span>\r\n                  <span class=\"description\">Friends</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">10</span>\r\n                  <span class=\"description\">Photos</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">89</span>\r\n                  <span class=\"description\">Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center mt-5\">\r\n            <h3>Jessica Jones\r\n              <span class=\"font-weight-light\">, 27</span>\r\n            </h3>\r\n            <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>Bucharest, Romania</div>\r\n            <div class=\"h6 mt-4\"><i class=\"ni business_briefcase-24 mr-2\"></i>Solution Manager - Creative Tim Officer</div>\r\n            <div><i class=\"ni education_hat mr-2\"></i>University of Computer Science</div>\r\n          </div>\r\n          <div class=\"mt-5 py-5 border-top text-center\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-9\">\r\n                <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>\r\n                <a href=\"javascript:void(0)\">Show more</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n</main>\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ytxo":
/*!***************************************************************************!*\
  !*** ./src/app/design-and-automation/design-and-automation.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNpZ24tYW5kLWF1dG9tYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "z2zG":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"\">\r\n  <div class=\"container\">\r\n    <!-- Navigation -->\r\n    <h2 class=\"mb-5\">\r\n      <span>Navbars</span>\r\n    </h2>\r\n  </div>\r\n  <!-- Navbar default -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Default Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                \r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-notification-70\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-default_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar primary -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Primary Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                \r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n              <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link no-caret\" id=\"navbar-primary_dropdown_1\" ngbDropdownToggle>Settings</a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-primary_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar success -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Success Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                \r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Favorites</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-planet\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Another action</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-success_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-success_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar danger -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Danger Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                \r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-google-plus\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Google +</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar warning -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-warning mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Warning Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                \r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Share</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Tweet</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-pinterest\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Pin</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar info -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Info Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                \r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler \" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</section>\r\n");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\r\n  <div class=\"container\" style=\"margin:1px\">\r\n    <a class=\"navbar-brand mr-sm-0 \" [routerLink]=\"['/home']\">\r\n      <img  style=\"height:50px;width:170px\" src=\"./assets/img/brand/tcs-color.png\">\r\n      \r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\r\n      <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\">\r\n            <a [routerLink]=\"['/home']\">\r\n              <img src=\"./assets/img/brand/tcs-color.png\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 collapse-close\">\r\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n              <span></span>\r\n              <span></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Products</span>\r\n          </a>\r\n          <div class=\"dropdown-menu-xl dropdown-menu\" >\r\n            <div class=\"dropdown-menu-inner\">\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/tutorial']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\r\n                  <i class=\"ni ni-spaceship\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Getting started</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn how to use Argon compiling Scss, change brand colors and more.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/colors']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                  <i class=\"ni ni-palette\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Foundation</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn more about colors, typography, icons and the grid system we used for Argon.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/alerts']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                  <i class=\"ni ni-ui-04\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h5 class=\"heading text-warning mb-md-1\">Components</h5>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Browse our 50 beautiful handcrafted components offered in the Free version.</p>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </li> -->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <a [routerLink]=\"['/product']\"  class=\"nav-link-inner--text text-white\">Products</a>\r\n          </a>\r\n          <div class=\"dropdown-menu\" >\r\n            <li class=\"nav-item dropdown\" >\r\n              <a class=\"dropdown-item\" data-toggle=\"dropdown\" role=\"button\" style=\"padding-left: 0px; padding:0px\">\r\n                \r\n                <span class=\"dropdown-item dropdown-toggle\" style=\"top: 0; margin-top: -1px;\">Apps & Infra</span>\r\n              </a>\r\n                <div class=\"dropdown-menu\" style=\"left: 100%; position: absolute; top: 30px; margin-top: -1px;\">\r\n                  <a [routerLink]=\"['/assessment']\" class=\"dropdown-item\">Assessment</a>\r\n                  <a [routerLink]=\"['/design-and-automation']\" class=\"dropdown-item\">Design and Automation</a>\r\n                  <a [routerLink]=\"['/migration-factory']\" class=\"dropdown-item\">Migration Factory</a>\r\n                  <a [routerLink]=\"['/upcomming-enhancements']\" class=\"dropdown-item\">Upcoming Enhancements</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" >\r\n            \r\n                <a class=\"dropdown-item \" data-toggle=\"dropdown\" role=\"button\" style=\"padding-left: 0px; padding:0px;\">\r\n                  \r\n                  <span class=\"dropdown-item dropdown-toggle\" >Bizapps</span>\r\n                </a>\r\n                <div class=\"dropdown-menu\" style=\"left: 100%; position: absolute; top: 45px; margin-top: -1px;\">\r\n                  <a [routerLink]=\"['/assessment']\" class=\"dropdown-item\">Assessment</a>\r\n                  <a [routerLink]=\"['/design-and-automation']\" class=\"dropdown-item\">Design and Automation</a>\r\n                  <a [routerLink]=\"['/migration-factory']\" class=\"dropdown-item\">Migration Factory</a>\r\n                  <a [routerLink]=\"['/upcomming-enhancements']\" class=\"dropdown-item\">Upcoming Enhancements</a>\r\n                </div>\r\n              \r\n            </li>\r\n          </div>\r\n        </li>\r\n        <!--<li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Solutions</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['/business-centric-solutions']\" class=\"dropdown-item\">Business Centric Solutions</a>\r\n            <a [routerLink]=\"['/sustainability-analysis']\" class=\"dropdown-item\">Sustainability Analysis</a>\r\n            <a [routerLink]=\"['/sap']\" class=\"dropdown-item\">Enterprise Solution-SAP</a>\r\n             <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a> \r\n          </div>\r\n        </li>-->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Industry</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['/']\" class=\"dropdown-item\">BFSI</a>\r\n            <a [routerLink]=\"['/']\" class=\"dropdown-item\">MFG</a>\r\n            <a [routerLink]=\"['/']\" class=\"dropdown-item\">ERU</a>\r\n            <a [routerLink]=\"['/']\" class=\"dropdown-item\">LSHC</a>\r\n            <a [routerLink]=\"['/']\" class=\"dropdown-item\">Retail</a>\r\n            <!-- <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a> -->\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text align-items-left\">Events</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['/events-link']\" class=\"dropdown-item\">Events Link</a>\r\n            \r\n            <!-- <a [routerLink]=\"['/login']\" class=\"dropdown-item\">Migration Factory</a> -->\r\n            <!-- <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a> -->\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Trends</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            \r\n            <a href=\"https://azurecharts.com/heatmap\" target=\"_blank\" class=\"dropdown-item\">Cloud Services Heat Map</a>\r\n            <a href=\"https://azurecharts.com/highlights\" target=\"_blank\" class=\"dropdown-item\">Latest Highlights</a>\r\n            <a href=\"https://azurecharts.com/highlights/trends\" target=\"_blank\" class=\"dropdown-item\">Trends</a>\r\n            <!-- <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a> -->\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Sandbox</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['DoanddontsComponent']\" class=\"dropdown-item\">Do's and Donts<span class=\"badge bg-secondary\">New</span></a>\r\n            <a [routerLink]=\"['ActiveinactivesubscriptionsComponent']\" class=\"dropdown-item\">Active/Inactive Subscriptions</a>\r\n            <a [routerLink]=\"['AcceleratorsipsComponent']\" class=\"dropdown-item\">Accelerators/IPs<span class=\"badge bg-secondary\">New</span></a>\r\n            <a [routerLink]=\"['/faqs']\" class=\"dropdown-item\">FAQ<span class=\"badge bg-secondary\">New</span></a>\r\n            <!-- <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a> -->\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Resources</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['/case-study']\" class=\"dropdown-item\">Case Study/Success story</a>\r\n            <a [routerLink]=\"['/certification-map']\" class=\"dropdown-item\">Certification Map</a>\r\n            <a [routerLink]=\"['/teams-channel']\" class=\"dropdown-item\">Teams Channel</a>\r\n            <!-- <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a> -->\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Newsletter</span>\r\n          </a>\r\n          \r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://www.facebook.com/creativetim\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Like us on Facebook\">\r\n            <i class=\"fa fa-facebook-square\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\r\n          </a>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://www.instagram.com/creativetimofficial\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Instagram\">\r\n            <i class=\"fa fa-instagram\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\r\n          </a>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://twitter.com/creativetim\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Twitter\">\r\n            <i class=\"fa fa-twitter-square\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\r\n          </a>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-navbar\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Star us on Github\">\r\n            <i class=\"fa fa-github\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\r\n          </a>\r\n        </li> -->\r\n        <li class=\"nav-item d-none d-lg-block ml-sm-0\">\r\n          \r\n          <a  class=\"btn\" style=\"margin-left: 100px;\"> \r\n            \r\n            <span style=\"color: rgb(253, 253, 253); font:geogia; \">Building on belief </span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zcPd":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/migration-factory/migration-factory.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"position-relative\">\r\n      <!-- shape Hero -->\r\n      <section class=\"section section-lg section-shaped pb-250\">\r\n        <div class=\"shape shape-style-1 shape-default\">\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n        </div>\r\n        <div class=\"container py-lg-md d-flex\">\r\n          <div class=\"col px-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-15\">\r\n                <h1 class=\"display-3  text-white\">Migration Factory\r\n                  <!-- <span>completed with examples</span> -->\r\n                </h1>\r\n              <p class=\"lead  text-white\">Factory-based migration of Infrastructure, Applications, Database to cloud along with Cross Cloud Migration</p>\r\n                <!-- <div class=\"btn-wrapper\">\r\n                  <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                    <span class=\"btn-inner--text\">Components</span>\r\n                  </a>\r\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                    <span class=\"btn-inner--text\">Download Angular</span>\r\n                  </a>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <!-- 1st Hero Variation -->\r\n    </div>\r\n  \r\n    <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"row row-grid\">\r\n              <div class=\"col-lg-4\">\r\n                <div class=\"card card-lift--hover shadow border-0\">\r\n                  <div class=\"card-body py-5\">\r\n                    <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                      <i class=\"ni ni-check-bold\"></i>\r\n                    </div>\r\n                    <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                    <div>\r\n                      <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                      <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                      <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                    </div>\r\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-4\">\r\n                <div class=\"card card-lift--hover shadow border-0\">\r\n                  <div class=\"card-body py-5\">\r\n                    <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                      <i class=\"ni ni-istanbul\"></i>\r\n                    </div>\r\n                    <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                    <div>\r\n                      <span class=\"badge badge-pill badge-success\">business</span>\r\n                      <span class=\"badge badge-pill badge-success\">vision</span>\r\n                      <span class=\"badge badge-pill badge-success\">success</span>\r\n                    </div>\r\n                    <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-4\">\r\n                <div class=\"card card-lift--hover shadow border-0\">\r\n                  <div class=\"card-body py-5\">\r\n                    <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                      <i class=\"ni ni-planet\"></i>\r\n                    </div>\r\n                    <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                    <div>\r\n                      <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                      <span class=\"badge badge-pill badge-warning\">product</span>\r\n                      <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                    </div>\r\n                    <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg\">\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid align-items-center\">\r\n          <div class=\"col-md-6 order-md-2\">\r\n            <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\r\n          </div>\r\n          <div class=\"col-md-6 order-md-1\">\r\n            <div class=\"pr-md-5\">\r\n              <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n                <i class=\"ni ni-settings-gear-65\"></i>\r\n              </div>\r\n              <h3>Awesome features</h3>\r\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n              <ul class=\"list-unstyled mt-5\">\r\n                <li class=\"py-2\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div>\r\n                      <div class=\"badge badge-circle badge-success mr-3\">\r\n                        <i class=\"ni ni-settings-gear-65\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <h6 class=\"mb-0\">Carefully crafted components</h6>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"py-2\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div>\r\n                      <div class=\"badge badge-circle badge-success mr-3\">\r\n                        <i class=\"ni ni-html5\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <h6 class=\"mb-0\">Amazing page examples</h6>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"py-2\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div>\r\n                      <div class=\"badge badge-circle badge-success mr-3\">\r\n                        <i class=\"ni ni-satisfied\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <h6 class=\"mb-0\">Super friendly support team</h6>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section bg-secondary\">\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid align-items-center\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card bg-default shadow border-0\">\r\n              <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n              <blockquote class=\"card-blockquote\">\r\n                <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                  <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                  <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n                </svg>\r\n                <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n                <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"pl-md-5\">\r\n              <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n                <i class=\"ni ni-settings\"></i>\r\n              </div>\r\n              <h3>Our customers</h3>\r\n              <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n              <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section pb-0 bg-gradient-warning\">\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid align-items-center\">\r\n          <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n            <div class=\"position-relative pl-md-5\">\r\n              <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 order-lg-1\">\r\n            <div class=\"d-flex px-3\">\r\n              <div>\r\n                <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                  <i class=\"ni ni-building text-primary\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"pl-4\">\r\n                <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n                <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"card shadow shadow-lg--hover mt-5\">\r\n              <div class=\"card-body\">\r\n                <div class=\"d-flex px-3\">\r\n                  <div>\r\n                    <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                      <i class=\"ni ni-satisfied\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"pl-4\">\r\n                    <h5 class=\"title text-success\">Awesome Support</h5>\r\n                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                    <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card shadow shadow-lg--hover mt-5\">\r\n              <div class=\"card-body\">\r\n                <div class=\"d-flex px-3\">\r\n                  <div>\r\n                    <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                      <i class=\"ni ni-active-40\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"pl-4\">\r\n                    <h5 class=\"title text-warning\">Modular Components</h5>\r\n                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                    <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n       SVG separator\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center text-center mb-lg\">\r\n          <div class=\"col-lg-8\">\r\n            <h2 class=\"display-3\">The amazing Team</h2>\r\n            <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n            <div class=\"px-4\">\r\n              <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n              <div class=\"pt-4 text-center\">\r\n                <h5 class=\"title\">\r\n                  <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                  <small class=\"h6 text-muted\">Web Developer</small>\r\n                </h5>\r\n                <div class=\"mt-3\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n            <div class=\"px-4\">\r\n              <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n              <div class=\"pt-4 text-center\">\r\n                <h5 class=\"title\">\r\n                  <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                  <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n                </h5>\r\n                <div class=\"mt-3\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n            <div class=\"px-4\">\r\n              <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n              <div class=\"pt-4 text-center\">\r\n                <h5 class=\"title\">\r\n                  <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                  <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n                </h5>\r\n                <div class=\"mt-3\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n            <div class=\"px-4\">\r\n              <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n              <div class=\"pt-4 text-center\">\r\n                <h5 class=\"title\">\r\n                  <span class=\"d-block mb-1\">John Doe</span>\r\n                  <small class=\"h6 text-muted\">Founder and CEO</small>\r\n                </h5>\r\n                <div class=\"mt-3\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg pt-0\">\r\n      <div class=\"container\">\r\n        <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n          <div class=\"p-5\">\r\n            <div class=\"row align-items-center\">\r\n              <div class=\"col-lg-8\">\r\n                <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n                <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n              </div>\r\n              <div class=\"col-lg-3 ml-lg-auto\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg bg-gradient-default\">\r\n      <div class=\"container pt-lg pb-300\">\r\n        <div class=\"row text-center justify-content-center\">\r\n          <div class=\"col-lg-10\">\r\n            <h2 class=\"display-3 text-white\">Build something</h2>\r\n            <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-grid mt-5\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n              <i class=\"ni ni-settings text-primary\"></i>\r\n            </div>\r\n            <h5 class=\"text-white mt-3\">Building tools</h5>\r\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n              <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n            </div>\r\n            <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n              <i class=\"ni ni-atom text-primary\"></i>\r\n            </div>\r\n            <h5 class=\"text-white mt-3\">Launch time</h5>\r\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n       SVG separator\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center mt--300\">\r\n          <div class=\"col-lg-8\">\r\n            <div class=\"card bg-gradient-secondary shadow\">\r\n              <div class=\"card-body p-lg-5\">\r\n                <h4 class=\"mb-1\">Want to work with us?</h4>\r\n                <p class=\"mt-0\">Your project is very important to us.</p>\r\n                <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group mb-4\">\r\n                  <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n    <!-- <section class=\"section section-lg\">\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid justify-content-center\">\r\n          <div class=\"col-lg-8 text-center\">\r\n            <h2 class=\"display-3\">Do you love this awesome\r\n              <span class=\"text-success\">Design System for Angular?</span>\r\n            </h2>\r\n            <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n            <div class=\"btn-wrapper\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n              <div class=\"row justify-content-center\">\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-4\">\r\n                  <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> -->\r\n  \r\n  </main>\r\n  \r\n\r\n");

/***/ }),

/***/ "zg1N":
/*!***************************************************************************************!*\
  !*** ./src/app/activeinactivesubscriptions/activeinactivesubscriptions.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmVpbmFjdGl2ZXN1YnNjcmlwdGlvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "zwQV":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign up with</small>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign up with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-muted font-italic\">\r\n                  <small>password strength:\r\n                    <span class=\"text-success font-weight-700\">strong</span>\r\n                  </small>\r\n                </div>\r\n                <div class=\"row my-4\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                      <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                      <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                        <span>I agree with the\r\n                          <a href=\"javascript:void(0)\">Privacy Policy</a>\r\n                        </span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary mt-4\">Create account</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map