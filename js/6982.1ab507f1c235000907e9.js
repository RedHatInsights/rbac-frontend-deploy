(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6982,5467,459,945],{35224:(e,t,a)=>{"use strict";a.d(t,{u:()=>d,D:()=>u});var r=a(65353),s=a(28416),i=a(86478),o=a(38296);const n=e=>{var{className:t,children:a,isLeftAligned:n}=e,l=(0,r.__rest)(e,["className","children","isLeftAligned"]);return s.createElement("div",Object.assign({className:(0,o.css)(i.default.tooltipContent,n&&i.default.modifiers.textAlignLeft,t)},l),a)};n.displayName="TooltipContent";const l=e=>{var{className:t}=e,a=(0,r.__rest)(e,["className"]);return s.createElement("div",Object.assign({className:(0,o.css)(i.default.tooltipArrow,t)},a))};l.displayName="TooltipArrow";var c=a(1774);const m={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var u,p=a(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(u||(u={}));let f=1;const d=e=>{var{content:t,position:a="top",trigger:u="mouseenter focus",isVisible:d=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:y="",entryDelay:b=300,exitDelay:v=300,appendTo:E=(()=>document.body),zIndex:k=9999,minWidth:S,maxWidth:C=m.value,distance:M=15,aria:F="describedby",flipBehavior:Z=["top","right","bottom","left","top","right","bottom"],id:w="pf-tooltip-"+f++,children:x,animationDuration:T=300,triggerRef:B,"aria-live":I=(B?"polite":"off"),onTooltipHidden:O=(()=>{})}=e,L=(0,r.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const A=u.includes("mouseenter"),D=u.includes("focus"),P=u.includes("click"),N="manual"===u,[R,j]=s.useState(!1),_=s.createRef();s.useEffect((()=>{d?V():W()}),[d]);const V=()=>{j(!0)},W=()=>{j(!1)},U={top:i.default.modifiers.top,bottom:i.default.modifiers.bottom,left:i.default.modifiers.left,right:i.default.modifiers.right,"top-start":i.default.modifiers.topLeft,"top-end":i.default.modifiers.topRight,"bottom-start":i.default.modifiers.bottomLeft,"bottom-end":i.default.modifiers.bottomRight,"left-start":i.default.modifiers.leftTop,"left-end":i.default.modifiers.leftBottom,"right-start":i.default.modifiers.rightTop,"right-end":i.default.modifiers.rightBottom},$=C!==m.value,H=s.createElement("div",Object.assign({"aria-live":I,className:(0,o.css)(i.default.tooltip,y),role:"tooltip",id:w,style:{maxWidth:$?C:null},ref:_},L),s.createElement(l,null),s.createElement(n,{isLeftAligned:g},t));return s.createElement(p.Popper,{trigger:"none"!==F&&R?"describedby"===F&&x&&x.props&&!x.props["aria-describedby"]?s.cloneElement(x,{"aria-describedby":w}):"labelledby"===F&&x.props&&!x.props["aria-labelledby"]?s.cloneElement(x,{"aria-labelledby":w}):x:x,triggerRef:B,popper:H,popperRef:_,minWidth:void 0!==S?S:"revert",appendTo:E,isVisible:R,positionModifiers:U,distance:M,placement:a,onMouseEnter:A&&V,onMouseLeave:A&&W,onPopperMouseEnter:A&&V,onPopperMouseLeave:A&&W,onFocus:D&&V,onBlur:D&&W,onDocumentClick:P&&((e,t)=>{R?W():e.target===t&&V()}),onDocumentKeyDown:N?null:e=>{N||e.key===c.yu.Escape&&R&&W()},onTriggerEnter:N?null:e=>{e.key===c.yu.Enter&&(R?W():V())},enableFlip:h,zIndex:k,flipBehavior:Z,animationDuration:T,entryDelay:b,exitDelay:v,onHidden:O})};d.displayName="Tooltip"},5964:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CaretDownIcon:()=>i,CaretDownIconConfig:()=>s,default:()=>o});var r=a(40400);const s={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},i=(0,r.I)(s),o=i},86478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(49854);const r={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},63456:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(85893),s=a(94184),i=a.n(s),o=a(28416);const n=a.n(o)().createContext("light");var l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},l.apply(this,arguments)};const c=function(e){var t=e.className,a=e.children,s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a}(e,["className","children"]),o=i()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,r.jsx)(n.Consumer,{children:function(e){var t,n;void 0===e&&(e="light");var c=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((n={})["pf-m-light"]="light"===e,n));return(0,r.jsx)("section",l({},s,{className:"".concat(o," ").concat(c),"widget-type":"InsightsPageHeader",children:a}))}})}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(85893),s=a(94184),i=a.n(s),o=a(78956);const n=function(e){var t=e.className,a=e.title,s=i()(t);return(0,r.jsx)(o.Title,{headingLevel:"h1",size:"2xl",className:s,"widget-type":"InsightsPageHeaderTitle",children:a})}},7876:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(85893),s=a(94184),i=a.n(s),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},o.apply(this,arguments)};const n=function(e){var t,a=e.type,s=e.children,n=e.className,l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a}(e,["type","children","className"]),c=i()(n,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,r.jsxs)("section",o({},l,{className:c,children:[" ",s," "]}))}},23340:(e,t,a)=>{"use strict";a.d(t,{MS:()=>i,aX:()=>r,qF:()=>s});const r=(e,t,a,r={})=>{const s=new URLSearchParams(e.search);let i=a.reduce(((e,t)=>{const a=s.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(r).forEach((e=>{const t=r[e];i={...i,[e]:Array.isArray(i[e])?[...new Set([...i[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||i[e]},Array.isArray(t)?t.forEach((t=>s.getAll(e).includes(t)||s.append(e,t))):s.get(e)||t&&s.set(e,t)})),t({pathname:e.pathname,search:s.toString()},{replace:!0}),i},s=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},i=(e,t,a)=>{const r=new URLSearchParams(e.search);Object.keys(a).forEach((e=>r.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&r.append(e,t))):t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0})}},12:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var r=a(28416),s=a.n(r),i=a(25387),o=a(45697),n=a.n(o),l=a(64380),c=a(44282),m=a.n(c),u=a(86601),p=a(2550),f=a(55140);const d=({linkDescription:e,linkTitle:t})=>{const a=(0,i.YB)(),o=(0,f.Z)(),n=o.getEnvironment(),c=o.isProd()?"":`${n}.`,{orgAdmin:d}=(0,r.useContext)(u.Z);return d?s().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(p.Z.usersDescription)} `,e,s().createElement(l.Text,{component:l.TextVariants.a,href:`https://www.${c}redhat.com/wapps/ugc/protected/usermgt/userList.html`,target:"_blank",rel:"noopener noreferrer"},t,s().createElement(m(),null)),"."):s().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(p.Z.usersDescription)} `)};d.propTypes={linkDescription:n().node,linkTitle:n().node},d.defaultProps={linkDescription:"",linkTitle:" user management list "};const g=d},24869:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(28416),s=a.n(r),i=a(55573),o=a(45697),n=a.n(o),l=a(94184),c=a.n(l);const m=({row:e,...t})=>{const{status:a}=e,r=a?.props?.["data-is-active"];return s().createElement(i.e,{className:c()("rbac__user-row",{"ins-m-inactive":!r}),row:e,...t})};m.propTypes={row:n().shape({status:n().shape({props:n().shape({"data-is-active":n().bool,data:n().shape({isActive:n().bool})})})})};const u=m},82617:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(28416),s=a.n(r),i=a(45697),o=a.n(i),n=a(62012),l=a(75629),c=a(12849);const m=e=>e?s().createElement(l.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?s().createElement(l.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&s().createElement(n.NavLink,{end:!0,to:e.to},e.title)||e.title):s().createElement(c.Vj,{key:t})))):null;m.propTypes={breadcrumbs:o().object};const u=m},66180:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(28416),s=a.n(r),i=a(95376),o=a(58826),n=a.n(o);const l=({title:e,icon:t,description:a,actions:r,...o})=>s().createElement(i.EmptyState,{variant:i.EmptyStateVariant.sm,...o},s().createElement(i.EmptyStateHeader,{titleText:s().createElement(s().Fragment,null,e),icon:s().createElement(i.EmptyStateIcon,{icon:t||n()}),headingLevel:"h4"}),s().createElement(i.EmptyStateBody,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>s().createElement(s().Fragment,{key:t},e," ",s().createElement("br",null))))),s().createElement(i.EmptyStateFooter,null,r))},68572:(e,t,a)=>{"use strict";a.d(t,{Wz:()=>f,ZP:()=>b});var r=a(28416),s=a.n(r),i=a(31611),o=a(25387),n=a(45697),l=a.n(n),c=a(2550),m=a(96486),u=a(29301),p=a(74982);const f=(e={},t,a="",r="",s)=>({...s,itemCount:e.count,perPage:e.limit,page:(0,p.wy)(e.limit,e.offset),onSetPage:(s,i)=>{t({...e,offset:(0,p.vE)(i,e.limit),name:a,orderBy:r})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,s)=>{t({offset:0,limit:s,name:a,orderBy:r})}}),d=(e,t=[],a=(()=>{}),r=[],s,i=(()=>!0))=>{const n=(0,o.YB)();return{count:t.length,items:[{title:n.formatMessage(c.Z.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&r&&r.length>0?{title:n.formatMessage(c.Z.selectPage,{length:r.filter(i).length}),onClick:()=>{a((0,u.ZQ)(r,!0))}}:{}}],checked:(0,u.um)(r,t,i),onSelect:t=>{!e&&a((0,u.ZQ)(r,t))},id:s}},g=(e,t=(()=>{}),a=(()=>{}),r="",s={},i="",n,l,p,f,d,g,h,y,b,v,E)=>{const k=(0,o.YB)();return{onChange:y,value:b,items:[...p&&p.length>0?p.map((({key:i,label:o,value:n,selected:l,placeholder:y,type:b="text",groups:E,items:S,innerRef:C})=>({label:o||(0,u.RI)(i),type:b??"text",filterValues:{innerRef:C,id:`filter-by-${i}`,key:`filter-by-${i}`,placeholder:y||k.formatMessage(c.Z.filterByKey,{key:i}),value:n,selected:l,..."text"!==b?{isFilterable:f,onShowMore:d,showMoreTitle:g,onFilter:h}:{},groups:E,items:S,onChange:(e,o)=>{const n="string"==typeof o||Array.isArray(o)?o:Object.keys((0,m.pickBy)(o[""],(e=>e)));t({...r,...s,offset:0,[i]:n}),(0,u.Aq)((()=>a({...s,offset:0,orderBy:v,...p.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[i]:n}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,u.RI)(n||i),type:"text",filterValues:{innerRef:E,id:"filter-by-string",key:"filter-by-string",placeholder:k.formatMessage(c.Z.filterByKey,{key:n||i}),value:r,onChange:(e,r)=>{t({...s,offset:0,name:r}),(0,u.Aq)((()=>a({...s,offset:0,name:r,orderBy:v}))).then((e=>(E?.current?.focus(),e)))},isDisabled:e}}],...l||[]]}},h=(e="",t,a={},r=(()=>{}),s=(()=>{}),i)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,u.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[o],n)=>{const l=(e,t,a)=>n?"group"===t||"checkbox"===t?[]:"":a!==o.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==o.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:r})=>({...e,[t]:l(a,r,t)})),{});r({...a,offset:0,name:"",...c}),s({...a,offset:0,orderBy:i,name:"",...c})}}),y=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:r,isLoading:o,data:n,titleSingular:l,filterValue:c,setFilterValue:m,pagination:u,paginationProps:p,fetchData:y,sortBy:b,toolbarButtons:v,filterPlaceholder:E,filterItems:k,filters:S,isFilterable:C,onShowMore:M,showMoreTitle:F,onFilter:Z,onChange:w,value:x,hideFilterChips:T,tableId:B,textFilterRef:I})=>s().createElement(i.Z,{...e&&{bulkSelect:d(o,a,r,n,B,t)},filterConfig:g(o,m,y,c,u,l,E,k,S,C,M,F,Z,w,x,b,I),actionsConfig:{actions:v()},...!o&&{pagination:f(u,y,c,b,p)},...(c.length>0||S&&S.length>0)&&!T&&{activeFiltersConfig:h(c,S,u,m,y,b)}});y.propTypes={isSelectable:l().bool,isRowSelectable:l().func,checkedRows:l().array,setCheckedItems:l().func,isLoading:l().bool,data:l().array,titleSingular:l().string,filterValue:l().oneOfType([l().array,l().string]),setFilterValue:l().func,filters:l().arrayOf(l().shape({value:l().oneOfType([l().string,l().number,l().array]),key:l().string,placeholder:l().string})),isFilterable:l().bool,onShowMore:l().func,showMoreTitle:l().string,onFilter:l().func,onChange:l().func,value:l().any,pagination:l().shape({limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),sortBy:l().string,filterItems:l().arrayOf(l().object),filterPlaceholder:l().string,isCollapsible:l().bool,fetchData:l().func.isRequired,toolbarButtons:l().func,hideFilterChips:l().bool,tableId:l().string,textFilterRef:l().object},y.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:p.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const b=y},2086:(e,t,a)=>{"use strict";a.d(t,{Q:()=>f,y:()=>d});var r=a(28416),s=a.n(r),i=a(45697),o=a.n(i),n=a(64380),l=a(86304),c=a(12849),m=a(82617),u=a(63456),p=a(39173);const f=({children:e,breadcrumbs:t})=>s().createElement(r.Fragment,null,t&&s().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},s().createElement(m.Z,{...t})),s().createElement(u.Z,{className:"rbac-page-header"},e));f.propTypes={children:o().oneOfType([o().arrayOf(o().node),o().node]).isRequired,breadcrumbs:o().array,paddingBottom:o().bool},f.defaultProps={paddingBottom:!1};const d=({title:e,renderTitleTag:t,description:a,children:i})=>s().createElement(r.Fragment,null,s().createElement(l.Flex,null,s().createElement(l.FlexItem,{className:"pf-v5-u-mb-sm"},s().createElement(p.Z,{title:e||s().createElement(c.h2,null),className:"rbac-page-header__title"})),s().createElement(l.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&s().createElement(n.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?s().createElement(n.Text,{component:n.TextVariants.p},a):a),i);d.propTypes={title:o().node,renderTitleTag:o().func,description:o().node,children:o().oneOfType([o().node,o().arrayOf(o().node)])}},39820:(e,t,a)=>{"use strict";a.d(t,{H:()=>f});var r=a(28416),s=a.n(r),i=a(78173),o=a(91693),n=a.n(o),l=a(77029),c=a.n(l),m=a(2550),u=a(14289),p=a(64756);const f=(e,t=[],a,o=[],l=!1)=>t?.reduce(((t,{username:f,is_active:d,email:g,first_name:h,last_name:y,is_org_admin:b})=>[...t,{uuid:f,cells:[b?s().createElement(r.Fragment,null,s().createElement(n(),{key:"yes-icon",className:"pf-v5-u-mr-sm"}),s().createElement("span",{key:"yes"},a.formatMessage(m.Z.yes))):s().createElement(r.Fragment,null,s().createElement(c(),{key:"no-icon",className:"pf-v5-u-mr-sm"}),s().createElement("span",{key:"no"},a.formatMessage(m.Z.no))),{title:e?s().createElement(p.Z,{to:u.Z["user-detail"].link.replace(":username",f)},f.toString()):f.toString()},g,h,y,{title:s().createElement(i.Label,{key:"status",color:d?"green":"grey"},a.formatMessage(d?m.Z.active:m.Z.inactive)),props:{"data-is-active":d}}],selected:!!l&&Boolean(o?.find?.((({uuid:e})=>e===f)))}]),[])},56068:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var r=a(28416),s=a.n(r),i=a(23539),o=a(55140),n=a(25387),l=a(2086),c=a(7876),m=a(86706),u=a(62012),p=a(29301),f=a(2550),d=a(5697),g=a(75863),h=a(51630),y=a(8128),b=a(15173),v=a(75521),E=a(72449),k=a(15433),S=a(31055),C=a(93297),M=a(95376),F=a(12849),Z=a(47826),w=a.n(Z),x=a(68572),T=a(66180);const B=({columns:e,isSelectable:t,isLoading:a,noData:i,data:o,title:l,filterValue:c,setFilterValue:m,pagination:u,fetchData:p,toolbarButtons:Z,filterPlaceholder:w,filters:B,isFilterable:I,onShowMore:O,showMoreTitle:L,onFilter:A,onChange:D,value:P,hideFilterChips:N,tableId:R,textFilterRef:j,rows:_,sortBy:V,onSort:W,isCompact:U,borders:$,ouiaId:H,noDataDescription:z,emptyFilters:Y})=>{const q=V?.index?`${"desc"===V?.direction?"-":""}${e[V.index]?.key}`:void 0,K=(0,n.YB)();return s().createElement(r.Fragment,null,s().createElement(x.ZP,{isSelectable:t,isLoading:a||i,data:o,titleSingular:l.singular,filterValue:c,setFilterValue:m,sortBy:q,pagination:u,fetchData:p,toolbarButtons:Z,filterPlaceholder:w,filters:B,isFilterable:I,onShowMore:O,showMoreTitle:L,onFilter:A,onChange:D,value:P,hideFilterChips:N,tableId:R,textFilterRef:j}),a?s().createElement(F.Wi,{isCompact:U,items:u?.limit}):s().createElement(d.i,{"aria-label":`${l.plural.toLowerCase()} table`,variant:U?g.B.compact:void 0,borders:$,ouiaId:H},s().createElement(h.h,null,s().createElement(y.Tr,null,e.map(((e,t)=>s().createElement(b.Th,{key:t,sort:e?.sortable?{columnIndex:t,sortBy:V,onSort:W}:void 0},e.title))))),s().createElement(v.p,null,_?.length>0?_?.map(((t,a)=>s().createElement(y.Tr,{key:a},t.cells.map(((t,a)=>s().createElement(E.Td,{key:a,dataLabel:e[a].title},function(e){return"object"==typeof e&&void 0!==e.title}(t)?t.title:t)))))):s().createElement(y.Tr,null,s().createElement(E.Td,{colSpan:e.length},s().createElement(T.Z,{title:K.formatMessage(f.Z.noMatchingItemsFound,{items:l.plural}),description:i&&z?z:[K.formatMessage(f.Z.filterMatchesNoItems,{items:l.plural}),K.formatMessage(f.Z.tryChangingFilters)],actions:i&&z?void 0:[s().createElement(M.EmptyStateActions,{key:"clear-filters"},s().createElement(S.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{m(Y),p({...u,offset:0,...Y||{name:""}})}},K.formatMessage(f.Z.clearAllFilters)))]}))))),!u.noBottom&&s().createElement(k.Z,null,!a&&s().createElement(C.Pagination,{...(0,x.Wz)(u,p,c,q),variant:"bottom",dropDirection:"up"})))},I=({isCompact:e=!1,borders:t,columns:a,rows:i,data:o,toolbarButtons:l,title:c,pagination:m,filterValue:u,isLoading:p,emptyFilters:d,setFilterValue:g,isSelectable:h=!1,fetchData:y,emptyProps:b,filterPlaceholder:v,filters:E,isFilterable:k,onShowMore:S,showMoreTitle:C,onFilter:M,onChange:F,value:Z,sortBy:x,onSort:I,hideFilterChips:O,noData:L,noDataDescription:A,ouiaId:D,tableId:P,textFilterRef:N})=>{const R=(0,n.YB)();return s().createElement(r.Fragment,null,!p&&0===i?.length&&0===u?.length&&E.every((({value:e})=>!e))?s().createElement(T.Z,{title:R.formatMessage(f.Z.configureItems,{items:c.plural}),icon:w(),description:[R.formatMessage(f.Z.toConfigureUserAccess),R.formatMessage(f.Z.createAtLeastOneItem,{item:c.singular})],actions:!!l&&l()[0],..."object"==typeof b?b:{}}):s().createElement(B,{columns:a,isSelectable:h,isLoading:p,noData:L,data:o,title:c,filterValue:u,setFilterValue:g,pagination:m,fetchData:y,toolbarButtons:l,filterPlaceholder:v,filters:E,isFilterable:k,onShowMore:S,showMoreTitle:C,onFilter:M,onChange:F,value:Z,hideFilterChips:O,tableId:P,textFilterRef:N,rows:i,sortBy:x,onSort:I,isCompact:e,borders:t,ouiaId:D,noDataDescription:A,emptyFilters:d}))};var O=a(2981),L=a(24869),A=a(74982),D=a(23340),P=a(86601),N=a(39820);const R=({userLinks:e,usesMetaInURL:t,props:a})=>{const i=(0,n.YB)(),o=(0,u.useNavigate)(),l=(0,u.useLocation)(),c=(0,m.useDispatch)(),{orgAdmin:d}=(0,r.useContext)(P.Z),g=(0,r.useRef)(null),h=(0,m.useSelector)((({userReducer:{users:e}})=>({limit:(t?e.pagination.limit:e.meta.limit)??(d?A.HE:A.he).limit,offset:(t?e.pagination.offset:e.meta.offset)??(d?A.HE:A.he).offset,count:(t?e.pagination.count:e.meta.count)??0,redirected:t&&e.pagination.redirected,itemCount:0}))),{users:y,isLoading:b,stateFilters:v}=(0,m.useSelector)((({userReducer:{users:{data:e,filters:t={}},isUserDataLoading:a}})=>({users:e?.map?.((e=>({...e,uuid:e.username}))),isLoading:a,stateFilters:l.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}}))),E=(0,r.useCallback)((e=>c((0,O.u)(e))),[c]),k=(0,r.useCallback)((e=>c((0,O.a)(e))),[c]),S=[{title:i.formatMessage(f.Z.orgAdministrator),key:"org-admin"},{title:i.formatMessage(f.Z.username),key:"username",sortable:!0},{title:i.formatMessage(f.Z.email)},{title:i.formatMessage(f.Z.firstName)},{title:i.formatMessage(f.Z.lastName)},{title:i.formatMessage(f.Z.status)}],[C,M]=(0,r.useState)({index:1,direction:"asc"}),[F,Z]=(0,r.useState)(t?v:{username:"",email:"",status:[i.formatMessage(f.Z.active)]});return(0,r.useEffect)((()=>{t&&(0,A.oG)(l,o,h.limit,h.offset)}),[h.offset,h.limit,h.count,h.redirected]),(0,r.useEffect)((()=>{const{limit:e,offset:a}=(0,A.rj)(l,o,h),r=t?(0,D.aX)(l,o,["username","email","status"],F):{status:F.status};void 0===r.status||Array.isArray(r.status)||(r.status=[r.status]),Z(r),E({...(0,p.jl)({limit:e,offset:a,filters:r}),usesMetaInURL:t})}),[]),(0,r.useEffect)((()=>{t&&((0,A.Zc)(l)||(0,A.oG)(l,o,h.limit,h.offset),Object.values(F).some((e=>e?.length>0))&&!(0,D.qF)(l,Object.keys(F))&&(0,D.aX)(l,o,Object.keys(F),F))})),s().createElement(I,{isSelectable:!1,isCompact:!1,borders:!1,columns:S,rows:(0,N.H)(e,y,i),sortBy:C,onSort:(e,a,r)=>{const s=`${"desc"===r?"-":""}${S[a].key}`;M({index:a,direction:r}),E({...h,filters:F,usesMetaInURL:t,orderBy:s})},ouiaId:"users-table",fetchData:e=>{const a=Object.prototype.hasOwnProperty.call(e,"status")?e.status:F.status,{username:r,email:s,count:i,limit:n,offset:c,orderBy:m}=e;Promise.resolve(E({...(0,p.jl)({count:i,limit:n,offset:c,orderBy:m,filters:{username:r,email:s,status:a}}),usesMetaInURL:t})).then((()=>{null!==g&&null!==g.current&&g.current.focus()})),(0,A.oG)(l,o,n||0,c||0),t&&(0,D.MS)(l,o,{username:r,email:s,status:a})},emptyFilters:{username:"",email:"",status:[]},setFilterValue:({username:e,email:a,status:r})=>{var s;s={username:void 0===e?F.username:e,email:void 0===a?F.email:a,status:void 0===r||r===F.status?F.status:r},t&&k(s),Z({username:"",...s})},isLoading:b,pagination:h,rowWrapper:L.Z,title:{singular:i.formatMessage(f.Z.user),plural:i.formatMessage(f.Z.users).toLowerCase()},filters:[{key:"username",value:"object"==typeof F?.username||void 0===F?.username?"":F.username,placeholder:i.formatMessage(f.Z.filterByKey,{key:i.formatMessage(f.Z.username).toLowerCase()}),innerRef:g},{key:"email",value:F.email||"",placeholder:i.formatMessage(f.Z.filterByKey,{key:i.formatMessage(f.Z.email).toLowerCase()}),innerRef:g},{key:"status",value:F.status||[],label:i.formatMessage(f.Z.status),type:"checkbox",items:[{label:i.formatMessage(f.Z.active),value:"Active"},{label:i.formatMessage(f.Z.inactive),value:"Inactive"}]}],tableId:"users-list",...a})};var j=a(12);const _=()=>{const e=(0,n.YB)(),t=(0,r.useContext)(P.Z),{appNavClick:a}=(0,o.Z)(),m=s().createElement(j.Z,{linkDescription:e.formatMessage(f.Z.addNewUsersText)});return(0,r.useEffect)((()=>{a({id:"users",secondaryNav:!0})}),[]),s().createElement(i.Stack,null,s().createElement(i.StackItem,null,s().createElement(l.Q,null,s().createElement(l.y,{title:e.formatMessage(f.Z.users),description:m}))),s().createElement(i.StackItem,null,s().createElement(c.Z,{type:"content",id:"users"},s().createElement(R,{userLinks:t.userAccessAdministrator||t.orgAdmin,props:{isSelectable:!1,isCompact:!1},usesMetaInURL:!0}))))}},45467:()=>{},32857:()=>{},28992:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6982.d362ce14657ac59ed194da8a039049ac.js.map