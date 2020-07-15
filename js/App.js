!function(e){function t(t){for(var n,o,a=t[0],i=t[1],c=t[2],l=0,u=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(x,o)&&x[o]&&u.push(x[o][0]),x[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(H&&H(t);u.length;)u.shift()();return G.push.apply(G,c||[]),r()}function r(){for(var e,t=0;t<G.length;t++){for(var r=G[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==x[a]&&(n=!1)}n&&(G.splice(t--,1),e=S(S.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var r in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(m[r]=t[r]);0==--b&&0===v&&D()}(e,t),n&&n(e,t)};var o,a=!0,i="2a2eff771131c20735ea",c={},l=[],u=[];function s(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(m={})[t]=e[t],f("ready");break;case"ready":F(t);break;case"prepare":case"check":case"dispose":case"apply":(g=g||[]).push(t)}},check:P,apply:L,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return o=void 0,r}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,m,y,g,b=0,v=0,O={},E={},_={};function w(e){return+e+""===e?+e:e}function P(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=S.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return f(R()?"ready":"idle"),null;E={},O={},_=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var r in m={},x)j(r);return"prepare"===p&&0===v&&0===b&&D(),t}));var t}function j(e){_[e]?(E[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=S.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):O[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return L(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&t.push(w(r));e.resolve(t)}}function L(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(r){var n,a,u,s,d;function p(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),a=o.id,i=o.chain;if((s=I[a])&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<s.parents.length;c++){var l=s.parents[c],u=I[l];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[a]?(r[l]||(r[l]=[]),h(r[l],[a])):(delete r[l],t.push(l),n.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}R();var b={},v=[],O={},E=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var P in m)if(Object.prototype.hasOwnProperty.call(m,P)){var j;d=w(P),j=m[P]?p(d):{type:"disposed",moduleId:P};var D=!1,L=!1,F=!1,G="";switch(j.chain&&(G="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(D=new Error("Aborted because of self decline: "+j.moduleId+G));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+G));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(D=new Error("Aborted because "+d+" is not accepted"+G));break;case"accepted":r.onAccepted&&r.onAccepted(j),L=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),F=!0;break;default:throw new Error("Unexception type "+j.type)}if(D)return f("abort"),Promise.reject(D);if(L)for(d in O[d]=m[d],h(v,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,d)&&(b[d]||(b[d]=[]),h(b[d],j.outdatedDependencies[d]));F&&(h(v,[j.moduleId]),O[d]=E)}var U,C=[];for(a=0;a<v.length;a++)d=v[a],I[d]&&I[d].hot._selfAccepted&&O[d]!==E&&!I[d].hot._selfInvalidated&&C.push({module:d,parents:I[d].parents.slice(),errorHandler:I[d].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete x[e]}(e)}));var k,H,A=v.slice();for(;A.length>0;)if(d=A.pop(),s=I[d]){var N={},T=s.hot._disposeHandlers;for(u=0;u<T.length;u++)(n=T[u])(N);for(c[d]=N,s.hot.active=!1,delete I[d],delete b[d],u=0;u<s.children.length;u++){var M=I[s.children[u]];M&&((U=M.parents.indexOf(d))>=0&&M.parents.splice(U,1))}}for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&(s=I[d]))for(H=b[d],u=0;u<H.length;u++)k=H[u],(U=s.children.indexOf(k))>=0&&s.children.splice(U,1);f("apply"),void 0!==y&&(i=y,y=void 0);for(d in m=void 0,O)Object.prototype.hasOwnProperty.call(O,d)&&(e[d]=O[d]);var z=null;for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&(s=I[d])){H=b[d];var B=[];for(a=0;a<H.length;a++)if(k=H[a],n=s.hot._acceptedDependencies[k]){if(-1!==B.indexOf(n))continue;B.push(n)}for(a=0;a<B.length;a++){n=B[a];try{n(H)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:H[a],error:e}),r.ignoreErrored||z||(z=e)}}}for(a=0;a<C.length;a++){var q=C[a];d=q.module,l=q.parents,o=d;try{S(d)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),r.ignoreErrored||z||(z=t),z||(z=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:e}),r.ignoreErrored||z||(z=e)}}if(z)return f("fail"),Promise.reject(z);if(g)return t(r).then((function(e){return v.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(v)}))}(t=t||{})}function R(){if(g)return m||(m={}),g.forEach(F),g=void 0,!0}function F(t){Object.prototype.hasOwnProperty.call(m,t)||(m[t]=e[t])}var I={},x={4:0},G=[];function S(t){if(I[t])return I[t].exports;var r=I[t]={i:t,l:!1,exports:{},hot:s(t),parents:(u=l,l=[],u),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=I[e];if(!t)return S;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(l=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),l=[]),S(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var a in S)Object.prototype.hasOwnProperty.call(S,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===p&&f("prepare"),v++,S.e(e).then(t,(function(e){throw t(),e}));function t(){v--,"prepare"===p&&(O[e]||j(e),0===v&&0===b&&D())}},r.t=function(e,t){return 1&t&&(e=r(e)),S.t(e,-2&t)},r}(t)),r.l=!0,r.exports}S.e=function(e){var t=[],r=x[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=x[e]=[t,n]}));t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,S.nc&&a.setAttribute("nonce",S.nc),a.src=function(e){return S.p+"js/"+({}[e]||e)+".js"}(e);var i=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var r=x[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}x[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},S.m=e,S.c=I,S.d=function(e,t,r){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(S.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)S.d(r,n,function(t){return e[t]}.bind(null,n));return r},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="/beta/apps/rbac/",S.oe=function(e){throw console.error(e),e},S.h=function(){return i};var U=window.webpackJsonp=window.webpackJsonp||[],C=U.push.bind(U);U.push=t,U=U.slice();for(var k=0;k<U.length;k++)t(U[k]);var H=C;G.push([464,0,1,5,6]),r()}({10:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"w",(function(){return i})),r.d(t,"r",(function(){return c})),r.d(t,"p",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"k",(function(){return s})),r.d(t,"l",(function(){return d})),r.d(t,"t",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"h",(function(){return h})),r.d(t,"j",(function(){return m})),r.d(t,"v",(function(){return y})),r.d(t,"s",(function(){return g})),r.d(t,"b",(function(){return b})),r.d(t,"u",(function(){return v})),r.d(t,"d",(function(){return O})),r.d(t,"m",(function(){return E})),r.d(t,"i",(function(){return _})),r.d(t,"e",(function(){return w})),r.d(t,"o",(function(){return P})),r.d(t,"q",(function(){return j}));var n="FETCH_GROUP",o="FETCH_GROUPS",a="ADD_GROUP",i="UPDATE_GROUP",c="REMOVE_GROUPS",l="FETCH_USERS",u="ADD_ROLE",s="FETCH_ROLE",d="FETCH_ROLES",p="REMOVE_ROLE",f="FETCH_ROLES_FOR_WIZARD",h="FETCH_GROUP_POLICIES",m="FETCH_POLICY",y="RESET_SELECTED_GROUP",g="REMOVE_MEMBERS_FROM_GROUP",b="ADD_MEMBERS_TO_GROUP",v="REMOVE_ROLES_FROM_GROUP",O="ADD_ROLES_TO_GROUP",E="FETCH_ROLES_FOR_GROUP",_="FETCH_MEMBERS_FOR_GROUP",w="FETCH_ADD_ROLES_FOR_GROUP",P="FETCH_ROLE_FOR_USER",j="GET_PRINCIPAL_ACCESS"},138:function(e,t,r){var n=r(5),o=r(379);(t=n(!1)).i(o),t.push([e.i,".groups-table-detail.heading{margin:0 !important}.groups-table-detail.content{margin-top:0 !important}.data-table-pane{padding-left:32px;padding-right:32px;padding-top:16px}.table-fix .pf-c-table__toggle{padding-top:0}.select-style{padding-bottom:200px}.toolbar-filter-input-group{position:relative;width:300px;height:36px}.toolbar-filter-input-group input{position:absolute;width:300px;background:transparent}.toolbar-filter-input-group svg{vertical-align:-0.125em;z-index:1000;position:absolute;right:8px;top:10px;fill:#72767B}.toolbar-filter-input-group-c{position:relative;width:200px;height:24px}.toolbar-filter-input-group-c input{position:absolute;width:200px;background:transparent}.toolbar-filter-input-group-c svg{vertical-align:-0.125em;z-index:1000;position:absolute;right:8px;top:10px;fill:#72767B}.disabled-color{color:#d2d2d2}.danger-color:not(:disabled){color:var(--pf-global--danger-color--100) !important}.ins-c-rbac__dialog--warning .ins-c-rbac__delete-icon{color:var(--pf-global--warning-color--100)}.delete-group-warning-icon{color:var(--pf-global--warning-color--100)}.pf-c-table thead tr th.ins-m-width-5{width:5%}.pf-c-table tbody tr.ins-c-rbac__group-default .pf-c-table__check:first-of-type input{display:none}.ins-c-rbac__summary .pf-l-grid .pf-l-grid__item{margin-bottom:var(--pf-global--gutter--md)}.ins-c-rbac__user-label{margin-right:var(--pf-global--spacer--sm)}@media only screen and (max-width: 768px){.ins-c-rbac__user-row .pf-c-label{width:max-content}}.pf-c-dropdown__menu .ins-c-primary-toolbar__first-action{display:none}\n",""]),e.exports=t},149:function(e,t,r){(t=r(5)(!1)).push([e.i,".ins-c-rbac-denied-state .pf-c-title{max-width:540px;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},190:function(e,t,r){var n=r(6),o=r(138);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=n(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(138,(function(){"string"==typeof(o=(o=r(138)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},34:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n={limit:20,offset:0,itemCount:0},o={limit:10,offset:0,itemCount:0}},406:function(e,t,r){var n=r(6),o=r(149);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=n(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(149,(function(){"string"==typeof(o=(o=r(149)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},464:function(e,t,r){"use strict";r.r(t);var n,o=r(0),a=r.n(o),i=r(16),c=r.n(i),l=r(76),u=r(54),s=r(250),d=r(53),p=r.n(d),f=r(251),h=r.n(f),m=r(252),y=r.n(m),g=r(253),b=r.n(g),v=r(254),O=r(7),E=r.n(O),_=r(10),w=r(34);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D,L={selectedUser:{},isUserDataLoading:!1,users:{meta:w.b}},R=(n={},E()(n,"".concat(_.p,"_PENDING"),(function(e){return j(j({},e),{},{isUserDataLoading:!0})})),E()(n,"".concat(_.p,"_FULFILLED"),(function(e,t){var r=t.payload;return j(j({},e),{},{users:r,isUserDataLoading:!1})})),n),F=r(255),I=r.n(F);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S,U={groups:{data:[],meta:w.b},selectedGroup:{addRoles:{},members:{meta:w.b},pagination:w.b},isLoading:!1,isRecordLoading:!1},C=function(e){return G(G({},e),{},{isRecordLoading:!0,selectedGroup:G(G({},e.selectedGroup),{},{loaded:!1})})},k=(D={},E()(D,"".concat(_.g,"_PENDING"),(function(e){return G(G({},e),{},{isLoading:!0})})),E()(D,"".concat(_.g,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{groups:r,isLoading:!1})})),E()(D,"".concat(_.f,"_PENDING"),C),E()(D,"".concat(_.f,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{groups:G(G({},e.groups),{},{data:e.groups.data.map((function(e){return G(G({},e),r.uuid===e.uuid&&G(G({},r),{},{loaded:!0}))}))}),selectedGroup:G(G(G({},e.selectedGroup),{},{members:G(G({},e.selectedGroup.members),{},{data:r.principals})},I()(r,["principals","roles"])),{},{loaded:!0,pagination:G(G({},e.selectedGroup.pagination),{},{count:r.roleCount,offset:0})})})})),E()(D,"".concat(_.m,"_PENDING"),C),E()(D,"".concat(_.m,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{isRecordLoading:!1,selectedGroup:G(G({},e.selectedGroup),{},{roles:r.data,pagination:r.meta,loaded:!0})})})),E()(D,"".concat(_.i,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup||{}),{},{members:{isLoading:!0}})})})),E()(D,"".concat(_.i,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup||{}),{},{members:G({isLoading:!1},r)})})})),E()(D,"".concat(_.e,"_PENDING"),(function(e){return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup),{},{addRoles:{loaded:!1}})})})),E()(D,"".concat(_.e,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup),{},{addRoles:{roles:r.data,pagination:r.meta,loaded:!0}})})})),E()(D,_.v,(function(e){return G(G({},e),{},{selectedGroup:void 0})})),D);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N,T=(S={},E()(S,"".concat(_.h,"_PENDING"),(function(e){return A(A({},e),{},{isLoading:!0})})),E()(S,"".concat(_.h,"_FULFILLED"),(function(e,t){var r=t.payload;return A(A({},e),{},{policies:r,isLoading:!1})})),E()(S,"".concat(_.j,"_PENDING"),(function(e){return A(A({},e),{},{isRecordLoading:!0})})),E()(S,"".concat(_.j,"_FULFILLED"),(function(e,t){var r=t.payload;return A(A({},e),{},{selectedPolicy:r,isRecordLoading:!1})})),S);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B,q={isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:w.b},rolesForWizard:{data:[],meta:w.b},selectedRole:{}},W=function(e){return z(z({},e),{},{isRecordLoading:!0})},V=(N={},E()(N,"".concat(_.k,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{selectedRole:r,isRecordLoading:!1})})),E()(N,"".concat(_.k,"_PENDING"),W),E()(N,"".concat(_.l,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{roles:r,isLoading:!1})})),E()(N,"".concat(_.l,"_PENDING"),(function(e){return z(z({},e),{},{isLoading:!0})})),E()(N,"".concat(_.o,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{rolesWithAccess:z(z({},e.rolesWithAccess),{},E()({},r.uuid,r)),isRecordLoading:!1})})),E()(N,"".concat(_.o,"_PENDING"),W),E()(N,"".concat(_.n,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{rolesForWizard:r,isWizardLoading:!1})})),E()(N,"".concat(_.n,"_PENDING"),(function(e){return z(z({},e),{},{isWizardLoading:!0})})),N);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X={isLoading:!1,access:{data:[],meta:w.b}},Y=(B={},E()(B,"".concat(_.q,"_PENDING"),(function(e){return K(K({},e),{},{isLoading:!0})})),E()(B,"".concat(_.q,"_FULFILLED"),(function(e,t){var r=t.payload;return K(K({},e),{},{access:r,isLoading:!1})})),B),Z=new p.a({},[v.a,s.a,y()({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),b.a]);Z.register({userReducer:Object(d.applyReducerHash)(R,L),groupReducer:Object(d.applyReducerHash)(k,U),policyReducer:Object(d.applyReducerHash)(T,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:Object(d.applyReducerHash)(V,q),accessReducer:Object(d.applyReducerHash)(Y,X),notifications:h.a});var Q=Z.getStore(),$=r(256),ee=r.n($),te=r(257),re=r.n(te),ne=r(172),oe=r.n(ne),ae=r(258),ie=r.n(ae),ce=r(259),le=r.n(ce),ue=r(181),se=r.n(ue),de=r(13),pe=r.n(de),fe=r(14),he=r(78),me=r.n(he),ye=r(77),ge=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(7)]).then(r.bind(null,653))})),be=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(8)]).then(r.bind(null,654))})),ve=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(10),r.e(9)]).then(r.bind(null,655))})),Oe="/groups",Ee="/roles",_e="/users",we=function(e){var t=e.rootClass,r=me()(e,["rootClass"]),n=document.getElementById("root");return n.removeAttribute("class"),n.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),n.setAttribute("role","main"),a.a.createElement(fe.b,r)};we.propTypes={rootClass:pe.a.string};var Pe=function(){return a.a.createElement(o.Suspense,{fallback:a.a.createElement(ye.a,null)},a.a.createElement(fe.d,null,a.a.createElement(we,{path:Oe,component:ge,rootClass:"groups"}),a.a.createElement(we,{path:Ee,component:be,rootClass:"roles"}),a.a.createElement(we,{path:_e,component:ve,rootClass:"roles"}),a.a.createElement(fe.b,{render:function(){return a.a.createElement(fe.a,{to:Oe})}})))};Pe.propTypes={childProps:pe.a.object};r(190);var je=r(105),De=r(186),Le=r(507),Re=(r(405),r(64)),Fe=r(39),Ie=r(79),xe=r(195),Ge=r(196),Se=r(266),Ue=r.n(Se),Ce=r(104),ke=(r(406),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ce.PageHeader,null,a.a.createElement(Ce.PageHeaderTitle,{title:"User access"})),a.a.createElement(je.Main,null,a.a.createElement(Ie.EmptyState,{variant:Ie.EmptyStateVariant.full,className:"ins-c-rbac-denied-state"},a.a.createElement(xe.EmptyStateIcon,{icon:Ue.a}),a.a.createElement(Re.Title,{headingLevel:"h5",size:"lg"}," You do not have permissions to view or manage User access "),a.a.createElement(Ge.EmptyStateBody,null,"Contact your organization administrator(s) for more information."),document.referrer?a.a.createElement(Fe.Button,{variant:"primary",onClick:function(){return history.back()}},"Return to previous page"):a.a.createElement(Fe.Button,{variant:"primary",component:"a",href:"."},"Go to landing page"))))});function He(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=se()(e);if(t){var o=se()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return le()(this,r)}}var Ae=function(e){ie()(r,e);var t=He(r);function r(){var e;ee()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),E()(oe()(e),"state",{chromeNavAvailable:!0,userReady:!1,isAdmin:void 0}),e}return re()(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp("rbac"),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.userReady,r=e.isAdmin;return t?r?a.a.createElement(Le.a,{locale:"en"},a.a.createElement(a.a.Fragment,null,a.a.createElement(De.NotificationsPortal,null),a.a.createElement(je.Main,{style:{marginLeft:0,padding:0}},a.a.createElement(Pe,null)))):a.a.createElement(ke,null):a.a.createElement(ye.a,null)}}]),r}(o.Component);Ae.propTypes={history:pe.a.object};var Ne=Object(fe.j)(Object(u.connect)()(Ae)),Te=r(267);c.a.render(a.a.createElement(u.Provider,{store:Q},a.a.createElement(l.a,{basename:Object(Te.getBaseName)(location.pathname)},a.a.createElement(Ne,null))),document.getElementById("root"))},77:function(e,t,r){"use strict";r.d(t,"d",(function(){return O})),r.d(t,"a",(function(){return E})),r.d(t,"e",(function(){return _})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return P}));var n=r(63),o=r.n(n),a=r(185),i=r.n(a),c=r(78),l=r.n(c),u=r(0),s=r.n(u),d=r(13),p=r.n(d),f=r(173),h=r(265),m=r(260),y=r(263),g=r(264),b=(r(189),r(110),r(62)),v=r(84),O=function(e){var t=e.items,r=l()(e,["items"]);return s.a.createElement(u.Fragment,null,s.a.createElement(f.DataList,{"aria-label":"datalist-placeholder"},i()(Array(t)).map((function(e,t){return s.a.createElement(m.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},s.a.createElement(y.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},s.a.createElement(g.DataListItemCells,{dataListCells:[s.a.createElement(h.DataListCell,{key:"1"},s.a.createElement(v.Skeleton,o()({size:v.SkeletonSize.lg},r)))]})))}))))};O.propTypes={items:p.a.number},O.defaultProps={items:5};var E=function(e){return s.a.createElement("div",null,s.a.createElement(b.default,o()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),s.a.createElement(O,null))},_=function(e){return s.a.createElement("div",{style:{width:"200px",height:"21px"}},s.a.createElement(b.default,o()({height:21,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},w=function(e){return s.a.createElement("div",{style:{width:"200px",height:"18px"}},s.a.createElement(b.default,o()({height:18,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))},P=function(){return s.a.createElement(b.default,{height:32,width:160,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}}});
//# sourceMappingURL=App.js.map