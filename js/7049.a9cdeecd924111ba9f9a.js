(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[7049],{36452:(e,t,o)=>{"use strict";o.d(t,{sD:()=>i,GM:()=>n,hb:()=>c});var r=o(66029),s=o.n(r);const n={rowClick:"rowClick"},a=(0,r.createContext)({subscribe:()=>()=>null,trigger:()=>null}),i=({children:e})=>{const[t,o]=(0,r.useState)({[n.rowClick]:{}}),i=(0,r.useCallback)(((e,...o)=>{Object.values(t[e]).forEach((e=>{e(...o)}))}),[t]);return s().createElement(a.Provider,{value:{subscribe:(e,t)=>{const r=crypto.randomUUID();return o((o=>Object.assign(Object.assign({},o),{[e]:Object.assign(Object.assign({},o[e]),{[r]:t})}))),()=>{o((t=>{const o=Object.assign({},t);return delete o[e][r],o}))}},trigger:i}},e)},c=()=>(0,r.useContext)(a)},72640:(e,t,o)=>{"use strict";o.d(t,{GM:()=>n.GM,H9:()=>s.ZP,VO:()=>a.ZP,aJ:()=>r.aJ,hb:()=>n.hb}),o(93302);var r=o(16623),s=(o(22479),o(84816),o(65612),o(94034),o(66828)),n=o(36452),a=o(16503)},19993:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r}),o(70347);const r={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},62702:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r}),o(25238);const r={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},66042:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r}),o(87234);const r={bullseye:"pf-v5-l-bullseye"}},55244:(e,t,o)=>{"use strict";t.ns=void 0;var r=o(65353),s=o(12663);t.ns=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p;return r.__generator(this,(function(d){return t=function(e){return 1===e.length&&Object.prototype.hasOwnProperty.call(e,"workspacesBasicWorkspace")}(e)?e[0]:["workspacesBasicWorkspace","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.workspacesBasicWorkspace,n=t.options,a=void 0===n?{}:n,i=new URL("/workspaces/",s.DUMMY_BASE_URL),c=r.__assign({method:"POST"},a),p={},(u={})["Content-Type"]="application/json",(0,s.setSearchParams)(i,p),c.headers=r.__assign(r.__assign({},u),a.headers),[2,{urlObj:i,options:c,serializeData:o}]}))}))},t.ZP=t.ns},47818:(e,t,o)=>{"use strict";t.Ne=void 0;var r=o(65353),s=o(12663);t.Ne=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p,d;return r.__generator(this,(function(l){return t=function(e){return 1===e.length&&Object.prototype.hasOwnProperty.call(e,"uuid")}(e)?e[0]:["uuid","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.uuid,n=t.options,a=void 0===n?{}:n,i="/workspaces/{uuid}/".replace("{".concat("uuid","}"),encodeURIComponent(String(o))),c=new URL(i,s.DUMMY_BASE_URL),u=r.__assign({method:"DELETE"},a),p={},d={},(0,s.setSearchParams)(c,d),u.headers=r.__assign(r.__assign({},p),a.headers),[2,{urlObj:c,options:u}]}))}))},t.ZP=t.Ne},54667:(e,t,o)=>{"use strict";t.Zo=void 0;var r=o(65353),s=o(12663);t.Zo=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p,d;return r.__generator(this,(function(l){return t=function(e){return 1===e.length&&!0}(e)?e[0]:["limit","offset","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.limit,n=t.offset,a=t.options,i=void 0===a?{}:a,c=new URL("/workspaces/",s.DUMMY_BASE_URL),u=r.__assign({method:"GET"},i),p={},d={},void 0!==o&&(d.limit=o),void 0!==n&&(d.offset=n),(0,s.setSearchParams)(c,d),u.headers=r.__assign(r.__assign({},p),i.headers),[2,{urlObj:c,options:u}]}))}))},t.ZP=t.Zo},25034:(e,t,o)=>{"use strict";t.CX=void 0;var r=o(65353),s=o(12663);t.CX=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p,d,l;return r.__generator(this,(function(_){return t=function(e){return 1===e.length&&Object.prototype.hasOwnProperty.call(e,"uuid")&&Object.prototype.hasOwnProperty.call(e,"workspacesPatchWorkspaceRequest")}(e)?e[0]:["uuid","workspacesPatchWorkspaceRequest","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.uuid,n=t.workspacesPatchWorkspaceRequest,a=t.options,i=void 0===a?{}:a,c="/workspaces/{uuid}/".replace("{".concat("uuid","}"),encodeURIComponent(String(o))),u=new URL(c,s.DUMMY_BASE_URL),p=r.__assign({method:"PATCH"},i),l={},(d={})["Content-Type"]="application/json",(0,s.setSearchParams)(u,l),p.headers=r.__assign(r.__assign({},d),i.headers),[2,{urlObj:u,options:p,serializeData:n}]}))}))},t.ZP=t.CX},26057:(e,t,o)=>{"use strict";t.vc=void 0;var r=o(65353),s=o(12663);t.vc=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p,d,l;return r.__generator(this,(function(_){return t=function(e){return 1===e.length&&Object.prototype.hasOwnProperty.call(e,"uuid")&&!0}(e)?e[0]:["uuid","includeAncestry","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.uuid,n=t.includeAncestry,a=t.options,i=void 0===a?{}:a,c="/workspaces/{uuid}/".replace("{".concat("uuid","}"),encodeURIComponent(String(o))),u=new URL(c,s.DUMMY_BASE_URL),p=r.__assign({method:"GET"},i),d={},l={},void 0!==n&&(l.include_ancestry=n),(0,s.setSearchParams)(u,l),p.headers=r.__assign(r.__assign({},d),i.headers),[2,{urlObj:u,options:p}]}))}))},t.ZP=t.vc},46737:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>x});var r=o(66029),s=o.n(r),n=o(25387),a=o(86706),i=o(71079),c=o(238),u=o(33366),p=o(26057),d=o(54667),l=o(55244),_=o(25034),f=o(47818),m=o(40930),h=o(75614);const v=c.Z.create();v.interceptors.response.use(null,(e=>{if(e.response&&404===e.response.status)return Promise.resolve({})})),v.interceptors.response.use(u.xH),v.interceptors.response.use(null,u.ub),v.interceptors.response.use(null,u.ud);const g=new m.APIFactory(h.un,{getWorkspace:async(...e)=>{const t=await(0,p.ZP)(...e);return{...t,options:{...t.options,transformResponse:()=>({})}}},createWorkspace:async(...e)=>{const t=await(0,l.ZP)(...e);return{...t,options:{...t.options,transformResponse:()=>({})}}},updateWorkspace:async(...e)=>{const t=await(0,_.ZP)(...e);return{...t,options:{...t.options,transformResponse:()=>({})}}},deleteWorkspace:async(...e)=>{const t=await(0,f.ZP)(...e);return{...t,options:{...t.options,transformResponse:()=>({})}}},listWorkspaces:d.ZP},{axios:v});async function b(){return await g.listWorkspaces()}var w=o(2550),k=o(56756),P=o(34685),y=o(72640);const x=()=>{const e=(0,n.YB)(),t=(0,a.useDispatch)(),o=(0,y.aJ)({matchOption:(e,t)=>e.id===t.id}),{isLoading:c,workspaces:u,error:p}=(0,a.useSelector)((e=>e.workspacesReducer)),[d,l]=(0,r.useState)([]);(0,r.useEffect)((()=>{t({type:i.Zw,payload:b().catch((e=>{throw e}))})}),[t]),(0,r.useEffect)((()=>{u.length>0&&l((e=>{const t={};e.forEach((e=>{t[e.uuid]={id:e.uuid,name:e.name,description:e.description,children:[]}}));const o=[];return e.forEach((e=>{e.parent_id?t[e.parent_id]?.children?.push(t[e.uuid]):o.push(t[e.uuid])})),o})(u))}),[u]);const _=e=>e.map((e=>({row:[e.name,e.description],id:e.id,...e.children&&e.children.length>0?{children:_(e.children)}:{}}))),f=_(d);return s().createElement(s().Fragment,null,s().createElement(k.yW,{title:e.formatMessage(w.Z.workspaces),subtitle:e.formatMessage(w.Z.workspacesSubtitle),linkProps:{label:e.formatMessage(w.Z.workspacesLearnMore),isExternal:!0,href:"#"}}),s().createElement(P.PageSection,null,c&&s().createElement("p",null,"Loading..."),p&&s().createElement("p",null,"Error: ",p),!c&&!p&&s().createElement(y.VO,{selection:o},s().createElement(y.H9,{isTreeTable:!0,"aria-label":"Repositories table",ouiaId:"ouiaId",columns:["Name","Description"],rows:f}))))}},70347:()=>{},25238:()=>{},92084:()=>{},97236:()=>{},87234:()=>{},38299:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7049.6489af408de19d74765fce383e8a72e9.js.map