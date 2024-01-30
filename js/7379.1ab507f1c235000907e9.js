(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[7379,5467,459,945],{35224:(e,t,a)=>{"use strict";a.d(t,{u:()=>p,D:()=>f});var r=a(65353),i=a(28416),o=a(86478),n=a(38296);const s=e=>{var{className:t,children:a,isLeftAligned:s}=e,l=(0,r.__rest)(e,["className","children","isLeftAligned"]);return i.createElement("div",Object.assign({className:(0,n.css)(o.default.tooltipContent,s&&o.default.modifiers.textAlignLeft,t)},l),a)};s.displayName="TooltipContent";const l=e=>{var{className:t}=e,a=(0,r.__rest)(e,["className"]);return i.createElement("div",Object.assign({className:(0,n.css)(o.default.tooltipArrow,t)},a))};l.displayName="TooltipArrow";var c=a(1774);const u={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var f,d=a(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(f||(f={}));let m=1;const p=e=>{var{content:t,position:a="top",trigger:f="mouseenter focus",isVisible:p=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:b="",entryDelay:y=300,exitDelay:v=300,appendTo:I=(()=>document.body),zIndex:O=9999,minWidth:N,maxWidth:C=u.value,distance:E=15,aria:T="describedby",flipBehavior:M=["top","right","bottom","left","top","right","bottom"],id:A="pf-tooltip-"+m++,children:k,animationDuration:R=300,triggerRef:S,"aria-live":_=(S?"polite":"off"),onTooltipHidden:F=(()=>{})}=e,P=(0,r.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const w=f.includes("mouseenter"),Z=f.includes("focus"),D=f.includes("click"),x="manual"===f,[L,B]=i.useState(!1),j=i.createRef();i.useEffect((()=>{p?V():U()}),[p]);const V=()=>{B(!0)},U=()=>{B(!1)},W={top:o.default.modifiers.top,bottom:o.default.modifiers.bottom,left:o.default.modifiers.left,right:o.default.modifiers.right,"top-start":o.default.modifiers.topLeft,"top-end":o.default.modifiers.topRight,"bottom-start":o.default.modifiers.bottomLeft,"bottom-end":o.default.modifiers.bottomRight,"left-start":o.default.modifiers.leftTop,"left-end":o.default.modifiers.leftBottom,"right-start":o.default.modifiers.rightTop,"right-end":o.default.modifiers.rightBottom},G=C!==u.value,H=i.createElement("div",Object.assign({"aria-live":_,className:(0,n.css)(o.default.tooltip,b),role:"tooltip",id:A,style:{maxWidth:G?C:null},ref:j},P),i.createElement(l,null),i.createElement(s,{isLeftAligned:g},t));return i.createElement(d.Popper,{trigger:"none"!==T&&L?"describedby"===T&&k&&k.props&&!k.props["aria-describedby"]?i.cloneElement(k,{"aria-describedby":A}):"labelledby"===T&&k.props&&!k.props["aria-labelledby"]?i.cloneElement(k,{"aria-labelledby":A}):k:k,triggerRef:S,popper:H,popperRef:j,minWidth:void 0!==N?N:"revert",appendTo:I,isVisible:L,positionModifiers:W,distance:E,placement:a,onMouseEnter:w&&V,onMouseLeave:w&&U,onPopperMouseEnter:w&&V,onPopperMouseLeave:w&&U,onFocus:Z&&V,onBlur:Z&&U,onDocumentClick:D&&((e,t)=>{L?U():e.target===t&&V()}),onDocumentKeyDown:x?null:e=>{x||e.key===c.yu.Escape&&L&&U()},onTriggerEnter:x?null:e=>{e.key===c.yu.Enter&&(L?U():V())},enableFlip:h,zIndex:O,flipBehavior:M,animationDuration:R,entryDelay:y,exitDelay:v,onHidden:F})};p.displayName="Tooltip"},41435:(e,t,a)=>{"use strict";a.d(t,{Dl:()=>n,dw:()=>i,e4:()=>s,ir:()=>r});var r,i,o=a(28416);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(i||(i={}));const n=o.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),s=o.createContext({keyHandler:null,sendRef:null})},5964:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CaretDownIcon:()=>o,CaretDownIconConfig:()=>i,default:()=>n});var r=a(40400);const i={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},o=(0,r.I)(i),n=o},86478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(49854);const r={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},46818:(e,t,a)=>{"use strict";a.d(t,{P8:()=>i});var r=a(78632);const i=()=>({className:r.Z.modifiers.nowrap})},60817:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var n=a(85893),s=a(86706),l=o(a(72837)),c=a(53446),u=a(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,a=i(e,["clearNotifications"]),o=(0,s.useSelector)((function(e){return e.notifications})),u=(0,s.useDispatch)();return(0,n.jsx)(l.default,r({notifications:o,removeNotification:function(e){return u((0,c.removeNotification)(e))},onClearAll:t||function(){return u((0,c.clearNotifications)())}},a))},t.NotificationPortal=function(e){var a=e.silent,o=void 0===a||a,s=i(e,["silent"]);return(0,n.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:o,children:(0,n.jsx)(t.NotificationPortalBase,r({},s))})};var f=a(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return o(f).default}}),t.default=t.NotificationPortal},72871:function(e,t,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,i)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),i=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||r(t,e,a)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}}),i(a(60817),t)},71355:function(e,t,a){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var i=a(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return r(i).default}});var o=a(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return r(o).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return o.notificationsReducers}});var n=a(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return n.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return n.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return n.CLEAR_NOTIFICATIONS}});var s=a(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return s.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return s.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return s.clearNotifications}});var l=a(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return r(l).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var a="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(a,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(a,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(a,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var i=a(68129);t.addNotification=function(e){return{type:i.ADD_NOTIFICATION,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:i.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:i.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,a){"use strict";var r=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var i=a(68129);t.defaultState=[],t.notificationsReducers=function(e,a){switch(void 0===e&&(e=t.defaultState),a.type){case i.ADD_NOTIFICATION:return o=e,n=a.payload,r(r([],o,!0),[n],!1);case i.REMOVE_NOTIFICATION:return function(e,t){var a=t.payload,i=e.findIndex((function(e){return e.id===a}));return r(r([],e.slice(0,i),!0),e.slice(i+1),!0)}(e,a);case i.CLEAR_NOTIFICATIONS:return[];default:return e}var o,n},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ErrorBoundary:()=>r.Z,default:()=>r.Z}),a(58245);var r=a(49314)},23340:(e,t,a)=>{"use strict";a.d(t,{MS:()=>o,aX:()=>r,qF:()=>i});const r=(e,t,a,r={})=>{const i=new URLSearchParams(e.search);let o=a.reduce(((e,t)=>{const a=i.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(r).forEach((e=>{const t=r[e];o={...o,[e]:Array.isArray(o[e])?[...new Set([...o[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||o[e]},Array.isArray(t)?t.forEach((t=>i.getAll(e).includes(t)||i.append(e,t))):i.get(e)||t&&i.set(e,t)})),t({pathname:e.pathname,search:i.toString()},{replace:!0}),o},i=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},o=(e,t,a)=>{const r=new URLSearchParams(e.search);Object.keys(a).forEach((e=>r.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&r.append(e,t))):t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0})}},84414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(62012),i=a(64756);const o=e=>{const t=(0,r.useNavigate)();return(a,r)=>t((0,i.n)(a,e),r)}},12:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var r=a(28416),i=a.n(r),o=a(25387),n=a(45697),s=a.n(n),l=a(64380),c=a(44282),u=a.n(c),f=a(86601),d=a(2550),m=a(55140);const p=({linkDescription:e,linkTitle:t})=>{const a=(0,o.YB)(),n=(0,m.Z)(),s=n.getEnvironment(),c=n.isProd()?"":`${s}.`,{orgAdmin:p}=(0,r.useContext)(f.Z);return p?i().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(d.Z.usersDescription)} `,e,i().createElement(l.Text,{component:l.TextVariants.a,href:`https://www.${c}redhat.com/wapps/ugc/protected/usermgt/userList.html`,target:"_blank",rel:"noopener noreferrer"},t,i().createElement(u(),null)),"."):i().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(d.Z.usersDescription)} `)};p.propTypes={linkDescription:s().node,linkTitle:s().node},p.defaultProps={linkDescription:"",linkTitle:" user management list "};const g=p},24869:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var r=a(28416),i=a.n(r),o=a(55573),n=a(45697),s=a.n(n),l=a(94184),c=a.n(l);const u=({row:e,...t})=>{const{status:a}=e,r=a?.props?.["data-is-active"];return i().createElement(o.e,{className:c()("rbac__user-row",{"ins-m-inactive":!r}),row:e,...t})};u.propTypes={row:s().shape({status:s().shape({props:s().shape({"data-is-active":s().bool,data:s().shape({isActive:s().bool})})})})};const f=u},66180:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(28416),i=a.n(r),o=a(95376),n=a(58826),s=a.n(n);const l=({title:e,icon:t,description:a,actions:r,...n})=>i().createElement(o.EmptyState,{variant:o.EmptyStateVariant.sm,...n},i().createElement(o.EmptyStateHeader,{titleText:i().createElement(i().Fragment,null,e),icon:i().createElement(o.EmptyStateIcon,{icon:t||s()}),headingLevel:"h4"}),i().createElement(o.EmptyStateBody,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>i().createElement(i().Fragment,{key:t},e," ",i().createElement("br",null))))),i().createElement(o.EmptyStateFooter,null,r))},97246:(e,t,a)=>{"use strict";a.d(t,{M:()=>C});var r=a(28416),i=a.n(r),o=a(25387),n=a(45697),s=a.n(n),l=a(2550),c=a(75863),u=a(21081),f=a(49004),d=a(34844),m=a(15433),p=a(31055),g=a(93297),h=a(95376),b=a(12849),y=a(47826),v=a.n(y),I=a(29301),O=a(68572),N=a(66180);const C=({isCompact:e,borders:t,columns:a,rows:n,toolbarButtons:s,data:y,actionResolver:C,areActionsDisabled:E,routes:T,titlePlural:M,titleSingular:A,pagination:k,paginationProps:R,filterValue:S,isLoading:_,emptyFilters:F,setFilterValue:P,checkedRows:w,isSelectable:Z,isRowSelectable:D,fetchData:x,setCheckedItems:L,emptyProps:B,filterPlaceholder:j,rowWrapper:V,filters:U,isFilterable:W,onShowMore:G,showMoreTitle:H,onFilter:q,onChange:$,value:z,sortBy:Y,onSort:K,isExpandable:Q,onExpand:X,hideFilterChips:J,hideHeader:ee,noData:te,noDataDescription:ae,ouiaId:re,tableId:ie,containerRef:oe,textFilterRef:ne})=>{const se=(0,o.YB)();return i().createElement(r.Fragment,null,T(),!_&&0===n?.length&&0===S?.length&&U.every((({value:e})=>!e))?i().createElement(N.Z,{title:se.formatMessage(l.Z.configureItems,{items:M}),icon:v(),description:[se.formatMessage(l.Z.toConfigureUserAccess),se.formatMessage(l.Z.createAtLeastOneItem,{item:A})],actions:s()[0],...B}):(()=>{const o=`${"desc"===Y?.direction?"-":""}${a[Y?.index]?.key}`;return i().createElement(r.Fragment,null,i().createElement(O.ZP,{isSelectable:Z,isRowSelectable:D,checkedRows:w,setCheckedItems:L,isLoading:_||te,data:y,titleSingular:A,filterValue:S,setFilterValue:P,sortBy:o,pagination:k,paginationProps:R,fetchData:x,toolbarButtons:s,filterPlaceholder:j,filters:U,isFilterable:W,onShowMore:G,showMoreTitle:H,onFilter:q,onChange:$,value:z,hideFilterChips:J,tableId:ie,containerRef:oe,textFilterRef:ne}),_?i().createElement(b.Wi,{isCompact:e,items:k?.limit}):i().createElement(u.i,{canSelectAll:!1,"aria-label":`${M.toLowerCase()} table`,variant:e?c.B.compact:null,borders:t,...Z&&n?.length>0&&{onSelect:(e,t,a,{uuid:r,cells:[i],requires:o})=>L((0,I.ZQ)([{uuid:r,name:i,requires:o}],t))},...Q&&{onExpand:X},rows:n?.length>0?n:[{fullWidth:!0,cells:[{title:i().createElement(N.Z,{title:se.formatMessage(l.Z.noMatchingItemsFound,{items:M}),description:te&&ae?ae:[se.formatMessage(l.Z.filterMatchesNoItems,{items:M}),se.formatMessage(l.Z.tryChangingFilters)],actions:te&&ae?void 0:[i().createElement(h.EmptyStateActions,{key:"clear-filters"},i().createElement(p.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{P(F),x({...k,offset:0,...F||{name:""}})}},se.formatMessage(l.Z.clearAllFilters)))]}),props:{colSpan:a.length}}]}],cells:a,...n?.length>0&&{actionResolver:C},className:0==n?.length?"ins-c-table-empty-state":"",areActionsDisabled:E,rowWrapper:V,sortBy:Y,ouiaId:re,onSort:(e,t,a,r)=>K(e,t,a,r)},!ee&&i().createElement(f.x,null),i().createElement(d.R,null)),!k.noBottom&&i().createElement(m.Z,null,!_&&i().createElement(g.Pagination,{...(0,O.Wz)(k,x,S,Y,R),variant:"bottom",dropDirection:"up"})))})())};C.propTypes={...O.ZP.propTypes,sortBy:s().shape({directions:s().string,index:s().number}),rowWrapper:s().any,isCompact:s().bool,isRowSelectable:s().func,borders:s().bool,emptyFilters:s().object,checkedRows:s().array,columns:s().array.isRequired,rows:s().array.isRequired,titlePlural:s().string,routes:s().func,actionResolver:s().func,areActionsDisabled:s().func,pagination:s().shape({noBottom:s().bool,limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),isExpandable:s().bool,onExpand:s().func,onSort:s().func,containerRef:s().node,noData:s().bool,hideFilterChips:s().bool,hideHeader:s().bool,noDataDescription:s().arrayOf(s().node),filters:s().array,tableId:s().string.isRequired},C.defaultProps={...O.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1}},68572:(e,t,a)=>{"use strict";a.d(t,{Wz:()=>m,ZP:()=>y});var r=a(28416),i=a.n(r),o=a(31611),n=a(25387),s=a(45697),l=a.n(s),c=a(2550),u=a(96486),f=a(29301),d=a(74982);const m=(e={},t,a="",r="",i)=>({...i,itemCount:e.count,perPage:e.limit,page:(0,d.wy)(e.limit,e.offset),onSetPage:(i,o)=>{t({...e,offset:(0,d.vE)(o,e.limit),name:a,orderBy:r})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,i)=>{t({offset:0,limit:i,name:a,orderBy:r})}}),p=(e,t=[],a=(()=>{}),r=[],i,o=(()=>!0))=>{const s=(0,n.YB)();return{count:t.length,items:[{title:s.formatMessage(c.Z.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&r&&r.length>0?{title:s.formatMessage(c.Z.selectPage,{length:r.filter(o).length}),onClick:()=>{a((0,f.ZQ)(r,!0))}}:{}}],checked:(0,f.um)(r,t,o),onSelect:t=>{!e&&a((0,f.ZQ)(r,t))},id:i}},g=(e,t=(()=>{}),a=(()=>{}),r="",i={},o="",s,l,d,m,p,g,h,b,y,v,I)=>{const O=(0,n.YB)();return{onChange:b,value:y,items:[...d&&d.length>0?d.map((({key:o,label:n,value:s,selected:l,placeholder:b,type:y="text",groups:I,items:N,innerRef:C})=>({label:n||(0,f.RI)(o),type:y??"text",filterValues:{innerRef:C,id:`filter-by-${o}`,key:`filter-by-${o}`,placeholder:b||O.formatMessage(c.Z.filterByKey,{key:o}),value:s,selected:l,..."text"!==y?{isFilterable:m,onShowMore:p,showMoreTitle:g,onFilter:h}:{},groups:I,items:N,onChange:(e,n)=>{const s="string"==typeof n||Array.isArray(n)?n:Object.keys((0,u.pickBy)(n[""],(e=>e)));t({...r,...i,offset:0,[o]:s}),(0,f.Aq)((()=>a({...i,offset:0,orderBy:v,...d.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[o]:s}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,f.RI)(s||o),type:"text",filterValues:{innerRef:I,id:"filter-by-string",key:"filter-by-string",placeholder:O.formatMessage(c.Z.filterByKey,{key:s||o}),value:r,onChange:(e,r)=>{t({...i,offset:0,name:r}),(0,f.Aq)((()=>a({...i,offset:0,name:r,orderBy:v}))).then((e=>(I?.current?.focus(),e)))},isDisabled:e}}],...l||[]]}},h=(e="",t,a={},r=(()=>{}),i=(()=>{}),o)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,f.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[n],s)=>{const l=(e,t,a)=>s?"group"===t||"checkbox"===t?[]:"":a!==n.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==n.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:r})=>({...e,[t]:l(a,r,t)})),{});r({...a,offset:0,name:"",...c}),i({...a,offset:0,orderBy:o,name:"",...c})}}),b=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:r,isLoading:n,data:s,titleSingular:l,filterValue:c,setFilterValue:u,pagination:f,paginationProps:d,fetchData:b,sortBy:y,toolbarButtons:v,filterPlaceholder:I,filterItems:O,filters:N,isFilterable:C,onShowMore:E,showMoreTitle:T,onFilter:M,onChange:A,value:k,hideFilterChips:R,tableId:S,textFilterRef:_})=>i().createElement(o.Z,{...e&&{bulkSelect:p(n,a,r,s,S,t)},filterConfig:g(n,u,b,c,f,l,I,O,N,C,E,T,M,A,k,y,_),actionsConfig:{actions:v()},...!n&&{pagination:m(f,b,c,y,d)},...(c.length>0||N&&N.length>0)&&!R&&{activeFiltersConfig:h(c,N,f,u,b,y)}});b.propTypes={isSelectable:l().bool,isRowSelectable:l().func,checkedRows:l().array,setCheckedItems:l().func,isLoading:l().bool,data:l().array,titleSingular:l().string,filterValue:l().oneOfType([l().array,l().string]),setFilterValue:l().func,filters:l().arrayOf(l().shape({value:l().oneOfType([l().string,l().number,l().array]),key:l().string,placeholder:l().string})),isFilterable:l().bool,onShowMore:l().func,showMoreTitle:l().string,onFilter:l().func,onChange:l().func,value:l().any,pagination:l().shape({limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),sortBy:l().string,filterItems:l().arrayOf(l().object),filterPlaceholder:l().string,isCollapsible:l().bool,fetchData:l().func.isRequired,toolbarButtons:l().func,hideFilterChips:l().bool,tableId:l().string,textFilterRef:l().object},b.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:d.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const y=b},10113:(e,t,a)=>{"use strict";a.d(t,{Z:()=>N});var r=a(28416),i=a.n(r),o=a(86706),n=a(45697),s=a.n(n),l=a(62012),c=a(25387),u=a(46818),f=a(7732),d=a(29301),m=a(2981),p=a(97246),g=a(24869),h=a(86601),b=a(74982),y=a(23340),v=a(2550),I=a(39820);const O=({selectedUsers:e,setSelectedUsers:t,userLinks:a,usesMetaInURL:n,displayNarrow:s,props:O})=>{const N=(0,c.YB)(),C=(0,l.useNavigate)(),E=(0,l.useLocation)(),T=(0,o.useDispatch)(),{orgAdmin:M}=(0,r.useContext)(h.Z),A=(0,r.useRef)(null);let k=(0,o.useSelector)((({userReducer:{users:e}})=>({limit:(n?e.pagination.limit:e.meta.limit)??(M?b.HE:b.he).limit,offset:(n?e.pagination.offset:e.meta.offset)??(M?b.HE:b.he).offset,count:n?e.pagination.count:e.meta.count,redirected:n&&e.pagination.redirected})));const{users:R,isLoading:S,stateFilters:_}=(0,o.useSelector)((({userReducer:{users:{data:e,filters:t={}},isUserDataLoading:a}})=>({users:e?.map?.((e=>({...e,uuid:e.username}))),isLoading:a,stateFilters:E.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}}))),F=(0,r.useCallback)((e=>T((0,m.u)(e))),[T]),P=(0,r.useCallback)((e=>T((0,m.a)(e))),[T]),w=[{title:N.formatMessage(s?v.Z.orgAdmin:v.Z.orgAdministrator),key:"org-admin",transforms:[u.P8]},{title:N.formatMessage(v.Z.username),key:"username",transforms:[f.p]},{title:N.formatMessage(v.Z.email)},{title:N.formatMessage(v.Z.firstName),transforms:[u.P8]},{title:N.formatMessage(v.Z.lastName),transforms:[u.P8]},{title:N.formatMessage(v.Z.status),transforms:[u.P8]}],[Z,D]=(0,r.useState)({index:1,direction:"asc"}),[x,L]=(0,r.useState)(n?_:{username:"",email:"",status:[N.formatMessage(v.Z.active)]});return(0,r.useEffect)((()=>{n&&(0,b.oG)(E,C,k.limit,k.offset)}),[k.offset,k.limit,k.count,k.redirected]),(0,r.useEffect)((()=>{const{limit:e,offset:t}=(0,b.rj)(E,C,k),a=n?(0,y.aX)(E,C,["username","email","status"],x):{status:x.status};L(a),F({...(0,d.jl)({limit:e,offset:t,filters:a}),usesMetaInURL:n})}),[]),(0,r.useEffect)((()=>{n&&((0,b.Zc)(E)||(0,b.oG)(E,C,k.limit,k.offset),Object.values(x).some((e=>e?.length>0))&&!(0,y.qF)(E,Object.keys(x))&&(0,y.aX)(E,C,Object.keys(x),x))})),i().createElement(p.M,{isCompact:!0,isSelectable:!0,borders:!1,columns:w,rows:(0,I.H)(a,R,N,e,!0),sortBy:Z,onSort:(e,t,a)=>{const r=`${"desc"===a?"-":""}${w[t].key}`;D({index:t,direction:a}),F({...k,filters:x,usesMetaInURL:n,orderBy:r})},data:R,ouiaId:"users-table",fetchData:e=>{const t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:x.status,{username:a,email:r,count:i,limit:o,offset:s,orderBy:l}=e;F({...(0,d.jl)({count:i,limit:o,offset:s,orderBy:l,filters:{username:a,email:r,status:t}}),usesMetaInURL:n}).then((()=>{A?.current?.focus()})),n&&(0,y.MS)(E,C,{username:a,email:r,status:t})},emptyFilters:{username:"",email:"",status:""},setFilterValue:({username:e,email:t,status:a})=>{var r;r={username:void 0===e?x.username:e,email:void 0===t?x.email:t,status:void 0===a||a===x.status?x.status:a},n&&P(r),L({username:"",...r})},isLoading:S,pagination:k,checkedRows:e,setCheckedItems:e=>{t((t=>e(t).map((({uuid:e,username:t})=>({uuid:e,label:t||e})))))},rowWrapper:g.Z,titlePlural:N.formatMessage(v.Z.users).toLowerCase(),titleSingular:N.formatMessage(v.Z.user),filters:[{key:"username",value:x.username,placeholder:N.formatMessage(v.Z.filterByKey,{key:N.formatMessage(v.Z.username).toLowerCase()}),innerRef:A},{key:"email",value:x.email,placeholder:N.formatMessage(v.Z.filterByKey,{key:N.formatMessage(v.Z.email).toLowerCase()}),innerRef:A},{key:"status",value:x.status,label:N.formatMessage(v.Z.status),type:"checkbox",items:[{label:N.formatMessage(v.Z.active),value:"Active"},{label:N.formatMessage(v.Z.inactive),value:"Inactive"}]}],tableId:"users-list",...O})};O.propTypes={displayNarrow:s().bool,users:s().array,searchFilter:s().string,setSelectedUsers:s().func.isRequired,selectedUsers:s().array,userLinks:s().bool,props:s().object,usesMetaInURL:s().bool},O.defaultProps={displayNarrow:!1,users:[],selectedUsers:[],setSelectedUsers:()=>{},userLinks:!1,usesMetaInURL:!1};const N=O},84620:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var r=a(28416),i=a.n(r),o=a(86706),n=a(62012),s=a(25387),l=a(45697),c=a.n(l),u=a(31055),f=a(94229),d=a(23539),m=a(64380),p=a(71355),g=a(55140),h=a(77044),b=a(10113),y=a(12),v=a(84414),I=a(2550),O=a(14289);const N=({cancelRoute:e})=>{const t=(0,g.Z)(),a=(0,s.YB)(),l=(0,v.Z)(),{groupId:c}=(0,n.useParams)(),O=(0,o.useDispatch)(),[N,C]=(0,r.useState)([]),E=()=>{O((0,p.addNotification)({variant:"warning",title:a.formatMessage(N.length>1?I.Z.addingGroupMembersTitle:I.Z.addingGroupMemberTitle),dismissDelay:8e3,description:a.formatMessage(N.length>1?I.Z.addingGroupMembersCancelled:I.Z.addingGroupMemberCancelled)})),l(e)};return i().createElement(f.Modal,{title:a.formatMessage(I.Z.addMembers),variant:f.ModalVariant.medium,isOpen:!0,actions:[i().createElement(u.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:0===N.length,variant:"primary",onClick:()=>{const r=N.map((e=>({username:e.label})));r.length>0&&(O((0,p.addNotification)({variant:"info",title:a.formatMessage(r.length>1?I.Z.addingGroupMembersTitle:I.Z.addingGroupMemberTitle),dismissDelay:8e3,description:a.formatMessage(r.length>1?I.Z.addingGroupMembersDescription:I.Z.addingGroupMemberDescription)})),O((0,h.dy)(c,r)).then((()=>{O((0,h.nd)(c)),O((0,h.bt)({usesMetaInURL:!0,chrome:t}))}))),l(e)}},a.formatMessage(I.Z.addToGroup)),i().createElement(u.Button,{id:"add-groups-cancel",ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:E},a.formatMessage(I.Z.cancel))],onClose:E},i().createElement(d.Stack,{hasGutter:!0},i().createElement(d.StackItem,null,i().createElement(m.TextContent,null,i().createElement(y.Z,{linkDescription:a.formatMessage(I.Z.toManageUsersText)}))),i().createElement(d.StackItem,null,i().createElement(b.Z,{selectedUsers:N,setSelectedUsers:C,displayNarrow:!0}))))};N.defaultProps={cancelRoute:O.Z.groups.link},N.propTypes={cancelRoute:c().string};const C=N},39820:(e,t,a)=>{"use strict";a.d(t,{H:()=>m});var r=a(28416),i=a.n(r),o=a(78173),n=a(91693),s=a.n(n),l=a(77029),c=a.n(l),u=a(2550),f=a(14289),d=a(64756);const m=(e,t=[],a,n=[],l=!1)=>t?.reduce(((t,{username:m,is_active:p,email:g,first_name:h,last_name:b,is_org_admin:y})=>[...t,{uuid:m,cells:[y?i().createElement(r.Fragment,null,i().createElement(s(),{key:"yes-icon",className:"pf-v5-u-mr-sm"}),i().createElement("span",{key:"yes"},a.formatMessage(u.Z.yes))):i().createElement(r.Fragment,null,i().createElement(c(),{key:"no-icon",className:"pf-v5-u-mr-sm"}),i().createElement("span",{key:"no"},a.formatMessage(u.Z.no))),{title:e?i().createElement(d.Z,{to:f.Z["user-detail"].link.replace(":username",m)},m.toString()):m.toString()},g,h,b,{title:i().createElement(o.Label,{key:"status",color:p?"green":"grey"},a.formatMessage(p?u.Z.active:u.Z.inactive)),props:{"data-is-active":p}}],selected:!!l&&Boolean(n?.find?.((({uuid:e})=>e===m)))}]),[])},45467:()=>{},32857:()=>{},28992:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7379.a3c38cbe3a117d677cba3bf2d31ccad5.js.map