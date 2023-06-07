/*! For license information please see 8701.cf8975a09bb70def14ed.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[8701],{82260:(t,e,r)=>{r.d(e,{Z:()=>R});var n=r(4942),o=r(92950),i=r.n(o),a=r(334),c=r(19571),s=r(4682),u=r(29439),l=r(76857),p=r(55140),f=r(11170);const h={metadata:{name:"monitor-sampleapp"},spec:{displayName:"Monitoring your sample application",durationMinutes:10,icon:i().createElement(f.ZP,null),description:"Now that you’ve created a sample application and added health checks, let’s monitor your application.",prerequisites:['You completed the "Getting started with a sample" quick start.'],introduction:"### This quick start shows you how to monitor your sample application.\nYou should have previously created the **sample-app** application and **nodejs-sample** deployment via the **Get started with a sample** quick start. If you haven't, you may be able to follow these tasks with any existing deployment.",tasks:[{title:"Viewing the monitoring details of your sample application",description:"### To view the details of your sample application:\n1. Go to the project your sample application was created in.\n2. In the **</> Developer** perspective, go to **Topology** view.\n3. Click on the **nodejs-sample** deployment to view its details.\n4. Click on the **Monitoring** tab in the side panel.\nYou can see context sensitive metrics and alerts in the **Monitoring** tab.",review:{instructions:"#### To verify you can view the monitoring information:\n1. Do you see a **Metrics** accordion in the side panel?\n2. Do you see a **View monitoring dashboard** link in the **Metrics** accordion?\n3. Do you see three charts in the **Metrics** accordion: **CPU Usage**, **Memory Usage** and **Receive Bandwidth**?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how you can monitor your sample app!",failed:"Try the steps again."}},{title:"Viewing your project monitoring dashboard",description:"### To view the project monitoring dashboard in the context of **nodejs-sample**:\n1. Click on the **View monitoring dashboard** link in the side panel.\n2. You can change the **Time Range** and **Refresh Interval** of the dashboard.\n3. You can change the context of the dashboard as well by clicking on the drop-down list. Select a specific workload or **All Workloads** to view the dashboard in the context of the entire project.",review:{instructions:"#### To verify that you are able to view the monitoring dashboard:\nDo you see metrics charts in the dashboard?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to view the dashboard in the context of your sample app!",failed:"Try the steps again."}},{title:"Viewing custom metrics",description:"### To view custom metrics:\n1. Click on the **Metrics** tab of the **Monitoring** page.\n2. Click the **Select Query** drop-down list to see the available queries.\n3. Click on **Filesystem Usage** from the list to run the query.",review:{instructions:"#### Verify you can see the chart associated with the query:\nDo you see a chart displayed with filesystem usage for your project?  Note: select **Custom Query** from the dropdown to create and run a custom query utilizing PromQL.\n",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to run a query!",failed:"Try the steps again."}}],conclusion:"You have learned how to access workload monitoring and metrics!",nextQuickStart:[""]}};var d=r(3812),y=r(86896),m=r(30893);const v=function(){var t=(0,y.Z)(),e=(0,o.useState)(!1),r=(0,u.Z)(e,2),n=r[0],c=r[1],f=(0,p.Z)(),v=(0,a.useHistory)(),g=i().useContext(d.QuickStartContext),w=f.quickStarts,b=(0,o.useState)(!1),O=(0,u.Z)(b,2),x=O[0],j=O[1];(0,o.useEffect)((function(){var t="true"===localStorage.getItem("quickstarts:enabled");t&&(w.set("monitor-sampleapp",[h]),j(t))}),[]),(0,o.useEffect)((function(){c(""!==g.activeQuickStartID)}),[g]);var E={margin:"24px 0px 24px 24px"};return i().createElement(i().Fragment,null,x&&i().createElement(i().Fragment,null,i().createElement(l.Button,{onClick:function(){n&!!g.activeQuickStartID?w.toggle():w.toggle("monitor-sampleapp",{}),c(!n)},variant:"primary",style:E,isDisabled:n},t.formatMessage(m.Z.triggerMyQuickstart)),i().createElement(l.Button,{onClick:function(){v.push(s.Z["quickstarts-test"].path)},variant:"primary",style:E},t.formatMessage(m.Z.triggerMyCatalog))))};var g=(0,o.lazy)((function(){return Promise.all([r.e(8697),r.e(2536),r.e(6135),r.e(8722),r.e(1800),r.e(7349),r.e(694),r.e(6171)]).then(r.bind(r,46929))})),w=(0,o.lazy)((function(){return Promise.all([r.e(8697),r.e(2536),r.e(6135),r.e(8722),r.e(1800),r.e(7349),r.e(8498)]).then(r.bind(r,97857))})),b=(0,o.lazy)((function(){return Promise.all([r.e(2536),r.e(1800),r.e(694),r.e(666)]).then(r.bind(r,38758))})),O=(0,o.lazy)((function(){return r.e(3844).then(r.bind(r,53844))})),x=function(){var t=(0,a.useLocation)(),e=(0,p.Z)().updateDocumentTitle;return(0,o.useEffect)((function(){var r=Object.values(s.Z).find((function(e){return!!(0,a.matchPath)(t.pathname,{path:e.path,exact:!0,strict:!1})}));null!=r&&r.title&&e("".concat(r.title," - User Access"))}),[t.pathname,e]),i().createElement(o.Suspense,{fallback:i().createElement(c.zx,null)},i().createElement(v,null),i().createElement(a.Switch,null,i().createElement(a.Route,{path:s.Z.groups.path,component:g}),i().createElement(a.Route,{path:s.Z.roles.path,component:w}),i().createElement(a.Route,{path:s.Z.users.path,component:b}),"true"===localStorage.getItem("quickstarts:enabled")&&i().createElement(a.Route,{path:s.Z["quickstarts-test"].path,component:O}),i().createElement(a.Route,null,i().createElement(a.Redirect,{to:s.Z.users.path}))))},j=r(28216),E=r(1379),k=r(26794),P=r(19756),Z=r(28090),D=r(90944),G=r(66181),L=r(48561),S=r(32490),M=r(64010);function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const R=function(){var t=(0,p.Z)(),e=(0,j.useDispatch)(),r=(0,M.Z)(),n=(0,a.useHistory)();return(0,o.useEffect)((function(){var r=t.on("APP_NAVIGATION",(function(t){t.domEvent&&n.push("/".concat(t.navId))}));return function(){"function"==typeof r&&r(),e((0,D.a)(S.p.users.filters)),e((0,P.Pu)(G.I.groups.filters)),e((0,Z.ys)(L.G.roles.filters))}}),[]),r.ready?i().createElement(k.Z.Provider,{value:_({},r)},i().createElement(E.Z,null,i().createElement("section",{style:{marginLeft:0,padding:0}},i().createElement(x,null)))):i().createElement(c.zx,null)}},89168:(t,e,r)=>{r.d(e,{CL:()=>x,HA:()=>D,Rp:()=>g,Wj:()=>L,bt:()=>f,dy:()=>E,gg:()=>b,mD:()=>m,nV:()=>P,nd:()=>M,yi:()=>d});var n=r(71002),o=r(4942),i=r(29439),a=r(15861),c=r(61338);function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function d(){}function y(){}var m={};u(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(P([])));g&&g!==e&&r.call(g,i)&&(m=g);var w=y.prototype=h.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(i,a,c,s){var u=p(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return d.prototype=y,u(w,"constructor",y),u(y,"constructor",d),d.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(O.prototype),u(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=(0,r(96692).tP)();function f(t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(s().mark((function t(e){var r,n,o,a,u,f,h,d,y,m,v,g,w,b,O,x,j,E,k,P,Z,D,G,L,S;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,o=e.offset,a=e.nameMatch,u=e.scope,f=e.username,h=e.excludeUsername,d=e.filters,y=void 0===d?{}:d,m=e.uuid,v=e.roleNames,g=e.roleDiscriminator,w=e.orderBy,b=e.platformDefault,O=e.adminDefault,x=e.system,j=e.options,E=e.inModal,k=void 0===E||E,t.next=3,Promise.all([p.listGroups(n,o,y.name,a,u,f,h,m,v,g,w,b,O,x,j),insights.chrome.auth.getUser()]);case 3:if(P=t.sent,Z=(0,i.Z)(P,2),D=Z[0],G=Z[1],L=(0,c._V)(o,null==D||null===(r=D.meta)||void 0===r?void 0:r.count),o=L?o:(0,c.Vh)(D.meta.count,n),!L){t.next=13;break}t.t0=D,t.next=16;break;case 13:return t.next=15,p.listGroups(n,o,y.name,a,u,f,m,v,g,w,j,x,b,O);case 15:t.t0=t.sent;case 16:return S=t.t0,t.abrupt("return",l(l(l({},S),k?{}:{filters:y,pagination:l(l({},null==S?void 0:S.meta),{},{offset:o,limit:n,redirected:!L})}),G));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getGroup(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.updateGroup(e.uuid,e);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.createGroup(e);case 2:return r=t.sent,n=[],e.user_list&&e.user_list.length>0&&n.push(p.addPrincipalToGroup(r.uuid,{principals:e.user_list})),e.roles_list&&e.roles_list.length>0&&n.push(p.addRoleToGroup(r.uuid,{roles:e.roles_list})),t.next=8,Promise.all(n);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map((function(t){return p.deleteGroup(t)})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(s().mark((function t(e,r){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.deletePrincipalFromGroup(e,r.join(","));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,e){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(s().mark((function t(e,r){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.addPrincipalToGroup(e,{principals:r});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t,e,r){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)(s().mark((function t(e,r,n){var o,i,a,c,u,l=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.limit,i=n.offset,a=n.name,c=n.description,u=l.length>3&&void 0!==l[3]?l[3]:{},t.next=4,p.listRolesForGroup(e,r,void 0,a,c,void 0,void 0,o,i,"display_name",u);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}function D(t,e){return G.apply(this,arguments)}function G(){return(G=(0,a.Z)(s().mark((function t(e,r){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.deleteRoleFromGroup(e,r.join(","));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t,e){return S.apply(this,arguments)}function S(){return(S=(0,a.Z)(s().mark((function t(e,r){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.addRoleToGroup(e,{roles:r});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(t,e){return T.apply(this,arguments)}function T(){return T=(0,a.Z)(s().mark((function t(e,r){var n,o=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:{},t.next=3,p.getPrincipalsFromGroup(e,r,n.limit,n.offset,n.orderBy);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}},11107:(t,e,r)=>{r.d(e,{Aq:()=>f,GT:()=>m,RI:()=>y,VG:()=>l,ZQ:()=>d,jl:()=>p,mh:()=>g,um:()=>h,zk:()=>v});var n=r(93433),o=r(4942),i=r(29439),a=r(48623),c=r(61338);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l="bad uuid",p=function(t){return Object.entries(t).reduce((function(t,e){var r=(0,i.Z)(e,2),n=r[0],a=r[1];return u(u({},t),a&&(0,o.Z)({},n,a))}),{})},f=(0,a.Z)((function(t){return t()})),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,r=t.filter((function(t){return!(t.platform_default||t.admin_default||t.system)}));return 0!==r.length&&r.every((function(t){var r=t.uuid;return e.find((function(t){return t.uuid===r}))}))||e.length>0&&null},d=function(t,e){return function(r){return e?[].concat((0,n.Z)(r),(0,n.Z)(t)).filter((function(t,e,r){return r.findIndex((function(e){var r=e.uuid;return t.uuid===r}))===e})):r.filter((function(e){return!t.find((function(t){return t.uuid===e.uuid}))}))}},y=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},m=function(t){var e=new URLSearchParams;return Object.keys(t).forEach((function(r){var n=t[r];Array.isArray(n)?n.forEach((function(t){return t&&e.append(r,t)})):n&&e.set(r,n)})),e.toString()},v=function(t,e,r){return{pathname:t,search:m(u({per_page:e.limit,page:(0,c.wy)(e.limit,e.offset)},r))}},g=function(t){var e=new Date(Date.now());return Date.parse(t)<e.setMonth(e.getMonth()-1)?"onlyDate":"relative"}},19756:(t,e,r)=>{r.d(e,{Pu:()=>G,Rp:()=>w,W3:()=>D,WD:()=>v,Wj:()=>Z,bt:()=>y,dy:()=>x,fB:()=>m,gg:()=>O,mD:()=>b,nV:()=>E,nd:()=>k,nr:()=>P,tz:()=>j,yi:()=>g});var n=r(4942),o=r(36580),i=r(89168),a=r(82644),c=r(29558),s=r(11107),u=r(30893),l=r(2034),p=r(28412);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"group uuid validation"===r.source)return{error:s.VG};throw t},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:o.eb,payload:i.bt(t)}},m=function(t){return{type:o.AG,payload:i.bt(h(h({limit:1},(null==t?void 0:t.length)>0?{filters:{name:t},nameMatch:"partial"}:{}),{},{adminDefault:!0}))}},v=function(t){return{type:o.kL,payload:i.bt(h(h({limit:1},(null==t?void 0:t.length)>0?{filters:{name:t},nameMatch:"partial"}:{}),{},{platformDefault:!0}))}},g=function(t){return{type:o._h,payload:i.yi(t).catch(d)}},w=function(t){return{type:o.Po,payload:i.Rp(t).catch((function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"name"===r.source)return{error:!0};throw{message:r.detail,description:r.source}}))}},b=function(t){var e=(0,a.Sn)(),r=(0,c.d)({locale:p.locale,messages:l},e);return{type:o.t3,payload:i.mD(t),meta:{notifications:{fulfilled:{variant:"success",title:r.formatMessage(u.Z.editGroupSuccessTitle),dismissDelay:8e3,dismissable:!0,description:r.formatMessage(u.Z.editGroupSuccessDescription)},rejected:{variant:"danger",title:r.formatMessage(u.Z.editGroupErrorTitle),dismissDelay:8e3,dismissable:!0,description:r.formatMessage(u.Z.editGroupErrorDescription)}}}}},O=function(t){var e=(0,a.Sn)(),r=(0,c.d)({locale:p.locale,messages:l},e);return{type:o.v9,payload:i.gg(t),meta:{notifications:{fulfilled:{variant:"success",dismissDelay:8e3,title:r.formatMessage(t.length>1?u.Z.removeGroupsSuccess:u.Z.removeGroupSuccess)},rejected:{variant:"danger",dismissDelay:8e3,title:r.formatMessage(t.length>1?u.Z.removeGroupsError:u.Z.removeGroupError)}}}}},x=function(t,e){var r=(0,a.Sn)(),n=(0,c.d)({locale:p.locale,messages:l},r),s=e.length>1;return{type:o.Nr,payload:i.dy(t,e),meta:{notifications:{fulfilled:{variant:"success",title:n.formatMessage(s?u.Z.addGroupMembersSuccessTitle:u.Z.addGroupMemberSuccessTitle),dismissDelay:8e3,description:n.formatMessage(s?u.Z.addGroupMembersSuccessDescription:u.Z.addGroupMemberSuccessDescription)},rejected:{variant:"danger",title:n.formatMessage(s?u.Z.addGroupMemberErrorTitle:u.Z.addGroupMembersErrorTitle),dismissDelay:8e3,description:n.formatMessage(s?u.Z.addGroupMemberErrorDescription:u.Z.addGroupMembersErrorDescription)}}}}},j=function(t,e){var r=(0,a.Sn)(),n=(0,c.d)({locale:p.locale,messages:l},r);return{type:o.b9,payload:i.CL(t,e),meta:{notifications:{fulfilled:{variant:"success",title:n.formatMessage(u.Z.removeGroupMembersSuccessTitle),dismissDelay:8e3,description:n.formatMessage(u.Z.removeGroupMembersSuccessDescription)},rejected:{variant:"danger",title:n.formatMessage(u.Z.removeGroupMembersErrorTitle),dismissDelay:8e3,description:n.formatMessage(u.Z.removeGroupMembersErrorDescription)}}}}},E=function(t,e,r){return{type:o.XS,payload:i.nV(t,!1,e,r).catch(d)}},k=function(t,e,r){return{type:o.Vh,payload:i.nd(t,e,r).catch(d)}},P=function(t,e,r){return{type:o.as,payload:i.nV(t,!0,e,r).catch(d)}},Z=function(t,e){var r=(0,a.Sn)(),n=(0,c.d)({locale:p.locale,messages:l},r);return{type:o.fG,payload:i.Wj(t,e),meta:{notifications:{fulfilled:{variant:"success",title:n.formatMessage(u.Z.addGroupRolesSuccessTitle),dismissDelay:8e3,description:n.formatMessage(u.Z.addGroupRolesSuccessDescription)},rejected:{variant:"danger",title:n.formatMessage(u.Z.addGroupRolesErrorTitle),dismissDelay:8e3,description:n.formatMessage(u.Z.addGroupRolesErrorDescription)}}}}},D=function(t,e){var r=(0,a.Sn)(),n=(0,c.d)({locale:p.locale,messages:l},r);return{type:o.Yc,payload:i.HA(t,e),meta:{notifications:{fulfilled:{variant:"success",title:n.formatMessage(u.Z.removeGroupRolesSuccessTitle),dismissDelay:8e3,description:n.formatMessage(u.Z.removeGroupRolesSuccessDescription)},rejected:{variant:"danger",title:n.formatMessage(u.Z.removeGroupRolesErrorTitle),dismissDelay:8e3,description:n.formatMessage(u.Z.removeGroupRolesErrorDescription)}}}}},G=function(t){return{type:o.p7,payload:t}}},90944:(t,e,r)=>{r.d(e,{u:()=>y,a:()=>m});var n=r(36580),o=r(71002),i=r(4942),a=r(15861),c=r(61338);function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function d(){}function y(){}var m={};u(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(P([])));g&&g!==e&&r.call(g,i)&&(m=g);var w=y.prototype=h.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,a,c,s){var u=p(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,o.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return d.prototype=y,u(w,"constructor",y),u(y,"constructor",d),d.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(O.prototype),u(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=(0,r(96692).bn)(),f={Active:"enabled",Inactive:"disabled",All:"all"};function h(t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(s().mark((function t(e){var r,n,o,i,a,u,h,d,y,m,v,g,w,b,O,x,j,E,k,P,Z;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,o=e.offset,i=void 0===o?0:o,a=e.orderBy,u=e.filters,h=void 0===u?{}:u,d=e.inModal,y=e.matchCriteria,m=void 0===y?"partial":y,v=h.username,g=h.email,w=h.status,O="-username"===a?"desc":"asc",x="string"==typeof(b=void 0===w?[]:w)?f[b]:2===b.length?f.All:f[b[0]]||f.All,t.next=6,p.listPrincipals(n,i,m,v,O,g,x);case 6:if(j=t.sent,E=(0,c._V)(i,null==j||null===(r=j.meta)||void 0===r?void 0:r.count),i=E?i:(0,c.Vh)(j.meta.count,n),!E){t.next=13;break}t.t0=j,t.next=16;break;case 13:return t.next=15,p.listPrincipals(n,i,m,v,O,g,x);case 15:t.t0=t.sent;case 16:return k=t.t0,P=k.data,Z=k.meta,t.abrupt("return",l({data:P,meta:l(l({},Z),{},{offset:i,limit:n})},d?{}:{filters:h,pagination:l(l({},Z),{},{offset:i,limit:n,redirected:!E})}));case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(t){return{type:n.WH,payload:h(t)}},m=function(t){return{type:n.xD,payload:t}}},84866:(t,e,r)=>{r.d(e,{$3:()=>i,OJ:()=>n,WO:()=>o});var n="/api/rbac/v1",o="/api/cost-management/v1",i="/api/inventory/v1"}}]);
//# sourceMappingURL=../sourcemaps/8701.830e31b8fa965c4a56d1cd5b5b8dc33c.js.map