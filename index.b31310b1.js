// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _text = require("../src/components/text");
var _button = require("../src/components/button");
var _hands = require("../src/components/hands");
var _countdown = require("../src/components/countdown");
var _star = require("../src/components/star");
var _router = require("../src/router");
var _state = require("../src/state");
var _play = require("./components/play");
(function main() {
    _state.state.getData();
    const rootEl = document.querySelector(".root");
    _play.myPlay();
    _router.initRouter(rootEl);
})();

},{"../src/components/text":"8YEyP","../src/components/button":"3uBrB","../src/components/hands":"lFlAb","../src/components/countdown":"hQ5RQ","../src/components/star":"1a1ti","../src/router":"b2iia","../src/state":"28XHA","./components/play":"1oZhd"}],"8YEyP":[function(require,module,exports) {
class CustomText extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        var style = document.createElement("style");
        style.innerHTML = `\n    .title{\n      \n      font-size: 30px;\n      font-weight: 700;\n      line-height: 50px;\n      color: #009048;\n      text-align:center;\n    }\n    \n    `;
        var shadow = this.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(style);
        var text = document.createElement("h1");
        text.classList.add("title");
        text.textContent = this.textContent;
        shadow.appendChild(text);
    }
}
customElements.define("custom-text", CustomText);

},{}],"3uBrB":[function(require,module,exports) {
class CustomButton extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    listeners() {
        this.shadow.querySelector(".custom-button").addEventListener("click", (e)=>{
            const event = new CustomEvent("clickedButton");
            this.dispatchEvent(event);
        });
    }
    render() {
        const button = document.createElement("button");
        button.classList.add("custom-button");
        button.textContent = this.textContent;
        const style = document.createElement("style");
        style.innerHTML = `\n    .custom-button{\n      box-sizing:border-box;\n      width:100%;\n      height:100%;\n      color:#d8fcfc;\n      background-color:#006cfc;\n      margin:0 auto;\n      font-family:  'Hind Siliguri', sans-serif;\n      font-size:45px;\n      border:10px solid #001997;\n      border-radius:10px; \n    }\n    `;
        this.shadow.appendChild(style);
        this.shadow.appendChild(button);
        this.listeners();
    }
}
customElements.define("custom-button", CustomButton);

},{}],"lFlAb":[function(require,module,exports) {
const piedraImg = require("url:../../assets/piedra.svg");
const papelImg = require("url:../../assets/papel.svg");
const tijeraImg = require("url:../../assets/tijera.svg");
class Hands extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.tag = this.getAttribute("tag");
        this.myPlay = this.tag;
    }
    connectedCallback() {
        this.selectHands();
        this.render();
    }
    selectHands() {
        if (this.tag == "papel") this.imgURL = papelImg;
        if (this.tag == "piedra") this.imgURL = piedraImg;
        if (this.tag == "tijera") this.imgURL = tijeraImg;
    }
    listeners() {
        const hand = this.shadow.querySelector(`.${this.tag}`);
        hand.addEventListener("click", (e)=>{
            const event = new CustomEvent("change", {
                detail: {
                    myPlay: this.myPlay
                }
            });
            this.dispatchEvent(event);
        });
    }
    render() {
        const rootEl = document.createElement("div");
        rootEl.className = "root";
        rootEl.innerHTML = `\n    <img class="${this.tag}" src="${this.imgURL}" alt="this is a ${this.tag}">\n    `;
        const style = document.createElement("style");
        style.innerHTML = `\n    .root{\n      width:80px;\n      height:175px;\n    }\n    .piedra,.papel,.tijera{\n      width:80px;\n      height:175px; \n    }.\n    \n    `;
        this.shadow.appendChild(style);
        this.shadow.appendChild(rootEl);
        this.listeners();
    }
}
customElements.define("hands-el", Hands);

},{"url:../../assets/piedra.svg":"3npxx","url:../../assets/papel.svg":"esUuT","url:../../assets/tijera.svg":"lxIwO"}],"3npxx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.1eeb0164.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"esUuT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.e49804d3.svg";

},{"./helpers/bundle-url":"8YnfL"}],"lxIwO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijera.4b8da3cc.svg";

},{"./helpers/bundle-url":"8YnfL"}],"hQ5RQ":[function(require,module,exports) {
class Countdown extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.initCount = parseInt(this.getAttribute("count"), 10);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const container = document.createElement("div");
        container.className = "container";
        container.innerHTML = `\n      <p class="number">${this.initCount}</p>\n      `;
        let p = container.querySelector(".number");
        let counter = this.initCount;
        const intervalID = setInterval(()=>{
            counter--;
            p.textContent = counter.toString();
            if (counter < 0) {
                clearInterval(intervalID);
                container.style.display = "none";
            }
        }, 1000);
        const style = document.createElement("style");
        style.innerHTML = `\n      .container{\n        margin-top:10px;\n        margin-left:10%;\n          width:245px;\n          height:245px;\n          border:23px solid black;\n          border-radius:50%;\n          display:flex;\n          flex-direction:column;\n          align-items:center;\n          justify-content:center;\n      }\n\n      @media(min-width:900px){\n        .container{\n         \n          \n          margin-top:80px;\n          margin-left:40%;\n          width:245px;\n          height:245px;\n         \n        }\n      }\n\n      .number{\n          font-size:100px;\n          margin:0px;\n      }\n          `;
        this.shadow.appendChild(style);
        this.shadow.appendChild(container);
    }
}
customElements.define("custom-countdown", Countdown);

},{}],"1a1ti":[function(require,module,exports) {
const ganador = require("url:../../../src/assets/ganador.svg");
const perdedor = require("url:../../../src/assets/perdedor.svg");
const empate = require("url:../../../src/assets/empate.svg");
class StarComp extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.tag = this.getAttribute("tag");
    }
    connectedCallback() {
        this.selectImage();
        this.render();
    }
    selectImage() {
        if (this.tag == "Ganaste") this.imgUrl = ganador;
        if (this.tag == "Perdiste") this.imgUrl = perdedor;
        if (this.tag == "Empate") this.imgUrl = empate;
    }
    render() {
        const rootEl = document.createElement("div");
        rootEl.className = "root";
        const width = this.getAttribute("width") || "80px";
        const height = this.getAttribute("height") || "175px";
        const text = this.textContent;
        rootEl.innerHTML = `\n      <img class="star" src="${this.imgUrl}" alt="this is a star with a result inside">\n      <p class="texto">${text}</p>\n      `;
        const style = document.createElement("style");
        style.innerHTML = `\n      .root{\n        width:${width};\n        height:${height};\n        position:relative;\n      }\n      .star{\n        width:${width};\n        height:${height};\n      }\n      .texto{\n        margin:0px;\n        position:absolute;\n        top:90px;\n        left:70px;\n        font-size:40px;\n        color:"#000";\n      }\n      `;
        this.shadow.appendChild(style);
        this.shadow.appendChild(rootEl);
    }
}
customElements.define("star-el", StarComp);

},{"url:../../../src/assets/ganador.svg":"g4LVr","url:../../../src/assets/perdedor.svg":"2qS9l","url:../../../src/assets/empate.svg":"66ccG"}],"g4LVr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "ganador.8baa4951.svg";

},{"./helpers/bundle-url":"8YnfL"}],"2qS9l":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "perdedor.ca7050a3.svg";

},{"./helpers/bundle-url":"8YnfL"}],"66ccG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "empate.2fbf50e6.svg";

},{"./helpers/bundle-url":"8YnfL"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcome = require("../src/pages/welcome");
var _rules = require("../src/pages/rules");
var _game = require("../src/pages/game");
var _results = require("./pages/results");
function initRouter(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("el handle recibió  una nueva ruta", route);
        const contenedorEl = document.querySelector(".contenedor");
        const routes = [
            {
                path: /\/welcome/,
                component: _welcome.welcomePage
            },
            {
                path: /\//,
                component: _welcome.welcomePage
            },
            {
                path: /\/rules/,
                component: _rules.rulesPage
            },
            {
                path: /\/game/,
                component: _game.initGamePage
            },
            {
                path: /\/results/,
                component: _results.resultsPage
            }, 
        ];
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"../src/pages/welcome":"bFh5y","../src/pages/rules":"dOTNr","../src/pages/game":"d7f6n","./pages/results":"8GXDd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bFh5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcomePage", ()=>welcomePage
);
function welcomePage(params) {
    const welcome = document.createElement("section");
    welcome.innerHTML = `\n    <div class="welcome-container">\n      <div class="welcome-title">\n          <custom-text>Piedra, Papel, ó Tijera</custom-text>\n      </div>\n      <div class="welcome-button">\n          <custom-button class="button">Empezar</custom-button>\n      </div>\n      <div class="welcome-hands">\n      <hands-el tag="tijera" class="hands" ></hands-el>\n      <hands-el tag="piedra" class="hands"></hands-el>\n      <hands-el tag="papel" class="hands"></hands-el>\n      </div>\n    </div>\n    `;
    const style = document.createElement("style");
    style.innerHTML = `\n\n.welcome-container{\n  display: flex;\n   flex-direction:column;\n   \n   align-items: center;\n   width:100%;\n   height:100vh;\n \n    \n}\n  .welcome-title{\n   margin-top:15%;\n\n  }\n  @media(min-width:900px){\n   .welcome-title{\n  margin-top:5%;\n    }\n  }\n  .hands{\n    width:100px;\n    heigth:200px;\n  }\n    .welcome-button{\n      margin-top:30%;\n      display: flex;\n      justify-content:center;\n      aligh-items: center;\n      \n      width:330px;\n      height:90px;\n    }\n    @media(min-width:900px){\n      .welcome-button{\n        margin-top:10%;\n      }\n    }\n    .welcome-hands{\n      margin-top:40%;\n      width:373px;\n      height:130px;\n      display:flex;\n      align-items:center;\n      justify-content:space-between;\n    }\n\n@media(min-width:900px){\n .welcome-hands{\nmargin-top:10%;\n  }\n}\n\n    `;
    welcome.appendChild(style);
    const boton = welcome.querySelector(".button");
    boton.addEventListener("click", ()=>{
        params.goTo("/rules");
    });
    return welcome;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dOTNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rulesPage", ()=>rulesPage
);
function rulesPage(params) {
    const rulesPage1 = document.createElement("section");
    rulesPage1.innerHTML = `\n      <div class="rules-container">\n          <div class="rules-text">\n              <custom-text tag="h3" size="47px">\n              Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n              </custom-text>\n          </div>\n          <div class="rules-button">\n              <custom-button class="button">¡Jugar!</custom-button>\n          </div>\n          <div class="rules-hands">\n              <hands-el tag="tijera" class= "hands" ></hands-el>\n              <hands-el tag="piedra" class= "hands" ></hands-el>\n              <hands-el tag="papel" class= "hands" ></hands-el>\n          </div>\n      </div>\n      `;
    const style = document.createElement("style");
    style.innerHTML = `\n    .rules-container{\n      display: flex;\n      flex-direction:column;\n      align-items: center;\n    }\n    \n    .hands{\n      width:100px;\n      heigth:200px;\n    }\n    .rules-text{\n   \n      margin-top:5%;\n      width:384px;\n      height:250px;\n     \n    }\n    @media(min-width:900px){\n      .rules-text{\n        margin-top:5%;\n      }\n    }\n    .rules-button{\n      margin-top:20%;\n      display: flex;\n      justify-content:center;\n      aligh-items: center;\n     \n      width:322px;\n      height:87px;\n    }\n    @media(min-width:900px){\n      .rules-button{\n        margin-top:3%;\n      }\n    }\n    .rules-hands{\n      margin-top:23%;\n  \n    \n      width:373px;\n      height:130px;\n      display:flex;\n      align-items:center;\n      justify-content:space-between;\n    }\n    @media(min-width:900px){\n      .rules-hands{\n        margin-top:5%;\n      }\n    }\n    `;
    rulesPage1.appendChild(style);
    const boton = rulesPage1.querySelector(".button");
    boton.addEventListener("click", ()=>{
        params.goTo("/game");
    });
    return rulesPage1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d7f6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGamePage", ()=>initGamePage
);
var _state = require("../../state");
const piedraImg = require("url:../../assets/piedra.svg");
const papelImg = require("url:../../assets/papel.svg");
const tijeraImg = require("url:../../assets/tijera.svg");
function initGamePage(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n  <div class="container">\n    <div class="computer-container">\n    </div>\n\n    <div class="countdown-container">\n      <custom-countdown class= "time" count="3"></custom-countdown>\n    </div>\n\n    <div class="my-play">\n      <hands-el class="hands" class="tijera" tag="tijera"></hands-el>\n      <hands-el class="hands" class="piedra"tag="piedra"></hands-el>\n      <hands-el class="hands" class="papel"tag="papel"></hands-el>\n    </div>\n  </div>\n  `;
    const style = document.createElement("style");
    style.innerHTML = `\n .container{\n  display: flex;\n  justify-content: space-around;\n  min-width: 255px;\n  align-items: flex-end;\n }\n @media(min-width:900px){\n  .container{\n    \n    width:100%;\n  height:100%;\n  margin-top:10%;\n    margin-left:30%;\n    width:500px;\n    height:250px;\n  }\n }\n .hands{\n  width:100px;\n  heigth:200px;\n }\n .hands:hover{\n margin-bottom:20%;\n }\n\n  .countdown-container{\n    margin-top:20px;\n    margin-right:15%;\n  }\n  @media(min-width:900px){\n    .countdown-container{\n      padding-top:80px;\n      margin-top:80px;\n      margin-right:50%;\n    }\n  }\n  .my-play{\n    width:375px;\n    height:200px;\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n    position:absolute;\n    bottom:0px;\n  }\n  \n  .computer-container{\n    width:100%;\n    height: 100%;\n    position:absolute;\n    top:0;\n    \n  }\n  .computer-hand{\n    width:100px;\n    heigth:200px;\n    transform:rotateX(180deg) scaleY(1.5) translateY(-30px);\n    position:absolute;\n    left:45%; \n  }\n\n  \n  `;
    div.appendChild(style);
    (function selectMove() {
        const containerHands = div.querySelector(".my-play");
        const handsEls = div.querySelectorAll("hands-el");
        for (const hand of handsEls){
            hand.addEventListener("change", (e)=>{
                computerMove();
                _state.state.myMove(e.detail.myPlay);
                style.innerHTML = `\n        .container{\n          display: flex;\n          justify-content: space-around;\n          min-width: 255px;\n          align-items: flex-end;\n         }\n         @media(min-width:700px){\n          .container{\n            \n            width:100%;\n          height:100%;\n          margin-top:10%;\n            margin-left:30%;\n            width:500px;\n            height:250px;\n          }\n         }\n         .hands{\n          width:100px;\n          heigth:200px;\n         }\n         .hands:hover{\n         margin-bottom:20%;\n         }\n        \n          .countdown-container{\n            display:none;\n            margin-top:20px;\n            margin-right:15%;\n          }\n          @media(min-width:700px){\n            .countdown-container{\n              padding-top:80px;\n              margin-top:80px;\n              margin-right:50%;\n            }\n          }\n          .my-play{\n            width:375px;\n            height:200px;\n            display:flex;\n            align-items:center;\n            justify-content:space-around;\n            position:absolute;\n            bottom:0px;\n          }\n          \n          .computer-container{\n            width:100%;\n            height: 100%;\n            position:absolute;\n            top:0;\n            \n          }\n          .computer-hand{\n            width:100px;\n            heigth:200px;\n            transform:rotateX(180deg) scaleY(1.5) translateY(-30px);\n            position:absolute;\n            left:45%; \n          }\n        \n        \n        `;
                setTimeout(()=>{
                    containerHands.innerHTML = `\n          <hands-el tag="${e.detail.myPlay}"></hands-el>\n          `;
                    goToResults();
                }, 1500);
            });
            _state.state.resetMyPlay();
        }
    })();
    function goToResults() {
        setTimeout(()=>{
            params.goTo("/results");
        }, 1000);
    }
    function computerMove() {
        let tijera = 0;
        let piedra = 1;
        let papel = 2;
        const computerContainer = div.querySelector(".computer-container");
        const computerMove1 = Math.floor(Math.random() * 3 + 0);
        if (computerMove1 == tijera) {
            _state.state.computerMove("tijera");
            computerContainer.innerHTML = `\n        <hands-el class="computer-hand" tag="tijera" ></hands-el>\n        `;
        }
        if (computerMove1 == piedra) {
            _state.state.computerMove("piedra");
            computerContainer.innerHTML = `\n          <hands-el class="computer-hand" tag="piedra"></hands-el>\n          `;
        }
        if (computerMove1 == papel) {
            _state.state.computerMove("papel");
            computerContainer.innerHTML = `\n        <hands-el class="computer-hand" tag="papel"></hands-el>\n        `;
        }
    }
    (function returnRules() {
        setTimeout(()=>{
            const currentState = _state.state.getState();
            const myPlay = currentState.currentGame.myPlay;
            const gameContainer = div.querySelector(".container");
            if (myPlay == "") params.goTo("/rules");
        }, 4000);
    })();
    return div;
}

},{"../../state":"28XHA","url:../../assets/piedra.svg":"3npxx","url:../../assets/papel.svg":"esUuT","url:../../assets/tijera.svg":"lxIwO","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: ""
        },
        history: []
    },
    listeners: [],
    getData () {
        const localData = localStorage.getItem("new-move");
        const localDataParse = JSON.parse(localData);
        if (localDataParse == null) {
            const currentState = this.getState();
            this.setState(currentState);
        } else this.setState(localDataParse);
    },
    getState () {
        return this.data;
    },
    resetMyPlay () {
        const currentState = this.getState();
        currentState.currentGame.myPlay = "";
    },
    getScore () {
        let ganados = 0;
        let perdidos = 0;
        let history = state.data.history;
        console.log(history);
        for (const s of history){
            if (this.whoWins(s.myPlay, s.computerPlay) == "Ganaste") ganados++;
            if (this.whoWins(s.myPlay, s.computerPlay) == "Perdiste") perdidos++;
        }
        return {
            ganados,
            perdidos
        };
    },
    setState (newState) {
        this.data = newState;
        for (const callback of this.listeners)callback();
        localStorage.setItem("new-move", JSON.stringify(newState));
        console.log("Soy el state, he cambiado", this.data);
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    computerMove (move) {
        const currentState = this.getState();
        currentState.currentGame.computerPlay = move;
    },
    myMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        this.pushToHistory(currentState);
    },
    pushToHistory (currentState) {
        const myPlay = currentState.currentGame.myPlay;
        const computerPlay = currentState.currentGame.computerPlay;
        currentState.history.push({
            myPlay: myPlay,
            computerPlay: computerPlay
        });
        this.setState(currentState);
    },
    whoWins (myPlay, computerPlay) {
        if (myPlay == "piedra") {
            if (computerPlay == "papel") return "Perdiste";
            if (computerPlay == "tijera") return "Ganaste";
            if (computerPlay == "piedra") return "Empate";
        }
        if (myPlay == "tijera") {
            if (computerPlay == "papel") return "Ganaste";
            if (computerPlay == "piedra") return "Perdiste";
            if (computerPlay == "tijera") return "Empate";
        }
        if (myPlay == "papel") {
            if (computerPlay == "piedra") return "Ganaste";
            if (computerPlay == "tijera") return "Perdiste";
            if (computerPlay == "papel") return "Empate";
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8GXDd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resultsPage", ()=>resultsPage
);
var _state = require("../../state");
function resultsPage(params) {
    function resultGame() {
        const currentState = _state.state.getState();
        const myPlay = currentState.currentGame.myPlay;
        const computerPlay = currentState.currentGame.computerPlay;
        return _state.state.whoWins(myPlay, computerPlay);
    }
    function selectfondo() {
        const result = resultGame();
        let background = "";
        if (result == "Ganaste") background = "#1EF962";
        if (result == "Perdiste") background = "#F91E3C";
        if (result == "Empate") background = "#F0F91E";
        return background;
    }
    const background = selectfondo();
    console.log(background);
    const result = resultGame();
    const myScore = _state.state.getScore().ganados;
    const computerScore = _state.state.getScore().perdidos;
    const resultsPage1 = document.createElement("section");
    resultsPage1.className = "results";
    resultsPage1.innerHTML = `\n  <div class="result-container">\n    <div class="result-imagen">\n    <star-el tag="${result}" width="280px" height="260px">${result}</star-el>\n    </div>\n    <div class="result-score">\n        <div class="result-title">\n            <custom-text size="55px">Score</custom-text>\n        </div>\n        <div class="result">\n            <custom-text size="45px">Vos: ${myScore}</custom-text>\n              <custom-text size="45px">Máquina:${computerScore}</custom-text>\n        </div>\n    </div>\n    <div class="result-button">\n        <custom-button class="button">Volver a jugar</custom-button>\n    </div>\n  </div>\n  `;
    const style = document.createElement("style");
    style.innerHTML = `\n  \n    .result-container{\n        width:100%;\n        height:100vh;\n        padding:0;\n        background-color: ${background};\n       \n        display:flex;\n        flex-direction:column;\n        align-items:center;\n    }\n    .result-imagen{\n        width:300px;\n        height:290px;\n        margin-bottom:10px;\n    }\n    .result-score{\n      width:259px;\n      height:280px;\n      display:flex;\n      flex-direction:column;\n      align-items:center;\n      justify-content:space-evenly;\n      margin-bottom:20px;\n      border:10px solid #000;\n      border-radius:10px;\n      background: #ffffff;\n    }\n    .result{\n     \n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n    }\n  \n    .result-button{\n      width:330px;\n      height:90px;\n    }\n  `;
    resultsPage1.appendChild(style);
    const boton = resultsPage1.querySelector(".button");
    boton.addEventListener("click", ()=>{
        params.goTo("/src/pages/rules/index.ts");
    });
    return resultsPage1;
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1oZhd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "myPlay", ()=>myPlay
);
function myPlay() {
    customElements.define("my-play", class extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8uBhv","4aleK"], "4aleK", "parcelRequiree81a")

//# sourceMappingURL=index.b31310b1.js.map
