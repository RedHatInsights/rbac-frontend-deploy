"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8886,459],{41435:(e,t,a)=>{a.d(t,{Dl:()=>l,dw:()=>n,e4:()=>s,ir:()=>r});var r,n,o=a(28416);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(n||(n={}));const l=o.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),s=o.createContext({keyHandler:null,sendRef:null})},86478:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r}),a(49854);const r={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},46818:(e,t,a)=>{a.d(t,{P8:()=>n});var r=a(78632);const n=()=>({className:r.Z.modifiers.nowrap})},63456:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(85893),n=a(94184),o=a.n(n),l=a(28416);const s=a.n(l)().createContext("light");var i=function(){return i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};const m=function(e){var t=e.className,a=e.children,n=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children"]),l=o()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,r.jsx)(s.Consumer,{children:function(e){var t,s;void 0===e&&(e="light");var m=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((s={})["pf-m-light"]="light"===e,s));return(0,r.jsx)("section",i({},n,{className:"".concat(l," ").concat(m),"widget-type":"InsightsPageHeader",children:a}))}})}},39173:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(85893),n=a(94184),o=a.n(n),l=a(78956);const s=function(e){var t=e.className,a=e.title,n=o()(t);return(0,r.jsx)(l.Title,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle",children:a})}},7876:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(85893),n=a(94184),o=a.n(n),l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)};const s=function(e){var t,a=e.type,n=e.children,s=e.className,i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["type","children","className"]),m=o()(s,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,r.jsxs)("section",l({},i,{className:m,children:[" ",n," "]}))}},23340:(e,t,a)=>{a.d(t,{MS:()=>o,aX:()=>r,qF:()=>n});const r=(e,t,a,r={})=>{const n=new URLSearchParams(e.search);let o=a.reduce(((e,t)=>{const a=n.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(r).forEach((e=>{const t=r[e];o={...o,[e]:Array.isArray(o[e])?[...new Set([...o[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||o[e]},Array.isArray(t)?t.forEach((t=>n.getAll(e).includes(t)||n.append(e,t))):n.get(e)||t&&n.set(e,t)})),t({pathname:e.pathname,search:n.toString()},{replace:!0}),o},n=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},o=(e,t,a)=>{const r=new URLSearchParams(e.search);Object.keys(a).forEach((e=>r.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&r.append(e,t))):t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0})}},82617:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(28416),n=a.n(r),o=a(45697),l=a.n(o),s=a(62012),i=a(75629),m=a(12849);const c=e=>e?n().createElement(i.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?n().createElement(i.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&n().createElement(s.NavLink,{end:!0,to:e.to},e.title)||e.title):n().createElement(m.Vj,{key:t})))):null;c.propTypes={breadcrumbs:l().object};const p=c},2086:(e,t,a)=>{a.d(t,{Q:()=>d,y:()=>f});var r=a(28416),n=a.n(r),o=a(45697),l=a.n(o),s=a(64380),i=a(86304),m=a(12849),c=a(82617),p=a(63456),u=a(39173);const d=({children:e,breadcrumbs:t})=>n().createElement(r.Fragment,null,t&&n().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},n().createElement(c.Z,{...t})),n().createElement(p.Z,{className:"rbac-page-header"},e));d.propTypes={children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,breadcrumbs:l().array,paddingBottom:l().bool},d.defaultProps={paddingBottom:!1};const f=({title:e,renderTitleTag:t,description:a,children:o})=>n().createElement(r.Fragment,null,n().createElement(i.Flex,null,n().createElement(i.FlexItem,{className:"pf-v5-u-mb-sm"},n().createElement(u.Z,{title:e||n().createElement(m.h2,null),className:"rbac-page-header__title"})),n().createElement(i.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&n().createElement(s.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?n().createElement(s.Text,{component:s.TextVariants.p},a):a),o);f.propTypes={title:l().node,renderTitleTag:l().func,description:l().node,children:l().oneOfType([l().node,l().arrayOf(l().node)])}},69493:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(28416),n=a.n(r),o=a(55573),l=a(45697),s=a.n(l),i=a(94184),m=a.n(i);const c=({className:e,row:t,...a})=>n().createElement(o.e,{className:m()(e,{"rbac-c-group-default":t.isPlatformDefault||t.isAdminDefault}),row:t,...a});c.propTypes={row:s().shape({isAdminDefault:s().bool,isPlatformDefault:s().bool}),className:s().string};const p=c},7841:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var r=a(28416),n=a.n(r),o=a(62012),l=a(7732),s=a(56869),i=a(46818),m=a(31055),c=a(23539),p=a(25387),u=a(55140),d=a(7876),f=a(86706),g=a(97246),h=a(1439),b=a.n(h),y=a(91693),E=a.n(y),v=a(77029),Z=a.n(v),k=a(78972),C=a(64380),x=a(78173),M=a(75863),N=a(21081),w=a(49004),O=a(34844),_=a(94184),S=a.n(_),P=a(45697),R=a.n(P),I=a(62410),T=a(64756),A=a(12849),j=a(29301),B=a(14289),D=a(75614),L=a(2550);const $=({id:e,uuid:t,bodyContent:a})=>{const[o,l]=(0,r.useState)(!1),s=(0,r.useRef)(null);return n().createElement("span",{ref:s,key:`${t}-popover`,id:e},n().createElement(k.Popover,{zIndex:"110",position:"right",isVisible:o,shouldClose:()=>l(!1),hideOnOutsideClick:!0,bodyContent:a,appendTo:s.current},n().createElement(b(),{onClick:()=>l(!o),className:S()("pf-v5-c-question-circle-icon",{"icon-active":o})})))};$.propTypes={id:R().string.isRequired,uuid:R().string.isRequired,bodyContent:R().string.isRequired};var F=a(77044),G=a(2086),q=a(69493),z=a(74982),V=a(23340),W=a(86601);const H=()=>{const e=(0,p.YB)(),t=(0,f.useDispatch)(),a=(0,o.useNavigate)(),h=(0,o.useLocation)(),b=(0,u.Z)(),y=e=>t((0,F.bt)({...e,usesMetaInURL:!0,chrome:b,platformDefault:!1,adminDefault:!1})),{orgAdmin:v,userAccessAdministrator:k}=(0,r.useContext)(W.Z),_=v||k,S=(0,r.useRef)(null),P=[{title:e.formatMessage(L.Z.name),key:"name",transforms:[l.p]},{title:e.formatMessage(L.Z.roles),cellTransforms:[s.z],transforms:[i.P8]},{title:e.formatMessage(L.Z.members),cellTransforms:[s.z],transforms:[i.P8]},{title:e.formatMessage(L.Z.lastModified),key:"modified",transforms:[l.p]}],[R,H]=(0,r.useState)({index:Number(_),direction:"asc"}),[U,X]=(0,r.useState)([]),[Q,Y]=(0,r.useState)([]),[J,K]=(0,r.useState)({}),ee=`${"desc"===R?.direction?"-":""}${P[R?.index-Number(_)].key}`,{groups:te,pagination:ae,filters:re,isLoading:ne}=(0,f.useSelector)((({groupReducer:{groups:{data:e,filters:t,pagination:a},isLoading:r,adminGroup:n,systemGroup:o}})=>({groups:[...n?.name?.match(new RegExp(t.name,"i"))?[n]:[],...o?.name?.match(new RegExp(t.name,"i"))?[o]:[],...e?.filter((({platform_default:e,admin_default:t}={})=>!(e||t)))||[]],pagination:{limit:a?.limit??(v?z.HE:z.he).limit,offset:a?.offset??(v?z.HE:z.he).offset,count:a?.count,redirected:a?.redirected},filters:t,isLoading:r,systemGroup:o})),f.shallowEqual),[oe,le]=(0,r.useState)(re?.name||"");(0,r.useEffect)((()=>{(0,z.oG)(h,a,ae.limit,ae.offset)}),[ae.offset,ae.limit,ae.count,ae.redirected]),(0,r.useEffect)((()=>{(0,V.MS)(h,a,{name:oe})}),[oe]),(0,r.useEffect)((()=>{const{limit:e,offset:r}=(0,z.rj)(h,a,ae),{name:n}=(0,V.aX)(h,a,["name"],{name:oe});le(n),b.appNavClick({id:"groups",secondaryNav:!0}),y({limit:e,offset:r,orderBy:ee,filters:{name:n}}),t((0,F.fB)({filterValue:n,chrome:b})),t((0,F.WD)({filterValue:n,chrome:b}))}),[]),(0,r.useEffect)((()=>{h.pathname.includes("detail")?(0,j.Gw)(h,a):((0,z.Zc)(h)||(0,z.oG)(h,a,ae.limit,ae.offset),oe?.length>0&&!(0,V.qF)(h,["name"])&&(0,V.aX)(h,a,["name"],{name:oe}))}),[h.pathname]);const se=te.map((e=>e.platform_default||e.admin_default?{...e,principalCount:"All"+(e.admin_default?" org admins":"")}:e)),ie=(0,r.useCallback)(((e,a)=>t((0,F.lM)(e,{limit:100},a))),[t]),me=(0,r.useCallback)((e=>t((0,F.mt)(e,void 0,{limit:100}))),[t]),ce=((e,t,a,o=[])=>{const l=(0,p.YB)();return t.reduce(((t,{uuid:s,name:i,roleCount:m,principalCount:c,modified:p,roles:u,members:d,platform_default:f,admin_default:g,isLoadingRoles:h,isLoadingMembers:b},y)=>{const v=`compound-roles-${s}`,k=`compound-members-${s}`;return[...t,{uuid:s,isAdminDefault:g,isPlatformDefault:f,selected:Boolean(a&&a.find((e=>e.uuid===s))),cells:[{title:e?n().createElement(n().Fragment,null,n().createElement(T.Z,{key:`${s}-link`,state:{uuid:s},to:B.Z["group-detail"].link.replace(":groupId",f?D.Cn:s)},i),n().createElement(r.Fragment,null,(f||g)&&n().createElement($,{id:`default${g?"-admin":""}-group-popover`,uuid:s,key:`${s}-popover`,bodyContent:l.formatMessage(g?L.Z.orgAdminInheritedRoles:L.Z.usersInheritedRoles)}))):i},{title:m,props:{isOpen:2===o[s],ariaControls:v}},{title:c,props:f||g?{className:"rbac-c-not-expandable-cell"}:{isOpen:3===o[s],ariaControls:k}},{title:n().createElement(I.Z,{date:p,type:(0,j.mh)(p)})}]},{uuid:`${s}-roles`,parent:3*y,compoundParent:1,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:h?n().createElement(A.Wi,{items:3,isCompact:!0}):m>0?n().createElement(N.i,{id:v,ouiaId:v,"aria-label":"Compound roles table",variant:M.B.compact,cells:[{title:l.formatMessage(L.Z.roleName)},{title:l.formatMessage(L.Z.description)},{title:l.formatMessage(L.Z.lastModified)}],rows:u?.map((e=>({cells:[{title:n().createElement(T.Z,{to:B.Z["role-detail"].link.replace(":roleId",e.uuid)},e.name)},e.description,n().createElement(r.Fragment,{key:`${s}-modified`},n().createElement(I.Z,{date:p,type:(0,j.mh)(p)}))]})))},n().createElement(w.x,null),n().createElement(O.R,null)):n().createElement(C.Text,{id:v,className:"pf-u-mx-lg pf-u-my-sm"},l.formatMessage(L.Z.noGroupRoles))}]},{uuid:`${s}-members`,parent:3*y,compoundParent:2,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:b?n().createElement(A.Wi,{items:3,isCompact:!0}):c>0?n().createElement(N.i,{id:k,ouiaId:k,"aria-label":"Compound members table",variant:M.B.compact,cells:[{title:l.formatMessage(L.Z.orgAdministrator)},{title:l.formatMessage(L.Z.firstName)},{title:l.formatMessage(L.Z.lastName)},{title:l.formatMessage(L.Z.username)},{title:l.formatMessage(L.Z.email)},{title:l.formatMessage(L.Z.status)}],rows:d?.map((e=>[n().createElement(C.TextContent,{key:e.is_org_admin},e?.is_org_admin?n().createElement(E(),{key:"yes-icon",className:"pf-u-mx-sm"}):n().createElement(Z(),{key:"no-icon",className:"pf-u-mx-sm"}),l.formatMessage(e?.is_org_admin?L.Z.yes:L.Z.no)),e.first_name,e.last_name,e.username,e.email,n().createElement(x.Label,{key:e.is_active,color:e.is_active?"green":"grey"},l.formatMessage(e?.is_active?L.Z.active:L.Z.inactive))]))},n().createElement(w.x,null),n().createElement(O.R,null)):g||f?"":n().createElement(C.Text,{id:k,className:"pf-u-mx-lg pf-u-my-sm"},l.formatMessage(L.Z.noGroupMembers))}]}]}),[])})(_,se,U,J),pe=ae.count===Q.length;return n().createElement(c.Stack,{className:"rbac-c-groups"},n().createElement(c.StackItem,null,n().createElement(G.Q,{paddingBottom:!0},n().createElement(G.y,{title:e.formatMessage(L.Z.groups)}))),n().createElement(c.StackItem,null,n().createElement(d.Z,{type:"content",id:"tab-groups"},n().createElement(g.M,{data:te,rows:ce,sortBy:R,onSort:(e,t,r)=>{const n=`${"desc"===r?"-":""}${P[t-Number(_)].key}`;H({index:t,direction:r}),(0,V.MS)(h,a,{name:oe}),y({...ae,orderBy:n,filters:{name:oe}})},columns:P,isExpandable:!0,onExpand:(e,t,a,r,n)=>{r?K({...J,[n.uuid]:-1}):(K({...J,[n.uuid]:a+Number(!_)}),a+Number(!_)===2&&ie(n.uuid,{isPlatformDefault:n.isPlatformDefault,isAdminDefault:n.isAdminDefault}),a+Number(!_)===3&&me(n.uuid))},isSelectable:_,isRowSelectable:e=>!(e.platform_default||e.admin_default||e.system),checkedRows:U,setCheckedItems:e=>{X((t=>e(t).filter((({platform_default:e,admin_default:t})=>!(e||t))).map((({uuid:e,name:t})=>({uuid:e,name:t})))))},actionResolver:({isPlatformDefault:t,isAdminDefault:r})=>t||r||!_?null:[{title:e.formatMessage(L.Z.edit),onClick:(e,t,r)=>a((0,T.n)(B.Z["edit-group"].link).replace(":groupId",r.uuid))},{title:e.formatMessage(L.Z.delete),onClick:(e,t,r)=>{Y([r]),a((0,T.n)(B.Z["remove-group"].link.replace(":groupId",r.uuid)))}}],titlePlural:e.formatMessage(L.Z.groups).toLowerCase(),titleSingular:e.formatMessage(L.Z.group).toLowerCase(),ouiaId:"groups-table",pagination:ae,filterValue:oe,fetchData:({name:e,count:t,limit:r,offset:n})=>((0,V.MS)(h,a,{name:e}),y({count:t,limit:r,offset:n,orderBy:ee,filters:{name:e}})),setFilterValue:({name:e=""})=>le(e),toolbarButtons:()=>[..._?[n().createElement(T.Z,{to:B.Z["add-group"].link,key:"add-group",className:"rbac-m-hide-on-sm"},n().createElement(m.Button,{ouiaId:"create-group-button",variant:"primary","aria-label":"Create group"},e.formatMessage(L.Z.createGroup))),{label:e.formatMessage(L.Z.createGroup),props:{className:"rbac-m-hide-on-md"},onClick:()=>a((0,T.n)(B.Z["add-group"].link))},{label:e.formatMessage(L.Z.edit),props:{isDisabled:!(1===U.length)},onClick:()=>a((0,T.n)(B.Z["edit-group"].link.replace(":groupId",U[0].uuid)))},{label:e.formatMessage(L.Z.delete),props:{isDisabled:!U.length>0},onClick:()=>{Y(U),a((0,T.n)(B.Z["remove-group"].link.replace(":groupId",U.map((({uuid:e})=>e)))))}}]:[]],isLoading:ne,filterPlaceholder:e.formatMessage(L.Z.name).toLowerCase(),rowWrapper:q.Z,tableId:"groups",textFilterRef:S}),n().createElement(r.Suspense,null,n().createElement(o.Outlet,{context:{pagination:ae,filters:re,[B.Z["add-group"].path]:{orderBy:ee,postMethod:e=>{le(""),y(e)}},[B.Z["edit-group"].path]:{postMethod:e=>{le(""),y({...e,orderBy:ee})},cancelRoute:(0,j.zk)(B.Z.groups.link,ae,re),submitRoute:(0,j.zk)(B.Z.groups.link,{...ae,offset:0},re)},[B.Z["remove-group"].path]:{postMethod:(e,t)=>{y({...t,filters:{name:pe?"":oe},orderBy:ee}),pe&&le(""),X(U.filter((t=>!e.includes(t.uuid))))},cancelRoute:(0,j.zk)(B.Z.groups.link,ae,re),submitRoute:(0,j.zk)(B.Z.groups.link,{...ae,offset:0},pe?{}:re)}}})))))}}}]);
//# sourceMappingURL=../sourcemaps/8886.d0207e10c403f9f41106abe8b750e1a6.js.map