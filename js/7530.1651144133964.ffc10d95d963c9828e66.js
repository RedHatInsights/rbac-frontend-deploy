"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[7530],{77530:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(92950),a=n.n(r),c=n(334),s=n(57262),l=n(54025),o=n(94184),u=n.n(o),p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},i=function(e){var t=e.appName,n=e.scope,r=e.module,c=e.fallback,o=void 0===c?a().createElement(s.Bullseye,null,a().createElement(s.Spinner,{size:"xl"})):c,i=e.innerRef,m=e.className,f=e.component,b=void 0===f?"section":f,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["appName","scope","module","fallback","innerRef","className","component"]);return a().createElement(b,{className:u()(m,t)},a().createElement(l.ScalprumComponent,p({className:m,appName:t,module:r,scope:null!=n?n:t,ErrorComponent:o,ref:i,fallback:o},d)))};const m=a().forwardRef((function(e,t){return a().createElement(i,p({innerRef:t},e))}));var f=n(4682),b=n(72654),d=a().createElement(s.Bullseye,null,a().createElement(s.Spinner,{size:"xl"}));const g=function(){var e=(0,r.useContext)(b.g).getRegistry,t="accessRequests";return a().createElement(r.Fragment,null,a().createElement(c.Route,{path:f.Z["access-requests"],exact:!0,render:function(){return a().createElement(m,{appName:t,module:"./AccessRequestsPage",scope:"accessRequests",isInternal:!1,fallback:d,getRegistry:e})}}),a().createElement(c.Route,{path:f.Z["access-requests-detail"],exact:!0,render:function(){return a().createElement(m,{appName:t,module:"./AccessRequestDetailsPage",scope:"accessRequests",fallback:d,isInternal:!1,getRegistry:e})}}))}}}]);