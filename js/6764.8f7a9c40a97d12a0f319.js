(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6764,459],{55218:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(66029),o=a.n(n),i=a(80236),r=a(47173),l=a(93149);const s=e=>{var{isOpen:t,onConfirm:a,onClose:s,children:c,confirmButtonLabel:u="Confirm",cancelButtonLabel:d="Cancel",variant:f=i.v.small,titleIconVariant:m="warning",withCheckbox:p=!1,checkboxLabel:g="I understand that this action cannot be undone",confirmButtonVariant:b=r.Wu.primary,ouiaId:v="WarningModal"}=e,h=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[y,I]=(0,n.useState)(!1);return o().createElement(i.u,Object.assign({variant:f,isOpen:t,onClose:s,onEscapePress:s,titleIconVariant:m,actions:[o().createElement(r.zx,{ouiaId:`${v}-confirm-button`,key:"confirm",variant:b,onClick:()=>{null==a||a(),I(!1)},isDisabled:p&&!y},u),o().createElement(r.zx,{ouiaId:`${v}-cancel-button`,key:"cancel",variant:r.Wu.link,onClick:s},d)],ouiaId:v},h),c,p?o().createElement(l.X,{isChecked:y,onChange:(e,t)=>I(t),label:g,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${v}-confirm-checkbox`}):null)}},41448:(e,t,a)=>{"use strict";a.d(t,{b:()=>N,U:()=>O});var n=a(65353),o=a(66029),i=a(38296);a(81754);const r={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var l=a(68778),s=a(43047),c=a(69957),u=a(53688),d=a(34143);const f={success:l.ZP,danger:s.ZP,warning:c.ZP,info:u.ZP,custom:d.ZP},m=e=>{var{variant:t,customIcon:a,className:l=""}=e,s=(0,n.__rest)(e,["variant","customIcon","className"]);const c=f[t];return c?o.createElement("div",Object.assign({},s,{className:(0,i.css)(r.alertIcon,l)}),a||o.createElement(c,null)):null};var p=a(80164),g=a(62472),b=a(21133);const v="--pf-v5-c-alert__title--max-lines";var h=a(35224),y=a(47173),I=a(93174);const C=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:l,isExpanded:s=!1}=e,c=(0,n.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:u,variantLabel:d}=o.useContext(b.w);return o.createElement(y.zx,Object.assign({variant:y.Wu.plain,onClick:l,"aria-expanded":s,"aria-label":""===t?`Toggle ${a||d} alert: ${u}`:t},c),o.createElement("span",{className:(0,i.css)(r.alertToggleIcon)},o.createElement(I.default,{"aria-hidden":"true"})))};var O;C.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(O||(O={}));const N=e=>{var{variant:t=O.custom,isInline:a=!1,isPlain:l=!1,isLiveRegion:s=!1,variantLabel:c=`${(0,p.kC)(t)} alert:`,actionClose:u,actionLinks:d,title:f,component:y="h4",children:I="",className:E="",ouiaId:_,ouiaSafe:T=!0,timeout:x=!1,timeoutAnimation:R=3e3,onTimeout:S=(()=>{}),truncateTitle:P=0,tooltipPosition:A,customIcon:k,isExpandable:w=!1,toggleAriaLabel:F=`${(0,p.kC)(t)} alert details`,onMouseEnter:M=(()=>{}),onMouseLeave:B=(()=>{}),id:D}=e,Z=(0,n.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const L=(0,g.useOUIAProps)(N.displayName,_,T,t),j=o.createElement(o.Fragment,null,o.createElement("span",{className:"pf-v5-screen-reader"},c),f),V=o.useRef(null),G=y,$=o.useRef(),[q,W]=(0,o.useState)(!1);o.useEffect((()=>{if(!V.current||!P)return;V.current.style.setProperty(v,P.toString());const e=V.current&&V.current.offsetHeight<V.current.scrollHeight;q!==e&&W(e)}),[V,P,q]);const[z,H]=(0,o.useState)(!1),[U,Y]=(0,o.useState)(!0),[K,Q]=(0,o.useState)(),[X,J]=(0,o.useState)(),ee=z&&U&&!K&&!X;o.useEffect((()=>{const e=!0===x?8e3:Number(x);if(e>0){const t=setTimeout((()=>H(!0)),e);return()=>clearTimeout(t)}}),[x]),o.useEffect((()=>{const e=()=>{$.current&&($.current.contains(document.activeElement)?(J(!0),Y(!1)):X&&J(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[X]),o.useEffect((()=>{if(!1===X||!1===K){const e=setTimeout((()=>Y(!0)),R);return()=>clearTimeout(e)}}),[X,K,R]),o.useEffect((()=>{ee&&S()}),[ee,S]);const[te,ae]=(0,o.useState)(!1);if(ee)return null;const ne=o.createElement(G,Object.assign({},q&&{tabIndex:0},{ref:V,className:(0,i.css)(r.alertTitle,P&&r.modifiers.truncate)}),j);return o.createElement("div",Object.assign({ref:$,className:(0,i.css)(r.alert,a&&r.modifiers.inline,l&&r.modifiers.plain,w&&r.modifiers.expandable,te&&r.modifiers.expanded,r.modifiers[t],E)},L,s&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),Y(!1),M(e)},onMouseLeave:e=>{Q(!1),B(e)},id:D},Z),w&&o.createElement(b.w.Provider,{value:{title:f,variantLabel:c}},o.createElement("div",{className:(0,i.css)(r.alertToggle)},o.createElement(C,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":F}))),o.createElement(m,{variant:t,customIcon:k}),q?o.createElement(h.u,{content:j,position:A},ne):ne,u&&o.createElement(b.w.Provider,{value:{title:f,variantLabel:c}},o.createElement("div",{className:(0,i.css)(r.alertAction)},u)),I&&(!w||w&&te)&&o.createElement("div",{className:(0,i.css)(r.alertDescription)},I),d&&o.createElement("div",{className:(0,i.css)(r.alertActionGroup)},d))};N.displayName="Alert"},21133:(e,t,a)=>{"use strict";a.d(t,{w:()=>n});const n=a(66029).createContext(null)},68774:(e,t,a)=>{"use strict";a.d(t,{D:()=>l});var n=a(65353),o=a(66029),i=a(62873),r=a(38296);const l=e=>{var{children:t,className:a="",isVisited:l=!1}=e,s=(0,n.__rest)(e,["children","className","isVisited"]);return o.createElement("div",Object.assign({},s,{className:(0,r.css)(i.Z.content,l&&i.Z.modifiers.visited,a)}),t)};l.displayName="TextContent"},41435:(e,t,a)=>{"use strict";a.d(t,{Dl:()=>r,dw:()=>o,e4:()=>l,ir:()=>n});var n,o,i=a(66029);!function(e){e.right="right",e.left="left"}(n||(n={})),function(e){e.up="up",e.down="down"}(o||(o={}));const r=i.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),l=i.createContext({keyHandler:null,sendRef:null})},19993:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n}),a(70347);const n={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},62702:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n}),a(25238);const n={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},60817:function(e,t,a){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var r=a(85893),l=a(86706),s=i(a(72837)),c=a(53446),u=a(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,a=o(e,["clearNotifications"]),i=(0,l.useSelector)((function(e){return e.notifications})),u=(0,l.useDispatch)();return(0,r.jsx)(s.default,n({notifications:i,removeNotification:function(e){return u((0,c.removeNotification)(e))},onClearAll:t||function(){return u((0,c.clearNotifications)())}},a))},t.NotificationPortal=function(e){var a=e.silent,i=void 0===a||a,l=o(e,["silent"]);return(0,r.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:i,children:(0,r.jsx)(t.NotificationPortalBase,n({},l))})};var d=a(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return i(d).default}}),t.default=t.NotificationPortal},72871:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||n(t,e,a)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(r).default}}),o(a(60817),t)},71355:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var o=a(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return n(o).default}});var i=a(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return n(i).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return i.notificationsReducers}});var r=a(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return r.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return r.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return r.CLEAR_NOTIFICATIONS}});var l=a(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return l.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return l.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return l.clearNotifications}});var s=a(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return n(s).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var a="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(a,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(a,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(a,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,a){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var o=a(68129);t.addNotification=function(e){return{type:o.ADD_NOTIFICATION,payload:n({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:o.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:o.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,a){"use strict";var n=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var o=a(68129);t.defaultState=[],t.notificationsReducers=function(e,a){switch(void 0===e&&(e=t.defaultState),a.type){case o.ADD_NOTIFICATION:return i=e,r=a.payload,n(n([],i,!0),[r],!1);case o.REMOVE_NOTIFICATION:return function(e,t){var a=t.payload,o=e.findIndex((function(e){return e.id===a}));return n(n([],e.slice(0,o),!0),e.slice(o+1),!0)}(e,a);case o.CLEAR_NOTIFICATIONS:return[];default:return e}var i,r},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ErrorBoundary:()=>n.Z,default:()=>n.Z}),a(27351);var n=a(49314)},84414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(62012),o=a(64756);const i=e=>{const t=(0,n.useNavigate)();return(a,n)=>t((0,o.n)(a,e),n)}},66180:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(66029),o=a.n(n),i=a(9947),r=a(67880),l=a(43049),s=a(75106),c=a(80315),u=a(80810);const d=({title:e,icon:t,description:a,actions:n,...d})=>o().createElement(i.u,{variant:i.I.sm,...d},o().createElement(r.t,{titleText:o().createElement(o().Fragment,null,e),icon:o().createElement(l.k,{icon:t||u.SearchIcon}),headingLevel:"h4"}),o().createElement(s.B,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>o().createElement(o().Fragment,{key:t},e," ",o().createElement("br",null))))),o().createElement(c.O,null,n))},97246:(e,t,a)=>{"use strict";a.d(t,{M:()=>N});var n=a(66029),o=a.n(n),i=a(25387),r=a(45697),l=a.n(r),s=a(2550),c=a(79083),u=a(75863),d=a(21081),f=a(49004),m=a(34844),p=a(15433),g=a(12913),b=a(7065),v=a(47173),h=a(18517),y=a(7081),I=a(29301),C=a(68572),O=a(66180);const N=({className:e,isCompact:t,borders:a,columns:r,rows:l,toolbarButtons:N,data:E,actionResolver:_,areActionsDisabled:T,routes:x,titlePlural:R,titleSingular:S,pagination:P,paginationProps:A,filterValue:k,isLoading:w,emptyFilters:F,setFilterValue:M,checkedRows:B,isSelectable:D,isRowSelectable:Z,fetchData:L,setCheckedItems:j,emptyProps:V,filterPlaceholder:G,rowWrapper:$,filters:q,isFilterable:W,onShowMore:z,showMoreTitle:H,onFilter:U,onChange:Y,value:K,sortBy:Q,onSort:X,isExpandable:J,onExpand:ee,hideFilterChips:te,hideHeader:ae,noData:ne,noDataDescription:oe,ouiaId:ie,tableId:re,containerRef:le,textFilterRef:se,toolbarChildren:ce})=>{const ue=(0,i.YB)(),de=(0,c.useFlag)("platform.rbac.itless");return o().createElement("div",{className:e},x(),!w&&0===l?.length&&0===k?.length&&q.every((({value:e})=>!e))?o().createElement(O.Z,{title:ue.formatMessage(s.Z.configureItems,{items:R}),icon:y.wl,description:[ue.formatMessage(s.Z.toConfigureUserAccess),ue.formatMessage(s.Z.createAtLeastOneItem,{item:S})],actions:N()[0],...V}):(()=>{const e=`${"desc"===Q?.direction?"-":""}${r[Q?.index]?.key}`;return o().createElement(n.Fragment,null,o().createElement(C.ZP,{isSelectable:D,isRowSelectable:Z,checkedRows:B,setCheckedItems:j,isLoading:w||ne,data:E,titleSingular:S,filterValue:k,setFilterValue:M,sortBy:e,pagination:P,paginationProps:A,fetchData:L,toolbarButtons:N,filterPlaceholder:G,filters:q,isFilterable:W,onShowMore:z,showMoreTitle:H,onFilter:U,onChange:Y,value:K,hideFilterChips:te,tableId:re,containerRef:le,textFilterRef:se,toolbarChildren:ce}),w?o().createElement(g.Z,{variant:t?u.B.compact:void 0,rows:P?.limit,columns:r.map((e=>e.title))}):o().createElement(d.i,{canSelectAll:!1,"aria-label":`${R.toLowerCase()} table`,variant:t?u.B.compact:null,borders:a,...D&&l?.length>0&&{onSelect:(e,t,a,{uuid:n,cells:[o],requires:i})=>j((0,I.ZQ)([{uuid:n,name:o,requires:i,...de&&{username:E[a]?.username}}],t))},...J&&{onExpand:ee},rows:l?.length>0?l:[{fullWidth:!0,cells:[{title:o().createElement(O.Z,{title:ue.formatMessage(s.Z.noMatchingItemsFound,{items:R}),description:ne&&oe?oe:[ue.formatMessage(s.Z.filterMatchesNoItems,{items:R}),ue.formatMessage(s.Z.tryChangingFilters)],actions:ne&&oe?void 0:[o().createElement(b.U,{key:"clear-filters"},o().createElement(v.zx,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{M(F),L({...P,offset:0,...F||{name:""}})}},ue.formatMessage(s.Z.clearAllFilters)))]}),props:{colSpan:r.length}}]}],cells:r,...l?.length>0&&{actionResolver:_},className:0==l?.length?"ins-c-table-empty-state":"",areActionsDisabled:T,rowWrapper:$,sortBy:Q,ouiaId:ie,onSort:(e,t,a,n)=>X(e,t,a,n)},!ae&&o().createElement(f.x,null),o().createElement(m.R,null)),!P.noBottom&&o().createElement(p.Z,null,!w&&o().createElement(h.t,{...(0,C.Wz)(P,L,k,Q,A),variant:"bottom",dropDirection:"up"})))})())};N.propTypes={...C.ZP.propTypes,sortBy:l().shape({directions:l().string,index:l().number}),className:l().string,rowWrapper:l().any,isCompact:l().bool,isRowSelectable:l().func,borders:l().bool,emptyFilters:l().object,checkedRows:l().array,columns:l().array.isRequired,rows:l().array.isRequired,titlePlural:l().string,routes:l().func,actionResolver:l().func,areActionsDisabled:l().func,pagination:l().shape({noBottom:l().bool,limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),isExpandable:l().bool,onExpand:l().func,onSort:l().func,containerRef:l().node,noData:l().bool,hideFilterChips:l().bool,hideHeader:l().bool,noDataDescription:l().arrayOf(l().node),filters:l().array,tableId:l().string.isRequired,toolbarChildren:l().func},N.defaultProps={...C.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1,toolbarChildren:()=>null}},68572:(e,t,a)=>{"use strict";a.d(t,{Wz:()=>m,ZP:()=>h});var n=a(66029),o=a.n(n),i=a(31611),r=a(25387),l=a(45697),s=a.n(l),c=a(2550),u=a(96486),d=a(29301),f=a(74982);const m=(e={},t,a="",n="",o)=>({...o,itemCount:e.count,perPage:e.limit,page:(0,f.wy)(e.limit,e.offset),onSetPage:(o,i)=>{t({...e,offset:(0,f.vE)(i,e.limit),name:a,orderBy:n})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,o)=>{t({offset:0,limit:o,name:a,orderBy:n})}}),p=(e,t=[],a=(()=>{}),n=[],o,i=(()=>!0))=>{const l=(0,r.YB)();return{count:t.length,items:[{title:l.formatMessage(c.Z.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&n&&n.length>0?{title:l.formatMessage(c.Z.selectPage,{length:n.filter(i).length}),onClick:()=>{a((0,d.ZQ)(n,!0))}}:{}}],checked:(0,d.um)(n,t,i),onSelect:t=>{!e&&a((0,d.ZQ)(n,t))},id:o}},g=(e,t=(()=>{}),a=(()=>{}),n="",o={},i="",l,s,f,m,p,g,b,v,h,y,I)=>{const C=(0,r.YB)();return{onChange:v,value:h,items:[...f&&f.length>0?f.map((({key:i,label:r,value:l,selected:s,placeholder:v,type:h="text",groups:I,items:O,innerRef:N})=>({label:r||(0,d.RI)(i),type:h??"text",filterValues:{innerRef:N,id:`filter-by-${i}`,key:`filter-by-${i}`,placeholder:v||C.formatMessage(c.Z.filterByKey,{key:i}),value:l,selected:s,..."text"!==h?{isFilterable:m,onShowMore:p,showMoreTitle:g,onFilter:b}:{},groups:I,items:O,onChange:(e,r)=>{const l="string"==typeof r||Array.isArray(r)?r:Object.keys((0,u.pickBy)(r[""],(e=>e)));t({...n,...o,offset:0,[i]:l}),(0,d.Aq)((()=>a({...o,offset:0,orderBy:y,...f.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[i]:l}))).then((e=>(N?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,d.RI)(l||i),type:"text",filterValues:{innerRef:I,id:"filter-by-string",key:"filter-by-string",placeholder:C.formatMessage(c.Z.filterByKey,{key:l||i}),value:n,onChange:(e,n)=>{t({...o,offset:0,name:n}),(0,d.Aq)((()=>a({...o,offset:0,name:n,orderBy:y}))).then((e=>(I?.current?.focus(),e)))},isDisabled:e}}],...s||[]]}},b=(e="",t,a={},n=(()=>{}),o=(()=>{}),i)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,d.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[r],l)=>{const s=(e,t,a)=>l?"group"===t||"checkbox"===t?[]:"":a!==r.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==r.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:n})=>({...e,[t]:s(a,n,t)})),{});n({...a,offset:0,name:"",...c}),o({...a,offset:0,orderBy:i,name:"",...c})}}),v=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:n,isLoading:r,data:l,titleSingular:s,filterValue:c,setFilterValue:u,pagination:d,paginationProps:f,fetchData:v,sortBy:h,toolbarButtons:y,filterPlaceholder:I,filterItems:C,filters:O,isFilterable:N,onShowMore:E,showMoreTitle:_,onFilter:T,onChange:x,value:R,hideFilterChips:S,tableId:P,textFilterRef:A,toolbarChildren:k})=>o().createElement(i.Z,{...e&&{bulkSelect:p(r,a,n,l,P,t)},filterConfig:g(r,u,v,c,d,s,I,C,O,N,E,_,T,x,R,h,A),actionsConfig:{actions:y()},...!r&&{pagination:m(d,v,c,h,f)},...(c.length>0||O&&O.length>0)&&!S&&{activeFiltersConfig:b(c,O,d,u,v,h)}},k());v.propTypes={isSelectable:s().bool,isRowSelectable:s().func,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),sortBy:s().string,filterItems:s().arrayOf(s().object),filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func.isRequired,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,textFilterRef:s().object,toolbarChildren:s().func},v.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:f.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1,toolbarChildren:()=>null};const h=v},87285:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(66029),o=a.n(n),i=a(45697),r=a.n(i),l=a(25387),s=a(86706),c=a(7732),u=a(55140),d=a(74982),f=a(29301),m=a(97246),p=a(13563),g=a(77044),b=a(2550);const v=({selectedRoles:e,setSelectedRoles:t,rolesExcluded:a,groupId:i})=>{const r=(0,l.YB)(),v=(0,u.Z)(),h=(0,s.useDispatch)(),y=(0,n.useRef)(null),{roles:I,pagination:C,isLoading:O,groupId:N,filters:E}=(0,s.useSelector)(a?({groupReducer:{selectedGroup:{addRoles:{roles:e,pagination:t,loaded:a},uuid:n}}})=>({roles:e,pagination:t||{...d.eX,count:e?.length},isLoading:!a,groupId:i||n}):({roleReducer:{roles:e,isLoading:t}})=>({roles:e.data,pagination:e.meta,isLoading:t,filters:e.filters}),s.shallowEqual),{current:_}=(0,n.useRef)([{title:r.formatMessage(b.Z.name),key:"display_name",...a?{orderBy:"name"}:{transforms:[c.p]}},{title:r.formatMessage(b.Z.description)}]),[T,x]=(0,n.useState)(""),[R,S]=(0,n.useState)({index:1,direction:"asc"}),P=(0,n.useCallback)(((e,t)=>h(a?(0,g.nr)(e,t):(0,p.Kt)((0,f.jl)({...t,chrome:v})))),[a]),A=`${"desc"===R?.direction?"-":""}${_[R?.index].key}`,k=((e,t=[])=>e?e.reduce(((e,{uuid:a,display_name:n,name:o,description:i})=>[...e,{uuid:a,cells:[n||o,i],selected:Boolean(t&&t.find((e=>e.uuid===a)))}]),[]):[])(I,e);return(0,n.useEffect)((()=>{P(N,{...C,orderBy:A})}),[]),o().createElement(m.M,{isSelectable:!0,isCompact:!0,borders:!1,columns:_,rows:k,sortBy:R,onSort:(e,t,a,n)=>{const o=`${"desc"===a?"-":""}${_[n?t-1:t].key}`;S({index:t,direction:a}),((e,t)=>{const{name:a,count:n,limit:o,offset:i,orderBy:r}=t;P(e,(0,f.jl)({count:n,limit:o,offset:i,orderBy:r,filters:{display_name:a}}))})(N,{...C,offset:0,orderBy:o,...E?.length>0?{...E.reduce(((e,t)=>({...e,[t.key]:t.value})),{})}:{name:T}})},data:I,filterValue:T,filterPlaceholder:r.formatMessage(b.Z.roleName).toLowerCase(),fetchData:e=>P(N,{...e,filters:{display_name:e.name}}),setFilterValue:({name:e})=>x(e),isLoading:O,ouiaId:"roles-table",pagination:C,checkedRows:e,setCheckedItems:e=>{t((t=>e(t).map((({uuid:e,name:t,label:a})=>({uuid:e,label:a||t})))))},titlePlural:r.formatMessage(b.Z.roles).toLowerCase(),titleSingular:r.formatMessage(b.Z.role),tableId:"roles-list",textFilterRef:y})};v.propTypes={canSort:r().bool,setSelectedRoles:r().func.isRequired,selectedRoles:r().array,rolesExcluded:r().bool.isRequired,groupId:r().string},v.defaultProps={roles:[],pagination:d.eX,canSort:!0};const h=v},58105:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var n=a(66029),o=a.n(n),i=a(45697),r=a.n(i),l=a(25387),s=a(80236),c=a(47173),u=a(49739),d=a(83826),f=a(38779),m=a(41448),p=a(62012),g=a(86706),b=a(32819),v=a(71355),h=a(77044),y=a(84414),I=a(87285),C=a(5839),O=a(2550);const N=({afterSubmit:e,fetchUuid:t,selectedRoles:a,setSelectedRoles:i,title:r,closeUrl:N,addRolesToGroup:E,groupName:_,isDefault:T,isChanged:x,onDefaultGroupChanged:R})=>{const S=(0,l.YB)(),P=(0,g.useDispatch)();let{state:A}=(0,p.useLocation)();const{groupId:k}=(0,p.useParams)(),w=T&&t?t:k,F=(0,y.Z)(),[M,B]=(0,n.useState)(!1),{groupName:D,isRecordLoading:Z}=(0,g.useSelector)((({groupReducer:{selectedGroup:e,isRecordLoading:t}})=>({groupName:_||A?.name||e.name,isRecordLoading:t})));(0,n.useEffect)((()=>{_||P((0,h.yi)(w))}),[]);const L=()=>{i&&i([]),P((0,v.addNotification)({variant:"warning",title:S.formatMessage(O.Z.addingGroupRolesTitle),dismissDelay:8e3,description:S.formatMessage(O.Z.addingGroupRolesCancelled)})),F(N)},j=()=>{const t=a.map((e=>e.uuid));return T&&!x&&(R(!0),P((0,h.K4)())),E(w,t).then(e),i([]),F(N)};return T&&!x&&M?o().createElement(C.Z,{isOpen:M,onClose:L,onSubmit:j}):o().createElement(s.u,{className:"rbac",title:S.formatMessage(O.Z.addRolesToGroup,{name:Z?o().createElement(b.Z,{size:b.i.xs,className:"rbac-c-skeleton__add-role-to-group"}):D}),variant:s.v.medium,isOpen:!0,onClose:()=>{L(),B(!0)},actions:[o().createElement(c.zx,{"aria-label":"Save",ouiaId:"primary-save-button",variant:"primary",key:"confirm",isDisabled:0===a.length,onClick:()=>{B(!0),(!T||x)&&j()}},S.formatMessage(O.Z.addToGroup)),o().createElement(c.zx,{"aria-label":"Cancel",ouiaId:"secondary-cancel-button",variant:"link",key:"cancel",onClick:L},S.formatMessage(O.Z.cancel))]},o().createElement(u.K,{hasGutter:!0},r&&o().createElement(d.v,null,o().createElement(f.D,{headingLevel:"h4",size:"xl"},r)),o().createElement(d.v,null,o().createElement(m.b,{variant:"info",isInline:!0,isPlain:!0,title:S.formatMessage(O.Z.onlyGroupRolesVisible)})),o().createElement(d.v,null,o().createElement(I.Z,{selectedRoles:a,setSelectedRoles:i,rolesExcluded:!0,groupId:w}))))};N.propTypes={afterSubmit:r().func,selectedRoles:r().array,setSelectedRoles:r().func,addRolesToGroup:r().func,closeUrl:r().string,title:r().string,groupName:r().string,fetchUuid:r().string,isDefault:r().bool,isChanged:r().bool,onDefaultGroupChanged:r().func};const E=N},5839:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(66029),o=a.n(n),i=a(45697),r=a.n(i),l=a(68774),s=a(68340),c=a(55218),u=a(25387),d=a(2550);const f=({isOpen:e,onClose:t,onSubmit:a})=>{const n=(0,u.YB)();return o().createElement(c.Z,{withCheckbox:!0,isOpen:e,title:n.formatMessage(d.Z.warning),checkboxLabel:n.formatMessage(d.Z.confirmCheckMessage),confirmButtonLabel:n.formatMessage(d.Z.continue),onClose:t,onConfirm:a},o().createElement(l.D,null,o().createElement(s.x,null,o().createElement(u._H,{...d.Z.defaultAccessGroupEditWarning,values:{b:e=>o().createElement("b",null,e)}}))))};f.propTypes={onSubmit:r().func,onClose:r().func,isOpen:r().bool};const m=f},81754:()=>{},70347:()=>{},90479:()=>{},25238:()=>{},46928:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6764.ef56a564bf80a42909c067cd3174677c.js.map