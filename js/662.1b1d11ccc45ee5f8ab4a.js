"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[662],{92758:(e,t,r)=>{r.d(t,{aX:()=>i,qF:()=>l,MS:()=>s});var n=r(93433),a=r(4942);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=new URLSearchParams(e.location.search),i=t.reduce((function(e,t){var r=c.getAll(t);return o(o({},e),{},(0,a.Z)({},t,r.length>1?r:r[0]))}),{});return Object.keys(r).forEach((function(e){var t=r[e];i=o(o({},i),{},(0,a.Z)({},e,Array.isArray(i[e])?(0,n.Z)(new Set([].concat((0,n.Z)(i[e]),(0,n.Z)(Array.isArray(t)?t:[t])))):(null==t?void 0:t.length)>0&&t||i[e])),Array.isArray(t)?t.forEach((function(t){return c.getAll(e).includes(t)||c.append(e,t)})):c.get(e)||t&&c.set(e,t)})),e.replace({pathname:e.location.pathname,search:c.toString()}),i},l=function(e,t){var r=new URLSearchParams(e.location.search);return t.some((function(e){return r.get(e)}))},s=function(e,t){var r=new URLSearchParams(e.location.search);Object.keys(t).forEach((function(e){return r.delete(e)})),Object.keys(t).forEach((function(e){var n=t[e];Array.isArray(n)?n.forEach((function(t){return t&&r.append(e,t)})):n&&r.set(e,n)})),e.replace({pathname:e.location.pathname,search:r.toString()})}},16796:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),a=r.n(n),c=r(45697),o=r.n(c),i=r(334),l=r(97066),s=r(19571),u=function(e){return e?a().createElement(l.Breadcrumb,null,Object.values(e).map((function(e,t){return e.title?a().createElement(l.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&a().createElement(i.NavLink,{exact:!0,to:e.to},e.title)||e.title):a().createElement(s.Vj,{key:t})}))):null};u.propTypes={breadcrumbs:o().object};const p=u},38376:(e,t,r)=>{r.d(t,{Q:()=>m,y:()=>f});var n=r(92950),a=r.n(n),c=r(45697),o=r.n(c),i=r(97066),l=r(19571),s=r(16796),u=r(48716),p=r(39173),m=function(e){var t=e.children,r=e.breadcrumbs;return a().createElement(n.Fragment,null,r&&a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(s.Z,r)),a().createElement(u.Z,{className:"rbac-page-header"},t))};m.propTypes={children:o().oneOfType([o().arrayOf(o().node),o().node]).isRequired,breadcrumbs:o().array,paddingBottom:o().bool},m.defaultProps={paddingBottom:!1};var f=function(e){var t=e.title,r=e.renderTitleTag,c=e.description,o=e.children;return a().createElement(n.Fragment,null,a().createElement(i.Flex,null,a().createElement(i.FlexItem,{className:"pf-u-mb-sm"},a().createElement(p.Z,{title:t||a().createElement(l.h2,null),className:"rbac-page-header__title"})),a().createElement(i.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},r&&r())),c&&a().createElement(i.TextContent,{className:"rbac-page-header__description"},"string"==typeof c?a().createElement(i.Text,{component:i.TextVariants.p},c):c),o)};f.propTypes={title:o().node,renderTitleTag:o().func,description:o().node,children:o().oneOfType([o().node,o().arrayOf(o().node)])}},93327:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(45987),a=r(92950),c=r.n(a),o=r(45697),i=r.n(o),l=r(334),s=["pageAction"],u=function(e){var t=e.pageAction,r=(0,n.Z)(e,s);return(0,a.useEffect)((function(){return insights.chrome.appAction(t),function(){return insights.chrome.appAction(void 0)}}),[t]),c().createElement(l.Route,r)};u.propTypes={pageAction:i().string.isRequired};const p=u}}]);
//# sourceMappingURL=../sourcemaps/662.e07e25e3c5bf3457967b51fe332741b4.js.map