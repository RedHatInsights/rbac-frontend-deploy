(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9619,459],{41435:(e,t,a)=>{"use strict";a.d(t,{Dl:()=>o,dw:()=>n,e4:()=>l,ir:()=>r});var r,n,s=a(28416);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(n||(n={}));const o=s.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),l=s.createContext({keyHandler:null,sendRef:null})},86478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(49854);const r={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(85893),n=a(94184),s=a.n(n),o=a(78956);const l=function(e){var t=e.className,a=e.title,n=s()(t);return(0,r.jsx)(o.Title,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle",children:a})}},7876:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(85893),n=a(94184),s=a.n(n),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const l=function(e){var t,a=e.type,n=e.children,l=e.className,i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["type","children","className"]),c=s()(l,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,r.jsxs)("section",o({},i,{className:c,children:[" ",n," "]}))}},27561:(e,t,a)=>{var r=a(67990),n=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(n,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var a=e.length;a--&&t.test(e.charAt(a)););return a}},23279:(e,t,a)=>{var r=a(13218),n=a(7771),s=a(14841),o=Math.max,l=Math.min;e.exports=function(e,t,a){var i,c,m,u,p,d,f=0,g=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var a=i,r=c;return i=c=void 0,f=t,u=e.apply(r,a)}function E(e){var a=e-d;return void 0===d||a>=t||a<0||v&&e-f>=m}function y(){var e=n();if(E(e))return x(e);p=setTimeout(y,function(e){var a=t-(e-d);return v?l(a,m-(e-f)):a}(e))}function x(e){return p=void 0,b&&i?h(e):(i=c=void 0,u)}function Z(){var e=n(),a=E(e);if(i=arguments,c=this,d=e,a){if(void 0===p)return function(e){return f=e,p=setTimeout(y,t),g?h(e):u}(d);if(v)return clearTimeout(p),p=setTimeout(y,t),h(d)}return void 0===p&&(p=setTimeout(y,t)),u}return t=s(t)||0,r(a)&&(g=!!a.leading,m=(v="maxWait"in a)?o(s(a.maxWait)||0,t):m,b="trailing"in a?!!a.trailing:b),Z.cancel=function(){void 0!==p&&clearTimeout(p),f=0,i=d=c=p=void 0},Z.flush=function(){return void 0===p?u:x(n())},Z}},7771:(e,t,a)=>{var r=a(55639);e.exports=function(){return r.Date.now()}},14841:(e,t,a)=>{var r=a(27561),n=a(13218),s=a(33448),o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var a=l.test(e);return a||i.test(e)?c(e.slice(2),a?2:8):o.test(e)?NaN:+e}},84414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(62012),n=a(64756);const s=e=>{const t=(0,r.useNavigate)();return(a,r)=>t((0,n.n)(a,e),r)}},82617:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(28416),n=a.n(r),s=a(45697),o=a.n(s),l=a(62012),i=a(75629),c=a(12849);const m=e=>e?n().createElement(i.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?n().createElement(i.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&n().createElement(l.NavLink,{end:!0,to:e.to},e.title)||e.title):n().createElement(c.Vj,{key:t})))):null;m.propTypes={breadcrumbs:o().object};const u=m},13851:(e,t,a)=>{"use strict";a.d(t,{Q:()=>h,y:()=>E});var r=a(28416),n=a.n(r),s=a(45697),o=a.n(s),l=a(64380),i=a(86304),c=a(12849),m=a(82617),u=a(85893),p=a(94184),d=a.n(p);const f=n().createContext("light");var g=function(){return g=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},g.apply(this,arguments)};const v=function(e){var t=e.className,a=e.children,r=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children"]),n=d()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,u.jsx)(f.Consumer,{children:function(e){var t,s;void 0===e&&(e="light");var o=d()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((s={})["pf-m-light"]="light"===e,s));return(0,u.jsx)("section",g({},r,{className:"".concat(n," ").concat(o),"widget-type":"InsightsPageHeader",children:a}))}})};var b=a(39173);const h=({children:e,breadcrumbs:t})=>n().createElement(r.Fragment,null,t&&n().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},n().createElement(m.Z,{...t})),n().createElement(v,{className:"rbac-page-header"},e));h.propTypes={children:o().oneOfType([o().arrayOf(o().node),o().node]).isRequired,breadcrumbs:o().array,paddingBottom:o().bool},h.defaultProps={paddingBottom:!1};const E=({title:e,renderTitleTag:t,description:a,children:s})=>n().createElement(r.Fragment,null,n().createElement(i.Flex,null,n().createElement(i.FlexItem,{className:"pf-v5-u-mb-sm"},n().createElement(b.Z,{title:e||n().createElement(c.h2,null),className:"rbac-page-header__title"})),n().createElement(i.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&n().createElement(l.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?n().createElement(l.Text,{component:l.TextVariants.p},a):a),s);E.propTypes={title:o().node,renderTitleTag:o().func,description:o().node,children:o().oneOfType([o().node,o().arrayOf(o().node)])}},27997:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>U});var r=a(28416),n=a.n(r),s=a(86706),o=a(62012),l=a(25387),i=a(31055),c=a(78173),m=a(23539),u=a(64380),p=a(56869),d=a(75863),f=a(21081),g=a(49004),v=a(34844),b=a(91693),h=a.n(b),E=a(77029),y=a.n(E),x=a(55140),Z=a(23279),T=a.n(Z),O=a(7876),N=a(62410),C=a(32819),M=a(84414),k=a(64756),_=a(82617),w=a(66180),j=a(86601),I=a(2550),S=a(14289),P=a(12849),L=a(97246),R=a(13851),A=a(13563),B=a(2981),F=a(29301),$=a(77044),G=a(74982);let D;const U=()=>{const e=(0,l.YB)(),t=(0,M.Z)(),a=(0,s.useDispatch)(),{username:b}=(0,o.useParams)(),[E,Z]=(0,r.useState)(""),[U,V]=(0,r.useState)({}),[W,z]=(0,r.useState)(!1),[H,Q]=(0,r.useState)([]),q=(0,x.Z)(),{roles:Y,isLoadingRoles:J,rolesWithAccess:K,user:X,isLoadingUsers:ee,userExists:te,adminGroup:ae}=(0,s.useSelector)((({roleReducer:{error:e,roles:t,isLoading:a,rolesWithAccess:r},userReducer:{users:{data:n},isUserDataLoading:s},groupReducer:{adminGroup:o}})=>({adminGroup:o,roles:t,isLoadingRoles:a,rolesWithAccess:r,user:n&&n.filter((e=>e.username===b))[0],isLoadingUsers:s,userExists:e!==F.VG}))),{orgAdmin:re,userAccessAdministrator:ne}=(0,r.useContext)(j.Z),se=re||ne,oe=e=>a((0,A.vd)(e));(0,r.useEffect)((()=>(q.appObjectId(b),a((0,$.fB)({chrome:q})),a((0,B.u)({...G.he,limit:0,filters:{username:b}})),oe({limit:20,offset:0,username:b}),z(!0),oe({limit:20,offset:0,addFields:["groups_in"],username:b}).then((()=>z(!1))),D=T()(((e,t,a,r,n)=>oe({limit:e,offset:t,displayName:a,addFields:r,username:n})),500),()=>q.appObjectId(void 0))),[]);const le=[e.formatMessage(I.Z.roles),{title:e.formatMessage(I.Z.groups),cellTransforms:[p.z]},{title:e.formatMessage(I.Z.permissions),cellTransforms:[p.z]},{title:e.formatMessage(I.Z.lastModified)}],ie=[{title:e.formatMessage(I.Z.users),to:(0,k.n)(S.Z.users.link)},{title:te?b:e.formatMessage(I.Z.invalidUser),isActive:!0}];return n().createElement(r.Fragment,null,te?n().createElement(m.Stack,null,n().createElement(m.StackItem,null,n().createElement(R.Q,{breadcrumbs:ie},n().createElement(R.y,{title:b,renderTitleTag:()=>ee?n().createElement(C.Z,{size:"xs",className:"rbac-c-user__label-skeleton"}):n().createElement(c.Label,{color:X?.is_active&&"green"},e.formatMessage(X?.is_active?I.Z.active:I.Z.inactive))},!ee&&X?n().createElement(r.Fragment,null,n().createElement(u.TextContent,null,`${e.formatMessage(I.Z.orgAdministrator)}: `,X?.is_org_admin?n().createElement(h(),{key:"yes-icon",className:"pf-v5-u-mx-sm"}):n().createElement(y(),{key:"no-icon",className:"pf-v5-u-mx-sm"}),e.formatMessage(X?.is_org_admin?I.Z.yes:I.Z.no)),X?.email&&n().createElement(u.Text,{component:u.TextVariants.p},`${e.formatMessage(I.Z.email)}: ${X.email}`),X?.username&&n().createElement(u.TextContent,null,n().createElement(u.Text,{component:u.TextVariants.p},`${e.formatMessage(I.Z.username)}: ${X.username}`))):null))),n().createElement(m.StackItem,null,n().createElement(O.Z,{type:"content",className:"rbac-c-user-roles"},n().createElement(L.M,{columns:le,isExpandable:!0,onExpand:(e,t,r,n,s)=>{n?V({...U,[s.uuid]:-1}):(V({...U,[s.uuid]:r}),2===r&&a((0,A.sv)(s.uuid)))},rows:((t,a,r)=>t?t.reduce(((t,{uuid:s,display_name:o,groups_in:l=[],modified:i,accessCount:c},m)=>[...t,{uuid:s,cells:[{title:o,props:{component:"th",isOpen:!1}},{title:W?n().createElement(C.Z,{size:C.i.xs}):l.length,props:{isOpen:1===U[s]}},{title:c,props:{isOpen:2===U[s]}},{title:n().createElement(N.Z,{type:(0,F.mh)(i),date:i})}]},{uuid:`${s}-groups`,parent:3*m,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:l?.length>0?n().createElement(f.i,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:d.B.compact,cells:[e.formatMessage(I.Z.name),e.formatMessage(I.Z.description)," "],rows:l.map((t=>({cells:[{title:n().createElement(k.Z,{to:S.Z["group-detail"].link.replace(":groupId",t.uuid)},t.name)},t.description,{title:r.uuid===t.uuid?null:n().createElement(k.Z,{to:S.Z["user-add-group-roles"].link.replace(":username",a).replace(":groupId",t.uuid),state:{name:t.name}},e.formatMessage(I.Z.addRoleToThisGroup)),props:{className:"pf-v5-u-text-align-right"}}]})))},n().createElement(g.x,null),n().createElement(v.R,null)):n().createElement(u.Text,{className:"pf-v5-u-mx-lg pf-v5-u-my-sm"},W?e.formatMessage(I.Z.loading):e.formatMessage(I.Z.noGroups))}]},{uuid:`${s}-groups`,parent:3*m,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:K&&K[s]?K[s].access?.length>0?n().createElement(f.i,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:d.B.compact,cells:[e.formatMessage(I.Z.application),e.formatMessage(I.Z.resourceType),e.formatMessage(I.Z.operation)],rows:K[s].access.map((e=>({cells:e.permission.split(":")})))},n().createElement(g.x,null),n().createElement(v.R,null)):n().createElement(u.Text,{className:"pf-v5-u-mx-lg pf-v5-u-my-sm"},e.formatMessage(I.Z.noPermissions)):n().createElement(P.Wi,{items:3,isCompact:!0})}]}]),[]):[])(Y.data,b,ae),data:Y.data,filterValue:E,ouiaId:"user-details-table",fetchData:({limit:e,offset:t,name:a})=>{D(e,t,a,["groups_in"],b)},setFilterValue:({name:e})=>Z(e),isLoading:J,toolbarButtons:()=>[...se?[n().createElement(k.Z,{to:S.Z["add-user-to-group"].link.replace(":username",b),key:"add-user-to-group",className:"rbac-m-hide-on-sm"},n().createElement(i.Button,{ouiaId:"add-user-to-group-button",variant:"primary","aria-label":"Add user to a group"},e.formatMessage(I.Z.addUserToGroup))),{label:e.formatMessage(I.Z.addUserToGroup),onClick:()=>{t(S.Z["add-user-to-group"].link.replace(":username",b))}}]:[]],pagination:Y.meta,filterPlaceholder:e.formatMessage(I.Z.roleName).toLowerCase(),titlePlural:e.formatMessage(I.Z.roles).toLowerCase(),titleSingular:e.formatMessage(I.Z.role).toLowerCase(),tableId:"user"}),n().createElement(r.Suspense,null,n().createElement(o.Outlet,{context:{username:b,selectedRoles:H,setSelectedRoles:Q,closeUrl:S.Z["user-detail"].link.replace(":username",b),addRolesToGroup:(e,t)=>a((0,$.Wj)(e,t))}}))))):n().createElement(r.Fragment,null,n().createElement("section",{className:"pf-v5-c-page__main-breadcrumb pf-v5-u-pb-md"},n().createElement(_.Z,{...ie})),n().createElement(w.Z,{title:e.formatMessage(I.Z.userNotFound),description:[e.formatMessage(I.Z.userNotFoundDescription,{username:b})],actions:[n().createElement(i.Button,{key:"back-button",className:"pf-v5-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:()=>t(-1)},e.formatMessage(I.Z.backToPreviousPage))]})))}}}]);
//# sourceMappingURL=../sourcemaps/9619.02e631b9f47a8139a31de472d9b5b016.js.map