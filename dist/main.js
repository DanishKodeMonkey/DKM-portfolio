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
}

.wave-photo{
    animation: waveAnimation 500ms ease-in-out 1;
}
.icon>a>img{
    transition: 100ms ease-in-out;
}
.icon>a:hover>img{
    transform: scale(1.5);
    filter:drop-shadow(0 0 5px #ffd700)
}
@keyframes waveAnimation{
    0%{
        transform: rotateZ(0deg) scale(1)
    }
    25%{
        transform: rotateZ(5deg) scale(1.3)
    }
    50%{transform: rotateZ(-5deg) scale(1.4)
    }
    75%{transform: rotateZ(5deg) scale(1.3)
    }
    100%{transform:rotateZ(0deg) scale(1)}
}`, "",{"version":3,"sources":["webpack://./src/animations.css"],"names":[],"mappings":"AAAA;IACI,yDAAyD;AAC7D;;AAEA;IACI;AACJ;;AAEA;IACI,4CAA4C;AAChD;AACA;IACI,6BAA6B;AACjC;AACA;IACI,qBAAqB;IACrB;AACJ;AACA;IACI;QACI;IACJ;IACA;QACI;IACJ;IACA,IAAI;IACJ;IACA,IAAI;IACJ;IACA,KAAK,gCAAgC;AACzC","sourcesContent":[".project-card{\n    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.project-card:hover{\n    transform: scale(1.1)\n}\n\n.wave-photo{\n    animation: waveAnimation 500ms ease-in-out 1;\n}\n.icon>a>img{\n    transition: 100ms ease-in-out;\n}\n.icon>a:hover>img{\n    transform: scale(1.5);\n    filter:drop-shadow(0 0 5px #ffd700)\n}\n@keyframes waveAnimation{\n    0%{\n        transform: rotateZ(0deg) scale(1)\n    }\n    25%{\n        transform: rotateZ(5deg) scale(1.3)\n    }\n    50%{transform: rotateZ(-5deg) scale(1.4)\n    }\n    75%{transform: rotateZ(5deg) scale(1.3)\n    }\n    100%{transform:rotateZ(0deg) scale(1)}\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/icons/github-original.svg */ "./src/resources/icons/github-original.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/icons/linkedin-plain.svg */ "./src/resources/icons/linkedin-plain.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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

.github-link, .linkedin-link{
    width: 30px;
    height:30px;
    background-size: contain;
    background-repeat: no-repeat;
}
.github-link{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.linkedin-link{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});

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
    height: 30px; 
    >a{
        width: 40px;
        height:40px;
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
        top:0;
        left:10px;
        width: 12vw;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,6BAA6B;IAC7B,4BAA4B;IAC5B,uBAAuB;IACvB,0BAA0B;IAC1B,+BAA+B;AACnC;AACA;IACI,SAAS;IACT,YAAY;AAChB;AACA;IACI,YAAY;IACZ,SAAS;IACT,YAAY;IACZ,0BAA0B;IAC1B,6CAA6C;IAC7C,iCAAiC;IACjC,kKAAkK;IAClK,4BAA4B;IAC5B,kBAAkB;;;AAGtB;;AAEA;IACI,6BAA6B;IAC7B,mCAAmC;IACnC,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,wBAAwB;IACxB,4BAA4B;AAChC;AACA;IACI,yDAA8D;AAClE;AACA;IACI,yDAA6D;;AAEjE;AACA,gBAAgB;AAChB;IACI,iBAAiB;IACjB,YAAY;IACZ,6BAA6B;IAC7B,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,4CAA4C;AAChD;AACA;IACI,qBAAqB;IACrB,WAAW;IACX;QACI,WAAW;IACf;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;IACT,YAAY;IACZ,UAAU;IACV,8BAA8B;IAC9B,sCAAsC;IACtC,uBAAuB;IACvB,kCAAkC;IAClC;QACI,+BAA+B;;IAEnC;IACA;QACI,gCAAgC;OACjC,SAAS;IACZ;IACA;QACI,SAAS;QACT,YAAY;QACZ,cAAc;QACd,kBAAkB;QAClB;YACI,SAAS;QACb;IACJ;IACA;QACI,UAAU;QACV,UAAU;QACV,aAAa;QACb,yBAAyB;QACzB,0BAA0B;QAC1B;YACI,WAAW;YACX;gBACI,WAAW;YACf;QACJ;IACJ;AACJ;AACA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,eAAe;IACf;QACI,UAAU;IACd;IACA;QACI,WAAW;QACX,YAAY;QACZ,2DAA2D;QAC3D,QAAQ;QACR,mBAAmB;QACnB,kBAAkB;;;AAG1B,CAAC;AACD;IACI,0CAA0C;IAC1C,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,kCAAkC;IAClC,kBAAkB;QACd;YACI,uBAAuB;YACvB,mBAAmB;YACnB,WAAW;YACX,iBAAiB;QACrB;IACJ;;;AAGJ;IACI,iCAAiC;IACjC,iBAAiB;IACjB,2CAA2C;IAC3C,sBAAsB;IACtB,kCAAkC;IAClC,EAAE,kCAAkC,CAAC;IACrC;QACI,kBAAkB;QAClB,oDAAoD;IACxD;IACA;QACI,WAAW;IACf;;AAEJ;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,OAAO;IACP,YAAY;IACZ;QACI,WAAW;QACX,WAAW;IACf;AACJ;;;;;AAKA;IACI;;QAEI;YACI,eAAe;YACf,gBAAgB;QACpB;QACA;YACI,iBAAiB;YACjB,YAAY;QAChB;QACA;YACI,iBAAiB;YACjB,gBAAgB;QACpB;QACA;YACI,eAAe;QACnB;QACA;YACI,UAAU;QACd;QACA;YACI,2DAA2D;QAC/D;IACJ;IACA;QACI;YACI,cAAc;QAClB;QACA;YACI,iBAAiB;YACjB,oBAAoB;YACpB,cAAc;QAClB;IACJ;IACA;QACI,cAAc;QACd;YACI,eAAe;QACnB;QACA;YACI,YAAY;QAChB;IACJ;IACA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,uBAAuB;QACvB,gBAAgB;IACpB;IACA;QACI,kBAAkB;QAClB,KAAK;QACL,SAAS;QACT,WAAW;IACf;IACA;YACQ,gBAAgB;YAChB,UAAU;YACV,YAAY;YACZ,gBAAgB;;IAExB;;IAEA;QACI;YACI,kBAAkB;QACtB;IACJ;AACJ;IACI,gBAAgB;IAChB,SAAS;IACT;QACI,UAAU;IACd;;IAEA;IACA;QACI;YACI,cAAc;QAClB;QACA;YACI,gBAAgB;QACpB;IACJ;AACJ;AACA;IACI;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;QACd;YACI,UAAU;QACd;IACJ;IACA;QACI;YACI,cAAc;YACd,gBAAgB;QACpB;QACA;YACI,aAAa;YACb,cAAc;QAClB;;IAEJ;AACJ","sourcesContent":[":root{\n    --main-bg-color: #f0f9ff;\n    --secondary-bg-color: #075985;\n    --tertiary-bg-color: #0284c7;\n    --card-bg-color: silver;\n    --main-font-color: #082f49;\n    --secondary-font-color: #e0f2fe;\n}\nhtml, body{\n    margin: 0;\n    height: 100%;\n}\nbody{\n    height: 100%;\n    padding:0;\n    display:grid;\n    grid-template-columns: 1fr;\n    grid-template-areas: \"header\" \"main\" \"footer\";\n    grid-template-rows:auto auto auto;\n    background-image: linear-gradient(-189deg, var(--secondary-bg-color) clamp(2%, 20vw, 30vh), transparent clamp(calc(2% + 5px), calc(20vw + 5px), calc(30vh + 5px)));\n    background-repeat: no-repeat;\n    overflow-x: hidden;\n    \n\n}\n\nheader, main, footer{\n    padding: clamp(2px, 5%, 20px);\n    padding-left:clamp(2px, 20%, 150px);\n    padding-right:clamp(2px, 20%, 150px);\n}\n\n.github-link, .linkedin-link{\n    width: 30px;\n    height:30px;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n.github-link{\n    background-image: url('./resources/icons/github-original.svg');\n}\n.linkedin-link{\n    background-image: url('./resources/icons/linkedin-plain.svg');\n\n}\n/* Header area */\nheader{\n    grid-area: header;\n    display:flex;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: clamp(5px, 4vw, 50px);\n}\n\n.frame{\n    background-color:var(--card-bg-color);\n    border: 2px solid black;\n    border-radius: 5px;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.459);\n}\n.photo{\n    align-self:flex-start;\n    width: 15vw;\n    >img{\n        width: 100%;\n    }\n}\n.card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n    height: 13vw;\n    width: 80%;\n    padding: clamp(10px, 1%, 20px);\n    background-color: var(--card-bg-color);\n    border: 1px solid black;\n    font-size: clamp(8px, 1.2vw, 24px);\n    >article{\n        height: clamp(20px, 70%, 160px);\n\n    }\n    > article > h1{\n        font-size: clamp(5px, 4vw, 40px);;\n       margin: 0;\n    }\n    >article > .text-div{\n        margin: 0;\n        height: 100%;\n        max-height:80%;\n        overflow-y: scroll;\n        >p{\n            margin: 0;\n        }\n    }\n    >.contact{\n        height:15%;\n        width: 92%;\n        display: flex;\n        justify-content: flex-end;\n        gap: clamp(12px, 5%, 70px);\n        >a{\n            height:100%;\n            >img{\n                height:100%;\n            }\n        }\n    }\n}\nmain{\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    font-size: clamp(8px, 1.5vw, 24px);\n    grid-area: main;\n    .main-container{\n        width: 50%;\n    }\n    .project-card-container{\n        padding: 3%;\n        display:grid;\n        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n        gap:1rem;\n        padding-bottom: 1vw;\n        overflow-y: scroll;\n\n\n}}\n.project-card{\n    background-color: var(--tertiary-bg-color);\n    border: 2px solid black;\n    border-radius: 10px;\n    box-shadow: 2px 2px 10px black;\n    font-size: 70%;\n    color: var(--secondary-font-color);\n    text-align: center;\n        a>img{\n            border: 2px solid black;\n            border-radius: 50px;\n            height: 50%;\n            max-height: 160px;\n        }\n    }\n\n\nfooter{\n    font-size: clamp(6px, .5vw, 20px);\n    grid-area: footer;\n    background-color: var(--secondary-bg-color);\n    flex-direction: column;\n    color: var(--secondary-font-color);\n    a{color: var(--secondary-font-color);}\n    h1{\n        text-align: center;\n        border-bottom: 3px dashed rgba(192, 192, 192, 0.452);\n    }\n    >h1, h2, h3{\n        margin:10px;\n    }\n\n}\n.contact-div{\n    display: flex;\n    justify-content: space-evenly;\n    text-align: center;\n}\n.contact-footer{\n    display: flex;\n    justify-content: flex-end;\n    gap: 5%;  \n    height: 30px; \n    >a{\n        width: 40px;\n        height:40px;\n    }\n}\n\n\n\n\n@media screen and (min-width:2000px){\n    main{\n\n        h1{\n            font-size: 2rem;\n            margin-bottom: 0;\n        }\n        h2{\n            font-size: 1.5rem;\n            margin-top:0;\n        }\n        h3{\n            font-size: 1.2rem;\n            font-weight: 900;\n        }\n        h4{\n            font-size: 1rem;\n        }\n        .main-container{\n            width: 40%;\n        }\n        .project-card-container{\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        }\n    }\n    header{\n        .photo{\n            max-width:11vw;\n        }\n        .card{\n            font-size: 1.3rem;\n            align-self: flex-end;\n            max-height:8vw;\n        }\n    }\n    footer{\n        font-size: 60%;\n        h1{\n            margin-bottom:0;\n        }\n        h1, h2, h3{\n            margin-top:0;\n        }\n    }\n    header, footer{\n        padding-left: 20vw;\n        padding-right: 20vw;\n    }\n}\n\n@media screen and (max-width:1000px){\n    header{\n        justify-content: center;\n        margin-top: 16px;\n    }\n    .photo{\n        position: absolute;\n        top:0;\n        left:10px;\n        width: 12vw;\n    }\n    .card{ \n            font-size: 1.6vw;\n            width: 90%;\n            height: 25vw;\n            padding-left: 5%;\n\n    }\n\n    article{\n        h1{\n            text-align: center;\n        }\n    }\nmain{\n    font-size: 1.5vw;\n    padding:0; \n    .main-container{\n        width: 60%;\n    }\n\n    }\n    .project-card{\n        h3{\n            font-size: 2vw;\n        }\n        h4{\n            font-size: 1.5vw;\n        }\n    }\n}\n@media screen and (max-width: 320px){\n    header, main, footer{\n        padding: 2vw;\n    }\n    .card{\n    padding-top: 8%;\n    }   \n    article{\n        font-size: 3.2vw;\n    }\n    main{\n        font-size: 3vw;\n        .main-container{\n            width: 80%;\n        }\n    }\n    .project-card{\n        h3{\n            font-size: 7vw;\n            margin-bottom: 0;\n        }\n        h4{\n            margin-top: 0;\n            font-size: 4vw;\n        }\n    \n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ }),

/***/ "./src/resources/icons/github-original.svg":
/*!*************************************************!*\
  !*** ./src/resources/icons/github-original.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f5c5e6eae4a5d72b192b-github-original..svg";

/***/ }),

/***/ "./src/resources/icons/linkedin-plain.svg":
/*!************************************************!*\
  !*** ./src/resources/icons/linkedin-plain.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d4e41ebf9944039eda77-linkedin-plain..svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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



/* Leveraging the web animations API for this */

/* Animation for a cute wave animation on the photo */
async function wavePhoto() {
	/* eslint-disable */console.log(...oo_oo(`4131061978_8_1_8_34_4`,'attempting to wave'))
	const photo = document.querySelector('.photo')
	photo.classList.add('wave-photo')
	// remove animation class after animation finishes playing once
	photo.addEventListener(
		'animationend',
		() => {
			photo.classList.remove('wave-photo')
		},
		{ once: true }
	)
}
async function slideInHeader() {
	const header = document.querySelector('header')
	const headerSlideIn = [
		{ opacity: '0', transform: 'translateY(-100%)' },
		{ opacity: '1', transform: 'translateY(0%)' },
	]
	const headerSlideInAnim = {
		duration: 500,
		iterations: 1,
		fill: 'forwards',
		easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	}

	return new Promise((resolve) => {
		const animation = header.animate(headerSlideIn, headerSlideInAnim)
		animation.onfinish = resolve
	})
}
async function slideInHeaderAndWavePhoto() {
	await slideInHeader()
	await wavePhoto()
}
// Thank you google for this one
async function typeWriterEffect(element, text, speed) {
	for (let i = 0; i < text.length; i++) {
		element.textContent += text.charAt(i)
		await new Promise((resolve) => setTimeout(resolve, speed))
	}
}

async function animateTypeWriteEffect() {
	const h1 = document.querySelector('.main-container h1')
	const h2 = document.querySelector('.main-container h2')
	await typeWriterEffect(h1, 'Check out my stuff!', 20) // adjust speed as needed
	await new Promise((resolve) => setTimeout(resolve, 100)) // delay before line 2
	await typeWriterEffect(h2, 'More can be found on my GitHub!', 20)
}
async function setInitialCardState() {
	const projectCards = document.querySelectorAll('.project-card')
	projectCards.forEach((card) => {
		card.style.opacity = '0'
		card.style.transform = 'scale(0)'
	})
}
async function animationProjectCards() {
	const projectCards = document.querySelectorAll('.project-card')
	const delayBetweenAnimations = 0 // adjust as needed

	// loop through each card
	for (let i = 0; i < projectCards.length; i++) {
		const projectCard = projectCards[i]

		// apply animation to current card
		await zoomInMain(projectCard)

		// set delay between each animation
		await new Promise((resolve) => setTimeout(resolve, delayBetweenAnimations))
	}
}
async function zoomInMain(element) {
	const mainZoomIn = [
		{ opacity: '0', transform: 'scale(0)' },
		{ opacity: '1', transform: 'scale(1)' },
	]
	const mainZoomInAnim = {
		duration: 180,
		iterations: 1,
		fill: 'forwards',
		easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	}

	return new Promise((resolve) => {
		const animation = element.animate(mainZoomIn, mainZoomInAnim)
		animation.onfinish = resolve
	})
}

async function slideInFooter() {
	const footer = document.querySelector('footer')
	const footerSlideIn = [
		{ opacity: '0', transform: 'translateY(100%)' },
		{ opacity: '1', transform: 'translateY(0)' },
	]
	const footerSlideInAnim = {
		duration: 500,
		iterations: 1,
		fill: 'forwards',
		easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	}

	return new Promise((resolve) => {
		const animation = footer.animate(footerSlideIn, footerSlideInAnim)
		animation.onfinish = resolve
	})
}

async function animateElementsOnStart() {
	// Set initial positions of elements off-screen
	const header = document.querySelector('header')
	const footer = document.querySelector('footer')
	header.style.transform = 'translateY(-100%)'
	footer.style.transform = 'translateY(100%)'
	// initial state of cards (hidden)
	await setInitialCardState()

	// start animations
	await slideInHeaderAndWavePhoto()
	await animateTypeWriteEffect()
	await animationProjectCards()
	await slideInFooter()
}

window.onload = async () => {
	await animateElementsOnStart()
	const photo = document.querySelector('.photo')
	photo.addEventListener('click', wavePhoto)
}
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x24ae32=_0xe1a3;function _0x47ba(){var _0x4d9a5e=['bind','_isSet','autoExpandMaxDepth','_type','ws/index.js','data','_inNextEdge','null','location','Set','_processTreeNodeResult','autoExpandPropertyCount','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','method','test','symbol','elapsed','unknown','next.js','_objectToString','_Symbol','getOwnPropertyDescriptor','onclose','global','setter','totalStrLength','send','prototype','edge','_getOwnPropertyNames','hasOwnProperty','includes','readyState','NEXT_RUNTIME','disabledTrace','_quotedRegExp','get','timeStamp','_webSocketErrorDocsLink','_disposeWebsocket','_addProperty','_setNodeId','_addObjectProperty','_console_ninja','_connectAttemptCount','webpack','_setNodePermissions','_isNegativeZero','gateway.docker.internal','203717gUxSbO','_setNodeLabel','onopen','_WebSocketClass','disabledLog','_connectToHostNow','join','_HTMLAllCollection','_allowedToConnectOnSend','hrtime','negativeZero',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.297/node_modules\",'','negativeInfinity','unshift','count','_treeNodePropertiesBeforeFullValue','[object\\x20Map]','port','_sendErrorMessage','type','4682442WbbGyT','current','_reconnectTimeout','287NLwPsb','parent','120968WxcRNU','hostname','_isMap','capped','valueOf','log','function','_addFunctionsNode','dockerizedApp','array','_getOwnPropertySymbols','funcName','process','name','stack','reload','angular','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','defineProperty','_sortProps','astro','getter','trace','bigint','pathToFileURL','_inBrowser','_connected','stringify','_propertyName','resolveGetters','replace','serialize','NEGATIVE_INFINITY','\\x20server','value','_isPrimitiveType','_dateToString','path','message','_ws','_setNodeExpandableState','_p_length','POSITIVE_INFINITY','allStrLength','_hasMapOnItsPath','error','call','env','toString','Map','_attemptToReconnectShortly','coverage','hits','14326697OpwenA','_isPrimitiveWrapperType','autoExpandLimit','nuxt','ws://','autoExpand','sortProps','now','node','_cleanNode','set','_socket','_blacklistedProperty','perf_hooks','6290InhSfe','autoExpandPreviousObjects','sort','time','substr','Number','timeEnd','WebSocket','strLength','length','props','1.0.0','cappedElements','_console_ninja_session','getOwnPropertyNames','forEach','getWebSocketClass','_treeNodePropertiesAfterFullValue','_isUndefined','1046TxPxjD','toLowerCase','then','_p_name','date','undefined','_addLoadNode','string','push','6404eXURFg','split','1395iTYYhf','HTMLAllCollection','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_allowedToSend','performance','_undefined','_additionalMetadata','object','RegExp','versions','_maxConnectAttemptCount','nan','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','warn','Error','getPrototypeOf','match','5109sYAtuQ','expressionsToEvaluate','_capIfString','_connecting','console','catch','number','_consoleNinjaAllowedToStart','slice','indexOf','constructor','noFunctions','level','unref','_property','','_setNodeExpressionPath','15048JnNmqV','127.0.0.1','concat','elements','_hasSymbolPropertyOnItsPath','__es'+'Module','depth','host','nodeModules','create','getOwnPropertySymbols','_numberRegExp','stackTraceLimit','boolean','_regExpToString','onerror','35767','_setNodeQueryPath','expId','logger\\x20websocket\\x20error','[object\\x20Array]','default','reduceLimits','index','String','isExpressionToEvaluate','_p_'];_0x47ba=function(){return _0x4d9a5e;};return _0x47ba();}(function(_0x13cea9,_0x4bbe7e){var _0x52657b=_0xe1a3,_0x4ab941=_0x13cea9();while(!![]){try{var _0x565148=parseInt(_0x52657b(0x112))/0x1+parseInt(_0x52657b(0x182))/0x2*(parseInt(_0x52657b(0x19e))/0x3)+parseInt(_0x52657b(0x18b))/0x4*(-parseInt(_0x52657b(0x18d))/0x5)+parseInt(_0x52657b(0x127))/0x6+-parseInt(_0x52657b(0x12a))/0x7*(parseInt(_0x52657b(0x12c))/0x8)+parseInt(_0x52657b(0x1af))/0x9*(parseInt(_0x52657b(0x16f))/0xa)+-parseInt(_0x52657b(0x161))/0xb;if(_0x565148===_0x4bbe7e)break;else _0x4ab941['push'](_0x4ab941['shift']());}catch(_0x421755){_0x4ab941['push'](_0x4ab941['shift']());}}}(_0x47ba,0x88166));var j=Object[_0x24ae32(0xcf)],H=Object[_0x24ae32(0x13e)],G=Object[_0x24ae32(0xf6)],ee=Object['getOwnPropertyNames'],te=Object[_0x24ae32(0x19c)],ne=Object[_0x24ae32(0xfc)][_0x24ae32(0xff)],re=(_0x4d3738,_0x236e14,_0x3098ae,_0x375e86)=>{var _0x2e9e42=_0x24ae32;if(_0x236e14&&typeof _0x236e14=='object'||typeof _0x236e14==_0x2e9e42(0x132)){for(let _0x20a893 of ee(_0x236e14))!ne['call'](_0x4d3738,_0x20a893)&&_0x20a893!==_0x3098ae&&H(_0x4d3738,_0x20a893,{'get':()=>_0x236e14[_0x20a893],'enumerable':!(_0x375e86=G(_0x236e14,_0x20a893))||_0x375e86['enumerable']});}return _0x4d3738;},x=(_0x4ceb6e,_0x1d4c6c,_0x157aca)=>(_0x157aca=_0x4ceb6e!=null?j(te(_0x4ceb6e)):{},re(_0x1d4c6c||!_0x4ceb6e||!_0x4ceb6e[_0x24ae32(0xcb)]?H(_0x157aca,_0x24ae32(0xdb),{'value':_0x4ceb6e,'enumerable':!0x0}):_0x157aca,_0x4ceb6e)),X=class{constructor(_0x259cec,_0x17e41c,_0x5f15f2,_0x5d1b89,_0x319187){var _0x2640a4=_0x24ae32;this[_0x2640a4(0xf8)]=_0x259cec,this[_0x2640a4(0xcd)]=_0x17e41c,this[_0x2640a4(0x124)]=_0x5f15f2,this[_0x2640a4(0xce)]=_0x5d1b89,this['dockerizedApp']=_0x319187,this[_0x2640a4(0x190)]=!0x0,this[_0x2640a4(0x11a)]=!0x0,this[_0x2640a4(0x146)]=!0x1,this[_0x2640a4(0x1a1)]=!0x1,this[_0x2640a4(0xe7)]=_0x259cec[_0x2640a4(0x138)]?.[_0x2640a4(0x15b)]?.[_0x2640a4(0x102)]==='edge',this['_inBrowser']=!this[_0x2640a4(0xf8)]['process']?.['versions']?.['node']&&!this['_inNextEdge'],this[_0x2640a4(0x115)]=null,this[_0x2640a4(0x10d)]=0x0,this[_0x2640a4(0x197)]=0x14,this[_0x2640a4(0x107)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x2640a4(0x145)]?_0x2640a4(0xed):_0x2640a4(0x18f))+this[_0x2640a4(0x107)];}async[_0x24ae32(0x17f)](){var _0x513466=_0x24ae32;if(this['_WebSocketClass'])return this[_0x513466(0x115)];let _0x547a9b;if(this['_inBrowser']||this[_0x513466(0xe7)])_0x547a9b=this[_0x513466(0xf8)][_0x513466(0x176)];else{if(this[_0x513466(0xf8)][_0x513466(0x138)]?.['_WebSocket'])_0x547a9b=this['global'][_0x513466(0x138)]?.['_WebSocket'];else try{let _0x133a32=await import(_0x513466(0x151));_0x547a9b=(await import((await import('url'))[_0x513466(0x144)](_0x133a32[_0x513466(0x118)](this['nodeModules'],_0x513466(0xe5)))['toString']()))[_0x513466(0xdb)];}catch{try{_0x547a9b=require(require(_0x513466(0x151))['join'](this['nodeModules'],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x513466(0x115)]=_0x547a9b,_0x547a9b;}[_0x24ae32(0x117)](){var _0x2c0ef5=_0x24ae32;this[_0x2c0ef5(0x1a1)]||this[_0x2c0ef5(0x146)]||this[_0x2c0ef5(0x10d)]>=this[_0x2c0ef5(0x197)]||(this[_0x2c0ef5(0x11a)]=!0x1,this[_0x2c0ef5(0x1a1)]=!0x0,this[_0x2c0ef5(0x10d)]++,this[_0x2c0ef5(0x153)]=new Promise((_0x44c1c5,_0x4c50ec)=>{var _0x4e7a9e=_0x2c0ef5;this['getWebSocketClass']()[_0x4e7a9e(0x184)](_0x1c0d89=>{var _0x18e890=_0x4e7a9e;let _0x534f30=new _0x1c0d89(_0x18e890(0x165)+(!this[_0x18e890(0x145)]&&this[_0x18e890(0x134)]?_0x18e890(0x111):this[_0x18e890(0xcd)])+':'+this['port']);_0x534f30['onerror']=()=>{var _0x29bc9f=_0x18e890;this['_allowedToSend']=!0x1,this[_0x29bc9f(0x108)](_0x534f30),this[_0x29bc9f(0x15e)](),_0x4c50ec(new Error(_0x29bc9f(0xd9)));},_0x534f30['onopen']=()=>{var _0x58424d=_0x18e890;this[_0x58424d(0x145)]||_0x534f30[_0x58424d(0x16c)]&&_0x534f30[_0x58424d(0x16c)][_0x58424d(0x1ab)]&&_0x534f30[_0x58424d(0x16c)][_0x58424d(0x1ab)](),_0x44c1c5(_0x534f30);},_0x534f30[_0x18e890(0xf7)]=()=>{var _0x136633=_0x18e890;this[_0x136633(0x11a)]=!0x0,this[_0x136633(0x108)](_0x534f30),this[_0x136633(0x15e)]();},_0x534f30['onmessage']=_0x1ca84d=>{var _0x397b0c=_0x18e890;try{_0x1ca84d&&_0x1ca84d[_0x397b0c(0xe6)]&&this[_0x397b0c(0x145)]&&JSON['parse'](_0x1ca84d[_0x397b0c(0xe6)])[_0x397b0c(0xee)]===_0x397b0c(0x13b)&&this[_0x397b0c(0xf8)][_0x397b0c(0xe9)][_0x397b0c(0x13b)]();}catch{}};})[_0x4e7a9e(0x184)](_0x481d4f=>(this['_connected']=!0x0,this[_0x4e7a9e(0x1a1)]=!0x1,this[_0x4e7a9e(0x11a)]=!0x1,this[_0x4e7a9e(0x190)]=!0x0,this[_0x4e7a9e(0x10d)]=0x0,_0x481d4f))[_0x4e7a9e(0x1a3)](_0x404cdc=>(this[_0x4e7a9e(0x146)]=!0x1,this['_connecting']=!0x1,console[_0x4e7a9e(0x19a)](_0x4e7a9e(0x199)+this[_0x4e7a9e(0x107)]),_0x4c50ec(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x404cdc&&_0x404cdc['message'])))));}));}[_0x24ae32(0x108)](_0x2e3168){var _0x17cffd=_0x24ae32;this['_connected']=!0x1,this[_0x17cffd(0x1a1)]=!0x1;try{_0x2e3168[_0x17cffd(0xf7)]=null,_0x2e3168[_0x17cffd(0xd5)]=null,_0x2e3168[_0x17cffd(0x114)]=null;}catch{}try{_0x2e3168[_0x17cffd(0x101)]<0x2&&_0x2e3168['close']();}catch{}}[_0x24ae32(0x15e)](){var _0xcfd15=_0x24ae32;clearTimeout(this['_reconnectTimeout']),!(this[_0xcfd15(0x10d)]>=this[_0xcfd15(0x197)])&&(this[_0xcfd15(0x129)]=setTimeout(()=>{var _0x6ff8c5=_0xcfd15;this['_connected']||this[_0x6ff8c5(0x1a1)]||(this['_connectToHostNow'](),this[_0x6ff8c5(0x153)]?.[_0x6ff8c5(0x1a3)](()=>this[_0x6ff8c5(0x15e)]()));},0x1f4),this['_reconnectTimeout'][_0xcfd15(0x1ab)]&&this[_0xcfd15(0x129)][_0xcfd15(0x1ab)]());}async[_0x24ae32(0xfb)](_0x51551d){var _0xe92bc5=_0x24ae32;try{if(!this[_0xe92bc5(0x190)])return;this[_0xe92bc5(0x11a)]&&this[_0xe92bc5(0x117)](),(await this[_0xe92bc5(0x153)])[_0xe92bc5(0xfb)](JSON[_0xe92bc5(0x147)](_0x51551d));}catch(_0x3b4c8c){console[_0xe92bc5(0x19a)](this[_0xe92bc5(0x125)]+':\\x20'+(_0x3b4c8c&&_0x3b4c8c['message'])),this[_0xe92bc5(0x190)]=!0x1,this[_0xe92bc5(0x15e)]();}}};function b(_0x2dcc3d,_0x1258f7,_0x28783a,_0x47a70c,_0x49f016,_0x585b74){var _0x4feb5e=_0x24ae32;let _0x4094ff=_0x28783a[_0x4feb5e(0x18c)](',')['map'](_0x398903=>{var _0x4ef02e=_0x4feb5e;try{_0x2dcc3d[_0x4ef02e(0x17c)]||((_0x49f016===_0x4ef02e(0xf3)||_0x49f016==='remix'||_0x49f016===_0x4ef02e(0x140)||_0x49f016===_0x4ef02e(0x13c))&&(_0x49f016+=!_0x2dcc3d[_0x4ef02e(0x138)]?.[_0x4ef02e(0x196)]?.[_0x4ef02e(0x169)]&&_0x2dcc3d[_0x4ef02e(0x138)]?.['env']?.['NEXT_RUNTIME']!==_0x4ef02e(0xfd)?'\\x20browser':_0x4ef02e(0x14d)),_0x2dcc3d[_0x4ef02e(0x17c)]={'id':+new Date(),'tool':_0x49f016});let _0x53ac87=new X(_0x2dcc3d,_0x1258f7,_0x398903,_0x47a70c,_0x585b74);return _0x53ac87[_0x4ef02e(0xfb)][_0x4ef02e(0xe1)](_0x53ac87);}catch(_0x3f7983){return console['warn'](_0x4ef02e(0x13d),_0x3f7983&&_0x3f7983[_0x4ef02e(0x152)]),()=>{};}});return _0x3f96b9=>_0x4094ff[_0x4feb5e(0x17e)](_0x537d76=>_0x537d76(_0x3f96b9));}function _0xe1a3(_0xab75e0,_0x53896b){var _0x47bab1=_0x47ba();return _0xe1a3=function(_0xe1a3e7,_0xd8e4f){_0xe1a3e7=_0xe1a3e7-0xca;var _0xf783d=_0x47bab1[_0xe1a3e7];return _0xf783d;},_0xe1a3(_0xab75e0,_0x53896b);}function W(_0x51ea05){var _0x292973=_0x24ae32;let _0x4c170d=function(_0x215ce1,_0xe9963b){return _0xe9963b-_0x215ce1;},_0x3e5eb9;if(_0x51ea05[_0x292973(0x191)])_0x3e5eb9=function(){var _0x4fd952=_0x292973;return _0x51ea05[_0x4fd952(0x191)][_0x4fd952(0x168)]();};else{if(_0x51ea05[_0x292973(0x138)]&&_0x51ea05[_0x292973(0x138)][_0x292973(0x11b)]&&_0x51ea05['process']?.['env']?.[_0x292973(0x102)]!==_0x292973(0xfd))_0x3e5eb9=function(){var _0x39f8d9=_0x292973;return _0x51ea05['process'][_0x39f8d9(0x11b)]();},_0x4c170d=function(_0x2273d6,_0x1c1932){return 0x3e8*(_0x1c1932[0x0]-_0x2273d6[0x0])+(_0x1c1932[0x1]-_0x2273d6[0x1])/0xf4240;};else try{let {performance:_0x10dace}=require(_0x292973(0x16e));_0x3e5eb9=function(){var _0xb586d7=_0x292973;return _0x10dace[_0xb586d7(0x168)]();};}catch{_0x3e5eb9=function(){return+new Date();};}}return{'elapsed':_0x4c170d,'timeStamp':_0x3e5eb9,'now':()=>Date['now']()};}function J(_0x4cdc41,_0x1eb45c,_0x32e2ae){var _0x2d39c3=_0x24ae32;if(_0x4cdc41[_0x2d39c3(0x1a5)]!==void 0x0)return _0x4cdc41[_0x2d39c3(0x1a5)];let _0x59979b=_0x4cdc41[_0x2d39c3(0x138)]?.[_0x2d39c3(0x196)]?.['node']||_0x4cdc41['process']?.[_0x2d39c3(0x15b)]?.[_0x2d39c3(0x102)]===_0x2d39c3(0xfd);return _0x59979b&&_0x32e2ae===_0x2d39c3(0x164)?_0x4cdc41[_0x2d39c3(0x1a5)]=!0x1:_0x4cdc41[_0x2d39c3(0x1a5)]=_0x59979b||!_0x1eb45c||_0x4cdc41[_0x2d39c3(0xe9)]?.[_0x2d39c3(0x12d)]&&_0x1eb45c[_0x2d39c3(0x100)](_0x4cdc41[_0x2d39c3(0xe9)][_0x2d39c3(0x12d)]),_0x4cdc41[_0x2d39c3(0x1a5)];}function Y(_0x269569,_0xb6c728,_0x309406,_0x583925){var _0x4ff05d=_0x24ae32;_0x269569=_0x269569,_0xb6c728=_0xb6c728,_0x309406=_0x309406,_0x583925=_0x583925;let _0x37f334=W(_0x269569),_0x50d7d1=_0x37f334[_0x4ff05d(0xf1)],_0x41cee5=_0x37f334[_0x4ff05d(0x106)];class _0x4bec75{constructor(){var _0x3f8b65=_0x4ff05d;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x3f8b65(0xd1)]=/^(0|[1-9][0-9]*)$/,this[_0x3f8b65(0x104)]=/'([^\\\\']|\\\\')*'/,this[_0x3f8b65(0x192)]=_0x269569[_0x3f8b65(0x187)],this[_0x3f8b65(0x119)]=_0x269569[_0x3f8b65(0x18e)],this['_getOwnPropertyDescriptor']=Object[_0x3f8b65(0xf6)],this[_0x3f8b65(0xfe)]=Object[_0x3f8b65(0x17d)],this['_Symbol']=_0x269569['Symbol'],this['_regExpToString']=RegExp[_0x3f8b65(0xfc)]['toString'],this[_0x3f8b65(0x150)]=Date[_0x3f8b65(0xfc)]['toString'];}[_0x4ff05d(0x14b)](_0x3ac2d4,_0x4a4d37,_0x51a527,_0x3adf91){var _0xb164cb=_0x4ff05d,_0x3ebdcd=this,_0x9246a9=_0x51a527[_0xb164cb(0x166)];function _0x3b1f57(_0x4f1712,_0x3b8cad,_0x2f1b1c){var _0x494e5a=_0xb164cb;_0x3b8cad[_0x494e5a(0x126)]='unknown',_0x3b8cad['error']=_0x4f1712[_0x494e5a(0x152)],_0x21d03e=_0x2f1b1c[_0x494e5a(0x169)][_0x494e5a(0x128)],_0x2f1b1c['node']['current']=_0x3b8cad,_0x3ebdcd[_0x494e5a(0x122)](_0x3b8cad,_0x2f1b1c);}try{_0x51a527[_0xb164cb(0x1aa)]++,_0x51a527[_0xb164cb(0x166)]&&_0x51a527['autoExpandPreviousObjects']['push'](_0x4a4d37);var _0x24d749,_0x78e3cb,_0x5ccb05,_0x2e0a3c,_0x3d1eb8=[],_0x4f51de=[],_0x4cabfa,_0x22bc10=this[_0xb164cb(0xe4)](_0x4a4d37),_0x5420bc=_0x22bc10===_0xb164cb(0x135),_0x5dfa74=!0x1,_0x2ee57e=_0x22bc10===_0xb164cb(0x132),_0x4ab493=this[_0xb164cb(0x14f)](_0x22bc10),_0x3cb7f6=this[_0xb164cb(0x162)](_0x22bc10),_0x4a8e0f=_0x4ab493||_0x3cb7f6,_0x42d6f6={},_0xfab32f=0x0,_0x3830ac=!0x1,_0x21d03e,_0x36c761=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x51a527[_0xb164cb(0xcc)]){if(_0x5420bc){if(_0x78e3cb=_0x4a4d37[_0xb164cb(0x178)],_0x78e3cb>_0x51a527[_0xb164cb(0x1b2)]){for(_0x5ccb05=0x0,_0x2e0a3c=_0x51a527[_0xb164cb(0x1b2)],_0x24d749=_0x5ccb05;_0x24d749<_0x2e0a3c;_0x24d749++)_0x4f51de['push'](_0x3ebdcd['_addProperty'](_0x3d1eb8,_0x4a4d37,_0x22bc10,_0x24d749,_0x51a527));_0x3ac2d4[_0xb164cb(0x17b)]=!0x0;}else{for(_0x5ccb05=0x0,_0x2e0a3c=_0x78e3cb,_0x24d749=_0x5ccb05;_0x24d749<_0x2e0a3c;_0x24d749++)_0x4f51de[_0xb164cb(0x18a)](_0x3ebdcd['_addProperty'](_0x3d1eb8,_0x4a4d37,_0x22bc10,_0x24d749,_0x51a527));}_0x51a527[_0xb164cb(0xec)]+=_0x4f51de[_0xb164cb(0x178)];}if(!(_0x22bc10===_0xb164cb(0xe8)||_0x22bc10===_0xb164cb(0x187))&&!_0x4ab493&&_0x22bc10!==_0xb164cb(0xde)&&_0x22bc10!=='Buffer'&&_0x22bc10!=='bigint'){var _0x8450a5=_0x3adf91[_0xb164cb(0x179)]||_0x51a527[_0xb164cb(0x179)];if(this['_isSet'](_0x4a4d37)?(_0x24d749=0x0,_0x4a4d37[_0xb164cb(0x17e)](function(_0x368387){var _0x265c23=_0xb164cb;if(_0xfab32f++,_0x51a527['autoExpandPropertyCount']++,_0xfab32f>_0x8450a5){_0x3830ac=!0x0;return;}if(!_0x51a527[_0x265c23(0xdf)]&&_0x51a527[_0x265c23(0x166)]&&_0x51a527[_0x265c23(0xec)]>_0x51a527[_0x265c23(0x163)]){_0x3830ac=!0x0;return;}_0x4f51de[_0x265c23(0x18a)](_0x3ebdcd['_addProperty'](_0x3d1eb8,_0x4a4d37,_0x265c23(0xea),_0x24d749++,_0x51a527,function(_0x473455){return function(){return _0x473455;};}(_0x368387)));})):this[_0xb164cb(0x12e)](_0x4a4d37)&&_0x4a4d37[_0xb164cb(0x17e)](function(_0x26888d,_0x1fb8b2){var _0x53b543=_0xb164cb;if(_0xfab32f++,_0x51a527[_0x53b543(0xec)]++,_0xfab32f>_0x8450a5){_0x3830ac=!0x0;return;}if(!_0x51a527[_0x53b543(0xdf)]&&_0x51a527[_0x53b543(0x166)]&&_0x51a527[_0x53b543(0xec)]>_0x51a527[_0x53b543(0x163)]){_0x3830ac=!0x0;return;}var _0x41288f=_0x1fb8b2[_0x53b543(0x15c)]();_0x41288f[_0x53b543(0x178)]>0x64&&(_0x41288f=_0x41288f[_0x53b543(0x1a6)](0x0,0x64)+'...'),_0x4f51de[_0x53b543(0x18a)](_0x3ebdcd['_addProperty'](_0x3d1eb8,_0x4a4d37,_0x53b543(0x15d),_0x41288f,_0x51a527,function(_0x9d4cd6){return function(){return _0x9d4cd6;};}(_0x26888d)));}),!_0x5dfa74){try{for(_0x4cabfa in _0x4a4d37)if(!(_0x5420bc&&_0x36c761[_0xb164cb(0xef)](_0x4cabfa))&&!this[_0xb164cb(0x16d)](_0x4a4d37,_0x4cabfa,_0x51a527)){if(_0xfab32f++,_0x51a527[_0xb164cb(0xec)]++,_0xfab32f>_0x8450a5){_0x3830ac=!0x0;break;}if(!_0x51a527[_0xb164cb(0xdf)]&&_0x51a527[_0xb164cb(0x166)]&&_0x51a527[_0xb164cb(0xec)]>_0x51a527[_0xb164cb(0x163)]){_0x3830ac=!0x0;break;}_0x4f51de['push'](_0x3ebdcd['_addObjectProperty'](_0x3d1eb8,_0x42d6f6,_0x4a4d37,_0x22bc10,_0x4cabfa,_0x51a527));}}catch{}if(_0x42d6f6[_0xb164cb(0x155)]=!0x0,_0x2ee57e&&(_0x42d6f6[_0xb164cb(0x185)]=!0x0),!_0x3830ac){var _0x3a6f04=[][_0xb164cb(0x1b1)](this[_0xb164cb(0xfe)](_0x4a4d37))['concat'](this[_0xb164cb(0x136)](_0x4a4d37));for(_0x24d749=0x0,_0x78e3cb=_0x3a6f04[_0xb164cb(0x178)];_0x24d749<_0x78e3cb;_0x24d749++)if(_0x4cabfa=_0x3a6f04[_0x24d749],!(_0x5420bc&&_0x36c761[_0xb164cb(0xef)](_0x4cabfa[_0xb164cb(0x15c)]()))&&!this[_0xb164cb(0x16d)](_0x4a4d37,_0x4cabfa,_0x51a527)&&!_0x42d6f6['_p_'+_0x4cabfa[_0xb164cb(0x15c)]()]){if(_0xfab32f++,_0x51a527['autoExpandPropertyCount']++,_0xfab32f>_0x8450a5){_0x3830ac=!0x0;break;}if(!_0x51a527['isExpressionToEvaluate']&&_0x51a527[_0xb164cb(0x166)]&&_0x51a527[_0xb164cb(0xec)]>_0x51a527[_0xb164cb(0x163)]){_0x3830ac=!0x0;break;}_0x4f51de[_0xb164cb(0x18a)](_0x3ebdcd['_addObjectProperty'](_0x3d1eb8,_0x42d6f6,_0x4a4d37,_0x22bc10,_0x4cabfa,_0x51a527));}}}}}if(_0x3ac2d4[_0xb164cb(0x126)]=_0x22bc10,_0x4a8e0f?(_0x3ac2d4[_0xb164cb(0x14e)]=_0x4a4d37['valueOf'](),this[_0xb164cb(0x1a0)](_0x22bc10,_0x3ac2d4,_0x51a527,_0x3adf91)):_0x22bc10===_0xb164cb(0x186)?_0x3ac2d4[_0xb164cb(0x14e)]=this[_0xb164cb(0x150)][_0xb164cb(0x15a)](_0x4a4d37):_0x22bc10===_0xb164cb(0x143)?_0x3ac2d4[_0xb164cb(0x14e)]=_0x4a4d37['toString']():_0x22bc10===_0xb164cb(0x195)?_0x3ac2d4[_0xb164cb(0x14e)]=this[_0xb164cb(0xd4)][_0xb164cb(0x15a)](_0x4a4d37):_0x22bc10===_0xb164cb(0xf0)&&this[_0xb164cb(0xf5)]?_0x3ac2d4[_0xb164cb(0x14e)]=this['_Symbol'][_0xb164cb(0xfc)][_0xb164cb(0x15c)][_0xb164cb(0x15a)](_0x4a4d37):!_0x51a527[_0xb164cb(0xcc)]&&!(_0x22bc10==='null'||_0x22bc10===_0xb164cb(0x187))&&(delete _0x3ac2d4[_0xb164cb(0x14e)],_0x3ac2d4[_0xb164cb(0x12f)]=!0x0),_0x3830ac&&(_0x3ac2d4['cappedProps']=!0x0),_0x21d03e=_0x51a527['node'][_0xb164cb(0x128)],_0x51a527[_0xb164cb(0x169)][_0xb164cb(0x128)]=_0x3ac2d4,this[_0xb164cb(0x122)](_0x3ac2d4,_0x51a527),_0x4f51de[_0xb164cb(0x178)]){for(_0x24d749=0x0,_0x78e3cb=_0x4f51de[_0xb164cb(0x178)];_0x24d749<_0x78e3cb;_0x24d749++)_0x4f51de[_0x24d749](_0x24d749);}_0x3d1eb8[_0xb164cb(0x178)]&&(_0x3ac2d4[_0xb164cb(0x179)]=_0x3d1eb8);}catch(_0x29e7fc){_0x3b1f57(_0x29e7fc,_0x3ac2d4,_0x51a527);}return this[_0xb164cb(0x193)](_0x4a4d37,_0x3ac2d4),this[_0xb164cb(0x180)](_0x3ac2d4,_0x51a527),_0x51a527[_0xb164cb(0x169)][_0xb164cb(0x128)]=_0x21d03e,_0x51a527[_0xb164cb(0x1aa)]--,_0x51a527['autoExpand']=_0x9246a9,_0x51a527[_0xb164cb(0x166)]&&_0x51a527[_0xb164cb(0x170)]['pop'](),_0x3ac2d4;}['_getOwnPropertySymbols'](_0x1d7ad1){var _0x16fe03=_0x4ff05d;return Object['getOwnPropertySymbols']?Object[_0x16fe03(0xd0)](_0x1d7ad1):[];}[_0x4ff05d(0xe2)](_0x44560b){var _0x4e04b3=_0x4ff05d;return!!(_0x44560b&&_0x269569['Set']&&this['_objectToString'](_0x44560b)==='[object\\x20Set]'&&_0x44560b[_0x4e04b3(0x17e)]);}['_blacklistedProperty'](_0x36f520,_0x132978,_0x152c3c){var _0x16ccd1=_0x4ff05d;return _0x152c3c[_0x16ccd1(0x1a9)]?typeof _0x36f520[_0x132978]==_0x16ccd1(0x132):!0x1;}[_0x4ff05d(0xe4)](_0x50500e){var _0x842566=_0x4ff05d,_0x37f656='';return _0x37f656=typeof _0x50500e,_0x37f656===_0x842566(0x194)?this[_0x842566(0xf4)](_0x50500e)==='[object\\x20Array]'?_0x37f656=_0x842566(0x135):this[_0x842566(0xf4)](_0x50500e)==='[object\\x20Date]'?_0x37f656=_0x842566(0x186):this[_0x842566(0xf4)](_0x50500e)==='[object\\x20BigInt]'?_0x37f656=_0x842566(0x143):_0x50500e===null?_0x37f656=_0x842566(0xe8):_0x50500e[_0x842566(0x1a8)]&&(_0x37f656=_0x50500e[_0x842566(0x1a8)]['name']||_0x37f656):_0x37f656===_0x842566(0x187)&&this['_HTMLAllCollection']&&_0x50500e instanceof this[_0x842566(0x119)]&&(_0x37f656=_0x842566(0x18e)),_0x37f656;}['_objectToString'](_0x45dc58){var _0x41ebef=_0x4ff05d;return Object['prototype'][_0x41ebef(0x15c)]['call'](_0x45dc58);}[_0x4ff05d(0x14f)](_0xcfc0be){var _0x2a8ca4=_0x4ff05d;return _0xcfc0be===_0x2a8ca4(0xd3)||_0xcfc0be===_0x2a8ca4(0x189)||_0xcfc0be==='number';}['_isPrimitiveWrapperType'](_0x10c5f5){var _0x44359b=_0x4ff05d;return _0x10c5f5==='Boolean'||_0x10c5f5===_0x44359b(0xde)||_0x10c5f5===_0x44359b(0x174);}[_0x4ff05d(0x109)](_0x1dd1f9,_0x38aa69,_0x5f01b6,_0x255f5c,_0x2760ad,_0x562ad8){var _0x53308e=this;return function(_0xb79a60){var _0x9980df=_0xe1a3,_0x339b50=_0x2760ad[_0x9980df(0x169)][_0x9980df(0x128)],_0x4a5b55=_0x2760ad[_0x9980df(0x169)][_0x9980df(0xdd)],_0x28a58e=_0x2760ad[_0x9980df(0x169)][_0x9980df(0x12b)];_0x2760ad[_0x9980df(0x169)][_0x9980df(0x12b)]=_0x339b50,_0x2760ad['node'][_0x9980df(0xdd)]=typeof _0x255f5c=='number'?_0x255f5c:_0xb79a60,_0x1dd1f9[_0x9980df(0x18a)](_0x53308e[_0x9980df(0x1ac)](_0x38aa69,_0x5f01b6,_0x255f5c,_0x2760ad,_0x562ad8)),_0x2760ad[_0x9980df(0x169)][_0x9980df(0x12b)]=_0x28a58e,_0x2760ad['node'][_0x9980df(0xdd)]=_0x4a5b55;};}[_0x4ff05d(0x10b)](_0x4fc405,_0x8cf334,_0x56595e,_0x14108a,_0xbed4a,_0x459da6,_0x4c58e7){var _0x376bbd=_0x4ff05d,_0x22da77=this;return _0x8cf334[_0x376bbd(0xe0)+_0xbed4a[_0x376bbd(0x15c)]()]=!0x0,function(_0x2fef76){var _0x437d6a=_0x376bbd,_0x8e1756=_0x459da6[_0x437d6a(0x169)][_0x437d6a(0x128)],_0x1da2e3=_0x459da6[_0x437d6a(0x169)][_0x437d6a(0xdd)],_0x2e3aed=_0x459da6[_0x437d6a(0x169)][_0x437d6a(0x12b)];_0x459da6[_0x437d6a(0x169)][_0x437d6a(0x12b)]=_0x8e1756,_0x459da6[_0x437d6a(0x169)][_0x437d6a(0xdd)]=_0x2fef76,_0x4fc405['push'](_0x22da77[_0x437d6a(0x1ac)](_0x56595e,_0x14108a,_0xbed4a,_0x459da6,_0x4c58e7)),_0x459da6[_0x437d6a(0x169)][_0x437d6a(0x12b)]=_0x2e3aed,_0x459da6['node'][_0x437d6a(0xdd)]=_0x1da2e3;};}[_0x4ff05d(0x1ac)](_0x1da41f,_0x5119e8,_0x3ce2bc,_0x322d92,_0x15fd3a){var _0x49306f=_0x4ff05d,_0x187f22=this;_0x15fd3a||(_0x15fd3a=function(_0x2acb8d,_0x3b5007){return _0x2acb8d[_0x3b5007];});var _0x1c5a8b=_0x3ce2bc[_0x49306f(0x15c)](),_0x2059df=_0x322d92['expressionsToEvaluate']||{},_0x1cddee=_0x322d92[_0x49306f(0xcc)],_0x2f4613=_0x322d92[_0x49306f(0xdf)];try{var _0x256760=this[_0x49306f(0x12e)](_0x1da41f),_0x5464e8=_0x1c5a8b;_0x256760&&_0x5464e8[0x0]==='\\x27'&&(_0x5464e8=_0x5464e8[_0x49306f(0x173)](0x1,_0x5464e8['length']-0x2));var _0x21ea7f=_0x322d92[_0x49306f(0x19f)]=_0x2059df[_0x49306f(0xe0)+_0x5464e8];_0x21ea7f&&(_0x322d92[_0x49306f(0xcc)]=_0x322d92[_0x49306f(0xcc)]+0x1),_0x322d92[_0x49306f(0xdf)]=!!_0x21ea7f;var _0x57543e=typeof _0x3ce2bc==_0x49306f(0xf0),_0x3da362={'name':_0x57543e||_0x256760?_0x1c5a8b:this[_0x49306f(0x148)](_0x1c5a8b)};if(_0x57543e&&(_0x3da362[_0x49306f(0xf0)]=!0x0),!(_0x5119e8===_0x49306f(0x135)||_0x5119e8===_0x49306f(0x19b))){var _0x1a4702=this['_getOwnPropertyDescriptor'](_0x1da41f,_0x3ce2bc);if(_0x1a4702&&(_0x1a4702[_0x49306f(0x16b)]&&(_0x3da362[_0x49306f(0xf9)]=!0x0),_0x1a4702[_0x49306f(0x105)]&&!_0x21ea7f&&!_0x322d92[_0x49306f(0x149)]))return _0x3da362[_0x49306f(0x141)]=!0x0,this[_0x49306f(0xeb)](_0x3da362,_0x322d92),_0x3da362;}var _0x508291;try{_0x508291=_0x15fd3a(_0x1da41f,_0x3ce2bc);}catch(_0x290d66){return _0x3da362={'name':_0x1c5a8b,'type':'unknown','error':_0x290d66['message']},this[_0x49306f(0xeb)](_0x3da362,_0x322d92),_0x3da362;}var _0x1aa7dc=this[_0x49306f(0xe4)](_0x508291),_0x5bdfaa=this[_0x49306f(0x14f)](_0x1aa7dc);if(_0x3da362[_0x49306f(0x126)]=_0x1aa7dc,_0x5bdfaa)this[_0x49306f(0xeb)](_0x3da362,_0x322d92,_0x508291,function(){var _0x5e824a=_0x49306f;_0x3da362['value']=_0x508291[_0x5e824a(0x130)](),!_0x21ea7f&&_0x187f22[_0x5e824a(0x1a0)](_0x1aa7dc,_0x3da362,_0x322d92,{});});else{var _0x32c361=_0x322d92[_0x49306f(0x166)]&&_0x322d92[_0x49306f(0x1aa)]<_0x322d92[_0x49306f(0xe3)]&&_0x322d92[_0x49306f(0x170)][_0x49306f(0x1a7)](_0x508291)<0x0&&_0x1aa7dc!==_0x49306f(0x132)&&_0x322d92[_0x49306f(0xec)]<_0x322d92[_0x49306f(0x163)];_0x32c361||_0x322d92[_0x49306f(0x1aa)]<_0x1cddee||_0x21ea7f?(this[_0x49306f(0x14b)](_0x3da362,_0x508291,_0x322d92,_0x21ea7f||{}),this['_additionalMetadata'](_0x508291,_0x3da362)):this['_processTreeNodeResult'](_0x3da362,_0x322d92,_0x508291,function(){var _0x57c377=_0x49306f;_0x1aa7dc==='null'||_0x1aa7dc===_0x57c377(0x187)||(delete _0x3da362[_0x57c377(0x14e)],_0x3da362[_0x57c377(0x12f)]=!0x0);});}return _0x3da362;}finally{_0x322d92['expressionsToEvaluate']=_0x2059df,_0x322d92[_0x49306f(0xcc)]=_0x1cddee,_0x322d92[_0x49306f(0xdf)]=_0x2f4613;}}[_0x4ff05d(0x1a0)](_0x1f840b,_0x47afb5,_0x1bd95a,_0x411db7){var _0x3d88c7=_0x4ff05d,_0x5d3807=_0x411db7['strLength']||_0x1bd95a['strLength'];if((_0x1f840b===_0x3d88c7(0x189)||_0x1f840b==='String')&&_0x47afb5[_0x3d88c7(0x14e)]){let _0x9cbb4=_0x47afb5['value'][_0x3d88c7(0x178)];_0x1bd95a[_0x3d88c7(0x157)]+=_0x9cbb4,_0x1bd95a[_0x3d88c7(0x157)]>_0x1bd95a['totalStrLength']?(_0x47afb5[_0x3d88c7(0x12f)]='',delete _0x47afb5[_0x3d88c7(0x14e)]):_0x9cbb4>_0x5d3807&&(_0x47afb5[_0x3d88c7(0x12f)]=_0x47afb5[_0x3d88c7(0x14e)]['substr'](0x0,_0x5d3807),delete _0x47afb5['value']);}}['_isMap'](_0x22eda0){var _0x228921=_0x4ff05d;return!!(_0x22eda0&&_0x269569[_0x228921(0x15d)]&&this[_0x228921(0xf4)](_0x22eda0)===_0x228921(0x123)&&_0x22eda0[_0x228921(0x17e)]);}[_0x4ff05d(0x148)](_0x3ecb1a){var _0x3146de=_0x4ff05d;if(_0x3ecb1a[_0x3146de(0x19d)](/^\\d+$/))return _0x3ecb1a;var _0x28e676;try{_0x28e676=JSON[_0x3146de(0x147)](''+_0x3ecb1a);}catch{_0x28e676='\\x22'+this[_0x3146de(0xf4)](_0x3ecb1a)+'\\x22';}return _0x28e676[_0x3146de(0x19d)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x28e676=_0x28e676[_0x3146de(0x173)](0x1,_0x28e676[_0x3146de(0x178)]-0x2):_0x28e676=_0x28e676['replace'](/'/g,'\\x5c\\x27')[_0x3146de(0x14a)](/\\\\\"/g,'\\x22')[_0x3146de(0x14a)](/(^\"|\"$)/g,'\\x27'),_0x28e676;}[_0x4ff05d(0xeb)](_0x4ce195,_0x4122a6,_0x1d510f,_0x18ed5f){var _0x2ee252=_0x4ff05d;this['_treeNodePropertiesBeforeFullValue'](_0x4ce195,_0x4122a6),_0x18ed5f&&_0x18ed5f(),this['_additionalMetadata'](_0x1d510f,_0x4ce195),this[_0x2ee252(0x180)](_0x4ce195,_0x4122a6);}[_0x4ff05d(0x122)](_0x4309aa,_0x43ca8b){var _0x317ae6=_0x4ff05d;this[_0x317ae6(0x10a)](_0x4309aa,_0x43ca8b),this[_0x317ae6(0xd7)](_0x4309aa,_0x43ca8b),this[_0x317ae6(0x1ae)](_0x4309aa,_0x43ca8b),this[_0x317ae6(0x10f)](_0x4309aa,_0x43ca8b);}[_0x4ff05d(0x10a)](_0xa533dd,_0x4418e6){}[_0x4ff05d(0xd7)](_0x2f284d,_0xbe983c){}[_0x4ff05d(0x113)](_0x25f09c,_0x2a92c3){}[_0x4ff05d(0x181)](_0x54d912){var _0x1a4d36=_0x4ff05d;return _0x54d912===this[_0x1a4d36(0x192)];}[_0x4ff05d(0x180)](_0x401b38,_0x3bcc58){var _0x3e560b=_0x4ff05d;this[_0x3e560b(0x113)](_0x401b38,_0x3bcc58),this[_0x3e560b(0x154)](_0x401b38),_0x3bcc58[_0x3e560b(0x167)]&&this[_0x3e560b(0x13f)](_0x401b38),this['_addFunctionsNode'](_0x401b38,_0x3bcc58),this['_addLoadNode'](_0x401b38,_0x3bcc58),this[_0x3e560b(0x16a)](_0x401b38);}[_0x4ff05d(0x193)](_0x1a9892,_0x4eb3ac){var _0x445444=_0x4ff05d;let _0x1eac7b;try{_0x269569[_0x445444(0x1a2)]&&(_0x1eac7b=_0x269569[_0x445444(0x1a2)][_0x445444(0x159)],_0x269569[_0x445444(0x1a2)][_0x445444(0x159)]=function(){}),_0x1a9892&&typeof _0x1a9892[_0x445444(0x178)]==_0x445444(0x1a4)&&(_0x4eb3ac[_0x445444(0x178)]=_0x1a9892[_0x445444(0x178)]);}catch{}finally{_0x1eac7b&&(_0x269569[_0x445444(0x1a2)][_0x445444(0x159)]=_0x1eac7b);}if(_0x4eb3ac['type']===_0x445444(0x1a4)||_0x4eb3ac['type']==='Number'){if(isNaN(_0x4eb3ac['value']))_0x4eb3ac[_0x445444(0x198)]=!0x0,delete _0x4eb3ac[_0x445444(0x14e)];else switch(_0x4eb3ac[_0x445444(0x14e)]){case Number[_0x445444(0x156)]:_0x4eb3ac['positiveInfinity']=!0x0,delete _0x4eb3ac[_0x445444(0x14e)];break;case Number[_0x445444(0x14c)]:_0x4eb3ac[_0x445444(0x11f)]=!0x0,delete _0x4eb3ac['value'];break;case 0x0:this['_isNegativeZero'](_0x4eb3ac[_0x445444(0x14e)])&&(_0x4eb3ac[_0x445444(0x11c)]=!0x0);break;}}else _0x4eb3ac[_0x445444(0x126)]===_0x445444(0x132)&&typeof _0x1a9892[_0x445444(0x139)]==_0x445444(0x189)&&_0x1a9892['name']&&_0x4eb3ac[_0x445444(0x139)]&&_0x1a9892[_0x445444(0x139)]!==_0x4eb3ac[_0x445444(0x139)]&&(_0x4eb3ac[_0x445444(0x137)]=_0x1a9892['name']);}[_0x4ff05d(0x110)](_0x35fc99){var _0x2cdb7d=_0x4ff05d;return 0x1/_0x35fc99===Number[_0x2cdb7d(0x14c)];}[_0x4ff05d(0x13f)](_0x36a950){var _0x369f6e=_0x4ff05d;!_0x36a950['props']||!_0x36a950['props'][_0x369f6e(0x178)]||_0x36a950[_0x369f6e(0x126)]===_0x369f6e(0x135)||_0x36a950[_0x369f6e(0x126)]==='Map'||_0x36a950[_0x369f6e(0x126)]===_0x369f6e(0xea)||_0x36a950['props'][_0x369f6e(0x171)](function(_0x3f86f5,_0x311f76){var _0x236385=_0x369f6e,_0x35b404=_0x3f86f5[_0x236385(0x139)][_0x236385(0x183)](),_0x650156=_0x311f76[_0x236385(0x139)]['toLowerCase']();return _0x35b404<_0x650156?-0x1:_0x35b404>_0x650156?0x1:0x0;});}[_0x4ff05d(0x133)](_0x2f1ebc,_0x50105a){var _0xbfcd7d=_0x4ff05d;if(!(_0x50105a[_0xbfcd7d(0x1a9)]||!_0x2f1ebc[_0xbfcd7d(0x179)]||!_0x2f1ebc[_0xbfcd7d(0x179)]['length'])){for(var _0x253a6a=[],_0x2102b6=[],_0x2bb908=0x0,_0x546f89=_0x2f1ebc[_0xbfcd7d(0x179)][_0xbfcd7d(0x178)];_0x2bb908<_0x546f89;_0x2bb908++){var _0x1cbd3e=_0x2f1ebc['props'][_0x2bb908];_0x1cbd3e['type']==='function'?_0x253a6a[_0xbfcd7d(0x18a)](_0x1cbd3e):_0x2102b6[_0xbfcd7d(0x18a)](_0x1cbd3e);}if(!(!_0x2102b6['length']||_0x253a6a[_0xbfcd7d(0x178)]<=0x1)){_0x2f1ebc[_0xbfcd7d(0x179)]=_0x2102b6;var _0x1a40f3={'functionsNode':!0x0,'props':_0x253a6a};this['_setNodeId'](_0x1a40f3,_0x50105a),this[_0xbfcd7d(0x113)](_0x1a40f3,_0x50105a),this[_0xbfcd7d(0x154)](_0x1a40f3),this[_0xbfcd7d(0x10f)](_0x1a40f3,_0x50105a),_0x1a40f3['id']+='\\x20f',_0x2f1ebc[_0xbfcd7d(0x179)][_0xbfcd7d(0x120)](_0x1a40f3);}}}[_0x4ff05d(0x188)](_0x46e259,_0x47f4eb){}[_0x4ff05d(0x154)](_0x1d9f64){}['_isArray'](_0xda35a3){var _0x2a28dd=_0x4ff05d;return Array['isArray'](_0xda35a3)||typeof _0xda35a3=='object'&&this[_0x2a28dd(0xf4)](_0xda35a3)===_0x2a28dd(0xda);}[_0x4ff05d(0x10f)](_0x2ad62b,_0x3d8b5c){}['_cleanNode'](_0x125644){var _0x1573c2=_0x4ff05d;delete _0x125644[_0x1573c2(0xca)],delete _0x125644['_hasSetOnItsPath'],delete _0x125644[_0x1573c2(0x158)];}['_setNodeExpressionPath'](_0x23066f,_0x31c14e){}}let _0x530de9=new _0x4bec75(),_0x5bb14b={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x462f4d={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x5439d6(_0x453dfa,_0x415706,_0x2d7675,_0x22037c,_0x43ea92,_0x50f5f6){var _0x27b06c=_0x4ff05d;let _0x4f017d,_0x4782f7;try{_0x4782f7=_0x41cee5(),_0x4f017d=_0x309406[_0x415706],!_0x4f017d||_0x4782f7-_0x4f017d['ts']>0x1f4&&_0x4f017d[_0x27b06c(0x121)]&&_0x4f017d['time']/_0x4f017d[_0x27b06c(0x121)]<0x64?(_0x309406[_0x415706]=_0x4f017d={'count':0x0,'time':0x0,'ts':_0x4782f7},_0x309406['hits']={}):_0x4782f7-_0x309406['hits']['ts']>0x32&&_0x309406[_0x27b06c(0x160)][_0x27b06c(0x121)]&&_0x309406['hits']['time']/_0x309406['hits'][_0x27b06c(0x121)]<0x64&&(_0x309406[_0x27b06c(0x160)]={});let _0xe784a6=[],_0x375cac=_0x4f017d[_0x27b06c(0xdc)]||_0x309406['hits']['reduceLimits']?_0x462f4d:_0x5bb14b,_0x351b28=_0x59669e=>{var _0x5be152=_0x27b06c;let _0x21cc5c={};return _0x21cc5c['props']=_0x59669e[_0x5be152(0x179)],_0x21cc5c[_0x5be152(0x1b2)]=_0x59669e[_0x5be152(0x1b2)],_0x21cc5c['strLength']=_0x59669e[_0x5be152(0x177)],_0x21cc5c['totalStrLength']=_0x59669e[_0x5be152(0xfa)],_0x21cc5c[_0x5be152(0x163)]=_0x59669e[_0x5be152(0x163)],_0x21cc5c[_0x5be152(0xe3)]=_0x59669e[_0x5be152(0xe3)],_0x21cc5c[_0x5be152(0x167)]=!0x1,_0x21cc5c[_0x5be152(0x1a9)]=!_0xb6c728,_0x21cc5c[_0x5be152(0xcc)]=0x1,_0x21cc5c[_0x5be152(0x1aa)]=0x0,_0x21cc5c[_0x5be152(0xd8)]='root_exp_id',_0x21cc5c['rootExpression']='root_exp',_0x21cc5c[_0x5be152(0x166)]=!0x0,_0x21cc5c['autoExpandPreviousObjects']=[],_0x21cc5c[_0x5be152(0xec)]=0x0,_0x21cc5c['resolveGetters']=!0x0,_0x21cc5c[_0x5be152(0x157)]=0x0,_0x21cc5c[_0x5be152(0x169)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x21cc5c;};for(var _0x5659d5=0x0;_0x5659d5<_0x43ea92[_0x27b06c(0x178)];_0x5659d5++)_0xe784a6[_0x27b06c(0x18a)](_0x530de9[_0x27b06c(0x14b)]({'timeNode':_0x453dfa===_0x27b06c(0x172)||void 0x0},_0x43ea92[_0x5659d5],_0x351b28(_0x375cac),{}));if(_0x453dfa===_0x27b06c(0x142)){let _0x3d506b=Error[_0x27b06c(0xd2)];try{Error[_0x27b06c(0xd2)]=0x1/0x0,_0xe784a6['push'](_0x530de9['serialize']({'stackNode':!0x0},new Error()[_0x27b06c(0x13a)],_0x351b28(_0x375cac),{'strLength':0x1/0x0}));}finally{Error[_0x27b06c(0xd2)]=_0x3d506b;}}return{'method':_0x27b06c(0x131),'version':_0x583925,'args':[{'ts':_0x2d7675,'session':_0x22037c,'args':_0xe784a6,'id':_0x415706,'context':_0x50f5f6}]};}catch(_0x50b21c){return{'method':_0x27b06c(0x131),'version':_0x583925,'args':[{'ts':_0x2d7675,'session':_0x22037c,'args':[{'type':_0x27b06c(0xf2),'error':_0x50b21c&&_0x50b21c[_0x27b06c(0x152)]}],'id':_0x415706,'context':_0x50f5f6}]};}finally{try{if(_0x4f017d&&_0x4782f7){let _0x6e3f50=_0x41cee5();_0x4f017d[_0x27b06c(0x121)]++,_0x4f017d[_0x27b06c(0x172)]+=_0x50d7d1(_0x4782f7,_0x6e3f50),_0x4f017d['ts']=_0x6e3f50,_0x309406[_0x27b06c(0x160)][_0x27b06c(0x121)]++,_0x309406['hits'][_0x27b06c(0x172)]+=_0x50d7d1(_0x4782f7,_0x6e3f50),_0x309406[_0x27b06c(0x160)]['ts']=_0x6e3f50,(_0x4f017d[_0x27b06c(0x121)]>0x32||_0x4f017d[_0x27b06c(0x172)]>0x64)&&(_0x4f017d[_0x27b06c(0xdc)]=!0x0),(_0x309406['hits']['count']>0x3e8||_0x309406[_0x27b06c(0x160)][_0x27b06c(0x172)]>0x12c)&&(_0x309406[_0x27b06c(0x160)][_0x27b06c(0xdc)]=!0x0);}}catch{}}}return _0x5439d6;}((_0x436b2f,_0x5e9e68,_0x739f51,_0x200859,_0x5ade45,_0x3c0c4a,_0x2e9ef4,_0x52f7b9,_0x489bcc,_0x4b0904)=>{var _0x3eb34b=_0x24ae32;if(_0x436b2f['_console_ninja'])return _0x436b2f[_0x3eb34b(0x10c)];if(!J(_0x436b2f,_0x52f7b9,_0x5ade45))return _0x436b2f['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x436b2f['_console_ninja'];let _0x17ed1e=W(_0x436b2f),_0x5b8aae=_0x17ed1e[_0x3eb34b(0xf1)],_0x358f86=_0x17ed1e[_0x3eb34b(0x106)],_0x1db0c7=_0x17ed1e[_0x3eb34b(0x168)],_0x5edab2={'hits':{},'ts':{}},_0x2306a6=Y(_0x436b2f,_0x489bcc,_0x5edab2,_0x3c0c4a),_0x5c2099=_0x39c657=>{_0x5edab2['ts'][_0x39c657]=_0x358f86();},_0x3a97e3=(_0x231603,_0x32531e)=>{var _0x2a1511=_0x3eb34b;let _0x5019aa=_0x5edab2['ts'][_0x32531e];if(delete _0x5edab2['ts'][_0x32531e],_0x5019aa){let _0x26ffff=_0x5b8aae(_0x5019aa,_0x358f86());_0x482728(_0x2306a6(_0x2a1511(0x172),_0x231603,_0x1db0c7(),_0x109c4f,[_0x26ffff],_0x32531e));}},_0x160f42=_0x40a389=>_0x174f3e=>{var _0x581236=_0x3eb34b;try{_0x5c2099(_0x174f3e),_0x40a389(_0x174f3e);}finally{_0x436b2f[_0x581236(0x1a2)][_0x581236(0x172)]=_0x40a389;}},_0x46bc9a=_0x8b78e8=>_0x4c80fe=>{var _0x44e4b4=_0x3eb34b;try{let [_0x285c7c,_0x16c463]=_0x4c80fe[_0x44e4b4(0x18c)](':logPointId:');_0x3a97e3(_0x16c463,_0x285c7c),_0x8b78e8(_0x285c7c);}finally{_0x436b2f[_0x44e4b4(0x1a2)]['timeEnd']=_0x8b78e8;}};_0x436b2f[_0x3eb34b(0x10c)]={'consoleLog':(_0x1bc2ea,_0x3f3e00)=>{var _0x4b6724=_0x3eb34b;_0x436b2f['console'][_0x4b6724(0x131)]['name']!==_0x4b6724(0x116)&&_0x482728(_0x2306a6('log',_0x1bc2ea,_0x1db0c7(),_0x109c4f,_0x3f3e00));},'consoleTrace':(_0x1fa5f1,_0x122566)=>{var _0x122607=_0x3eb34b;_0x436b2f[_0x122607(0x1a2)][_0x122607(0x131)]['name']!==_0x122607(0x103)&&_0x482728(_0x2306a6(_0x122607(0x142),_0x1fa5f1,_0x1db0c7(),_0x109c4f,_0x122566));},'consoleTime':()=>{var _0x4d68d2=_0x3eb34b;_0x436b2f[_0x4d68d2(0x1a2)][_0x4d68d2(0x172)]=_0x160f42(_0x436b2f['console']['time']);},'consoleTimeEnd':()=>{var _0x3453b4=_0x3eb34b;_0x436b2f[_0x3453b4(0x1a2)][_0x3453b4(0x175)]=_0x46bc9a(_0x436b2f[_0x3453b4(0x1a2)][_0x3453b4(0x175)]);},'autoLog':(_0x449076,_0x2e7866)=>{var _0x5828ec=_0x3eb34b;_0x482728(_0x2306a6(_0x5828ec(0x131),_0x2e7866,_0x1db0c7(),_0x109c4f,[_0x449076]));},'autoLogMany':(_0x53314b,_0x42a9f5)=>{var _0x13e6ec=_0x3eb34b;_0x482728(_0x2306a6(_0x13e6ec(0x131),_0x53314b,_0x1db0c7(),_0x109c4f,_0x42a9f5));},'autoTrace':(_0x564590,_0x101283)=>{var _0x223bdf=_0x3eb34b;_0x482728(_0x2306a6(_0x223bdf(0x142),_0x101283,_0x1db0c7(),_0x109c4f,[_0x564590]));},'autoTraceMany':(_0x553423,_0x3690e0)=>{var _0x35ab7e=_0x3eb34b;_0x482728(_0x2306a6(_0x35ab7e(0x142),_0x553423,_0x1db0c7(),_0x109c4f,_0x3690e0));},'autoTime':(_0x2540cc,_0x2ad40f,_0x2cc138)=>{_0x5c2099(_0x2cc138);},'autoTimeEnd':(_0x30e6d3,_0x4c710,_0x38d515)=>{_0x3a97e3(_0x4c710,_0x38d515);},'coverage':_0x6611fa=>{var _0x55a654=_0x3eb34b;_0x482728({'method':_0x55a654(0x15f),'version':_0x3c0c4a,'args':[{'id':_0x6611fa}]});}};let _0x482728=b(_0x436b2f,_0x5e9e68,_0x739f51,_0x200859,_0x5ade45,_0x4b0904),_0x109c4f=_0x436b2f[_0x3eb34b(0x17c)];return _0x436b2f['_console_ninja'];})(globalThis,_0x24ae32(0x1b0),_0x24ae32(0xd6),_0x24ae32(0x11d),_0x24ae32(0x10e),_0x24ae32(0x17a),'1712142287458',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.100\"],_0x24ae32(0x1ad),_0x24ae32(0x11e));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsU0FBUztBQUNULENBQUMsT0FBTyxxRkFBcUYsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLGlCQUFpQix3Q0FBd0MsZ0VBQWdFLEdBQUcsd0JBQXdCLDhCQUE4QixnQkFBZ0IsbURBQW1ELEdBQUcsY0FBYyxvQ0FBb0MsR0FBRyxvQkFBb0IsNEJBQTRCLDRDQUE0QywyQkFBMkIsU0FBUyxrREFBa0QsVUFBVSxvREFBb0QsVUFBVSwyQ0FBMkMsVUFBVSwwQ0FBMEMsV0FBVyxpQ0FBaUMsR0FBRyxtQkFBbUI7QUFDbjlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdkM7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0QyxxSkFBdUQ7QUFDbkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksZUFBZSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLHVCQUF1QixNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLFVBQVUsVUFBVSxLQUFLLFNBQVMsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFL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RSx3Q0FBd0MsbUNBQW1DLHdCQUF3Qix5Q0FBeUMsZ0RBQWdELCtDQUErQywrRkFBK0Ysa0NBQWtDLHdCQUF3QixJQUFJLDJDQUEyQyxRQUFRLDBEQUEwRCxrQ0FBa0Msd0JBQXdCLElBQUksc0VBQXNFLHFEQUFxRCxRQUFRLG9EQUFvRCw2QkFBNkIscUNBQXFDLHdCQUF3QiwwSUFBMEksd0NBQXdDLHdCQUF3Qiw0SkFBNEosb0JBQW9CLHdCQUF3Qix1RkFBdUYsdUJBQXVCLHdCQUF3Qix3R0FBd0csbUNBQW1DLHdCQUF3QixvRkFBb0YsdUNBQXVDLHdCQUF3QixrRkFBa0YscUNBQXFDLHdCQUF3QixvRkFBb0YseUNBQXlDLHdCQUF3QixrRkFBa0YsOENBQThDLHNCQUFzQixnREFBZ0QsK0JBQStCLHdCQUF3Qix3QkFBd0IsV0FBVyx1REFBdUQsZUFBZSxFQUFFLEtBQUssbUhBQW1ILG9DQUFvQywyT0FBMk8sSUFBSSxZQUFZLGlEQUFpRCxJQUFJLDBCQUEwQixXQUFXLFVBQVUsaURBQWlELElBQUksNEJBQTRCLFdBQVcsVUFBVSwyQ0FBMkMsSUFBSSx1QkFBdUIsWUFBWSwyQ0FBMkMsSUFBSSwwQkFBMEIsWUFBWSwyUSIsInNvdXJjZXMiOlsid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9zcmMvYW5pbWF0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vc3JjL2FuaW1hdGlvbnMuY3NzP2RlMjYiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9qZWN0LWNhcmR7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ucHJvamVjdC1jYXJkOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxufVxuXG4ud2F2ZS1waG90b3tcbiAgICBhbmltYXRpb246IHdhdmVBbmltYXRpb24gNTAwbXMgZWFzZS1pbi1vdXQgMTtcbn1cbi5pY29uPmE+aW1ne1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmljb24+YTpob3Zlcj5pbWd7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIGZpbHRlcjpkcm9wLXNoYWRvdygwIDAgNXB4ICNmZmQ3MDApXG59XG5Aa2V5ZnJhbWVzIHdhdmVBbmltYXRpb257XG4gICAgMCV7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKSBzY2FsZSgxKVxuICAgIH1cbiAgICAyNSV7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig1ZGVnKSBzY2FsZSgxLjMpXG4gICAgfVxuICAgIDUwJXt0cmFuc2Zvcm06IHJvdGF0ZVooLTVkZWcpIHNjYWxlKDEuNClcbiAgICB9XG4gICAgNzUle3RyYW5zZm9ybTogcm90YXRlWig1ZGVnKSBzY2FsZSgxLjMpXG4gICAgfVxuICAgIDEwMCV7dHJhbnNmb3JtOnJvdGF0ZVooMGRlZykgc2NhbGUoMSl9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYW5pbWF0aW9ucy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5REFBeUQ7QUFDN0Q7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQSxJQUFJO0lBQ0o7SUFDQSxJQUFJO0lBQ0o7SUFDQSxLQUFLLGdDQUFnQztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdC1jYXJke1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxcbn1cXG5cXG4ud2F2ZS1waG90b3tcXG4gICAgYW5pbWF0aW9uOiB3YXZlQW5pbWF0aW9uIDUwMG1zIGVhc2UtaW4tb3V0IDE7XFxufVxcbi5pY29uPmE+aW1ne1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLmljb24+YTpob3Zlcj5pbWd7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgZmlsdGVyOmRyb3Atc2hhZG93KDAgMCA1cHggI2ZmZDcwMClcXG59XFxuQGtleWZyYW1lcyB3YXZlQW5pbWF0aW9ue1xcbiAgICAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKSBzY2FsZSgxKVxcbiAgICB9XFxuICAgIDI1JXtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig1ZGVnKSBzY2FsZSgxLjMpXFxuICAgIH1cXG4gICAgNTAle3RyYW5zZm9ybTogcm90YXRlWigtNWRlZykgc2NhbGUoMS40KVxcbiAgICB9XFxuICAgIDc1JXt0cmFuc2Zvcm06IHJvdGF0ZVooNWRlZykgc2NhbGUoMS4zKVxcbiAgICB9XFxuICAgIDEwMCV7dHJhbnNmb3JtOnJvdGF0ZVooMGRlZykgc2NhbGUoMSl9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yZXNvdXJjZXMvaWNvbnMvZ2l0aHViLW9yaWdpbmFsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL2ljb25zL2xpbmtlZGluLXBsYWluLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tbWFpbi1iZy1jb2xvcjogI2YwZjlmZjtcbiAgICAtLXNlY29uZGFyeS1iZy1jb2xvcjogIzA3NTk4NTtcbiAgICAtLXRlcnRpYXJ5LWJnLWNvbG9yOiAjMDI4NGM3O1xuICAgIC0tY2FyZC1iZy1jb2xvcjogc2lsdmVyO1xuICAgIC0tbWFpbi1mb250LWNvbG9yOiAjMDgyZjQ5O1xuICAgIC0tc2Vjb25kYXJ5LWZvbnQtY29sb3I6ICNlMGYyZmU7XG59XG5odG1sLCBib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5ib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOjA7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCIgXCJtYWluXCIgXCJmb290ZXJcIjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6YXV0byBhdXRvIGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODlkZWcsIHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcikgY2xhbXAoMiUsIDIwdncsIDMwdmgpLCB0cmFuc3BhcmVudCBjbGFtcChjYWxjKDIlICsgNXB4KSwgY2FsYygyMHZ3ICsgNXB4KSwgY2FsYygzMHZoICsgNXB4KSkpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIFxuXG59XG5cbmhlYWRlciwgbWFpbiwgZm9vdGVye1xuICAgIHBhZGRpbmc6IGNsYW1wKDJweCwgNSUsIDIwcHgpO1xuICAgIHBhZGRpbmctbGVmdDpjbGFtcCgycHgsIDIwJSwgMTUwcHgpO1xuICAgIHBhZGRpbmctcmlnaHQ6Y2xhbXAoMnB4LCAyMCUsIDE1MHB4KTtcbn1cblxuLmdpdGh1Yi1saW5rLCAubGlua2VkaW4tbGlua3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5naXRodWItbGlua3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG4ubGlua2VkaW4tbGlua3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG5cbn1cbi8qIEhlYWRlciBhcmVhICovXG5oZWFkZXJ7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogY2xhbXAoNXB4LCA0dncsIDUwcHgpO1xufVxuXG4uZnJhbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYXJkLWJnLWNvbG9yKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQ1OSk7XG59XG4ucGhvdG97XG4gICAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgID5pbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5jYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTN2dztcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IGNsYW1wKDEwcHgsIDElLCAyMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IGNsYW1wKDhweCwgMS4ydncsIDI0cHgpO1xuICAgID5hcnRpY2xle1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDIwcHgsIDcwJSwgMTYwcHgpO1xuXG4gICAgfVxuICAgID4gYXJ0aWNsZSA+IGgxe1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDVweCwgNHZ3LCA0MHB4KTs7XG4gICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICA+YXJ0aWNsZSA+IC50ZXh0LWRpdntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6ODAlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgID5we1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgID4uY29udGFjdHtcbiAgICAgICAgaGVpZ2h0OjE1JTtcbiAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZ2FwOiBjbGFtcCgxMnB4LCA1JSwgNzBweCk7XG4gICAgICAgID5he1xuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICA+aW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxubWFpbntcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IGNsYW1wKDhweCwgMS41dncsIDI0cHgpO1xuICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICAubWFpbi1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5wcm9qZWN0LWNhcmQtY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcbiAgICAgICAgZ2FwOjFyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxdnc7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuXG59fVxuLnByb2plY3QtY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1iZy1jb2xvcik7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gICAgZm9udC1zaXplOiA3MCU7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGE+aW1ne1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuXG5mb290ZXJ7XG4gICAgZm9udC1zaXplOiBjbGFtcCg2cHgsIC41dncsIDIwcHgpO1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xuICAgIGF7Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTt9XG4gICAgaDF7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNDUyKTtcbiAgICB9XG4gICAgPmgxLCBoMiwgaDN7XG4gICAgICAgIG1hcmdpbjoxMHB4O1xuICAgIH1cblxufVxuLmNvbnRhY3QtZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDUlOyAgXG4gICAgaGVpZ2h0OiAzMHB4OyBcbiAgICA+YXtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDo0MHB4O1xuICAgIH1cbn1cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoyMDAwcHgpe1xuICAgIG1haW57XG5cbiAgICAgICAgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XG4gICAgICAgIH1cbiAgICAgICAgaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdC1jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhlYWRlcntcbiAgICAgICAgLnBob3Rve1xuICAgICAgICAgICAgbWF4LXdpZHRoOjExdnc7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWF4LWhlaWdodDo4dnc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9vdGVye1xuICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICAgIH1cbiAgICAgICAgaDEsIGgyLCBoM3tcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoZWFkZXIsIGZvb3RlcntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xuICAgIGhlYWRlcntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5waG90b3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgbGVmdDoxMHB4O1xuICAgICAgICB3aWR0aDogMTJ2dztcbiAgICB9XG4gICAgLmNhcmR7IFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZ2dztcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1dnc7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuXG4gICAgfVxuXG4gICAgYXJ0aWNsZXtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5tYWlue1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgcGFkZGluZzowOyBcbiAgICAubWFpbi1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuXG4gICAgfVxuICAgIC5wcm9qZWN0LWNhcmR7XG4gICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xuICAgIGhlYWRlciwgbWFpbiwgZm9vdGVye1xuICAgICAgICBwYWRkaW5nOiAydnc7XG4gICAgfVxuICAgIC5jYXJke1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbiAgICB9ICAgXG4gICAgYXJ0aWNsZXtcbiAgICAgICAgZm9udC1zaXplOiAzLjJ2dztcbiAgICB9XG4gICAgbWFpbntcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgIC5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtY2FyZHtcbiAgICAgICAgaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDd2dztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDZDQUE2QztJQUM3QyxpQ0FBaUM7SUFDakMsa0tBQWtLO0lBQ2xLLDRCQUE0QjtJQUM1QixrQkFBa0I7OztBQUd0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsb0NBQW9DO0FBQ3hDOztBQUVBO0lB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Q1osZ0JBQWdCOztJQUV4Qjs7SUFFQTtRQUNJO1lBQ0ksa0JBQWtCO1FBQ3RCO0lBQ0o7QUFDSjtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1Q7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7SUFDQTtRQUNJO1lBQ0ksY0FBYztRQUNsQjtRQUNBO1lBQ0ksZ0JBQWdCO1FBQ3BCO0lBQ0o7QUFDSjtBQUNBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7SUFDQSxlQUFlO0lBQ2Y7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztRQUNkO1lBQ0ksVUFBVTtRQUNkO0lBQ0o7SUFDQTtRQUNJO1lBQ0ksY0FBYztZQUNkLGdCQUFnQjtRQUNwQjtRQUNBO1lBQ0ksYUFBYTtZQUNiLGNBQWM7UUFDbEI7O0lBRUo7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjZjBmOWZmO1xcbiAgICAtLXNlY29uZGFyeS1iZy1jb2xvcjogIzA3NTk4NTtcXG4gICAgLS10ZXJ0aWFyeS1iZy1jb2xvcjogIzAyODRjNztcXG4gICAgLS1jYXJkLWJnLWNvbG9yOiBzaWx2ZXI7XFxuICAgIC0tbWFpbi1mb250LWNvbG9yOiAjMDgyZjQ5O1xcbiAgICAtLXNlY29uZGFyeS1mb250LWNvbG9yOiAjZTBmMmZlO1xcbn1cXG5odG1sLCBib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXJcXFwiIFxcXCJtYWluXFxcIiBcXFwiZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG8gYXV0byBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4OWRlZywgdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKSBjbGFtcCgyJSwgMjB2dywgMzB2aCksIHRyYW5zcGFyZW50IGNsYW1wKGNhbGMoMiUgKyA1cHgpLCBjYWxjKDIwdncgKyA1cHgpLCBjYWxjKDMwdmggKyA1cHgpKSk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgXFxuXFxufVxcblxcbmhlYWRlciwgbWFpbiwgZm9vdGVye1xcbiAgICBwYWRkaW5nOiBjbGFtcCgycHgsIDUlLCAyMHB4KTtcXG4gICAgcGFkZGluZy1sZWZ0OmNsYW1wKDJweCwgMjAlLCAxNTBweCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6Y2xhbXAoMnB4LCAyMCUsIDE1MHB4KTtcXG59XFxuXFxuLmdpdGh1Yi1saW5rLCAubGlua2VkaW4tbGlua3tcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5naXRodWItbGlua3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3Jlc291cmNlcy9pY29ucy9naXRodWItb3JpZ2luYWwuc3ZnJyk7XFxufVxcbi5saW5rZWRpbi1saW5re1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vcmVzb3VyY2VzL2ljb25zL2xpbmtlZGluLXBsYWluLnN2ZycpO1xcblxcbn1cXG4vKiBIZWFkZXIgYXJlYSAqL1xcbmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IGNsYW1wKDVweCwgNHZ3LCA1MHB4KTtcXG59XFxuXFxuLmZyYW1le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhcmQtYmctY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNDU5KTtcXG59XFxuLnBob3Rve1xcbiAgICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICA+aW1ne1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEzdnc7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IGNsYW1wKDEwcHgsIDElLCAyMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDhweCwgMS4ydncsIDI0cHgpO1xcbiAgICA+YXJ0aWNsZXtcXG4gICAgICAgIGhlaWdodDogY2xhbXAoMjBweCwgNzAlLCAxNjBweCk7XFxuXFxuICAgIH1cXG4gICAgPiBhcnRpY2xlID4gaDF7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDVweCwgNHZ3LCA0MHB4KTs7XFxuICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgICA+YXJ0aWNsZSA+IC50ZXh0LWRpdntcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6ODAlO1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgPnB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgID4uY29udGFjdHtcXG4gICAgICAgIGhlaWdodDoxNSU7XFxuICAgICAgICB3aWR0aDogOTIlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBnYXA6IGNsYW1wKDEycHgsIDUlLCA3MHB4KTtcXG4gICAgICAgID5he1xcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xcbiAgICAgICAgICAgID5pbWd7XFxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5tYWlue1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxLjV2dywgMjRweCk7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgICAucHJvamVjdC1jYXJkLWNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6IDMlO1xcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XFxuICAgICAgICBnYXA6MXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxdnc7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuXFxufX1cXG4ucHJvamVjdC1jYXJke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogNzAlO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhPmltZ3tcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuZm9vdGVye1xcbiAgICBmb250LXNpemU6IGNsYW1wKDZweCwgLjV2dywgMjBweCk7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcbiAgICBhe2NvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7fVxcbiAgICBoMXtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBkYXNoZWQgcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjQ1Mik7XFxuICAgIH1cXG4gICAgPmgxLCBoMiwgaDN7XFxuICAgICAgICBtYXJnaW46MTBweDtcXG4gICAgfVxcblxcbn1cXG4uY29udGFjdC1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb250YWN0LWZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiA1JTsgIFxcbiAgICBoZWlnaHQ6IDMwcHg7IFxcbiAgICA+YXtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OjQwcHg7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoyMDAwcHgpe1xcbiAgICBtYWlue1xcblxcbiAgICAgICAgaDF7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICB9XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XFxuICAgICAgICB9XFxuICAgICAgICBoM3tcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDR7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XFxuICAgICAgICB9XFxuICAgICAgICAucHJvamVjdC1jYXJkLWNvbnRhaW5lcntcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBoZWFkZXJ7XFxuICAgICAgICAucGhvdG97XFxuICAgICAgICAgICAgbWF4LXdpZHRoOjExdnc7XFxuICAgICAgICB9XFxuICAgICAgICAuY2FyZHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0Ojh2dztcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBmb290ZXJ7XFxuICAgICAgICBmb250LXNpemU6IDYwJTtcXG4gICAgICAgIGgxe1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcXG4gICAgICAgIH1cXG4gICAgICAgIGgxLCBoMiwgaDN7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGhlYWRlciwgZm9vdGVye1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjB2dztcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMDBweCl7XFxuICAgIGhlYWRlcntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgfVxcbiAgICAucGhvdG97XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6MDtcXG4gICAgICAgIGxlZnQ6MTBweDtcXG4gICAgICAgIHdpZHRoOiAxMnZ3O1xcbiAgICB9XFxuICAgIC5jYXJkeyBcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnZ3O1xcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNXZ3O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XFxuXFxuICAgIH1cXG5cXG4gICAgYXJ0aWNsZXtcXG4gICAgICAgIGgxe1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbm1haW57XFxuICAgIGZvbnQtc2l6ZTogMS41dnc7XFxuICAgIHBhZGRpbmc6MDsgXFxuICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgIH1cXG5cXG4gICAgfVxcbiAgICAucHJvamVjdC1jYXJke1xcbiAgICAgICAgaDN7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XFxuICAgICAgICB9XFxuICAgICAgICBoNHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcXG4gICAgaGVhZGVyLCBtYWluLCBmb290ZXJ7XFxuICAgICAgICBwYWRkaW5nOiAydnc7XFxuICAgIH1cXG4gICAgLmNhcmR7XFxuICAgIHBhZGRpbmctdG9wOiA4JTtcXG4gICAgfSAgIFxcbiAgICBhcnRpY2xle1xcbiAgICAgICAgZm9udC1zaXplOiAzLjJ2dztcXG4gICAgfVxcbiAgICBtYWlue1xcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XFxuICAgICAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAucHJvamVjdC1jYXJke1xcbiAgICAgICAgaDN7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIGg0e1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb25zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0ICcuL2FuaW1hdGlvbnMuY3NzJ1xuXG4vKiBMZXZlcmFnaW5nIHRoZSB3ZWIgYW5pbWF0aW9ucyBBUEkgZm9yIHRoaXMgKi9cblxuLyogQW5pbWF0aW9uIGZvciBhIGN1dGUgd2F2ZSBhbmltYXRpb24gb24gdGhlIHBob3RvICovXG5hc3luYyBmdW5jdGlvbiB3YXZlUGhvdG8oKSB7XG5cdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDQxMzEwNjE5NzhfOF8xXzhfMzRfNGAsJ2F0dGVtcHRpbmcgdG8gd2F2ZScpKVxuXHRjb25zdCBwaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90bycpXG5cdHBob3RvLmNsYXNzTGlzdC5hZGQoJ3dhdmUtcGhvdG8nKVxuXHQvLyByZW1vdmUgYW5pbWF0aW9uIGNsYXNzIGFmdGVyIGFuaW1hdGlvbiBmaW5pc2hlcyBwbGF5aW5nIG9uY2Vcblx0cGhvdG8uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnYW5pbWF0aW9uZW5kJyxcblx0XHQoKSA9PiB7XG5cdFx0XHRwaG90by5jbGFzc0xpc3QucmVtb3ZlKCd3YXZlLXBob3RvJylcblx0XHR9LFxuXHRcdHsgb25jZTogdHJ1ZSB9XG5cdClcbn1cbmFzeW5jIGZ1bmN0aW9uIHNsaWRlSW5IZWFkZXIoKSB7XG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXG5cdGNvbnN0IGhlYWRlclNsaWRlSW4gPSBbXG5cdFx0eyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9LFxuXHRcdHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSxcblx0XVxuXHRjb25zdCBoZWFkZXJTbGlkZUluQW5pbSA9IHtcblx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdGl0ZXJhdGlvbnM6IDEsXG5cdFx0ZmlsbDogJ2ZvcndhcmRzJyxcblx0XHRlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSknLFxuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gaGVhZGVyLmFuaW1hdGUoaGVhZGVyU2xpZGVJbiwgaGVhZGVyU2xpZGVJbkFuaW0pXG5cdFx0YW5pbWF0aW9uLm9uZmluaXNoID0gcmVzb2x2ZVxuXHR9KVxufVxuYXN5bmMgZnVuY3Rpb24gc2xpZGVJbkhlYWRlckFuZFdhdmVQaG90bygpIHtcblx0YXdhaXQgc2xpZGVJbkhlYWRlcigpXG5cdGF3YWl0IHdhdmVQaG90bygpXG59XG4vLyBUaGFuayB5b3UgZ29vZ2xlIGZvciB0aGlzIG9uZVxuYXN5bmMgZnVuY3Rpb24gdHlwZVdyaXRlckVmZmVjdChlbGVtZW50LCB0ZXh0LCBzcGVlZCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRlbGVtZW50LnRleHRDb250ZW50ICs9IHRleHQuY2hhckF0KGkpXG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgc3BlZWQpKVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVUeXBlV3JpdGVFZmZlY3QoKSB7XG5cdGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyIGgxJylcblx0Y29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXIgaDInKVxuXHRhd2FpdCB0eXBlV3JpdGVyRWZmZWN0KGgxLCAnQ2hlY2sgb3V0IG15IHN0dWZmIScsIDIwKSAvLyBhZGp1c3Qgc3BlZWQgYXMgbmVlZGVkXG5cdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpIC8vIGRlbGF5IGJlZm9yZSBsaW5lIDJcblx0YXdhaXQgdHlwZVdyaXRlckVmZmVjdChoMiwgJ01vcmUgY2FuIGJlIGZvdW5kIG9uIG15IEdpdEh1YiEnLCAyMClcbn1cbmFzeW5jIGZ1bmN0aW9uIHNldEluaXRpYWxDYXJkU3RhdGUoKSB7XG5cdGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNhcmQnKVxuXHRwcm9qZWN0Q2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdGNhcmQuc3R5bGUub3BhY2l0eSA9ICcwJ1xuXHRcdGNhcmQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJ1xuXHR9KVxufVxuYXN5bmMgZnVuY3Rpb24gYW5pbWF0aW9uUHJvamVjdENhcmRzKCkge1xuXHRjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJylcblx0Y29uc3QgZGVsYXlCZXR3ZWVuQW5pbWF0aW9ucyA9IDAgLy8gYWRqdXN0IGFzIG5lZWRlZFxuXG5cdC8vIGxvb3AgdGhyb3VnaCBlYWNoIGNhcmRcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IHByb2plY3RDYXJkc1tpXVxuXG5cdFx0Ly8gYXBwbHkgYW5pbWF0aW9uIHRvIGN1cnJlbnQgY2FyZFxuXHRcdGF3YWl0IHpvb21Jbk1haW4ocHJvamVjdENhcmQpXG5cblx0XHQvLyBzZXQgZGVsYXkgYmV0d2VlbiBlYWNoIGFuaW1hdGlvblxuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5QmV0d2VlbkFuaW1hdGlvbnMpKVxuXHR9XG59XG5hc3luYyBmdW5jdGlvbiB6b29tSW5NYWluKGVsZW1lbnQpIHtcblx0Y29uc3QgbWFpblpvb21JbiA9IFtcblx0XHR7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0sXG5cdFx0eyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9LFxuXHRdXG5cdGNvbnN0IG1haW5ab29tSW5BbmltID0ge1xuXHRcdGR1cmF0aW9uOiAxODAsXG5cdFx0aXRlcmF0aW9uczogMSxcblx0XHRmaWxsOiAnZm9yd2FyZHMnLFxuXHRcdGVhc2luZzogJ2N1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRjb25zdCBhbmltYXRpb24gPSBlbGVtZW50LmFuaW1hdGUobWFpblpvb21JbiwgbWFpblpvb21JbkFuaW0pXG5cdFx0YW5pbWF0aW9uLm9uZmluaXNoID0gcmVzb2x2ZVxuXHR9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBzbGlkZUluRm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxuXHRjb25zdCBmb290ZXJTbGlkZUluID0gW1xuXHRcdHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9LFxuXHRcdHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9LFxuXHRdXG5cdGNvbnN0IGZvb3RlclNsaWRlSW5BbmltID0ge1xuXHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0aXRlcmF0aW9uczogMSxcblx0XHRmaWxsOiAnZm9yd2FyZHMnLFxuXHRcdGVhc2luZzogJ2N1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRjb25zdCBhbmltYXRpb24gPSBmb290ZXIuYW5pbWF0ZShmb290ZXJTbGlkZUluLCBmb290ZXJTbGlkZUluQW5pbSlcblx0XHRhbmltYXRpb24ub25maW5pc2ggPSByZXNvbHZlXG5cdH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVFbGVtZW50c09uU3RhcnQoKSB7XG5cdC8vIFNldCBpbml0aWFsIHBvc2l0aW9ucyBvZiBlbGVtZW50cyBvZmYtc2NyZWVuXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXG5cdGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTAwJSknXG5cdGZvb3Rlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxMDAlKSdcblx0Ly8gaW5pdGlhbCBzdGF0ZSBvZiBjYXJkcyAoaGlkZGVuKVxuXHRhd2FpdCBzZXRJbml0aWFsQ2FyZFN0YXRlKClcblxuXHQvLyBzdGFydCBhbmltYXRpb25zXG5cdGF3YWl0IHNsaWRlSW5IZWFkZXJBbmRXYXZlUGhvdG8oKVxuXHRhd2FpdCBhbmltYXRlVHlwZVdyaXRlRWZmZWN0KClcblx0YXdhaXQgYW5pbWF0aW9uUHJvamVjdENhcmRzKClcblx0YXdhaXQgc2xpZGVJbkZvb3RlcigpXG59XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGFuaW1hdGVFbGVtZW50c09uU3RhcnQoKVxuXHRjb25zdCBwaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90bycpXG5cdHBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2F2ZVBob3RvKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8vKiBjOCBpZ25vcmUgc3RhcnQgKi8vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDI0YWUzMj1fMHhlMWEzO2Z1bmN0aW9uIF8weDQ3YmEoKXt2YXIgXzB4NGQ5YTVlPVsnYmluZCcsJ19pc1NldCcsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ190eXBlJywnd3MvaW5kZXguanMnLCdkYXRhJywnX2luTmV4dEVkZ2UnLCdudWxsJywnbG9jYXRpb24nLCdTZXQnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ21ldGhvZCcsJ3Rlc3QnLCdzeW1ib2wnLCdlbGFwc2VkJywndW5rbm93bicsJ25leHQuanMnLCdfb2JqZWN0VG9TdHJpbmcnLCdfU3ltYm9sJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnb25jbG9zZScsJ2dsb2JhbCcsJ3NldHRlcicsJ3RvdGFsU3RyTGVuZ3RoJywnc2VuZCcsJ3Byb3RvdHlwZScsJ2VkZ2UnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ2hhc093blByb3BlcnR5JywnaW5jbHVkZXMnLCdyZWFkeVN0YXRlJywnTkVYVF9SVU5USU1FJywnZGlzYWJsZWRUcmFjZScsJ19xdW90ZWRSZWdFeHAnLCdnZXQnLCd0aW1lU3RhbXAnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19kaXNwb3NlV2Vic29ja2V0JywnX2FkZFByb3BlcnR5JywnX3NldE5vZGVJZCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ19jb25zb2xlX25pbmphJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCd3ZWJwYWNrJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ19pc05lZ2F0aXZlWmVybycsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnMjAzNzE3Z1V4U2JPJywnX3NldE5vZGVMYWJlbCcsJ29ub3BlbicsJ19XZWJTb2NrZXRDbGFzcycsJ2Rpc2FibGVkTG9nJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdqb2luJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdocnRpbWUnLCduZWdhdGl2ZVplcm8nLFxcXCIvaG9tZS9kYW5pZWxsci8udnNjb2RlL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjI5Ny9ub2RlX21vZHVsZXNcXFwiLCcnLCduZWdhdGl2ZUluZmluaXR5JywndW5zaGlmdCcsJ2NvdW50JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ1tvYmplY3RcXFxceDIwTWFwXScsJ3BvcnQnLCdfc2VuZEVycm9yTWVzc2FnZScsJ3R5cGUnLCc0NjgyNDQyV2JiR3lUJywnY3VycmVudCcsJ19yZWNvbm5lY3RUaW1lb3V0JywnMjg3Tkx3UHNiJywncGFyZW50JywnMTIwOTY4V3hjUk5VJywnaG9zdG5hbWUnLCdfaXNNYXAnLCdjYXBwZWQnLCd2YWx1ZU9mJywnbG9nJywnZnVuY3Rpb24nLCdfYWRkRnVuY3Rpb25zTm9kZScsJ2RvY2tlcml6ZWRBcHAnLCdhcnJheScsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdmdW5jTmFtZScsJ3Byb2Nlc3MnLCduYW1lJywnc3RhY2snLCdyZWxvYWQnLCdhbmd1bGFyJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdkZWZpbmVQcm9wZXJ0eScsJ19zb3J0UHJvcHMnLCdhc3RybycsJ2dldHRlcicsJ3RyYWNlJywnYmlnaW50JywncGF0aFRvRmlsZVVSTCcsJ19pbkJyb3dzZXInLCdfY29ubmVjdGVkJywnc3RyaW5naWZ5JywnX3Byb3BlcnR5TmFtZScsJ3Jlc29sdmVHZXR0ZXJzJywncmVwbGFjZScsJ3NlcmlhbGl6ZScsJ05FR0FUSVZFX0lORklOSVRZJywnXFxcXHgyMHNlcnZlcicsJ3ZhbHVlJywnX2lzUHJpbWl0aXZlVHlwZScsJ19kYXRlVG9TdHJpbmcnLCdwYXRoJywnbWVzc2FnZScsJ193cycsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnX3BfbGVuZ3RoJywnUE9TSVRJVkVfSU5GSU5JVFknLCdhbGxTdHJMZW5ndGgnLCdfaGFzTWFwT25JdHNQYXRoJywnZXJyb3InLCdjYWxsJywnZW52JywndG9TdHJpbmcnLCdNYXAnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ2NvdmVyYWdlJywnaGl0cycsJzE0MzI2Njk3T3B3ZW5BJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdhdXRvRXhwYW5kTGltaXQnLCdudXh0Jywnd3M6Ly8nLCdhdXRvRXhwYW5kJywnc29ydFByb3BzJywnbm93Jywnbm9kZScsJ19jbGVhbk5vZGUnLCdzZXQnLCdfc29ja2V0JywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdwZXJmX2hvb2tzJywnNjI5MEluaFNmZScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdzb3J0JywndGltZScsJ3N1YnN0cicsJ051bWJlcicsJ3RpbWVFbmQnLCdXZWJTb2NrZXQnLCdzdHJMZW5ndGgnLCdsZW5ndGgnLCdwcm9wcycsJzEuMC4wJywnY2FwcGVkRWxlbWVudHMnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ2ZvckVhY2gnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ19pc1VuZGVmaW5lZCcsJzEwNDZUeFB4akQnLCd0b0xvd2VyQ2FzZScsJ3RoZW4nLCdfcF9uYW1lJywnZGF0ZScsJ3VuZGVmaW5lZCcsJ19hZGRMb2FkTm9kZScsJ3N0cmluZycsJ3B1c2gnLCc2NDA0ZVhVUkZnJywnc3BsaXQnLCcxMzk1aVRZWWhmJywnSFRNTEFsbENvbGxlY3Rpb24nLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19hbGxvd2VkVG9TZW5kJywncGVyZm9ybWFuY2UnLCdfdW5kZWZpbmVkJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ29iamVjdCcsJ1JlZ0V4cCcsJ3ZlcnNpb25zJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCduYW4nLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ3dhcm4nLCdFcnJvcicsJ2dldFByb3RvdHlwZU9mJywnbWF0Y2gnLCc1MTA5c1lBdHVRJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnX2NhcElmU3RyaW5nJywnX2Nvbm5lY3RpbmcnLCdjb25zb2xlJywnY2F0Y2gnLCdudW1iZXInLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdzbGljZScsJ2luZGV4T2YnLCdjb25zdHJ1Y3RvcicsJ25vRnVuY3Rpb25zJywnbGV2ZWwnLCd1bnJlZicsJ19wcm9wZXJ0eScsJycsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCcxNTA0OEpuTm1xVicsJzEyNy4wLjAuMScsJ2NvbmNhdCcsJ2VsZW1lbnRzJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnX19lcycrJ01vZHVsZScsJ2RlcHRoJywnaG9zdCcsJ25vZGVNb2R1bGVzJywnY3JlYXRlJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX251bWJlclJlZ0V4cCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ2Jvb2xlYW4nLCdfcmVnRXhwVG9TdHJpbmcnLCdvbmVycm9yJywnMzU3NjcnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ2V4cElkJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnZGVmYXVsdCcsJ3JlZHVjZUxpbWl0cycsJ2luZGV4JywnU3RyaW5nJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ19wXyddO18weDQ3YmE9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4NGQ5YTVlO307cmV0dXJuIF8weDQ3YmEoKTt9KGZ1bmN0aW9uKF8weDEzY2VhOSxfMHg0YmJlN2Upe3ZhciBfMHg1MjY1N2I9XzB4ZTFhMyxfMHg0YWI5NDE9XzB4MTNjZWE5KCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg1NjUxNDg9cGFyc2VJbnQoXzB4NTI2NTdiKDB4MTEyKSkvMHgxK3BhcnNlSW50KF8weDUyNjU3YigweDE4MikpLzB4MioocGFyc2VJbnQoXzB4NTI2NTdiKDB4MTllKSkvMHgzKStwYXJzZUludChfMHg1MjY1N2IoMHgxOGIpKS8weDQqKC1wYXJzZUludChfMHg1MjY1N2IoMHgxOGQpKS8weDUpK3BhcnNlSW50KF8weDUyNjU3YigweDEyNykpLzB4NistcGFyc2VJbnQoXzB4NTI2NTdiKDB4MTJhKSkvMHg3KihwYXJzZUludChfMHg1MjY1N2IoMHgxMmMpKS8weDgpK3BhcnNlSW50KF8weDUyNjU3YigweDFhZikpLzB4OSoocGFyc2VJbnQoXzB4NTI2NTdiKDB4MTZmKSkvMHhhKSstcGFyc2VJbnQoXzB4NTI2NTdiKDB4MTYxKSkvMHhiO2lmKF8weDU2NTE0OD09PV8weDRiYmU3ZSlicmVhaztlbHNlIF8weDRhYjk0MVsncHVzaCddKF8weDRhYjk0MVsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4NDIxNzU1KXtfMHg0YWI5NDFbJ3B1c2gnXShfMHg0YWI5NDFbJ3NoaWZ0J10oKSk7fX19KF8weDQ3YmEsMHg4ODE2NikpO3ZhciBqPU9iamVjdFtfMHgyNGFlMzIoMHhjZildLEg9T2JqZWN0W18weDI0YWUzMigweDEzZSldLEc9T2JqZWN0W18weDI0YWUzMigweGY2KV0sZWU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sdGU9T2JqZWN0W18weDI0YWUzMigweDE5YyldLG5lPU9iamVjdFtfMHgyNGFlMzIoMHhmYyldW18weDI0YWUzMigweGZmKV0scmU9KF8weDRkMzczOCxfMHgyMzZlMTQsXzB4MzA5OGFlLF8weDM3NWU4Nik9Pnt2YXIgXzB4MmU5ZTQyPV8weDI0YWUzMjtpZihfMHgyMzZlMTQmJnR5cGVvZiBfMHgyMzZlMTQ9PSdvYmplY3QnfHx0eXBlb2YgXzB4MjM2ZTE0PT1fMHgyZTllNDIoMHgxMzIpKXtmb3IobGV0IF8weDIwYTg5MyBvZiBlZShfMHgyMzZlMTQpKSFuZVsnY2FsbCddKF8weDRkMzczOCxfMHgyMGE4OTMpJiZfMHgyMGE4OTMhPT1fMHgzMDk4YWUmJkgoXzB4NGQzNzM4LF8weDIwYTg5Myx7J2dldCc6KCk9Pl8weDIzNmUxNFtfMHgyMGE4OTNdLCdlbnVtZXJhYmxlJzohKF8weDM3NWU4Nj1HKF8weDIzNmUxNCxfMHgyMGE4OTMpKXx8XzB4Mzc1ZTg2WydlbnVtZXJhYmxlJ119KTt9cmV0dXJuIF8weDRkMzczODt9LHg9KF8weDRjZWI2ZSxfMHgxZDRjNmMsXzB4MTU3YWNhKT0+KF8weDE1N2FjYT1fMHg0Y2ViNmUhPW51bGw/aih0ZShfMHg0Y2ViNmUpKTp7fSxyZShfMHgxZDRjNmN8fCFfMHg0Y2ViNmV8fCFfMHg0Y2ViNmVbXzB4MjRhZTMyKDB4Y2IpXT9IKF8weDE1N2FjYSxfMHgyNGFlMzIoMHhkYikseyd2YWx1ZSc6XzB4NGNlYjZlLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4MTU3YWNhLF8weDRjZWI2ZSkpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MjU5Y2VjLF8weDE3ZTQxYyxfMHg1ZjE1ZjIsXzB4NWQxYjg5LF8weDMxOTE4Nyl7dmFyIF8weDI2NDBhND1fMHgyNGFlMzI7dGhpc1tfMHgyNjQwYTQoMHhmOCldPV8weDI1OWNlYyx0aGlzW18weDI2NDBhNCgweGNkKV09XzB4MTdlNDFjLHRoaXNbXzB4MjY0MGE0KDB4MTI0KV09XzB4NWYxNWYyLHRoaXNbXzB4MjY0MGE0KDB4Y2UpXT1fMHg1ZDFiODksdGhpc1snZG9ja2VyaXplZEFwcCddPV8weDMxOTE4Nyx0aGlzW18weDI2NDBhNCgweDE5MCldPSEweDAsdGhpc1tfMHgyNjQwYTQoMHgxMWEpXT0hMHgwLHRoaXNbXzB4MjY0MGE0KDB4MTQ2KV09ITB4MSx0aGlzW18weDI2NDBhNCgweDFhMSldPSEweDEsdGhpc1tfMHgyNjQwYTQoMHhlNyldPV8weDI1OWNlY1tfMHgyNjQwYTQoMHgxMzgpXT8uW18weDI2NDBhNCgweDE1YildPy5bXzB4MjY0MGE0KDB4MTAyKV09PT0nZWRnZScsdGhpc1snX2luQnJvd3NlciddPSF0aGlzW18weDI2NDBhNCgweGY4KV1bJ3Byb2Nlc3MnXT8uWyd2ZXJzaW9ucyddPy5bJ25vZGUnXSYmIXRoaXNbJ19pbk5leHRFZGdlJ10sdGhpc1tfMHgyNjQwYTQoMHgxMTUpXT1udWxsLHRoaXNbXzB4MjY0MGE0KDB4MTBkKV09MHgwLHRoaXNbXzB4MjY0MGE0KDB4MTk3KV09MHgxNCx0aGlzW18weDI2NDBhNCgweDEwNyldPSdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jyx0aGlzWydfc2VuZEVycm9yTWVzc2FnZSddPSh0aGlzW18weDI2NDBhNCgweDE0NSldP18weDI2NDBhNCgweGVkKTpfMHgyNjQwYTQoMHgxOGYpKSt0aGlzW18weDI2NDBhNCgweDEwNyldO31hc3luY1tfMHgyNGFlMzIoMHgxN2YpXSgpe3ZhciBfMHg1MTM0NjY9XzB4MjRhZTMyO2lmKHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddKXJldHVybiB0aGlzW18weDUxMzQ2NigweDExNSldO2xldCBfMHg1NDdhOWI7aWYodGhpc1snX2luQnJvd3NlciddfHx0aGlzW18weDUxMzQ2NigweGU3KV0pXzB4NTQ3YTliPXRoaXNbXzB4NTEzNDY2KDB4ZjgpXVtfMHg1MTM0NjYoMHgxNzYpXTtlbHNle2lmKHRoaXNbXzB4NTEzNDY2KDB4ZjgpXVtfMHg1MTM0NjYoMHgxMzgpXT8uWydfV2ViU29ja2V0J10pXzB4NTQ3YTliPXRoaXNbJ2dsb2JhbCddW18weDUxMzQ2NigweDEzOCldPy5bJ19XZWJTb2NrZXQnXTtlbHNlIHRyeXtsZXQgXzB4MTMzYTMyPWF3YWl0IGltcG9ydChfMHg1MTM0NjYoMHgxNTEpKTtfMHg1NDdhOWI9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KCd1cmwnKSlbXzB4NTEzNDY2KDB4MTQ0KV0oXzB4MTMzYTMyW18weDUxMzQ2NigweDExOCldKHRoaXNbJ25vZGVNb2R1bGVzJ10sXzB4NTEzNDY2KDB4ZTUpKSlbJ3RvU3RyaW5nJ10oKSkpW18weDUxMzQ2NigweGRiKV07fWNhdGNoe3RyeXtfMHg1NDdhOWI9cmVxdWlyZShyZXF1aXJlKF8weDUxMzQ2NigweDE1MSkpWydqb2luJ10odGhpc1snbm9kZU1vZHVsZXMnXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0Jyk7fX19cmV0dXJuIHRoaXNbXzB4NTEzNDY2KDB4MTE1KV09XzB4NTQ3YTliLF8weDU0N2E5Yjt9W18weDI0YWUzMigweDExNyldKCl7dmFyIF8weDJjMGVmNT1fMHgyNGFlMzI7dGhpc1tfMHgyYzBlZjUoMHgxYTEpXXx8dGhpc1tfMHgyYzBlZjUoMHgxNDYpXXx8dGhpc1tfMHgyYzBlZjUoMHgxMGQpXT49dGhpc1tfMHgyYzBlZjUoMHgxOTcpXXx8KHRoaXNbXzB4MmMwZWY1KDB4MTFhKV09ITB4MSx0aGlzW18weDJjMGVmNSgweDFhMSldPSEweDAsdGhpc1tfMHgyYzBlZjUoMHgxMGQpXSsrLHRoaXNbXzB4MmMwZWY1KDB4MTUzKV09bmV3IFByb21pc2UoKF8weDQ0YzFjNSxfMHg0YzUwZWMpPT57dmFyIF8weDRlN2E5ZT1fMHgyYzBlZjU7dGhpc1snZ2V0V2ViU29ja2V0Q2xhc3MnXSgpW18weDRlN2E5ZSgweDE4NCldKF8weDFjMGQ4OT0+e3ZhciBfMHgxOGU4OTA9XzB4NGU3YTllO2xldCBfMHg1MzRmMzA9bmV3IF8weDFjMGQ4OShfMHgxOGU4OTAoMHgxNjUpKyghdGhpc1tfMHgxOGU4OTAoMHgxNDUpXSYmdGhpc1tfMHgxOGU4OTAoMHgxMzQpXT9fMHgxOGU4OTAoMHgxMTEpOnRoaXNbXzB4MThlODkwKDB4Y2QpXSkrJzonK3RoaXNbJ3BvcnQnXSk7XzB4NTM0ZjMwWydvbmVycm9yJ109KCk9Pnt2YXIgXzB4MjliYzlmPV8weDE4ZTg5MDt0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDEsdGhpc1tfMHgyOWJjOWYoMHgxMDgpXShfMHg1MzRmMzApLHRoaXNbXzB4MjliYzlmKDB4MTVlKV0oKSxfMHg0YzUwZWMobmV3IEVycm9yKF8weDI5YmM5ZigweGQ5KSkpO30sXzB4NTM0ZjMwWydvbm9wZW4nXT0oKT0+e3ZhciBfMHg1ODQyNGQ9XzB4MThlODkwO3RoaXNbXzB4NTg0MjRkKDB4MTQ1KV18fF8weDUzNGYzMFtfMHg1ODQyNGQoMHgxNmMpXSYmXzB4NTM0ZjMwW18weDU4NDI0ZCgweDE2YyldW18weDU4NDI0ZCgweDFhYildJiZfMHg1MzRmMzBbXzB4NTg0MjRkKDB4MTZjKV1bXzB4NTg0MjRkKDB4MWFiKV0oKSxfMHg0NGMxYzUoXzB4NTM0ZjMwKTt9LF8weDUzNGYzMFtfMHgxOGU4OTAoMHhmNyldPSgpPT57dmFyIF8weDEzNjYzMz1fMHgxOGU4OTA7dGhpc1tfMHgxMzY2MzMoMHgxMWEpXT0hMHgwLHRoaXNbXzB4MTM2NjMzKDB4MTA4KV0oXzB4NTM0ZjMwKSx0aGlzW18weDEzNjYzMygweDE1ZSldKCk7fSxfMHg1MzRmMzBbJ29ubWVzc2FnZSddPV8weDFjYTg0ZD0+e3ZhciBfMHgzOTdiMGM9XzB4MThlODkwO3RyeXtfMHgxY2E4NGQmJl8weDFjYTg0ZFtfMHgzOTdiMGMoMHhlNildJiZ0aGlzW18weDM5N2IwYygweDE0NSldJiZKU09OWydwYXJzZSddKF8weDFjYTg0ZFtfMHgzOTdiMGMoMHhlNildKVtfMHgzOTdiMGMoMHhlZSldPT09XzB4Mzk3YjBjKDB4MTNiKSYmdGhpc1tfMHgzOTdiMGMoMHhmOCldW18weDM5N2IwYygweGU5KV1bXzB4Mzk3YjBjKDB4MTNiKV0oKTt9Y2F0Y2h7fX07fSlbXzB4NGU3YTllKDB4MTg0KV0oXzB4NDgxZDRmPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDAsdGhpc1tfMHg0ZTdhOWUoMHgxYTEpXT0hMHgxLHRoaXNbXzB4NGU3YTllKDB4MTFhKV09ITB4MSx0aGlzW18weDRlN2E5ZSgweDE5MCldPSEweDAsdGhpc1tfMHg0ZTdhOWUoMHgxMGQpXT0weDAsXzB4NDgxZDRmKSlbXzB4NGU3YTllKDB4MWEzKV0oXzB4NDA0Y2RjPT4odGhpc1tfMHg0ZTdhOWUoMHgxNDYpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSxjb25zb2xlW18weDRlN2E5ZSgweDE5YSldKF8weDRlN2E5ZSgweDE5OSkrdGhpc1tfMHg0ZTdhOWUoMHgxMDcpXSksXzB4NGM1MGVjKG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJysoXzB4NDA0Y2RjJiZfMHg0MDRjZGNbJ21lc3NhZ2UnXSkpKSkpO30pKTt9W18weDI0YWUzMigweDEwOCldKF8weDJlMzE2OCl7dmFyIF8weDE3Y2ZmZD1fMHgyNGFlMzI7dGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgxN2NmZmQoMHgxYTEpXT0hMHgxO3RyeXtfMHgyZTMxNjhbXzB4MTdjZmZkKDB4ZjcpXT1udWxsLF8weDJlMzE2OFtfMHgxN2NmZmQoMHhkNSldPW51bGwsXzB4MmUzMTY4W18weDE3Y2ZmZCgweDExNCldPW51bGw7fWNhdGNoe310cnl7XzB4MmUzMTY4W18weDE3Y2ZmZCgweDEwMSldPDB4MiYmXzB4MmUzMTY4WydjbG9zZSddKCk7fWNhdGNoe319W18weDI0YWUzMigweDE1ZSldKCl7dmFyIF8weGNmZDE1PV8weDI0YWUzMjtjbGVhclRpbWVvdXQodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXSksISh0aGlzW18weGNmZDE1KDB4MTBkKV0+PXRoaXNbXzB4Y2ZkMTUoMHgxOTcpXSkmJih0aGlzW18weGNmZDE1KDB4MTI5KV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg2ZmY4YzU9XzB4Y2ZkMTU7dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weDZmZjhjNSgweDFhMSldfHwodGhpc1snX2Nvbm5lY3RUb0hvc3ROb3cnXSgpLHRoaXNbXzB4NmZmOGM1KDB4MTUzKV0/LltfMHg2ZmY4YzUoMHgxYTMpXSgoKT0+dGhpc1tfMHg2ZmY4YzUoMHgxNWUpXSgpKSk7fSwweDFmNCksdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHhjZmQxNSgweDFhYildJiZ0aGlzW18weGNmZDE1KDB4MTI5KV1bXzB4Y2ZkMTUoMHgxYWIpXSgpKTt9YXN5bmNbXzB4MjRhZTMyKDB4ZmIpXShfMHg1MTU1MWQpe3ZhciBfMHhlOTJiYzU9XzB4MjRhZTMyO3RyeXtpZighdGhpc1tfMHhlOTJiYzUoMHgxOTApXSlyZXR1cm47dGhpc1tfMHhlOTJiYzUoMHgxMWEpXSYmdGhpc1tfMHhlOTJiYzUoMHgxMTcpXSgpLChhd2FpdCB0aGlzW18weGU5MmJjNSgweDE1MyldKVtfMHhlOTJiYzUoMHhmYildKEpTT05bXzB4ZTkyYmM1KDB4MTQ3KV0oXzB4NTE1NTFkKSk7fWNhdGNoKF8weDNiNGM4Yyl7Y29uc29sZVtfMHhlOTJiYzUoMHgxOWEpXSh0aGlzW18weGU5MmJjNSgweDEyNSldKyc6XFxcXHgyMCcrKF8weDNiNGM4YyYmXzB4M2I0YzhjWydtZXNzYWdlJ10pKSx0aGlzW18weGU5MmJjNSgweDE5MCldPSEweDEsdGhpc1tfMHhlOTJiYzUoMHgxNWUpXSgpO319fTtmdW5jdGlvbiBiKF8weDJkY2MzZCxfMHgxMjU4ZjcsXzB4Mjg3ODNhLF8weDQ3YTcwYyxfMHg0OWYwMTYsXzB4NTg1Yjc0KXt2YXIgXzB4NGZlYjVlPV8weDI0YWUzMjtsZXQgXzB4NDA5NGZmPV8weDI4NzgzYVtfMHg0ZmViNWUoMHgxOGMpXSgnLCcpWydtYXAnXShfMHgzOTg5MDM9Pnt2YXIgXzB4NGVmMDJlPV8weDRmZWI1ZTt0cnl7XzB4MmRjYzNkW18weDRlZjAyZSgweDE3YyldfHwoKF8weDQ5ZjAxNj09PV8weDRlZjAyZSgweGYzKXx8XzB4NDlmMDE2PT09J3JlbWl4J3x8XzB4NDlmMDE2PT09XzB4NGVmMDJlKDB4MTQwKXx8XzB4NDlmMDE2PT09XzB4NGVmMDJlKDB4MTNjKSkmJihfMHg0OWYwMTYrPSFfMHgyZGNjM2RbXzB4NGVmMDJlKDB4MTM4KV0/LltfMHg0ZWYwMmUoMHgxOTYpXT8uW18weDRlZjAyZSgweDE2OSldJiZfMHgyZGNjM2RbXzB4NGVmMDJlKDB4MTM4KV0/LlsnZW52J10/LlsnTkVYVF9SVU5USU1FJ10hPT1fMHg0ZWYwMmUoMHhmZCk/J1xcXFx4MjBicm93c2VyJzpfMHg0ZWYwMmUoMHgxNGQpKSxfMHgyZGNjM2RbXzB4NGVmMDJlKDB4MTdjKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDQ5ZjAxNn0pO2xldCBfMHg1M2FjODc9bmV3IFgoXzB4MmRjYzNkLF8weDEyNThmNyxfMHgzOTg5MDMsXzB4NDdhNzBjLF8weDU4NWI3NCk7cmV0dXJuIF8weDUzYWM4N1tfMHg0ZWYwMmUoMHhmYildW18weDRlZjAyZSgweGUxKV0oXzB4NTNhYzg3KTt9Y2F0Y2goXzB4M2Y3OTgzKXtyZXR1cm4gY29uc29sZVsnd2FybiddKF8weDRlZjAyZSgweDEzZCksXzB4M2Y3OTgzJiZfMHgzZjc5ODNbXzB4NGVmMDJlKDB4MTUyKV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDNmOTZiOT0+XzB4NDA5NGZmW18weDRmZWI1ZSgweDE3ZSldKF8weDUzN2Q3Nj0+XzB4NTM3ZDc2KF8weDNmOTZiOSkpO31mdW5jdGlvbiBfMHhlMWEzKF8weGFiNzVlMCxfMHg1Mzg5NmIpe3ZhciBfMHg0N2JhYjE9XzB4NDdiYSgpO3JldHVybiBfMHhlMWEzPWZ1bmN0aW9uKF8weGUxYTNlNyxfMHhkOGU0Zil7XzB4ZTFhM2U3PV8weGUxYTNlNy0weGNhO3ZhciBfMHhmNzgzZD1fMHg0N2JhYjFbXzB4ZTFhM2U3XTtyZXR1cm4gXzB4Zjc4M2Q7fSxfMHhlMWEzKF8weGFiNzVlMCxfMHg1Mzg5NmIpO31mdW5jdGlvbiBXKF8weDUxZWEwNSl7dmFyIF8weDI5Mjk3Mz1fMHgyNGFlMzI7bGV0IF8weDRjMTcwZD1mdW5jdGlvbihfMHgyMTVjZTEsXzB4ZTk5NjNiKXtyZXR1cm4gXzB4ZTk5NjNiLV8weDIxNWNlMTt9LF8weDNlNWViOTtpZihfMHg1MWVhMDVbXzB4MjkyOTczKDB4MTkxKV0pXzB4M2U1ZWI5PWZ1bmN0aW9uKCl7dmFyIF8weDRmZDk1Mj1fMHgyOTI5NzM7cmV0dXJuIF8weDUxZWEwNVtfMHg0ZmQ5NTIoMHgxOTEpXVtfMHg0ZmQ5NTIoMHgxNjgpXSgpO307ZWxzZXtpZihfMHg1MWVhMDVbXzB4MjkyOTczKDB4MTM4KV0mJl8weDUxZWEwNVtfMHgyOTI5NzMoMHgxMzgpXVtfMHgyOTI5NzMoMHgxMWIpXSYmXzB4NTFlYTA1Wydwcm9jZXNzJ10/LlsnZW52J10/LltfMHgyOTI5NzMoMHgxMDIpXSE9PV8weDI5Mjk3MygweGZkKSlfMHgzZTVlYjk9ZnVuY3Rpb24oKXt2YXIgXzB4MzlmOGQ5PV8weDI5Mjk3MztyZXR1cm4gXzB4NTFlYTA1Wydwcm9jZXNzJ11bXzB4MzlmOGQ5KDB4MTFiKV0oKTt9LF8weDRjMTcwZD1mdW5jdGlvbihfMHgyMjczZDYsXzB4MWMxOTMyKXtyZXR1cm4gMHgzZTgqKF8weDFjMTkzMlsweDBdLV8weDIyNzNkNlsweDBdKSsoXzB4MWMxOTMyWzB4MV0tXzB4MjI3M2Q2WzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDEwZGFjZX09cmVxdWlyZShfMHgyOTI5NzMoMHgxNmUpKTtfMHgzZTVlYjk9ZnVuY3Rpb24oKXt2YXIgXzB4YjU4NmQ3PV8weDI5Mjk3MztyZXR1cm4gXzB4MTBkYWNlW18weGI1ODZkNygweDE2OCldKCk7fTt9Y2F0Y2h7XzB4M2U1ZWI5PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4NGMxNzBkLCd0aW1lU3RhbXAnOl8weDNlNWViOSwnbm93JzooKT0+RGF0ZVsnbm93J10oKX07fWZ1bmN0aW9uIEooXzB4NGNkYzQxLF8weDFlYjQ1YyxfMHgzMmUyYWUpe3ZhciBfMHgyZDM5YzM9XzB4MjRhZTMyO2lmKF8weDRjZGM0MVtfMHgyZDM5YzMoMHgxYTUpXSE9PXZvaWQgMHgwKXJldHVybiBfMHg0Y2RjNDFbXzB4MmQzOWMzKDB4MWE1KV07bGV0IF8weDU5OTc5Yj1fMHg0Y2RjNDFbXzB4MmQzOWMzKDB4MTM4KV0/LltfMHgyZDM5YzMoMHgxOTYpXT8uWydub2RlJ118fF8weDRjZGM0MVsncHJvY2VzcyddPy5bXzB4MmQzOWMzKDB4MTViKV0/LltfMHgyZDM5YzMoMHgxMDIpXT09PV8weDJkMzljMygweGZkKTtyZXR1cm4gXzB4NTk5NzliJiZfMHgzMmUyYWU9PT1fMHgyZDM5YzMoMHgxNjQpP18weDRjZGM0MVtfMHgyZDM5YzMoMHgxYTUpXT0hMHgxOl8weDRjZGM0MVtfMHgyZDM5YzMoMHgxYTUpXT1fMHg1OTk3OWJ8fCFfMHgxZWI0NWN8fF8weDRjZGM0MVtfMHgyZDM5YzMoMHhlOSldPy5bXzB4MmQzOWMzKDB4MTJkKV0mJl8weDFlYjQ1Y1tfMHgyZDM5YzMoMHgxMDApXShfMHg0Y2RjNDFbXzB4MmQzOWMzKDB4ZTkpXVtfMHgyZDM5YzMoMHgxMmQpXSksXzB4NGNkYzQxW18weDJkMzljMygweDFhNSldO31mdW5jdGlvbiBZKF8weDI2OTU2OSxfMHhiNmM3MjgsXzB4MzA5NDA2LF8weDU4MzkyNSl7dmFyIF8weDRmZjA1ZD1fMHgyNGFlMzI7XzB4MjY5NTY5PV8weDI2OTU2OSxfMHhiNmM3Mjg9XzB4YjZjNzI4LF8weDMwOTQwNj1fMHgzMDk0MDYsXzB4NTgzOTI1PV8weDU4MzkyNTtsZXQgXzB4MzdmMzM0PVcoXzB4MjY5NTY5KSxfMHg1MGQ3ZDE9XzB4MzdmMzM0W18weDRmZjA1ZCgweGYxKV0sXzB4NDFjZWU1PV8weDM3ZjMzNFtfMHg0ZmYwNWQoMHgxMDYpXTtjbGFzcyBfMHg0YmVjNzV7Y29uc3RydWN0b3IoKXt2YXIgXzB4M2Y4YjY1PV8weDRmZjA1ZDt0aGlzWydfa2V5U3RyUmVnRXhwJ109L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDNmOGI2NSgweGQxKV09L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDNmOGI2NSgweDEwNCldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4M2Y4YjY1KDB4MTkyKV09XzB4MjY5NTY5W18weDNmOGI2NSgweDE4NyldLHRoaXNbXzB4M2Y4YjY1KDB4MTE5KV09XzB4MjY5NTY5W18weDNmOGI2NSgweDE4ZSldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbXzB4M2Y4YjY1KDB4ZjYpXSx0aGlzW18weDNmOGI2NSgweGZlKV09T2JqZWN0W18weDNmOGI2NSgweDE3ZCldLHRoaXNbJ19TeW1ib2wnXT1fMHgyNjk1NjlbJ1N5bWJvbCddLHRoaXNbJ19yZWdFeHBUb1N0cmluZyddPVJlZ0V4cFtfMHgzZjhiNjUoMHhmYyldWyd0b1N0cmluZyddLHRoaXNbXzB4M2Y4YjY1KDB4MTUwKV09RGF0ZVtfMHgzZjhiNjUoMHhmYyldWyd0b1N0cmluZyddO31bXzB4NGZmMDVkKDB4MTRiKV0oXzB4M2FjMmQ0LF8weDRhNGQzNyxfMHg1MWE1MjcsXzB4M2FkZjkxKXt2YXIgXzB4YjE2NGNiPV8weDRmZjA1ZCxfMHgzZWJkY2Q9dGhpcyxfMHg5MjQ2YTk9XzB4NTFhNTI3W18weGIxNjRjYigweDE2NildO2Z1bmN0aW9uIF8weDNiMWY1NyhfMHg0ZjE3MTIsXzB4M2I4Y2FkLF8weDJmMWIxYyl7dmFyIF8weDQ5NGU1YT1fMHhiMTY0Y2I7XzB4M2I4Y2FkW18weDQ5NGU1YSgweDEyNildPSd1bmtub3duJyxfMHgzYjhjYWRbJ2Vycm9yJ109XzB4NGYxNzEyW18weDQ5NGU1YSgweDE1MildLF8weDIxZDAzZT1fMHgyZjFiMWNbXzB4NDk0ZTVhKDB4MTY5KV1bXzB4NDk0ZTVhKDB4MTI4KV0sXzB4MmYxYjFjWydub2RlJ11bJ2N1cnJlbnQnXT1fMHgzYjhjYWQsXzB4M2ViZGNkW18weDQ5NGU1YSgweDEyMildKF8weDNiOGNhZCxfMHgyZjFiMWMpO310cnl7XzB4NTFhNTI3W18weGIxNjRjYigweDFhYSldKyssXzB4NTFhNTI3W18weGIxNjRjYigweDE2NildJiZfMHg1MWE1MjdbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVsncHVzaCddKF8weDRhNGQzNyk7dmFyIF8weDI0ZDc0OSxfMHg3OGUzY2IsXzB4NWNjYjA1LF8weDJlMGEzYyxfMHgzZDFlYjg9W10sXzB4NGY1MWRlPVtdLF8weDRjYWJmYSxfMHgyMmJjMTA9dGhpc1tfMHhiMTY0Y2IoMHhlNCldKF8weDRhNGQzNyksXzB4NTQyMGJjPV8weDIyYmMxMD09PV8weGIxNjRjYigweDEzNSksXzB4NWRmYTc0PSEweDEsXzB4MmVlNTdlPV8weDIyYmMxMD09PV8weGIxNjRjYigweDEzMiksXzB4NGFiNDkzPXRoaXNbXzB4YjE2NGNiKDB4MTRmKV0oXzB4MjJiYzEwKSxfMHgzY2I3ZjY9dGhpc1tfMHhiMTY0Y2IoMHgxNjIpXShfMHgyMmJjMTApLF8weDRhOGUwZj1fMHg0YWI0OTN8fF8weDNjYjdmNixfMHg0MmQ2ZjY9e30sXzB4ZmFiMzJmPTB4MCxfMHgzODMwYWM9ITB4MSxfMHgyMWQwM2UsXzB4MzZjNzYxPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHg1MWE1MjdbXzB4YjE2NGNiKDB4Y2MpXSl7aWYoXzB4NTQyMGJjKXtpZihfMHg3OGUzY2I9XzB4NGE0ZDM3W18weGIxNjRjYigweDE3OCldLF8weDc4ZTNjYj5fMHg1MWE1MjdbXzB4YjE2NGNiKDB4MWIyKV0pe2ZvcihfMHg1Y2NiMDU9MHgwLF8weDJlMGEzYz1fMHg1MWE1MjdbXzB4YjE2NGNiKDB4MWIyKV0sXzB4MjRkNzQ5PV8weDVjY2IwNTtfMHgyNGQ3NDk8XzB4MmUwYTNjO18weDI0ZDc0OSsrKV8weDRmNTFkZVsncHVzaCddKF8weDNlYmRjZFsnX2FkZFByb3BlcnR5J10oXzB4M2QxZWI4LF8weDRhNGQzNyxfMHgyMmJjMTAsXzB4MjRkNzQ5LF8weDUxYTUyNykpO18weDNhYzJkNFtfMHhiMTY0Y2IoMHgxN2IpXT0hMHgwO31lbHNle2ZvcihfMHg1Y2NiMDU9MHgwLF8weDJlMGEzYz1fMHg3OGUzY2IsXzB4MjRkNzQ5PV8weDVjY2IwNTtfMHgyNGQ3NDk8XzB4MmUwYTNjO18weDI0ZDc0OSsrKV8weDRmNTFkZVtfMHhiMTY0Y2IoMHgxOGEpXShfMHgzZWJkY2RbJ19hZGRQcm9wZXJ0eSddKF8weDNkMWViOCxfMHg0YTRkMzcsXzB4MjJiYzEwLF8weDI0ZDc0OSxfMHg1MWE1MjcpKTt9XzB4NTFhNTI3W18weGIxNjRjYigweGVjKV0rPV8weDRmNTFkZVtfMHhiMTY0Y2IoMHgxNzgpXTt9aWYoIShfMHgyMmJjMTA9PT1fMHhiMTY0Y2IoMHhlOCl8fF8weDIyYmMxMD09PV8weGIxNjRjYigweDE4NykpJiYhXzB4NGFiNDkzJiZfMHgyMmJjMTAhPT1fMHhiMTY0Y2IoMHhkZSkmJl8weDIyYmMxMCE9PSdCdWZmZXInJiZfMHgyMmJjMTAhPT0nYmlnaW50Jyl7dmFyIF8weDg0NTBhNT1fMHgzYWRmOTFbXzB4YjE2NGNiKDB4MTc5KV18fF8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNzkpXTtpZih0aGlzWydfaXNTZXQnXShfMHg0YTRkMzcpPyhfMHgyNGQ3NDk9MHgwLF8weDRhNGQzN1tfMHhiMTY0Y2IoMHgxN2UpXShmdW5jdGlvbihfMHgzNjgzODcpe3ZhciBfMHgyNjVjMjM9XzB4YjE2NGNiO2lmKF8weGZhYjMyZisrLF8weDUxYTUyN1snYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weGZhYjMyZj5fMHg4NDUwYTUpe18weDM4MzBhYz0hMHgwO3JldHVybjt9aWYoIV8weDUxYTUyN1tfMHgyNjVjMjMoMHhkZildJiZfMHg1MWE1MjdbXzB4MjY1YzIzKDB4MTY2KV0mJl8weDUxYTUyN1tfMHgyNjVjMjMoMHhlYyldPl8weDUxYTUyN1tfMHgyNjVjMjMoMHgxNjMpXSl7XzB4MzgzMGFjPSEweDA7cmV0dXJuO31fMHg0ZjUxZGVbXzB4MjY1YzIzKDB4MThhKV0oXzB4M2ViZGNkWydfYWRkUHJvcGVydHknXShfMHgzZDFlYjgsXzB4NGE0ZDM3LF8weDI2NWMyMygweGVhKSxfMHgyNGQ3NDkrKyxfMHg1MWE1MjcsZnVuY3Rpb24oXzB4NDczNDU1KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NDczNDU1O307fShfMHgzNjgzODcpKSk7fSkpOnRoaXNbXzB4YjE2NGNiKDB4MTJlKV0oXzB4NGE0ZDM3KSYmXzB4NGE0ZDM3W18weGIxNjRjYigweDE3ZSldKGZ1bmN0aW9uKF8weDI2ODg4ZCxfMHgxZmI4YjIpe3ZhciBfMHg1M2I1NDM9XzB4YjE2NGNiO2lmKF8weGZhYjMyZisrLF8weDUxYTUyN1tfMHg1M2I1NDMoMHhlYyldKyssXzB4ZmFiMzJmPl8weDg0NTBhNSl7XzB4MzgzMGFjPSEweDA7cmV0dXJuO31pZighXzB4NTFhNTI3W18weDUzYjU0MygweGRmKV0mJl8weDUxYTUyN1tfMHg1M2I1NDMoMHgxNjYpXSYmXzB4NTFhNTI3W18weDUzYjU0MygweGVjKV0+XzB4NTFhNTI3W18weDUzYjU0MygweDE2MyldKXtfMHgzODMwYWM9ITB4MDtyZXR1cm47fXZhciBfMHg0MTI4OGY9XzB4MWZiOGIyW18weDUzYjU0MygweDE1YyldKCk7XzB4NDEyODhmW18weDUzYjU0MygweDE3OCldPjB4NjQmJihfMHg0MTI4OGY9XzB4NDEyODhmW18weDUzYjU0MygweDFhNildKDB4MCwweDY0KSsnLi4uJyksXzB4NGY1MWRlW18weDUzYjU0MygweDE4YSldKF8weDNlYmRjZFsnX2FkZFByb3BlcnR5J10oXzB4M2QxZWI4LF8weDRhNGQzNyxfMHg1M2I1NDMoMHgxNWQpLF8weDQxMjg4ZixfMHg1MWE1MjcsZnVuY3Rpb24oXzB4OWQ0Y2Q2KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4OWQ0Y2Q2O307fShfMHgyNjg4OGQpKSk7fSksIV8weDVkZmE3NCl7dHJ5e2ZvcihfMHg0Y2FiZmEgaW4gXzB4NGE0ZDM3KWlmKCEoXzB4NTQyMGJjJiZfMHgzNmM3NjFbXzB4YjE2NGNiKDB4ZWYpXShfMHg0Y2FiZmEpKSYmIXRoaXNbXzB4YjE2NGNiKDB4MTZkKV0oXzB4NGE0ZDM3LF8weDRjYWJmYSxfMHg1MWE1MjcpKXtpZihfMHhmYWIzMmYrKyxfMHg1MWE1MjdbXzB4YjE2NGNiKDB4ZWMpXSsrLF8weGZhYjMyZj5fMHg4NDUwYTUpe18weDM4MzBhYz0hMHgwO2JyZWFrO31pZighXzB4NTFhNTI3W18weGIxNjRjYigweGRmKV0mJl8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNjYpXSYmXzB4NTFhNTI3W18weGIxNjRjYigweGVjKV0+XzB4NTFhNTI3W18weGIxNjRjYigweDE2MyldKXtfMHgzODMwYWM9ITB4MDticmVhazt9XzB4NGY1MWRlWydwdXNoJ10oXzB4M2ViZGNkWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgzZDFlYjgsXzB4NDJkNmY2LF8weDRhNGQzNyxfMHgyMmJjMTAsXzB4NGNhYmZhLF8weDUxYTUyNykpO319Y2F0Y2h7fWlmKF8weDQyZDZmNltfMHhiMTY0Y2IoMHgxNTUpXT0hMHgwLF8weDJlZTU3ZSYmKF8weDQyZDZmNltfMHhiMTY0Y2IoMHgxODUpXT0hMHgwKSwhXzB4MzgzMGFjKXt2YXIgXzB4M2E2ZjA0PVtdW18weGIxNjRjYigweDFiMSldKHRoaXNbXzB4YjE2NGNiKDB4ZmUpXShfMHg0YTRkMzcpKVsnY29uY2F0J10odGhpc1tfMHhiMTY0Y2IoMHgxMzYpXShfMHg0YTRkMzcpKTtmb3IoXzB4MjRkNzQ5PTB4MCxfMHg3OGUzY2I9XzB4M2E2ZjA0W18weGIxNjRjYigweDE3OCldO18weDI0ZDc0OTxfMHg3OGUzY2I7XzB4MjRkNzQ5KyspaWYoXzB4NGNhYmZhPV8weDNhNmYwNFtfMHgyNGQ3NDldLCEoXzB4NTQyMGJjJiZfMHgzNmM3NjFbXzB4YjE2NGNiKDB4ZWYpXShfMHg0Y2FiZmFbXzB4YjE2NGNiKDB4MTVjKV0oKSkpJiYhdGhpc1tfMHhiMTY0Y2IoMHgxNmQpXShfMHg0YTRkMzcsXzB4NGNhYmZhLF8weDUxYTUyNykmJiFfMHg0MmQ2ZjZbJ19wXycrXzB4NGNhYmZhW18weGIxNjRjYigweDE1YyldKCldKXtpZihfMHhmYWIzMmYrKyxfMHg1MWE1MjdbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHhmYWIzMmY+XzB4ODQ1MGE1KXtfMHgzODMwYWM9ITB4MDticmVhazt9aWYoIV8weDUxYTUyN1snaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHg1MWE1MjdbXzB4YjE2NGNiKDB4MTY2KV0mJl8weDUxYTUyN1tfMHhiMTY0Y2IoMHhlYyldPl8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNjMpXSl7XzB4MzgzMGFjPSEweDA7YnJlYWs7fV8weDRmNTFkZVtfMHhiMTY0Y2IoMHgxOGEpXShfMHgzZWJkY2RbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDNkMWViOCxfMHg0MmQ2ZjYsXzB4NGE0ZDM3LF8weDIyYmMxMCxfMHg0Y2FiZmEsXzB4NTFhNTI3KSk7fX19fX1pZihfMHgzYWMyZDRbXzB4YjE2NGNiKDB4MTI2KV09XzB4MjJiYzEwLF8weDRhOGUwZj8oXzB4M2FjMmQ0W18weGIxNjRjYigweDE0ZSldPV8weDRhNGQzN1sndmFsdWVPZiddKCksdGhpc1tfMHhiMTY0Y2IoMHgxYTApXShfMHgyMmJjMTAsXzB4M2FjMmQ0LF8weDUxYTUyNyxfMHgzYWRmOTEpKTpfMHgyMmJjMTA9PT1fMHhiMTY0Y2IoMHgxODYpP18weDNhYzJkNFtfMHhiMTY0Y2IoMHgxNGUpXT10aGlzW18weGIxNjRjYigweDE1MCldW18weGIxNjRjYigweDE1YSldKF8weDRhNGQzNyk6XzB4MjJiYzEwPT09XzB4YjE2NGNiKDB4MTQzKT9fMHgzYWMyZDRbXzB4YjE2NGNiKDB4MTRlKV09XzB4NGE0ZDM3Wyd0b1N0cmluZyddKCk6XzB4MjJiYzEwPT09XzB4YjE2NGNiKDB4MTk1KT9fMHgzYWMyZDRbXzB4YjE2NGNiKDB4MTRlKV09dGhpc1tfMHhiMTY0Y2IoMHhkNCldW18weGIxNjRjYigweDE1YSldKF8weDRhNGQzNyk6XzB4MjJiYzEwPT09XzB4YjE2NGNiKDB4ZjApJiZ0aGlzW18weGIxNjRjYigweGY1KV0/XzB4M2FjMmQ0W18weGIxNjRjYigweDE0ZSldPXRoaXNbJ19TeW1ib2wnXVtfMHhiMTY0Y2IoMHhmYyldW18weGIxNjRjYigweDE1YyldW18weGIxNjRjYigweDE1YSldKF8weDRhNGQzNyk6IV8weDUxYTUyN1tfMHhiMTY0Y2IoMHhjYyldJiYhKF8weDIyYmMxMD09PSdudWxsJ3x8XzB4MjJiYzEwPT09XzB4YjE2NGNiKDB4MTg3KSkmJihkZWxldGUgXzB4M2FjMmQ0W18weGIxNjRjYigweDE0ZSldLF8weDNhYzJkNFtfMHhiMTY0Y2IoMHgxMmYpXT0hMHgwKSxfMHgzODMwYWMmJihfMHgzYWMyZDRbJ2NhcHBlZFByb3BzJ109ITB4MCksXzB4MjFkMDNlPV8weDUxYTUyN1snbm9kZSddW18weGIxNjRjYigweDEyOCldLF8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNjkpXVtfMHhiMTY0Y2IoMHgxMjgpXT1fMHgzYWMyZDQsdGhpc1tfMHhiMTY0Y2IoMHgxMjIpXShfMHgzYWMyZDQsXzB4NTFhNTI3KSxfMHg0ZjUxZGVbXzB4YjE2NGNiKDB4MTc4KV0pe2ZvcihfMHgyNGQ3NDk9MHgwLF8weDc4ZTNjYj1fMHg0ZjUxZGVbXzB4YjE2NGNiKDB4MTc4KV07XzB4MjRkNzQ5PF8weDc4ZTNjYjtfMHgyNGQ3NDkrKylfMHg0ZjUxZGVbXzB4MjRkNzQ5XShfMHgyNGQ3NDkpO31fMHgzZDFlYjhbXzB4YjE2NGNiKDB4MTc4KV0mJihfMHgzYWMyZDRbXzB4YjE2NGNiKDB4MTc5KV09XzB4M2QxZWI4KTt9Y2F0Y2goXzB4MjllN2ZjKXtfMHgzYjFmNTcoXzB4MjllN2ZjLF8weDNhYzJkNCxfMHg1MWE1MjcpO31yZXR1cm4gdGhpc1tfMHhiMTY0Y2IoMHgxOTMpXShfMHg0YTRkMzcsXzB4M2FjMmQ0KSx0aGlzW18weGIxNjRjYigweDE4MCldKF8weDNhYzJkNCxfMHg1MWE1MjcpLF8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNjkpXVtfMHhiMTY0Y2IoMHgxMjgpXT1fMHgyMWQwM2UsXzB4NTFhNTI3W18weGIxNjRjYigweDFhYSldLS0sXzB4NTFhNTI3WydhdXRvRXhwYW5kJ109XzB4OTI0NmE5LF8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNjYpXSYmXzB4NTFhNTI3W18weGIxNjRjYigweDE3MCldWydwb3AnXSgpLF8weDNhYzJkNDt9WydfZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4MWQ3YWQxKXt2YXIgXzB4MTZmZTAzPV8weDRmZjA1ZDtyZXR1cm4gT2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXT9PYmplY3RbXzB4MTZmZTAzKDB4ZDApXShfMHgxZDdhZDEpOltdO31bXzB4NGZmMDVkKDB4ZTIpXShfMHg0NDU2MGIpe3ZhciBfMHg0ZTA0YjM9XzB4NGZmMDVkO3JldHVybiEhKF8weDQ0NTYwYiYmXzB4MjY5NTY5WydTZXQnXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NDQ1NjBiKT09PSdbb2JqZWN0XFxcXHgyMFNldF0nJiZfMHg0NDU2MGJbXzB4NGUwNGIzKDB4MTdlKV0pO31bJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4MzZmNTIwLF8weDEzMjk3OCxfMHgxNTJjM2Mpe3ZhciBfMHgxNmNjZDE9XzB4NGZmMDVkO3JldHVybiBfMHgxNTJjM2NbXzB4MTZjY2QxKDB4MWE5KV0/dHlwZW9mIF8weDM2ZjUyMFtfMHgxMzI5NzhdPT1fMHgxNmNjZDEoMHgxMzIpOiEweDE7fVtfMHg0ZmYwNWQoMHhlNCldKF8weDUwNTAwZSl7dmFyIF8weDg0MjU2Nj1fMHg0ZmYwNWQsXzB4MzdmNjU2PScnO3JldHVybiBfMHgzN2Y2NTY9dHlwZW9mIF8weDUwNTAwZSxfMHgzN2Y2NTY9PT1fMHg4NDI1NjYoMHgxOTQpP3RoaXNbXzB4ODQyNTY2KDB4ZjQpXShfMHg1MDUwMGUpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJz9fMHgzN2Y2NTY9XzB4ODQyNTY2KDB4MTM1KTp0aGlzW18weDg0MjU2NigweGY0KV0oXzB4NTA1MDBlKT09PSdbb2JqZWN0XFxcXHgyMERhdGVdJz9fMHgzN2Y2NTY9XzB4ODQyNTY2KDB4MTg2KTp0aGlzW18weDg0MjU2NigweGY0KV0oXzB4NTA1MDBlKT09PSdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nP18weDM3ZjY1Nj1fMHg4NDI1NjYoMHgxNDMpOl8weDUwNTAwZT09PW51bGw/XzB4MzdmNjU2PV8weDg0MjU2NigweGU4KTpfMHg1MDUwMGVbXzB4ODQyNTY2KDB4MWE4KV0mJihfMHgzN2Y2NTY9XzB4NTA1MDBlW18weDg0MjU2NigweDFhOCldWyduYW1lJ118fF8weDM3ZjY1Nik6XzB4MzdmNjU2PT09XzB4ODQyNTY2KDB4MTg3KSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDUwNTAwZSBpbnN0YW5jZW9mIHRoaXNbXzB4ODQyNTY2KDB4MTE5KV0mJihfMHgzN2Y2NTY9XzB4ODQyNTY2KDB4MThlKSksXzB4MzdmNjU2O31bJ19vYmplY3RUb1N0cmluZyddKF8weDQ1ZGM1OCl7dmFyIF8weDQxZWJlZj1fMHg0ZmYwNWQ7cmV0dXJuIE9iamVjdFsncHJvdG90eXBlJ11bXzB4NDFlYmVmKDB4MTVjKV1bJ2NhbGwnXShfMHg0NWRjNTgpO31bXzB4NGZmMDVkKDB4MTRmKV0oXzB4Y2ZjMGJlKXt2YXIgXzB4MmE4Y2E0PV8weDRmZjA1ZDtyZXR1cm4gXzB4Y2ZjMGJlPT09XzB4MmE4Y2E0KDB4ZDMpfHxfMHhjZmMwYmU9PT1fMHgyYThjYTQoMHgxODkpfHxfMHhjZmMwYmU9PT0nbnVtYmVyJzt9WydfaXNQcmltaXRpdmVXcmFwcGVyVHlwZSddKF8weDEwYzVmNSl7dmFyIF8weDQ0MzU5Yj1fMHg0ZmYwNWQ7cmV0dXJuIF8weDEwYzVmNT09PSdCb29sZWFuJ3x8XzB4MTBjNWY1PT09XzB4NDQzNTliKDB4ZGUpfHxfMHgxMGM1ZjU9PT1fMHg0NDM1OWIoMHgxNzQpO31bXzB4NGZmMDVkKDB4MTA5KV0oXzB4MWRkMWY5LF8weDM4YWE2OSxfMHg1ZjAxYjYsXzB4MjU1ZjVjLF8weDI3NjBhZCxfMHg1NjJhZDgpe3ZhciBfMHg1MzMwOGU9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4Yjc5YTYwKXt2YXIgXzB4OTk4MGRmPV8weGUxYTMsXzB4MzM5YjUwPV8weDI3NjBhZFtfMHg5OTgwZGYoMHgxNjkpXVtfMHg5OTgwZGYoMHgxMjgpXSxfMHg0YTViNTU9XzB4Mjc2MGFkW18weDk5ODBkZigweDE2OSldW18weDk5ODBkZigweGRkKV0sXzB4MjhhNThlPV8weDI3NjBhZFtfMHg5OTgwZGYoMHgxNjkpXVtfMHg5OTgwZGYoMHgxMmIpXTtfMHgyNzYwYWRbXzB4OTk4MGRmKDB4MTY5KV1bXzB4OTk4MGRmKDB4MTJiKV09XzB4MzM5YjUwLF8weDI3NjBhZFsnbm9kZSddW18weDk5ODBkZigweGRkKV09dHlwZW9mIF8weDI1NWY1Yz09J251bWJlcic/XzB4MjU1ZjVjOl8weGI3OWE2MCxfMHgxZGQxZjlbXzB4OTk4MGRmKDB4MThhKV0oXzB4NTMzMDhlW18weDk5ODBkZigweDFhYyldKF8weDM4YWE2OSxfMHg1ZjAxYjYsXzB4MjU1ZjVjLF8weDI3NjBhZCxfMHg1NjJhZDgpKSxfMHgyNzYwYWRbXzB4OTk4MGRmKDB4MTY5KV1bXzB4OTk4MGRmKDB4MTJiKV09XzB4MjhhNThlLF8weDI3NjBhZFsnbm9kZSddW18weDk5ODBkZigweGRkKV09XzB4NGE1YjU1O307fVtfMHg0ZmYwNWQoMHgxMGIpXShfMHg0ZmM0MDUsXzB4OGNmMzM0LF8weDU2NTk1ZSxfMHgxNDEwOGEsXzB4YmVkNGEsXzB4NDU5ZGE2LF8weDRjNThlNyl7dmFyIF8weDM3NmJiZD1fMHg0ZmYwNWQsXzB4MjJkYTc3PXRoaXM7cmV0dXJuIF8weDhjZjMzNFtfMHgzNzZiYmQoMHhlMCkrXzB4YmVkNGFbXzB4Mzc2YmJkKDB4MTVjKV0oKV09ITB4MCxmdW5jdGlvbihfMHgyZmVmNzYpe3ZhciBfMHg0MzdkNmE9XzB4Mzc2YmJkLF8weDhlMTc1Nj1fMHg0NTlkYTZbXzB4NDM3ZDZhKDB4MTY5KV1bXzB4NDM3ZDZhKDB4MTI4KV0sXzB4MWRhMmUzPV8weDQ1OWRhNltfMHg0MzdkNmEoMHgxNjkpXVtfMHg0MzdkNmEoMHhkZCldLF8weDJlM2FlZD1fMHg0NTlkYTZbXzB4NDM3ZDZhKDB4MTY5KV1bXzB4NDM3ZDZhKDB4MTJiKV07XzB4NDU5ZGE2W18weDQzN2Q2YSgweDE2OSldW18weDQzN2Q2YSgweDEyYildPV8weDhlMTc1NixfMHg0NTlkYTZbXzB4NDM3ZDZhKDB4MTY5KV1bXzB4NDM3ZDZhKDB4ZGQpXT1fMHgyZmVmNzYsXzB4NGZjNDA1WydwdXNoJ10oXzB4MjJkYTc3W18weDQzN2Q2YSgweDFhYyldKF8weDU2NTk1ZSxfMHgxNDEwOGEsXzB4YmVkNGEsXzB4NDU5ZGE2LF8weDRjNThlNykpLF8weDQ1OWRhNltfMHg0MzdkNmEoMHgxNjkpXVtfMHg0MzdkNmEoMHgxMmIpXT1fMHgyZTNhZWQsXzB4NDU5ZGE2Wydub2RlJ11bXzB4NDM3ZDZhKDB4ZGQpXT1fMHgxZGEyZTM7fTt9W18weDRmZjA1ZCgweDFhYyldKF8weDFkYTQxZixfMHg1MTE5ZTgsXzB4M2NlMmJjLF8weDMyMmQ5MixfMHgxNWZkM2Epe3ZhciBfMHg0OTMwNmY9XzB4NGZmMDVkLF8weDE4N2YyMj10aGlzO18weDE1ZmQzYXx8KF8weDE1ZmQzYT1mdW5jdGlvbihfMHgyYWNiOGQsXzB4M2I1MDA3KXtyZXR1cm4gXzB4MmFjYjhkW18weDNiNTAwN107fSk7dmFyIF8weDFjNWE4Yj1fMHgzY2UyYmNbXzB4NDkzMDZmKDB4MTVjKV0oKSxfMHgyMDU5ZGY9XzB4MzIyZDkyWydleHByZXNzaW9uc1RvRXZhbHVhdGUnXXx8e30sXzB4MWNkZGVlPV8weDMyMmQ5MltfMHg0OTMwNmYoMHhjYyldLF8weDJmNDYxMz1fMHgzMjJkOTJbXzB4NDkzMDZmKDB4ZGYpXTt0cnl7dmFyIF8weDI1Njc2MD10aGlzW18weDQ5MzA2ZigweDEyZSldKF8weDFkYTQxZiksXzB4NTQ2NGU4PV8weDFjNWE4YjtfMHgyNTY3NjAmJl8weDU0NjRlOFsweDBdPT09J1xcXFx4MjcnJiYoXzB4NTQ2NGU4PV8weDU0NjRlOFtfMHg0OTMwNmYoMHgxNzMpXSgweDEsXzB4NTQ2NGU4WydsZW5ndGgnXS0weDIpKTt2YXIgXzB4MjFlYTdmPV8weDMyMmQ5MltfMHg0OTMwNmYoMHgxOWYpXT1fMHgyMDU5ZGZbXzB4NDkzMDZmKDB4ZTApK18weDU0NjRlOF07XzB4MjFlYTdmJiYoXzB4MzIyZDkyW18weDQ5MzA2ZigweGNjKV09XzB4MzIyZDkyW18weDQ5MzA2ZigweGNjKV0rMHgxKSxfMHgzMjJkOTJbXzB4NDkzMDZmKDB4ZGYpXT0hIV8weDIxZWE3Zjt2YXIgXzB4NTc1NDNlPXR5cGVvZiBfMHgzY2UyYmM9PV8weDQ5MzA2ZigweGYwKSxfMHgzZGEzNjI9eyduYW1lJzpfMHg1NzU0M2V8fF8weDI1Njc2MD9fMHgxYzVhOGI6dGhpc1tfMHg0OTMwNmYoMHgxNDgpXShfMHgxYzVhOGIpfTtpZihfMHg1NzU0M2UmJihfMHgzZGEzNjJbXzB4NDkzMDZmKDB4ZjApXT0hMHgwKSwhKF8weDUxMTllOD09PV8weDQ5MzA2ZigweDEzNSl8fF8weDUxMTllOD09PV8weDQ5MzA2ZigweDE5YikpKXt2YXIgXzB4MWE0NzAyPXRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXShfMHgxZGE0MWYsXzB4M2NlMmJjKTtpZihfMHgxYTQ3MDImJihfMHgxYTQ3MDJbXzB4NDkzMDZmKDB4MTZiKV0mJihfMHgzZGEzNjJbXzB4NDkzMDZmKDB4ZjkpXT0hMHgwKSxfMHgxYTQ3MDJbXzB4NDkzMDZmKDB4MTA1KV0mJiFfMHgyMWVhN2YmJiFfMHgzMjJkOTJbXzB4NDkzMDZmKDB4MTQ5KV0pKXJldHVybiBfMHgzZGEzNjJbXzB4NDkzMDZmKDB4MTQxKV09ITB4MCx0aGlzW18weDQ5MzA2ZigweGViKV0oXzB4M2RhMzYyLF8weDMyMmQ5MiksXzB4M2RhMzYyO312YXIgXzB4NTA4MjkxO3RyeXtfMHg1MDgyOTE9XzB4MTVmZDNhKF8weDFkYTQxZixfMHgzY2UyYmMpO31jYXRjaChfMHgyOTBkNjYpe3JldHVybiBfMHgzZGEzNjI9eyduYW1lJzpfMHgxYzVhOGIsJ3R5cGUnOid1bmtub3duJywnZXJyb3InOl8weDI5MGQ2NlsnbWVzc2FnZSddfSx0aGlzW18weDQ5MzA2ZigweGViKV0oXzB4M2RhMzYyLF8weDMyMmQ5MiksXzB4M2RhMzYyO312YXIgXzB4MWFhN2RjPXRoaXNbXzB4NDkzMDZmKDB4ZTQpXShfMHg1MDgyOTEpLF8weDViZGZhYT10aGlzW18weDQ5MzA2ZigweDE0ZildKF8weDFhYTdkYyk7aWYoXzB4M2RhMzYyW18weDQ5MzA2ZigweDEyNildPV8weDFhYTdkYyxfMHg1YmRmYWEpdGhpc1tfMHg0OTMwNmYoMHhlYildKF8weDNkYTM2MixfMHgzMjJkOTIsXzB4NTA4MjkxLGZ1bmN0aW9uKCl7dmFyIF8weDVlODI0YT1fMHg0OTMwNmY7XzB4M2RhMzYyWyd2YWx1ZSddPV8weDUwODI5MVtfMHg1ZTgyNGEoMHgxMzApXSgpLCFfMHgyMWVhN2YmJl8weDE4N2YyMltfMHg1ZTgyNGEoMHgxYTApXShfMHgxYWE3ZGMsXzB4M2RhMzYyLF8weDMyMmQ5Mix7fSk7fSk7ZWxzZXt2YXIgXzB4MzJjMzYxPV8weDMyMmQ5MltfMHg0OTMwNmYoMHgxNjYpXSYmXzB4MzIyZDkyW18weDQ5MzA2ZigweDFhYSldPF8weDMyMmQ5MltfMHg0OTMwNmYoMHhlMyldJiZfMHgzMjJkOTJbXzB4NDkzMDZmKDB4MTcwKV1bXzB4NDkzMDZmKDB4MWE3KV0oXzB4NTA4MjkxKTwweDAmJl8weDFhYTdkYyE9PV8weDQ5MzA2ZigweDEzMikmJl8weDMyMmQ5MltfMHg0OTMwNmYoMHhlYyldPF8weDMyMmQ5MltfMHg0OTMwNmYoMHgxNjMpXTtfMHgzMmMzNjF8fF8weDMyMmQ5MltfMHg0OTMwNmYoMHgxYWEpXTxfMHgxY2RkZWV8fF8weDIxZWE3Zj8odGhpc1tfMHg0OTMwNmYoMHgxNGIpXShfMHgzZGEzNjIsXzB4NTA4MjkxLF8weDMyMmQ5MixfMHgyMWVhN2Z8fHt9KSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NTA4MjkxLF8weDNkYTM2MikpOnRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgzZGEzNjIsXzB4MzIyZDkyLF8weDUwODI5MSxmdW5jdGlvbigpe3ZhciBfMHg1N2MzNzc9XzB4NDkzMDZmO18weDFhYTdkYz09PSdudWxsJ3x8XzB4MWFhN2RjPT09XzB4NTdjMzc3KDB4MTg3KXx8KGRlbGV0ZSBfMHgzZGEzNjJbXzB4NTdjMzc3KDB4MTRlKV0sXzB4M2RhMzYyW18weDU3YzM3NygweDEyZildPSEweDApO30pO31yZXR1cm4gXzB4M2RhMzYyO31maW5hbGx5e18weDMyMmQ5MlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4MjA1OWRmLF8weDMyMmQ5MltfMHg0OTMwNmYoMHhjYyldPV8weDFjZGRlZSxfMHgzMjJkOTJbXzB4NDkzMDZmKDB4ZGYpXT1fMHgyZjQ2MTM7fX1bXzB4NGZmMDVkKDB4MWEwKV0oXzB4MWY4NDBiLF8weDQ3YWZiNSxfMHgxYmQ5NWEsXzB4NDExZGI3KXt2YXIgXzB4M2Q4OGM3PV8weDRmZjA1ZCxfMHg1ZDM4MDc9XzB4NDExZGI3WydzdHJMZW5ndGgnXXx8XzB4MWJkOTVhWydzdHJMZW5ndGgnXTtpZigoXzB4MWY4NDBiPT09XzB4M2Q4OGM3KDB4MTg5KXx8XzB4MWY4NDBiPT09J1N0cmluZycpJiZfMHg0N2FmYjVbXzB4M2Q4OGM3KDB4MTRlKV0pe2xldCBfMHg5Y2JiND1fMHg0N2FmYjVbJ3ZhbHVlJ11bXzB4M2Q4OGM3KDB4MTc4KV07XzB4MWJkOTVhW18weDNkODhjNygweDE1NyldKz1fMHg5Y2JiNCxfMHgxYmQ5NWFbXzB4M2Q4OGM3KDB4MTU3KV0+XzB4MWJkOTVhWyd0b3RhbFN0ckxlbmd0aCddPyhfMHg0N2FmYjVbXzB4M2Q4OGM3KDB4MTJmKV09JycsZGVsZXRlIF8weDQ3YWZiNVtfMHgzZDg4YzcoMHgxNGUpXSk6XzB4OWNiYjQ+XzB4NWQzODA3JiYoXzB4NDdhZmI1W18weDNkODhjNygweDEyZildPV8weDQ3YWZiNVtfMHgzZDg4YzcoMHgxNGUpXVsnc3Vic3RyJ10oMHgwLF8weDVkMzgwNyksZGVsZXRlIF8weDQ3YWZiNVsndmFsdWUnXSk7fX1bJ19pc01hcCddKF8weDIyZWRhMCl7dmFyIF8weDIyODkyMT1fMHg0ZmYwNWQ7cmV0dXJuISEoXzB4MjJlZGEwJiZfMHgyNjk1NjlbXzB4MjI4OTIxKDB4MTVkKV0mJnRoaXNbXzB4MjI4OTIxKDB4ZjQpXShfMHgyMmVkYTApPT09XzB4MjI4OTIxKDB4MTIzKSYmXzB4MjJlZGEwW18weDIyODkyMSgweDE3ZSldKTt9W18weDRmZjA1ZCgweDE0OCldKF8weDNlY2IxYSl7dmFyIF8weDMxNDZkZT1fMHg0ZmYwNWQ7aWYoXzB4M2VjYjFhW18weDMxNDZkZSgweDE5ZCldKC9eXFxcXGQrJC8pKXJldHVybiBfMHgzZWNiMWE7dmFyIF8weDI4ZTY3Njt0cnl7XzB4MjhlNjc2PUpTT05bXzB4MzE0NmRlKDB4MTQ3KV0oJycrXzB4M2VjYjFhKTt9Y2F0Y2h7XzB4MjhlNjc2PSdcXFxceDIyJyt0aGlzW18weDMxNDZkZSgweGY0KV0oXzB4M2VjYjFhKSsnXFxcXHgyMic7fXJldHVybiBfMHgyOGU2NzZbXzB4MzE0NmRlKDB4MTlkKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgyOGU2NzY9XzB4MjhlNjc2W18weDMxNDZkZSgweDE3MyldKDB4MSxfMHgyOGU2NzZbXzB4MzE0NmRlKDB4MTc4KV0tMHgyKTpfMHgyOGU2NzY9XzB4MjhlNjc2WydyZXBsYWNlJ10oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgzMTQ2ZGUoMHgxNGEpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHgzMTQ2ZGUoMHgxNGEpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4MjhlNjc2O31bXzB4NGZmMDVkKDB4ZWIpXShfMHg0Y2UxOTUsXzB4NDEyMmE2LF8weDFkNTEwZixfMHgxOGVkNWYpe3ZhciBfMHgyZWUyNTI9XzB4NGZmMDVkO3RoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHg0Y2UxOTUsXzB4NDEyMmE2KSxfMHgxOGVkNWYmJl8weDE4ZWQ1ZigpLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgxZDUxMGYsXzB4NGNlMTk1KSx0aGlzW18weDJlZTI1MigweDE4MCldKF8weDRjZTE5NSxfMHg0MTIyYTYpO31bXzB4NGZmMDVkKDB4MTIyKV0oXzB4NDMwOWFhLF8weDQzY2E4Yil7dmFyIF8weDMxN2FlNj1fMHg0ZmYwNWQ7dGhpc1tfMHgzMTdhZTYoMHgxMGEpXShfMHg0MzA5YWEsXzB4NDNjYThiKSx0aGlzW18weDMxN2FlNigweGQ3KV0oXzB4NDMwOWFhLF8weDQzY2E4YiksdGhpc1tfMHgzMTdhZTYoMHgxYWUpXShfMHg0MzA5YWEsXzB4NDNjYThiKSx0aGlzW18weDMxN2FlNigweDEwZildKF8weDQzMDlhYSxfMHg0M2NhOGIpO31bXzB4NGZmMDVkKDB4MTBhKV0oXzB4YTUzM2RkLF8weDQ0MThlNil7fVtfMHg0ZmYwNWQoMHhkNyldKF8weDJmMjg0ZCxfMHhiZTk4M2Mpe31bXzB4NGZmMDVkKDB4MTEzKV0oXzB4MjVmMDljLF8weDJhOTJjMyl7fVtfMHg0ZmYwNWQoMHgxODEpXShfMHg1NGQ5MTIpe3ZhciBfMHgxYTRkMzY9XzB4NGZmMDVkO3JldHVybiBfMHg1NGQ5MTI9PT10aGlzW18weDFhNGQzNigweDE5MildO31bXzB4NGZmMDVkKDB4MTgwKV0oXzB4NDAxYjM4LF8weDNiY2M1OCl7dmFyIF8weDNlNTYwYj1fMHg0ZmYwNWQ7dGhpc1tfMHgzZTU2MGIoMHgxMTMpXShfMHg0MDFiMzgsXzB4M2JjYzU4KSx0aGlzW18weDNlNTYwYigweDE1NCldKF8weDQwMWIzOCksXzB4M2JjYzU4W18weDNlNTYwYigweDE2NyldJiZ0aGlzW18weDNlNTYwYigweDEzZildKF8weDQwMWIzOCksdGhpc1snX2FkZEZ1bmN0aW9uc05vZGUnXShfMHg0MDFiMzgsXzB4M2JjYzU4KSx0aGlzWydfYWRkTG9hZE5vZGUnXShfMHg0MDFiMzgsXzB4M2JjYzU4KSx0aGlzW18weDNlNTYwYigweDE2YSldKF8weDQwMWIzOCk7fVtfMHg0ZmYwNWQoMHgxOTMpXShfMHgxYTk4OTIsXzB4NGViM2FjKXt2YXIgXzB4NDQ1NDQ0PV8weDRmZjA1ZDtsZXQgXzB4MWVhYzdiO3RyeXtfMHgyNjk1NjlbXzB4NDQ1NDQ0KDB4MWEyKV0mJihfMHgxZWFjN2I9XzB4MjY5NTY5W18weDQ0NTQ0NCgweDFhMildW18weDQ0NTQ0NCgweDE1OSldLF8weDI2OTU2OVtfMHg0NDU0NDQoMHgxYTIpXVtfMHg0NDU0NDQoMHgxNTkpXT1mdW5jdGlvbigpe30pLF8weDFhOTg5MiYmdHlwZW9mIF8weDFhOTg5MltfMHg0NDU0NDQoMHgxNzgpXT09XzB4NDQ1NDQ0KDB4MWE0KSYmKF8weDRlYjNhY1tfMHg0NDU0NDQoMHgxNzgpXT1fMHgxYTk4OTJbXzB4NDQ1NDQ0KDB4MTc4KV0pO31jYXRjaHt9ZmluYWxseXtfMHgxZWFjN2ImJihfMHgyNjk1NjlbXzB4NDQ1NDQ0KDB4MWEyKV1bXzB4NDQ1NDQ0KDB4MTU5KV09XzB4MWVhYzdiKTt9aWYoXzB4NGViM2FjWyd0eXBlJ109PT1fMHg0NDU0NDQoMHgxYTQpfHxfMHg0ZWIzYWNbJ3R5cGUnXT09PSdOdW1iZXInKXtpZihpc05hTihfMHg0ZWIzYWNbJ3ZhbHVlJ10pKV8weDRlYjNhY1tfMHg0NDU0NDQoMHgxOTgpXT0hMHgwLGRlbGV0ZSBfMHg0ZWIzYWNbXzB4NDQ1NDQ0KDB4MTRlKV07ZWxzZSBzd2l0Y2goXzB4NGViM2FjW18weDQ0NTQ0NCgweDE0ZSldKXtjYXNlIE51bWJlcltfMHg0NDU0NDQoMHgxNTYpXTpfMHg0ZWIzYWNbJ3Bvc2l0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHg0ZWIzYWNbXzB4NDQ1NDQ0KDB4MTRlKV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4NDQ1NDQ0KDB4MTRjKV06XzB4NGViM2FjW18weDQ0NTQ0NCgweDExZildPSEweDAsZGVsZXRlIF8weDRlYjNhY1sndmFsdWUnXTticmVhaztjYXNlIDB4MDp0aGlzWydfaXNOZWdhdGl2ZVplcm8nXShfMHg0ZWIzYWNbXzB4NDQ1NDQ0KDB4MTRlKV0pJiYoXzB4NGViM2FjW18weDQ0NTQ0NCgweDExYyldPSEweDApO2JyZWFrO319ZWxzZSBfMHg0ZWIzYWNbXzB4NDQ1NDQ0KDB4MTI2KV09PT1fMHg0NDU0NDQoMHgxMzIpJiZ0eXBlb2YgXzB4MWE5ODkyW18weDQ0NTQ0NCgweDEzOSldPT1fMHg0NDU0NDQoMHgxODkpJiZfMHgxYTk4OTJbJ25hbWUnXSYmXzB4NGViM2FjW18weDQ0NTQ0NCgweDEzOSldJiZfMHgxYTk4OTJbXzB4NDQ1NDQ0KDB4MTM5KV0hPT1fMHg0ZWIzYWNbXzB4NDQ1NDQ0KDB4MTM5KV0mJihfMHg0ZWIzYWNbXzB4NDQ1NDQ0KDB4MTM3KV09XzB4MWE5ODkyWyduYW1lJ10pO31bXzB4NGZmMDVkKDB4MTEwKV0oXzB4MzVmYzk5KXt2YXIgXzB4MmNkYjdkPV8weDRmZjA1ZDtyZXR1cm4gMHgxL18weDM1ZmM5OT09PU51bWJlcltfMHgyY2RiN2QoMHgxNGMpXTt9W18weDRmZjA1ZCgweDEzZildKF8weDM2YTk1MCl7dmFyIF8weDM2OWY2ZT1fMHg0ZmYwNWQ7IV8weDM2YTk1MFsncHJvcHMnXXx8IV8weDM2YTk1MFsncHJvcHMnXVtfMHgzNjlmNmUoMHgxNzgpXXx8XzB4MzZhOTUwW18weDM2OWY2ZSgweDEyNildPT09XzB4MzY5ZjZlKDB4MTM1KXx8XzB4MzZhOTUwW18weDM2OWY2ZSgweDEyNildPT09J01hcCd8fF8weDM2YTk1MFtfMHgzNjlmNmUoMHgxMjYpXT09PV8weDM2OWY2ZSgweGVhKXx8XzB4MzZhOTUwWydwcm9wcyddW18weDM2OWY2ZSgweDE3MSldKGZ1bmN0aW9uKF8weDNmODZmNSxfMHgzMTFmNzYpe3ZhciBfMHgyMzYzODU9XzB4MzY5ZjZlLF8weDM1YjQwND1fMHgzZjg2ZjVbXzB4MjM2Mzg1KDB4MTM5KV1bXzB4MjM2Mzg1KDB4MTgzKV0oKSxfMHg2NTAxNTY9XzB4MzExZjc2W18weDIzNjM4NSgweDEzOSldWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weDM1YjQwNDxfMHg2NTAxNTY/LTB4MTpfMHgzNWI0MDQ+XzB4NjUwMTU2PzB4MToweDA7fSk7fVtfMHg0ZmYwNWQoMHgxMzMpXShfMHgyZjFlYmMsXzB4NTAxMDVhKXt2YXIgXzB4YmZjZDdkPV8weDRmZjA1ZDtpZighKF8weDUwMTA1YVtfMHhiZmNkN2QoMHgxYTkpXXx8IV8weDJmMWViY1tfMHhiZmNkN2QoMHgxNzkpXXx8IV8weDJmMWViY1tfMHhiZmNkN2QoMHgxNzkpXVsnbGVuZ3RoJ10pKXtmb3IodmFyIF8weDI1M2E2YT1bXSxfMHgyMTAyYjY9W10sXzB4MmJiOTA4PTB4MCxfMHg1NDZmODk9XzB4MmYxZWJjW18weGJmY2Q3ZCgweDE3OSldW18weGJmY2Q3ZCgweDE3OCldO18weDJiYjkwODxfMHg1NDZmODk7XzB4MmJiOTA4Kyspe3ZhciBfMHgxY2JkM2U9XzB4MmYxZWJjWydwcm9wcyddW18weDJiYjkwOF07XzB4MWNiZDNlWyd0eXBlJ109PT0nZnVuY3Rpb24nP18weDI1M2E2YVtfMHhiZmNkN2QoMHgxOGEpXShfMHgxY2JkM2UpOl8weDIxMDJiNltfMHhiZmNkN2QoMHgxOGEpXShfMHgxY2JkM2UpO31pZighKCFfMHgyMTAyYjZbJ2xlbmd0aCddfHxfMHgyNTNhNmFbXzB4YmZjZDdkKDB4MTc4KV08PTB4MSkpe18weDJmMWViY1tfMHhiZmNkN2QoMHgxNzkpXT1fMHgyMTAyYjY7dmFyIF8weDFhNDBmMz17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgyNTNhNmF9O3RoaXNbJ19zZXROb2RlSWQnXShfMHgxYTQwZjMsXzB4NTAxMDVhKSx0aGlzW18weGJmY2Q3ZCgweDExMyldKF8weDFhNDBmMyxfMHg1MDEwNWEpLHRoaXNbXzB4YmZjZDdkKDB4MTU0KV0oXzB4MWE0MGYzKSx0aGlzW18weGJmY2Q3ZCgweDEwZildKF8weDFhNDBmMyxfMHg1MDEwNWEpLF8weDFhNDBmM1snaWQnXSs9J1xcXFx4MjBmJyxfMHgyZjFlYmNbXzB4YmZjZDdkKDB4MTc5KV1bXzB4YmZjZDdkKDB4MTIwKV0oXzB4MWE0MGYzKTt9fX1bXzB4NGZmMDVkKDB4MTg4KV0oXzB4NDZlMjU5LF8weDQ3ZjRlYil7fVtfMHg0ZmYwNWQoMHgxNTQpXShfMHgxZDlmNjQpe31bJ19pc0FycmF5J10oXzB4ZGEzNWEzKXt2YXIgXzB4MmEyOGRkPV8weDRmZjA1ZDtyZXR1cm4gQXJyYXlbJ2lzQXJyYXknXShfMHhkYTM1YTMpfHx0eXBlb2YgXzB4ZGEzNWEzPT0nb2JqZWN0JyYmdGhpc1tfMHgyYTI4ZGQoMHhmNCldKF8weGRhMzVhMyk9PT1fMHgyYTI4ZGQoMHhkYSk7fVtfMHg0ZmYwNWQoMHgxMGYpXShfMHgyYWQ2MmIsXzB4M2Q4YjVjKXt9WydfY2xlYW5Ob2RlJ10oXzB4MTI1NjQ0KXt2YXIgXzB4MTU3M2MyPV8weDRmZjA1ZDtkZWxldGUgXzB4MTI1NjQ0W18weDE1NzNjMigweGNhKV0sZGVsZXRlIF8weDEyNTY0NFsnX2hhc1NldE9uSXRzUGF0aCddLGRlbGV0ZSBfMHgxMjU2NDRbXzB4MTU3M2MyKDB4MTU4KV07fVsnX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDIzMDY2ZixfMHgzMWMxNGUpe319bGV0IF8weDUzMGRlOT1uZXcgXzB4NGJlYzc1KCksXzB4NWJiMTRiPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDQ2MmY0ZD17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDU0MzlkNihfMHg0NTNkZmEsXzB4NDE1NzA2LF8weDJkNzY3NSxfMHgyMjAzN2MsXzB4NDNlYTkyLF8weDUwZjVmNil7dmFyIF8weDI3YjA2Yz1fMHg0ZmYwNWQ7bGV0IF8weDRmMDE3ZCxfMHg0NzgyZjc7dHJ5e18weDQ3ODJmNz1fMHg0MWNlZTUoKSxfMHg0ZjAxN2Q9XzB4MzA5NDA2W18weDQxNTcwNl0sIV8weDRmMDE3ZHx8XzB4NDc4MmY3LV8weDRmMDE3ZFsndHMnXT4weDFmNCYmXzB4NGYwMTdkW18weDI3YjA2YygweDEyMSldJiZfMHg0ZjAxN2RbJ3RpbWUnXS9fMHg0ZjAxN2RbXzB4MjdiMDZjKDB4MTIxKV08MHg2ND8oXzB4MzA5NDA2W18weDQxNTcwNl09XzB4NGYwMTdkPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NDc4MmY3fSxfMHgzMDk0MDZbJ2hpdHMnXT17fSk6XzB4NDc4MmY3LV8weDMwOTQwNlsnaGl0cyddWyd0cyddPjB4MzImJl8weDMwOTQwNltfMHgyN2IwNmMoMHgxNjApXVtfMHgyN2IwNmMoMHgxMjEpXSYmXzB4MzA5NDA2WydoaXRzJ11bJ3RpbWUnXS9fMHgzMDk0MDZbJ2hpdHMnXVtfMHgyN2IwNmMoMHgxMjEpXTwweDY0JiYoXzB4MzA5NDA2W18weDI3YjA2YygweDE2MCldPXt9KTtsZXQgXzB4ZTc4NGE2PVtdLF8weDM3NWNhYz1fMHg0ZjAxN2RbXzB4MjdiMDZjKDB4ZGMpXXx8XzB4MzA5NDA2WydoaXRzJ11bJ3JlZHVjZUxpbWl0cyddP18weDQ2MmY0ZDpfMHg1YmIxNGIsXzB4MzUxYjI4PV8weDU5NjY5ZT0+e3ZhciBfMHg1YmUxNTI9XzB4MjdiMDZjO2xldCBfMHgyMWNjNWM9e307cmV0dXJuIF8weDIxY2M1Y1sncHJvcHMnXT1fMHg1OTY2OWVbXzB4NWJlMTUyKDB4MTc5KV0sXzB4MjFjYzVjW18weDViZTE1MigweDFiMildPV8weDU5NjY5ZVtfMHg1YmUxNTIoMHgxYjIpXSxfMHgyMWNjNWNbJ3N0ckxlbmd0aCddPV8weDU5NjY5ZVtfMHg1YmUxNTIoMHgxNzcpXSxfMHgyMWNjNWNbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4NTk2NjllW18weDViZTE1MigweGZhKV0sXzB4MjFjYzVjW18weDViZTE1MigweDE2MyldPV8weDU5NjY5ZVtfMHg1YmUxNTIoMHgxNjMpXSxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4ZTMpXT1fMHg1OTY2OWVbXzB4NWJlMTUyKDB4ZTMpXSxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4MTY3KV09ITB4MSxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4MWE5KV09IV8weGI2YzcyOCxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4Y2MpXT0weDEsXzB4MjFjYzVjW18weDViZTE1MigweDFhYSldPTB4MCxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4ZDgpXT0ncm9vdF9leHBfaWQnLF8weDIxY2M1Y1sncm9vdEV4cHJlc3Npb24nXT0ncm9vdF9leHAnLF8weDIxY2M1Y1tfMHg1YmUxNTIoMHgxNjYpXT0hMHgwLF8weDIxY2M1Y1snYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddPVtdLF8weDIxY2M1Y1tfMHg1YmUxNTIoMHhlYyldPTB4MCxfMHgyMWNjNWNbJ3Jlc29sdmVHZXR0ZXJzJ109ITB4MCxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4MTU3KV09MHgwLF8weDIxY2M1Y1tfMHg1YmUxNTIoMHgxNjkpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgyMWNjNWM7fTtmb3IodmFyIF8weDU2NTlkNT0weDA7XzB4NTY1OWQ1PF8weDQzZWE5MltfMHgyN2IwNmMoMHgxNzgpXTtfMHg1NjU5ZDUrKylfMHhlNzg0YTZbXzB4MjdiMDZjKDB4MThhKV0oXzB4NTMwZGU5W18weDI3YjA2YygweDE0YildKHsndGltZU5vZGUnOl8weDQ1M2RmYT09PV8weDI3YjA2YygweDE3Mil8fHZvaWQgMHgwfSxfMHg0M2VhOTJbXzB4NTY1OWQ1XSxfMHgzNTFiMjgoXzB4Mzc1Y2FjKSx7fSkpO2lmKF8weDQ1M2RmYT09PV8weDI3YjA2YygweDE0Mikpe2xldCBfMHgzZDUwNmI9RXJyb3JbXzB4MjdiMDZjKDB4ZDIpXTt0cnl7RXJyb3JbXzB4MjdiMDZjKDB4ZDIpXT0weDEvMHgwLF8weGU3ODRhNlsncHVzaCddKF8weDUzMGRlOVsnc2VyaWFsaXplJ10oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDI3YjA2YygweDEzYSldLF8weDM1MWIyOChfMHgzNzVjYWMpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weDI3YjA2YygweGQyKV09XzB4M2Q1MDZiO319cmV0dXJueydtZXRob2QnOl8weDI3YjA2YygweDEzMSksJ3ZlcnNpb24nOl8weDU4MzkyNSwnYXJncyc6W3sndHMnOl8weDJkNzY3NSwnc2Vzc2lvbic6XzB4MjIwMzdjLCdhcmdzJzpfMHhlNzg0YTYsJ2lkJzpfMHg0MTU3MDYsJ2NvbnRleHQnOl8weDUwZjVmNn1dfTt9Y2F0Y2goXzB4NTBiMjFjKXtyZXR1cm57J21ldGhvZCc6XzB4MjdiMDZjKDB4MTMxKSwndmVyc2lvbic6XzB4NTgzOTI1LCdhcmdzJzpbeyd0cyc6XzB4MmQ3Njc1LCdzZXNzaW9uJzpfMHgyMjAzN2MsJ2FyZ3MnOlt7J3R5cGUnOl8weDI3YjA2YygweGYyKSwnZXJyb3InOl8weDUwYjIxYyYmXzB4NTBiMjFjW18weDI3YjA2YygweDE1MildfV0sJ2lkJzpfMHg0MTU3MDYsJ2NvbnRleHQnOl8weDUwZjVmNn1dfTt9ZmluYWxseXt0cnl7aWYoXzB4NGYwMTdkJiZfMHg0NzgyZjcpe2xldCBfMHg2ZTNmNTA9XzB4NDFjZWU1KCk7XzB4NGYwMTdkW18weDI3YjA2YygweDEyMSldKyssXzB4NGYwMTdkW18weDI3YjA2YygweDE3MildKz1fMHg1MGQ3ZDEoXzB4NDc4MmY3LF8weDZlM2Y1MCksXzB4NGYwMTdkWyd0cyddPV8weDZlM2Y1MCxfMHgzMDk0MDZbXzB4MjdiMDZjKDB4MTYwKV1bXzB4MjdiMDZjKDB4MTIxKV0rKyxfMHgzMDk0MDZbJ2hpdHMnXVtfMHgyN2IwNmMoMHgxNzIpXSs9XzB4NTBkN2QxKF8weDQ3ODJmNyxfMHg2ZTNmNTApLF8weDMwOTQwNltfMHgyN2IwNmMoMHgxNjApXVsndHMnXT1fMHg2ZTNmNTAsKF8weDRmMDE3ZFtfMHgyN2IwNmMoMHgxMjEpXT4weDMyfHxfMHg0ZjAxN2RbXzB4MjdiMDZjKDB4MTcyKV0+MHg2NCkmJihfMHg0ZjAxN2RbXzB4MjdiMDZjKDB4ZGMpXT0hMHgwKSwoXzB4MzA5NDA2WydoaXRzJ11bJ2NvdW50J10+MHgzZTh8fF8weDMwOTQwNltfMHgyN2IwNmMoMHgxNjApXVtfMHgyN2IwNmMoMHgxNzIpXT4weDEyYykmJihfMHgzMDk0MDZbXzB4MjdiMDZjKDB4MTYwKV1bXzB4MjdiMDZjKDB4ZGMpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHg1NDM5ZDY7fSgoXzB4NDM2YjJmLF8weDVlOWU2OCxfMHg3MzlmNTEsXzB4MjAwODU5LF8weDVhZGU0NSxfMHgzYzBjNGEsXzB4MmU5ZWY0LF8weDUyZjdiOSxfMHg0ODliY2MsXzB4NGIwOTA0KT0+e3ZhciBfMHgzZWIzNGI9XzB4MjRhZTMyO2lmKF8weDQzNmIyZlsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4NDM2YjJmW18weDNlYjM0YigweDEwYyldO2lmKCFKKF8weDQzNmIyZixfMHg1MmY3YjksXzB4NWFkZTQ1KSlyZXR1cm4gXzB4NDM2YjJmWydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHg0MzZiMmZbJ19jb25zb2xlX25pbmphJ107bGV0IF8weDE3ZWQxZT1XKF8weDQzNmIyZiksXzB4NWI4YWFlPV8weDE3ZWQxZVtfMHgzZWIzNGIoMHhmMSldLF8weDM1OGY4Nj1fMHgxN2VkMWVbXzB4M2ViMzRiKDB4MTA2KV0sXzB4MWRiMGM3PV8weDE3ZWQxZVtfMHgzZWIzNGIoMHgxNjgpXSxfMHg1ZWRhYjI9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgyMzA2YTY9WShfMHg0MzZiMmYsXzB4NDg5YmNjLF8weDVlZGFiMixfMHgzYzBjNGEpLF8weDVjMjA5OT1fMHgzOWM2NTc9PntfMHg1ZWRhYjJbJ3RzJ11bXzB4MzljNjU3XT1fMHgzNThmODYoKTt9LF8weDNhOTdlMz0oXzB4MjMxNjAzLF8weDMyNTMxZSk9Pnt2YXIgXzB4MmExNTExPV8weDNlYjM0YjtsZXQgXzB4NTAxOWFhPV8weDVlZGFiMlsndHMnXVtfMHgzMjUzMWVdO2lmKGRlbGV0ZSBfMHg1ZWRhYjJbJ3RzJ11bXzB4MzI1MzFlXSxfMHg1MDE5YWEpe2xldCBfMHgyNmZmZmY9XzB4NWI4YWFlKF8weDUwMTlhYSxfMHgzNThmODYoKSk7XzB4NDgyNzI4KF8weDIzMDZhNihfMHgyYTE1MTEoMHgxNzIpLF8weDIzMTYwMyxfMHgxZGIwYzcoKSxfMHgxMDljNGYsW18weDI2ZmZmZl0sXzB4MzI1MzFlKSk7fX0sXzB4MTYwZjQyPV8weDQwYTM4OT0+XzB4MTc0ZjNlPT57dmFyIF8weDU4MTIzNj1fMHgzZWIzNGI7dHJ5e18weDVjMjA5OShfMHgxNzRmM2UpLF8weDQwYTM4OShfMHgxNzRmM2UpO31maW5hbGx5e18weDQzNmIyZltfMHg1ODEyMzYoMHgxYTIpXVtfMHg1ODEyMzYoMHgxNzIpXT1fMHg0MGEzODk7fX0sXzB4NDZiYzlhPV8weDhiNzhlOD0+XzB4NGM4MGZlPT57dmFyIF8weDQ0ZTRiND1fMHgzZWIzNGI7dHJ5e2xldCBbXzB4Mjg1YzdjLF8weDE2YzQ2M109XzB4NGM4MGZlW18weDQ0ZTRiNCgweDE4YyldKCc6bG9nUG9pbnRJZDonKTtfMHgzYTk3ZTMoXzB4MTZjNDYzLF8weDI4NWM3YyksXzB4OGI3OGU4KF8weDI4NWM3Yyk7fWZpbmFsbHl7XzB4NDM2YjJmW18weDQ0ZTRiNCgweDFhMildWyd0aW1lRW5kJ109XzB4OGI3OGU4O319O18weDQzNmIyZltfMHgzZWIzNGIoMHgxMGMpXT17J2NvbnNvbGVMb2cnOihfMHgxYmMyZWEsXzB4M2YzZTAwKT0+e3ZhciBfMHg0YjY3MjQ9XzB4M2ViMzRiO18weDQzNmIyZlsnY29uc29sZSddW18weDRiNjcyNCgweDEzMSldWyduYW1lJ10hPT1fMHg0YjY3MjQoMHgxMTYpJiZfMHg0ODI3MjgoXzB4MjMwNmE2KCdsb2cnLF8weDFiYzJlYSxfMHgxZGIwYzcoKSxfMHgxMDljNGYsXzB4M2YzZTAwKSk7fSwnY29uc29sZVRyYWNlJzooXzB4MWZhNWYxLF8weDEyMjU2Nik9Pnt2YXIgXzB4MTIyNjA3PV8weDNlYjM0YjtfMHg0MzZiMmZbXzB4MTIyNjA3KDB4MWEyKV1bXzB4MTIyNjA3KDB4MTMxKV1bJ25hbWUnXSE9PV8weDEyMjYwNygweDEwMykmJl8weDQ4MjcyOChfMHgyMzA2YTYoXzB4MTIyNjA3KDB4MTQyKSxfMHgxZmE1ZjEsXzB4MWRiMGM3KCksXzB4MTA5YzRmLF8weDEyMjU2NikpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHg0ZDY4ZDI9XzB4M2ViMzRiO18weDQzNmIyZltfMHg0ZDY4ZDIoMHgxYTIpXVtfMHg0ZDY4ZDIoMHgxNzIpXT1fMHgxNjBmNDIoXzB4NDM2YjJmWydjb25zb2xlJ11bJ3RpbWUnXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDM0NTNiND1fMHgzZWIzNGI7XzB4NDM2YjJmW18weDM0NTNiNCgweDFhMildW18weDM0NTNiNCgweDE3NSldPV8weDQ2YmM5YShfMHg0MzZiMmZbXzB4MzQ1M2I0KDB4MWEyKV1bXzB4MzQ1M2I0KDB4MTc1KV0pO30sJ2F1dG9Mb2cnOihfMHg0NDkwNzYsXzB4MmU3ODY2KT0+e3ZhciBfMHg1ODI4ZWM9XzB4M2ViMzRiO18weDQ4MjcyOChfMHgyMzA2YTYoXzB4NTgyOGVjKDB4MTMxKSxfMHgyZTc4NjYsXzB4MWRiMGM3KCksXzB4MTA5YzRmLFtfMHg0NDkwNzZdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg1MzMxNGIsXzB4NDJhOWY1KT0+e3ZhciBfMHgxM2U2ZWM9XzB4M2ViMzRiO18weDQ4MjcyOChfMHgyMzA2YTYoXzB4MTNlNmVjKDB4MTMxKSxfMHg1MzMxNGIsXzB4MWRiMGM3KCksXzB4MTA5YzRmLF8weDQyYTlmNSkpO30sJ2F1dG9UcmFjZSc6KF8weDU2NDU5MCxfMHgxMDEyODMpPT57dmFyIF8weDIyM2JkZj1fMHgzZWIzNGI7XzB4NDgyNzI4KF8weDIzMDZhNihfMHgyMjNiZGYoMHgxNDIpLF8weDEwMTI4MyxfMHgxZGIwYzcoKSxfMHgxMDljNGYsW18weDU2NDU5MF0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NTUzNDIzLF8weDM2OTBlMCk9Pnt2YXIgXzB4MzVhYjdlPV8weDNlYjM0YjtfMHg0ODI3MjgoXzB4MjMwNmE2KF8weDM1YWI3ZSgweDE0MiksXzB4NTUzNDIzLF8weDFkYjBjNygpLF8weDEwOWM0ZixfMHgzNjkwZTApKTt9LCdhdXRvVGltZSc6KF8weDI1NDBjYyxfMHgyYWQ0MGYsXzB4MmNjMTM4KT0+e18weDVjMjA5OShfMHgyY2MxMzgpO30sJ2F1dG9UaW1lRW5kJzooXzB4MzBlNmQzLF8weDRjNzEwLF8weDM4ZDUxNSk9PntfMHgzYTk3ZTMoXzB4NGM3MTAsXzB4MzhkNTE1KTt9LCdjb3ZlcmFnZSc6XzB4NjYxMWZhPT57dmFyIF8weDU1YTY1ND1fMHgzZWIzNGI7XzB4NDgyNzI4KHsnbWV0aG9kJzpfMHg1NWE2NTQoMHgxNWYpLCd2ZXJzaW9uJzpfMHgzYzBjNGEsJ2FyZ3MnOlt7J2lkJzpfMHg2NjExZmF9XX0pO319O2xldCBfMHg0ODI3Mjg9YihfMHg0MzZiMmYsXzB4NWU5ZTY4LF8weDczOWY1MSxfMHgyMDA4NTksXzB4NWFkZTQ1LF8weDRiMDkwNCksXzB4MTA5YzRmPV8weDQzNmIyZltfMHgzZWIzNGIoMHgxN2MpXTtyZXR1cm4gXzB4NDM2YjJmWydfY29uc29sZV9uaW5qYSddO30pKGdsb2JhbFRoaXMsXzB4MjRhZTMyKDB4MWIwKSxfMHgyNGFlMzIoMHhkNiksXzB4MjRhZTMyKDB4MTFkKSxfMHgyNGFlMzIoMHgxMGUpLF8weDI0YWUzMigweDE3YSksJzE3MTIxNDIyODc0NTgnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiZGttLWRlc2t0b3BcXFwiLFxcXCIxOTIuMTY4LjEuMTAwXFxcIl0sXzB4MjRhZTMyKDB4MWFkKSxfMHgyNGFlMzIoMHgxMWUpKTtcIik7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==