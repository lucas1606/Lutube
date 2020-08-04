(this["webpackJsonplutube"] = this["webpackJsonplutube"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/menu/Menu.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/menu/Menu.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.Logo {\n    max-width: 168px;\n  }\n  @media (max-width: 800px) {\n    .Logo {\n      max-width: 105px;\n    }\n  }\n  \n  .Menu {\n    width: 100%;\n    height: 94px;\n    z-index: 100;\n  \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-left: 5%;\n    padding-right: 5%;\n  \n    background: var(--black);\n    border-bottom: 2px solid var(--primary);\n  }\n  body {\n    --bodyPaddingTop: 94px;\n    padding-top: var(--bodyPaddingTop);\n  }\n  @media (max-width: 800px) {\n    .Menu {\n      height: 40px;\n      justify-content: center;\n    }\n    body {\n      --bodyPaddingTop: 40px;\n      padding-top: var(--bodyPaddingTop);\n    }\n  }\n  \n  .ButtonLink {\n    color: var(--white);\n    border: 1px solid var(--white);\n    box-sizing: border-box;\n    cursor: pointer;\n    padding: 16px 24px;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    outline: none;\n    border-radius: 5px;\n    text-decoration: none;\n    display: inline-block;\n    transition: opacity .3s;\n  }\n  .ButtonLink:hover,\n  .ButtonLink:focus {\n    opacity: .5;\n  }\n  \n  @media (max-width: 800px) {\n    a.ButtonLink {\n      position: fixed;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: var(--primary);\n      border-radius: 0;\n      border: 0;\n      text-align: center;\n    }\n  }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n* {\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --primary: #2A7AE4;\n  --black: #000000;\n  --blackLighter: #9E9E9E;\n  --grayLight: #F5F5F5;\n  --grayMedium: #e5e5e5; \n  --white: #FFFFFF;\n  --frontEnd: #6BD1FF;\n  --backEnd: #00C86F;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  color: inherit;\n} \n\n#root {\nmin-height: calc(100vh - var(--bodyPaddingTop));\ndisplay: flex;\nflex-direction: column;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/assets/img/lutubeLogo.png":
/*!***************************************!*\
  !*** ./src/assets/img/lutubeLogo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lutubeLogo.85f58458.png";

/***/ }),

/***/ "./src/components/BannerMain/components/VideoIframeResponsive/index.js":
/*!*****************************************************************************!*\
  !*** ./src/components/BannerMain/components/VideoIframeResponsive/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/BannerMain/components/VideoIframeResponsive/styles.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/components/BannerMain/components/VideoIframeResponsive/index.js";



function YouTubeIframeResponsive({
  youtubeID
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["VideoContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["ResponsiveIframe"], {
    title: "Titulo do Iframe",
    src: `https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (YouTubeIframeResponsive);

/***/ }),

/***/ "./src/components/BannerMain/components/VideoIframeResponsive/styles.js":
/*!******************************************************************************!*\
  !*** ./src/components/BannerMain/components/VideoIframeResponsive/styles.js ***!
  \******************************************************************************/
/*! exports provided: VideoContainer, ResponsiveIframe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoContainer", function() { return VideoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveIframe", function() { return ResponsiveIframe; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    display: none;
  }
`;
const ResponsiveIframe = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

/***/ }),

/***/ "./src/components/BannerMain/index.js":
/*!********************************************!*\
  !*** ./src/components/BannerMain/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BannerMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VideoIframeResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/VideoIframeResponsive */ "./src/components/BannerMain/components/VideoIframeResponsive/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/BannerMain/styles.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/components/BannerMain/index.js";




function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

