!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],l=0,u=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(R,o)&&R[o]&&u.push(R[o][0]),R[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(S&&S(t);u.length;)u.shift()();return x.push.apply(x,c||[]),n()}function n(){for(var e,t=0;t<x.length;t++){for(var n=x[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==R[a]&&(r=!1)}r&&(x.splice(t--,1),e=F(F.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!O[e])return;for(var n in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--y&&0===b&&j()}(e,t),r&&r(e,t)};var o,a=!0,i="311515427e491654bace",c={},l=[],u=[];function s(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:D,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return o=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,g,m,y=0,b=0,v={},O={},E={};function _(e){return+e+""===e?+e:e}function w(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=F.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;O={},v={},E=e.c,m=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in g={},R)P(n);return"prepare"===p&&0===b&&0===y&&j(),t}));var t}function P(e){E[e]?(O[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=F.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function j(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return D(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(_(n));e.resolve(t)}}function D(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,a,u;function s(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=L[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<a.parents.length;l++){var u=a.parents[l],s=L[u];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(s.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),d(n[u],[i])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},y=[],b={},v=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var O in g)if(Object.prototype.hasOwnProperty.call(g,O)){var w;u=_(O);var P=!1,j=!1,D=!1,x="";switch((w=g[O]?s(u):{type:"disposed",moduleId:O}).chain&&(x="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+w.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(P=new Error("Aborted because "+u+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(w),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),D=!0;break;default:throw new Error("Unexception type "+w.type)}if(P)return f("abort"),Promise.reject(P);if(j)for(u in b[u]=g[u],d(y,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,u)&&(h[u]||(h[u]=[]),d(h[u],w.outdatedDependencies[u]));D&&(d(y,[w.moduleId]),b[u]=v)}var G,I=[];for(r=0;r<y.length;r++)u=y[r],L[u]&&L[u].hot._selfAccepted&&b[u]!==v&&I.push({module:u,errorHandler:L[u].hot._selfAccepted});f("dispose"),Object.keys(E).forEach((function(e){!1===E[e]&&function(e){delete R[e]}(e)}));for(var U,S,k=y.slice();k.length>0;)if(u=k.pop(),a=L[u]){var C={},H=a.hot._disposeHandlers;for(o=0;o<H.length;o++)(n=H[o])(C);for(c[u]=C,a.hot.active=!1,delete L[u],delete h[u],o=0;o<a.children.length;o++){var M=L[a.children[o]];M&&((G=M.parents.indexOf(u))>=0&&M.parents.splice(G,1))}}for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(a=L[u]))for(S=h[u],o=0;o<S.length;o++)U=S[o],(G=a.children.indexOf(U))>=0&&a.children.splice(G,1);for(u in f("apply"),i=m,b)Object.prototype.hasOwnProperty.call(b,u)&&(e[u]=b[u]);var A=null;for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(a=L[u])){S=h[u];var N=[];for(r=0;r<S.length;r++)if(U=S[r],n=a.hot._acceptedDependencies[U]){if(-1!==N.indexOf(n))continue;N.push(n)}for(r=0;r<N.length;r++){n=N[r];try{n(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:S[r],error:e}),t.ignoreErrored||A||(A=e)}}}for(r=0;r<I.length;r++){var T=I[r];u=T.module,l=[u];try{F(u)}catch(e){if("function"==typeof T.errorHandler)try{T.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||A||(A=n),A||(A=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||A||(A=e)}}return A?(f("fail"),Promise.reject(A)):(f("idle"),new Promise((function(e){e(y)})))}var L={},R={2:0},x=[];function F(t){if(L[t])return L[t].exports;var n=L[t]={i:t,l:!1,exports:{},hot:s(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=L[e];if(!t)return F;var n=function(n){return t.hot.active?(L[n]?-1===L[n].parents.indexOf(e)&&L[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),F(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return F[e]},set:function(t){F[e]=t}}};for(var a in F)Object.prototype.hasOwnProperty.call(F,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===p&&f("prepare"),b++,F.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===p&&(v[e]||P(e),0===b&&0===y&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),F.t(e,-2&t)},n}(t)),n.l=!0,n.exports}F.e=function(e){var t=[],n=R[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=R[e]=[t,r]}));t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,F.nc&&a.setAttribute("nonce",F.nc),a.src=function(e){return F.p+"js/"+({}[e]||e)+".js"}(e);var i=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=R[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}R[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},F.m=e,F.c=L,F.d=function(e,t,n){F.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},F.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},F.t=function(e,t){if(1&t&&(e=F(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(F.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)F.d(n,r,function(t){return e[t]}.bind(null,r));return n},F.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return F.d(t,"a",t),t},F.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},F.p="/beta/apps/rbac/",F.oe=function(e){throw console.error(e),e},F.h=function(){return i};var G=window.webpackJsonp=window.webpackJsonp||[],I=G.push.bind(G);G.push=t,G=G.slice();for(var U=0;U<G.length;U++)t(G[U]);var S=I;x.push([448,3]),n()}({11:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"t",(function(){return i})),n.d(t,"o",(function(){return c})),n.d(t,"n",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"k",(function(){return s})),n.d(t,"l",(function(){return d})),n.d(t,"q",(function(){return p})),n.d(t,"h",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"s",(function(){return g})),n.d(t,"p",(function(){return m})),n.d(t,"b",(function(){return y})),n.d(t,"r",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"m",(function(){return O})),n.d(t,"i",(function(){return E})),n.d(t,"e",(function(){return _}));var r="FETCH_GROUP",o="FETCH_GROUPS",a="ADD_GROUP",i="UPDATE_GROUP",c="REMOVE_GROUPS",l="FETCH_USERS",u="ADD_ROLE",s="FETCH_ROLE",d="FETCH_ROLES",p="REMOVE_ROLE",f="FETCH_GROUP_POLICIES",h="FETCH_POLICY",g="RESET_SELECTED_GROUP",m="REMOVE_MEMBERS_FROM_GROUP",y="ADD_MEMBERS_TO_GROUP",b="REMOVE_ROLES_FROM_GROUP",v="ADD_ROLES_TO_GROUP",O="FETCH_ROLES_FOR_GROUP",E="FETCH_MEMBERS_FOR_GROUP",_="FETCH_ADD_ROLES_FOR_GROUP"},142:function(e,t,n){var r=n(4),o=n(444);(t=r(!1)).i(o),t.push([e.i,".modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.groups-table-detail.heading {\n  margin: 0 !important; }\n\n.groups-table-detail.content {\n  margin-top: 0 !important; }\n\n.data-table-pane {\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-top: 16px; }\n\n.table-fix .pf-c-table__toggle {\n  padding-top: 0; }\n\n.select-style {\n  padding-bottom: 200px; }\n\n.toolbar-filter-input-group {\n  position: relative;\n  width: 300px;\n  height: 36px; }\n  .toolbar-filter-input-group input {\n    position: absolute;\n    width: 300px;\n    background: transparent; }\n  .toolbar-filter-input-group svg {\n    vertical-align: -0.125em;\n    z-index: 1000;\n    position: absolute;\n    right: 8px;\n    top: 10px;\n    fill: #72767B; }\n\n.toolbar-filter-input-group-c {\n  position: relative;\n  width: 200px;\n  height: 24px; }\n  .toolbar-filter-input-group-c input {\n    position: absolute;\n    width: 200px;\n    background: transparent; }\n  .toolbar-filter-input-group-c svg {\n    vertical-align: -0.125em;\n    z-index: 1000;\n    position: absolute;\n    right: 8px;\n    top: 10px;\n    fill: #72767B; }\n\n.disabled-color {\n  color: #d2d2d2; }\n\n.danger-color:not(:disabled) {\n  color: var(--pf-global--danger-color--100) !important; }\n\n.ins-c-rbac__dialog--warning .ins-c-rbac__delete-icon {\n  color: var(--pf-global--warning-color--100); }\n\n.delete-group-warning-icon {\n  color: var(--pf-global--warning-color--100); }\n\n.pf-c-table tbody tr.ins-c-rbac__group-default .pf-c-table__check:first-of-type input {\n  display: none; }\n\n.ins-c-rbac__summary .pf-l-grid .pf-l-grid__item {\n  margin-bottom: var(--pf-global--gutter--md); }\n",""]),e.exports=t},144:function(e,t,n){(t=n(4)(!1)).push([e.i,".ins-c-rbac-denied-state .pf-c-title {\n  max-width: 540px;\n  margin-left: auto;\n  margin-right: auto; }\n",""]),e.exports=t},161:function(e,t,n){var r=n(5),o=n(142);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a),c=o.locals?o.locals:{};o.locals||e.hot.accept(142,(function(){var t=n(142);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),i(t)})),e.hot.dispose((function(){i()})),e.exports=c},446:function(e,t,n){var r=n(5),o=n(144);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a),c=o.locals?o.locals:{};o.locals||e.hot.accept(144,(function(){var t=n(144);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),i(t)})),e.hot.dispose((function(){i()})),e.exports=c},448:function(e,t,n){"use strict";n.r(t);var r,o=n(1),a=n.n(o),i=n(17),c=n.n(i),l=n(49),u=n(41),s=n(212),d=n(48),p=n.n(d),f=n(51),h=n(214),g=n.n(h),m=n(215),y=n(8),b=n.n(y),v=n(11);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _,w=(r={},b()(r,"".concat(v.n,"_PENDING"),(function(e){return E({},e,{isUserDataLoading:!0})})),b()(r,"".concat(v.n,"_FULFILLED"),(function(e,t){return E({},e,{users:t.payload,isUserDataLoading:!1})})),r),P=n(216),j=n.n(P);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R,x=function(e){return L({},e,{isRecordLoading:!0,selectedGroup:L({},e.selectedGroup,{loaded:!1})})},F=(_={},b()(_,"".concat(v.g,"_PENDING"),(function(e){return L({},e,{isLoading:!0})})),b()(_,"".concat(v.g,"_FULFILLED"),(function(e,t){return L({},e,{groups:t.payload,isLoading:!1})})),b()(_,"".concat(v.f,"_PENDING"),x),b()(_,"".concat(v.f,"_FULFILLED"),(function(e,t){var n=t.payload;return L({},e,{groups:L({},e.groups,{data:e.groups.data.map((function(e){return L({},e,{},n.uuid===e.uuid&&L({},n,{loaded:!0}))}))}),selectedGroup:L({},e.selectedGroup,{members:L({},e.selectedGroup.members,{data:n.principals})},j()(n,"principals"),{loaded:!0,pagination:L({},e.selectedGroup.pagination,{count:n.roleCount,offset:0})})})})),b()(_,"".concat(v.m,"_PENDING"),x),b()(_,"".concat(v.m,"_FULFILLED"),(function(e,t){var n=t.payload;return L({},e,{isRecordLoading:!1,selectedGroup:L({},e.selectedGroup,{roles:n.data,pagination:n.meta,loaded:!0})})})),b()(_,"".concat(v.i,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return L({},e,{selectedGroup:L({},e.selectedGroup||{},{members:{isLoading:!0}})})})),b()(_,"".concat(v.i,"_FULFILLED"),(function(e,t){var n=t.payload;return L({},e,{selectedGroup:L({},e.selectedGroup||{},{members:L({isLoading:!1},n)})})})),b()(_,"".concat(v.e,"_PENDING"),(function(e){return L({},e,{selectedGroup:L({},e.selectedGroup,{addRoles:{loaded:!1}})})})),b()(_,"".concat(v.e,"_FULFILLED"),(function(e,t){var n=t.payload;return L({},e,{selectedGroup:L({},e.selectedGroup,{addRoles:{roles:n.data,pagination:n.meta,loaded:!0}})})})),b()(_,v.s,(function(e){return L({},e,{selectedGroup:void 0})})),_);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U,S=(R={},b()(R,"".concat(v.h,"_PENDING"),(function(e){return I({},e,{isLoading:!0})})),b()(R,"".concat(v.h,"_FULFILLED"),(function(e,t){return I({},e,{policies:t.payload,isLoading:!1})})),b()(R,"".concat(v.j,"_PENDING"),(function(e){return I({},e,{isRecordLoading:!0})})),b()(R,"".concat(v.j,"_FULFILLED"),(function(e,t){return I({},e,{selectedPolicy:t.payload,isRecordLoading:!1})})),R);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=(U={},b()(U,"".concat(v.k,"_FULFILLED"),(function(e,t){return C({},e,{selectedRole:t.payload,isRecordLoading:!1})})),b()(U,"".concat(v.k,"_PENDING"),(function(e){return C({},e,{isRecordLoading:!0})})),b()(U,"".concat(v.l,"_FULFILLED"),(function(e,t){return C({},e,{roles:t.payload,isLoading:!1})})),b()(U,"".concat(v.l,"_PENDING"),(function(e){return C({},e,{isLoading:!0})})),U),M=new p.a({},[m.a,s.a,Object(f.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),g.a]);M.register({userReducer:Object(d.applyReducerHash)(w,{selectedUser:{},isUserDataLoading:!1,users:[]}),groupReducer:Object(d.applyReducerHash)(F,{groups:{data:[],meta:{count:0,limit:10,offset:0}},selectedGroup:{addRoles:{},members:{},pagination:{limit:10}},isLoading:!1,isRecordLoading:!1}),policyReducer:Object(d.applyReducerHash)(S,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:Object(d.applyReducerHash)(H,{isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:{count:0,limit:5,offset:0}},selectedRole:{}}),notifications:f.notifications});var A=M.getStore(),N=n(217),T=n.n(N),z=n(218),B=n.n(z),q=n(219),V=n.n(q),J=n(220),K=n.n(J),X=n(147),Y=n.n(X),W=n(221),Q=n.n(W),Z=n(0),$=n.n(Z),ee=n(33),te=n(64),ne=n.n(te),re=n(61),oe=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,648))})),ae=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,649))})),ie=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,653))})),ce="/groups",le="/roles",ue="/users",se=function(e){var t=e.rootClass,n=ne()(e,["rootClass"]),r=document.getElementById("root");return r.removeAttribute("class"),r.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),r.setAttribute("role","main"),a.a.createElement(ee.d,n)};se.propTypes={rootClass:$.a.string};var de=function(){return a.a.createElement(o.Suspense,{fallback:a.a.createElement(re.a,null)},a.a.createElement(ee.g,null,a.a.createElement(se,{path:ce,component:oe,rootClass:"groups"}),a.a.createElement(se,{path:le,component:ae,rootClass:"roles"}),a.a.createElement(se,{path:ue,component:ie,rootClass:"roles"}),a.a.createElement(ee.d,{render:function(){return a.a.createElement(ee.c,{to:ce})}})))};de.propTypes={childProps:$.a.object};n(161);var pe=n(27),fe=n(468),he=(n(445),n(462)),ge=n(463),me=n(465),ye=n(466),be=n(467),ve=n(464),Oe=(n(446),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(pe.PageHeader,null,a.a.createElement(pe.PageHeaderTitle,{title:"User access"})),a.a.createElement(pe.Main,null,a.a.createElement(he.a,{variant:he.b.full,className:"ins-c-rbac-denied-state"},a.a.createElement(ge.a,{icon:ve.a}),a.a.createElement(me.a,{headingLevel:"h5",size:"lg"}," You do not have permissions to view or manage User access "),a.a.createElement(ye.a,null,"Contact your organization administrator(s) for more information."),document.referrer?a.a.createElement(be.a,{variant:"primary",onClick:function(){return history.back()}},"Return to previous page"):a.a.createElement(be.a,{variant:"primary",component:"a",href:"."},"Go to landing page"))))}),Ee=function(e){function t(){var e,n;T()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=V()(this,(e=K()(t)).call.apply(e,[this].concat(o))),b()(Y()(n),"state",{chromeNavAvailable:!0,userReady:!1,isAdmin:void 0}),n}return Q()(t,e),B()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp("rbac"),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.userReady,n=e.isAdmin;return t?n?a.a.createElement(fe.a,{locale:"en"},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(pe.Main,{style:{marginLeft:0,padding:0}},a.a.createElement(de,null)))):a.a.createElement(Oe,null):a.a.createElement(re.a,null)}}]),t}(o.Component);Ee.propTypes={history:$.a.object};var _e=Object(ee.o)(Object(u.connect)()(Ee)),we=n(231);c.a.render(a.a.createElement(u.Provider,{store:A},a.a.createElement(l.BrowserRouter,{basename:Object(we.getBaseName)(location.pathname)},a.a.createElement(_e,null))),document.getElementById("root"))},61:function(e,t,n){"use strict";n.d(t,"d",(function(){return O})),n.d(t,"a",(function(){return E})),n.d(t,"e",(function(){return _})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return P}));var r=n(50),o=n.n(r),a=n(158),i=n.n(a),c=n(64),l=n.n(c),u=n(1),s=n.n(u),d=n(0),p=n.n(d),f=n(153),h=n(454),g=n(449),m=n(450),y=n(451),b=(n(452),n(233),n(47)),v=n(27),O=function(e){var t=e.items,n=l()(e,["items"]);return s.a.createElement(u.Fragment,null,s.a.createElement(f.a,{"aria-label":"datalist-placeholder"},i()(Array(t)).map((function(e,t){return s.a.createElement(h.a,{key:t,"aria-labelledby":"datalist-item-placeholder"},s.a.createElement(g.a,{"aria-label":"datalist-item-placeholder-row"},s.a.createElement(m.a,{dataListCells:[s.a.createElement(y.a,{key:"1"},s.a.createElement(v.Skeleton,o()({size:v.SkeletonSize.lg},n)))]})))}))))};O.propTypes={items:p.a.number},O.defaultProps={items:5};var E=function(e){return s.a.createElement("div",null,s.a.createElement(b.default,o()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),s.a.createElement(O,null))},_=function(e){return s.a.createElement("div",{style:{width:"200px",height:"21px"}},s.a.createElement(b.default,o()({height:21,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},w=function(e){return s.a.createElement("div",{style:{width:"200px",height:"18px"}},s.a.createElement(b.default,o()({height:18,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))},P=function(){return s.a.createElement(b.default,{height:32,width:160,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}}});
//# sourceMappingURL=App.js.map