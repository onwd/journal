function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-group-edit-group-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
    \******************************************************************************/

  /*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, getMatAutocompleteMissingPanelError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015AutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
      return AUTOCOMPLETE_OPTION_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
      return AUTOCOMPLETE_PANEL_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
      return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
      return MatAutocomplete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
      return MatAutocompleteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
      return MatAutocompleteOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
      return MatAutocompleteSelectedEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
      return MatAutocompleteTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
      return getMatAutocompleteMissingPanelError;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Autocomplete IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */


    var _c0 = ["panel"];

    function MatAutocomplete_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
      }
    }

    var _c1 = ["*"];
    var _uniqueAutocompleteIdCounter = 0;
    /**
     * Event object that is emitted when an autocomplete option is selected.
     */

    var MatAutocompleteSelectedEvent =
    /**
     * @param {?} source
     * @param {?} option
     */
    function MatAutocompleteSelectedEvent(source, option) {
      _classCallCheck(this, MatAutocompleteSelectedEvent);

      this.source = source;
      this.option = option;
    };

    if (false) {}
    /**
     * Event object that is emitted when an autocomplete option is activated.
     * @record
     */


    function MatAutocompleteActivatedEvent() {}

    if (false) {} // Boilerplate for applying mixins to MatAutocomplete.

    /**
     * \@docs-private
     */


    var MatAutocompleteBase = function MatAutocompleteBase() {
      _classCallCheck(this, MatAutocompleteBase);
    };
    /** @type {?} */


    var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
    /**
     * Default `mat-autocomplete` options that can be overridden.
     * @record
     */


    function MatAutocompleteDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-autocomplete`.
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
      providedIn: 'root',
      factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
      return {
        autoActiveFirstOption: false
      };
    }

    var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteMixin) {
      _inherits(MatAutocomplete, _MatAutocompleteMixin);

      var _super = _createSuper(MatAutocomplete);

      /**
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} defaults
       */
      function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
        var _this;

        _classCallCheck(this, MatAutocomplete);

        _this = _super.call(this);
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        _this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete panel should be visible, depending on option length.
         */

        _this.showPanel = false;
        _this._isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger.
         */

        _this.displayWith = null;
        /**
         * Event that is emitted whenever an option from the list is selected.
         */

        _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */

        _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */

        _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emits whenever an option is activated using the keyboard.
         */

        _this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this._classList = {};
        /**
         * Unique ID to be used by autocomplete trigger's "aria-owns" property.
         */

        _this.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
        _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
        return _this;
      }
      /**
       * Whether the autocomplete panel is open.
       * @return {?}
       */


      _createClass(MatAutocomplete, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this2 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap();
          this._activeOptionChanges = this._keyManager.change.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            _this2.optionActivated.emit({
              source: _this2,
              option: _this2.options.toArray()[index] || null
            });
          }); // Set the initial visibility state.

          this._setVisibility();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._activeOptionChanges.unsubscribe();
        }
        /**
         * Sets the panel scrollTop. This allows us to manually scroll to display options
         * above or below the fold, as they are not actually being focused when active.
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_setScrollTop",
        value: function _setScrollTop(scrollTop) {
          if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
          }
        }
        /**
         * Returns the panel's scrollTop.
         * @return {?}
         */

      }, {
        key: "_getScrollTop",
        value: function _getScrollTop() {
          return this.panel ? this.panel.nativeElement.scrollTop : 0;
        }
        /**
         * Panel should hide itself when the option list is empty.
         * @return {?}
         */

      }, {
        key: "_setVisibility",
        value: function _setVisibility() {
          this.showPanel = !!this.options.length;

          this._setVisibilityClasses(this._classList);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits the `select` event.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_emitSelectEvent",
        value: function _emitSelectEvent(option) {
          /** @type {?} */
          var event = new MatAutocompleteSelectedEvent(this, option);
          this.optionSelected.emit(event);
        }
        /**
         * Sets the autocomplete visibility classes on a classlist based on the panel is visible.
         * @private
         * @param {?} classList
         * @return {?}
         */

      }, {
        key: "_setVisibilityClasses",
        value: function _setVisibilityClasses(classList) {
          classList['mat-autocomplete-visible'] = this.showPanel;
          classList['mat-autocomplete-hidden'] = !this.showPanel;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._isOpen && this.showPanel;
        }
        /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         * @return {?}
         */

      }, {
        key: "autoActiveFirstOption",
        get: function get() {
          return this._autoActiveFirstOption;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "classList",
        set: function set(value) {
          if (value && value.length) {
            this._classList = value.split(' ').reduce(
            /**
            * @param {?} classList
            * @param {?} className
            * @return {?}
            */
            function (classList, className) {
              classList[className.trim()] = true;
              return classList;
            },
            /** @type {?} */
            {});
          } else {
            this._classList = {};
          }

          this._setVisibilityClasses(this._classList);

          this._elementRef.nativeElement.className = '';
        }
      }]);

      return MatAutocomplete;
    }(_MatAutocompleteMixinBase);

    MatAutocomplete.ɵfac = function MatAutocomplete_Factory(t) {
      return new (t || MatAutocomplete)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS));
    };

    MatAutocomplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatAutocomplete,
      selectors: [["mat-autocomplete"]],
      contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        }
      },
      viewQuery: function MatAutocomplete_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        }
      },
      hostAttrs: [1, "mat-autocomplete"],
      inputs: {
        disableRipple: "disableRipple",
        displayWith: "displayWith",
        autoActiveFirstOption: "autoActiveFirstOption",
        classList: ["class", "classList"],
        panelWidth: "panelWidth"
      },
      outputs: {
        optionSelected: "optionSelected",
        opened: "opened",
        closed: "closed",
        optionActivated: "optionActivated"
      },
      exportAs: ["matAutocomplete"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
        useExisting: MatAutocomplete
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
      template: function MatAutocomplete_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatAutocomplete.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatAutocomplete.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
          "static": true
        }]
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['panel']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
          descendants: true
        }]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      autoActiveFirstOption: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      panelWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      optionSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      optionActivated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      classList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['class']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocomplete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'mat-autocomplete',
          template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          exportAs: 'matAutocomplete',
          inputs: ['disableRipple'],
          host: {
            'class': 'mat-autocomplete'
          },
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
            useExisting: MatAutocomplete
          }],
          styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        optionSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        optionActivated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        autoActiveFirstOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['class']
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
            "static": true
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
            descendants: true
          }]
        }],
        panelWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-origin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive applied to an element to make it usable
     * as a connection point for an autocomplete panel.
     */


    var MatAutocompleteOrigin =
    /**
     * @param {?} elementRef
     */
    function MatAutocompleteOrigin(elementRef) {
      _classCallCheck(this, MatAutocompleteOrigin);

      this.elementRef = elementRef;
    };

    MatAutocompleteOrigin.ɵfac = function MatAutocompleteOrigin_Factory(t) {
      return new (t || MatAutocompleteOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
    };

    MatAutocompleteOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatAutocompleteOrigin,
      selectors: [["", "matAutocompleteOrigin", ""]],
      exportAs: ["matAutocompleteOrigin"]
    });
    /** @nocollapse */

    MatAutocompleteOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[matAutocompleteOrigin]',
          exportAs: 'matAutocompleteOrigin'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-trigger.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The height of each autocomplete option.
     * @type {?}
     */


    var AUTOCOMPLETE_OPTION_HEIGHT = 48;
    /**
     * The total height of the autocomplete panel.
     * @type {?}
     */

    var AUTOCOMPLETE_PANEL_HEIGHT = 256;
    /**
     * Injection token that determines the scroll handling while the autocomplete panel is open.
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Provider that allows the autocomplete to register as a ControlValueAccessor.
     * \@docs-private
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatAutocompleteTrigger;
      }),
      multi: true
    };
    /**
     * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
     * \@docs-private
     * @return {?}
     */

    function getMatAutocompleteMissingPanelError() {
      return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
    }

    var MatAutocompleteTrigger = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _overlay
       * @param {?} _viewContainerRef
       * @param {?} _zone
       * @param {?} _changeDetectorRef
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _formField
       * @param {?} _document
       * @param {?=} _viewportRuler
       */
      function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
        var _this3 = this;

        _classCallCheck(this, MatAutocompleteTrigger);

        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /**
         * Whether or not the label state is being overridden.
         */

        this._manuallyFloatingLabel = false;
        /**
         * Subscription to viewport size changes.
         */

        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */

        this._canOpenOnNextFocus = true;
        /**
         * Stream of keyboard events that can close the panel.
         */

        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */

        this._windowBlurHandler =
        /**
        * @return {?}
        */
        function () {
          // If the user blurred the window while the autocomplete is focused, it means that it'll be
          // refocused when they come back. In this case we want to skip the first focus event, if the
          // pane was closed, in order to avoid reopening it unintentionally.
          _this3._canOpenOnNextFocus = _this3._document.activeElement !== _this3._element.nativeElement || _this3.panelOpen;
        };
        /**
         * `View -> model callback called when value changes`
         */


        this._onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * `View -> model callback called when autocomplete has been touched`
         */


        this._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Position of the autocomplete panel relative to the trigger element. A position of `auto`
         * will render the panel underneath the trigger if there is enough space for it to fit in
         * the viewport, otherwise the panel will be shown above it. If the position is set to
         * `above` or `below`, the panel will always be shown above or below the trigger. no matter
         * whether it fits completely in the viewport.
         */


        this.position = 'auto';
        /**
         * `autocomplete` attribute to be set on the input element.
         * \@docs-private
         */

        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /**
         * Stream of autocomplete option selections.
         */

        this.optionSelections =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(
        /**
        * @return {?}
        */
        function () {
          if (_this3.autocomplete && _this3.autocomplete.options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(_this3.autocomplete.options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.onSelectionChange;
            })));
          } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
          // Return a stream that we'll replace with the real one once everything is in place.


          return _this3._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this3.optionSelections;
          }));
        });
        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Whether the autocomplete is disabled. When disabled, the element will
       * act as a regular input and the user won't be able to open the panel.
       * @return {?}
       */


      _createClass(MatAutocompleteTrigger, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this4 = this;

          /** @type {?} */
          var window = this._getWindow();

          if (typeof window !== 'undefined') {
            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return window.addEventListener('blur', _this4._windowBlurHandler);
            });
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['position'] && this._positionStrategy) {
            this._setStrategyPositions(this._positionStrategy);

            if (this.panelOpen) {
              /** @type {?} */
              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var window = this._getWindow();

          if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
          }

          this._viewportSubscription.unsubscribe();

          this._componentDestroyed = true;

          this._destroyPanel();

          this._closeKeyEventStream.complete();
        }
        /**
         * Whether or not the autocomplete panel is open.
         * @return {?}
         */

      }, {
        key: "openPanel",

        /**
         * Opens the autocomplete suggestion panel.
         * @return {?}
         */
        value: function openPanel() {
          this._attachOverlay();

          this._floatLabel();
        }
        /**
         * Closes the autocomplete suggestion panel.
         * @return {?}
         */

      }, {
        key: "closePanel",
        value: function closePanel() {
          this._resetLabel();

          if (!this._overlayAttached) {
            return;
          }

          if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
          }

          this.autocomplete._isOpen = this._overlayAttached = false;

          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();

            this._closingActionsSubscription.unsubscribe();
          } // Note that in some cases this can end up being called after the component is destroyed.
          // Add a check to ensure that we don't try to run change detection on a destroyed view.


          if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
         * within the viewport.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._overlayAttached) {
            /** @type {?} */
            this._overlayRef.updatePosition();
          }
        }
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */

      }, {
        key: "_getOutsideClickStream",

        /**
         * Stream of clicks outside of the autocomplete panel.
         * @private
         * @return {?}
         */
        value: function _getOutsideClickStream() {
          var _this5 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'click'),
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
            // fall back to check the first element in the path of the click event.

            /** @type {?} */
            var clickTarget =
            /** @type {?} */
            _this5._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
            /** @type {?} */

            var formField = _this5._formField ? _this5._formField._elementRef.nativeElement : null;
            return _this5._overlayAttached && clickTarget !== _this5._element.nativeElement && (!formField || !formField.contains(clickTarget)) && !!_this5._overlayRef && !_this5._overlayRef.overlayElement.contains(clickTarget);
          }));
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          var _this6 = this;

          Promise.resolve(null).then(
          /**
          * @return {?}
          */
          function () {
            return _this6._setTriggerValue(value);
          });
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._element.nativeElement.disabled = isDisabled;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
          // in line with other browsers. By default, pressing escape on IE will cause it to revert
          // the input value to the one that it had on focus, however it won't dispatch any events
          // which means that the model value will be out of sync with the view.

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"]) {
            event.preventDefault();
          }

          if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"] && this.panelOpen) {
            this.activeOption._selectViaInteraction();

            this._resetActiveItem();

            event.preventDefault();
          } else if (this.autocomplete) {
            /** @type {?} */
            var prevActiveItem = this.autocomplete._keyManager.activeItem;
            /** @type {?} */

            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"];

            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["TAB"]) {
              this.autocomplete._keyManager.onKeydown(event);
            } else if (isArrowKey && this._canOpen()) {
              this.openPanel();
            }

            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
              this._scrollToOption();
            }
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleInput",
        value: function _handleInput(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var value = target.value; // Based on `NumberValueAccessor` from forms.

          if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
          } // If the input has a placeholder, IE will fire the `input` event on page load,
          // focus and blur, in addition to when the user actually changed the value. To
          // filter out all of the extra events, we save the value on focus and between
          // `input` events, and we check whether it changed.
          // See: https://connect.microsoft.com/IE/feedback/details/885747/


          if (this._previousValue !== value) {
            this._previousValue = value;

            this._onChange(value);

            if (this._canOpen() && this._document.activeElement === event.target) {
              this.openPanel();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleFocus",
        value: function _handleFocus() {
          if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
          } else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;

            this._attachOverlay();

            this._floatLabel(true);
          }
        }
        /**
         * In "auto" mode, the label will animate down as soon as focus is lost.
         * This causes the value to jump when selecting an option with the mouse.
         * This method manually floats the label until the panel can be closed.
         * @private
         * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
         * @return {?}
         */

      }, {
        key: "_floatLabel",
        value: function _floatLabel() {
          var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
              this._formField._animateAndLockLabel();
            } else {
              this._formField.floatLabel = 'always';
            }

            this._manuallyFloatingLabel = true;
          }
        }
        /**
         * If the label has been manually elevated, return it to its normal state.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetLabel",
        value: function _resetLabel() {
          if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
          }
        }
        /**
         * Given that we are not actually focusing active options, we must manually adjust scroll
         * to reveal options below the fold. First, we find the offset of the option from the top
         * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
         * the panel height + the option height, so the active option will be just visible at the
         * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
         * will become the offset. If that offset is visible within the panel already, the scrollTop is
         * not adjusted.
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToOption",
        value: function _scrollToOption() {
          /** @type {?} */
          var index = this.autocomplete._keyManager.activeItemIndex || 0;
          /** @type {?} */

          var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);

          if (index === 0 && labelCount === 1) {
            // If we've got one group label before the option and we're at the top option,
            // scroll the list to the top. This is better UX than scrolling the list to the
            // top of the option, because it allows the user to read the top group's label.
            this.autocomplete._setScrollTop(0);
          } else {
            /** @type {?} */
            var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);

            this.autocomplete._setScrollTop(newScrollPosition);
          }
        }
        /**
         * This method listens to a stream of panel closing actions and resets the
         * stream every time the option list changes.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToClosingActions",
        value: function _subscribeToClosingActions() {
          var _this7 = this;

          /** @type {?} */
          var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));
          /** @type {?} */


          var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this7._positionStrategy.reapplyLastPosition();
          }), // Defer emitting to the stream until the next tick, because changing
          // bindings in here will cause "changed after checked" errors.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
          // that were created, and flatten it so our stream only emits closing events...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var wasOpen = _this7.panelOpen;

            _this7._resetActiveItem();

            _this7.autocomplete._setVisibility();

            if (_this7.panelOpen) {
              /** @type {?} */
              _this7._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
              // event, because we may not have emitted it when the panel was attached. This
              // can happen if the users opens the panel and there are no options, but the
              // options come in slightly later or as a result of the value changing.


              if (wasOpen !== _this7.panelOpen) {
                _this7.autocomplete.opened.emit();
              }
            }

            return _this7.panelClosingActions;
          }), // when the first closing event occurs...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)) // set the value, close the panel, and complete.
          .subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this7._setValueAndClose(event);
          });
        }
        /**
         * Destroys the autocomplete suggestion panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPanel",
        value: function _destroyPanel() {
          if (this._overlayRef) {
            this.closePanel();

            this._overlayRef.dispose();

            this._overlayRef = null;
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setTriggerValue",
        value: function _setTriggerValue(value) {
          /** @type {?} */
          var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
          // The display value can also be the number zero and shouldn't fall back to an empty string.

          /** @type {?} */

          var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
          // through change detection.

          if (this._formField) {
            this._formField._control.value = inputValue;
          } else {
            this._element.nativeElement.value = inputValue;
          }

          this._previousValue = inputValue;
        }
        /**
         * This method closes the panel, and if a value is specified, also sets the associated
         * control to that value. It will also mark the control as dirty if this interaction
         * stemmed from the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_setValueAndClose",
        value: function _setValueAndClose(event) {
          if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);

            this._setTriggerValue(event.source.value);

            this._onChange(event.source.value);

            this._element.nativeElement.focus();

            this.autocomplete._emitSelectEvent(event.source);
          }

          this.closePanel();
        }
        /**
         * Clear any previous selected option and emit a selection change event for this option
         * @private
         * @param {?} skip
         * @return {?}
         */

      }, {
        key: "_clearPreviousSelectedOption",
        value: function _clearPreviousSelectedOption(skip) {
          this.autocomplete.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            if (option != skip && option.selected) {
              option.deselect();
            }
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this8 = this;

          if (!this.autocomplete) {
            throw getMatAutocompleteMissingPanelError();
          } // We want to resolve this once, as late as possible so that we can be
          // sure that the element has been moved into its final place in the DOM.


          if (this._isInsideShadowRoot == null) {
            this._isInsideShadowRoot = !!Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["_getShadowRoot"])(this._element.nativeElement);
          }
          /** @type {?} */


          var overlayRef = this._overlayRef;

          if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.

            overlayRef.keydownEvents().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
              // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] && event.altKey) {
                _this8._resetActiveItem();

                _this8._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                // reach the input itself and cause the overlay to be reopened.


                event.stopPropagation();
                event.preventDefault();
              }
            });

            if (this._viewportRuler) {
              this._viewportSubscription = this._viewportRuler.change().subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this8.panelOpen && overlayRef) {
                  overlayRef.updateSize({
                    width: _this8._getPanelWidth()
                  });
                }
              });
            }
          } else {
            // Update the trigger, panel width and direction, in case anything has changed.
            this._positionStrategy.setOrigin(this._getConnectedElement());

            overlayRef.updateSize({
              width: this._getPanelWidth()
            });
          }

          if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
          }
          /** @type {?} */


          var wasOpen = this.panelOpen;

          this.autocomplete._setVisibility();

          this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
          // autocomplete won't be shown if there are no options.

          if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

          this._setStrategyPositions(strategy);

          this._positionStrategy = strategy;
          return strategy;
        }
        /**
         * Sets the positions on a position strategy based on the directive's input state.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_setStrategyPositions",
        value: function _setStrategyPositions(positionStrategy) {
          // Note that we provide horizontal fallback positions, even though by default the dropdown
          // width matches the input, because consumers can override the width. See #18854.

          /** @type {?} */
          var belowPositions = [{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }]; // The overlay edge connected to the trigger should have squared corners, while
          // the opposite end has rounded corners. We apply a CSS class to swap the
          // border-radius based on the overlay position.

          /** @type {?} */

          var panelClass = 'mat-autocomplete-panel-above';
          /** @type {?} */

          var abovePositions = [{
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
            panelClass: panelClass
          }, {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
            panelClass: panelClass
          }];
          /** @type {?} */

          var positions;

          if (this.position === 'above') {
            positions = abovePositions;
          } else if (this.position === 'below') {
            positions = belowPositions;
          } else {
            positions = [].concat(belowPositions, abovePositions);
          }

          positionStrategy.withPositions(positions);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getConnectedElement",
        value: function _getConnectedElement() {
          if (this.connectedTo) {
            return this.connectedTo.elementRef;
          }

          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getPanelWidth",
        value: function _getPanelWidth() {
          return this.autocomplete.panelWidth || this._getHostWidth();
        }
        /**
         * Returns the width of the input element, so the panel width can match it.
         * @private
         * @return {?}
         */

      }, {
        key: "_getHostWidth",
        value: function _getHostWidth() {
          return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
        }
        /**
         * Resets the active item to -1 so arrow events will activate the
         * correct options, or to 0 if the consumer opted into it.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetActiveItem",
        value: function _resetActiveItem() {
          this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
        }
        /**
         * Determines whether the panel can be opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_canOpen",
        value: function _canOpen() {
          /** @type {?} */
          var element = this._element.nativeElement;
          return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          var _a;

          return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
        }
      }, {
        key: "autocompleteDisabled",
        get: function get() {
          return this._autocompleteDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "panelOpen",
        get: function get() {
          return this._overlayAttached && this.autocomplete.showPanel;
        }
      }, {
        key: "panelClosingActions",
        get: function get() {
          var _this9 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this9._overlayAttached;
          })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this9._overlayAttached;
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])()).pipe( // Normalize the output so we return a consistent type.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
          }));
        }
        /**
         * The currently active option, coerced to MatOption type.
         * @return {?}
         */

      }, {
        key: "activeOption",
        get: function get() {
          if (this.autocomplete && this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
          }

          return null;
        }
      }]);

      return MatAutocompleteTrigger;
    }();

    MatAutocompleteTrigger.ɵfac = function MatAutocompleteTrigger_Factory(t) {
      return new (t || MatAutocompleteTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]));
    };

    MatAutocompleteTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatAutocompleteTrigger,
      selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
      hostAttrs: [1, "mat-autocomplete-trigger"],
      hostVars: 7,
      hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
            return ctx._handleFocus();
          })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
            return ctx._onTouched();
          })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
            return ctx._handleInput($event);
          })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
        }
      },
      inputs: {
        position: ["matAutocompletePosition", "position"],
        autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
        autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"],
        autocomplete: ["matAutocomplete", "autocomplete"],
        connectedTo: ["matAutocompleteConnectedTo", "connectedTo"]
      },
      exportAs: ["matAutocompleteTrigger"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatAutocompleteTrigger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
      }];
    };

    MatAutocompleteTrigger.propDecorators = {
      autocomplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocomplete']
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompletePosition']
      }],
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteConnectedTo']
      }],
      autocompleteAttribute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['autocomplete']
      }],
      autocompleteDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteDisabled']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: "input[matAutocomplete], textarea[matAutocomplete]",
          host: {
            'class': 'mat-autocomplete-trigger',
            '[attr.autocomplete]': 'autocompleteAttribute',
            '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
            '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
            '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
            '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
            '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
            '[attr.aria-haspopup]': '!autocompleteDisabled',
            // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
            // a little earlier. This avoids issues where IE delays the focusing of the input.
            '(focusin)': '_handleFocus()',
            '(blur)': '_onTouched()',
            '(input)': '_handleInput($event)',
            '(keydown)': '_handleKeydown($event)'
          },
          exportAs: 'matAutocompleteTrigger',
          providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
        }];
      }, {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompletePosition']
        }],
        autocompleteAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['autocomplete']
        }],
        autocompleteDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteDisabled']
        }],
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocomplete']
        }],
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteConnectedTo']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatAutocompleteModule = function MatAutocompleteModule() {
      _classCallCheck(this, MatAutocompleteModule);
    };

    MatAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatAutocompleteModule
    });
    MatAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MatAutocompleteModule_Factory(t) {
        return new (t || MatAutocompleteModule)();
      },
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatAutocompleteModule, {
        declarations: function declarations() {
          return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
          exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
          providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=autocomplete.js.map

    /***/

  },

  /***/
  "./src/app/public/journal/edit-group/edit-group.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/public/journal/edit-group/edit-group.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PublicJournalEditGroupPageComponent */

  /***/
  function srcAppPublicJournalEditGroupEditGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicJournalEditGroupPageComponent", function () {
      return PublicJournalEditGroupPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/data */
    "./src/app/shared/data/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");

    var _c0 = ["addLearnerInput"];

    var _c1 = function _c1(a1, a3) {
      return ["/journal/groups", a1, "subjects", a3];
    };

    function PublicJournalEditGroupPageComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicJournalEditGroupPageComponent_div_13_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var subject_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          $event.stopPropagation();
          return ctx_r4.deleteSubject(subject_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx_r0.group.id, subject_r3.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r3.name || "\xA0");
      }
    }

    function PublicJournalEditGroupPageComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicJournalEditGroupPageComponent_div_23_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var learnerId_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          $event.stopPropagation();
          return ctx_r7.deleteLearner(learnerId_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var learnerId_r6 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getLearnerById(learnerId_r6).name || "\xA0", " ");
      }
    }

    function PublicJournalEditGroupPageComponent_div_24_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var learnerOption_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", learnerOption_r12.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", learnerOption_r12.name, " ");
      }
    }

    function PublicJournalEditGroupPageComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function PublicJournalEditGroupPageComponent_div_24_Template_mat_autocomplete_optionSelected_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onLearnerSelected($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PublicJournalEditGroupPageComponent_div_24_mat_option_7_Template, 2, 2, "mat-option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.addLearnerControl)("matAutocomplete", _r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx_r2.learnerOptions));
      }
    }

    var PublicJournalEditGroupPageComponent = /*#__PURE__*/function () {
      function PublicJournalEditGroupPageComponent(activatedRoute, dataService, router) {
        _classCallCheck(this, PublicJournalEditGroupPageComponent);

        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.router = router;
        this.addLearnerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
      }

      _createClass(PublicJournalEditGroupPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');
          this.group = this.dataService.groups.find(function (group) {
            return group.id === Number(id);
          });
          this.subjects = this.group.subjects;
          this.learners = this.dataService.learners;
          this.learnerOptions = this.addLearnerControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (query) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isString"])(query);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (query) {
            return _this10.selectableLearners.filter(function (learner) {
              return learner.name.toLowerCase().includes(query.toLowerCase());
            });
          }));
        }
      }, {
        key: "createSubject",
        value: function createSubject() {
          var subject = new _shared_data__WEBPACK_IMPORTED_MODULE_1__["Subject"]({
            id: this.subjects.length > 0 ? Object(lodash__WEBPACK_IMPORTED_MODULE_4__["last"])(this.subjects).id + 1 : 1,
            lessons: []
          });
          this.subjects.push(subject);
          this.router.navigate(['/journal/groups', this.group.id, 'subjects', subject.id]);
        }
      }, {
        key: "onLearnerSelected",
        value: function onLearnerSelected(event) {
          this.group.learnersIds.push(event.option.value);
          this.addLearnerControl.setValue('');
          this.addLearnerInput.nativeElement.blur();
        }
      }, {
        key: "getLearnerById",
        value: function getLearnerById(id) {
          return this.learners.find(function (learner) {
            return learner.id === id;
          });
        }
      }, {
        key: "deleteLearner",
        value: function deleteLearner(learnerId) {
          this.group.learnersIds = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["without"])(this.group.learnersIds, learnerId);
        }
      }, {
        key: "deleteSubject",
        value: function deleteSubject(subject) {
          var subjectIndex = this.subjects.findIndex(function (item) {
            return item.id === subject.id;
          });
          this.subjects.splice(subjectIndex, 1);
        }
      }, {
        key: "selectableLearners",
        get: function get() {
          var _this11 = this;

          return this.learners.filter(function (learner) {
            return !_this11.group.learnersIds.includes(learner.id);
          });
        }
      }]);

      return PublicJournalEditGroupPageComponent;
    }();

    PublicJournalEditGroupPageComponent.ɵfac = function PublicJournalEditGroupPageComponent_Factory(t) {
      return new (t || PublicJournalEditGroupPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    PublicJournalEditGroupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicJournalEditGroupPageComponent,
      selectors: [["public-journal-edit-group-page"]],
      viewQuery: function PublicJournalEditGroupPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addLearnerInput = _t.first);
        }
      },
      decls: 25,
      vars: 5,
      consts: [[1, "edit-group-page"], ["color", "primary"], [1, "form"], [1, "form-field"], ["matInput", "", "name", "name", 3, "ngModel", "ngModelChange"], [1, "table", "subjects-table"], [1, "table-row", "table-head"], [1, "table-cell", "table-content"], ["matRipple", "", "class", "table-row", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "table-row", "table-footer", 3, "click"], [1, "table", "learners-table"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["class", "table-row table-footer", 4, "ngIf"], ["matRipple", "", 1, "table-row", 3, "routerLink"], [1, "table-cell", "table-content", "subjects-table-name"], [1, "table-cell", "table-content", "subjects-table-actions"], ["mat-flat-button", "", "color", "warn", 3, "click"], [1, "table-row"], [1, "table-cell", "table-content", "learners-table-actions"], [1, "table-row", "table-footer"], [2, "width", "100%"], ["type", "text", "placeholder", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0435\u0433\u043E\u0441\u044F", "matInput", "", 3, "formControl", "matAutocomplete"], ["addLearnerInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function PublicJournalEditGroupPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicJournalEditGroupPageComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.group.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PublicJournalEditGroupPageComponent_div_13_Template, 6, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicJournalEditGroupPageComponent_Template_div_click_14_listener() {
            return ctx.createSubject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u0435\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PublicJournalEditGroupPageComponent_div_23_Template, 6, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PublicJournalEditGroupPageComponent_div_24_Template, 9, 5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.group.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.group.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.group.learnersIds);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectableLearners.length > 0);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%]     .edit-group-page .form {\n  padding: 24px;\n  box-sizing: border-box;\n  width: 100%;\n}\n[_nghost-%COMP%]     .edit-group-page .form-field {\n  width: 100%;\n}\n[_nghost-%COMP%]     .edit-group-page .learners-table-actions, [_nghost-%COMP%]     .edit-group-page .subjects-table-actions {\n  max-width: 300px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2pvdXJuYWwvZWRpdC1ncm91cC9DOlxcR2l0XFxvbndkXFxqb3VybmFsL3NyY1xcYXBwXFxwdWJsaWNcXGpvdXJuYWxcXGVkaXQtZ3JvdXBcXGVkaXQtZ3JvdXAuc2NzcyIsInNyYy9hcHAvcHVibGljL2pvdXJuYWwvZWRpdC1ncm91cC9lZGl0LWdyb3VwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7QUNBTjtBREtJO0VBQVcsZ0JBQUE7RUFBa0IsZUFBQTtBQ0RqQyIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9qb3VybmFsL2VkaXQtZ3JvdXAvZWRpdC1ncm91cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5lZGl0LWdyb3VwLXBhZ2Uge1xuICAuZm9ybSB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJi1maWVsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAubGVhcm5lcnMtdGFibGUsIC5zdWJqZWN0cy10YWJsZSB7XG4gICAgJi1hY3Rpb25zIHttYXgtd2lkdGg6IDMwMHB4OyB0ZXh0LWFsaWduOiBlbmQ7fVxuICB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLmVkaXQtZ3JvdXAtcGFnZSAuZm9ybSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5lZGl0LWdyb3VwLXBhZ2UgLmZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZWRpdC1ncm91cC1wYWdlIC5sZWFybmVycy10YWJsZS1hY3Rpb25zLCA6aG9zdCA6Om5nLWRlZXAgLmVkaXQtZ3JvdXAtcGFnZSAuc3ViamVjdHMtdGFibGUtYWN0aW9ucyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicJournalEditGroupPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'public-journal-edit-group-page',
          templateUrl: 'edit-group.html',
          styleUrls: ['edit-group.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _shared_data__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, {
        addLearnerInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['addLearnerInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/public/journal/edit-group/edit-group.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/public/journal/edit-group/edit-group.module.ts ***!
    \****************************************************************/

  /*! exports provided: PublicJournalEditGroupPageModule */

  /***/
  function srcAppPublicJournalEditGroupEditGroupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicJournalEditGroupPageModule", function () {
      return PublicJournalEditGroupPageModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _edit_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./edit-group.component */
    "./src/app/public/journal/edit-group/edit-group.component.ts");
    /* harmony import */


    var _edit_group_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./edit-group.routing */
    "./src/app/public/journal/edit-group/edit-group.routing.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PublicJournalEditGroupPageModule = function PublicJournalEditGroupPageModule() {
      _classCallCheck(this, PublicJournalEditGroupPageModule);
    };

    PublicJournalEditGroupPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: PublicJournalEditGroupPageModule
    });
    PublicJournalEditGroupPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      factory: function PublicJournalEditGroupPageModule_Factory(t) {
        return new (t || PublicJournalEditGroupPageModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], _edit_group_routing__WEBPACK_IMPORTED_MODULE_12__["PublicJournalEditGroupPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PublicJournalEditGroupPageModule, {
        declarations: [_edit_group_component__WEBPACK_IMPORTED_MODULE_11__["PublicJournalEditGroupPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], _edit_group_routing__WEBPACK_IMPORTED_MODULE_12__["PublicJournalEditGroupPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](PublicJournalEditGroupPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
          declarations: [_edit_group_component__WEBPACK_IMPORTED_MODULE_11__["PublicJournalEditGroupPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], _edit_group_routing__WEBPACK_IMPORTED_MODULE_12__["PublicJournalEditGroupPageRoutingModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/public/journal/edit-group/edit-group.routing.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/public/journal/edit-group/edit-group.routing.ts ***!
    \*****************************************************************/

  /*! exports provided: PublicJournalEditGroupPageRoutingModule */

  /***/
  function srcAppPublicJournalEditGroupEditGroupRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicJournalEditGroupPageRoutingModule", function () {
      return PublicJournalEditGroupPageRoutingModule;
    });
    /* harmony import */


    var _edit_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./edit-group.component */
    "./src/app/public/journal/edit-group/edit-group.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _edit_group_component__WEBPACK_IMPORTED_MODULE_0__["PublicJournalEditGroupPageComponent"]
    }];

    var PublicJournalEditGroupPageRoutingModule = function PublicJournalEditGroupPageRoutingModule() {
      _classCallCheck(this, PublicJournalEditGroupPageRoutingModule);
    };

    PublicJournalEditGroupPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PublicJournalEditGroupPageRoutingModule
    });
    PublicJournalEditGroupPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PublicJournalEditGroupPageRoutingModule_Factory(t) {
        return new (t || PublicJournalEditGroupPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicJournalEditGroupPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PublicJournalEditGroupPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=edit-group-edit-group-module-es5.js.map