function BannerMain({
  videoTitle,
  videoDescription,
  url
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["BannerMainContainer"], {
    backgroundImage: bgUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["ContentAreaContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["ContentAreaContainer"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["ContentAreaContainer"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, videoTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["ContentAreaContainer"].Description, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, videoDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["ContentAreaContainer"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VideoIframeResponsive__WEBPACK_IMPORTED_MODULE_1__["default"], {
    youtubeID: youTubeID,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["WatchButton"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Assistir"))));
}

/***/ }),

/***/ "./src/components/BannerMain/styles.js":
/*!*********************************************!*\
  !*** ./src/components/BannerMain/styles.js ***!
  \*********************************************/
/*! exports provided: ContentAreaContainer, BannerMainContainer, WatchButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAreaContainer", function() { return ContentAreaContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerMainContainer", function() { return BannerMainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchButton", function() { return WatchButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const ContentAreaContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;
ContentAreaContainer.Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
ContentAreaContainer.Category = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;
ContentAreaContainer.Description = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  @media (max-width: 800px) {
    display: none;
  }
`;
ContentAreaContainer.Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;
const BannerMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({
  backgroundImage
}) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;
const WatchButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  border-color: var(--black);
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  @media (max-width: 800px) {
    display: block;
  }
`;

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
color: var(--white);
border: 1px solid var(--white);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;
}
&:hover,
&:focus {
opacity: .5;
}
`;
/* harmony default export */ __webpack_exports__["default"] = (Button); // export menu

/***/ }),

/***/ "./src/components/Carousel/components/Slider/index.js":
/*!************************************************************!*\
  !*** ./src/components/Carousel/components/Slider/index.js ***!
  \************************************************************/
/*! exports provided: SliderItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderItem", function() { return SliderItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/components/Carousel/components/Slider/index.js";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;
const SliderItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({
  dots: false,
  infinite: false,
  speed: 300,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: true
}, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}), children));

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/components/Carousel/components/VideoCard/index.js":
/*!***************************************************************!*\
  !*** ./src/components/Carousel/components/VideoCard/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Carousel/components/VideoCard/styles.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/components/Carousel/components/VideoCard/index.js";



function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

function VideoCard({
  videoTitle,
  videoURL,
  categoryColor
}) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["VideoCardContainer"], {
    url: image,
    href: videoURL,
    target: "_blank",
    style: {
      borderColor: categoryColor || 'red'
    },
    title: videoTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (VideoCard);

/***/ }),

/***/ "./src/components/Carousel/components/VideoCard/styles.js":
/*!****************************************************************!*\
  !*** ./src/components/Carousel/components/VideoCard/styles.js ***!
  \****************************************************************/
/*! exports provided: VideoCardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCardContainer", function() { return VideoCardContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const VideoCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({
  url
}) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

/***/ }),

/***/ "./src/components/Carousel/index.js":
/*!******************************************!*\
  !*** ./src/components/Carousel/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Carousel/styles.js");
/* harmony import */ var _components_VideoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/VideoCard */ "./src/components/Carousel/components/VideoCard/index.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Slider */ "./src/components/Carousel/components/Slider/index.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/components/Carousel/index.js";





