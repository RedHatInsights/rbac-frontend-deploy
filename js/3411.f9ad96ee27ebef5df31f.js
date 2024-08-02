(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3411,459],{60817:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var n=a(85893),s=a(86706),l=o(a(72837)),c=a(53446),u=a(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,a=i(e,["clearNotifications"]),o=(0,s.useSelector)((function(e){return e.notifications})),u=(0,s.useDispatch)();return(0,n.jsx)(l.default,r({notifications:o,removeNotification:function(e){return u((0,c.removeNotification)(e))},onClearAll:t||function(){return u((0,c.clearNotifications)())}},a))},t.NotificationPortal=function(e){var a=e.silent,o=void 0===a||a,s=i(e,["silent"]);return(0,n.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:o,children:(0,n.jsx)(t.NotificationPortalBase,r({},s))})};var f=a(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return o(f).default}}),t.default=t.NotificationPortal},72871:function(e,t,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,i)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),i=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||r(t,e,a)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}}),i(a(60817),t)},71355:function(e,t,a){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var i=a(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return r(i).default}});var o=a(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return r(o).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return o.notificationsReducers}});var n=a(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return n.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return n.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return n.CLEAR_NOTIFICATIONS}});var s=a(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return s.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return s.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return s.clearNotifications}});var l=a(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return r(l).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var a="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(a,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(a,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(a,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var i=a(68129);t.addNotification=function(e){return{type:i.ADD_NOTIFICATION,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:i.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:i.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,a){"use strict";var r=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var i=a(68129);t.defaultState=[],t.notificationsReducers=function(e,a){switch(void 0===e&&(e=t.defaultState),a.type){case i.ADD_NOTIFICATION:return o=e,n=a.payload,r(r([],o,!0),[n],!1);case i.REMOVE_NOTIFICATION:return function(e,t){var a=t.payload,i=e.findIndex((function(e){return e.id===a}));return r(r([],e.slice(0,i),!0),e.slice(i+1),!0)}(e,a);case i.CLEAR_NOTIFICATIONS:return[];default:return e}var o,n},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ErrorBoundary:()=>r.Z,default:()=>r.Z}),a(30002);var r=a(49314)},84414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(62012),i=a(64756);const o=e=>{const t=(0,r.useNavigate)();return(a,r)=>t((0,i.n)(a,e),r)}},66180:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(28416),i=a.n(r),o=a(95376),n=a(58826),s=a.n(n);const l=({title:e,icon:t,description:a,actions:r,...n})=>i().createElement(o.EmptyState,{variant:o.EmptyStateVariant.sm,...n},i().createElement(o.EmptyStateHeader,{titleText:i().createElement(i().Fragment,null,e),icon:i().createElement(o.EmptyStateIcon,{icon:t||s()}),headingLevel:"h4"}),i().createElement(o.EmptyStateBody,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>i().createElement(i().Fragment,{key:t},e," ",i().createElement("br",null))))),i().createElement(o.EmptyStateFooter,null,r))},97246:(e,t,a)=>{"use strict";a.d(t,{M:()=>M});var r=a(28416),i=a.n(r),o=a(25387),n=a(45697),s=a.n(n),l=a(2550),c=a(65220),u=a(75863),f=a(21081),d=a(49004),m=a(34844),p=a(15433),g=a(12913),b=a(31055),y=a(93297),h=a(95376),I=a(47826),O=a.n(I),v=a(29301),N=a(68572),C=a(66180);const M=({className:e,isCompact:t,borders:a,columns:n,rows:s,toolbarButtons:I,data:M,actionResolver:T,areActionsDisabled:E,routes:F,titlePlural:A,titleSingular:R,pagination:S,paginationProps:P,filterValue:_,isLoading:k,emptyFilters:Z,setFilterValue:w,checkedRows:D,isSelectable:j,isRowSelectable:B,fetchData:L,setCheckedItems:x,emptyProps:V,filterPlaceholder:U,rowWrapper:G,filters:q,isFilterable:H,onShowMore:W,showMoreTitle:$,onFilter:Y,onChange:K,value:Q,sortBy:z,onSort:X,isExpandable:J,onExpand:ee,hideFilterChips:te,hideHeader:ae,noData:re,noDataDescription:ie,ouiaId:oe,tableId:ne,containerRef:se,textFilterRef:le,toolbarChildren:ce})=>{const ue=(0,o.YB)(),fe=(0,c.useFlag)("platform.rbac.itless");return i().createElement("div",{className:e},F(),!k&&0===s?.length&&0===_?.length&&q.every((({value:e})=>!e))?i().createElement(C.Z,{title:ue.formatMessage(l.Z.configureItems,{items:A}),icon:O(),description:[ue.formatMessage(l.Z.toConfigureUserAccess),ue.formatMessage(l.Z.createAtLeastOneItem,{item:R})],actions:I()[0],...V}):(()=>{const e=`${"desc"===z?.direction?"-":""}${n[z?.index]?.key}`;return i().createElement(r.Fragment,null,i().createElement(N.ZP,{isSelectable:j,isRowSelectable:B,checkedRows:D,setCheckedItems:x,isLoading:k||re,data:M,titleSingular:R,filterValue:_,setFilterValue:w,sortBy:e,pagination:S,paginationProps:P,fetchData:L,toolbarButtons:I,filterPlaceholder:U,filters:q,isFilterable:H,onShowMore:W,showMoreTitle:$,onFilter:Y,onChange:K,value:Q,hideFilterChips:te,tableId:ne,containerRef:se,textFilterRef:le,toolbarChildren:ce}),k?i().createElement(g.Z,{variant:t?u.B.compact:void 0,rows:S?.limit,columns:n.map((e=>e.title))}):i().createElement(f.i,{canSelectAll:!1,"aria-label":`${A.toLowerCase()} table`,variant:t?u.B.compact:null,borders:a,...j&&s?.length>0&&{onSelect:(e,t,a,{uuid:r,cells:[i],requires:o})=>x((0,v.ZQ)([{uuid:r,name:i,requires:o,...fe&&{username:M[a]?.username}}],t))},...J&&{onExpand:ee},rows:s?.length>0?s:[{fullWidth:!0,cells:[{title:i().createElement(C.Z,{title:ue.formatMessage(l.Z.noMatchingItemsFound,{items:A}),description:re&&ie?ie:[ue.formatMessage(l.Z.filterMatchesNoItems,{items:A}),ue.formatMessage(l.Z.tryChangingFilters)],actions:re&&ie?void 0:[i().createElement(h.EmptyStateActions,{key:"clear-filters"},i().createElement(b.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{w(Z),L({...S,offset:0,...Z||{name:""}})}},ue.formatMessage(l.Z.clearAllFilters)))]}),props:{colSpan:n.length}}]}],cells:n,...s?.length>0&&{actionResolver:T},className:0==s?.length?"ins-c-table-empty-state":"",areActionsDisabled:E,rowWrapper:G,sortBy:z,ouiaId:oe,onSort:(e,t,a,r)=>X(e,t,a,r)},!ae&&i().createElement(d.x,null),i().createElement(m.R,null)),!S.noBottom&&i().createElement(p.Z,null,!k&&i().createElement(y.Pagination,{...(0,N.Wz)(S,L,_,z,P),variant:"bottom",dropDirection:"up"})))})())};M.propTypes={...N.ZP.propTypes,sortBy:s().shape({directions:s().string,index:s().number}),className:s().string,rowWrapper:s().any,isCompact:s().bool,isRowSelectable:s().func,borders:s().bool,emptyFilters:s().object,checkedRows:s().array,columns:s().array.isRequired,rows:s().array.isRequired,titlePlural:s().string,routes:s().func,actionResolver:s().func,areActionsDisabled:s().func,pagination:s().shape({noBottom:s().bool,limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),isExpandable:s().bool,onExpand:s().func,onSort:s().func,containerRef:s().node,noData:s().bool,hideFilterChips:s().bool,hideHeader:s().bool,noDataDescription:s().arrayOf(s().node),filters:s().array,tableId:s().string.isRequired,toolbarChildren:s().func},M.defaultProps={...N.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1,toolbarChildren:()=>null}},68572:(e,t,a)=>{"use strict";a.d(t,{Wz:()=>m,ZP:()=>h});var r=a(28416),i=a.n(r),o=a(31611),n=a(25387),s=a(45697),l=a.n(s),c=a(2550),u=a(96486),f=a(29301),d=a(74982);const m=(e={},t,a="",r="",i)=>({...i,itemCount:e.count,perPage:e.limit,page:(0,d.wy)(e.limit,e.offset),onSetPage:(i,o)=>{t({...e,offset:(0,d.vE)(o,e.limit),name:a,orderBy:r})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,i)=>{t({offset:0,limit:i,name:a,orderBy:r})}}),p=(e,t=[],a=(()=>{}),r=[],i,o=(()=>!0))=>{const s=(0,n.YB)();return{count:t.length,items:[{title:s.formatMessage(c.Z.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&r&&r.length>0?{title:s.formatMessage(c.Z.selectPage,{length:r.filter(o).length}),onClick:()=>{a((0,f.ZQ)(r,!0))}}:{}}],checked:(0,f.um)(r,t,o),onSelect:t=>{!e&&a((0,f.ZQ)(r,t))},id:i}},g=(e,t=(()=>{}),a=(()=>{}),r="",i={},o="",s,l,d,m,p,g,b,y,h,I,O)=>{const v=(0,n.YB)();return{onChange:y,value:h,items:[...d&&d.length>0?d.map((({key:o,label:n,value:s,selected:l,placeholder:y,type:h="text",groups:O,items:N,innerRef:C})=>({label:n||(0,f.RI)(o),type:h??"text",filterValues:{innerRef:C,id:`filter-by-${o}`,key:`filter-by-${o}`,placeholder:y||v.formatMessage(c.Z.filterByKey,{key:o}),value:s,selected:l,..."text"!==h?{isFilterable:m,onShowMore:p,showMoreTitle:g,onFilter:b}:{},groups:O,items:N,onChange:(e,n)=>{const s="string"==typeof n||Array.isArray(n)?n:Object.keys((0,u.pickBy)(n[""],(e=>e)));t({...r,...i,offset:0,[o]:s}),(0,f.Aq)((()=>a({...i,offset:0,orderBy:I,...d.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[o]:s}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,f.RI)(s||o),type:"text",filterValues:{innerRef:O,id:"filter-by-string",key:"filter-by-string",placeholder:v.formatMessage(c.Z.filterByKey,{key:s||o}),value:r,onChange:(e,r)=>{t({...i,offset:0,name:r}),(0,f.Aq)((()=>a({...i,offset:0,name:r,orderBy:I}))).then((e=>(O?.current?.focus(),e)))},isDisabled:e}}],...l||[]]}},b=(e="",t,a={},r=(()=>{}),i=(()=>{}),o)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,f.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[n],s)=>{const l=(e,t,a)=>s?"group"===t||"checkbox"===t?[]:"":a!==n.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==n.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:r})=>({...e,[t]:l(a,r,t)})),{});r({...a,offset:0,name:"",...c}),i({...a,offset:0,orderBy:o,name:"",...c})}}),y=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:r,isLoading:n,data:s,titleSingular:l,filterValue:c,setFilterValue:u,pagination:f,paginationProps:d,fetchData:y,sortBy:h,toolbarButtons:I,filterPlaceholder:O,filterItems:v,filters:N,isFilterable:C,onShowMore:M,showMoreTitle:T,onFilter:E,onChange:F,value:A,hideFilterChips:R,tableId:S,textFilterRef:P,toolbarChildren:_})=>i().createElement(o.Z,{...e&&{bulkSelect:p(n,a,r,s,S,t)},filterConfig:g(n,u,y,c,f,l,O,v,N,C,M,T,E,F,A,h,P),actionsConfig:{actions:I()},...!n&&{pagination:m(f,y,c,h,d)},...(c.length>0||N&&N.length>0)&&!R&&{activeFiltersConfig:b(c,N,f,u,y,h)}},_());y.propTypes={isSelectable:l().bool,isRowSelectable:l().func,checkedRows:l().array,setCheckedItems:l().func,isLoading:l().bool,data:l().array,titleSingular:l().string,filterValue:l().oneOfType([l().array,l().string]),setFilterValue:l().func,filters:l().arrayOf(l().shape({value:l().oneOfType([l().string,l().number,l().array]),key:l().string,placeholder:l().string})),isFilterable:l().bool,onShowMore:l().func,showMoreTitle:l().string,onFilter:l().func,onChange:l().func,value:l().any,pagination:l().shape({limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),sortBy:l().string,filterItems:l().arrayOf(l().object),filterPlaceholder:l().string,isCollapsible:l().bool,fetchData:l().func.isRequired,toolbarButtons:l().func,hideFilterChips:l().bool,tableId:l().string,textFilterRef:l().object,toolbarChildren:l().func},y.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:d.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1,toolbarChildren:()=>null};const h=y},10113:(e,t,a)=>{"use strict";a.d(t,{Z:()=>N});var r=a(28416),i=a.n(r),o=a(86706),n=a(45697),s=a.n(n),l=a(62012),c=a(25387),u=a(46818),f=a(7732),d=a(29301),m=a(60063),p=a(97246),g=a(24869),b=a(86601),y=a(74982),h=a(23340),I=a(2550),O=a(39820);const v=({selectedUsers:e,setSelectedUsers:t,userLinks:a,usesMetaInURL:n,displayNarrow:s,props:v})=>{const N=(0,c.YB)(),C=(0,l.useNavigate)(),M=(0,l.useLocation)(),T=(0,o.useDispatch)(),{orgAdmin:E}=(0,r.useContext)(b.Z),F=(0,r.useRef)(null);let A=(0,o.useSelector)((({userReducer:{users:e}})=>({limit:(n?e.pagination.limit:e.meta.limit)??(E?y.HE:y.he).limit,offset:(n?e.pagination.offset:e.meta.offset)??(E?y.HE:y.he).offset,count:n?e.pagination.count:e.meta.count,redirected:n&&e.pagination.redirected})));const{users:R,isLoading:S,stateFilters:P}=(0,o.useSelector)((({userReducer:{users:{data:e,filters:t={}},isUserDataLoading:a}})=>({users:e?.map?.((e=>({...e,uuid:e.username}))),isLoading:a,stateFilters:M.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}}))),_=(0,r.useCallback)((e=>T((0,m.uh)(e))),[T]),k=(0,r.useCallback)((e=>T((0,m.an)(e))),[T]),Z=[{title:N.formatMessage(s?I.Z.orgAdmin:I.Z.orgAdministrator),key:"org-admin",transforms:[u.P8]},{title:N.formatMessage(I.Z.username),key:"username",transforms:[f.p]},{title:N.formatMessage(I.Z.email)},{title:N.formatMessage(I.Z.firstName),transforms:[u.P8]},{title:N.formatMessage(I.Z.lastName),transforms:[u.P8]},{title:N.formatMessage(I.Z.status),transforms:[u.P8]}],[w,D]=(0,r.useState)({index:1,direction:"asc"}),[j,B]=(0,r.useState)(n?P:{username:"",email:"",status:[N.formatMessage(I.Z.active)]});return(0,r.useEffect)((()=>{n&&(0,y.oG)(M,C,A.limit,A.offset)}),[A.offset,A.limit,A.count,A.redirected]),(0,r.useEffect)((()=>{const{limit:e,offset:t}=(0,y.rj)(M,C,A),a=n?(0,h.aX)(M,C,["username","email","status"],j):{status:j.status};B(a),_({...(0,d.jl)({limit:e,offset:t,filters:a}),usesMetaInURL:n})}),[]),(0,r.useEffect)((()=>{n&&((0,y.Zc)(M)||(0,y.oG)(M,C,A.limit,A.offset),Object.values(j).some((e=>e?.length>0))&&!(0,h.qF)(M,Object.keys(j))&&(0,h.aX)(M,C,Object.keys(j),j))})),i().createElement(p.M,{isCompact:!0,isSelectable:!0,borders:!1,columns:Z,rows:(0,O.H)(a,R,N,e,!0),sortBy:w,onSort:(e,t,a)=>{const r=`${"desc"===a?"-":""}${Z[t-1].key}`;D({index:t,direction:a}),_({...A,filters:j,usesMetaInURL:n,orderBy:r})},data:R,ouiaId:"users-table",fetchData:e=>{const t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:j.status,{username:a,email:r,count:i,limit:o,offset:s,orderBy:l}=e;_({...(0,d.jl)({count:i,limit:o,offset:s,orderBy:l,filters:{username:a,email:r,status:t}}),usesMetaInURL:n}).then((()=>{F?.current?.focus()})),n&&(0,h.MS)(M,C,{username:a,email:r,status:t})},emptyFilters:{username:"",email:"",status:""},setFilterValue:({username:e,email:t,status:a})=>{var r;r={username:void 0===e?j.username:e,email:void 0===t?j.email:t,status:void 0===a||a===j.status?j.status:a},n&&k(r),B({username:"",...r})},isLoading:S,pagination:A,checkedRows:e,setCheckedItems:e=>{t((t=>e(t).map((({uuid:e,username:t})=>({uuid:e,label:t||e})))))},rowWrapper:g.Z,titlePlural:N.formatMessage(I.Z.users).toLowerCase(),titleSingular:N.formatMessage(I.Z.user),filters:[{key:"username",value:j.username,placeholder:N.formatMessage(I.Z.filterByKey,{key:N.formatMessage(I.Z.username).toLowerCase()}),innerRef:F},{key:"email",value:j.email,placeholder:N.formatMessage(I.Z.filterByKey,{key:N.formatMessage(I.Z.email).toLowerCase()}),innerRef:F},{key:"status",value:j.status,label:N.formatMessage(I.Z.status),type:"checkbox",items:[{label:N.formatMessage(I.Z.active),value:"Active"},{label:N.formatMessage(I.Z.inactive),value:"Inactive"}]}],tableId:"users-list",...v})};v.propTypes={displayNarrow:s().bool,users:s().array,searchFilter:s().string,setSelectedUsers:s().func.isRequired,selectedUsers:s().array,userLinks:s().bool,props:s().object,usesMetaInURL:s().bool},v.defaultProps={displayNarrow:!1,users:[],selectedUsers:[],setSelectedUsers:()=>{},userLinks:!1,usesMetaInURL:!1};const N=v},84620:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var r=a(28416),i=a.n(r),o=a(86706),n=a(62012),s=a(25387),l=a(45697),c=a.n(l),u=a(65220),f=a(31055),d=a(94229),m=a(23539),p=a(64380),g=a(71355),b=a(55140),y=a(77044),h=a(10113),I=a(68397),O=a(12),v=a(84414),N=a(2550),C=a(14289);const M=({cancelRoute:e})=>{const t=(0,b.Z)(),a=(0,s.YB)(),l=(0,v.Z)(),{groupId:c}=(0,n.useParams)(),C=(0,o.useDispatch)(),M=(0,u.useFlag)("platform.rbac.itless"),[T,E]=(0,r.useState)([]),F=()=>{C((0,g.addNotification)({variant:"warning",title:a.formatMessage(T.length>1?N.Z.addingGroupMembersTitle:N.Z.addingGroupMemberTitle),dismissDelay:8e3,description:a.formatMessage(T.length>1?N.Z.addingGroupMembersCancelled:N.Z.addingGroupMemberCancelled)})),l(e)},A={...!M&&{linkDescription:a.formatMessage(N.Z.toManageUsersText)}},R={selectedUsers:T,setSelectedUsers:E,displayNarrow:!0};return i().createElement(d.Modal,{title:a.formatMessage(N.Z.addMembers),variant:d.ModalVariant.medium,isOpen:!0,actions:[i().createElement(f.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:0===T.length,variant:"primary",onClick:()=>{const r=T.map((e=>({username:e.label})));r.length>0&&(C((0,g.addNotification)({variant:"info",title:a.formatMessage(r.length>1?N.Z.addingGroupMembersTitle:N.Z.addingGroupMemberTitle),dismissDelay:8e3,description:a.formatMessage(r.length>1?N.Z.addingGroupMembersDescription:N.Z.addingGroupMemberDescription)})),C((0,y.dy)(c,r)).then((()=>{C((0,y.nd)(c)),C((0,y.bt)({usesMetaInURL:!0,chrome:t}))}))),l(e)}},a.formatMessage(N.Z.addToGroup)),i().createElement(f.Button,{id:"add-groups-cancel",ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:F},a.formatMessage(N.Z.cancel))],onClose:F},i().createElement(m.Stack,{hasGutter:!0},i().createElement(m.StackItem,null,i().createElement(p.TextContent,null,i().createElement(O.Z,{...A}))),i().createElement(m.StackItem,null,M?i().createElement(I.Z,{...R}):i().createElement(h.Z,{...R}))))};M.defaultProps={cancelRoute:C.Z.groups.link},M.propTypes={cancelRoute:c().string};const T=M},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3411.c391810af102d3ec30677e6058fa53c7.js.map