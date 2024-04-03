/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/animations.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/animations.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.project-card{
    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.project-card:hover{
    transform: scale(1.1)
}`, "",{"version":3,"sources":["webpack://./src/animations.css"],"names":[],"mappings":"AAAA;IACI,yDAAyD;AAC7D;;AAEA;IACI;AACJ","sourcesContent":[".project-card{\n    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.project-card:hover{\n    transform: scale(1.1)\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --main-bg-color: #f0f9ff;
    --secondary-bg-color: #075985;
    --tertiary-bg-color: #0284c7;
    --card-bg-color: silver;
    --main-font-color: #082f49;
    --secondary-font-color: #e0f2fe;
}
html, body{
    margin: 0;
    height: 100%;
}
body{
    height: 100%;
    padding:0;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main" "footer";
    grid-template-rows:auto auto auto;
    background-image: linear-gradient(-189deg, var(--secondary-bg-color) clamp(2%, 20vw, 30vh), transparent clamp(calc(2% + 5px), calc(20vw + 5px), calc(30vh + 5px)));
    background-repeat: no-repeat;
    overflow-x: hidden;
    

}

header, main, footer{
    padding: clamp(2px, 5%, 20px);
    padding-left:clamp(2px, 20%, 150px);
    padding-right:clamp(2px, 20%, 150px);
}
/* Header area */
header{
    grid-area: header;
    display:flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: clamp(5px, 4vw, 50px);
}

.frame{
    background-color:var(--card-bg-color);
    border: 2px solid black;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.459);
}
.photo{
    align-self:flex-start;
    width: 15vw;
    >img{
        width: 100%;
    }
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    height: 13vw;
    width: 80%;
    padding: clamp(10px, 1%, 20px);
    background-color: var(--card-bg-color);
    border: 1px solid black;
    font-size: clamp(8px, 1.2vw, 24px);
    >article{
        height: clamp(20px, 70%, 160px);

    }
    > article > h1{
        font-size: clamp(5px, 4vw, 40px);;
       margin: 0;
    }
    >article > .text-div{
        margin: 0;
        height: 100%;
        max-height:80%;
        overflow-y: scroll;
        >p{
            margin: 0;
        }
    }
    >.contact{
        height:15%;
        width: 92%;
        display: flex;
        justify-content: flex-end;
        gap: clamp(12px, 5%, 70px);
        >a{
            height:100%;
            >img{
                height:100%;
            }
        }
    }
}
main{
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: clamp(8px, 1.5vw, 24px);
    grid-area: main;
    .main-container{
        width: 50%;
    }
    .project-card-container{
        padding: 3%;
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap:1rem;
        padding-bottom: 1vw;
        overflow-y: scroll;


}}
.project-card{
    background-color: var(--tertiary-bg-color);
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 10px black;
    font-size: 70%;
    color: var(--secondary-font-color);
    text-align: center;
        a>img{
            border: 2px solid black;
            border-radius: 50px;
            height: 50%;
            max-height: 160px;
        }
    }


footer{
    font-size: clamp(6px, .5vw, 20px);
    grid-area: footer;
    background-color: var(--secondary-bg-color);
    flex-direction: column;
    color: var(--secondary-font-color);
    a{color: var(--secondary-font-color);}
    h1{
        text-align: center;
        border-bottom: 3px dashed rgba(192, 192, 192, 0.452);
    }
    >h1, h2, h3{
        margin:10px;
    }

}
.contact-div{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
}
.contact-footer{
    display: flex;
    justify-content: flex-end;
    gap: 5%;
    >a{
        width: 10%;
        >img{
            height: 100%;
            filter: invert();
        }
    }
    
}


@media screen and (min-width:2000px){
    main{

        h1{
            font-size: 2rem;
            margin-bottom: 0;
        }
        h2{
            font-size: 1.5rem;
            margin-top:0;
        }
        h3{
            font-size: 1.2rem;
            font-weight: 900;
        }
        h4{
            font-size: 1rem;
        }
        .main-container{
            width: 40%;
        }
        .project-card-container{
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }
    header{
        .photo{
            max-width:11vw;
        }
        .card{
            font-size: 1.3rem;
            align-self: flex-end;
            max-height:8vw;
        }
    }
    footer{
        font-size: 60%;
        h1{
            margin-bottom:0;
        }
        h1, h2, h3{
            margin-top:0;
        }
    }
    header, footer{
        padding-left: 20vw;
        padding-right: 20vw;
    }
}

@media screen and (max-width:1000px){
    header{
        justify-content: center;
        margin-top: 16px;
    }
    .photo{
        position: absolute;
        top:10px;
        left:30px;
        width: 15vw;
    }
    .card{ 
            font-size: 1.6vw;
            width: 90%;
            height: 25vw;
            padding-left: 5%;

    }

    article{
        h1{
            text-align: center;
        }
    }
main{
    font-size: 1.5vw;
    padding:0; 
    .main-container{
        width: 60%;
    }

    }
    .project-card{
        h3{
            font-size: 2vw;
        }
        h4{
            font-size: 1.5vw;
        }
    }
}
@media screen and (max-width: 320px){
    header, main, footer{
        padding: 2vw;
    }
    .card{
    padding-top: 8%;
    }   
    article{
        font-size: 3.2vw;
    }
    main{
        font-size: 3vw;
        .main-container{
            width: 80%;
        }
    }
    .project-card{
        h3{
            font-size: 7vw;
            margin-bottom: 0;
        }
        h4{
            margin-top: 0;
            font-size: 4vw;
        }
    
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,6BAA6B;IAC7B,4BAA4B;IAC5B,uBAAuB;IACvB,0BAA0B;IAC1B,+BAA+B;AACnC;AACA;IACI,SAAS;IACT,YAAY;AAChB;AACA;IACI,YAAY;IACZ,SAAS;IACT,YAAY;IACZ,0BAA0B;IAC1B,6CAA6C;IAC7C,iCAAiC;IACjC,kKAAkK;IAClK,4BAA4B;IAC5B,kBAAkB;;;AAGtB;;AAEA;IACI,6BAA6B;IAC7B,mCAAmC;IACnC,oCAAoC;AACxC;AACA,gBAAgB;AAChB;IACI,iBAAiB;IACjB,YAAY;IACZ,6BAA6B;IAC7B,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,4CAA4C;AAChD;AACA;IACI,qBAAqB;IACrB,WAAW;IACX;QACI,WAAW;IACf;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;IACT,YAAY;IACZ,UAAU;IACV,8BAA8B;IAC9B,sCAAsC;IACtC,uBAAuB;IACvB,kCAAkC;IAClC;QACI,+BAA+B;;IAEnC;IACA;QACI,gCAAgC;OACjC,SAAS;IACZ;IACA;QACI,SAAS;QACT,YAAY;QACZ,cAAc;QACd,kBAAkB;QAClB;YACI,SAAS;QACb;IACJ;IACA;QACI,UAAU;QACV,UAAU;QACV,aAAa;QACb,yBAAyB;QACzB,0BAA0B;QAC1B;YACI,WAAW;YACX;gBACI,WAAW;YACf;QACJ;IACJ;AACJ;AACA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,eAAe;IACf;QACI,UAAU;IACd;IACA;QACI,WAAW;QACX,YAAY;QACZ,2DAA2D;QAC3D,QAAQ;QACR,mBAAmB;QACnB,kBAAkB;;;AAG1B,CAAC;AACD;IACI,0CAA0C;IAC1C,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,kCAAkC;IAClC,kBAAkB;QACd;YACI,uBAAuB;YACvB,mBAAmB;YACnB,WAAW;YACX,iBAAiB;QACrB;IACJ;;;AAGJ;IACI,iCAAiC;IACjC,iBAAiB;IACjB,2CAA2C;IAC3C,sBAAsB;IACtB,kCAAkC;IAClC,EAAE,kCAAkC,CAAC;IACrC;QACI,kBAAkB;QAClB,oDAAoD;IACxD;IACA;QACI,WAAW;IACf;;AAEJ;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,OAAO;IACP;QACI,UAAU;QACV;YACI,YAAY;YACZ,gBAAgB;QACpB;IACJ;;AAEJ;;;AAGA;IACI;;QAEI;YACI,eAAe;YACf,gBAAgB;QACpB;QACA;YACI,iBAAiB;YACjB,YAAY;QAChB;QACA;YACI,iBAAiB;YACjB,gBAAgB;QACpB;QACA;YACI,eAAe;QACnB;QACA;YACI,UAAU;QACd;QACA;YACI,2DAA2D;QAC/D;IACJ;IACA;QACI;YACI,cAAc;QAClB;QACA;YACI,iBAAiB;YACjB,oBAAoB;YACpB,cAAc;QAClB;IACJ;IACA;QACI,cAAc;QACd;YACI,eAAe;QACnB;QACA;YACI,YAAY;QAChB;IACJ;IACA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,uBAAuB;QACvB,gBAAgB;IACpB;IACA;QACI,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,WAAW;IACf;IACA;YACQ,gBAAgB;YAChB,UAAU;YACV,YAAY;YACZ,gBAAgB;;IAExB;;IAEA;QACI;YACI,kBAAkB;QACtB;IACJ;AACJ;IACI,gBAAgB;IAChB,SAAS;IACT;QACI,UAAU;IACd;;IAEA;IACA;QACI;YACI,cAAc;QAClB;QACA;YACI,gBAAgB;QACpB;IACJ;AACJ;AACA;IACI;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;QACd;YACI,UAAU;QACd;IACJ;IACA;QACI;YACI,cAAc;YACd,gBAAgB;QACpB;QACA;YACI,aAAa;YACb,cAAc;QAClB;;IAEJ;AACJ","sourcesContent":[":root{\n    --main-bg-color: #f0f9ff;\n    --secondary-bg-color: #075985;\n    --tertiary-bg-color: #0284c7;\n    --card-bg-color: silver;\n    --main-font-color: #082f49;\n    --secondary-font-color: #e0f2fe;\n}\nhtml, body{\n    margin: 0;\n    height: 100%;\n}\nbody{\n    height: 100%;\n    padding:0;\n    display:grid;\n    grid-template-columns: 1fr;\n    grid-template-areas: \"header\" \"main\" \"footer\";\n    grid-template-rows:auto auto auto;\n    background-image: linear-gradient(-189deg, var(--secondary-bg-color) clamp(2%, 20vw, 30vh), transparent clamp(calc(2% + 5px), calc(20vw + 5px), calc(30vh + 5px)));\n    background-repeat: no-repeat;\n    overflow-x: hidden;\n    \n\n}\n\nheader, main, footer{\n    padding: clamp(2px, 5%, 20px);\n    padding-left:clamp(2px, 20%, 150px);\n    padding-right:clamp(2px, 20%, 150px);\n}\n/* Header area */\nheader{\n    grid-area: header;\n    display:flex;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: clamp(5px, 4vw, 50px);\n}\n\n.frame{\n    background-color:var(--card-bg-color);\n    border: 2px solid black;\n    border-radius: 5px;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.459);\n}\n.photo{\n    align-self:flex-start;\n    width: 15vw;\n    >img{\n        width: 100%;\n    }\n}\n.card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n    height: 13vw;\n    width: 80%;\n    padding: clamp(10px, 1%, 20px);\n    background-color: var(--card-bg-color);\n    border: 1px solid black;\n    font-size: clamp(8px, 1.2vw, 24px);\n    >article{\n        height: clamp(20px, 70%, 160px);\n\n    }\n    > article > h1{\n        font-size: clamp(5px, 4vw, 40px);;\n       margin: 0;\n    }\n    >article > .text-div{\n        margin: 0;\n        height: 100%;\n        max-height:80%;\n        overflow-y: scroll;\n        >p{\n            margin: 0;\n        }\n    }\n    >.contact{\n        height:15%;\n        width: 92%;\n        display: flex;\n        justify-content: flex-end;\n        gap: clamp(12px, 5%, 70px);\n        >a{\n            height:100%;\n            >img{\n                height:100%;\n            }\n        }\n    }\n}\nmain{\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    font-size: clamp(8px, 1.5vw, 24px);\n    grid-area: main;\n    .main-container{\n        width: 50%;\n    }\n    .project-card-container{\n        padding: 3%;\n        display:grid;\n        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n        gap:1rem;\n        padding-bottom: 1vw;\n        overflow-y: scroll;\n\n\n}}\n.project-card{\n    background-color: var(--tertiary-bg-color);\n    border: 2px solid black;\n    border-radius: 10px;\n    box-shadow: 2px 2px 10px black;\n    font-size: 70%;\n    color: var(--secondary-font-color);\n    text-align: center;\n        a>img{\n            border: 2px solid black;\n            border-radius: 50px;\n            height: 50%;\n            max-height: 160px;\n        }\n    }\n\n\nfooter{\n    font-size: clamp(6px, .5vw, 20px);\n    grid-area: footer;\n    background-color: var(--secondary-bg-color);\n    flex-direction: column;\n    color: var(--secondary-font-color);\n    a{color: var(--secondary-font-color);}\n    h1{\n        text-align: center;\n        border-bottom: 3px dashed rgba(192, 192, 192, 0.452);\n    }\n    >h1, h2, h3{\n        margin:10px;\n    }\n\n}\n.contact-div{\n    display: flex;\n    justify-content: space-evenly;\n    text-align: center;\n}\n.contact-footer{\n    display: flex;\n    justify-content: flex-end;\n    gap: 5%;\n    >a{\n        width: 10%;\n        >img{\n            height: 100%;\n            filter: invert();\n        }\n    }\n    \n}\n\n\n@media screen and (min-width:2000px){\n    main{\n\n        h1{\n            font-size: 2rem;\n            margin-bottom: 0;\n        }\n        h2{\n            font-size: 1.5rem;\n            margin-top:0;\n        }\n        h3{\n            font-size: 1.2rem;\n            font-weight: 900;\n        }\n        h4{\n            font-size: 1rem;\n        }\n        .main-container{\n            width: 40%;\n        }\n        .project-card-container{\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        }\n    }\n    header{\n        .photo{\n            max-width:11vw;\n        }\n        .card{\n            font-size: 1.3rem;\n            align-self: flex-end;\n            max-height:8vw;\n        }\n    }\n    footer{\n        font-size: 60%;\n        h1{\n            margin-bottom:0;\n        }\n        h1, h2, h3{\n            margin-top:0;\n        }\n    }\n    header, footer{\n        padding-left: 20vw;\n        padding-right: 20vw;\n    }\n}\n\n@media screen and (max-width:1000px){\n    header{\n        justify-content: center;\n        margin-top: 16px;\n    }\n    .photo{\n        position: absolute;\n        top:10px;\n        left:30px;\n        width: 15vw;\n    }\n    .card{ \n            font-size: 1.6vw;\n            width: 90%;\n            height: 25vw;\n            padding-left: 5%;\n\n    }\n\n    article{\n        h1{\n            text-align: center;\n        }\n    }\nmain{\n    font-size: 1.5vw;\n    padding:0; \n    .main-container{\n        width: 60%;\n    }\n\n    }\n    .project-card{\n        h3{\n            font-size: 2vw;\n        }\n        h4{\n            font-size: 1.5vw;\n        }\n    }\n}\n@media screen and (max-width: 320px){\n    header, main, footer{\n        padding: 2vw;\n    }\n    .card{\n    padding-top: 8%;\n    }   \n    article{\n        font-size: 3.2vw;\n    }\n    main{\n        font-size: 3vw;\n        .main-container{\n            width: 80%;\n        }\n    }\n    .project-card{\n        h3{\n            font-size: 7vw;\n            margin-bottom: 0;\n        }\n        h4{\n            margin-top: 0;\n            font-size: 4vw;\n        }\n    \n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/animations.css":
/*!****************************!*\
  !*** ./src/animations.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./animations.css */ "./node_modules/css-loader/dist/cjs.js!./src/animations.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _animations_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations.css */ "./src/animations.css");



async function slideInHeader() {
	const header = document.querySelector('header')
	const headerSlideIn = [
		{ opacity: '0', transform: 'translateY(-100%)' },
		{ opacity: '1', transform: 'translateY(0%)' },
	]
	const headerSlideInAnim = { duration: 2000, iterations: 1, fill: 'forwards' }

	return new Promise((resolve) => {
		const animation = header.animate(headerSlideIn, headerSlideInAnim)
		animation.onfinish = resolve
	})
}

async function zoomInMain() {
	const main = document.querySelector('main')
	const mainZoomIn = [
		{ opacity: '0', transform: 'scale(0)' },
		{ opacity: '1', transform: 'scale(1)' },
	]
	const mainZoomInAnim = { duration: 2000, iterations: 1, fill: 'forwards' }

	return new Promise((resolve) => {
		const animation = main.animate(mainZoomIn, mainZoomInAnim)
		animation.onfinish = resolve
	})
}

async function slideInFooter() {
	const footer = document.querySelector('footer')
	const footerSlideIn = [
		{ opacity: '0', transform: 'translateY(100%)' },
		{ opacity: '1', transform: 'translateY(0)' },
	]
	const footerSlideInAnim = { duration: 2000, iterations: 1, fill: 'forwards' }

	return new Promise((resolve) => {
		const animation = footer.animate(footerSlideIn, footerSlideInAnim)
		animation.onfinish = resolve
	})
}

async function animateElementsOnStart() {
	await slideInHeader()
	await zoomInMain()
	await slideInFooter()
}

window.onload = async () => {
	await animateElementsOnStart()
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLFlBQVksT0FBTyxLQUFLLEtBQUssdUNBQXVDLGdFQUFnRSxHQUFHLHdCQUF3Qiw4QkFBOEIsbUJBQW1CO0FBQzdTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidkM7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGVBQWUsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSx1QkFBdUIsTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssVUFBVSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFL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LCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vc3JjL2FuaW1hdGlvbnMuY3NzP2RlMjYiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvamVjdC1jYXJke1xuICAgIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLnByb2plY3QtY2FyZDpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hbmltYXRpb25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlEQUF5RDtBQUM3RDs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2plY3QtY2FyZHtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLW1haW4tYmctY29sb3I6ICNmMGY5ZmY7XG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMwNzU5ODU7XG4gICAgLS10ZXJ0aWFyeS1iZy1jb2xvcjogIzAyODRjNztcbiAgICAtLWNhcmQtYmctY29sb3I6IHNpbHZlcjtcbiAgICAtLW1haW4tZm9udC1jb2xvcjogIzA4MmY0OTtcbiAgICAtLXNlY29uZGFyeS1mb250LWNvbG9yOiAjZTBmMmZlO1xufVxuaHRtbCwgYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzowO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwibWFpblwiIFwiZm9vdGVyXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG8gYXV0byBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTg5ZGVnLCB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpIGNsYW1wKDIlLCAyMHZ3LCAzMHZoKSwgdHJhbnNwYXJlbnQgY2xhbXAoY2FsYygyJSArIDVweCksIGNhbGMoMjB2dyArIDVweCksIGNhbGMoMzB2aCArIDVweCkpKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBcblxufVxuXG5oZWFkZXIsIG1haW4sIGZvb3RlcntcbiAgICBwYWRkaW5nOiBjbGFtcCgycHgsIDUlLCAyMHB4KTtcbiAgICBwYWRkaW5nLWxlZnQ6Y2xhbXAoMnB4LCAyMCUsIDE1MHB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OmNsYW1wKDJweCwgMjAlLCAxNTBweCk7XG59XG4vKiBIZWFkZXIgYXJlYSAqL1xuaGVhZGVye1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IGNsYW1wKDVweCwgNHZ3LCA1MHB4KTtcbn1cblxuLmZyYW1le1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY2FyZC1iZy1jb2xvcik7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40NTkpO1xufVxuLnBob3Rve1xuICAgIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTV2dztcbiAgICA+aW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uY2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDEzdnc7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiBjbGFtcCgxMHB4LCAxJSwgMjBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDEuMnZ3LCAyNHB4KTtcbiAgICA+YXJ0aWNsZXtcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyMHB4LCA3MCUsIDE2MHB4KTtcblxuICAgIH1cbiAgICA+IGFydGljbGUgPiBoMXtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCg1cHgsIDR2dywgNDBweCk7O1xuICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgPmFydGljbGUgPiAudGV4dC1kaXZ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OjgwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICA+cHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICA+LmNvbnRhY3R7XG4gICAgICAgIGhlaWdodDoxNSU7XG4gICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGdhcDogY2xhbXAoMTJweCwgNSUsIDcwcHgpO1xuICAgICAgICA+YXtcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgPmltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbm1haW57XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDEuNXZ3LCAyNHB4KTtcbiAgICBncmlkLWFyZWE6IG1haW47XG4gICAgLm1haW4tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAucHJvamVjdC1jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XG4gICAgICAgIGdhcDoxcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXZ3O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cblxufX1cbi5wcm9qZWN0LWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktYmctY29sb3IpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhPmltZ3tcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTYwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cblxuZm9vdGVye1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoNnB4LCAuNXZ3LCAyMHB4KTtcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcbiAgICBhe2NvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7fVxuICAgIGgxe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBkYXNoZWQgcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjQ1Mik7XG4gICAgfVxuICAgID5oMSwgaDIsIGgze1xuICAgICAgICBtYXJnaW46MTBweDtcbiAgICB9XG5cbn1cbi5jb250YWN0LWRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0LWZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiA1JTtcbiAgICA+YXtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgPmltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoyMDAwcHgpe1xuICAgIG1haW57XG5cbiAgICAgICAgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XG4gICAgICAgIH1cbiAgICAgICAgaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdC1jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhlYWRlcntcbiAgICAgICAgLnBob3Rve1xuICAgICAgICAgICAgbWF4LXdpZHRoOjExdnc7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWF4LWhlaWdodDo4dnc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9vdGVye1xuICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICAgIH1cbiAgICAgICAgaDEsIGgyLCBoM3tcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoZWFkZXIsIGZvb3RlcntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xuICAgIGhlYWRlcntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5waG90b3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MTBweDtcbiAgICAgICAgbGVmdDozMHB4O1xuICAgICAgICB3aWR0aDogMTV2dztcbiAgICB9XG4gICAgLmNhcmR7IFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZ2dztcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1dnc7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuXG4gICAgfVxuXG4gICAgYXJ0aWNsZXtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5tYWlue1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgcGFkZGluZzowOyBcbiAgICAubWFpbi1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuXG4gICAgfVxuICAgIC5wcm9qZWN0LWNhcmR7XG4gICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xuICAgIGhlYWRlciwgbWFpbiwgZm9vdGVye1xuICAgICAgICBwYWRkaW5nOiAydnc7XG4gICAgfVxuICAgIC5jYXJke1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbiAgICB9ICAgXG4gICAgYXJ0aWNsZXtcbiAgICAgICAgZm9udC1zaXplOiAzLjJ2dztcbiAgICB9XG4gICAgbWFpbntcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgIC5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtY2FyZHtcbiAgICAgICAgaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDd2dztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDZDQUE2QztJQUM3QyxpQ0FBaUM7SUFDakMsa0tBQWtLO0lBQ2xLLDRCQUE0QjtJQUM1QixrQkFBa0I7OztBQUd0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsb0NBQW9DO0FBQ3hDO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lB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UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7UUFDZDtZQUNJLFVBQVU7UUFDZDtJQUNKO0lBQ0E7UUFDSTtZQUNJLGNBQWM7WUFDZCxnQkFBZ0I7UUFDcEI7UUFDQTtZQUNJLGFBQWE7WUFDYixjQUFjO1FBQ2xCOztJQUVKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI2YwZjlmZjtcXG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMwNzU5ODU7XFxuICAgIC0tdGVydGlhcnktYmctY29sb3I6ICMwMjg0Yzc7XFxuICAgIC0tY2FyZC1iZy1jb2xvcjogc2lsdmVyO1xcbiAgICAtLW1haW4tZm9udC1jb2xvcjogIzA4MmY0OTtcXG4gICAgLS1zZWNvbmRhcnktZm9udC1jb2xvcjogI2UwZjJmZTtcXG59XFxuaHRtbCwgYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzowO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIiBcXFwibWFpblxcXCIgXFxcImZvb3RlclxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czphdXRvIGF1dG8gYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODlkZWcsIHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcikgY2xhbXAoMiUsIDIwdncsIDMwdmgpLCB0cmFuc3BhcmVudCBjbGFtcChjYWxjKDIlICsgNXB4KSwgY2FsYygyMHZ3ICsgNXB4KSwgY2FsYygzMHZoICsgNXB4KSkpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIFxcblxcbn1cXG5cXG5oZWFkZXIsIG1haW4sIGZvb3RlcntcXG4gICAgcGFkZGluZzogY2xhbXAoMnB4LCA1JSwgMjBweCk7XFxuICAgIHBhZGRpbmctbGVmdDpjbGFtcCgycHgsIDIwJSwgMTUwcHgpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OmNsYW1wKDJweCwgMjAlLCAxNTBweCk7XFxufVxcbi8qIEhlYWRlciBhcmVhICovXFxuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogY2xhbXAoNXB4LCA0dncsIDUwcHgpO1xcbn1cXG5cXG4uZnJhbWV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40NTkpO1xcbn1cXG4ucGhvdG97XFxuICAgIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgID5pbWd7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG4uY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTN2dztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogY2xhbXAoMTBweCwgMSUsIDIwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxLjJ2dywgMjRweCk7XFxuICAgID5hcnRpY2xle1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyMHB4LCA3MCUsIDE2MHB4KTtcXG5cXG4gICAgfVxcbiAgICA+IGFydGljbGUgPiBoMXtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoNXB4LCA0dncsIDQwcHgpOztcXG4gICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgID5hcnRpY2xlID4gLnRleHQtZGl2e1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDo4MCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICA+cHtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgPi5jb250YWN0e1xcbiAgICAgICAgaGVpZ2h0OjE1JTtcXG4gICAgICAgIHdpZHRoOiA5MiU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGdhcDogY2xhbXAoMTJweCwgNSUsIDcwcHgpO1xcbiAgICAgICAgPmF7XFxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICAgICAgPmltZ3tcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbm1haW57XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDEuNXZ3LCAyNHB4KTtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWNhcmQtY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzogMyU7XFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcXG4gICAgICAgIGdhcDoxcmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDF2dztcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG5cXG59fVxcbi5wcm9qZWN0LWNhcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcXG4gICAgZm9udC1zaXplOiA3MCU7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGE+aW1ne1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTYwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG5mb290ZXJ7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNnB4LCAuNXZ3LCAyMHB4KTtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuICAgIGF7Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTt9XFxuICAgIGgxe1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNDUyKTtcXG4gICAgfVxcbiAgICA+aDEsIGgyLCBoM3tcXG4gICAgICAgIG1hcmdpbjoxMHB4O1xcbiAgICB9XFxuXFxufVxcbi5jb250YWN0LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDUlO1xcbiAgICA+YXtcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgICA+aW1ne1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBmaWx0ZXI6IGludmVydCgpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjIwMDBweCl7XFxuICAgIG1haW57XFxuXFxuICAgICAgICBoMXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcXG4gICAgICAgIH1cXG4gICAgICAgIGgze1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB9XFxuICAgICAgICBoNHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB9XFxuICAgICAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5wcm9qZWN0LWNhcmQtY29udGFpbmVye1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGhlYWRlcntcXG4gICAgICAgIC5waG90b3tcXG4gICAgICAgICAgICBtYXgtd2lkdGg6MTF2dztcXG4gICAgICAgIH1cXG4gICAgICAgIC5jYXJke1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6OHZ3O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGZvb3RlcntcXG4gICAgICAgIGZvbnQtc2l6ZTogNjAlO1xcbiAgICAgICAgaDF7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDEsIGgyLCBoM3tcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgaGVhZGVyLCBmb290ZXJ7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwdnc7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcXG4gICAgaGVhZGVye1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICB9XFxuICAgIC5waG90b3tcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDoxMHB4O1xcbiAgICAgICAgbGVmdDozMHB4O1xcbiAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgIH1cXG4gICAgLmNhcmR7IFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42dnc7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1dnc7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcXG5cXG4gICAgfVxcblxcbiAgICBhcnRpY2xle1xcbiAgICAgICAgaDF7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxubWFpbntcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG4gICAgcGFkZGluZzowOyBcXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgfVxcblxcbiAgICB9XFxuICAgIC5wcm9qZWN0LWNhcmR7XFxuICAgICAgICBoM3tcXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcXG4gICAgICAgIH1cXG4gICAgICAgIGg0e1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xcbiAgICBoZWFkZXIsIG1haW4sIGZvb3RlcntcXG4gICAgICAgIHBhZGRpbmc6IDJ2dztcXG4gICAgfVxcbiAgICAuY2FyZHtcXG4gICAgcGFkZGluZy10b3A6IDglO1xcbiAgICB9ICAgXFxuICAgIGFydGljbGV7XFxuICAgICAgICBmb250LXNpemU6IDMuMnZ3O1xcbiAgICB9XFxuICAgIG1haW57XFxuICAgICAgICBmb250LXNpemU6IDN2dztcXG4gICAgICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0LWNhcmR7XFxuICAgICAgICBoM3tcXG4gICAgICAgICAgICBmb250LXNpemU6IDd2dztcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDR7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcXG4gICAgICAgIH1cXG4gICAgXFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0ICcuL2FuaW1hdGlvbnMuY3NzJ1xuXG5hc3luYyBmdW5jdGlvbiBzbGlkZUluSGVhZGVyKCkge1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKVxuXHRjb25zdCBoZWFkZXJTbGlkZUluID0gW1xuXHRcdHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfSxcblx0XHR7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknIH0sXG5cdF1cblx0Y29uc3QgaGVhZGVyU2xpZGVJbkFuaW0gPSB7IGR1cmF0aW9uOiAyMDAwLCBpdGVyYXRpb25zOiAxLCBmaWxsOiAnZm9yd2FyZHMnIH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRjb25zdCBhbmltYXRpb24gPSBoZWFkZXIuYW5pbWF0ZShoZWFkZXJTbGlkZUluLCBoZWFkZXJTbGlkZUluQW5pbSlcblx0XHRhbmltYXRpb24ub25maW5pc2ggPSByZXNvbHZlXG5cdH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHpvb21Jbk1haW4oKSB7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcblx0Y29uc3QgbWFpblpvb21JbiA9IFtcblx0XHR7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0sXG5cdFx0eyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9LFxuXHRdXG5cdGNvbnN0IG1haW5ab29tSW5BbmltID0geyBkdXJhdGlvbjogMjAwMCwgaXRlcmF0aW9uczogMSwgZmlsbDogJ2ZvcndhcmRzJyB9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gbWFpbi5hbmltYXRlKG1haW5ab29tSW4sIG1haW5ab29tSW5BbmltKVxuXHRcdGFuaW1hdGlvbi5vbmZpbmlzaCA9IHJlc29sdmVcblx0fSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2xpZGVJbkZvb3RlcigpIHtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcblx0Y29uc3QgZm9vdGVyU2xpZGVJbiA9IFtcblx0XHR7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfSxcblx0XHR7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSxcblx0XVxuXHRjb25zdCBmb290ZXJTbGlkZUluQW5pbSA9IHsgZHVyYXRpb246IDIwMDAsIGl0ZXJhdGlvbnM6IDEsIGZpbGw6ICdmb3J3YXJkcycgfVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdGNvbnN0IGFuaW1hdGlvbiA9IGZvb3Rlci5hbmltYXRlKGZvb3RlclNsaWRlSW4sIGZvb3RlclNsaWRlSW5BbmltKVxuXHRcdGFuaW1hdGlvbi5vbmZpbmlzaCA9IHJlc29sdmVcblx0fSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZUVsZW1lbnRzT25TdGFydCgpIHtcblx0YXdhaXQgc2xpZGVJbkhlYWRlcigpXG5cdGF3YWl0IHpvb21Jbk1haW4oKVxuXHRhd2FpdCBzbGlkZUluRm9vdGVyKClcbn1cblxud2luZG93Lm9ubG9hZCA9IGFzeW5jICgpID0+IHtcblx0YXdhaXQgYW5pbWF0ZUVsZW1lbnRzT25TdGFydCgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=