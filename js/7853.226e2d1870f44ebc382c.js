(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[7853],{63767:(e,t,r)=>{"use strict";r.d(t,{A:()=>b});var n=r(74848),a=r(93345),i=r.n(a),o=r(59304),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},s=36e5,c=24*s,u=30*c,d=365*c,f=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},p=[{rightBound:1/0,description:function(e){return f(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return f(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return f(Math.round(e/c),"day")}},{rightBound:c,description:function(e){return f(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return f(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},h=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return p.reduce((function(t,r){return r.rightBound>Date.now()-e.getTime()?r.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},g=function(e,t,r){return{exact:function(t){return h(e)(t)},onlyDate:function(t){return h(e)(t)},relative:function(a){return function(e,t,r,a){return void 0===a&&(a=""),(0,n.jsx)(o.Tooltip,l({},r,{content:(0,n.jsxs)("div",{children:[a,e]}),children:t}))}(h("exact")(a),(0,n.jsx)("span",{children:h(e)(a)}),t,r)},invalid:function(){return"Invalid date"}}[e]};const b=function(e){var t=e.date,r=e.type,a=void 0===r?"relative":r,o=e.extraTitle,l=e.tooltipProps,s=t instanceof Date?t:new Date(t),c=null==t||"Invalid Date"===s.toString()?"invalid":a;return(0,n.jsx)(i().Fragment,{children:g(c,l,o)(s)})}},54073:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(93345),a=r.n(n),i=r(55086),o=r(31971),l=r.n(o);const s=({title:e,icon:t,description:r,actions:n,...o})=>a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.sm,...o},a().createElement(i.EmptyStateHeader,{titleText:a().createElement(a().Fragment,null,e),icon:a().createElement(i.EmptyStateIcon,{icon:t||l()}),headingLevel:"h4"}),a().createElement(i.EmptyStateBody,{className:"pf-v5-u-mb-md"},r.map(((e,t)=>a().createElement(a().Fragment,{key:t},e," ",a().createElement("br",null))))),a().createElement(i.EmptyStateFooter,null,n))},38694:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var n=r(93345),a=r.n(n),i=r(8604),o=r(5556),l=r.n(o),s=r(40335),c=r(63219),u=r(73683),d=r(68877),f=r(1104),p=r(97681),m=r(54377),h=r(47143),g=r(79994),b=r(58510),y=r(55086),v=r(31137),C=r.n(v),F=r(42134),S=r(23995),A=r(54073);const k=({className:e,isCompact:t,borders:r,columns:o,rows:l,toolbarButtons:v,data:k,actionResolver:w,areActionsDisabled:E,routes:B,titlePlural:M,titleSingular:R,pagination:x,paginationProps:D,filterValue:I,isLoading:P,emptyFilters:T,setFilterValue:V,checkedRows:j,isSelectable:O,isRowSelectable:q,fetchData:L,setCheckedItems:H,emptyProps:N,filterPlaceholder:W,rowWrapper:$,filters:z,isFilterable:U,onShowMore:K,showMoreTitle:J,onFilter:X,onChange:Z,value:G,sortBy:Q,onSort:Y,isExpandable:_,onExpand:ee,hideFilterChips:te,hideHeader:re,noData:ne,noDataDescription:ae,ouiaId:ie,tableId:oe,containerRef:le,textFilterRef:se,toolbarChildren:ce})=>{const ue=(0,i.tz)(),de=(0,c.useFlag)("platform.rbac.itless");return a().createElement("div",{className:e},B(),!P&&0===l?.length&&0===I?.length&&z.every((({value:e})=>!e))?a().createElement(A.A,{title:ue.formatMessage(s.A.configureItems,{items:M}),icon:C(),description:[ue.formatMessage(s.A.toConfigureUserAccess),ue.formatMessage(s.A.createAtLeastOneItem,{item:R})],actions:v()[0],...N}):(()=>{const e=`${"desc"===Q?.direction?"-":""}${o[Q?.index]?.key}`;return a().createElement(n.Fragment,null,a().createElement(S.Ay,{isSelectable:O,isRowSelectable:q,checkedRows:j,setCheckedItems:H,isLoading:P||ne,data:k,titleSingular:R,filterValue:I,setFilterValue:V,sortBy:e,pagination:x,paginationProps:D,fetchData:L,toolbarButtons:v,filterPlaceholder:W,filters:z,isFilterable:U,onShowMore:K,showMoreTitle:J,onFilter:X,onChange:Z,value:G,hideFilterChips:te,tableId:oe,containerRef:le,textFilterRef:se,toolbarChildren:ce}),P?a().createElement(h.A,{variant:t?u.a.compact:void 0,rows:x?.limit,columns:o.map((e=>e.title))}):a().createElement(d.X,{canSelectAll:!1,"aria-label":`${M.toLowerCase()} table`,variant:t?u.a.compact:null,borders:r,...O&&l?.length>0&&{onSelect:(e,t,r,{uuid:n,cells:[a],requires:i})=>H((0,F.vH)([{uuid:n,name:a,requires:i,...de&&{username:k[r]?.username}}],t))},..._&&{onExpand:ee},rows:l?.length>0?l:[{fullWidth:!0,cells:[{title:a().createElement(A.A,{title:ue.formatMessage(s.A.noMatchingItemsFound,{items:M}),description:ne&&ae?ae:[ue.formatMessage(s.A.filterMatchesNoItems,{items:M}),ue.formatMessage(s.A.tryChangingFilters)],actions:ne&&ae?void 0:[a().createElement(y.EmptyStateActions,{key:"clear-filters"},a().createElement(g.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{V(T),L({...x,offset:0,...T||{name:""}})}},ue.formatMessage(s.A.clearAllFilters)))]}),props:{colSpan:o.length}}]}],cells:o,...l?.length>0&&{actionResolver:w},className:0==l?.length?"ins-c-table-empty-state":"",areActionsDisabled:E,rowWrapper:$,sortBy:Q,ouiaId:ie,onSort:(e,t,r,n)=>Y(e,t,r,n)},!re&&a().createElement(f.A,null),a().createElement(p.B,null)),!x.noBottom&&a().createElement(m.A,null,!P&&a().createElement(b.Pagination,{...(0,S.WM)(x,L,I,Q,D),variant:"bottom",dropDirection:"up"})))})())};k.propTypes={...S.Ay.propTypes,sortBy:l().shape({directions:l().string,index:l().number}),className:l().string,rowWrapper:l().any,isCompact:l().bool,isRowSelectable:l().func,borders:l().bool,emptyFilters:l().object,checkedRows:l().array,columns:l().array.isRequired,rows:l().array.isRequired,titlePlural:l().string,routes:l().func,actionResolver:l().func,areActionsDisabled:l().func,pagination:l().shape({noBottom:l().bool,limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),isExpandable:l().bool,onExpand:l().func,onSort:l().func,containerRef:l().node,noData:l().bool,hideFilterChips:l().bool,hideHeader:l().bool,noDataDescription:l().arrayOf(l().node),filters:l().array,tableId:l().string.isRequired,toolbarChildren:l().func},k.defaultProps={...S.Ay.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1,toolbarChildren:()=>null}},23995:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>y,WM:()=>p});var n=r(93345),a=r.n(n),i=r(44344),o=r(8604),l=r(5556),s=r.n(l),c=r(40335),u=r(2543),d=r(42134),f=r(61361);const p=(e={},t,r="",n="",a)=>({...a,itemCount:e.count,perPage:e.limit,page:(0,f.mq)(e.limit,e.offset),onSetPage:(a,i)=>{t({...e,offset:(0,f.gj)(i,e.limit),name:r,orderBy:n})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,a)=>{t({offset:0,limit:a,name:r,orderBy:n})}}),m=(e,t=[],r=()=>{},n=[],a,i=()=>!0)=>{const l=(0,o.tz)();return{count:t.length,items:[{title:l.formatMessage(c.A.selectNone),onClick:()=>{r((()=>[]))}},{...!e&&n&&n.length>0?{title:l.formatMessage(c.A.selectPage,{length:n.filter(i).length}),onClick:()=>{r((0,d.vH)(n,!0))}}:{}}],checked:(0,d.A9)(n,t,i),onSelect:t=>{!e&&r((0,d.vH)(n,t))},id:a}},h=(e,t=()=>{},r=()=>{},n="",a={},i="",l,s,f,p,m,h,g,b,y,v,C)=>{const F=(0,o.tz)();return{onChange:b,value:y,items:[...f&&f.length>0?f.map((({key:i,label:o,value:l,selected:s,placeholder:b,type:y="text",groups:C,items:S,innerRef:A})=>({label:o||(0,d.tt)(i),type:y??"text",filterValues:{innerRef:A,id:`filter-by-${i}`,key:`filter-by-${i}`,placeholder:b||F.formatMessage(c.A.filterByKey,{key:i}),value:l,selected:s,..."text"!==y?{isFilterable:p,onShowMore:m,showMoreTitle:h,onFilter:g}:{},groups:C,items:S,onChange:(e,o)=>{const l="string"==typeof o||Array.isArray(o)?o:Object.keys((0,u.pickBy)(o[""],(e=>e)));t({...n,...a,offset:0,[i]:l}),(0,d.sq)((()=>r({...a,offset:0,orderBy:v,...f.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[i]:l}))).then((e=>(A?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,d.tt)(l||i),type:"text",filterValues:{innerRef:C,id:"filter-by-string",key:"filter-by-string",placeholder:F.formatMessage(c.A.filterByKey,{key:l||i}),value:n,onChange:(e,n)=>{t({...a,offset:0,name:n}),(0,d.sq)((()=>r({...a,offset:0,name:n,orderBy:v}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}],...s||[]]}},g=(e="",t,r={},n=()=>{},a=()=>{},i)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,d.tt)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[o],l)=>{const s=(e,t,r)=>l?"group"===t||"checkbox"===t?[]:"":r!==o.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==o.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:r,type:n})=>({...e,[t]:s(r,n,t)})),{});n({...r,offset:0,name:"",...c}),a({...r,offset:0,orderBy:i,name:"",...c})}}),b=({isSelectable:e,isRowSelectable:t,checkedRows:r,setCheckedItems:n,isLoading:o,data:l,titleSingular:s,filterValue:c,setFilterValue:u,pagination:d,paginationProps:f,fetchData:b,sortBy:y,toolbarButtons:v,filterPlaceholder:C,filterItems:F,filters:S,isFilterable:A,onShowMore:k,showMoreTitle:w,onFilter:E,onChange:B,value:M,hideFilterChips:R,tableId:x,textFilterRef:D,toolbarChildren:I})=>a().createElement(i.A,{...e&&{bulkSelect:m(o,r,n,l,x,t)},filterConfig:h(o,u,b,c,d,s,C,F,S,A,k,w,E,B,M,y,D),actionsConfig:{actions:v()},...!o&&{pagination:p(d,b,c,y,f)},...(c.length>0||S&&S.length>0)&&!R&&{activeFiltersConfig:g(c,S,d,u,b,y)}},I());b.propTypes={isSelectable:s().bool,isRowSelectable:s().func,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),sortBy:s().string,filterItems:s().arrayOf(s().object),filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func.isRequired,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,textFilterRef:s().object,toolbarChildren:s().func},b.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:f.L6,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1,toolbarChildren:()=>null};const y=b},2580:()=>{}}]);