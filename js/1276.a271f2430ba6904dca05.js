"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[1276,459],{35224:(e,t,a)=>{a.d(t,{u:()=>f,D:()=>m});var o=a(65353),r=a(28416),n=a(86478),i=a(38296);const l=e=>{var{className:t,children:a,isLeftAligned:l}=e,s=(0,o.__rest)(e,["className","children","isLeftAligned"]);return r.createElement("div",Object.assign({className:(0,i.css)(n.default.tooltipContent,l&&n.default.modifiers.textAlignLeft,t)},s),a)};l.displayName="TooltipContent";const s=e=>{var{className:t}=e,a=(0,o.__rest)(e,["className"]);return r.createElement("div",Object.assign({className:(0,i.css)(n.default.tooltipArrow,t)},a))};s.displayName="TooltipArrow";var c=a(1774);const d={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var m,p=a(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(m||(m={}));let u=1;const f=e=>{var{content:t,position:a="top",trigger:m="mouseenter focus",isVisible:f=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:b="",entryDelay:y=300,exitDelay:v=300,appendTo:E=(()=>document.body),zIndex:k=9999,minWidth:C,maxWidth:x=d.value,distance:Z=15,aria:N="describedby",flipBehavior:w=["top","right","bottom","left","top","right","bottom"],id:O="pf-tooltip-"+u++,children:S,animationDuration:R=300,triggerRef:T,"aria-live":M=(T?"polite":"off"),onTooltipHidden:A=(()=>{})}=e,_=(0,o.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const D=m.includes("mouseenter"),B=m.includes("focus"),I=m.includes("click"),L="manual"===m,[j,P]=r.useState(!1),F=r.createRef();r.useEffect((()=>{f?V():W()}),[f]);const V=()=>{P(!0)},W=()=>{P(!1)},z={top:n.default.modifiers.top,bottom:n.default.modifiers.bottom,left:n.default.modifiers.left,right:n.default.modifiers.right,"top-start":n.default.modifiers.topLeft,"top-end":n.default.modifiers.topRight,"bottom-start":n.default.modifiers.bottomLeft,"bottom-end":n.default.modifiers.bottomRight,"left-start":n.default.modifiers.leftTop,"left-end":n.default.modifiers.leftBottom,"right-start":n.default.modifiers.rightTop,"right-end":n.default.modifiers.rightBottom},$=x!==d.value,q=r.createElement("div",Object.assign({"aria-live":M,className:(0,i.css)(n.default.tooltip,b),role:"tooltip",id:O,style:{maxWidth:$?x:null},ref:F},_),r.createElement(s,null),r.createElement(l,{isLeftAligned:g},t));return r.createElement(p.Popper,{trigger:"none"!==N&&j?"describedby"===N&&S&&S.props&&!S.props["aria-describedby"]?r.cloneElement(S,{"aria-describedby":O}):"labelledby"===N&&S.props&&!S.props["aria-labelledby"]?r.cloneElement(S,{"aria-labelledby":O}):S:S,triggerRef:T,popper:q,popperRef:F,minWidth:void 0!==C?C:"revert",appendTo:E,isVisible:j,positionModifiers:z,distance:Z,placement:a,onMouseEnter:D&&V,onMouseLeave:D&&W,onPopperMouseEnter:D&&V,onPopperMouseLeave:D&&W,onFocus:B&&V,onBlur:B&&W,onDocumentClick:I&&((e,t)=>{j?W():e.target===t&&V()}),onDocumentKeyDown:L?null:e=>{L||e.key===c.yu.Escape&&j&&W()},onTriggerEnter:L?null:e=>{e.key===c.yu.Enter&&(j?W():V())},enableFlip:h,zIndex:k,flipBehavior:w,animationDuration:R,entryDelay:y,exitDelay:v,onHidden:A})};f.displayName="Tooltip"},41435:(e,t,a)=>{a.d(t,{Dl:()=>i,dw:()=>r,e4:()=>l,ir:()=>o});var o,r,n=a(28416);!function(e){e.right="right",e.left="left"}(o||(o={})),function(e){e.up="up",e.down="down"}(r||(r={}));const i=n.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),l=n.createContext({keyHandler:null,sendRef:null})},86478:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o}),a(49854);const o={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},39173:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(85893),r=a(94184),n=a.n(r),i=a(78956);const l=function(e){var t=e.className,a=e.title,r=n()(t);return(0,o.jsx)(i.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle",children:a})}},7876:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(85893),r=a(94184),n=a.n(r),i=function(){return i=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};const l=function(e){var t,a=e.type,r=e.children,l=e.className,s=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(e,["type","children","className"]),c=n()(l,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,o.jsxs)("section",i({},s,{className:c,children:[" ",r," "]}))}},23340:(e,t,a)=>{a.d(t,{MS:()=>n,aX:()=>o,qF:()=>r});const o=(e,t,a,o={})=>{const r=new URLSearchParams(e.search);let n=a.reduce(((e,t)=>{const a=r.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(o).forEach((e=>{const t=o[e];n={...n,[e]:Array.isArray(n[e])?[...new Set([...n[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||n[e]},Array.isArray(t)?t.forEach((t=>r.getAll(e).includes(t)||r.append(e,t))):r.get(e)||t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0}),n},r=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},n=(e,t,a)=>{const o=new URLSearchParams(e.search);Object.keys(a).forEach((e=>o.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&o.append(e,t))):t&&o.set(e,t)})),t({pathname:e.pathname,search:o.toString()},{replace:!0})}},82617:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(28416),r=a.n(o),n=a(45697),i=a.n(n),l=a(62012),s=a(75629),c=a(12849);const d=e=>e?r().createElement(s.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?r().createElement(s.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r().createElement(l.NavLink,{end:!0,to:e.to},e.title)||e.title):r().createElement(c.Vj,{key:t})))):null;d.propTypes={breadcrumbs:i().object};const m=d},13851:(e,t,a)=>{a.d(t,{Q:()=>y,y:()=>v});var o=a(28416),r=a.n(o),n=a(45697),i=a.n(n),l=a(64380),s=a(86304),c=a(12849),d=a(82617),m=a(85893),p=a(94184),u=a.n(p);const f=r().createContext("light");var g=function(){return g=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},g.apply(this,arguments)};const h=function(e){var t=e.className,a=e.children,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(e,["className","children"]),r=u()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,m.jsx)(f.Consumer,{children:function(e){var t,n;void 0===e&&(e="light");var i=u()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((n={})["pf-m-light"]="light"===e,n));return(0,m.jsx)("section",g({},o,{className:"".concat(r," ").concat(i),"widget-type":"InsightsPageHeader",children:a}))}})};var b=a(39173);const y=({children:e,breadcrumbs:t})=>r().createElement(o.Fragment,null,t&&r().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},r().createElement(d.Z,{...t})),r().createElement(h,{className:"rbac-page-header"},e));y.propTypes={children:i().oneOfType([i().arrayOf(i().node),i().node]).isRequired,breadcrumbs:i().array,paddingBottom:i().bool},y.defaultProps={paddingBottom:!1};const v=({title:e,renderTitleTag:t,description:a,children:n})=>r().createElement(o.Fragment,null,r().createElement(s.Flex,null,r().createElement(s.FlexItem,{className:"pf-v5-u-mb-sm"},r().createElement(b.Z,{title:e||r().createElement(c.h2,null),className:"rbac-page-header__title"})),r().createElement(s.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&r().createElement(l.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?r().createElement(l.Text,{component:l.TextVariants.p},a):a),n);v.propTypes={title:i().node,renderTitleTag:i().func,description:i().node,children:i().oneOfType([i().node,i().arrayOf(i().node)])}},69493:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(28416),r=a.n(o),n=a(55573),i=a(45697),l=a.n(i),s=a(94184),c=a.n(s);const d=({className:e,row:t,...a})=>r().createElement(n.e,{className:c()(e,{"rbac-c-group-default":t.isPlatformDefault||t.isAdminDefault}),row:t,...a});d.propTypes={row:l().shape({isAdminDefault:l().bool,isPlatformDefault:l().bool}),className:l().string};const m=d},7841:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var o=a(28416),r=a.n(o),n=a(62012),i=a(7732),l=a(31055),s=a(23539),c=a(25387),d=a(55140),m=a(7876),p=a(86706),u=a(97246),f=a(1439),g=a.n(f),h=a(78972),b=a(94184),y=a.n(b),v=a(45697),E=a.n(v),k=a(62410),C=a(64756),x=a(29301),Z=a(14289),N=a(75614),w=a(2550);const O=({id:e,uuid:t,bodyContent:a})=>{const[n,i]=(0,o.useState)(!1),l=(0,o.useRef)(null);return r().createElement("span",{ref:l,key:`${t}-popover`,id:e},r().createElement(h.Popover,{zIndex:"110",position:"right",isVisible:n,shouldClose:()=>i(!1),hideOnOutsideClick:!0,bodyContent:a,appendTo:l.current},r().createElement(g(),{onClick:()=>i(!n),className:y()("pf-v5-c-question-circle-icon",{"icon-active":n})})))};O.propTypes={id:E().string.isRequired,uuid:E().string.isRequired,bodyContent:E().string.isRequired};var S=a(77044),R=a(13851),T=a(69493),M=a(74982),A=a(23340),_=a(86601);const D=()=>{const e=(0,c.YB)(),t=(0,p.useDispatch)(),a=(0,n.useNavigate)(),f=(0,n.useLocation)(),g=(0,d.Z)(),h=e=>t((0,S.bt)({...e,usesMetaInURL:!0,chrome:g,platformDefault:!1,adminDefault:!1})),{orgAdmin:b,userAccessAdministrator:y}=(0,o.useContext)(_.Z),v=b||y,E=(0,o.useRef)(null),D=[{title:e.formatMessage(w.Z.name),key:"name",transforms:[i.p]},{title:e.formatMessage(w.Z.roles)},{title:e.formatMessage(w.Z.members)},{title:e.formatMessage(w.Z.lastModified),key:"modified",transforms:[i.p]}],[B,I]=(0,o.useState)({index:Number(v),direction:"asc"}),[L,j]=(0,o.useState)([]),[P,F]=(0,o.useState)([]),V=`${"desc"===B?.direction?"-":""}${D[B?.index-Number(v)].key}`,{groups:W,pagination:z,filters:$,isLoading:q}=(0,p.useSelector)((({groupReducer:{groups:{data:e,filters:t,pagination:a},isLoading:o,adminGroup:r,systemGroup:n}})=>({groups:[...r?.name?.match(new RegExp(t.name,"i"))?[r]:[],...n?.name?.match(new RegExp(t.name,"i"))?[n]:[],...e?.filter((({platform_default:e,admin_default:t}={})=>!(e||t)))||[]],pagination:{limit:a?.limit??(b?M.HE:M.he).limit,offset:a?.offset??(b?M.HE:M.he).offset,count:a?.count,redirected:a?.redirected},filters:t,isLoading:o,systemGroup:n})),p.shallowEqual),[G,H]=(0,o.useState)($?.name||"");(0,o.useEffect)((()=>{(0,M.oG)(f,a,z.limit,z.offset)}),[z.offset,z.limit,z.count,z.redirected]),(0,o.useEffect)((()=>{(0,A.MS)(f,a,{name:G})}),[G]),(0,o.useEffect)((()=>{const{limit:e,offset:o}=(0,M.rj)(f,a,z),{name:r}=(0,A.aX)(f,a,["name"],{name:G});H(r),g.appNavClick({id:"groups",secondaryNav:!0}),h({limit:e,offset:o,orderBy:V,filters:{name:r}}),t((0,S.fB)({filterValue:r,chrome:g})),t((0,S.WD)({filterValue:r,chrome:g}))}),[]),(0,o.useEffect)((()=>{f.pathname.includes("detail")?(0,x.Gw)(f,a):((0,M.Zc)(f)||(0,M.oG)(f,a,z.limit,z.offset),G?.length>0&&!(0,A.qF)(f,["name"])&&(0,A.aX)(f,a,["name"],{name:G}))}),[f.pathname]);const U=W.map((e=>e.platform_default||e.admin_default?{...e,principalCount:"All"+(e.admin_default?" org admins":"")}:e)),X=((e,t,a=[])=>{const n=(0,c.YB)();return t.reduce(((t,{uuid:i,name:l,roleCount:s,principalCount:c,modified:d,platform_default:m,admin_default:p})=>[...t,{uuid:i,isAdminDefault:p,isPlatformDefault:m,cells:[r().createElement(o.Fragment,{key:i},r().createElement("div",{className:"pf-m-inline-flex"},e?r().createElement(C.Z,{key:`${i}-link`,state:{uuid:i},to:Z.Z["group-detail"].link.replace(":groupId",m?N.Cn:i)},l):l,(m||p)&&r().createElement(O,{id:`default${p?"-admin":""}-group-popover`,uuid:i,key:`${i}-popover`,bodyContent:n.formatMessage(p?w.Z.orgAdminInheritedRoles:w.Z.usersInheritedRoles)}))),s,c,r().createElement(o.Fragment,{key:`${i}-modified`},r().createElement(k.Z,{date:d,type:(0,x.mh)(d)}))],selected:Boolean(a&&a.find((e=>e.uuid===i)))}]),[])})(v,U,L),Q=z.count===P.length;return r().createElement(s.Stack,{className:"rbac-c-groups"},r().createElement(s.StackItem,null,r().createElement(R.Q,{paddingBottom:!0},r().createElement(R.y,{title:e.formatMessage(w.Z.groups)}))),r().createElement(s.StackItem,null,r().createElement(m.Z,{type:"content",id:"tab-groups"},r().createElement(u.M,{data:W,rows:X,sortBy:B,onSort:(e,t,o)=>{const r=`${"desc"===o?"-":""}${D[t-Number(v)].key}`;I({index:t,direction:o}),(0,A.MS)(f,a,{name:G}),h({...z,orderBy:r,filters:{name:G}})},columns:D,isSelectable:v,isRowSelectable:e=>!(e.platform_default||e.admin_default||e.system),checkedRows:L,setCheckedItems:e=>{j((t=>e(t).filter((({platform_default:e,admin_default:t})=>!(e||t))).map((({uuid:e,name:t})=>({uuid:e,name:t})))))},actionResolver:({isPlatformDefault:t,isAdminDefault:o})=>t||o||!v?null:[{title:e.formatMessage(w.Z.edit),onClick:(e,t,o)=>a((0,C.n)(Z.Z["edit-group"].link).replace(":groupId",o.uuid))},{title:e.formatMessage(w.Z.delete),onClick:(e,t,o)=>{F([o]),a((0,C.n)(Z.Z["remove-group"].link.replace(":groupId",o.uuid)))}}],titlePlural:e.formatMessage(w.Z.groups).toLowerCase(),titleSingular:e.formatMessage(w.Z.group).toLowerCase(),ouiaId:"groups-table",pagination:z,filterValue:G,fetchData:({name:e,count:t,limit:o,offset:r,orderBy:n})=>((0,A.MS)(f,a,{name:e}),h({count:t,limit:o,offset:r,orderBy:n,filters:{name:e}})),setFilterValue:({name:e=""})=>H(e),toolbarButtons:()=>[...v?[r().createElement(C.Z,{to:Z.Z["add-group"].link,key:"add-group",className:"rbac-m-hide-on-sm"},r().createElement(l.Button,{ouiaId:"create-group-button",variant:"primary","aria-label":"Create group"},e.formatMessage(w.Z.createGroup))),{label:e.formatMessage(w.Z.createGroup),props:{className:"rbac-m-hide-on-md"},onClick:()=>a((0,C.n)(Z.Z["add-group"].link))},{label:e.formatMessage(w.Z.edit),props:{isDisabled:!(1===L.length)},onClick:()=>a((0,C.n)(Z.Z["edit-group"].link.replace(":groupId",L[0].uuid)))},{label:e.formatMessage(w.Z.delete),props:{isDisabled:!L.length>0},onClick:()=>{F(L),a((0,C.n)(Z.Z["remove-group"].link.replace(":groupId",L.map((({uuid:e})=>e)))))}}]:[]],isLoading:q,filterPlaceholder:e.formatMessage(w.Z.name).toLowerCase(),rowWrapper:T.Z,tableId:"groups",textFilterRef:E}),r().createElement(o.Suspense,null,r().createElement(n.Outlet,{context:{pagination:z,filters:$,[Z.Z["add-group"].path]:{orderBy:V,postMethod:e=>{H(""),h(e)}},[Z.Z["edit-group"].path]:{postMethod:e=>{H(""),h({...e,orderBy:V})},cancelRoute:(0,x.zk)(Z.Z.groups.link,z,$),submitRoute:(0,x.zk)(Z.Z.groups.link,{...z,offset:0},$)},[Z.Z["remove-group"].path]:{postMethod:(e,t)=>{h({...t,filters:{name:Q?"":G},orderBy:V}),Q&&H(""),j(L.filter((t=>!e.includes(t.uuid))))},cancelRoute:(0,x.zk)(Z.Z.groups.link,z,$),submitRoute:(0,x.zk)(Z.Z.groups.link,{...z,offset:0},Q?{}:$)}}})))))}}}]);
//# sourceMappingURL=../sourcemaps/1276.d053ba77589d8def3874316e6cb3e8b4.js.map