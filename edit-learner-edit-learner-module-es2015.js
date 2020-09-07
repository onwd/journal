(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-learner-edit-learner-module"],{

/***/ "./src/app/public/journal/edit-learner/edit-learner.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/public/journal/edit-learner/edit-learner.component.ts ***!
  \***********************************************************************/
/*! exports provided: PublicJournalEditLearnerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicJournalEditLearnerPageComponent", function() { return PublicJournalEditLearnerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/data */ "./src/app/shared/data/index.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










class PublicJournalEditLearnerPageComponent {
    constructor(activatedRoute, dataService) {
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.learner = this.dataService.learners.find((learner) => learner.id === Number(id));
    }
}
PublicJournalEditLearnerPageComponent.ɵfac = function PublicJournalEditLearnerPageComponent_Factory(t) { return new (t || PublicJournalEditLearnerPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
PublicJournalEditLearnerPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicJournalEditLearnerPageComponent, selectors: [["public-journal-edit-learner-page"]], decls: 37, vars: 8, consts: [[1, "edit-learner-page"], ["color", "primary"], [1, "form"], [1, "form-field"], ["matInput", "", "name", "name", 3, "ngModel", "ngModelChange"], ["name", "gender", 3, "ngModel", "ngModelChange"], ["value", "male"], ["value", "female"], ["matInput", "", "name", "birthDate", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "personalFileNumber", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "address", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "parentsName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "parentsInfo", 3, "ngModel", "ngModelChange"]], template: function PublicJournalEditLearnerPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0424\u0418\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicJournalEditLearnerPageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.learner.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F\u043E\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicJournalEditLearnerPageComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.learner.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041C\u0443\u0436\u0441\u043A\u043E\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0416\u0435\u043D\u0441\u043A\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicJournalEditLearnerPageComponent_Template_input_ngModelChange_20_listener($event) { return ctx.learner.birthDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041D\u043E\u043C\u0435\u0440 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0434\u0435\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicJournalEditLearnerPageComponent_Template_input_ngModelChange_24_listener($event) { return ctx.learner.personalFileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0439 \u0430\u0434\u0440\u0435\u0441, \u0442\u0435\u043B\u0435\u0444\u043E\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicJournalEditLearnerPageComponent_Template_textarea_ngModelChange_28_listener($event) { return ctx.learner.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0424\u0418\u041E \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicJournalEditLearnerPageComponent_Template_textarea_ngModelChange_32_listener($event) { return ctx.learner.parentsName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0430\u044F \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C, \u0442\u0435\u043B\u0435\u0444\u043E\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicJournalEditLearnerPageComponent_Template_textarea_ngModelChange_36_listener($event) { return ctx.learner.parentsInfo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.learner.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.learner.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.learner.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.learner.birthDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.learner.personalFileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.learner.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.learner.parentsName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.learner.parentsInfo);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["[_nghost-%COMP%]     .edit-learner-page .form {\n  padding: 24px;\n  box-sizing: border-box;\n  width: 100%;\n}\n[_nghost-%COMP%]     .edit-learner-page .form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2pvdXJuYWwvZWRpdC1sZWFybmVyL0M6XFxHaXRcXG9ud2RcXGpvdXJuYWwvc3JjXFxhcHBcXHB1YmxpY1xcam91cm5hbFxcZWRpdC1sZWFybmVyXFxlZGl0LWxlYXJuZXIuc2NzcyIsInNyYy9hcHAvcHVibGljL2pvdXJuYWwvZWRpdC1sZWFybmVyL2VkaXQtbGVhcm5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvam91cm5hbC9lZGl0LWxlYXJuZXIvZWRpdC1sZWFybmVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmVkaXQtbGVhcm5lci1wYWdlIHtcbiAgLmZvcm0ge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYtZmllbGQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLmVkaXQtbGVhcm5lci1wYWdlIC5mb3JtIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmVkaXQtbGVhcm5lci1wYWdlIC5mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicJournalEditLearnerPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'public-journal-edit-learner-page',
                templateUrl: 'edit-learner.html',
                styleUrls: ['edit-learner.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_data__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public/journal/edit-learner/edit-learner.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/public/journal/edit-learner/edit-learner.module.ts ***!
  \********************************************************************/
/*! exports provided: PublicJournalEditLearnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicJournalEditLearnerPageModule", function() { return PublicJournalEditLearnerPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_learner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-learner.component */ "./src/app/public/journal/edit-learner/edit-learner.component.ts");
/* harmony import */ var _edit_learner_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-learner.routing */ "./src/app/public/journal/edit-learner/edit-learner.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











class PublicJournalEditLearnerPageModule {
}
PublicJournalEditLearnerPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PublicJournalEditLearnerPageModule });
PublicJournalEditLearnerPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function PublicJournalEditLearnerPageModule_Factory(t) { return new (t || PublicJournalEditLearnerPageModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _edit_learner_routing__WEBPACK_IMPORTED_MODULE_7__["PublicJournalEditLearnerPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PublicJournalEditLearnerPageModule, { declarations: [_edit_learner_component__WEBPACK_IMPORTED_MODULE_6__["PublicJournalEditLearnerPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        _edit_learner_routing__WEBPACK_IMPORTED_MODULE_7__["PublicJournalEditLearnerPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](PublicJournalEditLearnerPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _edit_learner_component__WEBPACK_IMPORTED_MODULE_6__["PublicJournalEditLearnerPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                    _edit_learner_routing__WEBPACK_IMPORTED_MODULE_7__["PublicJournalEditLearnerPageRoutingModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/public/journal/edit-learner/edit-learner.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/public/journal/edit-learner/edit-learner.routing.ts ***!
  \*********************************************************************/
/*! exports provided: PublicJournalEditLearnerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicJournalEditLearnerPageRoutingModule", function() { return PublicJournalEditLearnerPageRoutingModule; });
/* harmony import */ var _edit_learner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-learner.component */ "./src/app/public/journal/edit-learner/edit-learner.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _edit_learner_component__WEBPACK_IMPORTED_MODULE_0__["PublicJournalEditLearnerPageComponent"]
    }
];
class PublicJournalEditLearnerPageRoutingModule {
}
PublicJournalEditLearnerPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PublicJournalEditLearnerPageRoutingModule });
PublicJournalEditLearnerPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PublicJournalEditLearnerPageRoutingModule_Factory(t) { return new (t || PublicJournalEditLearnerPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicJournalEditLearnerPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PublicJournalEditLearnerPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=edit-learner-edit-learner-module-es2015.js.map