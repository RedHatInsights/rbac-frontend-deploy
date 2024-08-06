"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2264,6710],{53926:(e,t,a)=>{a.d(t,{Lr:()=>r,cH:()=>c,nU:()=>n,rO:()=>o});var n,r,s=a(44914);!function(e){e.right="right",e.left="left"}(n||(n={})),function(e){e.up="up",e.down="down"}(r||(r={}));const o=s.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),c=s.createContext({keyHandler:null,sendRef:null})},405:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(74848),r=a(46942),s=a.n(r),o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};const c=function(e){var t,a=e.type,r=e.children,c=e.className,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["type","children","className"]),l=s()(c,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,n.jsxs)("section",o({},i,{className:l,children:[" ",r," "]}))}},44419:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(49634),r=a(58471);const s=e=>{const t=(0,n.useNavigate)();return(a,n)=>t((0,r.o)(a,e),n)}},93260:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(44914),r=a.n(n),s=a(69733),o=a(6442),c=a(49634),i=a(62448),l=a(71436),u=a(79994),d=a(86458),m=a(40748),p=a(405),g=a(63767),f=a(61361),A=a(38694),v=a(99843),h=a(42134),y=a(47181),b=a(40262),C=a(58471),I=a(44419),k=a(40335),E=a(49573);const M=(e=[],t=[])=>e?.reduce(((e,{uuid:a,name:s,clientId:o,owner:c,time_created:i})=>[...e,{uuid:a,title:s,cells:[s,o,c,r().createElement(n.Fragment,{key:`${s}-modified`},r().createElement(g.A,{date:i,type:(0,h.eW)(i)}))],selected:Boolean(t&&t.find((e=>e.uuid===a)))}]),[]),S=({groupReducer:{selectedGroup:e,systemGroup:t,groups:a}})=>({serviceAccounts:e.serviceAccounts?.data||[],pagination:{...f.L6,...e?.serviceAccounts?.meta||{}},groupsPagination:a.pagination||a.meta,groupsFilters:a.filters,isLoading:e.serviceAccounts.isLoading,isAdminDefault:e.admin_default,systemGroupUuid:t?.uuid,group:e,platformDefault:e.platform_default}),w=()=>{const e=(0,o.A)(),t=(0,s.useDispatch)(),a=(0,I.A)(),{groupId:g}=(0,c.useParams)(),[f,h]=(0,n.useState)({clientId:"",name:"",description:""}),[w,O]=(0,n.useState)([]),{userAccessAdministrator:P,orgAdmin:x}=(0,n.useContext)(b.A),T=(0,n.useRef)(x||P),{serviceAccounts:D,pagination:F,isLoading:L,isAdminDefault:N,systemGroupUuid:j,platformDefault:B}=(0,s.useSelector)(S),G=(e,a)=>t((0,v.G2)(e,a)),R=[{title:e.formatMessage(k.A.name)},{title:e.formatMessage(k.A.clientId)},{title:e.formatMessage(k.A.owner)},{title:e.formatMessage(k.A.timeCreated)}],U=(0,n.useCallback)((()=>{g!==y.p3?G(g,F):j&&G(j,F)}),[j,g]);return(0,n.useEffect)((()=>{U()}),[j]),(0,n.useEffect)((()=>{T.current=x||P}),[x,P]),r().createElement(r().Fragment,null,r().createElement(p.A,{type:"content",id:"tab-service-accounts"},B?r().createElement(d.Card,null,r().createElement(d.CardBody,null,r().createElement(l.Bullseye,null,r().createElement(m.TextContent,null,r().createElement(m.Text,{component:m.TextVariants.h1},e.formatMessage(k.A.noAccountsInDefaultAccess)))))):r().createElement(r().Fragment,null,r().createElement(i.Alert,{className:"rbac-service-accounts-alert",variant:"info",isInline:!0,isPlain:!0,title:e.formatMessage(k.A.visitServiceAccountsPage,{link:r().createElement(C.A,{to:"/service-accounts",linkBasename:"/iam"},e.formatMessage(k.A.serviceAccountsPage))})}),r().createElement(A.Z,{columns:R,isSelectable:!0,rows:M(D,w),data:D,filterValue:f,fetchData:e=>G(g,e),emptyFilters:{clientId:"",name:"",description:""},setFilterValue:({clientId:e,name:t,description:a})=>{h({clientId:void 0===e?f.clientId:e,name:void 0===t?f.name:t,description:void 0===a?f.description:a})},isLoading:L,pagination:F,checkedRows:w,setCheckedItems:O,titlePlural:e.formatMessage(k.A.serviceAccounts).toLowerCase(),titleSingular:e.formatMessage(k.A.serviceAccount),toolbarButtons:()=>[r().createElement(C.A,{className:"rbac-m-hide-on-sm",to:E.A["group-add-service-account"].link.replace(":groupId",g),key:"add-to-group"},r().createElement(u.Button,{ouiaId:"add-service-account-button",variant:"primary",className:"rbac-m-hide-on-sm","aria-label":"Add service account to group"},e.formatMessage(k.A.addServiceAccount))),{label:e.formatMessage(k.A.remove),props:{isDisabled:0===w.length},onClick:()=>{const e=(0,c.createSearchParams)();w.forEach((({name:t})=>e.append("name",t))),a({pathname:E.A["group-service-accounts-remove-group"].link.replace(":groupId",g),search:e.toString()})}},{label:e.formatMessage(k.A.addServiceAccount),props:{className:"rbac-m-hide-on-md"},onClick:()=>a(E.A["group-add-service-account"].link.replace(":groupId",g))}],actionResolver:({uuid:t})=>[...T.current&&!N?[{title:e.formatMessage(k.A.remove),onClick:()=>a({pathname:E.A["group-service-accounts-remove-group"].link.replace(":groupId",g),search:(0,c.createSearchParams)({name:t}).toString()})}]:[]],emptyProps:{title:e.formatMessage(k.A.noGroupAccounts),description:[e.formatMessage(N?k.A.contactServiceTeamForAccounts:k.A.addAccountsToThisGroup),""]},filters:[{key:"clientId",value:f.clientId,label:e.formatMessage(k.A.clientId),placeholder:e.formatMessage(k.A.filterByKey,{key:`${e.formatMessage(k.A.clientId)[0].toLowerCase()}${e.formatMessage(k.A.clientId).slice(1)}`})},{key:"name",value:f.name},{key:"description",value:f.description}],isFilterable:!0,tableId:"group-accounts",ouiaId:"group-accounts"}))),B?null:r().createElement(n.Suspense,null,r().createElement(c.Outlet,{context:{[E.A["group-service-accounts-remove-group"].path]:{postMethod:e=>{O([]),a(E.A["group-detail-service-accounts"].link.replace(":groupId",g)),e&&e.then?.(U)}},[E.A["group-add-service-account"].path]:{postMethod:e=>{a(E.A["group-detail-service-accounts"].link.replace(":groupId",g)),e&&e.then?.(U)}}}})))}}}]);
//# sourceMappingURL=../sourcemaps/2264.1512af6254090a4b873c53090e108e75.js.map