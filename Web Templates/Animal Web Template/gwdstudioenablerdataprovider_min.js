(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var c="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},d;if("function"==typeof Object.setPrototypeOf)d=Object.setPrototypeOf;else{var e;a:{var f={a:!0},g={};try{g.__proto__=f;e=g.a;break a}catch(a){}e=!1}d=e?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var h=d;function k(a,b){b=void 0===b?null:b;var l=document.createEvent("CustomEvent");l.initCustomEvent("ready",!0,!0,b);a.dispatchEvent(l)};function m(){var a=HTMLElement.call(this)||this;a.g=null;a.i=!1;a.h=[];studio.utils.EnablerAccessor.loadModuleWhenReady(studio.module.ModuleId.CONFIGURABLE,a.l.bind(a));return a}var n=HTMLElement;m.prototype=c(n.prototype);m.prototype.constructor=m;if(h)h(m,n);else for(var p in n)if("prototype"!=p)if(Object.defineProperties){var q=Object.getOwnPropertyDescriptor(n,p);q&&Object.defineProperty(m,p,q)}else m[p]=n[p];m.prototype.getData=function(){return this.g};m.prototype.isDataLoaded=function(){return this.i};
m.prototype.addDataTransformer=function(a){this.h.push(a)};m.prototype.j=function(){var a=this;this.g&&this.h.forEach(function(b){"function"==typeof b&&b.call(a,a.g,a)});this.i=!0;k(this,this.g)};m.prototype.l=function(){var a=this;studio.sdk.configurable.getConfiguration(function(b){a.g=b;a.g&&studio.sdk.configurable.binding.addValueChangeListener(a.g,a.j.bind(a));a.j()})};customElements.define("gwd-studio-enabler-data-provider",m);}).call(this);
