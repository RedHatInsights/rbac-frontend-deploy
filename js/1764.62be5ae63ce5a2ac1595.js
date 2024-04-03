"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[1764,459],{41435:(e,t,a)=>{a.d(t,{Dl:()=>o,dw:()=>n,e4:()=>s,ir:()=>r});var r,n,l=a(28416);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(n||(n={}));const o=l.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),s=l.createContext({keyHandler:null,sendRef:null})},46818:(e,t,a)=>{a.d(t,{P8:()=>n});var r=a(78632);const n=()=>({className:r.Z.modifiers.nowrap})},63456:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(85893),n=a(94184),l=a.n(n),o=a(28416);const s=a.n(o)().createContext("light");var i=function(){return i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};const c=function(e){var t=e.className,a=e.children,n=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children"]),o=l()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,r.jsx)(s.Consumer,{children:function(e){var t,s;void 0===e&&(e="light");var c=l()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((s={})["pf-m-light"]="light"===e,s));return(0,r.jsx)("section",i({},n,{className:"".concat(o," ").concat(c),"widget-type":"InsightsPageHeader",children:a}))}})}},39173:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(85893),n=a(94184),l=a.n(n),o=a(78956);const s=function(e){var t=e.className,a=e.title,n=l()(t);return(0,r.jsx)(o.Title,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle",children:a})}},7876:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(85893),n=a(94184),l=a.n(n),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const s=function(e){var t,a=e.type,n=e.children,s=e.className,i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["type","children","className"]),c=l()(s,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,r.jsxs)("section",o({},i,{className:c,children:[" ",n," "]}))}},23340:(e,t,a)=>{a.d(t,{MS:()=>l,aX:()=>r,qF:()=>n});const r=(e,t,a,r={})=>{const n=new URLSearchParams(e.search);let l=a.reduce(((e,t)=>{const a=n.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(r).forEach((e=>{const t=r[e];l={...l,[e]:Array.isArray(l[e])?[...new Set([...l[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||l[e]},Array.isArray(t)?t.forEach((t=>n.getAll(e).includes(t)||n.append(e,t))):n.get(e)||t&&n.set(e,t)})),t({pathname:e.pathname,search:n.toString()},{replace:!0}),l},n=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},l=(e,t,a)=>{const r=new URLSearchParams(e.search);Object.keys(a).forEach((e=>r.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&r.append(e,t))):t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0})}},82617:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(28416),n=a.n(r),l=a(45697),o=a.n(l),s=a(62012),i=a(75629),c=a(12849);const m=e=>e?n().createElement(i.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?n().createElement(i.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&n().createElement(s.NavLink,{end:!0,to:e.to},e.title)||e.title):n().createElement(c.Vj,{key:t})))):null;m.propTypes={breadcrumbs:o().object};const u=m},2086:(e,t,a)=>{a.d(t,{Q:()=>p,y:()=>f});var r=a(28416),n=a.n(r),l=a(45697),o=a.n(l),s=a(64380),i=a(86304),c=a(12849),m=a(82617),u=a(63456),d=a(39173);const p=({children:e,breadcrumbs:t})=>n().createElement(r.Fragment,null,t&&n().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},n().createElement(m.Z,{...t})),n().createElement(u.Z,{className:"rbac-page-header"},e));p.propTypes={children:o().oneOfType([o().arrayOf(o().node),o().node]).isRequired,breadcrumbs:o().array,paddingBottom:o().bool},p.defaultProps={paddingBottom:!1};const f=({title:e,renderTitleTag:t,description:a,children:l})=>n().createElement(r.Fragment,null,n().createElement(i.Flex,null,n().createElement(i.FlexItem,{className:"pf-v5-u-mb-sm"},n().createElement(d.Z,{title:e||n().createElement(c.h2,null),className:"rbac-page-header__title"})),n().createElement(i.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&n().createElement(s.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?n().createElement(s.Text,{component:s.TextVariants.p},a):a),l);f.propTypes={title:o().node,renderTitleTag:o().func,description:o().node,children:o().oneOfType([o().node,o().arrayOf(o().node)])}},69493:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(28416),n=a.n(r),l=a(55573),o=a(45697),s=a.n(o),i=a(94184),c=a.n(i);const m=({className:e,row:t,...a})=>n().createElement(l.e,{className:c()(e,{"rbac-c-group-default":t.isPlatformDefault||t.isAdminDefault}),row:t,...a});m.propTypes={row:s().shape({isAdminDefault:s().bool,isPlatformDefault:s().bool}),className:s().string};const u=m},7841:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var r=a(28416),n=a.n(r),l=a(62012),o=a(7732),s=a(56869),i=a(46818),c=a(31055),m=a(23539),u=a(25387),d=a(55140),p=a(7876),f=a(86706),g=a(97246),h=a(1439),b=a.n(h),y=a(91693),E=a.n(y),Z=a(77029),v=a.n(Z),k=a(78972),C=a(64380),M=a(78173),x=a(75863),N=a(21081),w=a(49004),O=a(34844),S=a(94184),_=a.n(S),P=a(45697),R=a.n(P),I=a(62410),T=a(12913),A=a(64756),j=a(29301),B=a(14289),D=a(75614),L=a(2550);const $=({id:e,uuid:t,bodyContent:a})=>{const[l,o]=(0,r.useState)(!1),s=(0,r.useRef)(null);return n().createElement("span",{ref:s,key:`${t}-popover`,id:e},n().createElement(k.Popover,{zIndex:"110",position:"right",isVisible:l,shouldClose:()=>o(!1),hideOnOutsideClick:!0,bodyContent:a,appendTo:s.current},n().createElement(b(),{onClick:()=>o(!l),className:_()("pf-v5-c-question-circle-icon",{"icon-active":l})})))};$.propTypes={id:R().string.isRequired,uuid:R().string.isRequired,bodyContent:R().string.isRequired};var F=a(77044),G=a(2086),q=a(69493),z=a(74982),V=a(23340),H=a(86601);const U=()=>{const e=(0,u.YB)(),t=(0,f.useDispatch)(),a=(0,l.useNavigate)(),h=(0,l.useLocation)(),b=(0,d.Z)(),y=e=>t((0,F.bt)({...e,usesMetaInURL:!0,chrome:b,platformDefault:!1,adminDefault:!1})),{orgAdmin:Z,userAccessAdministrator:k}=(0,r.useContext)(H.Z),S=Z||k,_=(0,r.useRef)(null),P=[{title:e.formatMessage(L.Z.name),key:"name",transforms:[o.p]},{title:e.formatMessage(L.Z.roles),cellTransforms:[s.z],transforms:[i.P8]},{title:e.formatMessage(L.Z.members),cellTransforms:[s.z],transforms:[i.P8]},{title:e.formatMessage(L.Z.lastModified),key:"modified",transforms:[o.p]}],[R,U]=(0,r.useState)({index:Number(S),direction:"asc"}),[W,X]=(0,r.useState)([]),[Q,Y]=(0,r.useState)([]),[J,K]=(0,r.useState)({}),ee=`${"desc"===R?.direction?"-":""}${P[R?.index-Number(S)].key}`,{groups:te,pagination:ae,filters:re,isLoading:ne}=(0,f.useSelector)((({groupReducer:{groups:{data:e,filters:t,pagination:a},isLoading:r,adminGroup:n,systemGroup:l}})=>({groups:[...n?.name?.match(new RegExp(t.name,"i"))?[n]:[],...l?.name?.match(new RegExp(t.name,"i"))?[l]:[],...e?.filter((({platform_default:e,admin_default:t}={})=>!(e||t)))||[]],pagination:{limit:a?.limit??(Z?z.HE:z.he).limit,offset:a?.offset??(Z?z.HE:z.he).offset,count:a?.count,redirected:a?.redirected},filters:t,isLoading:r,systemGroup:l})),f.shallowEqual),[le,oe]=(0,r.useState)(re?.name||"");(0,r.useEffect)((()=>{(0,z.oG)(h,a,ae.limit,ae.offset)}),[ae.offset,ae.limit,ae.count,ae.redirected]),(0,r.useEffect)((()=>{(0,V.MS)(h,a,{name:le})}),[le]),(0,r.useEffect)((()=>{const{limit:e,offset:r}=(0,z.rj)(h,a,ae),{name:n}=(0,V.aX)(h,a,["name"],{name:le});oe(n),b.appNavClick({id:"groups",secondaryNav:!0}),y({limit:e,offset:r,orderBy:ee,filters:{name:n}}),t((0,F.fB)({filterValue:n,chrome:b})),t((0,F.WD)({filterValue:n,chrome:b}))}),[]),(0,r.useEffect)((()=>{h.pathname.includes("detail")?(0,j.Gw)(h,a):((0,z.Zc)(h)||(0,z.oG)(h,a,ae.limit,ae.offset),le?.length>0&&!(0,V.qF)(h,["name"])&&(0,V.aX)(h,a,["name"],{name:le}))}),[h.pathname]);const se=te.map((e=>e.platform_default||e.admin_default?{...e,principalCount:"All"+(e.admin_default?" org admins":"")}:e)),ie=(0,r.useCallback)(((e,a)=>t((0,F.lM)(e,{limit:100},a))),[t]),ce=(0,r.useCallback)((e=>t((0,F.mt)(e,void 0,{limit:100}))),[t]),me=((e,t,a,l=[])=>{const o=(0,u.YB)(),s=[{title:o.formatMessage(L.Z.roleName)},{title:o.formatMessage(L.Z.description)},{title:o.formatMessage(L.Z.lastModified)}],i=[{title:o.formatMessage(L.Z.orgAdministrator)},{title:o.formatMessage(L.Z.firstName)},{title:o.formatMessage(L.Z.lastName)},{title:o.formatMessage(L.Z.username)},{title:o.formatMessage(L.Z.email)},{title:o.formatMessage(L.Z.status)}];return t.reduce(((t,{uuid:c,name:m,roleCount:u,principalCount:d,modified:p,roles:f,members:g,platform_default:h,admin_default:b,isLoadingRoles:y,isLoadingMembers:Z},k)=>{const S=`compound-roles-${c}`,_=`compound-members-${c}`;return[...t,{uuid:c,isAdminDefault:b,isPlatformDefault:h,selected:Boolean(a&&a.find((e=>e.uuid===c))),cells:[{title:e?n().createElement(n().Fragment,null,n().createElement(A.Z,{key:`${c}-link`,state:{uuid:c},to:B.Z["group-detail"].link.replace(":groupId",h?D.Cn:c)},m),n().createElement(r.Fragment,null,(h||b)&&n().createElement($,{id:`default${b?"-admin":""}-group-popover`,uuid:c,key:`${c}-popover`,bodyContent:o.formatMessage(b?L.Z.orgAdminInheritedRoles:L.Z.usersInheritedRoles)}))):m},{title:u,props:{isOpen:2===l[c],ariaControls:S}},{title:d,props:h||b?{className:"rbac-c-not-expandable-cell"}:{isOpen:3===l[c],ariaControls:_}},{title:n().createElement(I.Z,{date:p,type:(0,j.mh)(p)})}]},{uuid:`${c}-roles`,parent:3*k,compoundParent:1,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:y?n().createElement(T.Z,{rows:u,variant:x.B.compact,columns:s.map((e=>e.title))}):u>0?n().createElement(N.i,{id:S,ouiaId:S,"aria-label":"Compound roles table",variant:x.B.compact,cells:s,rows:f?.map((e=>({cells:[{title:n().createElement(A.Z,{to:B.Z["role-detail"].link.replace(":roleId",e.uuid)},e.name)},e.description,n().createElement(r.Fragment,{key:`${c}-modified`},n().createElement(I.Z,{date:p,type:(0,j.mh)(p)}))]})))},n().createElement(w.x,null),n().createElement(O.R,null)):n().createElement(C.Text,{id:S,className:"pf-u-mx-lg pf-u-my-sm"},o.formatMessage(L.Z.noGroupRoles))}]},{uuid:`${c}-members`,parent:3*k,compoundParent:2,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:Z?n().createElement(T.Z,{rows:d,variant:x.B.compact,columns:i.map((e=>e.title))}):d>0?n().createElement(N.i,{id:_,ouiaId:_,"aria-label":"Compound members table",variant:x.B.compact,cells:i,rows:g?.map((e=>[n().createElement(C.TextContent,{key:e.is_org_admin},e?.is_org_admin?n().createElement(E(),{key:"yes-icon",className:"pf-u-mx-sm"}):n().createElement(v(),{key:"no-icon",className:"pf-u-mx-sm"}),o.formatMessage(e?.is_org_admin?L.Z.yes:L.Z.no)),e.first_name,e.last_name,e.username,e.email,n().createElement(M.Label,{key:e.is_active,color:e.is_active?"green":"grey"},o.formatMessage(e?.is_active?L.Z.active:L.Z.inactive))]))},n().createElement(w.x,null),n().createElement(O.R,null)):b||h?"":n().createElement(C.Text,{id:_,className:"pf-u-mx-lg pf-u-my-sm"},o.formatMessage(L.Z.noGroupMembers))}]}]}),[])})(S,se,W,J),ue=ae.count===Q.length;return n().createElement(m.Stack,{className:"rbac-c-groups"},n().createElement(m.StackItem,null,n().createElement(G.Q,{paddingBottom:!0},n().createElement(G.y,{title:e.formatMessage(L.Z.groups)}))),n().createElement(m.StackItem,null,n().createElement(p.Z,{type:"content",id:"tab-groups"},n().createElement(g.M,{data:te,rows:me,sortBy:R,onSort:(e,t,r)=>{const n=`${"desc"===r?"-":""}${P[t-Number(S)].key}`;U({index:t,direction:r}),(0,V.MS)(h,a,{name:le}),y({...ae,orderBy:n,filters:{name:le}})},columns:P,isExpandable:!0,onExpand:(e,t,a,r,n)=>{r?K({...J,[n.uuid]:-1}):(K({...J,[n.uuid]:a+Number(!S)}),a+Number(!S)===2&&ie(n.uuid,{isPlatformDefault:n.isPlatformDefault,isAdminDefault:n.isAdminDefault}),a+Number(!S)===3&&ce(n.uuid))},isSelectable:S,isRowSelectable:e=>!(e.platform_default||e.admin_default||e.system),checkedRows:W,setCheckedItems:e=>{X((t=>e(t).filter((({platform_default:e,admin_default:t})=>!(e||t))).map((({uuid:e,name:t})=>({uuid:e,name:t})))))},actionResolver:({isPlatformDefault:t,isAdminDefault:r})=>t||r||!S?null:[{title:e.formatMessage(L.Z.edit),onClick:(e,t,r)=>a((0,A.n)(B.Z["edit-group"].link).replace(":groupId",r.uuid))},{title:e.formatMessage(L.Z.delete),onClick:(e,t,r)=>{Y([r]),a((0,A.n)(B.Z["remove-group"].link.replace(":groupId",r.uuid)))}}],titlePlural:e.formatMessage(L.Z.groups).toLowerCase(),titleSingular:e.formatMessage(L.Z.group).toLowerCase(),ouiaId:"groups-table",pagination:ae,filterValue:le,fetchData:({name:e,count:t,limit:r,offset:n})=>((0,V.MS)(h,a,{name:e}),y({count:t,limit:r,offset:n,orderBy:ee,filters:{name:e}})),setFilterValue:({name:e=""})=>oe(e),toolbarButtons:()=>[...S?[n().createElement(A.Z,{to:B.Z["add-group"].link,key:"add-group",className:"rbac-m-hide-on-sm"},n().createElement(c.Button,{ouiaId:"create-group-button",variant:"primary","aria-label":"Create group"},e.formatMessage(L.Z.createGroup))),{label:e.formatMessage(L.Z.createGroup),props:{className:"rbac-m-hide-on-md"},onClick:()=>a((0,A.n)(B.Z["add-group"].link))},{label:e.formatMessage(L.Z.edit),props:{isDisabled:!(1===W.length)},onClick:()=>a((0,A.n)(B.Z["edit-group"].link.replace(":groupId",W[0].uuid)))},{label:e.formatMessage(L.Z.delete),props:{isDisabled:!W.length>0},onClick:()=>{Y(W),a((0,A.n)(B.Z["remove-group"].link.replace(":groupId",W.map((({uuid:e})=>e)))))}}]:[]],isLoading:ne,filterPlaceholder:e.formatMessage(L.Z.name).toLowerCase(),rowWrapper:q.Z,tableId:"groups",textFilterRef:_}),n().createElement(r.Suspense,null,n().createElement(l.Outlet,{context:{pagination:ae,filters:re,[B.Z["add-group"].path]:{orderBy:ee,postMethod:e=>{oe(""),y(e)}},[B.Z["edit-group"].path]:{postMethod:e=>{oe(""),y({...e,orderBy:ee})},cancelRoute:(0,j.zk)(B.Z.groups.link,ae,re),submitRoute:(0,j.zk)(B.Z.groups.link,{...ae,offset:0},re)},[B.Z["remove-group"].path]:{postMethod:(e,t)=>{y({...t,filters:{name:ue?"":le},orderBy:ee}),ue&&oe(""),X(W.filter((t=>!e.includes(t.uuid))))},cancelRoute:(0,j.zk)(B.Z.groups.link,ae,re),submitRoute:(0,j.zk)(B.Z.groups.link,{...ae,offset:0},ue?{}:re)}}})))))}}}]);
//# sourceMappingURL=../sourcemaps/1764.39521098e2ee0a06ace50f00ca1f6f90.js.map