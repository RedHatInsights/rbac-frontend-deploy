(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[111,5467,459,945],{55218:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(28416),i=o.n(a),r=o(80236),n=o(47173);const l=e=>{var{isOpen:t,onConfirm:o,onClose:a,children:l,confirmButtonLabel:s="Confirm",cancelButtonLabel:c="Cancel",variant:u=r.v.small,titleIconVariant:f="warning"}=e,d=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant"]);return i().createElement(r.u,Object.assign({variant:u,isOpen:t,onClose:a,onEscapePress:a,titleIconVariant:f,actions:[i().createElement(n.zx,{ouiaId:"primary-confirm-button",key:"confirm",variant:n.Wu.primary,onClick:o},s),i().createElement(n.zx,{ouiaId:"secondary-cancel-button",key:"cancel",variant:n.Wu.link,onClick:a},c)]},d),l)}},41435:(e,t,o)=>{"use strict";o.d(t,{Dl:()=>n,dw:()=>i,e4:()=>l,ir:()=>a});var a,i,r=o(28416);!function(e){e.right="right",e.left="left"}(a||(a={})),function(e){e.up="up",e.down="down"}(i||(i={}));const n=r.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),l=r.createContext({keyHandler:null,sendRef:null})},5964:(e,t,o)=>{"use strict";o.r(t),o.d(t,{CaretDownIcon:()=>r,CaretDownIconConfig:()=>i,default:()=>n});var a=o(40400);const i={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},r=(0,a.I)(i),n=r},19993:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>a}),o(70347);const a={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},62702:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>a}),o(25238);const a={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},86478:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>a}),o(49854);const a={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},60817:function(e,t,o){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},i=this&&this.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var n=o(85893),l=o(86706),s=r(o(72837)),c=o(53446),u=o(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,o=i(e,["clearNotifications"]),r=(0,l.useSelector)((function(e){return e.notifications})),u=(0,l.useDispatch)();return(0,n.jsx)(s.default,a({notifications:r,removeNotification:function(e){return u((0,c.removeNotification)(e))},onClearAll:t||function(){return u((0,c.clearNotifications)())}},o))},t.NotificationPortal=function(e){var o=e.silent,r=void 0===o||o,l=i(e,["silent"]);return(0,n.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:r,children:(0,n.jsx)(t.NotificationPortalBase,a({},l))})};var f=o(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return r(f).default}}),t.default=t.NotificationPortal},72871:function(e,t,o){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,o,a){void 0===a&&(a=o);var i=Object.getOwnPropertyDescriptor(t,o);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,a,i)}:function(e,t,o,a){void 0===a&&(a=o),e[a]=t[o]}),i=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||a(t,e,o)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(n).default}}),i(o(60817),t)},71355:function(e,t,o){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var i=o(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return a(i).default}});var r=o(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return a(r).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return r.notificationsReducers}});var n=o(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return n.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return n.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return n.CLEAR_NOTIFICATIONS}});var l=o(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return l.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return l.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return l.clearNotifications}});var s=o(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return a(s).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var o="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(o,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(o,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(o,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,o){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var i=o(68129);t.addNotification=function(e){return{type:i.ADD_NOTIFICATION,payload:a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:i.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:i.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,o){"use strict";var a=this&&this.__spreadArray||function(e,t,o){if(o||2===arguments.length)for(var a,i=0,r=t.length;i<r;i++)!a&&i in t||(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var i=o(68129);t.defaultState=[],t.notificationsReducers=function(e,o){switch(void 0===e&&(e=t.defaultState),o.type){case i.ADD_NOTIFICATION:return r=e,n=o.payload,a(a([],r,!0),[n],!1);case i.REMOVE_NOTIFICATION:return function(e,t){var o=t.payload,i=e.findIndex((function(e){return e.id===o}));return a(a([],e.slice(0,i),!0),e.slice(i+1),!0)}(e,o);case i.CLEAR_NOTIFICATIONS:return[];default:return e}var r,n},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ErrorBoundary:()=>a.Z,default:()=>a.Z}),o(58245);var a=o(49314)},84414:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(62012),i=o(64756);const r=e=>{const t=(0,a.useNavigate)();return(o,a)=>t((0,i.n)(o,e),a)}},66180:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var a=o(28416),i=o.n(a),r=o(95376),n=o(58826),l=o.n(n);const s=({title:e,icon:t,description:o,actions:a,...n})=>i().createElement(r.EmptyState,{variant:r.EmptyStateVariant.sm,...n},i().createElement(r.EmptyStateHeader,{titleText:i().createElement(i().Fragment,null,e),icon:i().createElement(r.EmptyStateIcon,{icon:t||l()}),headingLevel:"h4"}),i().createElement(r.EmptyStateBody,{className:"pf-v5-u-mb-md"},o.map(((e,t)=>i().createElement(i().Fragment,{key:t},e," ",i().createElement("br",null))))),i().createElement(r.EmptyStateFooter,null,a))},97246:(e,t,o)=>{"use strict";o.d(t,{M:()=>N});var a=o(28416),i=o.n(a),r=o(25387),n=o(45697),l=o.n(n),s=o(2550),c=o(75863),u=o(21081),f=o(49004),d=o(34844),m=o(15433),p=o(31055),g=o(93297),b=o(95376),h=o(12849),y=o(47826),I=o.n(y),v=o(29301),O=o(68572),C=o(66180);const N=({isCompact:e,borders:t,columns:o,rows:n,toolbarButtons:l,data:y,actionResolver:N,areActionsDisabled:_,routes:T,titlePlural:E,titleSingular:A,pagination:F,paginationProps:P,filterValue:w,isLoading:S,emptyFilters:M,setFilterValue:R,checkedRows:k,isSelectable:x,isRowSelectable:D,fetchData:B,setCheckedItems:Z,emptyProps:j,filterPlaceholder:L,rowWrapper:V,filters:W,isFilterable:q,onShowMore:H,showMoreTitle:$,onFilter:G,onChange:z,value:U,sortBy:Y,onSort:Q,isExpandable:K,onExpand:J,hideFilterChips:X,hideHeader:ee,noData:te,noDataDescription:oe,ouiaId:ae,tableId:ie,containerRef:re,textFilterRef:ne})=>{const le=(0,r.YB)();return i().createElement(a.Fragment,null,T(),!S&&0===n?.length&&0===w?.length&&W.every((({value:e})=>!e))?i().createElement(C.Z,{title:le.formatMessage(s.Z.configureItems,{items:E}),icon:I(),description:[le.formatMessage(s.Z.toConfigureUserAccess),le.formatMessage(s.Z.createAtLeastOneItem,{item:A})],actions:l()[0],...j}):(()=>{const r=`${"desc"===Y?.direction?"-":""}${o[Y?.index]?.key}`;return i().createElement(a.Fragment,null,i().createElement(O.ZP,{isSelectable:x,isRowSelectable:D,checkedRows:k,setCheckedItems:Z,isLoading:S||te,data:y,titleSingular:A,filterValue:w,setFilterValue:R,sortBy:r,pagination:F,paginationProps:P,fetchData:B,toolbarButtons:l,filterPlaceholder:L,filters:W,isFilterable:q,onShowMore:H,showMoreTitle:$,onFilter:G,onChange:z,value:U,hideFilterChips:X,tableId:ie,containerRef:re,textFilterRef:ne}),S?i().createElement(h.Wi,{isCompact:e,items:F?.limit}):i().createElement(u.i,{canSelectAll:!1,"aria-label":`${E.toLowerCase()} table`,variant:e?c.B.compact:null,borders:t,...x&&n?.length>0&&{onSelect:(e,t,o,{uuid:a,cells:[i],requires:r})=>Z((0,v.ZQ)([{uuid:a,name:i,requires:r}],t))},...K&&{onExpand:J},rows:n?.length>0?n:[{fullWidth:!0,cells:[{title:i().createElement(C.Z,{title:le.formatMessage(s.Z.noMatchingItemsFound,{items:E}),description:te&&oe?oe:[le.formatMessage(s.Z.filterMatchesNoItems,{items:E}),le.formatMessage(s.Z.tryChangingFilters)],actions:te&&oe?void 0:[i().createElement(b.EmptyStateActions,{key:"clear-filters"},i().createElement(p.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{R(M),B({...F,offset:0,...M||{name:""}})}},le.formatMessage(s.Z.clearAllFilters)))]}),props:{colSpan:o.length}}]}],cells:o,...n?.length>0&&{actionResolver:N},className:0==n?.length?"ins-c-table-empty-state":"",areActionsDisabled:_,rowWrapper:V,sortBy:Y,ouiaId:ae,onSort:(e,t,o,a)=>Q(e,t,o,a)},!ee&&i().createElement(f.x,null),i().createElement(d.R,null)),!F.noBottom&&i().createElement(m.Z,null,!S&&i().createElement(g.Pagination,{...(0,O.Wz)(F,B,w,Y,P),variant:"bottom",dropDirection:"up"})))})())};N.propTypes={...O.ZP.propTypes,sortBy:l().shape({directions:l().string,index:l().number}),rowWrapper:l().any,isCompact:l().bool,isRowSelectable:l().func,borders:l().bool,emptyFilters:l().object,checkedRows:l().array,columns:l().array.isRequired,rows:l().array.isRequired,titlePlural:l().string,routes:l().func,actionResolver:l().func,areActionsDisabled:l().func,pagination:l().shape({noBottom:l().bool,limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),isExpandable:l().bool,onExpand:l().func,onSort:l().func,containerRef:l().node,noData:l().bool,hideFilterChips:l().bool,hideHeader:l().bool,noDataDescription:l().arrayOf(l().node),filters:l().array,tableId:l().string.isRequired},N.defaultProps={...O.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1}},68572:(e,t,o)=>{"use strict";o.d(t,{Wz:()=>m,ZP:()=>y});var a=o(28416),i=o.n(a),r=o(31611),n=o(25387),l=o(45697),s=o.n(l),c=o(2550),u=o(96486),f=o(29301),d=o(74982);const m=(e={},t,o="",a="",i)=>({...i,itemCount:e.count,perPage:e.limit,page:(0,d.wy)(e.limit,e.offset),onSetPage:(i,r)=>{t({...e,offset:(0,d.vE)(r,e.limit),name:o,orderBy:a})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,i)=>{t({offset:0,limit:i,name:o,orderBy:a})}}),p=(e,t=[],o=(()=>{}),a=[],i,r=(()=>!0))=>{const l=(0,n.YB)();return{count:t.length,items:[{title:l.formatMessage(c.Z.selectNone),onClick:()=>{o((()=>[]))}},{...!e&&a&&a.length>0?{title:l.formatMessage(c.Z.selectPage,{length:a.filter(r).length}),onClick:()=>{o((0,f.ZQ)(a,!0))}}:{}}],checked:(0,f.um)(a,t,r),onSelect:t=>{!e&&o((0,f.ZQ)(a,t))},id:i}},g=(e,t=(()=>{}),o=(()=>{}),a="",i={},r="",l,s,d,m,p,g,b,h,y,I,v)=>{const O=(0,n.YB)();return{onChange:h,value:y,items:[...d&&d.length>0?d.map((({key:r,label:n,value:l,selected:s,placeholder:h,type:y="text",groups:v,items:C,innerRef:N})=>({label:n||(0,f.RI)(r),type:y??"text",filterValues:{innerRef:N,id:`filter-by-${r}`,key:`filter-by-${r}`,placeholder:h||O.formatMessage(c.Z.filterByKey,{key:r}),value:l,selected:s,..."text"!==y?{isFilterable:m,onShowMore:p,showMoreTitle:g,onFilter:b}:{},groups:v,items:C,onChange:(e,n)=>{const l="string"==typeof n||Array.isArray(n)?n:Object.keys((0,u.pickBy)(n[""],(e=>e)));t({...a,...i,offset:0,[r]:l}),(0,f.Aq)((()=>o({...i,offset:0,orderBy:I,...d.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[r]:l}))).then((e=>(N?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,f.RI)(l||r),type:"text",filterValues:{innerRef:v,id:"filter-by-string",key:"filter-by-string",placeholder:O.formatMessage(c.Z.filterByKey,{key:l||r}),value:a,onChange:(e,a)=>{t({...i,offset:0,name:a}),(0,f.Aq)((()=>o({...i,offset:0,name:a,orderBy:I}))).then((e=>(v?.current?.focus(),e)))},isDisabled:e}}],...s||[]]}},b=(e="",t,o={},a=(()=>{}),i=(()=>{}),r)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,f.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[n],l)=>{const s=(e,t,o)=>l?"group"===t||"checkbox"===t?[]:"":o!==n.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==n.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:o,type:a})=>({...e,[t]:s(o,a,t)})),{});a({...o,offset:0,name:"",...c}),i({...o,offset:0,orderBy:r,name:"",...c})}}),h=({isSelectable:e,isRowSelectable:t,checkedRows:o,setCheckedItems:a,isLoading:n,data:l,titleSingular:s,filterValue:c,setFilterValue:u,pagination:f,paginationProps:d,fetchData:h,sortBy:y,toolbarButtons:I,filterPlaceholder:v,filterItems:O,filters:C,isFilterable:N,onShowMore:_,showMoreTitle:T,onFilter:E,onChange:A,value:F,hideFilterChips:P,tableId:w,textFilterRef:S})=>i().createElement(r.Z,{...e&&{bulkSelect:p(n,o,a,l,w,t)},filterConfig:g(n,u,h,c,f,s,v,O,C,N,_,T,E,A,F,y,S),actionsConfig:{actions:I()},...!n&&{pagination:m(f,h,c,y,d)},...(c.length>0||C&&C.length>0)&&!P&&{activeFiltersConfig:b(c,C,f,u,h,y)}});h.propTypes={isSelectable:s().bool,isRowSelectable:s().func,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),sortBy:s().string,filterItems:s().arrayOf(s().object),filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func.isRequired,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,textFilterRef:s().object},h.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:d.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const y=h},69493:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var a=o(28416),i=o.n(a),r=o(55573),n=o(45697),l=o.n(n),s=o(94184),c=o.n(s);const u=({className:e,row:t,...o})=>i().createElement(r.e,{className:c()(e,{"rbac-c-group-default":t.isPlatformDefault||t.isAdminDefault}),row:t,...o});u.propTypes={row:l().shape({isAdminDefault:l().bool,isPlatformDefault:l().bool}),className:l().string};const f=u},92830:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>N});var a=o(28416),i=o.n(a),r=o(45697),n=o.n(r),l=o(25387),s=o(86706),c=o(94229),u=o(31055),f=o(5904),d=o(55140),m=o(71355),p=o(55218),g=o(84414),b=o(86601),h=o(69493),y=o(97246),I=o(77044),v=o(2550),O=o(14289);const C=({username:e})=>{const t=(0,d.Z)(),o=(0,s.useDispatch)(),r=(0,l.YB)(),n=(0,g.Z)(),{groups:C,pagination:N,filters:_,isLoading:T}=(0,s.useSelector)((({groupReducer:{groups:e,isLoading:t}})=>({groups:e?.data||[],pagination:e?.meta,filters:e?.filters||"",isLoading:t})),s.shallowEqual),E=(0,a.useRef)(null),[A,F]=(0,a.useState)([]),[P,w]=(0,a.useState)(!1),[S,M]=(0,a.useState)(_.name||""),{orgAdmin:R,userAccessAdministrator:k}=(0,a.useContext)(b.Z),x=R||k,D=[{title:r.formatMessage(v.Z.name),key:"name"},{title:r.formatMessage(v.Z.description),key:"description"}],B=a=>o((0,I.bt)({...a,excludeUsername:e,chrome:t}));(0,a.useEffect)((()=>{B({...N,filters:{name:S}})}),[]);const Z=()=>A?.length>0&&w(!0)||j(),j=()=>{o((0,m.addNotification)({variant:"warning",title:r.formatMessage(v.Z.addingGroupMemberTitle),dismissDelay:8e3,description:r.formatMessage(v.Z.addingGroupMemberCancelled)})),n({pathname:O.Z["user-detail"].link.replace(":username",e)})};return i().createElement(a.Fragment,null,i().createElement(p.Z,{title:r.formatMessage(v.Z.exitItemAdding,{item:r.formatMessage(v.Z.users).toLocaleLowerCase()}),isOpen:P,onClose:()=>w(!1),onConfirm:j},r.formatMessage(v.Z.changesWillBeLost)),i().createElement(c.Modal,{variant:c.ModalVariant.medium,isOpen:!P,title:r.formatMessage(v.Z.addSpecificUserToGroup,{username:e}),onClose:Z,actions:[i().createElement(u.Button,{"aria-label":"Save",className:"pf-v5-u-mr-sm",ouiaId:"primary-save-button",variant:"primary",key:"save",onClick:()=>{A.forEach((t=>{o((0,I.dy)(t.uuid,[{username:e}]))})),n({state:{username:e},pathname:O.Z["user-detail"].link.replace(":username",e)})},isDisabled:0==A?.length},r.formatMessage(v.Z.addToGroup)),i().createElement(u.Button,{"aria-label":"Cancel",ouiaId:"secondary-cancel-button",variant:"link",key:"cancel",onClick:Z},r.formatMessage(v.Z.cancel))]},i().createElement(f.Alert,{variant:"info",isInline:!0,isPlain:!0,title:r.formatMessage(v.Z.onlyNonUserGroupsVisible)}),i().createElement(y.M,{isCompact:!0,data:C,rows:((e=[],t)=>e.reduce(((e,{uuid:o,name:r,description:n,platform_default:l,admin_default:s})=>[...e,{uuid:o,isAdminDefault:s,isPlatformDefault:l,cells:[i().createElement(a.Fragment,{key:o},i().createElement("span",{"aria-label":`group-name-${o}`},r)),i().createElement(a.Fragment,{key:`${o}-description`},n)],selected:Boolean(t&&t.find((e=>e.uuid===o)))}]),[]))(C,A),columns:D,isSelectable:x,checkedRows:A,setCheckedItems:e=>F(e(A).map((({uuid:e,name:t})=>({uuid:e,label:t})))),titlePlural:r.formatMessage(v.Z.groups).toLowerCase(),titleSingular:r.formatMessage(v.Z.group).toLowerCase(),pagination:N,filterValue:S,fetchData:({name:e,...t})=>B({filters:{name:e},...t}),setFilterValue:({name:e})=>M(e??""),isLoading:T,filterPlaceholder:r.formatMessage(v.Z.name).toLowerCase(),rowWrapper:h.Z,textFilterRef:E,tableId:"available-user-groups",ouiaId:"available-user-groups-table","data-testid":"group-table"})))};C.propTypes={username:n().string};const N=C},45467:()=>{},70347:()=>{},32857:()=>{},28992:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},25238:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/111.d8fe2407a606c9f1e65bd8f733a7b3fb.js.map