function Carousel({
  ignoreFirstVideo,
  category
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["VideoCardGroupContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, categoryTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    style: {
      backgroundColor: categoryColor || 'red'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, categoryTitle), categoryExtraLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["ExtraLink"], {
    href: categoryExtraLink.url,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, categoryExtraLink.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, videos.map((video, index) => {
    if (ignoreFirstVideo && index === 0) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_3__["SliderItem"], {
      key: video.titulo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VideoCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      videoTitle: video.titulo,
      videoURL: video.url,
      categoryColor: categoryColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./src/components/Carousel/styles.js":
/*!*******************************************!*\
  !*** ./src/components/Carousel/styles.js ***!
  \*******************************************/
/*! exports provided: Title, ExtraLink, VideoCardList, VideoCardGroupContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraLink", function() { return ExtraLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCardList", function() { return VideoCardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCardGroupContainer", function() { return VideoCardGroupContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;
const ExtraLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;
const VideoCardList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;
const VideoCardGroupContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Footer/styles.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/components/Footer/index.js";



function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["FooterBase"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.alura.com.br/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",
    alt: "Logo Alura",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Orgulhosamente criado durante a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.alura.com.br/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Imers\xE3o React da Alura")));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/styles.js ***!
  \*****************************************/
/*! exports provided: FooterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBase", function() { return FooterBase; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const FooterBase = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

/***/ }),

/***/ "./src/components/PageDefault/index.js":
/*!*********************************************!*\
  !*** ./src/components/PageDefault/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu */ "./src/components/menu/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/components/PageDefault/index.js";




const Main = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main`
    background-color: var(--black);
    color: var(--white);
    flex 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    `;

function PageDefault({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PageDefault);

/***/ }),

/***/ "./src/components/menu/Menu.css":
/*!**************************************!*\
  !*** ./src/components/menu/Menu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Menu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/menu/Menu.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Menu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/menu/Menu.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Menu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/menu/Menu.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/menu/index.js":
/*!**************************************!*\
  !*** ./src/components/menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_lutubeLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/lutubeLogo.png */ "./src/assets/img/lutubeLogo.png");
/* harmony import */ var _assets_img_lutubeLogo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_lutubeLogo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.css */ "./src/components/menu/Menu.css");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/components/menu/index.js";




 // troca tag  Por Link, e troca href por to

function Menu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "Menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Logo",
    src: _assets_img_lutubeLogo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "lutube logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
    className: "ButtonLink",
    to: "cadastro/video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, "Novo video"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Menu); // export menu

/***/ }),

/***/ "./src/data/dados_iniciais.json":
/*!**************************************!*\
  !*** ./src/data/dados_iniciais.json ***!
  \**************************************/
