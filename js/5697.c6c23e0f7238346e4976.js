(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[5697,2403],{33968:(e,t,o)=>{"use strict";o.d(t,{Ed:()=>i,wf:()=>n,xD:()=>c});var r=o(93345),s=o.n(r);const n={rowClick:"rowClick"},a=(0,r.createContext)({subscribe:()=>()=>null,trigger:()=>null}),i=({children:e})=>{const[t,o]=(0,r.useState)({[n.rowClick]:{}}),i=(0,r.useCallback)(((e,...o)=>{Object.values(t[e]).forEach((e=>{e(...o)}))}),[t]);return s().createElement(a.Provider,{value:{subscribe:(e,t)=>{const r=crypto.randomUUID();return o((o=>Object.assign(Object.assign({},o),{[e]:Object.assign(Object.assign({},o[e]),{[r]:t})}))),()=>{o((t=>{const o=Object.assign({},t);return delete o[e][r],o}))}},trigger:i}},e)},c=()=>(0,r.useContext)(a)},29460:(e,t,o)=>{"use strict";o.d(t,{Jk:()=>r.Jk,U$:()=>a.Ay,Ub:()=>s.Ay,wf:()=>n.wf,xD:()=>n.xD}),o(75500);var r=o(59622),s=(o(13692),o(53781),o(71604),o(608),o(6271)),n=o(33968),a=o(52453)},61354:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r}),o(95067);const r={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},81539:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r}),o(26078);const r={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},32069:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r}),o(2580);const r={bullseye:"pf-v5-l-bullseye"}},17478:(e,t,o)=>{"use strict";t.cx=void 0;var r=o(8674),s=o(34425);t.cx=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p;return r.__generator(this,(function(d){return t=function(e){return 1===e.length&&Object.prototype.hasOwnProperty.call(e,"workspacesBasicWorkspace")}(e)?e[0]:["workspacesBasicWorkspace","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.workspacesBasicWorkspace,n=t.options,a=void 0===n?{}:n,i=new URL("/workspaces/",s.DUMMY_BASE_URL),c=r.__assign({method:"POST"},a),p={},(u={})["Content-Type"]="application/json",(0,s.setSearchParams)(i,p),c.headers=r.__assign(r.__assign({},u),a.headers),[2,{urlObj:i,options:c,serializeData:o}]}))}))},t.Ay=t.cx},51897:(e,t,o)=>{"use strict";t.ve=void 0;var r=o(8674),s=o(34425);t.ve=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p,d;return r.__generator(this,(function(l){return t=function(e){return 1===e.length&&Object.prototype.hasOwnProperty.call(e,"uuid")}(e)?e[0]:["uuid","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.uuid,n=t.options,a=void 0===n?{}:n,i="/workspaces/{uuid}/".replace("{".concat("uuid","}"),encodeURIComponent(String(o))),c=new URL(i,s.DUMMY_BASE_URL),u=r.__assign({method:"DELETE"},a),p={},d={},(0,s.setSearchParams)(c,d),u.headers=r.__assign(r.__assign({},p),a.headers),[2,{urlObj:c,options:u}]}))}))},t.Ay=t.ve},44430:(e,t,o)=>{"use strict";t.OE=void 0;var r=o(8674),s=o(34425);t.OE=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p,d;return r.__generator(this,(function(l){return t=function(e){return 1===e.length&&!0}(e)?e[0]:["limit","offset","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.limit,n=t.offset,a=t.options,i=void 0===a?{}:a,c=new URL("/workspaces/",s.DUMMY_BASE_URL),u=r.__assign({method:"GET"},i),p={},d={},void 0!==o&&(d.limit=o),void 0!==n&&(d.offset=n),(0,s.setSearchParams)(c,d),u.headers=r.__assign(r.__assign({},p),i.headers),[2,{urlObj:c,options:u}]}))}))},t.Ay=t.OE},46044:(e,t,o)=>{"use strict";t.Mp=void 0;var r=o(8674),s=o(34425);t.Mp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p,d,l;return r.__generator(this,(function(_){return t=function(e){return 1===e.length&&Object.prototype.hasOwnProperty.call(e,"uuid")&&Object.prototype.hasOwnProperty.call(e,"workspacesPatchWorkspaceRequest")}(e)?e[0]:["uuid","workspacesPatchWorkspaceRequest","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.uuid,n=t.workspacesPatchWorkspaceRequest,a=t.options,i=void 0===a?{}:a,c="/workspaces/{uuid}/".replace("{".concat("uuid","}"),encodeURIComponent(String(o))),u=new URL(c,s.DUMMY_BASE_URL),p=r.__assign({method:"PATCH"},i),l={},(d={})["Content-Type"]="application/json",(0,s.setSearchParams)(u,l),p.headers=r.__assign(r.__assign({},d),i.headers),[2,{urlObj:u,options:p,serializeData:n}]}))}))},t.Ay=t.Mp},7586:(e,t,o)=>{"use strict";t.CU=void 0;var r=o(8674),s=o(34425);t.CU=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.__awaiter(void 0,void 0,void 0,(function(){var t,o,n,a,i,c,u,p,d,l;return r.__generator(this,(function(_){return t=function(e){return 1===e.length&&Object.prototype.hasOwnProperty.call(e,"uuid")&&!0}(e)?e[0]:["uuid","includeAncestry","options"].reduce((function(t,o,s){var n;return r.__assign(r.__assign({},t),((n={})[o]=e[s],n))}),{}),o=t.uuid,n=t.includeAncestry,a=t.options,i=void 0===a?{}:a,c="/workspaces/{uuid}/".replace("{".concat("uuid","}"),encodeURIComponent(String(o))),u=new URL(c,s.DUMMY_BASE_URL),p=r.__assign({method:"GET"},i),d={},l={},void 0!==n&&(l.include_ancestry=n),(0,s.setSearchParams)(u,l),p.headers=r.__assign(r.__assign({},d),i.headers),[2,{urlObj:u,options:p}]}))}))},t.Ay=t.CU},96512:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>E});var r=o(93345),s=o.n(r),n=o(8604),a=o(69733),i=o(71966),c=o(71083),u=o(6923),p=o(7586),d=o(44430),l=o(17478),_=o(46044),f=o(51897),m=o(75446),v=o(47181);const h=c.A.create();h.interceptors.response.use(null,(e=>{if(e.response&&404===e.response.status)return Promise.resolve({})})),h.interceptors.response.use(u.bl),h.interceptors.response.use(null,u.Xy),h.interceptors.response.use(null,u.u2);const g=new m.APIFactory(v.xT,{getWorkspace:async(...e)=>{const t=await(0,p.Ay)(...e);return{...t,options:{...t.options,transformResponse:()=>({})}}},createWorkspace:async(...e)=>{const t=await(0,l.Ay)(...e);return{...t,options:{...t.options,transformResponse:()=>({})}}},updateWorkspace:async(...e)=>{const t=await(0,_.Ay)(...e);return{...t,options:{...t.options,transformResponse:()=>({})}}},deleteWorkspace:async(...e)=>{const t=await(0,f.Ay)(...e);return{...t,options:{...t.options,transformResponse:()=>({})}}},listWorkspaces:d.Ay},{axios:h});async function b(){return await g.listWorkspaces()}var w=o(40335),k=o(13282),y=o(17228),x=o(29460);const E=()=>{const e=(0,n.tz)(),t=(0,a.useDispatch)(),o=(0,x.Jk)({matchOption:(e,t)=>e.id===t.id}),{isLoading:c,workspaces:u,error:p}=(0,a.useSelector)((e=>e.workspacesReducer)),[d,l]=(0,r.useState)([]);(0,r.useEffect)((()=>{t({type:i.Q8,payload:b().catch((e=>{throw e}))})}),[t]),(0,r.useEffect)((()=>{u.length>0&&l((e=>{const t={};e.forEach((e=>{t[e.uuid]={id:e.uuid,name:e.name,description:e.description,children:[]}}));const o=[];return e.forEach((e=>{e.parent_id?t[e.parent_id]?.children?.push(t[e.uuid]):o.push(t[e.uuid])})),o})(u))}),[u]);const _=e=>e.map((e=>({row:[e.name,e.description],id:e.id,...e.children&&e.children.length>0?{children:_(e.children)}:{}}))),f=_(d);return s().createElement(s().Fragment,null,s().createElement(k.dv,{title:e.formatMessage(w.A.workspaces),subtitle:e.formatMessage(w.A.workspacesSubtitle),linkProps:{label:e.formatMessage(w.A.workspacesLearnMore),isExternal:!0,href:"#"}}),s().createElement(y.PageSection,null,c&&s().createElement("p",null,"Loading..."),p&&s().createElement("p",null,"Error: ",p),!c&&!p&&s().createElement(x.U$,{selection:o},s().createElement(x.Ub,{isTreeTable:!0,"aria-label":"Repositories table",ouiaId:"ouiaId",columns:["Name","Description"],rows:f}))))}},95067:()=>{},17627:()=>{},26078:()=>{},50545:()=>{},5637:()=>{},81117:()=>{},2580:()=>{},36752:()=>{},83696:()=>{}}]);