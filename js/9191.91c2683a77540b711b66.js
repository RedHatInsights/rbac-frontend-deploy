"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[9191,7664],{91290:(e,t,n)=>{n.d(t,{ZP:()=>i,iC:()=>o,sN:()=>a});var r=n(40400);const a={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},7081:(e,t,n)=>{n.d(t,{ZP:()=>i,lb:()=>a,wl:()=>o});var r=n(40400);const a={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},62410:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(85893),a=n(92950),o=n.n(a),i=n(25864),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},l=36e5,u=24*l,s=30*u,d=365*u,f=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},p=[{rightBound:1/0,description:function(e){return f(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return f(Math.round(e/s),"month")}},{rightBound:s,description:function(e){return f(Math.round(e/u),"day")}},{rightBound:u,description:function(e){return f(Math.round(e/l),"hour")}},{rightBound:l,description:function(e){return f(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return p.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},h=function(e,t,n){return{exact:function(t){return g(e)(t)},onlyDate:function(t){return g(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(i.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[a,e]})},{children:t}))}(g("exact")(a),(0,r.jsx)("span",{children:g(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const v=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,i=e.extraTitle,c=e.tooltipProps,l=t instanceof Date?t:new Date(t),u=null==t||"Invalid Date"===l.toString()?"invalid":a;return(0,r.jsx)(o().Fragment,{children:h(u,c,i)(l)})}},39173:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(85893),a=n(94184),o=n.n(a),i=n(25864),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const l=function(e){var t=e.className,n=e.title,a=o()(t);return(0,r.jsx)(i.Title,c({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},44873:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(85893),a=n(94184),o=n.n(a),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};const c=function(e){var t,n=e.type,a=e.children,c=e.className,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["type","children","className"]),u=o()(c,((t={})["ins-l-".concat(n)]=void 0!==n,t));return(0,r.jsxs)("section",i({},l,{className:u},{children:[" ",a," "]}))}},92758:(e,t,n)=>{n.d(t,{MS:()=>u,aX:()=>c,qF:()=>l});var r=n(93433),a=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=new URLSearchParams(e.search),l=n.reduce((function(e,t){var n=c.getAll(t);return i(i({},e),{},(0,a.Z)({},t,n.length>1?n:n[0]))}),{});return Object.keys(o).forEach((function(e){var t=o[e];l=i(i({},l),{},(0,a.Z)({},e,Array.isArray(l[e])?(0,r.Z)(new Set([].concat((0,r.Z)(l[e]),(0,r.Z)(Array.isArray(t)?t:[t])))):(null==t?void 0:t.length)>0&&t||l[e])),Array.isArray(t)?t.forEach((function(t){return c.getAll(e).includes(t)||c.append(e,t)})):c.get(e)||t&&c.set(e,t)})),t({pathname:e.pathname,search:c.toString()},{replace:!0}),l},l=function(e,t){var n=new URLSearchParams(e.search);return t.some((function(e){return n.get(e)}))},u=function(e,t,n){var r=new URLSearchParams(e.search);Object.keys(n).forEach((function(e){return r.delete(e)})),Object.keys(n).forEach((function(e){var t=n[e];Array.isArray(t)?t.forEach((function(t){return t&&r.append(e,t)})):t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0})}},76137:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(92950),a=n.n(r),o=n(45697),i=n.n(o),c=n(46801),l=n(25864),u=n(19571),s=function(e){return e?a().createElement(l.Breadcrumb,null,Object.values(e).map((function(e,t){return e.title?a().createElement(l.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&a().createElement(c.NavLink,{end:!0,to:e.to},e.title)||e.title):a().createElement(u.Vj,{key:t})}))):null};s.propTypes={breadcrumbs:i().object};const d=s},51999:(e,t,n)=>{n.d(t,{Q:()=>v,y:()=>y});var r=n(92950),a=n.n(r),o=n(45697),i=n.n(o),c=n(25864),l=n(19571),u=n(76137),s=n(85893),d=n(94184),f=n.n(d);const p=a().createContext("light");var m=function(){return m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)};const g=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),a=f()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,s.jsx)(p.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var i=f()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,s.jsx)("section",m({},r,{className:"".concat(a," ").concat(i),"widget-type":"InsightsPageHeader"},{children:n}))}})};var h=n(39173),v=function(e){var t=e.children,n=e.breadcrumbs;return a().createElement(r.Fragment,null,n&&a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(u.Z,n)),a().createElement(g,{className:"rbac-page-header"},t))};v.propTypes={children:i().oneOfType([i().arrayOf(i().node),i().node]).isRequired,breadcrumbs:i().array,paddingBottom:i().bool},v.defaultProps={paddingBottom:!1};var y=function(e){var t=e.title,n=e.renderTitleTag,o=e.description,i=e.children;return a().createElement(r.Fragment,null,a().createElement(c.Flex,null,a().createElement(c.FlexItem,{className:"pf-u-mb-sm"},a().createElement(h.Z,{title:t||a().createElement(l.h2,null),className:"rbac-page-header__title"})),a().createElement(c.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},n&&n())),o&&a().createElement(c.TextContent,{className:"rbac-page-header__description"},"string"==typeof o?a().createElement(c.Text,{component:c.TextVariants.p},o):o),i)};y.propTypes={title:i().node,renderTitleTag:i().func,description:i().node,children:i().oneOfType([i().node,i().arrayOf(i().node)])}},93351:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(45987),o=n(92950),i=n.n(o),c=n(1936),l=n(45697),u=n.n(l),s=n(94184),d=n.n(s),f=["className","row"],p=function(e){var t=e.className,n=e.row,o=(0,a.Z)(e,f);return i().createElement(c.RowWrapper,(0,r.Z)({className:d()(t,{"rbac-c-group-default":n.isPlatformDefault||n.isAdminDefault}),row:n},o))};p.propTypes={row:u().shape({isAdminDefault:u().bool,isPlatformDefault:u().bool}),className:u().string};const m=p},59106:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r=n(93433),a=n(29439),o=n(4942),i=n(92950),c=n.n(i),l=n(46801),u=n(1936),s=n(25864),d=n(86896),f=n(55140),p=n(44873),m=n(50533),g=n(30060),h=n(91290),v=n(94184),y=n.n(v),b=n(45697),O=n.n(b),Z=n(62410),E=n(65126),j=n(11107),w=n(4682),k=n(84866),P=n(30893),C=function(e){var t=e.id,n=e.uuid,r=e.bodyContent,o=(0,i.useState)(!1),l=(0,a.Z)(o,2),u=l[0],d=l[1],f=(0,i.useRef)(null);return c().createElement("span",{ref:f,key:"".concat(n,"-popover"),id:t},c().createElement(s.Popover,{zIndex:"110",position:"right",isVisible:u,shouldClose:function(){return d(!1)},hideOnOutsideClick:!0,bodyContent:r,appendTo:f.current},c().createElement(h.ZP,{onClick:function(){return d(!u)},className:y()("pf-c-question-circle-icon",{"icon-active":u})})))};C.propTypes={id:O().string.isRequired,uuid:O().string.isRequired,bodyContent:O().string.isRequired};var S=n(19756),x=n(51999),M=n(93351),D=n(65916),N=n(92758),I=n(26794);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const R=function(){var e,t=(0,d.Z)(),n=(0,m.useDispatch)(),h=(0,l.useNavigate)(),v=(0,l.useLocation)(),y=(0,f.Z)(),b=function(e){return n((0,S.bt)(B(B({},e),{},{usesMetaInURL:!0,chrome:y,platformDefault:!1,adminDefault:!1})))},O=(0,i.useContext)(I.Z),_=O.orgAdmin,R=O.userAccessAdministrator,T=_||R,A=(0,i.useRef)(null),L=[{title:t.formatMessage(P.Z.name),key:"name",transforms:[u.sortable]},{title:t.formatMessage(P.Z.roles)},{title:t.formatMessage(P.Z.members)},{title:t.formatMessage(P.Z.lastModified),key:"modified",transforms:[u.sortable]}],z=(0,i.useState)({index:Number(T),direction:"asc"}),F=(0,a.Z)(z,2),q=F[0],G=F[1],U=(0,i.useState)((null==ie?void 0:ie.name)||""),V=(0,a.Z)(U,2),H=V[0],Q=V[1],W=(0,i.useState)([]),X=(0,a.Z)(W,2),J=X[0],K=X[1],Y=(0,i.useState)([]),$=(0,a.Z)(Y,2),ee=$[0],te=$[1],ne="".concat("desc"===(null==q?void 0:q.direction)?"-":"").concat(L[(null==q?void 0:q.index)-Number(T)].key),re=(0,m.useSelector)((function(e){var t,n,a,o,i=e.groupReducer,c=i.groups,l=c.data,u=c.filters,s=c.pagination,d=i.isLoading,f=i.adminGroup,p=i.systemGroup;return{groups:[].concat((0,r.Z)(null!=f&&null!==(t=f.name)&&void 0!==t&&t.match(new RegExp(u.name,"i"))?[f]:[]),(0,r.Z)(null!=p&&null!==(n=p.name)&&void 0!==n&&n.match(new RegExp(u.name,"i"))?[p]:[]),(0,r.Z)((null==l?void 0:l.filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.platform_default,n=e.admin_default;return!(t||n)})))||[])),pagination:{limit:null!==(a=null==s?void 0:s.limit)&&void 0!==a?a:(_?D.HE:D.he).limit,offset:null!==(o=null==s?void 0:s.offset)&&void 0!==o?o:(_?D.HE:D.he).offset,count:null==s?void 0:s.count,redirected:null==s?void 0:s.redirected},filters:u,isLoading:d,systemGroup:p}}),m.shallowEqual),ae=re.groups,oe=re.pagination,ie=re.filters,ce=re.isLoading;(0,i.useEffect)((function(){(0,D.oG)(v,h,oe.limit,oe.offset)}),[oe.offset,oe.limit,oe.count,oe.redirected]),(0,i.useEffect)((function(){(0,N.MS)(v,h,{name:H})}),[H]),(0,i.useEffect)((function(){var e=(0,D.rj)(v,h,oe),t=e.limit,r=e.offset,a=(0,N.aX)(v,h,["name"],{name:H}).name;Q(a),y.appNavClick({id:"groups",secondaryNav:!0}),b({limit:t,offset:r,orderBy:ne,filters:{name:a}}),n((0,S.fB)({filterValue:a,chrome:y})),n((0,S.WD)({filterValue:a,chrome:y}))}),[]),(0,i.useEffect)((function(){v.pathname.includes("detail")?(0,j.Gw)(v,h):((0,D.Zc)(v)||(0,D.oG)(v,h,oe.limit,oe.offset),(null==H?void 0:H.length)>0&&!(0,N.qF)(v,["name"])&&(0,N.aX)(v,h,["name"],{name:H}))}),[v.pathname]);var le=ae.map((function(e){return e.platform_default||e.admin_default?B(B({},e),{},{principalCount:"All".concat(e.admin_default?" org admins":"")}):e})),ue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=(0,d.Z)();return t.reduce((function(t,o){var l=o.uuid,u=o.name,s=o.roleCount,d=o.principalCount,f=o.modified,p=o.platform_default,m=o.admin_default;return[].concat((0,r.Z)(t),[{uuid:l,isAdminDefault:m,isPlatformDefault:p,cells:[c().createElement(i.Fragment,{key:l},c().createElement("div",{className:"pf-m-inline-flex"},e?c().createElement(E.Z,{key:"".concat(l,"-link"),state:{uuid:l},to:w.Z["group-detail"].link.replace(":groupId",p?k.Cn:l)},u):u,(p||m)&&c().createElement(C,{id:"default".concat(m?"-admin":"","-group-popover"),uuid:l,key:"".concat(l,"-popover"),bodyContent:a.formatMessage(m?P.Z.orgAdminInheritedRoles:P.Z.usersInheritedRoles)}))),s,d,c().createElement(i.Fragment,{key:"".concat(l,"-modified")},c().createElement(Z.Z,{date:f,type:(0,j.mh)(f)}))],selected:Boolean(n&&n.find((function(e){return e.uuid===l})))}])}),[])}(T,le,J),se=oe.count===ee.length;return c().createElement(s.Stack,{className:"rbac-c-groups"},c().createElement(s.StackItem,null,c().createElement(x.Q,{paddingBottom:!0},c().createElement(x.y,{title:t.formatMessage(P.Z.groups)}))),c().createElement(s.StackItem,null,c().createElement(p.Z,{type:"content",id:"tab-groups"},c().createElement(g.M,{data:ae,rows:ue,sortBy:q,onSort:function(e,t,n){var r="".concat("desc"===n?"-":"").concat(L[t-Number(T)].key);G({index:t,direction:n}),(0,N.MS)(v,h,{name:H}),b(B(B({},oe),{},{orderBy:r,filters:{name:H}}))},columns:L,isSelectable:T,isRowSelectable:function(e){return!(e.platform_default||e.admin_default||e.system)},checkedRows:J,setCheckedItems:function(e){K((function(t){return e(t).filter((function(e){var t=e.platform_default,n=e.admin_default;return!(t||n)})).map((function(e){return{uuid:e.uuid,name:e.name}}))}))},actionResolver:function(e){var n=e.isPlatformDefault,r=e.isAdminDefault;return n||r||!T?null:[{title:t.formatMessage(P.Z.edit),onClick:function(e,t,n){return h((0,E.n)(w.Z["edit-group"].link).replace(":groupId",n.uuid))}},{title:t.formatMessage(P.Z.delete),onClick:function(e,t,n){te([n]),h((0,E.n)(w.Z["remove-group"].link.replace(":groupId",n.uuid)))}}]},titlePlural:t.formatMessage(P.Z.groups).toLowerCase(),titleSingular:t.formatMessage(P.Z.group).toLowerCase(),ouiaId:"groups-table",pagination:oe,filterValue:H,fetchData:function(e){var t=e.name,n=e.count,r=e.limit,a=e.offset,o=e.orderBy;return(0,N.MS)(v,h,{name:t}),b({count:n,limit:r,offset:a,orderBy:o,filters:{name:t}})},setFilterValue:function(e){var t=e.name;return Q(void 0===t?"":t)},toolbarButtons:function(){return(0,r.Z)(T?[c().createElement(E.Z,{to:w.Z["add-group"].link,key:"add-group",className:"rbac-m-hide-on-sm"},c().createElement(s.Button,{ouiaId:"create-group-button",variant:"primary","aria-label":"Create group"},t.formatMessage(P.Z.createGroup))),{label:t.formatMessage(P.Z.createGroup),props:{className:"rbac-m-hide-on-md"},onClick:function(){return h((0,E.n)(w.Z["add-group"].link))}},{label:t.formatMessage(P.Z.edit),props:{isDisabled:!(1===J.length)},onClick:function(){return h((0,E.n)(w.Z["edit-group"].link.replace(":groupId",J[0].uuid)))}},{label:t.formatMessage(P.Z.delete),props:{isDisabled:!J.length>0},onClick:function(){te(J),h((0,E.n)(w.Z["remove-group"].link.replace(":groupId",J.map((function(e){return e.uuid})))))}}]:[])},isLoading:ce,filterPlaceholder:t.formatMessage(P.Z.name).toLowerCase(),rowWrapper:M.Z,tableId:"groups",textFilterRef:A}),c().createElement(i.Suspense,null,c().createElement(l.Outlet,{context:(e={pagination:oe,filters:ie},(0,o.Z)(e,w.Z["add-group"].path,{orderBy:ne,postMethod:function(e){Q(""),b(e)}}),(0,o.Z)(e,w.Z["edit-group"].path,{postMethod:function(e){Q(""),b(B(B({},e),{},{orderBy:ne}))},cancelRoute:(0,j.zk)(w.Z.groups.link,oe,ie),submitRoute:(0,j.zk)(w.Z.groups.link,B(B({},oe),{},{offset:0}),ie)}),(0,o.Z)(e,w.Z["remove-group"].path,{postMethod:function(e,t){b(B(B({},t),{},{filters:{name:se?"":H},orderBy:ne})),se&&Q(""),K(J.filter((function(t){return!e.includes(t.uuid)})))},cancelRoute:(0,j.zk)(w.Z.groups.link,oe,ie),submitRoute:(0,j.zk)(w.Z.groups.link,B(B({},oe),{},{offset:0}),se?{}:ie)}),e)})))))}}}]);
//# sourceMappingURL=../sourcemaps/9191.0ed74958a3108bf921a5d11913efff2b.js.map