(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victoriaeremeeva/Documents/accordion-recruitment/src/main.ts */"zUnb");


/***/ }),

/***/ "3FfB":
/*!**************************************************!*\
  !*** ./src/app/accordion/accordion.component.ts ***!
  \**************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _accordion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.service */ "WhpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["balance"];
const _c1 = ["accordionEl"];
const _c2 = ["additionalInfo"];
const _c3 = ["infoBtn"];
function AccordionComponent_p_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("w tym limit odnawialny: ", ctx_r4.accordion.renewable_limit.overall.toLocaleString("fr"), "");
} }
function AccordionComponent_button_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Przelew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AccordionComponent {
    constructor(accordionService) {
        this.accordionService = accordionService;
    }
    ngOnInit() {
        this.getAccordionData();
    }
    getAccordionData() {
        this.accordion = this.accordionService.getAccountById(this.id);
    }
    showDetails() {
        this.balanceContainer.nativeElement.classList.toggle('hidden');
        this.accordionEl.nativeElement.classList.toggle('accordion--expanded');
        this.additionalInfo.nativeElement.classList.toggle('hidden');
        this.infoBtn.nativeElement.classList.toggle('hidden');
    }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_service__WEBPACK_IMPORTED_MODULE_1__["AccordionService"])); };
AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionComponent, selectors: [["app-accordion"]], viewQuery: function AccordionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.balanceContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordionEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.additionalInfo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.infoBtn = _t.first);
    } }, inputs: { id: "id" }, decls: 55, vars: 25, consts: [[1, "section"], [1, "visually-hidden"], [1, "accordion"], ["accordionEl", ""], [1, "accordion__info-btn", "hidden"], ["infoBtn", ""], [1, "accordion__bank"], [1, "accordion__wrapper"], [1, "accordion__info"], [1, "accordion__header"], ["type", "button", 1, "accordion__header-btn", 3, "click"], [1, "accordion__account"], [1, "accordion__balance", "balance"], ["balance", ""], [1, "balance__header"], [1, "balance__currency"], [1, "accordion__additional-info", "additional-info", "hidden"], ["additionalInfo", ""], [1, "additional-info__balance-wrapper"], [1, "additional-info__balance"], [1, "additional-info__balance-item"], [1, "additional-info__balance-item-title"], [1, "additional-info__available-title"], ["class", "additional-info__available-title", 4, "ngIf"], [1, "additional-info__available-balance"], [1, "additional-info__btn-wrapper"], ["type", "button", 1, "additional-info__btn"], ["class", "additional-info__btn additional-info__btn--transfer", "type", "button", 4, "ngIf"], ["type", "button", 1, "additional-info__btn", "additional-info__btn--transfer"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_Template_button_click_15_listener() { return ctx.showDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dost\u0119pne \u015Brodki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Saldo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Blokady");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Dost\u0119pne \u015Brodki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AccordionComponent_p_44_Template, 2, 1, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Szczeg\u00F3\u0142y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Historia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AccordionComponent_button_54_Template, 2, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accordion.bank);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.accordion.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accordion.account_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("balance__available ", ctx.accordion.available_amount < 0 ? "balance__available--negative" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accordion.available_amount.toLocaleString("fr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accordion.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.accordion.balance < 0 ? "balance__available--negative" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.accordion.balance.toLocaleString("fr"), " ", ctx.accordion.currency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.accordion.blocked_amount < 0 ? "balance__available--negative" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.accordion.blocked_amount.toLocaleString("fr"), " ", ctx.accordion.currency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accordion.renewable_limit.overall > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.accordion.available_amount < 0 ? "balance__available--negative" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accordion.available_amount.toLocaleString("fr"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.accordion.currency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accordion.canTransfer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@keyframes expandAccordion {\n  0% {\n    margin-top: -7rem;\n    transform: scaleY(0.3);\n  }\n  100% {\n    margin-top: 0;\n    transform: scaleY(1);\n  }\n}\n.accordion[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 1.15rem;\n}\n.accordion--expanded[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 6px #cecece, 0 2px 12px #d8d8d8, 0 3px 18px #dfdfdf, 0 4px 25px #e7e7e7;\n  border-radius: 3px;\n  animation-name: expandAccordion;\n  animation-duration: 370ms;\n  animation-timing-function: ease-in-out;\n}\n.accordion__wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70% 30%;\n}\n.accordion--expanded[_ngcontent-%COMP%]   .accordion__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.accordion__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.accordion__info-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #F2F2F2;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n}\n.accordion__info-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e5e5;\n}\n.accordion__info-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  background-color: #003e9f;\n  border-radius: 50%;\n}\n.accordion__info-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 3px;\n}\n.balance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.balance__header[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-weight: 400;\n  font-size: 1.05rem;\n  color: #7e8388;\n}\n.balance__available[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  letter-spacing: 0.03rem;\n}\n.balance__currency[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.balance__available--negative[_ngcontent-%COMP%] {\n  color: red !important;\n}\n.accordion__header[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 0.9rem;\n}\n.accordion--expanded[_ngcontent-%COMP%]   .accordion__header[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.accordion__header-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  color: #4d5053;\n  font-size: 1.45rem;\n  text-align: left;\n  background-color: transparent;\n  border: none;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  transition: all 300ms ease-in-out;\n}\n.accordion__header-btn[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n.accordion__bank[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 0.8rem;\n  max-width: 85%;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  align-self: flex-start;\n  padding: 0.3rem 0.4rem;\n  border-radius: 2px;\n  background-color: #e5e5e5;\n  font-size: 1rem;\n}\n.accordion__account[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  margin: 0;\n  color: #797e83;\n}\n.additional-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.additional-info__balance-wrapper[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: grid;\n  justify-content: flex-end;\n  grid-auto-flow: column;\n  margin-bottom: 1.5rem;\n}\n.additional-info__balance[_ngcontent-%COMP%] {\n  min-width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.additional-info__balance[_ngcontent-%COMP%]:first-child {\n  padding-right: 2rem;\n  border-right: 0.17rem solid #cecece;\n}\n.additional-info__balance[_ngcontent-%COMP%]:last-child {\n  padding-left: 2rem;\n  align-items: flex-end;\n}\n.additional-info__balance-item[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n}\n.additional-info__balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  color: #797e83;\n}\n.additional-info__balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n.additional-info__available-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.additional-info__balance-item[_ngcontent-%COMP%]   .additional-info__balance-item-title[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n}\n.additional-info__balance[_ngcontent-%COMP%]   .additional-info__available-balance[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #4d5053;\n}\n.additional-info__balance[_ngcontent-%COMP%]   .additional-info__available-balance[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #282a2b;\n}\n.additional-info__btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.additional-info__btn[_ngcontent-%COMP%] {\n  width: 32.5%;\n  padding: 0.9rem 0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.15rem;\n  color: #4d5053;\n  border-radius: 7px;\n  box-sizing: border-box;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0.17rem solid #cecece;\n  transition: all 250ms ease-in-out;\n}\n.additional-info__btn[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: calc(100% - (32.5% * 3));\n}\n.additional-info__btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 5px #e0e0e0, 1px 1px 8px #ececec;\n  color: #000000;\n}\n.additional-info__btn--transfer[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #002E76;\n  border-radius: 7px 0 7px 0;\n  border: none;\n}\n.additional-info__btn--transfer[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background-color: #003890;\n  box-shadow: 1px 1px 5px #e0e0e0;\n}\n@media (max-width: 992px) {\n  .accordion__header-btn[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n\n  .accordion__bank[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n    font-size: 0.9rem;\n  }\n\n  .accordion__account[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .additional-info__balance[_ngcontent-%COMP%]   .additional-info__available-balance[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .additional-info__balance[_ngcontent-%COMP%]   .additional-info__available-balance[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n@media (max-width: 768px) {\n  .accordion__header-btn[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n\n  .accordion__account[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n\n  .accordion__bank[_ngcontent-%COMP%] {\n    margin-bottom: 0.7rem;\n    font-size: 0.85rem;\n  }\n\n  .balance__header[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .additional-info__balance[_ngcontent-%COMP%]   .additional-info__available-balance[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .additional-info__balance[_ngcontent-%COMP%]   .additional-info__available-balance[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n\n  .additional-info__btn[_ngcontent-%COMP%] {\n    width: 32%;\n    padding: 0.8rem 0;\n  }\n  .additional-info__btn[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: calc(100% - (32% * 3));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxzQkFBQTtFQURGO0VBSUE7SUFDRSxhQUFBO0lBQ0Esb0JBQUE7RUFGRjtBQUNGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBSkY7QUFPQTtFQUNFLHlGQUFBO0VBSUEsa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUFQRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFQRjtBQVVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDM0RzQjtFRDREdEIsZUFBQTtFQUNBLGlDQUFBO0FBUEY7QUFTRTtFQUNFLHlCQUFBO0FBUEo7QUFVRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0U7RUFDRSxrQkFBQTtBQVRKO0FBYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBVkY7QUFhQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFWRjtBQWFBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFWRjtBQWFBO0VBQ0UsaUJBQUE7QUFWRjtBQWFBO0VBQ0UscUJBQUE7QUFWRjtBQWFBO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0FBVkY7QUFhQTtFQUNFLFVBQUE7QUFWRjtBQWFBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQzlHbUI7RUQrR25CLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBVkY7QUFZRTtFQUNFLGNBQUE7QUFWSjtBQWNBO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkMzSTBCO0VENEkxQixlQUFBO0FBWEY7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFYRjtBQWNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBWEY7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVhGO0FBY0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFYRjtBQWNBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtBQVhGO0FBY0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBWEY7QUFjQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFYRjtBQWNBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVhGO0FBYUU7RUFDRSxxQkFBQTtBQVhKO0FBZUE7RUFDRSxpQkFBQTtBQVpGO0FBZUE7RUFDRSxvQkFBQTtBQVpGO0FBZUE7RUFDRSxpQkFBQTtFQUNBLGNDeE1tQjtBRDRMckI7QUFjRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBWko7QUFnQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFiRjtBQWdCQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQzFObUI7RUQyTm5CLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0FBYkY7QUFlRTtFQUNFLHFDQUFBO0FBYko7QUFnQkU7RUFDRSxvREFBQTtFQUNBLGNBQUE7QUFkSjtBQWtCQTtFQUNFLGNBQUE7RUFDQSx5QkN0UEs7RUR1UEwsMEJBQUE7RUFDQSxZQUFBO0FBZkY7QUFpQkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQWZKO0FBbUJBO0VBQ0U7SUFDRSxrQkFBQTtFQWhCRjs7RUFtQkE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VBaEJGOztFQW1CQTtJQUNFLGVBQUE7RUFoQkY7O0VBbUJBO0lBQ0UsaUJBQUE7RUFoQkY7RUFrQkU7SUFDRSxpQkFBQTtFQWhCSjtBQUNGO0FBb0JBO0VBQ0U7SUFDRSxrQkFBQTtFQWxCRjs7RUFxQkE7SUFDRSxrQkFBQTtFQWxCRjs7RUFxQkE7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0VBbEJGOztFQXFCQTtJQUNFLGVBQUE7RUFsQkY7O0VBcUJBO0lBQ0UsaUJBQUE7RUFsQkY7RUFvQkU7SUFDRSxpQkFBQTtFQWxCSjs7RUFzQkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFuQkY7RUFxQkU7SUFDRSxtQ0FBQTtFQW5CSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIjtcblxuQGtleWZyYW1lcyBleHBhbmRBY2NvcmRpb24ge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogLTdyZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gIH1cbn1cblxuXG4uYWNjb3JkaW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxLjVyZW0gMS4xNXJlbTtcbn1cblxuLmFjY29yZGlvbi0tZXhwYW5kZWQge1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggZGFya2VuKCRhY2NvcmRpb24tYm9yZGVyLWNvbG9yLCAxMCUpLFxuICAgICAgICAgICAgICAwIDJweCAxMnB4IGRhcmtlbigkYWNjb3JkaW9uLWJvcmRlci1jb2xvciwgNiUpLFxuICAgICAgICAgICAgICAwIDNweCAxOHB4IGRhcmtlbigkYWNjb3JkaW9uLWJvcmRlci1jb2xvciwgMyUpLFxuICAgICAgICAgICAgICAwIDRweCAyNXB4ICRhY2NvcmRpb24tYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRBY2NvcmRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzcwbXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4uYWNjb3JkaW9uX193cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xufVxuXG4uYWNjb3JkaW9uLS1leHBhbmRlZCAuYWNjb3JkaW9uX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFjY29yZGlvbl9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hY2NvcmRpb25fX2luZm8tYnRuIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuNXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJhY2tncm91bmQtY29sb3I7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYm9keS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gIH1cblxuICAmIHNwYW4ge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgOCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gICYgc3Bhbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH1cbn1cblxuLmJhbGFuY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5iYWxhbmNlX19oZWFkZXIge1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBjb2xvcjogbGlnaHRlbigkZGVmYXVsdC1mb250LWNvbG9yLCAyMCUpO1xufVxuXG4uYmFsYW5jZV9fYXZhaWxhYmxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG59XG5cbi5iYWxhbmNlX19jdXJyZW5jeSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYmFsYW5jZV9fYXZhaWxhYmxlLS1uZWdhdGl2ZSB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmFjY29yZGlvbl9faGVhZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XG59XG5cbi5hY2NvcmRpb24tLWV4cGFuZGVkIC5hY2NvcmRpb25fX2hlYWRlciB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5hY2NvcmRpb25fX2hlYWRlci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICRkZWZhdWx0LWZvbnQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbn1cblxuLmFjY29yZGlvbl9fYmFuayB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICBtYXgtd2lkdGg6IDg1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMC4zcmVtIDAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjb3JkaW9uLWJhbmstYmFja2dyb3VuZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uYWNjb3JkaW9uX19hY2NvdW50IHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBsaWdodGVuKCRkZWZhdWx0LWZvbnQtY29sb3IsIDE4JSk7XG59XG5cbi5hZGRpdGlvbmFsLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWRkaXRpb25hbC1pbmZvX19iYWxhbmNlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmFkZGl0aW9uYWwtaW5mb19fYmFsYW5jZSB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uYWRkaXRpb25hbC1pbmZvX19iYWxhbmNlOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAwLjE3cmVtIHNvbGlkIGRhcmtlbigkYWNjb3JkaW9uLWJvcmRlci1jb2xvciwgMTAlKTtcbn1cblxuLmFkZGl0aW9uYWwtaW5mb19fYmFsYW5jZTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5hZGRpdGlvbmFsLWluZm9fX2JhbGFuY2UtaXRlbSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRkaXRpb25hbC1pbmZvX19iYWxhbmNlIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgY29sb3I6IGxpZ2h0ZW4oJGRlZmF1bHQtZm9udC1jb2xvciwgMTglKTtcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxufVxuXG4uYWRkaXRpb25hbC1pbmZvX19hdmFpbGFibGUtdGl0bGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFkZGl0aW9uYWwtaW5mb19fYmFsYW5jZS1pdGVtIC5hZGRpdGlvbmFsLWluZm9fX2JhbGFuY2UtaXRlbS10aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMC43cmVtO1xufVxuXG4uYWRkaXRpb25hbC1pbmZvX19iYWxhbmNlIC5hZGRpdGlvbmFsLWluZm9fX2F2YWlsYWJsZS1iYWxhbmNlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAkZGVmYXVsdC1mb250LWNvbG9yO1xuXG4gICYgc3BhbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiBkYXJrZW4oJGRlZmF1bHQtZm9udC1jb2xvciwgMTUlKTtcbiAgfVxufVxuXG4uYWRkaXRpb25hbC1pbmZvX19idG4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcbn1cblxuLmFkZGl0aW9uYWwtaW5mb19fYnRuIHtcbiAgd2lkdGg6IDMyLjUlO1xuICBwYWRkaW5nOiAwLjlyZW0gMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGNvbG9yOiAkZGVmYXVsdC1mb250LWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMC4xN3JlbSBzb2xpZCBkYXJrZW4oJGFjY29yZGlvbi1ib3JkZXItY29sb3IsIDEwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gKDMyLjUlICogMykpO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZGFya2VuKCRhY2NvcmRpb24tYmFja2dyb3VuZC1jb2xvciwgMTAlKSwgMXB4IDFweCA4cHggZGFya2VuKCRhY2NvcmRpb24tYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG59XG5cbi5hZGRpdGlvbmFsLWluZm9fX2J0bi0tdHJhbnNmZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAwIDdweCAwO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGRhcmtlbigkYWNjb3JkaW9uLWJhY2tncm91bmQtY29sb3IsIDEwJSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hY2NvcmRpb25fX2hlYWRlci1idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgfVxuXG4gIC5hY2NvcmRpb25fX2Jhbmsge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cblxuICAuYWNjb3JkaW9uX19hY2NvdW50IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuYWRkaXRpb25hbC1pbmZvX19iYWxhbmNlIC5hZGRpdGlvbmFsLWluZm9fX2F2YWlsYWJsZS1iYWxhbmNlIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcblxuICAgICYgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hY2NvcmRpb25fX2hlYWRlci1idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuXG4gIC5hY2NvcmRpb25fX2FjY291bnQge1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxuXG4gIC5hY2NvcmRpb25fX2Jhbmsge1xuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cblxuICAuYmFsYW5jZV9faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuYWRkaXRpb25hbC1pbmZvX19iYWxhbmNlIC5hZGRpdGlvbmFsLWluZm9fX2F2YWlsYWJsZS1iYWxhbmNlIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgICYgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB9XG4gIH1cblxuICAuYWRkaXRpb25hbC1pbmZvX19idG4ge1xuICAgIHdpZHRoOiAzMiU7XG4gICAgcGFkZGluZzogMC44cmVtIDA7XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLSAoMzIlICogMykpO1xuICAgIH1cbiAgfVxufVxuIiwiJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiRibHVlOiAjMDAyRTc2O1xuJGFjY29yZGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICNlN2U3ZTc7XG4kYWNjb3JkaW9uLWJhbmstYmFja2dyb3VuZDogI2U1ZTVlNTtcblxuJGFjY29yZGlvbi1saXN0LXNoYWRvdzogMCAwIDFweCBkYXJrZW4oJGFjY29yZGlvbi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4kYWNjb3JkaW9uLXNoYWRvdzogMCAwIDNweCBkYXJrZW4oJGFjY29yZGlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAxNSUpO1xuXG4kZGVmYXVsdC1mb250LWNvbG9yOiAjNGQ1MDUzO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accordion',
                templateUrl: './accordion.component.html',
                styleUrls: ['./accordion.component.scss']
            }]
    }], function () { return [{ type: _accordion_service__WEBPACK_IMPORTED_MODULE_1__["AccordionService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['id']
        }], balanceContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['balance']
        }], accordionEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['accordionEl']
        }], additionalInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['additionalInfo']
        }], infoBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['infoBtn']
        }] }); })();


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
const environment = {
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

/***/ "Q0Um":
/*!*******************************!*\
  !*** ./src/app/accounts.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0\",\"title\":\"Konto na Zero\",\"account_number\":\"64 9387 1026 8543 1703 5827 9630\",\"balance\":\"-12.20\",\"currency\":\"PLN\",\"blocked_amount\":\"12262.59\",\"available_amount\":\"1035.27\",\"bank\":\"PKO Bank Polski\",\"renewable_limit\":{\"overall\":\"\",\"used\":\"\"},\"canTransfer\":false},{\"id\":\"1\",\"title\":\"WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\",\"account_number\":\"64 9387 1026 8543 1703 5827 9631\",\"balance\":\"999.99\",\"currency\":\"PLN\",\"blocked_amount\":\"-999999999.99\",\"available_amount\":\"999999999.99\",\"bank\":\"WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\",\"renewable_limit\":{\"overall\":\"999999999.99\",\"used\":\"0\"},\"canTransfer\":true},{\"id\":\"2\",\"title\":\"Konto na Zero\",\"account_number\":\"64 9387 1026 8543 1703 5827 9632\",\"balance\":\"12.20\",\"currency\":\"PLN\",\"blocked_amount\":\"12262.59\",\"available_amount\":\"-999999999.99\",\"bank\":\"PKO Bank Polski\",\"renewable_limit\":{\"overall\":\"\",\"used\":\"\"},\"canTransfer\":false}]");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'accordion-recruitment';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WhpX":
/*!************************************************!*\
  !*** ./src/app/accordion/accordion.service.ts ***!
  \************************************************/
/*! exports provided: AccordionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionService", function() { return AccordionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const data = __webpack_require__(/*! ../accounts.json */ "Q0Um");
class AccordionService {
    constructor() { }
    getData() {
        this.data = data;
    }
    getAccountsIdsList() {
        const accountsIds = [];
        for (const account of this.data) {
            accountsIds.push(account.id);
        }
        return accountsIds;
    }
    getAccountById(id) {
        for (const account of this.data) {
            if (account.id === id) {
                if (typeof account.available_amount === 'string') {
                    account.available_amount = parseFloat(account.available_amount);
                }
                if (typeof account.blocked_amount === 'string') {
                    account.blocked_amount = parseFloat(account.blocked_amount);
                }
                if (typeof account.balance === 'string') {
                    account.balance = parseFloat(account.balance);
                }
                if (typeof account.renewable_limit.overall === 'string') {
                    account.renewable_limit.overall = parseFloat(account.renewable_limit.overall);
                }
                return account;
            }
        }
    }
}
AccordionService.ɵfac = function AccordionService_Factory(t) { return new (t || AccordionService)(); };
AccordionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccordionService, factory: AccordionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion/accordion.component */ "3FfB");
/* harmony import */ var _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion-list/accordion-list.component */ "wS51");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["Approutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__["AccordionComponent"],
        _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_5__["AccordionListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__["AccordionComponent"],
                    _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_5__["AccordionListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["Approutes"]),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
/* harmony import */ var _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion-list/accordion-list.component */ "wS51");

const Approutes = [
    {
        path: '',
        component: _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_0__["AccordionListComponent"]
    },
];


/***/ }),

