/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burger": () => (/* binding */ burger)
/* harmony export */ });

const burger =(burger, menu)=>{
	let burgerBtn=document.querySelector(burger),
	menuPanel=document.querySelector(menu);
	burgerBtn.addEventListener('click',(e)=>{
		burgerBtn.classList.toggle('active')
		menuPanel.classList.toggle('active')
		document.body.classList.toggle('lock')
	})
	
}


/***/ }),

/***/ "./src/js/modules/formValidation.js":
/*!******************************************!*\
  !*** ./src/js/modules/formValidation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
const form=()=>{
	let formName=document.querySelector('.js-user-name');
	let submitBtn=document.querySelector('.js-form-submit');
	let userMail=document.querySelector('.js-user-mail');
	let inputs=document.querySelectorAll('input');
	inputs.forEach((input)=>{
		input.addEventListener('focus',()=>{
			input.classList.remove('error')
		})
	})
	formName.addEventListener('input', ()=>{
		formName.value=formName.value.replace(/[^a-zа-яё\s]/gi, '');
	})

	submitBtn.addEventListener('click',(e)=>{
		e.preventDefault();
		let emailFilter=/^[a-z0-9_.-]+@([a-z0-9-]+\.)+[a-z]{2,6}$/i
		if (emailFilter.test(userMail)) {
			console.log(true)
		}else {
			console.log(false)
			formName.value='';
			userMail.value='';
			userMail.placeholder="Неверный адрес эл.почты"
			userMail.classList.add('error');
		}


	})
	window.addEventListener('click',(e)=>{
		if (userMail.classList.contains('error') && e.target!=submitBtn) {
			userMail.classList.remove('error');
			userMail.placeholder="Ваш email"
		}
	})
		
	
}

/***/ }),

/***/ "./src/js/modules/subMenu.js":
/*!***********************************!*\
  !*** ./src/js/modules/subMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subMenu": () => (/* binding */ subMenu)
/* harmony export */ });
const subMenu=(subMenuClass)=>{
	if (window.matchMedia('(max-width:700px)').matches) {
	let subMenuItem=document.querySelectorAll(subMenuClass),
	subMenuLink=document.querySelector(`${subMenuClass}>a`),
	subMenuContent=document.querySelector(`${subMenuClass}>ul`);

	subMenuItem.forEach((item)=>{
		item.addEventListener('click',(e)=>{
		e.preventDefault();
		subMenuContent.classList.toggle('active')

	})
	})
}
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger.js */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_subMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/subMenu.js */ "./src/js/modules/subMenu.js");
/* harmony import */ var _modules_formValidation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formValidation.js */ "./src/js/modules/formValidation.js");




(0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger)('.burger', '.menu');
(0,_modules_subMenu_js__WEBPACK_IMPORTED_MODULE_1__.subMenu)('.has-children');
(0,_modules_formValidation_js__WEBPACK_IMPORTED_MODULE_2__.formValidation)();
})();

/******/ })()
;
//# sourceMappingURL=dist/js/bundle.js.map