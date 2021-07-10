(self.AMP=self.AMP||[]).push({n:"amp-experiment",ev:"0.1",l:true,v:"2105210438003",m:0,f:(function(AMP,_){
'use strict';var f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function h(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}h(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var p={a:!0},q={};try{q.__proto__=p;n=q.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=m;var u=Object.prototype,v=u.toString,w=u.hasOwnProperty;var x=self.AMP_CONFIG||{},y=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function z(a){if(self.document&&self.document.head&&(!self.location||!y.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}x.cdnUrl||z("runtime-host");x.geoApiUrl||z("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var C=self.__AMP_LOG;function D(a,b,c,d,e,k){if(!C.user)throw Error("failed to call initLogConstructor");return C.user.assert(a,b,c,d,e,k,void 0,void 0,void 0,void 0,void 0)};var E;function F(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function G(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function I(a,b){a=J(a);var c=K(a,b);c?b=c:(a=L(a),a[b]=M(),b=a[b].promise);return b}function O(a){return a.nodeType?G((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function J(a){a=O(a);return a.isSingleDoc()?a.win:a}function H(a,b){a=L(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function K(a,b){var c=L(a)[b];if(c){if(c.promise)return c.promise;H(a,b);return c.promise=Promise.resolve(c.obj)}return null}function L(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function M(){var a=new F,b=a.promise,c=a.resolve,d=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:d,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function P(a){return Q(a).then(function(b){return D(b,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","userNotificationManager","amp-user-notification","amp-user-notification","amp-user-notification")})}
function Q(a){var b=K(J(a),"userNotificationManager");if(b)return b;var c=O(a);return c.whenExtensionsKnown().then(function(){var d=c.getExtensionVersion("amp-user-notification");return d?G(c.win,"extensions").waitForExtension("amp-user-notification",d):null}).then(function(d){return d?I(a,"userNotificationManager"):null})};var R=/^[\w-]+$/;function S(a){this.ampdoc=a;this.h=new F}S.prototype.init=function(a){this.h.resolve(a)};S.prototype.getVariants=function(){return this.h.promise};S.prototype.whenReady=function(){return this.getVariants()};
function T(a,b,c){U(b);V(c);var d=a.getParam("amp-x-"+b);if(d&&w.call(c.variants,d))return Promise.resolve(d);var e=!1!==c.sticky,k=c.cidScope||"amp-experiment",g=Promise.resolve(!0);if(e&&c.consentNotificationId){var A=a.getHeadNode();g=P(A).then(function(l){return l.getNotification(c.consentNotificationId)}).then(function(l){D(l,"Notification not found: "+c.consentNotificationId);return l.isDismissed()})}return g.then(function(l){return l?aa(a,c.group||b,e?k:null).then(function(ba){for(var N=0,
B=Object.keys(c.variants).sort(),r=0;r<B.length;r++)if(N+=c.variants[B[r]],ba<N)return B[r];return null}):null})}function V(a){var b=a.variants;D("[object Object]"===v.call(b)&&0<Object.keys(b).length,"Missing experiment variants config.");a.group&&U(a.group);var c=0,d;for(d in b)if(w.call(b,d)){U(d);var e=b[d];D("number"===typeof e&&0<e&&100>e,"Invalid percentage %s:%s. Has to be greater than 0 and less than 100",d,e);c+=e}D(100>=c.toFixed(6),"Total percentage is bigger than 100: "+c)}
function aa(a,b,c){if(!c)return Promise.resolve(100*a.win.Math.random());var d=I(a,"cid").then(function(e){var k=e.get;E||(E=Promise.resolve(void 0));var g=E;return k.call(e,{scope:c,createCookieIfNotPresent:!0},g)});return Promise.all([d,G(a.win,"crypto")]).then(function(e){return e[1].uniform(b+":"+e[0])}).then(function(e){return 100*e})}function U(a){D(R.test(a),"Invalid name: %s. Allowed chars are [a-zA-Z0-9-_].",a)};function W(){return AMP.BaseElement.apply(this,arguments)||this}var X=AMP.BaseElement;W.prototype=f(X.prototype);W.prototype.constructor=W;if(t)t(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Z=Object.getOwnPropertyDescriptor(X,Y);Z&&Object.defineProperty(W,Y,Z)}else W[Y]=X[Y];W.o=X.prototype;W.prerenderAllowed=function(){return!0};W.prototype.isLayoutSupported=function(a){return"nodisplay"==a||"container"==a};W.prototype.isBuildRenderBlocking=function(){return!0};
W.prototype.buildCallback=function(){var a=this;return I(this.getAmpDoc(),"variant").then(function(b){try{var c=ca(a),d=Object.create(null),e=Object.keys(c).map(function(g){return T(a.getAmpDoc(),g,c[g]).then(function(A){d[g]=A})}),k=Promise.all(e).then(function(){return d}).then(a.j.bind(a));b.init(k)}catch(g){throw b.init({}),g;}})};
function ca(a){a=a.element.children;D(1==a.length&&"SCRIPT"==a[0].tagName&&"APPLICATION/JSON"==a[0].getAttribute("type").toUpperCase(),'<amp-experiment> should contain exactly one <script type="application/json"> child.');return JSON.parse(a[0].textContent)}W.prototype.j=function(a){return this.getAmpDoc().waitForBodyOpen().then(function(b){for(var c in a)a[c]&&b.setAttribute("amp-x-"+c,a[c]);return a})};(function(a){a.registerServiceForDoc("variant",S);a.registerElement("amp-experiment",W)})(self.AMP);
})});

//# sourceMappingURL=amp-experiment-0.1.js.map
