(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8764,5467,945],{35224:(e,t,i)=>{"use strict";i.d(t,{u:()=>m,D:()=>d});var n=i(65353),r=i(28416),o=i(86478),a=i(38296);const l=e=>{var{className:t,children:i,isLeftAligned:l}=e,s=(0,n.__rest)(e,["className","children","isLeftAligned"]);return r.createElement("div",Object.assign({className:(0,a.css)(o.default.tooltipContent,l&&o.default.modifiers.textAlignLeft,t)},s),i)};l.displayName="TooltipContent";const s=e=>{var{className:t}=e,i=(0,n.__rest)(e,["className"]);return r.createElement("div",Object.assign({className:(0,a.css)(o.default.tooltipArrow,t)},i))};s.displayName="TooltipArrow";var c=i(1774);const u={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var d,f=i(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(d||(d={}));let p=1;const m=e=>{var{content:t,position:i="top",trigger:d="mouseenter focus",isVisible:m=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:b="",entryDelay:y=300,exitDelay:v=300,appendTo:E=(()=>document.body),zIndex:C=9999,minWidth:F,maxWidth:S=u.value,distance:w=15,aria:B="describedby",flipBehavior:k=["top","right","bottom","left","top","right","bottom"],id:x="pf-tooltip-"+p++,children:D,animationDuration:R=300,triggerRef:M,"aria-live":I=(M?"polite":"off"),onTooltipHidden:P=(()=>{})}=e,T=(0,n.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const A=d.includes("mouseenter"),Z=d.includes("focus"),L=d.includes("click"),N="manual"===d,[O,V]=r.useState(!1),W=r.createRef();r.useEffect((()=>{m?j():q()}),[m]);const j=()=>{V(!0)},q=()=>{V(!1)},H={top:o.default.modifiers.top,bottom:o.default.modifiers.bottom,left:o.default.modifiers.left,right:o.default.modifiers.right,"top-start":o.default.modifiers.topLeft,"top-end":o.default.modifiers.topRight,"bottom-start":o.default.modifiers.bottomLeft,"bottom-end":o.default.modifiers.bottomRight,"left-start":o.default.modifiers.leftTop,"left-end":o.default.modifiers.leftBottom,"right-start":o.default.modifiers.rightTop,"right-end":o.default.modifiers.rightBottom},z=S!==u.value,_=r.createElement("div",Object.assign({"aria-live":I,className:(0,a.css)(o.default.tooltip,b),role:"tooltip",id:x,style:{maxWidth:z?S:null},ref:W},T),r.createElement(s,null),r.createElement(l,{isLeftAligned:g},t));return r.createElement(f.Popper,{trigger:"none"!==B&&O?"describedby"===B&&D&&D.props&&!D.props["aria-describedby"]?r.cloneElement(D,{"aria-describedby":x}):"labelledby"===B&&D.props&&!D.props["aria-labelledby"]?r.cloneElement(D,{"aria-labelledby":x}):D:D,triggerRef:M,popper:_,popperRef:W,minWidth:void 0!==F?F:"revert",appendTo:E,isVisible:O,positionModifiers:H,distance:w,placement:i,onMouseEnter:A&&j,onMouseLeave:A&&q,onPopperMouseEnter:A&&j,onPopperMouseLeave:A&&q,onFocus:Z&&j,onBlur:Z&&q,onDocumentClick:L&&((e,t)=>{O?q():e.target===t&&j()}),onDocumentKeyDown:N?null:e=>{N||e.key===c.yu.Escape&&O&&q()},onTriggerEnter:N?null:e=>{e.key===c.yu.Enter&&(O?q():j())},enableFlip:h,zIndex:C,flipBehavior:k,animationDuration:R,entryDelay:y,exitDelay:v,onHidden:P})};m.displayName="Tooltip"},5964:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CaretDownIcon:()=>o,CaretDownIconConfig:()=>r,default:()=>a});var n=i(40400);const r={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},o=(0,n.I)(r),a=o},62410:(e,t,i)=>{"use strict";i.d(t,{Z:()=>b});var n=i(85893),r=i(28416),o=i.n(r),a=i(31190),l=function(){return l=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},s=36e5,c=24*s,u=30*c,d=365*c,f=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},p=[{rightBound:1/0,description:function(e){return f(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return f(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return f(Math.round(e/c),"day")}},{rightBound:c,description:function(e){return f(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return f(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return p.reduce((function(t,i){return i.rightBound>Date.now()-e.getTime()?i.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},h=function(e,t,i){return{exact:function(t){return g(e)(t)},onlyDate:function(t){return g(e)(t)},relative:function(r){return function(e,t,i,r){return void 0===r&&(r=""),(0,n.jsx)(a.Tooltip,l({},i,{content:(0,n.jsxs)("div",{children:[r,e]}),children:t}))}(g("exact")(r),(0,n.jsx)("span",{children:g(e)(r)}),t,i)},invalid:function(){return"Invalid date"}}[e]};const b=function(e){var t=e.date,i=e.type,r=void 0===i?"relative":i,a=e.extraTitle,l=e.tooltipProps,s=t instanceof Date?t:new Date(t),c=null==t||"Invalid Date"===s.toString()?"invalid":r;return(0,n.jsx)(o().Fragment,{children:h(c,l,a)(s)})}},66180:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(28416),r=i.n(n),o=i(95376),a=i(58826),l=i.n(a);const s=({title:e,icon:t,description:i,actions:n,...a})=>r().createElement(o.EmptyState,{variant:o.EmptyStateVariant.sm,...a},r().createElement(o.EmptyStateHeader,{titleText:r().createElement(r().Fragment,null,e),icon:r().createElement(o.EmptyStateIcon,{icon:t||l()}),headingLevel:"h4"}),r().createElement(o.EmptyStateBody,{className:"pf-v5-u-mb-md"},i.map(((e,t)=>r().createElement(r().Fragment,{key:t},e," ",r().createElement("br",null))))),r().createElement(o.EmptyStateFooter,null,n))},97246:(e,t,i)=>{"use strict";i.d(t,{M:()=>S});var n=i(28416),r=i.n(n),o=i(25387),a=i(45697),l=i.n(a),s=i(2550),c=i(75863),u=i(21081),d=i(49004),f=i(34844),p=i(15433),m=i(31055),g=i(93297),h=i(95376),b=i(12849),y=i(47826),v=i.n(y),E=i(29301),C=i(68572),F=i(66180);const S=({isCompact:e,borders:t,columns:i,rows:a,toolbarButtons:l,data:y,actionResolver:S,areActionsDisabled:w,routes:B,titlePlural:k,titleSingular:x,pagination:D,paginationProps:R,filterValue:M,isLoading:I,emptyFilters:P,setFilterValue:T,checkedRows:A,isSelectable:Z,isRowSelectable:L,fetchData:N,setCheckedItems:O,emptyProps:V,filterPlaceholder:W,rowWrapper:j,filters:q,isFilterable:H,onShowMore:z,showMoreTitle:_,onFilter:$,onChange:K,value:Q,sortBy:U,onSort:Y,isExpandable:J,onExpand:G,hideFilterChips:X,hideHeader:ee,noData:te,noDataDescription:ie,ouiaId:ne,tableId:re,containerRef:oe,textFilterRef:ae})=>{const le=(0,o.YB)();return r().createElement(n.Fragment,null,B(),!I&&0===a?.length&&0===M?.length&&q.every((({value:e})=>!e))?r().createElement(F.Z,{title:le.formatMessage(s.Z.configureItems,{items:k}),icon:v(),description:[le.formatMessage(s.Z.toConfigureUserAccess),le.formatMessage(s.Z.createAtLeastOneItem,{item:x})],actions:l()[0],...V}):(()=>{const o=`${"desc"===U?.direction?"-":""}${i[U?.index]?.key}`;return r().createElement(n.Fragment,null,r().createElement(C.ZP,{isSelectable:Z,isRowSelectable:L,checkedRows:A,setCheckedItems:O,isLoading:I||te,data:y,titleSingular:x,filterValue:M,setFilterValue:T,sortBy:o,pagination:D,paginationProps:R,fetchData:N,toolbarButtons:l,filterPlaceholder:W,filters:q,isFilterable:H,onShowMore:z,showMoreTitle:_,onFilter:$,onChange:K,value:Q,hideFilterChips:X,tableId:re,containerRef:oe,textFilterRef:ae}),I?r().createElement(b.Wi,{isCompact:e,items:D?.limit}):r().createElement(u.i,{canSelectAll:!1,"aria-label":`${k.toLowerCase()} table`,variant:e?c.B.compact:null,borders:t,...Z&&a?.length>0&&{onSelect:(e,t,i,{uuid:n,cells:[r],requires:o})=>O((0,E.ZQ)([{uuid:n,name:r,requires:o}],t))},...J&&{onExpand:G},rows:a?.length>0?a:[{fullWidth:!0,cells:[{title:r().createElement(F.Z,{title:le.formatMessage(s.Z.noMatchingItemsFound,{items:k}),description:te&&ie?ie:[le.formatMessage(s.Z.filterMatchesNoItems,{items:k}),le.formatMessage(s.Z.tryChangingFilters)],actions:te&&ie?void 0:[r().createElement(h.EmptyStateActions,{key:"clear-filters"},r().createElement(m.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{T(P),N({...D,offset:0,...P||{name:""}})}},le.formatMessage(s.Z.clearAllFilters)))]}),props:{colSpan:i.length}}]}],cells:i,...a?.length>0&&{actionResolver:S},className:0==a?.length?"ins-c-table-empty-state":"",areActionsDisabled:w,rowWrapper:j,sortBy:U,ouiaId:ne,onSort:(e,t,i,n)=>Y(e,t,i,n)},!ee&&r().createElement(d.x,null),r().createElement(f.R,null)),!D.noBottom&&r().createElement(p.Z,null,!I&&r().createElement(g.Pagination,{...(0,C.Wz)(D,N,M,U,R),variant:"bottom",dropDirection:"up"})))})())};S.propTypes={...C.ZP.propTypes,sortBy:l().shape({directions:l().string,index:l().number}),rowWrapper:l().any,isCompact:l().bool,isRowSelectable:l().func,borders:l().bool,emptyFilters:l().object,checkedRows:l().array,columns:l().array.isRequired,rows:l().array.isRequired,titlePlural:l().string,routes:l().func,actionResolver:l().func,areActionsDisabled:l().func,pagination:l().shape({noBottom:l().bool,limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),isExpandable:l().bool,onExpand:l().func,onSort:l().func,containerRef:l().node,noData:l().bool,hideFilterChips:l().bool,hideHeader:l().bool,noDataDescription:l().arrayOf(l().node),filters:l().array,tableId:l().string.isRequired},S.defaultProps={...C.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1}},68572:(e,t,i)=>{"use strict";i.d(t,{Wz:()=>p,ZP:()=>y});var n=i(28416),r=i.n(n),o=i(31611),a=i(25387),l=i(45697),s=i.n(l),c=i(2550),u=i(96486),d=i(29301),f=i(74982);const p=(e={},t,i="",n="",r)=>({...r,itemCount:e.count,perPage:e.limit,page:(0,f.wy)(e.limit,e.offset),onSetPage:(r,o)=>{t({...e,offset:(0,f.vE)(o,e.limit),name:i,orderBy:n})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,r)=>{t({offset:0,limit:r,name:i,orderBy:n})}}),m=(e,t=[],i=(()=>{}),n=[],r,o=(()=>!0))=>{const l=(0,a.YB)();return{count:t.length,items:[{title:l.formatMessage(c.Z.selectNone),onClick:()=>{i((()=>[]))}},{...!e&&n&&n.length>0?{title:l.formatMessage(c.Z.selectPage,{length:n.filter(o).length}),onClick:()=>{i((0,d.ZQ)(n,!0))}}:{}}],checked:(0,d.um)(n,t,o),onSelect:t=>{!e&&i((0,d.ZQ)(n,t))},id:r}},g=(e,t=(()=>{}),i=(()=>{}),n="",r={},o="",l,s,f,p,m,g,h,b,y,v,E)=>{const C=(0,a.YB)();return{onChange:b,value:y,items:[...f&&f.length>0?f.map((({key:o,label:a,value:l,selected:s,placeholder:b,type:y="text",groups:E,items:F,innerRef:S})=>({label:a||(0,d.RI)(o),type:y??"text",filterValues:{innerRef:S,id:`filter-by-${o}`,key:`filter-by-${o}`,placeholder:b||C.formatMessage(c.Z.filterByKey,{key:o}),value:l,selected:s,..."text"!==y?{isFilterable:p,onShowMore:m,showMoreTitle:g,onFilter:h}:{},groups:E,items:F,onChange:(e,a)=>{const l="string"==typeof a||Array.isArray(a)?a:Object.keys((0,u.pickBy)(a[""],(e=>e)));t({...n,...r,offset:0,[o]:l}),(0,d.Aq)((()=>i({...r,offset:0,orderBy:v,...f.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[o]:l}))).then((e=>(S?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,d.RI)(l||o),type:"text",filterValues:{innerRef:E,id:"filter-by-string",key:"filter-by-string",placeholder:C.formatMessage(c.Z.filterByKey,{key:l||o}),value:n,onChange:(e,n)=>{t({...r,offset:0,name:n}),(0,d.Aq)((()=>i({...r,offset:0,name:n,orderBy:v}))).then((e=>(E?.current?.focus(),e)))},isDisabled:e}}],...s||[]]}},h=(e="",t,i={},n=(()=>{}),r=(()=>{}),o)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,d.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[a],l)=>{const s=(e,t,i)=>l?"group"===t||"checkbox"===t?[]:"":i!==a.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==a.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:i,type:n})=>({...e,[t]:s(i,n,t)})),{});n({...i,offset:0,name:"",...c}),r({...i,offset:0,orderBy:o,name:"",...c})}}),b=({isSelectable:e,isRowSelectable:t,checkedRows:i,setCheckedItems:n,isLoading:a,data:l,titleSingular:s,filterValue:c,setFilterValue:u,pagination:d,paginationProps:f,fetchData:b,sortBy:y,toolbarButtons:v,filterPlaceholder:E,filterItems:C,filters:F,isFilterable:S,onShowMore:w,showMoreTitle:B,onFilter:k,onChange:x,value:D,hideFilterChips:R,tableId:M,textFilterRef:I})=>r().createElement(o.Z,{...e&&{bulkSelect:m(a,i,n,l,M,t)},filterConfig:g(a,u,b,c,d,s,E,C,F,S,w,B,k,x,D,y,I),actionsConfig:{actions:v()},...!a&&{pagination:p(d,b,c,y,f)},...(c.length>0||F&&F.length>0)&&!R&&{activeFiltersConfig:h(c,F,d,u,b,y)}});b.propTypes={isSelectable:s().bool,isRowSelectable:s().func,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),sortBy:s().string,filterItems:s().arrayOf(s().object),filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func.isRequired,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,textFilterRef:s().object},b.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:f.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const y=b},45467:()=>{},32857:()=>{},28992:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8764.111ec75652d93c6ac51c3e68bd880c1a.js.map