/*! exports provided: categorias, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"categorias\":[{\"titulo\":\"Front End\",\"link\":\"https://www.alura.com.br/formacao-front-end\",\"cor\":\"#6BD1FF\",\"link_extra\":{\"text\":\"Formação de Front End na Alura\",\"url\":\"https://www.alura.com.br/cursos-online-front-end\"},\"videos\":[{\"titulo\":\"O que faz uma desenvolvedora front-end? #HipstersPontoTube\",\"url\":\"https://www.youtube.com/watch?v=ZY3-MFxVdEw\"},{\"titulo\":\"SEO com React\",\"url\":\"https://www.youtube.com/watch?v=c8mVlakBESE\"},{\"titulo\":\"Componentização com VanillaJS #AluraMais\",\"url\":\"https://www.youtube.com/watch?v=LatCKpcOMak\"},{\"titulo\":\"Pare de chutar e aprenda a display: inline #01\",\"url\":\"https://www.youtube.com/watch?v=5PS6ku8NzIE\"},{\"titulo\":\"Template String: Interpolando strings com JavaScript #AluraMais\",\"url\":\"https://www.youtube.com/watch?v=ORI_HTXaIw0\"},{\"titulo\":\"Qual é a melhor linguagem de programação? #HipstersPontoTube\",\"url\":\"https://www.youtube.com/watch?v=Uh-GNH-t89w\"},{\"titulo\":\"Novidades do Angular v9\",\"url\":\"https://www.youtube.com/watch?v=34uHo7hFmG0\"},{\"titulo\":\"Base para aprender os frameworks\",\"url\":\"https://www.youtube.com/watch?v=QzDjdlF1BQI\"}]},{\"titulo\":\"Back End\",\"cor\":\"#00C86F\",\"link_extra\":{\"text\":\"Cursos de Back End na Alura\",\"url\":\"https://www.alura.com.br/cursos-online-programacao\"},\"videos\":[{\"titulo\":\"PERCURSO em NÍVEL em ÁRVORE BINÁRIA | Estruturas de Dados #14\",\"url\":\"https://www.youtube.com/watch?v=UOK7nS2E9xM\"},{\"titulo\":\"Coders4Tips - S01E04: GitHub CLI - Uma Nova Experiência no Github!\",\"url\":\"https://www.youtube.com/watch?v=6o6-bKOZOEY\"},{\"titulo\":\"Programei 4 robôs que criam vídeos para mim no YouTube\",\"url\":\"https://www.youtube.com/watch?v=kjhu1LEmRpY\"},{\"titulo\":\"API: Dicionário do Programador\",\"url\":\"https://www.youtube.com/watch?v=vGuqKIRWosk\"},{\"titulo\":\"Usando Git Direito\",\"url\":\"https://www.youtube.com/watch?v=6OokP-NE49k\"}]},{\"titulo\":\"Data Science e Inteligência Artificial\",\"cor\":\"#9cd33b\",\"link_extra\":{\"text\":\"Cursos de Data Science na Alura\",\"url\":\"https://www.alura.com.br/formacao-data-science\"},\"videos\":[{\"titulo\":\"Teste de Turing\",\"url\":\"https://www.youtube.com/watch?v=BaPGU4JWa34\"},{\"titulo\":\"O que é Data Science?\",\"url\":\"https://www.youtube.com/watch?v=5b9Z8toVaAU&t=9s\"},{\"titulo\":\"Melhor forma de aprender Python\",\"url\":\"https://www.youtube.com/watch?v=Gojqw9BQ5qY\"},{\"titulo\":\"Como ingressar no mercado de Data Science?\",\"url\":\"https://www.youtube.com/watch?v=gxyjGmOV540\"}]},{\"titulo\":\"Filmes\",\"cor\":\"orange\",\"videos\":[{\"titulo\":\"Interestellar\",\"url\":\"https://www.youtube.com/watch?v=frD_IiY_A3E\"},{\"titulo\":\"Gattaca\",\"url\":\"https://www.youtube.com/watch?v=Dl0tYLbrhhs\"},{\"titulo\":\"A Chegada\",\"url\":\"https://www.youtube.com/watch?v=rNciXGzYZms\"},{\"titulo\":\"Feitiço do Tempo\",\"url\":\"https://www.youtube.com/watch?v=zi8d69P9NvI\"}]},{\"titulo\":\"Games\",\"cor\":\"red\",\"link_extra\":{\"text\":\"Formação de Jogos na Alura\",\"url\":\"https://www.alura.com.br/formacao-jogos-unity\"},\"videos\":[{\"titulo\":\"Final Fantasy 7\",\"url\":\"https://www.youtube.com/watch?v=I_ATSCTnUD8\"},{\"titulo\":\"Assassins Creed Valhalla\",\"url\":\"https://www.youtube.com/watch?v=KDfdjB9uL0U\"},{\"titulo\":\"God of War 4\",\"url\":\"https://www.youtube.com/watch?v=FyIwEFXOcaE\"},{\"titulo\":\"Resident Evil 8\",\"url\":\"https://www.youtube.com/watch?v=JSapXD9vxYA\"},{\"titulo\":\"Pokémon Let's Go Pikachu/Eevee\",\"url\":\"https://www.youtube.com/watch?v=L56q_k2ydrs\"}]},{\"titulo\":\"Aprendendo a aprender tecnologia\",\"cor\":\"#6b5be2\",\"link_extra\":{\"text\":\"Curso sobre aprendizado na Alura\",\"url\":\"https://alura.com.br/curso-online-aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento\"},\"videos\":[{\"titulo\":\"Como estudar melhor?\",\"url\":\"https://www.youtube.com/watch?v=Is6c9KSGCbk&feature=youtu.be\"},{\"titulo\":\"Faculdade\",\"url\":\"https://www.youtube.com/watch?v=jw06H8esyzQ&feature=youtu.be\"},{\"titulo\":\"Frameworks\",\"url\":\"https://www.youtube.com/watch?v=QzDjdlF1BQI\"},{\"titulo\":\"A mágica do Aprendizado\",\"url\":\"https://www.youtube.com/watch?v=oTEXzpfEpPY\"},{\"titulo\":\"Como aprender a programar?\",\"url\":\"https://www.youtube.com/watch?v=MwCx2qKdbDw&feature=youtu.be\"}]}]}");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_cadastro_Video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cadastro/Video */ "./src/pages/cadastro/Video/index.js");
/* harmony import */ var _pages_cadastro_Categoria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/cadastro/Categoria */ "./src/pages/cadastro/Categoria/index.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "/cadastro/categoria",
  component: _pages_cadastro_Categoria__WEBPACK_IMPORTED_MODULE_6__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "/cadastro/video",
  component: _pages_cadastro_Video__WEBPACK_IMPORTED_MODULE_5__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "/",
  component: _pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
  exact: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 31
    }
  }, " pagina 404 "),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Carousel */ "./src/components/Carousel/index.js");
