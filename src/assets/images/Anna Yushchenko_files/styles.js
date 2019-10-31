(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsub {\n  bottom: -0.25em; }\nsup {\n  top: -0.5em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n* {\n  box-sizing: border-box; }\nhtml {\n  font-family: \"ObjectSans-Regular\", sans-serif;\n  height: 100%; }\nbody {\n  margin: 0;\n  height: auto;\n  background-color: #000;\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\na {\n  text-decoration: none; }\np,\nh2,\nh1 {\n  margin: 0; }\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\nbutton {\n  outline: none;\n  cursor: pointer; }\nmain {\n  position: relative; }\n.header__logo:hover .cursor {\n  transform: scale(0.8);\n  transition: all 0.2s ease-in-out;\n  cursor: pointer; }\n.wrapper {\n  max-width: 1920px;\n  margin: 0 auto;\n  height: 100%; }\n@media (max-width: 1535.98px) {\n    .wrapper {\n      max-width: 1440px; } }\n@media (max-width: 1439.98px) {\n    .wrapper {\n      max-width: 1366px; } }\n.container {\n  padding: 0 104px; }\n@media (max-width: 1365.98px) {\n    .container {\n      padding: 0 60px; } }\n@media (max-width: 767.98px) {\n    .container {\n      padding: 0 32px; } }\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.flex-end {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n.flex-column {\n  display: flex;\n  flex-direction: column; }\n.show {\n  opacity: 1; }\n.hide {\n  opacity: 0; }\n.fadeIn {\n  -webkit-animation: fadeIn 0.3s ease-in forwards;\n          animation: fadeIn 0.3s ease-in forwards; }\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeOut {\n  -webkit-animation: fadeOut 0.3s ease-in forwards;\n          animation: fadeOut 0.3s ease-in forwards; }\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n.marqueeAnimFirst {\n  display: inline-block;\n  transform: translate3d(0, 0, 0);\n  -webkit-animation: marqueeAnimFirst 15s linear infinite;\n          animation: marqueeAnimFirst 15s linear infinite; }\n@-webkit-keyframes marqueeAnimFirst {\n  from {\n    transform: translateX(80%); }\n  to {\n    transform: translateX(-120%); } }\n@keyframes marqueeAnimFirst {\n  from {\n    transform: translateX(80%); }\n  to {\n    transform: translateX(-120%); } }\n.marqueeAnimSecond {\n  display: inline-block;\n  transform: translate3d(0, 0, 0);\n  -webkit-animation: marqueeAnimSecond 15s linear infinite;\n          animation: marqueeAnimSecond 15s linear infinite;\n  -webkit-animation-delay: 7.5s;\n          animation-delay: 7.5s; }\n@-webkit-keyframes marqueeAnimSecond {\n  from {\n    transform: translateX(-20%); }\n  to {\n    transform: translateX(-220%); } }\n@keyframes marqueeAnimSecond {\n  from {\n    transform: translateX(-20%); }\n  to {\n    transform: translateX(-220%); } }\n.text-gradient-animation {\n  color: #ff0000;\n  background-image: -webkit-linear-gradient(92deg, #ff0000, #8dff00);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-animation: textGradientAnimation 5s infinite linear;\n          animation: textGradientAnimation 5s infinite linear; }\n@-webkit-keyframes textGradientAnimation {\n  from {\n    -webkit-filter: hue-rotate(0deg); }\n  to {\n    -webkit-filter: hue-rotate(-360deg); } }\n@font-face {\n  font-family: \"ObjectSans-Bold\";\n  src: url(\"/assets/fonts/ObjectSans-Bold.otf\") format(\"opentype\"); }\n@font-face {\n  font-family: \"ObjectSans-Regular\";\n  src: url(\"/assets/fonts/ObjectSans-Regular.otf\") format(\"opentype\"); }\n@font-face {\n  font-family: \"ObjectSans-Thin\";\n  src: url(\"/assets/fonts/ObjectSans-Thin.otf\") format(\"opentype\"); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy9yZXNldC5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2RlZGFsL0RvY3VtZW50cy9FYXJseSBCaXJkL2Fubi1zaXRlL3NyYy9hcHAvc3R5bGVzL2Jhc2Uuc2NzcyIsIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy92YXIuc2NzcyIsIi9Vc2Vycy9kZWRhbC9Eb2N1bWVudHMvRWFybHkgQmlyZC9hbm4tc2l0ZS9zcmMvYXBwL3N0eWxlcy9oZWxwZXJzLnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9zdHlsZXMvbWVkaWEtbWl4aW5zLnNjc3MiLCIvVXNlcnMvZGVkYWwvRG9jdW1lbnRzL0Vhcmx5IEJpcmQvYW5uLXNpdGUvc3JjL2FwcC9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwiL1VzZXJzL2RlZGFsL0RvY3VtZW50cy9FYXJseSBCaXJkL2Fubi1zaXRlL3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQUE7QUFFQTsrRUNBK0U7QURHL0U7OztFQ0NFO0FESUY7RUFDRSxpQkFBaUI7RUFBRSxNQUFBO0VBQ25CLDhCQUE4QjtFQUFFLE1BQUEsRUFBTztBQUd6QzsrRUNEK0U7QURJL0U7O0VDREU7QURLRjtFQUNFLFNBQVMsRUFBQTtBQUdYOztFQ0hFO0FET0Y7RUFDRSxjQUFjLEVBQUE7QUFHaEI7OztFQ0pFO0FEU0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFHbEI7K0VDUitFO0FEVy9FOzs7RUNQRTtBRFlGO0VBQ0UsdUJBQXVCO0VBQUUsTUFBQTtFQUN6QixTQUFTO0VBQUUsTUFBQTtFQUNYLGlCQUFpQjtFQUFFLE1BQUEsRUFBTztBQUc1Qjs7O0VDTkU7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QUxoQztFQUNFO0lBQ0UsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSw0QkFBNEIsRUFBQSxFQUFBO0FBSWhDO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQix3REFBZ0Q7VUFBaEQsZ0RBQWdEO0VBQ2hELDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTtBQUV2QjtFQUNFO0lBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSw0QkFBNEIsRUFBQSxFQUFBO0FBTGhDO0VBQ0U7SUFDRSwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLDRCQUE0QixFQUFBLEVBQUE7QUFJaEM7RUFDRSxjQUFjO0VBRWQsa0VBQWtFO0VBQ2xFLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLDJEQUFtRDtVQUFuRCxtREFBbUQsRUFBQTtBQUdyRDtFQUNFO0lBQ0UsZ0NBQWdDLEVBQUE7RUFFbEM7SUFDRSxtQ0FBbUMsRUFBQSxFQUFBO0FDckV2QztFQUNFLDhCQUE4QjtFQUM5QixnRUFBZ0UsRUFBQTtBQUVsRTtFQUNFLGlDQUFpQztFQUNqQyxtRUFBbUUsRUFBQTtBQUVyRTtFQUNFLDhCQUE4QjtFQUM5QixnRUFBZ0UsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufSIsIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqLyB9XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmJvZHkge1xuICBtYXJnaW46IDA7IH1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIDEgKi9cbiAgaGVpZ2h0OiAwO1xuICAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiAyICovIH1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIDIgKi8gfVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgLyogMiAqLyB9XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogMiAqLyB9XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7IH1cblxuLyoqXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07IH1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07IH1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqLyB9XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5idXR0b24sXG5pbnB1dCB7XG4gIC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuYnV0dG9uLFxuc2VsZWN0IHtcbiAgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDsgfVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0O1xuICAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlO1xuICAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDEgKi8gfVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIC8qIDIgKi8gfVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bzsgfVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIC8qIDIgKi8gfVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxuICovXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDtcbiAgLyogMiAqLyB9XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtOyB9XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiT2JqZWN0U2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG5wLFxuaDIsXG5oMSB7XG4gIG1hcmdpbjogMDsgfVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uaGVhZGVyX19sb2dvOmhvdmVyIC5jdXJzb3Ige1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTUzNS45OHB4KSB7XG4gICAgLndyYXBwZXIge1xuICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7IH0gfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTQzOS45OHB4KSB7XG4gICAgLndyYXBwZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMzY2cHg7IH0gfVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxMDRweDsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTM2NS45OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAwIDYwcHg7IH0gfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDAgMzJweDsgfSB9XG5cbi5mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5mbGV4LWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmZsZXgtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uZmxleC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5zaG93IHtcbiAgb3BhY2l0eTogMTsgfVxuXG4uaGlkZSB7XG4gIG9wYWNpdHk6IDA7IH1cblxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbiBmb3J3YXJkczsgfVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4uZmFkZU91dCB7XG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzIGVhc2UtaW4gZm9yd2FyZHM7IH1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbi5tYXJxdWVlQW5pbUZpcnN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBhbmltYXRpb246IG1hcnF1ZWVBbmltRmlyc3QgMTVzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG5Aa2V5ZnJhbWVzIG1hcnF1ZWVBbmltRmlyc3Qge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODAlKTsgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAlKTsgfSB9XG5cbi5tYXJxdWVlQW5pbVNlY29uZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYW5pbWF0aW9uOiBtYXJxdWVlQW5pbVNlY29uZCAxNXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDcuNXM7IH1cblxuQGtleWZyYW1lcyBtYXJxdWVlQW5pbVNlY29uZCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTsgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjAlKTsgfSB9XG5cbi50ZXh0LWdyYWRpZW50LWFuaW1hdGlvbiB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5MmRlZywgI2ZmMDAwMCwgIzhkZmYwMCk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IHRleHRHcmFkaWVudEFuaW1hdGlvbiA1cyBpbmZpbml0ZSBsaW5lYXI7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHRleHRHcmFkaWVudEFuaW1hdGlvbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpOyB9XG4gIHRvIHtcbiAgICAtd2Via2l0LWZpbHRlcjogaHVlLXJvdGF0ZSgtMzYwZGVnKTsgfSB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJPYmplY3RTYW5zLUJvbGRcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL09iamVjdFNhbnMtQm9sZC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9iamVjdFNhbnMtUmVndWxhclwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvT2JqZWN0U2Fucy1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT2JqZWN0U2Fucy1UaGluXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9PYmplY3RTYW5zLVRoaW4ub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpOyB9XG4iLCJAaW1wb3J0IFwibWl4aW5zXCIsIFwidmFyXCI7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvLyBjdXJzb3I6IHVybChcInNyYy9hc3NldHMvY3Vyc29yL2N1c3RvbS1jdXJzb3ItcGx1cy5zdmdcIikgMjcgMjcsIGF1dG87XG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogJHItZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxucCxcbmgyLFxuaDEge1xuICBtYXJnaW46IDA7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfX2xvZ28ge1xuICAmOmhvdmVyIHtcbiAgICAuY3Vyc29yIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuIiwiLy9Db2xvcnNcbiRncmF5OiAjYTdhNTllO1xuJGdyYXktZGFyazogIzU2NTY1NjtcbiRsaW1lOiAjMTRmZjAwO1xuJHRvbWF0bzogI2ZmMDAwMDtcblxuXG4vL0ZvbnRzXG4kYi1mZjogXCJPYmplY3RTYW5zLUJvbGRcIiwgc2Fucy1zZXJpZjtcbiRyLWZmOiBcIk9iamVjdFNhbnMtUmVndWxhclwiLCBzYW5zLXNlcmlmO1xuJHQtZmY6IFwiT2JqZWN0U2Fucy1UaGluXCIsIHNhbnMtc2VyaWY7IiwiQGltcG9ydCBcIm1peGluc1wiO1xuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigxNDQwKSB7XG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKDEzNjYpIHtcbiAgICBtYXgtd2lkdGg6IDEzNjZweDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxMDRweDtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oNzY4KSB7XG4gICAgcGFkZGluZzogMCA2MHB4O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigzNzUpIHtcbiAgICBwYWRkaW5nOiAwIDMycHg7XG4gIH1cbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LWVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhpZGUge1xuICBvcGFjaXR5OiAwO1xufVxuIiwiJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgbnVsbDogMCxcbiAgMzYwOiAzNjBweCxcbiAgMzc1OiAzNzVweCxcbiAgNzY4OiA3NjhweCxcbiAgMTM2NjogMTM2NnB4LFxuICAxNDQwOiAxNDQwcHgsXG4gIDE1MzY6IDE1MzZweCxcbiAgMTkyMDogMTkyMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoXG4gICRuYW1lLFxuICAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLFxuICAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKVxuKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKFxuICAgICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSxcbiAgICBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksXG4gICAgbnVsbFxuICApO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAwLjAycHgsIG51bGwpO1xufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiByZXRpbmEtbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpIGFuZCAobWluLXdpZHRoOiAkbWluKSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4td2lkdGg6ICRtaW4pLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSBhbmQgKG1pbi13aWR0aDogJG1pbiksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJldGluYS1tZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSBhbmQgKG1heC13aWR0aDogJG1heCksXG4gICAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSxcbiAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgYW5kIChtYXgtd2lkdGg6ICRtYXgpLFxuICAgICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5mYWRlSW4ge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZU91dCB7XG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm1hcnF1ZWVBbmltRmlyc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGFuaW1hdGlvbjogbWFycXVlZUFuaW1GaXJzdCAxNXMgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBtYXJxdWVlQW5pbUZpcnN0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSk7XG4gIH1cbn1cblxuLm1hcnF1ZWVBbmltU2Vjb25kIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBhbmltYXRpb246IG1hcnF1ZWVBbmltU2Vjb25kIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogNy41cztcbn1cbkBrZXlmcmFtZXMgbWFycXVlZUFuaW1TZWNvbmQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjIwJSk7XG4gIH1cbn1cblxuLnRleHQtZ3JhZGllbnQtYW5pbWF0aW9uIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkyZGVnLCAjZjM1NjI2LCAjZmVhYjNhKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTJkZWcsICNmZjAwMDAsICM4ZGZmMDApO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiB0ZXh0R3JhZGllbnRBbmltYXRpb24gNXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGV4dEdyYWRpZW50QW5pbWF0aW9uIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKC0zNjBkZWcpO1xuICB9XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT2JqZWN0U2Fucy1Cb2xkXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9PYmplY3RTYW5zLUJvbGQub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9iamVjdFNhbnMtUmVndWxhclwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvT2JqZWN0U2Fucy1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJPYmplY3RTYW5zLVRoaW5cIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL09iamVjdFNhbnMtVGhpbi5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dedal/Documents/Early Bird/ann-site/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map