/***/ "wS51":
/*!************************************************************!*\
  !*** ./src/app/accordion-list/accordion-list.component.ts ***!
  \************************************************************/
/*! exports provided: AccordionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionListComponent", function() { return AccordionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _accordion_accordion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accordion/accordion.service */ "WhpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../accordion/accordion.component */ "3FfB");





function AccordionListComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-accordion", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const accordion_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", accordion_r1);
} }
class AccordionListComponent {
    constructor(accordionService) {
        this.accordionService = accordionService;
    }
    ngOnInit() {
        this.accordionService.getData();
        this.accordionList = this.accordionService.getAccountsIdsList();
    }
}
AccordionListComponent.ɵfac = function AccordionListComponent_Factory(t) { return new (t || AccordionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_accordion_service__WEBPACK_IMPORTED_MODULE_1__["AccordionService"])); };
AccordionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionListComponent, selectors: [["app-accordion-list"]], decls: 3, vars: 1, consts: [[1, "section", "accordions"], [1, "accordions__list"], ["class", "accordions__item", 4, "ngFor", "ngForOf"], [1, "accordions__item"], [3, "id"]], template: function AccordionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccordionListComponent_li_2_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accordionList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_3__["AccordionComponent"]], styles: [".accordions[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 3rem auto 0 auto;\n}\n\n.accordions__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  box-shadow: 0 0 1px #ececec;\n  border: 0.1rem solid #e7e7e7;\n  background-color: #F9F9F9;\n  border-radius: 0.25rem;\n}\n\n.accordions__item[_ngcontent-%COMP%] {\n  background-color: #F9F9F9;\n}\n\n.accordions__item[_ngcontent-%COMP%]:not(:last-of-type) {\n  border-bottom: 0.1em solid #e7e7e7;\n}\n\n@media (max-width: 992px) {\n  .accordions[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media (max-width: 768px) {\n  .accordions[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3JkaW9uLWxpc3QvYWNjb3JkaW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkNMc0I7RURNdEIsNEJBQUE7RUFDQSx5QkNYMkI7RURZM0Isc0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQ2hCMkI7QURlN0I7O0FBSUE7RUFDRSxrQ0FBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxVQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsVUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hY2NvcmRpb24tbGlzdC9hY2NvcmRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIjtcblxuLmFjY29yZGlvbnMge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDNyZW0gYXV0byAwIGF1dG87XG59XG5cbi5hY2NvcmRpb25zX19saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGJveC1zaGFkb3c6ICRhY2NvcmRpb24tbGlzdC1zaGFkb3c7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICRhY2NvcmRpb24tYm9yZGVyLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjb3JkaW9uLWJhY2tncm91bmQtY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5hY2NvcmRpb25zX19pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY29yZGlvbi1iYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uYWNjb3JkaW9uc19faXRlbTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCAkYWNjb3JkaW9uLWJvcmRlci1jb2xvcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hY2NvcmRpb25zIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWNjb3JkaW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuIiwiJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiRibHVlOiAjMDAyRTc2O1xuJGFjY29yZGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICNlN2U3ZTc7XG4kYWNjb3JkaW9uLWJhbmstYmFja2dyb3VuZDogI2U1ZTVlNTtcblxuJGFjY29yZGlvbi1saXN0LXNoYWRvdzogMCAwIDFweCBkYXJrZW4oJGFjY29yZGlvbi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4kYWNjb3JkaW9uLXNoYWRvdzogMCAwIDNweCBkYXJrZW4oJGFjY29yZGlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAxNSUpO1xuXG4kZGVmYXVsdC1mb250LWNvbG9yOiAjNGQ1MDUzO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accordion-list',
                templateUrl: './accordion-list.component.html',
                styleUrls: ['./accordion-list.component.scss']
            }]
    }], function () { return [{ type: _accordion_accordion_service__WEBPACK_IMPORTED_MODULE_1__["AccordionService"] }]; }, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map