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
    opacity: 0;
    transform: scale(0);
    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
}

.project-card:hover{
    z-index: 1;
    transform:scale(1.1) !important;
}
.wave-photo{
    animation: waveAnimation 500ms ease-in-out 1;
}
.icon>a>img{
    transition: 100ms ease-in-out;
}
.icon>a:hover>img{
    transform: scale(1.5);
    filter:drop-shadow(0 0 5px #C0C0C0)
}
.contact-footer>a:hover>img{
    filter:invert() drop-shadow(0 0 5px #ffd700);
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
}`, "",{"version":3,"sources":["webpack://./src/animations.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,mBAAmB;IACnB,8EAA8E;AAClF;;AAEA;IACI,UAAU;IACV,+BAA+B;AACnC;AACA;IACI,4CAA4C;AAChD;AACA;IACI,6BAA6B;AACjC;AACA;IACI,qBAAqB;IACrB;AACJ;AACA;IACI,4CAA4C;AAChD;AACA;IACI;QACI;IACJ;IACA;QACI;IACJ;IACA,IAAI;IACJ;IACA,IAAI;IACJ;IACA,KAAK,gCAAgC;AACzC","sourcesContent":[".project-card{\n    opacity: 0;\n    transform: scale(0);\n    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;\n}\n\n.project-card:hover{\n    z-index: 1;\n    transform:scale(1.1) !important;\n}\n.wave-photo{\n    animation: waveAnimation 500ms ease-in-out 1;\n}\n.icon>a>img{\n    transition: 100ms ease-in-out;\n}\n.icon>a:hover>img{\n    transform: scale(1.5);\n    filter:drop-shadow(0 0 5px #C0C0C0)\n}\n.contact-footer>a:hover>img{\n    filter:invert() drop-shadow(0 0 5px #ffd700);\n}\n@keyframes waveAnimation{\n    0%{\n        transform: rotateZ(0deg) scale(1)\n    }\n    25%{\n        transform: rotateZ(5deg) scale(1.3)\n    }\n    50%{transform: rotateZ(-5deg) scale(1.4)\n    }\n    75%{transform: rotateZ(5deg) scale(1.3)\n    }\n    100%{transform:rotateZ(0deg) scale(1)}\n}"],"sourceRoot":""}]);
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
    opacity: 0;
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
        top:0;
        left:60px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,6BAA6B;IAC7B,4BAA4B;IAC5B,uBAAuB;IACvB,0BAA0B;IAC1B,+BAA+B;AACnC;AACA;IACI,SAAS;IACT,YAAY;AAChB;AACA;IACI,YAAY;IACZ,SAAS;IACT,YAAY;IACZ,0BAA0B;IAC1B,6CAA6C;IAC7C,iCAAiC;IACjC,kKAAkK;IAClK,4BAA4B;IAC5B,kBAAkB;;;AAGtB;;AAEA;IACI,6BAA6B;IAC7B,mCAAmC;IACnC,oCAAoC;AACxC;AACA,gBAAgB;AAChB;IACI,iBAAiB;IACjB,YAAY;IACZ,6BAA6B;IAC7B,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,4CAA4C;AAChD;AACA;IACI,qBAAqB;IACrB,WAAW;IACX;QACI,WAAW;IACf;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;IACT,YAAY;IACZ,UAAU;IACV,8BAA8B;IAC9B,sCAAsC;IACtC,uBAAuB;IACvB,kCAAkC;IAClC;QACI,+BAA+B;;IAEnC;IACA;QACI,gCAAgC;OACjC,SAAS;IACZ;IACA;QACI,SAAS;QACT,YAAY;QACZ,cAAc;QACd,kBAAkB;QAClB;YACI,SAAS;QACb;IACJ;IACA;QACI,UAAU;QACV,UAAU;QACV,aAAa;QACb,yBAAyB;QACzB,0BAA0B;QAC1B;YACI,WAAW;YACX;gBACI,WAAW;YACf;QACJ;IACJ;AACJ;AACA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,eAAe;IACf;QACI,UAAU;IACd;IACA;QACI,WAAW;QACX,YAAY;QACZ,2DAA2D;QAC3D,QAAQ;QACR,mBAAmB;QACnB,kBAAkB;;;AAG1B,CAAC;AACD;IACI,0CAA0C;IAC1C,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,kCAAkC;IAClC,kBAAkB;QACd;YACI,uBAAuB;YACvB,mBAAmB;YACnB,WAAW;YACX,iBAAiB;QACrB;IACJ;;;AAGJ;IACI,UAAU;IACV,iCAAiC;IACjC,iBAAiB;IACjB,2CAA2C;IAC3C,sBAAsB;IACtB,kCAAkC;IAClC,EAAE,kCAAkC,CAAC;IACrC;QACI,kBAAkB;QAClB,oDAAoD;IACxD;IACA;QACI,WAAW;IACf;;AAEJ;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,OAAO;IACP;QACI,UAAU;QACV;YACI,YAAY;YACZ,gBAAgB;QACpB;IACJ;;AAEJ;;;;AAIA;IACI;;QAEI;YACI,eAAe;YACf,gBAAgB;QACpB;QACA;YACI,iBAAiB;YACjB,YAAY;QAChB;QACA;YACI,iBAAiB;YACjB,gBAAgB;QACpB;QACA;YACI,eAAe;QACnB;QACA;YACI,UAAU;QACd;QACA;YACI,2DAA2D;QAC/D;IACJ;IACA;QACI;YACI,cAAc;QAClB;QACA;YACI,iBAAiB;YACjB,oBAAoB;YACpB,cAAc;QAClB;IACJ;IACA;QACI,cAAc;QACd;YACI,eAAe;QACnB;QACA;YACI,YAAY;QAChB;IACJ;IACA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,uBAAuB;QACvB,gBAAgB;IACpB;IACA;QACI,kBAAkB;QAClB,KAAK;QACL,SAAS;QACT,WAAW;IACf;IACA;YACQ,gBAAgB;YAChB,UAAU;YACV,YAAY;YACZ,gBAAgB;;IAExB;;IAEA;QACI;YACI,kBAAkB;QACtB;IACJ;AACJ;IACI,gBAAgB;IAChB,SAAS;IACT;QACI,UAAU;IACd;;IAEA;IACA;QACI;YACI,cAAc;QAClB;QACA;YACI,gBAAgB;QACpB;IACJ;AACJ;AACA;IACI;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;QACd;YACI,UAAU;QACd;IACJ;IACA;QACI;YACI,cAAc;YACd,gBAAgB;QACpB;QACA;YACI,aAAa;YACb,cAAc;QAClB;;IAEJ;AACJ","sourcesContent":[":root{\n    --main-bg-color: #f0f9ff;\n    --secondary-bg-color: #075985;\n    --tertiary-bg-color: #0284c7;\n    --card-bg-color: silver;\n    --main-font-color: #082f49;\n    --secondary-font-color: #e0f2fe;\n}\nhtml, body{\n    margin: 0;\n    height: 100%;\n}\nbody{\n    height: 100%;\n    padding:0;\n    display:grid;\n    grid-template-columns: 1fr;\n    grid-template-areas: \"header\" \"main\" \"footer\";\n    grid-template-rows:auto auto auto;\n    background-image: linear-gradient(-189deg, var(--secondary-bg-color) clamp(2%, 20vw, 30vh), transparent clamp(calc(2% + 5px), calc(20vw + 5px), calc(30vh + 5px)));\n    background-repeat: no-repeat;\n    overflow-x: hidden;\n    \n\n}\n\nheader, main, footer{\n    padding: clamp(2px, 5%, 20px);\n    padding-left:clamp(2px, 20%, 150px);\n    padding-right:clamp(2px, 20%, 150px);\n}\n/* Header area */\nheader{\n    grid-area: header;\n    display:flex;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: clamp(5px, 4vw, 50px);\n}\n\n.frame{\n    background-color:var(--card-bg-color);\n    border: 2px solid black;\n    border-radius: 5px;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.459);\n}\n.photo{\n    align-self:flex-start;\n    width: 15vw;\n    >img{\n        width: 100%;\n    }\n}\n.card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n    height: 13vw;\n    width: 80%;\n    padding: clamp(10px, 1%, 20px);\n    background-color: var(--card-bg-color);\n    border: 1px solid black;\n    font-size: clamp(8px, 1.2vw, 24px);\n    >article{\n        height: clamp(20px, 70%, 160px);\n\n    }\n    > article > h1{\n        font-size: clamp(5px, 4vw, 40px);;\n       margin: 0;\n    }\n    >article > .text-div{\n        margin: 0;\n        height: 100%;\n        max-height:80%;\n        overflow-y: scroll;\n        >p{\n            margin: 0;\n        }\n    }\n    >.contact{\n        height:15%;\n        width: 92%;\n        display: flex;\n        justify-content: flex-end;\n        gap: clamp(12px, 5%, 70px);\n        >a{\n            height:100%;\n            >img{\n                height:100%;\n            }\n        }\n    }\n}\nmain{\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    font-size: clamp(8px, 1.5vw, 24px);\n    grid-area: main;\n    .main-container{\n        width: 50%;\n    }\n    .project-card-container{\n        padding: 3%;\n        display:grid;\n        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n        gap:1rem;\n        padding-bottom: 1vw;\n        overflow-y: scroll;\n\n\n}}\n.project-card{\n    background-color: var(--tertiary-bg-color);\n    border: 2px solid black;\n    border-radius: 10px;\n    box-shadow: 2px 2px 10px black;\n    font-size: 70%;\n    color: var(--secondary-font-color);\n    text-align: center;\n        a>img{\n            border: 2px solid black;\n            border-radius: 50px;\n            height: 50%;\n            max-height: 160px;\n        }\n    }\n\n\nfooter{\n    opacity: 0;\n    font-size: clamp(6px, .5vw, 20px);\n    grid-area: footer;\n    background-color: var(--secondary-bg-color);\n    flex-direction: column;\n    color: var(--secondary-font-color);\n    a{color: var(--secondary-font-color);}\n    h1{\n        text-align: center;\n        border-bottom: 3px dashed rgba(192, 192, 192, 0.452);\n    }\n    >h1, h2, h3{\n        margin:10px;\n    }\n\n}\n.contact-div{\n    display: flex;\n    justify-content: space-evenly;\n    text-align: center;\n}\n.contact-footer{\n    display: flex;\n    justify-content: flex-end;\n    gap: 5%;\n    >a{\n        width: 10%;\n        >img{\n            height: 100%;\n            filter: invert();\n        }\n    }\n    \n}\n\n\n\n@media screen and (min-width:2000px){\n    main{\n\n        h1{\n            font-size: 2rem;\n            margin-bottom: 0;\n        }\n        h2{\n            font-size: 1.5rem;\n            margin-top:0;\n        }\n        h3{\n            font-size: 1.2rem;\n            font-weight: 900;\n        }\n        h4{\n            font-size: 1rem;\n        }\n        .main-container{\n            width: 40%;\n        }\n        .project-card-container{\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        }\n    }\n    header{\n        .photo{\n            max-width:11vw;\n        }\n        .card{\n            font-size: 1.3rem;\n            align-self: flex-end;\n            max-height:8vw;\n        }\n    }\n    footer{\n        font-size: 60%;\n        h1{\n            margin-bottom:0;\n        }\n        h1, h2, h3{\n            margin-top:0;\n        }\n    }\n    header, footer{\n        padding-left: 20vw;\n        padding-right: 20vw;\n    }\n}\n\n@media screen and (max-width:1000px){\n    header{\n        justify-content: center;\n        margin-top: 16px;\n    }\n    .photo{\n        position: absolute;\n        top:0;\n        left:60px;\n        width: 12vw;\n    }\n    .card{ \n            font-size: 1.6vw;\n            width: 90%;\n            height: 25vw;\n            padding-left: 5%;\n\n    }\n\n    article{\n        h1{\n            text-align: center;\n        }\n    }\nmain{\n    font-size: 1.5vw;\n    padding:0; \n    .main-container{\n        width: 60%;\n    }\n\n    }\n    .project-card{\n        h3{\n            font-size: 2vw;\n        }\n        h4{\n            font-size: 1.5vw;\n        }\n    }\n}\n@media screen and (max-width: 320px){\n    header, main, footer{\n        padding: 2vw;\n    }\n    .card{\n    padding-top: 8%;\n    }   \n    article{\n        font-size: 3.2vw;\n    }\n    main{\n        font-size: 3vw;\n        .main-container{\n            width: 80%;\n        }\n    }\n    .project-card{\n        h3{\n            font-size: 7vw;\n            margin-bottom: 0;\n        }\n        h4{\n            margin-top: 0;\n            font-size: 4vw;\n        }\n    \n    }\n}"],"sourceRoot":""}]);
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



/* Leveraging the web animations API for this */

/* Animation for a cute wave animation on the photo */
async function wavePhoto() {
	/* eslint-disable */console.log(...oo_oo(`2055643354_8_1_8_34_4`,'attempting to wave'))
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
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x24ae32=_0xe1a3;function _0x47ba(){var _0x4d9a5e=['bind','_isSet','autoExpandMaxDepth','_type','ws/index.js','data','_inNextEdge','null','location','Set','_processTreeNodeResult','autoExpandPropertyCount','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','method','test','symbol','elapsed','unknown','next.js','_objectToString','_Symbol','getOwnPropertyDescriptor','onclose','global','setter','totalStrLength','send','prototype','edge','_getOwnPropertyNames','hasOwnProperty','includes','readyState','NEXT_RUNTIME','disabledTrace','_quotedRegExp','get','timeStamp','_webSocketErrorDocsLink','_disposeWebsocket','_addProperty','_setNodeId','_addObjectProperty','_console_ninja','_connectAttemptCount','webpack','_setNodePermissions','_isNegativeZero','gateway.docker.internal','203717gUxSbO','_setNodeLabel','onopen','_WebSocketClass','disabledLog','_connectToHostNow','join','_HTMLAllCollection','_allowedToConnectOnSend','hrtime','negativeZero',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.297/node_modules\",'','negativeInfinity','unshift','count','_treeNodePropertiesBeforeFullValue','[object\\x20Map]','port','_sendErrorMessage','type','4682442WbbGyT','current','_reconnectTimeout','287NLwPsb','parent','120968WxcRNU','hostname','_isMap','capped','valueOf','log','function','_addFunctionsNode','dockerizedApp','array','_getOwnPropertySymbols','funcName','process','name','stack','reload','angular','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','defineProperty','_sortProps','astro','getter','trace','bigint','pathToFileURL','_inBrowser','_connected','stringify','_propertyName','resolveGetters','replace','serialize','NEGATIVE_INFINITY','\\x20server','value','_isPrimitiveType','_dateToString','path','message','_ws','_setNodeExpandableState','_p_length','POSITIVE_INFINITY','allStrLength','_hasMapOnItsPath','error','call','env','toString','Map','_attemptToReconnectShortly','coverage','hits','14326697OpwenA','_isPrimitiveWrapperType','autoExpandLimit','nuxt','ws://','autoExpand','sortProps','now','node','_cleanNode','set','_socket','_blacklistedProperty','perf_hooks','6290InhSfe','autoExpandPreviousObjects','sort','time','substr','Number','timeEnd','WebSocket','strLength','length','props','1.0.0','cappedElements','_console_ninja_session','getOwnPropertyNames','forEach','getWebSocketClass','_treeNodePropertiesAfterFullValue','_isUndefined','1046TxPxjD','toLowerCase','then','_p_name','date','undefined','_addLoadNode','string','push','6404eXURFg','split','1395iTYYhf','HTMLAllCollection','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_allowedToSend','performance','_undefined','_additionalMetadata','object','RegExp','versions','_maxConnectAttemptCount','nan','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','warn','Error','getPrototypeOf','match','5109sYAtuQ','expressionsToEvaluate','_capIfString','_connecting','console','catch','number','_consoleNinjaAllowedToStart','slice','indexOf','constructor','noFunctions','level','unref','_property','','_setNodeExpressionPath','15048JnNmqV','127.0.0.1','concat','elements','_hasSymbolPropertyOnItsPath','__es'+'Module','depth','host','nodeModules','create','getOwnPropertySymbols','_numberRegExp','stackTraceLimit','boolean','_regExpToString','onerror','35767','_setNodeQueryPath','expId','logger\\x20websocket\\x20error','[object\\x20Array]','default','reduceLimits','index','String','isExpressionToEvaluate','_p_'];_0x47ba=function(){return _0x4d9a5e;};return _0x47ba();}(function(_0x13cea9,_0x4bbe7e){var _0x52657b=_0xe1a3,_0x4ab941=_0x13cea9();while(!![]){try{var _0x565148=parseInt(_0x52657b(0x112))/0x1+parseInt(_0x52657b(0x182))/0x2*(parseInt(_0x52657b(0x19e))/0x3)+parseInt(_0x52657b(0x18b))/0x4*(-parseInt(_0x52657b(0x18d))/0x5)+parseInt(_0x52657b(0x127))/0x6+-parseInt(_0x52657b(0x12a))/0x7*(parseInt(_0x52657b(0x12c))/0x8)+parseInt(_0x52657b(0x1af))/0x9*(parseInt(_0x52657b(0x16f))/0xa)+-parseInt(_0x52657b(0x161))/0xb;if(_0x565148===_0x4bbe7e)break;else _0x4ab941['push'](_0x4ab941['shift']());}catch(_0x421755){_0x4ab941['push'](_0x4ab941['shift']());}}}(_0x47ba,0x88166));var j=Object[_0x24ae32(0xcf)],H=Object[_0x24ae32(0x13e)],G=Object[_0x24ae32(0xf6)],ee=Object['getOwnPropertyNames'],te=Object[_0x24ae32(0x19c)],ne=Object[_0x24ae32(0xfc)][_0x24ae32(0xff)],re=(_0x4d3738,_0x236e14,_0x3098ae,_0x375e86)=>{var _0x2e9e42=_0x24ae32;if(_0x236e14&&typeof _0x236e14=='object'||typeof _0x236e14==_0x2e9e42(0x132)){for(let _0x20a893 of ee(_0x236e14))!ne['call'](_0x4d3738,_0x20a893)&&_0x20a893!==_0x3098ae&&H(_0x4d3738,_0x20a893,{'get':()=>_0x236e14[_0x20a893],'enumerable':!(_0x375e86=G(_0x236e14,_0x20a893))||_0x375e86['enumerable']});}return _0x4d3738;},x=(_0x4ceb6e,_0x1d4c6c,_0x157aca)=>(_0x157aca=_0x4ceb6e!=null?j(te(_0x4ceb6e)):{},re(_0x1d4c6c||!_0x4ceb6e||!_0x4ceb6e[_0x24ae32(0xcb)]?H(_0x157aca,_0x24ae32(0xdb),{'value':_0x4ceb6e,'enumerable':!0x0}):_0x157aca,_0x4ceb6e)),X=class{constructor(_0x259cec,_0x17e41c,_0x5f15f2,_0x5d1b89,_0x319187){var _0x2640a4=_0x24ae32;this[_0x2640a4(0xf8)]=_0x259cec,this[_0x2640a4(0xcd)]=_0x17e41c,this[_0x2640a4(0x124)]=_0x5f15f2,this[_0x2640a4(0xce)]=_0x5d1b89,this['dockerizedApp']=_0x319187,this[_0x2640a4(0x190)]=!0x0,this[_0x2640a4(0x11a)]=!0x0,this[_0x2640a4(0x146)]=!0x1,this[_0x2640a4(0x1a1)]=!0x1,this[_0x2640a4(0xe7)]=_0x259cec[_0x2640a4(0x138)]?.[_0x2640a4(0x15b)]?.[_0x2640a4(0x102)]==='edge',this['_inBrowser']=!this[_0x2640a4(0xf8)]['process']?.['versions']?.['node']&&!this['_inNextEdge'],this[_0x2640a4(0x115)]=null,this[_0x2640a4(0x10d)]=0x0,this[_0x2640a4(0x197)]=0x14,this[_0x2640a4(0x107)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x2640a4(0x145)]?_0x2640a4(0xed):_0x2640a4(0x18f))+this[_0x2640a4(0x107)];}async[_0x24ae32(0x17f)](){var _0x513466=_0x24ae32;if(this['_WebSocketClass'])return this[_0x513466(0x115)];let _0x547a9b;if(this['_inBrowser']||this[_0x513466(0xe7)])_0x547a9b=this[_0x513466(0xf8)][_0x513466(0x176)];else{if(this[_0x513466(0xf8)][_0x513466(0x138)]?.['_WebSocket'])_0x547a9b=this['global'][_0x513466(0x138)]?.['_WebSocket'];else try{let _0x133a32=await import(_0x513466(0x151));_0x547a9b=(await import((await import('url'))[_0x513466(0x144)](_0x133a32[_0x513466(0x118)](this['nodeModules'],_0x513466(0xe5)))['toString']()))[_0x513466(0xdb)];}catch{try{_0x547a9b=require(require(_0x513466(0x151))['join'](this['nodeModules'],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x513466(0x115)]=_0x547a9b,_0x547a9b;}[_0x24ae32(0x117)](){var _0x2c0ef5=_0x24ae32;this[_0x2c0ef5(0x1a1)]||this[_0x2c0ef5(0x146)]||this[_0x2c0ef5(0x10d)]>=this[_0x2c0ef5(0x197)]||(this[_0x2c0ef5(0x11a)]=!0x1,this[_0x2c0ef5(0x1a1)]=!0x0,this[_0x2c0ef5(0x10d)]++,this[_0x2c0ef5(0x153)]=new Promise((_0x44c1c5,_0x4c50ec)=>{var _0x4e7a9e=_0x2c0ef5;this['getWebSocketClass']()[_0x4e7a9e(0x184)](_0x1c0d89=>{var _0x18e890=_0x4e7a9e;let _0x534f30=new _0x1c0d89(_0x18e890(0x165)+(!this[_0x18e890(0x145)]&&this[_0x18e890(0x134)]?_0x18e890(0x111):this[_0x18e890(0xcd)])+':'+this['port']);_0x534f30['onerror']=()=>{var _0x29bc9f=_0x18e890;this['_allowedToSend']=!0x1,this[_0x29bc9f(0x108)](_0x534f30),this[_0x29bc9f(0x15e)](),_0x4c50ec(new Error(_0x29bc9f(0xd9)));},_0x534f30['onopen']=()=>{var _0x58424d=_0x18e890;this[_0x58424d(0x145)]||_0x534f30[_0x58424d(0x16c)]&&_0x534f30[_0x58424d(0x16c)][_0x58424d(0x1ab)]&&_0x534f30[_0x58424d(0x16c)][_0x58424d(0x1ab)](),_0x44c1c5(_0x534f30);},_0x534f30[_0x18e890(0xf7)]=()=>{var _0x136633=_0x18e890;this[_0x136633(0x11a)]=!0x0,this[_0x136633(0x108)](_0x534f30),this[_0x136633(0x15e)]();},_0x534f30['onmessage']=_0x1ca84d=>{var _0x397b0c=_0x18e890;try{_0x1ca84d&&_0x1ca84d[_0x397b0c(0xe6)]&&this[_0x397b0c(0x145)]&&JSON['parse'](_0x1ca84d[_0x397b0c(0xe6)])[_0x397b0c(0xee)]===_0x397b0c(0x13b)&&this[_0x397b0c(0xf8)][_0x397b0c(0xe9)][_0x397b0c(0x13b)]();}catch{}};})[_0x4e7a9e(0x184)](_0x481d4f=>(this['_connected']=!0x0,this[_0x4e7a9e(0x1a1)]=!0x1,this[_0x4e7a9e(0x11a)]=!0x1,this[_0x4e7a9e(0x190)]=!0x0,this[_0x4e7a9e(0x10d)]=0x0,_0x481d4f))[_0x4e7a9e(0x1a3)](_0x404cdc=>(this[_0x4e7a9e(0x146)]=!0x1,this['_connecting']=!0x1,console[_0x4e7a9e(0x19a)](_0x4e7a9e(0x199)+this[_0x4e7a9e(0x107)]),_0x4c50ec(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x404cdc&&_0x404cdc['message'])))));}));}[_0x24ae32(0x108)](_0x2e3168){var _0x17cffd=_0x24ae32;this['_connected']=!0x1,this[_0x17cffd(0x1a1)]=!0x1;try{_0x2e3168[_0x17cffd(0xf7)]=null,_0x2e3168[_0x17cffd(0xd5)]=null,_0x2e3168[_0x17cffd(0x114)]=null;}catch{}try{_0x2e3168[_0x17cffd(0x101)]<0x2&&_0x2e3168['close']();}catch{}}[_0x24ae32(0x15e)](){var _0xcfd15=_0x24ae32;clearTimeout(this['_reconnectTimeout']),!(this[_0xcfd15(0x10d)]>=this[_0xcfd15(0x197)])&&(this[_0xcfd15(0x129)]=setTimeout(()=>{var _0x6ff8c5=_0xcfd15;this['_connected']||this[_0x6ff8c5(0x1a1)]||(this['_connectToHostNow'](),this[_0x6ff8c5(0x153)]?.[_0x6ff8c5(0x1a3)](()=>this[_0x6ff8c5(0x15e)]()));},0x1f4),this['_reconnectTimeout'][_0xcfd15(0x1ab)]&&this[_0xcfd15(0x129)][_0xcfd15(0x1ab)]());}async[_0x24ae32(0xfb)](_0x51551d){var _0xe92bc5=_0x24ae32;try{if(!this[_0xe92bc5(0x190)])return;this[_0xe92bc5(0x11a)]&&this[_0xe92bc5(0x117)](),(await this[_0xe92bc5(0x153)])[_0xe92bc5(0xfb)](JSON[_0xe92bc5(0x147)](_0x51551d));}catch(_0x3b4c8c){console[_0xe92bc5(0x19a)](this[_0xe92bc5(0x125)]+':\\x20'+(_0x3b4c8c&&_0x3b4c8c['message'])),this[_0xe92bc5(0x190)]=!0x1,this[_0xe92bc5(0x15e)]();}}};function b(_0x2dcc3d,_0x1258f7,_0x28783a,_0x47a70c,_0x49f016,_0x585b74){var _0x4feb5e=_0x24ae32;let _0x4094ff=_0x28783a[_0x4feb5e(0x18c)](',')['map'](_0x398903=>{var _0x4ef02e=_0x4feb5e;try{_0x2dcc3d[_0x4ef02e(0x17c)]||((_0x49f016===_0x4ef02e(0xf3)||_0x49f016==='remix'||_0x49f016===_0x4ef02e(0x140)||_0x49f016===_0x4ef02e(0x13c))&&(_0x49f016+=!_0x2dcc3d[_0x4ef02e(0x138)]?.[_0x4ef02e(0x196)]?.[_0x4ef02e(0x169)]&&_0x2dcc3d[_0x4ef02e(0x138)]?.['env']?.['NEXT_RUNTIME']!==_0x4ef02e(0xfd)?'\\x20browser':_0x4ef02e(0x14d)),_0x2dcc3d[_0x4ef02e(0x17c)]={'id':+new Date(),'tool':_0x49f016});let _0x53ac87=new X(_0x2dcc3d,_0x1258f7,_0x398903,_0x47a70c,_0x585b74);return _0x53ac87[_0x4ef02e(0xfb)][_0x4ef02e(0xe1)](_0x53ac87);}catch(_0x3f7983){return console['warn'](_0x4ef02e(0x13d),_0x3f7983&&_0x3f7983[_0x4ef02e(0x152)]),()=>{};}});return _0x3f96b9=>_0x4094ff[_0x4feb5e(0x17e)](_0x537d76=>_0x537d76(_0x3f96b9));}function _0xe1a3(_0xab75e0,_0x53896b){var _0x47bab1=_0x47ba();return _0xe1a3=function(_0xe1a3e7,_0xd8e4f){_0xe1a3e7=_0xe1a3e7-0xca;var _0xf783d=_0x47bab1[_0xe1a3e7];return _0xf783d;},_0xe1a3(_0xab75e0,_0x53896b);}function W(_0x51ea05){var _0x292973=_0x24ae32;let _0x4c170d=function(_0x215ce1,_0xe9963b){return _0xe9963b-_0x215ce1;},_0x3e5eb9;if(_0x51ea05[_0x292973(0x191)])_0x3e5eb9=function(){var _0x4fd952=_0x292973;return _0x51ea05[_0x4fd952(0x191)][_0x4fd952(0x168)]();};else{if(_0x51ea05[_0x292973(0x138)]&&_0x51ea05[_0x292973(0x138)][_0x292973(0x11b)]&&_0x51ea05['process']?.['env']?.[_0x292973(0x102)]!==_0x292973(0xfd))_0x3e5eb9=function(){var _0x39f8d9=_0x292973;return _0x51ea05['process'][_0x39f8d9(0x11b)]();},_0x4c170d=function(_0x2273d6,_0x1c1932){return 0x3e8*(_0x1c1932[0x0]-_0x2273d6[0x0])+(_0x1c1932[0x1]-_0x2273d6[0x1])/0xf4240;};else try{let {performance:_0x10dace}=require(_0x292973(0x16e));_0x3e5eb9=function(){var _0xb586d7=_0x292973;return _0x10dace[_0xb586d7(0x168)]();};}catch{_0x3e5eb9=function(){return+new Date();};}}return{'elapsed':_0x4c170d,'timeStamp':_0x3e5eb9,'now':()=>Date['now']()};}function J(_0x4cdc41,_0x1eb45c,_0x32e2ae){var _0x2d39c3=_0x24ae32;if(_0x4cdc41[_0x2d39c3(0x1a5)]!==void 0x0)return _0x4cdc41[_0x2d39c3(0x1a5)];let _0x59979b=_0x4cdc41[_0x2d39c3(0x138)]?.[_0x2d39c3(0x196)]?.['node']||_0x4cdc41['process']?.[_0x2d39c3(0x15b)]?.[_0x2d39c3(0x102)]===_0x2d39c3(0xfd);return _0x59979b&&_0x32e2ae===_0x2d39c3(0x164)?_0x4cdc41[_0x2d39c3(0x1a5)]=!0x1:_0x4cdc41[_0x2d39c3(0x1a5)]=_0x59979b||!_0x1eb45c||_0x4cdc41[_0x2d39c3(0xe9)]?.[_0x2d39c3(0x12d)]&&_0x1eb45c[_0x2d39c3(0x100)](_0x4cdc41[_0x2d39c3(0xe9)][_0x2d39c3(0x12d)]),_0x4cdc41[_0x2d39c3(0x1a5)];}function Y(_0x269569,_0xb6c728,_0x309406,_0x583925){var _0x4ff05d=_0x24ae32;_0x269569=_0x269569,_0xb6c728=_0xb6c728,_0x309406=_0x309406,_0x583925=_0x583925;let _0x37f334=W(_0x269569),_0x50d7d1=_0x37f334[_0x4ff05d(0xf1)],_0x41cee5=_0x37f334[_0x4ff05d(0x106)];class _0x4bec75{constructor(){var _0x3f8b65=_0x4ff05d;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x3f8b65(0xd1)]=/^(0|[1-9][0-9]*)$/,this[_0x3f8b65(0x104)]=/'([^\\\\']|\\\\')*'/,this[_0x3f8b65(0x192)]=_0x269569[_0x3f8b65(0x187)],this[_0x3f8b65(0x119)]=_0x269569[_0x3f8b65(0x18e)],this['_getOwnPropertyDescriptor']=Object[_0x3f8b65(0xf6)],this[_0x3f8b65(0xfe)]=Object[_0x3f8b65(0x17d)],this['_Symbol']=_0x269569['Symbol'],this['_regExpToString']=RegExp[_0x3f8b65(0xfc)]['toString'],this[_0x3f8b65(0x150)]=Date[_0x3f8b65(0xfc)]['toString'];}[_0x4ff05d(0x14b)](_0x3ac2d4,_0x4a4d37,_0x51a527,_0x3adf91){var _0xb164cb=_0x4ff05d,_0x3ebdcd=this,_0x9246a9=_0x51a527[_0xb164cb(0x166)];function _0x3b1f57(_0x4f1712,_0x3b8cad,_0x2f1b1c){var _0x494e5a=_0xb164cb;_0x3b8cad[_0x494e5a(0x126)]='unknown',_0x3b8cad['error']=_0x4f1712[_0x494e5a(0x152)],_0x21d03e=_0x2f1b1c[_0x494e5a(0x169)][_0x494e5a(0x128)],_0x2f1b1c['node']['current']=_0x3b8cad,_0x3ebdcd[_0x494e5a(0x122)](_0x3b8cad,_0x2f1b1c);}try{_0x51a527[_0xb164cb(0x1aa)]++,_0x51a527[_0xb164cb(0x166)]&&_0x51a527['autoExpandPreviousObjects']['push'](_0x4a4d37);var _0x24d749,_0x78e3cb,_0x5ccb05,_0x2e0a3c,_0x3d1eb8=[],_0x4f51de=[],_0x4cabfa,_0x22bc10=this[_0xb164cb(0xe4)](_0x4a4d37),_0x5420bc=_0x22bc10===_0xb164cb(0x135),_0x5dfa74=!0x1,_0x2ee57e=_0x22bc10===_0xb164cb(0x132),_0x4ab493=this[_0xb164cb(0x14f)](_0x22bc10),_0x3cb7f6=this[_0xb164cb(0x162)](_0x22bc10),_0x4a8e0f=_0x4ab493||_0x3cb7f6,_0x42d6f6={},_0xfab32f=0x0,_0x3830ac=!0x1,_0x21d03e,_0x36c761=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x51a527[_0xb164cb(0xcc)]){if(_0x5420bc){if(_0x78e3cb=_0x4a4d37[_0xb164cb(0x178)],_0x78e3cb>_0x51a527[_0xb164cb(0x1b2)]){for(_0x5ccb05=0x0,_0x2e0a3c=_0x51a527[_0xb164cb(0x1b2)],_0x24d749=_0x5ccb05;_0x24d749<_0x2e0a3c;_0x24d749++)_0x4f51de['push'](_0x3ebdcd['_addProperty'](_0x3d1eb8,_0x4a4d37,_0x22bc10,_0x24d749,_0x51a527));_0x3ac2d4[_0xb164cb(0x17b)]=!0x0;}else{for(_0x5ccb05=0x0,_0x2e0a3c=_0x78e3cb,_0x24d749=_0x5ccb05;_0x24d749<_0x2e0a3c;_0x24d749++)_0x4f51de[_0xb164cb(0x18a)](_0x3ebdcd['_addProperty'](_0x3d1eb8,_0x4a4d37,_0x22bc10,_0x24d749,_0x51a527));}_0x51a527[_0xb164cb(0xec)]+=_0x4f51de[_0xb164cb(0x178)];}if(!(_0x22bc10===_0xb164cb(0xe8)||_0x22bc10===_0xb164cb(0x187))&&!_0x4ab493&&_0x22bc10!==_0xb164cb(0xde)&&_0x22bc10!=='Buffer'&&_0x22bc10!=='bigint'){var _0x8450a5=_0x3adf91[_0xb164cb(0x179)]||_0x51a527[_0xb164cb(0x179)];if(this['_isSet'](_0x4a4d37)?(_0x24d749=0x0,_0x4a4d37[_0xb164cb(0x17e)](function(_0x368387){var _0x265c23=_0xb164cb;if(_0xfab32f++,_0x51a527['autoExpandPropertyCount']++,_0xfab32f>_0x8450a5){_0x3830ac=!0x0;return;}if(!_0x51a527[_0x265c23(0xdf)]&&_0x51a527[_0x265c23(0x166)]&&_0x51a527[_0x265c23(0xec)]>_0x51a527[_0x265c23(0x163)]){_0x3830ac=!0x0;return;}_0x4f51de[_0x265c23(0x18a)](_0x3ebdcd['_addProperty'](_0x3d1eb8,_0x4a4d37,_0x265c23(0xea),_0x24d749++,_0x51a527,function(_0x473455){return function(){return _0x473455;};}(_0x368387)));})):this[_0xb164cb(0x12e)](_0x4a4d37)&&_0x4a4d37[_0xb164cb(0x17e)](function(_0x26888d,_0x1fb8b2){var _0x53b543=_0xb164cb;if(_0xfab32f++,_0x51a527[_0x53b543(0xec)]++,_0xfab32f>_0x8450a5){_0x3830ac=!0x0;return;}if(!_0x51a527[_0x53b543(0xdf)]&&_0x51a527[_0x53b543(0x166)]&&_0x51a527[_0x53b543(0xec)]>_0x51a527[_0x53b543(0x163)]){_0x3830ac=!0x0;return;}var _0x41288f=_0x1fb8b2[_0x53b543(0x15c)]();_0x41288f[_0x53b543(0x178)]>0x64&&(_0x41288f=_0x41288f[_0x53b543(0x1a6)](0x0,0x64)+'...'),_0x4f51de[_0x53b543(0x18a)](_0x3ebdcd['_addProperty'](_0x3d1eb8,_0x4a4d37,_0x53b543(0x15d),_0x41288f,_0x51a527,function(_0x9d4cd6){return function(){return _0x9d4cd6;};}(_0x26888d)));}),!_0x5dfa74){try{for(_0x4cabfa in _0x4a4d37)if(!(_0x5420bc&&_0x36c761[_0xb164cb(0xef)](_0x4cabfa))&&!this[_0xb164cb(0x16d)](_0x4a4d37,_0x4cabfa,_0x51a527)){if(_0xfab32f++,_0x51a527[_0xb164cb(0xec)]++,_0xfab32f>_0x8450a5){_0x3830ac=!0x0;break;}if(!_0x51a527[_0xb164cb(0xdf)]&&_0x51a527[_0xb164cb(0x166)]&&_0x51a527[_0xb164cb(0xec)]>_0x51a527[_0xb164cb(0x163)]){_0x3830ac=!0x0;break;}_0x4f51de['push'](_0x3ebdcd['_addObjectProperty'](_0x3d1eb8,_0x42d6f6,_0x4a4d37,_0x22bc10,_0x4cabfa,_0x51a527));}}catch{}if(_0x42d6f6[_0xb164cb(0x155)]=!0x0,_0x2ee57e&&(_0x42d6f6[_0xb164cb(0x185)]=!0x0),!_0x3830ac){var _0x3a6f04=[][_0xb164cb(0x1b1)](this[_0xb164cb(0xfe)](_0x4a4d37))['concat'](this[_0xb164cb(0x136)](_0x4a4d37));for(_0x24d749=0x0,_0x78e3cb=_0x3a6f04[_0xb164cb(0x178)];_0x24d749<_0x78e3cb;_0x24d749++)if(_0x4cabfa=_0x3a6f04[_0x24d749],!(_0x5420bc&&_0x36c761[_0xb164cb(0xef)](_0x4cabfa[_0xb164cb(0x15c)]()))&&!this[_0xb164cb(0x16d)](_0x4a4d37,_0x4cabfa,_0x51a527)&&!_0x42d6f6['_p_'+_0x4cabfa[_0xb164cb(0x15c)]()]){if(_0xfab32f++,_0x51a527['autoExpandPropertyCount']++,_0xfab32f>_0x8450a5){_0x3830ac=!0x0;break;}if(!_0x51a527['isExpressionToEvaluate']&&_0x51a527[_0xb164cb(0x166)]&&_0x51a527[_0xb164cb(0xec)]>_0x51a527[_0xb164cb(0x163)]){_0x3830ac=!0x0;break;}_0x4f51de[_0xb164cb(0x18a)](_0x3ebdcd['_addObjectProperty'](_0x3d1eb8,_0x42d6f6,_0x4a4d37,_0x22bc10,_0x4cabfa,_0x51a527));}}}}}if(_0x3ac2d4[_0xb164cb(0x126)]=_0x22bc10,_0x4a8e0f?(_0x3ac2d4[_0xb164cb(0x14e)]=_0x4a4d37['valueOf'](),this[_0xb164cb(0x1a0)](_0x22bc10,_0x3ac2d4,_0x51a527,_0x3adf91)):_0x22bc10===_0xb164cb(0x186)?_0x3ac2d4[_0xb164cb(0x14e)]=this[_0xb164cb(0x150)][_0xb164cb(0x15a)](_0x4a4d37):_0x22bc10===_0xb164cb(0x143)?_0x3ac2d4[_0xb164cb(0x14e)]=_0x4a4d37['toString']():_0x22bc10===_0xb164cb(0x195)?_0x3ac2d4[_0xb164cb(0x14e)]=this[_0xb164cb(0xd4)][_0xb164cb(0x15a)](_0x4a4d37):_0x22bc10===_0xb164cb(0xf0)&&this[_0xb164cb(0xf5)]?_0x3ac2d4[_0xb164cb(0x14e)]=this['_Symbol'][_0xb164cb(0xfc)][_0xb164cb(0x15c)][_0xb164cb(0x15a)](_0x4a4d37):!_0x51a527[_0xb164cb(0xcc)]&&!(_0x22bc10==='null'||_0x22bc10===_0xb164cb(0x187))&&(delete _0x3ac2d4[_0xb164cb(0x14e)],_0x3ac2d4[_0xb164cb(0x12f)]=!0x0),_0x3830ac&&(_0x3ac2d4['cappedProps']=!0x0),_0x21d03e=_0x51a527['node'][_0xb164cb(0x128)],_0x51a527[_0xb164cb(0x169)][_0xb164cb(0x128)]=_0x3ac2d4,this[_0xb164cb(0x122)](_0x3ac2d4,_0x51a527),_0x4f51de[_0xb164cb(0x178)]){for(_0x24d749=0x0,_0x78e3cb=_0x4f51de[_0xb164cb(0x178)];_0x24d749<_0x78e3cb;_0x24d749++)_0x4f51de[_0x24d749](_0x24d749);}_0x3d1eb8[_0xb164cb(0x178)]&&(_0x3ac2d4[_0xb164cb(0x179)]=_0x3d1eb8);}catch(_0x29e7fc){_0x3b1f57(_0x29e7fc,_0x3ac2d4,_0x51a527);}return this[_0xb164cb(0x193)](_0x4a4d37,_0x3ac2d4),this[_0xb164cb(0x180)](_0x3ac2d4,_0x51a527),_0x51a527[_0xb164cb(0x169)][_0xb164cb(0x128)]=_0x21d03e,_0x51a527[_0xb164cb(0x1aa)]--,_0x51a527['autoExpand']=_0x9246a9,_0x51a527[_0xb164cb(0x166)]&&_0x51a527[_0xb164cb(0x170)]['pop'](),_0x3ac2d4;}['_getOwnPropertySymbols'](_0x1d7ad1){var _0x16fe03=_0x4ff05d;return Object['getOwnPropertySymbols']?Object[_0x16fe03(0xd0)](_0x1d7ad1):[];}[_0x4ff05d(0xe2)](_0x44560b){var _0x4e04b3=_0x4ff05d;return!!(_0x44560b&&_0x269569['Set']&&this['_objectToString'](_0x44560b)==='[object\\x20Set]'&&_0x44560b[_0x4e04b3(0x17e)]);}['_blacklistedProperty'](_0x36f520,_0x132978,_0x152c3c){var _0x16ccd1=_0x4ff05d;return _0x152c3c[_0x16ccd1(0x1a9)]?typeof _0x36f520[_0x132978]==_0x16ccd1(0x132):!0x1;}[_0x4ff05d(0xe4)](_0x50500e){var _0x842566=_0x4ff05d,_0x37f656='';return _0x37f656=typeof _0x50500e,_0x37f656===_0x842566(0x194)?this[_0x842566(0xf4)](_0x50500e)==='[object\\x20Array]'?_0x37f656=_0x842566(0x135):this[_0x842566(0xf4)](_0x50500e)==='[object\\x20Date]'?_0x37f656=_0x842566(0x186):this[_0x842566(0xf4)](_0x50500e)==='[object\\x20BigInt]'?_0x37f656=_0x842566(0x143):_0x50500e===null?_0x37f656=_0x842566(0xe8):_0x50500e[_0x842566(0x1a8)]&&(_0x37f656=_0x50500e[_0x842566(0x1a8)]['name']||_0x37f656):_0x37f656===_0x842566(0x187)&&this['_HTMLAllCollection']&&_0x50500e instanceof this[_0x842566(0x119)]&&(_0x37f656=_0x842566(0x18e)),_0x37f656;}['_objectToString'](_0x45dc58){var _0x41ebef=_0x4ff05d;return Object['prototype'][_0x41ebef(0x15c)]['call'](_0x45dc58);}[_0x4ff05d(0x14f)](_0xcfc0be){var _0x2a8ca4=_0x4ff05d;return _0xcfc0be===_0x2a8ca4(0xd3)||_0xcfc0be===_0x2a8ca4(0x189)||_0xcfc0be==='number';}['_isPrimitiveWrapperType'](_0x10c5f5){var _0x44359b=_0x4ff05d;return _0x10c5f5==='Boolean'||_0x10c5f5===_0x44359b(0xde)||_0x10c5f5===_0x44359b(0x174);}[_0x4ff05d(0x109)](_0x1dd1f9,_0x38aa69,_0x5f01b6,_0x255f5c,_0x2760ad,_0x562ad8){var _0x53308e=this;return function(_0xb79a60){var _0x9980df=_0xe1a3,_0x339b50=_0x2760ad[_0x9980df(0x169)][_0x9980df(0x128)],_0x4a5b55=_0x2760ad[_0x9980df(0x169)][_0x9980df(0xdd)],_0x28a58e=_0x2760ad[_0x9980df(0x169)][_0x9980df(0x12b)];_0x2760ad[_0x9980df(0x169)][_0x9980df(0x12b)]=_0x339b50,_0x2760ad['node'][_0x9980df(0xdd)]=typeof _0x255f5c=='number'?_0x255f5c:_0xb79a60,_0x1dd1f9[_0x9980df(0x18a)](_0x53308e[_0x9980df(0x1ac)](_0x38aa69,_0x5f01b6,_0x255f5c,_0x2760ad,_0x562ad8)),_0x2760ad[_0x9980df(0x169)][_0x9980df(0x12b)]=_0x28a58e,_0x2760ad['node'][_0x9980df(0xdd)]=_0x4a5b55;};}[_0x4ff05d(0x10b)](_0x4fc405,_0x8cf334,_0x56595e,_0x14108a,_0xbed4a,_0x459da6,_0x4c58e7){var _0x376bbd=_0x4ff05d,_0x22da77=this;return _0x8cf334[_0x376bbd(0xe0)+_0xbed4a[_0x376bbd(0x15c)]()]=!0x0,function(_0x2fef76){var _0x437d6a=_0x376bbd,_0x8e1756=_0x459da6[_0x437d6a(0x169)][_0x437d6a(0x128)],_0x1da2e3=_0x459da6[_0x437d6a(0x169)][_0x437d6a(0xdd)],_0x2e3aed=_0x459da6[_0x437d6a(0x169)][_0x437d6a(0x12b)];_0x459da6[_0x437d6a(0x169)][_0x437d6a(0x12b)]=_0x8e1756,_0x459da6[_0x437d6a(0x169)][_0x437d6a(0xdd)]=_0x2fef76,_0x4fc405['push'](_0x22da77[_0x437d6a(0x1ac)](_0x56595e,_0x14108a,_0xbed4a,_0x459da6,_0x4c58e7)),_0x459da6[_0x437d6a(0x169)][_0x437d6a(0x12b)]=_0x2e3aed,_0x459da6['node'][_0x437d6a(0xdd)]=_0x1da2e3;};}[_0x4ff05d(0x1ac)](_0x1da41f,_0x5119e8,_0x3ce2bc,_0x322d92,_0x15fd3a){var _0x49306f=_0x4ff05d,_0x187f22=this;_0x15fd3a||(_0x15fd3a=function(_0x2acb8d,_0x3b5007){return _0x2acb8d[_0x3b5007];});var _0x1c5a8b=_0x3ce2bc[_0x49306f(0x15c)](),_0x2059df=_0x322d92['expressionsToEvaluate']||{},_0x1cddee=_0x322d92[_0x49306f(0xcc)],_0x2f4613=_0x322d92[_0x49306f(0xdf)];try{var _0x256760=this[_0x49306f(0x12e)](_0x1da41f),_0x5464e8=_0x1c5a8b;_0x256760&&_0x5464e8[0x0]==='\\x27'&&(_0x5464e8=_0x5464e8[_0x49306f(0x173)](0x1,_0x5464e8['length']-0x2));var _0x21ea7f=_0x322d92[_0x49306f(0x19f)]=_0x2059df[_0x49306f(0xe0)+_0x5464e8];_0x21ea7f&&(_0x322d92[_0x49306f(0xcc)]=_0x322d92[_0x49306f(0xcc)]+0x1),_0x322d92[_0x49306f(0xdf)]=!!_0x21ea7f;var _0x57543e=typeof _0x3ce2bc==_0x49306f(0xf0),_0x3da362={'name':_0x57543e||_0x256760?_0x1c5a8b:this[_0x49306f(0x148)](_0x1c5a8b)};if(_0x57543e&&(_0x3da362[_0x49306f(0xf0)]=!0x0),!(_0x5119e8===_0x49306f(0x135)||_0x5119e8===_0x49306f(0x19b))){var _0x1a4702=this['_getOwnPropertyDescriptor'](_0x1da41f,_0x3ce2bc);if(_0x1a4702&&(_0x1a4702[_0x49306f(0x16b)]&&(_0x3da362[_0x49306f(0xf9)]=!0x0),_0x1a4702[_0x49306f(0x105)]&&!_0x21ea7f&&!_0x322d92[_0x49306f(0x149)]))return _0x3da362[_0x49306f(0x141)]=!0x0,this[_0x49306f(0xeb)](_0x3da362,_0x322d92),_0x3da362;}var _0x508291;try{_0x508291=_0x15fd3a(_0x1da41f,_0x3ce2bc);}catch(_0x290d66){return _0x3da362={'name':_0x1c5a8b,'type':'unknown','error':_0x290d66['message']},this[_0x49306f(0xeb)](_0x3da362,_0x322d92),_0x3da362;}var _0x1aa7dc=this[_0x49306f(0xe4)](_0x508291),_0x5bdfaa=this[_0x49306f(0x14f)](_0x1aa7dc);if(_0x3da362[_0x49306f(0x126)]=_0x1aa7dc,_0x5bdfaa)this[_0x49306f(0xeb)](_0x3da362,_0x322d92,_0x508291,function(){var _0x5e824a=_0x49306f;_0x3da362['value']=_0x508291[_0x5e824a(0x130)](),!_0x21ea7f&&_0x187f22[_0x5e824a(0x1a0)](_0x1aa7dc,_0x3da362,_0x322d92,{});});else{var _0x32c361=_0x322d92[_0x49306f(0x166)]&&_0x322d92[_0x49306f(0x1aa)]<_0x322d92[_0x49306f(0xe3)]&&_0x322d92[_0x49306f(0x170)][_0x49306f(0x1a7)](_0x508291)<0x0&&_0x1aa7dc!==_0x49306f(0x132)&&_0x322d92[_0x49306f(0xec)]<_0x322d92[_0x49306f(0x163)];_0x32c361||_0x322d92[_0x49306f(0x1aa)]<_0x1cddee||_0x21ea7f?(this[_0x49306f(0x14b)](_0x3da362,_0x508291,_0x322d92,_0x21ea7f||{}),this['_additionalMetadata'](_0x508291,_0x3da362)):this['_processTreeNodeResult'](_0x3da362,_0x322d92,_0x508291,function(){var _0x57c377=_0x49306f;_0x1aa7dc==='null'||_0x1aa7dc===_0x57c377(0x187)||(delete _0x3da362[_0x57c377(0x14e)],_0x3da362[_0x57c377(0x12f)]=!0x0);});}return _0x3da362;}finally{_0x322d92['expressionsToEvaluate']=_0x2059df,_0x322d92[_0x49306f(0xcc)]=_0x1cddee,_0x322d92[_0x49306f(0xdf)]=_0x2f4613;}}[_0x4ff05d(0x1a0)](_0x1f840b,_0x47afb5,_0x1bd95a,_0x411db7){var _0x3d88c7=_0x4ff05d,_0x5d3807=_0x411db7['strLength']||_0x1bd95a['strLength'];if((_0x1f840b===_0x3d88c7(0x189)||_0x1f840b==='String')&&_0x47afb5[_0x3d88c7(0x14e)]){let _0x9cbb4=_0x47afb5['value'][_0x3d88c7(0x178)];_0x1bd95a[_0x3d88c7(0x157)]+=_0x9cbb4,_0x1bd95a[_0x3d88c7(0x157)]>_0x1bd95a['totalStrLength']?(_0x47afb5[_0x3d88c7(0x12f)]='',delete _0x47afb5[_0x3d88c7(0x14e)]):_0x9cbb4>_0x5d3807&&(_0x47afb5[_0x3d88c7(0x12f)]=_0x47afb5[_0x3d88c7(0x14e)]['substr'](0x0,_0x5d3807),delete _0x47afb5['value']);}}['_isMap'](_0x22eda0){var _0x228921=_0x4ff05d;return!!(_0x22eda0&&_0x269569[_0x228921(0x15d)]&&this[_0x228921(0xf4)](_0x22eda0)===_0x228921(0x123)&&_0x22eda0[_0x228921(0x17e)]);}[_0x4ff05d(0x148)](_0x3ecb1a){var _0x3146de=_0x4ff05d;if(_0x3ecb1a[_0x3146de(0x19d)](/^\\d+$/))return _0x3ecb1a;var _0x28e676;try{_0x28e676=JSON[_0x3146de(0x147)](''+_0x3ecb1a);}catch{_0x28e676='\\x22'+this[_0x3146de(0xf4)](_0x3ecb1a)+'\\x22';}return _0x28e676[_0x3146de(0x19d)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x28e676=_0x28e676[_0x3146de(0x173)](0x1,_0x28e676[_0x3146de(0x178)]-0x2):_0x28e676=_0x28e676['replace'](/'/g,'\\x5c\\x27')[_0x3146de(0x14a)](/\\\\\"/g,'\\x22')[_0x3146de(0x14a)](/(^\"|\"$)/g,'\\x27'),_0x28e676;}[_0x4ff05d(0xeb)](_0x4ce195,_0x4122a6,_0x1d510f,_0x18ed5f){var _0x2ee252=_0x4ff05d;this['_treeNodePropertiesBeforeFullValue'](_0x4ce195,_0x4122a6),_0x18ed5f&&_0x18ed5f(),this['_additionalMetadata'](_0x1d510f,_0x4ce195),this[_0x2ee252(0x180)](_0x4ce195,_0x4122a6);}[_0x4ff05d(0x122)](_0x4309aa,_0x43ca8b){var _0x317ae6=_0x4ff05d;this[_0x317ae6(0x10a)](_0x4309aa,_0x43ca8b),this[_0x317ae6(0xd7)](_0x4309aa,_0x43ca8b),this[_0x317ae6(0x1ae)](_0x4309aa,_0x43ca8b),this[_0x317ae6(0x10f)](_0x4309aa,_0x43ca8b);}[_0x4ff05d(0x10a)](_0xa533dd,_0x4418e6){}[_0x4ff05d(0xd7)](_0x2f284d,_0xbe983c){}[_0x4ff05d(0x113)](_0x25f09c,_0x2a92c3){}[_0x4ff05d(0x181)](_0x54d912){var _0x1a4d36=_0x4ff05d;return _0x54d912===this[_0x1a4d36(0x192)];}[_0x4ff05d(0x180)](_0x401b38,_0x3bcc58){var _0x3e560b=_0x4ff05d;this[_0x3e560b(0x113)](_0x401b38,_0x3bcc58),this[_0x3e560b(0x154)](_0x401b38),_0x3bcc58[_0x3e560b(0x167)]&&this[_0x3e560b(0x13f)](_0x401b38),this['_addFunctionsNode'](_0x401b38,_0x3bcc58),this['_addLoadNode'](_0x401b38,_0x3bcc58),this[_0x3e560b(0x16a)](_0x401b38);}[_0x4ff05d(0x193)](_0x1a9892,_0x4eb3ac){var _0x445444=_0x4ff05d;let _0x1eac7b;try{_0x269569[_0x445444(0x1a2)]&&(_0x1eac7b=_0x269569[_0x445444(0x1a2)][_0x445444(0x159)],_0x269569[_0x445444(0x1a2)][_0x445444(0x159)]=function(){}),_0x1a9892&&typeof _0x1a9892[_0x445444(0x178)]==_0x445444(0x1a4)&&(_0x4eb3ac[_0x445444(0x178)]=_0x1a9892[_0x445444(0x178)]);}catch{}finally{_0x1eac7b&&(_0x269569[_0x445444(0x1a2)][_0x445444(0x159)]=_0x1eac7b);}if(_0x4eb3ac['type']===_0x445444(0x1a4)||_0x4eb3ac['type']==='Number'){if(isNaN(_0x4eb3ac['value']))_0x4eb3ac[_0x445444(0x198)]=!0x0,delete _0x4eb3ac[_0x445444(0x14e)];else switch(_0x4eb3ac[_0x445444(0x14e)]){case Number[_0x445444(0x156)]:_0x4eb3ac['positiveInfinity']=!0x0,delete _0x4eb3ac[_0x445444(0x14e)];break;case Number[_0x445444(0x14c)]:_0x4eb3ac[_0x445444(0x11f)]=!0x0,delete _0x4eb3ac['value'];break;case 0x0:this['_isNegativeZero'](_0x4eb3ac[_0x445444(0x14e)])&&(_0x4eb3ac[_0x445444(0x11c)]=!0x0);break;}}else _0x4eb3ac[_0x445444(0x126)]===_0x445444(0x132)&&typeof _0x1a9892[_0x445444(0x139)]==_0x445444(0x189)&&_0x1a9892['name']&&_0x4eb3ac[_0x445444(0x139)]&&_0x1a9892[_0x445444(0x139)]!==_0x4eb3ac[_0x445444(0x139)]&&(_0x4eb3ac[_0x445444(0x137)]=_0x1a9892['name']);}[_0x4ff05d(0x110)](_0x35fc99){var _0x2cdb7d=_0x4ff05d;return 0x1/_0x35fc99===Number[_0x2cdb7d(0x14c)];}[_0x4ff05d(0x13f)](_0x36a950){var _0x369f6e=_0x4ff05d;!_0x36a950['props']||!_0x36a950['props'][_0x369f6e(0x178)]||_0x36a950[_0x369f6e(0x126)]===_0x369f6e(0x135)||_0x36a950[_0x369f6e(0x126)]==='Map'||_0x36a950[_0x369f6e(0x126)]===_0x369f6e(0xea)||_0x36a950['props'][_0x369f6e(0x171)](function(_0x3f86f5,_0x311f76){var _0x236385=_0x369f6e,_0x35b404=_0x3f86f5[_0x236385(0x139)][_0x236385(0x183)](),_0x650156=_0x311f76[_0x236385(0x139)]['toLowerCase']();return _0x35b404<_0x650156?-0x1:_0x35b404>_0x650156?0x1:0x0;});}[_0x4ff05d(0x133)](_0x2f1ebc,_0x50105a){var _0xbfcd7d=_0x4ff05d;if(!(_0x50105a[_0xbfcd7d(0x1a9)]||!_0x2f1ebc[_0xbfcd7d(0x179)]||!_0x2f1ebc[_0xbfcd7d(0x179)]['length'])){for(var _0x253a6a=[],_0x2102b6=[],_0x2bb908=0x0,_0x546f89=_0x2f1ebc[_0xbfcd7d(0x179)][_0xbfcd7d(0x178)];_0x2bb908<_0x546f89;_0x2bb908++){var _0x1cbd3e=_0x2f1ebc['props'][_0x2bb908];_0x1cbd3e['type']==='function'?_0x253a6a[_0xbfcd7d(0x18a)](_0x1cbd3e):_0x2102b6[_0xbfcd7d(0x18a)](_0x1cbd3e);}if(!(!_0x2102b6['length']||_0x253a6a[_0xbfcd7d(0x178)]<=0x1)){_0x2f1ebc[_0xbfcd7d(0x179)]=_0x2102b6;var _0x1a40f3={'functionsNode':!0x0,'props':_0x253a6a};this['_setNodeId'](_0x1a40f3,_0x50105a),this[_0xbfcd7d(0x113)](_0x1a40f3,_0x50105a),this[_0xbfcd7d(0x154)](_0x1a40f3),this[_0xbfcd7d(0x10f)](_0x1a40f3,_0x50105a),_0x1a40f3['id']+='\\x20f',_0x2f1ebc[_0xbfcd7d(0x179)][_0xbfcd7d(0x120)](_0x1a40f3);}}}[_0x4ff05d(0x188)](_0x46e259,_0x47f4eb){}[_0x4ff05d(0x154)](_0x1d9f64){}['_isArray'](_0xda35a3){var _0x2a28dd=_0x4ff05d;return Array['isArray'](_0xda35a3)||typeof _0xda35a3=='object'&&this[_0x2a28dd(0xf4)](_0xda35a3)===_0x2a28dd(0xda);}[_0x4ff05d(0x10f)](_0x2ad62b,_0x3d8b5c){}['_cleanNode'](_0x125644){var _0x1573c2=_0x4ff05d;delete _0x125644[_0x1573c2(0xca)],delete _0x125644['_hasSetOnItsPath'],delete _0x125644[_0x1573c2(0x158)];}['_setNodeExpressionPath'](_0x23066f,_0x31c14e){}}let _0x530de9=new _0x4bec75(),_0x5bb14b={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x462f4d={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x5439d6(_0x453dfa,_0x415706,_0x2d7675,_0x22037c,_0x43ea92,_0x50f5f6){var _0x27b06c=_0x4ff05d;let _0x4f017d,_0x4782f7;try{_0x4782f7=_0x41cee5(),_0x4f017d=_0x309406[_0x415706],!_0x4f017d||_0x4782f7-_0x4f017d['ts']>0x1f4&&_0x4f017d[_0x27b06c(0x121)]&&_0x4f017d['time']/_0x4f017d[_0x27b06c(0x121)]<0x64?(_0x309406[_0x415706]=_0x4f017d={'count':0x0,'time':0x0,'ts':_0x4782f7},_0x309406['hits']={}):_0x4782f7-_0x309406['hits']['ts']>0x32&&_0x309406[_0x27b06c(0x160)][_0x27b06c(0x121)]&&_0x309406['hits']['time']/_0x309406['hits'][_0x27b06c(0x121)]<0x64&&(_0x309406[_0x27b06c(0x160)]={});let _0xe784a6=[],_0x375cac=_0x4f017d[_0x27b06c(0xdc)]||_0x309406['hits']['reduceLimits']?_0x462f4d:_0x5bb14b,_0x351b28=_0x59669e=>{var _0x5be152=_0x27b06c;let _0x21cc5c={};return _0x21cc5c['props']=_0x59669e[_0x5be152(0x179)],_0x21cc5c[_0x5be152(0x1b2)]=_0x59669e[_0x5be152(0x1b2)],_0x21cc5c['strLength']=_0x59669e[_0x5be152(0x177)],_0x21cc5c['totalStrLength']=_0x59669e[_0x5be152(0xfa)],_0x21cc5c[_0x5be152(0x163)]=_0x59669e[_0x5be152(0x163)],_0x21cc5c[_0x5be152(0xe3)]=_0x59669e[_0x5be152(0xe3)],_0x21cc5c[_0x5be152(0x167)]=!0x1,_0x21cc5c[_0x5be152(0x1a9)]=!_0xb6c728,_0x21cc5c[_0x5be152(0xcc)]=0x1,_0x21cc5c[_0x5be152(0x1aa)]=0x0,_0x21cc5c[_0x5be152(0xd8)]='root_exp_id',_0x21cc5c['rootExpression']='root_exp',_0x21cc5c[_0x5be152(0x166)]=!0x0,_0x21cc5c['autoExpandPreviousObjects']=[],_0x21cc5c[_0x5be152(0xec)]=0x0,_0x21cc5c['resolveGetters']=!0x0,_0x21cc5c[_0x5be152(0x157)]=0x0,_0x21cc5c[_0x5be152(0x169)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x21cc5c;};for(var _0x5659d5=0x0;_0x5659d5<_0x43ea92[_0x27b06c(0x178)];_0x5659d5++)_0xe784a6[_0x27b06c(0x18a)](_0x530de9[_0x27b06c(0x14b)]({'timeNode':_0x453dfa===_0x27b06c(0x172)||void 0x0},_0x43ea92[_0x5659d5],_0x351b28(_0x375cac),{}));if(_0x453dfa===_0x27b06c(0x142)){let _0x3d506b=Error[_0x27b06c(0xd2)];try{Error[_0x27b06c(0xd2)]=0x1/0x0,_0xe784a6['push'](_0x530de9['serialize']({'stackNode':!0x0},new Error()[_0x27b06c(0x13a)],_0x351b28(_0x375cac),{'strLength':0x1/0x0}));}finally{Error[_0x27b06c(0xd2)]=_0x3d506b;}}return{'method':_0x27b06c(0x131),'version':_0x583925,'args':[{'ts':_0x2d7675,'session':_0x22037c,'args':_0xe784a6,'id':_0x415706,'context':_0x50f5f6}]};}catch(_0x50b21c){return{'method':_0x27b06c(0x131),'version':_0x583925,'args':[{'ts':_0x2d7675,'session':_0x22037c,'args':[{'type':_0x27b06c(0xf2),'error':_0x50b21c&&_0x50b21c[_0x27b06c(0x152)]}],'id':_0x415706,'context':_0x50f5f6}]};}finally{try{if(_0x4f017d&&_0x4782f7){let _0x6e3f50=_0x41cee5();_0x4f017d[_0x27b06c(0x121)]++,_0x4f017d[_0x27b06c(0x172)]+=_0x50d7d1(_0x4782f7,_0x6e3f50),_0x4f017d['ts']=_0x6e3f50,_0x309406[_0x27b06c(0x160)][_0x27b06c(0x121)]++,_0x309406['hits'][_0x27b06c(0x172)]+=_0x50d7d1(_0x4782f7,_0x6e3f50),_0x309406[_0x27b06c(0x160)]['ts']=_0x6e3f50,(_0x4f017d[_0x27b06c(0x121)]>0x32||_0x4f017d[_0x27b06c(0x172)]>0x64)&&(_0x4f017d[_0x27b06c(0xdc)]=!0x0),(_0x309406['hits']['count']>0x3e8||_0x309406[_0x27b06c(0x160)][_0x27b06c(0x172)]>0x12c)&&(_0x309406[_0x27b06c(0x160)][_0x27b06c(0xdc)]=!0x0);}}catch{}}}return _0x5439d6;}((_0x436b2f,_0x5e9e68,_0x739f51,_0x200859,_0x5ade45,_0x3c0c4a,_0x2e9ef4,_0x52f7b9,_0x489bcc,_0x4b0904)=>{var _0x3eb34b=_0x24ae32;if(_0x436b2f['_console_ninja'])return _0x436b2f[_0x3eb34b(0x10c)];if(!J(_0x436b2f,_0x52f7b9,_0x5ade45))return _0x436b2f['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x436b2f['_console_ninja'];let _0x17ed1e=W(_0x436b2f),_0x5b8aae=_0x17ed1e[_0x3eb34b(0xf1)],_0x358f86=_0x17ed1e[_0x3eb34b(0x106)],_0x1db0c7=_0x17ed1e[_0x3eb34b(0x168)],_0x5edab2={'hits':{},'ts':{}},_0x2306a6=Y(_0x436b2f,_0x489bcc,_0x5edab2,_0x3c0c4a),_0x5c2099=_0x39c657=>{_0x5edab2['ts'][_0x39c657]=_0x358f86();},_0x3a97e3=(_0x231603,_0x32531e)=>{var _0x2a1511=_0x3eb34b;let _0x5019aa=_0x5edab2['ts'][_0x32531e];if(delete _0x5edab2['ts'][_0x32531e],_0x5019aa){let _0x26ffff=_0x5b8aae(_0x5019aa,_0x358f86());_0x482728(_0x2306a6(_0x2a1511(0x172),_0x231603,_0x1db0c7(),_0x109c4f,[_0x26ffff],_0x32531e));}},_0x160f42=_0x40a389=>_0x174f3e=>{var _0x581236=_0x3eb34b;try{_0x5c2099(_0x174f3e),_0x40a389(_0x174f3e);}finally{_0x436b2f[_0x581236(0x1a2)][_0x581236(0x172)]=_0x40a389;}},_0x46bc9a=_0x8b78e8=>_0x4c80fe=>{var _0x44e4b4=_0x3eb34b;try{let [_0x285c7c,_0x16c463]=_0x4c80fe[_0x44e4b4(0x18c)](':logPointId:');_0x3a97e3(_0x16c463,_0x285c7c),_0x8b78e8(_0x285c7c);}finally{_0x436b2f[_0x44e4b4(0x1a2)]['timeEnd']=_0x8b78e8;}};_0x436b2f[_0x3eb34b(0x10c)]={'consoleLog':(_0x1bc2ea,_0x3f3e00)=>{var _0x4b6724=_0x3eb34b;_0x436b2f['console'][_0x4b6724(0x131)]['name']!==_0x4b6724(0x116)&&_0x482728(_0x2306a6('log',_0x1bc2ea,_0x1db0c7(),_0x109c4f,_0x3f3e00));},'consoleTrace':(_0x1fa5f1,_0x122566)=>{var _0x122607=_0x3eb34b;_0x436b2f[_0x122607(0x1a2)][_0x122607(0x131)]['name']!==_0x122607(0x103)&&_0x482728(_0x2306a6(_0x122607(0x142),_0x1fa5f1,_0x1db0c7(),_0x109c4f,_0x122566));},'consoleTime':()=>{var _0x4d68d2=_0x3eb34b;_0x436b2f[_0x4d68d2(0x1a2)][_0x4d68d2(0x172)]=_0x160f42(_0x436b2f['console']['time']);},'consoleTimeEnd':()=>{var _0x3453b4=_0x3eb34b;_0x436b2f[_0x3453b4(0x1a2)][_0x3453b4(0x175)]=_0x46bc9a(_0x436b2f[_0x3453b4(0x1a2)][_0x3453b4(0x175)]);},'autoLog':(_0x449076,_0x2e7866)=>{var _0x5828ec=_0x3eb34b;_0x482728(_0x2306a6(_0x5828ec(0x131),_0x2e7866,_0x1db0c7(),_0x109c4f,[_0x449076]));},'autoLogMany':(_0x53314b,_0x42a9f5)=>{var _0x13e6ec=_0x3eb34b;_0x482728(_0x2306a6(_0x13e6ec(0x131),_0x53314b,_0x1db0c7(),_0x109c4f,_0x42a9f5));},'autoTrace':(_0x564590,_0x101283)=>{var _0x223bdf=_0x3eb34b;_0x482728(_0x2306a6(_0x223bdf(0x142),_0x101283,_0x1db0c7(),_0x109c4f,[_0x564590]));},'autoTraceMany':(_0x553423,_0x3690e0)=>{var _0x35ab7e=_0x3eb34b;_0x482728(_0x2306a6(_0x35ab7e(0x142),_0x553423,_0x1db0c7(),_0x109c4f,_0x3690e0));},'autoTime':(_0x2540cc,_0x2ad40f,_0x2cc138)=>{_0x5c2099(_0x2cc138);},'autoTimeEnd':(_0x30e6d3,_0x4c710,_0x38d515)=>{_0x3a97e3(_0x4c710,_0x38d515);},'coverage':_0x6611fa=>{var _0x55a654=_0x3eb34b;_0x482728({'method':_0x55a654(0x15f),'version':_0x3c0c4a,'args':[{'id':_0x6611fa}]});}};let _0x482728=b(_0x436b2f,_0x5e9e68,_0x739f51,_0x200859,_0x5ade45,_0x4b0904),_0x109c4f=_0x436b2f[_0x3eb34b(0x17c)];return _0x436b2f['_console_ninja'];})(globalThis,_0x24ae32(0x1b0),_0x24ae32(0xd6),_0x24ae32(0x11d),_0x24ae32(0x10e),_0x24ae32(0x17a),'1712149392646',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.100\"],_0x24ae32(0x1ad),_0x24ae32(0x11e));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxTQUFTO0FBQ1QsQ0FBQyxPQUFPLHFGQUFxRixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssaUJBQWlCLHdDQUF3QyxpQkFBaUIsMEJBQTBCLHFGQUFxRixHQUFHLHdCQUF3QixpQkFBaUIsc0NBQXNDLEdBQUcsY0FBYyxtREFBbUQsR0FBRyxjQUFjLG9DQUFvQyxHQUFHLG9CQUFvQiw0QkFBNEIsNENBQTRDLDhCQUE4QixtREFBbUQsR0FBRywyQkFBMkIsU0FBUyxrREFBa0QsVUFBVSxvREFBb0QsVUFBVSwyQ0FBMkMsVUFBVSwwQ0FBMEMsV0FBVyxpQ0FBaUMsR0FBRyxtQkFBbUI7QUFDaHNDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3ZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxVQUFVLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFL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QXlFLGlCQUFpQixxREFBcUQsb0JBQW9CLElBQUksUUFBUSxtQ0FBbUMsT0FBTyx1REFBdUQsdUZBQXVGLElBQUksaUJBQWlCLE9BQU8sdURBQXVELDRDQUE0QyxzRUFBc0UscUNBQXFDLElBQUksUUFBUSxJQUFJLHlCQUF5QiwwQkFBMEIsMmdCQUEyZ0IsU0FBUyxrQkFBa0IseUdBQXlHLHdCQUF3QixrRUFBa0UseUVBQXlFLG1CQUFtQixzQkFBc0IscUJBQXFCLHdCQUF3QixpQkFBaUIscUJBQXFCLHVCQUF1QixrQkFBa0IsbUJBQW1CLGtCQUFrQixzQkFBc0IsNkJBQTZCLHVKQUF1SixTQUFTLFNBQVMsNEVBQTRFLHdDQUF3QyxtQ0FBbUMsd0JBQXdCLHlDQUF5QyxnREFBZ0QsK0NBQStDLCtGQUErRixrQ0FBa0Msd0JBQXdCLElBQUksMkNBQTJDLFFBQVEsMERBQTBELGtDQUFrQyx3QkFBd0IsSUFBSSxzRUFBc0UscURBQXFELFFBQVEsb0RBQW9ELDZCQUE2QixxQ0FBcUMsd0JBQXdCLDBJQUEwSSx3Q0FBd0Msd0JBQXdCLDRKQUE0SixvQkFBb0Isd0JBQXdCLHVGQUF1Rix1QkFBdUIsd0JBQXdCLHdHQUF3RyxtQ0FBbUMsd0JBQXdCLG9GQUFvRix1Q0FBdUMsd0JBQXdCLGtGQUFrRixxQ0FBcUMsd0JBQXdCLG9GQUFvRix5Q0FBeUMsd0JBQXdCLGtGQUFrRiw4Q0FBOEMsc0JBQXNCLGdEQUFnRCwrQkFBK0Isd0JBQXdCLHdCQUF3QixXQUFXLHVEQUF1RCxlQUFlLEVBQUUsS0FBSyxtSEFBbUgsb0NBQW9DLDJPQUEyTyxJQUFJLFlBQVksaURBQWlELElBQUksMEJBQTBCLFdBQVcsVUFBVSxpREFBaUQsSUFBSSw0QkFBNEIsV0FBVyxVQUFVLDJDQUEyQyxJQUFJLHVCQUF1QixZQUFZLDJDQUEyQyxJQUFJLDBCQUEwQixZQUFZLDJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL3NyYy9hbmltYXRpb25zLmNzcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9zcmMvYW5pbWF0aW9ucy5jc3M/ZGUyNiIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ka20tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGttLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RrbS1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9qZWN0LWNhcmR7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgIWltcG9ydGFudDtcbn1cblxuLnByb2plY3QtY2FyZDpob3ZlcntcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpICFpbXBvcnRhbnQ7XG59XG4ud2F2ZS1waG90b3tcbiAgICBhbmltYXRpb246IHdhdmVBbmltYXRpb24gNTAwbXMgZWFzZS1pbi1vdXQgMTtcbn1cbi5pY29uPmE+aW1ne1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmljb24+YTpob3Zlcj5pbWd7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIGZpbHRlcjpkcm9wLXNoYWRvdygwIDAgNXB4ICNDMEMwQzApXG59XG4uY29udGFjdC1mb290ZXI+YTpob3Zlcj5pbWd7XG4gICAgZmlsdGVyOmludmVydCgpIGRyb3Atc2hhZG93KDAgMCA1cHggI2ZmZDcwMCk7XG59XG5Aa2V5ZnJhbWVzIHdhdmVBbmltYXRpb257XG4gICAgMCV7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKSBzY2FsZSgxKVxuICAgIH1cbiAgICAyNSV7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig1ZGVnKSBzY2FsZSgxLjMpXG4gICAgfVxuICAgIDUwJXt0cmFuc2Zvcm06IHJvdGF0ZVooLTVkZWcpIHNjYWxlKDEuNClcbiAgICB9XG4gICAgNzUle3RyYW5zZm9ybTogcm90YXRlWig1ZGVnKSBzY2FsZSgxLjMpXG4gICAgfVxuICAgIDEwMCV7dHJhbnNmb3JtOnJvdGF0ZVooMGRlZykgc2NhbGUoMSl9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYW5pbWF0aW9ucy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDhFQUE4RTtBQUNsRjs7QUFFQTtJQUNJLFVBQVU7SUFDViwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckI7QUFDSjtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQSxJQUFJO0lBQ0o7SUFDQSxJQUFJO0lBQ0o7SUFDQSxLQUFLLGdDQUFnQztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdC1jYXJke1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXJ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpICFpbXBvcnRhbnQ7XFxufVxcbi53YXZlLXBob3Rve1xcbiAgICBhbmltYXRpb246IHdhdmVBbmltYXRpb24gNTAwbXMgZWFzZS1pbi1vdXQgMTtcXG59XFxuLmljb24+YT5pbWd7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uaWNvbj5hOmhvdmVyPmltZ3tcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBmaWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDVweCAjQzBDMEMwKVxcbn1cXG4uY29udGFjdC1mb290ZXI+YTpob3Zlcj5pbWd7XFxuICAgIGZpbHRlcjppbnZlcnQoKSBkcm9wLXNoYWRvdygwIDAgNXB4ICNmZmQ3MDApO1xcbn1cXG5Aa2V5ZnJhbWVzIHdhdmVBbmltYXRpb257XFxuICAgIDAle1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpXFxuICAgIH1cXG4gICAgMjUle1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDVkZWcpIHNjYWxlKDEuMylcXG4gICAgfVxcbiAgICA1MCV7dHJhbnNmb3JtOiByb3RhdGVaKC01ZGVnKSBzY2FsZSgxLjQpXFxuICAgIH1cXG4gICAgNzUle3RyYW5zZm9ybTogcm90YXRlWig1ZGVnKSBzY2FsZSgxLjMpXFxuICAgIH1cXG4gICAgMTAwJXt0cmFuc2Zvcm06cm90YXRlWigwZGVnKSBzY2FsZSgxKX1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLW1haW4tYmctY29sb3I6ICNmMGY5ZmY7XG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMwNzU5ODU7XG4gICAgLS10ZXJ0aWFyeS1iZy1jb2xvcjogIzAyODRjNztcbiAgICAtLWNhcmQtYmctY29sb3I6IHNpbHZlcjtcbiAgICAtLW1haW4tZm9udC1jb2xvcjogIzA4MmY0OTtcbiAgICAtLXNlY29uZGFyeS1mb250LWNvbG9yOiAjZTBmMmZlO1xufVxuaHRtbCwgYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzowO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwibWFpblwiIFwiZm9vdGVyXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG8gYXV0byBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTg5ZGVnLCB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpIGNsYW1wKDIlLCAyMHZ3LCAzMHZoKSwgdHJhbnNwYXJlbnQgY2xhbXAoY2FsYygyJSArIDVweCksIGNhbGMoMjB2dyArIDVweCksIGNhbGMoMzB2aCArIDVweCkpKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBcblxufVxuXG5oZWFkZXIsIG1haW4sIGZvb3RlcntcbiAgICBwYWRkaW5nOiBjbGFtcCgycHgsIDUlLCAyMHB4KTtcbiAgICBwYWRkaW5nLWxlZnQ6Y2xhbXAoMnB4LCAyMCUsIDE1MHB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OmNsYW1wKDJweCwgMjAlLCAxNTBweCk7XG59XG4vKiBIZWFkZXIgYXJlYSAqL1xuaGVhZGVye1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IGNsYW1wKDVweCwgNHZ3LCA1MHB4KTtcbn1cblxuLmZyYW1le1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY2FyZC1iZy1jb2xvcik7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40NTkpO1xufVxuLnBob3Rve1xuICAgIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTV2dztcbiAgICA+aW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uY2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDEzdnc7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiBjbGFtcCgxMHB4LCAxJSwgMjBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDEuMnZ3LCAyNHB4KTtcbiAgICA+YXJ0aWNsZXtcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyMHB4LCA3MCUsIDE2MHB4KTtcblxuICAgIH1cbiAgICA+IGFydGljbGUgPiBoMXtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCg1cHgsIDR2dywgNDBweCk7O1xuICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgPmFydGljbGUgPiAudGV4dC1kaXZ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OjgwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICA+cHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICA+LmNvbnRhY3R7XG4gICAgICAgIGhlaWdodDoxNSU7XG4gICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGdhcDogY2xhbXAoMTJweCwgNSUsIDcwcHgpO1xuICAgICAgICA+YXtcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgPmltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbm1haW57XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDEuNXZ3LCAyNHB4KTtcbiAgICBncmlkLWFyZWE6IG1haW47XG4gICAgLm1haW4tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAucHJvamVjdC1jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XG4gICAgICAgIGdhcDoxcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXZ3O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cblxufX1cbi5wcm9qZWN0LWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktYmctY29sb3IpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhPmltZ3tcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTYwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cblxuZm9vdGVye1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZm9udC1zaXplOiBjbGFtcCg2cHgsIC41dncsIDIwcHgpO1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xuICAgIGF7Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTt9XG4gICAgaDF7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNDUyKTtcbiAgICB9XG4gICAgPmgxLCBoMiwgaDN7XG4gICAgICAgIG1hcmdpbjoxMHB4O1xuICAgIH1cblxufVxuLmNvbnRhY3QtZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDUlO1xuICAgID5he1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICA+aW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MjAwMHB4KXtcbiAgICBtYWlue1xuXG4gICAgICAgIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICB9XG4gICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB9XG4gICAgICAgIGg0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3QtY2FyZC1jb250YWluZXJ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoZWFkZXJ7XG4gICAgICAgIC5waG90b3tcbiAgICAgICAgICAgIG1heC13aWR0aDoxMXZ3O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJke1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6OHZ3O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvb3RlcntcbiAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgIGgxe1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xuICAgICAgICB9XG4gICAgICAgIGgxLCBoMiwgaDN7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGVhZGVyLCBmb290ZXJ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjB2dztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjB2dztcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcbiAgICBoZWFkZXJ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgICAucGhvdG97XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6NjBweDtcbiAgICAgICAgd2lkdGg6IDEydnc7XG4gICAgfVxuICAgIC5jYXJkeyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42dnc7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXZ3O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcblxuICAgIH1cblxuICAgIGFydGljbGV7XG4gICAgICAgIGgxe1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxubWFpbntcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIHBhZGRpbmc6MDsgXG4gICAgLm1haW4tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cblxuICAgIH1cbiAgICAucHJvamVjdC1jYXJke1xuICAgICAgICBoM3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICB9XG4gICAgICAgIGg0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcbiAgICBoZWFkZXIsIG1haW4sIGZvb3RlcntcbiAgICAgICAgcGFkZGluZzogMnZ3O1xuICAgIH1cbiAgICAuY2FyZHtcbiAgICBwYWRkaW5nLXRvcDogOCU7XG4gICAgfSAgIFxuICAgIGFydGljbGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMy4ydnc7XG4gICAgfVxuICAgIG1haW57XG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICAubWFpbi1jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9qZWN0LWNhcmR7XG4gICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICB9XG4gICAgXG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw2Q0FBNkM7SUFDN0MsaUNBQWlDO0lBQ2pDLGtLQUFrSztJQUNsSyw0QkFBNEI7SUFDNUIsa0JBQWtCOzs7QUFHdEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLG9DQUFvQztBQUN4QztBQUNBLGdCQUFnQjtBQUNoQjtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1g7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIs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IC0tbWFpbi1iZy1jb2xvcjogI2YwZjlmZjtcXG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMwNzU5ODU7XFxuICAgIC0tdGVydGlhcnktYmctY29sb3I6ICMwMjg0Yzc7XFxuICAgIC0tY2FyZC1iZy1jb2xvcjogc2lsdmVyO1xcbiAgICAtLW1haW4tZm9udC1jb2xvcjogIzA4MmY0OTtcXG4gICAgLS1zZWNvbmRhcnktZm9udC1jb2xvcjogI2UwZjJmZTtcXG59XFxuaHRtbCwgYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzowO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIiBcXFwibWFpblxcXCIgXFxcImZvb3RlclxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czphdXRvIGF1dG8gYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODlkZWcsIHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcikgY2xhbXAoMiUsIDIwdncsIDMwdmgpLCB0cmFuc3BhcmVudCBjbGFtcChjYWxjKDIlICsgNXB4KSwgY2FsYygyMHZ3ICsgNXB4KSwgY2FsYygzMHZoICsgNXB4KSkpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIFxcblxcbn1cXG5cXG5oZWFkZXIsIG1haW4sIGZvb3RlcntcXG4gICAgcGFkZGluZzogY2xhbXAoMnB4LCA1JSwgMjBweCk7XFxuICAgIHBhZGRpbmctbGVmdDpjbGFtcCgycHgsIDIwJSwgMTUwcHgpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OmNsYW1wKDJweCwgMjAlLCAxNTBweCk7XFxufVxcbi8qIEhlYWRlciBhcmVhICovXFxuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogY2xhbXAoNXB4LCA0dncsIDUwcHgpO1xcbn1cXG5cXG4uZnJhbWV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40NTkpO1xcbn1cXG4ucGhvdG97XFxuICAgIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgID5pbWd7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG4uY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTN2dztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogY2xhbXAoMTBweCwgMSUsIDIwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxLjJ2dywgMjRweCk7XFxuICAgID5hcnRpY2xle1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyMHB4LCA3MCUsIDE2MHB4KTtcXG5cXG4gICAgfVxcbiAgICA+IGFydGljbGUgPiBoMXtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoNXB4LCA0dncsIDQwcHgpOztcXG4gICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgID5hcnRpY2xlID4gLnRleHQtZGl2e1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDo4MCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICA+cHtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgPi5jb250YWN0e1xcbiAgICAgICAgaGVpZ2h0OjE1JTtcXG4gICAgICAgIHdpZHRoOiA5MiU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGdhcDogY2xhbXAoMTJweCwgNSUsIDcwcHgpO1xcbiAgICAgICAgPmF7XFxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICAgICAgPmltZ3tcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbm1haW57XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDEuNXZ3LCAyNHB4KTtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWNhcmQtY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzogMyU7XFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcXG4gICAgICAgIGdhcDoxcmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDF2dztcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG5cXG59fVxcbi5wcm9qZWN0LWNhcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcXG4gICAgZm9udC1zaXplOiA3MCU7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGE+aW1ne1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTYwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG5mb290ZXJ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNnB4LCAuNXZ3LCAyMHB4KTtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuICAgIGF7Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTt9XFxuICAgIGgxe1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNDUyKTtcXG4gICAgfVxcbiAgICA+aDEsIGgyLCBoM3tcXG4gICAgICAgIG1hcmdpbjoxMHB4O1xcbiAgICB9XFxuXFxufVxcbi5jb250YWN0LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDUlO1xcbiAgICA+YXtcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgICA+aW1ne1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBmaWx0ZXI6IGludmVydCgpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjIwMDBweCl7XFxuICAgIG1haW57XFxuXFxuICAgICAgICBoMXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcXG4gICAgICAgIH1cXG4gICAgICAgIGgze1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB9XFxuICAgICAgICBoNHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB9XFxuICAgICAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5wcm9qZWN0LWNhcmQtY29udGFpbmVye1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGhlYWRlcntcXG4gICAgICAgIC5waG90b3tcXG4gICAgICAgICAgICBtYXgtd2lkdGg6MTF2dztcXG4gICAgICAgIH1cXG4gICAgICAgIC5jYXJke1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6OHZ3O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGZvb3RlcntcXG4gICAgICAgIGZvbnQtc2l6ZTogNjAlO1xcbiAgICAgICAgaDF7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDEsIGgyLCBoM3tcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgaGVhZGVyLCBmb290ZXJ7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwdnc7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcXG4gICAgaGVhZGVye1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICB9XFxuICAgIC5waG90b3tcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDowO1xcbiAgICAgICAgbGVmdDo2MHB4O1xcbiAgICAgICAgd2lkdGg6IDEydnc7XFxuICAgIH1cXG4gICAgLmNhcmR7IFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42dnc7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1dnc7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcXG5cXG4gICAgfVxcblxcbiAgICBhcnRpY2xle1xcbiAgICAgICAgaDF7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxubWFpbntcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG4gICAgcGFkZGluZzowOyBcXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgfVxcblxcbiAgICB9XFxuICAgIC5wcm9qZWN0LWNhcmR7XFxuICAgICAgICBoM3tcXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcXG4gICAgICAgIH1cXG4gICAgICAgIGg0e1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xcbiAgICBoZWFkZXIsIG1haW4sIGZvb3RlcntcXG4gICAgICAgIHBhZGRpbmc6IDJ2dztcXG4gICAgfVxcbiAgICAuY2FyZHtcXG4gICAgcGFkZGluZy10b3A6IDglO1xcbiAgICB9ICAgXFxuICAgIGFydGljbGV7XFxuICAgICAgICBmb250LXNpemU6IDMuMnZ3O1xcbiAgICB9XFxuICAgIG1haW57XFxuICAgICAgICBmb250LXNpemU6IDN2dztcXG4gICAgICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0LWNhcmR7XFxuICAgICAgICBoM3tcXG4gICAgICAgICAgICBmb250LXNpemU6IDd2dztcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDR7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcXG4gICAgICAgIH1cXG4gICAgXFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0ICcuL2FuaW1hdGlvbnMuY3NzJ1xuXG4vKiBMZXZlcmFnaW5nIHRoZSB3ZWIgYW5pbWF0aW9ucyBBUEkgZm9yIHRoaXMgKi9cblxuLyogQW5pbWF0aW9uIGZvciBhIGN1dGUgd2F2ZSBhbmltYXRpb24gb24gdGhlIHBob3RvICovXG5hc3luYyBmdW5jdGlvbiB3YXZlUGhvdG8oKSB7XG5cdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDIwNTU2NDMzNTRfOF8xXzhfMzRfNGAsJ2F0dGVtcHRpbmcgdG8gd2F2ZScpKVxuXHRjb25zdCBwaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90bycpXG5cdHBob3RvLmNsYXNzTGlzdC5hZGQoJ3dhdmUtcGhvdG8nKVxuXHQvLyByZW1vdmUgYW5pbWF0aW9uIGNsYXNzIGFmdGVyIGFuaW1hdGlvbiBmaW5pc2hlcyBwbGF5aW5nIG9uY2Vcblx0cGhvdG8uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnYW5pbWF0aW9uZW5kJyxcblx0XHQoKSA9PiB7XG5cdFx0XHRwaG90by5jbGFzc0xpc3QucmVtb3ZlKCd3YXZlLXBob3RvJylcblx0XHR9LFxuXHRcdHsgb25jZTogdHJ1ZSB9XG5cdClcbn1cbmFzeW5jIGZ1bmN0aW9uIHNsaWRlSW5IZWFkZXIoKSB7XG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXG5cdGNvbnN0IGhlYWRlclNsaWRlSW4gPSBbXG5cdFx0eyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9LFxuXHRcdHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSxcblx0XVxuXHRjb25zdCBoZWFkZXJTbGlkZUluQW5pbSA9IHtcblx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdGl0ZXJhdGlvbnM6IDEsXG5cdFx0ZmlsbDogJ2ZvcndhcmRzJyxcblx0XHRlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSknLFxuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gaGVhZGVyLmFuaW1hdGUoaGVhZGVyU2xpZGVJbiwgaGVhZGVyU2xpZGVJbkFuaW0pXG5cdFx0YW5pbWF0aW9uLm9uZmluaXNoID0gcmVzb2x2ZVxuXHR9KVxufVxuYXN5bmMgZnVuY3Rpb24gc2xpZGVJbkhlYWRlckFuZFdhdmVQaG90bygpIHtcblx0YXdhaXQgc2xpZGVJbkhlYWRlcigpXG5cdGF3YWl0IHdhdmVQaG90bygpXG59XG4vLyBUaGFuayB5b3UgZ29vZ2xlIGZvciB0aGlzIG9uZVxuYXN5bmMgZnVuY3Rpb24gdHlwZVdyaXRlckVmZmVjdChlbGVtZW50LCB0ZXh0LCBzcGVlZCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRlbGVtZW50LnRleHRDb250ZW50ICs9IHRleHQuY2hhckF0KGkpXG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgc3BlZWQpKVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVUeXBlV3JpdGVFZmZlY3QoKSB7XG5cdGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyIGgxJylcblx0Y29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXIgaDInKVxuXHRhd2FpdCB0eXBlV3JpdGVyRWZmZWN0KGgxLCAnQ2hlY2sgb3V0IG15IHN0dWZmIScsIDIwKSAvLyBhZGp1c3Qgc3BlZWQgYXMgbmVlZGVkXG5cdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpIC8vIGRlbGF5IGJlZm9yZSBsaW5lIDJcblx0YXdhaXQgdHlwZVdyaXRlckVmZmVjdChoMiwgJ01vcmUgY2FuIGJlIGZvdW5kIG9uIG15IEdpdEh1YiEnLCAyMClcbn1cblxuYXN5bmMgZnVuY3Rpb24gYW5pbWF0aW9uUHJvamVjdENhcmRzKCkge1xuXHRjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJylcblx0Y29uc3QgZGVsYXlCZXR3ZWVuQW5pbWF0aW9ucyA9IDAgLy8gYWRqdXN0IGFzIG5lZWRlZFxuXG5cdC8vIGxvb3AgdGhyb3VnaCBlYWNoIGNhcmRcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IHByb2plY3RDYXJkc1tpXVxuXG5cdFx0Ly8gYXBwbHkgYW5pbWF0aW9uIHRvIGN1cnJlbnQgY2FyZFxuXHRcdGF3YWl0IHpvb21Jbk1haW4ocHJvamVjdENhcmQpXG5cdFx0Ly8gc2V0IGRlbGF5IGJldHdlZW4gZWFjaCBhbmltYXRpb25cblx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheUJldHdlZW5BbmltYXRpb25zKSlcblx0fVxufVxuYXN5bmMgZnVuY3Rpb24gem9vbUluTWFpbihlbGVtZW50KSB7XG5cdGNvbnN0IG1haW5ab29tSW4gPSBbXG5cdFx0eyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9LFxuXHRcdHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSxcblx0XVxuXHRjb25zdCBtYWluWm9vbUluQW5pbSA9IHtcblx0XHRkdXJhdGlvbjogMTgwLFxuXHRcdGl0ZXJhdGlvbnM6IDEsXG5cdFx0ZmlsbDogJ2ZvcndhcmRzJyxcblx0XHRlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSknLFxuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKG1haW5ab29tSW4sIG1haW5ab29tSW5BbmltKVxuXHRcdGFuaW1hdGlvbi5vbmZpbmlzaCA9IHJlc29sdmVcblx0fSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2xpZGVJbkZvb3RlcigpIHtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcblx0Y29uc3QgZm9vdGVyU2xpZGVJbiA9IFtcblx0XHR7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfSxcblx0XHR7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSxcblx0XVxuXHRjb25zdCBmb290ZXJTbGlkZUluQW5pbSA9IHtcblx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdGl0ZXJhdGlvbnM6IDEsXG5cdFx0ZmlsbDogJ2ZvcndhcmRzJyxcblx0XHRlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSknLFxuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gZm9vdGVyLmFuaW1hdGUoZm9vdGVyU2xpZGVJbiwgZm9vdGVyU2xpZGVJbkFuaW0pXG5cdFx0YW5pbWF0aW9uLm9uZmluaXNoID0gcmVzb2x2ZVxuXHR9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBhbmltYXRlRWxlbWVudHNPblN0YXJ0KCkge1xuXHQvLyBTZXQgaW5pdGlhbCBwb3NpdGlvbnMgb2YgZWxlbWVudHMgb2ZmLXNjcmVlblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKVxuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxuXHRoZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuXHRmb290ZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMTAwJSknXG5cblx0Ly8gc3RhcnQgYW5pbWF0aW9uc1xuXHRhd2FpdCBzbGlkZUluSGVhZGVyQW5kV2F2ZVBob3RvKClcblx0YXdhaXQgYW5pbWF0ZVR5cGVXcml0ZUVmZmVjdCgpXG5cdGF3YWl0IGFuaW1hdGlvblByb2plY3RDYXJkcygpXG5cdGF3YWl0IHNsaWRlSW5Gb290ZXIoKVxufVxuXG53aW5kb3cub25sb2FkID0gYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBhbmltYXRlRWxlbWVudHNPblN0YXJ0KClcblx0Y29uc3QgcGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGhvdG8nKVxuXHRwaG90by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdhdmVQaG90bylcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovLyogYzggaWdub3JlIHN0YXJ0ICovLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHgyNGFlMzI9XzB4ZTFhMztmdW5jdGlvbiBfMHg0N2JhKCl7dmFyIF8weDRkOWE1ZT1bJ2JpbmQnLCdfaXNTZXQnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdfdHlwZScsJ3dzL2luZGV4LmpzJywnZGF0YScsJ19pbk5leHRFZGdlJywnbnVsbCcsJ2xvY2F0aW9uJywnU2V0JywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdtZXRob2QnLCd0ZXN0Jywnc3ltYm9sJywnZWxhcHNlZCcsJ3Vua25vd24nLCduZXh0LmpzJywnX29iamVjdFRvU3RyaW5nJywnX1N5bWJvbCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ29uY2xvc2UnLCdnbG9iYWwnLCdzZXR0ZXInLCd0b3RhbFN0ckxlbmd0aCcsJ3NlbmQnLCdwcm90b3R5cGUnLCdlZGdlJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdoYXNPd25Qcm9wZXJ0eScsJ2luY2x1ZGVzJywncmVhZHlTdGF0ZScsJ05FWFRfUlVOVElNRScsJ2Rpc2FibGVkVHJhY2UnLCdfcXVvdGVkUmVnRXhwJywnZ2V0JywndGltZVN0YW1wJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ19hZGRQcm9wZXJ0eScsJ19zZXROb2RlSWQnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfY29uc29sZV9uaW5qYScsJ19jb25uZWN0QXR0ZW1wdENvdW50Jywnd2VicGFjaycsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdfaXNOZWdhdGl2ZVplcm8nLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCcsJzIwMzcxN2dVeFNiTycsJ19zZXROb2RlTGFiZWwnLCdvbm9wZW4nLCdfV2ViU29ja2V0Q2xhc3MnLCdkaXNhYmxlZExvZycsJ19jb25uZWN0VG9Ib3N0Tm93Jywnam9pbicsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnaHJ0aW1lJywnbmVnYXRpdmVaZXJvJyxcXFwiL2hvbWUvZGFuaWVsbHIvLnZzY29kZS9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4yOTcvbm9kZV9tb2R1bGVzXFxcIiwnJywnbmVnYXRpdmVJbmZpbml0eScsJ3Vuc2hpZnQnLCdjb3VudCcsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdbb2JqZWN0XFxcXHgyME1hcF0nLCdwb3J0JywnX3NlbmRFcnJvck1lc3NhZ2UnLCd0eXBlJywnNDY4MjQ0MldiYkd5VCcsJ2N1cnJlbnQnLCdfcmVjb25uZWN0VGltZW91dCcsJzI4N05Md1BzYicsJ3BhcmVudCcsJzEyMDk2OFd4Y1JOVScsJ2hvc3RuYW1lJywnX2lzTWFwJywnY2FwcGVkJywndmFsdWVPZicsJ2xvZycsJ2Z1bmN0aW9uJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdkb2NrZXJpemVkQXBwJywnYXJyYXknLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnZnVuY05hbWUnLCdwcm9jZXNzJywnbmFtZScsJ3N0YWNrJywncmVsb2FkJywnYW5ndWxhcicsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JywnZGVmaW5lUHJvcGVydHknLCdfc29ydFByb3BzJywnYXN0cm8nLCdnZXR0ZXInLCd0cmFjZScsJ2JpZ2ludCcsJ3BhdGhUb0ZpbGVVUkwnLCdfaW5Ccm93c2VyJywnX2Nvbm5lY3RlZCcsJ3N0cmluZ2lmeScsJ19wcm9wZXJ0eU5hbWUnLCdyZXNvbHZlR2V0dGVycycsJ3JlcGxhY2UnLCdzZXJpYWxpemUnLCdORUdBVElWRV9JTkZJTklUWScsJ1xcXFx4MjBzZXJ2ZXInLCd2YWx1ZScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdfZGF0ZVRvU3RyaW5nJywncGF0aCcsJ21lc3NhZ2UnLCdfd3MnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19wX2xlbmd0aCcsJ1BPU0lUSVZFX0lORklOSVRZJywnYWxsU3RyTGVuZ3RoJywnX2hhc01hcE9uSXRzUGF0aCcsJ2Vycm9yJywnY2FsbCcsJ2VudicsJ3RvU3RyaW5nJywnTWFwJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdjb3ZlcmFnZScsJ2hpdHMnLCcxNDMyNjY5N09wd2VuQScsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnYXV0b0V4cGFuZExpbWl0JywnbnV4dCcsJ3dzOi8vJywnYXV0b0V4cGFuZCcsJ3NvcnRQcm9wcycsJ25vdycsJ25vZGUnLCdfY2xlYW5Ob2RlJywnc2V0JywnX3NvY2tldCcsJ19ibGFja2xpc3RlZFByb3BlcnR5JywncGVyZl9ob29rcycsJzYyOTBJbmhTZmUnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnc29ydCcsJ3RpbWUnLCdzdWJzdHInLCdOdW1iZXInLCd0aW1lRW5kJywnV2ViU29ja2V0Jywnc3RyTGVuZ3RoJywnbGVuZ3RoJywncHJvcHMnLCcxLjAuMCcsJ2NhcHBlZEVsZW1lbnRzJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ2dldE93blByb3BlcnR5TmFtZXMnLCdmb3JFYWNoJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdfaXNVbmRlZmluZWQnLCcxMDQ2VHhQeGpEJywndG9Mb3dlckNhc2UnLCd0aGVuJywnX3BfbmFtZScsJ2RhdGUnLCd1bmRlZmluZWQnLCdfYWRkTG9hZE5vZGUnLCdzdHJpbmcnLCdwdXNoJywnNjQwNGVYVVJGZycsJ3NwbGl0JywnMTM5NWlUWVloZicsJ0hUTUxBbGxDb2xsZWN0aW9uJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdfYWxsb3dlZFRvU2VuZCcsJ3BlcmZvcm1hbmNlJywnX3VuZGVmaW5lZCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdvYmplY3QnLCdSZWdFeHAnLCd2ZXJzaW9ucycsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnbmFuJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCd3YXJuJywnRXJyb3InLCdnZXRQcm90b3R5cGVPZicsJ21hdGNoJywnNTEwOXNZQXR1UScsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ19jYXBJZlN0cmluZycsJ19jb25uZWN0aW5nJywnY29uc29sZScsJ2NhdGNoJywnbnVtYmVyJywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0Jywnc2xpY2UnLCdpbmRleE9mJywnY29uc3RydWN0b3InLCdub0Z1bmN0aW9ucycsJ2xldmVsJywndW5yZWYnLCdfcHJvcGVydHknLCcnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnMTUwNDhKbk5tcVYnLCcxMjcuMC4wLjEnLCdjb25jYXQnLCdlbGVtZW50cycsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ19fZXMnKydNb2R1bGUnLCdkZXB0aCcsJ2hvc3QnLCdub2RlTW9kdWxlcycsJ2NyZWF0ZScsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ19udW1iZXJSZWdFeHAnLCdzdGFja1RyYWNlTGltaXQnLCdib29sZWFuJywnX3JlZ0V4cFRvU3RyaW5nJywnb25lcnJvcicsJzM1NzY3JywnX3NldE5vZGVRdWVyeVBhdGgnLCdleHBJZCcsJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ2RlZmF1bHQnLCdyZWR1Y2VMaW1pdHMnLCdpbmRleCcsJ1N0cmluZycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdfcF8nXTtfMHg0N2JhPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDRkOWE1ZTt9O3JldHVybiBfMHg0N2JhKCk7fShmdW5jdGlvbihfMHgxM2NlYTksXzB4NGJiZTdlKXt2YXIgXzB4NTI2NTdiPV8weGUxYTMsXzB4NGFiOTQxPV8weDEzY2VhOSgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NTY1MTQ4PXBhcnNlSW50KF8weDUyNjU3YigweDExMikpLzB4MStwYXJzZUludChfMHg1MjY1N2IoMHgxODIpKS8weDIqKHBhcnNlSW50KF8weDUyNjU3YigweDE5ZSkpLzB4MykrcGFyc2VJbnQoXzB4NTI2NTdiKDB4MThiKSkvMHg0KigtcGFyc2VJbnQoXzB4NTI2NTdiKDB4MThkKSkvMHg1KStwYXJzZUludChfMHg1MjY1N2IoMHgxMjcpKS8weDYrLXBhcnNlSW50KF8weDUyNjU3YigweDEyYSkpLzB4NyoocGFyc2VJbnQoXzB4NTI2NTdiKDB4MTJjKSkvMHg4KStwYXJzZUludChfMHg1MjY1N2IoMHgxYWYpKS8weDkqKHBhcnNlSW50KF8weDUyNjU3YigweDE2ZikpLzB4YSkrLXBhcnNlSW50KF8weDUyNjU3YigweDE2MSkpLzB4YjtpZihfMHg1NjUxNDg9PT1fMHg0YmJlN2UpYnJlYWs7ZWxzZSBfMHg0YWI5NDFbJ3B1c2gnXShfMHg0YWI5NDFbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDQyMTc1NSl7XzB4NGFiOTQxWydwdXNoJ10oXzB4NGFiOTQxWydzaGlmdCddKCkpO319fShfMHg0N2JhLDB4ODgxNjYpKTt2YXIgaj1PYmplY3RbXzB4MjRhZTMyKDB4Y2YpXSxIPU9iamVjdFtfMHgyNGFlMzIoMHgxM2UpXSxHPU9iamVjdFtfMHgyNGFlMzIoMHhmNildLGVlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLHRlPU9iamVjdFtfMHgyNGFlMzIoMHgxOWMpXSxuZT1PYmplY3RbXzB4MjRhZTMyKDB4ZmMpXVtfMHgyNGFlMzIoMHhmZildLHJlPShfMHg0ZDM3MzgsXzB4MjM2ZTE0LF8weDMwOThhZSxfMHgzNzVlODYpPT57dmFyIF8weDJlOWU0Mj1fMHgyNGFlMzI7aWYoXzB4MjM2ZTE0JiZ0eXBlb2YgXzB4MjM2ZTE0PT0nb2JqZWN0J3x8dHlwZW9mIF8weDIzNmUxND09XzB4MmU5ZTQyKDB4MTMyKSl7Zm9yKGxldCBfMHgyMGE4OTMgb2YgZWUoXzB4MjM2ZTE0KSkhbmVbJ2NhbGwnXShfMHg0ZDM3MzgsXzB4MjBhODkzKSYmXzB4MjBhODkzIT09XzB4MzA5OGFlJiZIKF8weDRkMzczOCxfMHgyMGE4OTMseydnZXQnOigpPT5fMHgyMzZlMTRbXzB4MjBhODkzXSwnZW51bWVyYWJsZSc6IShfMHgzNzVlODY9RyhfMHgyMzZlMTQsXzB4MjBhODkzKSl8fF8weDM3NWU4NlsnZW51bWVyYWJsZSddfSk7fXJldHVybiBfMHg0ZDM3Mzg7fSx4PShfMHg0Y2ViNmUsXzB4MWQ0YzZjLF8weDE1N2FjYSk9PihfMHgxNTdhY2E9XzB4NGNlYjZlIT1udWxsP2oodGUoXzB4NGNlYjZlKSk6e30scmUoXzB4MWQ0YzZjfHwhXzB4NGNlYjZlfHwhXzB4NGNlYjZlW18weDI0YWUzMigweGNiKV0/SChfMHgxNTdhY2EsXzB4MjRhZTMyKDB4ZGIpLHsndmFsdWUnOl8weDRjZWI2ZSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDE1N2FjYSxfMHg0Y2ViNmUpKSxYPWNsYXNze2NvbnN0cnVjdG9yKF8weDI1OWNlYyxfMHgxN2U0MWMsXzB4NWYxNWYyLF8weDVkMWI4OSxfMHgzMTkxODcpe3ZhciBfMHgyNjQwYTQ9XzB4MjRhZTMyO3RoaXNbXzB4MjY0MGE0KDB4ZjgpXT1fMHgyNTljZWMsdGhpc1tfMHgyNjQwYTQoMHhjZCldPV8weDE3ZTQxYyx0aGlzW18weDI2NDBhNCgweDEyNCldPV8weDVmMTVmMix0aGlzW18weDI2NDBhNCgweGNlKV09XzB4NWQxYjg5LHRoaXNbJ2RvY2tlcml6ZWRBcHAnXT1fMHgzMTkxODcsdGhpc1tfMHgyNjQwYTQoMHgxOTApXT0hMHgwLHRoaXNbXzB4MjY0MGE0KDB4MTFhKV09ITB4MCx0aGlzW18weDI2NDBhNCgweDE0NildPSEweDEsdGhpc1tfMHgyNjQwYTQoMHgxYTEpXT0hMHgxLHRoaXNbXzB4MjY0MGE0KDB4ZTcpXT1fMHgyNTljZWNbXzB4MjY0MGE0KDB4MTM4KV0/LltfMHgyNjQwYTQoMHgxNWIpXT8uW18weDI2NDBhNCgweDEwMildPT09J2VkZ2UnLHRoaXNbJ19pbkJyb3dzZXInXT0hdGhpc1tfMHgyNjQwYTQoMHhmOCldWydwcm9jZXNzJ10/LlsndmVyc2lvbnMnXT8uWydub2RlJ10mJiF0aGlzWydfaW5OZXh0RWRnZSddLHRoaXNbXzB4MjY0MGE0KDB4MTE1KV09bnVsbCx0aGlzW18weDI2NDBhNCgweDEwZCldPTB4MCx0aGlzW18weDI2NDBhNCgweDE5NyldPTB4MTQsdGhpc1tfMHgyNjQwYTQoMHgxMDcpXT0naHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsdGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXT0odGhpc1tfMHgyNjQwYTQoMHgxNDUpXT9fMHgyNjQwYTQoMHhlZCk6XzB4MjY0MGE0KDB4MThmKSkrdGhpc1tfMHgyNjQwYTQoMHgxMDcpXTt9YXN5bmNbXzB4MjRhZTMyKDB4MTdmKV0oKXt2YXIgXzB4NTEzNDY2PV8weDI0YWUzMjtpZih0aGlzWydfV2ViU29ja2V0Q2xhc3MnXSlyZXR1cm4gdGhpc1tfMHg1MTM0NjYoMHgxMTUpXTtsZXQgXzB4NTQ3YTliO2lmKHRoaXNbJ19pbkJyb3dzZXInXXx8dGhpc1tfMHg1MTM0NjYoMHhlNyldKV8weDU0N2E5Yj10aGlzW18weDUxMzQ2NigweGY4KV1bXzB4NTEzNDY2KDB4MTc2KV07ZWxzZXtpZih0aGlzW18weDUxMzQ2NigweGY4KV1bXzB4NTEzNDY2KDB4MTM4KV0/LlsnX1dlYlNvY2tldCddKV8weDU0N2E5Yj10aGlzWydnbG9iYWwnXVtfMHg1MTM0NjYoMHgxMzgpXT8uWydfV2ViU29ja2V0J107ZWxzZSB0cnl7bGV0IF8weDEzM2EzMj1hd2FpdCBpbXBvcnQoXzB4NTEzNDY2KDB4MTUxKSk7XzB4NTQ3YTliPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydCgndXJsJykpW18weDUxMzQ2NigweDE0NCldKF8weDEzM2EzMltfMHg1MTM0NjYoMHgxMTgpXSh0aGlzWydub2RlTW9kdWxlcyddLF8weDUxMzQ2NigweGU1KSkpWyd0b1N0cmluZyddKCkpKVtfMHg1MTM0NjYoMHhkYildO31jYXRjaHt0cnl7XzB4NTQ3YTliPXJlcXVpcmUocmVxdWlyZShfMHg1MTM0NjYoMHgxNTEpKVsnam9pbiddKHRoaXNbJ25vZGVNb2R1bGVzJ10sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcpO319fXJldHVybiB0aGlzW18weDUxMzQ2NigweDExNSldPV8weDU0N2E5YixfMHg1NDdhOWI7fVtfMHgyNGFlMzIoMHgxMTcpXSgpe3ZhciBfMHgyYzBlZjU9XzB4MjRhZTMyO3RoaXNbXzB4MmMwZWY1KDB4MWExKV18fHRoaXNbXzB4MmMwZWY1KDB4MTQ2KV18fHRoaXNbXzB4MmMwZWY1KDB4MTBkKV0+PXRoaXNbXzB4MmMwZWY1KDB4MTk3KV18fCh0aGlzW18weDJjMGVmNSgweDExYSldPSEweDEsdGhpc1tfMHgyYzBlZjUoMHgxYTEpXT0hMHgwLHRoaXNbXzB4MmMwZWY1KDB4MTBkKV0rKyx0aGlzW18weDJjMGVmNSgweDE1MyldPW5ldyBQcm9taXNlKChfMHg0NGMxYzUsXzB4NGM1MGVjKT0+e3ZhciBfMHg0ZTdhOWU9XzB4MmMwZWY1O3RoaXNbJ2dldFdlYlNvY2tldENsYXNzJ10oKVtfMHg0ZTdhOWUoMHgxODQpXShfMHgxYzBkODk9Pnt2YXIgXzB4MThlODkwPV8weDRlN2E5ZTtsZXQgXzB4NTM0ZjMwPW5ldyBfMHgxYzBkODkoXzB4MThlODkwKDB4MTY1KSsoIXRoaXNbXzB4MThlODkwKDB4MTQ1KV0mJnRoaXNbXzB4MThlODkwKDB4MTM0KV0/XzB4MThlODkwKDB4MTExKTp0aGlzW18weDE4ZTg5MCgweGNkKV0pKyc6Jyt0aGlzWydwb3J0J10pO18weDUzNGYzMFsnb25lcnJvciddPSgpPT57dmFyIF8weDI5YmM5Zj1fMHgxOGU4OTA7dGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgxLHRoaXNbXzB4MjliYzlmKDB4MTA4KV0oXzB4NTM0ZjMwKSx0aGlzW18weDI5YmM5ZigweDE1ZSldKCksXzB4NGM1MGVjKG5ldyBFcnJvcihfMHgyOWJjOWYoMHhkOSkpKTt9LF8weDUzNGYzMFsnb25vcGVuJ109KCk9Pnt2YXIgXzB4NTg0MjRkPV8weDE4ZTg5MDt0aGlzW18weDU4NDI0ZCgweDE0NSldfHxfMHg1MzRmMzBbXzB4NTg0MjRkKDB4MTZjKV0mJl8weDUzNGYzMFtfMHg1ODQyNGQoMHgxNmMpXVtfMHg1ODQyNGQoMHgxYWIpXSYmXzB4NTM0ZjMwW18weDU4NDI0ZCgweDE2YyldW18weDU4NDI0ZCgweDFhYildKCksXzB4NDRjMWM1KF8weDUzNGYzMCk7fSxfMHg1MzRmMzBbXzB4MThlODkwKDB4ZjcpXT0oKT0+e3ZhciBfMHgxMzY2MzM9XzB4MThlODkwO3RoaXNbXzB4MTM2NjMzKDB4MTFhKV09ITB4MCx0aGlzW18weDEzNjYzMygweDEwOCldKF8weDUzNGYzMCksdGhpc1tfMHgxMzY2MzMoMHgxNWUpXSgpO30sXzB4NTM0ZjMwWydvbm1lc3NhZ2UnXT1fMHgxY2E4NGQ9Pnt2YXIgXzB4Mzk3YjBjPV8weDE4ZTg5MDt0cnl7XzB4MWNhODRkJiZfMHgxY2E4NGRbXzB4Mzk3YjBjKDB4ZTYpXSYmdGhpc1tfMHgzOTdiMGMoMHgxNDUpXSYmSlNPTlsncGFyc2UnXShfMHgxY2E4NGRbXzB4Mzk3YjBjKDB4ZTYpXSlbXzB4Mzk3YjBjKDB4ZWUpXT09PV8weDM5N2IwYygweDEzYikmJnRoaXNbXzB4Mzk3YjBjKDB4ZjgpXVtfMHgzOTdiMGMoMHhlOSldW18weDM5N2IwYygweDEzYildKCk7fWNhdGNoe319O30pW18weDRlN2E5ZSgweDE4NCldKF8weDQ4MWQ0Zj0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgwLHRoaXNbXzB4NGU3YTllKDB4MWExKV09ITB4MSx0aGlzW18weDRlN2E5ZSgweDExYSldPSEweDEsdGhpc1tfMHg0ZTdhOWUoMHgxOTApXT0hMHgwLHRoaXNbXzB4NGU3YTllKDB4MTBkKV09MHgwLF8weDQ4MWQ0ZikpW18weDRlN2E5ZSgweDFhMyldKF8weDQwNGNkYz0+KHRoaXNbXzB4NGU3YTllKDB4MTQ2KV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVtfMHg0ZTdhOWUoMHgxOWEpXShfMHg0ZTdhOWUoMHgxOTkpK3RoaXNbXzB4NGU3YTllKDB4MTA3KV0pLF8weDRjNTBlYyhuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcrKF8weDQwNGNkYyYmXzB4NDA0Y2RjWydtZXNzYWdlJ10pKSkpKTt9KSk7fVtfMHgyNGFlMzIoMHgxMDgpXShfMHgyZTMxNjgpe3ZhciBfMHgxN2NmZmQ9XzB4MjRhZTMyO3RoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbXzB4MTdjZmZkKDB4MWExKV09ITB4MTt0cnl7XzB4MmUzMTY4W18weDE3Y2ZmZCgweGY3KV09bnVsbCxfMHgyZTMxNjhbXzB4MTdjZmZkKDB4ZDUpXT1udWxsLF8weDJlMzE2OFtfMHgxN2NmZmQoMHgxMTQpXT1udWxsO31jYXRjaHt9dHJ5e18weDJlMzE2OFtfMHgxN2NmZmQoMHgxMDEpXTwweDImJl8weDJlMzE2OFsnY2xvc2UnXSgpO31jYXRjaHt9fVtfMHgyNGFlMzIoMHgxNWUpXSgpe3ZhciBfMHhjZmQxNT1fMHgyNGFlMzI7Y2xlYXJUaW1lb3V0KHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J10pLCEodGhpc1tfMHhjZmQxNSgweDEwZCldPj10aGlzW18weGNmZDE1KDB4MTk3KV0pJiYodGhpc1tfMHhjZmQxNSgweDEyOSldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NmZmOGM1PV8weGNmZDE1O3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHg2ZmY4YzUoMHgxYTEpXXx8KHRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSx0aGlzW18weDZmZjhjNSgweDE1MyldPy5bXzB4NmZmOGM1KDB4MWEzKV0oKCk9PnRoaXNbXzB4NmZmOGM1KDB4MTVlKV0oKSkpO30sMHgxZjQpLHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4Y2ZkMTUoMHgxYWIpXSYmdGhpc1tfMHhjZmQxNSgweDEyOSldW18weGNmZDE1KDB4MWFiKV0oKSk7fWFzeW5jW18weDI0YWUzMigweGZiKV0oXzB4NTE1NTFkKXt2YXIgXzB4ZTkyYmM1PV8weDI0YWUzMjt0cnl7aWYoIXRoaXNbXzB4ZTkyYmM1KDB4MTkwKV0pcmV0dXJuO3RoaXNbXzB4ZTkyYmM1KDB4MTFhKV0mJnRoaXNbXzB4ZTkyYmM1KDB4MTE3KV0oKSwoYXdhaXQgdGhpc1tfMHhlOTJiYzUoMHgxNTMpXSlbXzB4ZTkyYmM1KDB4ZmIpXShKU09OW18weGU5MmJjNSgweDE0NyldKF8weDUxNTUxZCkpO31jYXRjaChfMHgzYjRjOGMpe2NvbnNvbGVbXzB4ZTkyYmM1KDB4MTlhKV0odGhpc1tfMHhlOTJiYzUoMHgxMjUpXSsnOlxcXFx4MjAnKyhfMHgzYjRjOGMmJl8weDNiNGM4Y1snbWVzc2FnZSddKSksdGhpc1tfMHhlOTJiYzUoMHgxOTApXT0hMHgxLHRoaXNbXzB4ZTkyYmM1KDB4MTVlKV0oKTt9fX07ZnVuY3Rpb24gYihfMHgyZGNjM2QsXzB4MTI1OGY3LF8weDI4NzgzYSxfMHg0N2E3MGMsXzB4NDlmMDE2LF8weDU4NWI3NCl7dmFyIF8weDRmZWI1ZT1fMHgyNGFlMzI7bGV0IF8weDQwOTRmZj1fMHgyODc4M2FbXzB4NGZlYjVlKDB4MThjKV0oJywnKVsnbWFwJ10oXzB4Mzk4OTAzPT57dmFyIF8weDRlZjAyZT1fMHg0ZmViNWU7dHJ5e18weDJkY2MzZFtfMHg0ZWYwMmUoMHgxN2MpXXx8KChfMHg0OWYwMTY9PT1fMHg0ZWYwMmUoMHhmMyl8fF8weDQ5ZjAxNj09PSdyZW1peCd8fF8weDQ5ZjAxNj09PV8weDRlZjAyZSgweDE0MCl8fF8weDQ5ZjAxNj09PV8weDRlZjAyZSgweDEzYykpJiYoXzB4NDlmMDE2Kz0hXzB4MmRjYzNkW18weDRlZjAyZSgweDEzOCldPy5bXzB4NGVmMDJlKDB4MTk2KV0/LltfMHg0ZWYwMmUoMHgxNjkpXSYmXzB4MmRjYzNkW18weDRlZjAyZSgweDEzOCldPy5bJ2VudiddPy5bJ05FWFRfUlVOVElNRSddIT09XzB4NGVmMDJlKDB4ZmQpPydcXFxceDIwYnJvd3Nlcic6XzB4NGVmMDJlKDB4MTRkKSksXzB4MmRjYzNkW18weDRlZjAyZSgweDE3YyldPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg0OWYwMTZ9KTtsZXQgXzB4NTNhYzg3PW5ldyBYKF8weDJkY2MzZCxfMHgxMjU4ZjcsXzB4Mzk4OTAzLF8weDQ3YTcwYyxfMHg1ODViNzQpO3JldHVybiBfMHg1M2FjODdbXzB4NGVmMDJlKDB4ZmIpXVtfMHg0ZWYwMmUoMHhlMSldKF8weDUzYWM4Nyk7fWNhdGNoKF8weDNmNzk4Myl7cmV0dXJuIGNvbnNvbGVbJ3dhcm4nXShfMHg0ZWYwMmUoMHgxM2QpLF8weDNmNzk4MyYmXzB4M2Y3OTgzW18weDRlZjAyZSgweDE1MildKSwoKT0+e307fX0pO3JldHVybiBfMHgzZjk2Yjk9Pl8weDQwOTRmZltfMHg0ZmViNWUoMHgxN2UpXShfMHg1MzdkNzY9Pl8weDUzN2Q3NihfMHgzZjk2YjkpKTt9ZnVuY3Rpb24gXzB4ZTFhMyhfMHhhYjc1ZTAsXzB4NTM4OTZiKXt2YXIgXzB4NDdiYWIxPV8weDQ3YmEoKTtyZXR1cm4gXzB4ZTFhMz1mdW5jdGlvbihfMHhlMWEzZTcsXzB4ZDhlNGYpe18weGUxYTNlNz1fMHhlMWEzZTctMHhjYTt2YXIgXzB4Zjc4M2Q9XzB4NDdiYWIxW18weGUxYTNlN107cmV0dXJuIF8weGY3ODNkO30sXzB4ZTFhMyhfMHhhYjc1ZTAsXzB4NTM4OTZiKTt9ZnVuY3Rpb24gVyhfMHg1MWVhMDUpe3ZhciBfMHgyOTI5NzM9XzB4MjRhZTMyO2xldCBfMHg0YzE3MGQ9ZnVuY3Rpb24oXzB4MjE1Y2UxLF8weGU5OTYzYil7cmV0dXJuIF8weGU5OTYzYi1fMHgyMTVjZTE7fSxfMHgzZTVlYjk7aWYoXzB4NTFlYTA1W18weDI5Mjk3MygweDE5MSldKV8weDNlNWViOT1mdW5jdGlvbigpe3ZhciBfMHg0ZmQ5NTI9XzB4MjkyOTczO3JldHVybiBfMHg1MWVhMDVbXzB4NGZkOTUyKDB4MTkxKV1bXzB4NGZkOTUyKDB4MTY4KV0oKTt9O2Vsc2V7aWYoXzB4NTFlYTA1W18weDI5Mjk3MygweDEzOCldJiZfMHg1MWVhMDVbXzB4MjkyOTczKDB4MTM4KV1bXzB4MjkyOTczKDB4MTFiKV0mJl8weDUxZWEwNVsncHJvY2VzcyddPy5bJ2VudiddPy5bXzB4MjkyOTczKDB4MTAyKV0hPT1fMHgyOTI5NzMoMHhmZCkpXzB4M2U1ZWI5PWZ1bmN0aW9uKCl7dmFyIF8weDM5ZjhkOT1fMHgyOTI5NzM7cmV0dXJuIF8weDUxZWEwNVsncHJvY2VzcyddW18weDM5ZjhkOSgweDExYildKCk7fSxfMHg0YzE3MGQ9ZnVuY3Rpb24oXzB4MjI3M2Q2LF8weDFjMTkzMil7cmV0dXJuIDB4M2U4KihfMHgxYzE5MzJbMHgwXS1fMHgyMjczZDZbMHgwXSkrKF8weDFjMTkzMlsweDFdLV8weDIyNzNkNlsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgxMGRhY2V9PXJlcXVpcmUoXzB4MjkyOTczKDB4MTZlKSk7XzB4M2U1ZWI5PWZ1bmN0aW9uKCl7dmFyIF8weGI1ODZkNz1fMHgyOTI5NzM7cmV0dXJuIF8weDEwZGFjZVtfMHhiNTg2ZDcoMHgxNjgpXSgpO307fWNhdGNoe18weDNlNWViOT1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDRjMTcwZCwndGltZVN0YW1wJzpfMHgzZTVlYjksJ25vdyc6KCk9PkRhdGVbJ25vdyddKCl9O31mdW5jdGlvbiBKKF8weDRjZGM0MSxfMHgxZWI0NWMsXzB4MzJlMmFlKXt2YXIgXzB4MmQzOWMzPV8weDI0YWUzMjtpZihfMHg0Y2RjNDFbXzB4MmQzOWMzKDB4MWE1KV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NGNkYzQxW18weDJkMzljMygweDFhNSldO2xldCBfMHg1OTk3OWI9XzB4NGNkYzQxW18weDJkMzljMygweDEzOCldPy5bXzB4MmQzOWMzKDB4MTk2KV0/Llsnbm9kZSddfHxfMHg0Y2RjNDFbJ3Byb2Nlc3MnXT8uW18weDJkMzljMygweDE1YildPy5bXzB4MmQzOWMzKDB4MTAyKV09PT1fMHgyZDM5YzMoMHhmZCk7cmV0dXJuIF8weDU5OTc5YiYmXzB4MzJlMmFlPT09XzB4MmQzOWMzKDB4MTY0KT9fMHg0Y2RjNDFbXzB4MmQzOWMzKDB4MWE1KV09ITB4MTpfMHg0Y2RjNDFbXzB4MmQzOWMzKDB4MWE1KV09XzB4NTk5NzlifHwhXzB4MWViNDVjfHxfMHg0Y2RjNDFbXzB4MmQzOWMzKDB4ZTkpXT8uW18weDJkMzljMygweDEyZCldJiZfMHgxZWI0NWNbXzB4MmQzOWMzKDB4MTAwKV0oXzB4NGNkYzQxW18weDJkMzljMygweGU5KV1bXzB4MmQzOWMzKDB4MTJkKV0pLF8weDRjZGM0MVtfMHgyZDM5YzMoMHgxYTUpXTt9ZnVuY3Rpb24gWShfMHgyNjk1NjksXzB4YjZjNzI4LF8weDMwOTQwNixfMHg1ODM5MjUpe3ZhciBfMHg0ZmYwNWQ9XzB4MjRhZTMyO18weDI2OTU2OT1fMHgyNjk1NjksXzB4YjZjNzI4PV8weGI2YzcyOCxfMHgzMDk0MDY9XzB4MzA5NDA2LF8weDU4MzkyNT1fMHg1ODM5MjU7bGV0IF8weDM3ZjMzND1XKF8weDI2OTU2OSksXzB4NTBkN2QxPV8weDM3ZjMzNFtfMHg0ZmYwNWQoMHhmMSldLF8weDQxY2VlNT1fMHgzN2YzMzRbXzB4NGZmMDVkKDB4MTA2KV07Y2xhc3MgXzB4NGJlYzc1e2NvbnN0cnVjdG9yKCl7dmFyIF8weDNmOGI2NT1fMHg0ZmYwNWQ7dGhpc1snX2tleVN0clJlZ0V4cCddPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHgzZjhiNjUoMHhkMSldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHgzZjhiNjUoMHgxMDQpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDNmOGI2NSgweDE5MildPV8weDI2OTU2OVtfMHgzZjhiNjUoMHgxODcpXSx0aGlzW18weDNmOGI2NSgweDExOSldPV8weDI2OTU2OVtfMHgzZjhiNjUoMHgxOGUpXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0W18weDNmOGI2NSgweGY2KV0sdGhpc1tfMHgzZjhiNjUoMHhmZSldPU9iamVjdFtfMHgzZjhiNjUoMHgxN2QpXSx0aGlzWydfU3ltYm9sJ109XzB4MjY5NTY5WydTeW1ib2wnXSx0aGlzWydfcmVnRXhwVG9TdHJpbmcnXT1SZWdFeHBbXzB4M2Y4YjY1KDB4ZmMpXVsndG9TdHJpbmcnXSx0aGlzW18weDNmOGI2NSgweDE1MCldPURhdGVbXzB4M2Y4YjY1KDB4ZmMpXVsndG9TdHJpbmcnXTt9W18weDRmZjA1ZCgweDE0YildKF8weDNhYzJkNCxfMHg0YTRkMzcsXzB4NTFhNTI3LF8weDNhZGY5MSl7dmFyIF8weGIxNjRjYj1fMHg0ZmYwNWQsXzB4M2ViZGNkPXRoaXMsXzB4OTI0NmE5PV8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNjYpXTtmdW5jdGlvbiBfMHgzYjFmNTcoXzB4NGYxNzEyLF8weDNiOGNhZCxfMHgyZjFiMWMpe3ZhciBfMHg0OTRlNWE9XzB4YjE2NGNiO18weDNiOGNhZFtfMHg0OTRlNWEoMHgxMjYpXT0ndW5rbm93bicsXzB4M2I4Y2FkWydlcnJvciddPV8weDRmMTcxMltfMHg0OTRlNWEoMHgxNTIpXSxfMHgyMWQwM2U9XzB4MmYxYjFjW18weDQ5NGU1YSgweDE2OSldW18weDQ5NGU1YSgweDEyOCldLF8weDJmMWIxY1snbm9kZSddWydjdXJyZW50J109XzB4M2I4Y2FkLF8weDNlYmRjZFtfMHg0OTRlNWEoMHgxMjIpXShfMHgzYjhjYWQsXzB4MmYxYjFjKTt9dHJ5e18weDUxYTUyN1tfMHhiMTY0Y2IoMHgxYWEpXSsrLF8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNjYpXSYmXzB4NTFhNTI3WydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bJ3B1c2gnXShfMHg0YTRkMzcpO3ZhciBfMHgyNGQ3NDksXzB4NzhlM2NiLF8weDVjY2IwNSxfMHgyZTBhM2MsXzB4M2QxZWI4PVtdLF8weDRmNTFkZT1bXSxfMHg0Y2FiZmEsXzB4MjJiYzEwPXRoaXNbXzB4YjE2NGNiKDB4ZTQpXShfMHg0YTRkMzcpLF8weDU0MjBiYz1fMHgyMmJjMTA9PT1fMHhiMTY0Y2IoMHgxMzUpLF8weDVkZmE3ND0hMHgxLF8weDJlZTU3ZT1fMHgyMmJjMTA9PT1fMHhiMTY0Y2IoMHgxMzIpLF8weDRhYjQ5Mz10aGlzW18weGIxNjRjYigweDE0ZildKF8weDIyYmMxMCksXzB4M2NiN2Y2PXRoaXNbXzB4YjE2NGNiKDB4MTYyKV0oXzB4MjJiYzEwKSxfMHg0YThlMGY9XzB4NGFiNDkzfHxfMHgzY2I3ZjYsXzB4NDJkNmY2PXt9LF8weGZhYjMyZj0weDAsXzB4MzgzMGFjPSEweDEsXzB4MjFkMDNlLF8weDM2Yzc2MT0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4NTFhNTI3W18weGIxNjRjYigweGNjKV0pe2lmKF8weDU0MjBiYyl7aWYoXzB4NzhlM2NiPV8weDRhNGQzN1tfMHhiMTY0Y2IoMHgxNzgpXSxfMHg3OGUzY2I+XzB4NTFhNTI3W18weGIxNjRjYigweDFiMildKXtmb3IoXzB4NWNjYjA1PTB4MCxfMHgyZTBhM2M9XzB4NTFhNTI3W18weGIxNjRjYigweDFiMildLF8weDI0ZDc0OT1fMHg1Y2NiMDU7XzB4MjRkNzQ5PF8weDJlMGEzYztfMHgyNGQ3NDkrKylfMHg0ZjUxZGVbJ3B1c2gnXShfMHgzZWJkY2RbJ19hZGRQcm9wZXJ0eSddKF8weDNkMWViOCxfMHg0YTRkMzcsXzB4MjJiYzEwLF8weDI0ZDc0OSxfMHg1MWE1MjcpKTtfMHgzYWMyZDRbXzB4YjE2NGNiKDB4MTdiKV09ITB4MDt9ZWxzZXtmb3IoXzB4NWNjYjA1PTB4MCxfMHgyZTBhM2M9XzB4NzhlM2NiLF8weDI0ZDc0OT1fMHg1Y2NiMDU7XzB4MjRkNzQ5PF8weDJlMGEzYztfMHgyNGQ3NDkrKylfMHg0ZjUxZGVbXzB4YjE2NGNiKDB4MThhKV0oXzB4M2ViZGNkWydfYWRkUHJvcGVydHknXShfMHgzZDFlYjgsXzB4NGE0ZDM3LF8weDIyYmMxMCxfMHgyNGQ3NDksXzB4NTFhNTI3KSk7fV8weDUxYTUyN1tfMHhiMTY0Y2IoMHhlYyldKz1fMHg0ZjUxZGVbXzB4YjE2NGNiKDB4MTc4KV07fWlmKCEoXzB4MjJiYzEwPT09XzB4YjE2NGNiKDB4ZTgpfHxfMHgyMmJjMTA9PT1fMHhiMTY0Y2IoMHgxODcpKSYmIV8weDRhYjQ5MyYmXzB4MjJiYzEwIT09XzB4YjE2NGNiKDB4ZGUpJiZfMHgyMmJjMTAhPT0nQnVmZmVyJyYmXzB4MjJiYzEwIT09J2JpZ2ludCcpe3ZhciBfMHg4NDUwYTU9XzB4M2FkZjkxW18weGIxNjRjYigweDE3OSldfHxfMHg1MWE1MjdbXzB4YjE2NGNiKDB4MTc5KV07aWYodGhpc1snX2lzU2V0J10oXzB4NGE0ZDM3KT8oXzB4MjRkNzQ5PTB4MCxfMHg0YTRkMzdbXzB4YjE2NGNiKDB4MTdlKV0oZnVuY3Rpb24oXzB4MzY4Mzg3KXt2YXIgXzB4MjY1YzIzPV8weGIxNjRjYjtpZihfMHhmYWIzMmYrKyxfMHg1MWE1MjdbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHhmYWIzMmY+XzB4ODQ1MGE1KXtfMHgzODMwYWM9ITB4MDtyZXR1cm47fWlmKCFfMHg1MWE1MjdbXzB4MjY1YzIzKDB4ZGYpXSYmXzB4NTFhNTI3W18weDI2NWMyMygweDE2NildJiZfMHg1MWE1MjdbXzB4MjY1YzIzKDB4ZWMpXT5fMHg1MWE1MjdbXzB4MjY1YzIzKDB4MTYzKV0pe18weDM4MzBhYz0hMHgwO3JldHVybjt9XzB4NGY1MWRlW18weDI2NWMyMygweDE4YSldKF8weDNlYmRjZFsnX2FkZFByb3BlcnR5J10oXzB4M2QxZWI4LF8weDRhNGQzNyxfMHgyNjVjMjMoMHhlYSksXzB4MjRkNzQ5KyssXzB4NTFhNTI3LGZ1bmN0aW9uKF8weDQ3MzQ1NSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDQ3MzQ1NTt9O30oXzB4MzY4Mzg3KSkpO30pKTp0aGlzW18weGIxNjRjYigweDEyZSldKF8weDRhNGQzNykmJl8weDRhNGQzN1tfMHhiMTY0Y2IoMHgxN2UpXShmdW5jdGlvbihfMHgyNjg4OGQsXzB4MWZiOGIyKXt2YXIgXzB4NTNiNTQzPV8weGIxNjRjYjtpZihfMHhmYWIzMmYrKyxfMHg1MWE1MjdbXzB4NTNiNTQzKDB4ZWMpXSsrLF8weGZhYjMyZj5fMHg4NDUwYTUpe18weDM4MzBhYz0hMHgwO3JldHVybjt9aWYoIV8weDUxYTUyN1tfMHg1M2I1NDMoMHhkZildJiZfMHg1MWE1MjdbXzB4NTNiNTQzKDB4MTY2KV0mJl8weDUxYTUyN1tfMHg1M2I1NDMoMHhlYyldPl8weDUxYTUyN1tfMHg1M2I1NDMoMHgxNjMpXSl7XzB4MzgzMGFjPSEweDA7cmV0dXJuO312YXIgXzB4NDEyODhmPV8weDFmYjhiMltfMHg1M2I1NDMoMHgxNWMpXSgpO18weDQxMjg4ZltfMHg1M2I1NDMoMHgxNzgpXT4weDY0JiYoXzB4NDEyODhmPV8weDQxMjg4ZltfMHg1M2I1NDMoMHgxYTYpXSgweDAsMHg2NCkrJy4uLicpLF8weDRmNTFkZVtfMHg1M2I1NDMoMHgxOGEpXShfMHgzZWJkY2RbJ19hZGRQcm9wZXJ0eSddKF8weDNkMWViOCxfMHg0YTRkMzcsXzB4NTNiNTQzKDB4MTVkKSxfMHg0MTI4OGYsXzB4NTFhNTI3LGZ1bmN0aW9uKF8weDlkNGNkNil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDlkNGNkNjt9O30oXzB4MjY4ODhkKSkpO30pLCFfMHg1ZGZhNzQpe3RyeXtmb3IoXzB4NGNhYmZhIGluIF8weDRhNGQzNylpZighKF8weDU0MjBiYyYmXzB4MzZjNzYxW18weGIxNjRjYigweGVmKV0oXzB4NGNhYmZhKSkmJiF0aGlzW18weGIxNjRjYigweDE2ZCldKF8weDRhNGQzNyxfMHg0Y2FiZmEsXzB4NTFhNTI3KSl7aWYoXzB4ZmFiMzJmKyssXzB4NTFhNTI3W18weGIxNjRjYigweGVjKV0rKyxfMHhmYWIzMmY+XzB4ODQ1MGE1KXtfMHgzODMwYWM9ITB4MDticmVhazt9aWYoIV8weDUxYTUyN1tfMHhiMTY0Y2IoMHhkZildJiZfMHg1MWE1MjdbXzB4YjE2NGNiKDB4MTY2KV0mJl8weDUxYTUyN1tfMHhiMTY0Y2IoMHhlYyldPl8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNjMpXSl7XzB4MzgzMGFjPSEweDA7YnJlYWs7fV8weDRmNTFkZVsncHVzaCddKF8weDNlYmRjZFsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4M2QxZWI4LF8weDQyZDZmNixfMHg0YTRkMzcsXzB4MjJiYzEwLF8weDRjYWJmYSxfMHg1MWE1MjcpKTt9fWNhdGNoe31pZihfMHg0MmQ2ZjZbXzB4YjE2NGNiKDB4MTU1KV09ITB4MCxfMHgyZWU1N2UmJihfMHg0MmQ2ZjZbXzB4YjE2NGNiKDB4MTg1KV09ITB4MCksIV8weDM4MzBhYyl7dmFyIF8weDNhNmYwND1bXVtfMHhiMTY0Y2IoMHgxYjEpXSh0aGlzW18weGIxNjRjYigweGZlKV0oXzB4NGE0ZDM3KSlbJ2NvbmNhdCddKHRoaXNbXzB4YjE2NGNiKDB4MTM2KV0oXzB4NGE0ZDM3KSk7Zm9yKF8weDI0ZDc0OT0weDAsXzB4NzhlM2NiPV8weDNhNmYwNFtfMHhiMTY0Y2IoMHgxNzgpXTtfMHgyNGQ3NDk8XzB4NzhlM2NiO18weDI0ZDc0OSsrKWlmKF8weDRjYWJmYT1fMHgzYTZmMDRbXzB4MjRkNzQ5XSwhKF8weDU0MjBiYyYmXzB4MzZjNzYxW18weGIxNjRjYigweGVmKV0oXzB4NGNhYmZhW18weGIxNjRjYigweDE1YyldKCkpKSYmIXRoaXNbXzB4YjE2NGNiKDB4MTZkKV0oXzB4NGE0ZDM3LF8weDRjYWJmYSxfMHg1MWE1MjcpJiYhXzB4NDJkNmY2WydfcF8nK18weDRjYWJmYVtfMHhiMTY0Y2IoMHgxNWMpXSgpXSl7aWYoXzB4ZmFiMzJmKyssXzB4NTFhNTI3WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4ZmFiMzJmPl8weDg0NTBhNSl7XzB4MzgzMGFjPSEweDA7YnJlYWs7fWlmKCFfMHg1MWE1MjdbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4NTFhNTI3W18weGIxNjRjYigweDE2NildJiZfMHg1MWE1MjdbXzB4YjE2NGNiKDB4ZWMpXT5fMHg1MWE1MjdbXzB4YjE2NGNiKDB4MTYzKV0pe18weDM4MzBhYz0hMHgwO2JyZWFrO31fMHg0ZjUxZGVbXzB4YjE2NGNiKDB4MThhKV0oXzB4M2ViZGNkWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgzZDFlYjgsXzB4NDJkNmY2LF8weDRhNGQzNyxfMHgyMmJjMTAsXzB4NGNhYmZhLF8weDUxYTUyNykpO319fX19aWYoXzB4M2FjMmQ0W18weGIxNjRjYigweDEyNildPV8weDIyYmMxMCxfMHg0YThlMGY/KF8weDNhYzJkNFtfMHhiMTY0Y2IoMHgxNGUpXT1fMHg0YTRkMzdbJ3ZhbHVlT2YnXSgpLHRoaXNbXzB4YjE2NGNiKDB4MWEwKV0oXzB4MjJiYzEwLF8weDNhYzJkNCxfMHg1MWE1MjcsXzB4M2FkZjkxKSk6XzB4MjJiYzEwPT09XzB4YjE2NGNiKDB4MTg2KT9fMHgzYWMyZDRbXzB4YjE2NGNiKDB4MTRlKV09dGhpc1tfMHhiMTY0Y2IoMHgxNTApXVtfMHhiMTY0Y2IoMHgxNWEpXShfMHg0YTRkMzcpOl8weDIyYmMxMD09PV8weGIxNjRjYigweDE0Myk/XzB4M2FjMmQ0W18weGIxNjRjYigweDE0ZSldPV8weDRhNGQzN1sndG9TdHJpbmcnXSgpOl8weDIyYmMxMD09PV8weGIxNjRjYigweDE5NSk/XzB4M2FjMmQ0W18weGIxNjRjYigweDE0ZSldPXRoaXNbXzB4YjE2NGNiKDB4ZDQpXVtfMHhiMTY0Y2IoMHgxNWEpXShfMHg0YTRkMzcpOl8weDIyYmMxMD09PV8weGIxNjRjYigweGYwKSYmdGhpc1tfMHhiMTY0Y2IoMHhmNSldP18weDNhYzJkNFtfMHhiMTY0Y2IoMHgxNGUpXT10aGlzWydfU3ltYm9sJ11bXzB4YjE2NGNiKDB4ZmMpXVtfMHhiMTY0Y2IoMHgxNWMpXVtfMHhiMTY0Y2IoMHgxNWEpXShfMHg0YTRkMzcpOiFfMHg1MWE1MjdbXzB4YjE2NGNiKDB4Y2MpXSYmIShfMHgyMmJjMTA9PT0nbnVsbCd8fF8weDIyYmMxMD09PV8weGIxNjRjYigweDE4NykpJiYoZGVsZXRlIF8weDNhYzJkNFtfMHhiMTY0Y2IoMHgxNGUpXSxfMHgzYWMyZDRbXzB4YjE2NGNiKDB4MTJmKV09ITB4MCksXzB4MzgzMGFjJiYoXzB4M2FjMmQ0WydjYXBwZWRQcm9wcyddPSEweDApLF8weDIxZDAzZT1fMHg1MWE1MjdbJ25vZGUnXVtfMHhiMTY0Y2IoMHgxMjgpXSxfMHg1MWE1MjdbXzB4YjE2NGNiKDB4MTY5KV1bXzB4YjE2NGNiKDB4MTI4KV09XzB4M2FjMmQ0LHRoaXNbXzB4YjE2NGNiKDB4MTIyKV0oXzB4M2FjMmQ0LF8weDUxYTUyNyksXzB4NGY1MWRlW18weGIxNjRjYigweDE3OCldKXtmb3IoXzB4MjRkNzQ5PTB4MCxfMHg3OGUzY2I9XzB4NGY1MWRlW18weGIxNjRjYigweDE3OCldO18weDI0ZDc0OTxfMHg3OGUzY2I7XzB4MjRkNzQ5KyspXzB4NGY1MWRlW18weDI0ZDc0OV0oXzB4MjRkNzQ5KTt9XzB4M2QxZWI4W18weGIxNjRjYigweDE3OCldJiYoXzB4M2FjMmQ0W18weGIxNjRjYigweDE3OSldPV8weDNkMWViOCk7fWNhdGNoKF8weDI5ZTdmYyl7XzB4M2IxZjU3KF8weDI5ZTdmYyxfMHgzYWMyZDQsXzB4NTFhNTI3KTt9cmV0dXJuIHRoaXNbXzB4YjE2NGNiKDB4MTkzKV0oXzB4NGE0ZDM3LF8weDNhYzJkNCksdGhpc1tfMHhiMTY0Y2IoMHgxODApXShfMHgzYWMyZDQsXzB4NTFhNTI3KSxfMHg1MWE1MjdbXzB4YjE2NGNiKDB4MTY5KV1bXzB4YjE2NGNiKDB4MTI4KV09XzB4MjFkMDNlLF8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxYWEpXS0tLF8weDUxYTUyN1snYXV0b0V4cGFuZCddPV8weDkyNDZhOSxfMHg1MWE1MjdbXzB4YjE2NGNiKDB4MTY2KV0mJl8weDUxYTUyN1tfMHhiMTY0Y2IoMHgxNzApXVsncG9wJ10oKSxfMHgzYWMyZDQ7fVsnX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDFkN2FkMSl7dmFyIF8weDE2ZmUwMz1fMHg0ZmYwNWQ7cmV0dXJuIE9iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10/T2JqZWN0W18weDE2ZmUwMygweGQwKV0oXzB4MWQ3YWQxKTpbXTt9W18weDRmZjA1ZCgweGUyKV0oXzB4NDQ1NjBiKXt2YXIgXzB4NGUwNGIzPV8weDRmZjA1ZDtyZXR1cm4hIShfMHg0NDU2MGImJl8weDI2OTU2OVsnU2V0J10mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDQ0NTYwYik9PT0nW29iamVjdFxcXFx4MjBTZXRdJyYmXzB4NDQ1NjBiW18weDRlMDRiMygweDE3ZSldKTt9WydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDM2ZjUyMCxfMHgxMzI5NzgsXzB4MTUyYzNjKXt2YXIgXzB4MTZjY2QxPV8weDRmZjA1ZDtyZXR1cm4gXzB4MTUyYzNjW18weDE2Y2NkMSgweDFhOSldP3R5cGVvZiBfMHgzNmY1MjBbXzB4MTMyOTc4XT09XzB4MTZjY2QxKDB4MTMyKTohMHgxO31bXzB4NGZmMDVkKDB4ZTQpXShfMHg1MDUwMGUpe3ZhciBfMHg4NDI1NjY9XzB4NGZmMDVkLF8weDM3ZjY1Nj0nJztyZXR1cm4gXzB4MzdmNjU2PXR5cGVvZiBfMHg1MDUwMGUsXzB4MzdmNjU2PT09XzB4ODQyNTY2KDB4MTk0KT90aGlzW18weDg0MjU2NigweGY0KV0oXzB4NTA1MDBlKT09PSdbb2JqZWN0XFxcXHgyMEFycmF5XSc/XzB4MzdmNjU2PV8weDg0MjU2NigweDEzNSk6dGhpc1tfMHg4NDI1NjYoMHhmNCldKF8weDUwNTAwZSk9PT0nW29iamVjdFxcXFx4MjBEYXRlXSc/XzB4MzdmNjU2PV8weDg0MjU2NigweDE4Nik6dGhpc1tfMHg4NDI1NjYoMHhmNCldKF8weDUwNTAwZSk9PT0nW29iamVjdFxcXFx4MjBCaWdJbnRdJz9fMHgzN2Y2NTY9XzB4ODQyNTY2KDB4MTQzKTpfMHg1MDUwMGU9PT1udWxsP18weDM3ZjY1Nj1fMHg4NDI1NjYoMHhlOCk6XzB4NTA1MDBlW18weDg0MjU2NigweDFhOCldJiYoXzB4MzdmNjU2PV8weDUwNTAwZVtfMHg4NDI1NjYoMHgxYTgpXVsnbmFtZSddfHxfMHgzN2Y2NTYpOl8weDM3ZjY1Nj09PV8weDg0MjU2NigweDE4NykmJnRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiZfMHg1MDUwMGUgaW5zdGFuY2VvZiB0aGlzW18weDg0MjU2NigweDExOSldJiYoXzB4MzdmNjU2PV8weDg0MjU2NigweDE4ZSkpLF8weDM3ZjY1Njt9Wydfb2JqZWN0VG9TdHJpbmcnXShfMHg0NWRjNTgpe3ZhciBfMHg0MWViZWY9XzB4NGZmMDVkO3JldHVybiBPYmplY3RbJ3Byb3RvdHlwZSddW18weDQxZWJlZigweDE1YyldWydjYWxsJ10oXzB4NDVkYzU4KTt9W18weDRmZjA1ZCgweDE0ZildKF8weGNmYzBiZSl7dmFyIF8weDJhOGNhND1fMHg0ZmYwNWQ7cmV0dXJuIF8weGNmYzBiZT09PV8weDJhOGNhNCgweGQzKXx8XzB4Y2ZjMGJlPT09XzB4MmE4Y2E0KDB4MTg5KXx8XzB4Y2ZjMGJlPT09J251bWJlcic7fVsnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgxMGM1ZjUpe3ZhciBfMHg0NDM1OWI9XzB4NGZmMDVkO3JldHVybiBfMHgxMGM1ZjU9PT0nQm9vbGVhbid8fF8weDEwYzVmNT09PV8weDQ0MzU5YigweGRlKXx8XzB4MTBjNWY1PT09XzB4NDQzNTliKDB4MTc0KTt9W18weDRmZjA1ZCgweDEwOSldKF8weDFkZDFmOSxfMHgzOGFhNjksXzB4NWYwMWI2LF8weDI1NWY1YyxfMHgyNzYwYWQsXzB4NTYyYWQ4KXt2YXIgXzB4NTMzMDhlPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weGI3OWE2MCl7dmFyIF8weDk5ODBkZj1fMHhlMWEzLF8weDMzOWI1MD1fMHgyNzYwYWRbXzB4OTk4MGRmKDB4MTY5KV1bXzB4OTk4MGRmKDB4MTI4KV0sXzB4NGE1YjU1PV8weDI3NjBhZFtfMHg5OTgwZGYoMHgxNjkpXVtfMHg5OTgwZGYoMHhkZCldLF8weDI4YTU4ZT1fMHgyNzYwYWRbXzB4OTk4MGRmKDB4MTY5KV1bXzB4OTk4MGRmKDB4MTJiKV07XzB4Mjc2MGFkW18weDk5ODBkZigweDE2OSldW18weDk5ODBkZigweDEyYildPV8weDMzOWI1MCxfMHgyNzYwYWRbJ25vZGUnXVtfMHg5OTgwZGYoMHhkZCldPXR5cGVvZiBfMHgyNTVmNWM9PSdudW1iZXInP18weDI1NWY1YzpfMHhiNzlhNjAsXzB4MWRkMWY5W18weDk5ODBkZigweDE4YSldKF8weDUzMzA4ZVtfMHg5OTgwZGYoMHgxYWMpXShfMHgzOGFhNjksXzB4NWYwMWI2LF8weDI1NWY1YyxfMHgyNzYwYWQsXzB4NTYyYWQ4KSksXzB4Mjc2MGFkW18weDk5ODBkZigweDE2OSldW18weDk5ODBkZigweDEyYildPV8weDI4YTU4ZSxfMHgyNzYwYWRbJ25vZGUnXVtfMHg5OTgwZGYoMHhkZCldPV8weDRhNWI1NTt9O31bXzB4NGZmMDVkKDB4MTBiKV0oXzB4NGZjNDA1LF8weDhjZjMzNCxfMHg1NjU5NWUsXzB4MTQxMDhhLF8weGJlZDRhLF8weDQ1OWRhNixfMHg0YzU4ZTcpe3ZhciBfMHgzNzZiYmQ9XzB4NGZmMDVkLF8weDIyZGE3Nz10aGlzO3JldHVybiBfMHg4Y2YzMzRbXzB4Mzc2YmJkKDB4ZTApK18weGJlZDRhW18weDM3NmJiZCgweDE1YyldKCldPSEweDAsZnVuY3Rpb24oXzB4MmZlZjc2KXt2YXIgXzB4NDM3ZDZhPV8weDM3NmJiZCxfMHg4ZTE3NTY9XzB4NDU5ZGE2W18weDQzN2Q2YSgweDE2OSldW18weDQzN2Q2YSgweDEyOCldLF8weDFkYTJlMz1fMHg0NTlkYTZbXzB4NDM3ZDZhKDB4MTY5KV1bXzB4NDM3ZDZhKDB4ZGQpXSxfMHgyZTNhZWQ9XzB4NDU5ZGE2W18weDQzN2Q2YSgweDE2OSldW18weDQzN2Q2YSgweDEyYildO18weDQ1OWRhNltfMHg0MzdkNmEoMHgxNjkpXVtfMHg0MzdkNmEoMHgxMmIpXT1fMHg4ZTE3NTYsXzB4NDU5ZGE2W18weDQzN2Q2YSgweDE2OSldW18weDQzN2Q2YSgweGRkKV09XzB4MmZlZjc2LF8weDRmYzQwNVsncHVzaCddKF8weDIyZGE3N1tfMHg0MzdkNmEoMHgxYWMpXShfMHg1NjU5NWUsXzB4MTQxMDhhLF8weGJlZDRhLF8weDQ1OWRhNixfMHg0YzU4ZTcpKSxfMHg0NTlkYTZbXzB4NDM3ZDZhKDB4MTY5KV1bXzB4NDM3ZDZhKDB4MTJiKV09XzB4MmUzYWVkLF8weDQ1OWRhNlsnbm9kZSddW18weDQzN2Q2YSgweGRkKV09XzB4MWRhMmUzO307fVtfMHg0ZmYwNWQoMHgxYWMpXShfMHgxZGE0MWYsXzB4NTExOWU4LF8weDNjZTJiYyxfMHgzMjJkOTIsXzB4MTVmZDNhKXt2YXIgXzB4NDkzMDZmPV8weDRmZjA1ZCxfMHgxODdmMjI9dGhpcztfMHgxNWZkM2F8fChfMHgxNWZkM2E9ZnVuY3Rpb24oXzB4MmFjYjhkLF8weDNiNTAwNyl7cmV0dXJuIF8weDJhY2I4ZFtfMHgzYjUwMDddO30pO3ZhciBfMHgxYzVhOGI9XzB4M2NlMmJjW18weDQ5MzA2ZigweDE1YyldKCksXzB4MjA1OWRmPV8weDMyMmQ5MlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ118fHt9LF8weDFjZGRlZT1fMHgzMjJkOTJbXzB4NDkzMDZmKDB4Y2MpXSxfMHgyZjQ2MTM9XzB4MzIyZDkyW18weDQ5MzA2ZigweGRmKV07dHJ5e3ZhciBfMHgyNTY3NjA9dGhpc1tfMHg0OTMwNmYoMHgxMmUpXShfMHgxZGE0MWYpLF8weDU0NjRlOD1fMHgxYzVhOGI7XzB4MjU2NzYwJiZfMHg1NDY0ZThbMHgwXT09PSdcXFxceDI3JyYmKF8weDU0NjRlOD1fMHg1NDY0ZThbXzB4NDkzMDZmKDB4MTczKV0oMHgxLF8weDU0NjRlOFsnbGVuZ3RoJ10tMHgyKSk7dmFyIF8weDIxZWE3Zj1fMHgzMjJkOTJbXzB4NDkzMDZmKDB4MTlmKV09XzB4MjA1OWRmW18weDQ5MzA2ZigweGUwKStfMHg1NDY0ZThdO18weDIxZWE3ZiYmKF8weDMyMmQ5MltfMHg0OTMwNmYoMHhjYyldPV8weDMyMmQ5MltfMHg0OTMwNmYoMHhjYyldKzB4MSksXzB4MzIyZDkyW18weDQ5MzA2ZigweGRmKV09ISFfMHgyMWVhN2Y7dmFyIF8weDU3NTQzZT10eXBlb2YgXzB4M2NlMmJjPT1fMHg0OTMwNmYoMHhmMCksXzB4M2RhMzYyPXsnbmFtZSc6XzB4NTc1NDNlfHxfMHgyNTY3NjA/XzB4MWM1YThiOnRoaXNbXzB4NDkzMDZmKDB4MTQ4KV0oXzB4MWM1YThiKX07aWYoXzB4NTc1NDNlJiYoXzB4M2RhMzYyW18weDQ5MzA2ZigweGYwKV09ITB4MCksIShfMHg1MTE5ZTg9PT1fMHg0OTMwNmYoMHgxMzUpfHxfMHg1MTE5ZTg9PT1fMHg0OTMwNmYoMHgxOWIpKSl7dmFyIF8weDFhNDcwMj10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4MWRhNDFmLF8weDNjZTJiYyk7aWYoXzB4MWE0NzAyJiYoXzB4MWE0NzAyW18weDQ5MzA2ZigweDE2YildJiYoXzB4M2RhMzYyW18weDQ5MzA2ZigweGY5KV09ITB4MCksXzB4MWE0NzAyW18weDQ5MzA2ZigweDEwNSldJiYhXzB4MjFlYTdmJiYhXzB4MzIyZDkyW18weDQ5MzA2ZigweDE0OSldKSlyZXR1cm4gXzB4M2RhMzYyW18weDQ5MzA2ZigweDE0MSldPSEweDAsdGhpc1tfMHg0OTMwNmYoMHhlYildKF8weDNkYTM2MixfMHgzMjJkOTIpLF8weDNkYTM2Mjt9dmFyIF8weDUwODI5MTt0cnl7XzB4NTA4MjkxPV8weDE1ZmQzYShfMHgxZGE0MWYsXzB4M2NlMmJjKTt9Y2F0Y2goXzB4MjkwZDY2KXtyZXR1cm4gXzB4M2RhMzYyPXsnbmFtZSc6XzB4MWM1YThiLCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgyOTBkNjZbJ21lc3NhZ2UnXX0sdGhpc1tfMHg0OTMwNmYoMHhlYildKF8weDNkYTM2MixfMHgzMjJkOTIpLF8weDNkYTM2Mjt9dmFyIF8weDFhYTdkYz10aGlzW18weDQ5MzA2ZigweGU0KV0oXzB4NTA4MjkxKSxfMHg1YmRmYWE9dGhpc1tfMHg0OTMwNmYoMHgxNGYpXShfMHgxYWE3ZGMpO2lmKF8weDNkYTM2MltfMHg0OTMwNmYoMHgxMjYpXT1fMHgxYWE3ZGMsXzB4NWJkZmFhKXRoaXNbXzB4NDkzMDZmKDB4ZWIpXShfMHgzZGEzNjIsXzB4MzIyZDkyLF8weDUwODI5MSxmdW5jdGlvbigpe3ZhciBfMHg1ZTgyNGE9XzB4NDkzMDZmO18weDNkYTM2MlsndmFsdWUnXT1fMHg1MDgyOTFbXzB4NWU4MjRhKDB4MTMwKV0oKSwhXzB4MjFlYTdmJiZfMHgxODdmMjJbXzB4NWU4MjRhKDB4MWEwKV0oXzB4MWFhN2RjLF8weDNkYTM2MixfMHgzMjJkOTIse30pO30pO2Vsc2V7dmFyIF8weDMyYzM2MT1fMHgzMjJkOTJbXzB4NDkzMDZmKDB4MTY2KV0mJl8weDMyMmQ5MltfMHg0OTMwNmYoMHgxYWEpXTxfMHgzMjJkOTJbXzB4NDkzMDZmKDB4ZTMpXSYmXzB4MzIyZDkyW18weDQ5MzA2ZigweDE3MCldW18weDQ5MzA2ZigweDFhNyldKF8weDUwODI5MSk8MHgwJiZfMHgxYWE3ZGMhPT1fMHg0OTMwNmYoMHgxMzIpJiZfMHgzMjJkOTJbXzB4NDkzMDZmKDB4ZWMpXTxfMHgzMjJkOTJbXzB4NDkzMDZmKDB4MTYzKV07XzB4MzJjMzYxfHxfMHgzMjJkOTJbXzB4NDkzMDZmKDB4MWFhKV08XzB4MWNkZGVlfHxfMHgyMWVhN2Y/KHRoaXNbXzB4NDkzMDZmKDB4MTRiKV0oXzB4M2RhMzYyLF8weDUwODI5MSxfMHgzMjJkOTIsXzB4MjFlYTdmfHx7fSksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDUwODI5MSxfMHgzZGEzNjIpKTp0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4M2RhMzYyLF8weDMyMmQ5MixfMHg1MDgyOTEsZnVuY3Rpb24oKXt2YXIgXzB4NTdjMzc3PV8weDQ5MzA2ZjtfMHgxYWE3ZGM9PT0nbnVsbCd8fF8weDFhYTdkYz09PV8weDU3YzM3NygweDE4Nyl8fChkZWxldGUgXzB4M2RhMzYyW18weDU3YzM3NygweDE0ZSldLF8weDNkYTM2MltfMHg1N2MzNzcoMHgxMmYpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDNkYTM2Mjt9ZmluYWxseXtfMHgzMjJkOTJbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDIwNTlkZixfMHgzMjJkOTJbXzB4NDkzMDZmKDB4Y2MpXT1fMHgxY2RkZWUsXzB4MzIyZDkyW18weDQ5MzA2ZigweGRmKV09XzB4MmY0NjEzO319W18weDRmZjA1ZCgweDFhMCldKF8weDFmODQwYixfMHg0N2FmYjUsXzB4MWJkOTVhLF8weDQxMWRiNyl7dmFyIF8weDNkODhjNz1fMHg0ZmYwNWQsXzB4NWQzODA3PV8weDQxMWRiN1snc3RyTGVuZ3RoJ118fF8weDFiZDk1YVsnc3RyTGVuZ3RoJ107aWYoKF8weDFmODQwYj09PV8weDNkODhjNygweDE4OSl8fF8weDFmODQwYj09PSdTdHJpbmcnKSYmXzB4NDdhZmI1W18weDNkODhjNygweDE0ZSldKXtsZXQgXzB4OWNiYjQ9XzB4NDdhZmI1Wyd2YWx1ZSddW18weDNkODhjNygweDE3OCldO18weDFiZDk1YVtfMHgzZDg4YzcoMHgxNTcpXSs9XzB4OWNiYjQsXzB4MWJkOTVhW18weDNkODhjNygweDE1NyldPl8weDFiZDk1YVsndG90YWxTdHJMZW5ndGgnXT8oXzB4NDdhZmI1W18weDNkODhjNygweDEyZildPScnLGRlbGV0ZSBfMHg0N2FmYjVbXzB4M2Q4OGM3KDB4MTRlKV0pOl8weDljYmI0Pl8weDVkMzgwNyYmKF8weDQ3YWZiNVtfMHgzZDg4YzcoMHgxMmYpXT1fMHg0N2FmYjVbXzB4M2Q4OGM3KDB4MTRlKV1bJ3N1YnN0ciddKDB4MCxfMHg1ZDM4MDcpLGRlbGV0ZSBfMHg0N2FmYjVbJ3ZhbHVlJ10pO319WydfaXNNYXAnXShfMHgyMmVkYTApe3ZhciBfMHgyMjg5MjE9XzB4NGZmMDVkO3JldHVybiEhKF8weDIyZWRhMCYmXzB4MjY5NTY5W18weDIyODkyMSgweDE1ZCldJiZ0aGlzW18weDIyODkyMSgweGY0KV0oXzB4MjJlZGEwKT09PV8weDIyODkyMSgweDEyMykmJl8weDIyZWRhMFtfMHgyMjg5MjEoMHgxN2UpXSk7fVtfMHg0ZmYwNWQoMHgxNDgpXShfMHgzZWNiMWEpe3ZhciBfMHgzMTQ2ZGU9XzB4NGZmMDVkO2lmKF8weDNlY2IxYVtfMHgzMTQ2ZGUoMHgxOWQpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4M2VjYjFhO3ZhciBfMHgyOGU2NzY7dHJ5e18weDI4ZTY3Nj1KU09OW18weDMxNDZkZSgweDE0NyldKCcnK18weDNlY2IxYSk7fWNhdGNoe18weDI4ZTY3Nj0nXFxcXHgyMicrdGhpc1tfMHgzMTQ2ZGUoMHhmNCldKF8weDNlY2IxYSkrJ1xcXFx4MjInO31yZXR1cm4gXzB4MjhlNjc2W18weDMxNDZkZSgweDE5ZCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4MjhlNjc2PV8weDI4ZTY3NltfMHgzMTQ2ZGUoMHgxNzMpXSgweDEsXzB4MjhlNjc2W18weDMxNDZkZSgweDE3OCldLTB4Mik6XzB4MjhlNjc2PV8weDI4ZTY3NlsncmVwbGFjZSddKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4MzE0NmRlKDB4MTRhKV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4MzE0NmRlKDB4MTRhKV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDI4ZTY3Njt9W18weDRmZjA1ZCgweGViKV0oXzB4NGNlMTk1LF8weDQxMjJhNixfMHgxZDUxMGYsXzB4MThlZDVmKXt2YXIgXzB4MmVlMjUyPV8weDRmZjA1ZDt0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4NGNlMTk1LF8weDQxMjJhNiksXzB4MThlZDVmJiZfMHgxOGVkNWYoKSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4MWQ1MTBmLF8weDRjZTE5NSksdGhpc1tfMHgyZWUyNTIoMHgxODApXShfMHg0Y2UxOTUsXzB4NDEyMmE2KTt9W18weDRmZjA1ZCgweDEyMildKF8weDQzMDlhYSxfMHg0M2NhOGIpe3ZhciBfMHgzMTdhZTY9XzB4NGZmMDVkO3RoaXNbXzB4MzE3YWU2KDB4MTBhKV0oXzB4NDMwOWFhLF8weDQzY2E4YiksdGhpc1tfMHgzMTdhZTYoMHhkNyldKF8weDQzMDlhYSxfMHg0M2NhOGIpLHRoaXNbXzB4MzE3YWU2KDB4MWFlKV0oXzB4NDMwOWFhLF8weDQzY2E4YiksdGhpc1tfMHgzMTdhZTYoMHgxMGYpXShfMHg0MzA5YWEsXzB4NDNjYThiKTt9W18weDRmZjA1ZCgweDEwYSldKF8weGE1MzNkZCxfMHg0NDE4ZTYpe31bXzB4NGZmMDVkKDB4ZDcpXShfMHgyZjI4NGQsXzB4YmU5ODNjKXt9W18weDRmZjA1ZCgweDExMyldKF8weDI1ZjA5YyxfMHgyYTkyYzMpe31bXzB4NGZmMDVkKDB4MTgxKV0oXzB4NTRkOTEyKXt2YXIgXzB4MWE0ZDM2PV8weDRmZjA1ZDtyZXR1cm4gXzB4NTRkOTEyPT09dGhpc1tfMHgxYTRkMzYoMHgxOTIpXTt9W18weDRmZjA1ZCgweDE4MCldKF8weDQwMWIzOCxfMHgzYmNjNTgpe3ZhciBfMHgzZTU2MGI9XzB4NGZmMDVkO3RoaXNbXzB4M2U1NjBiKDB4MTEzKV0oXzB4NDAxYjM4LF8weDNiY2M1OCksdGhpc1tfMHgzZTU2MGIoMHgxNTQpXShfMHg0MDFiMzgpLF8weDNiY2M1OFtfMHgzZTU2MGIoMHgxNjcpXSYmdGhpc1tfMHgzZTU2MGIoMHgxM2YpXShfMHg0MDFiMzgpLHRoaXNbJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4NDAxYjM4LF8weDNiY2M1OCksdGhpc1snX2FkZExvYWROb2RlJ10oXzB4NDAxYjM4LF8weDNiY2M1OCksdGhpc1tfMHgzZTU2MGIoMHgxNmEpXShfMHg0MDFiMzgpO31bXzB4NGZmMDVkKDB4MTkzKV0oXzB4MWE5ODkyLF8weDRlYjNhYyl7dmFyIF8weDQ0NTQ0ND1fMHg0ZmYwNWQ7bGV0IF8weDFlYWM3Yjt0cnl7XzB4MjY5NTY5W18weDQ0NTQ0NCgweDFhMildJiYoXzB4MWVhYzdiPV8weDI2OTU2OVtfMHg0NDU0NDQoMHgxYTIpXVtfMHg0NDU0NDQoMHgxNTkpXSxfMHgyNjk1NjlbXzB4NDQ1NDQ0KDB4MWEyKV1bXzB4NDQ1NDQ0KDB4MTU5KV09ZnVuY3Rpb24oKXt9KSxfMHgxYTk4OTImJnR5cGVvZiBfMHgxYTk4OTJbXzB4NDQ1NDQ0KDB4MTc4KV09PV8weDQ0NTQ0NCgweDFhNCkmJihfMHg0ZWIzYWNbXzB4NDQ1NDQ0KDB4MTc4KV09XzB4MWE5ODkyW18weDQ0NTQ0NCgweDE3OCldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4MWVhYzdiJiYoXzB4MjY5NTY5W18weDQ0NTQ0NCgweDFhMildW18weDQ0NTQ0NCgweDE1OSldPV8weDFlYWM3Yik7fWlmKF8weDRlYjNhY1sndHlwZSddPT09XzB4NDQ1NDQ0KDB4MWE0KXx8XzB4NGViM2FjWyd0eXBlJ109PT0nTnVtYmVyJyl7aWYoaXNOYU4oXzB4NGViM2FjWyd2YWx1ZSddKSlfMHg0ZWIzYWNbXzB4NDQ1NDQ0KDB4MTk4KV09ITB4MCxkZWxldGUgXzB4NGViM2FjW18weDQ0NTQ0NCgweDE0ZSldO2Vsc2Ugc3dpdGNoKF8weDRlYjNhY1tfMHg0NDU0NDQoMHgxNGUpXSl7Y2FzZSBOdW1iZXJbXzB4NDQ1NDQ0KDB4MTU2KV06XzB4NGViM2FjWydwb3NpdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4NGViM2FjW18weDQ0NTQ0NCgweDE0ZSldO2JyZWFrO2Nhc2UgTnVtYmVyW18weDQ0NTQ0NCgweDE0YyldOl8weDRlYjNhY1tfMHg0NDU0NDQoMHgxMWYpXT0hMHgwLGRlbGV0ZSBfMHg0ZWIzYWNbJ3ZhbHVlJ107YnJlYWs7Y2FzZSAweDA6dGhpc1snX2lzTmVnYXRpdmVaZXJvJ10oXzB4NGViM2FjW18weDQ0NTQ0NCgweDE0ZSldKSYmKF8weDRlYjNhY1tfMHg0NDU0NDQoMHgxMWMpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4NGViM2FjW18weDQ0NTQ0NCgweDEyNildPT09XzB4NDQ1NDQ0KDB4MTMyKSYmdHlwZW9mIF8weDFhOTg5MltfMHg0NDU0NDQoMHgxMzkpXT09XzB4NDQ1NDQ0KDB4MTg5KSYmXzB4MWE5ODkyWyduYW1lJ10mJl8weDRlYjNhY1tfMHg0NDU0NDQoMHgxMzkpXSYmXzB4MWE5ODkyW18weDQ0NTQ0NCgweDEzOSldIT09XzB4NGViM2FjW18weDQ0NTQ0NCgweDEzOSldJiYoXzB4NGViM2FjW18weDQ0NTQ0NCgweDEzNyldPV8weDFhOTg5MlsnbmFtZSddKTt9W18weDRmZjA1ZCgweDExMCldKF8weDM1ZmM5OSl7dmFyIF8weDJjZGI3ZD1fMHg0ZmYwNWQ7cmV0dXJuIDB4MS9fMHgzNWZjOTk9PT1OdW1iZXJbXzB4MmNkYjdkKDB4MTRjKV07fVtfMHg0ZmYwNWQoMHgxM2YpXShfMHgzNmE5NTApe3ZhciBfMHgzNjlmNmU9XzB4NGZmMDVkOyFfMHgzNmE5NTBbJ3Byb3BzJ118fCFfMHgzNmE5NTBbJ3Byb3BzJ11bXzB4MzY5ZjZlKDB4MTc4KV18fF8weDM2YTk1MFtfMHgzNjlmNmUoMHgxMjYpXT09PV8weDM2OWY2ZSgweDEzNSl8fF8weDM2YTk1MFtfMHgzNjlmNmUoMHgxMjYpXT09PSdNYXAnfHxfMHgzNmE5NTBbXzB4MzY5ZjZlKDB4MTI2KV09PT1fMHgzNjlmNmUoMHhlYSl8fF8weDM2YTk1MFsncHJvcHMnXVtfMHgzNjlmNmUoMHgxNzEpXShmdW5jdGlvbihfMHgzZjg2ZjUsXzB4MzExZjc2KXt2YXIgXzB4MjM2Mzg1PV8weDM2OWY2ZSxfMHgzNWI0MDQ9XzB4M2Y4NmY1W18weDIzNjM4NSgweDEzOSldW18weDIzNjM4NSgweDE4MyldKCksXzB4NjUwMTU2PV8weDMxMWY3NltfMHgyMzYzODUoMHgxMzkpXVsndG9Mb3dlckNhc2UnXSgpO3JldHVybiBfMHgzNWI0MDQ8XzB4NjUwMTU2Py0weDE6XzB4MzViNDA0Pl8weDY1MDE1Nj8weDE6MHgwO30pO31bXzB4NGZmMDVkKDB4MTMzKV0oXzB4MmYxZWJjLF8weDUwMTA1YSl7dmFyIF8weGJmY2Q3ZD1fMHg0ZmYwNWQ7aWYoIShfMHg1MDEwNWFbXzB4YmZjZDdkKDB4MWE5KV18fCFfMHgyZjFlYmNbXzB4YmZjZDdkKDB4MTc5KV18fCFfMHgyZjFlYmNbXzB4YmZjZDdkKDB4MTc5KV1bJ2xlbmd0aCddKSl7Zm9yKHZhciBfMHgyNTNhNmE9W10sXzB4MjEwMmI2PVtdLF8weDJiYjkwOD0weDAsXzB4NTQ2Zjg5PV8weDJmMWViY1tfMHhiZmNkN2QoMHgxNzkpXVtfMHhiZmNkN2QoMHgxNzgpXTtfMHgyYmI5MDg8XzB4NTQ2Zjg5O18weDJiYjkwOCsrKXt2YXIgXzB4MWNiZDNlPV8weDJmMWViY1sncHJvcHMnXVtfMHgyYmI5MDhdO18weDFjYmQzZVsndHlwZSddPT09J2Z1bmN0aW9uJz9fMHgyNTNhNmFbXzB4YmZjZDdkKDB4MThhKV0oXzB4MWNiZDNlKTpfMHgyMTAyYjZbXzB4YmZjZDdkKDB4MThhKV0oXzB4MWNiZDNlKTt9aWYoISghXzB4MjEwMmI2WydsZW5ndGgnXXx8XzB4MjUzYTZhW18weGJmY2Q3ZCgweDE3OCldPD0weDEpKXtfMHgyZjFlYmNbXzB4YmZjZDdkKDB4MTc5KV09XzB4MjEwMmI2O3ZhciBfMHgxYTQwZjM9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4MjUzYTZhfTt0aGlzWydfc2V0Tm9kZUlkJ10oXzB4MWE0MGYzLF8weDUwMTA1YSksdGhpc1tfMHhiZmNkN2QoMHgxMTMpXShfMHgxYTQwZjMsXzB4NTAxMDVhKSx0aGlzW18weGJmY2Q3ZCgweDE1NCldKF8weDFhNDBmMyksdGhpc1tfMHhiZmNkN2QoMHgxMGYpXShfMHgxYTQwZjMsXzB4NTAxMDVhKSxfMHgxYTQwZjNbJ2lkJ10rPSdcXFxceDIwZicsXzB4MmYxZWJjW18weGJmY2Q3ZCgweDE3OSldW18weGJmY2Q3ZCgweDEyMCldKF8weDFhNDBmMyk7fX19W18weDRmZjA1ZCgweDE4OCldKF8weDQ2ZTI1OSxfMHg0N2Y0ZWIpe31bXzB4NGZmMDVkKDB4MTU0KV0oXzB4MWQ5ZjY0KXt9WydfaXNBcnJheSddKF8weGRhMzVhMyl7dmFyIF8weDJhMjhkZD1fMHg0ZmYwNWQ7cmV0dXJuIEFycmF5Wydpc0FycmF5J10oXzB4ZGEzNWEzKXx8dHlwZW9mIF8weGRhMzVhMz09J29iamVjdCcmJnRoaXNbXzB4MmEyOGRkKDB4ZjQpXShfMHhkYTM1YTMpPT09XzB4MmEyOGRkKDB4ZGEpO31bXzB4NGZmMDVkKDB4MTBmKV0oXzB4MmFkNjJiLF8weDNkOGI1Yyl7fVsnX2NsZWFuTm9kZSddKF8weDEyNTY0NCl7dmFyIF8weDE1NzNjMj1fMHg0ZmYwNWQ7ZGVsZXRlIF8weDEyNTY0NFtfMHgxNTczYzIoMHhjYSldLGRlbGV0ZSBfMHgxMjU2NDRbJ19oYXNTZXRPbkl0c1BhdGgnXSxkZWxldGUgXzB4MTI1NjQ0W18weDE1NzNjMigweDE1OCldO31bJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgyMzA2NmYsXzB4MzFjMTRlKXt9fWxldCBfMHg1MzBkZTk9bmV3IF8weDRiZWM3NSgpLF8weDViYjE0Yj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHg0NjJmNGQ9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHg1NDM5ZDYoXzB4NDUzZGZhLF8weDQxNTcwNixfMHgyZDc2NzUsXzB4MjIwMzdjLF8weDQzZWE5MixfMHg1MGY1ZjYpe3ZhciBfMHgyN2IwNmM9XzB4NGZmMDVkO2xldCBfMHg0ZjAxN2QsXzB4NDc4MmY3O3RyeXtfMHg0NzgyZjc9XzB4NDFjZWU1KCksXzB4NGYwMTdkPV8weDMwOTQwNltfMHg0MTU3MDZdLCFfMHg0ZjAxN2R8fF8weDQ3ODJmNy1fMHg0ZjAxN2RbJ3RzJ10+MHgxZjQmJl8weDRmMDE3ZFtfMHgyN2IwNmMoMHgxMjEpXSYmXzB4NGYwMTdkWyd0aW1lJ10vXzB4NGYwMTdkW18weDI3YjA2YygweDEyMSldPDB4NjQ/KF8weDMwOTQwNltfMHg0MTU3MDZdPV8weDRmMDE3ZD17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDQ3ODJmN30sXzB4MzA5NDA2WydoaXRzJ109e30pOl8weDQ3ODJmNy1fMHgzMDk0MDZbJ2hpdHMnXVsndHMnXT4weDMyJiZfMHgzMDk0MDZbXzB4MjdiMDZjKDB4MTYwKV1bXzB4MjdiMDZjKDB4MTIxKV0mJl8weDMwOTQwNlsnaGl0cyddWyd0aW1lJ10vXzB4MzA5NDA2WydoaXRzJ11bXzB4MjdiMDZjKDB4MTIxKV08MHg2NCYmKF8weDMwOTQwNltfMHgyN2IwNmMoMHgxNjApXT17fSk7bGV0IF8weGU3ODRhNj1bXSxfMHgzNzVjYWM9XzB4NGYwMTdkW18weDI3YjA2YygweGRjKV18fF8weDMwOTQwNlsnaGl0cyddWydyZWR1Y2VMaW1pdHMnXT9fMHg0NjJmNGQ6XzB4NWJiMTRiLF8weDM1MWIyOD1fMHg1OTY2OWU9Pnt2YXIgXzB4NWJlMTUyPV8weDI3YjA2YztsZXQgXzB4MjFjYzVjPXt9O3JldHVybiBfMHgyMWNjNWNbJ3Byb3BzJ109XzB4NTk2NjllW18weDViZTE1MigweDE3OSldLF8weDIxY2M1Y1tfMHg1YmUxNTIoMHgxYjIpXT1fMHg1OTY2OWVbXzB4NWJlMTUyKDB4MWIyKV0sXzB4MjFjYzVjWydzdHJMZW5ndGgnXT1fMHg1OTY2OWVbXzB4NWJlMTUyKDB4MTc3KV0sXzB4MjFjYzVjWyd0b3RhbFN0ckxlbmd0aCddPV8weDU5NjY5ZVtfMHg1YmUxNTIoMHhmYSldLF8weDIxY2M1Y1tfMHg1YmUxNTIoMHgxNjMpXT1fMHg1OTY2OWVbXzB4NWJlMTUyKDB4MTYzKV0sXzB4MjFjYzVjW18weDViZTE1MigweGUzKV09XzB4NTk2NjllW18weDViZTE1MigweGUzKV0sXzB4MjFjYzVjW18weDViZTE1MigweDE2NyldPSEweDEsXzB4MjFjYzVjW18weDViZTE1MigweDFhOSldPSFfMHhiNmM3MjgsXzB4MjFjYzVjW18weDViZTE1MigweGNjKV09MHgxLF8weDIxY2M1Y1tfMHg1YmUxNTIoMHgxYWEpXT0weDAsXzB4MjFjYzVjW18weDViZTE1MigweGQ4KV09J3Jvb3RfZXhwX2lkJyxfMHgyMWNjNWNbJ3Jvb3RFeHByZXNzaW9uJ109J3Jvb3RfZXhwJyxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4MTY2KV09ITB4MCxfMHgyMWNjNWNbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXT1bXSxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4ZWMpXT0weDAsXzB4MjFjYzVjWydyZXNvbHZlR2V0dGVycyddPSEweDAsXzB4MjFjYzVjW18weDViZTE1MigweDE1NyldPTB4MCxfMHgyMWNjNWNbXzB4NWJlMTUyKDB4MTY5KV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4MjFjYzVjO307Zm9yKHZhciBfMHg1NjU5ZDU9MHgwO18weDU2NTlkNTxfMHg0M2VhOTJbXzB4MjdiMDZjKDB4MTc4KV07XzB4NTY1OWQ1KyspXzB4ZTc4NGE2W18weDI3YjA2YygweDE4YSldKF8weDUzMGRlOVtfMHgyN2IwNmMoMHgxNGIpXSh7J3RpbWVOb2RlJzpfMHg0NTNkZmE9PT1fMHgyN2IwNmMoMHgxNzIpfHx2b2lkIDB4MH0sXzB4NDNlYTkyW18weDU2NTlkNV0sXzB4MzUxYjI4KF8weDM3NWNhYykse30pKTtpZihfMHg0NTNkZmE9PT1fMHgyN2IwNmMoMHgxNDIpKXtsZXQgXzB4M2Q1MDZiPUVycm9yW18weDI3YjA2YygweGQyKV07dHJ5e0Vycm9yW18weDI3YjA2YygweGQyKV09MHgxLzB4MCxfMHhlNzg0YTZbJ3B1c2gnXShfMHg1MzBkZTlbJ3NlcmlhbGl6ZSddKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHgyN2IwNmMoMHgxM2EpXSxfMHgzNTFiMjgoXzB4Mzc1Y2FjKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHgyN2IwNmMoMHhkMildPV8weDNkNTA2Yjt9fXJldHVybnsnbWV0aG9kJzpfMHgyN2IwNmMoMHgxMzEpLCd2ZXJzaW9uJzpfMHg1ODM5MjUsJ2FyZ3MnOlt7J3RzJzpfMHgyZDc2NzUsJ3Nlc3Npb24nOl8weDIyMDM3YywnYXJncyc6XzB4ZTc4NGE2LCdpZCc6XzB4NDE1NzA2LCdjb250ZXh0JzpfMHg1MGY1ZjZ9XX07fWNhdGNoKF8weDUwYjIxYyl7cmV0dXJueydtZXRob2QnOl8weDI3YjA2YygweDEzMSksJ3ZlcnNpb24nOl8weDU4MzkyNSwnYXJncyc6W3sndHMnOl8weDJkNzY3NSwnc2Vzc2lvbic6XzB4MjIwMzdjLCdhcmdzJzpbeyd0eXBlJzpfMHgyN2IwNmMoMHhmMiksJ2Vycm9yJzpfMHg1MGIyMWMmJl8weDUwYjIxY1tfMHgyN2IwNmMoMHgxNTIpXX1dLCdpZCc6XzB4NDE1NzA2LCdjb250ZXh0JzpfMHg1MGY1ZjZ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDRmMDE3ZCYmXzB4NDc4MmY3KXtsZXQgXzB4NmUzZjUwPV8weDQxY2VlNSgpO18weDRmMDE3ZFtfMHgyN2IwNmMoMHgxMjEpXSsrLF8weDRmMDE3ZFtfMHgyN2IwNmMoMHgxNzIpXSs9XzB4NTBkN2QxKF8weDQ3ODJmNyxfMHg2ZTNmNTApLF8weDRmMDE3ZFsndHMnXT1fMHg2ZTNmNTAsXzB4MzA5NDA2W18weDI3YjA2YygweDE2MCldW18weDI3YjA2YygweDEyMSldKyssXzB4MzA5NDA2WydoaXRzJ11bXzB4MjdiMDZjKDB4MTcyKV0rPV8weDUwZDdkMShfMHg0NzgyZjcsXzB4NmUzZjUwKSxfMHgzMDk0MDZbXzB4MjdiMDZjKDB4MTYwKV1bJ3RzJ109XzB4NmUzZjUwLChfMHg0ZjAxN2RbXzB4MjdiMDZjKDB4MTIxKV0+MHgzMnx8XzB4NGYwMTdkW18weDI3YjA2YygweDE3MildPjB4NjQpJiYoXzB4NGYwMTdkW18weDI3YjA2YygweGRjKV09ITB4MCksKF8weDMwOTQwNlsnaGl0cyddWydjb3VudCddPjB4M2U4fHxfMHgzMDk0MDZbXzB4MjdiMDZjKDB4MTYwKV1bXzB4MjdiMDZjKDB4MTcyKV0+MHgxMmMpJiYoXzB4MzA5NDA2W18weDI3YjA2YygweDE2MCldW18weDI3YjA2YygweGRjKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4NTQzOWQ2O30oKF8weDQzNmIyZixfMHg1ZTllNjgsXzB4NzM5ZjUxLF8weDIwMDg1OSxfMHg1YWRlNDUsXzB4M2MwYzRhLF8weDJlOWVmNCxfMHg1MmY3YjksXzB4NDg5YmNjLF8weDRiMDkwNCk9Pnt2YXIgXzB4M2ViMzRiPV8weDI0YWUzMjtpZihfMHg0MzZiMmZbJ19jb25zb2xlX25pbmphJ10pcmV0dXJuIF8weDQzNmIyZltfMHgzZWIzNGIoMHgxMGMpXTtpZighSihfMHg0MzZiMmYsXzB4NTJmN2I5LF8weDVhZGU0NSkpcmV0dXJuIF8weDQzNmIyZlsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4NDM2YjJmWydfY29uc29sZV9uaW5qYSddO2xldCBfMHgxN2VkMWU9VyhfMHg0MzZiMmYpLF8weDViOGFhZT1fMHgxN2VkMWVbXzB4M2ViMzRiKDB4ZjEpXSxfMHgzNThmODY9XzB4MTdlZDFlW18weDNlYjM0YigweDEwNildLF8weDFkYjBjNz1fMHgxN2VkMWVbXzB4M2ViMzRiKDB4MTY4KV0sXzB4NWVkYWIyPXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4MjMwNmE2PVkoXzB4NDM2YjJmLF8weDQ4OWJjYyxfMHg1ZWRhYjIsXzB4M2MwYzRhKSxfMHg1YzIwOTk9XzB4MzljNjU3PT57XzB4NWVkYWIyWyd0cyddW18weDM5YzY1N109XzB4MzU4Zjg2KCk7fSxfMHgzYTk3ZTM9KF8weDIzMTYwMyxfMHgzMjUzMWUpPT57dmFyIF8weDJhMTUxMT1fMHgzZWIzNGI7bGV0IF8weDUwMTlhYT1fMHg1ZWRhYjJbJ3RzJ11bXzB4MzI1MzFlXTtpZihkZWxldGUgXzB4NWVkYWIyWyd0cyddW18weDMyNTMxZV0sXzB4NTAxOWFhKXtsZXQgXzB4MjZmZmZmPV8weDViOGFhZShfMHg1MDE5YWEsXzB4MzU4Zjg2KCkpO18weDQ4MjcyOChfMHgyMzA2YTYoXzB4MmExNTExKDB4MTcyKSxfMHgyMzE2MDMsXzB4MWRiMGM3KCksXzB4MTA5YzRmLFtfMHgyNmZmZmZdLF8weDMyNTMxZSkpO319LF8weDE2MGY0Mj1fMHg0MGEzODk9Pl8weDE3NGYzZT0+e3ZhciBfMHg1ODEyMzY9XzB4M2ViMzRiO3RyeXtfMHg1YzIwOTkoXzB4MTc0ZjNlKSxfMHg0MGEzODkoXzB4MTc0ZjNlKTt9ZmluYWxseXtfMHg0MzZiMmZbXzB4NTgxMjM2KDB4MWEyKV1bXzB4NTgxMjM2KDB4MTcyKV09XzB4NDBhMzg5O319LF8weDQ2YmM5YT1fMHg4Yjc4ZTg9Pl8weDRjODBmZT0+e3ZhciBfMHg0NGU0YjQ9XzB4M2ViMzRiO3RyeXtsZXQgW18weDI4NWM3YyxfMHgxNmM0NjNdPV8weDRjODBmZVtfMHg0NGU0YjQoMHgxOGMpXSgnOmxvZ1BvaW50SWQ6Jyk7XzB4M2E5N2UzKF8weDE2YzQ2MyxfMHgyODVjN2MpLF8weDhiNzhlOChfMHgyODVjN2MpO31maW5hbGx5e18weDQzNmIyZltfMHg0NGU0YjQoMHgxYTIpXVsndGltZUVuZCddPV8weDhiNzhlODt9fTtfMHg0MzZiMmZbXzB4M2ViMzRiKDB4MTBjKV09eydjb25zb2xlTG9nJzooXzB4MWJjMmVhLF8weDNmM2UwMCk9Pnt2YXIgXzB4NGI2NzI0PV8weDNlYjM0YjtfMHg0MzZiMmZbJ2NvbnNvbGUnXVtfMHg0YjY3MjQoMHgxMzEpXVsnbmFtZSddIT09XzB4NGI2NzI0KDB4MTE2KSYmXzB4NDgyNzI4KF8weDIzMDZhNignbG9nJyxfMHgxYmMyZWEsXzB4MWRiMGM3KCksXzB4MTA5YzRmLF8weDNmM2UwMCkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDFmYTVmMSxfMHgxMjI1NjYpPT57dmFyIF8weDEyMjYwNz1fMHgzZWIzNGI7XzB4NDM2YjJmW18weDEyMjYwNygweDFhMildW18weDEyMjYwNygweDEzMSldWyduYW1lJ10hPT1fMHgxMjI2MDcoMHgxMDMpJiZfMHg0ODI3MjgoXzB4MjMwNmE2KF8weDEyMjYwNygweDE0MiksXzB4MWZhNWYxLF8weDFkYjBjNygpLF8weDEwOWM0ZixfMHgxMjI1NjYpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4NGQ2OGQyPV8weDNlYjM0YjtfMHg0MzZiMmZbXzB4NGQ2OGQyKDB4MWEyKV1bXzB4NGQ2OGQyKDB4MTcyKV09XzB4MTYwZjQyKF8weDQzNmIyZlsnY29uc29sZSddWyd0aW1lJ10pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgzNDUzYjQ9XzB4M2ViMzRiO18weDQzNmIyZltfMHgzNDUzYjQoMHgxYTIpXVtfMHgzNDUzYjQoMHgxNzUpXT1fMHg0NmJjOWEoXzB4NDM2YjJmW18weDM0NTNiNCgweDFhMildW18weDM0NTNiNCgweDE3NSldKTt9LCdhdXRvTG9nJzooXzB4NDQ5MDc2LF8weDJlNzg2Nik9Pnt2YXIgXzB4NTgyOGVjPV8weDNlYjM0YjtfMHg0ODI3MjgoXzB4MjMwNmE2KF8weDU4MjhlYygweDEzMSksXzB4MmU3ODY2LF8weDFkYjBjNygpLF8weDEwOWM0ZixbXzB4NDQ5MDc2XSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4NTMzMTRiLF8weDQyYTlmNSk9Pnt2YXIgXzB4MTNlNmVjPV8weDNlYjM0YjtfMHg0ODI3MjgoXzB4MjMwNmE2KF8weDEzZTZlYygweDEzMSksXzB4NTMzMTRiLF8weDFkYjBjNygpLF8weDEwOWM0ZixfMHg0MmE5ZjUpKTt9LCdhdXRvVHJhY2UnOihfMHg1NjQ1OTAsXzB4MTAxMjgzKT0+e3ZhciBfMHgyMjNiZGY9XzB4M2ViMzRiO18weDQ4MjcyOChfMHgyMzA2YTYoXzB4MjIzYmRmKDB4MTQyKSxfMHgxMDEyODMsXzB4MWRiMGM3KCksXzB4MTA5YzRmLFtfMHg1NjQ1OTBdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDU1MzQyMyxfMHgzNjkwZTApPT57dmFyIF8weDM1YWI3ZT1fMHgzZWIzNGI7XzB4NDgyNzI4KF8weDIzMDZhNihfMHgzNWFiN2UoMHgxNDIpLF8weDU1MzQyMyxfMHgxZGIwYzcoKSxfMHgxMDljNGYsXzB4MzY5MGUwKSk7fSwnYXV0b1RpbWUnOihfMHgyNTQwY2MsXzB4MmFkNDBmLF8weDJjYzEzOCk9PntfMHg1YzIwOTkoXzB4MmNjMTM4KTt9LCdhdXRvVGltZUVuZCc6KF8weDMwZTZkMyxfMHg0YzcxMCxfMHgzOGQ1MTUpPT57XzB4M2E5N2UzKF8weDRjNzEwLF8weDM4ZDUxNSk7fSwnY292ZXJhZ2UnOl8weDY2MTFmYT0+e3ZhciBfMHg1NWE2NTQ9XzB4M2ViMzRiO18weDQ4MjcyOCh7J21ldGhvZCc6XzB4NTVhNjU0KDB4MTVmKSwndmVyc2lvbic6XzB4M2MwYzRhLCdhcmdzJzpbeydpZCc6XzB4NjYxMWZhfV19KTt9fTtsZXQgXzB4NDgyNzI4PWIoXzB4NDM2YjJmLF8weDVlOWU2OCxfMHg3MzlmNTEsXzB4MjAwODU5LF8weDVhZGU0NSxfMHg0YjA5MDQpLF8weDEwOWM0Zj1fMHg0MzZiMmZbXzB4M2ViMzRiKDB4MTdjKV07cmV0dXJuIF8weDQzNmIyZlsnX2NvbnNvbGVfbmluamEnXTt9KShnbG9iYWxUaGlzLF8weDI0YWUzMigweDFiMCksXzB4MjRhZTMyKDB4ZDYpLF8weDI0YWUzMigweDExZCksXzB4MjRhZTMyKDB4MTBlKSxfMHgyNGFlMzIoMHgxN2EpLCcxNzEyMTQ5MzkyNjQ2JyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcImRrbS1kZXNrdG9wXFxcIixcXFwiMTkyLjE2OC4xLjEwMFxcXCJdLF8weDI0YWUzMigweDFhZCksXzB4MjRhZTMyKDB4MTFlKSk7XCIpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCB1bmljb3JuL25vLWFidXNpdmUtZXNsaW50LWRpc2FibGU6LGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=