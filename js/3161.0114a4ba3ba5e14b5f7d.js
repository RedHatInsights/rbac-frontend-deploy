"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3161,459],{41435:(e,t,a)=>{a.d(t,{Dl:()=>s,dw:()=>r,e4:()=>o,ir:()=>l});var l,r,n=a(28416);!function(e){e.right="right",e.left="left"}(l||(l={})),function(e){e.up="up",e.down="down"}(r||(r={}));const s=n.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),o=n.createContext({keyHandler:null,sendRef:null})},46818:(e,t,a)=>{a.d(t,{P8:()=>r});var l=a(78632);const r=()=>({className:l.Z.modifiers.nowrap})},40472:(e,t)=>{t.__esModule=!0,t.global_breakpoint_2xl={name:"--pf-v5-global--breakpoint--2xl",value:"1450px",var:"var(--pf-v5-global--breakpoint--2xl)"},t.default=t.global_breakpoint_2xl},92732:(e,t)=>{t.__esModule=!0,t.global_breakpoint_lg={name:"--pf-v5-global--breakpoint--lg",value:"992px",var:"var(--pf-v5-global--breakpoint--lg)"},t.default=t.global_breakpoint_lg},60144:(e,t)=>{t.__esModule=!0,t.global_breakpoint_sm={name:"--pf-v5-global--breakpoint--sm",value:"576px",var:"var(--pf-v5-global--breakpoint--sm)"},t.default=t.global_breakpoint_sm},63242:(e,t)=>{t.__esModule=!0,t.global_breakpoint_xl={name:"--pf-v5-global--breakpoint--xl",value:"1200px",var:"var(--pf-v5-global--breakpoint--xl)"},t.default=t.global_breakpoint_xl},79995:(e,t)=>{t.U6={name:"--pf-v5-global--breakpoint--xs",value:"0",var:"var(--pf-v5-global--breakpoint--xs)"},t.ZP=t.U6},63456:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(85893),r=a(94184),n=a.n(r),s=a(28416);const o=a.n(s)().createContext("light");var i=function(){return i=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};const c=function(e){var t=e.className,a=e.children,r=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a}(e,["className","children"]),s=n()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,l.jsx)(o.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var c=n()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,l.jsx)("section",i({},r,{className:"".concat(s," ").concat(c),"widget-type":"InsightsPageHeader",children:a}))}})}},39173:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(85893),r=a(94184),n=a.n(r),s=a(78956);const o=function(e){var t=e.className,a=e.title,r=n()(t);return(0,l.jsx)(s.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle",children:a})}},7876:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(85893),r=a(94184),n=a.n(r),s=function(){return s=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};const o=function(e){var t,a=e.type,r=e.children,o=e.className,i=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a}(e,["type","children","className"]),c=n()(o,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,l.jsxs)("section",s({},i,{className:c,children:[" ",r," "]}))}},23340:(e,t,a)=>{a.d(t,{MS:()=>n,aX:()=>l,qF:()=>r});const l=(e,t,a,l={})=>{const r=new URLSearchParams(e.search);let n=a.reduce(((e,t)=>{const a=r.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(l).forEach((e=>{const t=l[e];n={...n,[e]:Array.isArray(n[e])?[...new Set([...n[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||n[e]},Array.isArray(t)?t.forEach((t=>r.getAll(e).includes(t)||r.append(e,t))):r.get(e)||t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0}),n},r=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},n=(e,t,a)=>{const l=new URLSearchParams(e.search);Object.keys(a).forEach((e=>l.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&l.append(e,t))):t&&l.set(e,t)})),t({pathname:e.pathname,search:l.toString()},{replace:!0})}},82617:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(28416),r=a.n(l),n=a(45697),s=a.n(n),o=a(62012),i=a(75629),c=a(12849);const p=e=>e?r().createElement(i.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?r().createElement(i.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r().createElement(o.NavLink,{end:!0,to:e.to},e.title)||e.title):r().createElement(c.Vj,{key:t})))):null;p.propTypes={breadcrumbs:s().object};const d=p},2086:(e,t,a)=>{a.d(t,{Q:()=>u,y:()=>f});var l=a(28416),r=a.n(l),n=a(45697),s=a.n(n),o=a(64380),i=a(86304),c=a(12849),p=a(82617),d=a(63456),m=a(39173);const u=({children:e,breadcrumbs:t})=>r().createElement(l.Fragment,null,t&&r().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},r().createElement(p.Z,{...t})),r().createElement(d.Z,{className:"rbac-page-header"},e));u.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node]).isRequired,breadcrumbs:s().array,paddingBottom:s().bool},u.defaultProps={paddingBottom:!1};const f=({title:e,renderTitleTag:t,description:a,children:n})=>r().createElement(l.Fragment,null,r().createElement(i.Flex,null,r().createElement(i.FlexItem,{className:"pf-v5-u-mb-sm"},r().createElement(m.Z,{title:e||r().createElement(c.h2,null),className:"rbac-page-header__title"})),r().createElement(i.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&r().createElement(o.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?r().createElement(o.Text,{component:o.TextVariants.p},a):a),n);f.propTypes={title:s().node,renderTitleTag:s().func,description:s().node,children:s().oneOfType([s().node,s().arrayOf(s().node)])}},46944:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var l=a(28416),r=a.n(l),n=a(25387),s=a(86706),o=a(62012),i=a(1082),c=a(7732),p=a(56869),d=a(46818),m=a(31055),u=a(23539),f=a(79995),g=a(60144),b=a(78236),y=a(92732),v=a(63242),h=a(40472);const k={xs:parseInt(f.ZP.value.replace("px","")),sm:parseInt(g.default.value.replace("px","")),md:parseInt(b.default.value.replace("px","")),lg:parseInt(y.default.value.replace("px","")),xl:parseInt(v.default.value.replace("px","")),"2xl":parseInt(h.default.value.replace("px",""))},E=function(){for(var e,t=window.innerWidth,a=0,l=Object.entries(k);a<l.length;a++){var r=l[a],n=r[0];if(r[1]>=t)break;e=n}return e},Z=function(e){return(null==k?void 0:k[e])<=k.sm};var _=a(55140),x=a(7876),w=a(62410),S=a(64380),C=a(75863),O=a(21081),M=a(49004),N=a(34844),I=a(64756),P=a(29301),j=a(2550),T=a(14289),R=a(13563),L=a(2086),A=a(97246),B=a(86601),F=a(74982),z=a(23340),G=a(55573),U=a(45697),$=a.n(U),D=a(94184),H=a.n(D);const V=({className:e,row:t,...a})=>r().createElement(G.e,{className:H()(e,{"rbac-c-role-default":t.system}),row:t,...a});V.propTypes={row:$().shape({system:$().bool}),className:$().string};const W=V;var q=a(77044);const X=()=>{const{orgAdmin:e,userAccessAdministrator:t}=(0,l.useContext)(B.Z),[a,f]=(0,l.useState)([]),g=(0,n.YB)(),b=(0,s.useDispatch)(),y=(0,l.useRef)(null),v=(0,o.useNavigate)(),h=(0,o.useLocation)(),k=(ce=(0,l.useState)((function(){return E()})),pe=ce[0],de=ce[1],me=(0,l.useRef)(pe),(0,l.useEffect)((function(){function e(){var e=E();e!==me.current&&(me.current=e,de(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),pe),G=(0,_.Z)(),{roles:U,filters:$,pagination:D,isLoading:H,adminGroup:V}=(0,s.useSelector)((({roleReducer:{roles:{data:t,filters:a,pagination:l},isLoading:r},groupReducer:{adminGroup:n}})=>({adminGroup:n,roles:t,filters:a,pagination:{limit:l.limit??(e?F.HE:F.he).limit,offset:l.offset??(e?F.HE:F.he).offset,count:l.count,redirected:l.redirected},isLoading:r})),s.shallowEqual),X=[{title:g.formatMessage(j.Z.name),key:"display_name",transforms:[(0,i.d)(20),c.p]},{title:g.formatMessage(j.Z.description)},{title:g.formatMessage(j.Z.groups),cellTransforms:[p.z],transforms:[d.P8]},{title:g.formatMessage(j.Z.permissions),cellTransforms:[p.z],transforms:[d.P8]},{title:g.formatMessage(j.Z.lastModified),key:"modified",transforms:[d.P8,c.p]}],Q=e=>b((0,R.Kt)({...e,usesMetaInURL:!0,chrome:G})),K=e||t,[Y,J]=(0,l.useState)($.display_name||""),[ee,te]=(0,l.useState)({index:Number(K),direction:"asc"}),[ae,le]=(0,l.useState)({}),[re,ne]=(0,l.useState)([]),[se,oe]=(0,l.useState)([]),ie=`${"desc"===ee?.direction?"-":""}${X[ee?.index-Number(K)].key}`;var ce,pe,de,me;(0,l.useEffect)((()=>{(0,F.oG)(h,v,D.limit,D.offset)}),[D.offset,D.limit,D.count,D.redirected]),(0,l.useEffect)((()=>{(0,z.MS)(h,v,{display_name:Y})}),[Y]),(0,l.useEffect)((()=>{const{limit:e,offset:t}=(0,F.rj)(h,v,D),{display_name:a}=(0,z.aX)(h,v,["display_name"],{display_name:Y});J(a),G.appNavClick({id:"roles",secondaryNav:!0}),b((0,q.fB)({chrome:G})),Q({limit:e,offset:t,orderBy:ie,filters:{display_name:a}})}),[]),(0,l.useEffect)((()=>{h.pathname.includes("detail")?(0,P.Gw)(h,v):((0,F.Zc)(h)||(0,F.oG)(h,v,D.limit,D.offset),Y?.length>0&&!(0,z.qF)(h,["display_name"])&&(0,z.aX)(h,v,["display_name"],{display_name:Y}))}),[h.pathname]);const ue=((e,t,a,n,s)=>e.reduce(((e,{uuid:o,access:i=[],display_name:c,name:p,description:d,system:m,accessCount:u,groups_in_count:f,groups_in:g,modified:b},y)=>[...e,{uuid:o,system:m,disableSelection:!!m,selected:Boolean(t?.find?.((e=>e.uuid===o))),cells:[{title:r().createElement(I.Z,{to:T.Z["role-detail"].link.replace(":roleId",o)},c||p)},{title:d},{title:f,props:{isOpen:3===n[o]}},{title:u,props:{isOpen:4===n[o]}},{title:r().createElement(w.Z,{date:b,type:(0,P.mh)(b)})}]},{uuid:`${o}-groups`,parent:3*y,compoundParent:2,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:f>0?r().createElement(O.i,{"aria-label":"Compound groups table",ouiaId:"role-in-groups-nested-table",variant:C.B.compact,cells:[a.formatMessage(j.Z.groupName),a.formatMessage(j.Z.description)," "],rows:g.map((e=>({cells:[{title:r().createElement(I.Z,{to:T.Z["group-detail"].link.replace(":groupId",e.uuid)},e.name)},e.description,{title:s.uuid===e.uuid?null:r().createElement(I.Z,{to:T.Z["roles-add-group-roles"].link.replace(":roleId",o).replace(":groupId",e.uuid),state:{name:e.name}},a.formatMessage(j.Z.addRoleToThisGroup)),props:{className:"pf-v5-u-text-align-right"}}]})))},r().createElement(M.x,null),r().createElement(N.R,null)):r().createElement(S.Text,{className:"pf-v5-u-mx-lg pf-v5-u-my-sm"},a.formatMessage(j.Z.noGroups))}]},{uuid:`${o}-permissions`,parent:3*y,compoundParent:3,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:i.length>0?r().createElement(O.i,{ouiaId:"permissions-in-role-nested-table","aria-label":"Compound permissions table",variant:C.B.compact,cells:[a.formatMessage(j.Z.application),a.formatMessage(j.Z.resourceType),a.formatMessage(j.Z.operation),a.formatMessage(j.Z.lastModified)],rows:i.map((e=>{const[t,a,n]=e.permission.split(":");return{cells:[t,a,n,r().createElement(l.Fragment,{key:`${t}-modified`},r().createElement(w.Z,{date:b,type:(0,P.mh)(b)}))]}}))},r().createElement(M.x,null),r().createElement(N.R,null)):r().createElement(S.Text,{className:"pf-v5-u-mx-lg pf-v5-u-my-sm"},a.formatMessage(j.Z.noPermissions))}]}]),[]))(U,a,g,ae,V),fe=D.count===re.length;return r().createElement(u.Stack,{className:"rbac-c-roles"},r().createElement(u.StackItem,null,r().createElement(L.Q,null,r().createElement(L.y,{title:g.formatMessage(j.Z.roles)}))),r().createElement(u.StackItem,null,r().createElement(x.Z,{type:"content",id:"tab-roles"},r().createElement(A.M,{isSelectable:K,isRowSelectable:e=>!(e.platform_default||e.admin_default||e.system),checkedRows:a,textFilterRef:y,setCheckedItems:e=>{f((t=>e(t).filter((({platform_default:e,admin_default:t,system:a})=>!(e||t||a))).map((({uuid:e,name:t})=>({uuid:e,label:t})))))},actionResolver:e=>e.compoundParent?[]:[{title:g.formatMessage(j.Z.edit),onClick:(e,t,a)=>v((0,I.n)(T.Z["edit-role"].link.replace(":roleId",a.uuid)))},{title:g.formatMessage(j.Z.delete),onClick:(e,t,a)=>{ne([a]),v((0,I.n)(T.Z["remove-role"].link.replace(":roleId",a.uuid)))}}],columns:X,areActionsDisabled:({system:e})=>!!e,rowWrapper:W,rows:ue,data:U,filterValue:Y,fetchData:({name:e,limit:t,offset:a})=>((0,z.MS)(h,v,{display_name:e}),Q((0,P.jl)({limit:t,offset:a,orderBy:ie,filters:{display_name:e}}))),setFilterValue:({name:e=""})=>J(e),isExpandable:!0,onExpand:(e,t,a,l,r)=>le({...ae,[r.uuid]:l?-1:a+Number(!K)}),isLoading:!H&&0===U?.length&&0===Y?.length||H,pagination:D,ouiaId:"roles-table",titlePlural:g.formatMessage(j.Z.roles).toLowerCase(),titleSingular:g.formatMessage(j.Z.role).toLowerCase(),toolbarButtons:()=>e||t?[r().createElement(I.Z,{to:T.Z["add-role"].link,key:"add-role",className:"rbac-m-hide-on-sm"},r().createElement(m.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},g.formatMessage(j.Z.createRole))),...Z(k)?[{label:g.formatMessage(j.Z.createRole),onClick:()=>v((0,I.n)(T.Z["add-role"].link))}]:[],{label:g.formatMessage(j.Z.edit),props:{isDisabled:!(1===a.length)},onClick:()=>v((0,I.n)(T.Z["edit-role"].link.replace(":roleId",a[0].uuid)))},{label:g.formatMessage(j.Z.delete),props:{isDisabled:!a.length>0},onClick:()=>{ne(a),v((0,I.n)(T.Z["remove-role"].link.replace(":roleId",a.map((({uuid:e})=>e)))))}}]:[],filterPlaceholder:g.formatMessage(j.Z.name).toLowerCase(),tableId:"roles",sortBy:ee,onSort:(e,t,a)=>{const l=`${"desc"===a?"-":""}${X[t-Number(K)].key}`;te({index:t,direction:a}),Q((0,P.jl)({limit:D.limit,offset:0,orderBy:l,filters:{display_name:Y}}))}}),r().createElement(l.Suspense,null,r().createElement(o.Outlet,{context:{[T.Z["add-role"].path]:{pagination:D,filters:{display_name:Y}},[T.Z["remove-role"].path]:{isLoading:H,cancelRoute:(0,P.zk)(T.Z.roles.link,D,$),submitRoute:(0,P.zk)(T.Z.roles.link,{...D,offset:0},fe?{}:$),afterSubmit:()=>{Q({...D,filters:fe?{}:{display_name:Y},offset:0}),fe&&J(""),f([])},setFilterValue:J},[T.Z["edit-role"].path]:{isLoading:H,cancelRoute:(0,P.zk)(T.Z.roles.link,D,$),afterSubmit:()=>{Q({...D,offset:0,filters:{display_name:Y}}),f([])}},[T.Z["roles-add-group-roles"].path]:{selectedRoles:se,setSelectedRoles:oe,closeUrl:(0,P.zk)(T.Z.roles.link,D,$),addRolesToGroup:(e,t)=>b((0,q.Wj)(e,t)),afterSubmit:()=>{Q({...D,offset:0,filters:{display_name:Y}}),oe([])}}}})))))}}}]);
//# sourceMappingURL=../sourcemaps/3161.cd4b5e709902bf11e0be1933b89337d4.js.map