/* harmony import */ var _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/dados_iniciais.json */ "./src/data/dados_iniciais.json");
var _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/dados_iniciais.json */ "./src/data/dados_iniciais.json", 1);
/* harmony import */ var _components_BannerMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BannerMain */ "./src/components/BannerMain/index.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/pages/Home/index.js";







function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      background: '#141414'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BannerMain__WEBPACK_IMPORTED_MODULE_5__["default"], {
    videoTitle: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[0].videos[0].titulo,
    videoDescription: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[0].videos[0].titulo,
    url: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[0].videos[0].url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }
  }), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ignoreFirstVideo: true,
    category: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ignoreFirstVideo: true,
    category: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[1],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ignoreFirstVideo: true,
    category: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[2],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ignoreFirstVideo: true,
    category: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[3],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ignoreFirstVideo: true,
    category: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[4],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ignoreFirstVideo: true,
    category: _data_dados_iniciais_json__WEBPACK_IMPORTED_MODULE_4__.categorias[5],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }
  }));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/cadastro/Categoria/index.js":
/*!***********************************************!*\
  !*** ./src/pages/cadastro/Categoria/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/PageDefault */ "./src/components/PageDefault/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/pages/cadastro/Categoria/index.js";




function CadastroCategoria() {
  const [categorias, setCategorias] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['Teste']);
  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: '#000'
  };
  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(valoresIniciais);

  function setValue(chave, valor) {
    setValues({ ...values,
      [chave]: valor // home: 'valor

    });
  }

  function handleChange(infosDoEvento) {
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageDefault__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Cadastro de Categoria: ", values.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    style: {
      backgound: values.cor
    },
    onSubmit: function handleSUbmit(infosDoEvento) {
      infosDoEvento.preventDefault();
      setValue([...categorias, values]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Nome da Categoria:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "nome",
    value: values.name,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Descri\xE7\xE3o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    type: "text",
    name: "descricao",
    value: values.descricao,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Cor:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "color",
    name: "cor",
    value: values.cor,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, "Cadastrar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, categorias.map((categoria, indice) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: `${categoria}${indice}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, categoria.nome);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Ir para home"));
}

/* harmony default export */ __webpack_exports__["default"] = (CadastroCategoria);

/***/ }),

/***/ "./src/pages/cadastro/Video/index.js":
/*!*******************************************!*\
  !*** ./src/pages/cadastro/Video/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/PageDefault */ "./src/components/PageDefault/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/lucas/\xC1rea de Trabalho/LuTube/lutube/src/pages/cadastro/Video/index.js";




function CadastroVideo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageDefault__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Cadastro de Video"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/cadastro/Categoria",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Cadastrar Categoria"));
}

/* harmony default export */ __webpack_exports__["default"] = (CadastroVideo);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/lucas/Área de Trabalho/LuTube/lutube/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/lucas/Área de Trabalho/LuTube/lutube/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/lucas/Área de Trabalho/LuTube/lutube/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map