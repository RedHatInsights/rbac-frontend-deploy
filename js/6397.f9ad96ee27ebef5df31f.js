(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6397,459],{41435:(e,t,a)=>{"use strict";a.d(t,{Dl:()=>i,dw:()=>l,e4:()=>o,ir:()=>r});var r,l,n=a(28416);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(l||(l={}));const i=n.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),o=n.createContext({keyHandler:null,sendRef:null})},63456:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(85893),l=a(94184),n=a.n(l),i=a(28416);const o=a.n(i)().createContext("light");var s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},s.apply(this,arguments)};const c=function(e){var t=e.className,a=e.children,l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a}(e,["className","children"]),i=n()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,r.jsx)(o.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var c=n()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,r.jsx)("section",s({},l,{className:"".concat(i," ").concat(c),"widget-type":"InsightsPageHeader",children:a}))}})}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(85893),l=a(94184),n=a.n(l),i=a(78956);const o=function(e){var t=e.className,a=e.title,l=n()(t);return(0,r.jsx)(i.Title,{headingLevel:"h1",size:"2xl",className:l,"widget-type":"InsightsPageHeaderTitle",children:a})}},29693:(e,t,a)=>{"use strict";a.d(t,{C$:()=>u,pj:()=>c,xk:()=>s});var r=a(85564),l=a.n(r),n=a(75465);const i=(0,n.zX)(),o=(0,n.bD)(),s=async({name:e,perPage:t,page:a,options:r}={})=>await i.apiResourceTypeGetResourceTypeGroupsList(e,t,a,r),c=async e=>await o.apiGroupGetGroupsById(e),u=e=>e?l()(e.map((e=>e.attributeFilter.value))):[]},82617:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(28416),l=a.n(r),n=a(45697),i=a.n(n),o=a(62012),s=a(75629),c=a(12849);const u=e=>e?l().createElement(s.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?l().createElement(s.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&l().createElement(o.NavLink,{end:!0,to:e.to},e.title)||e.title):l().createElement(c.Vj,{key:t})))):null;u.propTypes={breadcrumbs:i().object};const m=u},66180:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(28416),l=a.n(r),n=a(95376),i=a(58826),o=a.n(i);const s=({title:e,icon:t,description:a,actions:r,...i})=>l().createElement(n.EmptyState,{variant:n.EmptyStateVariant.sm,...i},l().createElement(n.EmptyStateHeader,{titleText:l().createElement(l().Fragment,null,e),icon:l().createElement(n.EmptyStateIcon,{icon:t||o()}),headingLevel:"h4"}),l().createElement(n.EmptyStateBody,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>l().createElement(l().Fragment,{key:t},e," ",l().createElement("br",null))))),l().createElement(n.EmptyStateFooter,null,r))},97246:(e,t,a)=>{"use strict";a.d(t,{M:()=>F});var r=a(28416),l=a.n(r),n=a(25387),i=a(45697),o=a.n(i),s=a(2550),c=a(65220),u=a(75863),m=a(21081),d=a(49004),p=a(34844),f=a(15433),g=a(12913),h=a(31055),b=a(93297),y=a(95376),v=a(47826),C=a.n(v),E=a(29301),R=a(68572),k=a(66180);const F=({className:e,isCompact:t,borders:a,columns:i,rows:o,toolbarButtons:v,data:F,actionResolver:S,areActionsDisabled:w,routes:I,titlePlural:x,titleSingular:Z,pagination:B,paginationProps:P,filterValue:M,isLoading:T,emptyFilters:D,setFilterValue:O,checkedRows:L,isSelectable:N,isRowSelectable:A,fetchData:V,setCheckedItems:j,emptyProps:_,filterPlaceholder:q,rowWrapper:H,filters:G,isFilterable:$,onShowMore:W,showMoreTitle:z,onFilter:Q,onChange:Y,value:K,sortBy:U,onSort:X,isExpandable:J,onExpand:ee,hideFilterChips:te,hideHeader:ae,noData:re,noDataDescription:le,ouiaId:ne,tableId:ie,containerRef:oe,textFilterRef:se,toolbarChildren:ce})=>{const ue=(0,n.YB)(),me=(0,c.useFlag)("platform.rbac.itless");return l().createElement("div",{className:e},I(),!T&&0===o?.length&&0===M?.length&&G.every((({value:e})=>!e))?l().createElement(k.Z,{title:ue.formatMessage(s.Z.configureItems,{items:x}),icon:C(),description:[ue.formatMessage(s.Z.toConfigureUserAccess),ue.formatMessage(s.Z.createAtLeastOneItem,{item:Z})],actions:v()[0],..._}):(()=>{const e=`${"desc"===U?.direction?"-":""}${i[U?.index]?.key}`;return l().createElement(r.Fragment,null,l().createElement(R.ZP,{isSelectable:N,isRowSelectable:A,checkedRows:L,setCheckedItems:j,isLoading:T||re,data:F,titleSingular:Z,filterValue:M,setFilterValue:O,sortBy:e,pagination:B,paginationProps:P,fetchData:V,toolbarButtons:v,filterPlaceholder:q,filters:G,isFilterable:$,onShowMore:W,showMoreTitle:z,onFilter:Q,onChange:Y,value:K,hideFilterChips:te,tableId:ie,containerRef:oe,textFilterRef:se,toolbarChildren:ce}),T?l().createElement(g.Z,{variant:t?u.B.compact:void 0,rows:B?.limit,columns:i.map((e=>e.title))}):l().createElement(m.i,{canSelectAll:!1,"aria-label":`${x.toLowerCase()} table`,variant:t?u.B.compact:null,borders:a,...N&&o?.length>0&&{onSelect:(e,t,a,{uuid:r,cells:[l],requires:n})=>j((0,E.ZQ)([{uuid:r,name:l,requires:n,...me&&{username:F[a]?.username}}],t))},...J&&{onExpand:ee},rows:o?.length>0?o:[{fullWidth:!0,cells:[{title:l().createElement(k.Z,{title:ue.formatMessage(s.Z.noMatchingItemsFound,{items:x}),description:re&&le?le:[ue.formatMessage(s.Z.filterMatchesNoItems,{items:x}),ue.formatMessage(s.Z.tryChangingFilters)],actions:re&&le?void 0:[l().createElement(y.EmptyStateActions,{key:"clear-filters"},l().createElement(h.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{O(D),V({...B,offset:0,...D||{name:""}})}},ue.formatMessage(s.Z.clearAllFilters)))]}),props:{colSpan:i.length}}]}],cells:i,...o?.length>0&&{actionResolver:S},className:0==o?.length?"ins-c-table-empty-state":"",areActionsDisabled:w,rowWrapper:H,sortBy:U,ouiaId:ne,onSort:(e,t,a,r)=>X(e,t,a,r)},!ae&&l().createElement(d.x,null),l().createElement(p.R,null)),!B.noBottom&&l().createElement(f.Z,null,!T&&l().createElement(b.Pagination,{...(0,R.Wz)(B,V,M,U,P),variant:"bottom",dropDirection:"up"})))})())};F.propTypes={...R.ZP.propTypes,sortBy:o().shape({directions:o().string,index:o().number}),className:o().string,rowWrapper:o().any,isCompact:o().bool,isRowSelectable:o().func,borders:o().bool,emptyFilters:o().object,checkedRows:o().array,columns:o().array.isRequired,rows:o().array.isRequired,titlePlural:o().string,routes:o().func,actionResolver:o().func,areActionsDisabled:o().func,pagination:o().shape({noBottom:o().bool,limit:o().number,offset:o().number,count:o().number}),paginationProps:o().shape({toggleTemplate:o().func,isCompact:o().bool}),isExpandable:o().bool,onExpand:o().func,onSort:o().func,containerRef:o().node,noData:o().bool,hideFilterChips:o().bool,hideHeader:o().bool,noDataDescription:o().arrayOf(o().node),filters:o().array,tableId:o().string.isRequired,toolbarChildren:o().func},F.defaultProps={...R.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1,toolbarChildren:()=>null}},68572:(e,t,a)=>{"use strict";a.d(t,{Wz:()=>p,ZP:()=>y});var r=a(28416),l=a.n(r),n=a(31611),i=a(25387),o=a(45697),s=a.n(o),c=a(2550),u=a(96486),m=a(29301),d=a(74982);const p=(e={},t,a="",r="",l)=>({...l,itemCount:e.count,perPage:e.limit,page:(0,d.wy)(e.limit,e.offset),onSetPage:(l,n)=>{t({...e,offset:(0,d.vE)(n,e.limit),name:a,orderBy:r})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,l)=>{t({offset:0,limit:l,name:a,orderBy:r})}}),f=(e,t=[],a=(()=>{}),r=[],l,n=(()=>!0))=>{const o=(0,i.YB)();return{count:t.length,items:[{title:o.formatMessage(c.Z.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&r&&r.length>0?{title:o.formatMessage(c.Z.selectPage,{length:r.filter(n).length}),onClick:()=>{a((0,m.ZQ)(r,!0))}}:{}}],checked:(0,m.um)(r,t,n),onSelect:t=>{!e&&a((0,m.ZQ)(r,t))},id:l}},g=(e,t=(()=>{}),a=(()=>{}),r="",l={},n="",o,s,d,p,f,g,h,b,y,v,C)=>{const E=(0,i.YB)();return{onChange:b,value:y,items:[...d&&d.length>0?d.map((({key:n,label:i,value:o,selected:s,placeholder:b,type:y="text",groups:C,items:R,innerRef:k})=>({label:i||(0,m.RI)(n),type:y??"text",filterValues:{innerRef:k,id:`filter-by-${n}`,key:`filter-by-${n}`,placeholder:b||E.formatMessage(c.Z.filterByKey,{key:n}),value:o,selected:s,..."text"!==y?{isFilterable:p,onShowMore:f,showMoreTitle:g,onFilter:h}:{},groups:C,items:R,onChange:(e,i)=>{const o="string"==typeof i||Array.isArray(i)?i:Object.keys((0,u.pickBy)(i[""],(e=>e)));t({...r,...l,offset:0,[n]:o}),(0,m.Aq)((()=>a({...l,offset:0,orderBy:v,...d.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[n]:o}))).then((e=>(k?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,m.RI)(o||n),type:"text",filterValues:{innerRef:C,id:"filter-by-string",key:"filter-by-string",placeholder:E.formatMessage(c.Z.filterByKey,{key:o||n}),value:r,onChange:(e,r)=>{t({...l,offset:0,name:r}),(0,m.Aq)((()=>a({...l,offset:0,name:r,orderBy:v}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}],...s||[]]}},h=(e="",t,a={},r=(()=>{}),l=(()=>{}),n)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,m.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[i],o)=>{const s=(e,t,a)=>o?"group"===t||"checkbox"===t?[]:"":a!==i.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==i.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:r})=>({...e,[t]:s(a,r,t)})),{});r({...a,offset:0,name:"",...c}),l({...a,offset:0,orderBy:n,name:"",...c})}}),b=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:r,isLoading:i,data:o,titleSingular:s,filterValue:c,setFilterValue:u,pagination:m,paginationProps:d,fetchData:b,sortBy:y,toolbarButtons:v,filterPlaceholder:C,filterItems:E,filters:R,isFilterable:k,onShowMore:F,showMoreTitle:S,onFilter:w,onChange:I,value:x,hideFilterChips:Z,tableId:B,textFilterRef:P,toolbarChildren:M})=>l().createElement(n.Z,{...e&&{bulkSelect:f(i,a,r,o,B,t)},filterConfig:g(i,u,b,c,m,s,C,E,R,k,F,S,w,I,x,y,P),actionsConfig:{actions:v()},...!i&&{pagination:p(m,b,c,y,d)},...(c.length>0||R&&R.length>0)&&!Z&&{activeFiltersConfig:h(c,R,m,u,b,y)}},M());b.propTypes={isSelectable:s().bool,isRowSelectable:s().func,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),sortBy:s().string,filterItems:s().arrayOf(s().object),filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func.isRequired,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,textFilterRef:s().object,toolbarChildren:s().func},b.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:d.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1,toolbarChildren:()=>null};const y=b},2086:(e,t,a)=>{"use strict";a.d(t,{Q:()=>p,y:()=>f});var r=a(28416),l=a.n(r),n=a(45697),i=a.n(n),o=a(64380),s=a(86304),c=a(12849),u=a(82617),m=a(63456),d=a(39173);const p=({children:e,breadcrumbs:t})=>l().createElement(r.Fragment,null,t&&l().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},l().createElement(u.Z,{...t})),l().createElement(m.Z,{className:"rbac-page-header"},e));p.propTypes={children:i().oneOfType([i().arrayOf(i().node),i().node]).isRequired,breadcrumbs:i().array,paddingBottom:i().bool},p.defaultProps={paddingBottom:!1};const f=({title:e,renderTitleTag:t,description:a,children:n})=>l().createElement(r.Fragment,null,l().createElement(s.Flex,null,l().createElement(s.FlexItem,{className:"pf-v5-u-mb-sm"},l().createElement(d.Z,{title:e||l().createElement(c.h2,null),className:"rbac-page-header__title"})),l().createElement(s.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&l().createElement(o.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?l().createElement(o.Text,{component:o.TextVariants.p},a):a),n);f.propTypes={title:i().node,renderTitleTag:i().func,description:i().node,children:i().oneOfType([i().node,i().arrayOf(i().node)])}},66254:(e,t,a)=>{"use strict";a.d(t,{M:()=>i,f:()=>n});var r=a(71079),l=a(29693);const n=(e,t)=>({type:r.YS,meta:{permissions:e,config:t},payload:l.xk(t)}),i=e=>({type:r.WV,meta:{groupsIds:e},payload:l.pj(e.filter((e=>e?.length>0)))})},60966:(e,t,a)=>{"use strict";a.d(t,{Hg:()=>o,Rt:()=>l,_T:()=>n,u3:()=>i});var r=a(2550);const l=e=>e.split(":")[0].includes("inventory"),n=e=>l(e)&&e.split(":")[1].includes("hosts"),i=e=>e.split(":")[0].includes("cost-management"),o=(e,t,a)=>{let l=e.filter(Boolean);return n(t)&&e.includes(null)&&l.unshift(a.formatMessage(r.Z.ungroupedSystems)),l.reduce(((e,t)=>[...e,{cells:[t]}]),[])}},53224:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>F});var r=a(28416),l=a.n(r),n=a(64380),i=a(91848),o=a(31055),s=a(86706),c=a(62012),u=a(97246),m=a(60966),d=a(2086),p=a(39173),f=a(12849),g=a(74982),h=a(13563),b=a(14289),y=a(64756),v=a(29301),C=a(25387),E=a(66254),R=a(29693),k=a(2550);const F=()=>{const e=(0,C.YB)(),[t,a]=(0,r.useState)({pagination:{...g.he,filter:""}}),{pagination:F,filter:S}=t,w=(0,s.useDispatch)(),{roleId:I,permissionId:x}=(0,c.useParams)(),Z=(0,r.useMemo)((()=>(0,m.Rt)(x)),[x]),{role:B,permission:P,isRoleLoading:M,rolesPagination:T,rolesFilters:D,inventoryGroupsDetails:O,isLoadingInventoryDetails:L}=(0,s.useSelector)((e=>({role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?{...e.roleReducer.selectedRole?.access.find((e=>e.permission===x))}:{},isRoleLoading:e.roleReducer.isRecordLoading,rolesPagination:e.roleReducer?.roles?.pagination||g.he,rolesFilters:e.roleReducer?.roles?.filters||{},inventoryGroupsDetails:e.inventoryReducer?.inventoryGroupsDetails,isLoadingInventoryDetails:e.inventoryReducer?.isLoading})),s.shallowEqual);(0,r.useEffect)((()=>{w((0,h.fp)(I)).then((({value:e})=>{var t;Z&&(t=(0,R.C$)(e?.access?.find((e=>e.permission===x))?.resourceDefinitions),w((0,E.M)(t)))}))}),[I]),(0,r.useEffect)((()=>{a({...t,pagination:{...t.pagination,count:B.access?B.access.length:0}})}),[B]);const N=(0,r.useMemo)((()=>!M&&!L&&(0,R.C$)(P.resourceDefinitions).map((e=>Z&&null!=e?O?.[e]?.name:e))||[]),[x,M,L]),A=(0,r.useMemo)((()=>N.filter((e=>!S||e?.includes(S)||null===e))),[N,S]),V=(0,r.useMemo)((()=>A.slice(F.offset,F.offset+F.limit)),[A,F.offset,F.offset]);return l().createElement(r.Fragment,null,l().createElement(d.Q,{breadcrumbs:[{title:e.formatMessage(k.Z.roles),to:(0,v.zk)((0,y.n)(b.Z.roles.link),T,D)},{title:M?void 0:B&&(B.display_name||B.name),to:(0,y.n)(b.Z["role-detail"].link.replace(":roleId",I))},{title:x,isActive:!0}]},l().createElement(i.Level,null,l().createElement(i.LevelItem,null,l().createElement(p.Z,{title:x||l().createElement(f.h2,null),className:"rbac-page-header__title"})))),l().createElement("section",{className:"pf-v5-c-page__main-section rbac-c-role__permissions"},l().createElement(n.TextContent,null,l().createElement(n.Text,{component:n.TextVariants.h1},e.formatMessage(k.Z.definedResources))),l().createElement(u.M,{columns:[{}],rows:(0,m.Hg)(V,x,e),data:V,filterValue:S,fetchData:({limit:e,offset:r,name:l})=>a({...t,filter:l,pagination:{...t.pagination,limit:e,offset:r}}),isCompact:!0,setFilterValue:({name:e})=>a({...t,filter:e}),toolbarButtons:()=>B.system?[]:[l().createElement(r.Fragment,{key:"edit-resource-definitions"},l().createElement(y.Z,{to:b.Z["role-detail-permission-edit"].link.replace(":roleId",I).replace(":permissionId",x)},l().createElement(o.Button,{variant:"primary","aria-label":"Edit"},e.formatMessage(k.Z.edit))))],isLoading:M||Z&&L,pagination:{...F,count:A.length},titlePlural:e.formatMessage(k.Z.resources).toLowerCase(),titleSingular:e.formatMessage(k.Z.resource).toLowerCase(),hideHeader:!0,tableId:"role-resource-definitions"}),l().createElement(r.Suspense,null,l().createElement(c.Outlet,{context:{cancelRoute:b.Z["role-detail-permission"].link.replace(":roleId",I).replace(":permissionId",x)}}))))}},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6397.7426f1b6246d01edc23cdfa4cb68d78a.js.map