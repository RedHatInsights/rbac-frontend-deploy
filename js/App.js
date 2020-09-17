!function(e){function t(t){for(var n,o,a=t[0],i=t[1],c=t[2],s=0,u=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(x,o)&&x[o]&&u.push(x[o][0]),x[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(k&&k(t);u.length;)u.shift()();return S.push.apply(S,c||[]),r()}function r(){for(var e,t=0;t<S.length;t++){for(var r=S[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==x[a]&&(n=!1)}n&&(S.splice(t--,1),e=G(G.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var r in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(m[r]=t[r]);0==--b&&0===v&&L()}(e,t),n&&n(e,t)};var o,a=!0,i="23868f4c4a3a677d6418",c={},s=[],u=[];function l(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(m={})[t]=e[t],f("ready");break;case"ready":I(t);break;case"prepare":case"check":case"dispose":case"apply":(y=y||[]).push(t)}},check:w,apply:D,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return o=void 0,r}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,m,g,y,b=0,v=0,O={},E={},_={};function P(e){return+e+""===e?+e:e}function w(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=G.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return f(R()?"ready":"idle"),null;E={},O={},_=e.c,g=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var r in m={},x)j(r);return"prepare"===p&&0===v&&0===b&&L(),t}));var t}function j(e){_[e]?(E[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=G.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):O[e]=!0}function L(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return D(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&t.push(P(r));e.resolve(t)}}function D(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(r){var n,a,u,l,d;function p(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),a=o.id,i=o.chain;if((l=F[a])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<l.parents.length;c++){var s=l.parents[c],u=F[s];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[a]?(r[s]||(r[s]=[]),h(r[s],[a])):(delete r[s],t.push(s),n.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}R();var b={},v=[],O={},E=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var j;d=P(w),j=m[w]?p(d):{type:"disposed",moduleId:w};var L=!1,D=!1,I=!1,S="";switch(j.chain&&(S="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(L=new Error("Aborted because of self decline: "+j.moduleId+S));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(L=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+S));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(L=new Error("Aborted because "+d+" is not accepted"+S));break;case"accepted":r.onAccepted&&r.onAccepted(j),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),I=!0;break;default:throw new Error("Unexception type "+j.type)}if(L)return f("abort"),Promise.reject(L);if(D)for(d in O[d]=m[d],h(v,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,d)&&(b[d]||(b[d]=[]),h(b[d],j.outdatedDependencies[d]));I&&(h(v,[j.moduleId]),O[d]=E)}var U,C=[];for(a=0;a<v.length;a++)d=v[a],F[d]&&F[d].hot._selfAccepted&&O[d]!==E&&!F[d].hot._selfInvalidated&&C.push({module:d,parents:F[d].parents.slice(),errorHandler:F[d].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete x[e]}(e)}));var N,k,A=v.slice();for(;A.length>0;)if(d=A.pop(),l=F[d]){var H={},T=l.hot._disposeHandlers;for(u=0;u<T.length;u++)(n=T[u])(H);for(c[d]=H,l.hot.active=!1,delete F[d],delete b[d],u=0;u<l.children.length;u++){var M=F[l.children[u]];M&&((U=M.parents.indexOf(d))>=0&&M.parents.splice(U,1))}}for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&(l=F[d]))for(k=b[d],u=0;u<k.length;u++)N=k[u],(U=l.children.indexOf(N))>=0&&l.children.splice(U,1);f("apply"),void 0!==g&&(i=g,g=void 0);for(d in m=void 0,O)Object.prototype.hasOwnProperty.call(O,d)&&(e[d]=O[d]);var z=null;for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&(l=F[d])){k=b[d];var B=[];for(a=0;a<k.length;a++)if(N=k[a],n=l.hot._acceptedDependencies[N]){if(-1!==B.indexOf(n))continue;B.push(n)}for(a=0;a<B.length;a++){n=B[a];try{n(k)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:k[a],error:e}),r.ignoreErrored||z||(z=e)}}}for(a=0;a<C.length;a++){var q=C[a];d=q.module,s=q.parents,o=d;try{G(d)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),r.ignoreErrored||z||(z=t),z||(z=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:e}),r.ignoreErrored||z||(z=e)}}if(z)return f("fail"),Promise.reject(z);if(y)return t(r).then((function(e){return v.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(v)}))}(t=t||{})}function R(){if(y)return m||(m={}),y.forEach(I),y=void 0,!0}function I(t){Object.prototype.hasOwnProperty.call(m,t)||(m[t]=e[t])}var F={},x={4:0},S=[];function G(t){if(F[t])return F[t].exports;var r=F[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=F[e];if(!t)return G;var r=function(r){return t.hot.active?(F[r]?-1===F[r].parents.indexOf(e)&&F[r].parents.push(e):(s=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),G(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return G[e]},set:function(t){G[e]=t}}};for(var a in G)Object.prototype.hasOwnProperty.call(G,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===p&&f("prepare"),v++,G.e(e).then(t,(function(e){throw t(),e}));function t(){v--,"prepare"===p&&(O[e]||j(e),0===v&&0===b&&L())}},r.t=function(e,t){return 1&t&&(e=r(e)),G.t(e,-2&t)},r}(t)),r.l=!0,r.exports}G.e=function(e){var t=[],r=x[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=x[e]=[t,n]}));t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,G.nc&&a.setAttribute("nonce",G.nc),a.src=function(e){return G.p+"js/"+({}[e]||e)+".js"}(e);var i=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var r=x[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}x[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},G.m=e,G.c=F,G.d=function(e,t,r){G.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},G.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},G.t=function(e,t){if(1&t&&(e=G(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(G.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)G.d(r,n,function(t){return e[t]}.bind(null,n));return r},G.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return G.d(t,"a",t),t},G.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},G.p="/beta/apps/rbac/",G.oe=function(e){throw console.error(e),e},G.h=function(){return i};var U=window.webpackJsonp=window.webpackJsonp||[],C=U.push.bind(U);U.push=t,U=U.slice();for(var N=0;N<U.length;N++)t(U[N]);var k=C;S.push([645,0,1,5,6]),r()}({120:function(e){e.exports=JSON.parse('{"a":{"rbac":"/","groups":"/groups","add-group":"/groups/add-group","remove-group":"/groups/removegroups","group-edit":{"path":"/groups/edit/:id","description":"Edit single group"},"group-detail":"/groups/detail/:uuid","group-detail-roles":"/groups/detail/:uuid/roles","group-add-roles":"/groups/detail/:uuid/roles/add_roles","group-detail-members":"/groups/detail/:uuid/members","group-add-members":"/groups/detail/:uuid/members/add_members","group-detail-role-detail":"/groups/detail/:groupUuid/roles/detail/:uuid","roles":"/roles","add-role":"/roles/add-role","remove-role":"/roles/remove/:id","role-detail":"/roles/detail/:uuid","users":"/users","user-detail":"/users/detail/:username","my-user-access":"/my-user-access"}}')},157:function(e,t,r){"use strict";r.d(t,"d",(function(){return O})),r.d(t,"a",(function(){return E})),r.d(t,"e",(function(){return _})),r.d(t,"b",(function(){return P})),r.d(t,"c",(function(){return w}));var n=r(131),o=r.n(n),a=r(308),i=r.n(a),c=r(158),s=r.n(c),u=r(0),l=r.n(u),d=r(30),p=r.n(d),f=r(292),h=r(383),m=r(380),g=r(381),y=r(382),b=(r(313),r(200),r(127)),v=r(167),O=function(e){var t=e.items,r=s()(e,["items"]);return l.a.createElement(u.Fragment,null,l.a.createElement(f.DataList,{"aria-label":"datalist-placeholder"},i()(Array(t)).map((function(e,t){return l.a.createElement(m.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},l.a.createElement(g.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},l.a.createElement(y.DataListItemCells,{dataListCells:[l.a.createElement(h.DataListCell,{key:"1"},l.a.createElement(v.Skeleton,o()({size:v.SkeletonSize.lg},r)))]})))}))))};O.propTypes={items:p.a.number},O.defaultProps={items:5};var E=function(e){return l.a.createElement("div",null,l.a.createElement(b.default,o()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),l.a.createElement(O,null))},_=function(e){return l.a.createElement("div",{style:{width:"200px",height:"21px"}},l.a.createElement(b.default,o()({height:21,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},P=function(e){return l.a.createElement("div",{style:{width:"200px",height:"18px"}},l.a.createElement(b.default,o()({height:18,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))},w=function(){return l.a.createElement(b.default,{height:32,width:160,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}},18:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"y",(function(){return i})),r.d(t,"t",(function(){return c})),r.d(t,"q",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"k",(function(){return l})),r.d(t,"l",(function(){return d})),r.d(t,"v",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"h",(function(){return h})),r.d(t,"j",(function(){return m})),r.d(t,"x",(function(){return g})),r.d(t,"u",(function(){return y})),r.d(t,"b",(function(){return b})),r.d(t,"w",(function(){return v})),r.d(t,"d",(function(){return O})),r.d(t,"m",(function(){return E})),r.d(t,"i",(function(){return _})),r.d(t,"e",(function(){return P})),r.d(t,"p",(function(){return w})),r.d(t,"o",(function(){return j})),r.d(t,"r",(function(){return L})),r.d(t,"s",(function(){return D}));var n="FETCH_GROUP",o="FETCH_GROUPS",a="ADD_GROUP",i="UPDATE_GROUP",c="REMOVE_GROUPS",s="FETCH_USERS",u="ADD_ROLE",l="FETCH_ROLE",d="FETCH_ROLES",p="REMOVE_ROLE",f="FETCH_ROLES_FOR_WIZARD",h="FETCH_GROUP_POLICIES",m="FETCH_POLICY",g="RESET_SELECTED_GROUP",y="REMOVE_MEMBERS_FROM_GROUP",b="ADD_MEMBERS_TO_GROUP",v="REMOVE_ROLES_FROM_GROUP",O="ADD_ROLES_TO_GROUP",E="FETCH_ROLES_FOR_GROUP",_="FETCH_MEMBERS_FOR_GROUP",P="FETCH_ADD_ROLES_FOR_GROUP",w="FETCH_ROLE_FOR_USER",j="FETCH_ROLE_FOR_PRINCIPAL",L="GET_PRINCIPAL_ACCESS",D="LIST_PERMISSIONS"},227:function(e,t,r){var n=r(4),o=r(541);(t=n(!1)).i(o),t.push([e.i,".toolbar-filter-input-group{position:relative;width:300px;height:36px}.toolbar-filter-input-group input{position:absolute;width:300px;background:transparent}.toolbar-filter-input-group svg{vertical-align:-0.125em;z-index:1000;position:absolute;right:8px;top:10px;fill:#72767B}.toolbar-filter-input-group-c{position:relative;width:200px;height:24px}.toolbar-filter-input-group-c input{position:absolute;width:200px;background:transparent}.toolbar-filter-input-group-c svg{vertical-align:-0.125em;z-index:1000;position:absolute;right:8px;top:10px;fill:#72767B}.ins-c-rbac__dialog--warning .ins-c-rbac__delete-icon{color:var(--pf-global--warning-color--100)}.delete-group-warning-icon{color:var(--pf-global--warning-color--100)}.pf-c-table thead tr th.ins-m-width-5{width:5%}.pf-c-table tbody tr.ins-c-rbac__group-default .pf-c-table__check:first-of-type input{display:none}.ins-c-rbac__summary .pf-l-grid .pf-l-grid__item{margin-bottom:var(--pf-global--gutter--md)}.ins-c-rbac__user-label{margin-right:var(--pf-global--spacer--sm)}@media only screen and (max-width: 768px){.ins-c-rbac__user-row .pf-c-label{width:max-content}}.pf-c-toolbar .pf-c-dropdown__menu .ins-c-primary-toolbar__first-action{display:none}\n",""]),e.exports=t},238:function(e,t,r){(t=r(4)(!1)).push([e.i,".ins-c-rbac-denied-state .pf-c-title{max-width:540px;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},317:function(e,t,r){var n=r(5),o=r(227);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=n(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(227,(function(){"string"==typeof(o=(o=r(227)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},560:function(e,t,r){var n=r(5),o=r(238);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=n(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(238,(function(){"string"==typeof(o=(o=r(238)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},60:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n={limit:20,offset:0,itemCount:0},o={limit:10,offset:0,itemCount:0}},645:function(e,t,r){"use strict";r.r(t);var n,o=r(0),a=r.n(o),i=r(22),c=r.n(i),s=r(155),u=r(119),l=r(370),d=r(105),p=r.n(d),f=r(371),h=r.n(f),m=r(372),g=r.n(m),y=r(373),b=r.n(y),v=r(374),O=r(12),E=r.n(O),_=r(18),P=r(60);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L,D={selectedUser:{},isUserDataLoading:!1,users:{meta:P.b}},R=(n={},E()(n,"".concat(_.q,"_PENDING"),(function(e){return j(j({},e),{},{isUserDataLoading:!0})})),E()(n,"".concat(_.q,"_FULFILLED"),(function(e,t){var r=t.payload;return j(j({},e),{},{users:r,isUserDataLoading:!1})})),n),I=r(375),F=r.n(I);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G,U={groups:{data:[],meta:P.b},selectedGroup:{addRoles:{},members:{meta:P.b},pagination:P.b},isLoading:!1,isRecordLoading:!1},C=(L={},E()(L,"".concat(_.g,"_PENDING"),(function(e){return S(S({},e),{},{isLoading:!0})})),E()(L,"".concat(_.g,"_FULFILLED"),(function(e,t){var r=t.payload;return S(S({},e),{},{groups:r,isLoading:!1})})),E()(L,"".concat(_.f,"_PENDING"),(function(e){return S(S({},e),{},{isRecordLoading:!0,selectedGroup:S(S({},e.selectedGroup),{},{loaded:!1})})})),E()(L,"".concat(_.f,"_FULFILLED"),(function(e,t){var r=t.payload;return S(S({},e),{},{isRecordLoading:!1,groups:S(S({},e.groups),{},{data:e.groups.data.map((function(e){return S(S({},e),r.uuid===e.uuid&&S(S({},r),{},{loaded:!0}))}))}),selectedGroup:S(S(S({},e.selectedGroup),{},{members:S(S({},e.selectedGroup.members),{},{data:r.principals})},F()(r,["principals","roles"])),{},{loaded:!0,pagination:S(S({},e.selectedGroup.pagination),{},{count:r.roleCount,offset:0})})})})),E()(L,"".concat(_.m,"_PENDING"),(function(e){return S(S({},e),{},{isRecordRolesLoading:!0,selectedGroup:S(S({},e.selectedGroup),{},{loaded:!1})})})),E()(L,"".concat(_.m,"_FULFILLED"),(function(e,t){var r=t.payload;return S(S({},e),{},{isRecordRolesLoading:!1,selectedGroup:S(S({},e.selectedGroup),{},{roles:r.data,pagination:r.meta,loaded:!0})})})),E()(L,"".concat(_.i,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S(S({},e),{},{selectedGroup:S(S({},e.selectedGroup||{}),{},{members:{isLoading:!0}})})})),E()(L,"".concat(_.i,"_FULFILLED"),(function(e,t){var r=t.payload;return S(S({},e),{},{selectedGroup:S(S({},e.selectedGroup||{}),{},{members:S({isLoading:!1},r)})})})),E()(L,"".concat(_.e,"_PENDING"),(function(e){return S(S({},e),{},{selectedGroup:S(S({},e.selectedGroup),{},{addRoles:{loaded:!1}})})})),E()(L,"".concat(_.e,"_FULFILLED"),(function(e,t){var r=t.payload;return S(S({},e),{},{selectedGroup:S(S({},e.selectedGroup),{},{addRoles:{roles:r.data,pagination:r.meta,loaded:!0}})})})),E()(L,_.x,(function(e){return S(S({},e),{},{selectedGroup:void 0})})),L);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A,H=(G={},E()(G,"".concat(_.h,"_PENDING"),(function(e){return k(k({},e),{},{isLoading:!0})})),E()(G,"".concat(_.h,"_FULFILLED"),(function(e,t){var r=t.payload;return k(k({},e),{},{policies:r,isLoading:!1})})),E()(G,"".concat(_.j,"_PENDING"),(function(e){return k(k({},e),{},{isRecordLoading:!0})})),E()(G,"".concat(_.j,"_FULFILLED"),(function(e,t){var r=t.payload;return k(k({},e),{},{selectedPolicy:r,isRecordLoading:!1})})),G);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z,B={isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:P.b},rolesForWizard:{data:[],meta:P.b},selectedRole:{}},q=function(e){return M(M({},e),{},{isRecordLoading:!0})},W=function(e,t){var r=t.payload;return M(M({},e),{},{rolesWithAccess:M(M({},e.rolesWithAccess),{},E()({},r.uuid,r)),isRecordLoading:!1})},V=(A={},E()(A,"".concat(_.k,"_FULFILLED"),(function(e,t){var r=t.payload;return M(M({},e),{},{selectedRole:r,isRecordLoading:!1})})),E()(A,"".concat(_.k,"_PENDING"),q),E()(A,"".concat(_.l,"_FULFILLED"),(function(e,t){var r=t.payload;return M(M({},e),{},{roles:r,isLoading:!1})})),E()(A,"".concat(_.l,"_PENDING"),(function(e){return M(M({},e),{},{isLoading:!0})})),E()(A,"".concat(_.p,"_FULFILLED"),W),E()(A,"".concat(_.p,"_PENDING"),q),E()(A,"".concat(_.o,"_FULFILLED"),W),E()(A,"".concat(_.o,"_PENDING"),q),E()(A,"".concat(_.n,"_FULFILLED"),(function(e,t){var r=t.payload;return M(M({},e),{},{rolesForWizard:r,isWizardLoading:!1})})),E()(A,"".concat(_.n,"_PENDING"),(function(e){return M(M({},e),{},{isWizardLoading:!0})})),A);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X,Y={isLoading:!1,access:{data:[],meta:P.b}},Z=(z={},E()(z,"".concat(_.r,"_PENDING"),(function(e){return K(K({},e),{},{isLoading:!0})})),E()(z,"".concat(_.r,"_FULFILLED"),(function(e,t){var r=t.payload;return K(K({},e),{},{access:r,isLoading:!1})})),z);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee={isLoading:!1,permission:{data:[],meta:$($({},P.b),{},{limit:100})}},te=(X={},E()(X,"".concat(_.s,"_PENDING"),(function(e){return $($({},e),{},{isLoading:!0})})),E()(X,"".concat(_.s,"_FULFILLED"),(function(e,t){var r=t.payload;return $($({},e),{},{permission:r,isLoading:!1})})),X),re=new p.a({},[v.a,l.a,g()({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),b.a]);re.register({userReducer:Object(d.applyReducerHash)(R,D),groupReducer:Object(d.applyReducerHash)(C,U),policyReducer:Object(d.applyReducerHash)(H,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:Object(d.applyReducerHash)(V,B),accessReducer:Object(d.applyReducerHash)(Z,Y),permissionReducer:Object(d.applyReducerHash)(te,ee),notifications:h.a});var ne=re.getStore(),oe=r(376),ae=r.n(oe),ie=r(377),ce=r.n(ie),se=r(291),ue=r.n(se),le=r(378),de=r.n(le),pe=r(379),fe=r.n(pe),he=r(302),me=r.n(he),ge=r(30),ye=r.n(ge),be=r(38),ve=r(158),Oe=r.n(ve),Ee=r(157),_e=r(120),Pe=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(8)]).then(r.bind(null,892))})),we=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(7)]).then(r.bind(null,893))})),je=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(9)]).then(r.bind(null,895))})),Le=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(11),r.e(10)]).then(r.bind(null,894))})),De=function(e){var t=e.rootClass,r=Oe()(e,["rootClass"]),n=document.getElementById("root");return n.removeAttribute("class"),n.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),n.setAttribute("role","main"),a.a.createElement(be.b,r)};De.propTypes={rootClass:ye.a.string};var Re=function(){return a.a.createElement(o.Suspense,{fallback:a.a.createElement(Ee.a,null)},a.a.createElement(be.d,null,a.a.createElement(De,{path:_e.a.groups,component:Pe,rootClass:"groups"}),a.a.createElement(De,{path:_e.a.roles,component:we,rootClass:"roles"}),a.a.createElement(De,{path:_e.a.users,component:je,rootClass:"roles"}),a.a.createElement(De,{path:_e.a.myUserAccess,component:Le,rootClass:"myUserAccess"}),a.a.createElement(be.b,{render:function(){return a.a.createElement(be.a,{to:_e.a.myUserAccess})}})))};Re.propTypes={childProps:ye.a.object};r(317);var Ie=r(191),Fe=r(309),xe=r(698),Se=(r(559),r(156)),Ge=r(79),Ue=r(159),Ce=r(315),Ne=r(316),ke=r(384),Ae=r.n(ke),He=r(168),Te=(r(560),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(He.PageHeader,null,a.a.createElement(He.PageHeaderTitle,{title:"User access"})),a.a.createElement(Ie.Main,null,a.a.createElement(Ue.EmptyState,{variant:Ue.EmptyStateVariant.full,className:"ins-c-rbac-denied-state"},a.a.createElement(Ce.EmptyStateIcon,{icon:Ae.a}),a.a.createElement(Se.Title,{headingLevel:"h5",size:"lg"},"You do not have permissions to view or manage User access"),a.a.createElement(Ne.EmptyStateBody,null,"Contact your organization administrator(s) for more information."),document.referrer?a.a.createElement(Ge.Button,{variant:"primary",onClick:function(){return history.back()}},"Return to previous page"):a.a.createElement(Ge.Button,{variant:"primary",component:"a",href:"."},"Go to landing page"))))});function Me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=me()(e);if(t){var o=me()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return fe()(this,r)}}var ze=function(e){de()(r,e);var t=Me(r);function r(){var e;ae()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),E()(ue()(e),"state",{chromeNavAvailable:!0,userReady:!1,isAdmin:void 0}),e}return ce()(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp(insights.chrome.getApp()),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.userReady,r=e.isAdmin;return t?r||"rbac"!==insights.chrome.getApp()?a.a.createElement(xe.a,{locale:"en"},a.a.createElement(a.a.Fragment,null,a.a.createElement(Fe.NotificationsPortal,null),a.a.createElement(Ie.Main,{style:{marginLeft:0,padding:0}},a.a.createElement(Re,null)))):a.a.createElement(Te,null):a.a.createElement(Ee.a,null)}}]),r}(o.Component);ze.propTypes={history:ye.a.object};var Be=Object(be.j)(Object(u.connect)()(ze)),qe=r(385);c.a.render(a.a.createElement(u.Provider,{store:ne},a.a.createElement(s.a,{basename:Object(qe.getBaseName)(location.pathname)},a.a.createElement(Be,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map