(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=aa:r=ba;return r.apply(null,arguments)}
function t(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function ca(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.M=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}function da(a){return a};function u(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}ca(u,Error);u.prototype.name="CustomError";function w(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}ca(w,u);w.prototype.name="AssertionError";var ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fa=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ha=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,
b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d};function ia(a){return Array.prototype.concat.apply([],arguments)}function ja(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function ka(a,b){return ia.apply([],ha(a,b))};/*

 SPDX-License-Identifier: Apache-2.0
*/
function la(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function x(a){var b={},c;for(c in a)b[c]=a[c];return b};var y;function z(a,b){this.g=a===ma&&b||"";this.j=na}z.prototype.i=!0;z.prototype.h=function(){return this.g};var na={},ma={};var A=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function oa(a,b){return a<b?-1:a>b?1:0};function B(a,b){this.g=b===C?a:""}B.prototype.toString=function(){return this.g.toString()};B.prototype.i=!0;B.prototype.h=function(){return this.g.toString()};function D(a){return a instanceof B&&a.constructor===B?a.g:"type_error:SafeUrl"}var pa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,qa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function ra(a){a instanceof B||(a="object"==typeof a&&a.i?a.h():String(a),qa.test(a)?a=new B(a,C):(a=String(a).replace(/(%0A|%0D)/g,""),a=a.match(pa)?new B(a,C):null));return a||sa}var C={},sa=new B("about:invalid#zClosurez",C);var E={};function G(a,b){this.g=b===E?a:"";this.i=!0}G.prototype.h=function(){return this.g};G.prototype.toString=function(){return this.g.toString()};function va(a){return a instanceof G&&a.constructor===G?a.g:"type_error:SafeStyle"}var wa=new G("",E);
function xa(a){if(a instanceof B)return'url("'+D(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof z)a=a instanceof z&&a.constructor===z&&a.j===na?a.g:"type_error:Const";else{a=String(a);var b=a.replace(ya,"$1").replace(ya,"$1").replace(za,"url");if(Aa.test(b)){if(b=!Ba.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Ca(a)}a=b?Da(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new w("Value does not allow [{;}], got: %s.",
[a]);return a}function Ca(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Aa=RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),za=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),ya=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),Ba=/\/\*/;
function Da(a){return a.replace(za,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});b=ra(d).h();return c+f+b+f+e})};var H={};function I(a,b){this.g=b===H?a:"";this.i=!0}I.prototype.toString=function(){return this.g.toString()};function Ea(a){function b(d){Array.isArray(d)?d.forEach(b):c+=Fa(d)}var c="";Array.prototype.forEach.call(arguments,b);return new I(c,H)}I.prototype.h=function(){return this.g};function Fa(a){return a instanceof I&&a.constructor===I?a.g:"type_error:SafeStyleSheet"}var Ga=new I("",H);function J(){var a=p.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return-1!=J().indexOf(a)};var Ha={};function L(a,b){this.g=b===Ha?a:"";this.i=!0}L.prototype.h=function(){return this.g.toString()};L.prototype.toString=function(){return this.g.toString()};function M(a){return a instanceof L&&a.constructor===L?a.g:"type_error:SafeHtml"}
function Ia(a){if(void 0===y){var b=null;var c=p.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:da,createScript:da,createScriptURL:da})}catch(d){p.console&&p.console.error(d.message)}y=b}else y=b}a=(b=y)?b.createHTML(a):a;return new L(a,Ha)}var Ja=new L(p.trustedTypes&&p.trustedTypes.emptyHTML||"",Ha);function Ka(){return null}function La(a){return a};function Ma(a,b){var c=Na;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Oa=K("Opera"),N=K("Trident")||K("MSIE"),Pa=K("Edge"),Qa=K("Gecko")&&!(-1!=J().toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),Ra=-1!=J().toLowerCase().indexOf("webkit")&&!K("Edge");function Sa(){var a=p.document;return a?a.documentMode:void 0}var Ta;
a:{var Ua="",Va=function(){var a=J();if(Qa)return/rv:([^\);]+)(\)|;)/.exec(a);if(Pa)return/Edge\/([\d\.]+)/.exec(a);if(N)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ra)return/WebKit\/(\S+)/.exec(a);if(Oa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Va&&(Ua=Va?Va[1]:"");if(N){var Wa=Sa();if(null!=Wa&&Wa>parseFloat(Ua)){Ta=String(Wa);break a}}Ta=Ua}var Xa=Ta,Na={};
function Ya(a){return Ma(a,function(){for(var b=0,c=A(String(Xa)).split("."),d=A(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=oa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||oa(0==g[2].length,0==h[2].length)||oa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var Za;
if(p.document&&N){var ab=Sa();Za=ab?ab:parseInt(Xa,10)||void 0}else Za=void 0;var bb=Za;var cb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=M(Ja);return!b.parentElement});function db(a,b){if(cb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=M(b)};function O(){var a=document;var b="SPAN";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function eb(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};var fb={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-CONTROLS":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-EXPANDED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-HASPOPUP":!0,"* ARIA-HIDDEN":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,
"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,
"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},gb={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,
"* CLASS":!0,"* ID":!0,"* STYLE":!0};var P={};
function hb(a){if(N&&!Ya(9))return[0,0,0,0];var b=P.hasOwnProperty(a)?P[a]:null;if(b)return b;65536<Object.keys(P).length&&(P={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=ib(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=ib(b,d);b=ib(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=Q(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=Q(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=Q(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);b=Q(b,c,
/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=Q(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=Q(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");Q(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return P[a]=b}function Q(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}function ib(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})};var jb={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},kb=/[\n\f\r"'()*<>]/g,lb={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function mb(a){return lb[a]}
function nb(a,b,c){b=A(b);if(""==b)return null;var d=String(b.slice(0,4)).toLowerCase();if(0==("url("<d?-1:"url("==d?0:1)){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:for(b=b.substring(4,b.length-1),d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=D(a)?'url("'+D(a).replace(kb,mb)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;
for(a=/([\-\w]+)\(/g;c=a.exec(b);)if(!(c[1].toLowerCase()in jb))return null}return b};function T(a,b){a=p[a];return a&&a.prototype?(b=Object.getOwnPropertyDescriptor(a.prototype,b))&&b.get||null:null}function U(a,b){return(a=p[a])&&a.prototype&&a.prototype[b]||null}var ob=T("Element","attributes")||T("Node","attributes"),pb=U("Element","hasAttribute"),qb=U("Element","getAttribute"),rb=U("Element","setAttribute"),sb=U("Element","removeAttribute");T("Element","innerHTML")||T("HTMLElement","innerHTML");
var tb=U("Element","getElementsByTagName"),ub=U("Element","matches")||U("Element","msMatchesSelector"),vb=T("Node","nodeName"),wb=T("Node","nodeType"),xb=T("Node","parentNode");T("Node","childNodes");var yb=T("HTMLElement","style")||T("Element","style"),zb=T("HTMLStyleElement","sheet"),Ab=U("CSSStyleDeclaration","getPropertyValue"),Bb=U("CSSStyleDeclaration","setProperty"),Cb=T("Element","namespaceURI")||T("Node","namespaceURI");
function V(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}function W(a,b,c,d){if(a)return a.apply(b,d);if(N&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}function Db(a){return V(ob,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Eb(a,b,c){try{W(rb,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}function Fb(a){return V(yb,a,"style",function(b){return b instanceof CSSStyleDeclaration})}function Gb(a){return V(zb,a,"sheet",function(b){return b instanceof CSSStyleSheet})}function X(a){return V(vb,a,"nodeName",function(b){return"string"==typeof b})}function Hb(a){return V(wb,a,"nodeType",function(b){return"number"==typeof b})}
function Y(a){return V(xb,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}function Ib(a,b){return W(Ab,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}function Jb(a,b,c){W(Bb,a,a.setProperty?"setProperty":"setAttribute",[b,c])}function Kb(a){return V(Cb,a,"namespaceURI",function(b){return"string"==typeof b})};var Lb=N&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g"),Mb={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};
function Nb(a,b,c){var d=[];Ob(ja(a.cssRules)).forEach(function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&N&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(Lb,"#"+b+" $1"):e.selectorText,g=d.push;e=Pb(e.style,c);if(-1!=f.indexOf("<"))throw Error("Selector does not allow '<', got: "+f);var h=f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(h))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+
f);a:{for(var k={"(":")","[":"]"},m=[],v=0;v<h.length;v++){var q=h[v];if(k[q])m.push(k[q]);else{b:{var n=void 0;for(n in k)if(k[n]==q){n=!0;break b}n=!1}if(n&&m.pop()!=q){h=!1;break a}}}h=0==m.length}if(!h)throw Error("() and [] in selector must be balanced, got: "+f);if(!(e instanceof G)){h="";for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(!/^[-_a-zA-Z0-9]+$/.test(l))throw Error("Name allows only [-_a-zA-Z0-9], got: "+l);k=e[l];null!=k&&(k=Array.isArray(k)?k.map(xa).join(" "):xa(k),
h+=l+":"+k+";")}e=h?new G(h,E):wa}g.call(d,new I(f+"{"+va(e).replace(/</g,"\\3C ")+"}",H))}});return Ea(d)}function Ob(a){return a.filter(function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})}function Qb(a,b,c){a=Rb("<style>"+a+"</style>");return null==a||null==a.sheet?Ga:Nb(a.sheet,void 0!=b?b:null,c)}
function Rb(a){if(N&&!Ya(10)||"function"!=typeof p.DOMParser)return null;a=Ia("<html><head></head><body>"+a+"</body></html>");return(new DOMParser).parseFromString(M(a),"text/html").body.children[0]}
function Pb(a,b){if(!a)return wa;var c=document.createElement("div").style;Sb(a).forEach(function(d){var e=Ra&&d in Mb?d:d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");0!=e.lastIndexOf("--",0)&&0!=e.lastIndexOf("var",0)&&(d=Ib(a,d),d=nb(e,d,b),null!=d&&Jb(c,e,d))});return new G(c.cssText||"",E)}
function Tb(a){var b=Array.from(W(tb,a,"getElementsByTagName",["STYLE"])),c=ka(b,function(g){return ja(Gb(g).cssRules)});c=Ob(c);for(var d=[],e=0;e<c.length;e++)d[e]={index:e,u:c[e]};d.sort(function(g,h){var k=hb(g.u.selectorText),m=hb(h.u.selectorText);a:{for(var v=Math.min(k.length,m.length),q=0;q<v;q++){var n=k[q],l=m[q];n=n>l?1:n<l?-1:0;if(0!=n){m=n;break a}}k=k.length;m=m.length;m=k>m?1:k<m?-1:0}return m||g.index-h.index});for(e=0;e<d.length;e++)c[e]=d[e].u;c.reverse();a=document.createTreeWalker(a,
NodeFilter.SHOW_ELEMENT,null,!1);for(var f;f=a.nextNode();)c.forEach(function(g){W(ub,f,f.matches?"matches":"msMatchesSelector",[g.selectorText])&&g.style&&Ub(f,g.style)});b.forEach(eb)}function Ub(a,b){var c=Sb(a.style);Sb(b).forEach(function(d){if(!(0<=c.indexOf(d))){var e=Ib(b,d);Jb(a.style,d,e)}})}
function Sb(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";"array"==b||"object"==b&&"number"==typeof a.length?a=ja(a):(a=la(a),b=ea(a,"cssText"),0<=b&&Array.prototype.splice.call(a,b,1));return a};var Vb="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),Wb=0;function Xb(){this.g=[];this.i=[];this.h="data-elementweakmap-index-"+Wb++}Xb.prototype.set=function(a,b){if(W(pb,a,"hasAttribute",[this.h])){var c=parseInt(W(qb,a,"getAttribute",[this.h])||null,10);this.i[c]=b}else c=this.i.push(b)-1,Eb(a,this.h,c.toString()),this.g.push(a);return this};
Xb.prototype.get=function(a){if(W(pb,a,"hasAttribute",[this.h]))return a=parseInt(W(qb,a,"getAttribute",[this.h])||null,10),this.i[a]};Xb.prototype.clear=function(){this.g.forEach(function(a){W(sb,a,"removeAttribute",[this.h])},this);this.g=[];this.i=[]};var Yb;(Yb=!N)||(Yb=10<=Number(bb));var Zb=Yb,$b=!N||null==document.documentMode;function ac(){};var bc={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var cc={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var dc={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0};
function ec(a){a=a||new fc;gc(a);this.h=x(a.h);this.l=x(a.L);this.i=x(a.C);this.v=a.v;a.F.forEach(function(b){if(0!=b.lastIndexOf("data-",0))throw new w('Only "data-" attributes allowed, got: %s.',[b]);if(0==b.lastIndexOf("data-sanitizer-",0))throw new w('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.h["* "+b.toUpperCase()]=hc},this);a.D.forEach(function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||dc[b])throw new w("Only valid custom element tag names allowed, got: %s.",
[b]);this.i[b]=!0},this);this.s=a.j;this.j=a.K;this.g=null;this.m=a.s}ca(ec,ac);function ic(a){return function(b,c){return(b=a(A(b),c))&&"about:invalid#zClosurez"!=D(b)?D(b):null}}function fc(){this.h={};fa([fb,gb],function(a){la(a).forEach(function(b){this.h[b]=hc},this)},this);this.i={};this.F=[];this.D=[];this.L=x(bc);this.C=x(cc);this.v=!1;this.H=ra;this.m=this.g=this.G=this.j=Ka;this.K=null;this.l=this.s=!1}
function jc(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}function Z(a,b,c,d){a[c]&&!b[c]&&(a[c]=jc(a[c],d))}
function gc(a){if(a.l)throw Error("HtmlSanitizer.Builder.build() can only be used once.");Z(a.h,a.i,"* USEMAP",kc);var b=ic(a.H);["* ACTION","* CITE","* HREF"].forEach(function(d){Z(this.h,this.i,d,b)},a);var c=ic(a.j);["* LONGDESC","* SRC","LINK HREF"].forEach(function(d){Z(this.h,this.i,d,c)},a);["* FOR","* HEADERS","* NAME"].forEach(function(d){Z(this.h,this.i,d,t(lc,this.G))},a);Z(a.h,a.i,"A TARGET",t(mc,["_blank","_self"]));Z(a.h,a.i,"* CLASS",t(nc,a.g));Z(a.h,a.i,"* ID",t(oc,a.g));Z(a.h,a.i,
"* STYLE",t(a.m,c));a.l=!0}function pc(a,b){a||(a="*");return(a+" "+b).toUpperCase()}function qc(a,b,c,d){if(!d.o)return null;b=va(Pb(d.o,function(e,f){c.J=f;e=a(e,c);var g;null==e?g=null:g=new B(e,C);return g}));return""==b?null:b}function hc(a){return A(a)}function mc(a,b){b=A(b);return 0<=ea(a,b.toLowerCase())?b:null}function kc(a){return(a=A(a))&&"#"==a.charAt(0)?a:null}function lc(a,b,c){return a(A(b),c)}
function nc(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}function oc(a,b,c){return a(A(b),c)}function rc(a,b){var c=b.data;(b=Y(b))&&"style"==X(b).toLowerCase()&&!("STYLE"in a.l)&&"STYLE"in a.i&&(c=Fa(Qb(c,a.g,r(function(d,e){return this.s(d,{J:e})},a))));return document.createTextNode(c)};var sc;window.gwd=window.gwd||{};window.gwd.binders=window.gwd.binders||{};
window.gwd.binders.html=function(a,b){if("undefined"!=typeof b){var c=document.querySelector("gwd-text-helper");c&&c.saveInitialText(a);sc||(c=new fc,c.m=qc,c.g=La,sc=new ec(c));c=sc;var d=!("STYLE"in c.l)&&"STYLE"in c.i;d="*"==c.j&&d?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)):c.j;c.g=d;if(Zb){d=b;if(Zb){b=O();c.g&&"*"==c.j&&(b.id=c.g);c.m&&(d=Rb("<div>"+d+"</div>"),Tb(d),d=d.innerHTML);d=Ia(d);var e=document.createElement("template");
if($b&&"content"in e)db(e,d),e=e.content;else{var f=document.implementation.createHTMLDocument("x");e=f.body;db(f.body,d)}d=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(e=Vb?new WeakMap:new Xb;f=d.nextNode();){c:{var g=c;var h=f;switch(Hb(h)){case 3:g=rc(g,h);break c;case 1:if("TEMPLATE"==X(h).toUpperCase())g=null;else{var k=X(h).toUpperCase();if(k in g.l||"http://www.w3.org/1999/xhtml"!=Kb(h))var m=null;else g.i[k]?m=document.createElement(k):(m=O(),g.v&&
Eb(m,"data-sanitizer-original-tag",k.toLowerCase()));if(m){var v=m,q=Db(h);if(null!=q)for(var n=0;k=q[n];n++)if(k.specified){var l=g;var R=h,S=k,F=S.name;if(0==F.lastIndexOf("data-sanitizer-",0))l=null;else{var $a=X(R);S=S.value;var ta={tagName:A($a).toLowerCase(),attributeName:A(F).toLowerCase()},ua={o:void 0};"style"==ta.attributeName&&(ua.o=Fb(R));R=pc($a,F);R in l.h?(l=l.h[R],l=l(S,ta,ua)):(F=pc(null,F),F in l.h?(l=l.h[F],l=l(S,ta,ua)):l=null)}null!==l&&Eb(v,k.name,l)}g=m}else g=null}break c;
default:g=null}}if(g){if(1==Hb(g)&&e.set(f,g),f=Y(f),h=!1,f)k=Hb(f),m=X(f).toLowerCase(),v=Y(f),11!=k||v?"body"==m&&v&&(k=Y(v))&&!Y(k)&&(h=!0):h=!0,k=null,h||!f?k=b:1==Hb(f)&&(k=e.get(f)),k.content&&(k=k.content),k.appendChild(g)}else for(g=f;f=g.firstChild;)g.removeChild(f)}e.clear&&e.clear();c=b}else c=O();0<Db(c).length&&(b=O(),b.appendChild(c),c=b);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"))}else c="";c=Ia(c);if(void 0!==a.tagName){if("script"===
a.tagName.toLowerCase())throw Error("Use setTextContent with a SafeScript.");if("style"===a.tagName.toLowerCase())throw Error("Use setTextContent with a SafeStyleSheet.");}a.innerHTML=M(c)}};}).call(this);