module.exports=function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),i=r(u),a=n(2),o=r(a),f={definedFactories:{},define:function(e){var t=new i.default(e);return this.definedFactories[e]={default:t},t},defineTrait:function(e,t){var n=this.definedFactories[e];if(!n)throw new Error("undefined factory name "+e);var r=o.default.cloneDeep(n.default);return this.definedFactories[e][t]=r,r},build:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";return this.definedFactories[e][n].build(t)}};t.default=f,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),o=r(a),f=function(){function e(t){u(this,e),this.name=t,this.attributes={}}return i(e,[{key:"attr",value:function(e,t){return this.attributes[e]=t,this}},{key:"build",value:function(e){var t=this,n=o.default.cloneDeep(this.attributes);return o.default.each(n,function(e,r){o.default.isFunction(e)&&(n[r]=e.apply(t))}),o.default.merge(n,e)}}]),e}();t.default=f,e.exports=t.default},function(e,t){e.exports=require("lodash")}]);