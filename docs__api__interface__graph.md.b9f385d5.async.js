(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{q33s:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BlwA");\n/* harmony import */ var dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2NSI");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "graphoptions-x6-\\u914D\\u7F6E\\u9879"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#graphoptions-x6-\\u914D\\u7F6E\\u9879",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "Graph.Options X6 \\u914D\\u7F6E\\u9879"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u9ED8\\u8BA4\\u7684 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "https://x6.antv.vision/zh/docs/api/graph/graph"\n  }, "Graph.Options"), " \\u914D\\u7F6E\\u9879"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "const defaultOptions: Graph.Options = {\\n  // \u8282\u70b9\u662f\u5426\u53ef\u65cb\u8f6c\\n  rotating: false,\\n  // \u8282\u70b9\u662f\u5426\u53ef\u8c03\u6574\u5927\u5c0f\\n  resizing: false,\\n  // \u8282\u70b9\u8fde\u7ebf\u89c4\u5219\u914d\u7f6e\uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/api/graph/interaction#connecting\uff09\\n  connecting: {\\n    snap: true,\\n    dangling: false,\\n    highlight: false,\\n    connectionPoint: \'rect\',\\n    router: { name: \'er\' },\\n    connector: {\\n      name: \'rounded\',\\n      args: {\\n        radius: 15,\\n      },\\n    },\\n  },\\n  // \u753b\u5e03\u80cc\u666f\uff0c\u652f\u6301\u989c\u8272/\u56fe\u7247/\u6c34\u5370\u7b49\uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/tutorial/basic/background\uff09\\n  background: {},\\n  // \u7f51\u683c\u914d\u7f6e\uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/tutorial/basic/grid\uff09\\n  grid: {\\n    visible: true,\\n  },\\n  // \u70b9\u9009/\u6846\u9009\u914d\u7f6e\uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/tutorial/basic/selection\uff09\\n  selecting: {\\n    enabled: true,\\n    multiple: true,\\n    selectCellOnMoved: true,\\n    showNodeSelectionBox: false,\\n    movable: true,\\n  },\\n  // \u5bf9\u9f50\u7ebf\u914d\u7f6e\uff0c\u8f85\u52a9\u79fb\u52a8\u8282\u70b9\u6392\u7248\uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/tutorial/basic/snapline\uff09\\n  snapline: {\\n    enabled: false,\\n  },\\n  // \u64a4\u9500/\u91cd\u505a\u80fd\u529b\uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/tutorial/basic/history\uff09\\n  history: {\\n    enabled: false,\\n  },\\n  // \u526a\u5207\u677f\uff0c\u652f\u6301\u8de8\u753b\u5e03\u7684\u590d\u5236/\u7c98\u8d34\uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/tutorial/basic/clipboard\uff09\\n  clipboard: {\\n    enabled: true,\\n    useLocalStorage: true,\\n  },\\n  // \u4f7f\u753b\u5e03\u5177\u5907\u6eda\u52a8\u3001\u5e73\u79fb\u3001\u5c45\u4e2d\u3001\u7f29\u653e\u7b49\u80fd\u529b\uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/tutorial/basic/scroller\uff09\\n  scroller: {\\n    enabled: false,\\n  },\\n  // \u6eda\u8f6e\u7f29\u653e \uff08\u8be6\u7ec6\u6587\u6863\uff1ahttps://X6.antv.vision/zh/docs/tutorial/basic/mousewheel\uff09\\n  mousewheel: {\\n    enabled: true,\\n    minScale: MIN_ZOOM,\\n    maxScale: MAX_ZOOM,\\n    factor: 1.1,\\n    modifiers: [\'ctrl\', \'meta\'],\\n  },\\n  /** \u666e\u901a\u753b\u5e03, \u652f\u6301\u62d6\u62fd\u5e73\u79fb */\\n  panning: {\\n    enabled: true,\\n  },\\n  /** \u7f29\u653e\u53c2\u6570 */\\n  scaling: {\\n    min: MIN_ZOOM,\\n    max: MAX_ZOOM,\\n  },\\n  /** keyboad */\\n  keyboard: {\\n    enabled: true,\\n  },\\n  /** \u5b9a\u5236\u8282\u70b9\u548c\u8fb9\u7684\u4ea4\u4e92\u884c\u4e3a */\\n  interacting: {\\n    /** \u8282\u70b9\u9ed8\u8ba4\u53ef\u4ee5\u88ab\u79fb\u52a8 */\\n    nodeMovable: true,\\n    /** \u8fb9\u4e0a\u6807\u7b7e\u9ed8\u8ba4\u4e0d\u53ef\u4ee5\u88ab\u79fb\u52a8 */\\n    edgeLabelMovable: false,\\n  },\\n  async: false,\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "igraphconfig"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#igraphconfig",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IGraphConfig"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "// \u5982\u4f55\u5f15\u7528\\nimport { IGraphConfig } from \'@antv/xflow\'\\n\\n// \u7c7b\u578b\u8bf4\u660e\\nexport interface IGraphConfig {\\n  /** xflow\u5b9e\u4f8bid */\\n  xflowInstanceId: string\\n  /** \u753b\u5e03\u5b9e\u4f8bid */\\n  graphId: string\\n  /** \u753b\u5e03portal viewid */\\n  nodeViewId: string\\n  /** \u753b\u5e03\u7684options */\\n  x6Options: X6Graph.Options\\n  /** \u753b\u5e03\u7684root\u8282\u70b9 */\\n  rootContainer: HTMLElement\\n  /** \u753b\u5e03\u7684dom\u8282\u70b9 */\\n  graphContainer: HTMLElement\\n  /** \u81ea\u5b9a\u8282\u70b9\u7684\u6e32\u67d3 */\\n  nodeRender: Map<string, React.FC<any>>\\n  /** \u81ea\u5b9a\u4e49\u8fb9label\u7684\u6e32\u67d3 */\\n  edgeRender: Map<string, React.FC<any>>\\n  /** \u81ea\u5b9a\u4e49X6\u4e8b\u4ef6 */\\n  events: NsGraph.IEvent[]\\n  /** \u89e3\u6790node\u7c7b\u578b\uff1a\u4ecenodeConfig \u4e2d\u89e3\u6790 ReactComponent\u7c7b\u578b */\\n  nodeTypeParser: (nodeConfig: NsGraph.INodeConfig) => string\\n  /** \u89e3\u6790edge\u7c7b\u578b\uff1a\u4eceedgeConfig \u4e2d\u89e3\u6790 ReactComponent\u7c7b\u578b */\\n  edgeTypeParser: (edgeConfig: NsGraph.IEdgeConfig) => string\\n}",\n    lang: "tsx"\n  })));\n});\n\n//# sourceURL=webpack:///./docs/api/interface/graph.md?')}}]);