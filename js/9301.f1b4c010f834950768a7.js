(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9301,459],{55218:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(28416),n=a.n(o),i=a(80236),r=a(47173),l=a(93149);const s=e=>{var{isOpen:t,onConfirm:a,onClose:s,children:c,confirmButtonLabel:u="Confirm",cancelButtonLabel:f="Cancel",variant:d=i.v.small,titleIconVariant:m="warning",withCheckbox:p=!1,checkboxLabel:g="I understand that this action cannot be undone",confirmButtonVariant:b=r.Wu.primary}=e,h=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant"]);const[y,I]=(0,o.useState)(!1);return n().createElement(i.u,Object.assign({variant:d,isOpen:t,onClose:s,onEscapePress:s,titleIconVariant:m,actions:[n().createElement(r.zx,{ouiaId:"primary-confirm-button",key:"confirm",variant:b,onClick:a,isDisabled:p&&!y},u),n().createElement(r.zx,{ouiaId:"secondary-cancel-button",key:"cancel",variant:r.Wu.link,onClick:s},f)]},h),c,p?n().createElement(l.X,{isChecked:y,onChange:()=>I(!y),label:g,id:"warning-modal-check",className:"pf-v5-u-mt-lg"}):null)}},41435:(e,t,a)=>{"use strict";a.d(t,{Dl:()=>r,dw:()=>n,e4:()=>l,ir:()=>o});var o,n,i=a(28416);!function(e){e.right="right",e.left="left"}(o||(o={})),function(e){e.up="up",e.down="down"}(n||(n={}));const r=i.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),l=i.createContext({keyHandler:null,sendRef:null})},19993:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o}),a(70347);const o={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},62702:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o}),a(25238);const o={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},60817:function(e,t,a){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},n=this&&this.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var r=a(85893),l=a(86706),s=i(a(72837)),c=a(53446),u=a(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,a=n(e,["clearNotifications"]),i=(0,l.useSelector)((function(e){return e.notifications})),u=(0,l.useDispatch)();return(0,r.jsx)(s.default,o({notifications:i,removeNotification:function(e){return u((0,c.removeNotification)(e))},onClearAll:t||function(){return u((0,c.clearNotifications)())}},a))},t.NotificationPortal=function(e){var a=e.silent,i=void 0===a||a,l=n(e,["silent"]);return(0,r.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:i,children:(0,r.jsx)(t.NotificationPortalBase,o({},l))})};var f=a(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return i(f).default}}),t.default=t.NotificationPortal},72871:function(e,t,a){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,a,o){void 0===o&&(o=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,o,n)}:function(e,t,a,o){void 0===o&&(o=a),e[o]=t[a]}),n=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||o(t,e,a)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(r).default}}),n(a(60817),t)},71355:function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var n=a(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return o(n).default}});var i=a(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return o(i).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return i.notificationsReducers}});var r=a(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return r.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return r.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return r.CLEAR_NOTIFICATIONS}});var l=a(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return l.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return l.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return l.clearNotifications}});var s=a(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return o(s).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var a="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(a,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(a,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(a,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,a){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var n=a(68129);t.addNotification=function(e){return{type:n.ADD_NOTIFICATION,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:n.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:n.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,a){"use strict";var o=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var n=a(68129);t.defaultState=[],t.notificationsReducers=function(e,a){switch(void 0===e&&(e=t.defaultState),a.type){case n.ADD_NOTIFICATION:return i=e,r=a.payload,o(o([],i,!0),[r],!1);case n.REMOVE_NOTIFICATION:return function(e,t){var a=t.payload,n=e.findIndex((function(e){return e.id===a}));return o(o([],e.slice(0,n),!0),e.slice(n+1),!0)}(e,a);case n.CLEAR_NOTIFICATIONS:return[];default:return e}var i,r},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ErrorBoundary:()=>o.Z,default:()=>o.Z}),a(1042);var o=a(49314)},84414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var o=a(62012),n=a(64756);const i=e=>{const t=(0,o.useNavigate)();return(a,o)=>t((0,n.n)(a,e),o)}},66180:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(28416),n=a.n(o),i=a(95376),r=a(58826),l=a.n(r);const s=({title:e,icon:t,description:a,actions:o,...r})=>n().createElement(i.EmptyState,{variant:i.EmptyStateVariant.sm,...r},n().createElement(i.EmptyStateHeader,{titleText:n().createElement(n().Fragment,null,e),icon:n().createElement(i.EmptyStateIcon,{icon:t||l()}),headingLevel:"h4"}),n().createElement(i.EmptyStateBody,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>n().createElement(n().Fragment,{key:t},e," ",n().createElement("br",null))))),n().createElement(i.EmptyStateFooter,null,o))},97246:(e,t,a)=>{"use strict";a.d(t,{M:()=>N});var o=a(28416),n=a.n(o),i=a(25387),r=a(45697),l=a.n(r),s=a(2550),c=a(75863),u=a(21081),f=a(49004),d=a(34844),m=a(15433),p=a(12913),g=a(31055),b=a(93297),h=a(95376),y=a(47826),I=a.n(y),v=a(29301),O=a(68572),C=a(66180);const N=({isCompact:e,borders:t,columns:a,rows:r,toolbarButtons:l,data:y,actionResolver:N,areActionsDisabled:T,routes:_,titlePlural:E,titleSingular:A,pagination:F,paginationProps:P,filterValue:S,isLoading:k,emptyFilters:w,setFilterValue:M,checkedRows:x,isSelectable:R,isRowSelectable:B,fetchData:D,setCheckedItems:Z,emptyProps:j,filterPlaceholder:L,rowWrapper:V,filters:W,isFilterable:q,onShowMore:H,showMoreTitle:$,onFilter:G,onChange:z,value:U,sortBy:Y,onSort:Q,isExpandable:K,onExpand:X,hideFilterChips:J,hideHeader:ee,noData:te,noDataDescription:ae,ouiaId:oe,tableId:ne,containerRef:ie,textFilterRef:re})=>{const le=(0,i.YB)();return n().createElement(o.Fragment,null,_(),!k&&0===r?.length&&0===S?.length&&W.every((({value:e})=>!e))?n().createElement(C.Z,{title:le.formatMessage(s.Z.configureItems,{items:E}),icon:I(),description:[le.formatMessage(s.Z.toConfigureUserAccess),le.formatMessage(s.Z.createAtLeastOneItem,{item:A})],actions:l()[0],...j}):(()=>{const i=`${"desc"===Y?.direction?"-":""}${a[Y?.index]?.key}`;return n().createElement(o.Fragment,null,n().createElement(O.ZP,{isSelectable:R,isRowSelectable:B,checkedRows:x,setCheckedItems:Z,isLoading:k||te,data:y,titleSingular:A,filterValue:S,setFilterValue:M,sortBy:i,pagination:F,paginationProps:P,fetchData:D,toolbarButtons:l,filterPlaceholder:L,filters:W,isFilterable:q,onShowMore:H,showMoreTitle:$,onFilter:G,onChange:z,value:U,hideFilterChips:J,tableId:ne,containerRef:ie,textFilterRef:re}),k?n().createElement(p.Z,{variant:e?c.B.compact:void 0,rows:F?.limit,columns:a.map((e=>e.title))}):n().createElement(u.i,{canSelectAll:!1,"aria-label":`${E.toLowerCase()} table`,variant:e?c.B.compact:null,borders:t,...R&&r?.length>0&&{onSelect:(e,t,a,{uuid:o,cells:[n],requires:i})=>Z((0,v.ZQ)([{uuid:o,name:n,requires:i}],t))},...K&&{onExpand:X},rows:r?.length>0?r:[{fullWidth:!0,cells:[{title:n().createElement(C.Z,{title:le.formatMessage(s.Z.noMatchingItemsFound,{items:E}),description:te&&ae?ae:[le.formatMessage(s.Z.filterMatchesNoItems,{items:E}),le.formatMessage(s.Z.tryChangingFilters)],actions:te&&ae?void 0:[n().createElement(h.EmptyStateActions,{key:"clear-filters"},n().createElement(g.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{M(w),D({...F,offset:0,...w||{name:""}})}},le.formatMessage(s.Z.clearAllFilters)))]}),props:{colSpan:a.length}}]}],cells:a,...r?.length>0&&{actionResolver:N},className:0==r?.length?"ins-c-table-empty-state":"",areActionsDisabled:T,rowWrapper:V,sortBy:Y,ouiaId:oe,onSort:(e,t,a,o)=>Q(e,t,a,o)},!ee&&n().createElement(f.x,null),n().createElement(d.R,null)),!F.noBottom&&n().createElement(m.Z,null,!k&&n().createElement(b.Pagination,{...(0,O.Wz)(F,D,S,Y,P),variant:"bottom",dropDirection:"up"})))})())};N.propTypes={...O.ZP.propTypes,sortBy:l().shape({directions:l().string,index:l().number}),rowWrapper:l().any,isCompact:l().bool,isRowSelectable:l().func,borders:l().bool,emptyFilters:l().object,checkedRows:l().array,columns:l().array.isRequired,rows:l().array.isRequired,titlePlural:l().string,routes:l().func,actionResolver:l().func,areActionsDisabled:l().func,pagination:l().shape({noBottom:l().bool,limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),isExpandable:l().bool,onExpand:l().func,onSort:l().func,containerRef:l().node,noData:l().bool,hideFilterChips:l().bool,hideHeader:l().bool,noDataDescription:l().arrayOf(l().node),filters:l().array,tableId:l().string.isRequired},N.defaultProps={...O.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1}},68572:(e,t,a)=>{"use strict";a.d(t,{Wz:()=>m,ZP:()=>y});var o=a(28416),n=a.n(o),i=a(31611),r=a(25387),l=a(45697),s=a.n(l),c=a(2550),u=a(96486),f=a(29301),d=a(74982);const m=(e={},t,a="",o="",n)=>({...n,itemCount:e.count,perPage:e.limit,page:(0,d.wy)(e.limit,e.offset),onSetPage:(n,i)=>{t({...e,offset:(0,d.vE)(i,e.limit),name:a,orderBy:o})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,n)=>{t({offset:0,limit:n,name:a,orderBy:o})}}),p=(e,t=[],a=(()=>{}),o=[],n,i=(()=>!0))=>{const l=(0,r.YB)();return{count:t.length,items:[{title:l.formatMessage(c.Z.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&o&&o.length>0?{title:l.formatMessage(c.Z.selectPage,{length:o.filter(i).length}),onClick:()=>{a((0,f.ZQ)(o,!0))}}:{}}],checked:(0,f.um)(o,t,i),onSelect:t=>{!e&&a((0,f.ZQ)(o,t))},id:n}},g=(e,t=(()=>{}),a=(()=>{}),o="",n={},i="",l,s,d,m,p,g,b,h,y,I,v)=>{const O=(0,r.YB)();return{onChange:h,value:y,items:[...d&&d.length>0?d.map((({key:i,label:r,value:l,selected:s,placeholder:h,type:y="text",groups:v,items:C,innerRef:N})=>({label:r||(0,f.RI)(i),type:y??"text",filterValues:{innerRef:N,id:`filter-by-${i}`,key:`filter-by-${i}`,placeholder:h||O.formatMessage(c.Z.filterByKey,{key:i}),value:l,selected:s,..."text"!==y?{isFilterable:m,onShowMore:p,showMoreTitle:g,onFilter:b}:{},groups:v,items:C,onChange:(e,r)=>{const l="string"==typeof r||Array.isArray(r)?r:Object.keys((0,u.pickBy)(r[""],(e=>e)));t({...o,...n,offset:0,[i]:l}),(0,f.Aq)((()=>a({...n,offset:0,orderBy:I,...d.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[i]:l}))).then((e=>(N?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,f.RI)(l||i),type:"text",filterValues:{innerRef:v,id:"filter-by-string",key:"filter-by-string",placeholder:O.formatMessage(c.Z.filterByKey,{key:l||i}),value:o,onChange:(e,o)=>{t({...n,offset:0,name:o}),(0,f.Aq)((()=>a({...n,offset:0,name:o,orderBy:I}))).then((e=>(v?.current?.focus(),e)))},isDisabled:e}}],...s||[]]}},b=(e="",t,a={},o=(()=>{}),n=(()=>{}),i)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,f.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[r],l)=>{const s=(e,t,a)=>l?"group"===t||"checkbox"===t?[]:"":a!==r.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==r.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:o})=>({...e,[t]:s(a,o,t)})),{});o({...a,offset:0,name:"",...c}),n({...a,offset:0,orderBy:i,name:"",...c})}}),h=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:o,isLoading:r,data:l,titleSingular:s,filterValue:c,setFilterValue:u,pagination:f,paginationProps:d,fetchData:h,sortBy:y,toolbarButtons:I,filterPlaceholder:v,filterItems:O,filters:C,isFilterable:N,onShowMore:T,showMoreTitle:_,onFilter:E,onChange:A,value:F,hideFilterChips:P,tableId:S,textFilterRef:k})=>n().createElement(i.Z,{...e&&{bulkSelect:p(r,a,o,l,S,t)},filterConfig:g(r,u,h,c,f,s,v,O,C,N,T,_,E,A,F,y,k),actionsConfig:{actions:I()},...!r&&{pagination:m(f,h,c,y,d)},...(c.length>0||C&&C.length>0)&&!P&&{activeFiltersConfig:b(c,C,f,u,h,y)}});h.propTypes={isSelectable:s().bool,isRowSelectable:s().func,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),sortBy:s().string,filterItems:s().arrayOf(s().object),filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func.isRequired,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,textFilterRef:s().object},h.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:d.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const y=h},69493:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var o=a(28416),n=a.n(o),i=a(55573),r=a(45697),l=a.n(r),s=a(94184),c=a.n(s);const u=({className:e,row:t,...a})=>n().createElement(i.e,{className:c()(e,{"rbac-c-group-default":t.isPlatformDefault||t.isAdminDefault}),row:t,...a});u.propTypes={row:l().shape({isAdminDefault:l().bool,isPlatformDefault:l().bool}),className:l().string};const f=u},92830:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>N});var o=a(28416),n=a.n(o),i=a(45697),r=a.n(i),l=a(25387),s=a(86706),c=a(94229),u=a(31055),f=a(5904),d=a(55140),m=a(71355),p=a(55218),g=a(84414),b=a(86601),h=a(69493),y=a(97246),I=a(77044),v=a(2550),O=a(14289);const C=({username:e})=>{const t=(0,d.Z)(),a=(0,s.useDispatch)(),i=(0,l.YB)(),r=(0,g.Z)(),{groups:C,pagination:N,filters:T,isLoading:_}=(0,s.useSelector)((({groupReducer:{groups:e,isLoading:t}})=>({groups:e?.data||[],pagination:e?.meta,filters:e?.filters||"",isLoading:t})),s.shallowEqual),E=(0,o.useRef)(null),[A,F]=(0,o.useState)([]),[P,S]=(0,o.useState)(!1),[k,w]=(0,o.useState)(T.name||""),{orgAdmin:M,userAccessAdministrator:x}=(0,o.useContext)(b.Z),R=M||x,B=[{title:i.formatMessage(v.Z.name),key:"name"},{title:i.formatMessage(v.Z.description),key:"description"}],D=o=>a((0,I.bt)({...o,excludeUsername:e,chrome:t}));(0,o.useEffect)((()=>{D({...N,filters:{name:k}})}),[]);const Z=()=>A?.length>0&&S(!0)||j(),j=()=>{a((0,m.addNotification)({variant:"warning",title:i.formatMessage(v.Z.addingGroupMemberTitle),dismissDelay:8e3,description:i.formatMessage(v.Z.addingGroupMemberCancelled)})),r({pathname:O.Z["user-detail"].link.replace(":username",e)})};return n().createElement(o.Fragment,null,n().createElement(p.Z,{title:i.formatMessage(v.Z.exitItemAdding,{item:i.formatMessage(v.Z.users).toLocaleLowerCase()}),isOpen:P,onClose:()=>S(!1),confirmButtonLabel:i.formatMessage(v.Z.discard),onConfirm:j},i.formatMessage(v.Z.changesWillBeLost)),n().createElement(c.Modal,{variant:c.ModalVariant.medium,isOpen:!P,title:i.formatMessage(v.Z.addSpecificUserToGroup,{username:e}),onClose:Z,actions:[n().createElement(u.Button,{"aria-label":"Save",className:"pf-v5-u-mr-sm",ouiaId:"primary-save-button",variant:"primary",key:"save",onClick:()=>{A.forEach((t=>{a((0,I.dy)(t.uuid,[{username:e}]))})),r({state:{username:e},pathname:O.Z["user-detail"].link.replace(":username",e)})},isDisabled:0==A?.length},i.formatMessage(v.Z.addToGroup)),n().createElement(u.Button,{"aria-label":"Cancel",ouiaId:"secondary-cancel-button",variant:"link",key:"cancel",onClick:Z},i.formatMessage(v.Z.cancel))]},n().createElement(f.Alert,{variant:"info",isInline:!0,isPlain:!0,title:i.formatMessage(v.Z.onlyNonUserGroupsVisible)}),n().createElement(y.M,{isCompact:!0,data:C,rows:((e=[],t)=>e.reduce(((e,{uuid:a,name:i,description:r,platform_default:l,admin_default:s})=>[...e,{uuid:a,isAdminDefault:s,isPlatformDefault:l,cells:[n().createElement(o.Fragment,{key:a},n().createElement("span",{"aria-label":`group-name-${a}`},i)),n().createElement(o.Fragment,{key:`${a}-description`},r)],selected:Boolean(t&&t.find((e=>e.uuid===a)))}]),[]))(C,A),columns:B,isSelectable:R,checkedRows:A,setCheckedItems:e=>F(e(A).map((({uuid:e,name:t})=>({uuid:e,label:t})))),titlePlural:i.formatMessage(v.Z.groups).toLowerCase(),titleSingular:i.formatMessage(v.Z.group).toLowerCase(),pagination:N,filterValue:k,fetchData:({name:e,...t})=>D({filters:{name:e},...t}),setFilterValue:({name:e})=>w(e??""),isLoading:_,filterPlaceholder:i.formatMessage(v.Z.name).toLowerCase(),rowWrapper:h.Z,textFilterRef:E,tableId:"available-user-groups",ouiaId:"available-user-groups-table","data-testid":"group-table"})))};C.propTypes={username:r().string};const N=C},70347:()=>{},25238:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9301.de58bacbf411de3780121be77b678304.js.map