(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[880,5467,945],{5964:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CaretDownIcon:()=>a,CaretDownIconConfig:()=>i,default:()=>o});var r=n(40400);const i={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},a=(0,r.I)(i),o=a},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(85893),i=n(28416),a=n.n(i),o=n(31190),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l.apply(this,arguments)},s=36e5,c=24*s,u=30*c,f=365*c,d=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},p=[{rightBound:1/0,description:function(e){return d(Math.round(e/f),"year")}},{rightBound:f,description:function(e){return d(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return d(Math.round(e/c),"day")}},{rightBound:c,description:function(e){return d(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return d(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},h=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return p.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},g=function(e,t,n){return{exact:function(t){return h(e)(t)},onlyDate:function(t){return h(e)(t)},relative:function(i){return function(e,t,n,i){return void 0===i&&(i=""),(0,r.jsx)(o.Tooltip,l({},n,{content:(0,r.jsxs)("div",{children:[i,e]}),children:t}))}(h("exact")(i),(0,r.jsx)("span",{children:h(e)(i)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const y=function(e){var t=e.date,n=e.type,i=void 0===n?"relative":n,o=e.extraTitle,l=e.tooltipProps,s=t instanceof Date?t:new Date(t),c=null==t||"Invalid Date"===s.toString()?"invalid":i;return(0,r.jsx)(a().Fragment,{children:g(c,l,o)(s)})}},66180:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(28416),i=n.n(r),a=n(95376),o=n(58826),l=n.n(o);const s=({title:e,icon:t,description:n,actions:r,...o})=>i().createElement(a.EmptyState,{variant:a.EmptyStateVariant.sm,...o},i().createElement(a.EmptyStateHeader,{titleText:i().createElement(i().Fragment,null,e),icon:i().createElement(a.EmptyStateIcon,{icon:t||l()}),headingLevel:"h4"}),i().createElement(a.EmptyStateBody,{className:"pf-v5-u-mb-md"},n.map(((e,t)=>i().createElement(i().Fragment,{key:t},e," ",i().createElement("br",null))))),i().createElement(a.EmptyStateFooter,null,r))},97246:(e,t,n)=>{"use strict";n.d(t,{M:()=>S});var r=n(28416),i=n.n(r),a=n(25387),o=n(45697),l=n.n(o),s=n(2550),c=n(75863),u=n(21081),f=n(49004),d=n(34844),p=n(15433),m=n(31055),h=n(93297),g=n(95376),y=n(12849),b=n(47826),v=n.n(b),C=n(29301),w=n(68572),F=n(66180);const S=({isCompact:e,borders:t,columns:n,rows:o,toolbarButtons:l,data:b,actionResolver:S,areActionsDisabled:k,routes:B,titlePlural:E,titleSingular:R,pagination:I,paginationProps:M,filterValue:P,isLoading:x,emptyFilters:D,setFilterValue:Z,checkedRows:T,isSelectable:A,isRowSelectable:O,fetchData:V,setCheckedItems:j,emptyProps:L,filterPlaceholder:q,rowWrapper:W,filters:$,isFilterable:H,onShowMore:N,showMoreTitle:z,onFilter:Q,onChange:U,value:Y,sortBy:K,onSort:J,isExpandable:G,onExpand:X,hideFilterChips:_,hideHeader:ee,noData:te,noDataDescription:ne,ouiaId:re,tableId:ie,containerRef:ae,textFilterRef:oe})=>{const le=(0,a.YB)();return i().createElement(r.Fragment,null,B(),!x&&0===o?.length&&0===P?.length&&$.every((({value:e})=>!e))?i().createElement(F.Z,{title:le.formatMessage(s.Z.configureItems,{items:E}),icon:v(),description:[le.formatMessage(s.Z.toConfigureUserAccess),le.formatMessage(s.Z.createAtLeastOneItem,{item:R})],actions:l()[0],...L}):(()=>{const a=`${"desc"===K?.direction?"-":""}${n[K?.index]?.key}`;return i().createElement(r.Fragment,null,i().createElement(w.ZP,{isSelectable:A,isRowSelectable:O,checkedRows:T,setCheckedItems:j,isLoading:x||te,data:b,titleSingular:R,filterValue:P,setFilterValue:Z,sortBy:a,pagination:I,paginationProps:M,fetchData:V,toolbarButtons:l,filterPlaceholder:q,filters:$,isFilterable:H,onShowMore:N,showMoreTitle:z,onFilter:Q,onChange:U,value:Y,hideFilterChips:_,tableId:ie,containerRef:ae,textFilterRef:oe}),x?i().createElement(y.Wi,{isCompact:e,items:I?.limit}):i().createElement(u.i,{canSelectAll:!1,"aria-label":`${E.toLowerCase()} table`,variant:e?c.B.compact:null,borders:t,...A&&o?.length>0&&{onSelect:(e,t,n,{uuid:r,cells:[i],requires:a})=>j((0,C.ZQ)([{uuid:r,name:i,requires:a}],t))},...G&&{onExpand:X},rows:o?.length>0?o:[{fullWidth:!0,cells:[{title:i().createElement(F.Z,{title:le.formatMessage(s.Z.noMatchingItemsFound,{items:E}),description:te&&ne?ne:[le.formatMessage(s.Z.filterMatchesNoItems,{items:E}),le.formatMessage(s.Z.tryChangingFilters)],actions:te&&ne?void 0:[i().createElement(g.EmptyStateActions,{key:"clear-filters"},i().createElement(m.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{Z(D),V({...I,offset:0,...D||{name:""}})}},le.formatMessage(s.Z.clearAllFilters)))]}),props:{colSpan:n.length}}]}],cells:n,...o?.length>0&&{actionResolver:S},className:0==o?.length?"ins-c-table-empty-state":"",areActionsDisabled:k,rowWrapper:W,sortBy:K,ouiaId:re,onSort:(e,t,n,r)=>J(e,t,n,r)},!ee&&i().createElement(f.x,null),i().createElement(d.R,null)),!I.noBottom&&i().createElement(p.Z,null,!x&&i().createElement(h.Pagination,{...(0,w.Wz)(I,V,P,K,M),variant:"bottom",dropDirection:"up"})))})())};S.propTypes={...w.ZP.propTypes,sortBy:l().shape({directions:l().string,index:l().number}),rowWrapper:l().any,isCompact:l().bool,isRowSelectable:l().func,borders:l().bool,emptyFilters:l().object,checkedRows:l().array,columns:l().array.isRequired,rows:l().array.isRequired,titlePlural:l().string,routes:l().func,actionResolver:l().func,areActionsDisabled:l().func,pagination:l().shape({noBottom:l().bool,limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),isExpandable:l().bool,onExpand:l().func,onSort:l().func,containerRef:l().node,noData:l().bool,hideFilterChips:l().bool,hideHeader:l().bool,noDataDescription:l().arrayOf(l().node),filters:l().array,tableId:l().string.isRequired},S.defaultProps={...w.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1}},68572:(e,t,n)=>{"use strict";n.d(t,{Wz:()=>p,ZP:()=>b});var r=n(28416),i=n.n(r),a=n(31611),o=n(25387),l=n(45697),s=n.n(l),c=n(2550),u=n(96486),f=n(29301),d=n(74982);const p=(e={},t,n="",r="",i)=>({...i,itemCount:e.count,perPage:e.limit,page:(0,d.wy)(e.limit,e.offset),onSetPage:(i,a)=>{t({...e,offset:(0,d.vE)(a,e.limit),name:n,orderBy:r})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,i)=>{t({offset:0,limit:i,name:n,orderBy:r})}}),m=(e,t=[],n=(()=>{}),r=[],i,a=(()=>!0))=>{const l=(0,o.YB)();return{count:t.length,items:[{title:l.formatMessage(c.Z.selectNone),onClick:()=>{n((()=>[]))}},{...!e&&r&&r.length>0?{title:l.formatMessage(c.Z.selectPage,{length:r.filter(a).length}),onClick:()=>{n((0,f.ZQ)(r,!0))}}:{}}],checked:(0,f.um)(r,t,a),onSelect:t=>{!e&&n((0,f.ZQ)(r,t))},id:i}},h=(e,t=(()=>{}),n=(()=>{}),r="",i={},a="",l,s,d,p,m,h,g,y,b,v,C)=>{const w=(0,o.YB)();return{onChange:y,value:b,items:[...d&&d.length>0?d.map((({key:a,label:o,value:l,selected:s,placeholder:y,type:b="text",groups:C,items:F,innerRef:S})=>({label:o||(0,f.RI)(a),type:b??"text",filterValues:{innerRef:S,id:`filter-by-${a}`,key:`filter-by-${a}`,placeholder:y||w.formatMessage(c.Z.filterByKey,{key:a}),value:l,selected:s,..."text"!==b?{isFilterable:p,onShowMore:m,showMoreTitle:h,onFilter:g}:{},groups:C,items:F,onChange:(e,o)=>{const l="string"==typeof o||Array.isArray(o)?o:Object.keys((0,u.pickBy)(o[""],(e=>e)));t({...r,...i,offset:0,[a]:l}),(0,f.Aq)((()=>n({...i,offset:0,orderBy:v,...d.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[a]:l}))).then((e=>(S?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,f.RI)(l||a),type:"text",filterValues:{innerRef:C,id:"filter-by-string",key:"filter-by-string",placeholder:w.formatMessage(c.Z.filterByKey,{key:l||a}),value:r,onChange:(e,r)=>{t({...i,offset:0,name:r}),(0,f.Aq)((()=>n({...i,offset:0,name:r,orderBy:v}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}],...s||[]]}},g=(e="",t,n={},r=(()=>{}),i=(()=>{}),a)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,f.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[o],l)=>{const s=(e,t,n)=>l?"group"===t||"checkbox"===t?[]:"":n!==o.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==o.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:n,type:r})=>({...e,[t]:s(n,r,t)})),{});r({...n,offset:0,name:"",...c}),i({...n,offset:0,orderBy:a,name:"",...c})}}),y=({isSelectable:e,isRowSelectable:t,checkedRows:n,setCheckedItems:r,isLoading:o,data:l,titleSingular:s,filterValue:c,setFilterValue:u,pagination:f,paginationProps:d,fetchData:y,sortBy:b,toolbarButtons:v,filterPlaceholder:C,filterItems:w,filters:F,isFilterable:S,onShowMore:k,showMoreTitle:B,onFilter:E,onChange:R,value:I,hideFilterChips:M,tableId:P,textFilterRef:x})=>i().createElement(a.Z,{...e&&{bulkSelect:m(o,n,r,l,P,t)},filterConfig:h(o,u,y,c,f,s,C,w,F,S,k,B,E,R,I,b,x),actionsConfig:{actions:v()},...!o&&{pagination:p(f,y,c,b,d)},...(c.length>0||F&&F.length>0)&&!M&&{activeFiltersConfig:g(c,F,f,u,y,b)}});y.propTypes={isSelectable:s().bool,isRowSelectable:s().func,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),sortBy:s().string,filterItems:s().arrayOf(s().object),filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func.isRequired,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,textFilterRef:s().object},y.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:d.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const b=y},45467:()=>{},32857:()=>{},28992:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/880.27a095a9cce88a9644510974d4b507f1.js.map