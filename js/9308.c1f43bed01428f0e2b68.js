(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9308,5467,459,945],{35224:(e,t,a)=>{"use strict";a.d(t,{u:()=>d,D:()=>u});var r=a(65353),n=a(28416),o=a(86478),i=a(38296);const s=e=>{var{className:t,children:a,isLeftAligned:s}=e,l=(0,r.__rest)(e,["className","children","isLeftAligned"]);return n.createElement("div",Object.assign({className:(0,i.css)(o.default.tooltipContent,s&&o.default.modifiers.textAlignLeft,t)},l),a)};s.displayName="TooltipContent";const l=e=>{var{className:t}=e,a=(0,r.__rest)(e,["className"]);return n.createElement("div",Object.assign({className:(0,i.css)(o.default.tooltipArrow,t)},a))};l.displayName="TooltipArrow";var c=a(1774);const m={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var u,f=a(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(u||(u={}));let p=1;const d=e=>{var{content:t,position:a="top",trigger:u="mouseenter focus",isVisible:d=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:y="",entryDelay:b=300,exitDelay:v=300,appendTo:E=(()=>document.body),zIndex:k=9999,minWidth:x,maxWidth:S=m.value,distance:C=15,aria:M="describedby",flipBehavior:w=["top","right","bottom","left","top","right","bottom"],id:F="pf-tooltip-"+p++,children:Z,animationDuration:T=300,triggerRef:B,"aria-live":O=(B?"polite":"off"),onTooltipHidden:I=(()=>{})}=e,L=(0,r.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const A=u.includes("mouseenter"),D=u.includes("focus"),j=u.includes("click"),P="manual"===u,[N,R]=n.useState(!1),_=n.createRef();n.useEffect((()=>{d?V():W()}),[d]);const V=()=>{R(!0)},W=()=>{R(!1)},U={top:o.default.modifiers.top,bottom:o.default.modifiers.bottom,left:o.default.modifiers.left,right:o.default.modifiers.right,"top-start":o.default.modifiers.topLeft,"top-end":o.default.modifiers.topRight,"bottom-start":o.default.modifiers.bottomLeft,"bottom-end":o.default.modifiers.bottomRight,"left-start":o.default.modifiers.leftTop,"left-end":o.default.modifiers.leftBottom,"right-start":o.default.modifiers.rightTop,"right-end":o.default.modifiers.rightBottom},$=S!==m.value,H=n.createElement("div",Object.assign({"aria-live":O,className:(0,i.css)(o.default.tooltip,y),role:"tooltip",id:F,style:{maxWidth:$?S:null},ref:_},L),n.createElement(l,null),n.createElement(s,{isLeftAligned:g},t));return n.createElement(f.Popper,{trigger:"none"!==M&&N?"describedby"===M&&Z&&Z.props&&!Z.props["aria-describedby"]?n.cloneElement(Z,{"aria-describedby":F}):"labelledby"===M&&Z.props&&!Z.props["aria-labelledby"]?n.cloneElement(Z,{"aria-labelledby":F}):Z:Z,triggerRef:B,popper:H,popperRef:_,minWidth:void 0!==x?x:"revert",appendTo:E,isVisible:N,positionModifiers:U,distance:C,placement:a,onMouseEnter:A&&V,onMouseLeave:A&&W,onPopperMouseEnter:A&&V,onPopperMouseLeave:A&&W,onFocus:D&&V,onBlur:D&&W,onDocumentClick:j&&((e,t)=>{N?W():e.target===t&&V()}),onDocumentKeyDown:P?null:e=>{P||e.key===c.yu.Escape&&N&&W()},onTriggerEnter:P?null:e=>{e.key===c.yu.Enter&&(N?W():V())},enableFlip:h,zIndex:k,flipBehavior:w,animationDuration:T,entryDelay:b,exitDelay:v,onHidden:I})};d.displayName="Tooltip"},5964:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CaretDownIcon:()=>o,CaretDownIconConfig:()=>n,default:()=>i});var r=a(40400);const n={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},o=(0,r.I)(n),i=o},86478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(49854);const r={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(85893),n=a(94184),o=a.n(n),i=a(78956);const s=function(e){var t=e.className,a=e.title,n=o()(t);return(0,r.jsx)(i.Title,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle",children:a})}},7876:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(85893),n=a(94184),o=a.n(n),i=function(){return i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};const s=function(e){var t,a=e.type,n=e.children,s=e.className,l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["type","children","className"]),c=o()(s,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,r.jsxs)("section",i({},l,{className:c,children:[" ",n," "]}))}},86556:(e,t,a)=>{var r=a(89465),n=a(77813);e.exports=function(e,t,a){(void 0!==a&&!n(e[t],a)||void 0===a&&!(t in e))&&r(e,t,a)}},28483:(e,t,a)=>{var r=a(25063)();e.exports=r},42980:(e,t,a)=>{var r=a(46384),n=a(86556),o=a(28483),i=a(59783),s=a(13218),l=a(81704),c=a(36390);e.exports=function e(t,a,m,u,f){t!==a&&o(a,(function(o,l){if(f||(f=new r),s(o))i(t,a,l,m,e,u,f);else{var p=u?u(c(t,l),o,l+"",t,a,f):void 0;void 0===p&&(p=o),n(t,l,p)}}),l)}},59783:(e,t,a)=>{var r=a(86556),n=a(64626),o=a(77133),i=a(278),s=a(38517),l=a(35694),c=a(1469),m=a(29246),u=a(44144),f=a(23560),p=a(13218),d=a(68630),g=a(36719),h=a(36390),y=a(59881);e.exports=function(e,t,a,b,v,E,k){var x=h(e,a),S=h(t,a),C=k.get(S);if(C)r(e,a,C);else{var M=E?E(x,S,a+"",e,t,k):void 0,w=void 0===M;if(w){var F=c(S),Z=!F&&u(S),T=!F&&!Z&&g(S);M=S,F||Z||T?c(x)?M=x:m(x)?M=i(x):Z?(w=!1,M=n(S,!0)):T?(w=!1,M=o(S,!0)):M=[]:d(S)||l(S)?(M=x,l(x)?M=y(x):p(x)&&!f(x)||(M=s(S))):w=!1}w&&(k.set(S,M),v(M,S,b,E,k),k.delete(S)),r(e,a,M)}}},5976:(e,t,a)=>{var r=a(6557),n=a(45357),o=a(30061);e.exports=function(e,t){return o(n(e,t,r),e+"")}},21463:(e,t,a)=>{var r=a(5976),n=a(16612);e.exports=function(e){return r((function(t,a){var r=-1,o=a.length,i=o>1?a[o-1]:void 0,s=o>2?a[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,s&&n(a[0],a[1],s)&&(i=o<3?void 0:i,o=1),t=Object(t);++r<o;){var l=a[r];l&&e(t,l,r,i)}return t}))}},25063:e=>{e.exports=function(e){return function(t,a,r){for(var n=-1,o=Object(t),i=r(t),s=i.length;s--;){var l=i[e?s:++n];if(!1===a(o[l],l,o))break}return t}}},16612:(e,t,a)=>{var r=a(77813),n=a(98612),o=a(65776),i=a(13218);e.exports=function(e,t,a){if(!i(a))return!1;var s=typeof t;return!!("number"==s?n(a)&&o(t,a.length):"string"==s&&t in a)&&r(a[t],e)}},36390:e=>{e.exports=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}},29246:(e,t,a)=>{var r=a(98612),n=a(37005);e.exports=function(e){return n(e)&&r(e)}},30236:(e,t,a)=>{var r=a(42980),n=a(21463)((function(e,t,a,n){r(e,t,a,n)}));e.exports=n},59881:(e,t,a)=>{var r=a(98363),n=a(81704);e.exports=function(e){return r(e,n(e))}},23340:(e,t,a)=>{"use strict";a.d(t,{MS:()=>o,aX:()=>r,qF:()=>n});const r=(e,t,a,r={})=>{const n=new URLSearchParams(e.search);let o=a.reduce(((e,t)=>{const a=n.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(r).forEach((e=>{const t=r[e];o={...o,[e]:Array.isArray(o[e])?[...new Set([...o[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||o[e]},Array.isArray(t)?t.forEach((t=>n.getAll(e).includes(t)||n.append(e,t))):n.get(e)||t&&n.set(e,t)})),t({pathname:e.pathname,search:n.toString()},{replace:!0}),o},n=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},o=(e,t,a)=>{const r=new URLSearchParams(e.search);Object.keys(a).forEach((e=>r.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&r.append(e,t))):t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0})}},12:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var r=a(28416),n=a.n(r),o=a(25387),i=a(45697),s=a.n(i),l=a(64380),c=a(44282),m=a.n(c),u=a(86601),f=a(2550),p=a(55140);const d=({linkDescription:e,linkTitle:t})=>{const a=(0,o.YB)(),i=(0,p.Z)(),s=i.getEnvironment(),c=i.isProd()?"":`${s}.`,{orgAdmin:d}=(0,r.useContext)(u.Z);return d?n().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(f.Z.usersDescription)} `,e,n().createElement(l.Text,{component:l.TextVariants.a,href:`https://www.${c}redhat.com/wapps/ugc/protected/usermgt/userList.html`,target:"_blank",rel:"noopener noreferrer"},t,n().createElement(m(),null)),"."):n().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(f.Z.usersDescription)} `)};d.propTypes={linkDescription:s().node,linkTitle:s().node},d.defaultProps={linkDescription:"",linkTitle:" user management list "};const g=d},24869:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(28416),n=a.n(r),o=a(55573),i=a(45697),s=a.n(i),l=a(94184),c=a.n(l);const m=({row:e,...t})=>{const{status:a}=e,r=a?.props?.["data-is-active"];return n().createElement(o.e,{className:c()("rbac__user-row",{"ins-m-inactive":!r}),row:e,...t})};m.propTypes={row:s().shape({status:s().shape({props:s().shape({"data-is-active":s().bool,data:s().shape({isActive:s().bool})})})})};const u=m},82617:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(28416),n=a.n(r),o=a(45697),i=a.n(o),s=a(62012),l=a(75629),c=a(12849);const m=e=>e?n().createElement(l.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?n().createElement(l.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&n().createElement(s.NavLink,{end:!0,to:e.to},e.title)||e.title):n().createElement(c.Vj,{key:t})))):null;m.propTypes={breadcrumbs:i().object};const u=m},66180:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(28416),n=a.n(r),o=a(95376),i=a(58826),s=a.n(i);const l=({title:e,icon:t,description:a,actions:r,...i})=>n().createElement(o.EmptyState,{variant:o.EmptyStateVariant.sm,...i},n().createElement(o.EmptyStateHeader,{titleText:n().createElement(n().Fragment,null,e),icon:n().createElement(o.EmptyStateIcon,{icon:t||s()}),headingLevel:"h4"}),n().createElement(o.EmptyStateBody,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>n().createElement(n().Fragment,{key:t},e," ",n().createElement("br",null))))),n().createElement(o.EmptyStateFooter,null,r))},68572:(e,t,a)=>{"use strict";a.d(t,{Wz:()=>p,ZP:()=>b});var r=a(28416),n=a.n(r),o=a(31611),i=a(25387),s=a(45697),l=a.n(s),c=a(2550),m=a(96486),u=a(29301),f=a(74982);const p=(e={},t,a="",r="",n)=>({...n,itemCount:e.count,perPage:e.limit,page:(0,f.wy)(e.limit,e.offset),onSetPage:(n,o)=>{t({...e,offset:(0,f.vE)(o,e.limit),name:a,orderBy:r})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,n)=>{t({offset:0,limit:n,name:a,orderBy:r})}}),d=(e,t=[],a=(()=>{}),r=[],n,o=(()=>!0))=>{const s=(0,i.YB)();return{count:t.length,items:[{title:s.formatMessage(c.Z.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&r&&r.length>0?{title:s.formatMessage(c.Z.selectPage,{length:r.filter(o).length}),onClick:()=>{a((0,u.ZQ)(r,!0))}}:{}}],checked:(0,u.um)(r,t,o),onSelect:t=>{!e&&a((0,u.ZQ)(r,t))},id:n}},g=(e,t=(()=>{}),a=(()=>{}),r="",n={},o="",s,l,f,p,d,g,h,y,b,v,E)=>{const k=(0,i.YB)();return{onChange:y,value:b,items:[...f&&f.length>0?f.map((({key:o,label:i,value:s,selected:l,placeholder:y,type:b="text",groups:E,items:x,innerRef:S})=>({label:i||(0,u.RI)(o),type:b??"text",filterValues:{innerRef:S,id:`filter-by-${o}`,key:`filter-by-${o}`,placeholder:y||k.formatMessage(c.Z.filterByKey,{key:o}),value:s,selected:l,..."text"!==b?{isFilterable:p,onShowMore:d,showMoreTitle:g,onFilter:h}:{},groups:E,items:x,onChange:(e,i)=>{const s="string"==typeof i||Array.isArray(i)?i:Object.keys((0,m.pickBy)(i[""],(e=>e)));t({...r,...n,offset:0,[o]:s}),(0,u.Aq)((()=>a({...n,offset:0,orderBy:v,...f.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[o]:s}))).then((e=>(S?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,u.RI)(s||o),type:"text",filterValues:{innerRef:E,id:"filter-by-string",key:"filter-by-string",placeholder:k.formatMessage(c.Z.filterByKey,{key:s||o}),value:r,onChange:(e,r)=>{t({...n,offset:0,name:r}),(0,u.Aq)((()=>a({...n,offset:0,name:r,orderBy:v}))).then((e=>(E?.current?.focus(),e)))},isDisabled:e}}],...l||[]]}},h=(e="",t,a={},r=(()=>{}),n=(()=>{}),o)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,u.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[i],s)=>{const l=(e,t,a)=>s?"group"===t||"checkbox"===t?[]:"":a!==i.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==i.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:r})=>({...e,[t]:l(a,r,t)})),{});r({...a,offset:0,name:"",...c}),n({...a,offset:0,orderBy:o,name:"",...c})}}),y=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:r,isLoading:i,data:s,titleSingular:l,filterValue:c,setFilterValue:m,pagination:u,paginationProps:f,fetchData:y,sortBy:b,toolbarButtons:v,filterPlaceholder:E,filterItems:k,filters:x,isFilterable:S,onShowMore:C,showMoreTitle:M,onFilter:w,onChange:F,value:Z,hideFilterChips:T,tableId:B,textFilterRef:O})=>n().createElement(o.Z,{...e&&{bulkSelect:d(i,a,r,s,B,t)},filterConfig:g(i,m,y,c,u,l,E,k,x,S,C,M,w,F,Z,b,O),actionsConfig:{actions:v()},...!i&&{pagination:p(u,y,c,b,f)},...(c.length>0||x&&x.length>0)&&!T&&{activeFiltersConfig:h(c,x,u,m,y,b)}});y.propTypes={isSelectable:l().bool,isRowSelectable:l().func,checkedRows:l().array,setCheckedItems:l().func,isLoading:l().bool,data:l().array,titleSingular:l().string,filterValue:l().oneOfType([l().array,l().string]),setFilterValue:l().func,filters:l().arrayOf(l().shape({value:l().oneOfType([l().string,l().number,l().array]),key:l().string,placeholder:l().string})),isFilterable:l().bool,onShowMore:l().func,showMoreTitle:l().string,onFilter:l().func,onChange:l().func,value:l().any,pagination:l().shape({limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),sortBy:l().string,filterItems:l().arrayOf(l().object),filterPlaceholder:l().string,isCollapsible:l().bool,fetchData:l().func.isRequired,toolbarButtons:l().func,hideFilterChips:l().bool,tableId:l().string,textFilterRef:l().object},y.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:f.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const b=y},13851:(e,t,a)=>{"use strict";a.d(t,{Q:()=>b,y:()=>v});var r=a(28416),n=a.n(r),o=a(45697),i=a.n(o),s=a(64380),l=a(86304),c=a(12849),m=a(82617),u=a(85893),f=a(94184),p=a.n(f);const d=n().createContext("light");var g=function(){return g=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},g.apply(this,arguments)};const h=function(e){var t=e.className,a=e.children,r=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children"]),n=p()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,u.jsx)(d.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var i=p()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,u.jsx)("section",g({},r,{className:"".concat(n," ").concat(i),"widget-type":"InsightsPageHeader",children:a}))}})};var y=a(39173);const b=({children:e,breadcrumbs:t})=>n().createElement(r.Fragment,null,t&&n().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},n().createElement(m.Z,{...t})),n().createElement(h,{className:"rbac-page-header"},e));b.propTypes={children:i().oneOfType([i().arrayOf(i().node),i().node]).isRequired,breadcrumbs:i().array,paddingBottom:i().bool},b.defaultProps={paddingBottom:!1};const v=({title:e,renderTitleTag:t,description:a,children:o})=>n().createElement(r.Fragment,null,n().createElement(l.Flex,null,n().createElement(l.FlexItem,{className:"pf-v5-u-mb-sm"},n().createElement(y.Z,{title:e||n().createElement(c.h2,null),className:"rbac-page-header__title"})),n().createElement(l.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&n().createElement(s.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?n().createElement(s.Text,{component:s.TextVariants.p},a):a),o);v.propTypes={title:i().node,renderTitleTag:i().func,description:i().node,children:i().oneOfType([i().node,i().arrayOf(i().node)])}},39820:(e,t,a)=>{"use strict";a.d(t,{H:()=>p});var r=a(28416),n=a.n(r),o=a(78173),i=a(91693),s=a.n(i),l=a(77029),c=a.n(l),m=a(2550),u=a(14289),f=a(64756);const p=(e,t=[],a,i=[],l=!1)=>t?.reduce(((t,{username:p,is_active:d,email:g,first_name:h,last_name:y,is_org_admin:b})=>[...t,{uuid:p,cells:[b?n().createElement(r.Fragment,null,n().createElement(s(),{key:"yes-icon",className:"pf-v5-u-mr-sm"}),n().createElement("span",{key:"yes"},a.formatMessage(m.Z.yes))):n().createElement(r.Fragment,null,n().createElement(c(),{key:"no-icon",className:"pf-v5-u-mr-sm"}),n().createElement("span",{key:"no"},a.formatMessage(m.Z.no))),{title:e?n().createElement(f.Z,{to:u.Z["user-detail"].link.replace(":username",p)},p.toString()):p.toString()},g,h,y,{title:n().createElement(o.Label,{key:"status",color:d?"green":"grey"},a.formatMessage(d?m.Z.active:m.Z.inactive)),props:{"data-is-active":d}}],selected:!!l&&Boolean(i?.find?.((({uuid:e})=>e===p)))}]),[])},56068:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var r=a(28416),n=a.n(r),o=a(23539),i=a(55140),s=a(25387),l=a(13851),c=a(7876),m=a(86706),u=a(62012),f=a(29301),p=a(2550),d=a(5697),g=a(75863),h=a(51630),y=a(8128),b=a(15173),v=a(75521),E=a(72449),k=a(15433),x=a(31055),S=a(93297),C=a(95376),M=a(12849),w=a(47826),F=a.n(w),Z=a(68572),T=a(66180);const B=({columns:e,isSelectable:t,isLoading:a,noData:o,data:i,title:l,filterValue:c,setFilterValue:m,pagination:u,fetchData:f,toolbarButtons:w,filterPlaceholder:F,filters:B,isFilterable:O,onShowMore:I,showMoreTitle:L,onFilter:A,onChange:D,value:j,hideFilterChips:P,tableId:N,textFilterRef:R,rows:_,sortBy:V,onSort:W,isCompact:U,borders:$,ouiaId:H,noDataDescription:z,emptyFilters:Y})=>{const q=V?.index?`${"desc"===V?.direction?"-":""}${e[V.index]?.key}`:void 0,K=(0,s.YB)();return n().createElement(r.Fragment,null,n().createElement(Z.ZP,{isSelectable:t,isLoading:a||o,data:i,titleSingular:l.singular,filterValue:c,setFilterValue:m,sortBy:q,pagination:u,fetchData:f,toolbarButtons:w,filterPlaceholder:F,filters:B,isFilterable:O,onShowMore:I,showMoreTitle:L,onFilter:A,onChange:D,value:j,hideFilterChips:P,tableId:N,textFilterRef:R}),a?n().createElement(M.Wi,{isCompact:U,items:u?.limit}):n().createElement(d.i,{"aria-label":`${l.plural.toLowerCase()} table`,variant:U?g.B.compact:void 0,borders:$,ouiaId:H},n().createElement(h.h,null,n().createElement(y.Tr,null,e.map(((e,t)=>n().createElement(b.Th,{key:t,sort:e?.sortable?{columnIndex:t,sortBy:V,onSort:W}:void 0},e.title))))),n().createElement(v.p,null,_?.length>0?_?.map(((t,a)=>n().createElement(y.Tr,{key:a},t.cells.map(((t,a)=>n().createElement(E.Td,{key:a,dataLabel:e[a].title},function(e){return"object"==typeof e&&void 0!==e.title}(t)?t.title:t)))))):n().createElement(y.Tr,null,n().createElement(E.Td,{colSpan:e.length},n().createElement(T.Z,{title:K.formatMessage(p.Z.noMatchingItemsFound,{items:l.plural}),description:o&&z?z:[K.formatMessage(p.Z.filterMatchesNoItems,{items:l.plural}),K.formatMessage(p.Z.tryChangingFilters)],actions:o&&z?void 0:[n().createElement(C.EmptyStateActions,{key:"clear-filters"},n().createElement(x.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{m(Y),f({...u,offset:0,...Y||{name:""}})}},K.formatMessage(p.Z.clearAllFilters)))]}))))),!u.noBottom&&n().createElement(k.Z,null,!a&&n().createElement(S.Pagination,{...(0,Z.Wz)(u,f,c,q),variant:"bottom",dropDirection:"up"})))},O=({isCompact:e=!1,borders:t,columns:a,rows:o,data:i,toolbarButtons:l,title:c,pagination:m,filterValue:u,isLoading:f,emptyFilters:d,setFilterValue:g,isSelectable:h=!1,fetchData:y,emptyProps:b,filterPlaceholder:v,filters:E,isFilterable:k,onShowMore:x,showMoreTitle:S,onFilter:C,onChange:M,value:w,sortBy:Z,onSort:O,hideFilterChips:I,noData:L,noDataDescription:A,ouiaId:D,tableId:j,textFilterRef:P})=>{const N=(0,s.YB)();return n().createElement(r.Fragment,null,!f&&0===o?.length&&0===u?.length&&E.every((({value:e})=>!e))?n().createElement(T.Z,{title:N.formatMessage(p.Z.configureItems,{items:c.plural}),icon:F(),description:[N.formatMessage(p.Z.toConfigureUserAccess),N.formatMessage(p.Z.createAtLeastOneItem,{item:c.singular})],actions:!!l&&l()[0],..."object"==typeof b?b:{}}):n().createElement(B,{columns:a,isSelectable:h,isLoading:f,noData:L,data:i,title:c,filterValue:u,setFilterValue:g,pagination:m,fetchData:y,toolbarButtons:l,filterPlaceholder:v,filters:E,isFilterable:k,onShowMore:x,showMoreTitle:S,onFilter:C,onChange:M,value:w,hideFilterChips:I,tableId:j,textFilterRef:P,rows:o,sortBy:Z,onSort:O,isCompact:e,borders:t,ouiaId:D,noDataDescription:A,emptyFilters:d}))};var I=a(2981),L=a(24869),A=a(74982),D=a(23340),j=a(86601),P=a(39820);const N=({userLinks:e,usesMetaInURL:t,props:a})=>{const o=(0,s.YB)(),i=(0,u.useNavigate)(),l=(0,u.useLocation)(),c=(0,m.useDispatch)(),{orgAdmin:d}=(0,r.useContext)(j.Z),g=(0,r.useRef)(null),h=(0,m.useSelector)((({userReducer:{users:e}})=>({limit:(t?e.pagination.limit:e.meta.limit)??(d?A.HE:A.he).limit,offset:(t?e.pagination.offset:e.meta.offset)??(d?A.HE:A.he).offset,count:(t?e.pagination.count:e.meta.count)??0,redirected:t&&e.pagination.redirected,itemCount:0}))),{users:y,isLoading:b,stateFilters:v}=(0,m.useSelector)((({userReducer:{users:{data:e,filters:t={}},isUserDataLoading:a}})=>({users:e?.map?.((e=>({...e,uuid:e.username}))),isLoading:a,stateFilters:l.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}}))),E=(0,r.useCallback)((e=>c((0,I.u)(e))),[c]),k=(0,r.useCallback)((e=>c((0,I.a)(e))),[c]),x=[{title:o.formatMessage(p.Z.orgAdministrator),key:"org-admin"},{title:o.formatMessage(p.Z.username),key:"username",sortable:!0},{title:o.formatMessage(p.Z.email)},{title:o.formatMessage(p.Z.firstName)},{title:o.formatMessage(p.Z.lastName)},{title:o.formatMessage(p.Z.status)}],[S,C]=(0,r.useState)({index:1,direction:"asc"}),[M,w]=(0,r.useState)(t?v:{username:"",email:"",status:[o.formatMessage(p.Z.active)]});return(0,r.useEffect)((()=>{t&&(0,A.oG)(l,i,h.limit,h.offset)}),[h.offset,h.limit,h.count,h.redirected]),(0,r.useEffect)((()=>{const{limit:e,offset:a}=(0,A.rj)(l,i,h),r=t?(0,D.aX)(l,i,["username","email","status"],M):{status:M.status};void 0===r.status||Array.isArray(r.status)||(r.status=[r.status]),w(r),E({...(0,f.jl)({limit:e,offset:a,filters:r}),usesMetaInURL:t})}),[]),(0,r.useEffect)((()=>{t&&((0,A.Zc)(l)||(0,A.oG)(l,i,h.limit,h.offset),Object.values(M).some((e=>e?.length>0))&&!(0,D.qF)(l,Object.keys(M))&&(0,D.aX)(l,i,Object.keys(M),M))})),n().createElement(O,{isSelectable:!1,isCompact:!1,borders:!1,columns:x,rows:(0,P.H)(e,y,o),sortBy:S,onSort:(e,a,r)=>{const n=`${"desc"===r?"-":""}${x[a].key}`;C({index:a,direction:r}),E({...h,filters:M,usesMetaInURL:t,orderBy:n})},ouiaId:"users-table",fetchData:e=>{const a=Object.prototype.hasOwnProperty.call(e,"status")?e.status:M.status,{username:r,email:n,count:o,limit:s,offset:c,orderBy:m}=e;Promise.resolve(E({...(0,f.jl)({count:o,limit:s,offset:c,orderBy:m,filters:{username:r,email:n,status:a}}),usesMetaInURL:t})).then((()=>{null!==g&&null!==g.current&&g.current.focus()})),(0,A.oG)(l,i,s||0,c||0),t&&(0,D.MS)(l,i,{username:r,email:n,status:a})},emptyFilters:{username:"",email:"",status:[]},setFilterValue:({username:e,email:a,status:r})=>{var n;n={username:void 0===e?M.username:e,email:void 0===a?M.email:a,status:void 0===r||r===M.status?M.status:r},t&&k(n),w({username:"",...n})},isLoading:b,pagination:h,rowWrapper:L.Z,title:{singular:o.formatMessage(p.Z.user),plural:o.formatMessage(p.Z.users).toLowerCase()},filters:[{key:"username",value:"object"==typeof M?.username||void 0===M?.username?"":M.username,placeholder:o.formatMessage(p.Z.filterByKey,{key:o.formatMessage(p.Z.username).toLowerCase()}),innerRef:g},{key:"email",value:M.email||"",placeholder:o.formatMessage(p.Z.filterByKey,{key:o.formatMessage(p.Z.email).toLowerCase()}),innerRef:g},{key:"status",value:M.status||[],label:o.formatMessage(p.Z.status),type:"checkbox",items:[{label:o.formatMessage(p.Z.active),value:"Active"},{label:o.formatMessage(p.Z.inactive),value:"Inactive"}]}],tableId:"users-list",...a})};var R=a(12);const _=()=>{const e=(0,s.YB)(),t=(0,r.useContext)(j.Z),{appNavClick:a}=(0,i.Z)(),m=n().createElement(R.Z,{linkDescription:e.formatMessage(p.Z.addNewUsersText)});return(0,r.useEffect)((()=>{a({id:"users",secondaryNav:!0})}),[]),n().createElement(o.Stack,null,n().createElement(o.StackItem,null,n().createElement(l.Q,null,n().createElement(l.y,{title:e.formatMessage(p.Z.users),description:m}))),n().createElement(o.StackItem,null,n().createElement(c.Z,{type:"content",id:"users"},n().createElement(N,{userLinks:t.userAccessAdministrator||t.orgAdmin,props:{isSelectable:!1,isCompact:!1},usesMetaInURL:!0}))))}},45467:()=>{},32857:()=>{},28992:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9308.0c65a001e4b497373851bfb04e3f3dca.js.map